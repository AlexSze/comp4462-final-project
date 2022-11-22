import { CircleMarker, MapContainer, TileLayer, Tooltip, useMap } from 'react-leaflet'
import {
    Card, CardContent, Grid
} from "@mui/material";
import { loadMapData } from "../../utils/loadData";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import UseWindowDimensions from '../../utils/dimension';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { statesCenter } from '../../const/states';

export default function Map({ usState, setUsState }) {
    const [data, setData] = useState(null);
    const { height, width } = UseWindowDimensions();
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const temp = await loadMapData();
            setData(temp)
        }
        fetchData().then(_ => {
            setIsLoading(false)
        }).catch(console.error);
    }, [usState])

    function setStateCenter() {
        if (usState === "") return [38, -98];
        return [statesCenter[usState][0], statesCenter[usState][1]]
    }

    const zoom = (setStateCenter()[0] === 38 && setStateCenter()[1] === -98) ? 4 : 5;

    function SetView() {
        const minimap = useMap();
        minimap.setView(setStateCenter(), zoom);
        return null;
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <h2>Map</h2>
                <div style={{ height: 350 }}>
                    {isloading ?
                        <Grid item xs={12} align={"center"} width={width * 0.85}>
                            <ReactSpinner />
                        </Grid> : <MapContainer
                            style={{ height: 350 }}
                            width={width * 0.85}
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
                            {usState === "" && Object.keys(statesCenter).map((item) => {
                                return (
                                    <CircleMarker
                                        key={item}
                                        center={statesCenter[item]}
                                        stroke={false}
                                        fillColor="#EA0014"
                                        fillOpacity={1}
                                        radius={10} />
                                );
                            })}
                            {data.map((restuarant) => {
                                const r_key = restuarant["key"];
                                const mean_rating = restuarant["mean_rating"];
                                const coor = JSON.parse(restuarant["coordinates"]);
                                const r_name = restuarant["name"];
                                const r_vote_count = restuarant["count"];
                                return (
                                    <CircleMarker
                                        key={r_key}
                                        center={coor}
                                        stroke={false}
                                        fillColor="#EA0014"
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
                        </MapContainer>}
                </div>
            </CardContent>
        </Card >
    );
}