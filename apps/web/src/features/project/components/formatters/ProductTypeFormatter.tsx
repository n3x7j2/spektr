import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { find } from 'lodash';

import { useGetLookupPartTypeCodeCategories } from '~/hooks/api';

const ProductTypeFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;

  const { data: partTypeCodeCategories = [] } = useGetLookupPartTypeCodeCategories();

  return <>{find(partTypeCodeCategories, (s) => s.value === value)?.text || ''}</>;
};

export default ProductTypeFormatter;
