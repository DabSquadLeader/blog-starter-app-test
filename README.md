# BlueBlog

## Overview

**BlueBlog** is a streamlined blogging platform that allows users to create, view, and share articles. Designed for a smooth and intuitive experience, BlueBlog is an ideal choice for bloggers who want a simple yet robust application to manage their content. The app includes features for authentication, article management, and navigation, allowing users to focus on creating and exploring blogs with ease.

## Features

- **User Authentication**: Utilizes Firebase for Google sign-in, ensuring secure access to articles and personal accounts.
- **Create and View Articles**: Allows users to add new articles, view published articles, and navigate through content seamlessly.
- **Responsive Design**: The layout adapts for mobile and desktop, providing a consistent user experience across devices.
- **Dynamic Navigation**: Features a navigation bar that organizes articles and adapts to various screen sizes.
- **Blog Description and Logo Integration**: Displays a blog description and logo for cohesive branding, linking directly to the BlueBlog homepage.

## Files

1. **index.html**: Serves as the entry point for the app:
   - Includes links to necessary resources and renders the main React components.

2. **App.css**: Contains all styling for BlueBlog:
   - Implements a clean, minimalistic design for easy navigation.
   - Ensures responsiveness with media queries for screen adaptability.

3. **App.js**: The main application file:
   - Manages the authentication state and dynamically renders components based on user interaction.
   - Incorporates the main blog components, such as `Nav`, `Article`, `ArticleEntry`, `SignIn`, `SignOut`, and `BlogDesc`.

4. **Nav.js**: Handles article navigation:
   - Displays available articles and provides quick access to each one.
   - Positions articles differently based on screen size for a responsive interface.

5. **Article.js**: Renders the main content of each article:
   - Displays the article title and body for easy reading.

6. **ArticleEntry.js**: Allows users to create new articles:
   - Provides a form for entering article details, which are then added to the database.

7. **auth.js**: Manages user authentication:
   - Contains `SignIn` and `SignOut` components to handle user login and logout.

8. **BlogDesc.js**: Displays the blog’s description:
   - Enhances branding by providing context about BlueBlog’s purpose and functionality.

## License

© 2024 Colin Bajo-Smith. All rights reserved.
