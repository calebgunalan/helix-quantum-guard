

# HelixID — Quantum-Resistant Identity & Access Management Demo

## Overview
A polished, demo-grade web application showcasing blockchain-based, quantum-resistant IAM for a hospital network. Every screen serves as both a functional demo and an architecture tour with tooltips, animations, and consistent mock data.

## Visual Theme
- **Base:** White/light-gray (#f0f4f8) background
- **Primary:** Deep teal (#0d6b74)
- **Alert:** Red (#dc2626), Green (#16a34a)
- **Sidebar:** Midnight (#0f1923)
- **Monospace font** for all crypto values (hashes, DIDs, keys)
- **Glassmorphism cards** for identity components
- Clean, clinical, high-security aesthetic

## Core Architecture

### State Management (Zustand)
- Auth store: current role, user profile, role switching
- Blockchain store: blocks, transactions, network nodes, smart contracts
- Consistent mock data seed used across all stores (patients, staff, DIDs, TX hashes, block numbers)

### Routing
- `/` — Landing page
- `/patient` — Patient Portal (Aisha Patel)
- `/staff` — Hospital Staff Dashboard (Dr. James Okafor)
- `/moderator` — Department Head Dashboard (Dr. Meera Nair)
- `/admin` — IT Admin Dashboard (Robert Chen) with 5 tabs

### Global Components (all dashboard pages)
1. **Top Nav Bar** — Role switcher dropdown with demo disclaimer tooltip
2. **Architecture Sidebar** (right, collapsible) — Full system diagram highlighting current page's component
3. **Blockchain Transaction Toast** — Bottom-right toast for every mock TX (pending → confirmed animation)
4. **Cryptography Tooltip System** — ℹ️ tooltips on every technical term (Dilithium, Kyber, zk-SNARK, DID, PBFT, Merkle Root, SHA3-256, etc.)

## Pages & Features

### 1. Landing Page ( / )
- **Hero** with title, tagline, and animated architecture flow diagram (5 clickable nodes with tooltip explanations)
- **"Why Quantum Resistance?"** prominent explainer card
- **Demo Login Panel** — 4 role buttons with authentication explanation note
- **How It Works** — 5-step illustrated walkthrough (Registration → Auth → Smart Contract Check → Access → Audit)

### 2. Patient Portal ( /patient )
- **Identity Card** — Full DID details, credential info, key algorithm with tooltips, status badge
- **"Verify My Identity" button** — Animated 3-step verification sequence (fetch DID → verify signature → confirmed)
- **Health Records Table** — 5 record types with consent toggles that trigger mock on-chain TX toasts
- **ZKP Credential Presentation** — "Generate ZK Proof" button with animated Groth16 proof generation, mock proof object display
- **Access Log Timeline** — Immutable record of who accessed what, with TX hashes and block numbers

### 3. Staff Dashboard ( /staff )
- **Header** with Dr. Okafor's identity badge and DID
- **My Patients Panel** — Patient list with consent status, access levels, smart contract addresses
- **Request Cross-Department Access** — Modal with fields, animated 3-step blockchain submission sequence
- **Current Access Permissions Table** — Resource, patient, access level, smart contract, block numbers
- **Blockchain Activity Log** — Last 10 events with TX hashes

### 4. Department Head Dashboard ( /moderator )
- **Pending Access Requests** — Table with risk levels, approve/deny actions triggering animated on-chain policy updates
- **Smart Contract Policy Viewer** — Human-readable RBAC rule cards with contract metadata
- **Department Staff Grid** — Identity cards with credential status, key validity, renewal flags
- **Department Audit Trail** — Expandable rows showing full block details (hash, prev hash, Merkle root, validator, signature), filterable

### 5. IT Admin Dashboard ( /admin ) — 5 Tabs

**Tab 1: Identity Management**
- Full user table (all roles) with actions
- 5-step onboarding wizard with animated key generation, DID creation, blockchain registration
- Identity revocation flow with confirmation and animated on-chain revocation

**Tab 2: Blockchain Explorer**
- Horizontal scrollable chain of 8 block cards connected by hash links
- Click block → drawer with transaction details
- Explainer callout on tamper-proof chaining
- 9 validator node status cards with PBFT consensus explanation

**Tab 3: Access Policy Management**
- Visual RBAC rule cards (human-readable, not code)
- "Add New Policy" → form → animated smart contract deployment sequence
- Policy change history log

**Tab 4: Audit Analytics (Recharts)**
- Line chart: Auth events over 30 days
- Bar chart: Access requests by department
- Pie chart: Credential health distribution
- Area chart: Blockchain TX volume
- Anomaly detection alerts panel with "Mark Reviewed" actions
- Full system audit log with filters and mock CSV export

**Tab 5: Quantum Security Configuration**
- Cryptographic profile card (all algorithms with tooltips)
- Key rotation schedule with progress bar and emergency rotation button (dramatic animated sequence)
- Quantum Threat Monitor — threat level, qubit timeline, RSA-2048 breakpoint visualization

## Mock Data Consistency
All data uses a single shared seed:
- 3 patients, 3 staff, 1 dept head, 1 admin — all with fixed DIDs
- 3 smart contract addresses used consistently
- Block range: #12,400 (oldest) to #14,856 (current)
- All TX hashes and block references cross-referenced correctly across pages

## Animations (Framer Motion)
- Architecture flow diagram node animations
- Multi-step verification/transaction sequences with spinners and state transitions
- Block chain card entrance animations
- Toast transition (pending → confirmed)
- Key generation and ZK proof generation sequences
- Emergency key rotation dramatic sequence

## Dependencies to Install
- `zustand` for state management
- `recharts` for analytics charts
- `framer-motion` for animations

