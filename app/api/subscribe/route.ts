import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
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

    // 409 = already exists — treat as success but skip welcome email (already sent)
    if (contactRes.error) {
      const statusCode = (contactRes.error as { statusCode?: number }).statusCode;
      if (statusCode === 409) {
        return NextResponse.json({ success: true });
      }
      console.error("Resend contact error:", contactRes.error);
      return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
    }

    // Send welcome email (new subscribers only)
    const htmlEmail = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>10 Weeks to Japan: Week 1 — Your Game Plan</title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<!-- Preview text (hidden) -->
<div style="display:none;max-height:0;overflow:hidden;color:#f5f5f5;font-size:1px;">You signed up. Now let's actually plan this trip.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:32px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="padding:32px 40px 24px;border-bottom:3px solid #C0392B;">
            <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C0392B;">10 Weeks to Japan</p>
            <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#111111;line-height:1.3;">Week 1: Your Game Plan</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">

            <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#222222;">
              Most people waste their first week of Japan planning.<br>
              They spend hours on hotel reviews and restaurant lists — before they've even picked dates or set a budget.
            </p>

            <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#222222;">
              Don't do that.
            </p>

            <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#222222;">
              Foundations first. Here's your Week 1 checklist:
            </p>

            <!-- Action 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
              <tr>
                <td style="padding:16px 20px;background-color:#fafafa;border-left:3px solid #C0392B;border-radius:0 4px 4px 0;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#C0392B;">Action 1</p>
                  <p style="margin:0 0 6px;font-size:16px;font-weight:700;color:#111111;">Lock in your dates</p>
                  <p style="margin:0;font-size:14px;line-height:1.5;color:#555555;">Cherry blossom season (late March–April) and autumn foliage (November) book out 6+ months ahead. Know when you're going before you plan anything else.</p>
                </td>
              </tr>
            </table>

            <!-- Action 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
              <tr>
                <td style="padding:16px 20px;background-color:#fafafa;border-left:3px solid #C0392B;border-radius:0 4px 4px 0;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#C0392B;">Action 2</p>
                  <p style="margin:0 0 6px;font-size:16px;font-weight:700;color:#111111;">Set a real budget</p>
                  <p style="margin:0;font-size:14px;line-height:1.5;color:#555555;">Not a vague "around $3,000" — an actual daily breakdown. Japan is cheaper than people think if you plan it right, and way more expensive if you don't.</p>
                </td>
              </tr>
            </table>

            <!-- Action 3 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:16px 20px;background-color:#fafafa;border-left:3px solid #C0392B;border-radius:0 4px 4px 0;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#C0392B;">Action 3</p>
                  <p style="margin:0 0 6px;font-size:16px;font-weight:700;color:#111111;">Book flights before hotels</p>
                  <p style="margin:0;font-size:14px;line-height:1.5;color:#555555;">Your flight dates anchor everything. Hotels, passes, reservations — none of it matters until you have flights locked in. This is the order 95% of people get wrong.</p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td align="center">
                  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#222222;text-align:center;">
                    Start with your budget. Use the estimator to get a realistic number before you commit to anything.
                  </p>
                  <a href="https://japantoolkit.cepathosting.com/tools/budget-estimator" style="display:inline-block;background-color:#C0392B;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:4px;letter-spacing:0.3px;">Calculate Your Japan Budget →</a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
              <tr>
                <td style="border-top:1px solid #e8e8e8;"></td>
              </tr>
            </table>

            <!-- Week 2 tease -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:20px;background-color:#fff8f8;border-radius:6px;border:1px solid #f0d0d0;">
                  <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#C0392B;">Coming Next Week</p>
                  <p style="margin:0;font-size:15px;line-height:1.6;color:#333333;font-style:italic;">"Getting around Japan without a ¥70,000 JR Pass mistake." — We'll break down exactly who should buy the JR Pass and who is wasting money on it.</p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 6px;font-size:15px;line-height:1.6;color:#222222;">Talk soon,</p>
            <p style="margin:0;font-size:15px;font-weight:700;color:#111111;">Yiyan</p>
            <p style="margin:0;font-size:13px;color:#888888;">Japan Toolkit</p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background-color:#f9f9f9;border-top:1px solid #e8e8e8;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:#999999;text-align:center;">
              You signed up at Japan Toolkit${source ? ` via ${source}` : ""}.<br>
              To unsubscribe, reply with "unsubscribe" in the subject line.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

    const textEmail = [
      "10 WEEKS TO JAPAN — WEEK 1: YOUR GAME PLAN",
      "",
      "Most people waste their first week of Japan planning.",
      "They spend hours on hotel reviews before they've even picked dates or set a budget.",
      "",
      "Don't do that. Foundations first.",
      "",
      "--- ACTION 1: Lock in your dates ---",
      "Cherry blossom season (late March–April) and autumn foliage (November) book out 6+ months ahead. Know when you're going before you plan anything else.",
      "",
      "--- ACTION 2: Set a real budget ---",
      "Not a vague \"around $3,000\" — an actual daily breakdown. Japan is cheaper than people think if you plan it right, and way more expensive if you don't.",
      "",
      "--- ACTION 3: Book flights before hotels ---",
      "Your flight dates anchor everything. Hotels, passes, reservations — none of it matters until you have flights locked in. This is the order 95% of people get wrong.",
      "",
      "Start with your budget. Use the estimator to get a realistic number before you commit to anything:",
      "https://japantoolkit.cepathosting.com/tools/budget-estimator",
      "",
      "---",
      "",
      "COMING NEXT WEEK:",
      "Getting around Japan without a ¥70,000 JR Pass mistake. We'll break down exactly who should buy the JR Pass and who is wasting money on it.",
      "",
      "Talk soon,",
      "Yiyan",
      "Japan Toolkit",
      "",
      `You signed up at Japan Toolkit${source ? ` via ${source}` : ""}.`,
      "To unsubscribe, reply with \"unsubscribe\" in the subject line.",
    ].join("\n");

    await resend.emails.send({
      from: "Yiyan from Japan Toolkit <hello@japantoolkit.com>",
      to: email,
      subject: "10 Weeks to Japan: Week 1 — Your Game Plan 🇯🇵",
      html: htmlEmail,
      text: textEmail,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
