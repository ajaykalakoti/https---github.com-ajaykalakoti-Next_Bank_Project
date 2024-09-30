// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// // A faulty API route to test Sentry's error monitoring
// export function GET() {
//   throw new Error("Sentry Example API Route Error");
//   return NextResponse.json({ data: "Testing Sentry Error..." });
// }
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export async function GET() {
  const isTestingError = true; // Set this flag to control error testing

  try {
    if (isTestingError) {
      throw new Error("Sentry Example API Route Error");
    }

    return NextResponse.json({ data: "Testing Sentry Error..." });
  } catch (error) {
    console.error("Error caught in API route:", error);

    // If you're using Sentry or any other error monitoring tool, you can log the error here
    // Sentry.captureException(error);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
