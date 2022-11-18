import { CircleMarker, MapContainer, TileLayer, Tooltip, useMap } from 'react-leaflet'
import {
    Card, CardContent
} from "@mui/material";
import { loadMapData } from "../../utils/loadData";
import "leaflet/dist/leaflet.css";



export default function Map({ usState }) {
    const data = loadMapData(usState);

    function stateCenter() {
        if (usState === "") return [38, -98];

        const lats = data.map((restuarant) => restuarant["coordinates"][0]);
        const longs = data.map((restuarant) => restuarant["coordinates"][1]);
        if (lats.length === 0) {
            return [38, -98]
        } else {
            return [
                (Math.max(...lats) + Math.min(...lats)) / 2,
                (Math.max(...longs) + Math.min(...longs)) / 2,
            ];
        }

    }

    const zoom = usState === "" || (stateCenter()[0] === 38 && stateCenter()[1] === -98) ? 4 : 5;

    function SetView() {
        const minimap = useMap();
        minimap.setView(stateCenter(), zoom);
        return null;
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <h2>Map</h2>
                <div style={{ height: 350 }}>
                    <MapContainer
                        style={{ height: 350 }}
                        center={[38, -98]}
                        zoom={4}
                        minZoom={3}
                        maxZoom={12}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <SetView />
                        {data.map((restuarant) => {
                            const r_key = restuarant["key"];
                            const mean_rating = restuarant["mean_rating"];
                            const coor = restuarant["coordinates"];
                            const r_name = restuarant["name"];
                            const r_vote_count = restuarant["count"];
                            return (
                                <CircleMarker
                                    key={r_key}
                                    center={coor}
                                    stroke={false}
                                    fillColor="black"
                                    fillOpacity={0.7}
                                    radius={5}
                                >
                                    <Tooltip>
                                        <div style={{ margin: "0px" }}>
                                            <strong style={{ margin: "2px" }}>{r_name}</strong>
                                            <p style={{ margin: "2px" }}>
                                                Rating(mean): {mean_rating}<br />
                                                Total vote: {r_vote_count}
                                            </p>
                                        </div>
                                    </Tooltip>
                                </CircleMarker>
                            )
                        })}
                    </MapContainer>
                </div>
            </CardContent>
        </Card >
    );
}