import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import AgricultureProduct from "./Components/AgricultureProducts/AgricultureProducts";
import LandscapeProducts from "./Components/LandscapeProducts/LandscapeProducts";
import TrustedCustomer from "./Components/TrustedCustomer/TrustedCustomer";
import OurCustomerSays from "./Components/OurCustomerSays/OurCustomerSays";
import WhyUs from "./Components/WhyUs/WhyUs";
import MarqueeProducts from "./Components/MarqueeProduct/MarqueeProduct";
import Branches from "./Components/Branches/Branches";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <AgricultureProduct/>
      </section>
      <section>
        <LandscapeProducts/>
      </section>
      <section>
        <TrustedCustomer/>
      </section>
      <section>
        <OurCustomerSays/>
      </section>
      <section>
        <WhyUs/>
      </section>
      <section>
        <MarqueeProducts/>
      </section>
      <section>
        <Branches/>
      </section>
    </div>
  );
}
