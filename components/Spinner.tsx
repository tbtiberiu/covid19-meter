import Image from "next/image";

const Spinner = () => {
  return (
    <div>
      <Image
        className="spinner"
        src="/spinner-w.gif"
        alt="Loading..."
        width="200"
        height="200"
      />
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
