React + TypeScript + Vite for the Exchange Currency Form
--------------------------------------------------------

This document provides a summary of the project structure and functionality for an exchange currency form built with React, TypeScript, and Vite.

### Project Structure

The project is organized into the following folders:

-   **`src/modules`:** This folder contains all the modules of the project, including the `currency-swap` module.
-   **`src/assets`:** This folder contains all the assets of the project.
-   **`src/constants`:** This folder contains all the constants of the project.

### Currency Swap Module

The `currency-swap` module is responsible for handling the exchange currency form. It includes the following files and folders:

-   **`index.tsx`:** This file is the entry point of the module and presents the `CurrencySwap` component. It is used in conjunction with `react`, `vite`, and `react-router-dom` for routing pages.
-   **`components` folder:** This folder contains all the components used in the `CurrencySwap` page.
    -   **`currency-field` folder:** This folder contains the common components used for both the source and target currencies.
        -   **`select-currency-type` component:** This component allows users to select the currency type for the source or target currency.
        -   **`input-currency` component:** This component allows users to input the amount of the source or target currency.
        -   **`index.tsx`:** This file declares the `CurrencyField` component, which imports and renders the `InputCurrency` and `SelectCurrencyType` components.
-   **`CurrencySwap` component:** This component renders the source and target currency fields, along with a button to swap the currencies.
    -   It handles the form values, including `source_currency`, `source_currency_type`, `target_currency`, and `target_currency_type`.
    -   It uses `useEffect` to fetch the currency type options when the component mounts.
    -   It defines the `handleSubmit` function to handle the logic of swapping currencies when the swap button is clicked.
        -   This function finds the prices of the source and target currencies.
        -   It calculates the value of the source currency in USD.
        -   It calculates the target amount by dividing the value of the source currency by the price of the target currency.
-   **`fetcher.ts`:** This file contains all the functions used to fetch data from the API for the `CurrencySwap` page.
-   **`interface.ts`:** This file contains all the interfaces used in the `CurrencySwap` page.

### Running the Project

To run the project, follow these steps:

1.  Run `yarn` to install the dependencies.
2.  Run `yarn dev` to start the development server.

### Conclusion

This project demonstrates how to build an exchange currency form using React, TypeScript, and Vite. The project is well-organized and modular, making it easy to maintain and extend.