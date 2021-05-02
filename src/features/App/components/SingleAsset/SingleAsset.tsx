import React, { useEffect, useMemo } from 'react'
import { DataGrid, GridColumns, } from '@material-ui/data-grid';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleAsset, getSingleAsset } from "store";

import useStyles from "./SingleAsset.style";

const SingleAsset = () => {
    const { symbol } = useParams<{ symbol: string }>()
    const dispatch = useDispatch()
    const singleAsset = useSelector(getSingleAsset)

    const classes = useStyles()
    useEffect(() => {

        dispatch(fetchSingleAsset.request(symbol))

    }, [symbol, dispatch])

    const rows = useMemo(() => singleAsset?.orders || [], [singleAsset])

    const columns: GridColumns = useMemo(() => [
        {
            field: 'num', headerName: 'Number of orders', flex: 1
        },
        {
            field: 'qty', headerName: 'Quantity', flex: 1
        },
        {
            field: 'px', headerName: 'Price', flex: 1
        },
    ], [])
    return (
        <div className={classes.singleAsset}>
            <DataGrid rows={rows} columns={columns} pageSize={13} />
        </div>
    )
}

export default SingleAsset
