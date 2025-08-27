// src/config/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Calculator API",
      version: "1.0.0",
      description: "API documentation for Finance Calculator project",
    },
    servers: [
      { url: "http://localhost:5050" }, // update if deployed
    ],
  },
  apis: ["./src/routes/*.ts"], // 👈 looks for JSDoc in route files
};

export const swaggerSpec = swaggerJsdoc(options);
