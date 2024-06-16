'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import type { DayProps } from '@/components/Calendar';
import { Calendar } from '@/components/Calendar';

const Booking = () => {
  const tServices = useTranslations('HairServices');
  const t = useTranslations('Booking');
  const locale = useLocale();
  const [selectedDay, setSelectedDay] = useState<DayProps | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDayClick = (day: DayProps) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const morningText = t('button_morning');
  const afternoonText = t('button_afternoon');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const services = params.get('selectedServices');
    if (services) {
      setSelectedServices(JSON.parse(services));
    }
  }, []);

  return (
    <div>
      <div className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">
        <h3 className="font-bold">{t('selectedServicesTitle')}</h3>
        <ul className="mb-10 ml-10 list-disc">
          {selectedServices.map((service) => (
            <li key={service}>{tServices(service as any)}</li>
          ))}
        </ul>
      </div>
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">{` ${t('description')} `}</h2>
      <div className="h-screen p-6">
        <div className="mx-auto mb-10 flex touch-auto justify-start overflow-hidden overflow-x-scroll rounded-md bg-white px-2 py-4 shadow-md md:mx-12 md:justify-center">
          <Calendar
            selectedDay={selectedDay}
            onDayClick={handleDayClick}
            locale={locale}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center">
            {selectedDay && (
              <div className="mx-auto flex  flex-col items-center justify-center md:mx-12">
                <h2 className="text-lg font-semibold">
                  {` ${t('select_day_text')} `} {selectedDay.label}{' '}
                  {selectedDay.number}
                </h2>
                <div className="mt-2 space-x-4">
                  <button
                    type="button"
                    className={`rounded px-4 py-2 ${selectedTime === morningText ? 'bg-orange-600 font-bold text-gray-100' : 'bg-gray-200 text-black hover:bg-orange-500 hover:text-gray-100'}`}
                    onClick={() => handleTimeClick(morningText)}
                  >
                    {` ${t('button_morning')} `}
                  </button>
                  <button
                    type="button"
                    className={`rounded px-4 py-2 ${selectedTime === afternoonText ? 'bg-orange-600 font-bold text-gray-100' : 'bg-gray-200 text-black hover:bg-orange-500 hover:text-gray-100'}`}
                    onClick={() => handleTimeClick(afternoonText)}
                  >
                    {` ${t('button_afternoon')} `}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {selectedTime && (
              <div className="mx-auto mt-10 flex flex-col items-center justify-center md:mx-12">
                <h2 className="text-lg font-semibold">
                  {` ${t('select_time')} `} {selectedTime}
                </h2>
                <form className="mt-5 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="group relative z-0 mb-5 w-full">
                      <input
                        type="text"
                        name="floating_name"
                        id="floating_name"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0 "
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_name"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-600 rtl:peer-focus:translate-x-1/4"
                      >
                        {` ${t('form_name')} `}
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <div className="group relative z-0 mb-5 w-full">
                      <input
                        type="tel"
                        pattern="^\+?[0-9]{0,3}[-\s]?([0-9]{2,4}[-\s]?){1,2}[0-9]{6,8}$"
                        name="floating_phone"
                        id="floating_phone"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_phone"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-orange-500"
                      >
                        {` ${t('form_number')} `}
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 rounded bg-orange-500 px-4 py-2 text-gray-100 hover:bg-orange-600"
                  >
                    {` ${t('button_book')} `}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
