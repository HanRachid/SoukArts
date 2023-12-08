import { useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import Cadenas from "../assets/icons/cadenas.svg?react";
import visa from "../assets/icons/visa.png";
import mastercard from "../assets/icons/mastercard.png";
import paypal from "../assets/icons/paypal.png";
import giftCard from "../assets/icons/gift-card.png";

const payments = [visa, mastercard, paypal, giftCard];

const ModalPolicies: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimaryHover: "#B48F58",
              colorPrimary: "#000",
              colorPrimaryActive: "#B48F58",
              primaryColor: "#000",
              colorBorder: "#000",
              colorBgContainer: "#B48F58",
            },
          },
        }}
      >
        <Button
          type="default"
          onClick={showModal}
          className="relative group h-11 w-[196px] text-sm bg-transparent text-colorBlack outline-1 border-colorBlack border font-secondary tracking-wide rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:scale-[1.02] hover:tracking-widest hover:border-[1.5px] hover:font-medium hover:border-colorGold hover:text-colorGold"
        >
          View Shop Policies
        </Button>

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okType="primary"
        >
          <div className="flex flex-col gap-5">
            <h1 className="font-secondary text-3xl tracking-widest w-[502px] line leading-relaxed mb-3">
              Shop policies for Bohodreamlandcom
            </h1>

            <div>
              <h2 className="font-secondary text-base font-semibold tracking-widest w-[502px] line leading-relaxed mb-3">
                Returns & exchanges
              </h2>
              <p className="font-secondary text-sm text-colorBlack">
                See item details for return and exchange eligibility.
              </p>
            </div>
            <div>
              <h2 className="font-secondary text-base font-semibold tracking-widest w-[502px] line leading-relaxed mb-3">
                Cancellations
              </h2>
              <p className="font-secondary text-sm text-colorBlack">
                Cancellations: not accepted Please contact the seller if you
                have any problems with your order
              </p>
            </div>
            <div>
              <h2 className="font-secondary text-base font-semibold tracking-widest w-[502px] line leading-relaxed mb-3">
                Payments
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <Cadenas className="w-3 h-3" />
                  <p className="font-secondary text-xs text-colorBlack">
                    Secure options
                  </p>
                </div>
                <div className="flex gap-2">
                  {payments.map((payment: string, id: number) => (
                    <img src={payment} alt="" key={id} className="w-11" />
                  ))}
                </div>

                <p className="font-secondary text-xs text-colorBlack">
                  Accepts Souk Arts Gift Cards
                </p>
                <p className="font-secondary text-xs text-colorBlack">
                  Souk Arts keeps your payment information secure. Souk Arts
                  shops never receive your credit card information.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalPolicies;
