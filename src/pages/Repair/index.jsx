import React, { useRef } from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Edit, Delete } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { IconButton } from "@mui/material";

import LazyLoadingTable from "../../components/LazyLoadingTable";
//import { Dashboard } from "../InvoicePrinter";
import { useRepair } from "../../../hooks/services/useRepair";

import { styles } from "./styles";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Category",
    accessor: "category",
    width: "25",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Description",
    accessor: "description",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "25",
  },
  {
    Header: "Status",
    accessor: "status",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "25",
  },
  {
    Header: "Date",
    accessor: "date",
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
    id: "1",
    category: "Laptop",
    description: "Vivo notebook - Screen replacement",
    status: "completed",
    date: "20-06-2023",
  },
  {
    id: "2",
    category: "Phone",
    description: "Nokia 6x - Display replacement",
    status: "inprogress",
    date: "20-06-2023",
  },
  {
    id: "3",
    category: "TV",
    description: "Samsung TV - not turning on",
    status: "pending",
    date: "20-06-2023",
  }
];

const Repair = () => {
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
            Purchase Order
          </Grid>
          <Grid item>
            <Button
              startIcon={<AddCircleOutlineIcon />}
              classes={{ root: classes.btn }}
              // onClick={}
            >
              New Stock
            </Button>
          </Grid>
        </Grid>
        <Grid item className={classes.table} xs={12}>
          <LazyLoadingTable
            columns={columns}
            data={data}
            hiddenColumns={["itemCode", "id"]}
            fontSize="24px"
            color="#FFFFFF"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Repair;
