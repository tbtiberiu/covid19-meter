import Head from "next/head";
import { GetStaticProps } from "next";

import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import DailyCharts from "../components/DailyCharts";
import TableCountries from "../components/TableCountries/TableCountries";

import styles from "../styles/Home.module.scss";

interface Props {
  cases: number;
  deaths: number;
  recovers: number;
  dailyData: any;
  countries: any;
}

export default function Home({
  cases,
  deaths,
  recovers,
  dailyData,
  countries,
}: Props) {
  return (
    <div>
      <Head>
        <title>Covid-19 Meter</title>
        <link rel="icon" href="/covid19-logo.png" />
      </Head>

      <main>
        <Navbar />
        <div className={styles.intro}>
          <Summary cases={cases} deaths={deaths} recovers={recovers} />
          <div className={styles.mapReport}>
            <iframe src="https://www.trackcorona.live/map"></iframe>
          </div>
        </div>
        <div className={styles.charts}>
          <h2>Daily report of coronavirus cases and deaths - Globally</h2>
          <DailyCharts dailyData={dailyData} />
        </div>
        <div className={styles.countries}>
          <h2>
            Daily report of coronavirus cases and deaths - For Each Country
          </h2>
          <TableCountries countries={countries} />
        </div>
      </main>

      <footer>
        <p>&copy; Made with 💙 by Boșcan Tiberiu-Ioan</p>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();
  const resDaily = await fetch(data.dailySummary);
  const dailyData = await resDaily.json();
  const resCountries = await fetch(data.countries);
  const fetchedCountries = await resCountries.json();

  if (!data || !dailyData || !fetchedCountries) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cases: data.confirmed.value,
      deaths: data.deaths.value,
      recovers: data.recovered.value,
      dailyData: dailyData.slice(-30),
      countries: fetchedCountries.countries,
    },
  };
};
