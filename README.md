# website
TreeHacks informational website.

See the site at https://www.treehacks.com/.

## Running Locally
To run the site locally, run:
- `npm install`
- `npm start`

To generate documentation, run:
- `npm run doc`

Open `documentation/docs/index.html` to view the documentation.

## Directory Structure

Most of the important files for the site are in the '/src' directory.

The files are split into the '/src/js' and '/src/sass' directories. For the primary sections and components of the page, there is a .jsx file and corresponding .scss file in the '/src/js' and '/src/sass' directories, respectively. The '/src/js/projects.json' file contains most of the image paths and text to avoid clutter, and the '/src/sass/global.scss' file contains global styles and classes, such as variables for the color palette and some styles that are used more than once.
