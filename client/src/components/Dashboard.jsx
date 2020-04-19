import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from "material-ui/Card";
import TableSimple from "./Tables.jsx";
import ChipList from "./Chips/Chips.jsx"

const Dashboard = ({ secretData, user, allUsers }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && (
      <CardText style={{ fontSize: "16px", color: "green" }}>
        Welcome <strong>{user.name}</strong>!<br />
        {secretData} <br />
        Student data <br />
        {user.Coin - 5}{" "}
      </CardText>
    )}

    <TableSimple allUsers={allUsers} />
    <ChipList user={user} />
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
};

export default Dashboard;
