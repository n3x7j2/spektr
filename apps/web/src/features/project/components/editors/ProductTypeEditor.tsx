import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

import { GridAutocompleteField } from '~/components/editors/components';
import { useGetLookupPartTypeCodeCategories } from '~/hooks/api';

const ProductTypeEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;
  const { popperPlacement = 'bottom-start' as const } = column as any;

  const { data: partTypeCodeCategories = [] } = useGetLookupPartTypeCodeCategories();

  return (
    <GridAutocompleteField
      value={value || ''}
      options={partTypeCodeCategories}
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

export default ProductTypeEditor;
