const { pipeline } = require("stream");
const createReadStream = require("./streams/createReadStream");
const createTransformStream = require("./streams/createTransformStream");
const createWriteStream = require("./streams/createWriteStream");
const createProgramOptions = require("./utils/createProgramOptions");

const programOptions = createProgramOptions();

const readStream = createReadStream(programOptions.input);
const transformStream = createTransformStream(
  programOptions.action,
  programOptions.shift
);
const writeStream = createWriteStream(programOptions.output);

pipeline(readStream, transformStream, writeStream, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Pipeline completed successfully.");
  }
});
