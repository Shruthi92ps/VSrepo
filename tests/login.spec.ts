import { expect, test } from '@playwright/test';
import { OrangeHrmPage } from './pages/orangehrm.page';

test('logs in and opens the Claim page through search', async ({ page }) => {
  const orangeHrmPage = new OrangeHrmPage(page);
  await orangeHrmPage.login('ADMIN', 'admin@123');

  await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);
  await expect(orangeHrmPage.dashboardHeading).toBeVisible();

  await orangeHrmPage.searchAndOpenClaim();

  await expect(page).toHaveURL(/\/claim\//);
  await expect(orangeHrmPage.claimHeading).toBeVisible();
});