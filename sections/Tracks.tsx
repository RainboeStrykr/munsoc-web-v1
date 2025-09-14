"use client";

import { Text } from "@/components/text";
import { Track } from "@/components/track";
import tracks from "@/data/tracks.json";

const Tracks = () => {
  return (
    <section className="w-full flex flex-col items-center" id="tracks">
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Committees
      </Text>
      <div className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 mt-20 text-center lg:text-left md:text-left">
        {tracks.map((item, idx) => (
          <Track
            key={idx}
            imageSrc={item.img}
            imageAlt={item.title}
            title={item.title}
            desc={item.description}
            dimension={70}
          />
        ))}
      </div>
    </section>
  );
};

export default Tracks;
