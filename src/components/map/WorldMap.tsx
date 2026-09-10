"use client";

import { useState, useCallback, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import exportCountries from "@/data/exportCountries";
import type { ExportCountry } from "@/data/exportCountries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface TooltipData {
  country: ExportCountry;
  x: number;
  y: number;
}

function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const handleMarkerEnter = useCallback(
    (country: ExportCountry, evt: React.MouseEvent) => {
      setTooltip({ country, x: evt.clientX, y: evt.clientY });
    },
    []
  );

  const handleMouseMove = useCallback(
    (evt: React.MouseEvent) => {
      setTooltip((prev) => (prev ? { ...prev, x: evt.clientX, y: evt.clientY } : null));
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  return (
    <div className="map-container">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 155,
        }}
        width={960}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[0, 20]} zoom={1}>
          {/* Base map countries */}
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E8E5E0",
                      stroke: "#d0cdc6",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#ddd9d0",
                      stroke: "#d0cdc6",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#ddd9d0",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Pin markers */}
          {exportCountries.map((country) => (
            <Marker
              key={country.iso2}
              coordinates={country.coords}
              onMouseEnter={(evt) => handleMarkerEnter(country, evt as unknown as React.MouseEvent)}
              onMouseMove={(evt) => handleMouseMove(evt as unknown as React.MouseEvent)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Pin drop shadow */}
              <ellipse
                cx={0}
                cy={2}
                rx={3}
                ry={1.5}
                fill="rgba(0,0,0,0.15)"
              />
              {/* Pin body */}
              <g className="map-pin" transform="translate(-4, -12)">
                <path
                  d="M4 0C1.8 0 0 1.8 0 4c0 3.2 4 8 4 8s4-4.8 4-8c0-2.2-1.8-4-4-4z"
                  fill="#009CA6"
                  stroke="#fff"
                  strokeWidth={0.8}
                />
                <circle cx={4} cy={4} r={1.8} fill="#fff" />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="map-tooltip"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 20,
          }}
        >
          <div className="tooltip-flag">
            <img
              src={`https://flagcdn.com/w80/${tooltip.country.iso2.toLowerCase()}.png`}
              alt={`${tooltip.country.nameEn} flag`}
              width={60}
              height={40}
              loading="eager"
            />
          </div>
          <div className="tooltip-info">
            <span className="tooltip-name-ko">{tooltip.country.nameKo}</span>
            <span className="tooltip-name-en">{tooltip.country.nameEn}</span>
            <span className="tooltip-continent">{tooltip.country.continent}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(WorldMap);
