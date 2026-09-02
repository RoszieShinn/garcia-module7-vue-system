# Defect Report

## Defect ID

DEF-01

## Defect Title

Event Name and Attendee Name Accept Invalid Numeric and Special-Character-Only Input

## Environment

* Application: Vue.js Event Management System
* Browser: Google Chrome
* Date Identified: September 2, 2026

## Description

The Event Name and Attendee Name fields accept numeric-only and special-character-only input without displaying a validation message. These values can be submitted successfully and are displayed in the registration list.

## Steps to Reproduce

1. Open the Vue.js Event Management System.
2. Enter a numeric-only or special-character-only value in the Event Name field.
3. Enter a numeric-only or special-character-only value in the Attendee Name field.
4. Enter a valid email address.
5. Select a valid status.
6. Click **Add Registration**.

## Expected Result

The system should reject numeric-only or special-character-only input in the Event Name and Attendee Name fields and display an appropriate validation message.

## Actual Result

The system accepts numeric-only and special-character-only input in the Event Name and Attendee Name fields. The registration is successfully added and displayed in the registration list.

## Severity

Medium

## Priority

Medium

## Evidence

`04-identified-defect.png`

## Status

Fixed

Fix Commit: 0b9844e — fix: correct registration input validation
Retesting Result: Passed

## Planned Correction

Add input validation to the Event Name and Attendee Name fields so that the values must contain at least one letter before the registration can be submitted.
