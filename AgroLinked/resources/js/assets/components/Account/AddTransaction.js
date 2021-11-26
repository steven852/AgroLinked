import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

class AddTransaction extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: null,
      benefactor: "",
      type: null,
      amount: 0,
      details: "",
      history:[],
    };

    this.handleChange = (e) => {
      const {name, value} = e.target;
      this.setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    this.handleChangeType = (event, value) =>{
      console.log(this.state.date)
      this.setState(prevState => ({
        ...prevState,
        type: value,
      }));
    };

    this.handleChangeDate = (newValue) => {
      this.setState({
        date: moment(newValue).format('YYYY-MM-DD'),
      });
    };

    this.handleClear = (e) => {
      const {name, value} = e.target;
      this.setState(prevState => ({
        date: null,
        benefactor: "",
        type: null,
        amount: 0,
        details: "",
      }));

    };

    this.handleAdd = (e) => {
      $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        method: "POST",
        url: "/transactions",
        //dataType: "JSON", // if not commeted the response is expexted on a json format so the error triggers
        data: {
          date: this.state.date,
          beneficiary: this.state.benefactor,
          type: this.state.type,
          amount: this.state.amount,
          details: this.state.details,
        },
        success: (data) => {
          this.updateHistory();
        },
      });
    };

    this.updateHistory = () => {
      $.ajax({
        method: "GET",
        url: "/transactions",
        dataType: "JSON",
        success: (data) => {
          this.setState(prevState => ({
            ...prevState,
            history: data,
          }));
        },
        error: (data) => {
          callback("error")
        },
      });
    };
    this.updateHistory();
  }

  render(){
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              sx={{ mt: 2}}
              label="Date"
              name="date"
              inputFormat="dd/MM/yyyy"
              value={this.state.date}
              onChange={this.handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8}>
          <TextField
           fullWidth
           label="Benefactor"
           name="benefactor"
           value={this.state.benefactor}
           onChange={this.handleChange}
           />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            options={["Income", "Energy", "Pesticides", "Machinery", "Βreakdowns", "Maintenance", "Taxes", "Other"]}
            fullWidth
            value={this.state.type}
            onChange={this.handleChangeType}
            renderInput={(params) =>
              <TextField
                name="type"

                {...params}
                label="Type"
               />}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          fullWidth
          label="Amount"
          type="number"
          name="amount"
          value={this.state.amount === 0 ? "" : this.state.amount}
          onChange={this.handleChange}
          InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Details"
            name="details"
            multiline
            rows={3}
            fullWidth
            value={this.state.details}
            onChange={this.handleChange}
          />
        </Grid>

        <Grid container
          justifyContent="flex-end"
          direction="row"
        >
          <Button
            className={"mt-3 me-2"}
            type="button"
            variant="contained"
            onClick={this.handleAdd}
          >Add
          </Button>
          <Button
            className={"mt-3 bg-secondary"}
            type="button"
            variant="contained"
            onClick={this.handleClear}
          >Clear
          </Button>
        </Grid>
        <Divider style={{marginTop:'20px', width:'100%'}} />
        <Typography className={"mt-3"} variant="h6" component="h2">
          History
        </Typography>

        <TableContainer component={Paper} className={"mt-3"}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Benefactor</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Amount&nbsp;(€)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.history.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.date}
                  </TableCell>
                  <TableCell align="right">{data.beneficiary}</TableCell>
                  <TableCell align="right">{data.type}</TableCell>
                  <TableCell align="right">{data.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>


    );
  }

}

export default AddTransaction;
// {rows.map((row) => (
//   <TableRow
//     key={row.name}
//     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//   >
//     <TableCell component="th" scope="row">
//       {row.name}
//     </TableCell>
//     <TableCell align="right">{row.calories}</TableCell>
//     <TableCell align="right">{row.fat}</TableCell>
//     <TableCell align="right">{row.carbs}</TableCell>
//   </TableRow>
// ))}
