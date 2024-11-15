import { FC, ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className='flex flex-col gap-4 p-4'>{children}</main>
    </div>
  );
};

export default Layout;
