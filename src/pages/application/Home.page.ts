 import { test, expect,Page } from '@playwright/test';
import BasePage from '../generic/base.page';
import {chromium} from 'playwright';
 
 export default class Homepage extends BasePage{

 async openURL(url : string ){
      const browser = await chromium.launch({ headless: false }); // headless: false opens the browser visibly
   const context = await browser.newContext(); // Create a new browser context
   const page = await context.newPage(); // Open a new page
  await  this.page.goto("https://www.google.com/");
 //  await   this.page.locator("").click();
    }
 }

