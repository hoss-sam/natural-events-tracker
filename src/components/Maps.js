import {Marker, Popup, TileLayer, MapContainer} from "react-leaflet"
import EventMarker from "./EventMarker"

// const wFire = new Icon({
//     iconUrl: fire,
//     iconSize: [20, 20]
//   });

const Maps =({eventData}) => {
    
    // const markers = eventData.map((ev , index) => {
    //     if(ev.categories[0].id === 8) {
    //         return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
    //          /*onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}*/ icon = {wFire} />
    //     }
    //     return null
    // })
    
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
            {/* {markers} */}
            <EventMarker eventData = {eventData}/>
        </MapContainer>
    )
}
export default Maps