import { YStack, Text } from 'tamagui'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '@assets/vendor/leaflet/leaflet.css'

export function Map({center, position = null, popupText = `<strong>Secteur Le Jointo</strong>, Vannes`, height = 340, zoom = 16, maxZoom = 19}: props) {
    position = position || center;
    return (
        <YStack height={height} br="$sm" bw={1} borderColor="$line" ov="hidden" bc="$bg2" ai="center" jc="center">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={maxZoom}
                />
                <Marker position={position}>
                    <Popup>
                        {popupText}
                    </Popup>
                </Marker>
            </MapContainer>
        </YStack>
    );
}