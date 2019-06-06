import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import Comments from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';


const UserPost = styled.div`
  border: 1px solid #dddddd;
  margin: 0 auto;
  width: 44.85%;
  margin-top: 5%;
  border-radius: 3px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px 0;
  margin-bottom: 15px;
  width: 57.5%;
`;

const UserName = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

const PostImage = styled.img`
  width: 100%;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const InteractionContainerTop = styled.div`
  display: flex;
  font-size: 30px;
  padding-left: 20px;
  margin-top: 1%;
`;

const InteractionContainer = styled.div`
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const InteractionP = styled.p`
  font-size: 1.3rem;
  line-height: 0;
`;

const UserInteraction = styled.div`
  padding-right: 20px;
`;

const Div = styled.div``;


///////////////////////////////////////////////////////////////////
class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes:this.props.data.likes,
    }
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render(){
    const user = this.props.data;
    return (
      <UserPost>
        <UserInfo>
            <UserIcon alt="user_icon" src={user.thumbnailUrl} />
          <Div>
            <UserName> {user.username} </UserName>
          </Div>
        </UserInfo>
        <Div>
          <PostImage alt="user_post" src={user.imageUrl} />
        </Div>
        <InteractionContainerTop>
          <UserInteraction onClick={this.addLike} className="user_interaction" alt="likes">
            <FontAwesomeIcon icon={faHeart} className="likeHeart" />
          </UserInteraction>
          <UserInteraction alt="comment">
            <FontAwesomeIcon icon={faComment} />
          </UserInteraction>
        </InteractionContainerTop>
        <InteractionContainer>
          <InteractionP>{this.state.likes} likes </InteractionP>
        </InteractionContainer>
        <Comments comments = {user.comments} time={user.timestamp}/>
      </UserPost>
    )
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;