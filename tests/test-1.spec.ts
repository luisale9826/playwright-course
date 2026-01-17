import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegation to www.freerangetesters.com', () => { // This is the group of tests that will be executed on a feature, in this case the redirection


        const sections = [
            { name: 'Cursos', urlPart: '/cursos', expectedTitle: 'Cursos' },
            { name: 'Talleres', urlPart: '/talleres-y-webinars', expectedTitle: 'Webinars en vivo' },
            { name: 'Recursos', urlPart: '/recursos', expectedTitle: 'Recursos' },
            { name: 'Blog', urlPart: '/blog', expectedTitle: 'Free Range Testers' },
        ]

        for (const section of sections) {
            test(`The links redirect correctly of the section ${section.name}`, async ({ page }) => {
                await test.step('Go to main page of Free Range Testers', async () => {
                    page.goto('https://www.freerangetesters.com');
                    await expect(page).toHaveTitle('Free Range Testers');
                })

                await test.step(`Click on "${section.name}"`, async () => {
                    page.locator('#page_header').getByRole('link', { name: section.name, exact: true }).click();
                    await page.waitForURL(`**${section.urlPart}`);
                })

                await test.step(`I am redirected to the section with title "${section.expectedTitle}"`, async () => {
                    await expect(page).toHaveTitle(section.expectedTitle);
                })

            })
        }
    })

})();