# Stage 1: Build the application
FROM node AS builder

# default ids
ARG USER_ID=1000
ARG GROUP_ID=1000

RUN groupadd -g ${GROUP_ID} jenkins || echo "Group already exists" \
    && useradd --create-home -u ${USER_ID} -g ${GROUP_ID} jenkins || echo "User already exists"

# Set working directory
WORKDIR /app

COPY package.json yarn.lock ./
COPY . .
RUN yarn install

RUN yarn run build

# -----------------------------------------------------------------------------
# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx's html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]