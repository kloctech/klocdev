import { NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyto4gJ30RaReyEeuXb7Qeepy4AVHDXK21G6FxGv_GcRiug3tGoVHM7NmQv7YDiYwWi/exec';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.details) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and project details are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare payload
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      website: data.website || '',
      services: Array.isArray(data.services) ? data.services : [],
      budget: data.budget || '',
      timeline: data.timeline || '',
      details: data.details,
      consent: data.consent || false,
    };

    // Fire and forget - don't wait for Google Sheets response
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(err => {
      console.error('Failed to send to Google Sheets:', err);
    });

    // Respond immediately
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully!'
    });

  } catch (error) {
    console.error('Form submission error:', error);

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
