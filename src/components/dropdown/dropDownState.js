import {
    Box,
    Slider,
    Button,
    Toolbar,
    Typography,
    InputLabel, AppBar,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import states from "../../const/states";

export default function DropDownState(props) {
    return (
        <Box>
            <AppBar position="fixed" style={{ height: 90, justifyContent: "center" }}>
                <Toolbar>
                    <Typography aligh='left' variant='h4' sx={{ fontWeight: 'bold' }}>
                        Yelp restuarant analysis
                    </Typography>

                    {/* Select State */}
                    <Box
                        align='right'
                        sx={{
                            width: 230,
                            flexGrow: 1,
                            flexDirection: "row",
                        }}
                    >
                        <FormControl variant="filled">
                            <InputLabel style={{ color: "white" }}>US State</InputLabel>
                            <Select
                                sx={{
                                    width: 230,
                                    color: "#ffffff",
                                    border: "3px solid #ffffff",
                                    textAlign: "right",
                                }}
                                value={props.usState}
                                onChange={(e) => {
                                    props.setUsState(e.target.value);
                                }}
                            >
                                <MenuItem value="" >
                                    <em style={{ fontWeight: "bold" }}>All States</em>
                                </MenuItem>
                                {states.map((state) => (
                                    <MenuItem key={state} value={state}>
                                        {state}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}