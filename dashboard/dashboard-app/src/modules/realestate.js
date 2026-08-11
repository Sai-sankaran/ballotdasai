const pct = v => `${v.toFixed(1)}%`
const num = v => v.toLocaleString()

export default {
  id: 'realestate',
  label: 'Real Estate',
  icon: '🏠',
  owner: 'Yeswant',

  dataUrl: '/realestate.json',

  title: 'U.S. Real Estate & Housing',
  subtitle: 'Click any state to explore house prices and building activity',
  source: 'Data: FHFA House Price Index & U.S. Census Bureau Building Permits Survey',

  mapMetric: {
    getValue: state => state.hpi_latest || 0,
    format: v => `${v.toFixed(1)}`,
    label: 'House Price Index (2026)',
    colors: ['#e8f0fe', '#c5dafb', '#9bbef5', '#6d9eeb', '#4285f4', '#2a75e0', '#1a5bd6', '#0c447c'],
  },

  summary(states) {
    const list = Object.values(states)
    const avgHpi = list.reduce((s, x) => s + (x.hpi_latest || 0), 0) / list.length
    const totalPermits = list.reduce((s, x) => s + (x.building_permits_latest || 0), 0)
    const avgGrowth1 = list.reduce((s, x) => s + (x.hpi_growth_1yr || 0), 0) / list.length
    const avgGrowth10 = list.reduce((s, x) => s + (x.hpi_growth_10yr || 0), 0) / list.length
    return [
      { label: 'Avg. House Price Index', value: avgHpi.toFixed(1), sub: '2026 · index (2000 = 100)' },
      { label: 'Total Building Permits', value: totalPermits.toLocaleString(), sub: 'New housing units, 2021' },
      { label: 'Avg. 1-Yr HPI Growth', value: `${avgGrowth1.toFixed(1)}%`, sub: 'Year-over-year change' },
      { label: 'Avg. 10-Yr HPI Growth', value: `${avgGrowth10.toFixed(1)}%`, sub: 'Since 2016' },
    ]
  },

  panel: {
    hero: {
      getValue: state => state.hpi_latest,
      format: v => v.toFixed(1),
      label: 'House Price Index (2026)',
    },
    badge: {
      getValue: state => state.hpi_growth_1yr,
      suffix: '% YoY',
    },
    rankBadge: { getValue: state => state.hpi_rank },
    quickStats: [
      { label: 'HPI Rank', getValue: state => state.hpi_rank, format: v => `#${v}`, accent: 'gold' },
      { label: 'Building Permits', getValue: state => state.building_permits_latest, format: num },
      { label: '10-Yr Growth', getValue: state => state.hpi_growth_10yr, format: pct },
    ],
    sections: [
      {
        title: 'House Price Index (2010–2026)',
        type: 'timeseries',
        getSeries: state => state.hpi_trend,
        color: '#1a5bd6',
        valueFormat: v => `${v.toFixed(1)}`,
        axisFormat: v => `${v.toFixed(0)}`,
      },
      {
        title: 'Building Permits (2015–2021)',
        type: 'timeseries',
        getSeries: state => state.building_permits_trend,
        color: '#f5b02e',
        valueFormat: num,
        axisFormat: v => `${(v / 1000).toFixed(0)}K`,
      },
    ],
  },

  views: ['map', 'ranking', 'trend'],

  ranking: {
    columns: [
      { key: 'rank', label: '#', getValue: s => s.hpi_rank, sortValue: s => -s.hpi_rank },
      { key: 'name', label: 'State', getValue: s => s.name, format: (v, s) => `${s.abbr} — ${v}` },
      { key: 'hpi', label: 'HPI (2026)', getValue: s => s.hpi_latest, format: v => v.toFixed(1) },
      { key: 'growth1', label: '1-Yr Growth', getValue: s => s.hpi_growth_1yr, format: pct },
      { key: 'growth10', label: '10-Yr Growth', getValue: s => s.hpi_growth_10yr, format: pct },
      { key: 'permits', label: 'Building Permits', getValue: s => s.building_permits_latest, format: num },
    ],
  },

  trend: {
    title: 'House Price Index — Top 10 States (2010–2026)',
    periods: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    getSeriesValue: (state, period) => state.hpi_trend?.[period] || 0,
    rankBy: state => state.hpi_latest || 0,
    axisFormat: v => `${v.toFixed(0)}`,
  },
}
