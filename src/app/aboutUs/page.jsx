import CtaSection from "./Components/CtaSection/CtaSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import StorySection from "./Components/StorySection/StorySection";
import TeamSection from "./Components/TeamSection/TeamSection";
import ValuesSection from "./Components/ValuesSection/ValuesSection";

export default function App() {
  const brandName = "Agro Product";
  return (
    <div className="bg-neutral-100 min-h-screen font-inter">
      <main className="container mx-auto p-8 lg:p-16">
        <HeroSection brandName={brandName} />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <CtaSection />
      </main>
    </div>
  );
}
