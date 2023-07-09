import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import config from "../constants/config";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMyContext } from "../context/pmesiiContext";
import { countryASEAN, pmesiiName, ascopeName } from '../constants/pmesii'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

interface AlertDialogProps {
    open: boolean;
    onClose: (isCreateNode: boolean) => void;
}


interface deleteNode {
    node_id: number
}


export default function GridDeleteNode({ open, onClose }: AlertDialogProps) {
    const [loading, setLoading] = React.useState(false);
    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [subAscope, setSubAscope] = useState<string>("");

    const [pmesiiSize, setPmesiiSize] = useState<string | number>("");
    const [ascopeSize, setAscopeSize] = useState<string | number>("");
    const [subAscopeSize, setSubAscopeSize] = useState<string | number>("");
    const { value } = useMyContext();

    const handleCancel = () => {
        setLoading(false)
        setCountry("")
        setPmesii("")
        setAscope("")
        setSubAscope("")
        setPmesiiSize("")
        setAscopeSize("")
        setSubAscopeSize("")

    };


    useEffect(() => {
        if (value.node_labels !== undefined) {
            // node
            setCountry(value.country)
            setPmesii(value.pmesii)
            setAscope(value.ascope)
            setSubAscope(value.name)

            switch (value.label) {
                case "Country":
                    break;
                case "PMESII":
                    setPmesiiSize(value.size)
                    break;

                case "ASCOPE":
                    setAscopeSize(value.size)
                    break;

                case "SUB_ASCOPE":
                    setSubAscopeSize(value.size)
                    break;
            }
        }
    }, [value]);


    const SizeField = (props: any) => {
        const { value, onChange } = props;
        return (
            <>
                <TextField
                    fullWidth
                    id="outlined-number"
                    label="Size"
                    type="number"
                    size="small"
                    value={value}
                    onChange={onChange}
                    disabled
                    inputProps={{
                        min: -25,
                        max: 25,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </>
        );
    };

    const handleSubmitNode = async (event: any) => {
        event.preventDefault();
        setLoading(!loading);

        const data: deleteNode = {
            node_id: parseInt(value.id)
        }

        try {
            // await new Promise(r => setTimeout(r, 2000));
            const res = await axios.delete(config.SOFTNIX_PMESII_URL + "/delete/node", { data });
            if (res.status === 200) {
                console.log("create success 200")

                setLoading(loading)
                handleCancel()
                onClose(true)

            }

        } catch (error) {
            console.error('error:', error);
        }

    };

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={"md"} sx={{ '& .MuiDialog-paper': { width: '40%' } }}>
                <DialogTitle sx={{ color: '#d1ff33' }} >Delete Node</DialogTitle>
                <form onSubmit={handleSubmitNode}>
                    <DialogContent>
                        <Grid container
                            rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                            sx={{ marginTop: '-30px' }}
                        >
                            <Grid item xs={4}>
                                <Item>Country</Item>
                            </Grid>
                            <Grid item xs={6.5}>
                                <Grid item style={{ marginTop: "5px" }}>
                                    <FormControl
                                        variant="standard"
                                        size="small"
                                        style={{ width: "100%" }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={country}
                                            onChange={(event: SelectChangeEvent) => setCountry(event.target.value)}
                                            displayEmpty
                                            disabled
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {countryASEAN.map((item) => (
                                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>PMESII</Item>
                            </Grid>
                            <Grid item xs={6.5}>
                                <Grid item style={{ marginTop: "5px" }}>
                                    <FormControl
                                        variant="standard"
                                        size="small"
                                        style={{ width: "100%" }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={pmesii}
                                            onChange={(event: SelectChangeEvent) => setPmesii(event.target.value)}
                                            displayEmpty
                                            disabled
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {pmesiiName.map((item) => (
                                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={1.5}>
                                <SizeField
                                    value={pmesiiSize}
                                    onChange={(event: any) => setPmesiiSize(event.target.value)} />
                            </Grid>
                            <Grid item xs={4}>
                                <Item>ASCOPE</Item>
                            </Grid>
                            <Grid item xs={6.5}>
                                <Grid item style={{ marginTop: "5px" }}>
                                    <FormControl
                                        variant="standard"
                                        size="small"
                                        style={{ width: "100%" }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={ascope}
                                            onChange={(event: SelectChangeEvent) => setAscope(event.target.value)}
                                            displayEmpty
                                            disabled
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {ascopeName.map((item) => (
                                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={1.5}>
                                <SizeField
                                    value={ascopeSize}
                                    onChange={(event: any) => setAscopeSize(event.target.value)} />
                            </Grid>
                            <Grid item xs={4}>
                                <Item>Name</Item>
                            </Grid>
                            <Grid item xs={6.5}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    variant="standard"
                                    value={subAscope}
                                    onChange={(event) => setSubAscope(event.target.value)}
                                    style={{ backgroundColor: "#424242" }}
                                    multiline
                                    maxRows={4}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={1.5}>
                                <SizeField
                                    value={subAscopeSize}
                                    onChange={(event: any) => setSubAscopeSize(event.target.value)} />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={() => {
                            handleCancel()
                            onClose(false)
                        }}>ยกเลิก</Button>
                        <LoadingButton type="submit" loading={loading} color="warning" variant="contained">ลบ</LoadingButton>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
