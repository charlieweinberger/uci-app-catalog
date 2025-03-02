import { Resend } from "resend";
import EmailTemplate from "@/app/api/send/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  
  const feedback = await request.json();
  console.log("feedback: ", feedback);

  try {
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["charlieweinberger05@gmail.com"],
      subject: `New feedback for UCI App Catalog`,
      react: EmailTemplate(feedback),
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