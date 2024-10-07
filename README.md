# Usage

1. **Install Backend Dependencies**  
   
   - Rename the `.env.example` file to `.env` in the backend directory.
   - Navigate to the backend directory and install the necessary dependencies:
   ```sh
   cd backend
   npm install
   npm run dev
   ```

2. **Install Frontend Dependencies & Start the App**  
   Navigate to the frontend directory, install dependencies, and start the application:
   ```sh
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the App**  
   Open your browser and visit: [http://localhost:3000](http://localhost:3000)

5. **Discussion**
   - Discuss the impact of initializing the context like this. Are we using the default value in this special case?
    - If no default value is provided, components that are not wrapped by a ThemeProvider will receive undefined, which may lead to unexpected behavior.
    Providing a default value ensures that components will have a default context value even if there is no Provider, improving the stability of the application.