import { QueryParams } from '@spektr/common';
import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

import { GridAutocompleteField } from '~/components/editors/components';
import { useGetLookupInventoryItems } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import { useIsService } from '../../hooks';

const InventoryItemEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;
  const { popperPlacement = 'bottom-start' as const } = column as any;
  const { pid: projectId } = useQueryParams(QueryParams.ProjectId);

  const [isService] = useIsService();
  const { data: items = [] } = useGetLookupInventoryItems(projectId, isService);

  return (
    <GridAutocompleteField
      value={value || ''}
      options={items}
      onChange={(e, value) => onValueChange(value?.value)}
      componentsProps={{
        popper: {
          sx: {
            width: 'fit-content !important',
            '& .MuiAutocomplete-listbox': {
              py: 0,
            },
            '& .MuiAutocomplete-noOptions': {
              py: '6px',
              fontSize: 13,
            },
          },
          placement: popperPlacement,
        },
      }}
      {...restProps}
    />
  );
};

export default InventoryItemEditor;
