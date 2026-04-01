import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { Role } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Key, FileCheck, Lock, BarChart3, UserCircle, Stethoscope, Users, Settings, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const archNodes = [
  { label: 'Patient / Staff Device', desc: 'The user authenticates from their personal device or hospital workstation. A locally-generated post-quantum key pair ensures only the device holder can initiate sessions.' },
  { label: 'Quantum-Safe Auth Layer', sub: 'CRYSTALS-Kyber Key Exchange +\nDilithium Signature Verification', desc: 'Authentication uses CRYSTALS-Kyber for key encapsulation (establishing a shared secret) and CRYSTALS-Dilithium for digital signature verification — both NIST-standardized post-quantum algorithms.' },
  { label: 'Smart Contract RBAC Engine', sub: 'Access Policy Enforcement', desc: 'Role-based access control rules are encoded as immutable smart contracts on the blockchain. No database administrator can override these policies — they exist only on the ledger.' },
  { label: 'Permissioned Blockchain Ledger', sub: 'Hyperledger Fabric — Immutable Audit Trail', desc: 'Every access event, credential change, and policy update is recorded as a transaction in a permissioned blockchain. The data is cryptographically chained and tamper-proof.' },
  { label: 'Hospital EHR / Resource', desc: 'The actual electronic health records and hospital resources. Access is only granted after all preceding layers have verified identity, authorization, and consent.' },
];

const steps = [
  { icon: UserCircle, title: 'Identity Registration', desc: 'A Decentralized Identifier (DID) is created, post-quantum key pairs are generated on the user\'s device, and the public keys are registered on the blockchain.' },
  { icon: Key, title: 'Quantum-Safe Authentication', desc: 'Login initiates a CRYSTALS-Kyber key encapsulation handshake followed by a Dilithium-signed challenge-response — secure against both classical and quantum attacks.' },
  { icon: FileCheck, title: 'Smart Contract Access Check', desc: 'The on-chain RBAC policy smart contract evaluates the requester\'s role, department, and patient consent status to determine if access should be granted.' },
  { icon: Lock, title: 'Resource Access Granted/Denied', desc: 'The access decision is logged immutably to the blockchain ledger with a full audit trail including TX hash, block number, and signer DID.' },
  { icon: BarChart3, title: 'Audit & Compliance', desc: 'Every action across the entire hospital network is permanently recorded. The tamper-proof history is available for compliance review, anomaly detection, and forensic analysis.' },
];

const roleButtons: { role: Role; label: string; icon: React.ElementType; desc: string }[] = [
  { role: 'patient', label: 'Enter as Patient — Aisha Patel', icon: UserCircle, desc: 'View your identity, health records, and consent controls' },
  { role: 'staff', label: 'Enter as Hospital Staff — Dr. James Okafor', icon: Stethoscope, desc: 'Access patient records and request cross-department permissions' },
  { role: 'department_head', label: 'Enter as Department Head — Dr. Meera Nair', icon: Users, desc: 'Approve access requests and manage department policies' },
  { role: 'admin', label: 'Enter as IT Admin — Robert Chen', icon: Settings, desc: 'Full system control: identities, blockchain, policies, security' },
];

const Index = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = (role: Role) => {
    login(role);
    const paths: Record<Role, string> = { patient: '/patient', staff: '/staff', department_head: '/moderator', admin: '/admin' };
    navigate(paths[role]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 pt-16 pb-12 max-w-6xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="text-5xl font-extrabold tracking-tight">HelixID</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quantum-Resistant Decentralized Identity for Healthcare — Where Patient Privacy Meets Cryptographic Certainty
            </p>
          </motion.div>

          {/* Architecture Flow Diagram */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-0 mb-16">
            {archNodes.map((node, i) => (
              <div key={i} className="flex flex-col items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="glass-card-strong rounded-xl px-6 py-4 text-center cursor-pointer max-w-md w-full hover:shadow-xl transition-shadow"
                    >
                      <p className="font-semibold text-sm">{node.label}</p>
                      {node.sub && <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line font-mono">{node.sub}</p>}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm" side="right">
                    <p className="text-sm leading-relaxed">{node.desc}</p>
                  </TooltipContent>
                </Tooltip>
                {i < archNodes.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-0.5 bg-primary/40 flex items-center justify-center"
                  >
                    <span className="text-primary text-xs">↓</span>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Quantum Resistance */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="border-primary/30 bg-primary/5 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-bold mb-2">Why Quantum Resistance?</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Today's hospital records are protected by RSA and ECC encryption. A sufficiently powerful quantum computer — expected within 10–15 years — can break these algorithms retroactively. HelixID uses NIST-standardized post-quantum algorithms (CRYSTALS-Dilithium, CRYSTALS-Kyber) so that records encrypted today remain secure even in a post-quantum world.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Demo Login Panel */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-center mb-6">Enter the Demo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roleButtons.map((rb) => (
              <motion.div key={rb.role} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Card className="cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all h-full" onClick={() => handleLogin(rb.role)}>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <rb.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{rb.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{rb.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            In production: login triggers a CRYSTALS-Kyber key encapsulation handshake followed by a Dilithium-signed challenge-response verified against the user's on-chain DID Document. This demo skips the cryptographic handshake and simulates the post-authentication state.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 max-w-5xl pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-center mb-3">
                      <div className="rounded-full bg-primary/10 p-3">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
                    <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        <p>HelixID — Blockchain-Based Quantum-Resistant IAM Demo &middot; All data is simulated for demonstration purposes</p>
      </footer>
    </div>
  );
};

export default Index;
