# Complete Ecommerce

Welcome to Complete Ecommerce! This is a Next.js application built with version 13.4.8, utilizing the PageRouter for routing. The naming convention throughout the project follows kebab casing.

## Live Demo

Check out the live demo of the application: [Complete Ecommerce](https://homelet-inn.co.uk)

## Project Structure

The project is organized using the following structure:

- pages/
  - page-name/
    - components/
      - component-name.js
    - index.js


Each page in the `pages` directory contains a `components` folder where the components specific to that page are kept. This structure helps maintain a clean separation of concerns and keeps components organized.

## Material-UI v5

The project is built using Material-UI (MUI) version 5. MUI provides a powerful and flexible way to style your components while following the latest design guidelines.

### Component Naming

To prevent naming conflicts between components and types, a specific naming convention is followed. For instance, instead of using a generic name like "Users," the convention is to name components more descriptively, such as "UserProfiles." Similarly, instead of "Products," the convention is to use "ProductCards."

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/homelet-inn.git

# Navigate to the project directory
cd homelet-inn

# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will now be accessible at http://localhost:3000.