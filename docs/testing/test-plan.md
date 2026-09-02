# Module 8 Software Testing — Test Plan

## 1. Test Plan Overview

This test plan defines the testing activities for the Event Management System developed in Module 7. The testing focuses on verifying that the implemented features work according to the requirements and that the system behaves correctly under valid, invalid, and boundary conditions.

## 2. Test Objectives

The objectives of this testing activity are to:

1. Verify that the implemented system features function according to the requirements.
2. Validate the Add, Display, Edit, and Delete record functions.
3. Verify that invalid and incomplete inputs are properly handled.
4. Verify that the search function returns appropriate results.
5. Verify that records remain available after refreshing the browser through localStorage.
6. Verify that the interface remains usable on different screen sizes.
7. Identify and document at least one actual or intentionally discovered defect.
8. Correct the identified defect and perform retesting and regression testing.
9. Create and execute meaningful automated tests using Vitest.
10. Verify that the automated tests and production build successfully run through GitHub Actions.

## 3. Test Scope

### 3.1 In Scope

The following features and behaviors are included in testing:

* Adding a valid registration record
* Required-field validation
* Invalid and boundary input validation
* Displaying multiple records
* Editing and saving an existing record
* Canceling record deletion
* Confirming record deletion
* Searching for an existing record
* Searching for a missing record
* Verifying localStorage persistence after browser refresh
* Responsive interface behavior
* User feedback and record information, where applicable
* Selected Vue components and functions through automated testing

### 3.2 Out of Scope

The following are not included in this testing activity:

* Features that are not implemented in the Module 7 system
* External systems or third-party services that are not directly used by the application
* Production deployment and hosting testing
* Performance and load testing with many simultaneous users
* Formal security penetration testing
* Testing on all possible browsers, operating systems, and devices

## 4. Items to Test

The following system features will be tested:

1. Add Record
2. Input Validation
3. Display Records
4. Edit Record
5. Delete Record
6. Search Function
7. Data Persistence using localStorage
8. Responsive Interface
9. User Feedback and Record Information
10. Automated tests using Vitest and Vue Test Utils

## 5. Items Not Tested

The following items will not be tested because they are outside the scope of the current Module 8 activity:

* Server-side database functionality
* Production server deployment
* Third-party API integrations
* Large-scale performance and stress testing
* Penetration and advanced security testing
* Features not implemented in the current Event Management System

## 6. Test Environment

Testing will be performed using the following environment:

| Environment Item        | Details                        |
| ----------------------- | ------------------------------ |
| Operating System        | Windows                        |
| Development Environment | Visual Studio Code             |
| Application             | Vue.js Event Management System |
| Runtime                 | Node.js                        |
| Package Manager         | npm                            |
| Browser                 | Google Chrome                  |
| Testing Framework       | Vitest                         |
| Component Testing       | Vue Test Utils                 |
| Test Environment        | jsdom                          |
| Version Control         | Git and GitHub                 |
| CI/CD                   | GitHub Actions                 |
| Data Storage            | Browser localStorage           |

## 7. Responsibilities

| Role              | Responsibility                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Student/Tester    | Prepare the test plan, create manual test cases, execute tests, document results, identify defects, perform retesting, and prepare evidence |
| Student/Developer | Correct identified defects, update the system, and maintain the source code                                                                 |
| Instructor        | Review and evaluate the testing outputs and documentation                                                                                   |

## 8. Risks

The following risks may affect the testing activity:

1. **Incomplete test coverage** – Some system behaviors may not be covered by the selected test cases.
2. **Environment differences** – The application may behave differently on another browser, device, or operating system.
3. **Data loss during testing** – Clearing browser storage may remove test records stored in localStorage.
4. **Undetected defects** – Some defects may not appear during the planned test scenarios.
5. **Automated test configuration issues** – Incorrect Vitest or jsdom configuration may prevent automated tests from running.
6. **Time limitations** – Limited testing time may restrict the number of additional scenarios that can be performed.

## 9. Entry Criteria

Testing may begin when the following conditions are satisfied:

* The Module 7 Event Management System is implemented.
* The application can be successfully launched in the browser.
* The major system features are available for testing.
* The testing folder and test plan have been created.
* The required test environment is available.
* The tester understands the system requirements and expected behavior.

## 10. Exit Criteria

Testing will be considered complete when:

* At least 10 manual test cases have been executed.
* Each executed test case has an actual result and status.
* CRUD, validation, search, persistence, and responsive behavior have been tested.
* At least one defect has been documented.
* The identified defect has been corrected or appropriately documented.
* Retesting and regression testing have been completed.
* At least 2 meaningful automated tests are passing.
* The production build completes successfully.
* GitHub Actions successfully runs the automated tests and production build.
* Required screenshots and documentation have been prepared.

## 11. Deliverables

The following outputs will be produced for Module 8:

1. Test Plan
2. Manual Test Case Documentation
3. Manual Test Execution Results
4. Defect Report
5. Defect Correction and Retest Evidence
6. Vitest Automated Test Files
7. GitHub Actions Workflow
8. README Testing Documentation
9. Screenshot Evidence
10. PDF Testing Report
11. Public GitHub Repository Link
12. Testing-related Git Commit History
