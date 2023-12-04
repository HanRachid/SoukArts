import React from "react";
import { useEffect, useState } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import logolight from "../assets/logolight.svg";
import cadenas from "../assets/icons/cadenas.png";
import {
  TruckIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { router } from "../App";

const HeaderPayment = ({ isActive }: { isActive: number }) => {
  const [activeStep, setActiveStep] = React.useState(isActive);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveStep(isActive);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldAddOpacity = scrollTop > 0;

      setIsScrolled(shouldAddOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div
      className={`h-48 lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-center lg:justify-between items-center border-b border-colorGold sticky top-0 z-50 ${
        isScrolled ? "bg-white bg-opacity-70" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center">
        <img src={logolight} className="w-48" alt="logolight" />
        <div className="flex justify-center items-center">
          <img src={cadenas} className="w-5 h-5 me-1" alt="cadenas" />
          <p className="text-small">Secure checkout</p>
        </div>
      </div>

      <div className="w-5/6 lg:w-3/6 px-3 lg:px-24 py-1 lg:py-4">
        <Stepper activeStep={activeStep}>
          <Step onClick={() => {setActiveStep(0)
            router.navigate('/deliverypayment')        
            }}>
            <TruckIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Delivery
              </Typography>
            </div>
          </Step>
          <Step onClick={() => {setActiveStep(1)
            router.navigate('/payment')        
            }}>
            <CreditCardIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Payment
              </Typography>
            </div>
          </Step>
          <Step onClick={() => {setActiveStep(2)
            router.navigate('/reviewpayment')        
            }}>
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Review
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default HeaderPayment;