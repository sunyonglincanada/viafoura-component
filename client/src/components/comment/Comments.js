import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../../actions/comment';
import Spinner from '../layout/Spinner';
import CommentItem from './CommentItem';

export const Comments = ({ getComments, comment: { comments, loading } }) => {
  useEffect(() => {
    getComments();
  }, [getComments]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='comments'>
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </section>
    </Fragment>
  );
};

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  comment: state.comment
});

export default connect(mapStateToProps, { getComments })(Comments);
