import React from 'react'
import { Route } from "react-router-dom";

import useStyles from "./App.style";

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.app}>

            <Route
                path="/"
                render={() => <>Ticker List</>}
            />
        </div>
    )
}

export default App
