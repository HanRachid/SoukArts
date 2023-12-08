import BarChart from "../../components/stats/BarChart";
import LineChart from "../../components/stats/LineChart";
import PieChart from "../../components/stats/PieChart";

export default function Stats() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-full px-8">
        <LineChart />
      </div>
      <div className="flex items-center justify-center gap-8 mt-32 px-8">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}
