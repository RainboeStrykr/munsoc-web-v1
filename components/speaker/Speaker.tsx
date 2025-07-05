"use client";

import { Text } from "@/components/text";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import SpeakerModel from "@/model/speaker";
import Link from "next/link";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

type SpeakerProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> &
  SpeakerModel;

export const Speaker = React.forwardRef<HTMLDivElement, SpeakerProps>(
  (
    {
      name,
      description,
      position,
      company_name,
      profile_photo,
      url,
      priority,
      createdAt,
      documentId,
      updatedAt,
      publishedAt,
      className,
      ...rest
    },
    ref,
  ) => {
    const urlType = (() => {
      if (url?.includes("x.com") || url?.includes("twitter.com")) return "x";
      if (url?.includes("linkedin.com")) return "linkedin";
      if (url?.includes("github.com")) return "github";
      return "website";
    })();

    return (
      <div
        className={classNames(
          className,
          "flex w-[150px] xs:w-[180px] sm:w-[200px] min-h-[200px] xs:min-h-[270px] sm:min-h-[300px] flex-col gap-4 items-start shrink-0",
        )}
        ref={ref}
        {...{ ...rest, id: undefined }} // Exclude the `id` property
      >
        <Image
          className={"object-cover"}
          src={profile_photo?.url || "/speakers/placeholder.webp"}
          alt={name}
          title={name}
          width={275}
          height={275}
        />
        <div className={"flex flex-col gap-1 self-stretch"}>
          <Text textType={"sub_title"} className={"font-bold"}>
            {name}
          </Text>
          {description && (
            <Text textType={"paragraph"}>
              {description}
            </Text>
          )}
        </div>
      </div>
    );
  },
);
Speaker.displayName = "Speaker";
