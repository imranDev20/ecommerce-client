# Complete Ecommerce

Welcome to Complete Ecommerce! This is a Next.js application built with version 13.4.8, utilizing the Page Router for routing. The design is inspired from the popular MUI Ecommerce template [Bazaar Pro](https://bazar-react.vercel.app/)


## Live Demo

Check out the live demo of the application: [Complete Ecommerce](https://ecommerce-client-one-hazel.vercel.app/)

## Libraries and Tools Used

This project utilizes the following libraries, tools, and technologies:

- **TypeScript**: The entire project is developed using TypeScript, enhancing type safety and code quality.
- **Redux Toolkit**: Used for state management.
- **Material UI**: Used as the component library for styling and UI components.
- **Socket.IO**: Implemented on real-time chat and support ticket functionality.
- **Stripe**: Integrated for payment processing.
- **i18next**: Used for internationalization (i18n) support, enabling users to view the application in different languages.
- **Pure React Carousel**: Utilized for creating slides and carousels.
- **Axios**: Used for making HTTP requests.
- **Axios**: Optimistic UI update.

## Project Structure
The naming convention throughout the project follows kebab casing. The project is organized using the following structure:

- src/
    - pages/
        - page-name/
            - components/
                - component-name.js
            - index.js
    - shared/
        - icons/
            - custom-icons.tsx
        - redux/
            - (Redux Toolkit files)
        - services/
            - http-requests.ts
        - types/
            - example-types.ts
        - utils/
            - utility-function.ts
    - images/
        - example.svg
- (Other project files)

### Explanation of the structure:

- `src/`: The root directory of the source code.
  - `pages/`: Contains the different pages of the application.
    - `page-name/`: Specific page folder.
      - `components/`: Components related to this page.
        - `component-name.js`: Example component file.
      - `index.js`: Main file for this page.
  - `shared/`: Shared code and resources.
    - `icons/`: Custom icon components.
    - `redux/`: Redux-related files.
    - `services/`: Service files for HTTP requests.
    - `types/`: TypeScript type definitions.
    - `utils/`: Utility functions or modules.
  - `images/`: Image assets used in the application.


Each page in the `pages` directory contains a `components` folder where the components specific to that page are kept. This structure helps maintain a clean separation of concerns and keeps components organized. The `components` folder inside the root of the page directory is used to keep all the components for the root index.tsx file, so basically all the components in the home page.


### Component Naming

To prevent naming conflicts between components and types, a specific naming convention is followed. For instance, instead of using a generic name like "Users," the convention is to name components more descriptively, such as "UserProfiles." Similarly, instead of "Products," the convention is to use "ProductCards."

## Getting Started


1. Clone the repository

```
git clone https://github.com/imranDev20/ecommerce-client.git
```

2. Navigate to the project directory

```
cd ecommerce-client
```

3. Install dependencies

```
cd npm install
```

4. Run the development server

```
npm run dev
```

The application will now be accessible at http://localhost:3000