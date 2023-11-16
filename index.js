const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

const run = async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    const initial = readlineSync.question('Informe uma moeda inicial: ') || 'dolar';
    const final = readlineSync.question('Informe uma moeda final: ') || 'dolar';

    // Navigate the page to a URL
    await page.goto(`https://www.google.com/search?q=${initial}+para+${final}&rlz=1C1CHBD_pt-PTBR1063BR1064&oq=dolar+para&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyBggBEEUYOTINCAIQABiDARixAxiABDIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIHCAYQABiABDINCAcQABiDARixAxiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8`);

    const value = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value
    });

    console.log(`O resultado de 1 ${initial} em ${final} é ${value}`);
    await browser.close();
}

run()