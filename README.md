# Event Registration Workflow Automation

A lightweight workflow automation demo built for a Solutions Engineer portfolio.

## Overview

This project demonstrates how a manual event registration process can be automated using a simple web application and Airtable.

Users can submit event registrations through a form. The application validates the input, sends the registration to a server-side API route, creates a record in Airtable, generates a confirmation message, and displays registrations in a dashboard.

## Business Problem

A training company manages event registrations manually using spreadsheets and email. This creates repetitive administrative work, inconsistent confirmation messages, and limited visibility into registration activity.

## Solution

The solution provides:

- A registration form for attendees
- Frontend validation
- Backend validation
- Airtable record creation
- Automatically generated confirmation messages
- A dashboard that reads from Airtable
- Basic metrics for total registrations and unique events

## Architecture

```text
User
  ↓
Next.js Registration Form
  ↓
Next.js API Route
  ↓
Airtable API
  ↓
Airtable Attendees Table
  ↓
Next.js Dashboard
```
