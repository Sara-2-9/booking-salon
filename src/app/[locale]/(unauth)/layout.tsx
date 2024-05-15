import { Menu } from '@/components/Menu';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate rightNav={<Menu text1="Sing in" text2="Sing up" />}>
      <div
        className="
      w-screen text-xl [&_p]:my-6"
      >
        {props.children}
      </div>
    </BaseTemplate>
  );
}
