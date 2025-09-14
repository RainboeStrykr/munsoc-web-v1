"use client";

import { Text } from "@/components/text";
import Image from "next/image";
import confLogo from "@/media/srmmun25.png";
import { Button } from "@/components/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="relative mt-[50vh] translate-y-[-50%] w-full flex justify-center items-center overflow-visible">
        <div>
          <div className="flex flex-col w-full justify-between items-center gap-8">
            <div className="relative max-w-[80vw] xl:max-w-[50vw] min-h-[150px] w-[400px] h-[175px] xs:mt-10 sm:w-[500px] sm:h-[200px] lg:w-[700px] lg:h-[350px]">
              <Image src={confLogo} alt="TUM Blockchain Conference 24" fill />
            </div>

            <div className={"flex flex-col items-center gap-1"}>
              <Text as={"p"} textType={"sub_title"} className="text-center">
                October 31<sup>st</sup> - Nov 1<sup>st</sup> - Nov 2<sup>nd</sup> 2025
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button buttonType={"cta"} asChild>
                <Link
                  href={"https://forms.gle/qBZ86foXHvrVooA37"}
                >
                  Register Now!
                </Link>
              </Button>
              <Button
                buttonType={"secondary"}
                className="!bg-purple-300 !text-black font-bold hover:opacity-90"
                asChild
              >
                <Link
                  href={"https://docs.google.com/spreadsheets/d/1C-cVkQC2JXNBHE0KUEbJCWTpAnZSHtLIaquVn_UJfu8/edit?usp=sharing"}
                >
                  Country Matrix
                </Link>
              </Button>
            </div>
            {/* <div className={"flex flex-col items-center gap-1"}>
              <Text as={"p"} textType={"sub_title"} className="text-center">
                Deutsches Museum, Munich
              </Text>
              <Text as={"p"} textType={"sub_title"} className="text-center">
                September 12<sup>th</sup> - 13<sup>th</sup> 2024
              </Text>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
