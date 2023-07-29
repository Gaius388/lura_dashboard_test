"use client";
import React, { useEffect, useState } from "react";
import dataMap from "../../data/countries.json";
import { MapContainer, GeoJSON, Marker, Tooltip, useMap } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

export default function MyMap({ power, country, setLoad }) {
  const [positions, setPositions] = useState({
    latitude: -124.0601,
    longitude: 50.1378,
  });

  // [50.1378, -124.0601]
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

  //find coordinates of country
  const findPosition = (country) => {
    if (country === "United States of America") {
      setPositions({ longitude: 50.1378, latitude: -124.0601 });
    } else {
      const countryObject = dataMap.features.find(
        (countryNames) => countryNames.properties.ADMIN === country
      );
      if (countryObject) {
        console.log(countryObject);
        let coordinates;
        if (countryObject.geometry.coordinates.length > 1) {
          coordinates = countryObject.geometry.coordinates[0];
        } else {
          coordinates = countryObject.geometry.coordinates;
        }
        const position = coordinates.map(([longitude, latitude]) => ({
          latitude,
          longitude,
        }));

        const relongitude = position[0]?.longitude[1];
        const relatitude = position[0]?.latitude[0];
        const longitude = relongitude + 5;
        const latitude = relatitude - 5;
        // console.log(coordinates);
        // console.log(position);
        // console.log(relatitude, relongitude);
        // console.log(latitude, longitude);
        setPositions({ longitude, latitude });
      }
    }
    setLoad(false);
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
  };

  const mapOptions = {
    zoomSnap: 0.1, // Set the zoomSnap option to 0.1 for more precise zoom levels
    zoomDelta: 0.1, // Set the zoomDelta option to 0.1 for smoother zoom interactions
  };

  useEffect(() => {
    findPosition(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <main className="w-full">
      <div className="md:block hidden">
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
          zoom={1.6}
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
              // position={[50.1378, -124.0601]}
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
      </div>
      <div className="md:hidden block">
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
          zoom={1}
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
      </div>
    </main>
  );
}
