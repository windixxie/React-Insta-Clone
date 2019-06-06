import React from 'react';
import PropTypes from 'prop-types';
import '../CommentSection.css';
import styled from 'styled-components';


const CommentContainer = styled.div``;

const CommentP = styled.p`
  font-size: 1.1rem;
`;

const CommentPSpan = styled.span`
  font-weight: bold;
  padding-left: 10px;
`;



///////////////////////////////////////////////////////
const Comment = props => {
  return (
    <CommentContainer>
      <CommentP><CommentPSpan>{props.comment.username}</CommentPSpan> {props.comment.text}</CommentP>
    </CommentContainer>
  )
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
}

export default Comment;