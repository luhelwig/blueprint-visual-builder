
import React from 'react';
import Header from '@/components/Header';
import SummaryCard from '@/components/SummaryCard';
import BankAccountList from '@/components/BankAccountList';
import IncomeExpenseChart from '@/components/IncomeExpenseChart';
import CommissionCharts from '@/components/CommissionCharts';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard 
            title="Entradas Previstas" 
            amount="R$ 50.000" 
            type="income"
          />
          <SummaryCard 
            title="Saídas Previstas" 
            amount="R$ 25.000" 
            type="expense"
          />
          <SummaryCard 
            title="Saldo Final de Caixa Projetado" 
            amount="R$ 25.000" 
            type="balance"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BankAccountList />
          <IncomeExpenseChart />
        </div>
        
        <CommissionCharts />
      </div>
    </div>
  );
};

export default Index;
