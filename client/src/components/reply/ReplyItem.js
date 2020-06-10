import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const ReplyItem = ({ reply: { _id, name, avatar, text, date } }) => (
  <div className='reply p-1 my-1'>
    <div>
      <img className='round-img' src={avatar} alt='Avatar' />
    </div>
    <div>
      <div className='reply-author-info'>
        <div>
          <h4 className='author-name'>{name} </h4>
        </div>
        <li className='reply-date'>
          <Moment fromNow>{date}</Moment>
        </li>
      </div>

      <p className='my-1'>{text}</p>
    </div>
  </div>
);

ReplyItem.propTypes = {
  reply: PropTypes.object.isRequired
};

export default connect(null, {})(ReplyItem);
