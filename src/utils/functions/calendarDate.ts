import { range } from 'lodash';
import { DateTime, Zone } from 'luxon';

export interface CalendarDate {
  type: 'prev' | 'next' | 'current';
  date: DateTime;
}

export const getPrevMonthDays = (date: DateTime, amount: number): CalendarDate[] => {
  if (amount <= 0) {
    return [];
  }
  const referenceDate = date;
  const lastDateOfPrevMonth = referenceDate.startOf('month').minus({ days: 1 });

  return range(amount).map((_, index) => {
    const day = lastDateOfPrevMonth.day - (amount - index - 1);
    const dateTime = DateTime.local(lastDateOfPrevMonth.year, lastDateOfPrevMonth.month, day);

    return { type: 'prev', date: dateTime };
  });
};

export const getNextMonthDays = (date: DateTime, daysLength: number): CalendarDate[] => {
  const maxDaysLength = 38;
  const referenceDate = date;

  return range(maxDaysLength - daysLength).map((_, index) => {
    const day = index + 1;
    const month = referenceDate.month === 12 ? 1 : referenceDate.month + 1;
    const dateTime = DateTime.local(referenceDate.year, month, day);
    return { type: 'next', date: dateTime };
  });
};

export const getCurrentMonthDays = (date: DateTime): CalendarDate[] => {
  const referenceDate = date;
  const daysInMonth = referenceDate.daysInMonth ?? 31;
  return range(daysInMonth).map((_, index) => {
    const day = index + 1;
    const dateTime = DateTime.local(referenceDate.year, referenceDate.month, day);
    return { type: 'current', date: dateTime };
  });
};

export const makeMonthWeekArray = (days: CalendarDate[]): CalendarDate[][] => {
  const nestedArr = range(days.length / 7).map((_, index) => {
    const start = index * 7;
    return days.slice(start, start + 7);
  });
  return nestedArr;
};

export const isMinutesAfter = (datetime: number | string, minutes: number): boolean => {
  const date = DateTime.fromJSDate(new Date(datetime));
  return date.diffNow('minutes').get('minutes') + minutes < 0;
};

export const isSameMonthInYear = (datetime: DateTime, targetDateTime: DateTime) => {
  return datetime.year === targetDateTime.year && datetime.month === targetDateTime.month;
};
