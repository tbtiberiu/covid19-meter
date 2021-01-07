import { useEffect, useState } from "react";
import axios from "axios";

const CountryRow = ({ name }) => {
  const [countyData, setCountryData] = useState(null);

  useEffect(() => {
    axios(`https://covid19.mathdro.id/api/countries/${name}`)
      .then((res) => setCountryData(res.data))
      .catch((err) => err);
  }, []);

  return (
    <tr>
      <td>{name}</td>
      <td>{countyData ? countyData.confirmed.value : "N/A"}</td>
      <td>{countyData ? countyData.deaths.value : "N/A"}</td>
      <td>{countyData ? countyData.recovered.value : "N/A"}</td>
      <style jsx>{`
        tr {
          color: #222222;
          background: #ffffff;
        }

        tr:nth-child(even) {
          background: #f5f5f5;
        }

        tr td {
          padding: 9px;
        }

        tr td:not(:nth-child(1)) {
          text-align: center;
        }
      `}</style>
    </tr>
  );
};

export default CountryRow;
