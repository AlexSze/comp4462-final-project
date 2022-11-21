import { yellow } from "@mui/material/colors";
import {View, Text} from "react-native";

export function RestaurantName({ name, x, y }) {

    return(
        <View style={[{ transform: [{ rotate: "90deg" }]}, {left: x}, {top: y}, {position: "relative"}]}> 
            <Text> {name} </Text>
        </View>
    )
}


// {left: "-280px"}, {top: "260px"}