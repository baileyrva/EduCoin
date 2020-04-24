import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Coin from 'material-ui/svg-icons/action/donut-small';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableSimple = (props) => (
  <Table showCheckboxes={false}>
    <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Coins</TableHeaderColumn>
        <TableHeaderColumn>Requests Pending</TableHeaderColumn>
        <TableHeaderColumn>Deny request</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody 
    displayRowCheckbox={false}
    >
      {props.allUsers.map(student => {
        return (
          <TableRow key={student._id}>
            <TableRowColumn>{student.name}</TableRowColumn>
            <TableRowColumn>{student.email}</TableRowColumn>
            <TableRowColumn>{student.Coin}</TableRowColumn>
            <TableRowColumn>
              {student.pendingRequest ? 
              (
              <RaisedButton
              label="Approve"
              labelPosition="before"
              primary={true}
              icon={<Coin />}
              onClick={() => {props.giveCoins(student)}}
            />
              ) : '' }
            </TableRowColumn>
            <TableRowColumn>
              {student.pendingRequest ?
              (
              <RaisedButton
              label="Deny"
              labelPosition="before"
              primary={true}
              icon={<Coin />}

            />
              ) : '' }
            </TableRowColumn>
          </TableRow>
        )
      })}

    </TableBody>
  </Table>
);

export default TableSimple;