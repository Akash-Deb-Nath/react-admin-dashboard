import React from 'react';
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="Active User" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;