export interface ExportCountry {
  nameKo: string;
  nameEn: string;
  iso2: string;
  iso3: string;
  continent: string;
  coords: [number, number]; // [longitude, latitude]
}

const exportCountries: ExportCountry[] = [
  { nameKo: "그리스", nameEn: "Greece", iso2: "GR", iso3: "GRC", continent: "유럽", coords: [23.7, 37.98] },
  { nameKo: "그린란드", nameEn: "Greenland", iso2: "GL", iso3: "GRL", continent: "북미", coords: [-42.0, 71.7] },
  { nameKo: "네덜란드", nameEn: "Netherlands", iso2: "NL", iso3: "NLD", continent: "유럽", coords: [5.29, 52.13] },
  { nameKo: "노르웨이", nameEn: "Norway", iso2: "NO", iso3: "NOR", continent: "유럽", coords: [10.75, 59.91] },
  { nameKo: "뉴질랜드", nameEn: "New Zealand", iso2: "NZ", iso3: "NZL", continent: "오세아니아", coords: [174.78, -41.29] },
  { nameKo: "대만", nameEn: "Taiwan", iso2: "TW", iso3: "TWN", continent: "아시아", coords: [121.57, 25.03] },
  { nameKo: "덴마크", nameEn: "Denmark", iso2: "DK", iso3: "DNK", continent: "유럽", coords: [12.57, 55.68] },
  { nameKo: "독일", nameEn: "Germany", iso2: "DE", iso3: "DEU", continent: "유럽", coords: [13.4, 52.52] },
  { nameKo: "러시아", nameEn: "Russia", iso2: "RU", iso3: "RUS", continent: "유럽", coords: [37.62, 55.76] },
  { nameKo: "레위니옹", nameEn: "Réunion", iso2: "RE", iso3: "REU", continent: "아프리카", coords: [55.53, -21.11] },
  { nameKo: "루마니아", nameEn: "Romania", iso2: "RO", iso3: "ROU", continent: "유럽", coords: [26.1, 44.43] },
  { nameKo: "룩셈부르크", nameEn: "Luxembourg", iso2: "LU", iso3: "LUX", continent: "유럽", coords: [6.13, 49.61] },
  { nameKo: "말레이시아", nameEn: "Malaysia", iso2: "MY", iso3: "MYS", continent: "아시아", coords: [101.69, 3.14] },
  { nameKo: "멕시코", nameEn: "Mexico", iso2: "MX", iso3: "MEX", continent: "북미", coords: [-99.13, 19.43] },
  { nameKo: "미국", nameEn: "United States", iso2: "US", iso3: "USA", continent: "북미", coords: [-95.71, 37.09] },
  { nameKo: "미얀마", nameEn: "Myanmar", iso2: "MM", iso3: "MMR", continent: "아시아", coords: [96.2, 16.87] },
  { nameKo: "베트남", nameEn: "Vietnam", iso2: "VN", iso3: "VNM", continent: "아시아", coords: [105.85, 21.03] },
  { nameKo: "벨기에", nameEn: "Belgium", iso2: "BE", iso3: "BEL", continent: "유럽", coords: [4.35, 50.85] },
  { nameKo: "불가리아", nameEn: "Bulgaria", iso2: "BG", iso3: "BGR", continent: "유럽", coords: [23.32, 42.7] },
  { nameKo: "브라질", nameEn: "Brazil", iso2: "BR", iso3: "BRA", continent: "남미", coords: [-47.93, -15.78] },
  { nameKo: "브루나이", nameEn: "Brunei", iso2: "BN", iso3: "BRN", continent: "아시아", coords: [114.95, 4.94] },
  { nameKo: "사우디아라비아", nameEn: "Saudi Arabia", iso2: "SA", iso3: "SAU", continent: "아시아", coords: [46.72, 24.69] },
  { nameKo: "스웨덴", nameEn: "Sweden", iso2: "SE", iso3: "SWE", continent: "유럽", coords: [18.07, 59.33] },
  { nameKo: "스위스", nameEn: "Switzerland", iso2: "CH", iso3: "CHE", continent: "유럽", coords: [7.45, 46.95] },
  { nameKo: "스페인", nameEn: "Spain", iso2: "ES", iso3: "ESP", continent: "유럽", coords: [-3.7, 40.42] },
  { nameKo: "싱가포르", nameEn: "Singapore", iso2: "SG", iso3: "SGP", continent: "아시아", coords: [103.82, 1.35] },
  { nameKo: "아랍에미레이트", nameEn: "United Arab Emirates", iso2: "AE", iso3: "ARE", continent: "아시아", coords: [54.37, 24.45] },
  { nameKo: "아이슬란드", nameEn: "Iceland", iso2: "IS", iso3: "ISL", continent: "유럽", coords: [-21.9, 64.14] },
  { nameKo: "아일랜드", nameEn: "Ireland", iso2: "IE", iso3: "IRL", continent: "유럽", coords: [-6.26, 53.35] },
  { nameKo: "영국", nameEn: "United Kingdom", iso2: "GB", iso3: "GBR", continent: "유럽", coords: [-0.12, 51.51] },
  { nameKo: "오만", nameEn: "Oman", iso2: "OM", iso3: "OMN", continent: "아시아", coords: [58.39, 23.59] },
  { nameKo: "오스트리아", nameEn: "Austria", iso2: "AT", iso3: "AUT", continent: "유럽", coords: [16.37, 48.21] },
  { nameKo: "우크라이나", nameEn: "Ukraine", iso2: "UA", iso3: "UKR", continent: "유럽", coords: [30.52, 50.45] },
  { nameKo: "이탈리아", nameEn: "Italy", iso2: "IT", iso3: "ITA", continent: "유럽", coords: [12.5, 41.9] },
  { nameKo: "인도네시아", nameEn: "Indonesia", iso2: "ID", iso3: "IDN", continent: "아시아", coords: [106.85, -6.21] },
  { nameKo: "일본", nameEn: "Japan", iso2: "JP", iso3: "JPN", continent: "아시아", coords: [139.69, 35.69] },
  { nameKo: "중국", nameEn: "China", iso2: "CN", iso3: "CHN", continent: "아시아", coords: [116.41, 39.9] },
  { nameKo: "체코", nameEn: "Czech Republic", iso2: "CZ", iso3: "CZE", continent: "유럽", coords: [14.42, 50.08] },
  { nameKo: "칠레", nameEn: "Chile", iso2: "CL", iso3: "CHL", continent: "남미", coords: [-70.67, -33.45] },
  { nameKo: "카자흐스탄", nameEn: "Kazakhstan", iso2: "KZ", iso3: "KAZ", continent: "아시아", coords: [71.45, 51.13] },
  { nameKo: "카타르", nameEn: "Qatar", iso2: "QA", iso3: "QAT", continent: "아시아", coords: [51.53, 25.29] },
  { nameKo: "캐나다", nameEn: "Canada", iso2: "CA", iso3: "CAN", continent: "북미", coords: [-75.7, 45.42] },
  { nameKo: "케냐", nameEn: "Kenya", iso2: "KE", iso3: "KEN", continent: "아프리카", coords: [36.82, -1.29] },
  { nameKo: "쿠웨이트", nameEn: "Kuwait", iso2: "KW", iso3: "KWT", continent: "아시아", coords: [47.98, 29.38] },
  { nameKo: "태국", nameEn: "Thailand", iso2: "TH", iso3: "THA", continent: "아시아", coords: [100.5, 13.76] },
  { nameKo: "터키", nameEn: "Turkey", iso2: "TR", iso3: "TUR", continent: "아시아", coords: [32.87, 39.93] },
  { nameKo: "폴란드", nameEn: "Poland", iso2: "PL", iso3: "POL", continent: "유럽", coords: [21.01, 52.23] },
  { nameKo: "프랑스", nameEn: "France", iso2: "FR", iso3: "FRA", continent: "유럽", coords: [2.35, 48.86] },
  { nameKo: "핀란드", nameEn: "Finland", iso2: "FI", iso3: "FIN", continent: "유럽", coords: [24.94, 60.17] },
  { nameKo: "필리핀", nameEn: "Philippines", iso2: "PH", iso3: "PHL", continent: "아시아", coords: [120.98, 14.6] },
  { nameKo: "헝가리", nameEn: "Hungary", iso2: "HU", iso3: "HUN", continent: "유럽", coords: [19.04, 47.5] },
  { nameKo: "호주", nameEn: "Australia", iso2: "AU", iso3: "AUS", continent: "오세아니아", coords: [149.13, -35.28] },
  { nameKo: "홍콩", nameEn: "Hong Kong", iso2: "HK", iso3: "HKG", continent: "아시아", coords: [114.17, 22.32] },
];

export default exportCountries;

export const exportCountrySet = new Set(exportCountries.map((c) => c.iso3));

export function getCountryByIso3(iso3: string): ExportCountry | undefined {
  return exportCountries.find((c) => c.iso3 === iso3);
}

export function getContinentStats() {
  const stats: Record<string, number> = {};
  for (const c of exportCountries) {
    stats[c.continent] = (stats[c.continent] || 0) + 1;
  }
  return stats;
}
