const programOptions = require("minimist")(process.argv.slice(2));

const createProgramOptions = () => {
  const newProgramOptions = { ...programOptions };

  newProgramOptions.shift = programOptions.s || programOptions.shift;
  newProgramOptions.input = programOptions.i || programOptions.input;
  newProgramOptions.output = programOptions.o || programOptions.output;
  newProgramOptions.action = programOptions.a || programOptions.action;

  return newProgramOptions;
};

module.exports = createProgramOptions;
