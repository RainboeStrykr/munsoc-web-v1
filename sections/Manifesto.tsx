import { Text } from "@/components/text";

const Manifesto = () => {
  return (
    <section className="w-full flex justify-center items-center" id="manifesto">
      <div className={"w-full flex flex-col gap-12 lg:gap-20 px-2 lg:px-0"}>
        <div className={"w-full flex justify-center"}>
          <Text textType={"sub_hero"} className="text-gradient">
            Our Legacy
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Text
            as={"p"}
            className="text-center lg:text-left md:text-left max-w-[80%] sm:max-w-[42rem]"
          >
            In this 13th edition of SRMMUN, we pay homage to the legacy that has endured for 13 long years. From Delegates around the country to the finest executive board and a hardworking Organising Committee, these past years have witnessed halls filled with exhilarating speeches, debates that deliver, and documents that leave an impact. To simply say it has been great undermines the blood, sweat, and tears that have been shed by the people involved to make this conference nothing short of an exuberant experience. 
            <br />
            <br />
            Numbers or editions do not measure the legacy, but the impact it leaves on everyone who has been a part of it. The confidence it instills, the perspective it widens, and the confidence it engrains towards a more just and equitable world. 
            <br />
            <br />
            Year after year, it has become a platform where ideas are challenged, voices are amplified, and leaders of tomorrow are shaped. As we celebrate thirteen years of dedication and passion, SRMMUN continues to be a beacon for aspiring diplomats, thinkers, and changemakers, inspiring them to lead with courage and compassion.<br />
            <br />
            The world calls for your leadership, and the future is shaped by those who dare to act. Gain wisdom, forge lasting bonds, and leave an indelible mark. Rise, challenge the norm, and be the spark that kindles change.
            <br />
            <br />
            
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
