# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the site
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Install serve to run the built site
RUN npm install -g serve

# Copy built site from builder
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 8000

# Start the application
CMD ["serve", "-s", "public", "-l", "8000"]
