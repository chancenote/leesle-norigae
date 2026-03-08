"use client";

import dynamic from "next/dynamic";
import exportCountries, { getContinentStats } from "@/data/exportCountries";
import "./global-map.css";

const WorldMap = dynamic(() => import("@/components/map/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="map-loading">
      <div className="map-loading-spinner" />
      <p>지도를 불러오는 중...</p>
    </div>
  ),
});

const continentEmoji: Record<string, string> = {
  유럽: "🇪🇺",
  아시아: "🌏",
  북미: "🌎",
  남미: "🌎",
  오세아니아: "🌏",
  아프리카: "🌍",
};

export default function GlobalMapPage() {
  const stats = getContinentStats();
  const sortedContinents = Object.entries(stats).sort((a, b) => b[1] - a[1]);

  return (
    <div className="gmap-page">
      {/* Header */}
      <header className="gmap-header">
        <div className="gmap-header-inner">
          <a href="/" className="gmap-logo">LEESLE</a>
          <nav className="gmap-nav">
            <span className="gmap-nav-badge">Global Export Map</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gmap-hero">
        <div className="gmap-hero-inner">
          <p className="gmap-hero-label">LEESLE GLOBAL PRESENCE</p>
          <h1 className="gmap-hero-title">
            전 세계 <span className="gmap-gold">{exportCountries.length}</span>개국에
            <br />
            한국의 멋을 전하다
          </h1>
          <p className="gmap-hero-desc">
            리슬은 해외마케팅 역량강화로 글로벌 판매국을 다변화하고 있습니다.
            <br />
            지도 위 국가에 마우스를 올려 자세한 정보를 확인하세요.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="gmap-map-section">
        <WorldMap />
      </section>

      {/* Stats */}
      <section className="gmap-stats">
        <div className="gmap-stats-inner">
          <h2 className="gmap-stats-title">대륙별 수출 현황</h2>
          <div className="gmap-stats-grid">
            {sortedContinents.map(([continent, count]) => (
              <div key={continent} className="gmap-stat-card">
                <span className="gmap-stat-emoji">{continentEmoji[continent] || "🌐"}</span>
                <span className="gmap-stat-count">{count}</span>
                <span className="gmap-stat-label">{continent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country List */}
      <section className="gmap-countries">
        <div className="gmap-countries-inner">
          <h2 className="gmap-countries-title">수출 판매국 전체 목록</h2>
          <div className="gmap-countries-grid">
            {exportCountries.map((c) => (
              <div key={c.iso2} className="gmap-country-chip">
                <img
                  src={`https://flagcdn.com/w40/${c.iso2.toLowerCase()}.png`}
                  alt={`${c.nameEn} flag`}
                  width={24}
                  height={16}
                  loading="lazy"
                />
                <span className="gmap-country-name">{c.nameKo}</span>
                <span className="gmap-country-en">{c.nameEn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gmap-footer">
        <p>&copy; LEESLE. All rights reserved.</p>
      </footer>
    </div>
  );
}
