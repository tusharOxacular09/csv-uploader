import "dotenv/config.js";
import app from "./app.js";

// Listening the server
app.listen(process.env.PORT, () => {
  console.log(
    `🚀 CSV Uploader Server Is Running On PORT ${process.env.PORT}.🚀`
  );
});
