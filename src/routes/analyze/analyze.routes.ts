import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";

export const analyze = createRoute({
  path: "/analyze",
  description: "analyze data or text provided in the request.",
  method: "post",
  tags: ["Analyze"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            text: z.string().min(1),
          }),
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: " Analyze text based on different algorithmic rules",
    },
    [HttpStatusCodes.BAD_REQUEST]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: "Bad request",
    },
  },
});

export type AnalyzeRoute = typeof analyze;
