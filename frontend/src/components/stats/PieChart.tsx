import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
   
  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };
   
  export default function PieChart() {
    return (
      <Card className="w-full shadow-none ">
      <div className="flex items-center gap-4">
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Sold Out
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            {/* Visualize your data in a simple way using the
            @material-tailwind/react chart plugin. */}
          </Typography>
        </div>
        </div>
      <CardBody className="px-2 pb-0 pt-12">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
      // <Card className="w-full h-full shadow-none">
      //   <CardBody className="mt-4 grid place-items-center px-2">
      //     <Chart {...chartConfig} />
      //   </CardBody>
      // </Card>
    );
  }