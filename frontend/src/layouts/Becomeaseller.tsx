
import Footer from './Footer';
import HeaderBecomeaseller from '../components/HeaderBecomeaseller';

export default function GlobalLayout({
  Component,
  activeStep,
}: {
  Component: React.ComponentType;
  activeStep: number;
}): React.ReactElement {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <HeaderBecomeaseller isActive={activeStep} />

        <div className='flex-1 flex flex-col'>
          <Component />
        </div>
        <Footer />
      </div>
    </>
  );
}
