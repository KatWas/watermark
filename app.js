const Jimp = require('jimp');

const addTextWatermarkToImage = async function(inputFile, outputFile, text) {
  const image = await Jimp.read(inputFile);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const textData = {
    text: text,
    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
  }
  await image.quality(100).writeAsync(outputFile);
};
addTextWatermarkToImage('./test.jpg', './test-with-watermark.jpg', 'Hello world');