import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import AgricultureProduct from "./Components/AgricultureProducts/AgricultureProducts";
import LandscapeProducts from "./Components/LandscapeProducts/LandscapeProducts";
import TrustedCustomer from "./Components/TrustedCustomer/TrustedCustomer";

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
    </div>
  );
}
