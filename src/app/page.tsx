import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { TrackRecord } from "@/components/sections/track-record";
import { Experience } from "@/components/sections/experience";
import { Methodology } from "@/components/sections/methodology";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrackRecord />
        <Experience />
        <Methodology />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
