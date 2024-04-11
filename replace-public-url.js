var fs = require("fs");
var path = require("path");
var childProcess = require("child_process");

function getPublicUrl(envFilePath) {
  var env = fs.readFileSync(envFilePath, { encoding: "UTF-8" });
  var envVars = env.split(/[\r\n]/);
  var publicUrl;
  for (let i = 0; i < envVars.length; i++) {
    envVar = envVars[i];
    if (envVar.startsWith("PUBLIC_URL")) {
      publicUrl = envVar.split("=")[1].trim();
    }
  }
  return publicUrl;
}
var publicUrl = getPublicUrl(path.join(__dirname, "front", ".env"));
var genericPublicUrl = getPublicUrl(path.join(__dirname, "front", "dot-env-template"));

if (!publicUrl || !genericPublicUrl) {
  console.error("No PUBLIC_URL found in front/.env or in front/dot-env-template");
  exit(1);
}

publicUrl = publicUrl.replace(/\/$/, "");
genericPublicUrl = genericPublicUrl.replace(/\/$/, "");

var files = fs.readdirSync(path.join(__dirname, "front", "build"), {
  recursive: true,
  withFileTypes: true,
});

var toReplace = genericPublicUrl.replaceAll("/", "\\/");
var replaceBy = publicUrl.replaceAll("/", "\\/");
childProcess.execSync(
  `find . -type f -print0 | xargs -0 perl -pi -e 's/${toReplace}/${replaceBy}/g'`,
  { cwd: path.join(__dirname, "front", "build") }
);
// var toReplace = RegExp(genericPublicUrl, "g");
// files.forEach(function (f) {
//   if (f.isFile()) {
//     if (!f.name.endsWith(".map") && !f.name.endsWith(".txt")) {
//       var fContent = fs.readFileSync(path.join(f.parentPath, f.name), { encoding: "UTF-8" });
//       fContent = fContent.replaceAll(toReplace, publicUrl);
//       fs.writeFileSync(path.join(f.parentPath, f.name), fContent);
//     }
//   }
// });
