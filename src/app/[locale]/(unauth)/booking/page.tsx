'use client';

import { useTranslations } from 'next-intl';

const Booking = () => {
  const t = useTranslations('Booking');

  return (
    <div>
      <h2 className="mb-10 p-3">{` ${t('description')} `}</h2>
    </div>
  );
};

export default Booking;
