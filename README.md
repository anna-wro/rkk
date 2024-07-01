
# Oficjum

[![wakatime](https://wakatime.com/badge/github/anna-wro/rkk.svg)](https://wakatime.com/badge/github/anna-wro/rkk)

Welcome to the repository of Oficjum, a web application that provides daily liturgical texts for the Liturgy of the Hours, also known as the Divine Office. This application is designed to serve the community of Reformed Catholic Church in Poland and is currently available in the Polish language. 

## Overview

Oficjum is a React application that uses TypeScript and Next.js for its development. The application is designed to provide daily liturgical texts based on the liturgical calendar. The texts include prayers, readings, psalms, and other components of the Liturgy of the Hours.
 
## Features

- **Daily Liturgical Texts**: The application provides the liturgical texts for each day based on the liturgical calendar. The texts include prayers, readings, psalms, and other components of the Liturgy of the Hours.

- **Liturgical Calendar**: The application uses a liturgical calendar to determine the liturgical texts for each day. The calendar includes the liturgical seasons, feast days, and other special days in the liturgical year.
  
- **Offline Access**: Oficjum is designed as a Progressive Web App, which means you can install it on your device and access it offline. It's like having a personal liturgical text book that's always with you, even when you're not connected to the internet!

## Code Structure

The project adheres to a conventional Next.js application structure, with the src directory housing the primary application code. Below is a quick rundown of the crucial directories and files:

- `src/components`: This directory is the heart of the application. It contains all the React components that are used to build the user interface of the application. Each component is defined in its own TypeScript file. Key components include `Prayer.tsx`, which handles the display of individual prayers, and `PrayerList.tsx`, which manages the list of prayers for the day.

- `src/data`: Contains the data used in the application, such as the liturgical texts and the liturgical calendar. It's divided into several subdirectories based on the liturgical seasons and types of texts.

- `src/utils`: This directory contains utility functions and helpers that are used throughout the application. For instance, the `date.ts` file contains functions for handling and formatting dates according to the liturgical calendar.

- `src/pages`: This directory contains the pages of the application. The `index.tsx` file is the entry point of the application.

- `public`: This directory contains static files that are served by the application, such as images and icons.

## Getting Started

To get the application up and running locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.

The application should now be accessible at `http://localhost:3000` in development mode.

## Contributing

Contributions to the development of Oficjum are welcome. If you wish to contribute, please fork the repository and make your changes, and then submit a pull request.
