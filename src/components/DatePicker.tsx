import { DateTime } from 'luxon';
import { useMemo, useState } from 'react';
import { getCurrentMonthDays, getNextMonthDays, getPrevMonthDays } from '../utils/functions/calendarDate';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import classnames from 'classnames';

export const DatePicker: React.FC = () => {
  const [currentCalendarDate, setCurrentCalendarDate] = useState(DateTime.now());
  const currentYear = useMemo(() => currentCalendarDate.year, [currentCalendarDate]);
  const currentMonth = useMemo(() => currentCalendarDate.month, [currentCalendarDate]);

  const days = useMemo(() => {
    const FIRST_DAY_OF_WEEK = 0; // sunday

    const firstDay = currentCalendarDate.set({ day: 1 }).weekday;
    const prevMonthDays = getPrevMonthDays(currentCalendarDate, firstDay - FIRST_DAY_OF_WEEK);
    const currentMonthDays = getCurrentMonthDays(currentCalendarDate);
    const nextMonthDays = getNextMonthDays(currentCalendarDate, prevMonthDays.length + currentMonthDays.length);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentCalendarDate]);

  const handleClickPrev = () => {
    setCurrentCalendarDate(currentCalendarDate.minus({ month: 1 }));
  };
  const handleClickNext = () => {
    setCurrentCalendarDate(currentCalendarDate.plus({ month: 1 }));
  };

  return (
    <View className="w-full h-full  my-auto">
      <View className="flex flex-row justify-center">
        <Text className="text-xl">
          <View>
            <Icon size={20} name="keyboard-arrow-left" />
          </View>
          {currentYear}
          <View>
            <Icon size={20} name="keyboard-arrow-right" />
          </View>
        </Text>
        <Text className="text-xl">
          <TouchableOpacity onPress={handleClickPrev}>
            <Icon size={20} name="keyboard-arrow-left" />
          </TouchableOpacity>
          {currentMonth}
          <View>
            <Icon size={20} name="keyboard-arrow-right" />
          </View>
        </Text>
      </View>
      <View className="w-full flex flex-row mt-4">
        <Text className="flex-grow text-center text-gray-400">일</Text>
        <Text className="flex-grow text-center text-gray-400">월</Text>
        <Text className="flex-grow text-center text-gray-400">화</Text>
        <Text className="flex-grow text-center text-gray-400">수</Text>
        <Text className="flex-grow text-center text-gray-400">목</Text>
        <Text className="flex-grow text-center text-gray-400">금</Text>
        <Text className="flex-grow text-center text-gray-400">토</Text>
      </View>
      <View className="w-full flex flex-row flex-wrap">
        {days.map((day) => (
          <Text
            key={day.date.day}
            className={classnames('text-center basis-[14.2%]', [
              (day.date.weekday === 7 || day.date.weekday === 6) && 'text-red-500',
            ])}
          >
            {day.date.day}
          </Text>
        ))}
      </View>
    </View>
  );
};
