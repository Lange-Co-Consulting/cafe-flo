import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MenuSection } from "@/components/menu";
import { Highlights } from "@/components/highlights";
import { Reviews } from "@/components/reviews";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ImageBand } from "@/components/image-band";

export default function Page() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main className="bg-surface">
        <Hero />
        <Intro />
        <ImageBand
          src="/photos/wasserturm-durchblick.jpg"
          alt="Durchblick auf die Spitze des Mannheimer Wasserturms durch eine kreisrunde Öffnung — Bronze-Figur und Kupferdach"
          caption="Durchblick · Spitze des Wasserturms"
          credit="Foto: Englandfan · Wikimedia Commons, CC BY-SA 4.0"
          aspect="wide"
        />
        <MenuSection />
        <Highlights />
        <ImageBand
          src="/photos/wasserturm-landscape.jpg"
          alt="Wasserspiele und Wasserturm auf dem Friedrichsplatz Mannheim, Frühling"
          caption="Vis-à-vis · Friedrichsplatz mit Wasserspielen"
          credit="Foto: E. Peiffer · Wikimedia Commons, CC BY-SA 3.0"
          aspect="wide"
        />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
