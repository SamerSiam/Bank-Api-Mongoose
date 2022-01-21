const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const userRouter = require("./routers/userRoutes");
const port = process.env.PORT || 5000;
//
const cors = require("cors");
const path = require("path");
//

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
//
const publicPath = path.join(__dirname, "client/build");

app.use(express.static(publicPath));
//

// app.get("/api/users", (req, res) => {
//   try {
//     res.status(200).send({ userName: "Bob" });
//   } catch (e) {
//     res.status(400).send({ error: e.message });
//   }
// });

/** from Mordi
app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});
//
*/
app.listen(port, () => {
  console.log("listening on port " + port);
});
