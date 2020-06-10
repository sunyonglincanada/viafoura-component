import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReplies } from '../../actions/reply';
import Spinner from '../layout/Spinner';
import ReplyItem from './ReplyItem';

const Replies = ({ getReplies, replies: { replies, loading } }) => {
  useEffect(() => {
    getReplies();
  }, [getReplies]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='container'>
        <Link to='/' className='btn'>
          Back To Home
        </Link>
        {replies.map((reply) => (
          <ReplyItem key={reply._id} reply={reply} />
        ))}
      </section>
    </Fragment>
  );
};

Replies.propTypes = {
  getReplies: PropTypes.func.isRequired,
  replies: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  replies: state.reply
});

export default connect(mapStateToProps, { getReplies })(Replies);
