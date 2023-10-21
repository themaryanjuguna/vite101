# vite101
An Introduction to Vite.js

## Getting Started

Provide instructions for setting up and running your project.

### Prerequisites

List any software, libraries, or tools that users need to have installed before they can use your project.

### Installation

Open your command line or terminal and navigate to the directory where the cloned repository is located.

Install Dependencies:
Before running the project, make sure to install any project-specific dependencies. Usually, you can do this using npm Node Package Manager

``npm install``

### Start the Vite Development Server

Once the dependencies are installed, you can start the Vite development server. Vite comes with its own development server that you can run using npm. You don't need to use npx since Vite is already pre-installed.

`` npm run dev ``

### Common Bug

The error message you're encountering indicates that there is no "dev" script defined in your project's "package.json" file. To resolve this issue, you need to make sure that the "dev" script is defined correctly in your project.

1. **Check package.json**:
   Open your project's "package.json" file and look for the "scripts" section. There should be a script named "dev" defined, which is typically used to start the development server.

   Here's an example of what the "scripts" section might look like:

   ```
   "scripts": {
     "dev": "vite"
   }
   ```

   Make sure that the "dev" script is defined as shown above.

2. **Install Vite Locally**:
   If the "dev" script is not defined in your "package.json" file, you may need to install Vite locally in your project. Run the following command to install Vite as a development dependency:

   ```npm install vite --save-dev```

   This will add Vite to your project's dependencies, and you should now be able to run the "dev" script.

3. **Run "dev" Script**:
   After making sure that the "dev" script is defined in your "package.json" and Vite is installed, you can run the "dev" script using npm or yarn as mentioned in the previous response:

   ```npm run dev```

 Ensure that the "dev" script is correctly defined in your "package.json" and that Vite is installed as a development dependency in your project. Once these steps are completed, you should be able to start your Vite development server without encountering the "Missing script: 'dev'" error.

``
…or create a new repository on the command line

- echo "# vite101" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/themaryanjuguna/vite101.git
- git push -u origin main

``

…or push an existing repository from the command line

``

- git remote add origin https://github.com/themaryanjuguna/vite101.git
- git branch -M main
- git push -u origin main
``
