import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";

const server = setupServer(
  rest.get("http://localhost:4000/feed", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(["Lek CodeMobiles", "Angular", "ReactJS", "VueJS", "Flutter"])
    );
  })
);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test("renders learn react link", async () => {
  render(<App />);

  await act(async () => {
    await new Promise((r) => setTimeout(r, 100));
  });

  // screen.debug();
  const linkElement = screen.getByText(
    '["Lek CodeMobiles","Angular","ReactJS","VueJS","Flutter"]'
  );
  expect(linkElement).toBeInTheDocument();
});
