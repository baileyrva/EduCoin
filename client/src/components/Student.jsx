import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import Coin from 'material-ui/svg-icons/action/donut-small';
import RaisedButton from 'material-ui/RaisedButton';

const Student = ({ secretData, user, allUsers }) => (
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
  <RaisedButton
      label="Request Coins"
      labelPosition="before"
      primary={true}
      icon={<Coin />}
      
    />
   </CardText>}
  
     
  </Card>
  
);

Student.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Student;
