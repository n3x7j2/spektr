import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import dayjs from 'dayjs';

const DateFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;
  return <>{dayjs(value).isValid() ? dayjs(value).format('DD/MM/YYYY') : ''}</>;
};

export default DateFormatter;
