"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --header-background: linear-gradient(rgb(245, 255, 251) 31.04%, rgb(255, 255, 255) 100%);
        --gradient-00: linear-gradient(105.43deg, rgb(1, 131, 131) 14.39%, rgb(1, 70, 135) 84.69%);
        --emerald-10: hsl(164deg, 48%, 91%);
        --emerald-20: hsl(160deg, 41%, 79%);
        --emerald-30: hsl(160deg, 41%, 65%);
        --emerald-40: hsl(160deg, 40%, 51%);
        --emerald-60: hsl(163deg, 99%, 27%);
        --emerald-70: hsl(163deg, 98%, 25%);
        --emerald-80: hsl(163deg, 100%, 23%);
        --emerald-90: hsl(163deg, 97%, 15%);
        
        --max-inline-size:55ch;
        --art-height: 750px;
    }

    /* Resets from Josh Cameau */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    /*
        2. Remove default margin
      */
    * {
        margin: 0;
    }

    /*
        3. Allow percentage-based heights in the application
      */
    html,
    body {
        height: 100%;
        font-family: 'Nunito Variable', sans-serif;
        
    }

    ol {
        margin: 0;
        padding: 0
    }

    body {
        line-height: 150%;
        -webkit-font-smoothing: antialiased;
        width: 100%;
    }

    /*
        6. Improve media defaults
      */
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    /*
        7. Remove built-in form typography styles
      */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    input:disabled {
        opacity: 1;
        color: inherit;
    }

    /*
        8. Avoid text overflows
      */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    /*
        9. Create a root stacking context
      */

    /* --------------- Resets from Josh Cameau end here */
    figcaption {
        display: none;
    }

    button,
    input[type="submit"],
    select {
        border: initial;
        font-family: inherit;
        color: inherit;
        background-color: inherit;
        padding: 0;
        margin: 0;

    }

    button,
    input[type="submit"],
    a {
        cursor: pointer;
        border-radius: 4px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-style: inherit;
        font-weight: inherit;
    }

    h1 {
        font-size: inherit;
        font-weight: inherit;
    }

    ul {
        padding-left: 0;
    }

    li {
        list-style: none;
    }

    strong {
        font-weight: unset;
    }

    address {
        font-style: normal;
    }

    em {
        text-decoration: none;
        font-style: normal;
    }

    html {
        scroll-behavior: smooth;
    }

    * {
        max-inline-size: var(--max-inline-size);

        &::selection {
            background: var(--emerald-20);
        }
    }

    div,
    header,
    footer,
    main,
    html,
    body,
    ul,
    form,
    input[type="text"],
    button,
    summary,
    section,
    article,
    code,
    pre,
    div[data-orientation="vertical"], hr {
        max-inline-size: none;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    input, textarea, select, button, hr {
        border: 1.5px transparent;
    }

    textarea {
        resize: vertical;
    }

    optgroup {
        text-decoration: inherit;
        font-style: normal;
    }

    li {
        color: var(--color-text);
    }

    a:disabled, button:disabled {
        opacity: .6;
    }

    a, button {
        border: 3px solid var(--color-background);
        outline: 2px solid transparent;
        @media (prefers-reduced-motion: no-preference) {
            transition: border-color 500ms ease-out;
        }
    }

    a {
        padding: 8px;
    }

    a:focus, button:focus, a:hover, button:hover {
        transition: border-color 200ms ease-in;
        //border: 3px solid var(--teal-primary);
        outline: 2px solid transparent;
    }

    p {
        overflow-wrap: break-word;
        hyphens: auto;
    }
`;

export default GlobalStyles;
