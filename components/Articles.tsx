import ArticleDesc from "./ArticleDesc";

interface Props {
  data: any;
}

const Articles = ({ data }: Props) => {
  return (
    <div className="article">
      <h1>NEWS</h1>

      {data.articles.map(
        (
          article: {
            title: string;
            author: string;
            publishedAt: string;
            description: string;
            content: string;
            url: string;
          },
          index: number
        ) => {
          let date: Date = new Date(article.publishedAt);

          return (
            <ArticleDesc
              title={article.title}
              author={article.author}
              publishedAt={`${date.getDate()}.${
                date.getMonth() + 1
              }.${date.getFullYear()}`}
              description={article.description}
              content={article.content}
              url={article.url}
              key={index}
            />
          );
        }
      )}
      <style jsx>{`
        h1 {
          margin: 50px auto 0 auto;
          text-align: center;
          font-size: 2.4rem;
        }
      `}</style>
    </div>
  );
};

export default Articles;
