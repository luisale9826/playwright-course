import { Browser, Page, test } from 'playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;

    test.describe('Action in the automation sandbox', () => {

        test('Click in Buton ID Dinamic', async ({ page }) => {

            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Click in the button with ID dynamic', async () => {
                const buttonID = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento' })
                await buttonID.click({ force: true});
                await buttonID.dblclick(); // Double click
                await buttonID.click({ button: 'right' }); // Right click
                await buttonID.click({ modifiers: [ 'Shift' ] }); // Click with Alt key
                await buttonID.hover(); // Hover over the button 
            })
        });

        test('Fill a text field', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Fill a text field', async () => {
                const textField = page.getByPlaceholder('Ingresá Texto');
                await textField.fill('Hello World');
                await textField.press('Enter');
            })
        })

        test('Select on a radio button and click a checkbox', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Select on a radio button and click a checkbox', async () => {
                await page.getByRole('checkbox', { name: 'Hamburguesa 🍔' }).check();
                await page.getByRole('checkbox', { name: 'Hamburguesa 🍔' }).uncheck();
                await page.getByRole('radio', { name: 'No' }).check();
            })
        })

        test('Select an option from a dropdown', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Select an option from a dropdown', async () => {
                const dropdown = page.getByLabel('Dropdown');
                await dropdown.selectOption('Tennis');
            })

            await test.step('Select dropdown with click', async () => {
                await page.getByRole('button', { name: 'Día de la semana' }).click();
                await page.getByRole('link', { name: 'Sábado' }).click();
            })
        })

        test('Upload a file', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://demoqa.com/upload-download')
            })

            await test.step('Upload a file', async () => {
                const filePath = 'C:\\Users\\luisa\\Desktop\\Playwright\\tests\\test-upload.txt';
                await page.setInputFiles('input#uploadFile', filePath);
            })
        })

        test('Hadle drag and drop', async ({ page }) => {
            await test.step('Go to the sandbox page', async () => {
                await page.goto('https://demoqa.com/droppable')
            })

            await test.step('Handle drag and drop', async () => {
                const source = page.getByText('Drag me', { exact: true });
                const target = page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
                await source.dragTo(target);
            })
        })
    })
}
)();