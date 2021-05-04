import { Line } from "react-chartjs-2";

interface Props {
  label: string;
  data: Array<number>;
  dates: Array<Date>;
  color: string;
}

const Chart = ({ label, data, dates, color }: Props) => {
  return (
    <div className="chart">
      {/* @ts-ignore */}
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              data: data,
              label: label,
              borderColor: color,
              backgroundColor: color,
              fill: true,
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 6,
                },
              },
            ],
          },
        }}
      />
      <style jsx>{`
        .chart {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Chart;
