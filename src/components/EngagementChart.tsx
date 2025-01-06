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
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
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
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
                color: "#F3F4F6",
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
              stroke="#EC4899"
              strokeWidth={2}
              dot={{ fill: "#EC4899" }}
              name="Reels"
            />
            <Line
              type="monotone"
              dataKey="carousel"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ fill: "#6366F1" }}
              name="Carousel"
            />
            <Line
              type="monotone"
              dataKey="static"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981" }}
              name="Static"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
