import { Component } from "react";
import axios from "axios";
import Posts from "./postList/Posts.js"
import Navigation from "./navigation/Navigation.js"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      totalPosts: 0,
      currentPage: 1,
      postsPerPage: 10,
    };
    this.paginate = this.paginate.bind(this);
  }

  getPosts() {
    axios.get('/posts', {
      params: {
        limit: this.state.postsPerPage,
        skip: this.state.currentPage,
      }
    }).then(response => {
      this.setState({ 
        posts: response.data.posts, 
        totalPosts: response.data.total, 
      })
    });
  }

  fillterPosts() {
    axios.get('/posts/search', {
      params: {
        q: this.props.completedSearchQuery,
        limit: this.state.postsPerPage,
        skip: this.state.currentPage,
      }
    }).then(response => {
      this.setState({ 
        posts: response.data.posts, 
        totalPosts: response.data.total, 
      })
    });
  }

  paginate(currentPage) {
    this.setState({
      currentPage: currentPage,
    }, () => {
      if (this.props.completedSearchQuery.length) {
        this.fillterPosts();
      } else {
        this.getPosts();
      }
      
    });
  }

  componentDidMount() {
    if (this.props.completedSearchQuery.length === 0) {
      this.getPosts()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.completedSearchQuery !== this.props.completedSearchQuery) {
      this.fillterPosts();
    }
  }

  render() {
    
    return (
      <div className="main content">
        <Posts posts={this.state.posts}/>
        <Navigation 
          totalPosts={this.state.totalPosts} 
          postsPerPage={this.state.postsPerPage}
          currentPage={this.state.currentPage}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default Home;