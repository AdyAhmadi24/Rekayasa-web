import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonsArticle";
import { Card, Button } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://unhas.ac.id/v2/wp-json/wp/v2/posts?per_page=9&page=2");
      const data = await res.json();
      setArticles(data);
    }, 3000);
  });

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article}>
            <Card>
              <Card.Header>{article.date}</Card.Header>
              <Card.Body>
                <Card.Text>{article.slug}</Card.Text>
                <Button variant="primary">Link Artikel</Button>
              </Card.Body>
            </Card>
          </div>
        ))}

      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark" />)}
    </div>
  );
};

export default Articles;
