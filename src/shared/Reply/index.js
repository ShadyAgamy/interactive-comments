import React,{useState} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import moment from 'moment';

import "./styles.scss";

 

function Reply({ user, currentUser,sumbit }) {

  const {  username } = user;
  const [replyValue, setReplyValue] = useState("");

  // const addReply = () => {
  //   return {
  //     content:replyValue,
      
  //   }
  // }

//   var today = new Date();
//   var date = today.getFullYear()+', '+(today.getMonth()+1)+', '+today.getDate();
//   console.log(date)
// console.log(moment([date]).fromNow())

  return (
    <Row className="comment">
      <Col xs={1} className="userImg">
        <img src={currentUser.image.png} alt="user avatar" />
      </Col>
      <Col xs={9} className="comment_content">
        <Form.Control
          defaultValue={`@${username},`}
          as="textarea"
          style={{ height: "100px", resize: "none" }}
          onChange={(e) => setReplyValue(e.currentTarget.value)}
        ></Form.Control>
      </Col>
      <Col xs={2} className="comment_content" onClick={()=>sumbit(replyValue)}>
        <Button type="submit" className="mainBtn w-100">
          Reply
        </Button>
      </Col>
    </Row>
  );
}

export default Reply;
