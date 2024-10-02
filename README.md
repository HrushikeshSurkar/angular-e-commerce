# Angular E-Commerce Project

This is an e-commerce web application built using **Angular 18**. The project uses **localStorage** for managing the application's state, such as user information, shopping cart data, and product details. The app follows a modular architecture with distinct modules for each feature.

## Project Setup

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository:**

```bash
   git clone <repository-url>
```

2. **Navigate to the project directory:**

```bash
   cd e-commerce-project
```

3. **Install dependencies:**

```bash
   npm install
```

4. **Run the project:**

```bash
   ng serve
```

5. **Open your browser and navigate to:**

```bash
   http://localhost:4200
```

## Project Structure

```bash
e-commerce-project/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── nav-bar/
│   │   │   │   │   ├── nav-bar.component.ts
│   │   │   │   │   ├── nav-bar.component.html
│   │   │   │   │   └── nav-bar.component.scss
│   │   │   │   ├── footer/
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   └── footer.component.scss
│   │   │   └── layout/
│   │   │       ├── layout.component.ts
│   │   │       ├── layout.component.html
│   │   │       └── layout.component.scss
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.module.ts
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.scss
│   │   │   │   └── about.module.ts
│   │   │
│   │   ├── core/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── user/
│   │   │   ├── registration
│   │   │   │   ├── registration.component.ts
│   │   │   │   ├── registration.component.html
│   │   │   │   ├── registration.component.scss
│   │   │   │   └── registration.module.ts
│   │   │   ├── login/
│   │   │   └── profile/
│   │   ├── order/
│   │   ├── search/
│   │   └── review/
│   └── assets/
└── package.json

```

## Features

- User registration and login (managed with localStorage)
- Product listings and details
- Shopping cart management (using localStorage)
- Checkout process
- Order history
- Product reviews (if implemented)
- Search functionality (if implemented)

## Usage

You can add, remove, and update products in the cart, and manage user authentication directly through the localStorage.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
