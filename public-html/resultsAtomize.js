import React from 'react';
import {
  Button,
  Icon
} from 'atomize';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const resultsAtomize = () => {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(name, movie, score, button) {
    return { name, movie, score, button };
  }

  const button =
    <Button
      w="2.5rem"
      bg="white"
      border="1px solid"
      borderColor="brand800"
      m={{ b: "0.5rem" }}
      rounded="brandRadius"
      suffix={<Icon name="Card" size="10px" color="brand800" />} />



  const rows = [
    createData('Eli Kopter', 'Lion King Scene 1', 95, button),
    createData('Eli Kopter', 'The Lion, The Witch and The Wardrobe Scene 2', 100, button),
    createData('Avi Ron', 'Lion King Scene 1', 85),
    createData('Avi Ron', 'The Lion, The Witch and The Wardrobe Scene 2', 85, button),
    createData('Sammy Saviv', 'Lion King Scene 1', 95, button),
    createData('Sammy Saviv', 'The Lion, The Witch and The Wardrobe Scene 2', 100, button),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

function render () {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Movie&nbsp</StyledTableCell>
              <StyledTableCell align="right">Score&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Open Details&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.movie}</StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
                <StyledTableCell align="right">{row.button}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
            };
}


