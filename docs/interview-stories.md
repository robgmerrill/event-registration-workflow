# Interview Stories

## Overview

This document captures interview-ready stories from the Event Registration Workflow project.

The goal is to explain the project in a way that connects technical decisions to customer needs, business outcomes, and implementation tradeoffs.

---

## Story 1: Translating a Business Problem into a Technical Solution

### Situation

TechForward Learning was managing event registrations manually through email and spreadsheets.

The operations team had to copy attendee information, send confirmation messages manually, and calculate registration counts by reviewing spreadsheet rows.

### Task

The goal was to reduce manual administrative work and give the operations team better visibility into registrations.

### Action

I designed and built a lightweight workflow automation system using Next.js and Airtable.

The solution included:

- A registration form for attendees
- A server-side API route for validation and Airtable integration
- Airtable as the system of record
- A dashboard for operations staff
- Basic metrics for registration visibility

### Result

The workflow reduced manual data entry, standardized confirmation messages, and gave staff a simple dashboard for tracking registrations.

### Interview Framing

This project shows that I can start with a customer workflow, identify pain points, translate those needs into requirements, and implement a practical technical solution.

---

## Story 2: Choosing Airtable Instead of a Traditional Database

### Situation

The customer needed a central place to store event registrations, but the operations team was small and did not have dedicated technical support.

### Task

I needed to choose a data storage option that met the workflow requirements without creating unnecessary operational complexity.

### Action

I selected Airtable as the system of record because it provided:

- A familiar spreadsheet-style interface
- API access
- Low maintenance
- Easy manual review of records
- Fast implementation

I considered a traditional database like PostgreSQL, but decided it was more complex than the customer needed for the first version.

### Result

The solution matched the customer's operational maturity while still supporting automation through the Airtable API.

### Interview Framing

This decision shows that I do not choose technology just because it is more powerful. I choose tools based on customer context, constraints, maintainability, and business value.

---

## Story 3: Protecting API Credentials with a Server-side API Route

### Situation

The application needed to create records in Airtable, which required an API token.

### Task

I needed to integrate with Airtable without exposing private credentials in the browser.

### Action

I created a server-side Next.js API route between the registration form and Airtable.

The browser submits registration data to the API route. The API route validates the data, generates the confirmation message, and sends the record to Airtable using the API token stored in environment variables.

### Result

The Airtable token remains server-side and is never exposed to end users.

### Interview Framing

This project demonstrates a common integration pattern:

Frontend UI → Server-side API Layer → External SaaS Platform

That pattern protects credentials, centralizes business logic, and keeps the architecture extensible.

---

## Story 4: Managing Scope for a First Version

### Situation

There were several possible enhancements that could have been added, including authentication, email delivery, advanced reporting, and search.

### Task

I needed to keep the project focused on the customer's immediate business problem.

### Action

I scoped the first version around the core workflow:

1. Capture registration
2. Validate input
3. Store the record
4. Generate a confirmation message
5. Display registrations on a dashboard

I documented future enhancements separately instead of adding them to the initial build.

### Result

The first version stayed focused, understandable, and aligned with the customer's most important needs.

### Interview Framing

This shows that I can manage scope and avoid overengineering. I can identify what belongs in version one and what should be deferred to a future phase.

---

## Story 5: Building a Project as a Consulting Engagement

### Situation

Many portfolio projects only show code, but customer-facing technical roles require more than implementation.

### Task

I wanted this project to demonstrate the full lifecycle of a customer-facing technical engagement.

### Action

In addition to building the working application, I created supporting consulting documentation:

- Customer Profile
- Discovery Notes
- Business Requirements
- Proposed Solution
- Architecture
- Architecture Diagram
- Implementation Plan
- Technical Tradeoffs
- Case Study
- Demo Script
- Lessons Learned

### Result

The project tells a complete story from business problem to implemented solution.

### Interview Framing

This project demonstrates not only that I can build software, but that I can communicate with stakeholders, translate requirements, explain architecture, and document tradeoffs.

---

## Short Project Pitch

TechForward Learning was manually managing event registrations with email and spreadsheets. I built a lightweight workflow automation system using Next.js and Airtable.

The app lets attendees submit registrations, stores records in Airtable, generates confirmation messages, and gives operations staff a dashboard with registration visibility.

The project demonstrates workflow automation, API integration, secure credential handling, business requirements translation, and customer-facing technical documentation.

---

## 30-Second Interview Version

I built an event registration workflow for a fictional training company that was managing registrations manually through email and spreadsheets.

I used Next.js for the web app and API route, Airtable as the system of record, and Vercel for deployment.

The important part was not just the code. I treated it like a consulting engagement: discovery notes, requirements, proposed solution, architecture, tradeoffs, implementation plan, and case study.

It shows how I can translate a business workflow into a practical technical solution.

---

## 2-Minute Interview Version

This project simulates a lightweight implementation engagement for a professional training company called TechForward Learning.

The customer was managing event registrations manually through email and spreadsheets. That created duplicate data entry, inconsistent confirmations, and limited visibility for operations staff.

I started by documenting the customer profile, discovery notes, business requirements, and success criteria. Then I proposed a simple architecture using Next.js and Airtable.

The registration form collects attendee name, email, and event selection. A server-side Next.js API route validates the request, generates a confirmation message, and creates the record in Airtable. The dashboard then retrieves registration records from Airtable and displays basic operational metrics.

One key decision was using Airtable instead of a traditional database. PostgreSQL would be more powerful, but Airtable better matched the customer's need for a low-maintenance, spreadsheet-style system of record.

Another key decision was using a server-side API route instead of calling Airtable directly from the browser. That protected the Airtable API token and gave me a central place for backend validation and business logic.

The result is a working deployed app supported by consulting-style documentation, showing the full path from business problem to implemented solution.
