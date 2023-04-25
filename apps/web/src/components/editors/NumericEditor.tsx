import { TextField } from '@mui/material';
import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

const NumericEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;

  return (
    <TextField
      variant="standard"
      value={value}
      type="number"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      onChange={(event) => onValueChange(Number(event.target.value))}
      {...restProps}
    />
  );
};

export default NumericEditor;
