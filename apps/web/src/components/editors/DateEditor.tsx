import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';

import { toDayJs } from '~/helpers';

import { GridDateField } from '../editors/components';

const DateEditor = (props: DataTypeProvider.ValueEditorProps) => {
  const { column, row, value, onValueChange, onKeyDown, ...restProps } = props;

  return (
    <GridDateField value={toDayJs(value)} onChange={(newValue) => onValueChange(newValue?.toDate())} {...restProps} />
  );
};

export default DateEditor;
