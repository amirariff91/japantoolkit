import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body as { email?: string; source?: string };

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Add contact to Resend audience
    const contactRes = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    // 409 = already exists — treat as success
    if (contactRes.error && (contactRes.error as { statusCode?: number }).statusCode !== 409) {
      console.error("Resend contact error:", contactRes.error);
      return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
    }

    // Send welcome email
    await resend.emails.send({
      from: "Japan Toolkit <hello@japantoolkit.com>",
      to: email,
      subject: "Your Japan Trip Checklist 🇯🇵",
      text: [
        "Thanks for signing up!",
        "",
        "Your Japan Trip Checklist is ready — you can view it here:",
        "https://japantoolkit.com/guides/japan-trip-checklist",
        "",
        "The checklist covers everything from pre-trip essentials to day-1 logistics:",
        "• Pre-trip essentials (passport, visa, insurance)",
        "• Money & payments (7-Eleven ATMs, IC cards, Wise)",
        "• Transport (JR Pass, Shinkansen, IC cards)",
        "• Phone & data (eSIM vs pocket Wi-Fi)",
        "• Packing (what to bring, what to skip)",
        "• Day 1 in Japan (exactly what to do on arrival)",
        "",
        "Save it to your phone or print it before you fly.",
        "",
        "Safe travels,",
        "Yiyan @ Japan Toolkit",
        "",
        `(Signed up via: ${source ?? "website"})`,
        "",
        "Unsubscribe: reply to this email with 'unsubscribe' in the subject.",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
