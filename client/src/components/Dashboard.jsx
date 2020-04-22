import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TableSimple from './Tables.jsx';


const Dashboard = ({ secretData, user, allUsers }) => (
  <Card className="container" id="noBackground">
    <CardTitle
      title="Dashboard"
      titleColor="#ffeb3b"
      // subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'white' }}>Welcome <strong>{user.name}</strong>!<br />{secretData} <br />Student data <br /> </CardText>}
  
     <TableSimple allUsers={allUsers}/>
  </Card>
  
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
