import ContactCard from "@/components/cards/ContactCard";
import NewsCard from "@/components/cards/NewsCard";
import HomeFlyer from "@/components/home/HomeFlyer";

export default function Home() {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <HomeFlyer />
      <section className="pt-10 mx-4">
        <p className="text-4xl font-extrabold underline decoration-[#b0a17b] text-black">News</p>
        <NewsCard />
      </section>
      <ContactCard />
    </main>
  );
}
