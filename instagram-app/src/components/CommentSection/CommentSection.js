
import React from 'react';
import './CommentSection.css';
import Comment from './Comment/Comment';
import moment from 'moment';
import styled from 'styled-components';


const CommentsContainer = styled.div`
  width: 97%;
  margin: 0;
  font-size: 1rem;
`;

const CommentsContainerTime = styled.p`
  padding-left: 10px;
  color: grey;
  font-size: 1rem;
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;
  background: #FAFAFA;
  border-right: .5px solid #D3D3D3;
`;

const CommentInput = styled.input`
  background: none;
  padding: 0;
  margin: 0 auto;
  border: none;
  color: black;
`;

/////////////////////////////////////////////////////
class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments,
      comment: ''
    }
  }

  commentHandleChange = e => {
    this.setState({comment: e.target.value})
  }

  addNewComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    const newComment = {text: this.state.comment, username: 'winniesongii'};
    if (this.state.comment !== ''){
      comments.push(newComment);
      this.setState({comments, comment: ''});
    }
  }

  render() {
    const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a")
    const newTime= time.fromNow().toUpperCase();
    return(
      <CommentsContainer>
        {this.state.comments.map((comment, index) =>(
        <Comment
         key={index}
         comment={comment} />
      ))}
        <CommentsContainerTime>{newTime}</CommentsContainerTime>
        <CommentInputContainer>
          <form onSubmit={this.addNewComment}>
            <CommentInput
              type="text"
              onChange={this.commentHandleChange}
              value={this.state.comment}
              placeholder="Add a comment..." />
          </form>

          {/* add ellipses image here */}
        </CommentInputContainer>
      </CommentsContainer>
    )
  }
}

export default Comments;