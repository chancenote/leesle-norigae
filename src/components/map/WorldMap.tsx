"use client";

import { useState, useCallback, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { exportCountrySet, getCountryByIso3 } from "@/data/exportCountries";
import type { ExportCountry } from "@/data/exportCountries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface TooltipData {
  country: ExportCountry;
  x: number;
  y: number;
}

function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const handleMouseEnter = useCallback(
    (iso3: string, evt: React.MouseEvent) => {
      const country = getCountryByIso3(iso3);
      if (country) {
        setTooltip({ country, x: evt.clientX, y: evt.clientY });
      }
    },
    []
  );

  const handleMouseMove = useCallback(
    (evt: React.MouseEvent) => {
      if (tooltip) {
        setTooltip((prev) => (prev ? { ...prev, x: evt.clientX, y: evt.clientY } : null));
      }
    },
    [tooltip]
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
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const iso3 = geo.properties?.ISO_A3 || geo.id;
                const isExport = exportCountrySet.has(iso3);
                const countryData = isExport ? getCountryByIso3(iso3) : null;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(evt) => {
                      if (isExport) handleMouseEnter(iso3, evt as unknown as React.MouseEvent);
                    }}
                    onMouseMove={(evt) => {
                      if (isExport) handleMouseMove(evt as unknown as React.MouseEvent);
                    }}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: isExport ? "#b8945a" : "#2a2a3a",
                        stroke: "#1a1a2e",
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "fill 0.2s ease",
                      },
                      hover: {
                        fill: isExport ? "#d4b880" : "#2a2a3a",
                        stroke: isExport ? "#fff" : "#1a1a2e",
                        strokeWidth: isExport ? 1.5 : 0.5,
                        outline: "none",
                        cursor: isExport ? "pointer" : "default",
                      },
                      pressed: {
                        fill: isExport ? "#d4b880" : "#2a2a3a",
                        outline: "none",
                      },
                    }}
                    aria-label={countryData ? `${countryData.nameKo} (${countryData.nameEn})` : undefined}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

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
