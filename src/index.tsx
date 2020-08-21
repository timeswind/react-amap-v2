import * as React from 'react'
import { useState, useEffect } from 'react'
import * as AMapLoader from '@amap/amap-jsapi-loader'
import "@amap/amap-jsapi-types";

export interface IAmapViewProps {
  jsKey: string,
  coordinates?: number[]
}

declare global {
  interface Window {
    AMapLoader: unknown
  }
}

const AMapView = (props: IAmapViewProps): JSX.Element => {
  const { jsKey, coordinates } = props
  const [amap, setAmap] = useState<AMap.Map | null>(null)

  useEffect(() => {
    if (window) {
      if (!amap) {
        AMapLoader.load({
          key: jsKey,
          version: '2.0',
          plugins: [],
        })
          .then((AMap) => {
            setAmap(new AMap.Map('amap-container'))
          })
          .catch((e) => {
            console.error(e)
          })
      } else {
        if (coordinates && coordinates.length >= 2) {
          const longitude = coordinates[0]
          const latitude = coordinates[1]
          amap.setCenter([longitude, latitude])
        }
      }
    }
  }, [amap])
  return (
    <div id="amap-container" style={{ height: 300 }}>
    </div>
  )
}

export default AMapView
