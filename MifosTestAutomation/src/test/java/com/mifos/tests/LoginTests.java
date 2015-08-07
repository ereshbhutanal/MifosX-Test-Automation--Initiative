package com.mifos.tests;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@Cucumber.Options(format = { "pretty", "html:target/cucumber-html-report",
		"json-pretty:target/cucumber-json-report.json" },
 features = { "src/test/resources/features/Client.feature" },
// tags={"@scenario1-Loan-389-RBI-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment"},
		 glue = { "com.mifos.steps" })

public class LoginTests {
	
}