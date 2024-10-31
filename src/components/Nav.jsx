export default function Nav({ articles, setArticle, setWriting }) {
  return (
    <nav>
      <button className="new-article-button" onClick={() => setWriting(true)}>
        New Article
      </button>
      <div className="articles-container">
        {!articles
          ? "No articles"
          : articles.map((a) => (
              <p key={a.id} onClick={() => setArticle(a)}>
                {a.title}
              </p>
            ))}
      </div>
    </nav>
  );
}
