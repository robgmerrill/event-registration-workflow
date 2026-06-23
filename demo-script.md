# Event Registration Workflow Demo

## Introduction

Today I'll demonstrate a simple workflow automation solution for event registration management.

The business problem is that registrations are currently tracked manually through spreadsheets and email, creating repetitive work and limited visibility.

The goal of this solution is to centralize registrations, automate part of the workflow, and provide visibility through a dashboard.

---

## Registration Workflow

First, I'll open the registration form.

A user enters:

- Name
- Email
- Event selection

When the user clicks Register:

1. The browser sends the registration to a Next.js API route.
2. The API route generates a confirmation message.
3. The API route sends the registration to Airtable.
4. Airtable stores the registration as the system of record.

---

## Dashboard

Next, I'll open the dashboard.

The dashboard retrieves registrations directly from Airtable.

This demonstrates a read integration in addition to the write integration used during registration.

All registration data displayed here originates from Airtable.

---

## Architecture Overview

The architecture consists of:

User
↓
Next.js Frontend
↓
Next.js API Route
↓
Airtable API
↓
Airtable

The API route acts as a secure integration layer and prevents Airtable credentials from being exposed to the browser.

---

## Design Decisions

Several design decisions were made:

- Airtable was chosen as the system of record.
- API credentials are stored in environment variables.
- Registration confirmations are generated automatically.
- Dashboard data is read directly from Airtable.

---

## Future Enhancements

Potential enhancements include:

- Email delivery
- Event capacity limits
- Registration approvals
- CRM integration
- Analytics and reporting

---

## Conclusion

This project demonstrates workflow automation, API integration, data modeling, and system design using a lightweight architecture suitable for a small business use case.
