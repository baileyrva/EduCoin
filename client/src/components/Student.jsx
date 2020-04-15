import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TableSimple from './Tables.jsx';


const Student = ({ secretData, user, allUsers }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData} <br />Student data <br /> </CardText>}
  
     <TableSimple allUsers={allUsers}/>
  </Card>
  
);

Student.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Student;
