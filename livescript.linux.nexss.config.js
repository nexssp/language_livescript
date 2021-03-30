let languageConfig = Object.assign(
  {},
  require("./livescript.win32.nexss.config")
);
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();
languageConfig.compilers = {
  livescript: {
    install: os.replacePMByDistro(`${sudo}npm install --global coffeescript`),
    command: "lsc",
    args: "<file>", //
    help: ``,
  },
};

// This is the same as win32 one.
module.exports = languageConfig;
