// src/components/crypto_graph.jsx
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoGraph = ({ coinId = "bitcoin" }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        const prices = response.data.prices;
        setChartData({
          labels: prices.map((price) =>
            new Date(price[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: `${coinId.toUpperCase()} Price (USD)`,
              data: prices.map((price) => price[1]),
              borderColor: "#74b9ff",
              backgroundColor: "rgba(116, 185, 255, 0.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };
    fetchPriceData();
  }, [coinId]);

  return (
    <div className="graph-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { labels: { font: { size: 18 } } },
            title: {
              display: true,
              text: "7-Day Price Trend",
              font: { size: 22 },
            },
          },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: "#dfe6e9" } },
          },
        }}
        height={400}
      />
    </div>
  );
};

export default CryptoGraph;
