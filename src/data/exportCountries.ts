export interface ExportCountry {
  nameKo: string;
  nameEn: string;
  iso2: string;
  iso3: string;
  continent: string;
}

const exportCountries: ExportCountry[] = [
  { nameKo: "그리스", nameEn: "Greece", iso2: "GR", iso3: "GRC", continent: "유럽" },
  { nameKo: "그린란드", nameEn: "Greenland", iso2: "GL", iso3: "GRL", continent: "북미" },
  { nameKo: "네덜란드", nameEn: "Netherlands", iso2: "NL", iso3: "NLD", continent: "유럽" },
  { nameKo: "노르웨이", nameEn: "Norway", iso2: "NO", iso3: "NOR", continent: "유럽" },
  { nameKo: "뉴질랜드", nameEn: "New Zealand", iso2: "NZ", iso3: "NZL", continent: "오세아니아" },
  { nameKo: "대만", nameEn: "Taiwan", iso2: "TW", iso3: "TWN", continent: "아시아" },
  { nameKo: "덴마크", nameEn: "Denmark", iso2: "DK", iso3: "DNK", continent: "유럽" },
  { nameKo: "독일", nameEn: "Germany", iso2: "DE", iso3: "DEU", continent: "유럽" },
  { nameKo: "러시아", nameEn: "Russia", iso2: "RU", iso3: "RUS", continent: "유럽" },
  { nameKo: "레위니옹", nameEn: "Réunion", iso2: "RE", iso3: "REU", continent: "아프리카" },
  { nameKo: "루마니아", nameEn: "Romania", iso2: "RO", iso3: "ROU", continent: "유럽" },
  { nameKo: "룩셈부르크", nameEn: "Luxembourg", iso2: "LU", iso3: "LUX", continent: "유럽" },
  { nameKo: "말레이시아", nameEn: "Malaysia", iso2: "MY", iso3: "MYS", continent: "아시아" },
  { nameKo: "멕시코", nameEn: "Mexico", iso2: "MX", iso3: "MEX", continent: "북미" },
  { nameKo: "미국", nameEn: "United States", iso2: "US", iso3: "USA", continent: "북미" },
  { nameKo: "미얀마", nameEn: "Myanmar", iso2: "MM", iso3: "MMR", continent: "아시아" },
  { nameKo: "베트남", nameEn: "Vietnam", iso2: "VN", iso3: "VNM", continent: "아시아" },
  { nameKo: "벨기에", nameEn: "Belgium", iso2: "BE", iso3: "BEL", continent: "유럽" },
  { nameKo: "불가리아", nameEn: "Bulgaria", iso2: "BG", iso3: "BGR", continent: "유럽" },
  { nameKo: "브라질", nameEn: "Brazil", iso2: "BR", iso3: "BRA", continent: "남미" },
  { nameKo: "브루나이", nameEn: "Brunei", iso2: "BN", iso3: "BRN", continent: "아시아" },
  { nameKo: "사우디아라비아", nameEn: "Saudi Arabia", iso2: "SA", iso3: "SAU", continent: "아시아" },
  { nameKo: "스웨덴", nameEn: "Sweden", iso2: "SE", iso3: "SWE", continent: "유럽" },
  { nameKo: "스위스", nameEn: "Switzerland", iso2: "CH", iso3: "CHE", continent: "유럽" },
  { nameKo: "스페인", nameEn: "Spain", iso2: "ES", iso3: "ESP", continent: "유럽" },
  { nameKo: "싱가포르", nameEn: "Singapore", iso2: "SG", iso3: "SGP", continent: "아시아" },
  { nameKo: "아랍에미레이트", nameEn: "United Arab Emirates", iso2: "AE", iso3: "ARE", continent: "아시아" },
  { nameKo: "아이슬란드", nameEn: "Iceland", iso2: "IS", iso3: "ISL", continent: "유럽" },
  { nameKo: "아일랜드", nameEn: "Ireland", iso2: "IE", iso3: "IRL", continent: "유럽" },
  { nameKo: "영국", nameEn: "United Kingdom", iso2: "GB", iso3: "GBR", continent: "유럽" },
  { nameKo: "오만", nameEn: "Oman", iso2: "OM", iso3: "OMN", continent: "아시아" },
  { nameKo: "오스트리아", nameEn: "Austria", iso2: "AT", iso3: "AUT", continent: "유럽" },
  { nameKo: "우크라이나", nameEn: "Ukraine", iso2: "UA", iso3: "UKR", continent: "유럽" },
  { nameKo: "이탈리아", nameEn: "Italy", iso2: "IT", iso3: "ITA", continent: "유럽" },
  { nameKo: "인도네시아", nameEn: "Indonesia", iso2: "ID", iso3: "IDN", continent: "아시아" },
  { nameKo: "일본", nameEn: "Japan", iso2: "JP", iso3: "JPN", continent: "아시아" },
  { nameKo: "중국", nameEn: "China", iso2: "CN", iso3: "CHN", continent: "아시아" },
  { nameKo: "체코", nameEn: "Czech Republic", iso2: "CZ", iso3: "CZE", continent: "유럽" },
  { nameKo: "칠레", nameEn: "Chile", iso2: "CL", iso3: "CHL", continent: "남미" },
  { nameKo: "카자흐스탄", nameEn: "Kazakhstan", iso2: "KZ", iso3: "KAZ", continent: "아시아" },
  { nameKo: "카타르", nameEn: "Qatar", iso2: "QA", iso3: "QAT", continent: "아시아" },
  { nameKo: "캐나다", nameEn: "Canada", iso2: "CA", iso3: "CAN", continent: "북미" },
  { nameKo: "케냐", nameEn: "Kenya", iso2: "KE", iso3: "KEN", continent: "아프리카" },
  { nameKo: "쿠웨이트", nameEn: "Kuwait", iso2: "KW", iso3: "KWT", continent: "아시아" },
  { nameKo: "태국", nameEn: "Thailand", iso2: "TH", iso3: "THA", continent: "아시아" },
  { nameKo: "터키", nameEn: "Turkey", iso2: "TR", iso3: "TUR", continent: "아시아" },
  { nameKo: "폴란드", nameEn: "Poland", iso2: "PL", iso3: "POL", continent: "유럽" },
  { nameKo: "프랑스", nameEn: "France", iso2: "FR", iso3: "FRA", continent: "유럽" },
  { nameKo: "핀란드", nameEn: "Finland", iso2: "FI", iso3: "FIN", continent: "유럽" },
  { nameKo: "필리핀", nameEn: "Philippines", iso2: "PH", iso3: "PHL", continent: "아시아" },
  { nameKo: "헝가리", nameEn: "Hungary", iso2: "HU", iso3: "HUN", continent: "유럽" },
  { nameKo: "호주", nameEn: "Australia", iso2: "AU", iso3: "AUS", continent: "오세아니아" },
  { nameKo: "홍콩", nameEn: "Hong Kong", iso2: "HK", iso3: "HKG", continent: "아시아" },
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
