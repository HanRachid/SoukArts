
import Footer from './Footer';
import HeaderPayment from '../components/HeaderPayment';

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
         <HeaderPayment isActive={activeStep} />

        <div className='flex-1 flex flex-col'>
          <Component />
        </div>
      <Footer />
      </div>
    </>
  );
}
