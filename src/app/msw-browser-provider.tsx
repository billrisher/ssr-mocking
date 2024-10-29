"use client";

import { Suspense, use } from "react";

const mockingEnabledPromise =
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? import("../../mocks/browser").then(async ({ worker }) => {
        await worker.start();
      })
    : Promise.resolve();

export default function MswBrowserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <MswProviderWrapper>{children}</MswProviderWrapper>
    </Suspense>
  );
}

function MswProviderWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  use(mockingEnabledPromise);
  return children;
}
