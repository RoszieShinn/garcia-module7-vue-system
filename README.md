# Event Management System — Registration Management
Name: Rose Tita Rochelle T. Garcia
Course and Section: BSCS 3A
Subject: Software Engineering 1
Module: Module 7 - DESIGN AND IMPLEMENTATION
Instructor: Patrick Jason L. Torres

## Project Description

The Event Management System is a web-based registration management application developed using Vue 3. It allows users to manage event registration records through a simple and responsive interface. The system provides functions for adding, viewing, searching, editing, updating, and deleting registration records.

The system is based on the Event Management System designed in Module 6. The selected entity carried over from Module 6 is the Registration entity, which contains information such as event name, attendee name, attendee email, and registration status.

## Implemented Features

* Add new event registration records
* Display registration records in a table
* Search registration records
* Edit existing registration records
* Update registration information
* Cancel editing and return to Add mode
* Delete registration records with confirmation
* Display registration statistics:

  * Total Registrations
  * Registered
  * Confirmed
  * Cancelled
* Form validation for required information
* Success messages for adding and updating records
* Persistent data storage using browser localStorage
* Responsive user interface using Tailwind CSS

## Technologies Used

* Vue 3 — Frontend framework
* Vite — Development and build tool
* JavaScript — Application logic
* Tailwind CSS — User interface styling
* HTML — Application structure
* CSS — Additional styling
* localStorage — Client-side data persistence
* Git and GitHub — Version control

## Installation and Run Instructions

1. Clone or download the project - Open the project folder in Visual Studio Code.

2. Install dependencies - Open the terminal inside the project folder and run:
```bash
npm install
```

3. Start the development server

Run:
```bash
npm run dev
```
4. Open the application
Open the localhost URL provided by Vite in the browser, for example:
```text
http://localhost:5173
```
## Build Verification

The project includes a GitHub Actions workflow that automatically checks the Vue application whenever changes are pushed to the `main` branch. The workflow installs the project dependencies using `npm ci` and verifies that the application builds successfully using `npm run build`. A successful build is displayed with a green check mark in the GitHub Actions tab.

## localStorage Implementation

The application uses the browser's localStorage to store registration records. This allows the records to remain available even after refreshing or reopening the browser page.

The system uses the following localStorage key:

```text
module7-records
```

Whenever a registration is added, updated, or deleted, the records are saved to localStorage. When the application starts, the stored records are loaded back into the system.

## Connection Between Module 6 and Module 7

Module 7 continues the Event Management System designed in Module 6. In Module 6, the system architecture was planned using a three-tier client-server architecture consisting of the Presentation Layer, Application Layer, and Data Layer.

The Module 6 system proposed the following technology structure:

* Presentation Layer: Vue.js
* Application Layer: Node.js and Express
* Data Layer: MongoDB Atlas
* Main Entity: Registration

For Module 7, the Vue.js frontend implementation was developed based on the Registration entity from Module 6. The registration fields from the proposed database design were carried into the Vue application:

* `id`
* `eventName`
* `attendeeName`
* `attendeeEmail`
* `status`

Instead of connecting to the backend and MongoDB at this stage, Module 7 uses **localStorage** to simulate persistent data storage while focusing on the frontend system implementation and functionality.

## Application Screenshots

### Event Management System Dashboard

![Event Management System Dashboard](public/screenshots/dashboard.png.JPG)

### Add Registration Form

![Add Registration Form](public/screenshots/add-registration.JPG)

### Registration List

![Registration List](public/screenshots/registration-list.JPG)

### Edit Registration

![Edit Registration](public/screenshots/edit-registration.JPG)

## Limitations and Future Improvements

The current system uses browser localStorage for data storage, so registration records are limited to the current browser environment and are not yet connected to the Node.js, Express, and MongoDB Atlas backend planned in Module 6. The system also does not currently include user authentication, authorization, advanced reporting, or deployment to a production environment. In the future, the system can be improved by connecting the Vue.js frontend to the Node.js and Express backend and MongoDB Atlas database, adding authentication and administrator features, providing registration reports and data export, and deploying the application for actual use.

## Software Testing — Module 8

### Testing Summary

The Event Management System was tested as part of Module 8 - Software Testing. Testing focused on five major features: adding registration records, displaying registration records, editing registration records, deleting registration records, and search/validation.

### Test Commands

The following commands were used to verify the application:

```bash
npm run test:run
npm run build
```

The project also uses GitHub Actions to automatically run:

```bash
npm ci
npm run test:run
npm run build
```

### Automated Test Result Summary

Five automated unit tests were created using Vitest and Vue Test Utils.

* Add valid registration — Passed
* Display registration records — Passed
* Edit registration record — Passed
* Delete registration record — Passed
* Search registration records — Passed

**Final Result: 5/5 automated tests passed.**

### Manual Testing

Ten manual test cases were prepared and executed, consisting of positive and negative/edge cases for the five major features.

All manual test cases were executed and documented with expected results, actual results, status, and screenshot evidence.

### Defect Status

One actual software defect was identified during testing. The Event Name and Attendee Name fields accepted numeric-only and special-character-only input.

The defect was corrected by adding validation requiring the Event Name and Attendee Name to contain at least one letter.

**Defect ID:** DEF-01
**Status:** Fixed
**Fix Commit:** `0b9844e` — `fix: correct registration input validation`
**Retesting Result:** Passed

### Continuous Integration

GitHub Actions was updated to automatically install dependencies, run the automated tests, and build the Vue application whenever changes are pushed to the `main` branch.

The CI workflow runs:

* `npm ci`
* `npm run test:run`
* `npm run build`

A screenshot of the successful CI result is included in the Module 8 documentation.

## Module 9 - Software Evolution

### Change Request

**Change Request ID:** CR-M9-01 — Active/Inactive Record Filter

**Maintenance Type:** Perfective Maintenance

**Target Version:** Version 1.1.0

**Affected Architecture:** Vue.js Frontend, particularly the RegistrationList component and user interface.

### Implementation Summary

The approved software evolution change adds an **Active/Inactive Record Filter** to the Registration Management system. The filter provides three options:

* **All** — displays all registration records
* **Active** — displays records with Registered or Confirmed status
* **Inactive** — displays records with Cancelled status

The implementation was added to `RegistrationList.vue` while preserving the existing CRUD operations, search, validation, delete confirmation, localStorage persistence, and responsive interface.

The existing localStorage record structure was not changed, so existing registration records remain compatible with the updated system.

### Test Results

The automated Vitest test suite was updated for the evolved version.

* Original Module 8 regression tests retained: **5**
* New Module 9 status filter tests: **2**
* **Final automated test result: 7/7 tests passed**

The new tests verify that the Active and Inactive filters display only the appropriate registration records.

### Build Result

The production build was verified successfully using:

```bash
npm run build
```

**Build Status: Passed**

### Continuous Integration Status

The evolved branch was verified using GitHub Actions.

* **Workflow:** Vue Build Check
* **Run:** #7
* **Branch:** `module9/software-evolution`
* **Commit:** `9f9f915`
* **Run Date:** September 8, 2026
* **Status:** Completed successfully

The CI workflow successfully completed the automated test and production build checks.

### Known Limitations

The system continues to use browser localStorage for data persistence. It is not yet connected to the Node.js and Express backend and MongoDB Atlas database proposed in Module 6.

The Active/Inactive Filter is based on the existing registration status values. **Registered** and **Confirmed** are treated as Active, while **Cancelled** is treated as Inactive.

Other limitations from the previous version, such as the absence of authentication, authorization, advanced reporting, and production deployment, remain unchanged.

### Repository Verification

The latest Module 9 code is available in the public GitHub repository:

https://github.com/RoszieShinn/garcia-module7-vue-system

The `module9/software-evolution` branch contains the latest implemented change, automated tests, and CI workflow update.
