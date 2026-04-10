export async function GET() {
  const content = [
    "Contact: mailto:destekhocaileborsa@gmail.com",
    "Expires: 2027-04-10T23:59:59.000Z",
    "Preferred-Languages: tr, en",
    "Canonical: https://www.hocaileborsa.com/.well-known/security.txt",
    "Policy: https://www.hocaileborsa.com/iletisim",
  ].join("\n");

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}