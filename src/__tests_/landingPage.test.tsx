import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import HeroButtons from "@/components/HeroButtons";
import { hero } from "@/data/hero";

test("Quando o usuário clica nos botões o click deve funcionar ", async () => {
  render(<HeroButtons />);

  const buttonOne = screen.getByText(hero.buttonOne);
  fireEvent.click(buttonOne);

  const buttonTwo = screen.getByText(hero.buttonTwo);
  fireEvent.click(buttonTwo);
});
