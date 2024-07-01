import { formatTime } from "../formatTime";

describe("formatTime", () => {
  it("should correctly extract and format time from a UTC date string", () => {
    expect(formatTime("2023-03-15T12:30:00.000Z")).toBe("12:30");
    expect(formatTime("2023-03-15T05:05:00.000Z")).toBe("05:05");
    expect(formatTime("2023-03-15T23:59:00.000Z")).toBe("23:59");
    expect(formatTime("2023-03-15T00:00:00.000Z")).toBe("00:00");
  });
});
