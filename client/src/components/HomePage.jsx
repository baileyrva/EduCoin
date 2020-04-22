import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container" id="noBackground">
        <CardTitle 
        title="EduCoin" 
        subtitle="The future of rewards based education!"
        titleColor="#ffeb3b" 
        subtitleColor="white"/>
          {Auth.isUserAuthenticated() ? (
            <CardText style={{ fontSize: '16px', color: '#81d4fa' }}>Welcome! You are logged in.</CardText>
          ) : (
            <CardText style={{ fontSize: '16px', color: '#81d4fa' }}>You are not logged in.</CardText>
          )}
      </Card>
    )
  }
};

export default HomePage;
