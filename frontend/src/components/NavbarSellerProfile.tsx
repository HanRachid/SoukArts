import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import avatarNavbar from "../assets/navbar/avatarNavbar.svg";
import { MdOutlineLogout } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";
import { LuCreditCard } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";

const NavbarSellerProfile = () => {
  return (
    <div className="absolute top-[135px] right-56 font-secondary w-64 h-auto bg-colorBeigeLight border-t-4 border-b-4 border-colorGold px-4 py-4 z-[999]">
      {/* RACHID si besoin change ci dessus le top et le right pour le positionnementdu dropdown */}
      <div className="flex items-center gap-2 border-b border-colorGold mb-4 pb-4">
        <div>
          <img src={avatarNavbar} className="w-8 h-8" alt="imgProfile" />
        </div>
        <div>
          <p>FirstName LastName</p>
          <p>View your profile</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 ">
          <GrNotes />
          <p>Purchases and reviews</p>
        </div>
        <div className="flex items-center gap-2 border-b border-colorGold mb-4 pb-4">
          <RiMessage2Line />
          <p>Messages</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 ">
          <LuCreditCard />
          <p>Gift card balance:0.00</p>
        </div>

        <div className="flex items-center gap-2 border-b border-colorGold mb-4 pb-4">
          <MdOutlineLocalOffer />
          <p>Special offers</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <RiSettings3Line />
          <p>Account settings</p>
        </div>

        <div className="flex items-center gap-2 ">
          <MdOutlineLogout />
          <p>Sign out</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarSellerProfile;
