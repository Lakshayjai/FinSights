import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Route for homepage
app.get("/", async (req, res) => {
  try {
    // Example: fetching live market status from Alpha Vantage
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=YOUR_API_KEY`
    );

    const marketStatus = response.data;
    res.render("index", { title: "FinSights | Home", marketStatus });
  } catch (err) {
    console.error(err);
    res.render("index", { title: "FinSights | Home", marketStatus: null });
  }
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus", { title: "About Us | FinSights" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us | FinSights" });
});


app.listen(port, () => console.log(`Server running on port ${port}`));
