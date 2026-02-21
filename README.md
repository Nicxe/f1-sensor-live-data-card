# F1 Sensor Live Data Card


[![Buy me a Coffee](https://img.shields.io/badge/Support-Buy%20me%20a%20coffee-fdd734?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/NiklasV)  [![Version](https://img.shields.io/github/v/release/Nicxe/f1-sensor-live-data-card)](#) [![HA Community forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-319fee?logo=home-assistant)](https://community.home-assistant.io/t/formula-1-racing-sensor/880842)<br>

![GitHub Downloads (specific asset, specific tag)](https://img.shields.io/github/downloads/nicxe/f1-sensor-live-data-card/latest/f1-sensor-live-data-card.js)


## Overview

A collection of custom Lovelace cards designed for the [F1 Sensor integration](https://github.com/Nicxe/f1_sensor), providing live Formula 1 session data on your Home Assistant dashboards.

> [!TIP]
> **Full documentation**, including detailed card reference, configuration options, and setup guides, is available at **[nicxe.github.io/f1_sensor](https://nicxe.github.io/f1_sensor/)**.
> Card-specific documentation is on the [Cards Overview](https://nicxe.github.io/f1_sensor/cards/overview) page.



---

<img width="1408" height="1097" alt="F1-card 1" src="https://github.com/user-attachments/assets/94346421-347e-4807-8a9f-185982c5697c" />

---

## Available Cards

| Card | Description |
|---|---|
| `f1-live-session-card` | Session status, track conditions, weather, and lap counter |
| `f1-race-control-card` | Race control messages and flags |
| `f1-sensor-live-data-card` | Tyre statistics with compound data, stint history, and lap counts |
| `f1-pitstop-overview-card` | Pit stop timeline with tyre changes and driver positions |
| `f1-driver-lap-times-card` | Live lap times with sector data and driver comparisons |
| `f1-investigations-card` | Steward investigations and penalties |
| `f1-track-limits-card` | Track limit violations per driver |
| `f1-championship-prediction-drivers-card` | Driver championship standings with predicted final points |
| `f1-championship-prediction-teams-card` | Constructor championship standings with predicted final points |

---

## Installation

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
4. Search for the card you want, e.g. **Custom: F1 Live Session Card**.

Each card has a visual editor with tabs for data sources and display options. For a full list of configuration options per card, see the [Cards Overview](https://nicxe.github.io/f1_sensor/cards/overview) in the documentation.

## Disclaimer

This project is not affiliated with or supported by Home Assistant, Formula 1, or the FIA. It is community maintained.
