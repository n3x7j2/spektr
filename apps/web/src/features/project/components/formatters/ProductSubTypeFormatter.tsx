import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { find } from 'lodash';

import { useGetLookupPartTypeCodes } from '~/hooks/api';

const ProductSubTypeFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;

  const { data: partTypeCodes = [] } = useGetLookupPartTypeCodes();

  return <>{find(partTypeCodes, (s) => s.value === value)?.text || ''}</>;
};

export default ProductSubTypeFormatter;
