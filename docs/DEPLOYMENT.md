# Public Node Deployment Instructions

**Target:** `public.portussophia.com`
**Platform:** GitHub Pages + Cloudflare
**Status:** Active

---

## Step 1: Push Content to Existing Repo

```powershell
# From portussophia-public/ directory
git init
git add .
git commit -m "Activate Public Orientation Node — WebKernel layer, Boundary (𝓑) compliant"
git branch -M main
git remote add origin https://github.com/portussophia/portussophia-public.git
git push -u origin main --force
```

---

## Step 2: Enable GitHub Pages

In repository settings:
1. Navigate to **Settings → Pages**
2. Set **Source:** Deploy from branch `main` → `/ (root)`
3. Set **Custom domain:** `public.portussophia.com`
4. Click **Save**
5. Wait ~5 minutes for GitHub to generate SSL certificate

---

## Step 3: Configure Cloudflare DNS

In Cloudflare dashboard for `portussophia.com` zone:

1. Navigate to **DNS**
2. Add or update record:
   - **Type:** CNAME
   - **Name:** `public`
   - **Target:** `portussophia.github.io`
   - **TTL:** Auto
   - **Proxy:** DNS only (gray cloud) — for initial debugging
3. Delete any conflicting A records for `public` subdomain

---

## Step 4: Configure Cloudflare SSL/TLS

In Cloudflare dashboard:
1. Navigate to **SSL/TLS → Overview**
2. Set **Mode:** Full (not Flexible)
3. Navigate to **SSL/TLS → Edge Certificates**
4. Ensure **Always Use HTTPS:** ✅ On
5. Ensure **Minimum TLS Version:** 1.2

---

## Step 5: Verify Deployment

```powershell
# Test DNS propagation
nslookup public.portussophia.com

# Expected: CNAME → portussophia.github.io → A records

# Test HTTP response (wait 5-10 minutes for propagation)
curl -I https://public.portussophia.com

# Expected: 200 OK
```

---

## Troubleshooting

**Issue:** DNS not resolving
**Solution:** Wait 5-10 minutes; check Cloudflare proxy status (gray cloud for debugging)

**Issue:** SSL certificate error
**Solution:** Verify Cloudflare SSL/TLS mode = Full; wait for GitHub SSL generation (up to 24 hours)

**Issue:** 404 on custom domain
**Solution:** Verify CNAME file exists in repo root with exact domain: `public.portussophia.com`

---

**Related:** See [GOVERNANCE.md](GOVERNANCE.md) for content guidelines, [STATUS.md](STATUS.md) for current deployment state.

**PortusSophia™** — *"Here and Now!"*
