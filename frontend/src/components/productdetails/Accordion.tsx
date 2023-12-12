import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonOutlined from "./ButtonOutlined";

import Vintage from "../../assets/icons/vintage icon.svg?react";
import Style from "../../assets/icons/Style icon.svg?react";
import Subcategory from "../../assets/icons/subcategory icon.svg?react";
import Color from "../../assets/icons/Color icon.svg?react";
import Package from "../../assets/icons/packadge icon.svg?react";
import Shipping from "../../assets/icons/fast-delivery-truck-svgrepo-com.svg?react";
import Heart from "../../assets/navbar/heart.svg?react";
import ModalPolicies from "./ModalPolicies";

interface Product {
  item_type: string;
  seller_id: {
    shop_name: string;
  };
  subcategory: number;
  free_shipping: boolean;
  description: string;
  primary_color: string;
}

export default function BasicAccordion({ product }: { product: Product }) {
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
                  {product.item_type}
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Style className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">Boho</p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Subcategory className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  {product.subcategory}
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Color className="w-[20px] h-[20px]" />
                <p className="font-secondary text-colorBlack text-base">
                  {product.primary_color}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <p className="font-secondary text-base w-[502px] text-colorBlack">
                {product.description}
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
              {product.free_shipping && (
                <div className="flex justify-start items-center gap-5">
                  <Shipping className="w-[20px] h-[20px]" />
                  <p className="font-secondary text-colorBlack text-base">
                    Free Shipping
                  </p>
                </div>
              )}
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
              <div>
                <p className="font-secondary tracking-wide text-sm text-colorBlack">
                  Owner of {product.seller_id.shop_name}
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
              <ButtonOutlined>Message Seller</ButtonOutlined>
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
