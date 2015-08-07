/**
 *
 */
package com.mifos.steps;

import java.util.List;

import com.mifos.pages.FrontPage;
import com.mifos.pages.MifosWebPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


/**
 * @author salma
 * 
 */
public class LoginSteps {

	final public FrontPage varFrontPage = new FrontPage();
	public String excelSheetPath = null;
	
	@Given("^I navigate to mifos$")
	public void I_navigate_to_mifos() throws Throwable {
		MifosWebPage.navigateToUrl(MifosWebPage.BASE_URL
				+ MifosWebPage.getResource("home"));
	}

	
	@Given("^I login into mifos site using \"([^\"]*)\" excel sheet$")
	public void I_login_into_mifos_site_using_excel_sheet(String sheetName,
			List<String> excelSheet) throws Throwable {
		excelSheetPath = varFrontPage.getLoginExcelSheetPath();
		String excelSheetName = excelSheet.get(0).toString();
		varFrontPage.setupLogin(excelSheetPath, excelSheetName, sheetName);
		
	}
	/** VERIFICATION **/

	@Then("^I should see logged in successfully$")
	public void I_should_see_login_successfully() throws Throwable {
		varFrontPage.verifyPartialSuccessMessage("frontend.logged.successfully",
				"Welcome,", "css");
	}
}