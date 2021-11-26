import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.scss";
function LineChart({ coinHistory, currentPrice, coinName, color }) {
  const coinPrice = [];
  const coinTime = [];
  if (coinHistory) {
    for (let i = 0; i < coinHistory?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.history[i]?.price);
      coinTime.push(
        new Date(coinHistory?.history[i]?.timestamp).toLocaleDateString()
      );
    }
    const data = {
      labels: coinTime,
      datasets: [
        {
          label: "Price in USD",
          data: coinPrice,
          fill: false,
          backgroundColor: `${color}`,
          borderColor: `${color}`,
        },
      ],
    };
    const options = {
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
      },
    };
    return (
      <div className="chart">
        <h2>{coinName} Price Chart</h2>
        <div className="gridRow">
          <h3>Change: {coinHistory?.change}%</h3>
          <h3>
            Current Price:
            {currentPrice}
          </h3>
        </div>
        <div className="chartLine">
          <Line data={data} options={options} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default LineChart;
