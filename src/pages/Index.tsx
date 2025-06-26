import React from 'react';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import TopHeader from '@/components/layout/TopHeader';

/**
 * The main page for the Dashboard Overview.
 * This page serves as the primary entry point and assembles the main layout,
 * including the top header and the primary content grid of statistics.
 * It follows the layout defined in the project requirements, with a sticky header
 * and a scrollable main content area.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TopHeader />
      <main className="flex flex-1 flex-col gap-6 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard Overview
        </h1>
        <StatsCardGrid />
      </main>
    </div>
  );
};

export default IndexPage;
