import { test, expect,Page } from '@playwright/test';
import { chromium } from 'playwright';

 const browser = await chromium.launch({ headless: false }); // headless: false opens the browser visibly
  const context = await browser.newContext(); // Create a new browser context
  const page = await context.newPage(); // Open a new page

  // 2. Navigate to URL
  page.goto("https://www.google.com/");
  page.locator("").click();