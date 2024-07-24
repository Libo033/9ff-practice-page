import ContactCard from "@/components/cards/ContactCard";
import NewsCard from "@/components/cards/NewsCard";
import ServiceCard from "@/components/cards/ServiceCard";
import HomeFlyer from "@/components/home/HomeFlyer";
import { NewsCardProps } from "@/Libs/interfaces";

const news: NewsCardProps[] = [
  {
    image: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721687287/08-9ff-practice-page/pqsrmtceztpl8tt5wyxo.jpg",
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721687305/08-9ff-practice-page/or15rn5fusi4mqm2cctg.jpg",
    ],
    title: "992 upgrades available",
    info: "High quality 9FF tuning for various 992 models available in our shop, or contact us for an individual upgrade!",
    reverse: false,
  },
  {
    image: [
      "https://res.cloudinary.com/dsuydyqgz/image/upload/v1721749279/08-9ff-practice-page/af2jtard1afwcrksqfw6.jpg",
    ],
    title: "Tunning with warranty",
    info: "TÜV-certified and registered as a vehicle manufacturer with the Federal Motor Transport Authority. Our basic philosophy: Our vehicles should be unrestrictedly reliable, durable and above all roadworthy. All automotive parts that we offer are resilient, high quality and also have real special features.",
    reverse: true,
  },
];

export default function Home() {
  return (
    <main className="pt-[91px] max-w-screen-2xl m-auto">
      <HomeFlyer />
      {news.length > 0 && (
        <section className="pt-10 px-4 flex flex-col gap-2 md:px-8 lg:px-32">
          <p className="text-4xl font-extrabold underline decoration-[#b0a17b] text-black">
            News
          </p>
          {news.map((n, i) => (
            <NewsCard key={n.title} {...n} />
          ))}
        </section>
      )}
      <div className="pt-10 px-4 md:px-8 md:pt-16 md:flex md:items-center md:justify-center lg:px-32">
        <p className="text-4xl">
          'AT 9FF, <b className="text-[#b0a17b]">PERFORMANCE</b> IS A{" "}
          <b className="text-[#b0a17b]">PROMISE</b>'
        </p>
        <p className="text-2xl">&nbsp;- JAN FATTHAUER</p>
      </div>
      <ServiceCard />
      <ContactCard />
    </main>
  );
}
