//imports from libraries
import { Outlet } from 'react-router-dom';
// imports from files
// components/ ui
import { Header } from './Header';
import { Footer } from './Footer';
// components/oi

export const Root = () => {
  return (
    <div className="root-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
