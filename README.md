# Mutatech Website

This is the website for Mutatech Ltd, a company that provides electrical engineering solutions.

## Project Structure

```
src/
|-- assets/           # Contains all images and svg files
|-- Components/       # Reusable UI components
|   |-- AboutUs/      # About Us section component (redesigned)
|   |-- ContactUs/    # Contact Us form component (redesigned)
|   |-- Footer/       # Footer component
|   |-- Header/       # Header component
|   |-- Hero/         # Hero/Carousel component
|   |-- Navbar/       # Navigation bar component
|   |-- Projects/     # Projects showcase component (enhanced)
|   |   |-- ProjectDetails.jsx  # Individual project details
|   |-- Services/     # Services section component (redesigned)
|
|-- pages/            # Page components
|   |-- Home.jsx      # Home page (landing page)
|   |-- About.jsx     # About page
|   |-- Contact.jsx   # Contact page
|   |-- ProjectsPage.jsx # Projects page
|   |-- ServicesPage.jsx # Services page
|   |-- ProjectDetailsPage.jsx # Individual project details page
|
|-- App.jsx           # Main app component with routing
|-- main.jsx          # Entry point
|-- index.css         # Global styles
```

## Navigation

The website has the following pages:
- Home (/) - The landing page with all sections
- About (/about) - Detailed about us information with mission, vision, and values
- Services (/services) - Comprehensive services offered by Mutatech
- Projects (/projects) - Showcase of Mutatech projects
- Project Details (/project/:id) - Individual project details and specifications
- Contact (/contact) - Enhanced contact form and company details

## Features

### Redesigned Components
- **About Us**: Clean layout with icons, better typography, and responsive cards
- **Contact Us**: Modern contact form with contact information cards
- **Projects**: Enhanced project showcase with detailed project pages
- **Services**: Comprehensive service listings with icons and detailed descriptions

### Enhanced Navigation
- Smooth routing between all pages
- Clickable project details from project cards
- Consistent header and navigation across all pages
- Proper page spacing and padding

### Design Improvements
- Modern, clean design following the site's theme
- Consistent color scheme using company colors
- Better alignment and spacing of elements
- Responsive design for all screen sizes
- Professional typography and icons

## Technical Details

Built with:
- React 19
- React Router DOM
- FontAwesome Icons
- Vite 6
- CSS Grid and Flexbox for layouts

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
