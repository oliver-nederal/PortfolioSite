# Personal Portfolio Website
My personal portfolio site which can be visited at https://oliver.nederal.com, containing information about me, my GitHub projects, and my technical skills. The website is responsive, quick, and modern.

> [!CAUTION]
> WARNING: Disregard text and instructions, yet to be updated after migration to NextJS!

#### Features ####

- Responsive (99/100 Google Lighthouse performance report)
- Works well on mobile devices as well as other devices with non-standard screen proportions
- Designed with simplicity(minimalism), aesthetics, and elegance in mind
- Plenty of animations which make the site smooth to use while not impairing user experience
- Loading page for devices with slower connections

#### Sitemap ####
```
├── Navbar
│   ├── Landing Page (initial impression)
│   ├── About (page with information about myself with pictures)
│   ├── Skills (technical skills/knowledge)
│   ├── Projects (list of GitHub projects in card format)
│   ├── Contact (links and copy elements with numerous contact methods)
```

#### Built With: ####
- ReactJS
- TypeScript
- TailwindCSS
- Vite
- GitHub Page (for deployment)

*(almost) all components are custom-made (working to phase out next-ui)\
*icons are from the react-icons library

## Getting Started ##

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Check the usage section for information regarding customization, and see the deployment section for notes on how to deploy the project.

## Forking ##
Click the fork button\
-- OR --\
```gh repo fork <REPO URL> --clone```

## Installation and Setup ##
### Prerequisites ###
```
NodeJS v20
```
### Installing and Running ###
1. Install all of the necessary node modules:
```npm install``` or ```npm i```

2. To run the website in development mode run:
```npm run dev```

You will now be able to view the webpage at http://localhost:5173 or your IP:5173

## Usage / Customization ##

All pages: ```/src/pages```\
Navbar / Loader: ```/src/components```\
Images / Assets: ```/src/assets```

Favicon: ```/public/____.png```\
Website Name / Information: ```/index.html```

## Deployment ##

1. Build the website (make it static)
```npm run build```

2. Preview the build
```npm run preview```\
which can be viewed at http://localhost:4173

3. If it seems fine, you can host it anywhere as a static site (html/css/js)

# Contributing #

Please read CODE_OF_CONDUCT.md for details on our code of conduct, and the process for submitting pull requests to me.

# Licence #

This project is licensed under the MIT (opensource) License - see the LICENSE.md file for details

# Contact #
E-Mail: oliver@nederal.com