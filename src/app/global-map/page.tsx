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

const continentOrder = ["유럽", "아시아", "북미", "남미", "오세아니아", "아프리카"];

export default function GlobalMapPage() {
  const stats = getContinentStats();

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
            전 세계 <span className="gmap-accent">{exportCountries.length}</span>개국에
            <br />
            한국의 멋을 전하다
          </h1>
          <p className="gmap-hero-desc">
            리슬은 해외마케팅 역량강화로 글로벌 판매국을 다변화하고 있습니다.
            <br />
            지도 위 핀에 마우스를 올려 자세한 정보를 확인하세요.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="gmap-map-section">
        <WorldMap />
        <p className="gmap-map-caption">
          * 핀이 표시된 국가는 리슬 제품이 수출/판매된 국가입니다
        </p>
      </section>

      {/* Stats */}
      <section className="gmap-stats">
        <div className="gmap-stats-inner">
          <h2 className="gmap-section-title">대륙별 수출 현황</h2>
          <div className="gmap-stats-grid">
            {continentOrder.map((continent) => (
              <div key={continent} className="gmap-stat-card">
                <span className="gmap-stat-count">{stats[continent] || 0}</span>
                <span className="gmap-stat-label">{continent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="gmap-ceo">
        <div className="gmap-ceo-inner">
          <div className="gmap-ceo-photo">
            <img
              src="https://cafe24.poxo.com/ec01/leesle1/6d1lNM5QtO+rBkf6Tc60KrcZp25lfiZdWhPskP0NRKv+r0tTNtBSyPV+yNNM/xx5Obn4oky6CGXP9ncfADKD6Q==/_/web/upload/chang_import/about/ceo_bg.jpg"
              alt="황이슬 대표 / CEO Hwang Yiseul"
              loading="lazy"
            />
          </div>
          <div className="gmap-ceo-text">
            <p className="gmap-ceo-label">CEO &amp; DESIGNER</p>
            <h2 className="gmap-ceo-name">황이슬</h2>
            <p className="gmap-ceo-title">Hwang Yiseul</p>
            <p className="gmap-ceo-quote">
              &ldquo;예쁘고, 편리하고, 그래서 입고 싶은 한복을 만들어
              모두가 일상에서 한복 입기를 바라는 것이 저의 목표입니다.&rdquo;
            </p>
            <ul className="gmap-ceo-awards">
              <li>2021 대한민국 패션대상 국무총리표창</li>
              <li>2018 방탄소년단 IDOL 한복 제작</li>
              <li>뉴욕타임즈 대표 한복디자이너 인터뷰</li>
              <li>국립충남대학교 의류학과 겸임조교수</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Country List */}
      <section className="gmap-countries">
        <div className="gmap-countries-inner">
          <h2 className="gmap-section-title">수출 판매국 전체 목록</h2>
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

      {/* Flag Parade */}
      <section className="gmap-flag-parade">
        <div className="gmap-flag-parade-inner">
          <h2 className="gmap-section-title gmap-section-title--light">
            함께하는 {exportCountries.length}개국의 국기
          </h2>
          <div className="flag-wave-track">
            <div className="flag-wave-row">
              {[...exportCountries, ...exportCountries].map((c, i) => (
                <div key={`${c.iso2}-${i}`} className="flag-wave-item">
                  <div className="flag-pole" />
                  <div className="flag-cloth" style={{ animationDelay: `${(i % exportCountries.length) * 0.12}s` }}>
                    <img
                      src={`https://flagcdn.com/w160/${c.iso2.toLowerCase()}.png`}
                      alt={`${c.nameKo} flag`}
                      width={80}
                      height={53}
                      loading="lazy"
                    />
                  </div>
                  <span className="flag-label">{c.nameKo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gmap-footer">
        <p>&copy; LEESLE. 한국의 멋을 새로 입다. All rights reserved.</p>
      </footer>
    </div>
  );
}
