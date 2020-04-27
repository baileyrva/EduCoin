import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from "material-ui/Card";
import Coin from "material-ui/svg-icons/action/donut-small";
import RaisedButton from "material-ui/RaisedButton";
import ChipList from "./Chips/Chips.jsx";

const Student = ({ secretData, user, handleTouchTap, coin, CoinExchange, hasOpenRequest }) => (
  <Card className="container" id="noBackground">
    <CardTitle
      title="Dashboard"
      titleColor="#ffeb3b"
    />
    {secretData && (
      <CardText style={{ fontSize: "16px", color: "white" }}>
        Welcome <strong>{user.name}</strong>! <br />
        <div>Coin amount: {coin}</div>
        <div>Last Request: {user.requestHistory[user.requestHistory.length - 1].status}</div>
      </CardText>
    )}
    {!hasOpenRequest ? (
      <RaisedButton
        label="Request Coins"
        labelPosition="before"
        primary={true}
        icon={<Coin />}
        onClick={CoinExchange}
      />
    ) : null}
    <ChipList user={user} handleTouchTap={handleTouchTap} />
  </Card>
);

Student.propTypes = {
  secretData: PropTypes.string.isRequired,
};

export default Student;
