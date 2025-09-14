"use client";

import { Text } from "@/components/text";
import { VenueImage } from "@/components/venue/VenueImage";
import { useEffect, useRef, useState } from "react";

const Venue = () => {
  const [slide, setSlide] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (slideRef.current !== null && timerRef.current !== null) {
      const slideCount = slideRef.current.children.length;
      timerRef.current.classList.add("line-anim");
      interval = setInterval(() => {
        slideRef.current!.style.transform = `translateX(-${100 * slide}%)`;
        setSlide((slide + 1) % slideCount);
      }, 4000);
    }

    return () => {
      if (interval != null) {
        clearInterval(interval);
      }
    };
  }, [slide]);

  return (
    <section className="w-full flex flex-col items-center" id="tracks">
      <Text textType={"sub_hero"} className="text-gradient text-center">
       Gallery
      </Text>
      <div className="mt-20">
        <div className="overflow-x-hidden w-[280px] sm:w-[600px] xl:w-[800px]">
          <div
            className="flex relative duration-500 ease-in-out"
            ref={slideRef}
          >
            <VenueImage
              imageSrc={"/venue/venue_1.JPG"}
              imageAlt="House of Communication"
            />
            <VenueImage
              imageSrc={"/venue/venue_2.JPG"}
              imageAlt="House of Communication"
            />
            <VenueImage
              imageSrc={"/venue/venue_3.JPG"}
              imageAlt="House of Communication"
            />
            <VenueImage
              imageSrc={"/venue/venue_4.JPG"}
              imageAlt="House of Communication"
            />
            <VenueImage
              imageSrc={"/venue/venue_5.JPG"}
              imageAlt="House of Communication"
            />
          </div>
          <div
            id="line-anim"
            className="w-full h-[2px] bg-gradient-tbc"
            ref={timerRef}
          ></div>
        </div>
        
      </div>
    </section>
  );
};

export default Venue;
