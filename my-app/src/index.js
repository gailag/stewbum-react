import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Header, Image, Menu } from 'semantic-ui-react';


//top menu
class TopMenu extends React.Component {

  render() {
    return (
        <Container style={{padding: 20}}>
          <Menu borderless className="topmenu">
            <Image size="small" src="http://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/wod-stewbum-logo.png" />
            <Menu.Item position="right">HOME</Menu.Item>
            <Menu.Item>ORDER BEER ONLINE</Menu.Item>
            <Menu.Item>THE PIZZA</Menu.Item>
            <Menu.Item>THE STORY</Menu.Item>
            <Menu.Item>THE GALLERY</Menu.Item>
            <Menu.Item>THE BACKERS</Menu.Item>
            <Menu.Item>GIFT HOUSE</Menu.Item>
            <Menu.Item>CONTACT HOURS</Menu.Item>
          </Menu>
        </Container>
    );
  }
}

class MiddleText extends React.Component {

  render() {
    return (
        <div className="menu">
          <div style={{paddingTop: "200px"}}>
              <Header textAlign='center'>
              <h1>OPEN FOR DINE IN</h1>
              <h1>(NOW BREWING)</h1>
            </Header>
          </div>
        </div>
    );
  }
}


class Stewbum extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleText/>
        </div>
    );
  }
}

ReactDOM.render(<Stewbum/>, document.getElementById('root'));
