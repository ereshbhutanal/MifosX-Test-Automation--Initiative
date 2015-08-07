package com.mifos.steps;

import java.util.List;

import com.mifos.pages.FrontPage;
import com.mifos.pages.MifosWebPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ClientSteps {

	final public FrontPage varFrontPage = new FrontPage();
	public String ExcelSheetPath = varFrontPage.getClientExcelSheetPath();

	@Given("^I setup the clients$")
	public void I_setup_the_clients() throws Throwable {
		
		//ExcelSheetPath = varFrontPage.getClientExcelSheetPath();
		varFrontPage.clientNavigation();
	}

	@When("^I entered the values into client from \"([^\"]*)\" sheet$")
	public void I_entered_the_values_into_client_from_sheet_Verified(String sheetName,
			List<String> excelSheet) throws Throwable {
		String excelSheetName = excelSheet.get(0).toString();
		varFrontPage.setupClient(ExcelSheetPath, excelSheetName, sheetName);
	}
	
	@Then("^I should see client created successfully from \"([^\"]*)\" sheet$")
	public void I_should_see_client_created_successfully_from_sheet(String sheetName,
 List<String> excelSheet) throws Throwable {
		String excelSheetName = excelSheet.get(0).toString();
		varFrontPage.verifyClient(ExcelSheetPath, excelSheetName, sheetName);
	}

	@When("^I set up the new create loan from \"([^\"]*)\" sheet$")
	public void I_set_up_the_new_create_loan_from_sheet(String sheetName,
			List<String> excelSheet) throws Throwable {
		String excelSheetName = excelSheet.get(0).toString();
		varFrontPage.setupNewLoan(ExcelSheetPath, excelSheetName,
				sheetName);
	}

	@Then("^I verified the \"([^\"]*)\" details successfully$")
	public void I_verified_the_details_successfully(String sheetName,
			List<String> excelSheet) throws Throwable {
		String excelSheetName = excelSheet.get(0).toString();
		varFrontPage.verifyLoanTabData(ExcelSheetPath, excelSheetName, sheetName);
	}
	
	/*@When("^I make repayment and verified the following tabs$")
	public void I_make_repayment_and_verified_the_following_tabs(DataTable excel)
			throws Throwable {
		List<List<String>> excelSheet = excel.raw();
		varFrontPage.createMakeRepayment(ExcelSheetPath, excelSheet);
	}*/
	
	@Then("^I make repayment and verified the following tabs$")
	public void I_make_repayment_and_verified_the_following_tabs(List<List<String>> excel)
			throws Throwable {
		
		for (List<String> excelSheet : excel) {
			varFrontPage.makeAndVerifyRepayment(ExcelSheetPath, excelSheet);
		/*	for (int i = 1; i < excelSheet.size(); i++) {
				//varFrontPage.createMakeRepayment(ExcelSheetPath, option.get(0),option.get(i));	
			}*/
		}
	}

	@Then("^I Navigate to Accounting$")
	public void I_Navigate_to_Accounting() throws Throwable {
		MifosWebPage.navigateToUrl(MifosWebPage.BASE_URL
				+ MifosWebPage.getResource("AccountingSearchJournalEntries"));
	}

	@Then("^I search with transaction id & verified the accounting entries$")
	public void I_search_with_transaction_id_verified_the_accounting_entries(
			List<List<String>> excelSheet) throws Throwable {
		
		for (List<String> option : excelSheet) {
			for (int i = 1; i < option.size(); i++) {
				varFrontPage.searchWithTransactinID(ExcelSheetPath, option.get(0),option.get(i));			
			}
		}
		
	}

	@Then("^I navigate to scheduler job$")
	public void I_navigate_to_scheduler_job() throws Throwable {
		varFrontPage.selectSchedularJob();
	}

	@Then("^I went back to the client$")
	public void I_went_back_to_the_client() throws Throwable {
		varFrontPage.clickBackToClient();
		Thread.sleep(4000);
	}



	@Then("^I search with \"([^\"])\" on mifos$")
	public void I_search_with_on_mifos(String user) throws Throwable {
		varFrontPage.searchUser(user);
	}

	@Then("^I undo the disbursal$")
	public void I_undo_the_disbursal() throws Throwable {
		varFrontPage.undoDisbursal();
	}

	@Then("^I make reverse of transaction$")
	public void I_make_reverse_of_transaction() throws Throwable {
		varFrontPage.reverseTransaction();
	}

/*	@When("^I set up the new savings$")
	public void I_set_up_the_new_savings(String sheetName,
			List<String> excelSheetName) throws Throwable {
		varFrontPage.createNewLoan(ExcelSheetPath, excelSheetName,
				sheetName);
	}*/

/*	@When("^I make prepayloan and verified the following tabs$")
	public void I_make_prepay_and_verified_the_following_tabs(DataTable excel)
			throws Throwable {
		varFrontPage.createMakeRepayment(ExcelSheetPath, excel);
	}*/

}