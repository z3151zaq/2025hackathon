import { GET } from "./route";

describe("GET /api/hello", () => {
  it("should return a greeting message", async () => {
    // Simulate a NextRequest (can be improved with actual mocks)
    const req = {} as any;
    const res = await GET(req);
    const data = await res.json();
    expect(data).toEqual({ message: "Hello from API!" });
  });
}); 