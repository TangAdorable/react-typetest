import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
    MuiColorInput,
    MuiColorInputValue,
    MuiColorInputColors,
    MuiColorInputFormat
} from 'mui-color-input'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function ColorSize() {

    const [value, setValue] = React.useState<MuiColorInputValue>('#ffffff')

    const handleChange = (newValue: string, colors: MuiColorInputColors) => {
        setValue(newValue)
    }
    const format: MuiColorInputFormat = 'hex'

    return (
        <>
            <Grid container
                rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
            >
                <Grid item xs={2}>
                    <Item>Color</Item>
                </Grid>
                <Grid item xs={4}>
                    <MuiColorInput value={value} size="small" onChange={handleChange} format={format} />
                </Grid>

                <Grid item xs={2}>
                    <Item>Size</Item>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="outlined-number"
                        label="Number"
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
                </Grid>

                <Grid item xs={2}>
                    <Item>Color</Item>
                </Grid>
                <Grid item xs={4}>
                    <MuiColorInput value={value} size="small" onChange={handleChange} format={format} />
                </Grid>

                <Grid item xs={2}>
                    <Item>Size</Item>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="outlined-number"
                        label="Number"
                        type="number"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>
                <Grid item xs={2}>
                    <Item>Color</Item>
                </Grid>
                <Grid item xs={4}>
                    <MuiColorInput value={value} size="small" onChange={handleChange} format={format} />
                </Grid>

                <Grid item xs={2}>
                    <Item>Size</Item>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="outlined-number"
                        label="Number"
                        type="number"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Item>Color</Item>
                </Grid>
                <Grid item xs={4}>
                    <MuiColorInput value={value} size="small" onChange={handleChange} format={format} />
                </Grid>

                <Grid item xs={2}>
                    <Item>Size</Item>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="outlined-number"
                        label="Number"
                        type="number"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

            </Grid>

        </>
    )
}