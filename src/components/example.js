import {
    Card, CardContent, Typography
} from "@mui/material";

export default function Example(props) {
    return (
        <Card variant="outlined">
            <CardContent>
                {/* TODO */}
                <Typography
                    variant='h1'
                    direction='row'
                    color='black'
                    align='left'
                    underline='hover'
                >
                    Figure
                </Typography>
            </CardContent>
        </ Card>
    )
}