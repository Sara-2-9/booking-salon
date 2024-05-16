'use client';

import { useTranslations } from 'next-intl';

import { Card } from '@/components/Card';

const HairServices = () => {
  const t = useTranslations('HairServices');
  return (
    <div className="flex flex-col">
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">{` ${t('description')} `}</h2>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/hairdryer-brush.png" alt="color-hair" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service1')} `}</p>
        </div>
      </div>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/coloring.png" alt="color-hair" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service2')} `}</p>
        </div>
      </div>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/hair-cut.png" alt="hair-cut" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service3')} `}</p>
        </div>
      </div>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/hair-rollers.png" alt="hair-rollers" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service4')} `}</p>
        </div>
      </div>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/hairstyle.png" alt="hairstyle" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service5')} `}</p>
        </div>
      </div>
      <div className="m-2 rounded-md bg-orange-200/50 shadow-sm hover:bg-orange-300/50 lg:mx-10 lg:my-5">
        <div className="flex flex-1 flex-row p-4">
          <Card src="/assets/images/healthy-hair.png" alt="healthy-hair" />
          <p className="flex max-w-2xl flex-1 items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">{` ${t('service6')} `}</p>
        </div>
      </div>
    </div>
  );
};

export default HairServices;
