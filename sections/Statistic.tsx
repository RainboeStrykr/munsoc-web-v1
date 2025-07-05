import { Text } from "@/components/text";

const Statistic = () => {
  return (
    <section
      className={
        "w-full flex flex-col lg:flex-row justify-center items-center xl:items-start gap-12"
      }
    >
      <div className={"flex flex-col items-center"}>
        <Text textType={"sub_title"} className={""}>
          
        </Text>
        <div className={"flex flex-col items-center lg:flex-row gap-12 mt-12"}>
          <div className={"flex flex-col gap-2 items-center lg:items-center"}>
            <Text className={""} textType={"sub_hero"}>
              300+
            </Text>
            <Text textType={"sub_title"}>Delegates</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-center"}>
            <Text className={""} textType={"sub_hero"}>
              10+
            </Text>
            <Text textType={"sub_title"}>Chairpersons</Text>
          </div>
          
          <div className={"flex flex-col gap-2 items-center lg:items-center"}>
            <Text className={""} textType={"sub_hero"}>
              7
            </Text>
            <Text textType={"sub_title"}>Committees</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-center"}>
            <Text className={""} textType={"sub_hero"}>
              20
            </Text>
            <Text textType={"sub_title"}>Panels</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-center"}>
            <Text className={""} textType={"sub_hero"}>
              7
            </Text>
            <Text textType={"sub_title"}>Workshops</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
