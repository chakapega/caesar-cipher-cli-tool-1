const fs = require("fs");

const createWriteStream = (pathStr) => {
  if (fs.existsSync(pathStr)) {
    return fs.createWriteStream(pathStr);
  } else if (!pathStr) {
    return process.stdout;
  }

  process.stderr.write(
    " Output file doesn't exist. Check if file path is correct.\n"
  );
  process.exit(400);
};

module.exports = createWriteStream;
