# F1 Sensor Live Data Card


[![Buy me a Coffee](https://img.shields.io/badge/Support-Buy%20me%20a%20coffee-fdd734?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/NiklasV)  [![Version](https://img.shields.io/github/v/release/Nicxe/f1-sensor-live-data-card)](#) [![HA Community forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-319fee?logo=home-assistant)](https://community.home-assistant.io/t/formula-1-racing-sensor/880842)<br>

![GitHub Downloads (specific asset, specific tag)](https://img.shields.io/github/downloads/nicxe/f1-sensor-live-data-card/latest/f1-sensor-live-data-card.js)


## Overview

A collection of custom Lovelace cards designed for the [F1 Sensor integration](https://github.com/Nicxe/f1_sensor), providing live Formula 1 session data on your Home Assistant dashboards.

This package includes the following cards:

| Card | Description |
|---|---|
| `f1-sensor-live-data-card` | Tyre statistics with compound data, stint history, and lap counts |
| `f1-pitstop-overview-card` | Pit stop timeline with tyre changes and driver positions |
| `f1-driver-lap-times-card` | Live lap times with sector data and driver comparisons |
| `f1-investigations-card` | Steward investigations and penalties |
| `f1-track-limits-card` | Track limit violations per driver |
| `f1-live-session-card` | Session status, track conditions, weather, and lap counter |
| `f1-race-control-card` | Race control messages and flags |



## Installation

You can install this card by following one of the guides below:

### With HACS (Recommended)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nicxe&repository=f1-sensor-live-data-card&category=plugin)

1. Click on the three dots in the top right corner of the HACS overview menu.
2. Select **Custom repositories**.
3. Add the repository URL: `https://github.com/Nicxe/f1-sensor-live-data-card`.
4. Set the type to **Dashboard**.
5. Click the **Add** button.
6. Search for **F1 Sensor Live Data Card** in HACS and click the **Download** button.

<details>
<summary>Without HACS</summary>

1. Download `f1-sensor-live-data-card.js` and the tyre images from the [latest release](https://github.com/Nicxe/f1-sensor-live-data-card/releases).
2. Copy these files into your `config/www` directory, e.g. `config/www/f1-sensor-live-data-card/`.
3. Add a reference to `f1-sensor-live-data-card.js` in your dashboard. There are two ways to do this:
    - **Using the UI:** Go to _Settings_ → _Dashboards_ → _More Options_ → _Resources_ → _Add Resource_. Set the URL as `/local/f1-sensor-live-data-card/f1-sensor-live-data-card.js` and set the _Resource type_ to `JavaScript Module`.
      **Note:** If you do not see the Resources menu, you need to enable _Advanced Mode_ in your _User Profile_.
    - **Using YAML:** Add the following code to the `lovelace` section of your configuration:
        ```yaml
        resources:
          - url: /local/f1-sensor-live-data-card/f1-sensor-live-data-card.js
            type: module
        ```

</details>

## Configuration

All cards can be configured using the dashboard UI editor:

1. In the dashboard UI, click on the three dots in the top right corner.
2. Click **Edit Dashboard**.
3. Click the **Plus** button to add a new card.
4. Search for the card you want, e.g. **Custom: F1 Sensor Live Data Card**.

Each card has a visual editor with tabs for data sources and display options.




### Card Examples in YAML

#### Tyre Statistics

```yaml
type: custom:f1-sensor-live-data-card
entity: sensor.f1_tyre_statistics
drivers_entity: sensor.f1_driver_list
title: Tyres Statistics
show_header: true
show_tyre_image: true
show_compound_name: true
show_best_times: true
show_stats: true
show_delta: true
show_team_logo: true
team_logo_style: color
```

#### Pit Stops & Tyres

```yaml
type: custom:f1-pitstop-overview-card
drivers_entity: sensor.f1_driver_list
positions_entity: sensor.f1_driver_positions
tyres_entity: sensor.f1_current_tyres
pitstops_entity: sensor.f1_pitstops
title: Pit Stops & Tyres
```

#### Driver Lap Times

```yaml
type: custom:f1-driver-lap-times-card
drivers_entity: sensor.f1_driver_list
positions_entity: sensor.f1_driver_positions
title: Driver Lap Times
```

#### Investigations & Penalties

```yaml
type: custom:f1-investigations-card
investigations_entity: sensor.f1_investigations
drivers_entity: sensor.f1_driver_list
positions_entity: sensor.f1_driver_positions
title: Investigations & Penalties
```

#### Track Limits

```yaml
type: custom:f1-track-limits-card
track_limits_entity: sensor.f1_track_limits
drivers_entity: sensor.f1_driver_list
positions_entity: sensor.f1_driver_positions
title: Track Limits
```

#### Live Session

```yaml
type: custom:f1-live-session-card
session_entity: sensor.f1_current_session
session_status_entity: sensor.f1_session_status
formation_start_entity: binary_sensor.f1_formation_start
lap_count_entity: sensor.f1_race_lap_count
track_status_entity: sensor.f1_track_status
weather_entity: sensor.f1_track_weather
next_race_entity: sensor.f1_next_race
```

#### Race Control

```yaml
type: custom:f1-race-control-card
entity: sensor.f1_race_control
```


## Disclaimer

This project is not affiliated with or supported by Home Assistant, Formula 1, or the FIA. It is community maintained.