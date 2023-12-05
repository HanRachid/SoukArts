import Cadenas from "../../assets/icons/cadenas.svg?react";
import visa from "../../assets/icons/visa.png";
import mastercard from "../../assets/icons/mastercard.png";
import paypal from "../../assets/icons/paypal.png";
import giftCard from "../../assets/icons/gift-card.png";

const payments = [visa, mastercard, paypal, giftCard];

export default function ShopPolicies() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="font-secondary text-3xl tracking-widest w-[502px] line leading-relaxed mb-3">
        Shop policies for Isli & Tisli
      </h1>
      <div className="flex justify-center">
        <div className="h-0.5 w-[800px] bg-colorBlack/20"></div>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-secondary text-base font-semibold tracking-widest w-[502px] line leading-relaxed mb-3">
          Returns & exchanges
        </h2>
        <p className="font-secondary text-sm text-colorBlack">
          See item details for return and exchange eligibility.
        </p>

        <div>
          <h2 className="font-secondary text-base font-semibold tracking-widest w-[502px] line leading-relaxed mb-3">
            Cancellations
          </h2>
          <p className="font-secondary text-sm text-colorBlack">
            Cancellations: not accepted Please contact the seller if you have
            any problems with your order
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
              Souk Arts keeps your payment information secure. Souk Arts shops
              never receive your credit card information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
