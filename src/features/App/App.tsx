import React, { useState } from 'react'
import { Route } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Button, Fab } from '@material-ui/core';
import { AssetList, SingleAsset, AddAsset } from "features/App/components";
import { ArrowBackIos as BackIcon } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

import useStyles from "./App.style";

const App = () => {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(false)
    const history = useHistory();
    return (

        <div className={classes.app}>
            <AddAsset
                isOpen={openDialog}
                onClose={() => setOpenDialog(false)}
            />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => setOpenDialog(true)}
                            >
                                Add new asset
                            </Button>
                        )}
                    />
                    <Route
                        path="/:symbol"
                        render={() => (
                            <Fab
                                size="medium"
                                variant="extended"
                                onClick={() => history.push("/")}
                            >
                                <BackIcon />
                            </Fab>
                        )}
                    />
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <Route
                path="/"
                exact
                render={() => <AssetList />}
            />
            <Route
                path="/:symbol"
                render={() => <SingleAsset />}
            />


        </div>

    )
}

export default App
