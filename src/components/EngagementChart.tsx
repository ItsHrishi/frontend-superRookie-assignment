import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EngagementChart = () => {
  const data = [
    {
      date: "2024-03-01",
      reels: 65,
      carousel: 45,
      static: 35,
    },
    {
      date: "2024-03-02",
      reels: 75,
      carousel: 55,
      static: 40,
    },
    {
      date: "2024-03-03",
      reels: 85,
      carousel: 65,
      static: 45,
    },
    {
      date: "2024-03-04",
      reels: 80,
      carousel: 70,
      static: 50,
    },
    {
      date: "2024-03-05",
      reels: 90,
      carousel: 75,
      static: 55,
    },
    {
      date: "2024-03-06",
      reels: 95,
      carousel: 80,
      static: 60,
    },
    {
      date: "2024-03-07",
      reels: 100,
      carousel: 85,
      static: 65,
    },
  ];

  return (
    <div className="bg-white dark:bg-dark-100 p-6 rounded-xl border border-gray-100 dark:border-dark-300 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold dark:text-white">
          Engagement Overview
        </h2>
        {/* <select className="text-sm border rounded-lg px-3 py-2 bg-gray-50 dark:bg-dark-300 dark:text-gray-200 dark:border-dark-400">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select> */}
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              stroke="#6B7280"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--tw-bg-opacity-1, white)",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "var(--tw-text-opacity-1, black)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="reels"
              stroke="#06B6D4"
              strokeWidth={2}
              dot={{ fill: "#06B6D4" }}
              name="Reels"
            />

            <Line
              type="monotone"
              dataKey="static"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ fill: "#F97316" }}
              name="Static"
            />
            <Line
              type="monotone"
              dataKey="carousel"
              stroke="#EAB308"
              strokeWidth={2}
              dot={{ fill: "#EAB308" }}
              name="Carousel"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
