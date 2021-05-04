import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>COVID-19 Meter</a>
        </Link>
      </h1>
      <p>
        <Link href="/news">
          <a>News</a>
        </Link>
      </p>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 80px;
          background: #222222;
          color: #ffffff;
        }

        h1 {
          margin: 0 0 0 7%;
          text-transform: uppercase;
          font-size: 2rem;
        }

        p {
          margin: 0 7% 0 0;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
