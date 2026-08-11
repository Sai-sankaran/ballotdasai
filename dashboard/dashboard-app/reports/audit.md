# America250 Data Warehouse — Audit Report

**Generated:** 2026-08-11T05:13:06.911Z
**Elapsed:** 0.7s
**Overall:** ❌ FAIL

## Results

| Verifier | Status | Time |
|----------|--------|------|
| Repository Health | ✅ PASS | 0.1s |
| Raw Data Integrity | ❌ FAIL | 0.1s |
| Module Metadata | ❌ FAIL | 0.1s |
| Module Accessors | ✅ PASS | 0.1s |
| Checksums | ✅ PASS | 0.1s |
| Data Sources | ✅ PASS | 0.1s |
| Duplicate Detection | ✅ PASS | 0.1s |
| Download Scripts | ❌ FAIL | 0.0s |

## Details

### Repository Health

```
=== Repository Health Check ===

--- .gitignore ---
  ok  Covers: raw/
  ok  Covers: processed/
  ok  Covers: node_modules/
  ok  Covers: dist/
  ok  Covers: logs/

--- package.json ---
  info  Name: dashboard-app
  info  Scripts: dev, build, lint, preview, verify, verify:quick
  ok  node_modules installed (61 packages)

--- Secrets Scan ---
  ok  No secrets found in source files

--- Directory Structure ---
  ok  scripts/ (7 entries)
  ok  raw/ (7 entries)
  ok  processed/ (5 entries)
  info  logs/ (not found - will be created as needed)
  info  core/ (not found - will be created as needed)
  ok  dashboard/ (8 entries)

--- Dashboard ---
  ok  src/modules/ (7 entries)
  ok  src/components/ (11 entries)
  ok  verify/ (9 entries)
  ok  templates/ (4 entries)
  ok  public/ (7 entries)

--- Summary ---
Issues: 0
REPOSITORY HEALTHY

```

### Raw Data Integrity

```
=== Raw Data Verification ===

  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\fhwa\hm15_federal_aid_highway_2024.xlsx: Unknown extension: .xlsx (not in allowed list)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\fhwa\hm20_public_road_length_2024.xlsx: Unknown extension: .xlsx (not in allowed list)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\fhwa\vm2_vehicle_miles_2024.xlsx: Unknown extension: .xlsx (not in allowed list)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\ntd\ntd_service_by_agency_2024.csv: Inconsistent column count in first 20 rows (expected 35)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\ntd\ntd_service_by_mode_2024.csv: Inconsistent column count in first 20 rows (expected 46)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\bps_state_units_2015.txt: Contains null bytes - may be binary data saved as text
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\bps_state_units_2018.txt: Contains null bytes - may be binary data saved as text
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\bps_state_valuation_2018.txt: Contains null bytes - may be binary data saved as text
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\building_permits_state_annual_2019.xls: Unknown extension: .xls (not in allowed list)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\building_permits_state_annual_2020.xls: Unknown extension: .xls (not in allowed list)
  WARN  C:\Users\Admin\Documents\GitHub\ballotdasai\raw\transportation\building_permits_state_annual_2021.xls: Unknown extension: .xls (not in allowed list)

--- Summary ---
Files checked: 19
Total size: 23.0 MB
Duplicate groups: None
Issues: 11

11 ISSUE(S) FOUND


```

### Module Metadata

```
=== Module Metadata Verification ===

--- demographics ---
  WARN  raw/demographics/ directory does not exist

--- economy ---
  WARN  raw/economy/ directory does not exist

--- geography ---
  WARN  raw/geography/ directory does not exist

--- realestate ---
  info  raw/ contains 1 files

--- Summary ---
Issues: 3
3 ISSUE(S) FOUND


```

### Module Accessors

```

=== module: demographics ===
  ok  mapMetric.getValue on all states
  ok  mapMetric.format
  ok  summary(states)
  ok  panel.hero.getValue + format
  ok  panel.badge.getValue
  ok  panel.rankBadge.getValue
  ok  quickStats["National Rank"]
  ok  quickStats["Median Income"]
  ok  quickStats["Births (2023)"]
  ok  section["Population Growth"] (timeseries)
  ok  section["Migration (2023)"] (flow)
  ok  section["Age Distribution"] (bars)
  ok  section["Race & Ethnicity"] (categories)
  ok  ranking["rank"]
  ok  ranking["name"]
  ok  ranking["population"]
  ok  ranking["growth"]
  ok  ranking["income"]
  ok  ranking["under18"]
  ok  ranking["65plus"]
  ok  trend accessors
  ok  ALL states panel accessors (no throw)

=== module: economy ===
  ok  mapMetric.getValue on all states
  ok  mapMetric.format
  ok  summary(states)
  ok  panel.hero.getValue + format
  ok  panel.badge.getValue
  ok  panel.rankBadge.getValue
  ok  quickStats["GDP Rank"]
  ok  quickStats["Per Capita Income"]
  ok  quickStats["Unemployment"]
  ok  section["GDP by Year ($M)"] (timeseries)
  ok  section["Unemployment Rate"] (timeseries)
  ok  section["Per Capita Income ($)"] (timeseries)
  ok  section["Personal Income ($M)"] (timeseries)
  ok  ranking["rank"]
  ok  ranking["name"]
  ok  ranking["gdp"]
  ok  ranking["growth"]
  ok  ranking["percapita"]
  ok  ranking["unemployment"]
  ok  trend accessors
  ok  ALL states panel accessors (no throw)

=== module: geography ===
  ok  mapMetric.getValue on all states
  ok  mapMetric.format
  ok  summary(states)
  ok  panel.hero.getValue + format
  ok  panel.badge.getValue
  ok  panel.rankBadge.getValue
  ok  quickStats["Region"]
  ok  quickStats["Area"]
  ok  quickStats["Pop. Density"]
  ok  section["Climate"] (categories)
  ok  section["Air Quality (2020–2024)"] (bars)
  ok  section["Elevation Profile"] (bars)
  ok  section["Land Cover & Parks"] (flow)
  ok  ranking["rank"]
  ok  ranking["name"]
  ok  ranking["elevation"]
  ok  ranking["temp"]
  ok  ranking[
```

### Checksums

```
=== Checksum Generation & Verification ===

Generated checksums:
  faa/airport-frequencies.csv
    SHA-256: 6bc5f7dd9091b348200c464fa154d37aaa3939d1032efd3e64534cc2ed4f2ce1
    Size: 1.24 MB
  faa/airports.csv
    SHA-256: 70a2c7ed3dec17548d752c68a3fefa9d09948bb24fca5a93d2ebc06a4b391e30
    Size: 12.10 MB
  faa/runways.csv
    SHA-256: e7c581e531660b4e69459e993701896827312df9e2e1016be366c054b7e8f57b
    Size: 3.77 MB
  fhfa/hpi_at_metro.txt
    SHA-256: 2c843f501cf029348f728c1ff129a356a4d29ddb59a114321e7661bed1efa502
    Size: 3.97 MB
  fhfa/hpi_exp_state.txt
    SHA-256: d62f1f55474bd372b8de2bc9feb5c6f90a6a53bc924e7f59a467c2ae330dc420
    Size: 260.9 KB
  fhfa/hpi_exp_us_and_census.txt
    SHA-256: 008c8d1bc195e99fb3dbc32e701ef2a1a60667ead27e79c218998a845547de51
    Size: 40.3 KB
  fhfa/hpi_po_metro.txt
    SHA-256: 00204b05242618e6cf317edf80d74560b735bd1f48eafb3fc5c1eacc39f6e25a
    Size: 803.1 KB
  fhwa/hm15_federal_aid_highway_2024.xlsx
    SHA-256: 75949d1b4fdce34b8d63af7e13cec405d87cf5a5e91b5e6d7227d2ecb3bd5d34
    Size: 33.8 KB
  fhwa/hm20_public_road_length_2024.xlsx
    SHA-256: abe81f96d44531d93f9c77f064a70f0061e9fae836f1cdf4040e383da934c000
    Size: 32.3 KB
  fhwa/vm2_vehicle_miles_2024.xlsx
    SHA-256: 01524202944861cc4915f898e3b426aa179f323935bff54b001dbaa9e61067c4
    Size: 56.4 KB
  ntd/ntd_service_by_agency_2024.csv
    SHA-256: 31f72c7f1e883796e006883d97e64949cb1a2def80c1bc592002ccf982a282d1
    Size: 268.3 KB
  ntd/ntd_service_by_mode_2024.csv
    SHA-256: 06aa16f0b1d2ecf482d8dfbc5650997670754f2bb828046013e76545b3a6c0f9
    Size: 324.7 KB
  transportation/bps_state_units_2015.txt
    SHA-256: bc501db31ed6213fec37adaa19cb0e2b705259fa5faa55836608eed1c2bdbf94
    Size: 5.9 KB
  transportation/bps_state_units_2018.txt
    SHA-256: 642b5f865a74e17c5a0a51a39dc2ade0e3e19a62227f7def279e516e3d5e87ab
    Size: 5.8 KB
  transportation/bps_state_valuation_2018.txt
    SHA-256: 95b44c1e8c7b55d0acf4fedbb18be8ea78a9d6befb3e285d48e6065c484d872d
    Size: 5.9 KB

```

### Data Sources

```
=== Source Validation ===

--- demographics ---
  info  Source: Data: U.S. Census Bureau — PEP 2020–2023 & ACS 1-Year 2023...
  info  Data sources: 2 declared
    - U.S. Census Bureau PEP Population Estimates 2020-2023
    - U.S. Census Bureau ACS 1-Year Estimates 2023

--- economy ---
  info  Source: Data: U.S. Bureau of Economic Analysis (BEA) & Bureau of Labor Statistics (BLS)...
  info  Data sources: 3 declared
    - U.S. Bureau of Economic Analysis (BEA) — GDP & Personal Income
    - U.S. Bureau of Labor Statistics (BLS) — Unemployment Rate
    - National CPI, Employment by Industry from workbook

--- geography ---
  info  Source: Data: EPA, USGS, NOAA, NPS, USDA Forest Service...
  info  Data sources: 5 declared
    - EPA
    - USGS
    - NOAA
    - NPS
    - USDA Forest Service

--- realestate ---
  info  Source: Data: FHFA House Price Index & U.S. Census Bureau Building Permits Survey...
  info  Data sources: 2 declared
    - FHFA House Price Index
    - U.S. Census Bureau Building Permits Survey

--- Summary ---
Issues: 0
ALL SOURCES VALID

```

### Duplicate Detection

```
=== Duplicate File Detection ===

--- Summary ---
Duplicate groups: 0
No duplicates found
Report: reports/duplicate_files.csv

```

### Download Scripts

```
=== Download Script Analysis ===

--- download.py ---
  info  349 lines, 11 functions, 0 classes
  ok    Retry logic
  ok    Logging
  ok    Timeout configured
  ok    Error handling
  ok    User-Agent header
  WARN  download.py: Missing: Metadata generation
  WARN  download.py: Missing: Checksum generation
  WARN  download.py: Missing: Post-download validation
  ok    Skip-existing logic
  ok    No hardcoded absolute paths
  info  Imports: 10

--- download_economy.py ---
  info  186 lines, 5 functions, 0 classes
  WARN  download_economy.py: Missing: Retry logic
  ok    Logging
  ok    Timeout configured
  ok    Error handling
  ok    User-Agent header
  WARN  download_economy.py: Missing: Metadata generation
  WARN  download_economy.py: Missing: Checksum generation
  WARN  download_economy.py: Missing: Post-download validation
  ok    Skip-existing logic
  ok    No hardcoded absolute paths
  info  Imports: 6

--- Summary ---
Issues: 7
7 ISSUE(S) FOUND


```

