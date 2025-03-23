---
description: "Docker, Traefik, and deployment guidelines"
globs: "docker/**/*.{yml,yaml}, docker-compose*.{yml,yaml}, Dockerfile, scripts/deploy.sh, scripts/backup.sh"
__meta__type: "guideline"
__meta__repo: "gsinghjay/hccc-fastapi-sso"
__meta__tags: ["Docker","Traefik","Deployment","Infrastructure","Security"]
__meta__rate: 8
---
# Infrastructure Rules

- Use multi-stage builds to minimize image size
- Use non-root users for running applications
- Set specific versions for base images
- Configure Poetry for dependency management:
  - Disable virtualenv creation in containers
  - Export dependencies to requirements.txt for production
  - Use poetry.lock for deterministic builds
- Use buildx cache mounts for faster builds
- Include proper health checks for all services
- Configure SSL/TLS termination with Traefik:
  - Use Let's Encrypt for certificate management
  - Configure automatic certificate renewal
  - Implement proper SSL/TLS headers
- Configure proper logging and dashboard security:
  - Use JSON format for logs
  - Implement dashboard authentication
  - Set up proper metrics collection
- Implement graceful shutdowns using exec form CMD
- Use production-grade servers (gunicorn/uvicorn)
- Cache dependencies properly with Docker layer optimization
- Include proper cleanup in multi-stage builds
- Set appropriate worker counts based on CPU cores
- Configure proper Traefik middleware chain:
  - HTTPS redirect
  - Security headers
  - CORS
  - Rate limiting
- Implement proper network segmentation:
  - Use separate networks for frontend/backend
  - Implement proper service discovery
- Configure proper volume management:
  - Use named volumes for persistence
  - Implement proper backup strategies