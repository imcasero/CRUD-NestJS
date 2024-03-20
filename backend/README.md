# CRUD Users with NestJS, Prisma, and SQLite

This project is a basic CRUD of users implemented with NestJS using Prisma as an ORM and SQLite as the database.

## Installation

1. Clone this repository to your local machine:

```console
git clone <repository_url>
```

2. Navigate to the project directory:

```console
cd directory_name
```

3. Make sure you have NestJS installed globally. If not, install it by running:

```console
 npm install -g @nestjs/cli
```

4. Install dependencies using npm or yarn:

```console
 npm install
```

or

```console
yarn install
```

5. Copy the .env.example file and rename it to .env:

```console
cp .env.example .env
```

## Database Configuration

> [!NOTE]  
> In the .env file, ensure to configure the database URL based on your environment

## Execution

1. To start the application in development mode, run:

```console
npm run start:dev
```

or

```console
yarn start:dev
```

> [!IMPORTANT]
> The application will be available at http://localhost:3000.

## Request Manual

Below are the different requests that can be made to the API:

### Get all users

- Method: GET
- Route: /users

### Create a new user

- Method: POST
- Route: /users
- Request body (JSON):
  {
  "name": "User Name",
  "email": "email@example.com",
  "password": "password"
  }

### Get a user by ID

- Method: GET
- Route: /users/:id
- Route parameters:
  - id: ID of the user

### Delete a user by ID

- Method: DELETE
- Route: /users/:id
- Route parameters:
  - id: ID of the user

### Update a user by ID

- Method: PUT
- Route: /users/:id
- Route parameters:
  - id: ID of the user
- Request body (JSON):
  {
  "name": "New Name",
  "email": "new_email@example.com",
  "password": "new_password"
  }

---

You are now ready to start using the users API! If you have any questions or issues, feel free to open an issue on this repository.

<br>

<center>
Made with ❤️ by [@imcasero](https://github.com/imcasero).
<center>
