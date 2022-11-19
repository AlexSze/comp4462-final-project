import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";

export function attrToText(attr) {
    if (attr == "fastFoodCount") {
        return "Number of Fastfood restuarants";
    } else if (attr == "resFoodCount") {
        return "Number of restuarants";
    }
}

export default function AttrDropdown(props) {
    const attrList = ["fastFoodCount", "resFoodCount"]
    return (
        <FormControl variant="filled" style={{ backgroundColor: "#738cd6" }}>
            <InputLabel style={{ color: "#ffffff" }}>Attributes</InputLabel>
            <Select
                sx={{
                    width: 230,
                    color: "#ffffff",
                    border: "3px solid #ffffff",
                    textAlign: "left",
                }}
                value={props.attr}
                onChange={(e) => {
                    props.setAttrState(e.target.value);
                }}
            >
                {attrList.map((attr) => (
                    <MenuItem key={attr} value={attr}>
                        {attrToText(attr)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    )
}