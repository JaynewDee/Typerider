const mongoose = require("mongoose");
const environment = require("../env.js");
const { MONGO_URI } = environment;
connect().catch((err) => console.log(err));
// ** Hoisted and called above ** //
async function connect() {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = mongoose.connection;
