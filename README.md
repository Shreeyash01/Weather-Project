# Weather App

A weather conditions application built with Express and Node.js that allows users to fetch weather details for a specific city using the OpenWeatherMap API.

## Features

- User-friendly interface for entering a city name.
- Fetches weather details for the specified city using the OpenWeatherMap API.
- Displays information such as temperature, humidity description.
- Supports fetching weather conditions for various cities around the world.

## Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

## Getting Started

To run the application locally on your machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Shreeyash01/Weather-Project.git
```

2. Navigate to the project directory:

```bash
cd Weather-Project
```

3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
node index.js
```

5. Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Go" button to fetch the weather details for that city.
3. The application will display the current temperature, humidity description for the specified city.

## API Key

This application uses the OpenWeatherMap API to fetch weather data. You will need to obtain an API key from OpenWeatherMap by creating an account on their website. Once you have an API key, create a `.env` file in the root directory of the project and add the following line:

```
API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
