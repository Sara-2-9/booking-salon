'use client';

import { useTranslations } from 'next-intl';

const Booking = () => {
  const t = useTranslations('Booking');

  return (
    <div>
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">{` ${t('description')} `}</h2>
    </div>
  );
};

export default Booking;
