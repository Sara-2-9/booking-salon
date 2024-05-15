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
          className={`size-40 rounded-md bg-gradient-to-b from-orange-200 to-orange-500 shadow-md shadow-cyan-900 hover:from-orange-300 hover:to-orange-600 ${props.className}`}
          type="button"
        >
          <div className="flex justify-center">
            <Image src={props.src} alt={props.alt} width={112} height={112} />
          </div>
        </button>
      </Link>
    </div>
  );
};

export { Card };
