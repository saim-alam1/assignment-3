import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// #region Sample data
// const data = [
//   {
//     name: "Page A",
//     uv: 400,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 300,
//     pv: 4567,
//     amt: 2400,
//   },
//   {
//     name: "Page C",
//     uv: 300,
//     pv: 1398,
//     amt: 2400,
//   },
//   {
//     name: "Page D",
//     uv: 200,
//     pv: 9800,
//     amt: 2400,
//   },
//   {
//     name: "Page E",
//     uv: 278,
//     pv: 3908,
//     amt: 2400,
//   },
//   {
//     name: "Page F",
//     uv: 189,
//     pv: 4800,
//     amt: 2400,
//   },
// ];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 25,
};

const Chart = ({ ratings }) => {
  console.log(ratings);
  return (
    <div className="w-full">
      {/* <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer> */}
      <BarChart width={900} height={300} data={ratings} margin={margin} l>
        <XAxis
          dataKey="name"
          label={{
            position: "insideBottomRight",
            offset: -10,
          }}
        />
        <YAxis
          label={{
            position: "insideTopLeft",
            angle: -90,
            dy: 60,
          }}
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="count" fill="#FF8811" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="count" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
