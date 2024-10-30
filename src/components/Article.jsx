export default function Article({ article }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return "No date available";
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${formatDate(article.date)}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
