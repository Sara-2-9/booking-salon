'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import type { DayProps } from '@/components/Calendar';
import { Calendar } from '@/components/Calendar';

interface FormData {
  selectedServices: string[];
  selectedDay: string;
  buttonTime: string;
  name: string;
  phoneNumber: number;
  email: string;
}

const Booking = () => {
  const { register, handleSubmit, getValues } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

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

  const abortLongFetch = new AbortController();
  const contactStatuses = {
    loading: 'loading',
    submitted: 'submitted',
    error: 'error',
  };
  const [status, setStatus] = useState<string | undefined>(undefined);

  const submitFunction = async (data: FormData) => {
    setStatus(contactStatuses.loading);
    try {
      const response = await fetch(`/booking/api`, {
        signal: abortLongFetch.signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          selectedDay: selectedDay
            ? `${selectedDay.label} ${selectedDay.number}`
            : 'No day selected',
          selectedServices: selectedServices.map((service) =>
            tServices(service as any),
          ),
        }),
      });
      if (response.ok) {
        setStatus(contactStatuses.submitted);
      } else {
        setStatus(contactStatuses.error);
      }
    } catch (error) {
      setStatus(contactStatuses.error);
    }
  };

  const phoneNumberRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
      <form onSubmit={handleSubmit(submitFunction)} className="p-6">
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
                <div className="mt-4">
                  <input
                    {...register('buttonTime', {
                      required: true,
                    })}
                    id="buttonMorning"
                    type="radio"
                    name="buttonTime"
                    className="appearance-none"
                    onClick={() => handleTimeClick(morningText)}
                    value={` ${t('button_morning')} `}
                  />
                  <label
                    htmlFor="buttonMorning"
                    className={`mr-4 rounded px-5 py-3 ${selectedTime === morningText ? 'bg-orange-600 text-gray-100' : 'bg-gray-200 text-black hover:bg-orange-500 hover:text-gray-100'}`}
                  >{` ${t('button_morning')} `}</label>
                  <input
                    {...register('buttonTime', {
                      required: true,
                    })}
                    id="buttonAfternoon"
                    type="radio"
                    name="buttonTime"
                    className="appearance-none"
                    onClick={() => handleTimeClick(afternoonText)}
                    value={` ${t('button_afternoon')} `}
                  />
                  <label
                    htmlFor="buttonAfternoon"
                    className={`rounded px-5 py-3 ${selectedTime === afternoonText ? 'bg-orange-600 text-gray-100' : 'bg-gray-200 text-black hover:bg-orange-500 hover:text-gray-100'}`}
                  >{` ${t('button_afternoon')} `}</label>
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
                <div className="mt-5 flex flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="group relative z-0 mb-5 w-full">
                      <input
                        {...register('name', {
                          required: true,
                        })}
                        type="text"
                        name="name"
                        id="name"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0 "
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-600 rtl:peer-focus:translate-x-1/4"
                      >
                        {` ${t('form_name')} `}
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <div className="group relative z-0 mb-5 w-full">
                      <input
                        {...register('phoneNumber', {
                          required: true,
                          pattern: {
                            value: phoneNumberRegex,
                            message:
                              'A valid phone number is required. Example: 1234567890.',
                          },
                        })}
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="phoneNumber"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-orange-500"
                      >
                        {` ${t('form_phone')} `}
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <div className="group relative z-0 mb-5 w-full">
                      <input
                        {...register('email', {
                          required: true,
                          pattern: {
                            value: emailRegex,
                            message:
                              'A valid email address id required. Example: name@domain.com.',
                          },
                        })}
                        type="email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        name="email"
                        id="email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-orange-500"
                      >
                        {` ${t('form_email')} `}
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === contactStatuses.loading}
                    className="m-10 h-20 w-64 rounded-md bg-gradient-to-b from-orange-300 to-orange-600 text-gray-200 shadow-sm shadow-orange-700 hover:from-orange-400 hover:to-orange-700 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {status === contactStatuses.loading ? (
                      <>
                        <svg
                          className="mr-3 size-5 animate-spin"
                          viewBox="0 0 24 24"
                        />
                        Sending...
                      </>
                    ) : (
                      t('button_book')
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
      {status === contactStatuses.error ? (
        <div className="flex justify-center">
          <div
            className="mt-5 w-3/5 rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-sm text-red-700 sm:w-1/2"
            role="alert"
          >
            <p>{` ${t('error_appointment_request')} `}</p>
          </div>
        </div>
      ) : null}
      {status === contactStatuses.submitted ? (
        <div className="flex justify-center">
          <div
            className="mt-5 w-3/5 rounded border border-green-400 bg-green-100 px-4 py-1 text-center text-sm text-green-700 sm:w-1/2"
            role="alert"
          >
            <p>{` ${t('thanks_appointment_request', { name: getValues('name') })} `}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Booking;
