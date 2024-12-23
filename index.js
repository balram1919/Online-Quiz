const express = require("express");
const glob = require("glob");
const path = require("path");
const { connectDB } = require("./config/config.js");
const { default: puppeteer } = require("puppeteer");
require("dotenv").config();
const app = express();
app.use(express.json());

connectDB();
mountRoutes();

function mountRoutes() {
  const files = glob.sync("server/apis/**/*.route.js");
  files.forEach((routeFilename) => {
    const routes = require(`./${routeFilename}`);
    const routeName = path.basename(routeFilename, ".route.js");
    const url = `/${routeName}`;
    app.use(url, routes);
  });
}
const scrapeIPOData = async () => {
  const url = "https://www.investorgain.com/report/live-ipo-gmp/331/";
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  // Extract data from the table
  const data = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("table tbody tr"));
    return rows.map((row) => {
      const cells = row.querySelectorAll("td");
      const imageCell = cells[4];
      const img = imageCell.querySelector("img");
      const details = cells[0]?.querySelector("a")?.href;
      return {
        companyName: cells[0]?.textContent
          .trim()
          ?.replace(/\s*\(Sub:[^)]+\)/, ""),
        subscriptions:
          cells[0]?.textContent.trim()?.match(/\(Sub:([^)]+)\)/)?.[1] ??
          "Not Found Subscription",
        price: cells[1]?.textContent.trim(),
        gmp: cells[2]?.textContent.trim(),
        rating: img.title?.replaceAll("Rating", ""),
        // rating_image_src: img.src,
        listing_price: cells[3]?.textContent.trim(),
        ipo_size: cells[5]?.textContent.trim(),
        lot: cells[6]?.textContent.trim(),
        open_date: cells[7]?.textContent.trim(),
        close_date: cells[8]?.textContent.trim(),
        allotment_date: cells[9]?.textContent.trim(),
        listing_date: cells[10]?.textContent.trim(),
        gmp_update_date: cells[11]?.textContent.trim(),
        type: cells[0]?.textContent.trim().includes("SMEClose")
          ? "SME"
          : "MAIN BOARD",
        // details_page_url: details,
      };
    });
  });

  await browser.close();
  return data;
};

app.get("/api/ipo-gmp", async (req, res) => {
  try {
    const ipoData = await scrapeIPOData();
    res.json(ipoData);
  } catch (error) {
    console.error("Error scraping IPO data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});
app.get("/", (req, res, next) => {
  res.send("Hello, world!");
});
app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});
