"use client";
import React, { useEffect, useState } from "react";
import dataMap from "../../data/countries.json";
import { MapContainer, GeoJSON, Marker, Tooltip, useMap } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

export default function MyMap({ power, country }) {
  const [positions, setPositions] = useState({
    latitude: 132.4489,
    longitude: 42.8454,
  });

  const OncountryStyle = (feature) => {
    return {
      fillColor: feature.properties.ADMIN === country ? "#1591D7" : "#262F52",
      fillOpacity: 1,
      color: "#1D243E",
      weight: 1,
    };
  };
  const OffcountryStyle = (feature) => {
    return {
      fillColor: feature.properties.ADMIN === country ? "#AB55EF" : "#262F52",
      fillOpacity: 1,
      color: "#1D243E",
      weight: 1,
    };
  };

  const StyledPop = styled(Tooltip)`
    background: ${power ? "#1591D7" : "#AB55EF"};
    color: white;
    border: none;
    .leaflet-popup-content-wrapper {
      border-radius: 0;
      background: red;
    }
    .leaflet-popup-tip-container {
      background: red;
    }
  `;

  const findPosition = (country) => {
    const countryObject = dataMap.features.find(
      (countryNames) => countryNames.properties.ADMIN === country
    );
    if (countryObject) {
      console.log(countryObject);
      const coordinates = countryObject.geometry.coordinates[0];
      const position = coordinates.map(([longitude, latitude]) => ({
        latitude,
        longitude,
      }));
      const longitude = position[0]?.longitude[1];
      const latitude = position[0]?.latitude[0];
      console.log(coordinates);
      setPositions({ longitude, latitude });
    }
  };

  useEffect(() => {
    findPosition(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
  };

  const mapOptions = {
    zoomSnap: 0.1, // Set the zoomSnap option to 0.1 for more precise zoom levels
    zoomDelta: 0.1, // Set the zoomDelta option to 0.1 for smoother zoom interactions
  };
  const MapWithoutZoomControl = () => {
    const map = useMap();
    map.removeControl(map.zoomControl);
    return null;
  };

  return (
    <main className="w-full">
      <MapContainer
        style={{
          height: "460px",
          marginTop: "40px",
          background: "black",
          zIndex: "0",
        }}
        {...mapOptions}
        zoomControl={false}
        doubleClickZoom={false} // Disable zoom on double-click
        touchZoom={false} // Disable zoom on touch
        scrollWheelZoom={false} // Disable zoom on mouse scroll
        dragging={false} // Disable map dragging
        attributionControl={false}
        center={[51.505, -0.09]}
        zoom={1.5}
      >
        {/* <MapWithoutZoomControl /> */}
        <GeoJSON
          style={power ? OncountryStyle : OffcountryStyle}
          data={dataMap.features}
          onEachFeature={onEachCountry}
        />
        {positions.latitude && positions.longitude && (
          <Marker
            opacity={0}
            position={[positions.longitude, positions.latitude]}
          >
            <StyledPop direction="top" offset={[0, 20]} opacity={1} permanent>
              <p className=" text-white  uppercase  text-xs font-bold">
                {country}
              </p>
              <div
                className={`${
                  power ? "invalidOn" : "invalid"
                } absolute border-none -bottom-1 right-1/2`}
              ></div>
            </StyledPop>
          </Marker>
        )}
      </MapContainer>
    </main>
  );
}
