const { test, expect } = require('@playwright/test');

test.describe('Pokedex', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5000');
    });

    test('front page can be opened', async ({ page }) => {
        await expect(page.getByText('ivysaur')).toBeVisible();
        await expect(
            page.getByText(
                'Pokémon and Pokémon character names are trademarks of Nintendo.'
            )
        ).toBeVisible();
    });

    test('can navigate to pokemon page', async ({ page }) => {
        await page.getByText('ivysaur').click();
        await expect(page.getByText('chlorophyll')).toBeVisible();
    });
});
