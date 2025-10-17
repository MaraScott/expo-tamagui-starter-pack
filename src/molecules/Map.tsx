import { useEffect } from 'react'
import { isWeb } from '@tamagui/constants'
import { YStack } from 'tamagui'

type LatLngTuple = [number, number]

type MapProps = {
    center: LatLngTuple
    position?: LatLngTuple | null
    popupText?: string
    height?: number
    zoom?: number
    maxZoom?: number
}

const DEFAULT_POPUP = '<strong>Secteur Le Jointo</strong>, Vannes'
const TILE_LAYER_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const buildNativeHtml = ({
    center,
    position,
    zoom,
    maxZoom,
    popupText,
}: {
    center: LatLngTuple
    position: LatLngTuple
    zoom: number
    maxZoom: number
    popupText: string
}) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    />
    <style>
      html, body, #map { height: 100%; margin: 0; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
      const center = ${JSON.stringify(center)}
      const markerPosition = ${JSON.stringify(position)}
      const popupHtml = ${JSON.stringify(popupText)}

      const map = L.map('map', {
        center,
        zoom: ${zoom},
        maxZoom: ${maxZoom},
        scrollWheelZoom: false,
        tap: false,
      })

      L.tileLayer(${JSON.stringify(TILE_LAYER_URL)}, {
        attribution: ${JSON.stringify(TILE_LAYER_ATTRIBUTION)},
        maxZoom: ${maxZoom},
      }).addTo(map)

      L.marker(markerPosition).addTo(map).bindPopup(popupHtml)
    </script>
  </body>
</html>`

export function Map({
    center,
    position = null,
    popupText = DEFAULT_POPUP,
    height = 340,
    zoom = 16,
    maxZoom = 19,
}: MapProps) {
    const resolvedPosition = position ?? center
    const containerProps = {
        height,
        br: '$sm',
        bw: 1,
        borderColor: '$line',
        ov: 'hidden',
        bc: '$bg2',
        ai: 'center' as const,
        jc: 'center' as const,
    }

    useEffect(() => {
        if (!isWeb || typeof document === 'undefined') {
            return
        }

        const existing = document.querySelector<HTMLLinkElement>(
            'link[data-leaflet-style="true"]'
        )
        if (existing) {
            return
        }

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.dataset.leafletStyle = 'true'
        link.href = './assets/public/assets/vendor/leaflet/leaflet.css'
        link.onerror = () => {
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
            link.onerror = null
        }
        document.head.appendChild(link)
    }, [isWeb])

    if (isWeb) {
        const { MapContainer, TileLayer, CircleMarker, Popup } = require('react-leaflet')

        return (
            <YStack {...containerProps}>
                <MapContainer
                    center={center}
                    zoom={zoom}
                    maxZoom={maxZoom}
                    scrollWheelZoom={false}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <TileLayer
                        attribution={TILE_LAYER_ATTRIBUTION}
                        url={TILE_LAYER_URL}
                        maxZoom={maxZoom}
                    />
                    <CircleMarker center={resolvedPosition} pathOptions={{opacity: .1, color: '#22E3FF'}} radius={100}>
                        <Popup>{popupText}</Popup>
                    </CircleMarker>
                </MapContainer>
            </YStack>
        )
    }

    const { WebView } = require('react-native-webview')

    return (
        <YStack {...containerProps}>
            <WebView
                originWhitelist={['*']}
                style={{ flex: 1, width: '100%', backgroundColor: 'transparent' }}
                source={{ html: buildNativeHtml({ center, position: resolvedPosition, zoom, maxZoom, popupText }) }}
                javaScriptEnabled
                domStorageEnabled
                scrollEnabled={false}
            />
        </YStack>
    )
}
