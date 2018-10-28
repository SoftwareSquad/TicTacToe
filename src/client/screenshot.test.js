const puppeteer = require("puppeteer");
const game = require("../logic/game");

  describe("Localhost screenshots", () => {
  let browser, page;
  let url = "http://localhost:3000/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Save a screenshot after click", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);

    expect(game.player()).toBe('X');
    await page.click("#c1-1");//x
    expect(game.player()).toBe('O');
    


    browser.close();
  }, 5000);
});