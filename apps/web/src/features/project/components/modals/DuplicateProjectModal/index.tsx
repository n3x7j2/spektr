import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Stack } from '@mui/material';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { modals } from '@spektr/modals';
import { ProjectDto } from '@spektr/rest';
import { map } from 'lodash';
import Router from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { TextField } from '~/components';
import { useCloneProject, useGetProjectCloneItemNodes } from '~/hooks/api';

type FormValues = {
  projectSourceId: string;
  newProjectName: string;
  newProjectNumber: string;
  cloneItems: number[];
  isNotGenerationCards: boolean;
};

const validationSchema = Yup.object({
  projectSourceId: Yup.string().label('Source Project ID').required(),
  newProjectName: Yup.string().label('New Project Name').required(),
});

const defaultValues: FormValues = {
  projectSourceId: '',
  newProjectName: '',
  newProjectNumber: '',
  cloneItems: [],
  isNotGenerationCards: false,
};

const defaultColumns: ColumnDef[] = [
  {
    name: 'name',
    title: 'Name',
  },
];

interface DuplicateProjectModalProps {
  project: ProjectDto;
}

const DuplicateProjectModal = ({ project }: DuplicateProjectModalProps) => {
  const { data: items = [], isLoading: isLoadingItems } = useGetProjectCloneItemNodes();
  const { mutate: cloneProject, data: createdProject, isLoading } = useCloneProject();

  const [treeViewExpandedRows, setTreeViewExpandedRows] = useState<RowId[]>([]);

  const {
    control,
    setFocus,
    setValue,
    formState: { errors },
    trigger,
    getValues,
    watch,
  } = useForm({
    defaultValues: { ...defaultValues, projectSourceId: project.id || '' },
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    criteriaMode: 'firstError',
  });

  const watchCloneItems = watch('cloneItems');
  const selectedRows = useMemo(() => map(watchCloneItems, (i) => Number(i) - 1), [watchCloneItems]);

  useEffect(() => setTreeViewExpandedRows(map(items, (i) => i.id)), [items]);

  useEffect(() => {
    setFocus('newProjectName');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRowsSelect = (rowIds: RowId[]) => {
    setValue(
      'cloneItems',
      map(rowIds, (i) => Number(i) + 1),
    );
  };

  const handleClose = () => {
    modals.closeAll();
  };

  const handleConfirm = async () => {
    const isValid = await trigger();
    if (isValid) {
      cloneProject({ body: getValues() });
    }
  };

  useEffect(() => {
    if (createdProject?.id) {
      handleClose();
      Router.push(`/projects/${createdProject.id}/overview`);
    }
  }, [createdProject?.id]);

  return (
    <>
      <Box>Enter New Project Name and select project entities you would like to duplicate to new project.</Box>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={8}>
          <TextField label="Source Project Name" value={project.projectName || ''} readOnly fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Source Project Number" value={project.projectNumber || ''} readOnly fullWidth />
        </Grid>
        <Grid item xs={8}>
          <Controller
            name="newProjectName"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField
                {...restProps}
                inputRef={ref}
                label="New Project Name *"
                error={!!errors.newProjectName}
                title={errors.newProjectName?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="newProjectNumber"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField
                {...restProps}
                inputRef={ref}
                label="New Project Number"
                error={!!errors.newProjectNumber}
                title={errors.newProjectNumber?.message}
                readOnly
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            rows={items}
            defaultColumns={defaultColumns}
            getRowId={(row) => row.id}
            treeViewEnabled
            treeViewColumn="name"
            treeViewExpandedRows={treeViewExpandedRows}
            onTreeViewExpandedRows={setTreeViewExpandedRows}
            multiSelect
            selectedRows={selectedRows}
            onRowsSelect={handleRowsSelect}
            height={430}
          />
        </Grid>
      </Grid>
      <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-between', pb: 1, mt: 3 }}>
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{
            backgroundColor: '#f1f3f4',
            color: '#5e6366',
            minWidth: '190px',
            '&:hover': {
              backgroundColor: '#d9d9d9',
              color: '#5e6366',
            },
          }}
          disabled={isLoading}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          disableElevation
          disabled={isLoading}
          sx={{ minWidth: '190px', ml: 2 }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Stack>
    </>
  );
};

export default DuplicateProjectModal;
