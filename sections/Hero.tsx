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
            <div className="relative max-w-[80vw] xl:max-w-[50vw] min-h-[120px] w-[320px] h-[140px] xs:mt-10 sm:w-[400px] sm:h-[160px] lg:w-[560px] lg:h-[280px]">
              <Image src={confLogo} alt="TUM Blockchain Conference 24" fill />
            </div>

            <div className={"flex flex-col items-center gap-1"}>
              <Text as={"p"} textType={"sub_title"} className="text-center">
                Oct 31<sup></sup> | Nov 1<sup></sup> | Nov 2<sup></sup>
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
              <Button buttonType={"filled"} asChild>
                <Link
                  href={"https://drive.google.com/drive/folders/1-mGO7xXH1hWvMkAIAG7bt-M8QcfPSzw0?usp=drive_link"}
                >
                  Background Guides Out!
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
