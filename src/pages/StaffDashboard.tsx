import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { CryptoTooltip } from '@/components/CryptoTooltip';
import { useBlockchainStore } from '@/stores/blockchainStore';
import { staff, patients, CONTRACTS, auditEvents } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const doctor = staff[0];

const myPatients = [
  { name: 'Aisha Patel', did: patients[0].did, ward: 'Cardiology Ward A', accessLevel: 'Read-Write', contract: CONTRACTS.rbacPolicy, expiry: 'Block #15,200', consent: true },
  { name: 'Patient B (Anonymized)', did: 'did:helix:0x6f2a...', ward: 'Cardiology Ward A', accessLevel: 'Read', contract: CONTRACTS.rbacPolicy, expiry: 'Block #15,100', consent: false },
];

const myPermissions = [
  { resource: 'Cardiology Records', patient: 'Aisha Patel', level: 'Read-Write', authorizedBy: 'Smart Contract', contract: CONTRACTS.rbacPolicy, grantedBlock: 14400, expiresBlock: 15200 },
  { resource: 'Allergy List', patient: 'Aisha Patel', level: 'Read', authorizedBy: 'Smart Contract', contract: CONTRACTS.rbacPolicy, grantedBlock: 14500, expiresBlock: 15100 },
  { resource: 'Prescription History', patient: 'Aisha Patel', level: 'Read', authorizedBy: 'Smart Contract', contract: CONTRACTS.rbacPolicy, grantedBlock: 14600, expiresBlock: 15300 },
];

const staffAudit = auditEvents.filter(e => e.actorDid === doctor.did).slice(0, 10);

export default function StaffDashboard() {
  const submitTx = useBlockchainStore((s) => s.submitTransaction);
  const [requestStep, setRequestStep] = useState(0);
  const [requesting, setRequesting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRequest = async () => {
    setRequesting(true);
    setRequestStep(1);
    await new Promise(r => setTimeout(r, 1000));
    setRequestStep(2);
    await new Promise(r => setTimeout(r, 1200));
    setRequestStep(3);
    await submitTx();
    setRequesting(false);
  };

  return (
    <DashboardLayout title="Hospital Staff Dashboard" subtitle={`${doctor.name} | ${doctor.department} Department`}>
      {/* Header Badge */}
      <Card className="mb-6 glass-card-strong">
        <CardContent className="p-4 flex flex-wrap items-center gap-4">
          <div>
            <p className="font-bold">{doctor.name}</p>
            <p className="text-sm text-muted-foreground">{doctor.department} Department</p>
          </div>
          <code className="font-mono text-xs bg-muted px-2 py-1 rounded">{doctor.did}</code>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30">Staff Identity Verified ✓</Badge>
        </CardContent>
      </Card>

      {/* My Patients */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">My Patients</CardTitle>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2"><Send className="h-4 w-4" />Request Cross-Department Access</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>Request Cross-Department Access</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Patient DID</label>
                  <code className="block font-mono text-xs bg-muted px-3 py-2 rounded mt-1">{patients[1].did}</code>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Records Needed</label>
                  <div className="space-y-2">
                    {['Scan Results', 'Medication History', 'Allergy List'].map(r => (
                      <div key={r} className="flex items-center gap-2"><Checkbox defaultChecked={r !== 'Allergy List'} /><span className="text-sm">{r}</span></div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Clinical Reason</label>
                  <Textarea defaultValue="Cardiology referral — patient presenting with cardiac arrhythmia symptoms requiring cross-department neurological assessment." className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Duration</label>
                  <Select defaultValue="72h">
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">24 hours</SelectItem>
                      <SelectItem value="72h">72 hours</SelectItem>
                      <SelectItem value="7d">7 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleRequest} disabled={requesting} className="w-full gap-2">
                  <Send className="h-4 w-4" />{requesting ? 'Submitting...' : 'Submit Request'}
                </Button>
                <AnimatePresence>
                  {requestStep > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {requestStep === 1 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />}
                        Signing request with your <CryptoTooltip term="Dilithium">Dilithium</CryptoTooltip> private key...
                      </div>
                      {requestStep >= 2 && (
                        <div className="flex items-center gap-2">
                          {requestStep === 2 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />}
                          Broadcasting transaction to blockchain network...
                        </div>
                      )}
                      {requestStep >= 3 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-lg bg-success/10 text-success text-xs font-mono">
                          Transaction confirmed | TX: 0x7b3d... | Block #14,847 | Status: Awaiting Department Head Approval
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Ward</TableHead>
                <TableHead>Access Level</TableHead>
                <TableHead>Smart Contract</TableHead>
                <TableHead>Expiry</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myPatients.map((p, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.ward}</TableCell>
                  <TableCell><Badge variant="outline">{p.accessLevel}</Badge></TableCell>
                  <TableCell><code className="font-mono text-xs">{p.contract.slice(0, 12)}...</code></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.expiry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Current Access Permissions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">My Current Access Permissions</CardTitle>
          <p className="text-xs text-muted-foreground">All access permissions are enforced by on-chain <CryptoTooltip term="Smart Contract">smart contracts</CryptoTooltip>. No database administrator can manually override these permissions — they exist only on the immutable ledger.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resource</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Smart Contract</TableHead>
                <TableHead>Granted Block</TableHead>
                <TableHead>Expires Block</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myPermissions.map((p, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{p.resource}</TableCell>
                  <TableCell>{p.patient}</TableCell>
                  <TableCell><Badge variant="outline">{p.level}</Badge></TableCell>
                  <TableCell><code className="font-mono text-xs">{p.contract.slice(0, 12)}...</code></TableCell>
                  <TableCell>#{p.grantedBlock.toLocaleString()}</TableCell>
                  <TableCell>#{p.expiresBlock.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Activity Log */}
      <Card>
        <CardHeader><CardTitle className="text-lg">My Blockchain Activity Log</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-2">
            {staffAudit.map(e => (
              <div key={e.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 text-sm">
                <Badge variant="outline" className="text-xs shrink-0 mt-0.5">{e.eventType.replace(/_/g, ' ')}</Badge>
                <div className="flex-1">
                  <p>{e.resource}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">TX: {e.txHash} | Block #{e.blockNumber.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
