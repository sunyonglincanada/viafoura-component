import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReply } from '../../actions/reply';

const ReplyForm = ({ addReply, match }) => {
  const [text, setText] = useState('');
  return (
    <div className='container post-form'>
      <Link to='/' className='btn'>
        Back To Home
      </Link>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addReply({ text, comment_id: match.params.id });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Write a reply'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input
          type='submit'
          className='btn-submit btn-dark my-1'
          value='Submit'
        />
      </form>
    </div>
  );
};

ReplyForm.propTypes = {
  addReply: PropTypes.func.isRequired
};

export default connect(null, { addReply })(ReplyForm);
