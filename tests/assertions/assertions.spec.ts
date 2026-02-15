import { Browser, expect, Page, test } from 'playwright/test'

(async => {
    let browser: Browser
    let page: Page

    test.describe('Test assertions on automatic sandbox', () => {
        test('Select on a radio button and click a checkbox', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Select on a radio button and click a checkbox', async () => {
                await page.getByRole('checkbox', { name: 'Hamburguesa 🍔' }).check();
                await expect(page.getByLabel('Hamburguesa 🍔')).toBeChecked();

                await page.getByRole('checkbox', { name: 'Hamburguesa 🍔' }).uncheck();
                await expect(page.getByLabel('Hamburguesa 🍔'), 'Expecting Hamburguesa 🍔 checkbox NOT to be checked').not.toBeChecked();
            })
        })

        test('Test a text to appear after a button is clicked', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Button can be clicked and text is visible', async () => {
                let button = page.getByRole('button', { name: 'Hacé click para generar un ID' })
                button.click({ force: true })
                await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
                await expect(page.getByText('OMG, aparezco después de 3')).toBeVisible();
            })
        })

        test('Validate a text fiel to be editable', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Validate that the text field is editable', async () => {
                await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'The text field is not editable').toBeEditable();

                let text = 'texto corrongo @@@@'
                await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill(text)
                await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'The text field is not editable').toHaveValue(text);

            })
        })

        test('Check select on a radio button', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Select an option on a radio button and execute the assertion', async () => {
                await page.getByRole('radio', { name: 'No' }).check();
                await expect(page.getByRole('radio', { name: 'No' }), 'The radio button must be checked No').toBeChecked();
            })
        })

        test('Select an option from a dropdown', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Validate select has the required options', async () => {
                const sports = ['Fútbol', 'Tennis', 'Basketball'];
                for(let option of sports) {
                    const element = await page.$('select#formBasicSelect > option:is(:test("${option}"))')

                    if (element) {
                        console.log('Option on the list')
                    } else {
                        console.log('Option not in the list')
                    }
                }
            })
        })


    })
})
    ();