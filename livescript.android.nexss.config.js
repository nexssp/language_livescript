let languageConfig = Object.assign(
  {},
  require("./livescript.win32.nexss.config")
);

const sudo = process.sudo;
languageConfig.compilers = {
  livescript: {
    install: process.replacePMByDistro(
      `npm install --global livescript`
    ),
    command: "lsc",
    args: "<file>", //
    help: ``,
  },
};

// This is the same as win32 one.
module.exports = languageConfig;
