
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-bold">Dassordo</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline">30 Days</Button>
        <Button variant="outline">90 Days</Button>
        <Button variant="outline">98 Days</Button>
        <Button variant="default">Apply Filter</Button>
      </div>
    </div>
  );
};

export default Header;
