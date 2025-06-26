import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  changeType: 'increase' | 'decrease';
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType,
  description,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{value}</div>
        <div className="flex items-baseline text-xs text-muted-foreground mt-1">
          <span
            className={cn(
              'flex items-center gap-1 font-semibold',
              isIncrease ? 'text-success' : 'text-destructive'
            )}
          >
            {isIncrease ? (
              <ArrowUp className="h-4 w-4 stroke-[3]" />
            ) : (
              <ArrowDown className="h-4 w-4 stroke-[3]" />
            )}
            {change}
          </span>
          <span className="ml-1.5">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
