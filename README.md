# API-Quality-Lifecycle

Demo Workshop for leveraging open source tools to deploy and check APIs for quality gates.

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
- [Kong](https://konghq.com/)

## Generating and running

### Prerequisites

- Node.js: Ensure you have Node.js installed on your machine. If not, you can download and install it from here.

### Installation

Clone the Repository: First, clone the repository to your local machine:

```bash
git clone https://github.com/dtolb/API-Quality-Lifecycle.git
```

Navigate to the Project Directory:

```bash
cd API-Quality-Lifecycle
```

Install Dependencies: Now, install the necessary project dependencies using Yarn:

```bash
npm install
```

### Generating and Linting the API Spec

Generate Routes and API Specification: The generate script generates routes and the OpenAPI specification. It then formats the generated files for consistency:

```bash
npm run generate
```

Lint the Specification: To ensure the OpenAPI specification adheres to best practices, run the linting script:

```bash
npm run lint:spec
```

### Running the Application

Once the API spec is generated and linted, you can start the application:

```bash
npm run start
```

This command will launch the application using ts-node, serving the API as defined in your tsoa configuration.
Additional Scripts

Format Codebase: You can ensure code consistency across the codebase using the formatting script:

```bash
npm run formatJS
```

Revalidate: This script is a combination of the generate and lint steps. Useful for a quick validation:

```bash
npm run revalidate
```

generatePostman: creates the postman collection from the OpenAPI Document

```bash
npm run generatePostman
```

Update Postman Collection: If you wish to update the Postman collection based on the OpenAPI specification, run:

```bash
npm run updatePostman
```

### Sample Updates

Take a look at some in progress updates to both add the DELETE method and an additional parameter to the POST and PUT methods.

#### DELETE

Navigate to the branch

```bash
git checkout delete-pet
```

Run the generate to make the new OpenAPI Document

```bash
npm run generate
```

Check the updates for Quality improvements

```bash
npm run lint:spec
```

Notice any errors? Try adding the annotations to rememdy the errors and then re-run the validation

Specifically look at the [PetController](./src/controllers/PetController.ts) and the [Pet.ts Model](./src/models/Pet.ts)

#### Updates

Take a look at how we can add a new parameter to the POST and PUT methods.

```bash
git checkout add-age-to-pets
```

Run the generate to make the new OpenAPI Document

```bash
npm run generate
```

Check the updates for Quality improvements

```bash
npm run lint:spec
```

Specifically look at the [PetController](./src/controllers/PetController.ts) and the [Pet.ts Model](./src/models/Pet.ts) to see how the parameter was added.
