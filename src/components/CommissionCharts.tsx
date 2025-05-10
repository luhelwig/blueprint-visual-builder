
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Sample data
const affiliateData = [
  { name: 'Alice', value: 45.8 },
  { name: 'João', value: 25.0 },
  { name: 'Produto C', value: 20.5 },
  { name: 'Produto D', value: 8.7 }
];

const productData = [
  { name: 'Pedro', value: 45.5 },
  { name: 'João', value: 10.4 },
  { name: 'Alice', value: 38.0 },
  { name: 'Maria', value: 6.1 }
];

const trendData = [
  { name: 'Mai', value: 5 },
  { name: 'Fev', value: 20 },
  { name: 'Set', value: 35 },
  { name: 'Jan', value: 40 },
  { name: 'Aug', value: 45 },
  { name: 'Sep', value: 60 },
  { name: 'Abr', value: 80 },
];

const COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#f97316'];

const CommissionCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Comissões por Afiliado</CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={affiliateData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={80}
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
              >
                {affiliateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comissões por Produto</CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value}`} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Distribuição por Produto</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center h-[200px]">
          <ResponsiveContainer width="50%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommissionCharts;
