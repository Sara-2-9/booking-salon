'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Card } from '@/components/Card';
import type { IServiceProps } from '@/types/service';

interface FormData {
  'bordered-checkbox': string[];
}

const HairServices = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('HairServices');

  const serviceData: IServiceProps[] = [
    {
      id: 'hairStyling',
      name: t('hairStyling'),
      alt: 'hairdryer-brush',
      image: '/assets/images/hairdryer-brush.png',
    },
    {
      id: 'hairColor',
      name: t('hairColor'),
      alt: 'color-hair',
      image: '/assets/images/coloring.png',
    },
    {
      id: 'hairCut',
      name: t('hairCut'),
      alt: 'hair-cut',
      image: '/assets/images/hair-cut.png',
    },
    {
      id: 'hairPerm',
      name: t('hairPerm'),
      alt: 'hair-rollers',
      image: '/assets/images/hair-rollers.png',
    },
    {
      id: 'hairEventStyling',
      name: t('hairEventStyling'),
      alt: 'hairstyle',
      image: '/assets/images/hairstyle.png',
    },
    {
      id: 'hairTreatments',
      name: t('hairTreatments'),
      alt: 'healthy-hair',
      image: '/assets/images/healthy-hair.png',
    },
  ];

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const mySubmitFunction = (e: FormData) => {
    router.push(
      `/booking?${createQueryString('selectedServices', JSON.stringify(e['bordered-checkbox']))}`,
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10">{` ${t('description')} `}</h2>
      <div className="mx-2 my-5 flex flex-row lg:mx-10">
        <form onSubmit={handleSubmit(mySubmitFunction)} className="w-screen">
          {serviceData.map((service: IServiceProps, index: number) => (
            <div key={service.id} className="mb-5 flex w-full items-center">
              <label
                htmlFor={`bordered-checkbox-${index}`}
                className="flex w-full flex-1 flex-row items-center justify-between rounded-md p-5 shadow-sm ring-1 ring-orange-200 has-[:checked]:bg-orange-200 has-[:checked]:text-orange-900"
              >
                <div className="flex flex-row items-center">
                  <Card src={service.image} alt={service.alt} />
                  <p className="flex max-w-2xl flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">
                    {service.name}
                  </p>
                </div>
                <input
                  {...register('bordered-checkbox')}
                  id={`bordered-checkbox-${index}`}
                  type="checkbox"
                  value={service.id}
                  className="mr-2 size-4 appearance-none rounded"
                />
              </label>
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="m-4 h-20 w-64 rounded-md bg-gradient-to-b from-orange-300 to-orange-600 text-gray-200 shadow-sm shadow-orange-700 hover:from-orange-400 hover:to-orange-700"
            >
              {` ${t('nextPage')} `}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HairServices;
