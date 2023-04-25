import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

import { GridAutocompleteField } from '~/components/editors/components';
import { useGetEnumItems } from '~/hooks/api';

const ScheduleStatusEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;
  const { popperWidth, popperPlacement = 'bottom-end' as const } = column as any;

  const { data: statuses = [] } = useGetEnumItems('ProjectScheduleStatus');

  return (
    <GridAutocompleteField
      value={value}
      options={statuses}
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

export default ScheduleStatusEditor;
