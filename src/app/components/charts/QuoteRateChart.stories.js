// src/components/charts/QuoteRateChart.stories.jsx
import QuoteRateChart from "./QuoteRateChart";
import { quoteRateData } from "@/data/mockStats";

export default {
  title: "Charts/QuoteRateChart",
  component: QuoteRateChart,
};

export const Default = () => <QuoteRateChart data={quoteRateData} />;
