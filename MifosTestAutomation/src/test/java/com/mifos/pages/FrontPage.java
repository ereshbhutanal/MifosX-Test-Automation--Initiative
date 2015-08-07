/**
 *
 */
package com.mifos.pages;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeSet;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.ibm.icu.text.NumberFormat;
import com.mifos.testing.framework.webdriver.LazyWebElement;

import cucumber.api.DataTable;

//import org.jopendocument.dom.spreadsheet.MutableCell;
//import org.jopendocument.dom.spreadsheet.Sheet;
//import org.jopendocument.dom.spreadsheet.SpreadSheet;
/**
 * @author salma
 * 
 */
public class FrontPage extends MifosWebPage {

	Set<String> setAccuralTransactionID = new TreeSet<String>();
	Set<String> setAccuralTransactionType = new TreeSet<String>();
	static String value = "";
	public String rowval;
	public static boolean ishideAccuralsChecked = true;
	boolean isTransactionTabSelected;
	public boolean accuralsTypeTransaction = true;

	// WebDriver driver = new ChromeDriver();

	/**
	 * Returns targeted excel sheet located
	 * 
	 * @return
	 */
	public String getLoginExcelSheetPath() {
		// TODO Auto-generated method stub
		return getResource("loginfolder");
	}

	public String getProductExcelSheetPath() {
		// TODO Auto-generated method stub
		return getResource("productfolder");
	}

	public String getClientExcelSheetPath() {
		// TODO Auto-generated method stub
		return getResource("clientfolder");
	}

	/**
	 * Method returns date format of cell2 from a targeted excel sheet
	 * 
	 * @param cell2
	 * @return
	 * @throws ParseException
	 */
	public static String parseDate(XSSFCell cell2) throws ParseException {

		DateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
		Date date = cell2.getDateCellValue();
		return dateFormat.format(date);
	}

	/**
	 * method converts key value pairs present in excel sheets into a hash map.
	 * 
	 * @param excelSheetPath
	 *            :- Location of excel sheet
	 * 
	 * @param excelsheet
	 *            :- Given excel sheet name
	 * 
	 * @param sheetname
	 *            :- sheet name of an excel sheet
	 * 
	 * @return
	 */
	public static Map<String, String> parseExcelSheet(String excelSheetPath,
			String excelsheet, String sheetname) {

		Map<String, String> excelVlaue = new LinkedHashMap<String, String>();
		XSSFSheet sheet = null;
		try {
			XSSFCell cell1 = null;
			XSSFCell cell2 = null;
			FileInputStream file = new FileInputStream(new File(excelSheetPath
					+ "/" + excelsheet));
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			sheet = workbook.getSheet(sheetname);
			System.out.println("Opened file name :" + excelsheet
					+ " with sheet " + sheetname);

			Iterator<Row> rowIterator = sheet.iterator();
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();

				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					cell1 = (XSSFCell) cellIterator.next();
//					System.out.println("Cell One ... key="
//							+ cell1.getRichStringCellValue());
					String key = cell1.getRichStringCellValue().toString();
					if (!cellIterator.hasNext()) {
						System.out.println("No Such Element");
					} else {
						// cell iterator by calling its next method
						cell2 = (XSSFCell) cellIterator.next();

						switch (cell2.getCellType()) {
						case Cell.CELL_TYPE_NUMERIC:
							int i = (int) cell2.getNumericCellValue();
							value = String.valueOf(i);
//							System.out.println("Cell Two ... value=" + value);
							if (HSSFDateUtil.isCellDateFormatted(cell2)) {
								value = parseDate(cell2);
								excelVlaue.put(key, value);

							} else {
								excelVlaue.put(key, value);

							}

							break;

						case Cell.CELL_TYPE_STRING:
///							System.out.println("Cell Two ... value="
//									+ cell2.getRichStringCellValue());
							value = cell2.getRichStringCellValue().toString();
							excelVlaue.put(key, value);
							break;
						}
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return excelVlaue;
	}

	/**
	 * Method enters login credential from target excel sheet into login page
	 * 
	 * @param loginExcelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 * @throws Throwable
	 */
	public void setupLogin(String loginExcelSheetPath, String excelSheetName,
			String sheetName) throws Throwable {
		try {

			Map<String, String> loginMap = parseExcelSheet(loginExcelSheetPath,
					excelSheetName, sheetName);

			insertValues(loginMap);

			clickButton(getResource("signin"));
			Thread.sleep(getResourceKey("extraLargeWait"));
		} catch (Exception ioe) {
			ioe.printStackTrace();
		}

	}

	/**
	 * Method navigates to client page
	 * 
	 * @throws Throwable
	 */
	public void clientNavigation() throws Throwable {
		try {

			MifosWebPage.navigateToUrl(MifosWebPage.BASE_URL + "clients");
			Thread.sleep(getResourceKey("mediumWait"));

			clickButton(getResource("clickoncreateclient"));
			Thread.sleep(getResourceKey("mediumWait"));

		} catch (Exception ioe) {
			ioe.printStackTrace();
		}
	}

	/**
	 * Method enters values from target excel sheet into Client page
	 * 
	 * @param clientExcelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 * @throws Throwable
	 */
	public void setupClient(String clientExcelSheetPath, String excelSheetName,
			String sheetName) throws Throwable {
		try {
			Map<String, String> clientDetailsMap = parseExcelSheet(
					clientExcelSheetPath, excelSheetName, sheetName);
			insertValues(clientDetailsMap);
			clickButton(getResource("submitclient"));
			Thread.sleep(getResourceKey("mediumWait"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Method verifies client has been created successfully from target excel
	 * sheet
	 * 
	 * @param excelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 */
	public void verifyClient(String excelSheetPath, String excelSheetName,
			String sheetName) {
		// TODO Auto-generated method stub
		Map<String, String> clientDetailsMap = parseExcelSheet(excelSheetPath,
				excelSheetName, sheetName);
		verifySuccessMessage("verifyclient", clientDetailsMap.get("Verify"));
	}

	/**
	 * Method inserts a value, To creates a new loan, Approves and Disburse a
	 * given loan from target excel sheet
	 * 
	 * @param clientExcelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 * @throws InterruptedException
	 */
	public void setupNewLoan(String clientExcelSheetPath,
			String excelSheetName, String sheetName)
			throws InterruptedException {

		try {
			Map<String, String> newLoanDetailsMap = parseExcelSheet(
					clientExcelSheetPath, excelSheetName, sheetName);
			insertValues(newLoanDetailsMap);
			Thread.sleep(getResourceKey("mediumWait"));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Method navigates to loan product page
	 * 
	 * @param productExcelSheetPath
	 * @param excelsheet
	 * @param sheetName
	 * @throws Throwable
	 */
	public void productNavigation(String productExcelSheetPath,
			List<String> excelsheet, String sheetName) throws Throwable {
		try {

			MifosWebPage.navigateToUrl(MifosWebPage.BASE_URL + "products");
			Thread.sleep(getResourceKey("mediumWait"));

			clickButton(getResource("clickonloanproducts"));
			Thread.sleep(getResourceKey("mediumWait"));

			clickButton(getResource("clickoncreateloanproduct"));
			Thread.sleep(getResourceKey("extraLargeWait"));
		} catch (Exception ioe) {
			ioe.printStackTrace();
		}

	}

	/**
	 * Method inserts a value to create a loan product from a target excel sheet
	 * 
	 * @param productExcelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 * @throws Throwable
	 */
	public void setupLoanProduct(String productExcelSheetPath,
			String excelSheetName, String sheetName) throws Throwable {
		try {
			Map<String, String> productDetailsMap = parseExcelSheet(
					productExcelSheetPath, excelSheetName, sheetName);

			insertValues(productDetailsMap);

			clickButton(getResource("submitloanproduct"));

			((JavascriptExecutor) getWebDriver())
					.executeScript("scroll(500,0);");

			Thread.sleep(getResourceKey("mediumWait"));

		} catch (Exception ioe) {
			ioe.printStackTrace();
		}

	}

	/**
	 * Method verifies loan product has been created successfully from a
	 * targeted excel sheet
	 * 
	 * @param productExcelSheetPath
	 * @param excelSheetName
	 * @param sheetName
	 */
	public void verifyProduct(String productExcelSheetPath,
			String excelSheetName, String sheetName) {
		// TODO Auto-generated method stub
		Map<String, String> productDetailsMap = parseExcelSheet(
				productExcelSheetPath, excelSheetName, sheetName);
		verifySuccessMessage("verifyloanproduct",
				productDetailsMap.get("verifyloanproduct"));
	}

	/**
	 * Method parse to decimal value.
	 * 
	 * @param input
	 * @return
	 * @throws ParseException
	 */
	public double parseDecimal(String input) throws ParseException {
		NumberFormat numberFormat = NumberFormat.getNumberInstance(Locale
				.getDefault());
		ParsePosition parsePosition = new ParsePosition(0);
		Number number = numberFormat.parse(input, parsePosition);

		if (parsePosition.getIndex() != input.length()) {
			throw new ParseException("Invalid input", parsePosition.getIndex());
		}
		return number.doubleValue();
	}

	/**
	 * Method verifies Summary,Repayments Schedule,Transactions tab & accounting
	 * details from a targeted excel sheet
	 * 
	 * @param clientExcelSheetPath
	 * @param excelSheetName
	 * @param sheetname
	 * @throws InterruptedException
	 * @throws IOException
	 * @throws ParseException
	 */
	public void verifyLoanTabData(String clientExcelSheetPath,
			String excelSheetName, String sheetname)
			throws InterruptedException, IOException, ParseException {

		int sheetIndex = 0;
		int rowCount = 0;
		try {
			FileInputStream file = new FileInputStream(new File(
					clientExcelSheetPath + "\\" + excelSheetName));
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			XSSFSheet sheet = workbook.getSheet(sheetname);

			if (sheetname.equals("Summary")) {
				sheetIndex = 2;
			} else if (sheetname.equals("Repayment Schedule")) {
				sheetIndex = 4;
			} else if (sheetname.equals("Transactions")) {
				sheetIndex = 6;
			}
			if (!isTransactionTabSelected) {
				getWebDriver().findElement(
						By.xpath("//a[contains(.,'" + sheetname + "')]"))
						.click();
			}
			rowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();
			System.out.println("row count " + rowCount);

			for (int rowCount1 = 1; rowCount1 <= rowCount; rowCount1++) {
				int colIndex = 0;
				if (sheetname.equals("Transactions")) {
					colIndex = 2;
				}

				List<WebElement> applicationCol = null;
				if (sheetname.equals("Summary")
						|| sheetname.equals("Repayment Schedule")
						|| sheetname.equals("Transactions")) {

					/*System.out
							.println(getWebDriver()
									.findElement(
											By.xpath("//*[@id='main']/div[3]/div/div/div/div/div/div[2]/div[3]/div[4]/div/div/div["
													+ sheetIndex
													+ "]/table/tbody/tr["
													+ rowCount1 + "]"))
									.getText());*/

					if (sheetname.equals("Transactions")
							&& !accuralsTypeTransaction) {

						String Accrual = getWebDriver()
								.findElement(
										By.xpath("//*[@id='main']/div[3]/div/div/div/div/div/div[2]/div[3]/div[4]/div/div/div["
												+ sheetIndex
												+ "]/table/tbody/tr["
												+ rowCount1 + "]/td[4]"))
								.getText();
						if (Accrual.equals("Accrual")) {
							setAccuralTransactionType
									.add(getWebDriver()
											.findElement(
													By.xpath("//*[@id='main']/div[3]/div/div/div/div/div/div[2]/div[3]/div[4]/div/div/div["
															+ sheetIndex
															+ "]/table/tbody/tr["
															+ rowCount1
															+ "]/td[1]"))
											.getText());
						} else {
							setAccuralTransactionID
									.add(getWebDriver()
											.findElement(
													By.xpath("//*[@id='main']/div[3]/div/div/div/div/div/div[2]/div[3]/div[4]/div/div/div["
															+ sheetIndex
															+ "]/table/tbody/tr["
															+ rowCount1
															+ "]/td[1]"))
											.getText());
						}
					}

					applicationCol = getWebDriver()
							.findElements(
									By.xpath("//*[@id='main']/div[3]/div/div/div/div/div/div[2]/div[3]/div[4]/div/div/div["
											+ sheetIndex
											+ "]/table/tbody/tr["
											+ rowCount1 + "]/td"));
					System.out.println("Col count  " + applicationCol.size());

				} else if (sheetname.equals("Acc_Disbursement")
						|| sheetname.equals("Acc_Repaymentdisbursement")
						|| sheetname.equals("Acc_Repayment")) {
					colIndex = 4;
					/*System.out
							.println(getWebDriver()
									.findElement(
											By.xpath(".//*[@id='main']/div[3]/div/div/div/div/div/div[4]/table/tbody/tr["
													+ rowCount1 + "]"))
									.getText());*/
					applicationCol = getWebDriver()
							.findElements(
									By.xpath(".//*[@id='main']/div[3]/div/div/div/div/div/div[4]/table/tbody/tr["
											+ rowCount1 + "]/td"));
					System.out.println("Col count  " + applicationCol.size());
				}
				verifyColumnDetails(colIndex, rowCount1, applicationCol, sheet,
						sheetname);

			}
			Thread.sleep(getResourceKey("largeWait"));
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
		}
	}

	/**
	 * Methods verifies & validates each cell values from the target excel sheet
	 * with web pages.
	 * 
	 * @param colIndex
	 * @param rowCount1
	 * @param applicationCol
	 * @param sheet
	 * @param sheetname
	 * @throws ParseException
	 */
	private void verifyColumnDetails(int colIndex, int rowCount1,
			List<WebElement> applicationCol, XSSFSheet sheet, String sheetname)
			throws ParseException {

		String strCellValue = "";

		for (; colIndex < applicationCol.size(); colIndex++) {
			double screenVal = 0.0;
			String textVal = applicationCol.get(colIndex).getText();
			DateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
			Date date = null;
			if ((sheet.getRow(rowCount1) == null)
					|| (sheet.getRow(rowCount1).getCell(colIndex) == null)) {
				continue;
			}
			switch (sheet.getRow(rowCount1).getCell(colIndex).getCellType()) {
			case Cell.CELL_TYPE_BLANK:

				break;
			case Cell.CELL_TYPE_NUMERIC:
				if (HSSFDateUtil.isCellDateFormatted(sheet.getRow(rowCount1)
						.getCell(colIndex))) {
					date = sheet.getRow(rowCount1).getCell(colIndex)
							.getDateCellValue();
					try {
						Assert.assertEquals(textVal, dateFormat.format(date));
					} catch (Throwable e) {
						Assert.fail("Tab Name:" + sheetname + " Row number:"
								+ rowCount1 + " Column number:" + colIndex
								+ " Expected result:" + dateFormat.format(date)
								+ " Actual result:" + textVal);
					}
				} else {
					if ((textVal != null) && !(textVal.trim().equals("")))
						screenVal = parseDecimal(applicationCol.get(colIndex)
								.getText());
					double value = (double) sheet.getRow(rowCount1)
							.getCell(colIndex).getNumericCellValue();
					strCellValue = String.valueOf(value);
					try {
						Assert.assertEquals(screenVal,
								parseDecimal(strCellValue), 0.0);
					} catch (Throwable e) {
						Assert.fail("Tab Name:" + sheetname + " Row number:"
								+ rowCount1 + " Column number:" + colIndex
								+ " Expected result:"
								+ parseDecimal(strCellValue)
								+ " Actual result:" + screenVal);
					}
				}

				break;
			case Cell.CELL_TYPE_STRING:
				strCellValue = sheet.getRow(rowCount1).getCell(colIndex)
						.getStringCellValue();
				try {
					if (textVal.contains("$") && strCellValue.contains("$")) {
						textVal = textVal.substring(textVal.indexOf(" ") + 1,
								textVal.length());
						strCellValue = strCellValue.substring(
								strCellValue.indexOf(" ") + 1,
								strCellValue.length());
						Assert.assertEquals(textVal, strCellValue);
					} else {
						Assert.assertEquals(textVal, strCellValue);
					}
				} catch (Throwable e) {
					Assert.fail("Tab Name:" + sheetname + " Row number:"
							+ rowCount1 + " Column number:" + colIndex
							+ " Expected result:" + strCellValue
							+ " Actual result:" + textVal);
				}

				break;
			}
		}

	}

	public void clickBackToClient() throws Throwable {
		clickButton(getResource("frontend.clientform.backtoclientname"),
				"xpath");
	}


	/**
	 * Method makes repayment and verifies Validates Loan tabs details
	 * @param excelSheetPath
	 * @param excelSheet
	 * @throws Exception
	 */
	public void makeAndVerifyRepayment(String excelSheetPath,
			List<String> excelSheet) throws Exception {
		// TODO Auto-generated method stub

		String excelName = excelSheet.get(0);
		String inputSheet = excelSheet.get(1);
		String summarySheet = excelSheet.get(2);
		String repaymentScheduleSheet = excelSheet.get(3);
		String transactionsSheet = excelSheet.get(4);

		// Make Repayment
		makeRepayment(excelSheetPath, excelName, inputSheet);

		// Validate Repayment
		vaidateSummary(excelSheetPath, excelName, summarySheet);
		vaidateRepaymentSchedule(excelSheetPath, excelName,repaymentScheduleSheet);
		vaidateTransactions(excelSheetPath, excelName, transactionsSheet);
	}

	private void vaidateTransactions(String excelSheetPath, String excelName,
			String transactionsSheet) throws Exception {
		// TODO Auto-generated method stub
		verifyLoanTabData(excelSheetPath, excelName, transactionsSheet);
	}

	private void vaidateRepaymentSchedule(String excelSheetPath,
			String excelName, String repaymentScheduleSheet) throws Exception {
		// TODO Auto-generated method stub
		verifyLoanTabData(excelSheetPath, excelName, repaymentScheduleSheet);
	}

	private void vaidateSummary(String excelSheetPath, String excelName,
			String summarySheet) throws Exception {
		// TODO Auto-generated method stub
		verifyLoanTabData(excelSheetPath, excelName, summarySheet);
	}

	private void makeRepayment(String excelSheetPath, String excelName,
			String inputSheet) throws Exception {
		// TODO Auto-generated method stub
		Map<String, String> repaymentDetails = parseExcelSheet(excelSheetPath,
				excelName, inputSheet);
		insertValues(repaymentDetails);
		clickButton(getResource("submitmakerepayment"));
		Thread.sleep(getResourceKey("extraLargeWait"));

	}


	/**Method Searches Journal Entries by entering transaction id and verify the account details.
	 * @param excelSheetPath
	 * @param transaction
	 * @throws InterruptedException
	 * @throws IOException
	 * @throws ParseException
	 */
	public void searchWithTransactinID(String clientExcelSheetPath,
			String excelSheetName, String sheetName)
			throws InterruptedException, IOException, ParseException, Exception {
		try {
			/*
			 * List<List<String>> sheetOptions = transaction.raw(); for
			 * (List<String> sheetOption : sheetOptions) {
			 * 
			 * for (int sheet = 1; sheet < sheetOption.size(); sheet++) { int
			 * sheetId = sheet - 1;
			 */
			int sheetId = 0;
			if (sheetName.equals("Acc_Disbursement")
					|| sheetName.equals("Acc_Repaymentdisbursement")
					|| sheetName.equals("Acc_Repayment")) {

				isTransactionTabSelected = true;
				getWebDriver()
						.findElement(
								By.xpath("//input[@placeholder='Search by transaction']"))
						.sendKeys(
								Keys.chord(Keys.CONTROL, "a"),
								"L"
										+ setAccuralTransactionID.toArray()[sheetId++]);
				Thread.sleep(getResourceKey("mediumWait"));
				clickButton(
						getResource("frontend.accounting.searchjournal.transactionid.submit"),
						"xpath");

				verifyLoanTabData(clientExcelSheetPath, excelSheetName,
						sheetName);
				Thread.sleep(getResourceKey("smallWait"));
				clickButton(
						getResource("frontend.accounting.searchjournal.transactionid.Parameters"),
						"xpath");
				Thread.sleep(getResourceKey("mediumWait"));
			}

			if (sheetName.equals("Accural")) {

				Iterator<String> getTransactionType = setAccuralTransactionType
						.iterator();
				while (getTransactionType.hasNext()) {
					getWebDriver()
							.findElement(
									By.xpath("//input[@placeholder='Search by transaction']"))
							.sendKeys(Keys.chord(Keys.CONTROL, "a"),
									"L" + getTransactionType.next());

					Thread.sleep(getResourceKey("mediumWait"));
					clickButton(
							getResource("frontend.accounting.searchjournal.transactionid.submit"),
							"xpath");
					Thread.sleep(getResourceKey("mediumWait"));
					verifyLoanTabData(clientExcelSheetPath, excelSheetName,
							sheetName);
					clickButton(
							getResource("frontend.accounting.searchjournal.transactionid.Parameters"),
							"xpath");
					Thread.sleep(getResourceKey("mediumWait"));
				}
			}
			// }
			// }

		} catch (Throwable e) {
			e.printStackTrace();
		}

	}

	/**
	 * Method navigates to Scheduler Jobs and select add periodic accrual transactions job and runs it.
	 * @throws InterruptedException
	 */
	public void selectSchedularJob() throws InterruptedException {

		MifosWebPage.navigateToUrl(MifosWebPage.BASE_URL + "jobs");

		LazyWebElement check = getElement(getResource("frontend.admin.system.schedulerjob.addperiodicaccrualtransactions"));

		if (!check.isSelected()) {
			clickButton(
					getResource("frontend.admin.system.schedulerjob.addperiodicaccrualtransactions"),
					"xpath");
			Thread.sleep(getResourceKey("mediumWait"));
		}

		((JavascriptExecutor) getWebDriver()).executeScript("scroll(0,500);");
		Thread.sleep(getResourceKey("smallWait"));
		clickButton(
				getResource("frontend.admin.system.schedulerjob.runSelectedJobs"),
				"id");
		Thread.sleep(getResourceKey("smallWait"));
		clickButton(getResource("frontend.admin.system.schedulerjob.refresh"),
				"id");
		Thread.sleep(getResourceKey("mediumWait"));

		((JavascriptExecutor) getWebDriver())
				.executeScript("window.history.go(-1)");
		Thread.sleep(getResourceKey("mediumWait"));

		ishideAccuralsChecked = false;
		accuralsTypeTransaction = false;

	}

	/*
	 * private void verifyAccrualData(String clientExcelSheetPath, List<String>
	 * excelsheet, String sheetname) throws InterruptedException, IOException,
	 * ParseException {
	 * 
	 * for (String excelname : excelsheet) { int currentRow = 1; int
	 * rowToiterate = 0; int excelRowCount = 1; int xPathRow = 1; String
	 * textVal1 = null; Date excelDate = null; boolean rowWithDateFound = true;
	 * 
	 * try { FileInputStream file = new FileInputStream(new File(
	 * clientExcelSheetPath + "\\" + excelname)); XSSFWorkbook workbook = new
	 * XSSFWorkbook(file); XSSFSheet sheet = workbook.getSheet(sheetname);
	 * 
	 * excelRowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();
	 * 
	 * DateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
	 * List<WebElement> applicationCol = null;
	 * 
	 * applicationCol = getWebDriver() .findElements( By.xpath(
	 * ".//*[@id='main']/div[3]/div/div/div/div/div/div[4]/table/tbody/tr[1]/td"
	 * ));
	 * 
	 * for (int row = 1; row <= excelRowCount; row++) {
	 * 
	 * if ((sheet.getRow(row) == null) || (sheet.getRow(row).getCell(2) ==
	 * null)) { continue; } switch (sheet.getRow(row).getCell(2).getCellType())
	 * { case Cell.CELL_TYPE_BLANK: break; case Cell.CELL_TYPE_NUMERIC:
	 * 
	 * if (HSSFDateUtil.isCellDateFormatted(sheet.getRow(row) .getCell(2))) {
	 * excelDate = sheet.getRow(row).getCell(2) .getDateCellValue(); } break; }
	 * textVal1 = applicationCol.get(2).getText(); Date appDate =
	 * dateFormat.parse(textVal1);
	 * 
	 * if ((textVal1.equals(dateFormat.format(excelDate)))) { if
	 * (rowWithDateFound) { currentRow = row; rowWithDateFound = false; }
	 * rowToiterate++;
	 * 
	 * } else if (!appDate.after(excelDate)) break; } List<WebElement>
	 * readApplicationCol = null; for (; rowToiterate != 0; rowToiterate--) {
	 * int colIndex = 4;
	 * 
	 * readApplicationCol = getWebDriver() .findElements(
	 * By.xpath(".//*[@id='main']/div[3]/div/div/div/div/div/div[4]/table/tbody/tr["
	 * + xPathRow + "]/td")); verifyColumnDetails(colIndex, currentRow,
	 * readApplicationCol, sheet, sheetname);
	 * 
	 * currentRow++; xPathRow++;
	 * 
	 * }
	 * 
	 * } catch (FileNotFoundException fnfe) { fnfe.printStackTrace(); }
	 * 
	 * break; }
	 * 
	 * }
	 */

	public void searchUser(String user) throws InterruptedException {
		getWebDriver().findElement(By.id("search")).sendKeys(user);
		getWebDriver().findElement(By.id("search")).sendKeys(Keys.ENTER);
		Thread.sleep(getResourceKey("extraLargeWait"));
		getWebDriver().findElement(By.xpath(".//div[1]/div/span[2]/a")).click();
		Thread.sleep(getResourceKey("largeWait"));

	}

	public void undoDisbursal() throws InterruptedException {
		clickButton(getResource("frontend.clients.clients.undodisbursal"),
				"xpath");
		clickButton(getResource("frontend.admin.createoffice.savebutton"), "id");
		Thread.sleep(getResourceKey("mediumWait"));
	}

	public void reverseTransaction() throws InterruptedException {/*
																 * getWebDriver()
																 * .
																 * findElement(By
																 * .xpath(
																 * "//a[contains(.,'Transactions')]"
																 * )) .click();
																 * Thread.sleep(
																 * getResourceKey
																 * (
																 * "mediumWait")
																 * );
																 * System.out.
																 * println
																 * (getText(
																 * "frontend.clients.clients.makerepayment.reversetransaction"
																 * , "Xpath"));
																 * if (getText(
																 * "frontend.clients.clients.makerepayment.reversetransaction"
																 * ,
																 * "Xpath").equals
																 * (
																 * "Repayment"))
																 * {
																 * clickButton(
																 * getResource(
																 * "frontend.clients.clients.makerepayment.reversetransaction"
																 * ), "xpath");
																 * Thread.sleep(
																 * getResourceKey
																 * (
																 * "largeWait"))
																 * ;
																 * clickButton(
																 * getResource(
																 * "frontend.clients.clients.transaction.undo"
																 * ), "css");
																 * Thread.sleep(
																 * getResourceKey
																 * (
																 * "largeWait"))
																 * ;
																 * clickButton(
																 * getResource(
																 * "frontend.clients.clients.transaction.secondundo"
																 * ), "xpath");
																 * Thread.sleep(
																 * getResourceKey
																 * (
																 * "largeWait"))
																 * ; }
																 */
	}



}