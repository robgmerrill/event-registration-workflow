"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("Intro to AI");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!attendeeName.trim()) {
      setMessage("Please enter an attendee name.");
      return;
    }

    if (!email.trim()) {
      setMessage("Please enter an email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("Submitting registration...");

    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendeeName,
        email,
        eventName,
      }),
    });

    if (response.ok) {
      setMessage("Registration submitted successfully!");
      setAttendeeName("");
      setEmail("");
      setEventName("Intro to AI");
    } else {
      setMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: 40,
        fontFamily: "Arial",
        color: "#111827",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <strong>EventFlow Demo</strong>

        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/">Case Study</Link>
          <Link href="/register">Register</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <section
        style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ marginBottom: 8 }}>Event Registration</h1>

        <p style={{ color: "#6b7280", marginBottom: 24 }}>
          Register for an upcoming training event. Submissions are stored in
          Airtable and displayed on the dashboard.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <label>
            Attendee Name
            <input
              placeholder="Sarah Johnson"
              value={attendeeName}
              onChange={(event) => setAttendeeName(event.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                border: "1px solid #d1d5db",
                borderRadius: 8,
              }}
            />
          </label>

          <label>
            Email
            <input
              placeholder="sarah@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                border: "1px solid #d1d5db",
                borderRadius: 8,
              }}
            />
          </label>

          <label>
            Event
            <select
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                border: "1px solid #d1d5db",
                borderRadius: 8,
              }}
            >
              <option>Intro to AI</option>
              <option>Modern JavaScript</option>
              <option>Cloud Fundamentals</option>
            </select>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: 8,
              padding: 12,
              border: "none",
              borderRadius: 8,
              background: isSubmitting ? "#93c5fd" : "#2563eb",
              color: "white",
              fontWeight: 700,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: 20,
              padding: 12,
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: 8,
              color: "#1e40af",
            }}
          >
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
