import React  from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils"



global.fetch = jest.fn(() =>{
     return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
     })
});

it ("Should render the Body Component with Search", async () =>{
  await act (async () =>
    render(
  <BrowserRouter>
  <Body />
  </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);
  
  // const searchBtn = screen.getByRole("button", {name: "Search"});
 
  // const searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, {target:{value: "burger"}});

  // fireEvent.click(searchBtn)

  // const cards = screen.getAllByTestId("resCard");

  // expect(cards.length).toBe(5)
});