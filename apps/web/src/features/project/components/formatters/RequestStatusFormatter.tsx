import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { find } from 'lodash';

import { useGetLookupPurchaseRequestStatuses } from '~/hooks/api';

const RequestStatusFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;

  const { data: statuses = [] } = useGetLookupPurchaseRequestStatuses();

  return <>{find(statuses, (s) => s.value === value)?.text || ''}</>;
};

export default RequestStatusFormatter;
