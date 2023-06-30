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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

interface AlertDialogProps {
    open: boolean;
    CreateNodeClose: () => void;
}



export default function DialogCreateNode({ open, CreateNodeClose }: AlertDialogProps) {
    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [sub_ascope, setSub_ascope] = useState<string>("");

    const Country = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
    };
    const Pmesii = (event: SelectChangeEvent) => {
        setPmesii(event.target.value);
    };
    const Ascope = (event: SelectChangeEvent) => {
        setAscope(event.target.value);
    };

    return (
        <>
            <Dialog open={open} onClose={CreateNodeClose} maxWidth={"sm"}>
                <DialogTitle>Create Node</DialogTitle>
                <DialogContent>
                    <Grid container
                        rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                    >

                        <Grid item xs={5}>
                            <Item>Country</Item>
                        </Grid>
                        <Grid item xs={7}>
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
                                        onChange={Country}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Brunei Darussalam</MenuItem>
                                        <MenuItem value={2}>Cambodia</MenuItem>
                                        <MenuItem value={3}>Indonesia</MenuItem>
                                        <MenuItem value={4}>Laos</MenuItem>
                                        <MenuItem value={5}>Malaysia</MenuItem>
                                        <MenuItem value={6}>Myanmar</MenuItem>
                                        <MenuItem value={7}>Philippines</MenuItem>
                                        <MenuItem value={8}>Singapore</MenuItem>
                                        <MenuItem value={9}>Vietnam</MenuItem>
                                        <MenuItem value={10}>Thailand</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Item>PMESII</Item>
                        </Grid>
                        <Grid item xs={7}>
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
                                        onChange={Pmesii}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Political</MenuItem>
                                        <MenuItem value={2}>Military</MenuItem>
                                        <MenuItem value={3}>Social</MenuItem>
                                        <MenuItem value={4}>Information</MenuItem>
                                        <MenuItem value={5}>Infrastructure</MenuItem>
                                        <MenuItem value={6}>Economic</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Item>ASCOPE</Item>
                        </Grid>
                        <Grid item xs={7}>
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
                                        onChange={Ascope}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Area</MenuItem>
                                        <MenuItem value={2}>Structures</MenuItem>
                                        <MenuItem value={3}>Capabilities</MenuItem>
                                        <MenuItem value={4}>Organization</MenuItem>
                                        <MenuItem value={5}>People</MenuItem>
                                        <MenuItem value={6}>Events</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Item>Name</Item>
                        </Grid>
                        <Grid item xs={7}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="standard"
                                value={sub_ascope}
                                onChange={(event) => setSub_ascope(event.target.value)}
                                style={{ backgroundColor: "#424242" }}
                                multiline
                                maxRows={4}
                            />
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={CreateNodeClose}>ยกเลิก</Button>
                    <Button color="success" onClick={CreateNodeClose} variant="contained">สร้าง</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}
