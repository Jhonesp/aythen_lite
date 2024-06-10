import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldMap from './world-50m.json'; // Puedes descargar este archivo desde https://unpkg.com/world-atlas/world/50m.json

const MapaMundialGris = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryClick = (geo) => {
        const countryName = geo.properties.NAME;
        setSelectedCountry(countryName);
    };

    return (
        <div>
            <ComposableMap
                projectionConfig={{
                    scale: 200
                }}
                style={{ width: "100%", height: "100vh" }}
            >
                <Geographies geography={worldMap}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onClick={() => handleCountryClick(geo)}
                                style={{
                                    default: {
                                        fill: "#D6D6D6",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#F53",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
            {selectedCountry && <div>{`Selected Country: ${selectedCountry}`}</div>}
        </div>
    );
};

export default MapaMundialGris;
