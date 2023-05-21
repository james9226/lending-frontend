import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json()


  if (body.preference == "enabled") {
    return NextResponse.json({ message: 'Preference saved.' }, {
      status: 200,
      headers: { "Content-Type": "application/json", 'Set-Cookie':"lendotopiaCookiePreferences=enabled; Max-Age=31536000; Path=/; HttpOnly"},
    });
    }

  return NextResponse.json({ message: 'Preference ignored.' }, {
    status: 200,
  });
}

// export async function GET(request: NextRequest) {
//       const cookie = request.cookies.get('cookiePreferences');
//       console.log('Cookie GET')
//       console.log(cookie)
//       if (cookie) {
//         return NextResponse.json({ preference: cookie.value });
//       } else {
//         return NextResponse.json({ message: 'No preference set.' });
//       }
// }
