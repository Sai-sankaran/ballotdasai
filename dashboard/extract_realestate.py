import json
import datetime
from pathlib import Path

SRC = Path(__file__).parent / "real-estate" / "dashboard_data.json"
OUT = Path(__file__).parent / "dashboard-app" / "public" / "realestate.json"

# State abbr -> FIPS code (50 states + DC)
ABBR_TO_FIPS = {
    "AL": "01", "AK": "02", "AZ": "04", "AR": "05", "CA": "06",
    "CO": "08", "CT": "09", "DE": "10", "DC": "11", "FL": "12",
    "GA": "13", "HI": "15", "ID": "16", "IL": "17", "IN": "18",
    "IA": "19", "KS": "20", "KY": "21", "LA": "22", "ME": "23",
    "MD": "24", "MA": "25", "MI": "26", "MN": "27", "MS": "28",
    "MO": "29", "MT": "30", "NE": "31", "NV": "32", "NH": "33",
    "NJ": "34", "NM": "35", "NY": "36", "NC": "37", "ND": "38",
    "OH": "39", "OK": "40", "OR": "41", "PA": "42", "RI": "44",
    "SC": "45", "SD": "46", "TN": "47", "TX": "48", "UT": "49",
    "VT": "50", "VA": "51", "WA": "53", "WV": "54", "WI": "55",
    "WY": "56",
}


def pct_change(old, new):
    if not old or not new:
        return 0.0
    return round((new - old) / old * 100, 1)


def extract():
    print("Reading real-estate dashboard_data.json...")
    src = json.loads(SRC.read_text(encoding="utf-8"))
    raw_states = src["states"]

    states = {}
    for abbr, s in raw_states.items():
        fips = ABBR_TO_FIPS.get(abbr)
        if not fips:
            continue

        hpi_trend = {str(p["year"]): round(float(p["hpi"]), 2) for p in s.get("hpi_trend", [])}
        permits_trend = {str(p["year"]): int(p["permits"]) for p in s.get("building_permits_trend", [])}

        hpi_latest = round(float(s["hpi_latest"]), 2) if s.get("hpi_latest") else 0
        hpi_year = s.get("hpi_year") or 0
        permits_latest = int(s.get("building_permits_latest") or 0)

        states[fips] = {
            "name": s["name"],
            "abbr": abbr,
            "fips": fips,
            "population": int(s.get("population") or 0),
            "hpi_latest": hpi_latest,
            "hpi_year": hpi_year,
            "hpi_trend": hpi_trend,
            "hpi_growth_1yr": pct_change(hpi_trend.get(str(hpi_year - 1)), hpi_latest),
            "hpi_growth_10yr": pct_change(hpi_trend.get(str(hpi_year - 10)), hpi_latest),
            "building_permits_latest": permits_latest,
            "building_permits_trend": permits_trend,
        }

    # National ranks (1 = highest)
    by_hpi = sorted(states.values(), key=lambda s: -s["hpi_latest"])
    by_permits = sorted(states.values(), key=lambda s: -s["building_permits_latest"])
    for i, s in enumerate(by_hpi, 1):
        states[s["fips"]]["hpi_rank"] = i
    for i, s in enumerate(by_permits, 1):
        states[s["fips"]]["permits_rank"] = i

    output = {
        "metadata": {
            "title": "U.S. Real Estate & Housing",
            "sources": ["FHFA House Price Index", "U.S. Census Bureau Building Permits Survey"],
            "generated": datetime.date.today().isoformat(),
            "data_from_excel": False,
        },
        "states": dict(sorted(states.items(), key=lambda x: x[1]["name"])),
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(output, indent=2), encoding="utf-8")
    print(f"Written {len(states)} states to {OUT}")
    print(f"File size: {OUT.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    extract()
