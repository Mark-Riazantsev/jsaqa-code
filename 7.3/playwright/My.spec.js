const { test, expect } = require("@playwright/test");
const user = require('./user');
const credentials = require("./user");

test.beforeEach(async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in');
});


test("Успешная авторизация", async ({ page }) => {
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', credentials.email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', credentials.password);
  await page.click('[data-testid="login-submit-btn"]');
  await page.waitForSelector("h2");
  const title = await page.$eval("h2", (element) => element.textContent);
  expect(title).toBe("Моё обучение");
  });

  test("Неуспешная авторизация", async ({ page }) => {
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', credentials.invalidEmail);
    await page.click('[placeholder="Пароль"]');
    await page.fill('[placeholder="Пароль"]', credentials.invalidPassword);
    await page.click('[data-testid="login-submit-btn"]');
    await page.waitForSelector('[data-testid="login-error-hint"]');
    const title = await page.$eval('[data-testid="login-error-hint"]', (element) => element.textContent);
    expect(title).toBe("Вы ввели неправильно логин или пароль");
    });