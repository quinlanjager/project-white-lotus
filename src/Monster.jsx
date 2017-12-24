import React, { Component } from 'react';
// This will throw warning 'Route is defined but never used'
// but it's required for routing between monsters#index and monsters#show
import { BrowserRouter as Route, Link } from 'react-router-dom';
import MonsterInfo from './MonsterInfo';

class Monster extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monster: null
    };
  }

  componentDidMount() {
    fetch(`/monsters/${this.props.match.params.id}`).then(res => {
      res.json().then(data => {
        this.setState({monster: data});
        this.props.loadApp();
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Monster</h2>
        <div className='container'>
          <div className='monster'>
            <Link to="/">
              <button className='show-monster'>Show All</button>
            </Link>
            {this.state.monster && <MonsterInfo monster={this.state.monster} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Monster;
