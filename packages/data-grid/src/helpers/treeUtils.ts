import { RowId } from '@devexpress/dx-react-grid';
import { filter, find, flatMap, map } from 'lodash';

export const getChildRows = (row: any, rootRows: any[]) => {
  const childRows = rootRows.filter((r) => r.parentId === (row ? row.id : null));
  return childRows.length ? childRows : null;
};

export const findParentIds = (rows: any[], id: RowId) => {
  const getParentIds = (id: RowId): RowId[] => {
    const row = find(rows, (r) => r.id === id);

    return row && row.parentId ? [row.parentId, ...getParentIds(row.parentId)] : [];
  };
  return getParentIds(id);
};

export const findChildIds = (rows: any[], id: RowId) => {
  const getChildIds = (parentId: RowId): RowId[] => {
    const children = filter(rows, (r) => r.parentId === parentId);
    const childIds = map(children, (c) => c.id);

    return flatMap(childIds, (cid) => [cid, ...getChildIds(cid)]);
  };

  return getChildIds(id);
};
