FROM node:8
 
# Who(m) to blame if nothing works
LABEL author=maxyme.lefebvre@gmail.com

# Create a working directory 
RUN mkdir -p /usr/src/app
 
# Switch to working directory
WORKDIR /usr/src/app
 
# Copy contents of local folder to `WORKDIR`
# You can pick individual files based on your need
COPY . .
 
RUN npm install -g @vue/cli
 
# Install dependencies (if any) in package.json
RUN npm install
 
WORKDIR /usr/src/app/quizzer-app

RUN npm install
RUN npm run build

WORKDIR /usr/src/app

# Expose port from container so host can access $PORT
EXPOSE $PORT
 
# Start the Node.js app on load
CMD [ "npm", "start" ]