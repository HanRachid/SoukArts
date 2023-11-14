import NavBar from './NavBar';
import Footer from './Footer';

export default function GlobalLayout({
  Component,
  hasLayout,
}: {
  Component: React.ComponentType;
  hasLayout: boolean;
}): React.ReactElement {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        {hasLayout && <NavBar />}
        <div className='flex-1 flex flex-col'>
          <Component />
        </div>
        {hasLayout && <Footer />}
      </div>
    </>
  );
}
