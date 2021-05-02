import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    app: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "0px 20px"
    },
    appBar: {
        maxWidth: "1200px",
        maxHeight: "790px",
        width: "100%",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
    }
}))