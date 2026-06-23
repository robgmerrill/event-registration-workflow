# Architecture Diagram

## High-Level System Flow

```text
┌──────────────┐
│    User      │
└──────┬───────┘
       │
       │ submits registration
       ▼
┌────────────────────────────┐
│ Next.js Registration Form  │
│                            │
│ - Collects attendee data   │
│ - Performs basic validation│
│ - Sends request to API     │
└──────┬─────────────────────┘
       │
       │ POST /api/registrations
       ▼
┌────────────────────────────┐
│ Next.js API Route          │
│                            │
│ - Validates request        │
│ - Protects API credentials │
│ - Applies business rules   │
│ - Creates Airtable record  │
└──────┬─────────────────────┘
       │
       │ Airtable REST API
       ▼
┌────────────────────────────┐
│ Airtable                   │
│                            │
│ Attendees Table            │
│ - Attendee Name            │
│ - Email                    │
│ - Event Name               │
│ - Status                   │
│ - Confirmation Message     │
└──────┬─────────────────────┘
       │
       │ fetch registration records
       ▼
┌────────────────────────────┐
│ Next.js Dashboard          │
│                            │
│ - Displays registrations   │
│ - Shows registration count │
│ - Shows unique event count │
└────────────────────────────┘
```

---

## Data Ownership

Airtable is the source of truth for registration data.

The Next.js application does not permanently store registration records. It creates, retrieves, and displays records from Airtable.

---

## Security Boundary

The browser never communicates directly with Airtable.

All Airtable communication happens through server-side Next.js code, which keeps the Airtable API token out of the client.

---

## Integration Pattern

This project uses a common integration pattern:

```text
Frontend UI → Server-side API Layer → External SaaS Platform
```

This pattern is useful when building customer-facing workflow tools because it allows the implementation team to:

- Validate data before it reaches the external system
- Protect private API credentials
- Add business logic in one central place
- Replace or extend the external system later
