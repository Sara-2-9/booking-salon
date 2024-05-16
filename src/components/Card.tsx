import Image from 'next/image';
import Link from 'next/link';

type ICardProps = {
  src: string;
  alt: string;
  className?: string;
};

const Card = (props: ICardProps) => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/booking">
        <button
          className={`size-20 rounded-md bg-gradient-to-b from-orange-200 to-orange-400 shadow-md shadow-orange-800 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 sm:size-28 ${props.className}`}
          type="button"
        >
          <div className="flex justify-center">
            <Image
              src={props.src}
              alt={props.alt}
              width={45}
              height={45}
              className="sm:size-16"
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export { Card };
