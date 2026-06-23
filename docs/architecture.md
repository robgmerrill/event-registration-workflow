# Architecture

## Overview

This project demonstrates a lightweight workflow automation system for event registration management.

The architecture separates the user-facing application from the system of record. The Next.js application provides the registration form, validation, API route, and dashboard. Airtable stores the registration records and serves as the source of truth.

---

## High-Level Architecture

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

---

## Component Responsibilities

### Next.js Registration Form

The registration form is responsible for collecting attendee information from the user.

Responsibilities:

- Capture attendee name
- Capture email address
- Capture event selection
- Perform frontend validation
- Submit registration data to the API route

---

### Next.js API Route

The API route acts as the secure integration layer between the frontend and Airtable.

Responsibilities:

- Receive registration data
- Perform backend validation
- Generate confirmation message
- Authenticate with Airtable
- Create registration record in Airtable
- Return success or error response to the frontend

---

### Airtable

Airtable serves as the system of record for registration data.

Responsibilities:

- Store attendee records
- Store registration status
- Store confirmation messages
- Provide data to the dashboard through the Airtable API

---

### Dashboard

The dashboard gives operations staff visibility into registration activity.

Responsibilities:

- Retrieve records from Airtable
- Display registration records
- Show total registrations
- Show unique event count

---

## Data Flow

1. User submits registration form.
2. Frontend validates required fields.
3. Frontend sends a POST request to `/api/registrations`.
4. API route validates the request.
5. API route generates a confirmation message.
6. API route sends the record to Airtable.
7. Airtable stores the registration.
8. Dashboard retrieves and displays registration data.

---

## Security Considerations

The Airtable API token is stored in environment variables and is only accessed server-side.

The browser never communicates directly with Airtable. This prevents API credentials from being exposed to end users.

---

## Tradeoffs

### Why Airtable?

Airtable was selected because it provides:

- Spreadsheet-like interface
- Low operational overhead
- Simple API access
- Fast implementation

### Why not PostgreSQL?

A traditional database would provide more control and scalability, but it would increase operational complexity for a small customer workflow.

### Why not direct browser-to-Airtable calls?

Direct browser access would expose the Airtable API token. A server-side API route provides a secure integration layer.

---

## Future Architecture Enhancements

Future versions could add:

- Email delivery provider
- Authentication
- CRM integration
- Event capacity rules
- Audit logging
- Error monitoring
