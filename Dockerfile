FROM node:16-bookworm-slim

# Build tools needed to compile node-sass (node-gyp) native bindings
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies reproducibly (lockfile present)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# Run tests once in non-interactive CI mode (no watch)
ENV CI=true
CMD ["npm", "test"]
