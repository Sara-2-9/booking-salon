import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex grow flex-col">
        <div className="flex w-full font-sans text-gray-700 antialiased">
          <div className="mx-auto">
            <header className="w-full p-3">
              <div className="flex items-center justify-between">
                <div className="w-44 sm:w-auto">
                  <Link href="/">
                    <Image
                      src="/assets/images/hair-salon.png"
                      alt="Hair Salon logo"
                      width="250"
                      height="300"
                    />
                  </Link>
                </div>
                <div className="flex justify-around">
                  <nav className="flex justify-between">
                    <ul className="flex flex-wrap gap-x-5 text-xl">
                      {props.rightNav}
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex w-screen flex-col items-center justify-around">
              {props.children}
            </main>
            <footer className="p-3 py-8 text-center text-sm">
              <div className="flex flex-col justify-center">
                <p>
                  © {new Date().getFullYear()} {AppConfig.name}
                </p>
                <p>{` ${t('description')} `}</p>
                <p>{` ${t('contact')} `}</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BaseTemplate };
