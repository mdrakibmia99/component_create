import React from 'react';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SEOBarChart = ({ rawData }) => {
  const data = [];
  for (let i = 0; i < rawData.length; i += 25) {
    const chunk = rawData.slice(i, i + 25);

    // Calculate the sum of deal_status for the current chunk
    const sumDealStatus = chunk.reduce((sum, item) => sum + item.deal_status, 0);

    // Add an object to the result array with the year and sum
    data.push({
      name: (2010 + Math.floor(i / 25)).toString(),
      Rakib: parseInt(sumDealStatus),
    });
  }

  return (
    <ResponsiveContainer width={730} height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Rakib" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SEOBarChart;
