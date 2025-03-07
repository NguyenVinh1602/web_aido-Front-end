"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { id: 1, title: "Solving the Job Shop Problem with Google’s...", date: "23/11/2022", see: 3, like: 4, share: 4 },
  { id: 2, title: "Solving the Job Shop Problem with Google’s...", date: "23/11/2022", see: 3, like: 4, share: 4 },
  { id: 3, title: "Solving the Job Shop Problem with Google’s...", date: "23/11/2022", see: 3, like: 4, share: 4 },
  { id: 4, title: "Solving the Job Shop Problem with Google’s...", date: "23/11/2022", see: 3, like: 4, share: 4 },
  { id: 5, title: "Solving the Job Shop Problem with Google’s...", date: "23/11/2022", see: 3, like: 4, share: 4 },
];

const newUserData = [
  { month: "Jan", users: 30 },
  { month: "Feb", users: 50 },
  { month: "Mar", users: 40 },
  { month: "Apr", users: 60 },
  { month: "May", users: 70 },
  { month: "Jun", users: 80 },
  { month: "Jul", users: 90 },
  { month: "Aug", users: 100 },
  { month: "Sep", users: 120 },
  { month: "Oct", users: 80 },
  { month: "Nov", users: 60 },
  { month: "Dec", users: 50 },
];

const pieData = [
  { name: "Bank Receive", value: 65 },
  { name: "Total Service", value: 35 },
];

const COLORS = ["#0088FE", "#00C49F"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Bảng dữ liệu */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Number</TableHead>
              <TableHead>Title of Post</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total See</TableHead>
              <TableHead>Total Like</TableHead>
              <TableHead>Total Share</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.see}</TableCell>
                <TableCell>{item.like}</TableCell>
                <TableCell>{item.share}</TableCell>
                <TableCell>
                  <Button variant="destructive">X</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Biểu đồ cột */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">New User</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={newUserData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Biểu đồ tròn */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Number of Visitors</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
