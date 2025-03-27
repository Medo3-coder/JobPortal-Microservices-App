

# JobPortal-Microservices-App

## What are we going to build?

* A Job Portal where employers can post job listings and candidates can apply for jobs or create profiles showcasing their skills.

### Project Architecture

<img src="/public/images/Project-Architecture.png">

### Subdomains

<img src="/public/images/subdomains.png">

### Functional Requirements: Describe what the system should do

<img src="/public/images/functional-requirements.png">

### Nonfunctional Requirements

<img src="/public/images/Nonfunctional-requirements.png">

### Design Decision

<img src="/public/images/Design-decision.png">

### Inter Process Communication

<img src="/public/images/inter-process-communication.png">

# JobPortal-Microservices-App

This project involves building a modern Job Portal application leveraging a microservices architecture. Below, you'll find a detailed description of the skills and technologies used in this project.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Technologies and Skills](#technologies-and-skills)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates the development of a sophisticated Job Portal application using modern technologies and tools. The architecture is based on microservices, enabling scalability and maintainability. Each microservice is developed with NodeJS and Express, containerized with Docker, and orchestrated with Kubernetes.

## Project Structure

```
/project-root
    /auth-service
    /job-service
    /application-service
    /common
    /client
    /infra
    docker-compose.yml
    README.md
```

### /auth-service

Handles user authentication and authorization.

### /job-service

Manages job postings and listings.

### /application-service

Processes and manages job applications.

### /common

Contains shared utilities and models.

### /client

The frontend application built with React.

### /infra

Infrastructure-related configurations and files.

## Technologies and Skills

### Frontend

- **React**: Building an intuitive job portal application.
- **TypeScript**: Ensuring type safety and robustness in the frontend code.
- **Redux Toolkit RTK Query**: Efficient data fetching and caching.

### Backend

- **NodeJS and Express**: Developing and designing REST APIs.
- **TypeScript**: Ensuring type safety and robustness in the backend code.
- **MongoDB, MySQL, PostgreSQL**: Using multiple databases for different services.

### Microservices and Orchestration

- **Docker**: Creating containers for microservices.
- **Kubernetes**: Orchestrating microservices on Minikube and AWS EKS clusters.

### CI/CD

- **Jenkins**: Setting up Continuous Integration/Delivery pipelines both locally and on the cloud.

### Communication and Monitoring

- **RabbitMQ**: Setting up microservices communication.
- **Elasticsearch, Kibana, Prometheus, Grafana**: Implementing observability and monitoring.

### Additional Tools

- **Redis**: Using for caching.
- **Docker Compose**: Setting up services locally.
- **JWT**: Setting up access to microservices using JWT-based authentication.
- **Cloudinary**: Managing and storing media assets in the cloud.

## Getting Started

### Prerequisites

- Node.js
- Docker
- Kubernetes
- Minikube
- Skaffold
- Jenkins

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies for each service:
   ```bash
   cd auth-service
   npm install
   cd ../job-service
   npm install
   cd ../application-service
   npm install
   ```

3. Set up environment variables:
   - Create `.env` files in each service directory.
   - Example for `auth-service`:
     ```
     MONGO_URI=mongodb://<mongo-url>
     JWT_KEY=<your-jwt-key>
     ```

## Running the Application

### Running Locally

1. Start the services using Docker Compose:
   ```bash
   docker-compose up
   ```

2. Access the frontend application at `http://localhost:3000`.

### Running with Kubernetes

1. Start Minikube:
   ```bash
   minikube start
   ```

2. Deploy the services with Skaffold:
   ```bash
   skaffold dev
   ```

3. Access the frontend application at the Minikube IP.

## API Documentation

### Authentication Service

- **POST /api/users/signup**: Create a new user.
- **POST /api/users/signin**: Authenticate a user.

### Job Service

- **GET /api/jobs**: List all job postings.
- **POST /api/jobs**: Create a new job posting.

### Application Service

- **POST /api/applications**: Submit a job application.
- **GET /api/applications**: List all applications for a job.

## Deployment

### Production Deployment

1. Build Docker images for each service:
   ```bash
   docker build -t <your-dockerhub-username>/auth-service .
   docker build -t <your-dockerhub-username>/job-service .
   docker build -t <your-dockerhub-username>/application-service .
   ```

2. Push Docker images to Docker Hub:
   ```bash
   docker push <your-dockerhub-username>/auth-service
   docker push <your-dockerhub-username>/job-service
   docker push <your-dockerhub-username>/application-service
   ```

3. Deploy to Kubernetes cluster:
   ```bash
   kubectl apply -f k8s/
   ```

## Testing

### Unit Tests

1. Run unit tests for each service:
   ```bash
   cd auth-service
   npm test
   cd ../job-service
   npm test
   cd ../application-service
   npm test
   ```

