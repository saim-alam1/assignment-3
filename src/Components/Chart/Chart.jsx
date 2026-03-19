import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 25,
};

const Chart = ({ ratings }) => {
  return (
    <div className="w-full h-75">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={900}
          height={300}
          data={ratings}
          margin={margin}
          layout="vertical"
          barCategoryGap="50%"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            dataKey="count"
            fontSize={18}
            axisLine={false}
            tick={{ dy: 20 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={80}
            fontSize={18}
            axisLine={false}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={32}
            radius={[4, 4, 0, 0]}
          >
            {/* <LabelList dataKey="count" position="right" /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
