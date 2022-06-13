import { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './PostPage.css';

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:'',
      body: '',
    };
  }

  componentDidMount(){

    const id = this.props.params.id;
    axios.get(`/posts/` + id, 
    ).then(response => {
      this.setState({ 
        title: response.data.title, 
        body: response.data.body, 
      })
    });
  }
  render() {

    let title = this.state.title;
    let body = this.state.body;
    
    return (
      <div className="content">
        <h1>{title}</h1>
        <p>{body}</p>
        <a className="battonBack" href="/">Back</a>
      </div>
    );
  }
}

export default withRouter(PostPage);