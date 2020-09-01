const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({defaultViewport: null});
    const page = await browser.newPage();
    await page.goto('http://localhost:8000', {waitUntil: 'networkidle2'});
    await page.emulateMediaType('screen');
    await page.pdf({path: 'static/cv-tomide.pdf', width: '1720px', height: '1500px'});
    await browser.close();
})();
