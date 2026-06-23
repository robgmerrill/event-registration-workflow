# Business Requirements

## Functional Requirements

### BR-001: Capture Registration Information

The system shall allow an attendee to submit:

- Attendee Name
- Email Address
- Event Name

---

### BR-002: Validate User Input

The system shall validate that:

- Attendee Name is required.
- Email Address is required.
- Email Address is in a valid format.

---

### BR-003: Store Registration

The system shall create a registration record in Airtable after successful validation.

---

### BR-004: Registration Status

Every new registration shall be assigned a default status of:

**Registered**

---

### BR-005: Confirmation Message

The system shall automatically generate a confirmation message for every registration.

---

### BR-006: Dashboard

Operations staff shall be able to view all registrations from a dashboard.

---

### BR-007: Operational Metrics

The dashboard shall display:

- Total registrations
- Number of unique events

---

## Non-Functional Requirements

### Simplicity

The solution should be easy for non-technical staff to use.

---

### Cost

The solution should use low-cost SaaS services.

---

### Security

API credentials shall not be exposed to users.

---

### Maintainability

The solution should be simple enough that another developer can understand and extend it.

---

### Scalability

The design should support future integrations with CRM systems, email providers, and authentication services.
