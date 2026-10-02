import { type Locator, type Page } from '@playwright/test';

export class OrangeHrmPage {
  readonly claimHeading: Locator;
  readonly dashboardHeading: Locator;
  private readonly page: Page;
  private readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.claimHeading = page.getByRole('heading', { name: 'Claim', exact: true });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.searchInput = page.getByRole('textbox', { name: 'Search' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async searchAndOpenClaim(): Promise<void> {
    await this.searchInput.fill('Claim');
    await this.searchInput.press('Enter');
    await this.page.getByRole('link', { name: 'Claim', exact: true }).click();
  }
}