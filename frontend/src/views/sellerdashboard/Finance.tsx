import { Button, Typography } from "@material-tailwind/react";
import { TbMoodSad2 } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Finance() {
  return (
    <section className="w-full h-screen">
      <Typography variant="h3" className="font-primary mb-8">
        Payement Account
      </Typography>
      <div className="w-full h-5/6 grid grid-cols-2 grid-rows-4 gap-4">
        <div className="bg-red-800 col-span-2 row-span-1 rounded-md px-10 py-2.5 flex">
          <div className="h-full mr-4">
            <TbMoodSad2 className="text-white text-4xl" />
          </div>
          <div className="h-full py-1.5">
            <Typography variant="h5" className="text-gray-50">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <Typography variant="small" className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto eius nisi dolorem perferendis laudantium nihil quod id,
              velit, nemo ducimus, corporis placeat. Ut repudiandae porro eius
              fuga doloribus perspiciatis velit.
            </Typography>
            <div className="flex items-center justify-start mt-2.5 gap-x-6">
              <Button color="white">Make Payment</Button>
              <Button variant="outlined" color="white">
                Update billing Card
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-md border bg-white col-span-1 row-span-2 grid grid-cols-1 grid-rows-5">
          <div className="row-span-1 px-4 py-2.5">
            <Typography
              variant="small"
              className="col-span-1 row-span-1 flex items-center gap-x-1.5 font-bold"
            >
              <span>Amount Due</span>
              <span>
                <IoIosHelpCircleOutline className="text-lg" />
              </span>
            </Typography>
          </div>
          <div className="row-span-3 px-4 border-b">
            <Typography variant="h2" color="brown">
              MAD59.45 (105 days overdue)
            </Typography>
            <Typography variant="small" color="blue-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              iusto.
            </Typography>
          </div>
          <div className="row-span-1 flex items-center justify-between px-4">
            <Typography variant="lead">update billing settings</Typography>
            <Button color="black" className="rounded-full">Pay Now</Button>
          </div>
        </div>
        <div className="rounded-md border bg-white col-span-1 row-span-2"></div>
        <div className="bg-blue-900/30 col-span-2 row-span-1"></div>
      </div>
    </section>
  );
}
