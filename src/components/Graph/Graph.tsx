import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// @ts-ignore
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  ChartDataLabels
);

type Value = { x: string | number; y: number };
export type Series = { name: string; values: Value[] };

type GraphProps = {
  data?: Series[];
  title?: string;
  unit?: string; // Add unit prop
};

const getColor = (i: number) => {
  const colors = [
    "rgba(75,192,192,1)",
    "rgba(255,99,132,1)",
    "rgba(54,162,235,1)",
    "rgba(255,206,86,1)",
    "rgba(153,102,255,1)",
    "rgba(255,159,64,1)",
  ];
  return colors[i % colors.length];
};

const exampleData: Series[] = [
  {
    name: "Example Series 1",
    values: [
      { x: "Jan", y: 10 },
      { x: "Feb", y: 20 },
      { x: "Mar", y: 15 },
      { x: "Apr", y: 25 },
      { x: "May", y: 25 },
      { x: "Jun", y: 25 },
      { x: "Jul", y: 25 },
    ],
  },
];

const Graph: React.FC<GraphProps & { barColors?: string[] }> = ({
  data,
  title,
  unit = "$",
  barColors,
}) => {
  const chartSeries = data && data.length > 0 ? data : exampleData;

  const labels = Array.from(
    new Set(chartSeries.flatMap((series) => series.values.map((v) => v.x)))
  );

  const getBarColor = (i: number) => {
    if (barColors && barColors.length > 0) {
      return barColors[i % barColors.length];
    }
    return getColor(i);
  };

  const datasets = chartSeries.map((series, i) => ({
    label: series.name,
    data: labels.map(
      (label) => series.values.find((v) => v.x === label)?.y ?? null
    ),
    backgroundColor: getBarColor(i),
  }));

  const chartData: ChartData<"bar"> = {
    labels,
    datasets,
  };

  const options: ChartOptions<"bar"> & { plugins: { datalabels: any } } = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide the legend
      title: title ? { display: true, text: title } : undefined,
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value: number | null) =>
          value !== null && value !== undefined ? `${unit}${value}` : "",
        font: { weight: "bold" },
      },
    },
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: {
        title: { display: true, text: "Savings" },
        beginAtZero: true,
        grace: "50%", // Add padding to the top of the chart
      },
    },
  };

  // Make the chart taller by setting height prop
  return (
    <div style={{width: '100%', padding: '0rem 0.5rem', boxSizing: 'border-box', justifyContent: 'center'}}>
      <div style={{width: '100%'}}>
        <Bar data={chartData} options={options} plugins={[ChartDataLabels]} height={300} />
      </div>
    </div>
  );
};

export default Graph;
