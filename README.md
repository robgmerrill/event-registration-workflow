# Event Registration Workflow Automation

A customer-facing workflow automation project that simulates a lightweight consulting engagement for a professional training company.

This project demonstrates how a manual event registration process can be transformed into a simple web-based workflow using Next.js and Airtable.

---

## Live Demo

https://event-registration-workflow.vercel.app/

---

## Project Summary

TechForward Learning is a fictional professional training company that manages event registrations manually using email and shared spreadsheets.

The company needed a simple way to:

- Capture event registrations
- Store attendee data centrally
- Generate consistent confirmation messages
- Give operations staff visibility into registrations
- Reduce manual administrative work

The solution is a Next.js application with:

- A public registration form
- A server-side API route
- Airtable as the system of record
- An internal dashboard for viewing registrations and basic metrics

---

## Business Problem

The original process required staff to manually copy registration information into spreadsheets, send confirmation emails, and calculate registration counts by hand.

This created several problems:

- Duplicate data entry
- Inconsistent communication
- Limited reporting
- No real-time dashboard
- Increased administrative burden as event volume grew

---

## Proposed Solution

The implemented solution uses a lightweight architecture:

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

This architecture keeps the user experience simple while protecting Airtable credentials on the server side.

---

## Tech Stack

- Next.js
- React
- TypeScript
- Airtable API
- Vercel
- GitHub

---

## Key Features

- Event registration form
- Frontend validation
- Server-side request validation
- Airtable record creation
- Automatic confirmation message generation
- Registration dashboard
- Basic operational metrics

---

## Consulting Engagement Documents

This project includes documentation that simulates the deliverables of a customer-facing technical engagement.

- [Customer Profile](docs/customer-profile.md)
- [Discovery Notes](docs/discovery-notes.md)
- [Business Requirements](docs/business-requirements.md)
- [Proposed Solution](docs/proposed-solution.md)
- [Architecture](docs/architecture.md)
- [Architecture Diagram](docs/architecture-diagram.md)
- [Implementation Plan](docs/implementation-plan.md)
- [Technical Tradeoffs](docs/technical-tradeoffs.md)
- [Case Study](docs/case-study.md)
- [Demo Script](docs/demo-script.md)
- [Lessons Learned](docs/lessons-learned.md)
- [Interview Stories](docs/interview-stories.md)

---

## What This Project Demonstrates

This project is designed to show more than coding ability.

It demonstrates:

- Discovery thinking
- Business requirements translation
- Workflow automation
- API integration
- SaaS implementation
- Secure server-side credential handling
- Dashboard design
- Customer-facing technical communication
- Tradeoff reasoning

---

## Security Notes

Airtable credentials are stored in environment variables and are never exposed to the browser.

The browser submits registration data to a server-side Next.js API route, which then communicates with Airtable.

---

## Future Enhancements

Potential next steps include:

- Email delivery through SendGrid, Resend, or Postmark
- Authentication for the dashboard
- Event capacity limits
- Registration status updates
- Search and filtering
- CRM integration
- Calendar integration
- Error monitoring and logging

---

## Portfolio Framing

This project represents a small-scale implementation consulting engagement.

The goal was not only to build a working application, but to demonstrate how a customer problem can be translated into requirements, architecture, implementation, and a clear business outcome.
