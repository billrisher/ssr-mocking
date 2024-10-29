import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("*/mock/public/users", () => {
    return HttpResponse.json([
      { id: 1, firstname: "Darius" },
      { id: 2, firstname: "Kasper" },
    ]);
  }),
  http.get("*/mock/public/coupons", () => {
    return HttpResponse.json([
      { id: 1, code: "BIGBUCKS" },
      { id: 2, code: "BONANZA5" },
    ]);
  }),
];
