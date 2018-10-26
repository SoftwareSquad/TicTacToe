const puppeteer = require("puppeteer");

  describe("Google screenshots", () => {
  let browser, page;
  let url = "http://localhost:3000/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Save a screenshot", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: filename + ".png"});
    browser.close();
  });

  test("Save a desktop screenshot", async () => {
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);
  })
});