import React, { useEffect, useState } from "react";
import SkeletonsArticle from "../skeletons/SkeletonsArticle";
import { Card, Button } from "react-bootstrap";
import Navabar from "../Navbar/Navbar";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://unhas.ac.id/v2/wp-json/wp/v2/posts/?_embed");
      const data = await res.json();
      setUser(data);
    }, 3000);
  });

  return (
    <div className="user">
      <Navabar />
      <h2>Artikel</h2>

      {user &&
        user.map((user) => (
          <div className="user" key={user}>
            <Card.Body>
              <Card.Text dangerouslySetInnerHTML={{ __html: user.content.rendered + user.id }}></Card.Text>
            </Card.Body>
          </div>
        ))}

      {!user && [1, 2, 3, 4, 5].map((n) => <SkeletonsArticle key={n} theme="dark" />)}
    </div>
  );
};

export default User;
