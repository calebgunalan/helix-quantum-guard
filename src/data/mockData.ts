// ============================================================
// HelixID — Consistent Mock Data Seed
// All DIDs, TX hashes, block numbers are cross-referenced
// ============================================================

export type Role = 'patient' | 'staff' | 'department_head' | 'admin';

export interface Identity {
  id: string;
  name: string;
  did: string;
  role: Role;
  department: string;
  credentialStatus: 'active' | 'expired' | 'revoked' | 'pending';
  credentialHash: string;
  publicKeyDilithium: string;
  publicKeyKyber: string;
  issuedAtBlock: number;
  lastAuthBlock: number;
  lastLogin: string;
}

export interface Patient extends Identity {
  ward: string;
  bloodType: string;
}

export interface Block {
  number: number;
  hash: string;
  prevHash: string;
  merkleRoot: string;
  txCount: number;
  timestamp: string;
  validator: string;
  transactions: Transaction[];
}

export interface Transaction {
  hash: string;
  eventType: string;
  fromDid: string;
  toResource: string;
  signatureAlgorithm: string;
  gasUsed: number;
  status: 'confirmed' | 'pending' | 'failed';
  blockNumber: number;
  timestamp: string;
}

export interface AccessRequest {
  id: string;
  requestorDid: string;
  requestorName: string;
  patientDid: string;
  patientName: string;
  recordsRequested: string[];
  reason: string;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'denied';
  txHash: string;
  blockNumber: number;
  patientConsent: boolean;
}

export interface SmartContractPolicy {
  id: string;
  ruleNumber: number;
  condition: string;
  action: string;
  resource: string;
  level: string;
  duration?: string;
  contractAddress: string;
  deployedAtBlock: number;
  lastUpdatedBlock: number;
  updatedByDid: string;
}

export interface ValidatorNode {
  id: string;
  name: string;
  status: 'online' | 'offline';
  ip: string;
  blocksValidated: number;
  role: 'leader' | 'follower';
  consensusProtocol: string;
}

export interface HealthRecord {
  id: string;
  type: string;
  lastUpdated: string;
  accessGrantedTo: string[];
  consentStatus: boolean;
}

export interface AuditEvent {
  id: string;
  eventType: string;
  actor: string;
  actorDid: string;
  resource: string;
  timestamp: string;
  txHash: string;
  blockNumber: number;
  details: string;
  department: string;
}

export interface AnomalyAlert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  txHash: string;
  timestamp: string;
  reviewed: boolean;
}

// ---- SMART CONTRACT ADDRESSES ----
export const CONTRACTS = {
  rbacPolicy: '0x8c2f4a7d1e3b9c5f',
  identityRegistry: '0x3e7b1c9d4f2a8e5c',
  credentialRevocation: '0x5d1a3f8c2e4b7a9d',
} as const;

// ---- IDENTITIES ----
export const patients: Patient[] = [
  {
    id: 'p1', name: 'Aisha Patel', did: 'did:helix:0x3c7f2a9d1e4b',
    role: 'patient', department: 'Cardiology', ward: 'Cardiology Ward A',
    credentialStatus: 'active', bloodType: 'O+',
    credentialHash: '0xa7f3c9e1d4b2856f3e7a1c9d4f2b8e5c3a7d1f9e',
    publicKeyDilithium: '0x4d696c697468333a3f7c2e9d1b5a4f8c3e7b2d6a9f1c4e8b5d3a7f2c9e1b6d4a8f3c7e2b5d9a1f4c8e3b7d6a2f5c9e1b',
    publicKeyKyber: '0x4b79626572373638a9d1e3b7c5f2a4d8c6b3e7f1a9c5d2b8e4f7a3c1d6b9e5f2a8c4d1b7e3f6a2c9d5b1e8f4a7c3d6b2',
    issuedAtBlock: 12441, lastAuthBlock: 14831, lastLogin: '2026-03-31T09:14:00Z',
  },
  {
    id: 'p2', name: 'Samuel Torres', did: 'did:helix:0x8d1e3b7c5f2a',
    role: 'patient', department: 'Neurology', ward: 'Neurology Ward B',
    credentialStatus: 'active', bloodType: 'A-',
    credentialHash: '0xb8e4f7a3c1d6b9e5f2a8c4d1b7e3f6a2c9d5b1e8',
    publicKeyDilithium: '0x4d696c697468333b8e4f7a3c1d6b9e5f2a8c4d1b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7',
    publicKeyKyber: '0x4b796265723736388d1e3b7c5f2a4d8c6b3e7f1a9c5d2b8e4f7a3c1d6b9e5f2a8c4d1b7e3f6a2c9d5b1e8f4a7c3d6b2',
    issuedAtBlock: 12502, lastAuthBlock: 14820, lastLogin: '2026-03-30T14:22:00Z',
  },
  {
    id: 'p3', name: 'Lin Wei', did: 'did:helix:0x5a9f4c2e7b1d',
    role: 'patient', department: 'Emergency', ward: 'Emergency Wing',
    credentialStatus: 'active', bloodType: 'B+',
    credentialHash: '0xc9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5',
    publicKeyDilithium: '0x4d696c697468333c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8',
    publicKeyKyber: '0x4b796265723736385a9f4c2e7b1d4d8c6b3e7f1a9c5d2b8e4f7a3c1d6b9e5f2a8c4d1b7e3f6a2c9d5b1e8f4a7c3d6b2',
    issuedAtBlock: 12589, lastAuthBlock: 14845, lastLogin: '2026-04-01T07:45:00Z',
  },
];

export const staff: Identity[] = [
  {
    id: 's1', name: 'Dr. James Okafor', did: 'did:helix:0x4a3f9c2d8b1e',
    role: 'staff', department: 'Cardiology',
    credentialStatus: 'active',
    credentialHash: '0xd6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2',
    publicKeyDilithium: '0x4d696c697468333d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1',
    publicKeyKyber: '0x4b79626572373638d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1',
    issuedAtBlock: 12400, lastAuthBlock: 14847, lastLogin: '2026-04-01T08:30:00Z',
  },
  {
    id: 's2', name: 'Nurse Priya Sharma', did: 'did:helix:0x7d2c5f9a3e4b',
    role: 'staff', department: 'Neurology',
    credentialStatus: 'active',
    credentialHash: '0xe8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4',
    publicKeyDilithium: '0x4d696c697468333e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3',
    publicKeyKyber: '0x4b79626572373638e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3',
    issuedAtBlock: 12455, lastAuthBlock: 14839, lastLogin: '2026-03-31T16:10:00Z',
  },
  {
    id: 's3', name: 'Dr. Kevin Walsh', did: 'did:helix:0x2b8e7f1c6d9a',
    role: 'staff', department: 'Emergency',
    credentialStatus: 'expired',
    credentialHash: '0xf1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5',
    publicKeyDilithium: '0x4d696c697468333f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4',
    publicKeyKyber: '0x4b79626572373638f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4',
    issuedAtBlock: 12478, lastAuthBlock: 14710, lastLogin: '2026-03-28T11:55:00Z',
  },
];

export const departmentHead: Identity = {
  id: 'dh1', name: 'Dr. Meera Nair', did: 'did:helix:0x9e4a2f7c1b5d',
  role: 'department_head', department: 'Neurology',
  credentialStatus: 'active',
  credentialHash: '0xa2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9',
  publicKeyDilithium: '0x4d696c697468333a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1',
  publicKeyKyber: '0x4b79626572373638a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1',
  issuedAtBlock: 12420, lastAuthBlock: 14852, lastLogin: '2026-04-01T10:05:00Z',
};

export const admin: Identity = {
  id: 'a1', name: 'Robert Chen', did: 'did:helix:0x1c6b9d3e8f2a',
  role: 'admin', department: 'IT Security',
  credentialStatus: 'active',
  credentialHash: '0xb7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3',
  publicKeyDilithium: '0x4d696c697468333b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2',
  publicKeyKyber: '0x4b79626572373638b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2c9d5b1e8f4a7c3d6b2e9f1a5c8d4b7e3f6a2',
  issuedAtBlock: 12401, lastAuthBlock: 14856, lastLogin: '2026-04-01T14:32:00Z',
};

export const allIdentities: Identity[] = [...patients, ...staff, departmentHead, admin];

export function getUserByRole(role: Role): Identity {
  switch (role) {
    case 'patient': return patients[0];
    case 'staff': return staff[0];
    case 'department_head': return departmentHead;
    case 'admin': return admin;
  }
}

// ---- HEALTH RECORDS (Aisha Patel) ----
export const healthRecords: HealthRecord[] = [
  { id: 'hr1', type: 'Blood Type', lastUpdated: '2024-06-15', accessGrantedTo: ['Dr. James Okafor'], consentStatus: true },
  { id: 'hr2', type: 'Allergy List', lastUpdated: '2024-09-22', accessGrantedTo: ['Dr. James Okafor', 'Nurse Priya Sharma'], consentStatus: true },
  { id: 'hr3', type: 'Cardiology Report (Nov 2024)', lastUpdated: '2024-11-10', accessGrantedTo: ['Dr. James Okafor'], consentStatus: true },
  { id: 'hr4', type: 'Surgery History', lastUpdated: '2023-03-14', accessGrantedTo: [], consentStatus: false },
  { id: 'hr5', type: 'Prescription History', lastUpdated: '2025-01-08', accessGrantedTo: ['Dr. James Okafor'], consentStatus: true },
];

// ---- BLOCKCHAIN BLOCKS ----
function generateBlocks(): Block[] {
  const blocks: Block[] = [];
  const baseTime = new Date('2026-04-01T14:30:00Z');
  const eventTypes = ['RECORD_ACCESSED', 'ACCESS_REQUESTED', 'LOGIN_VERIFIED', 'CREDENTIAL_RENEWED', 'CONSENT_CONFIRMED', 'POLICY_UPDATED', 'IDENTITY_REGISTERED'];

  for (let i = 0; i < 8; i++) {
    const blockNum = 14849 + i;
    const txCount = 2 + (i % 3);
    const txs: Transaction[] = [];
    for (let j = 0; j < txCount; j++) {
      txs.push({
        hash: `0x${(blockNum * 1000 + j).toString(16).padStart(12, '0')}`,
        eventType: eventTypes[(i * txCount + j) % eventTypes.length],
        fromDid: allIdentities[(i + j) % allIdentities.length].did,
        toResource: j % 2 === 0 ? 'cardiology_records' : 'neurology_records',
        signatureAlgorithm: 'CRYSTALS-Dilithium3',
        gasUsed: 21000 + (i * 1000) + (j * 500),
        status: 'confirmed',
        blockNumber: blockNum,
        timestamp: new Date(baseTime.getTime() + (i * 2800 + j * 400)).toISOString(),
      });
    }
    blocks.push({
      number: blockNum,
      hash: `0x${(blockNum * 7919).toString(16).padStart(16, '0')}`,
      prevHash: i === 0 ? '0x0000000000000000' : `0x${((blockNum - 1) * 7919).toString(16).padStart(16, '0')}`,
      merkleRoot: `0x${(blockNum * 3571).toString(16).padStart(16, '0')}`,
      txCount,
      timestamp: new Date(baseTime.getTime() + i * 2800).toISOString(),
      validator: `Node-0${(i % 9) + 1}`,
      transactions: txs,
    });
  }
  return blocks;
}
export const blocks: Block[] = generateBlocks();

// ---- VALIDATOR NODES ----
export const validatorNodes: ValidatorNode[] = Array.from({ length: 9 }, (_, i) => ({
  id: `node-${i + 1}`,
  name: `Node-0${i + 1}`,
  status: i === 5 ? 'offline' as const : 'online' as const,
  ip: `192.168.1.${10 + i}`,
  blocksValidated: 2400 + Math.floor(Math.random() * 200),
  role: i === 0 ? 'leader' as const : 'follower' as const,
  consensusProtocol: 'PBFT',
}));

// ---- ACCESS REQUESTS ----
export const accessRequests: AccessRequest[] = [
  {
    id: 'ar1', requestorDid: staff[0].did, requestorName: staff[0].name,
    patientDid: patients[1].did, patientName: patients[1].name,
    recordsRequested: ['Scan Results', 'Medication History'],
    reason: 'Cardiology referral — patient presenting with cardiac arrhythmia symptoms requiring cross-department neurological assessment.',
    duration: '72h', riskLevel: 'medium', status: 'pending',
    txHash: '0x7b3d9f2a1c4e8b5d', blockNumber: 14847, patientConsent: true,
  },
  {
    id: 'ar2', requestorDid: staff[2].did, requestorName: staff[2].name,
    patientDid: patients[1].did, patientName: patients[1].name,
    recordsRequested: ['Allergy List'],
    reason: 'Emergency admission requires allergy verification before medication administration.',
    duration: '24h', riskLevel: 'high', status: 'pending',
    txHash: '0x3e8b5d7a2c1f9d4e', blockNumber: 14850, patientConsent: false,
  },
];

// ---- SMART CONTRACT POLICIES ----
export const smartContractPolicies: SmartContractPolicy[] = [
  {
    id: 'scp1', ruleNumber: 1,
    condition: "role == 'hospital_staff' AND department == 'cardiology' AND patient.consent == true",
    action: 'ALLOW', resource: 'cardiology_records', level: 'read-write', duration: '72h',
    contractAddress: CONTRACTS.rbacPolicy, deployedAtBlock: 13201, lastUpdatedBlock: 14711,
    updatedByDid: admin.did,
  },
  {
    id: 'scp2', ruleNumber: 2,
    condition: "role == 'department_head' AND department == requestedDepartment",
    action: 'ALLOW', resource: 'all_department_records', level: 'read-write',
    contractAddress: CONTRACTS.rbacPolicy, deployedAtBlock: 13201, lastUpdatedBlock: 14500,
    updatedByDid: admin.did,
  },
  {
    id: 'scp3', ruleNumber: 3,
    condition: "role == 'hospital_staff' AND department != record.department AND department_head.approval == true AND patient.consent == true",
    action: 'ALLOW', resource: 'cross_department_records', level: 'read', duration: '24h',
    contractAddress: CONTRACTS.rbacPolicy, deployedAtBlock: 13450, lastUpdatedBlock: 14711,
    updatedByDid: departmentHead.did,
  },
  {
    id: 'scp4', ruleNumber: 4,
    condition: "role == 'patient' AND patient.did == record.subject",
    action: 'ALLOW', resource: 'own_records', level: 'read',
    contractAddress: CONTRACTS.rbacPolicy, deployedAtBlock: 13201, lastUpdatedBlock: 13201,
    updatedByDid: admin.did,
  },
  {
    id: 'scp5', ruleNumber: 5,
    condition: "role == 'admin'",
    action: 'ALLOW', resource: 'system_configuration', level: 'admin',
    contractAddress: CONTRACTS.rbacPolicy, deployedAtBlock: 12401, lastUpdatedBlock: 14200,
    updatedByDid: admin.did,
  },
];

// ---- AUDIT EVENTS ----
export const auditEvents: AuditEvent[] = [
  { id: 'ae1', eventType: 'RECORD_ACCESSED', actor: 'Dr. James Okafor', actorDid: staff[0].did, resource: 'Cardiology Report — Aisha Patel', timestamp: '2024-11-12T09:14:00Z', txHash: '0x4f2c8a1d3e7b9f5c', blockNumber: 14831, details: 'Read access to cardiology report for scheduled review.', department: 'Cardiology' },
  { id: 'ae2', eventType: 'CONSENT_CONFIRMED', actor: 'Aisha Patel', actorDid: patients[0].did, resource: 'Prescription History', timestamp: '2025-01-08T11:30:00Z', txHash: '0x2a7f9c1d3e8b5d4f', blockNumber: 14835, details: 'Patient granted read access for prescription history.', department: 'Cardiology' },
  { id: 'ae3', eventType: 'ACCESS_REQUESTED', actor: 'Dr. James Okafor', actorDid: staff[0].did, resource: 'Neurology Records — Samuel Torres', timestamp: '2026-03-31T14:22:00Z', txHash: '0x7b3d9f2a1c4e8b5d', blockNumber: 14847, details: 'Cross-department access request for cardiology referral.', department: 'Neurology' },
  { id: 'ae4', eventType: 'LOGIN_VERIFIED', actor: 'Dr. Meera Nair', actorDid: departmentHead.did, resource: 'System Auth', timestamp: '2026-04-01T10:05:00Z', txHash: '0x5c8d4b7e3f6a2c9d', blockNumber: 14850, details: 'Dilithium signature verified. Session initiated.', department: 'Neurology' },
  { id: 'ae5', eventType: 'POLICY_UPDATED', actor: 'Robert Chen', actorDid: admin.did, resource: 'RBAC Policy Contract', timestamp: '2026-03-28T16:40:00Z', txHash: '0x9f1a5c8d4b7e3f6a', blockNumber: 14711, details: 'Updated cross-department access policy duration from 48h to 24h.', department: 'IT Security' },
  { id: 'ae6', eventType: 'CREDENTIAL_RENEWED', actor: 'Nurse Priya Sharma', actorDid: staff[1].did, resource: 'Staff Credential', timestamp: '2026-03-29T08:15:00Z', txHash: '0x3f6a2c9d5b1e8f4a', blockNumber: 14720, details: 'Dilithium key pair renewed. New credential hash registered.', department: 'Neurology' },
  { id: 'ae7', eventType: 'RECORD_ACCESSED', actor: 'Nurse Priya Sharma', actorDid: staff[1].did, resource: 'Allergy List — Aisha Patel', timestamp: '2024-10-05T13:45:00Z', txHash: '0x8b5d7a2c1f9d4e3e', blockNumber: 14810, details: 'Allergy verification before medication change.', department: 'Neurology' },
  { id: 'ae8', eventType: 'ACCESS_REQUESTED', actor: 'Dr. Kevin Walsh', actorDid: staff[2].did, resource: 'Neurology Records — Samuel Torres', timestamp: '2026-04-01T07:50:00Z', txHash: '0x3e8b5d7a2c1f9d4e', blockNumber: 14850, details: 'Emergency allergy verification request.', department: 'Emergency' },
  { id: 'ae9', eventType: 'LOGIN_VERIFIED', actor: 'Robert Chen', actorDid: admin.did, resource: 'System Auth', timestamp: '2026-04-01T14:32:00Z', txHash: '0x6a2c9d5b1e8f4a7c', blockNumber: 14856, details: 'Admin session initiated. Full system access enabled.', department: 'IT Security' },
  { id: 'ae10', eventType: 'IDENTITY_REGISTERED', actor: 'Robert Chen', actorDid: admin.did, resource: 'New Staff Identity', timestamp: '2026-03-15T09:00:00Z', txHash: '0x1e8f4a7c3d6b2e9f', blockNumber: 14600, details: 'Registered new emergency department nurse identity on-chain.', department: 'IT Security' },
];

// ---- ANOMALY ALERTS ----
export const anomalyAlerts: AnomalyAlert[] = [
  { id: 'aa1', severity: 'high', message: 'Dr. Kevin Walsh attempted to access neurology records outside their department — request was auto-denied by smart contract.', txHash: '0x4e3f8b5d7a2c1f9d', timestamp: '2026-04-01T06:12:00Z', reviewed: false },
  { id: 'aa2', severity: 'medium', message: "Staff credential for Dr. Kevin Walsh expiring in 3 days — renewal transaction not yet initiated.", txHash: '0x2c1f9d4e3f8b5d7a', timestamp: '2026-03-29T12:00:00Z', reviewed: false },
  { id: 'aa3', severity: 'critical', message: 'Unusual login pattern: 3 authentication attempts from different network nodes within 60 seconds for DID did:helix:0x2b8e7f1c6d9a.', txHash: '0x9d4e3f8b5d7a2c1f', timestamp: '2026-04-01T05:48:00Z', reviewed: false },
  { id: 'aa4', severity: 'low', message: 'Scheduled key rotation approaching: 847 blocks remaining until next system-wide rotation event.', txHash: '0x5d7a2c1f9d4e3f8b', timestamp: '2026-04-01T14:00:00Z', reviewed: true },
];

// ---- ANALYTICS DATA ----
export function generateAuthEventsData() {
  const data = [];
  const base = new Date('2026-03-02');
  for (let i = 0; i < 30; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);
    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      successful: 40 + Math.floor(Math.random() * 25),
      failed: 2 + Math.floor(Math.random() * 8),
      revocations: Math.floor(Math.random() * 3),
    });
  }
  return data;
}

export function generateDeptAccessData() {
  return [
    { department: 'Cardiology', approved: 142, denied: 8, pending: 3 },
    { department: 'Neurology', approved: 98, denied: 14, pending: 5 },
    { department: 'Emergency', approved: 201, denied: 22, pending: 2 },
    { department: 'Radiology', approved: 67, denied: 5, pending: 1 },
    { department: 'Oncology', approved: 54, denied: 7, pending: 4 },
  ];
}

export function generateCredentialHealthData() {
  return [
    { name: 'Valid', value: 38, fill: 'hsl(142, 72%, 37%)' },
    { name: 'Expired', value: 5, fill: 'hsl(38, 92%, 50%)' },
    { name: 'Revoked', value: 2, fill: 'hsl(0, 84%, 60%)' },
    { name: 'Pending Renewal', value: 2, fill: 'hsl(210, 20%, 70%)' },
  ];
}

export function generateTxVolumeData() {
  const data = [];
  const base = new Date('2026-03-02');
  for (let i = 0; i < 30; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);
    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      transactions: 80 + Math.floor(Math.random() * 60),
    });
  }
  return data;
}

// ---- CRYPTO TOOLTIPS ----
export const cryptoTerms: Record<string, string> = {
  'Dilithium': 'CRYSTALS-Dilithium is a NIST-standardized post-quantum digital signature algorithm based on lattice cryptography. It produces signatures that remain secure even against quantum computer attacks.',
  'CRYSTALS-Dilithium': 'CRYSTALS-Dilithium is a NIST-standardized post-quantum digital signature algorithm based on lattice cryptography. It produces signatures that remain secure even against quantum computer attacks.',
  'Dilithium3': 'CRYSTALS-Dilithium3 is the recommended security level of the Dilithium signature scheme, providing 128-bit post-quantum security — equivalent to AES-128 against quantum adversaries.',
  'Kyber': 'CRYSTALS-Kyber is a NIST-standardized post-quantum key encapsulation mechanism (KEM) used to securely establish shared encryption keys, even in the presence of quantum computers.',
  'CRYSTALS-Kyber': 'CRYSTALS-Kyber is a NIST-standardized post-quantum key encapsulation mechanism (KEM) used to securely establish shared encryption keys, even in the presence of quantum computers.',
  'Kyber768': 'CRYSTALS-Kyber768 is the recommended security level of the Kyber KEM, providing 192-bit classical / 128-bit post-quantum security for key exchange operations.',
  'zk-SNARK': 'Zero-Knowledge Succinct Non-Interactive Argument of Knowledge — a cryptographic proof that lets you verify a statement is true without revealing any underlying data.',
  'zk-SNARKs': 'Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge — cryptographic proofs that allow verification of statements without revealing underlying data.',
  'Groth16': 'Groth16 is a highly efficient zk-SNARK proving system that produces constant-size proofs, widely used for privacy-preserving credential verification.',
  'DID': 'Decentralized Identifier — a globally unique, self-sovereign identifier (like did:helix:0x...) that the holder controls, not any central authority.',
  'PBFT': 'Practical Byzantine Fault Tolerance — a consensus protocol that allows a distributed network to agree on transaction order even if up to ⌊(n-1)/3⌋ nodes are faulty or malicious.',
  'Merkle Root': 'A single hash that cryptographically summarizes all transactions in a block. Any change to any transaction would produce a completely different Merkle Root.',
  'SHA3-256': 'SHA3-256 is a NIST-standardized hash function from the Keccak family, producing a 256-bit digest. Unlike SHA-2, it uses a sponge construction resistant to length-extension attacks.',
  'Credential Hash': 'A SHA3-256 hash of the verifiable credential document. This hash is stored on-chain to prove the credential has not been tampered with.',
  'Hyperledger Fabric': 'An enterprise-grade permissioned blockchain framework by the Linux Foundation, designed for business use cases requiring identity management and access control.',
  'Smart Contract': 'Self-executing code deployed on the blockchain that automatically enforces access control policies. No human can override a smart contract rule once deployed.',
  'Post-Quantum': 'Cryptographic algorithms designed to be secure against attacks by both classical and quantum computers, ensuring long-term data protection.',
  'Key Encapsulation': 'A mechanism for securely establishing a shared secret key between two parties, using public-key cryptography resistant to quantum attacks.',
};
