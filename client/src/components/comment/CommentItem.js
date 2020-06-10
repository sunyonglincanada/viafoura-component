import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, addUnlike } from '../../actions/comment';
import { getReplies } from '../../actions/reply';
import { setAlert } from '../../actions/alert';

const CommentItem = ({
  comment: { _id, name, role, avatar, text, likes, unlike, date },
  addLike,
  addUnlike,
  getReplies,
  setAlert,
  reply: { replies }
}) => {
  useEffect(() => {
    getReplies();
  }, [getReplies]);
  const [likeComment, getLikeComment] = useState(false);
  const [unlikeComment, getUnlikeComment] = useState(false);
  // Like comment event
  const addLikeEvent = (_id) => {
    if (!localStorage.likeComment && !likeComment) {
      addLike(_id);
      localStorage.setItem('likeComment', true);
      getLikeComment(true);
    } else {
      setAlert('You already like the comment!', 'danger');
    }
  };
  // Unlike comment event
  const addUnlikeEvent = (_id) => {
    if (!localStorage.unlikeComment && !unlikeComment) {
      addUnlike(_id);
      localStorage.setItem('unlikeComment', true);
      getUnlikeComment(true);
    } else {
      setAlert('You already dislike the comment!', 'danger');
    }
  };
  return (
    <div className='comment p-1 my-1'>
      <div>
        <img className='round-img' src={avatar} alt='Avatar' />
      </div>
      <div>
        <div className='comment-author-info'>
          <div>
            <h4 className='author-name'>{name} </h4>
            <h4 className='role'> {role}</h4>
          </div>
          <li className='comment-date'>
            <Moment fromNow>{date}</Moment>
          </li>
        </div>

        <p className='my-1'>{text}</p>

        <Link to={`/reply-form/${_id}`} className='btn'>
          Reply
        </Link>
        <Link to='/replies' className='btn'>
          {replies.length} Replies
        </Link>
        <button
          type='button'
          className='btn'
          onClick={(e) => addLikeEvent(_id)}
        >
          <i className='fa fa-angle-up' aria-hidden='true'></i>
          {likes}
        </button>
        <button
          type='button'
          className='btn'
          onClick={(e) => addUnlikeEvent(_id)}
        >
          <i className='fa fa-angle-down' aria-hidden='true'></i> {unlike}
        </button>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  addUnlike: PropTypes.func.isRequired,
  getReplies: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reply: state.reply
});

export default connect(mapStateToProps, {
  addLike,
  addUnlike,
  getReplies,
  setAlert
})(CommentItem);
