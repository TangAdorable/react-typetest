import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function DialogCreateNode() {
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
            <Grid container sx={{ height: '300px', width: '500px' }}
                direction="column"
                justifyContent="center"
                alignItems="center">

                <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                    <InputLabel id="demo-select-small-label">Country</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={country}
                        onChange={Country}
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
                <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                    <InputLabel id="demo-select-small-label">PMESII</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={pmesii}
                        onChange={Pmesii}
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
                <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                    <InputLabel id="demo-select-small-label">ASCOPE</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={ascope}
                        onChange={Ascope}
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
                <TextField sx={{ m: 1, minWidth: 300 }}
                id="outlined-basic" label="Name"
                variant="outlined" multiline
                maxRows={3} value={sub_ascope}
                onChange={(event) => setSub_ascope(event.target.value)} />
            </Grid>

        </>
    );
}
