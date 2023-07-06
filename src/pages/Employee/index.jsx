import React, { useRef } from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Edit, Delete } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { IconButton } from "@mui/material";

import LazyLoadingTable from "../../components/LazyLoadingTable";


import { styles } from "./styles";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Name",
    accessor: "name",
    width: "25",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  
  {
    Header: "Address",
    accessor: "address",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "25",
  },
  {
    Header: "Phone",
    accessor: "phone",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "25",
  },
  {
    Header: "DOB",
    accessor: "dob",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "25",
  },
  {
    Header: "Actions",
    Cell: ({ row }) => (
      <>
        <IconButton onClick={() => console.log("")}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => console.log("")}>
          <Delete />
        </IconButton>
      </>
    ),
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
];

const data = [
  {
    id: "1001",
    name: "Grace",
    address: "Galle",
    phone: "0783214598",
    dob:"21-05-1991",
  },
  {
    id: "1002",
    name: "Lalith",
    address: "Homagama",
    phone: "0775495219",
    dob:"02-03-1995",
  },
  {
    id: "1003",
    name: "Janak",
    address: "Kuliyapitiya",
    phone: "0726598751",
    dob:"12-04-1996",
  }
];

const Employee = () => {
    const classes = styles();
    const location = useLocation();
    console.log("location", location);
  
    return (
      <>
        <Grid
          item
          container
          alignContent="flex-start"
          className={classes.section}
        >
          <Grid container justifyContent="space-between" className={classes.top}>
            <Grid item className={classes.heading}>
              Employee
            </Grid>
            <Grid item>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                classes={{ root: classes.btn }}
                // onClick={}
              >
                Add New Employee
              </Button>
            </Grid>
          </Grid>
          <Grid item className={classes.table} xs={12}>
            <LazyLoadingTable
              columns={columns}
              data={data}
              //hiddenColumns={["itemCode", "id"]}
              fontSize="24px"
              color="#FFFFFF"
            />
          </Grid>
        </Grid>
      </>
    );
  };
  export default Employee;
  