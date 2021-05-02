import React, { useMemo } from 'react'
import { DataGrid, GridColumns, } from '@material-ui/data-grid';
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { getAssetList, deleteAsset } from "store"

import useStyles from "./AssetList.style";


const AssetList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const Assets = useSelector(getAssetList)
    const columns: GridColumns = useMemo(() => [
        {
            field: 'symbol',
            headerName: 'Asset',
            width: 120,

        },
        {
            field: 'name', headerName: 'Name',
            width: 120
        },
        { field: 'comment', headerName: 'Comment', flex: 1 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 120

        },
        {
            field: "",
            headerName: "Action",
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: ({ row: { id } }) => {
                return (
                    <Button
                        onClick={() => dispatch(deleteAsset(id))} >
                        Remove
                    </Button >
                )
            }

        }
    ], [dispatch])
    return (
        <div className={classes.assetList}>
            <DataGrid
                onRowClick={({ row: { symbol } }) => history.push(`/${symbol}`)}
                rows={Assets}
                columns={columns}
                pageSize={13} />
        </div>
    )
}
export default AssetList
