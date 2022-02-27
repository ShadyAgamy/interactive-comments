import React, { useState, useEffect } from "react";
import Comment from "../../shared/Comment";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./styles.scss";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (comments) {
        setComments(comments);
      }).catch(err => console.log(err))
  };
  useEffect(() => {
    getData();
  }, []);
console.log(comments)
  const renderComments = () => {
    const orderedComments = comments.comments.sort((a, b) =>  b.score - a.score);
    return orderedComments.map((comment) => {
      return  <Comment key={comment.id} details={comment} currentUser={comments.currentUser}/>;
    });
  };

  return (
    <div className="app">
      <div className="comments">
       {comments !== null ? renderComments(): null}
      </div>
    </div>
  );
};

export default Comments;
