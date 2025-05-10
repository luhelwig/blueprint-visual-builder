
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', income: 30000, expense: 17000 },
  { name: 'Fev', income: 25000, expense: 20000 },
  { name: 'Mar', income: 35000, expense: 25000 },
  { name: 'Abr', income: 32000, expense: 19000 },
];

const IncomeExpenseChart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Gráfico de Entradas e Saídas</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis 
              tickFormatter={(value) => `R$ ${value / 1000}k`}
              domain={[0, 'auto']}
            />
            <Tooltip formatter={(value) => `R$ ${value}`} />
            <Legend />
            <Bar dataKey="income" name="Entradas" fill="#3b82f6" />
            <Bar dataKey="expense" name="Saídas" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default IncomeExpenseChart;
