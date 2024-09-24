
import express from "express";
import axios from "axios";


const app = express();
const port = 3000;


app.use(express.static('public'));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});



// app.get("/", (req, res) => {
//   res.render("index.ejs", {  });
// });

// // app.get("/", (req, res) => {
// //   const secret = "This is a sample secret"; // Or fetch it from your database
// //   res.render("index", { secret: secret });
// // });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

