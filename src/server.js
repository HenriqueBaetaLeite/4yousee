const app = require("./app.js");

const PORT = process.env.API_PORT || 3003;

app.listen(PORT, () => {
  console.log(`Backend 4 you see running on ${PORT}`);
});
