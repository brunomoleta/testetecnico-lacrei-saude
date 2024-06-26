import React from "react";
import { footerData } from "@/data/footer";
import {
  Categories,
  Category,
  Heading,
  Item,
  Wrapper,
} from "@/components/Footer/CategoryFooter/CategoryFooter.style";
import Link from "next/link";

function CategoryFooter() {
  return (
    <Wrapper>
      {footerData.items.map((item, index) => (
        <Categories key={index}>
          <Heading>{item.heading}</Heading>
          <Category>
            {item.items.map((item, index) => (
              <Item key={index}>
                <Link href="/">{item}</Link>
              </Item>
            ))}
          </Category>
        </Categories>
      ))}
    </Wrapper>
  );
}

export default CategoryFooter;
