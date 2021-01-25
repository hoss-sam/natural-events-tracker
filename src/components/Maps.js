import {TileLayer, MapContainer} from "react-leaflet"
import EventMarker from "./EventMarker"
    
const Maps =({eventData}) => {
    return (
        <MapContainer center={[40.04449, -105.23574]} zoom={5} scrollWheelZoom={true}>
            <TileLayer 
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
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