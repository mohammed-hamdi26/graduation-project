"use client";

import { motion } from "motion/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function DurationCart() {
  const data = [
    {
      name: "jan",
      improvementRate: 10,
    },
    {
      name: "feb",
      improvementRate: 24,
    },
    {
      name: "april",
      improvementRate: 16,
    },
    {
      name: "may",
      improvementRate: 70,
    },
  ];
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className=" bg-white rounded-lg   mb-8 p-4"
    >
      <h2 className="text-second-main text-2xl capitalize mb-6">
        improvement Rate
      </h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          height={"100%"}
          width={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            name="improvement Rate "
            dataKey="improvementRate"
            stroke="#06A881"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default DurationCart;
