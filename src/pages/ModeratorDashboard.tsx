import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { CryptoTooltip } from '@/components/CryptoTooltip';
import { useBlockchainStore } from '@/stores/blockchainStore';
import { departmentHead, accessRequests, smartContractPolicies, staff, auditEvents, CONTRACTS } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Loader2, AlertTriangle, XCircle, Filter } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const dh = departmentHead;
const neuroStaff = [staff[1], staff[0], staff[2]];
const neuroAudit = auditEvents.filter(e => e.department === 'Neurology' || e.department === 'Cardiology');

export default function ModeratorDashboard() {
  const submitTx = useBlockchainStore((s) => s.submitTransaction);
  const [requests, setRequests] = useState(accessRequests.map(r => ({ ...r })));
  const [approving, setApproving] = useState<string | null>(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = async (id: string) => {
    setApproving(id);
    await new Promise(r => setTimeout(r, 1500));
    await submitTx();
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'approved' as const } : r));
    setApproving(null);
  };

  const handleDeny = async (id: string) => {
    setApproving(id);
    await new Promise(r => setTimeout(r, 800));
    await submitTx();
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'denied' as const } : r));
    setApproving(null);
  };

  const filteredAudit = neuroAudit.filter(e =>
    (filterType === 'all' || e.eventType === filterType) &&
    (searchTerm === '' || e.actor.toLowerCase().includes(searchTerm.toLowerCase()) || e.resource.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const riskColors = { low: 'bg-success/10 text-success', medium: 'bg-warning/10 text-warning', high: 'bg-destructive/10 text-destructive' };

  return (
    <DashboardLayout title="Department Head Dashboard" subtitle={`${dh.name} | Head of ${dh.department} | Moderator`}>
      <Card className="mb-6 glass-card-strong">
        <CardContent className="p-4 flex flex-wrap items-center gap-4">
          <p className="font-bold">{dh.name}</p>
          <code className="font-mono text-xs bg-muted px-2 py-1 rounded">{dh.did}</code>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Department Head — Neurology</Badge>
        </CardContent>
      </Card>

      {/* Pending Access Requests */}
      <Card className="mb-6">
        <CardHeader><CardTitle className="text-lg">Pending Access Requests</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requesting Staff</TableHead>
                <TableHead>Records</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead>Consent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map(r => (
                <TableRow key={r.id}>
                  <TableCell>
                    <p className="font-medium text-sm">{r.requestorName}</p>
                    <code className="font-mono text-xs text-muted-foreground">{r.requestorDid.slice(0, 20)}...</code>
                  </TableCell>
                  <TableCell className="text-sm">{r.recordsRequested.join(', ')}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">{r.reason}</TableCell>
                  <TableCell><Badge className={riskColors[r.riskLevel]}>{r.riskLevel.toUpperCase()}</Badge></TableCell>
                  <TableCell>{r.patientConsent ? <Badge variant="outline" className="text-success">Granted</Badge> : <Badge variant="outline" className="text-destructive">Not Given</Badge>}</TableCell>
                  <TableCell>
                    {r.status === 'pending' ? (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleApprove(r.id)} disabled={approving === r.id}>
                          {approving === r.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <CheckCircle2 className="h-3 w-3" />}
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeny(r.id)} disabled={approving === r.id}>
                          <XCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <Badge variant={r.status === 'approved' ? 'default' : 'destructive'}>{r.status.toUpperCase()}</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Smart Contract Policy Viewer */}
      <Card className="mb-6">
        <CardHeader><CardTitle className="text-lg">Active RBAC Policies — Neurology Department</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {smartContractPolicies.slice(0, 3).map(p => (
            <div key={p.id} className="rounded-lg border p-4 bg-muted/20">
              <p className="text-xs font-bold text-primary mb-2">RULE #{p.ruleNumber}</p>
              <div className="font-mono text-xs space-y-1 mb-3">
                <p><span className="text-primary font-semibold">IF</span> {p.condition}</p>
                <p><span className="text-success font-semibold">THEN</span> {p.action} access TO {p.resource}</p>
                <p><span className="text-muted-foreground">WITH</span> level "{p.level}" {p.duration ? `FOR DURATION ${p.duration}` : ''}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Contract: <code className="font-mono">{p.contractAddress.slice(0, 12)}...</code></span>
                <span>Deployed: Block #{p.deployedAtBlock.toLocaleString()}</span>
                <span>Last Modified: Block #{p.lastUpdatedBlock.toLocaleString()}</span>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">These rules live on the blockchain. Dr. Nair can propose a policy update, but it requires Admin co-signature to take effect.</p>
        </CardContent>
      </Card>

      {/* Staff Overview */}
      <Card className="mb-6">
        <CardHeader><CardTitle className="text-lg">Department Staff Identity Overview</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neuroStaff.map(s => (
              <div key={s.id} className="rounded-lg border p-4 space-y-2">
                <p className="font-semibold text-sm">{s.name}</p>
                <code className="font-mono text-xs text-muted-foreground block">{s.did}</code>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={s.credentialStatus === 'active' ? 'text-success' : 'text-warning'}>
                    {s.credentialStatus === 'active' ? 'Valid' : s.credentialStatus.toUpperCase()}
                  </Badge>
                  {s.credentialStatus === 'expired' && (
                    <Button size="sm" variant="outline" className="text-xs h-7 gap-1">
                      <AlertTriangle className="h-3 w-3" />Flag for Renewal
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Last Login: {new Date(s.lastLogin).toLocaleDateString()}</p>
                <p className="text-xs text-muted-foreground"><CryptoTooltip term="Dilithium">Dilithium</CryptoTooltip> Key: {s.credentialStatus === 'active' ? '✓ Valid' : '⚠ Needs Renewal'}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <CardTitle className="text-lg">Department Audit Trail</CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-40 h-8 text-xs" />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40 h-8 text-xs"><Filter className="h-3 w-3 mr-1" /><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="RECORD_ACCESSED">Record Accessed</SelectItem>
                  <SelectItem value="ACCESS_REQUESTED">Access Requested</SelectItem>
                  <SelectItem value="LOGIN_VERIFIED">Login Verified</SelectItem>
                  <SelectItem value="POLICY_UPDATED">Policy Updated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredAudit.map(e => (
              <Collapsible key={e.id}>
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 text-sm hover:bg-muted/50 transition-colors cursor-pointer">
                    <Badge variant="outline" className="text-xs shrink-0">{e.eventType.replace(/_/g, ' ')}</Badge>
                    <div className="flex-1">
                      <p className="font-medium">{e.actor}</p>
                      <p className="text-muted-foreground text-xs">{e.resource}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Block #{e.blockNumber.toLocaleString()}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-8 mt-1 p-3 rounded-lg bg-muted/20 font-mono text-xs space-y-1">
                    <p>TX Hash: {e.txHash}</p>
                    <p>Block: #{e.blockNumber.toLocaleString()}</p>
                    <p>Signer DID: {e.actorDid}</p>
                    <p>Details: {e.details}</p>
                    <p>Signature Algorithm: <CryptoTooltip term="Dilithium3">CRYSTALS-Dilithium3</CryptoTooltip></p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
