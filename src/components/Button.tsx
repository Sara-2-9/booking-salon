import Link from 'next/link';

type IButtonProps = {
  text: string;
  className?: string;
};

const Button = (props: IButtonProps) => {
  return (
    <Link href="/hairServices">
      <button
        className={`m-4 h-20 w-64 rounded-md bg-gradient-to-b from-orange-300 to-orange-600 text-black shadow-sm shadow-cyan-900 hover:from-orange-400 hover:to-orange-700 ${props.className}`}
        type="button"
      >
        {props.text}
      </button>
    </Link>
  );
};

export { Button };
