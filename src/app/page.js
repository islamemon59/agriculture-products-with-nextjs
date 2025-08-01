import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import AgricultureProduct from "./Components/AgricultureProducts/AgricultureProducts";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <AgricultureProduct/>
      </section>
    </div>
  );
}
