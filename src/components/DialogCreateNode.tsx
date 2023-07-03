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
import {countryASEAN,pmesiiName,ascopeName}from '../data/pmesii'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

interface AlertDialogProps {
    open: boolean;
    onClose: () => void;
}
interface SizeFieldProps {
    showSize: boolean;
    addSize: () => void;
}



const SizeField = (props: SizeFieldProps) => {
    const { showSize, addSize } = props;
    return (
        <>
            {showSize ? (
                <TextField
                    fullWidth
                    id="outlined-number"
                    label="Size"
                    type="number"
                    size="small"
                    inputProps={{
                        min: -25,
                        max: 25,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            ) : (
                <IconButton aria-label="delete" size="small" onClick={addSize}>
                    <AddBoxIcon />
                </IconButton>
            )}
        </>
    );
};


export default function DialogDeleteNodeRelation({ open, onClose }: AlertDialogProps) {
    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [subAscope, setSubAscope] = useState<string>("");

    const Country = (event: SelectChangeEvent) => setCountry(event.target.value);
    const Pmesii = (event: SelectChangeEvent) => setPmesii(event.target.value);
    const Ascope = (event: SelectChangeEvent) => setAscope(event.target.value);

    const [countrySize, setCountrySize] = useState(false);
    const [pmesiiSize, setPmesiiSize] = useState(false);
    const [ascopeSize, setAscopeSize] = useState(false);
    const [subAscopeSize, setSubAscopeSize] = useState(false);

    const addCountrySize = () => setCountrySize(true);
    const addPmesiiSize = () => setPmesiiSize(true);
    const addAscopeSize = () => setAscopeSize(true);
    const addSubAscopeSize = () => setSubAscopeSize(true);


    const handleSubmit = (event:any) => {
        event.preventDefault();

        console.log(country)
        // Perform form submission logic
        console.log('Form submitted with value:', );
        // onClose();

        


      };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Dialog open={open} onClose={onClose} maxWidth={"sm"}>
                <DialogTitle>Create Node</DialogTitle>
                <DialogContent>
                    <Grid container
                        rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                        sx={{ marginTop: '1px' }}
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
                                        onChange={Country}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {countryASEAN.map((item) =>(
                                            <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={1.5}>
                            <SizeField showSize={countrySize} addSize={addCountrySize} />
                        </Grid> */}
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
                                        onChange={Pmesii}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {pmesiiName.map((item) =>(
                                            <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.5}>
                            <SizeField showSize={pmesiiSize} addSize={addPmesiiSize} />
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
                                        onChange={Ascope}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {ascopeName.map((item) =>(
                                            <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.5}>
                            <SizeField showSize={ascopeSize} addSize={addAscopeSize} />
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
                            <SizeField showSize={subAscopeSize} addSize={addSubAscopeSize} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="error"
                        onClick={()=>{
                            onClose()
                            setCountry("")
                            setPmesii("")
                            setAscope("")
                            setSubAscope("")
                            setCountrySize(false)
                            setPmesiiSize(false)
                            setAscopeSize(false)
                            setSubAscopeSize(false)
                        }                        
                        }>ยกเลิก</Button>
                    <Button type="submit" color="success" variant="contained">สร้าง</Button>
                </DialogActions>
            </Dialog>
            </form>
        </>
    );
}
