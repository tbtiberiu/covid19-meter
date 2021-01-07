const Navbar = () => {
  return (
    <div>
      <h1>COVID-19 Meter</h1>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          width: 100%;
          height: 80px;
          background: #222222;
        }

        h1 {
          margin: 0 0 0 7%;
          text-transform: uppercase;
          color: #ffffff;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
