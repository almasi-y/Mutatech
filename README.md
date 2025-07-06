# Mutatech Website

This is the website for Mutatech Ltd, a company that provides electrical engineering solutions.

## Project Structure

```
src/
|-- assets/           # Contains all images and svg files
|-- Components/       # Reusable UI components
|   |-- AboutUs/      # About Us section component
|   |-- ContactUs/    # Contact Us form component
|   |-- Footer/       # Footer component
|   |-- Header/       # Header component
|   |-- Hero/         # Hero/Carousel component
|   |-- Navbar/       # Navigation bar component
|   |-- Projects/     # Projects showcase component
|   |-- Services/     # Services section component
|
|-- pages/            # Page components
|   |-- Home.jsx      # Home page (landing page)
|   |-- About.jsx     # About page
|   |-- Contact.jsx   # Contact page
|   |-- ProjectsPage.jsx # Projects page
|   |-- ServicesPage.jsx # Services page
|
|-- App.jsx           # Main app component with routing
|-- main.jsx          # Entry point
|-- index.css         # Global styles
```

## Navigation

The website has the following pages:
- Home (/) - The landing page with all sections
- About (/about) - Detailed about us information
- Services (/services) - Services offered by Mutatech
- Projects (/projects) - Showcase of Mutatech projects
- Contact (/contact) - Contact form and company details

## Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Technical Details

Built with:
- React 19
- React Router DOM
- Vite 6
