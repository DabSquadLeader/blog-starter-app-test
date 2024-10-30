// App.jsx
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut } from "./auth";
import { useAuthentication } from "../services/authService";
import { fetchArticles, createArticle } from "../services/articleService";
import BlogDesc from "./BlogDesc";
import "./App.css";
import logo from "./BlueBlogLogo.png"; // Import your logo image here

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
  <div className="header-left">
    <div className="logo">
      <a href="https://new-project-f5211.web.app" rel="noopener noreferrer">
        <img src={logo} alt="Blog Logo" />
      </a>
    </div>
    <span>BlueBlog</span>
  </div>
  <div className="header-right">
    {!user ? <SignIn /> : <SignOut />}
  </div>
</header>
      
      <BlogDesc /> 
    
      {!user ? "" : <Nav articles={articles} setArticle={setArticle} setWriting={setWriting} />
    }
  
      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
      
    </div>
  );
}
