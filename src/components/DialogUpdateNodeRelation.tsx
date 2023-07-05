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
import InputLabel from "@mui/material/InputLabel";
import { relationName as relationName_, arrowDirection as arrowDirection_ } from "../data/pmesii";
import axios from "axios";
import config from "../constants/config";
import LoadingButton from "@mui/lab/LoadingButton";

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

interface dataJson {
    node_id_1: number,
    node_id_2: number,
    label: string,
    name: string,
    line_type: number,
    arrow_direction: number,
    size: number
}


export default function DialogUpdateNodeRelation({ open, onClose }: AlertDialogProps) {
    const [sourceID, setSourceID] = useState<string | number>(6510);
    const [targetID, setTargetID] = useState<string | number>(6506);
    const [labelName, setLabelName] = useState<string>("Relation");
    const [relationName, setRelationName] = useState<string>("");
    const [LineType, setLineType] = useState<string>();
    const [ArrowDirection, setArrowDirection] = useState<string>();
    const [size, setSize] = useState<string | number>(0);
    const [loading, setLoading] = React.useState(false);

    const handleCancel = () => {
        setSourceID("")
        setTargetID("")
        setLabelName("")
        setRelationName("")
        setLineType("")
        setArrowDirection("")
        setSize(0)
        setLoading(false)
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(!loading);

        const data: dataJson = {
            node_id_1: parseInt(String(sourceID), 10),
            node_id_2: parseInt(String(targetID), 10),
            label: labelName,
            name: relationName,
            line_type: parseInt(String(LineType), 10),
            arrow_direction: parseInt(String(ArrowDirection), 10),
            size: parseInt(String(size), 10),
        }

        try {
            // await new Promise(r => setTimeout(r, 2000));
            const res = await axios.post(config.SOFTNIX_PMESII_URL + "/create/relationship", data);
            if (res.status === 200) {
                // console.log(res.data)
                console.log("create success 200")
            }
            setLoading(loading)
        } catch (error) {
            console.error('error:', error);
        }
        handleCancel()
    };

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={"md"} sx={{ '& .MuiDialog-paper': { width: '40%' } }}>
                <DialogTitle sx={{ color: '#d1ff33' }} >Update Node or Relationship</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Grid container
                            rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={5}>
                                    <Item>Source: ID Node</Item>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        variant="standard"
                                        value={sourceID}
                                        onChange={(event) => setSourceID(event.target.value)}
                                        style={{ backgroundColor: "#424242" }}
                                        disabled
                                    />
                                </Grid>

                                <Grid item xs={5}>
                                    <Item>Target: ID Node</Item>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        variant="standard"
                                        value={targetID}
                                        onChange={(event) => setTargetID(event.target.value)}
                                        style={{ backgroundColor: "#424242" }}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <Item>Line: relation name</Item>
                                </Grid>
                                <Grid item xs={5.6}>
                                    <Grid item style={{ marginTop: "-10px" }}>
                                        <FormControl
                                            variant="standard"
                                            size="small"
                                            style={{ width: "100%" }}
                                        >
                                            <InputLabel id="demo-simple-select-standard-label">
                                                Relation Name
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={relationName}
                                                onChange={(event: SelectChangeEvent) => setRelationName(event.target.value)}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {relationName_.map((item) => (
                                                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1.4} container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-end">
                                    <Button variant="outlined" href="https://www.google.com/" target="_blank" size="small" color="info" >
                                        Manage
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={5}>
                                            <Item>Line</Item>
                                        </Grid>
                                        <Grid item xs={7} style={{ marginTop: "-10px" }}>
                                            <FormControl
                                                variant="standard"
                                                size="small"
                                                style={{ width: "100%" }}
                                            >
                                                <InputLabel id="demo-simple-select-standard-label">
                                                    Line
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={LineType}
                                                    onChange={(event: SelectChangeEvent) => setLineType(event.target.value)}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={0} >- - - - - - - - - -</MenuItem>
                                                    <MenuItem value={1} ><hr /></MenuItem>
                                                </Select>

                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={5}>
                                            <Item >Arrow Direction</Item>
                                        </Grid>
                                        <Grid item xs={7} style={{ marginTop: "-10px" }}>
                                            <FormControl
                                                variant="standard"
                                                size="small"
                                                style={{ width: "100%" }}
                                            >
                                                <InputLabel id="demo-simple-select-standard-label">
                                                    Arrow Direction
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={ArrowDirection}
                                                    onChange={(event: SelectChangeEvent) => setArrowDirection(event.target.value)}
                                                    label="line"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {arrowDirection_.map((item) => (
                                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={5}>
                                            <Item>size</Item>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                                fullWidth
                                                id="outlined-number"
                                                label="Number"
                                                type="number"
                                                size="small"
                                                value={size}
                                                onChange={(event) => setSize(event.target.value)}
                                                inputProps={{
                                                    min: -25,
                                                    max: 25,
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={() => {
                            handleCancel()
                            onClose()
                        }}>ยกเลิก</Button>
                        <LoadingButton type="submit" loading={loading} color="success" variant="contained">สร้าง</LoadingButton>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
