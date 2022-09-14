import { date, dateToTimestamp, isoToDate } from '../src';
import { DateFormatter } from '../src/formatters/DateFormatter';

test('isoToDate', () => {
  const date = isoToDate('2020-04-23T00:00:00');
  expect(date).toBeInstanceOf(Date);
  expect(date.getDate()).toEqual(23);
  expect(date.getMonth()).toEqual(3);
  expect(date.getFullYear()).toEqual(2020);
});

test('Test date formatter', () => {
  const date = isoToDate('2020-04-23T00:00:00');
  expect(date).toBeInstanceOf(Date);
  expect(DateFormatter({ date, format: 'Y-m-d' })).toEqual('2020-04-23');

  const date2 = isoToDate('2021-09-02T00:00:00');
  expect(date2).toBeInstanceOf(Date);
  expect(DateFormatter({ date: date2, format: 'Y-m-d' })).toEqual('2021-09-02');
});

test('date', () => {
  const time = dateToTimestamp(isoToDate('2020-04-23T00:00:00'));
  expect(date('Y-m-d', time)).toEqual('2020-04-23');
});
