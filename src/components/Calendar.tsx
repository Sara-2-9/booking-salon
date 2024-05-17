import React from 'react';

interface CalendarProps {
  date?: Date;
}

interface DayProps {
  id: number;
  label: string;
  number: number;
  currentDay: boolean;
}

function getDaysArray(maxDays: number): DayProps[] {
  return Array.from({ length: maxDays }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      id: i,
      label: new Intl.DateTimeFormat('it-IT', { weekday: 'short' }).format(
        date,
      ),
      number: date.getDate(),
      currentDay: i === 0,
    };
  });
}

const Calendar: React.FC<CalendarProps> = () => {
  const dayArray: DayProps[] = getDaysArray(15);

  return (
    <div className="flex flex-row">
      {dayArray.map((day: DayProps) => {
        return (
          <div
            key={day.id}
            className={`group mx-1 flex w-16 cursor-pointer justify-center rounded-md transition-all duration-300 ${day.currentDay ? 'bg-orange-600 shadow-lg' : 'hover:bg-orange-500 hover:shadow-lg'}`}
          >
            <div className="flex items-center p-2">
              <div className="text-center">
                <p
                  className={`mt-3 ${day.currentDay ? 'text-sm font-bold text-gray-100' : 'text-sm font-normal text-gray-900 transition-all duration-300 group-hover:font-semibold group-hover:text-gray-100'}`}
                >
                  {day.label}
                </p>
                <p
                  className={`mt-3 ${day.currentDay ? 'font-bold text-gray-100' : 'text-gray-900 transition-all duration-300 group-hover:font-bold group-hover:text-gray-100'}`}
                >
                  {day.number}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Calendar };
