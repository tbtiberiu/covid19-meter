import CountryRow from "./CountryRow";

const TableCountries = ({ countries }) => {
  return (
    <table>
      <thead>
        <tr role="row">
          <th>Countries</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {countries.map(({ name }: { name: string }, index: number) => (
          <CountryRow name={name} key={index} />
        ))}
      </tbody>
      <style jsx>{`
        table {
          background: #333333;
          border: none;
          width: 100%;
        }

        thead th {
          font-size: 1.15rem;
          height: 50px;
          color: #ffffff;
        }

        tbody tr {
          color: #222222;
          background: #ffffff;
        }

        tbody tr:nth-child(even) {
          background: #f5f5f5;
        }

        tbody tr td {
          padding: 9px;
        }

        tbody tr td:not(:nth-child(1)) {
          text-align: center;
        }
      `}</style>
    </table>
  );
};

export default TableCountries;
