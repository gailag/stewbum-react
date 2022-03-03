import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Header } from 'semantic-ui-react';

class Stewbum extends React.Component {

  render() {
    return (
        <div>
          <Header as='h1'>Stewbum Brewery</Header>
        </div>
    );
  }
}

ReactDOM.render(<Stewbum/>, document.getElementById('root'));
