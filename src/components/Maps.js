import {TileLayer, MapContainer} from "react-leaflet"
import EventMarker from "./EventMarker"
    
const Maps =({eventData}) => {
    return (
        <MapContainer center={[40.04449, -105.23574]} zoom={5} scrollWheelZoom={true}>
            <TileLayer 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[40.04449, -105.23574]}>
                <Popup>
                    sup dude!
                </Popup>
                
            </Marker> */}
            <EventMarker eventData = {eventData}/>
        </MapContainer>
    )
}
export default Maps