import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import Coin from 'material-ui/svg-icons/action/donut-small';
import RaisedButton from 'material-ui/RaisedButton';



const Student = ({ CoinExchange, hasOpenRequest, secretData, user, allUsers }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>! <br />
  <div>Coin amount</div>
  <div>
     {user.Coin}
  </div>
  {!hasOpenRequest ? 
   
  <RaisedButton
      label="Request Coins"
      labelPosition="before"
      primary={true}
      icon={<Coin />}
      onClick={CoinExchange}
    /> 
    : 
    null
  }
   </CardText>}
  
     
  </Card>
  
);

Student.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Student;
