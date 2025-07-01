import React, { Component } from 'react';

export class SystemMonitor extends Component {
    constructor() {
        super();
        this.state = {
            cpuUsage: 0,
            memoryUsage: 0,
            diskUsage: 0,
            networkSpeed: 0,
            uptime: 0,
            processes: [
                { name: 'React Portfolio', cpu: 15.2, memory: 256 },
                { name: 'Node.js Server', cpu: 8.7, memory: 128 },
                { name: 'VS Code', cpu: 12.1, memory: 512 },
                { name: 'Chrome Browser', cpu: 22.3, memory: 1024 },
                { name: 'Terminal', cpu: 2.1, memory: 64 },
                { name: 'System Monitor', cpu: 5.8, memory: 96 }
            ]
        };
    }

    componentDidMount() {
        this.startMonitoring();
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    startMonitoring = () => {
        this.interval = setInterval(() => {
            this.setState({
                cpuUsage: Math.random() * 100,
                memoryUsage: 45 + Math.random() * 30,
                diskUsage: 65 + Math.random() * 10,
                networkSpeed: Math.random() * 1000,
                uptime: this.state.uptime + 1
            });
        }, 2000);
    }

    formatUptime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${minutes}m ${secs}s`;
    }

    render() {
        const { cpuUsage, memoryUsage, diskUsage, networkSpeed, uptime, processes } = this.state;

        return (
            <div className="w-full h-full bg-ub-cool-grey text-white p-4 overflow-auto">
                <div className="flex items-center mb-4">
                    <img src="./themes/Yaru/status/emblem-system-symbolic.svg" alt="System" className="w-6 h-6 mr-2" />
                    <h2 className="text-xl font-bold">System Monitor</h2>
                </div>

                {/* System Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* CPU Usage */}
                    <div className="bg-ub-grey p-4 rounded">
                        <h3 className="text-lg font-semibold mb-2">CPU Usage</h3>
                        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                            <div 
                                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500"
                                style={{ width: `${cpuUsage}%` }}
                            ></div>
                        </div>
                        <p className="text-sm">{cpuUsage.toFixed(1)}%</p>
                    </div>

                    {/* Memory Usage */}
                    <div className="bg-ub-grey p-4 rounded">
                        <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
                        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                            <div 
                                className="bg-gradient-to-r from-yellow-400 to-red-500 h-4 rounded-full transition-all duration-500"
                                style={{ width: `${memoryUsage}%` }}
                            ></div>
                        </div>
                        <p className="text-sm">{memoryUsage.toFixed(1)}% (4.2GB / 8GB)</p>
                    </div>

                    {/* Disk Usage */}
                    <div className="bg-ub-grey p-4 rounded">
                        <h3 className="text-lg font-semibold mb-2">Disk Usage</h3>
                        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                            <div 
                                className="bg-gradient-to-r from-purple-400 to-pink-500 h-4 rounded-full"
                                style={{ width: `${diskUsage}%` }}
                            ></div>
                        </div>
                        <p className="text-sm">{diskUsage.toFixed(1)}% (320GB / 500GB)</p>
                    </div>

                    {/* Network */}
                    <div className="bg-ub-grey p-4 rounded">
                        <h3 className="text-lg font-semibold mb-2">Network Speed</h3>
                        <div className="flex justify-between">
                            <span className="text-green-400">↓ {networkSpeed.toFixed(1)} KB/s</span>
                            <span className="text-blue-400">↑ {(networkSpeed * 0.3).toFixed(1)} KB/s</span>
                        </div>
                        <p className="text-sm mt-2">Uptime: {this.formatUptime(uptime)}</p>
                    </div>
                </div>

                {/* Process List */}
                <div className="bg-ub-grey p-4 rounded">
                    <h3 className="text-lg font-semibold mb-4">Running Processes</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="text-left py-2">Process</th>
                                    <th className="text-left py-2">CPU %</th>
                                    <th className="text-left py-2">Memory (MB)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {processes.map((process, index) => (
                                    <tr key={index} className="border-b border-gray-700">
                                        <td className="py-2">{process.name}</td>
                                        <td className="py-2 text-green-400">{process.cpu}%</td>
                                        <td className="py-2 text-blue-400">{process.memory} MB</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default SystemMonitor;

export const displaySystemMonitor = () => {
    return <SystemMonitor />;
}