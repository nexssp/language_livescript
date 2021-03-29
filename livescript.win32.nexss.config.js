let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "LiveScript";
languageConfig.description =
  "LiveScript is a language which compiles to JavaScript. It has a straightforward mapping to JavaScript and allows you to write expressive code devoid of repetitive boilerplate.";
languageConfig.url = "https://livescript.net/";
languageConfig.founders = [
  "Jeremy Ashkenas",
  "Satoshi Murakami",
  "George Zahariev",
];
languageConfig.developers = [""];
languageConfig.years = ["2011"];
languageConfig.extensions = [".ls"];
languageConfig.executeCommandLine = "lsc";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "lsc";
languageConfig.builders = {};
languageConfig.compilers = {
  livescript: {
    install: "npm install --global livescript",
    command: "lsc",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.livescript.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "npm list",
    search: "npm search",
    install: "npm install",
    uninstall: "npm remove",
    help: "npm help",
    version: "npm --version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.json")
        )
      ) {
        require("child_process").execSync("npm init -y", { stdio: "inherit" });
        console.log("initialized npm project.");
      } else {
        console.log("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm",
  },
  yarn: {
    installation: "scoop install yarn",
    list: "yarn list",
    search: "yarn search",
    install: "yarn list",
    uninstall: "yarn remove",
    help: "yarn help",
    version: "yarn help",
  },
};

module.exports = languageConfig;
