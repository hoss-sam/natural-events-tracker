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
        iconSize: [20, 20]
    });
}

const iFire = eventIcon(fire)
const iVolcano = eventIcon(volcano)
const  iStorm = eventIcon(storm)





const EventMarker = ({eventData}) => {
    const markers = eventData.map((ev , index) => {
        if(ev.categories[0].id === 8) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
             /*onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}*/ icon = {iFire}/>
        }
        else if(ev.categories[0].id === 10) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
             /*onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}*/ icon = {iStorm}/>
        }
        else if(ev.categories[0].id === 12) {
            if(Array.isArray(ev.geometries[0].coordinates[0])) {
                return null
            }
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
             /*onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}*/ icon = {iVolcano}/>
        }
        else if(ev.categories[0].id === 15) {
            return <Marker key={index} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
             /*onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}*/ />
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