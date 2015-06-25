package com.mifos.tests;

/**
 * @author salma
 *
 */

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = { "pretty", "html:target/cucumber-html-report",
		"json-pretty:target/cucumber-json-report.json" },
	//	features = {"src/test/resources/features"},
	//	features = { "src/test/resources/features/LoanRBI.feature" },
		features = { "src/test/resources/features/LoanMIFOS.feature" },
	//	tags={"@scenario1-Loan-581-MS-EI-DB-DL-REC-NON-RNI-CTPD-SAR-MD-TR-1-EarlyRePayment"},
		glue = { "com.mifos.steps" })

public class LoanTest {

}
