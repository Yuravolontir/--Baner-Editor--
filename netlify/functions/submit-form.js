// netlify/functions/submit-form.js

// This is a basic function to show it's working.
// In a real-world scenario, you would use a service like Nodemailer to send an email
// or connect to a database.
exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("Form data received:", data);

    // Here you would process the data, for example:
    // - Send an email using Nodemailer
    // - Save to a database (FaunaDB, Firebase, etc.)
    // - Post to a Slack channel

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" })
    };
  } catch (error) {
    console.error("Error processing form submission:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error submitting form." })
    };
  }
};
