import { Link } from "@/components/link";
import { Text } from "@/components/text";
import confLogo from "@/media/srmmun-24-white.png";
import dcLogo from "@/public/logos/discord-logo.png";
import liLogo from "@/public/logos/linkedin-logo.png";
import tbcLogo from "@/media/MUNSOC-logo-white.png";
import telLogo from "@/public/logos/telegram-logo.png";
import xLogo from "@/public/logos/x-logo.png";
import igLogo from "@/public/logos/instagram-logo.png";
import lineBg from "@/public/logos/lines.svg";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type FooterElement = React.ElementRef<"footer">;
export type FooterProps = React.ComponentPropsWithoutRef<"footer">;

export const Footer = React.forwardRef<FooterElement, FooterProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <footer
        {...restProps}
        id={"footer"}
        className={classNames(
          className,
          "relative flex z-10 justify-center items-center justify-items-center bg-gradient-to-b from-black from-10% to-[rgba(0,0,0,0.66)] to-80%",
        )}
        ref={ref}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black from-10% to-[rgba(0,0,0,0.66)] to-80%">
          <Image
            src={lineBg}
            alt="Background Pattern"
            fill
            style={{ objectFit: "cover", opacity: 0.2 }}
          />
        </div>

        <div
          className={
            "flex flex-col self-center relative min-h-[500px] w-full max-w-7xl"
          }
        >
          <div
            className={"flex justify-center py-6 px-6 md:px-12 lg:px-24 z-20"}
          >
            <div
              className={
                "flex flex-col gap-y-8 lg:flex-row justify-between w-full"
              }
            >
              <div className={"flex flex-col gap-4 items-start"}>
                <Image
                  src={confLogo}
                  alt={"TUM Blockchain Conference Logo"}
                  height={88}
                />
                <div className={"flex flex-col gap-2"}>
                  <Text textType={"small"}>Organized by</Text>
                  <Image
                    src={tbcLogo}
                    alt={"TUM Blockchain Club Logo"}
                    width={145}
                  />
                </div>
                <div className="flex space-x-4 mt-2">
                  <Link
                    href="https://www.linkedin.com/in/abhiraj-bhowmick/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={liLogo}
                      alt={"Linkedin Logo"}
                      width={25}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/srm_munsoc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={igLogo}
                      alt={"Instagram Logo"}
                      width={25}
                    />
                  </Link>
                  <Link
                    href="https://x.com/srm_munsoc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={xLogo}
                      alt={"X Logo"}
                      width={25}
                    />
                  </Link>
                </div>
              </div>
              <div
                className={
                  "flex flex-col lg:flex-row h-full justify-center lg:justify-center gap-8 lg:gap-16"
                }
              >
                <div className="flex flex-col space-y-2 items-left">
                  <Text asChild>
                    <Link href={"mailto:delegateaffairs.srmmun@gmail.com"}>
                      Contact
                    </Link>
                  </Text>
                </div>
                <div className="flex flex-col space-y-2 items-left">
                  <Text asChild>
                    <Link href={"/privacy-policy.pdf"}>Privacy Policy</Link>
                  </Text>
                </div>
                <div className="flex flex-col space-y-2 items-left">
                  <Text asChild>
                    <Link href={"https://docs.google.com/spreadsheets/d/1C-cVkQC2JXNBHE0KUEbJCWTpAnZSHtLIaquVn_UJfu8/edit?usp=sharing"}>
                      Country Matrix
                    </Link>
                  </Text>
                  <div className="flex space-x-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);
Footer.displayName = "Footer";
