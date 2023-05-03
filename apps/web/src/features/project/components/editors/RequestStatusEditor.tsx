import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { filter } from 'lodash';

import { GridAutocompleteField } from '~/components/editors/components';
import { useGetLookupPurchaseRequestStatuses } from '~/hooks/api';

const RequestStatusEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;
  const { popperPlacement = 'bottom-start' as const } = column as any;
  const { data: statuses = [] } = useGetLookupPurchaseRequestStatuses();

  return (
    <GridAutocompleteField
      value={value || ''}
      options={filter(statuses, (s) => s.type === 1)}
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

export default RequestStatusEditor;
