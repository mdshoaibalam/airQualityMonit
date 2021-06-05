import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import moment from "moment";
import AirQtyChart from "./AirQtyChart";
import { getColorCode } from "./util";
const client = new W3CWebSocket('wss://city-ws.herokuapp.com/');

//initializing value with one city Goa as hard code so that we can see the difference of last updateby field as all 
//data are getting update after 4-5 seconds from backend as result last updated column was showing a second ago for all values
let MapObject = { "Goa": { city: "Goa", aqi: 238.31, updatedAt: Date.now() } };
const Dashboard = () => {

    const [airQtyRec, setAirQtyRec] = useState(null);

    useEffect(() => {
        client.onmessage = function (event) {
            const res = JSON.parse(event.data);
            for (let item of res) {
                if (MapObject[item.city] && MapObject[item.city].aqi !== item.aqi) {
                    MapObject[item.city].aqi = item.aqi;
                    MapObject[item.city].updatedAt = Date.now();
                } else if (!MapObject[item.city]) {
                    MapObject[item.city] = item;
                    MapObject[item.city].updatedAt = Date.now();
                }
                else {
                    MapObject[item.city].aqi = item.aqi;
                }
            }
            setAirQtyRec(event.data.length);

        };

    }, [airQtyRec])




    return (<>


        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Current AQI</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(MapObject).map((data, index) => {
                            return (<tr key={data + index}><td>{MapObject[data].city}</td><td style={{ color: "#000", background: getColorCode(MapObject[data].aqi.toFixed(2)) }}>{MapObject[data].aqi.toFixed(2)}</td><td>{moment(MapObject[data].updatedAt).fromNow()}</td></tr>)
                        })
                    }
                </tbody>
            </table>
            <AirQtyChart aiqData={MapObject} />
        </div>
    </>)
}

export default Dashboard;