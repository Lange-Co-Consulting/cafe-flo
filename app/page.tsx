import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MenuSection } from "@/components/menu";
import { Highlights } from "@/components/highlights";
import { Reviews } from "@/components/reviews";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export default function Page() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main className="bg-surface">
        <Hero />
        <Intro />
        <MenuSection />
        <Highlights />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
