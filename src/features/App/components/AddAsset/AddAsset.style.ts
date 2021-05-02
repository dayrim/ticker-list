import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addAssetDialog: { minWidth: "300px" },
  addAssetContent: {
    "& > *": {
      marginBottom: "30px",
    },
  },
  tooltip: {
    backgroundColor: "#AF0101 !important",
    color: "#ffffff !important",
  },
  arrow: {
    color: "#AF0101 !important",
    alignSelf: "end",
  },
}));
