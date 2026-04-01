import { TopNav } from '@/components/TopNav';
import { ArchitectureSidebar } from '@/components/ArchitectureSidebar';
import { BlockchainToasts } from '@/components/BlockchainToasts';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {children}
      </main>
      <ArchitectureSidebar />
      <BlockchainToasts />
    </div>
  );
}
