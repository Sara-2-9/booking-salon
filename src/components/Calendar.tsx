import React from 'react';

interface CalendarProps {
  selectedDay: DayProps | null;
  onDayClick: (day: DayProps) => void;
  locale: string;
}

export interface DayProps {
  id: number;
  label: string;
  number: number;
  currentDay: boolean;
}

function getDaysArray(maxDays: number, locale: string): DayProps[] {
  return Array.from({ length: maxDays }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      id: i,
      label: new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date),
      number: date.getDate(),
      currentDay: i === 0,
    };
  });
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDay,
  onDayClick,
  locale,
}) => {
  const dayArray: DayProps[] = getDaysArray(15, locale);

  const handleKeyDown = (event: React.KeyboardEvent, day: DayProps) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onDayClick(day);
    }
  };

  return (
    <div className="flex flex-row">
      {dayArray.map((day: DayProps) => {
        const isSelected = selectedDay?.id === day.id;
        return (
          <button
            key={day.id}
            tabIndex={0}
            type="button"
            className={`group mx-1 flex w-16 cursor-pointer justify-center rounded-md transition-all duration-300 ${day.currentDay ? 'border-2 border-orange-500 shadow-lg' : 'hover:bg-orange-500 hover:shadow-lg'} ${isSelected ? 'bg-orange-600 shadow-lg' : 'hover:bg-orange-500 hover:shadow-lg'}`}
            onClick={() => onDayClick(day)}
            onKeyDown={(event) => handleKeyDown(event, day)}
          >
            <label key={day.id} htmlFor={`day-${day.id}`}>
              <input
                type="radio"
                name="day"
                value={day.id}
                checked={isSelected}
                className="hidden"
              />
              <div className="flex items-center p-2">
                <div className="text-center">
                  <p
                    className={`mt-3 ${isSelected ? 'text-sm font-bold text-gray-100' : 'text-sm font-normal text-gray-900 transition-all duration-300 group-hover:font-semibold group-hover:text-gray-100'}`}
                  >
                    {day.label}
                  </p>
                  <p
                    className={`mt-3 ${isSelected ? 'font-bold text-gray-100' : 'text-gray-900 transition-all duration-300 group-hover:font-bold group-hover:text-gray-100'}`}
                  >
                    {day.number}
                  </p>
                </div>
              </div>
            </label>
          </button>
        );
      })}
    </div>
  );
};

export { Calendar };
