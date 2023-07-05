import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
    onClose: () => void;
    delNodeRelation?: Record<string, any> | string; 
}

export default function DialogDeleteNodeRelation(props: AlertDialogProps) {
    const { open, onClose, delNodeRelation } = props;
    const parsedData = typeof delNodeRelation === 'string' ? JSON.parse(delNodeRelation) : delNodeRelation;

    const [country, setCountry] = useState<string>("");
    const [pmesii, setPmesii] = useState<string>("");
    const [ascope, setAscope] = useState<string>("");
    const [subAscope, setSubAscope] = useState<string>("");


    
    useEffect(()=>{
        setCountry("")
        setPmesii("")
        setAscope("")
        setSubAscope("")
    },[])


    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth={"sm"}>
                <DialogTitle sx={{ color: '#ff4569' }}>Delete Node or Relationship</DialogTitle>
                <DialogContent>
                    <Grid container
                        rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                        sx={{ marginTop: '1px' }}
                    >
                        <Grid item xs={4}>
                            <Item>Country</Item>
                        </Grid>
                        <Grid item xs={6.5}>
                        <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="standard"
                                value={country}
                                style={{ backgroundColor: "#424242" }}
                                multiline
                                maxRows={4}
                                disabled
                            />
                        </Grid>
                        {/* <Grid item xs={1.5}>
                            <SizeField showSize={countrySize} addSize={addCountrySize} />
                        </Grid> */}
                        <Grid item xs={4}>
                            <Item>PMESII</Item>
                        </Grid>
                        <Grid item xs={6.5}>
                        <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="standard"
                                value={pmesii}
                                style={{ backgroundColor: "#424242" }}
                                multiline
                                maxRows={4}
                                disabled
                            />
                        </Grid>
                        {/* <Grid item xs={1.5}>
                            <SizeField showSize={pmesiiSize} addSize={addPmesiiSize} />
                        </Grid> */}
                        <Grid item xs={4}>
                            <Item>ASCOPE</Item>
                        </Grid>
                        <Grid item xs={6.5}>
                        <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="standard"
                                value={ascope}
                                style={{ backgroundColor: "#424242" }}
                                multiline
                                maxRows={4}
                                disabled
                            />
                        </Grid>
                        {/* <Grid item xs={1.5}>
                            <SizeField showSize={ascopeSize} addSize={addAscopeSize} />
                        </Grid> */}
                        <Grid item xs={4}>
                            <Item>Name</Item>
                        </Grid>
                        <Grid item xs={6.5}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="standard"
                                value={subAscope}
                                style={{ backgroundColor: "#424242" }}
                                multiline
                                maxRows={4}
                                disabled
                            />
                        </Grid>
                        {/* <Grid item xs={1.5}>
                            <SizeField showSize={subAscopeSize} addSize={addSubAscopeSize} />
                        </Grid> */}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={onClose}>ยกเลิก</Button>
                    <Button color="warning" onClick={onClose} variant="contained">ลบ</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
