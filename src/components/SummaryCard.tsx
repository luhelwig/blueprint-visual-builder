
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SummaryCardProps {
  title: string;
  amount: string;
  type: 'income' | 'expense' | 'balance';
}

const SummaryCard = ({ title, amount, type }: SummaryCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{amount}</div>
        {type === 'income' && (
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs">Up</span>
            </span>
          </div>
        )}
        {type === 'expense' && (
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full">
              <ArrowDown className="h-4 w-4" />
              <span className="text-xs">Down</span>
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
