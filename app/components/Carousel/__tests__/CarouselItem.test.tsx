import { render, screen } from "@testing-library/react";
import { CarouselItem } from "../CarouselItem";
import "@/__mocks__/intersectionObserverMock";

describe("CarouselItem", () => {
  beforeEach(() => {
    const div1 = document.createElement("div");
    div1.className = "swiper-button-prev";
    document.body.appendChild(div1);

    const div2 = document.createElement("div");
    div2.className = "swiper-button-next";
    document.body.appendChild(div2);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render heroImg correctly", () => {
    render(
      <CarouselItem
        heroImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_InvincibleS2_CleanSlate/1314776a-52e3-4f13-a1be-ac1ead2d881b._UR3840,1440_AGaverage_SX1440_FMwebp_.jpeg"
        titleImg="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_InvincibleS2_CleanSlate/29597cda-e562-47d7-8d07-dbe80e80e3e3._AC_SX1000_FMwebp_.png"
        mRating="https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/adjctq/a18._SY64_FMpng_.png"
      />
    );

    const elem = screen.getByAltText("Image title");

    expect(elem).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fsonata-images-prod%2FSVOD_ROW_InvincibleS2_CleanSlate%2F1314776a-52e3-4f13-a1be-ac1ead2d881b._UR3840%2C1440_AGaverage_SX1440_FMwebp_.jpeg&w=3840&q=100"
    );
  });
});
