import Image from 'next/image';

type ICardProps = {
  src: string;
  alt: string;
  className?: string;
};

const Card = (props: ICardProps) => {
  return (
    <div
      className={`flex size-20 items-center justify-center rounded-md bg-gradient-to-b from-orange-200 to-orange-400 shadow-md shadow-orange-800 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 sm:size-28 ${props.className}`}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={45}
        height={45}
        className="sm:size-16"
      />
    </div>
  );
};

export { Card };
