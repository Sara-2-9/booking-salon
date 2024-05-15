'use client';

import { useTranslations } from 'next-intl';

import { Card } from '@/components/Card';

const HairServices = () => {
  const t = useTranslations('HairServices');
  return (
    <div className="flex flex-col">
      <h2 className="mb-10 p-3">{` ${t('description')} `}</h2>

      <div className="flex justify-around">
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/hairdryer-brush.png" alt="color-hair" />
          <p className="flex items-center justify-center text-center text-base font-extralight">{` ${t('service1')} `}</p>
        </div>
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/coloring.png" alt="color-hair" />
          <p className="flex items-center justify-center text-center text-base font-extralight">{` ${t('service2')} `}</p>
        </div>
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/hair-cut.png" alt="color-hair" />
          <p className="flex items-center justify-center text-center text-base font-extralight">{` ${t('service3')} `}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-around">
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/hair-rollers.png" alt="color-hair" />
          <p className="flex items-center justify-center text-center text-base font-extralight">{` ${t('service4')} `}</p>
        </div>
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/hairstyle.png" alt="color-hair" />
          <p className="flex items-center justify-center text-center text-base font-extralight">{` ${t('service5')} `}</p>
        </div>
        <div className="flex size-1/3 flex-col">
          <Card src="/assets/images/healthy-hair.png" alt="color-hair" />
          <p className="flex items-center justify-center px-10 text-center text-base font-extralight">{` ${t('service6')} `}</p>
        </div>
      </div>
    </div>
  );
};

export default HairServices;
