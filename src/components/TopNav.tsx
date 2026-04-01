import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Role } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Shield, LogOut, Activity } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useBlockchainStore } from '@/stores/blockchainStore';

const roleLabels: Record<Role, { label: string; path: string }> = {
  patient: { label: 'Aisha Patel (Patient)', path: '/patient' },
  staff: { label: 'Dr. James Okafor (Hospital Staff)', path: '/staff' },
  department_head: { label: 'Dr. Meera Nair (Department Head)', path: '/moderator' },
  admin: { label: 'Robert Chen (IT Admin)', path: '/admin' },
};

export function TopNav() {
  const { currentRole, currentUser, logout, login } = useAuthStore();
  const currentBlock = useBlockchainStore((s) => s.currentBlock);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoleChange = (role: Role) => {
    login(role);
    navigate(roleLabels[role].path);
  };

  if (location.pathname === '/') return null;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">HelixID</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 ml-4 text-xs text-muted-foreground">
            <Activity className="h-3 w-3 text-success" />
            <span>Block #{currentBlock.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Select value={currentRole} onValueChange={(v) => handleRoleChange(v as Role)}>
                  <SelectTrigger className="w-[260px] text-sm">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(roleLabels).map(([role, { label }]) => (
                      <SelectItem key={role} value={role}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Role switching is for demo purposes only. In production, roles are cryptographically bound to a user's DID and enforced exclusively by on-chain smart contracts.</p>
            </TooltipContent>
          </Tooltip>

          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-success/10 border border-success/20">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-success">Verified</span>
          </div>

          <Button variant="ghost" size="icon" onClick={() => { logout(); navigate('/'); }}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
