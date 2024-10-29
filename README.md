# Next.JS + Cypress + MSW

This is a Next.JS App with Cypress and Mock Service Worker running as well.

The purpose of this repository is to research how to get MSW data applied to server-side fetch requests.

## Project Structure / File Breakdown

- `/cypress`: home to default cypress configurations as well as the e2e tests that are being run to confirm that the mocks are working in an E2E testing environment.
- `/mocks`: This is where the code to spin up MSW in the browser and node environments exists (in `browser.ts` and `server.ts` respectively). Also home to the two handlers that are being used in the project.
- `/src/app`: Source folder for Next:
  - `layout.tsx`: This is where the server-side mocking is being applied. If the runtime is 'nodejs' and the env variable `NEXT_PUBLIC_API_MOCKING` is set to `enabled`, we spin up MSW. Additionally, we are applying the `MswBrowserProvider` component in this file, in order to conditionally run MSW in the browser.
  - `page.tsx`: This is where both the server-side requests _and_ client-side requests are being rendered. The request to get users is being made here.
  - `msw-browser-provider.tsx`: This is a wrapper around almost all of our app that renders a 'Suspense' boundary until the browser-side MSW is running, or is deemed unneeded.
  - `ClientSide.tsx`: This is a client-side component that handles the asynchronous fetching of 'coupon' mock data. It's a pretty straightforward component with a simple `useEffect` that fetches and sets coupon data.

## Running

In order to have mocks applied, the environment variable `NEXT_PUBLIC_API_MOCKING` needs to be set to `enabled`. If this is not set, mocks will **not** be applied.

Inspired by this PR: https://github.com/mswjs/examples/pull/101
