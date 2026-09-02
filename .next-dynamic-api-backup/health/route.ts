export async function GET() {
  return Response.json(
    {
      ok: true,
      service: "hoca-ile-borsa",
      status: "healthy",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}