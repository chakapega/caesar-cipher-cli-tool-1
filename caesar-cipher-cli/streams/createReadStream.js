const fs = require("fs");

const createReadStream = (pathStr) => {
  if (fs.existsSync(pathStr)) {
    return fs.createReadStream(pathStr);
  } else if (!pathStr) {
    process.stdout.write("Type your input: ");
    return process.stdin;
  }

  process.stderr.write(
    " Input file doesn't exist. Check if file path is correct.\n"
  );
  process.exit(400);
};

module.exports = createReadStream;
