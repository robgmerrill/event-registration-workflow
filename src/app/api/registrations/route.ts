import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.attendeeName?.trim()) {
    return NextResponse.json(
      { error: "Attendee name is required" },
      { status: 400 },
    );
  }

  if (!body.email?.trim()) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!body.email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 },
    );
  }

  const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;

  const response = await fetch(airtableUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            "Attendee Name": body.attendeeName,
            Email: body.email,
            "Event Name": body.eventName,
            Status: "Registered",
            "Confirmation Message": `Thanks ${body.attendeeName}, you're registered for ${body.eventName}.`,
          },
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.log("Airtable error:", data);

    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: response.status },
    );
  }

  return NextResponse.json({
    success: true,
    data,
  });
}
