const statusCode = 500;
if (statusCode !== 429 || statusCode !== 500) {
  console.log("ERRO");
} else {
  console.log("retry");
}
