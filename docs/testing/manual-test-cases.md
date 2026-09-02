# Module 8 Manual Test Cases

These manual test cases are based on the implemented Event Management System from Module 7. The test cases cover normal operations, validation, CRUD functions, search, data persistence, delete confirmation, responsive interface behavior, and user feedback.

During the test design stage, the Actual Result and Status fields are marked as Not Run. These fields will be completed after the test cases are executed in Step 5.

## TC-01 — Add a Valid Record

**Test Case ID:** TC-01
**Requirement/Feature:** Add Registration
**Objective:** Verify that the system successfully adds a new registration when all required fields contain valid information.

**Preconditions:**
1. The Event Management System is running in the browser.
2. The registration form is displayed.
3. No existing record with the same test data is required.

**Test Data:**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Rochelle Garcia`
* Attendee Email: `garcia.rose@example.com`
* Status: `Registered`

**Test Steps:**
1. Enter `Computer Science Seminar` in the **Event Name** field.
2. Enter `Rochelle Garcia` in the **Attendee Name** field.
3. Enter `garcia.rose@example.com` in the **Attendee Email** field.
4. Leave the **Status** as `Registered`.
5. Click the **Add Registration** button.

**Expected Result:**
The system should successfully add the registration and display the newly added record in the registration list with the entered Event Name, Attendee Name, Attendee Email, and Status.

**Actual Result:**
The registration was added successfully and displayed correctly in the registration list with the entered details and Registered status.
**Status:**
Pass
**Date:**
September 2, 2026

**Evidence Filename:**
`TC-01-add-valid-record.png`

## TC-02 — Reject a Missing Required Field

**Test Case ID:** TC-02
**Requirement/Feature:** Required Field Validation
**Objective:** Verify that the system prevents a registration from being submitted when a required field is empty.

**Preconditions:**
1. The Event Management System is running in the browser.
2. The registration form is displayed.
3. The registration form is in Add Registration mode.

**Test Data:**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Juan Dela Cruz`
* Attendee Email: *(leave empty)*
* Status: `Registered`

**Test Steps:**
1. Enter `Computer Science Seminar` in the **Event Name** field.
2. Enter `Juan Dela Cruz` in the **Attendee Name** field.
3. Leave the **Attendee Email** field empty.
4. Leave the **Status** as `Registered`.
5. Click the **Add Registration** button.

**Expected Result:**
The system should prevent the registration from being added and display an alert stating, `Please fill in all required fields before submitting.`

**Actual Result:**
The system prevented submission when the required email field was empty and displayed a validation message.
**Status:**
Pass
**Date:**
September 2, 2026

**Evidence Filename:**
`TC-02-missing-required-field.png`

## TC-03 — Reject an Invalid Email Format

**Test Case ID:** TC-03
**Requirement/Feature:** Email Input Validation
**Objective:** Verify that the system does not accept an invalid email address when adding a registration.

**Preconditions:**
1. The Event Management System is running in the browser.
2. The registration form is displayed.
3. The registration form is in Add Registration mode.

**Test Data:**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Juan Dela Cruz`
* Attendee Email: `juan.delacruz`
* Status: `Registered`

**Test Steps:**
1. Enter `Computer Science Seminar` in the **Event Name** field.
2. Enter `Juan Dela Cruz` in the **Attendee Name** field.
3. Enter `juan.delacruz` in the **Attendee Email** field.
4. Leave the **Status** as `Registered`.
5. Click the **Add Registration** button.

**Expected Result:**
The system should reject the invalid email format and prevent the registration from being submitted.

**Actual Result:**  
The system prevented the user from entering an invalid email address and displayed a validation message stating that the email address must include an “@” symbol.
**Status:** Pass  
**Date:** September 2, 2026  

**Evidence Filename:**
`TC-03-invalid-email.png`

## TC-04 — Display Multiple Records

**Test Case ID:** TC-04
**Requirement/Feature:** Display Registration Records
**Objective:** Verify that the system correctly displays multiple registration records in the registration list.

**Preconditions:**
1. The Event Management System is running in the browser.
2. The registration form is displayed.
3. The system can accept new registration records.

**Test Data:**
**Record 1**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Rochelle Garcia`
* Attendee Email: `garcia.rose@example.com`
* Status: `Registered`

**Record 2**
* Event Name: `Birthday`
* Attendee Name: `Angel Rose`
* Attendee Email: `denshimina@example.com`
* Status: `Confirmed`

**Test Steps:**
1. Add the first registration using the provided Record 1 test data.
2. Add the second registration using the provided Record 2 test data.
3. View the registration list.

**Expected Result:**
The registration list should display both registration records with their correct Event Name, Attendee Name, Attendee Email, and Status.

**Actual Result:**  
The system successfully displayed multiple registration records in the registration list, with the correct event names, attendee names, email addresses, and statuses.
**Status:** Pass  
**Date:** September 2, 2026 

**Evidence Filename:**
`TC-04-multiple-records.png`

## TC-05 — Edit and Save an Existing Record

**Test Case ID:** TC-05
**Requirement/Feature:** Edit/Update Registration
**Objective:** Verify that an existing registration can be edited and saved successfully.

**Preconditions:**
1. The Event Management System is running in the browser.
2. At least one registration record exists in the registration list.
3. The existing record can be selected for editing.

**Test Data:**
* Existing Event Name: `Computer Science Seminar`
* Updated Event Name: `Computer Science Seminar 2026`
* Attendee Name: `Juan Dela Cruz`
* Attendee Email: `juan.delacruz@example.com`
* Status: `Confirmed`

**Test Steps:**
1. Select an existing registration and click the **Edit** button.
2. Change the **Event Name** to `Computer Science Seminar 2026`.
3. Change the **Status** to `Confirmed`.
4. Click the **Update Registration** button.
5. View the updated registration in the registration list.

**Expected Result:**
The system should successfully save the changes and display the updated Event Name and Status in the registration list while retaining the correct attendee information.

**Actual Result:**  
The system successfully updated the registration record. The updated information was displayed in the registration list, and a “Registration updated successfully!” message was shown.
**Status:** Pass  
**Date:** September 2, 2026  

**Evidence Filename:**
`TC-05-edit-record.png`

## TC-06 — Cancel Record Deletion

**Test Case ID:** TC-06
**Requirement/Feature:** Delete Confirmation
**Objective:** Verify that cancelling the deletion confirmation keeps the selected registration record in the registration list.

**Preconditions:**
1. The Event Management System is running in the browser.
2. At least one registration record exists in the registration list.

**Test Data:**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Juan Dela Cruz`
* Attendee Email: `juan.delacruz@example.com`
* Status: `Registered`

**Test Steps:**
1. Locate the `Computer Science Seminar` registration.
2. Click the **Delete** button for the record.
3. When the delete confirmation message appears, select **Cancel**.
4. View the registration list.

**Expected Result:**
The deletion should be cancelled, and the selected registration should remain displayed in the registration list.

**Actual Result:**  
The system displayed a confirmation dialog before deleting the record, providing both “OK” and “Cancel” options. The record remained in the registration list after cancelling the deletion.
**Status:** Pass  
**Date:** September 2, 2026 

**Evidence Filename:**
`TC-06-cancel-deletion.png`

## TC-07 — Confirm Record Deletion

**Test Case ID:** TC-07
**Requirement/Feature:** Delete Registration
**Objective:** Verify that a registration is permanently removed from the registration list after confirming the deletion.

**Preconditions:**
1. The Event Management System is running in the browser.
2. At least one registration record exists in the registration list.

**Test Data:**
* Event Name: `Computer Science Seminar`
* Attendee Name: `Juan Dela Cruz`
* Attendee Email: `juan.delacruz@example.com`
* Status: `Registered`

**Test Steps:**
1. Locate the `Computer Science Seminar` registration.
2. Click the **Delete** button for the record.
3. When the delete confirmation message appears, select **OK/Confirm**.
4. View the registration list.

**Expected Result:**
The selected registration should be removed from the registration list after the deletion is confirmed.

**Actual Result:**  
The system successfully deleted the selected registration record and displayed a “Registration deleted successfully!” message. The total number of registrations decreased to 1, confirming that the record was removed.
**Status:** Pass  
**Date:** September 2, 2026

**Evidence Filename:**
`TC-07-confirm-deletion.png`

## TC-08 — Search for an Existing Record

**Test Case ID:** TC-08
**Requirement/Feature:** Search Registration Records
**Objective:** Verify that the system displays an existing registration when a matching search term is entered.

**Preconditions:**
1. The Event Management System is running in the browser.
2. At least one registration record exists in the registration list.
3. The existing record contains the attendee name `Angel Rose`.

**Test Data:**
* Search Term: `Angel Rose`

**Test Steps:**
1. Locate the **Search** field in the registration list.
2. Enter `Angel Rose` in the Search field.
3. View the displayed registration records.

**Expected Result:**
The system should display the registration record matching the search term `Angel Rose`.

**Actual Result:**  
The system successfully searched for the existing registration record using the attendee name “angel” and displayed the matching record for Angel Rose.
**Status:** Pass  
**Date:** September 2, 2026 

**Evidence Filename:**
`TC-08-search-existing-record.png`

## TC-09 — Search for a Missing Record

**Test Case ID:** TC-09
**Requirement/Feature:** Search Registration Records
**Objective:** Verify that the system correctly handles a search when no registration matches the entered search term.

**Preconditions:**
1. The Event Management System is running in the browser.
2. At least one registration record exists in the registration list.
3. No registration contains the search term `Nonexistent Event`.

**Test Data:**
* Search Term: `Nonexistent Event`

**Test Steps:**
1. Locate the **Search** field in the registration list.
2. Enter `Nonexistent Event` in the Search field.
3. View the displayed registration records.

**Expected Result:**
The system should not display any registration that does not match the search term.

**Actual Result:**  
The system successfully searched for a record that does not exist. It displayed “0 Total” and “No registrations yet,” indicating that no matching record was found.
**Status:** Pass  
**Date:** September 2, 2026 

**Evidence Filename:**
`TC-09-search-missing-record.png`

 ## TC-10 — Verify localStorage After Refresh

* **Requirement/Feature:** Local Storage Persistence

* **Objective:** Verify that an existing registration remains available after refreshing the browser.

* **Preconditions:** The application is running and at least one registration has been added.

* **Test Data:**
  * Event Name: `Computer Science Seminar`
  * Attendee Name: `Juan Dela Cruz`
  * Attendee Email: `juan.delacruz@example.com`
  * Status: `Registered`

* **Test Steps:**
  1. Add a registration using the provided test data.
  2. Confirm that the registration appears in the registration list.
  3. Refresh the browser page.
  4. Check the registration list again.

* **Expected Result:** The previously added registration remains displayed after the browser is refreshed, showing the correct event name, attendee name, email, and status.

**Actual Result:**  
The registration records remained available after refreshing the page. The system displayed the two saved registration records with their correct event names, attendee names, email addresses, and statuses.
**Status:** Pass  
**Date:** September 2, 2026 
 
* **Evidence Filename:** `TC-10-localstorage-refresh.png`

## TC-11 — Check Responsive Layout

* **Requirement/Feature:** Responsive User Interface
* **Objective:** Verify that the registration form and registration list remain usable and properly arranged on different screen sizes.

* **Preconditions:** The application is running and at least one registration is displayed.
* **Test Data:** Existing registration record.

* **Test Steps:**
  1. Open the application in a desktop-sized browser window.
  2. Check the registration form, buttons, and registration list.
  3. Resize the browser window to a smaller screen size.
  4. Check the form, buttons, fields, and registration list again.

* **Expected Result:** The application remains readable and usable on different screen sizes. Form fields, buttons, and registration records do not overlap or become unusable.

**Actual Result:**  
The system displayed the Event Management System correctly on a smaller screen. The layout adjusted to the screen size, and the registration form and dashboard remained visible and usable without overlapping.
**Status:** Pass  
**Date:** September 2, 2026

* **Evidence Filename:** `TC-11-responsive-layout.png`

## TC-12 — Check Record Count or Feedback Message

* **Requirement/Feature:** Record Count / Feedback Message

* **Objective:** Verify that the system displays the correct record count or feedback message after adding or removing registrations.

* **Preconditions:** The application is running and registration records can be added or deleted.

* **Test Data:**
  * Event Name: `Computer Science Seminar`
  * Attendee Name: `Juan Dela Cruz`
  * Attendee Email: `juan.delacruz@example.com`
  * Status: `Registered`

* **Test Steps:**
  1. Open the application and check the current record count or feedback message.
  2. Add a new valid registration.
  3. Check the record count or feedback message after adding the record.
  4. Delete the same registration.
  5. Check the record count or feedback message again.

* **Expected Result:** The displayed record count or feedback message updates correctly after adding and deleting a registration.

**Actual Result:**  
The system correctly displayed the total number of registrations and the number of registrations for each status. The dashboard showed 2 total registrations, 1 registered, 1 confirmed, and 0 cancelled.
**Status:** Pass  
**Date:** September 2, 2026 

* **Evidence Filename:** `TC-12-record-count-feedback.png`