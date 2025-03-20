# Define variables
PROJECT_DIR := $(shell pwd)

# Default target (this will run when you just type `make`)
all: install start

# Install dependencies
install:
	cd $(PROJECT_DIR) && npm install

# Start the development server
start:
	cd $(PROJECT_DIR) && npm start

# To clean node_modules (if needed)
clean:
	rm -rf node_modules
	npm install
