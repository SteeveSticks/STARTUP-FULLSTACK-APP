export async function register() {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export async function onRequestError(
  error: unknown,
  request: {
    path: string;
    method: string;
    headers: Record<string, string | string[] | undefined>;
  },
  errorContext: {
    routerKind: string;
    routePath: string;
    routeType: string;
  }
) {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const Sentry = await import("@sentry/nextjs");
  Sentry.captureRequestError(error, request, errorContext);
}
