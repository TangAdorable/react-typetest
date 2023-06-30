import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));


// interface BasicTabsProps {
//     value: {
//         pmesii: number;
//     };
// }


// export default function NodeCreateUpdateDelete(props: BasicTabsProps) {
export default function NodeCreateUpdateDelete() {
    const [isUpdate, setUpdate] = useState<boolean>(true);
    const [idNode, setidNode] = useState<string | number>(" -");
    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [sub_ascope, setSub_ascope] = useState<string>("");

    // useEffect(() => {
    //     if (props.value.pmesii > 0) {
    //         setUpdate(false);
    //         setidNode(props.value.pmesii);
    //     }

    // }, [props.value.pmesii]);

    return (
        <>
            <h1 style={{ fontSize: "20px", fontWeight: "normal", textAlign: "center" }}>
                Node: Create - Update - Delete
            </h1>
            <Grid container
                rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
            >
                <Grid item xs={5}>
                    <Item>ID Node</Item>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="standard"
                        disabled={true}
                        value={idNode}
                        style={{ backgroundColor: "#424242" }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Item>Country</Item>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="standard"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        style={{ backgroundColor: "#424242" }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Item>PMESII</Item>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="standard"
                        value={pmesii}
                        onChange={(event) => setPmesii(event.target.value)}
                        style={{ backgroundColor: "#424242" }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Item>ASCOPE</Item>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="standard"
                        value={ascope}
                        onChange={(event) => setAscope(event.target.value)}
                        style={{ backgroundColor: "#424242" }}
                    />
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
                    />
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
                            setidNode(" -")
                            setCountry("")
                            setPmesii("")
                            setAscope("")
                            setSub_ascope("")
                        }} variant="text">
                            เคลียร์
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}
