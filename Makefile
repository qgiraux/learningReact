
# Default target (this will run when you just type `make`)
all: install start

# Install dependencies
install:
	npm install

# Start the development server
start:
	npm start

# To clean node_modules (if needed)
clean:
	rm -rf node_modules
	npm install
