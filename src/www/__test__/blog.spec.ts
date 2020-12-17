import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRenderer } from "www/AppRenderer";
import { Injector } from "www/injector";
import { configureTestInjector } from "./configureTestInjector";
import { MockApiRest } from "./MockApiRest";

let mockApiRest: MockApiRest;
beforeEach(() => {
  const injector = new Injector().configure(configureTestInjector);
  mockApiRest = injector.get(MockApiRest);
  render(injector.get(AppRenderer).render());
});

const BLOG_LIST = [
  { id: "p1", title: "Let there be light" },
  { id: "p2", title: "Your own star" },
  { id: "p3", title: "Exterminate" },
];
const POST_P1 = {
  id: "p1",
  body: "# The title\nThe final game",
};

test("shows the blog list", async () => {
  goToBlogView();
  await mockRespondAPI("GET", "/api/v1/posts", { list: BLOG_LIST });

  expect(screen.getByText("Let there be light")).toBeInTheDocument();
  expect(screen.getByText("Your own star")).toBeInTheDocument();
  expect(screen.getByText("Exterminate")).toBeInTheDocument();
});

test("shows the post content", async () => {
  await goToBlogPostView("Let there be light");
  await mockRespondAPI("GET", "/api/v1/posts/p1", POST_P1);

  expect(screen.getByText("The title")).toBeInTheDocument();
  expect(screen.getByText("The final game")).toBeInTheDocument();
});

async function mockRespondAPI(method: string, url: string, bodyResponse: any) {
  const last = await mockApiRest.popLastInteraction(() => `${method} ${url}`);

  expect(last.request.method).toEqual(method);
  expect(last.request.url).toEqual(url);

  last.resolve(200, bodyResponse);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
}

function goToBlogView() {
  const button = screen.getByRole("button", { name: /blog/i });
  userEvent.click(button);
}

async function goToBlogPostView(label: string) {
  goToBlogView();
  await mockRespondAPI("GET", "/api/v1/posts", { list: BLOG_LIST });

  const button = screen.getByRole("button", { name: label });
  userEvent.click(button);
}

process.on("uncaughtException", function (err) {
  // handle the error safely
  console.log(err);
});
process.on("unhandledRejection", function (err) {
  // handle the error safely
  console.log(err);
});
