import { ColumnDef, DataGrid } from '@spektr/data-grid';

import { useGetEstimateAllProducts } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

const defaultColumns: ColumnDef[] = [
  {
    name: 'product',
    title: 'Product',
    width: 120,
    sortingEnabled: true,
  },
  {
    name: 'estimatedQty',
    title: 'Estimated Qty',
    width: 125,
    sortingEnabled: true,
    summaryType: 'sum',
    align: 'right',
  },
  {
    name: 'estimatedNetSqFt',
    title: 'Estimated Net SqFt',
    width: 160,
    sortingEnabled: true,
    summaryType: 'sum',
    align: 'right',
  },
  {
    name: 'mainScope',
    title: 'Main Scope',
    width: 120,
    sortingEnabled: true,
    summaryType: 'sum',
    align: 'right',
  },
  {
    name: 'actual',
    title: 'Actual',
    width: 80,
    sortingEnabled: true,
    summaryType: 'sum',
    align: 'right',
  },
];

const Content = () => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: rows = [] } = useGetEstimateAllProducts(projectId);

  return <DataGrid defaultColumns={defaultColumns} rows={rows} columnReorderingEnabled resizingEnabled height="100%" />;
};

export default Content;
