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
          src="/photos/wasserturm-landscape.jpg"
          alt="Wasserspiele und Wasserturm auf dem Friedrichsplatz Mannheim"
          caption="Vis-à-vis · Friedrichsplatz mit Wasserspielen"
          credit="Foto: E. Peiffer · Wikimedia Commons, CC BY-SA 3.0"
          aspect="wide"
        />
        <MenuSection />
        <Highlights />
        <ImageBand
          src="/photos/friedrichsplatz-0005.jpg"
          alt="Friedrichsplatz Mannheim mit Wasserturm, Wasserspielen und Tulpenbeeten im Frühling"
          caption="Friedrichsplatz im Frühling · Jugendstilensemble"
          credit="Foto: Gerold Rosenberg · Wikimedia Commons, CC BY-SA 3.0"
          aspect="tall"
        />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
