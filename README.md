# IMPACT23-API-Lifecycle

Demo Workshop for 2023 Cisco IMPACT

## Overview

> Join us as we delve deep into strategies employed by quality focused API development teams. Our exploration will illuminate how to ensure swift feedback loops, quality releases, and continually updated documentation. In this session, we will demonstrate the distinctions between "design first" and "code first" approaches to API development, and how they fit within the API landscape.

> We will share a range of tools designed for both methodologies that you can leverage to support consumers and producers at every juncture of the API lifecycle. You will see how to integrate API checkpoints into the CI/CD pipeline, effectively automating feedback to application developers and providing meticulous quality checks.

### Takeaways:

- Learn strategies to ensure swift feedback, quality releases, and updated API documentation
- Discover automated tools to support consumers and producers throughout the API lifecycle

### Tools Used:

- [Spectral](https://docs.stoplight.io/docs/spectral/674b27b261c3c-overview)
- [TSOA](https://tsoa-community.github.io/reference/index.html)
- [Postman](https://www.postman.com/)
- [NPM](https://npmjs.com)
- [TypeScript](https://www.typescriptlang.org/)

## Generating and running

### Prerequisites

- Node.js: Ensure you have Node.js installed on your machine. If not, you can download and install it from here.
- Yarn: This project uses Yarn as a package manager. If you do not have Yarn installed, you can install it by running:
-

```bash
npm install -g yarn
```

### Installation

Clone the Repository: First, clone the repository to your local machine:

```bash
git clone https://github.com/dtolb/IMPACT23-API-Lifecycle.git
```

Navigate to the Project Directory:

```bash
cd https://github.com/dtolb/IMPACT23-API-Lifecycle.git
```

Install Dependencies: Now, install the necessary project dependencies using Yarn:

```bash
yarn install
```

### Generating and Linting the API Spec

Generate Routes and API Specification: The generate script generates routes and the OpenAPI specification. It then formats the generated files for consistency:

```bash
yarn generate
```

Lint the Specification: To ensure the OpenAPI specification adheres to best practices, run the linting script:

```bash
yarn lint:spec
```

### Running the Application

Once the API spec is generated and linted, you can start the application:

```bash
yarn start
```

This command will launch the application using ts-node, serving the API as defined in your tsoa configuration.
Additional Scripts

Format Codebase: You can ensure code consistency across the codebase using the formatting script:

```bash
yarn formatJS
```

Revalidate: This script is a combination of the generate and lint steps. Useful for a quick validation:

```bash
yarn revalidate
```

Update Postman Collection: If you wish to update the Postman collection based on the OpenAPI specification, run:

```bash
yarn updatePostman
```
