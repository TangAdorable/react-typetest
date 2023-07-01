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

export default function DialogCreateRelation({ open, onClose }: AlertDialogProps) {
    const [sourceID, setSourceID] = useState<string | number>();
    const [targetID, setTargetID] = useState<string | number>();
    const [relationName, setRelationName] = useState<string>('');
    const [LineType, setLineType] = useState<string>('');
    const [ArrowDirection, setArrowDirection] = useState<string>('');
    const [size, setSize] = useState<string | number>(0);

    const arrow_direction = (event: SelectChangeEvent) => setArrowDirection(event.target.value);
    const line_type = (event: SelectChangeEvent) => setLineType(event.target.value);
    const relation_name = (event: SelectChangeEvent) => setRelationName(event.target.value);

    return (
        <>
            {/* "sm" | "xs" | "md" | "lg" | "xl" */}
            {/* sx={{ '& .MuiDialog-paper': { backgroundColor: '#9e9e9e' } }} */}
            <Dialog open={open} onClose={onClose} maxWidth={"md"} sx={{ '& .MuiDialog-paper': { width: '40%' } }}>
                <DialogTitle>Create Relationship</DialogTitle>
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
                                            onChange={relation_name}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={0}>สนับสนุน</MenuItem>
                                            <MenuItem value={1}>พึ่งพา</MenuItem>
                                            <MenuItem value={2}>ขัดแย้ง</MenuItem>
                                            <MenuItem value={3}>ต่อต้าน</MenuItem>
                                            <MenuItem value={4}>มีอิทธิพล</MenuItem>
                                            <MenuItem value={5}>เกื้อกูล</MenuItem>
                                            <MenuItem value={6}>ควบคุม</MenuItem>
                                            <MenuItem value={7}>ปฏิปักษ์</MenuItem>
                                            <MenuItem value={8}>รบกวน</MenuItem>
                                            <MenuItem value={9}>กำหนดทิศทาง</MenuItem>
                                            <MenuItem value={10}>ตัดสิน</MenuItem>
                                            <MenuItem value={11}>ไกล่เกลี่ย</MenuItem>
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
                                                onChange={line_type}
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
                                                onChange={arrow_direction}
                                                label="line"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={-1}>ไม่ระบุ</MenuItem>
                                                <MenuItem value={0}>←</MenuItem>
                                                <MenuItem value={1}>→</MenuItem>
                                                <MenuItem value={2}>↔</MenuItem>
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
                    <Button color="error" onClick={onClose}>ยกเลิก</Button>
                    <Button color="success" onClick={onClose} variant="contained">สร้าง</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
