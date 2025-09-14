import { Text } from "@/components/text";

const Manifesto = () => {
  return (
    <section className="w-full flex justify-center items-center" id="manifesto">
      <div className={"w-full flex flex-col gap-12 lg:gap-20 px-2 lg:px-0"}>
        <div className={"w-full flex justify-center"}>
          <Text textType={"sub_hero"} className="text-gradient">
            OUR LEGACY
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Text
            as={"p"}
            className="text-center lg:text-left md:text-left max-w-[80%] sm:max-w-[42rem]"
          >
            In this <b>13th edition of SRMMUN</b>, we pay homage to the legacy that has endured for 13 long years. From Delegates around the country to the finest executive board and a hardworking Organising Committee, these past years have witnessed halls filled with exhilarating speeches, debates that deliver, and documents that leave an impact.  
            <br />
            <br />
            To simply say it has been great undermines the blood, sweat, and tears that have been shed by the people involved to make this conference nothing short of an exuberant experience. 
            <br />
            <br />
            Year after year, it has become a platform where <b>ideas are challenged, voices are amplified, and leaders of tomorrow are shaped.</b> As we celebrate thirteen years of dedication and passion, SRMMUN continues to be a beacon for aspiring diplomats, thinkers, and changemakers, inspiring them to lead with courage and compassion.<br />
            <br />

            <br />
            <br />
            
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
