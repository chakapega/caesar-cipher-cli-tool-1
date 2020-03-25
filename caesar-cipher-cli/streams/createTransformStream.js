const { Transform } = require("stream");
const caesarCipher = require("../utils/caesarCipher");

const createTransformStream = (action, shift) => {
  class TransformStream extends Transform {
    constructor() {
      super();
    }

    _transform(chunk, enc, done) {
      let processedData;

      switch (action) {
        case "encode":
          processedData = caesarCipher.encode(chunk.toString("utf-8"), shift);
          break;
        case "decode":
          processedData = caesarCipher.decode(chunk.toString("utf-8"), shift);
          break;
        default:
          console.error("Error");
          process.exit(400);
      }

      this.push(processedData);
      done();
    }
  }

  return new TransformStream();
};

module.exports = createTransformStream;
