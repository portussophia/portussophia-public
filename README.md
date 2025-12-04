# PortusSophia™ Public Orientation Node

**Domain:** `public.portussophia.com`
**Purpose:** High-level architecture overview and public announcements
**Classification:** WebKernel — Public Layer
**Tone:** Accessible, non-technical, bounded

---

## Repository Structure

```
/
├── _config.yml           # Jekyll config for GitHub Pages
├── index.md              # Landing page (public orientation)
├── structure.md          # Layer and node organization
├── principles.md         # Core design principles
├── faq.md                # Frequently asked questions
├── CNAME                 # Custom domain declaration
└── README.md             # This file
```

---

## Deployment Instructions

### Step 1: Push Content to Existing Repo

```powershell
# From this directory (site-public/public-node/)
git init
git add .
git commit -m "Activate Public Orientation Node — WebKernel layer, Boundary (𝓑) compliant"
git branch -M main
git remote add origin https://github.com/portussophia/portussophia-public.git
git push -u origin main --force
```

### Step 2: Enable GitHub Pages

In repository settings:
1. Navigate to **Settings → Pages**
2. Set **Source:** Deploy from branch `main` → `/ (root)`
3. Set **Custom domain:** `public.portussophia.com`
4. Click **Save**
5. Wait ~5 minutes for GitHub to generate SSL certificate

### Step 3: Configure Cloudflare DNS

In Cloudflare dashboard for `portussophia.com` zone:

1. Navigate to **DNS**
2. Add or update record:
   - **Type:** CNAME
   - **Name:** `public`
   - **Target:** `portussophia.github.io`
   - **TTL:** Auto
   - **Proxy:** DNS only (gray cloud) — for initial debugging
3. Delete any conflicting A records for `public` subdomain

### Step 4: Configure Cloudflare SSL/TLS

In Cloudflare dashboard:
1. Navigate to **SSL/TLS → Overview**
2. Set **Mode:** Full (not Flexible)
3. Navigate to **SSL/TLS → Edge Certificates**
4. Ensure **Always Use HTTPS:** ✅ On
5. Ensure **Minimum TLS Version:** 1.2

### Step 5: Verify Deployment

```powershell
# Test DNS propagation
nslookup public.portussophia.com

# Expected: CNAME → portussophia.github.io → A records

# Test HTTP response (wait 5-10 minutes for propagation)
curl -I https://public.portussophia.com

# Expected: 200 OK
```

---

## Content Guidelines (Boundary Compliance)

### Allowed Content

- High-level architecture overviews
- Non-technical explanations of principles
- Public announcements and milestones
- Orientation summaries
- Navigation to other nodes (when appropriate)
- FAQ and general information

### Prohibited Content

**Per PS-WEB-TOPOLOGY, this node MUST NOT include:**

- Canon documents (reserved for main site)
- Governance artifacts (witness cycles, integrity seals)
- Internal deliberation records
- Private narrative or personal history
- Academic research details (reserved for MIT node)
- Funding vector or commercial information

**Why:**
This node functions as the **Orientation Layer** only. Mixing layers violates Boundary (𝓑) principle and triggers governance alerts.

---

## Maintenance

**Owner:** PeterGate (Governance Steward)
**Content Steward:** Sara Harmonia (tone/language only)
**Approval Authority:** Founder (all content changes require approval)

**Update Process:**
1. Draft content changes locally
2. Review for Boundary compliance (no Canon/Governance content)
3. Obtain Founder approval
4. Commit and push to `main` branch
5. Verify deployment at `public.portussophia.com`

---

## Governance Compliance

**Classification:** Public (WebKernel Layer)
**Distribution:** Unlimited
**Boundary Status:** ✅ Compliant (no Canon/Governance bleed)
**Trademarks:** All PortusSophia™ trademark entities include ™ symbol
**Controlled Lexical Element:** *"Here and Now!"* (if referenced, exact format required)

---

## Navigation Integration

### Inbound Links

- Main site footer: "Public Orientation" → `public.portussophia.com`
- MIT Research Node: Optional link to public-facing overview

### Outbound Links

- Main site: `portussophia.com`
- MIT Research Node: `mit.portussophia.com`
- **No upward navigation** to Canon or Governance layers (boundary enforcement)

---

## Status

**Node Status:** Active
**Last Updated:** 2025-12-04
**Deployment:** Pending (awaiting push to portussophia-public repo)

**Next Actions:**
1. Push content to existing `portussophia/portussophia-public` repo
2. Enable GitHub Pages with custom domain `public.portussophia.com`
3. Configure Cloudflare DNS (CNAME: `public` → `portussophia.github.io`)
4. Configure Cloudflare SSL/TLS (Mode: Full)
5. Verify deployment
6. Update WebKernel Topology Map
7. Record activation in Golden Trace

---

## Golden Trace Entry

Upon successful deployment, record:

**Event:** Public Node Activation
**Comment:** "Public Node established; orientation layer active and Boundary (𝓑) maintained."
**Validation:** Zero Canon bleed, zero Governance artifact exposure, clean layer separation verified.

---

**PortusSophia™** — Governance-first architecture, preserved in *"Here and Now!"*
