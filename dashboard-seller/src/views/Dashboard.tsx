import HeaderDashbord from "../components/dashboard-home/HeaderDashbord";
import Listings from "../components/dashboard-home/Listings";
import Stats from "../components/dashboard-home/Stats";

export default function Dashboard() {
  return (
    <section className="flex flex-col w-full pb-20">
      <HeaderDashbord />
      <Stats />
      <Listings />
    </section>
  );
}
