import Leftlet from 'leaflet';
import mapMakerImg from '../images/map-marker.svg';

const mapIcon = Leftlet.icon({
  iconUrl: mapMakerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

export default mapIcon;