'use client';

import { useTranslations } from 'next-intl';

import { Calendar } from '@/components/Calendar';

const Booking = () => {
  const t = useTranslations('Booking');

  return (
    <div>
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">{` ${t('description')} `}</h2>
      <div className="h-screen p-6">
        <div className="mx-auto mb-10 flex justify-start overflow-x-scroll rounded-md bg-white px-2 py-4 shadow-md md:mx-12 md:justify-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Booking;
