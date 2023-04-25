import dayjs from 'dayjs';

export const toDate = (value?: string | null) => {
  return dayjs(value)?.isValid() ? dayjs(value).toDate() : null;
};

export const toDayJs = (value?: any) => {
  return dayjs(value)?.isValid() ? dayjs(value) : null;
};
