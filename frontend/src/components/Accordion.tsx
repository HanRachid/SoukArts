import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, ConfigProvider } from "antd";

import Vintage from "../assets/icons/vintage icon.svg?react";
import Style from "../assets/icons/Style icon.svg?react";
import Subcategory from "../assets/icons/subcategory icon.svg?react";
import Color from "../assets/icons/Color icon.svg?react";
import Gift from "../assets/icons/gift icon.svg?react";
import Package from "../assets/icons/packadge icon.svg?react";
import Shipping from "../assets/icons/fast-delivery-truck-svgrepo-com.svg?react";
import SellerPhoto from "../assets/profile pics/Seller-pic.jpg";
import Heart from "../assets/navbar/heart.svg?react";
import ModalPolicies from "./ModalPolicies";

export default function BasicAccordion() {
  return (
    <div className="w-[502px]">
      <Accordion
        sx={{
          bgcolor: "transparent",
          boxShadow: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p className="font-secondary text-colorBlack text-lg tracking-widest">
              Items Details
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex flex-col gap-6 w-[502px]">
              <div className="flex justify-start items-center gap-5">
                <Vintage className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Vintage
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Style className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">Boho</p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Subcategory className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Earrings
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Color className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Silver
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Gift className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Silver
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <p className="font-secondary text-base w-[502px] text-colorBlack">
                These earrings come from the Ksar of Ouarzazate, they were
                handmade by Berber artisans in southern Morocco{" "}
              </p>
              <p className="font-secondary text-base w-[502px] text-colorBlack">
                These Berber silver earrings will bring a chic ethnic touch to
                your outfits
              </p>
              <p className="font-secondary text-base w-[502px] text-colorBlack">
                *Length: 7 cm / Width: 3.5 cm * Mounted on guaranteed
                nickel-free and allergy-free ear hooks / Supplied with 2
                transparent push-on tips * Supplied in its fabric jewelry pouch
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "transparent",
          boxShadow: 0,
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <p className="font-secondary text-colorBlack text-lg tracking-widest">
              Shipping and return policies
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex flex-col gap-3 w-[502px] mb-7">
              <div className="flex justify-start items-center gap-5">
                <Package className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Returns & exchanges accepted within 30 days
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Shipping className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  Free Shipping
                </p>
              </div>
            </div>
            <ModalPolicies />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "transparent",
          boxShadow: 0,
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <p className="font-secondary text-colorBlack text-lg tracking-widest">
              Meet Your Seller
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex gap-7">
              <div className="w-24 h-24 rounded-md overflow-hidden">
                <img src={SellerPhoto} alt="" className="object-fill w-32" />
              </div>
              <div>
                <h2 className="font-primary tracking-wider text-4xl mb-3">
                  Meryam
                </h2>
                <p className="font-secondary tracking-wide text-sm text-colorBlack">
                  Owner of Bohodreamlandcom
                </p>
                <button className="flex items-center gap-2 p-3 hover:bg-colorBeige/40 rounded-3xl">
                  <Heart className="w-4 h-4" />
                  <p className="font-secondary tracking-wide text-sm text-colorBlack">
                    Follow shop
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimaryHover: "#B48F58",
                      colorPrimary: "#000",
                      colorPrimaryActive: "#B48F58",
                      primaryColor: "#fff",
                      colorBgContainer: "#B48F58",
                    },
                  },
                }}
              >
                <Button
                  type="default"
                  className="relative group h-11 w-full text-sm bg-transparent text-colorBlack outline-1 border-colorBlack border font-secondary tracking-wide rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:scale-[1.02] hover:tracking-widest hover:border-[1.5px] hover:font-medium mt-3"
                >
                  Message Meryam
                </Button>
              </ConfigProvider>
              <p className="font-secondary tracking-wide text-xs text-colorBlack text-center">
                This seller usually responds within 24 hours.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
