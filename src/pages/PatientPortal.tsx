import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { CryptoTooltip } from '@/components/CryptoTooltip';
import { useBlockchainStore } from '@/stores/blockchainStore';
import { patients, healthRecords, auditEvents, staff } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Copy, CheckCircle2, Loader2, ShieldCheck, Fingerprint } from 'lucide-react';

const patient = patients[0];

export default function PatientPortal() {
  const submitTx = useBlockchainStore((s) => s.submitTransaction);
  const [verifyStep, setVerifyStep] = useState(0);
  const [verifying, setVerifying] = useState(false);
  const [records, setRecords] = useState(healthRecords.map(r => ({ ...r })));
  const [zkStep, setZkStep] = useState(0);
  const [zkRunning, setZkRunning] = useState(false);

  const handleVerify = async () => {
    setVerifying(true);
    setVerifyStep(1);
    await new Promise(r => setTimeout(r, 800));
    setVerifyStep(2);
    await new Promise(r => setTimeout(r, 600));
    setVerifyStep(3);
    setVerifying(false);
  };

  const toggleConsent = async (id: string) => {
    setRecords(prev => prev.map(r => r.id === id ? { ...r, consentStatus: !r.consentStatus } : r));
    await submitTx();
  };

  const handleZkProof = async () => {
    setZkRunning(true);
    setZkStep(1);
    await new Promise(r => setTimeout(r, 1200));
    setZkStep(2);
    await new Promise(r => setTimeout(r, 800));
    setZkStep(3);
    setZkRunning(false);
  };

  const patientAudit = auditEvents.filter(e => e.resource.includes('Aisha') || e.resource.includes('Cardiology Report') || e.resource.includes('Allergy List') || e.resource.includes('Prescription'));

  return (
    <DashboardLayout title="Patient Portal" subtitle="Your decentralized identity and health records">
      {/* Identity Card */}
      <Card className="glass-card-strong mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3"><ShieldCheck className="h-8 w-8 text-primary" /></div>
                <div>
                  <h2 className="text-xl font-bold">{patient.name}</h2>
                  <p className="text-sm text-muted-foreground">Patient Identity Credential</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">DID: </span>
                  <code className="font-mono text-xs bg-muted px-2 py-0.5 rounded">{patient.did}</code>
                  <button className="ml-1 text-muted-foreground hover:text-primary"><Copy className="h-3 w-3 inline" /></button>
                </div>
                <div><span className="text-muted-foreground">Issuer: </span>City General Hospital Network</div>
                <div><span className="text-muted-foreground">Issued at Block: </span>#{patient.issuedAtBlock.toLocaleString()}</div>
                <div>
                  <span className="text-muted-foreground">Credential Hash: </span>
                  <CryptoTooltip term="Credential Hash"><code className="font-mono text-xs">{patient.credentialHash.slice(0, 24)}...</code></CryptoTooltip>
                </div>
                <div>
                  <span className="text-muted-foreground">Key Algorithm: </span>
                  <CryptoTooltip term="Dilithium3">CRYSTALS-Dilithium3</CryptoTooltip>
                </div>
                <div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30">ACTIVE — Verified On-Chain ✓</Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button onClick={handleVerify} disabled={verifying} className="gap-2">
                <Fingerprint className="h-4 w-4" />
                Verify My Identity
              </Button>
              <AnimatePresence>
                {verifyStep > 0 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      {verifyStep === 1 ? <Loader2 className="h-4 w-4 animate-spin text-primary" /> : <CheckCircle2 className="h-4 w-4 text-success" />}
                      <span>Fetching DID Document from blockchain...</span>
                    </div>
                    {verifyStep >= 2 && (
                      <div className="flex items-center gap-2">
                        {verifyStep === 2 ? <Loader2 className="h-4 w-4 animate-spin text-primary" /> : <CheckCircle2 className="h-4 w-4 text-success" />}
                        <span>Verifying <CryptoTooltip term="Dilithium">Dilithium</CryptoTooltip> signature...</span>
                      </div>
                    )}
                    {verifyStep >= 3 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-success font-medium">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Identity Confirmed ✓ — Block #{patient.issuedAtBlock.toLocaleString()} | TX: 0x9f3a...</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Records */}
      <Card className="mb-6">
        <CardHeader><CardTitle className="text-lg">My Health Records</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Record Type</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Who Has Access</TableHead>
                <TableHead>Consent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map(r => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.type}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{r.lastUpdated}</TableCell>
                  <TableCell className="text-sm">{r.accessGrantedTo.length > 0 ? r.accessGrantedTo.join(', ') : <span className="text-muted-foreground">None</span>}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch checked={r.consentStatus} onCheckedChange={() => toggleConsent(r.id)} />
                      <span className={`text-xs font-medium ${r.consentStatus ? 'text-success' : 'text-destructive'}`}>
                        {r.consentStatus ? 'Granted' : 'Revoked'}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ZKP */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Prove Your Identity Without Revealing It</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Using <CryptoTooltip term="zk-SNARKs">Zero-Knowledge Proofs</CryptoTooltip>, you can prove to a third-party hospital that you are a registered patient of this network without revealing your name, DID, or any personal data.
          </p>
          <Button onClick={handleZkProof} disabled={zkRunning} variant="outline" className="gap-2 mb-4">
            <Fingerprint className="h-4 w-4" /> Generate ZK Proof
          </Button>
          <AnimatePresence>
            {zkStep > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  {zkStep === 1 ? <Loader2 className="h-4 w-4 animate-spin text-primary" /> : <CheckCircle2 className="h-4 w-4 text-success" />}
                  Generating <CryptoTooltip term="Groth16">Groth16</CryptoTooltip> zk-SNARK proof...
                </div>
                {zkStep >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-1">
                    <p className="text-muted-foreground">// Proof Object</p>
                    <p>π_A: <span className="text-primary">0x2a8f3c7e1b5d9a4f6c2e8b3d7a1f5c9e</span></p>
                    <p>π_B: <span className="text-primary">0x7d4a2f9c1e6b3d8a5f2c7e1b4d9a3f6c</span></p>
                    <p>π_C: <span className="text-primary">0x5c9e2a8f3d7b1c4e6a2d8f3c7b1e5a9d</span></p>
                  </motion.div>
                )}
                {zkStep >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-success font-medium">
                    ✓ Proof Ready. Share this with any verifying hospital. They can confirm your credential status without accessing your records.
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <p className="text-xs text-muted-foreground mt-4">
            <CryptoTooltip term="zk-SNARK">zk-SNARKs</CryptoTooltip> allow mathematical verification of a statement ("this person is a registered patient") without any underlying data being transmitted.
          </p>
        </CardContent>
      </Card>

      {/* Access Log */}
      <Card>
        <CardHeader><CardTitle className="text-lg">My Access Log</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {patientAudit.map(e => (
              <div key={e.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">{e.actor} — {e.eventType.replace(/_/g, ' ')}</p>
                  <p className="text-muted-foreground">{e.resource} — {new Date(e.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">TX: {e.txHash} | Block #{e.blockNumber.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
