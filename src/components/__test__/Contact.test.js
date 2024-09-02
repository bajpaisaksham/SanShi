import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test Case", () => {


  beforeAll(() => {
    console.log("Before All")
  });

  beforeEach(() => {
    console.log("Before Each")
  });

  afterAll(() => {
    console.log("After All")
  });

  afterEach(() => {
    console.log("After Each")
  });

  it("Should load Contact Us component", () => {
    render(<Contact />);
    
    const heading =screen.getByText("Contact Us")
    
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  
  it("Should load Button Contact Us component", () => {
    render(<Contact />);
    
    const heading =screen.getByRole("button")
    
  
    expect(heading).toBeInTheDocument();
  });
  
  it("Should load Button Contact Us component", () => {
    render(<Contact />);
    
    const inputName =screen.getByPlaceholderText("Your Name")
    
    
    expect(inputName).toBeInTheDocument();
  });
  
  it("Should load Button Contact Us component", () => {
    render(<Contact />);
    
    const inputBoxes =screen.getAllByRole("textbox")
    
    
    expect(inputBoxes.length).toBe(2);
  });
});