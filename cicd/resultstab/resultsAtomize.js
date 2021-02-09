
import React from 'react';
import ReactDom from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {
  ThemeProvider,
  StyleReset,
  Div,
  Button,
  Text,
  Icon
} from "atomize";


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class ResultsPanel extends React.Component {

StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

createData(name, movie, score, button) {
  return { name, movie, score, button};
}

button = 
<Button>
w="2.5rem"
bg="white"
border="1px solid"
borderColor="brand800"
m={{ b: "0.5rem" }}
rounded="brandRadius"
suffix={<Icon name="Card" size="10px" color="brand800" />}
onClick = {()=> this.showPanel = true}
</Button>


rows = [
  this.createData('Eli Kopter','Lion King Scene 1', 95, this.button),
  this.createData('Eli Kopter', 'The Lion, The Witch and The Wardrobe Scene 2', 100, this.button),
  this.createData('Avi Ron','Lion King Scene 1', 85),
  this.createData('Avi Ron','The Lion, The Witch and The Wardrobe Scene 2', 85, this.button),
  this.createData('Sammy Saviv','Lion King Scene 1', 95, this.button),
  this.createData('Sammy Saviv', 'The Lion, The Witch and The Wardrobe Scene 2', 100, this.button),
];

useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

classes = this.useStyles();

CustomizedTables() {
this.useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={this.classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <this.StyledTableCell>Name</this.StyledTableCell>
            <this.StyledTableCell align="right">Movie&nbsp</this.StyledTableCell>
            <this.StyledTableCell align="right">Score&nbsp;(g)</this.StyledTableCell>
            <this.StyledTableCell align="right">Open Details&nbsp;(g)</this.StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.rows.map((row) => (
            <this.StyledTableRow key={row.name}>
              <this.StyledTableCell component="th" scope="row">
                {row.name}
              </this.StyledTableCell>
              <this.StyledTableCell align="right">{row.movie}</this.StyledTableCell>
              <this.StyledTableCell align="right">{row.score}</this.StyledTableCell>
              <this.StyledTableCell align="right">{row.button}</this.StyledTableCell>
              
            </this.StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
    render() {
      return <h1> {this.props.name}</h1>;
    }
  }
