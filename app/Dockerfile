# # Use the official Node.js image as the base image
# FROM node:latest

# # Set the working directory inside the container
# WORKDIR /var/www/html

# # Copy package.json and yarn.lock to the working directory
# COPY . .

# # Install dependencies using yarncd 
# RUN rm -rf node_modules
# RUN yarn install
# RUN yarn build


# RUN mkdir -p /var/www/html
# RUN mv .next/* /var/www/html

# VOLUME /var/www/html




# # Command to run the Next.js application

FROM node:latest

# Set working directory
WORKDIR /var/www/html

# Install PM2 globally

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY . .

RUN yarn global add pm2

COPY ./package*.json ./


# Install dependencies
RUN rm -rf node_modules
RUN yarn install

COPY ./ ./


RUN yarn build

# Expose the listening por

VOLUME /var/www/html


EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
CMD [ "sh", "-c", "yarn pm2" ]