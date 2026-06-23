# Lessons Learned

## Overview

This project simulated a lightweight implementation consulting engagement for a professional training company.

The goal was to turn a manual event registration process into a simple workflow automation system using Next.js and Airtable.

---

## Lesson 1: Start with the Customer Problem

The most important part of the project was not the technology choice. It was understanding the customer's workflow.

The customer did not primarily need a custom application. They needed to reduce manual work, standardize communication, and gain better visibility into registrations.

Starting with the business problem helped keep the solution focused and prevented unnecessary complexity.

---

## Lesson 2: Simple Tools Can Be the Right Tools

Airtable was not selected because it is the most powerful database option. It was selected because it matched the customer's operational needs.

For a small team without dedicated IT support, Airtable provides a useful balance:

- Familiar spreadsheet-style interface
- API access
- Low maintenance
- Easy record review

This reinforced the idea that the best technical solution is the one that fits the customer's context.

---

## Lesson 3: Protect Credentials with a Server-side Layer

One of the most important architecture decisions was placing a server-side API route between the browser and Airtable.

This kept the Airtable API token out of the browser and created a safe place for validation and business logic.

This pattern is useful in many customer-facing implementations:

```text
Frontend UI → Server-side API Layer → External SaaS Platform
```

---

## Lesson 4: Requirements Should Guide Scope

It would have been easy to add authentication, email delivery, advanced reporting, or a relational database.

Those features may be useful later, but they were not required for the first version.

The initial version focused on the core workflow:

1. Capture registration
2. Validate input
3. Store record
4. Generate confirmation message
5. Display dashboard visibility

This kept the project aligned with the customer's immediate needs.

---

## Lesson 5: Documentation Makes the Project Stronger

The consulting documents made the project more complete than a typical coding demo.

The documentation explains:

- Who the customer is
- What problem they had
- What requirements were identified
- Why the solution was selected
- How the system works
- What tradeoffs were made

This makes the project easier to discuss with both technical and non-technical audiences.

---

## Lesson 6: A Working Demo Is More Powerful When Paired with a Story

The application demonstrates the workflow, but the case study and supporting documents explain the business value.

Together, the software and documentation show a complete implementation story:

```text
Problem → Discovery → Requirements → Architecture → Build → Outcome
```

That is stronger than showing code alone.

---

## What I Would Improve Next

Future improvements could include:

- Adding authentication to protect the dashboard
- Integrating an email provider to send confirmation messages
- Adding event capacity limits
- Adding search and filtering to the dashboard
- Improving error handling and logging
- Creating a more polished visual design
- Adding automated tests
- Supporting registration status updates

---

## Final Reflection

This project helped demonstrate how a customer-facing technical professional thinks through an implementation.

The goal was not to build the most complex application possible. The goal was to solve a clearly defined customer problem with a practical, maintainable solution.
