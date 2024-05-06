import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { Pill } from "./index";

describe('Card test:', () => {
  afterEach(cleanup);

  it('should render component', () => {
    render(<Pill variant="default" />);
  });

  it('should render a children', () => {
    render(<Pill variant="default">Hello world!</Pill>);
    screen.getByText('Hello world!');
  });
});