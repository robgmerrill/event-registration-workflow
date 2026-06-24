import Link from "next/link";

type AirtableRecord = {
  id: string;
  fields: {
    "Attendee Name"?: string;
    Email?: string;
    "Event Name"?: string;
    Status?: string;
    "Confirmation Message"?: string;
  };
};

async function getRegistrations() {
  const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;

  const response = await fetch(airtableUrl, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  return data.records as AirtableRecord[];
}

export default async function DashboardPage() {
  const registrations = await getRegistrations();

  const totalRegistrations = registrations.length;

  const uniqueEvents = new Set(
    registrations.map((registration) => registration.fields["Event Name"]),
  ).size;

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
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ marginBottom: 8 }}>Registration Dashboard</h1>

        <p style={{ color: "#6b7280", marginBottom: 24 }}>
          View registrations stored in Airtable.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={metricCardStyle}>
            <div style={metricLabelStyle}>Total Registrations</div>
            <div style={metricValueStyle}>{totalRegistrations}</div>
          </div>

          <div style={metricCardStyle}>
            <div style={metricLabelStyle}>Unique Events</div>
            <div style={metricValueStyle}>{uniqueEvents}</div>
          </div>
        </div>

        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Attendee</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Event</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Confirmation Message</th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((record) => (
              <tr key={record.id}>
                <td style={tableCellStyle}>{record.fields["Attendee Name"]}</td>
                <td style={tableCellStyle}>{record.fields.Email}</td>
                <td style={tableCellStyle}>{record.fields["Event Name"]}</td>
                <td style={tableCellStyle}>{record.fields.Status}</td>
                <td style={tableCellStyle}>
                  {record.fields["Confirmation Message"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

const metricCardStyle = {
  flex: 1,
  background: "#f8fafc",
  padding: 16,
  borderRadius: 8,
  border: "1px solid #e5e7eb",
};

const metricLabelStyle = {
  fontSize: 12,
  color: "#6b7280",
};

const metricValueStyle = {
  fontSize: 24,
  fontWeight: 700,
};

const tableHeaderStyle = {
  textAlign: "left" as const,
  borderBottom: "1px solid #e5e7eb",
  padding: 12,
  fontSize: 14,
  color: "#374151",
};

const tableCellStyle = {
  borderBottom: "1px solid #f3f4f6",
  padding: 12,
  fontSize: 14,
};
