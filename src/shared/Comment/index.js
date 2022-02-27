import React, { useState } from "react";
import "./styles.scss";
import CommentContainer from "./CommentContainer";
import Reply from "../Reply";

function Comment({ details, currentUser }) {
  const { replies } = details;
  const [showReply, setShowReply] = useState(false);

  const renderReplies = () => {
    return replies.map((reply) => {
      return <CommentContainer key={reply.id} details={reply} />;
    });
  };

  const submitReply = (replyValue) => {
    console.log(replyValue)
  }

  return (
    <>
      <CommentContainer
        details={details}
        reply={() => setShowReply(!showReply)}
      />

      {showReply ? (
        <Reply user={details.user} currentUser={currentUser} sumbit={(replyValue)=>submitReply(replyValue)}/>
      ) : null}

      {replies.length > 0 ? (
        <div className="replies">{renderReplies()}</div>
      ) : null}
      
    </>
  );
}

export default Comment;
