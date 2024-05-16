'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/Button';

const Homepage = () => {
  const t = useTranslations('Homepage');
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-around bg-[url('/assets/images/red-hair-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <h2 className="flex text-center font-serif text-5xl text-gray-200 shadow-amber-800 drop-shadow-md lg:text-6xl">
          {t('subtitle')}
        </h2>
        <div className="flex justify-center ">
          <Button text={` ${t('button_text')} `} />
        </div>
      </div>
      <div className="p-3">
        <div className="md:flex">
          <div className="flex items-center">
            <p className="p-5 text-lg sm:p-10 sm:text-xl">{t('description')}</p>
          </div>
          <div className="flex items-center justify-center p-10">
            <Image
              src="/assets/images/wash-hair.jpg"
              alt="Wash hair"
              width="850"
              height="850"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="flex items-center justify-center p-10">
            <Image
              src="/assets/images/revivre-exence.jpeg"
              alt="Wash hair"
              width="850"
              height="850"
              className="rounded-md"
            />
          </div>
          <div className="flex items-center">
            <div className="p-5 text-lg sm:p-10 sm:text-xl">{` ${t('text')} `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
