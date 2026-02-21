const config = require("@nicxe/semantic-release-config")({
  kind: "assets",
  projectName: "F1 Sensor Live Data Card",
  repoSlug: "Nicxe/f1-sensor-live-data-card",
  assets: [
    {
      path: "f1-sensor-live-data-card.js",
      label: "f1-sensor-live-data-card.js"
    },
    {
      path: "images/*.png",
      name: "{{base}}"
    }
  ]
}
);

const githubPlugin = config.plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === "@semantic-release/github"
);

if (githubPlugin?.[1]) {
  githubPlugin[1].successCommentCondition = false;
}

module.exports = config;
