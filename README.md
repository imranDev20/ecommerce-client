# Complete Ecommerce

Welcome to Complete Ecommerce! This is a Next.js application built with version 13.4.8, utilizing the PageRouter for routing. The naming convention throughout the project follows kebab casing.

## Live Demo

Check out the live demo of the application: [Complete Ecommerce](https://ecommerce-client.co.uk)

## Project Structure

The project is organized using the following structure:

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
        - services/
            - http.ts
            - products.ts
            - users.ts
        - types/
            - userTypes.ts
            - productTypes.ts
            - globalTypes.ts
        - utils/
    - images/
        - example.svg


Explanation of the structure:

- `src/`: The root directory of the source code.
  - `pages/`: Contains the different pages of the application.
    - `page-name/`: Specific page folder.
      - `components/`: Components related to this page.
        - `component-name.js`: Example component file.
      - `index.js`: Main file for this page.
  - `shared/`: Shared code and resources.
    - `icons/`: Custom icon components.
      - `custom-icons.tsx`: Example custom icon component.
    - `redux/`: Redux-related files.
    - `services/`: Service files for HTTP requests.
      - `http.ts`: HTTP service.
      - `products.ts`: Products service.
      - `users.ts`: Users service.
    - `types/`: TypeScript type definitions.
      - `userTypes.ts`: User-related types.
      - `productTypes.ts`: Product-related types.
      - `globalTypes.ts`: Global types.
    - `utils/`: Utility functions or modules.
  - `images/`: Image assets used in the application.


Each page in the `pages` directory contains a `components` folder where the components specific to that page are kept. This structure helps maintain a clean separation of concerns and keeps components organized.

## Material-UI v5

The project is built using Material-UI (MUI) version 5. MUI provides a powerful and flexible way to style your components while following the latest design guidelines.

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

The application will now be accessible at http://localhost:3000.