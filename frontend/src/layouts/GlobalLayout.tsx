import NavBar from "./NavBar";
import Footer from "./Footer";
import PromoNav from "../components/PromoNav";

export default function GlobalLayout({
  Component,
  hasLayout,
}: {
  Component: React.ComponentType;
  hasLayout: boolean;
}): React.ReactElement {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {hasLayout && <PromoNav />}

        {hasLayout && <NavBar />}
        <div className="flex-1 flex flex-col">
          <Component />
        </div>
        {hasLayout && <Footer />}
      </div>
    </>
  );
}
