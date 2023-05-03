import { QueryParams } from '@spektr/common';
import { DataTypeProvider } from '@spektr/data-grid/dist/externals/dx-grid';
import { find } from 'lodash';

import { useGetLookupInventoryItems } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import { useIsService } from '../../hooks';

const InventoryItemFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const { value } = props;
  const { pid: projectId } = useQueryParams(QueryParams.ProjectId);

  const [isService] = useIsService();
  const { data: items = [] } = useGetLookupInventoryItems(projectId, isService);

  return <>{find(items, (s) => s.value === value)?.text || ''}</>;
};

export default InventoryItemFormatter;
