import { Browser, Page, test, expect } from 'playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;

    test.describe('Practice Tests for Playwright', () => {

        test('Checking the usage of locators', async ({ page }) => {

            await test.step('Test get Element by role', async () => {
                page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                await expect(page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento' }))
                    .toContainText('Hacé click para generar un ID dinámico y mostrar el elemento oculto');
            })

            await test.step('Test get Element by text', async () => {
                page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                await expect(page.getByText('Un aburrido texto', { exact: true })).toContainText('Un aburrido texto');
            })

            await test.step('Test get Element by Label', async () => {
                page.goto('https://www.freerangetesters.com/login', { waitUntil: 'load' });
                await expect(page.getByLabel('Correo electrónico')).toContainText('');
            })

            await test.step('Test get Element by Placeholder', async () => {
                page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                await expect(page.getByPlaceholder('Ingresá Texto')).toContainText('');
            })

            await test.step('Test get Element by Alt Text', async () => {
                page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
                await expect(page.getByAltText('Imagen de ejemplo')).toBeVisible();
            })

            // await test.step('Test get Element by Title', async () => {
            //     page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            //     await expect(page.getByTitle('Tooltip de ejemplo')).toBeVisible();
            // })

            // This locator is very useful for testing and is highly recommended to be used, 
            // but it requires the developer to add the attribute data-testid to the elements
            // await test.step('Test get Element by TestId', async () => {
            //     page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            //     await expect(page.getByTestId('test-id-example')).toBeVisible();
            // })

            // CSS Selectors are widely used in automation testing, but it is not recommended to use them as the first option.
            // Is better to use other locators that are more robust and less likely to change. Avoid using CSS Selectors unless there is no other option.
            // await test.step('Test get Element by CSS Selector', async () => {
            //     page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            //     await expect(page.locator('input.input-css-example')).toBeVisible();
            // })

            // XPath is not recommended to be used in automation testing, as it is less robust and more likely to change.
            // It is better to use other locators that are more robust and less likely to change. Avoid using XPath unless there is no other option.
            // NEVER use absolute XPath, always use a relative XPath. The difference is that absolute XPath starts from the root of the document, 
            // while relative XPath starts from the current node. Example of absolute XPath: /html/body/div[1]/input , relative XPath: //input[@class='input-xpath-example']
            // await test.step('Test get Element by XPath', async () => {
            //     page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            //     await expect(page.locator('//input[@class="input-xpath-example"]')).toBeVisible();
            // })

            /*
                Selectors Summary:
                    - id => page.locator('#id-example')
                    - class => page.locator('.class-example')
                    - attribute => page.locator('[attribute="value"]')
                    - multiple attributes => page.locator('[attribute1="value1"][attribute2="value2"]')
                    - combination => page.locator('tag.class#id[attribute="value"]')
                    - nth-child => page.locator('parent-selector > child-selector:nth-child(n)')
                    - contains text => page.locator('selector:has-text("text")')
                    - starts with text => page.locator('selector:has-text("^text")')
                    - ends with text => page.locator('selector:has-text("text$")')
            */



        })
    });
})();