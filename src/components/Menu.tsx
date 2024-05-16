import Image from 'next/image';
import Link from 'next/link';

import LocaleSwitcher from '@/components/LocaleSwitcher';

type IMenuProps = {
  text1: string;
  text2: string;
};

const Menu = (props: IMenuProps) => {
  return (
    <div>
      <label
        htmlFor="mobile-menu"
        className="relative z-40 cursor-pointer px-3 py-6"
      >
        <input className="peer hidden" type="checkbox" id="mobile-menu" />
        <div className="relative z-50 block h-px w-7 bg-black  content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:size-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:bottom-[-0.35rem] after:right-0 after:block after:size-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45" />
        <div className="fixed inset-0 z-40 hidden size-full bg-black/50 backdrop-blur-sm peer-checked:block">
          &nbsp;
        </div>
        <div className="fixed right-0 top-0 z-40 size-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
          <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
            <menu className="flex flex-col">
              <li className="hidden p-3">
                <Link href="/sign-in">{props.text1}</Link>
              </li>
              <li className="hidden p-3">
                <Link href="/sign-up">{props.text2}</Link>
              </li>
              <li className="p-3">
                <LocaleSwitcher />
              </li>
              <li className="flex flex-row p-3">
                <a
                  href="https://www.instagram.com/salone_cristina_hair/"
                  target="_blank"
                  className="pr-3"
                >
                  <Image
                    src="assets/images/icon-instagram.svg"
                    alt="Salone Cristina icon"
                    width={30}
                    height={30}
                    className=""
                  />
                </a>
                <a
                  href="https://www.facebook.com/salone.cristina.bassano.del.grappa?locale=it_IT"
                  target="_blank"
                >
                  <Image
                    src="assets/images//icon-facebook.svg"
                    alt="Salone Cristina icon"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                </a>
              </li>
            </menu>
          </div>
        </div>
      </label>
    </div>
  );
};

export { Menu };
