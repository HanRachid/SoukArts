import logoFooter from "../assets/logolight.svg";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { PiPinterestLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="part-one-footer">

          <div className="flex gap-24">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src={logoFooter} alt="Description de l'image" />
              <div className="flex gap-2">
                <div className="h-7 w-7 border-2 border-colorBrown rounded-full flex justify-center items-center">
                  <LuFacebook />
                </div>
                <div className="h-7 w-7 border-2 border-colorBrown rounded-full flex justify-center items-center">
                  <FiInstagram />
                </div>
                <div className="h-7 w-7 border-2 border-colorBrown rounded-full flex justify-center items-center">
                  <PiPinterestLogoBold />
                </div>
                <div className="h-7 w-7 border-2 border-colorBrown rounded-full flex justify-center items-center">
                  <FiTwitter />
                </div>
              </div>
            </div>

            <div>
              <h4>Shop</h4>
              <ul>
                <li>Gift cards</li>
                <li>Sales</li>
                <li>Sitemap</li>
                <li>Souks Arts Blog</li>
              </ul>
            </div>

            <div>
              <h4>Sell</h4>
              <ul>
                <li>Sell on Souks Arts</li>
                <li>Forum</li>
                <li>Affiliates & Creators</li>
              </ul>
            </div>

            <div>
              <h4>About</h4>
              <ul>
                <li>SoukArts</li>
                <li>Policies</li>
                <li>Carrers</li>
              </ul>
            </div>

            <div>
              <h4>Help</h4>
              <ul>
                <li>Help Center</li>
                <li>Privacy settings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="part-two-footer"></section>
      </footer>
    </>
  );
}
