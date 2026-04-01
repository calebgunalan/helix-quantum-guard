import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { CryptoTooltip } from '@/components/CryptoTooltip';
import { useBlockchainStore } from '@/stores/blockchainStore';
import {
  admin, allIdentities, blocks, validatorNodes, smartContractPolicies,
  auditEvents, anomalyAlerts, CONTRACTS,
  generateAuthEventsData, generateDeptAccessData, generateCredentialHealthData, generateTxVolumeData,
} from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle2, Loader2, Activity, Shield, AlertTriangle, Download, Eye, UserPlus, XCircle, Server } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Legend } from 'recharts';

const adm = admin;

export default function AdminDashboard() {
  const submitTx = useBlockchainStore((s) => s.submitTransaction);
  const currentBlock = useBlockchainStore((s) => s.currentBlock);
  const [alerts, setAlerts] = useState(anomalyAlerts.map(a => ({ ...a })));
  const [keyRotating, setKeyRotating] = useState(false);
  const [keyRotStep, setKeyRotStep] = useState(0);
  const [onboardStep, setOnboardStep] = useState(0);
  const [onboarding, setOnboarding] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  const authData = generateAuthEventsData();
  const deptData = generateDeptAccessData();
  const credData = generateCredentialHealthData();
  const txVolData = generateTxVolumeData();

  const handleKeyRotation = async () => {
    setKeyRotating(true);
    setKeyRotStep(1);
    await new Promise(r => setTimeout(r, 1200));
    setKeyRotStep(2);
    await new Promise(r => setTimeout(r, 1500));
    setKeyRotStep(3);
    await new Promise(r => setTimeout(r, 1000));
    setKeyRotStep(4);
    await submitTx();
    setKeyRotating(false);
  };

  const handleOnboard = async () => {
    setOnboarding(true);
    for (let i = 1; i <= 5; i++) {
      setOnboardStep(i);
      await new Promise(r => setTimeout(r, 1000));
    }
    await submitTx();
    setOnboarding(false);
  };

  const markReviewed = async (id: string) => {
    await submitTx();
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, reviewed: true } : a));
  };

  const rotationProgress = Math.round(((currentBlock - 12000) / (17000 - 12000)) * 100);

  return (
    <DashboardLayout title="IT Security Admin Dashboard" subtitle={`${adm.name} | System Administrator`}>
      {/* Live Status */}
      <Card className="mb-6 glass-card-strong">
        <CardContent className="p-4 flex flex-wrap items-center gap-4">
          <code className="font-mono text-xs bg-muted px-2 py-1 rounded">{adm.did}</code>
          <div className="flex items-center gap-2 text-sm">
            <Activity className="h-4 w-4 text-success" />
            <span className="font-medium">Network Healthy</span>
            <span className="text-muted-foreground">— {validatorNodes.filter(n => n.status === 'online').length}/{validatorNodes.length} Nodes Online</span>
            <span className="text-muted-foreground">| Last Block: #{currentBlock.toLocaleString()}</span>
            <span className="text-muted-foreground">| Avg Block Time: 2.8s</span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="identity" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="identity">Identity Mgmt</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Explorer</TabsTrigger>
          <TabsTrigger value="policies">Access Policies</TabsTrigger>
          <TabsTrigger value="analytics">Audit Analytics</TabsTrigger>
          <TabsTrigger value="quantum">Quantum Security</TabsTrigger>
        </TabsList>

        {/* Tab 1: Identity Management */}
        <TabsContent value="identity" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">All Identities</CardTitle>
              <Button size="sm" onClick={handleOnboard} disabled={onboarding} className="gap-2">
                <UserPlus className="h-4 w-4" />{onboarding ? 'Onboarding...' : 'Onboard New Staff'}
              </Button>
            </CardHeader>
            <CardContent>
              <AnimatePresence>
                {onboarding && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-4 p-4 rounded-lg border bg-muted/30 space-y-2 text-sm">
                    {onboardStep >= 1 && <div className="flex items-center gap-2">{onboardStep === 1 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Step 1: Collecting personal & professional info...</div>}
                    {onboardStep >= 2 && <div className="flex items-center gap-2">{onboardStep === 2 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Step 2: Assigning department & role...</div>}
                    {onboardStep >= 3 && (
                      <div>
                        <div className="flex items-center gap-2">{onboardStep === 3 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Step 3: Generating post-quantum key pair...</div>
                        {onboardStep > 3 && (
                          <div className="ml-6 mt-1 font-mono text-xs space-y-1">
                            <p>Public Key (<CryptoTooltip term="Dilithium3">Dilithium3</CryptoTooltip>): <span className="text-primary">0x4d696c...e9f1a5</span></p>
                            <p>KEM Key (<CryptoTooltip term="Kyber768">Kyber768</CryptoTooltip>): <span className="text-primary">0x4b7962...c3d6b2</span></p>
                          </div>
                        )}
                      </div>
                    )}
                    {onboardStep >= 4 && <div className="flex items-center gap-2">{onboardStep === 4 ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Step 4: Creating <CryptoTooltip term="DID">DID</CryptoTooltip> Document & broadcasting to blockchain...</div>}
                    {onboardStep >= 5 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-lg bg-success/10 text-success text-xs font-mono">
                        ✓ DID Registered | did:helix:0x{Math.random().toString(16).slice(2, 14)} | Block #{(currentBlock + 1).toLocaleString()}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>DID</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Auth Block</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allIdentities.map(u => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell><code className="font-mono text-xs">{u.did.slice(0, 22)}...</code></TableCell>
                      <TableCell><Badge variant="outline" className="text-xs">{u.role.replace('_', ' ')}</Badge></TableCell>
                      <TableCell className="text-sm">{u.department}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={u.credentialStatus === 'active' ? 'text-success bg-success/10' : u.credentialStatus === 'expired' ? 'text-warning bg-warning/10' : 'text-destructive bg-destructive/10'}>
                          {u.credentialStatus.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>#{u.lastAuthBlock.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Blockchain Explorer */}
        <TabsContent value="blockchain" className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Live Block Chain</CardTitle></CardHeader>
            <CardContent>
              <div className="flex gap-3 overflow-x-auto pb-4">
                {blocks.map((b, i) => (
                  <motion.div
                    key={b.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex-shrink-0 w-52 rounded-lg border p-3 cursor-pointer transition-all hover:shadow-lg ${selectedBlock === b.number ? 'border-primary bg-primary/5 shadow-lg' : 'bg-card'}`}
                    onClick={() => setSelectedBlock(selectedBlock === b.number ? null : b.number)}
                  >
                    <p className="font-bold text-sm mb-2">Block #{b.number.toLocaleString()}</p>
                    <div className="space-y-1 font-mono text-xs text-muted-foreground">
                      <p>Hash: {b.hash.slice(0, 12)}...</p>
                      <p>Prev: {b.prevHash.slice(0, 12)}...</p>
                      <p><CryptoTooltip term="Merkle Root">Merkle</CryptoTooltip>: {b.merkleRoot.slice(0, 12)}...</p>
                      <p>TXs: {b.txCount}</p>
                      <p>{new Date(b.timestamp).toLocaleTimeString()}</p>
                      <p>Validator: {b.validator}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <AnimatePresence>
                {selectedBlock && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4">
                    <h4 className="font-semibold mb-2">Transactions in Block #{selectedBlock.toLocaleString()}</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>TX Hash</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>From DID</TableHead>
                          <TableHead>Resource</TableHead>
                          <TableHead>Sig Algorithm</TableHead>
                          <TableHead>Gas</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {blocks.find(b => b.number === selectedBlock)?.transactions.map(tx => (
                          <TableRow key={tx.hash}>
                            <TableCell><code className="font-mono text-xs">{tx.hash.slice(0, 12)}...</code></TableCell>
                            <TableCell><Badge variant="outline" className="text-xs">{tx.eventType.replace(/_/g, ' ')}</Badge></TableCell>
                            <TableCell><code className="font-mono text-xs">{tx.fromDid.slice(0, 20)}...</code></TableCell>
                            <TableCell className="text-sm">{tx.toResource}</TableCell>
                            <TableCell className="text-xs"><CryptoTooltip term="Dilithium3">{tx.signatureAlgorithm}</CryptoTooltip></TableCell>
                            <TableCell className="text-xs">{tx.gasUsed.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm text-muted-foreground">
                <p>Each block's hash is computed using <CryptoTooltip term="SHA3-256">SHA3-256</CryptoTooltip> over all its transactions plus the previous block's hash. Altering any past transaction would invalidate every subsequent block — making the audit trail cryptographically tamper-proof.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Network Validator Nodes</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {validatorNodes.map(n => (
                  <div key={n.id} className="rounded-lg border p-3 flex items-start gap-3">
                    <Server className={`h-5 w-5 mt-0.5 ${n.status === 'online' ? 'text-success' : 'text-destructive'}`} />
                    <div className="text-sm space-y-1">
                      <p className="font-semibold">{n.name} <Badge variant="outline" className="text-xs ml-1">{n.role}</Badge></p>
                      <p className={`text-xs ${n.status === 'online' ? 'text-success' : 'text-destructive'}`}>{n.status.toUpperCase()}</p>
                      <p className="text-xs text-muted-foreground">IP: {n.ip}</p>
                      <p className="text-xs text-muted-foreground">Blocks: {n.blocksValidated.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground"><CryptoTooltip term="PBFT">{n.consensusProtocol}</CryptoTooltip></p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                This network uses <CryptoTooltip term="PBFT">Practical Byzantine Fault Tolerance (PBFT)</CryptoTooltip> consensus. The network remains secure even if up to ⌊(9-1)/3⌋ = 2 nodes are compromised or offline simultaneously.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Access Policies */}
        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Visual RBAC Policy Editor</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {smartContractPolicies.map(p => (
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
                    <span>Updated: Block #{p.lastUpdatedBlock.toLocaleString()}</span>
                    <span>By: <code className="font-mono">{p.updatedByDid.slice(0, 20)}...</code></span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: Audit Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-sm">Authentication Events (30 Days)</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={authData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="successful" stroke="hsl(var(--success))" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="failed" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="revocations" stroke="hsl(var(--warning))" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Access Requests by Department</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={deptData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="department" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="approved" fill="hsl(var(--success))" />
                    <Bar dataKey="denied" fill="hsl(var(--destructive))" />
                    <Bar dataKey="pending" fill="hsl(var(--warning))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Credential Health</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={credData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                      {credData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Blockchain TX Volume (30 Days)</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={txVolData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Area type="monotone" dataKey="transactions" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Anomaly Alerts */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Anomaly Detection Alerts</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {alerts.map(a => (
                <div key={a.id} className={`p-3 rounded-lg border flex items-start gap-3 ${a.severity === 'critical' ? 'bg-destructive/5 border-destructive/30' : a.severity === 'high' ? 'bg-warning/5 border-warning/30' : 'bg-muted/30'}`}>
                  <AlertTriangle className={`h-4 w-4 mt-0.5 ${a.severity === 'critical' ? 'text-destructive' : a.severity === 'high' ? 'text-warning' : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <p className="text-sm">{a.message}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">TX: {a.txHash} | {new Date(a.timestamp).toLocaleString()}</p>
                  </div>
                  {!a.reviewed ? (
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => markReviewed(a.id)}>
                      <Eye className="h-3 w-3 mr-1" />Mark Reviewed
                    </Button>
                  ) : (
                    <Badge variant="outline" className="text-success text-xs">Reviewed ✓</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Full Audit Log */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Full System Audit Log</CardTitle>
              <Button size="sm" variant="outline" className="gap-2"><Download className="h-4 w-4" />Export CSV</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Actor</TableHead>
                    <TableHead>Resource</TableHead>
                    <TableHead>TX Hash</TableHead>
                    <TableHead>Block</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditEvents.map(e => (
                    <TableRow key={e.id}>
                      <TableCell><Badge variant="outline" className="text-xs">{e.eventType.replace(/_/g, ' ')}</Badge></TableCell>
                      <TableCell className="text-sm">{e.actor}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{e.resource}</TableCell>
                      <TableCell><code className="font-mono text-xs">{e.txHash.slice(0, 12)}...</code></TableCell>
                      <TableCell>#{e.blockNumber.toLocaleString()}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{new Date(e.timestamp).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 5: Quantum Security */}
        <TabsContent value="quantum" className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Current Cryptographic Profile</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Signature Algorithm', value: 'CRYSTALS-Dilithium3', standard: 'NIST FIPS 204', term: 'Dilithium3' },
                  { label: 'Key Encapsulation', value: 'CRYSTALS-Kyber768', standard: 'NIST FIPS 203', term: 'Kyber768' },
                  { label: 'Hash Function', value: 'SHA3-256', standard: 'NIST FIPS 202', term: 'SHA3-256' },
                  { label: 'ZKP Scheme', value: 'Groth16 zk-SNARKs', standard: '', term: 'Groth16' },
                  { label: 'Blockchain Consensus', value: 'PBFT', standard: 'Byzantine Fault Tolerant', term: 'PBFT' },
                  { label: 'Security Level', value: '128-bit post-quantum', standard: '', term: 'Post-Quantum' },
                ].map(c => (
                  <div key={c.label} className="p-3 rounded-lg border bg-muted/20">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="font-semibold text-sm"><CryptoTooltip term={c.term}>{c.value}</CryptoTooltip></p>
                    {c.standard && <p className="text-xs text-muted-foreground">{c.standard}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Key Rotation Schedule</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Last Rotation:</span> Block #12,000 — March 1, 2026</div>
                <div><span className="text-muted-foreground">Next Rotation:</span> Block #17,000 — June 1, 2026</div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Block #12,000</span>
                  <span>{rotationProgress}%</span>
                  <span>Block #17,000</span>
                </div>
                <Progress value={rotationProgress} className="h-3" />
              </div>
              <Button variant="destructive" onClick={handleKeyRotation} disabled={keyRotating} className="gap-2">
                <Shield className="h-4 w-4" />{keyRotating ? 'Rotating...' : 'Trigger Emergency Key Rotation'}
              </Button>
              <AnimatePresence>
                {keyRotStep > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-sm">
                    {keyRotStep >= 1 && <div className="flex items-center gap-2">{keyRotStep === 1 ? <Loader2 className="h-4 w-4 animate-spin text-destructive" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Initiating system-wide key rotation protocol...</div>}
                    {keyRotStep >= 2 && <div className="flex items-center gap-2">{keyRotStep === 2 ? <Loader2 className="h-4 w-4 animate-spin text-destructive" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Generating new <CryptoTooltip term="Dilithium">Dilithium</CryptoTooltip> key pairs for all 47 active identities...</div>}
                    {keyRotStep >= 3 && <div className="flex items-center gap-2">{keyRotStep === 3 ? <Loader2 className="h-4 w-4 animate-spin text-destructive" /> : <CheckCircle2 className="h-4 w-4 text-success" />} Broadcasting batch credential update transaction...</div>}
                    {keyRotStep >= 4 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-lg bg-success/10 text-success text-xs font-mono">
                        ✓ Old keys invalidated | New keys registered | 47 DID Documents updated | Block #{(currentBlock + 1).toLocaleString()}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Quantum Threat Monitor</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border bg-success/5 border-success/20">
                <span className="text-2xl">🟢</span>
                <div>
                  <p className="font-bold">Current Threat Level: LOW</p>
                  <p className="text-sm text-muted-foreground">No publicly known quantum computers exceed 1,000 stable qubits as of current intelligence. Cryptographically relevant quantum attacks require an estimated 4,000+ logical qubits. HelixID's <CryptoTooltip term="Post-Quantum">post-quantum algorithms</CryptoTooltip> remain secure.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3">Projected Quantum Computing Timeline</h4>
                <div className="space-y-3">
                  {[
                    { year: '2024', qubits: '1,200', event: 'Current state — early NISQ era', danger: false },
                    { year: '2027', qubits: '~4,000', event: 'RSA-2048 theoretically breakable', danger: true },
                    { year: '2030', qubits: '~10,000', event: 'ECC P-256 compromised', danger: true },
                    { year: '2035+', qubits: '100,000+', event: 'Full cryptographic quantum advantage', danger: true },
                  ].map(m => (
                    <div key={m.year} className="flex items-center gap-4">
                      <span className="font-mono font-bold text-sm w-12">{m.year}</span>
                      <div className={`flex-1 p-2 rounded text-xs ${m.danger ? 'bg-destructive/5 border border-destructive/20' : 'bg-success/5 border border-success/20'}`}>
                        <span className="font-medium">{m.qubits} qubits</span> — {m.event}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">HelixID was built today with algorithms that will remain secure through all projected milestones.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
