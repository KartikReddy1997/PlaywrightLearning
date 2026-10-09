import { test, expect,Page } from '@playwright/test';
import { chromium } from 'playwright';
import { Given,When,Then } from '@cucumber/cucumber';

let page : Page;

Given('user launches the url and navigates to login page', async function () {
  console.log('Launching URL...');
    // 1. Launch browser

});

Then('user enters username and password', async function () {
  console.log('Entering credentials...');
});

Then('user should be navigated to Home Page', async function () {
  console.log('Navigated to Home Page.');
});
