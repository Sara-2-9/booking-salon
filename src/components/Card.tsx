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
          className={`size-28 rounded-md bg-gradient-to-b from-orange-200 to-orange-400 shadow-md shadow-orange-800 ${props.className}`}
          type="button"
        >
          <div className="flex justify-center">
            <Image src={props.src} alt={props.alt} width={60} height={60} />
          </div>
        </button>
      </Link>
    </div>
  );
};

export { Card };
