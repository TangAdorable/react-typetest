import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

interface BasicTabsProps {
    value: {
        pmesii: number;
        relation: number;
    };
}


export default function RelationCreateUpdateDelete(props: BasicTabsProps) {

    const [isUpdate, setUpdate] = useState<boolean>(true);
    const [idRelation, setIdRelation] = useState<string | number>(" -");
    const [sourceID, setSourceID] = useState<string | number>();
    const [targetID, setTargetID] = useState<string | number>();
    const [relationName, setRelationName] = useState<string>('');
    const [size, setSize] = useState<string | number>(0);
    const [idsource, setIdSource] = useState<string | number>();
    const [idtarger, setIdTarget] = useState<string | number>();

    const [LineType, setLineType] = useState<string>('');
    const [ArrowDirection, setArrowDirection] = useState<string>('');

    const arrow_direction = (event: SelectChangeEvent) => {
        setArrowDirection(event.target.value);
    };

    const line_type = (event: SelectChangeEvent) => {
        setLineType(event.target.value);
    };

    const relation_name = (event: SelectChangeEvent) => {
        setRelationName(event.target.value);
    };


    function addIdSource() {
        setSourceID(idsource)
    }

    function addIdTarget() {
        setTargetID(idtarger)
    }

    useEffect(() => {
        if (props.value.relation > 0) {
            setUpdate(false);
            setIdRelation(props.value.relation)
            setIdSource(props.value.pmesii)
            setIdTarget(props.value.pmesii)
        }

    }, [props.value]);


    return (
        <>
            <h1 style={{ fontSize: "20px", fontWeight: "normal", textAlign: "center" }}>
                Relation: Create - Update - Delete
            </h1>

            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Item>ID Relation</Item>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="standard"
                        value={idRelation}
                        disabled={true}
                        style={{ backgroundColor: "#424242" }}
                    />
                </Grid>
                <Grid item xs={4}>
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
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="delete" size="small" onClick={addIdSource}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
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
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label="delete" size="small" onClick={addIdTarget}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <Item>Line: relation name</Item>
                </Grid>
                <Grid item xs={7}>
                        <Grid item  style={{ marginTop: "-10px" }}>
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
                <Grid item xs={1}>
                    <IconButton aria-label="delete" size="small" onClick={addIdTarget}>
                        <AddBoxIcon />
                    </IconButton>
                </Grid>
                
                <Grid item xs={6}>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6}>
                            <Item>Line</Item>
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: "-10px" }}>
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
                                    <MenuItem value={1} ><hr/></MenuItem>
                                </Select>

                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6}>
                            <Item>Type: Arrow Direction</Item>
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "-10px" }}>
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
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value={-1}>ไม่ระบุ</MenuItem>
                                    <MenuItem value={0}>←</MenuItem>
                                    <MenuItem value={1}>→</MenuItem>
                                    <MenuItem value={2}>↔</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Item>size</Item>
                </Grid>
                <Grid item xs={3}>
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
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={1} direction="row">
                        <Button color="success" disabled={!isUpdate} variant="contained">
                            สร้าง
                        </Button>
                        <Button color="warning" disabled={isUpdate} variant="contained">
                            อัพเดท
                        </Button>
                        <Button color="error" disabled={isUpdate} variant="contained">
                            ลบ
                        </Button>
                        <Button color="inherit" onClick={() => {
                            setUpdate(true)
                            setIdRelation(" -")
                            setSourceID("")
                            setTargetID("")
                            setLineType("")
                            setArrowDirection("")
                            setRelationName("")
                            setSize(0)
                        }} variant="text">
                            เคลียร์
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}