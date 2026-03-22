import { describe, expect, it } from "vitest";

import { APP_DISPLAY_NAME } from "../branding";
import { getRootRouteHead } from "./rootRouteHead";

describe("getRootRouteHead", () => {
  it("uses TanStack Router title metadata instead of a title-named meta tag", () => {
    expect(getRootRouteHead()).toEqual({
      meta: [{ title: APP_DISPLAY_NAME }],
    });
  });
});
