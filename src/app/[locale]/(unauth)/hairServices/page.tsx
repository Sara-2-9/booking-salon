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

// Funzione per gestire il clic su un servizio
const HairServices = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const [selectedServices] = useState<IServiceProps[]>([]); // Array per tenere traccia dei servizi selezionati
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

  // Funzione per gestire il clic su un servizio
  // const handleServiceClick = (serviceId: number) => {};

  // const handleServiceClick = (serviceId: number) => {
  //   if (selectedServices.some((s) => s.id === serviceId)) {
  //     setSelectedServices(selectedServices.filter((s) => s.id !== serviceId)); // Deseleziona il servizio se è già stato selezionato
  //   } else {
  //     const selectedService = serviceData.find((s) => s.id === serviceId);
  //     if (selectedService) {
  //       setSelectedServices([...selectedServices, selectedService]); // Seleziona il servizio se non è già stato selezionato
  //     }
  //   }
  // };

  // const navigateToBookingPage = () => {
  //   const params = new URLSearchParams({
  //     selectedServices: JSON.stringify(selectedServices),
  //   });
  //   router.push(`/booking?${params.toString()}`);
  // };

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
    console.log(e);
    console.log(
      `/booking?${createQueryString('selectedServices', JSON.stringify(e['bordered-checkbox']))}`,
    );
    router.push(
      `/booking?${createQueryString('selectedServices', JSON.stringify(e['bordered-checkbox']))}`,
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="mx-2 my-5 text-lg sm:text-xl lg:mx-10 lg:my-5">{` ${t('description')} `}</h2>
      <div className="flex flex-1 flex-row p-4">
        <form onSubmit={handleSubmit(mySubmitFunction)}>
          {serviceData.map((service: IServiceProps, index: number) => (
            <div
              key={service.id}
              className="flex w-full items-center rounded border border-orange-500"
            >
              <label
                htmlFor={`bordered-checkbox-${index}`}
                className="flex w-full flex-row p-5"
              >
                <Card src={service.image} alt={service.alt} />
                <p className="flex max-w-2xl flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-normal break-words px-5 text-base font-extralight sm:text-xl">
                  {service.name}
                </p>
                <input
                  {...register('bordered-checkbox')}
                  id={`bordered-checkbox-${index}`}
                  type="checkbox"
                  value={service.id}
                  className="size-4 rounded"
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
