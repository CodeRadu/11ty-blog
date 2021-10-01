const { DateTime } = require("luxon");

module.exports = function (config) {
  config.addPassthroughCopy("./src/style.css");
  config.addPassthroughCopy("./src/assets");
  config.addPassthroughCopy("./src/js");

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
