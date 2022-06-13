import { Component } from "react";
import './Navigation.css';

class Navigation extends Component {

  selectCurrentPage(item) {
    this.props.paginate(item);

  }

  render() {

    let totalPosts = this.props.totalPosts;
    let postsPerPage = this.props.postsPerPage;
    let countButton = totalPosts / postsPerPage;

    let buttons = [];

    for (let i = 1; i <= countButton; i++) {
      buttons.push(i)
    }

    return (
      <div className='navigation'>
          {buttons.map(item => 
          <button 
            className={this.props.currentPage === item ? 'paginate active' : 'paginate'} 
            onClick={() => {this.selectCurrentPage(item);}} 
            key={item}>
            {item}
          </button>)}
      </div>
    );
  }
}

export default Navigation;