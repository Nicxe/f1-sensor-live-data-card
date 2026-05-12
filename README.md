# F1 Sensor Live Data Card (Deprecated)

This standalone dashboard card repository is deprecated.

The live data cards are now bundled with the main F1 Sensor integration:

https://github.com/Nicxe/f1_sensor

## Card moved to the integration repository

Starting with F1 Sensor v5.0.0, this standalone card repository is no longer used for updates.

If you already use the card, migrate as follows:

1. Update **F1 Sensor** in HACS.
2. Restart Home Assistant.
3. Confirm the bundled live data cards work in your dashboards.
4. Remove/uninstall this deprecated HACS dashboard repository (`Nicxe/f1-sensor-live-data-card`).
5. Remove old Lovelace resources that point to this repository, such as `/hacsfiles/f1-sensor-live-data-card/f1-sensor-live-data-card.js`, `/local/community/f1-sensor-live-data-card/f1-sensor-live-data-card.js`, or `/local/f1-sensor-live-data-card.js`.
6. Keep your dashboard cards as they are. Existing `custom:f1-*` card types are unchanged.
7. Hard-refresh the browser once if the old card UI still appears.

F1 Sensor now manages the bundled card resource automatically at `/local/f1-sensor-live-data-card/f1-sensor-live-data-card.js?v=...`.

For current installation, configuration, and card documentation, see:

https://nicxe.github.io/f1_sensor/cards/cards-overview

Please open all new card issues and feature requests in the main F1 Sensor repository and select the **Live data card** component:

https://github.com/Nicxe/f1_sensor/issues

This repository remains available as a historical reference, but it will not receive new card updates.

## Historical assets

The last standalone JavaScript file and tyre image assets remain in this repository for historical reference and for users who need to inspect the old standalone distribution.

This project is not affiliated with or supported by Home Assistant, Formula 1, or the FIA.
