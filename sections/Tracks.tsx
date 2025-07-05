"use client";

import Image from "next/image";
import { Text } from "@/components/text";
import { Track } from "@/components/track";
import {
  Syringe,
  Globe,
  Swords,
  Landmark,
  Network,
  Feather,
  Camera,
  Siren,
} from "lucide-react";
import tracks from "@/data/tracks.json";

const iconMap = {
  Syringe,
  Globe,
  Swords,
  Landmark,
  Network,
  Feather,
  Camera,
  Siren,
};

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
            icon={iconMap[item.icon as keyof typeof iconMap]}
            iconColor={item.iconColor}
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
