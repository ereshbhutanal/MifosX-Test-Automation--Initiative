$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\LoanMIFOS.feature");
formatter.feature({
  "id": "loanmifos",
  "description": "",
  "name": "LoanMIFOS",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3046850048,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1990528,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 14227499392,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 137140496,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;2",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16100640048,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 137505680592,
  "status": "failed",
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.id: interestType\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:259)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat com.mifos.pages.MifosWebPage.waitForElementToBeVisible(MifosWebPage.java:210)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:699)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:748)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:761)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1532)\r\n\tat com.mifos.pages.FrontPage.createLoanProductExcelsheet(FrontPage.java:345)\r\n\tat com.mifos.pages.FrontPage.productLoanExcelSheet(FrontPage.java:237)\r\n\tat com.mifos.steps.LoanProductSteps.I_entered_the_values_into_product_loan_using(LoanProductSteps.java:22)\r\n\tat ✽.And I entered the values into product loan using(src\\test\\resources\\features\\LoanMIFOS.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.00 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 0c6b85a027d23fd600dc27004e590832\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir1584_2192}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:523)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.mifos.pages.MifosWebPage.waitForElementToBeVisible(MifosWebPage.java:210)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:699)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:748)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:761)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1532)\r\n\tat com.mifos.pages.FrontPage.createLoanProductExcelsheet(FrontPage.java:345)\r\n\tat com.mifos.pages.FrontPage.productLoanExcelSheet(FrontPage.java:237)\r\n\tat com.mifos.steps.LoanProductSteps.I_entered_the_values_into_product_loan_using(LoanProductSteps.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1671621312,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 26831456,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13405691216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 117337633,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;3",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16700589775,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 80889500272,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7295720272,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2006784656,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1729713,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12265426240,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122372656,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;4",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16364177840,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76905061359,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7358302992,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1733159376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9923344,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13221394352,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123312768,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;5",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16484783296,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 80842705232,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7406120737,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1589661312,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1438496,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12576077488,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124287201,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;6",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16503651423,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77311560223,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7262894207,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2112476352,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1519919,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12330998784,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 149199263,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;7",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16509337489,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81124004192,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7233111665,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1851688096,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9628431,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12226141456,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 121017856,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;8",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16437029008,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77639617760,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7327036927,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1651803824,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1784720,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12648706000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 129331535,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;9",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16210398496,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81108249104,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7263821887,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1706023647,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9639424,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12801151201,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122864672,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;10",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16342080416,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76857975216,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7233362223,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1915609280,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 2382913,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11983459984,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 133509409,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;11",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16409206047,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81374113361,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7248967088,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1782849584,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1326864,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12556645105,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 140390527,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;12",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16543029728,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77280193888,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7530329008,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2011817344,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9595169,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12423230784,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 131920576,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;13",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16379645424,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 82873950192,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7249003680,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1928285168,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1304464,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12244724049,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 135480673,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;14",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16907213984,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76202119632,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7295840352,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1436580352,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9589680,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12476913568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 120764672,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;15",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 35,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16485717744,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 79467851920,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7280210544,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1495917184,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 3091776,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12449452801,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124319953,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;16",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 36,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16574998351,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 79423182656,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217880896,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1860490049,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9868640,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12510589375,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124873408,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;17",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 37,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePaymentt-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePaymentt-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16628851712,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81780289119,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217826191,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1971241200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1319968,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12247062081,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 120778735,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;18",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 38,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16547461217,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 86233386417,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217750000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2031845920,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1257217,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12083021904,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 153474480,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;19",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16397157169,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81577124113,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217852351,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1490155120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9497632,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12711119984,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 127410080,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;20",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16407473121,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77405338831,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7311522705,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1844538449,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1796239,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12007013008,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132298384,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;21",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16379694000,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81608428288,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7467882512,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1442120065,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1225424,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12476602143,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 133307200,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;22",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 42,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16488040945,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 75373961615,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7264645265,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2058986865,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1299152,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12046915729,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 128619520,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;23",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 43,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16492595008,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81436225295,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7249003201,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1402472736,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1216416,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12808156704,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 125605505,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;24",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 44,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16659522431,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76889677535,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7279445728,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1487717744,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1222800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13214902609,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123726543,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;25",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16427004831,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81999025248,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217678704,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1895250064,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9500592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12238479856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124686832,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;26",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16668479856,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76436558416,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7202121696,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1914008672,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1325473,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12283680848,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123143008,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;27",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 47,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16214899665,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 80897315552,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7280265536,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1439948592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1388593,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12898483921,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 128762992,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;28",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 48,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16430233408,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77858463872,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217635296,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1670836351,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1307360,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12795633648,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 129667152,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;29",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 49,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16764755984,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 82686577857,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7233458943,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2233207232,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1224304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11959538528,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 161176896,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;30",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 50,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16466548848,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 76577303216,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170788880,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2260131920,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1224945,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12012900656,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132357232,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;31",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16535857776,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 80311346752,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7436491760,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1674558672,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1243552,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12647707328,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 121758336,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;32",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16600821183,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 77545899775,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186585296,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1961512576,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1220753,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12202175425,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124469424,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;33",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 53,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16558869424,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 81342883488,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217685600,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1906719536,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1210800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12491892256,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 134972481,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;34",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16658041904,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 86124090416,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7202263087,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1468367663,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1205152,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13088504160,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122843439,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;35",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 55,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16631076097,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 91702087040,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7202184448,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1987215376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1272592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12307452512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 176469439,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;36",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 56,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16568998369,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 86311394224,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186528369,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1465812097,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1227489,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12711780080,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 120676096,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;37",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16441611583,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 90186558273,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7218066992,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1552766304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1207104,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12609504800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122945680,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;38",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 58,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16408033296,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 84045980528,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186564303,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1930882224,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9398704,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11789394975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122643312,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;39",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 59,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 17201234592,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 91264697536,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170950496,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1540310240,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1274913,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12874879215,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123647312,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;40",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 60,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16278981905,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 145239724368,
  "status": "failed",
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.id: interestType\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:259)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat com.mifos.pages.MifosWebPage.waitForElementToBeVisible(MifosWebPage.java:210)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:699)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:748)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:761)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1532)\r\n\tat com.mifos.pages.FrontPage.createLoanProductExcelsheet(FrontPage.java:345)\r\n\tat com.mifos.pages.FrontPage.productLoanExcelSheet(FrontPage.java:237)\r\n\tat com.mifos.steps.LoanProductSteps.I_entered_the_values_into_product_loan_using(LoanProductSteps.java:22)\r\n\tat ✽.And I entered the values into product loan using(src\\test\\resources\\features\\LoanMIFOS.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 85a987d7219d8486dc1342f7d4e67e4d\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir4708_10512}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:523)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.mifos.pages.MifosWebPage.waitForElementToBeVisible(MifosWebPage.java:210)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:699)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:748)\r\n\tat com.mifos.pages.MifosWebPage.getElement(MifosWebPage.java:761)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1532)\r\n\tat com.mifos.pages.FrontPage.createLoanProductExcelsheet(FrontPage.java:345)\r\n\tat com.mifos.pages.FrontPage.productLoanExcelSheet(FrontPage.java:237)\r\n\tat com.mifos.steps.LoanProductSteps.I_entered_the_values_into_product_loan_using(LoanProductSteps.java:22)\r\n\tat sun.reflect.GeneratedMethodAccessor46.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:268)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:45)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:40)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1498870784,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1209552,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12877367184,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 133625376,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;41",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 61,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16511473792,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 89546035952,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7264648817,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1441142160,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9480863,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12594180336,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 129019599,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;42",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 62,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1061-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1061-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16567666976,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 86967905472,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7702104623,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1891169056,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1207585,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12003861568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 130601312,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;43",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 63,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1062-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1062-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16740858817,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 91420961792,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7202327392,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1835906959,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1264608,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12391244575,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 120181232,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;44",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1063-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1063-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16657643200,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 3200112,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 16704816,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1369184496,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1212465,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12998495376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132325424,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;45",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 65,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1064-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1064-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16458247696,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 92764487392,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7295924657,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1768827584,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1211247,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12611764576,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 163015312,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;46",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 66,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1109-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1109-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16630164513,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 86718052944,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7285401360,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1843383056,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1277824,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11702851856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 130175551,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;47",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 67,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1110-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1110-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16897730288,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 89874219872,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170809232,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2063923952,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1233840,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12452407840,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 157997904,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;48",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 68,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1111-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1111-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16463580768,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 87387235584,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7264772848,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1865832320,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 13957697,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12553469888,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 136216336,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan;;49",
  "tags": [
    {
      "name": "@LoanProduct",
      "line": 12
    }
  ],
  "description": "",
  "name": "Loan",
  "keyword": "Scenario Outline",
  "line": 69,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the product loan",
  "keyword": "Given ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "Productloannavigation.xlsx"
      ],
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I entered the values into product loan using",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1112-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "I should see product loan created successfully",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "1112-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Loanproduct.xlsx"
      ],
      "line": 19
    }
  ]
});
formatter.match({
  "location": "LoanProductSteps.I_setup_the_product_loan(String\u003e)"
});
formatter.result({
  "duration": 16391805472,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_entered_the_values_into_product_loan_using(String\u003e)"
});
formatter.result({
  "duration": 85592835920,
  "status": "passed"
});
formatter.match({
  "location": "LoanProductSteps.I_should_see_product_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139819664,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2364031648,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1264448,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12197188433,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 124106160,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-581-ms-ei-db-dl-rec-non-rni-ctpd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario1-Loan-581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
      "line": 72
    }
  ],
  "description": "",
  "name": "Loan-581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 73,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 74,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 75
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 76,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 77
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 78,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 79
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 80,
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 81
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 82,
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 83
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 84,
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 85
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 86,
  "rows": [
    {
      "cells": [
        "581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 87
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13667813536,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27842788321,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155436576,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32004651136,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:80)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3216390400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1193775,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11552663664,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 127560833,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-582-ms-ei-db-dl-rec-non-rni-ctpd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario2-Loan-582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
      "line": 89
    }
  ],
  "description": "",
  "name": "Loan-582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 90,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 91,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 92
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 93,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 94
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 95,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 96
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 97,
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 98
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 99,
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 100
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 101,
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 102
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 103,
  "rows": [
    {
      "cells": [
        "582-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 104
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13625611312,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 25983360112,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139898000,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 63780288609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6236459791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16736094369,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 40040481712,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2504498192,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9517744,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11550351056,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 119075392,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-583-ms-ei-db-dl-rec-non-rni-ctrfd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario3-Loan-583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
      "line": 106
    }
  ],
  "description": "",
  "name": "Loan-583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 107,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 108,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 109
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 110,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 111
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 112,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 113
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 114,
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 115
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 116,
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 117
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 118,
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 119
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 120,
  "rows": [
    {
      "cells": [
        "583-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 121
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13657748416,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26452037744,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155376912,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 62264740048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6015733889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 17032955616,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 39589272913,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2783897343,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1268416,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12162442256,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132097104,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-584-ms-ei-db-dl-rec-non-rni-ctrfd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario4-Loan-584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
      "line": 123
    }
  ],
  "description": "",
  "name": "Loan-584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 124,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 125,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 126
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 127,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 128
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 129,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 130
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 131,
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 132
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 133,
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 134
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 135,
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 136
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 137,
  "rows": [
    {
      "cells": [
        "584-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 138
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13555318640,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26077335216,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7163003425,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 62421007024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5982908512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16724825424,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 20510817360,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Tab Name:Repayment Schedule Row number:2 Column number:3 Expected result:15 January 2015 Actual result:\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1121)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:137)\r\n"
});
formatter.embedding("image/png", "embedded3.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2627281024,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1181776,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11825115568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 125558784,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-629-ms-ei-db-sar-rec-non-rni-ctpd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario5-Loan-629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
      "line": 140
    }
  ],
  "description": "",
  "name": "Loan-629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 141,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 142,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 143
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 144,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 145
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 146,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 147
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 148,
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 149
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 150,
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 151
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 152,
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 153
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 154,
  "rows": [
    {
      "cells": [
        "629-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 155
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13705510128,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27795956528,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155422384,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 64592836480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6078248272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16665944975,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 40901435680,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3973598191,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1519311,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11133372512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 128475376,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-630-ms-ei-db-sar-rec-non-rni-ctpd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario6-Loan-630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
      "line": 157
    }
  ],
  "description": "",
  "name": "Loan-630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 158,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 159,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 160
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 161,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 162
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 163,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 164
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 165,
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 166
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 167,
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 168
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 169,
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 170
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 171,
  "rows": [
    {
      "cells": [
        "630-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 172
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13585172928,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27733483360,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7171001760,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 65092942175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5960975104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16709894944,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 21757014848,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Tab Name:Repayment Schedule Row number:2 Column number:3 Expected result:15 January 2015 Actual result:\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1121)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:171)\r\n"
});
formatter.embedding("image/png", "embedded4.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2996607312,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9469152,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11538170577,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 131655568,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-631-ms-ei-db-sar-rec-non-rni-ctrfd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario7-Loan-631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
      "line": 174
    }
  ],
  "description": "",
  "name": "Loan-631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 175,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 176,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 177
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 178,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 179
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 180,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 181
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 182,
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 183
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 184,
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 185
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 186,
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 187
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 188,
  "rows": [
    {
      "cells": [
        "631-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 189
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13546509104,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27967913696,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155271344,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 64827346768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6038686256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 17074795072,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 40077940977,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2508303232,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1222528,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11670237329,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 133062641,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-632-ms-ei-db-sar-rec-non-rni-ctrfd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario8-Loan-632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
      "line": 191
    }
  ],
  "description": "",
  "name": "Loan-632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 192,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 193,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 194
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 195,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 196
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 197,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 198
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 199,
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 200
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 201,
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 202
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 203,
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 204
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 205,
  "rows": [
    {
      "cells": [
        "632-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 206
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13988703840,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26748947424,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155446768,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 63280431648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6077827265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16952528351,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 20592367392,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Tab Name:Repayment Schedule Row number:2 Column number:3 Expected result:15 January 2015 Actual result:\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1121)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:205)\r\n"
});
formatter.embedding("image/png", "embedded5.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2416786304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1265520,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12298630271,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 119859680,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-677-ms-epp-db-dl-rec-non-rni-ctpd-sar-md-tr-1-earlyrepaymentt",
  "tags": [
    {
      "name": "@scenario9-Loan-677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt",
      "line": 208
    }
  ],
  "description": "",
  "name": "Loan-677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt",
  "keyword": "Scenario",
  "line": 209,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 210,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 211
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 212,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 213
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 214,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 215
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 216,
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Newcreateloan.xlsx"
      ],
      "line": 217
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 218,
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Newcreateloan.xlsx"
      ],
      "line": 219
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 220,
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Newcreateloan.xlsx"
      ],
      "line": 221
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 222,
  "rows": [
    {
      "cells": [
        "677-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePaymentt-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 223
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13765542896,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26452277856,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7171062127,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 2924704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5186800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 15899872,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 14727503,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2861508576,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9717184,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11699737185,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 135814607,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-678-ms-epp-db-dl-rec-non-rni-ctpd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario10-Loan-678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
      "line": 225
    }
  ],
  "description": "",
  "name": "Loan-678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 226,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 227,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 228
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 229,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 230
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 231,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 232
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 233,
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 234
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 235,
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 236
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 237,
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 238
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 239,
  "rows": [
    {
      "cells": [
        "678-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 240
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13766154721,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27592736785,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7311626304,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 65139967328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5991386865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16907888192,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 49259748432,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: a0e7d021569cc8a8373b853ad2bc95d1\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir808_16537}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1073)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:239)\r\n"
});
formatter.embedding("image/png", "embedded6.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3120962831,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1226223,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11765970559,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132863840,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-679-ms-epp-db-dl-rec-non-rni-ctrfd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario11-Loan-679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
      "line": 242
    }
  ],
  "description": "",
  "name": "Loan-679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 243,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 244,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 245
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 246,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 247
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 248,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 249
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 250,
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 251
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 252,
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 253
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 254,
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 255
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 256,
  "rows": [
    {
      "cells": [
        "679-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 257
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13735632432,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 28014840032,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186649793,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 64545914272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5872128977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 17358226208,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 41220269376,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2355743520,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1228367,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11812649009,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 126085855,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-680-ms-epp-db-dl-rec-non-rni-ctrfd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario12-Loan-680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
      "line": 259
    }
  ],
  "description": "",
  "name": "Loan-680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 260,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 261,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 262
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 263,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 264
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 265,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 266
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 267,
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 268
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 269,
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 270
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 271,
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 272
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 273,
  "rows": [
    {
      "cells": [
        "680-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 274
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13808974032,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27090307359,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7171224368,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 64327105823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6014403775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16659391711,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 49660317359,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 233b63eae57a65d4338169b3799a7f41\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir3864_16311}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1073)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:273)\r\n"
});
formatter.embedding("image/png", "embedded7.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2885886929,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1193488,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11788781552,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 115359088,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-725-ms-epp-db-sar-rec-non-rni-ctpd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario13-Loan-725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
      "line": 276
    }
  ],
  "description": "",
  "name": "Loan-725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 277,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 278,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 279
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 280,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 281
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 282,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 283
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 284,
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 285
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 286,
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 287
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 288,
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 289
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 290,
  "rows": [
    {
      "cells": [
        "725-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 291
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13726936784,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26499228687,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139636448,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 62577284415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 6038307375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16821990959,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 40090200704,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2629213776,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1233472,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11956746993,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 125934816,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-726-ms-epp-db-sar-rec-non-rni-ctpd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario14-Loan-726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
      "line": 293
    }
  ],
  "description": "",
  "name": "Loan-726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 294,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 295,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 296
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 297,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 298
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 299,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 300
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 301,
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 302
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 303,
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 304
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 305,
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 306
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 307,
  "rows": [
    {
      "cells": [
        "726-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 308
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13830296703,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26999224176,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139745361,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 61905437487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5984045088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 17052607232,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 48392271168,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: bfb7def22e7fb41e8d4139ff36988fd0\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir3032_6321}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1073)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:307)\r\n"
});
formatter.embedding("image/png", "embedded8.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2338644336,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1245568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11799810320,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 122877232,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-727-ms-epp-db-sar-rec-non-rni-ctrfd-sar-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario15-Loan-727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
      "line": 310
    }
  ],
  "description": "",
  "name": "Loan-727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 311,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 312,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 313
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 314,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 315
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 316,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 317
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 318,
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 319
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 320,
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 321
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 322,
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 323
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 324,
  "rows": [
    {
      "cells": [
        "727-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 325
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13706639504,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26319787936,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139868672,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 65655586512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5728178513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 19784181743,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 52297543761,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1957586751,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1223216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 18233719216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 134447633,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-728-ms-epp-db-sar-rec-non-rni-ctrfd-dl-md-tr-1-earlyrepayment",
  "tags": [
    {
      "name": "@scenario16-Loan-728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
      "line": 327
    }
  ],
  "description": "",
  "name": "Loan-728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment",
  "keyword": "Scenario",
  "line": 328,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 329,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 330
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 331,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 332
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 333,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 334
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 335,
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 336
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 337,
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 338
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 339,
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Newcreateloan.xlsx"
      ],
      "line": 340
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 341,
  "rows": [
    {
      "cells": [
        "728-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-EarlyRePayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 342
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13585101536,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 24275505985,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7217850512,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 55671115727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 5562122256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "duration": 16228989152,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "duration": 47979084816,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: bb0552b3a8131a54be5b40ada7eafe03\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir4604_25941}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d43.0.2357.124, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:180)\r\n\tat com.mifos.pages.FrontPage.verifyRepaymentTabsdata(FrontPage.java:1073)\r\n\tat com.mifos.pages.FrontPage.createMakeRepayment(FrontPage.java:999)\r\n\tat com.mifos.steps.ClientSteps.I_make_repayment_and_verified_the_following_tabs(ClientSteps.java:53)\r\n\tat ✽.When I make repayment and verified the following tabs(src\\test\\resources\\features\\LoanMIFOS.feature:341)\r\n"
});
formatter.embedding("image/png", "embedded9.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2413972464,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1306079,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11431372575,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 120395761,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-197-ms-ei-db-dl-rec-non-rni-ctpd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario17-Loan-197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
      "line": 344
    }
  ],
  "description": "",
  "name": "Loan-197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 345,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 346,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 347
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 348,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 349
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 350,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 351
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 352,
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 353
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 354,
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 355
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 356,
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 357
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 358,
  "rows": [
    {
      "cells": [
        "197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 359
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13810497505,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 26926600704,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155587008,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31708250736,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 197-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:352)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3533079055,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1369904,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11835453664,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 134320064,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-198-ms-ei-db-dl-rec-non-rni-ctpd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario18-Loan-198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
      "line": 361
    }
  ],
  "description": "",
  "name": "Loan-198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 362,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 363,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 364
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 365,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 366
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 367,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 368
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 369,
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 370
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 371,
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 372
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 373,
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 374
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 375,
  "rows": [
    {
      "cells": [
        "198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 376
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13766903216,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27202222623,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7373894513,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31692587905,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 198-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:369)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2718739824,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1264928,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12072052176,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123843232,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-199-ms-ei-db-dl-rec-non-rni-ctrfd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario19-Loan-199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
      "line": 378
    }
  ],
  "description": "",
  "name": "Loan-199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 379,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 380,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 381
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 382,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 383
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 384,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 385
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 386,
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 387
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 388,
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 389
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 390,
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 391
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 392,
  "rows": [
    {
      "cells": [
        "199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 393
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14621959792,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27499229503,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155299985,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31988879009,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 199-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:386)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1527669120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1265041,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13450289856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 126896863,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-200-ms-ei-db-dl-rec-non-rni-ctrfd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario20-Loan-200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
      "line": 395
    }
  ],
  "description": "",
  "name": "Loan-200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 396,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 397,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 398
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 399,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 400
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 401,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 402
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 403,
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 404
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 405,
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 406
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 407,
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 408
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 409,
  "rows": [
    {
      "cells": [
        "200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 410
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14650166768,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30561686769,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7233481328,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32083016480,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 200-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:403)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1405341120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1199120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12687615168,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 121133457,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-245-ms-ei-db-sar-rec-non-rni-ctpd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario21-Loan-245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
      "line": 412
    }
  ],
  "description": "",
  "name": "Loan-245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 413,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 414,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 415
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 416,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 417
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 418,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 419
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 420,
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 421
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 422,
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 423
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 424,
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 425
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 426,
  "rows": [
    {
      "cells": [
        "245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 427
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14342891152,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30217919839,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7164020912,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 33496448976,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 245-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:420)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded14.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1799054400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1192928,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 17697699408,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 138151136,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-246-ms-ei-db-sar-rec-non-rni-ctpd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario22-Loan-246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
      "line": 429
    }
  ],
  "description": "",
  "name": "Loan-246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 430,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 431,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 432
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 433,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 434
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 435,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 436
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 437,
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 438
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 439,
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 440
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 441,
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 442
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 443,
  "rows": [
    {
      "cells": [
        "246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 444
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13568148832,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 22842829169,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155427489,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32701275056,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 246-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:437)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 195108496,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1191376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 100328413632,
  "status": "failed",
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 100 seconds waiting for visibility of element located by By.id: uid\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:259)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat com.mifos.pages.MifosWebPage.waitForElementToBeVisible(MifosWebPage.java:210)\r\n\tat com.mifos.pages.MifosWebPage.submitValue(MifosWebPage.java:657)\r\n\tat com.mifos.pages.MifosWebPage.submitValues(MifosWebPage.java:633)\r\n\tat com.mifos.pages.MifosWebPage.submitIDValues(MifosWebPage.java:447)\r\n\tat com.mifos.pages.FrontPage.submitLogin_excel(FrontPage.java:117)\r\n\tat com.mifos.pages.FrontPage.excelsheet(FrontPage.java:94)\r\n\tat com.mifos.pages.FrontPage.loginExcelsheet(FrontPage.java:56)\r\n\tat com.mifos.steps.LoginSteps.I_login_into_mifos_site_using_excel_sheet(LoginSteps.java:36)\r\n\tat ✽.When I login into mifos site using excel sheet(src\\test\\resources\\features\\LoanMIFOS.feature:6)\r\n"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "loanmifos;loan-247-ms-ei-db-sar-rec-non-rni-ctrfd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario23-Loan-247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
      "line": 446
    }
  ],
  "description": "",
  "name": "Loan-247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 447,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 448,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 449
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 450,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 451
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 452,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 453
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 454,
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 455
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 456,
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 457
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 458,
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 459
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 460,
  "rows": [
    {
      "cells": [
        "247-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 461
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded15.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1916788304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1284048,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12255788976,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123085727,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-248-ms-ei-db-sar-rec-non-rni-ctrfd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario24-Loan-248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
      "line": 463
    }
  ],
  "description": "",
  "name": "Loan-248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 464,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 465,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 466
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 467,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 468
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 469,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 470
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 471,
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 472
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 473,
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 474
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 475,
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 476
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 477,
  "rows": [
    {
      "cells": [
        "248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 478
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14330855920,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30702241872,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155415393,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32223773120,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 248-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:471)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded16.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1988245040,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1517072,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12185877232,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132147920,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-293-ms-epp-db-dl-rec-non-rni-ctpd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario25-Loan-293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
      "line": 480
    }
  ],
  "description": "",
  "name": "Loan-293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 481,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 482,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 483
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 484,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 485
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 486,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 487
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 488,
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 489
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 490,
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 491
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 492,
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 493
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 494,
  "rows": [
    {
      "cells": [
        "293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 495
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14749353808,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30389648208,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155519952,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32067390432,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 293-MS-EPP-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:488)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded17.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1625015872,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1377840,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12209316000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 188911616,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-294-ms-epp-db-dl-rec-non-rni-ctpd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario26-Loan-294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
      "line": 497
    }
  ],
  "description": "",
  "name": "Loan-294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 498,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 499,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 500
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 501,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 502
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 503,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 504
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 505,
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 506
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 507,
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 508
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 509,
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 510
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 511,
  "rows": [
    {
      "cells": [
        "294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 512
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14277114432,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 25482132016,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170960256,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31927610560,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 294-MS-EPP-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:505)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded18.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1676115216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1196929,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12778933375,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 134424816,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-295-ms-epp-db-dl-rec-non-rni-ctrfd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario27-Loan-295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
      "line": 514
    }
  ],
  "description": "",
  "name": "Loan-295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 515,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 516,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 517
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 518,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 519
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 520,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 521
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 522,
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 523
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 524,
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 525
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 526,
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 527
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 528,
  "rows": [
    {
      "cells": [
        "295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 529
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14423929856,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 29842782273,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155423040,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32364347233,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 295-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:522)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded19.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1585208895,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 11244672,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12423079216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 159289487,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-296-ms-epp-db-dl-rec-non-rni-ctrfd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario28-Loan-296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
      "line": 531
    }
  ],
  "description": "",
  "name": "Loan-296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 532,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 533,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 534
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 535,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 536
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 537,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 538
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 539,
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 540
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 541,
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 542
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 543,
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 544
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 545,
  "rows": [
    {
      "cells": [
        "296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 546
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14374529840,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30092900863,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7139864831,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32160552560,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 296-MS-EPP-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:539)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded20.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1848460815,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1228304,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12717111489,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 156373137,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-341-ms-epp-db-sar-rec-non-rni-ctpd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario29-Loan-341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
      "line": 548
    }
  ],
  "description": "",
  "name": "Loan-341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 549,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 550,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 551
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 552,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 553
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 554,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 555
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 556,
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 557
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 558,
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 559
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 560,
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 561
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 562,
  "rows": [
    {
      "cells": [
        "341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 563
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14748550592,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30702309344,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170984161,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32832943200,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 341-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:556)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded21.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3220697152,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1223216,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 10807463184,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 111244816,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-342-ms-epp-db-sar-rec-non-rni-ctpd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario30-Loan-342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
      "line": 565
    }
  ],
  "description": "",
  "name": "Loan-342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 566,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 567,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 568
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 569,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 570
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 571,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 572
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 573,
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 574
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 575,
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 576
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 577,
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 578
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 579,
  "rows": [
    {
      "cells": [
        "342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 580
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13904421585,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27521686512,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155493233,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31989071039,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 342-MS-EPP-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:573)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded22.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 3217715185,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9687648,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 11167020176,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 134723584,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-343-ms-epp-db-sar-rec-non-rni-ctrfd-sar-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario31-Loan-343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
      "line": 582
    }
  ],
  "description": "",
  "name": "Loan-343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 583,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 584,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 585
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 586,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 587
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 588,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 589
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 590,
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 591
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 592,
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 593
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 594,
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 595
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 596,
  "rows": [
    {
      "cells": [
        "343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 597
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 13796180401,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 27999138401,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7171519696,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31708044304,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 343-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:590)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded23.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1868381728,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1237856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13161631041,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 129173567,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-344-ms-epp-db-sar-rec-non-rni-ctrfd-dl-md-tr-1-ontime",
  "tags": [
    {
      "name": "@scenario32-Loan-344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
      "line": 599
    }
  ],
  "description": "",
  "name": "Loan-344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME",
  "keyword": "Scenario",
  "line": 600,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 601,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 602
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 603,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 604
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 605,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 606
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 607,
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 608
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 609,
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 610
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 611,
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Newcreateloan.xlsx"
      ],
      "line": 612
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 613,
  "rows": [
    {
      "cells": [
        "344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 614
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14607792672,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30499240880,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7249093199,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32114473136,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 344-MS-EPP-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-ONTIME\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:607)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded24.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1841702063,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1194673,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12690345952,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 131641295,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-965-ms-ei-db-dl-rec-non-rni-ctpd-sar-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario33-Loan-965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment",
      "line": 616
    }
  ],
  "description": "",
  "name": "Loan-965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 617,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 618,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 619
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 620,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 621
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 622,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 623
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 624,
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 625
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 626,
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 627
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 628,
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 629
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 630,
  "rows": [
    {
      "cells": [
        "965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 631
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14489146591,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 31046241376,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155337457,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32645227424,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 965-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:624)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded25.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2045453952,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1269584,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12961020191,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 132632288,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-|966-ms-ei-db-dl-rec-non-rni-ctpd-dl-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario34-Loan-|966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment",
      "line": 633
    }
  ],
  "description": "",
  "name": "Loan-|966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 634,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 635,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 636
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 637,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 638
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 639,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 640
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 641,
  "rows": [
    {
      "cells": [
        "",
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 642
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 643,
  "rows": [
    {
      "cells": [
        "",
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 644
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 645,
  "rows": [
    {
      "cells": [
        "",
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 646
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 647,
  "rows": [
    {
      "cells": [
        "",
        "966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 648
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14465706304,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 29025509248,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155434640,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32004809679,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 966-MS-EI-DB-DL-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:641)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded26.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1487664496,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 9745408,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12758159327,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 130238528,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-967-ms-ei-db-dl-rec-non-rni-ctrfd-sar-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario35-Loan-967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment",
      "line": 650
    }
  ],
  "description": "",
  "name": "Loan-967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 651,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 652,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 653
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 654,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 655
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 656,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 657
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 658,
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 659
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 660,
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 661
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 662,
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 663
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 664,
  "rows": [
    {
      "cells": [
        "967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 665
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14425040240,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30543632353,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7264901201,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32536005264,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 967-MS-EI-DB-DL-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:658)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded27.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1537725456,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1261312,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13216478000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 155178128,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-968-ms-ei-db-dl-rec-non-rni-ctrfd-dl-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario36-Loan-968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment",
      "line": 667
    }
  ],
  "description": "",
  "name": "Loan-968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 668,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 669,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 670
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 671,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 672
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 673,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 674
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 675,
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 676
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 677,
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 678
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 679,
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 680
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 681,
  "rows": [
    {
      "cells": [
        "968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 682
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14049189041,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 31499696448,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7170510704,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32270555344,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 968-MS-EI-DB-DL-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:675)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded28.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 2426114384,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1323072,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12456412800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 627747744,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-1013-ms-ei-db-sar-rec-non-rni-ctpd-sar-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario37-Loan-1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment",
      "line": 684
    }
  ],
  "description": "",
  "name": "Loan-1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 685,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 686,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 687
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 688,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 689
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 690,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 691
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 692,
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 693
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 694,
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 695
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 696,
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 697
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 698,
  "rows": [
    {
      "cells": [
        "1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 699
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14508427329,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 29780693872,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7155286097,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 31880058912,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 1013-MS-EI-DB-SAR-REC-NON-RNI-CTPD-SAR-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:692)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded29.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 7920799873,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1355489,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 13290766880,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 126846464,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-1014-ms-ei-db-sar-rec-non-rni-ctpd-dl-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario38-Loan-1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment",
      "line": 701
    }
  ],
  "description": "",
  "name": "Loan-1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 702,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 703,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 704
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 705,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 706
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 707,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 708
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 709,
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 710
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 711,
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 712
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 713,
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 714
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 715,
  "rows": [
    {
      "cells": [
        "1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 716
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14587951408,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 31752662160,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7370839696,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32535712161,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 1014-MS-EI-DB-SAR-REC-NON-RNI-CTPD-DL-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:709)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded30.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1623654608,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1260608,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12608035776,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 123397168,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-1015-ms-ei-db-sar-rec-non-rni-ctrfd-sar-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario39-Loan-1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment",
      "line": 718
    }
  ],
  "description": "",
  "name": "Loan-1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 719,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 720,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 721
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 722,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 723
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 724,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 725
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 726,
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 727
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 728,
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 729
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 730,
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 731
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 732,
  "rows": [
    {
      "cells": [
        "1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 733
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14734952992,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 30264850720,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186801985,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32182488064,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 1015-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-SAR-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:726)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Summary",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Repayment Schedule",
      "offset": 16
    }
  ],
  "location": "ClientSteps.I_verified_the_details_successfully(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClientSteps.I_make_repayment_and_verified_the_following_tabs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded31.png");
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I navigate to mifos",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I use login folder",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I login into mifos site using excel sheet",
  "keyword": "When ",
  "line": 6,
  "rows": [
    {
      "cells": [
        "Login.xlsx"
      ],
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I should see logged in successfully",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_mifos()"
});
formatter.result({
  "duration": 1538157008,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_use_login_folder()"
});
formatter.result({
  "duration": 1254144,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_login_into_mifos_site_using_excel_sheet(String\u003e)"
});
formatter.result({
  "duration": 12713403680,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_should_see_login_successfully()"
});
formatter.result({
  "duration": 152140064,
  "status": "passed"
});
formatter.scenario({
  "id": "loanmifos;loan-1016-ms-ei-db-sar-rec-non-rni-ctrfd-dl-md-tr-1-laterepayment",
  "tags": [
    {
      "name": "@scenario40-Loan-1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment",
      "line": 735
    }
  ],
  "description": "",
  "name": "Loan-1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment",
  "keyword": "Scenario",
  "line": 736,
  "type": "scenario"
});
formatter.step({
  "name": "I setup the clients",
  "keyword": "Given ",
  "line": 737,
  "rows": [
    {
      "cells": [
        "Clientnavigation.xlsx"
      ],
      "line": 738
    }
  ]
});
formatter.step({
  "name": "I entered the values into client form using",
  "keyword": "When ",
  "line": 739,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 740
    }
  ]
});
formatter.step({
  "name": "I should see client created successfully",
  "keyword": "Then ",
  "line": 741,
  "rows": [
    {
      "cells": [
        "Createclient.xlsx"
      ],
      "line": 742
    }
  ]
});
formatter.step({
  "name": "I set up the new create loan",
  "keyword": "When ",
  "line": 743,
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 744
    }
  ]
});
formatter.step({
  "name": "I verified the \"Summary\" details successfully",
  "keyword": "Then ",
  "line": 745,
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 746
    }
  ]
});
formatter.step({
  "name": "I verified the \"Repayment Schedule\" details successfully",
  "keyword": "And ",
  "line": 747,
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Newcreateloan.xlsx"
      ],
      "line": 748
    }
  ]
});
formatter.step({
  "name": "I make repayment and verified the following tabs",
  "keyword": "When ",
  "line": 749,
  "rows": [
    {
      "cells": [
        "1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment-Makerepayment1.xlsx",
        "Repayment Schedule"
      ],
      "line": 750
    }
  ]
});
formatter.match({
  "location": "ClientSteps.I_setup_the_clients(String\u003e)"
});
formatter.result({
  "duration": 14358552944,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_entered_the_values_into_client_form_using(String\u003e)"
});
formatter.result({
  "duration": 31061571536,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_should_see_client_loan_created_successfully(String\u003e)"
});
formatter.result({
  "duration": 7186718144,
  "status": "passed"
});
formatter.match({
  "location": "ClientSteps.I_set_up_the_activation_and_new_create_loan(String\u003e)"
});
formatter.result({
  "duration": 32428433136,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: 1016-MS-EI-DB-SAR-REC-NON-RNI-CTRFD-DL-MD-TR-1-LateRepayment\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.29.1\u0027, revision: \u0027dfb1306b85be4934d23c123122e06e602a15e446\u0027, time: \u00272013-01-22 12:58:05\u0027\nSystem info: os.name: \u0027Windows Server 2012\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.mifos.pages.MifosWebPage.selectDropDownvalues(MifosWebPage.java:1537)\r\n\tat com.mifos.pages.FrontPage.createNewLoanClientExcelsheet(FrontPage.java:802)\r\n\tat com.mifos.pages.FrontPage.createNewLoanExcelSheet(FrontPage.java:749)\r\n\tat com.mifos.steps.ClientSteps.I_set_up_the_activation_and_new_create_loan(ClientSteps.java:35)\r\n\tat ✽.When I set up the new create loan(src\\test\\resources\\features\\LoanMIFOS.feature:743)\r\n"
});
formatte