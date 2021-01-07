interface Props {
  cases: number;
  deaths: number;
  recovers: number;
}

const Summary = ({ cases, deaths, recovers }: Props) => {
  return (
    <div className="summary">
      <ul className="summary-items">
        <li>
          <p className="title">Cases</p>
          <p id="cases">{cases}</p>
        </li>
        <li>
          <p className="title">Deaths</p>
          <p id="deaths">{deaths}</p>
        </li>
        <li>
          <p className="title">Recovers</p>
          <p id="recovers">{recovers}</p>
        </li>
      </ul>
      <style jsx>{`
        .summary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .summary-items {
          padding: 0;
          list-style: none;
        }

        .summary-items li:not(:last-child) {
          margin-bottom: 40px;
        }

        .summary-items .title {
          margin: 0;
          font-size: 1.5rem;
        }

        #cases,
        #deaths,
        #recovers {
          font-family: Cairo-Bold;
          font-size: 2rem;
          margin: 15px 0;
        }

        #cases {
          color: #3792cb;
        }

        #deaths {
          color: #cc4b4c;
        }

        #recovers {
          color: #65cc2d;
        }
      `}</style>
    </div>
  );
};

export default Summary;
