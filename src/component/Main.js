import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles({
  table: {
    minWidth: "",
  },
});


const purchases = [
  {
      "transactionId": "234234",
      "status": "<purchaseStatus>",
      "timestamp": 12345678,
      "title": "Title of product",
      "subtitle": "Subtitle of product",
      "description": "Longer description of product",
      "icon": "<base64imagedata>",
      "currency": "USD",
      "valueInCents": 199,
      "price": "$1.99",
      "paymentMethod": { "type": "card", "brand": "visa", "lastFour": "0004" }
  },
  {
      "transactionId": "243423",
      "status": "<purchaseStatus>",
      "timestamp": 12345678,
      "title": "Title of product",
      "subtitle": "Subtitle of product",
      "description": "Longer description of product",
      "icon": "<base64imagedata>",
      "currency": "USD",
      "valueInCents": 199,
      "price": "$1.99",
      "paymentMethod": { "type": "card", "brand": "visa", "lastFour": "0004" }
  },
  {
      "transactionId": "234332",
      "status": "<purchaseStatus>",
      "timestamp": 12345678,
      "title": "Title of product",
      "subtitle": "Subtitle of product",
      "description": "Longer description of product",
      "icon": "<base64imagedata>",
      "currency": "USD",
      "valueInCents": 199,
      "price": "$1.99",
      "paymentMethod": { "type": "card", "brand": "visa", "lastFour": "0004" }
  }
];

function App() {
const classes = useStyles();
const Tabmatches = useMediaQuery('(min-width:768px)');
const Mobilematches = useMediaQuery('(min-width:576px)');

return (
  <div className="App">
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        {Tabmatches ? (<TableRow>
          <TableCell>Item</TableCell>
          <TableCell align="right">purchase ID</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Payment via</TableCell>
          <TableCell align="right">Tax(0,00%)</TableCell>
          <TableCell align="right">Total</TableCell>
        </TableRow>): Mobilematches ?(
          <TableRow>
            <TableCell>Item/ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Payment via</TableCell>
            <TableCell align="right">Tax/Total</TableCell>
          </TableRow>
        ):!Mobilematches ? "":""}
      </TableHead>
      <TableBody>
        {purchases.map((row,i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">
              {Tabmatches ? row.title :  Mobilematches ? row.title+"/"+row.transactionId:row.title+"/"+row.transactionId+"/"+row.timestamp}
            </TableCell>
            {Tabmatches ? <TableCell align="right">{row.transactionId}</TableCell>:""}
            {Mobilematches ? (<TableCell align="right">{row.timestamp}</TableCell>):""}
            {Mobilematches  ? (<TableCell align="right">{row.currency}</TableCell>):""}
            <TableCell align="right">{Tabmatches ? row.price : Mobilematches ? row.price+"/"+row.price:row.currency+"/"+row.price+"/"+row.price}</TableCell>
            {Tabmatches ? <TableCell align="right">{row.price}</TableCell>:""}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);
}

export default App;
