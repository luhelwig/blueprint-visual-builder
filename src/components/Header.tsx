
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-bold">ENTREGA</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline">30 dias</Button>
        <Button variant="outline">60 dias</Button>
        <Button variant="outline">90 dias</Button>
        <Button variant="default">Apply Filter</Button>
      </div>
    </div>
  );
};

export default Header;
