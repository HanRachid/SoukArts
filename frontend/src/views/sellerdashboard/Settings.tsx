import StoreSettings from "../../components/settings/StoreSettings";
import AccountSettings from "../../components/settings/AccountSettings";

export default function Settings() {
  return (
    <div className="w-full bg-white px-20 py-20 rounded-lg font-secondary">
      <AccountSettings/>
      <StoreSettings/>
    </div>
  );
}
