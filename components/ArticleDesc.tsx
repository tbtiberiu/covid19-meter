interface Props {
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  content: string;
  url: string;
}

const ArticleDesc = ({
  title,
  author,
  publishedAt,
  description,
  content,
  url,
}: Props) => {
  return (
    <div className="article">
      <h2>
        <a href={url} target="blank">
          {title}
        </a>
      </h2>
      <div className="aup">
        <p>Author: {author}</p>
        <p>{publishedAt}</p>
      </div>
      <p>{description}</p>
      <style jsx>{`
        .article {
          margin: 50px auto;
          width: 85%;
          padding: 30px 40px;
          border: 3px dotted #3792cb;
        }

        h2 {
          margin: 0;
          text-align: center;
          color: #3792cb;
          font-size: 1.5rem;
        }

        h2:hover {
          text-decoration: underline;
        }

        .aup {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
};

export default ArticleDesc;
