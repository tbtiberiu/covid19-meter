import { GetStaticProps } from "next";

import Navbar from "../components/Navbar";
import Articles from "../components/Articles";

interface Props {
  data: any;
}

export default function News({ data }: Props) {
  return (
    <main>
      <Navbar />
      <Articles data={data} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let oneMonthAgo: Date = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=the-scientist.com,cdc.gov,who.int,ecdc.europa.eu?q=covid-19&from=${oneMonthAgo}&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
};
