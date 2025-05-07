// src/app/stats/page.jsx
import { getTheme } from "@/lib/theme";
import { quoteRateData, trafficData, salesData } from "@/data/mockStats";
import QuoteRateChart from "../components/charts/QuoteRateChart";
import TrafficChart from "../components/charts/TrafficChart";
import SalesChart from "../components/charts/SaleChart";

export default async function StatsPage() {
  const theme = await getTheme();

  return (
    <div
      className="min-h-screen p-6 grid gap-6"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-2">Quote Rate (%)</h2>
          <QuoteRateChart data={quoteRateData} />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-2">Website Traffic</h2>
          <TrafficChart data={trafficData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-semibold mb-2">Sales per Day</h2>
        <SalesChart data={salesData} />
      </div>
    </div>
  );
}
