import React from 'react';
import StatCard from './StatCard';
import type { StatCardProps } from './StatCard';
import { DollarSign, Users, TrendingDown } from 'lucide-react';

const statsData: StatCardProps[] = [
  {
    title: 'Monthly Recurring Revenue',
    value: '£48,320',
    icon: (
      <div className="p-2 bg-sky-100 dark:bg-sky-900/50 rounded-lg">
        <DollarSign className="h-5 w-5 text-sky-600 dark:text-sky-400" />
      </div>
    ),
    change: '3.2%',
    changeType: 'increase' as const,
    description: 'vs last month',
  },
  {
    title: 'Active Users',
    value: '1,245',
    icon: (
      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
        <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
      </div>
    ),
    change: '+122',
    changeType: 'increase' as const,
    description: 'this week',
  },
  {
    title: 'Churn Rate',
    value: '1.8%',
    icon: (
      <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
        <TrendingDown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      </div>
    ),
    change: '0.2%',
    changeType: 'decrease' as const,
    description: 'vs last month',
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          changeType={stat.changeType}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
