import ContactCard from "@/components/cards/ContactCard";
import HomeFlyer from "@/components/home/HomeFlyer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <HomeFlyer />
      <ContactCard />
    </main>
  );
}
