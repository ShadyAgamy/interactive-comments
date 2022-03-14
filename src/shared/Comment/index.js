import React, { useState } from "react";
import "./styles.scss";
import CommentContainer from "./CommentContainer";
import Reply from "../Reply";

function Comment({ details, currentUser }) {
  const [replies, setReplies] = useState(details.replies);
  const [showReply, setShowReply] = useState(false);

  const deleteReply = (id) => {
    setReplies(
      replies.filter((rep) => {
        return rep.id !== id;
      })
    );
  };


  const handelEdit = (id, value) => {
    console.log(id, value)
  }

  const renderReplies = () => {
    return replies.map((reply) => {
      return (
        <CommentContainer
          key={reply.id}
          details={reply}
          deleteReply={deleteReply}
          editReply={handelEdit}
        />
      );
    });
  };

  const submitReply = (replyValue) => {
    const replyId =
      replies.length > 0 ? replies[replies.length - 1]["id"] + 1 : 1;
    const myReply = {
      content: replyValue,
      createdAt: "now",
      id: replyId,
      replyingTo: details.user,
      score: 0,
      ownReply: true,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "ShadyAgami",
      },
    };
    setReplies([...replies, myReply]);
    setShowReply(false);
  };

  return (
    <>
      <CommentContainer
        details={details}
        reply={() => setShowReply(!showReply)}
      />

      {showReply ? (
        <Reply
          user={details.user}
          currentUser={currentUser}
          sumbit={(replyValue) => submitReply(replyValue)}
        />
      ) : null}

      {replies.length > 0 ? (
        <div className="replies">{renderReplies()}</div>
      ) : null}
    </>
  );
}

export default Comment;
