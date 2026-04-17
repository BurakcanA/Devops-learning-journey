# 📘 DevOps Learning Journey

A hands-on DevOps learning journey focused on understanding **real production behavior**, not just tools.

This repository documents my step-by-step transition from backend development into DevOps engineering by building, breaking, and improving real containerized systems.

The goal is to learn DevOps the same way production systems evolve: incrementally, experimentally, and transparently.

---

## 🎯 Learning Philosophy

Instead of following isolated tutorials, this journey focuses on:

- Understanding why systems fail
- Learning production behavior
- Building observable progress
- Treating mistakes as learning milestones

**Core principle:**

> **Containers running ≠ System working**

---

## 🧱 Current Learning Roadmap

- [x] Backend fundamentals (C# / APIs)
- [x] Docker fundamentals
- [x] Container lifecycle understanding
- [x] Docker networking basics
- [x] Docker Compose orchestration
- [x] Service dependency problems & debugging
- [🔄] Persistence & production behavior
- [ ] Healthchecks & readiness
- [ ] CI/CD pipelines
- [ ] Cloud deployment
- [ ] Infrastructure as Code
- [ ] Observability & monitoring

---

## 🚀 Project Overview

This project simulates a small production-like environment using:

- API service
- PostgreSQL database
- Docker containers
- Docker Compose orchestration

The objective is to understand:

- Service communication
- Container lifecycle
- Restart behavior
- Data persistence
- Failure scenarios

---

## 🐳 What Has Been Learned So Far

### 1 Docker Fundamentals

- Images vs Containers
- Container lifecycle
- Layered filesystem concept
- Ephemeral container behavior

**Key realization:**  
_Containers are temporary. Data must not live inside them._

### 2 Docker Networking

- Internal Docker networks
- Service name DNS resolution
- Why localhost fails between containers
- Container-to-container communication

### 3 Docker Compose

- Multi-service orchestration
- `depends_on` limitations
- Startup order vs service readiness
- Debugging real startup failures

**Important lesson:**  
_`depends_on` != application readiness_

### 4 Debugging Experience (Real Learning)

Encountered and solved issues such as:

- API starting before database readiness
- Incorrect internal networking assumptions
- Container restart failures
- Compose configuration misunderstandings

Focus was placed on understanding **root causes**, not quick fixes.

### 5 Persistence

Learning how production systems preserve state:

- Named volumes
- Data survival after container removal
- Difference between bind mounts and volumes
- Why persistence is critical in real environments

### 6 Health & Readiness (Current Stage)

- Implemented `/health/live` and `/health/ready`
- Integrated Docker healthcheck with API readiness
- System can now detect dependency availability (PostgreSQL)
- Enables production-like service monitoring behavior

### 7 CI Pipeline

- Implemented GitHub Actions CI pipeline
- Builds Docker containers
- Runs multi-service environment using Docker Compose
- Performs health checks on API readiness
- Ensures system works as a whole (API + DB)

---

## 🧪 Learning Method

Each improvement follows this cycle:

**Build → Break → Observe → Fix → Document**

Every commit represents a learning milestone rather than a finished product.

---

## 📈 Planned Next Steps

- Add container healthchecks
- Implement retry/readiness logic
- Introduce CI/CD pipelines
- Deploy to cloud environment
- Infrastructure as Code (Terraform)
- Monitoring & logging stack

---

## 🧠 Why This Repository Exists

This repository is intentionally public to:

- Track measurable progress
- Demonstrate problem-solving ability
- Show learning consistency
- Document DevOps mindset development

---

## 🔄 Continuous Updates

This repository will evolve as new DevOps concepts are learned and applied. Future commits will reflect real learning progress rather than completed tutorials.

---

**Author**  
Backend developer transitioning into DevOps by focusing on systems thinking, reliability, and production engineering principles.
