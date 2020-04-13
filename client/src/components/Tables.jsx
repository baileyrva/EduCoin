import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Coins</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.allUsers.map(student => {
        return (
          <TableRow key={student._id}>
          <TableRowColumn>{student.name}</TableRowColumn>
          <TableRowColumn>{student.email}</TableRowColumn>
          <TableRowColumn>{student.Coin}</TableRowColumn>
        </TableRow>
        )
      })}
      
    </TableBody>
  </Table>
);

export default TableSimple;