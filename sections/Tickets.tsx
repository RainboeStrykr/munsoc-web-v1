import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { Ticket } from "@/components/ticket";
import Link from "next/link";

const Tickets = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-gradient text-center">
          Registration Fees
        </Text>
      </div>
      <div className="w-full flex justify-center">
        <div className="sm:flex mt-20 justify-center sm:space-x-10 space-y-10 sm:space-y-0 w-7/8 sm:w-full">
          
          <Ticket price={2100} ticketType={"vip"} title="Delegate Fees" />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button buttonType={"cta"} asChild>
          <Link href={"http://instagram.com/srm_munsoc"}>
            Register Now!
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Tickets;
