import Image from "next/image";
import Banner from "./Components/Home/Banner/Banner";
import AgricultureProduct from "./Components/Home/AgricultureProducts/AgricultureProducts";
import LandscapeProducts from "./Components/Home/LandscapeProducts/LandscapeProducts";
import TrustedCustomer from "./Components/Home/TrustedCustomer/TrustedCustomer";
import OurCustomerSays from "./Components/Home/OurCustomerSays/OurCustomerSays";
import WhyUs from "./Components/Home/WhyUs/WhyUs";
import MarqueeProducts from "./Components/Home/MarqueeProduct/MarqueeProduct";
import Branches from "./Components/Home/Branches/Branches";

// app/about/page.js
export const metadata = {
  title: "Home",
  description: "This is home page",
};


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
