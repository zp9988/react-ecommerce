import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // media: {
  //   height: 260,
  // },

  media: {
    paddingLeft: "30%",
    width: 0,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "40%",
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
