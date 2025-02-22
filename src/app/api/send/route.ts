import { Resend } from "resend";
import EmailTemplate from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  
  const suggestion = await request.json();
  console.log("suggestion: ", suggestion);

  try {
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["charlieweinberger05@gmail.com"],
      subject: `New website suggestion for UCI App Catalog: ${suggestion.websiteName}`,
      react: EmailTemplate(suggestion),
    });
    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }

}