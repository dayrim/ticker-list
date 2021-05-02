import React, { useMemo } from 'react'
import { Asset } from "Models";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { getAvailableAssets, addAsset } from "store";
import { ErrorTooltip } from "features/App/components"

import useStyles from "./AddAsset.style";

interface PropTypes {
    isOpen: boolean,
    onClose: Function
}
interface FormValues {
    comment: string,
    asset?: Asset
}
const AddAsset = ({ isOpen = false, onClose }: PropTypes) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const availableAssets = useSelector(getAvailableAssets)

    const initialValues = useMemo((): FormValues => ({
        comment: "",
        asset: undefined
    }), [])

    const onSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        dispatch(addAsset({
            symbol: values?.asset?.symbol || "",
            comment: values.comment
        }))
        resetForm()
        onClose()
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize={true}
            validationSchema={Yup.object().shape({
                comment: Yup.string()
                    .min(3, "Comment must be at least 3 characters long"),
                asset: Yup.object()
                    .required("Asset is required.")
            })}
        >
            {(props) => {
                const {
                    handleSubmit,
                    values,
                    handleChange,
                    setFieldValue,
                    errors,
                } = props;
                return (
                    <Dialog open={isOpen} >
                        <Form onSubmit={handleSubmit} className={classes.addAssetDialog}>
                            <DialogTitle >Add asset</DialogTitle>
                            <DialogContent className={classes.addAssetContent}>
                                <ErrorTooltip title={errors.asset}>
                                    <Autocomplete
                                        options={availableAssets}
                                        autoComplete
                                        onChange={(e, asset) => setFieldValue("asset", asset || initialValues.asset)}
                                        getOptionLabel={({ symbol }) => symbol}

                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                type="text"
                                                name="asset"
                                                variant='outlined'
                                                placeholder="Enter asset name"
                                                label="Add asset"

                                            />
                                        )}

                                    />
                                </ErrorTooltip>
                                <ErrorTooltip title={errors.comment}>
                                    <TextField
                                        type="text"
                                        name="comment"
                                        variant='outlined'
                                        placeholder="Enter asset comment"
                                        label="Custom comment"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        onChange={handleChange}
                                        value={values.comment}
                                        error={!!errors.comment}
                                    ></TextField>
                                </ErrorTooltip>
                            </DialogContent>
                            <DialogActions>

                                <Button
                                    onClick={() => onClose()}
                                    variant="contained"
                                    color="primary"
                                >
                                    Cancel
                            </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                            </Button>
                            </DialogActions>

                        </Form>

                    </Dialog>
                );
            }}
        </Formik >


    )
}

export default AddAsset
