import { Text } from "@/components/text";

const Manifesto = () => {
  return (
    <section className="w-full flex justify-center items-center" id="manifesto">
      <div className={"w-full flex flex-col gap-12 lg:gap-20 px-2 lg:px-0"}>
        <div className={"w-full flex justify-center"}>
          <Text textType={"sub_hero"} className="text-gradient">
            Manifesto
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Text
            as={"p"}
            className="text-center lg:text-left md:text-left max-w-[80%] sm:max-w-[42rem]"
          >
            In the crucible of time, when the night is darkest, even
            the smallest flame can light the way.
            <br />
            <br />
            Humanity has long faced trials where compassion clashes with opposing morals. How much longer can we
            endure with stifled voices and ignorant bliss?
            <br />
            <br />
            Now is the time to prove you can make a difference.
            <br />
            Will you heed the call?

            <br />
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
