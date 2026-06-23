# Architecture

## Overview

This project demonstrates a simple event registration workflow. A user submits a registration through a web form, the application sends the data to a server-side API route, and the registration is stored in Airtable.

## Data Flow

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
Dashboard
```
