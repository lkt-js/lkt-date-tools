import { ONE_YEAR_IN_SECONDS } from '../constants';
import { lpad } from 'lkt-string-tools';

export const time = () => {
  return new Date().getTime() / 1000;
};

export const timeInMilliseconds = () => {
  return new Date().getTime();
};

export const getStampInMilliseconds = () => {
  return Date.now();
};

export const getOneYearInSeconds = () => {
  return ONE_YEAR_IN_SECONDS;
};

export const secondsToMilliseconds = (n: number) => {
  return n * 1000;
};
export const dateToTimestamp = (date: Date) => {
  return date.getTime() / 1000;
};

export const secondsToTimeString = (n: number, includeHours: boolean = false) => {

  //@ts-ignore
  let hours:number|string = parseInt((n / 60) / 60, 10),
    //@ts-ignore
    minutes:number|string = parseInt(n / 60, 10),
    //@ts-ignore
    seconds:number|string = parseInt(n % 60, 10);

  if (includeHours || n >= 3600) { // at least one hour
    return `${lpad(hours, 2, '0')}:${lpad(minutes, 2, '0')}:${lpad(seconds, 2, '0')}`;
  }
  return `${lpad(minutes, 2, '0')}:${lpad(seconds, 2, '0')}`;
};
