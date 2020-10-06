import React from 'react';
import { connect } from 'react-redux';
import { handleAddPost } from '../actions/postActions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      name: this.state.name,
      body: this.state.body
    };
    this.props.handleAddPost(post);
    this.setState({
      name: '',
      body: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <label>Title: </label><br/>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange}/><br/>
          <label>Body: </label><br/>
          <textarea name="body" value={this.state.body} onChange={this.onChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = { handleAddPost };

export default connect(null, mapDispatchToProps)(PostForm);