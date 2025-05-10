
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface BankAccount {
  name: string;
  balance: string;
  logoSrc: string;
  alert?: boolean;
}

const BankAccountList = () => {
  const accounts: BankAccount[] = [
    { name: 'Banco Itaú', balance: '', logoSrc: 'itau.png', alert: true },
    { name: 'Banco Safra', balance: '15.000', logoSrc: 'safra.png' },
    { name: 'Banco Santander', balance: '10.000', logoSrc: 'santander.png' },
    { name: 'Banco do Brasil', balance: '8.000', logoSrc: 'bb.png' }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Total por Conta Bancária</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {accounts.map((account) => (
            <li key={account.name} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center text-xs font-bold">
                  {account.name.substring(0, 2).toUpperCase()}
                </div>
                <span>{account.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {account.balance ? (
                  <span className="font-medium">R$ {account.balance}</span>
                ) : (
                  <span>-</span>
                )}
                {account.alert && <AlertCircle className="h-5 w-5 text-red-500" />}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BankAccountList;
