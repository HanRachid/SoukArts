import NavBar from './NavBar';
import Footer from './Footer';
import PromoNav from '../components/navbar/PromoNav';

export default function GlobalLayout({
  Component,
  hasLayout,
}: {
  Component: React.ComponentType;
  hasLayout: boolean;
}): React.ReactElement {
  return (
    <>
      <div className='flex flex-col min-h-screen justify-between'>
        {hasLayout && <PromoNav />}

        {hasLayout && <NavBar />}
        <div className=''>
          <Component />
        </div>
        {hasLayout && <Footer />}
      </div>
    </>
  );
}
