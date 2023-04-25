import { Checkbox } from '@mui/material';
import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

const BooleanFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;
  return <Checkbox sx={{ padding: 0 }} checked={value} size="small" disabled />;
};

export default BooleanFormatter;
