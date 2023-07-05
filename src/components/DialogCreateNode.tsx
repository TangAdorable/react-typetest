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
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { countryASEAN, pmesiiName, ascopeName } from '../data/pmesii'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import config from "../constants/config";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

type AlertDialogProps = {
    open: boolean;
    onClose: (isUpdate: boolean) => void;
  };

const SizeField = (props: any) => {
    const { size, value, onChange } = props;
    return (
        <>
            {size &&
                <TextField
                    fullWidth
                    id="outlined-number"
                    label="Size"
                    type="number"
                    size="small"
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        min: -25,
                        max: 25,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            }
        </>
    );
};

interface dataJson {
    labels: string,
    country: string,
    pmesii: string,
    pmesii_size?: number,
    ascope: string,
    ascope_size?: number,
    sub_ascope_name: string,
    sub_ascope_size?: number

}

export default function DialogCreateNode({ open, onClose }: AlertDialogProps) {
    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [subAscope, setSubAscope] = useState<string>("");

    const [pmesiiSize, setPmesiiSize] = useState<string | number>(15);
    const [ascopeSize, setAscopeSize] = useState<string | number>(10);
    const [subAscopeSize, setSubAscopeSize] = useState<string | number>(5);
    const [showSize, setShowSize] = useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleCancel = () => {
        setCountry("");
        setPmesii("");
        setAscope("");
        setSubAscope("");
        setShowSize(false);
        setPmesiiSize(15);
        setAscopeSize(10);
        setSubAscopeSize(5);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(!loading);

        const data: dataJson = {
            labels: "LabelTest",
            country: country,
            pmesii: pmesii,
            ascope: ascope,
            sub_ascope_name: subAscope
        }

        if (pmesiiSize !== 15) {
            data.pmesii_size = parseInt(String(pmesiiSize), 10);
        }
        if (ascopeSize !== 10) {
            data.ascope_size = parseInt(String(ascopeSize), 10);
        }
        if (subAscopeSize !== 5) {
            data.sub_ascope_size = parseInt(String(subAscopeSize), 10);
        }

        try {
            // await new Promise(r => setTimeout(r, 2000));
            const res = await axios.post(config.SOFTNIX_PMESII_URL + "/create/node", data);
            if (res.status === 200) {
                // console.log(res.data)
                // console.log("create success 200")
            }
            setLoading(loading)
        } catch (error) {
            console.error('error:', error);
        }
        handleCancel();
        onClose(true);
    };


    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={"sm"}>
                {/* sx={{ paddingBottom: 0 ,backgroundColor: "#9e9e9e" }} */}
                <DialogTitle sx={{ paddingBottom: 1 }}>Create Node</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Grid container
                            rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                        sx={{ marginTop: '-30px' }}
                        >
                            <Grid item xs={11.3} container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center">
                                <IconButton size="small" onClick={() => setShowSize(!showSize)}>
                                    {showSize ? <IndeterminateCheckBoxIcon /> : <AddBoxIcon />}

                                </IconButton>
                            </Grid>

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
                                    size={showSize}
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
                                    size={showSize}
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
                                />
                            </Grid>
                            <Grid item xs={1.5}>
                                <SizeField
                                    size={showSize}
                                    value={subAscopeSize}
                                    onChange={(event: any) => setSubAscopeSize(event.target.value)} />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error"
                            onClick={()=>{
                                handleCancel()
                                onClose(false)
                            }}>ยกเลิก</Button>
                        <LoadingButton type="submit" loading={loading} color="success" variant="contained">สร้าง</LoadingButton>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
