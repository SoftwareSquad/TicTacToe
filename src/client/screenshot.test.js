const puppeteer = require("puppeteer");

  describe("Localhost screenshots", () => {
  let browser, page;
  let url = "https://tictactoe-hugb.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Test X as winner", async () => {
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

    //screenshot
    //await page.screenshot({path: "docs/screenshots/screenshot.png"});

    browser.close();
  }, 5000);

  test("Tests O as winner", async () => {
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
  }, 5000);

  test("Tests draw", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);

    //clicks
    await page.click("#c1-1");//x
    var c11 = await page.evaluate(() => document.querySelector('#c1-1').innerText);
    expect(c11).toBe('X');

    await page.click("#c1-2");//0
    var c12 = await page.evaluate(() => document.querySelector('#c1-2').innerText);
    expect(c12).toBe('O');

    await page.click("#c1-3");//x
    var c13 = await page.evaluate(() => document.querySelector('#c1-3').innerText);
    expect(c13).toBe('X');

    await page.click("#c2-1");//o
    var c21 = await page.evaluate(() => document.querySelector('#c2-1').innerText);
    expect(c21).toBe('O');

    await page.click("#c2-3");//x
    var c23 = await page.evaluate(() => document.querySelector('#c2-3').innerText);
    expect(c23).toBe('X');

    await page.click("#c2-2");//o
    var c22 = await page.evaluate(() => document.querySelector('#c2-2').innerText);
    expect(c22).toBe('O');

    await page.click("#c3-1");//x
    var c31 = await page.evaluate(() => document.querySelector('#c3-1').innerText);
    expect(c31).toBe('X');

    await page.click("#c3-3");//o
    var c33 = await page.evaluate(() => document.querySelector('#c3-3').innerText);
    expect(c33).toBe('O');

    await page.click("#c3-2");//x
    var c32 = await page.evaluate(() => document.querySelector('#c3-2').innerText);
    expect(c32).toBe('X');
    
    //check for winner
    var winner  = await page.evaluate(() => document.querySelector('#winner').innerText);
    expect(winner).toBe('The Winner Is: No one, it\'s a draw');
  }, 5000);
});