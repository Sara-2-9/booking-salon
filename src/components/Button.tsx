import Link from 'next/link';

type IButtonProps = {
  text: string;
  className?: string;
};

const Button = (props: IButtonProps) => {
  return (
    <Link href="/hairServices">
      <button
        className={`m-4 h-20 w-64 rounded-md bg-gradient-to-b from-orange-300 to-orange-600 text-gray-200 shadow-sm shadow-orange-700 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-orange-400 hover:to-orange-700 ${props.className}`}
        type="button"
      >
        {props.text}
      </button>
    </Link>
  );
};

export { Button };
