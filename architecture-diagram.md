# Architecture Diagram

```text
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       ▼
┌──────────────────────┐
│ Registration Form    │
│ Next.js Frontend     │
└──────┬───────────────┘
       │ POST
       ▼
┌──────────────────────┐
│ API Route            │
│ /api/registrations   │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Airtable API         │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Airtable Database    │
│ Attendees Table      │
└──────┬───────────────┘
       │
       │ GET
       ▼
┌──────────────────────┐
│ Dashboard            │
│ Next.js Frontend     │
└──────────────────────┘
```

## Responsibilities

### Registration Form

- Collect user information
- Validate user input
- Submit registration request

### API Route

- Validate incoming requests
- Generate confirmation messages
- Authenticate with Airtable
- Create registration records

### Airtable

- System of record
- Store attendee registrations

### Dashboard

- Retrieve registration records
- Display attendee information
- Display business metrics
