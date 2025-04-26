import React from "react";
import CardInsight from "./CardInsight";

export default {
  title: "Components/Card/CardInsight",
  component: CardInsight,
};

const Template = (args) => <CardInsight {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Lượt xem hôm nay",
  description: "1.280 người đã ghé thăm trang bạn hôm nay",
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  title: "Lượt click",
  description: "740 lượt click trong 24h qua",
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};
