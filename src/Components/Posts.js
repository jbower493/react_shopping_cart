import React from 'react';
import { connect } from 'react-redux';
import { handleFetchPosts } from '../actions/postActions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.handleFetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={Math.random()}>
        <h3>{post.name}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = { handleFetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);