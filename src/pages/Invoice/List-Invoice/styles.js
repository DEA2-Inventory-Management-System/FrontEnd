import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  gridContainer: {
    flexDirection: "column",
    flexWrap: "nowrap",
    backgroundColor: "#FFFFFF",
    padding: "30px",
  },
  plusIcon: {
    width: "30px",
    height: "30px",
    color: "White",
    paddingRight: "2px",
  },
  topCards: {
    margin: `1% 0`,
  },
  section: {
    paddingTop: "10px",
    height: "100%",
    paddingBottom: "30px",
  },
  assignBtn: {
    flexDirection: "row-reverse",
  },

  menuIconRoot: {
    width: "16px",
    height: "14px",
    color: "#808CA3",
    marginRight: "15px",
  },
  editIconRoot: {
    marginRight: "15px",
  },
  btnRoot: {
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    textTransform: "none",
    color: "#808CA3",
    padding: 0,
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    minWidth: "50px",
    height: "26px",
  },
  deleteBtn: {
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    textTransform: "none",
    color: "#FF5C8D",
    padding: 0,
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    minWidth: "50px",
    height: "26px",
  },
  divider: {
    margin: "0px 30px",
    "@media (max-width: 1330px)": {
      margin: "0px 0px",
    },
    textAlign: "right",
  },
  spinner: {
    width: "100%",
    height: "100%",
    marginTop: "10%",
  },
  btnText: {
    "@media (max-width: 1330px)": {
      display: "none",
    },
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: "bold",
    color: "Black",
  },
  btn: {
    minwidth: "8.3125em",
  },
  link: {
    textDecoration: "none",
  },
  totalAmount: {
    background: "#DFEAFF",
    color: "#0F5EF7",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "34px",
    padding: "0.625em",
    width: "100%",
    marginTop: "2.3%",
    borderRadius: "8px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    textAlign: "center",
    marginLeft: "5%",
    height: "40%",
  },

  title: {
    fontWeight: "600 !important",
    fontStyle: "normal !important",
    fontSize: "20px !important",
    fontFamily: "Nunito !important",
    lineHeight: "41px !important",
    paddingTop: "20px",
  },
  label: {
    color: "rgba(0, 24, 71, 1)",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "0.875rem",
    paddingBottom: "14px",
  },
  printButton: {
    paddingTop: "10px",
  },
}));
