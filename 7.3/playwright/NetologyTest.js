// const { chromium } = require("playwright");

// const userData = require("./user");
// async () => {
//   const browser = await chromium.launch({
//     headless: false,
//     slowMo: 5000,
//     devtools: true,
//   });
//   const page = await browser.newPage();
//   await page.goto("https://netology.ru/?modal=sign_in");

//   const emailInput = document.querySelector("");
//   const passwordInput = document.querySelector(
//     "#__next > div:nth-child(2) > div > div > div.modal_container__yO5GZ > div.modal_content__Flhjj > div.styles_root__l6N51 > div > form > div:nth-child(3) > input"
//   );
//   emailInput.value = userData.email;
//   passwordInput.value = userData.password;

//   const loginButton = document.querySelector(
//     "#__next > div:nth-child(2) > div > div > div.modal_container__yO5GZ > div.modal_content__Flhjj > div.styles_root__l6N51 > div > form > buttonn"
//   );
//   loginButton.click();

//   expect(login()).toBe(true);
// };
const { chromium } = require("playwright");
const userData = require("./user");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.evaluate((userData) => {
    document.querySelector('[name="email"]').value = userData.validemail;
    document.querySelector('[name="password"]').value = userData.validpassword;
    document.querySelector("button.Button_button__4WipJ").click();
  }, userData);

  await page.waitForNavigation();

  const isLoggedIn = await page.evaluate(() => {
    return (
      document.querySelector(
        "#app > div.src-LMS-containers-Layout--root--_7tuL.src-LMS-containers-Layout--inner--Vmi8T.src-LMS-containers-Layout--mobile--y2_ce > section > div.------libs-shared-src-reallyShared-components-Header--root--qpOnk.------libs-shared-src-reallyShared-components-Header--color--NtacV > header > div.------libs-shared-src-reallyShared-components-Header--top--USNwL > div.------libs-shared-src-reallyShared-components-Header--menu--A5hoh > div > a > div"
      ) !== null
    );
  });

  console.log(isLoggedIn);

  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.evaluate((userData) => {
    document.querySelector('[name="email"]').value = userData.unvalidemail;
    document.querySelector('[name="password"]').value = userData.unvalidpassword;
    document.querySelector("button.Button_button__4WipJ").click();
  }, userData);

  await page.waitForNavigation();

  const isLoggedIn = await page.evaluate(() => {
    return (
      document.querySelector(
        "#app > div.src-LMS-containers-Layout--root--_7tuL.src-LMS-containers-Layout--inner--Vmi8T.src-LMS-containers-Layout--mobile--y2_ce > section > div.------libs-shared-src-reallyShared-components-Header--root--qpOnk.------libs-shared-src-reallyShared-components-Header--color--NtacV > header > div.------libs-shared-src-reallyShared-components-Header--top--USNwL > div.------libs-shared-src-reallyShared-components-Header--menu--A5hoh > div > a > div"
      ) !== null
    );
  });

  console.log(isLoggedIn);

  await browser.close();
})();
