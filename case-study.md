# Event Registration Workflow Automation

## Business Problem

A training company manages event registrations manually using spreadsheets and email. This process requires staff to copy information between systems, send confirmations manually, and track attendees across multiple tools.

The company wanted a simpler process that centralized registrations and reduced manual effort.

---

## Proposed Solution

I designed a lightweight workflow application that allows users to register for training events through a web form.

The solution automatically:

- Captures registration information
- Stores registrations in Airtable
- Generates a confirmation message
- Displays registrations in a dashboard

---

## Architecture

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
Dashboard

---

## Why Airtable?

Airtable was selected because it provides:

- Fast implementation
- Flexible data model
- Simple API integration
- Non-technical user accessibility

For a small business workflow, Airtable provides many benefits without requiring a dedicated database.

---

## Key Design Decisions

### System of Record

Airtable serves as the system of record for registration data.

### Secure API Access

The Airtable token is stored on the server using environment variables and is never exposed to browser clients.

### Workflow Automation

The API route generates a confirmation message automatically when a registration is submitted.

---

## Results

The solution demonstrates how a manual registration workflow can be automated using modern web technologies and SaaS tools.

The final system provides:

- Centralized registration tracking
- Reduced manual data entry
- Consistent confirmation messaging
- Dashboard visibility into registrations
