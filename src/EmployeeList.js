import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {EmployeeContext} from './EmployeeContext'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';




const columns = [
    { 
      id: 'emp_id', 
      label: 'Emp\u00a0ID', 
      minWidth: 170,
      format: (value) => value.toLocaleString('en-US')
     },
    { 
      id: 'firstName', 
      label: 'First\u00a0Name', 
      minWidth: 100,
      format: (value) => value.toLocaleString('en-US')
     },
    {
      id : 'lastName',
      label : 'Last\u00a0Name',
      minWidth : 170,
      align : 'center',
      format : (value) => value.toLocaleString('en-US'),
    },{
        id : 'address',
        label : 'Address',
        minWidth : 170,
        align : 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
      id : 'position',
      label : 'Position',
      minWidth : 170,
      align : 'right',
      format : (value) => value.toLocaleString('en-US'),
    },
    {
      id : 'status',
      label : 'Status',
      minWidth : 170,
      align : 'right',
      format : (value) => value.toFixed(2),
    },
  ];
  
 
  
  const useStyles = makeStyles(theme =>({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
      marginTop: theme.spacing(4)
    },
  }));

const MovieList = () =>{

    const [employees, setEmployees] = useContext(EmployeeContext)
    const rows = employees
    const id = new Date().valueOf()
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

return (
  <Paper className={classes.root}>
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.emp_id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  </Paper>
);

}

export default MovieList