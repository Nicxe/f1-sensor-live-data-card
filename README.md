# F1 Sensor Live Data Card (Deprecated Standalone Repository)


[![Buy me a Coffee](https://img.shields.io/badge/Support-Buy%20me%20a%20coffee-fdd734?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/NiklasV)  [![Version](https://img.shields.io/github/v/release/Nicxe/f1-sensor-live-data-card)](#) [![HA Community forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-319fee?logo=home-assistant)](https://community.home-assistant.io/t/formula-1-racing-sensor/880842)<br>

![GitHub Downloads (specific asset, specific tag)](https://img.shields.io/github/downloads/nicxe/f1-sensor-live-data-card/latest/f1-sensor-live-data-card.js)


## Deprecation Notice

This standalone dashboard card repository is deprecated for future F1 Sensor card updates.

The live data cards are moving into the F1 Sensor integration repository:
[https://github.com/Nicxe/f1_sensor](https://github.com/Nicxe/f1_sensor)

Beta testers should install the F1 Sensor beta that includes the bundled Live Data Cards. The integration manages card delivery, tyre image assets, and the Lovelace resource URL automatically.

If you currently use this standalone HACS dashboard repository, migrate by updating F1 Sensor and then removing this card repository from HACS after confirming the bundled card works. Your existing dashboards can continue using the same custom card types, such as `custom:f1-live-session-card` and `custom:f1-sensor-live-data-card`.

After migration, restart Home Assistant and perform a hard browser reload so the dashboard loads the bundled card assets. If you previously added a manual Lovelace resource, remove stale entries such as `/local/f1-sensor-live-data-card.js` or `/hacsfiles/f1-sensor-live-data-card/...` after the bundled resource is active.

New issues should be opened in the F1 Sensor repository with the **Live data card** component selected:
[https://github.com/Nicxe/f1_sensor/issues](https://github.com/Nicxe/f1_sensor/issues)

The current JavaScript and image assets remain in this repository so existing standalone beta users are not broken during the migration. No new features will be added in this standalone repository.

Detailed card documentation is available here:
[https://nicxe.github.io/f1_sensor/cards/cards-overview](https://nicxe.github.io/f1_sensor/cards/cards-overview)

## Preview

<img width="1720" height="1396" alt="F1 card overview" src="https://github.com/user-attachments/assets/14d4bd6e-45ef-4f34-b77f-174dd7aa9d23" />

## Current Standalone Cards

These custom card types remain valid after migration:

- `custom:f1-live-session-card`
- `custom:f1-next-race-card`
- `custom:f1-season-calendar-card`
- `custom:f1-race-control-card`
- `custom:f1-fia-documents-card`
- `custom:f1-qualifying-timing-card`
- `custom:f1-practice-timing-card`
- `custom:f1-race-lap-card`
- `custom:f1-starting-grid-card`
- `custom:f1-last-race-results-card`
- `custom:f1-sensor-live-data-card`
- `custom:f1-pitstop-overview-card`
- `custom:f1-driver-lap-times-card`
- `custom:f1-investigations-card`
- `custom:f1-track-limits-card`
- `custom:f1-championship-prediction-drivers-card`
- `custom:f1-championship-prediction-teams-card`
- `custom:f1-replay-control-card`

## Disclaimer

This project is not affiliated with or supported by Home Assistant, Formula 1, or the FIA. It is community maintained.
