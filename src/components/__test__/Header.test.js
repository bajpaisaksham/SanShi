import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it ("Should render Header Componenet with a login button", () =>{
  render(
      <BrowserRouter>
      <Provider store={appStore}>
          <Header/>
      </Provider>
      </BrowserRouter>
  );
  
  const loginButton = screen.getByRole("button", {name: "Login"});
  
  //const loginButton = screen.getByText("Login");
  
  expect (loginButton).toBeInTheDocument();
});
  
// it ("Should render Header Componenet with a Cart items 0", () =>{
//   render(
//       <BrowserRouter>
//       <Provider store={appStore}>
//           <Header/>
//       </Provider>
//       </BrowserRouter>
//   );
  
//   const cartItems = screen.getByText("Cart - (0items)");
  
  
//   expect (cartItems).toBeInTheDocument();
// });


// it ("Should render Header Componenet with a Cart item ", () =>{
//   render(
//       <BrowserRouter>
//       <Provider store={appStore}>
//           <Header/>
//       </Provider>
//       </BrowserRouter>
//   );
  
//   const cartItems = screen.getByText(/Cart/);
  
//   expect (cartItems).toBeInTheDocument();
// });

// it ("Should render Header Componenet with a Cart item ", () =>{
//   render(
//       <BrowserRouter>
//       <Provider store={appStore}>
//           <Header/>
//       </Provider>
//       </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", {name: "Login"});

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", {name: "Login"});
  
//   expect(logoutButton).toBeInTheDocument();
// });