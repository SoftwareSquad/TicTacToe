const puppeteer = require("puppeteer");

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

  test("Test clicks on elements", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);


    //clicks
    await page.click("#c1-1");//x
    var c11 = await page.evaluate(() => document.querySelector('#c1-1').innerText);
    expect(c11).toBe('X');

    await page.click("#c1-2");//o
    var c12 = await page.evaluate(() => document.querySelector('#c1-2').innerText);
    expect(c12).toBe('O');

    await page.click("#c2-1");//x
    var c21 = await page.evaluate(() => document.querySelector('#c2-1').innerText);
    expect(c21).toBe('X');

    await page.click("#c2-2");//o
    var c22 = await page.evaluate(() => document.querySelector('#c2-2').innerText);
    expect(c22).toBe('O');

    await page.click("#c3-1");//x
    var c31 = await page.evaluate(() => document.querySelector('#c3-1').innerText);
    expect(c31).toBe('X');

    //check for winner
    var winner  = await page.evaluate(() => document.querySelector('#winner').innerText);
    expect(winner).toBe('The Winner Is: X');

    //clicks
    await page.click("#c1-1");//x
    var c11 = await page.evaluate(() => document.querySelector('#c1-1').innerText);
    expect(c11).toBe('X');

    await page.click("#c1-2");//o
    var c12 = await page.evaluate(() => document.querySelector('#c1-2').innerText);
    expect(c12).toBe('O');
    
    await page.click("#c1-3");//x
    var c13 = await page.evaluate(() => document.querySelector('#c1-3').innerText);
    expect(c13).toBe('X');

    await page.click("#c2-2");//o
    var c22 = await page.evaluate(() => document.querySelector('#c2-2').innerText);
    expect(c22).toBe('O');
    
    await page.click("#c2-1");//x
    var c21 = await page.evaluate(() => document.querySelector('#c2-1').innerText);
    expect(c21).toBe('X');
    
    await page.click("#c3-2");//o
    var c32 = await page.evaluate(() => document.querySelector('#c3-2').innerText);
    expect(c32).toBe('O');

    
    //check for winner
    var winner  = await page.evaluate(() => document.querySelector('#winner').innerText);
    expect(winner).toBe('The Winner Is: O');

    //if X has clicked on column 1-1 than O can't click on the same column
    await page.click("#c1-1"); //x
    var c11 =  await page.evaluate(() => document.querySelector('#c1-1').innerText);
    expect(c11).toBe('X');
    await page.click("#c1-1"); //o
    var c11 = await page.evaluate(() => document.querySelector('#c1-1').innerText);
    expect(c11).toBe('X')

    //screenshot
    await page.screenshot({path: "docs/screenshots/screenshot.png"});

    browser.close();
  }, 7000);
});