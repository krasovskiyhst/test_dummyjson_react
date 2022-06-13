import { Component } from "react";

class Post extends Component {
  render() {
    const { post } = this.props;
    
    return (
      <a href={post.id} key={post.id}>{post.title}<br/></a>
    );
  }
}

export default Post;