import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { find } from 'lodash';

import { useGetEnumItems } from '~/hooks/api';

const ScheduleStatusFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;

  const { data: statuses = [] } = useGetEnumItems('ProjectScheduleStatus');

  return <>{find(statuses, (s) => s.value === value)?.text || ''}</>;
};

export default ScheduleStatusFormatter;
