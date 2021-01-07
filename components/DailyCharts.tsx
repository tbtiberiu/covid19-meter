import Chart from "./Chart";

const DailyCharts = ({ dailyData }) => {
  const dates: Array<Date> = dailyData.map(({ reportDate }) =>
    new Date(reportDate).toLocaleDateString()
  );

  return (
    <div>
      <Chart
        label="Confirmed Cases (last 30 days)"
        dates={dates}
        data={dailyData.map((day) => day.confirmed.total)}
        color="#3792cb"
      />
      <Chart
        label="Deaths (last 30 days)"
        data={dailyData.map((day) => day.deaths.total)}
        dates={dates}
        color="#cc4b4c"
      />
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
        }

        @media only screen and (max-width: 1200px) {
          div {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default DailyCharts;
