import HeaderDashbord from '../components/dashboard/HeaderDashbord';
import Listings from '../components/dashboard/Listings';
import Stats from '../components/dashboard/Stats';

export default function Dashboard() {
  return (
    <section className='flex flex-col w-full pb-20'>
      <HeaderDashbord />
      <Stats />
      <Listings />
    </section>
  );
}
