Feature:Client
Background:
	Given I navigate to mifos
	And I use login folder 
	When I login into mifos site using excel sheet
			| Login.xlsx  | 
	Then I should see logged in successfully

@clientcreations		
Scenario: As User creates the loan, disburse and verifies the tabs and again undo disburse 

    Given I setup the clients 
		| Clientnavigation.xlsx |
	When I entered the values into client form using
		 |Createclient.xlsx|
	Then I should see client created successfully
	     |Createclient.xlsx|
