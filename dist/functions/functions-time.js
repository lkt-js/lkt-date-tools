import { ONE_YEAR_IN_SECONDS } from '../constants';
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
export const secondsToMilliseconds = (n) => {
    return n * 1000;
};
export const dateToTimestamp = (date) => {
    return date.getTime() / 1000;
};
