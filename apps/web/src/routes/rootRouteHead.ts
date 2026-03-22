import { APP_DISPLAY_NAME } from "../branding";

export function getRootRouteHead() {
  return {
    meta: [{ title: APP_DISPLAY_NAME }],
  };
}
