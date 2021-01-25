import { Marker, Popup} from "react-leaflet";
// import {icon} from "@iconify/react"
// import { locationIcon } from "@iconify/icons-wi/fire";
import { Icon } from "leaflet";
import fire from "../assets/pine-tree-fire.svg"
import volcano from "../assets/volcano.svg"
import storm from "../assets/weather-hurricane.svg"


const eventIcon = (eIcon)=> {
    return new Icon({
        iconUrl: eIcon,
        iconSize: [25, 25]
    });
}

const iFire = eventIcon(fire)
const iVolcano = eventIcon(volcano)
const  iStorm = eventIcon(storm)



const EventMarker = ({eventData}) => {
    const markers = eventData.map((ev , index) => {
        if(ev.categories[0].id === 8) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} icon = {iFire}> 
            <Popup>{ev.title} <br /> {ev.description}</Popup>
            </Marker>
        }
        else if(ev.categories[0].id === 10) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} icon = {iStorm}>
            <Popup>{ev.title} <br /> {ev.description}</Popup>
            </Marker>
        }
        else if(ev.categories[0].id === 12) {
            if(Array.isArray(ev.geometries[0].coordinates[0])) {
                return null
            }
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} icon = {iVolcano}>
            <Popup>{ev.title} <br /> {ev.description}</Popup>
            </Marker>
        }
        else if(ev.categories[0].id === 15) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} >
            <Popup>{ev.title} <br /> {ev.description}</Popup>
            </Marker>
        }
        else{
            return null
        }
        
    })
    return(
        <div>
            {markers}
        </div>
    )
}

export default EventMarker