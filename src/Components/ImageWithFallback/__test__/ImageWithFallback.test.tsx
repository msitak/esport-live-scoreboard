import React from "react";
import { render } from "@testing-library/react";
import ImageWithFallback from "../ImageWithFallback";

describe("ImageWithFallback", () => {
  it("renders the image with the correct src", () => {
    const testSrc = "test-image.jpg";
    const { getByAltText } = render(
      <ImageWithFallback
        src={testSrc}
        fallbackSrc="fallback-image.jpg"
        alt="Test"
      />,
    );
    expect(getByAltText("Test").src).toContain(testSrc);
  });

  it("renders the fallback image when the main image fails to load", () => {
    const testSrc = "nonexistent-image.jpg";
    const fallbackSrc = "fallback-image.jpg";
    const { getByAltText, rerender } = render(
      <ImageWithFallback src={testSrc} fallbackSrc={fallbackSrc} alt="Test" />,
    );

    const image = getByAltText("Test");

    image.dispatchEvent(new Event("error"));

    rerender(
      <ImageWithFallback src={testSrc} fallbackSrc={fallbackSrc} alt="Test" />,
    );

    expect(image.src).toContain(fallbackSrc);
  });
});
