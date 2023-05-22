import React, { useCallback, useEffect, useState } from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "./App";
import { setUsers } from "./redux/user/userSlice";

const mockStore = configureMockStore();

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

describe("App", () => {
  it("dispatches users to the store after successful API call", async () => {
    const store = mockStore({});

    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, users);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    // Mock successful request
    const actions = store.getActions();
    expect(actions).toContainEqual(setUsers(users));
  });

  it("shows error message after failed API call", async () => {
    const store = mockStore({});
    const errorCode = 500;
    // Mock failed request
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(errorCode);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    const failedMessage = screen.getByText(
      "Request failed with status code " + errorCode
    );
    expect(failedMessage.innerHTML).toEqual(
      `Request failed with status code ${errorCode}`
    );
  });
});
