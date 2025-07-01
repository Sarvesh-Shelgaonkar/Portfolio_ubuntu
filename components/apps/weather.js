import React, { Component } from 'react';

export class Weather extends Component {
    constructor() {
        super();
        this.state = {
            currentWeather: {
                location: "Pune, Maharashtra",
                temperature: 28,
                condition: "Partly Cloudy",
                humidity: 65,
                windSpeed: 12,
                icon: "⛅"
            },
            forecast: [
                { day: "Today", high: 32, low: 22, condition: "Sunny", icon: "☀️" },
                { day: "Tomorrow", high: 30, low: 20, condition: "Cloudy", icon: "☁️" },
                { day: "Wednesday", high: 28, low: 18, condition: "Rainy", icon: "🌧️" },
                { day: "Thursday", high: 26, low: 16, condition: "Stormy", icon: "⛈️" },
                { day: "Friday", high: 29, low: 19, condition: "Sunny", icon: "☀️" }
            ],
            hourlyForecast: [
                { time: "12 PM", temp: 28, icon: "☀️" },
                { time: "1 PM", temp: 30, icon: "☀️" },
                { time: "2 PM", temp: 32, icon: "☀️" },
                { time: "3 PM", temp: 31, icon: "⛅" },
                { time: "4 PM", temp: 29, icon: "⛅" },
                { time: "5 PM", temp: 27, icon: "☁️" }
            ]
        };
    }

    componentDidMount() {
        // Simulate weather updates
        this.weatherInterval = setInterval(() => {
            this.setState(prevState => ({
                currentWeather: {
                    ...prevState.currentWeather,
                    temperature: 25 + Math.floor(Math.random() * 10),
                    humidity: 50 + Math.floor(Math.random() * 30),
                    windSpeed: 5 + Math.floor(Math.random() * 15)
                }
            }));
        }, 5000);
    }

    componentWillUnmount() {
        if (this.weatherInterval) {
            clearInterval(this.weatherInterval);
        }
    }

    render() {
        const { currentWeather, forecast, hourlyForecast } = this.state;

        return (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 overflow-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Weather</h1>
                    <div className="text-sm opacity-75">
                        {new Date().toLocaleDateString('en-IN', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </div>
                </div>

                {/* Current Weather */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{currentWeather.location}</h2>
                            <div className="flex items-center">
                                <span className="text-6xl mr-4">{currentWeather.icon}</span>
                                <div>
                                    <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
                                    <div className="text-lg opacity-75">{currentWeather.condition}</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right space-y-2">
                            <div className="flex items-center">
                                <span className="mr-2">💧</span>
                                <span>Humidity: {currentWeather.humidity}%</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">💨</span>
                                <span>Wind: {currentWeather.windSpeed} km/h</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">👁️</span>
                                <span>Visibility: 10 km</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hourly Forecast */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Hourly Forecast</h3>
                    <div className="flex space-x-4 overflow-x-auto">
                        {hourlyForecast.map((hour, index) => (
                            <div key={index} className="flex-shrink-0 text-center bg-white bg-opacity-10 rounded-lg p-3">
                                <div className="text-sm opacity-75 mb-2">{hour.time}</div>
                                <div className="text-2xl mb-2">{hour.icon}</div>
                                <div className="font-semibold">{hour.temp}°</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5-Day Forecast */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
                    <div className="space-y-3">
                        {forecast.map((day, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">{day.icon}</span>
                                    <div>
                                        <div className="font-semibold">{day.day}</div>
                                        <div className="text-sm opacity-75">{day.condition}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold">{day.high}°</div>
                                    <div className="text-sm opacity-75">{day.low}°</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weather Tips */}
                <div className="mt-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">💡 Today's Tips</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                            <span className="mr-2">🌞</span>
                            <span>Perfect weather for outdoor coding sessions!</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">💧</span>
                            <span>Stay hydrated while working on projects</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">🌡️</span>
                            <span>Ideal temperature for maximum productivity</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;

export const displayWeather = () => {
    return <Weather />;
}