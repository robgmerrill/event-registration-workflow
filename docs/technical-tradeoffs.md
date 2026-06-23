# Technical Tradeoffs

## Overview

This document explains the key technical decisions made in the Event Registration Workflow project.

The goal of the project was not to build the most complex possible system. The goal was to design a practical workflow automation solution that matched the customer's needs, budget, and operational maturity.

---

## Tradeoff 1: Airtable vs. Traditional Database

### Decision

Use Airtable as the system of record.

### Why Airtable Was Selected

Airtable was a good fit because the customer needed:

- A familiar spreadsheet-style interface
- Low operational overhead
- Fast implementation
- Easy manual record review
- API access for automation

### Alternative Considered

A traditional database such as PostgreSQL.

### Why PostgreSQL Was Not Selected

PostgreSQL would provide stronger relational modeling, querying, and scalability. However, it would also require more setup, more maintenance, and a separate admin interface for non-technical staff.

For this customer's stage and workflow, Airtable provided the best balance of usability and technical capability.

---

## Tradeoff 2: Server-side API Route vs. Direct Airtable Access

### Decision

Use a server-side Next.js API route between the frontend and Airtable.

### Why This Was Selected

The server-side API route protects the Airtable API token and prevents it from being exposed in the browser.

It also provides a central place for:

- Backend validation
- Business logic
- Confirmation message generation
- Future integrations

### Alternative Considered

Calling the Airtable API directly from the browser.

### Why Direct Browser Access Was Not Selected

Direct browser access would expose the Airtable API token to end users, creating a serious security problem.

The server-side API route creates a safer integration boundary.

---

## Tradeoff 3: Lightweight Validation vs. Full Validation Library

### Decision

Use simple custom validation logic.

### Why This Was Selected

The registration form only requires a small number of fields:

- Attendee Name
- Email Address
- Event Name

For this workflow, simple validation keeps the code easy to understand and maintain.

### Alternative Considered

Using a validation library such as Zod.

### Why a Validation Library Was Not Selected Initially

A validation library would be useful as the application grows, especially if more complex forms or shared schemas are added.

For the initial implementation, custom validation was enough to meet the requirements without adding extra dependencies.

---

## Tradeoff 4: Public Dashboard vs. Authentication

### Decision

Build the dashboard without authentication for the demo version.

### Why This Was Selected

The project is a portfolio demo intended to show workflow automation, Airtable integration, and dashboard visibility.

Skipping authentication allowed the project to focus on the core workflow.

### Alternative Considered

Adding login-protected dashboard access.

### Why Authentication Was Deferred

Authentication would be required in a real production environment, especially if attendee data were sensitive or private.

For the demo, authentication was deferred to keep the scope focused and understandable.

---

## Tradeoff 5: Generated Confirmation Message vs. Email Delivery

### Decision

Generate and store a confirmation message in Airtable instead of sending an email.

### Why This Was Selected

The requirement was to standardize confirmation messaging. Storing the message in Airtable demonstrates the business rule without adding email provider complexity.

### Alternative Considered

Integrating an email provider such as SendGrid, Resend, or Postmark.

### Why Email Delivery Was Deferred

Email delivery would be a natural next step, but it introduces additional concerns:

- Sender verification
- Deliverability
- Email templates
- Error handling
- Bounce management

For the initial implementation, storing the generated confirmation message was the right scope.

---

## Tradeoff 6: Inline Styles vs. Component Library

### Decision

Use simple inline styles instead of a full component library.

### Why This Was Selected

The project is focused on workflow, integration, and technical communication rather than visual design.

Inline styles kept the interface simple and reduced setup time.

### Alternative Considered

Using a UI library or design system.

### Why a Component Library Was Not Selected

A component library would improve design consistency as the app grows, but it would also add extra decisions and dependencies.

For this version, the simpler approach kept attention on the customer workflow.

---

## Summary

The major design theme across this project was intentional simplicity.

The selected architecture solves the customer's immediate problem while leaving room for future growth.

The implementation avoids unnecessary complexity, protects sensitive credentials, and uses tools that match the customer's current operating model.
