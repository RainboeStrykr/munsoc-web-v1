export const dynamic = "force-static";

import Sparkle from "@/components/Sparkle";
import { Container } from "@/components/container";
import Sponsors from "@/sections/Sponsors";
import Statistic from "@/sections/Statistic";
import { Link } from "@/components/link";
import { Text } from "@/components/text";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Speaker from "@/sections/Speaker";
import Tickets from "@/sections/Tickets";
import Tracks from "@/sections/Tracks";
import Venue from "@/sections/Venue";
import Video from "@/sections/Video";

export default function Home() {
  return (
    <>
      <div>
        <Sparkle />
        <main
          className={
            "w-full flex justify-center items-center pt-[25px] lg:pt-0 z-20"
          }
        >
          <Container>
            <div className={"flex flex-col max-w-7xl z-10"}>
              <Hero />
              <div className={"flex flex-col pb-24 gap-32"}>
                <Video />
                <Statistic />
                <Manifesto />
                <Tracks />
                <Venue />
                <Tickets />
                <Sponsors />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}
