
# Personal Vue Website

This repository is an evolving project where you can read about my projects, my blog and basic info about myself.
The aim is to build a personal dashboard with all the things that are currently happening in my life.

## Features

- Dashboard with information about myself
- Fetches the latest post from my blog and display's the content.
- An overview of projects that are hosted on Github that include a homepage (link).
- Display's a Github contribution counter. 
- Switch between dark & light mode. 

## Technologies Used

- Vue.js
- Vue Router
- Vuex
- Webpack
- Fetch
- Sass

## Getting Started & Usage

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/brampijper/personal-vue-website.git`
2. Install dependencies: `npm install`
3. Build and run the project: `npm run dev`

## Making API Calls
This project uses a reusable function, called useFetchAndCacheData that makes HTTP requests to a back-end server. It checks the browser cache for cached data and ETags, and sends the ETag to the server to check if the cached data is still valid. If the data is still valid, it returns the cached data; otherwise, it fetches fresh data and stores it in the browser cache. 

Sensitive data like API keys are stored on the server for security reasons.

Make sure to change the serverBaseUrl in the Webpack config files with the appropriate URL for that environment.
- production URL is: 'https://seashell-app-u77ys.ondigitalocean.app', 
- development URL is: 'http://localhost:3000'`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.