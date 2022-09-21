import { DateFormatter } from '../formatters/DateFormatter';

export function getDateByTimestamp(timestamp?: any): Date {
  if (timestamp === undefined) {
    return new Date();
  }

  if (timestamp instanceof Date) {
    return new Date(timestamp);
  }

  return new Date(timestamp * 1000);
}

export function isoToDate(str: string) {
  const b = str.split(/\D/);
  // @ts-ignore
  return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
}

export const date = (format: string, timestamp: any = undefined) => {
  return DateFormatter({ date: getDateByTimestamp(timestamp), format });
};

export const ymdToDate = (date: string) => {
  if (date !== '') {
    return new Date(`${date}T00:00:00Z`);
  }
  return null;
};

export const isDate = (value: any): boolean => {
  return (
    value !== null &&
    value !== undefined &&
    Object.prototype.toString.call(value) === '[object Date]' &&
    !isNaN(value.getTime())
  );
};
