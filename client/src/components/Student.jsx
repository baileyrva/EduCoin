import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from "material-ui/Card";
import ChipList from "./Chips/Chips.jsx";

import Coin from 'material-ui/svg-icons/action/donut-small';
import RaisedButton from 'material-ui/RaisedButton';
import { pink100 } from 'material-ui/styles/colors';


const Student = ({ secretData, user, allUsers }) => (
    <Card className="container" id="noBackground">
    <CardTitle
      title="Dashboard"
      titleColor="#ffeb3b"
      // subtitleColor="#ffeb3b"
      // subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'white' }}>Welcome <strong>{user.name}</strong>! <br />
  
  <br />
   <div>Coin amount: {user.Coin}</div>
  <br />
  <RaisedButton
      label="Request Coins"
      labelPosition="before"
      primary={true}
      icon={<Coin />}
    />
    <ChipList user={user}
    handleTouchTap={handleTouchTap}/>
    </CardText>
    }
  </Card>
);

Student.propTypes = {
  secretData: PropTypes.string.isRequired,
};


export default Student;
