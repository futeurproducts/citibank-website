# CITI WEBSITE MASTER AUDIT REPORT
## Site: https://citibank-website-git-staging-ci-33bbc9-futeur-products-projects.vercel.app
## Date: 2026-03-29
## Agents: 6 | Source Files Read: 88 | Screenshots: 72 (12 pages x 2 viewports x 3 files)
## Repo: /Users/devaccount/citibank-website/ | Branch: rework/wave-execution | Commit: d613499b

---

## 1. SITE INVENTORY

### 1.1 Active Routes (5-Page Architecture)
| Route | Component | Lines | Status |
|-------|-----------|-------|--------|
| `/` | Index.tsx | 465 | ACTIVE |
| `/how-it-works` | HowItWorks.tsx | 607 | ACTIVE |
| `/impact` | Impact.tsx | 496 | ACTIVE |
| `/pilot` | Pilot.tsx | 707 | ACTIVE |
| `/about` | About.tsx | 454 | ACTIVE |

### 1.2 Archived Routes (Commented in App.tsx — NOT accessible)
| Route | Component | Lines | Status | Risk |
|-------|-----------|-------|--------|------|
| `/revolution` | Revolution.tsx | 229 | COMMENTED | Contains Chase 5/24 rules, "LUMIQ AI" branding |
| `/uss` | USS.tsx | 474 | COMMENTED | Contains "6-week pilot" error |
| `/case-study` | CaseStudy.tsx | 1181 | COMMENTED | Contains Chase competitor data |
| `/demo` | Demo.tsx | 558 | COMMENTED | Contains Chase competitor table |

### 1.3 Utility Routes
| Route | Component | Lines | Status |
|-------|-----------|-------|--------|
| `/terms` | Terms.tsx | 292 | ACTIVE |
| `/privacy` | Privacy.tsx | 224 | ACTIVE |
| `/security` | Security.tsx | 268 | ACTIVE |
| `*` | NotFound.tsx | 24 | ACTIVE |

### 1.4 Key Components
| Component | Lines | Used By |
|-----------|-------|---------|
| Header.tsx | 175 | All pages (global nav) |
| Footer.tsx | 33 | All pages (global footer) |
| Hero.tsx (home) | ~230 | Index.tsx |
| BankComparison.tsx | ~150 | Index.tsx (not currently rendered?) |
| StrategicBridge.tsx | ~120 | Index.tsx (not currently rendered?) |
| ImpactChatWidget.tsx | 193 | Floating widget |
| PageHero.tsx | 22 | Subpage hero reusable |
| SpotlightCard.tsx | 31 | Interactive cards |
| SectionReveal.tsx | 27 | Scroll animations |
| AnimatedCounter.tsx | 63 | KPI counters |
| DoubleBezel.tsx | 28 | Frame effects |

---

## 2. WHAT EXISTS AND IS CORRECT (DO NOT TOUCH)

### 2.1 Data Points — ALL CORRECT on Active Pages
| Data Point | Value | Verified Locations |
|-----------|-------|-------------------|
| Pilot price | $600,000 / $600K | Index.tsx:428, Impact.tsx:346, Pilot.tsx:120, About.tsx:421 |
| Pilot duration | 90 days | Index.tsx:23, Pilot.tsx:127, multiple others |
| Pre-qual time | 83ms | 15+ locations across all active pages |
| Current processing | 15 business days | Impact.tsx:40, Hero.tsx:39 |
| Businesses served | 450,000 | Impact.tsx:74, 92 |
| Credit exposure | $710B | Impact.tsx:77, 93 |
| Countries | 160+ | Pilot.tsx:463 |
| Tech investment | $12.5B | Impact.tsx:346, Index.tsx:75, 139 |
| Legacy apps retired | 548 | Index.tsx:75, 98 |
| AI colleagues | 180,000+ | HowItWorks.tsx:325, Index.tsx:76, 99 |
| AI countries | 84 | HowItWorks.tsx:325, Index.tsx:76 |
| Transformation progress | Over 80% | Impact.tsx:360 |
| Investor Day | May 7, 2026 | Impact.tsx:347, 359, Index.tsx:433 |
| Digital credit limit | $10M per app | Index.tsx:77, 100 |
| SOC 2 status | "In Progress" / "Audit in progress" | About.tsx:310, Pilot.tsx:386, HowItWorks.tsx |
| Exec: Tim Ryan | Head of Technology | HowItWorks.tsx:325 |
| KPIs | 8 | 15+ locations |
| Redeemable clause | 100% against Year 1 license | Index.tsx:454 |

### 2.2 Structural Elements — CORRECT
- 5-page architecture (/, /how-it-works, /impact, /pilot, /about) matches spec
- Navigation: How It Works, Impact, Pilot, About + Start Pilot CTA
- Font system: Satoshi (body), Instrument Serif (headings), JetBrains Mono (code/data)
- LinkedIn Insight Tag: pid=8785410
- Synthetic data disclaimer: "Illustrative integration using synthetic data" (Index.tsx:241)
- Product proof mockup in hero: Before/After widget showing 15-day → 83ms
- Stylus Workspaces integration referenced in hero widget (Signal Delivery to Stylus)
- No emoji anywhere
- No "LUMIQ AI x Citi" on active pages
- No "two-thirds" (correctly updated to "80%+")
- No "thousands" (correctly updated to "180,000+")
- No #3B82F6 (old wrong blue removed)
- No banned hype terms (revolutionary, game-changing, cutting-edge, etc.)

### 2.3 Homepage Sections — Structure Sound
| # | Section | Lines | Content | Status |
|---|---------|-------|---------|--------|
| 1 | Hero | component | Before/After widget + headline + metrics bar | GOOD |
| 2 | THE GAP | 66-154 | Bento grid: 548 apps, 180K+, $10M, $12.5B + missing layer | GOOD |
| 3 | THE PRODUCT | 162-246 | Swiper carousel (6 CitiDirect screenshots) + features | GOOD |
| 4 | PROOF | 254-335 | Before/After: 15 days → 83ms, manual review reduction | GOOD |
| 5 | IMPACT | 343-417 | 4 animated counters + Recharts bar chart | GOOD |
| 6 | FINAL CTA | 425-458 | $600K/90 days, May 7 Investor Day, redemption clause | GOOD |

---

## 3. WHAT EXISTS BUT NEEDS ENHANCEMENT

### 3.1 Hero Enhancements

| Element | Current (file:line) | Desired | Change Type | Priority |
|---------|-------------------|---------|-------------|----------|
| Headline | "Same-day credit decisions for CitiDirect applications" (Hero.tsx:165) | "Same-day credit decisions for Citi Commercial Bank" | Text swap | P1 |
| Primary CTA color | `bg-[#18181B]` dark charcoal (Hero.tsx:182) | `bg-[#C9922A]` gold + white text | Color change | P1 |
| Header CTA color | `bg-[#18181B]` (Header.tsx:81) | `bg-[#C9922A]` gold | Color change | P1 |
| Metrics bar | 3 items: 83ms, 7, 4 (Hero.tsx:205-218) | Add 4th: "SR 11-7" governance-ready | Add metric | P2 |

### 3.2 Home Page Section Enhancements

| Section | Current | Enhancement Needed | Details | Priority |
|---------|---------|-------------------|---------|----------|
| **Missing: Competitive Disambiguation** | Does not exist | Add between Product and Proof | "Not another model vendor. The implementation layer for CitiDirect." — 3-column: Point Solutions / Data Providers / LumiqAI | P1 |
| **THE GAP** | Good foundation | Add "ZERO disclosed AI for credit underwriting" explicit statement | Currently implied via "missing layer" but not stated directly per killer insight | P1 |
| **THE GAP** | No regulatory context | Add $136M penalties reference ($61M FRB + $75M OCC) | Consent order context strengthens urgency | P2 |
| **IMPACT** | Bar chart with 4 metrics | Add additional charts: approval trend over 90 days, ROI waterfall | Recharts already in stack — expand visualization | P2 |
| **Product/Research ratio** | 80% product / 20% research | Target 55/45 per spec | The Gap section is the only research section; consider adding market context or moving some Citi intel into sections | P2 |

### 3.3 Subpage Enhancements

#### /how-it-works (607 lines) — STRONG, minimal changes
| Element | Current | Enhancement | Priority |
|---------|---------|-------------|----------|
| "Seamlessly" | HowItWorks.tsx:240 | Remove banned word "Seamlessly" → "Integrated with" or "Connected to" | P2 |
| Missing: Sakana AI | Not referenced | Add Sakana AI reference as innovation context for Citi AI strategy | P2 |
| Missing: OCC consent order | Not referenced | Add as regulatory milestone proving transformation progress | P2 |

#### /impact (496 lines) — STRONG, enhancement opportunities
| Element | Current | Enhancement | Priority |
|---------|---------|-------------|----------|
| Missing: Charge-off rate | Not present | Add 0.42% NCO rate context (vs 0.31% industry) to KPI section | P2 |
| Missing: CRA Outstanding | Not present | Add Outstanding CRA rating ($145.9B activity) for community impact angle | P2 |
| Approval trend chart | Area chart 8-week projection | Consider extending to full 90-day timeline with phase markers | P2 |
| Missing: Competitive gap visualization | Not present | Add Celent score comparison (JPM 9.2 vs Citi 6.8 per intel) | P2 |

#### /pilot (707 lines) — CORRECT pricing, well-structured
| Element | Current | Enhancement | Priority |
|---------|---------|-------------|----------|
| Investment breakdown | Pie chart (29/13/42/17 split) | Consider adding "0.005% of annual $12.5B tech spend" context | P2 |
| Missing: Objection handling | Not present | Add FAQ-style section addressing "Not Invented Here" and "Building Internally" per intel | P2 |
| Missing: Post-pilot path | Brief mention | Add expansion narrative: Pilot → CCB-wide → Services/TTS → Global | P2 |

#### /about (454 lines) — CLEAN, enhancement opportunities
| Element | Current | Enhancement | Priority |
|---------|---------|-------------|----------|
| Leadership | Shiv Vyas only | Consider adding Engineering Leadership bios (currently generic) | P2 |
| Contact emails | futeurcredx.com domain | Review: should these be lumiqai.com? Per brand consolidation | P2 |
| Missing: Team traction | No anonymized bank references | Add "Working with [X] regulated financial institutions" per Grok CTO audit | P1 |

### 3.4 Design System Fixes

| Token | Current | Desired | File:Line | Priority |
|-------|---------|---------|-----------|----------|
| `--primary` HSL | `200 82% 24%` (#0051AE) | `200 82% 24%` is close but resolves to wrong hex; hard-coded #0C4A6E used everywhere as workaround | tailwind.config.ts:16, index.css | P1 |
| Gold CTA token | NOT DEFINED | Add `--cta: #C9922A` or Tailwind `cta` color | tailwind.config.ts | P1 |
| `--radius` | 1.25rem (20px) | Reduce to ~0.75rem (12px) for enterprise aesthetic | index.css:40 | P2 |
| `--shadow-glow` | UNDEFINED but referenced 3x in Revolution.tsx | Either define or remove references (Revolution is archived so low risk) | Revolution.tsx:47,115,215 | P2 |
| Glassmorphism | `backdrop-blur-*` in 16+ files | Review enterprise appropriateness; acceptable in Header scroll effect, questionable elsewhere | Multiple | P2 |
| Hard-coded hex values | #0C4A6E, #18181B, #94A3B8 used directly in 20+ locations | Consolidate into token system for maintainability | Multiple | P2 |

### 3.5 Copy/Language Fixes

| Current Text | Replacement | File:Line | Priority |
|-------------|-------------|-----------|----------|
| "Seamlessly integrated" | "Directly integrated" | HowItWorks.tsx:240 | P2 |
| "change alerts" | "early warning signals" | USS.tsx:309 (ARCHIVED) | P3 |
| "LUMIQ AI" (with space) | "LumiqAI" | Revolution.tsx:77, 137, 298 (ARCHIVED) | P3 |
| "FuteurCredX / LumiqAI" | "LumiqAI" | Terms.tsx:127, 130, 271 | P2 |

### 3.6 Data Corrections

| Current Value | Correct Value | File:Line | Status | Priority |
|--------------|---------------|-----------|--------|----------|
| "6-week pilot" | "90-day pilot" | USS.tsx:450 | ARCHIVED (not accessible) | P3 |
| Chase 5/24 rules | Remove entirely | Revolution.tsx:97 | ARCHIVED (not accessible) | P3 |
| Chase competitor data | Remove/replace | CaseStudy.tsx:219,428,1024,1038,1069 | ARCHIVED (not accessible) | P3 |
| Chase competitor table | Remove/replace | Demo.tsx:40,411 | ARCHIVED (not accessible) | P3 |

### 3.7 Missing Intelligence (Not Yet Weaponized)

| Intel Point | Source | Where to Add | Priority |
|------------|-------|-------------|----------|
| "ZERO disclosed AI for credit underwriting" — explicit killer statement | All 4 AIs unanimous | THE GAP section (Index.tsx) | P1 |
| $136M regulatory penalties ($61M FRB + $75M OCC) | Perplexity Q6 | THE GAP or new section (Index.tsx) | P1 |
| Sakana AI investment (Feb 2026) — first strategic AI investment | Perplexity, News Intel | HowItWorks.tsx (Stylus section) or Impact.tsx | P2 |
| OCC consent order removal (Dec 2025) — transformation milestone | Perplexity Q1, News Intel | Impact.tsx (Strategic Alignment) or CaseStudy | P2 |
| CRA Outstanding rating ($145.9B activity) | News Intel | About.tsx or Impact.tsx | P2 |
| Charge-off rate 0.42% (vs 0.31% industry) | Intel quantitative data | Impact.tsx (KPI section) | P2 |
| "50+ of largest processes being re-engineered including loan underwriting" | Q4 2025 Earnings | THE GAP section (Index.tsx) | P1 |
| Celent Model Bank Award for "Transforming Client Connectivity" | News Intel | About.tsx or footer credibility strip | P2 |
| Competitive: JPM Celent 9.2 vs Citi 6.8 digital lending score | Perplexity research | New Competitive Disambiguation section | P2 |
| "Corporate loans migrated to strategic platform in North America" — proves rails exist | 2025 10-K | THE GAP section or HowItWorks | P2 |

### 3.8 Charts/Graphs to Add

| Chart | Location | Data | Library | Priority |
|-------|----------|------|---------|----------|
| Competitive Disambiguation 3-column strip | New section on Index.tsx | Point Solutions / Data Providers / LumiqAI | Static HTML/Tailwind | P1 |
| ROI Waterfall chart | Impact.tsx | Investment → savings breakdown → net ROI | Recharts (already installed) | P2 |
| 90-day timeline with phase gates | Pilot.tsx (enhance existing) | Week 1-2 Scoping → 3-4 Custom → 5-8 Execute → 9-12 Analyze → 13 Decision | Recharts or static | P2 |
| Digital lending maturity comparison | Impact.tsx or new section | JPM (9.2), BofA (8.7), WF (7.9), Citi (6.8) | Recharts BarChart | P2 |
| Risk migration heatmap | Impact.tsx | Risk tier movement over pilot duration | Recharts or custom | P3 |

---

## 4. WHAT NEEDS TO BE ADDED (DOES NOT EXIST YET)

### 4.1 New Sections (on existing pages)

| Section | Page | Placement | Content | Priority |
|---------|------|-----------|---------|----------|
| **Competitive Disambiguation** | Index.tsx | Between THE PRODUCT and PROOF | "Not another model vendor. The implementation layer for CitiDirect." Three columns: (1) Point Solutions optimize a model, (2) Data Providers deliver raw inputs, (3) LumiqAI orchestrates everything inside Citi workflows | P1 |
| **Zero Credit AI Statement** | Index.tsx | Inside THE GAP section | "Citi invested $12.5B, deployed AI to 180K+ colleagues, retired 548 apps — ZERO disclosed AI for credit underwriting. Every top-4 competitor has it." | P1 |
| **Objection FAQ** | Pilot.tsx | After scope/KPI sections | Address "Building internally" → "LumiqAI is the JSON module Stylus consumes"; "SOC 2 in progress" → pilot-boundary framing | P2 |

### 4.2 New Pages
None required. The 5-page architecture is complete and correct.

---

## 5. WHAT NEEDS TO BE REMOVED

### 5.1 From Active Pages
| Item | File:Line | Reason |
|------|-----------|--------|
| "Seamlessly" | HowItWorks.tsx:240 | Banned term |

### 5.2 Archived Pages (Already Commented — No Production Risk)
These pages contain issues but are NOT accessible. Fix only if reactivated:
- Revolution.tsx: Chase 5/24 rules (line 97), "LUMIQ AI" branding (lines 77, 137, 298), `--shadow-glow` undefined
- USS.tsx: "6-week pilot" (line 450), "Seamless integration" (line 329), "change alerts" (line 309)
- CaseStudy.tsx: Chase competitor references (lines 219, 428, 1024, 1038, 1069)
- Demo.tsx: Chase competitor table (lines 40, 411)

---

## 6. PHASED EXECUTION PLAN

### Phase 1: Critical Enhancements (P0-P1 — Do First)
**Files: 3 | Changes: ~8 | Risk: Zero (text + color swaps)**

| # | Change | File | Line | Old | New |
|---|--------|------|------|-----|-----|
| 1.1 | Hero headline | Hero.tsx | 165 | "Same-day credit decisions for CitiDirect applications" | "Same-day credit decisions for Citi Commercial Bank" |
| 1.2 | Hero CTA color | Hero.tsx | 182 | `bg-[#18181B]` | `bg-[#C9922A] text-white` |
| 1.3 | Header CTA color | Header.tsx | 81 | `bg-[#18181B]` | `bg-[#C9922A] text-white` |
| 1.4 | Mobile CTA color | Header.tsx | 164 | `bg-[#18181B]` (if same) | `bg-[#C9922A] text-white` |
| 1.5 | Add "ZERO credit AI" to THE GAP | Index.tsx | ~78 | (add new line) | "Despite $12.5B in technology investment and AI deployed to 180,000+ colleagues — Citi has zero disclosed AI for credit underwriting. Every top-4 US bank competitor has deployed credit decisioning AI." |
| 1.6 | Add "50+ processes" to THE GAP | Index.tsx | ~80 | (add new line) | "50+ of the largest and most complex processes are being re-engineered — including loan underwriting." |
| 1.7 | FuteurCredX → LumiqAI | Terms.tsx | 127, 130, 271 | "FuteurCredX / LumiqAI" | "LumiqAI" |
| 1.8 | Add gold CTA token | tailwind.config.ts | colors section | (missing) | `cta: '#C9922A'` |

### Phase 2: Competitive Disambiguation Section (P1)
**Files: 1 | Changes: 1 new section (~60 lines) | Risk: Low (additive)**

Add new section to Index.tsx between THE PRODUCT (line ~246) and PROOF (line ~254):

**Content:**
- Heading: "Not another model vendor. The implementation layer for CitiDirect."
- 3-column grid:
  - **Point Solutions** (Zest, etc.): "Optimize a single model. You still integrate, validate, and operationalize yourself."
  - **Data Providers** (Moody's, Experian, etc.): "Deliver raw inputs. You still build the decisioning logic, audit trail, and workflow integration."
  - **LumiqAI**: "Orchestrates data, scoring, eligibility, auditability, and banker-facing actions inside CitiDirect and Stylus — in 83ms."
- Footer: "Moody's, Experian, S&P, D&B, LexisNexis, and your existing models stay in place. LumiqAI operationalizes them."

### Phase 3: Intelligence Injection (P1-P2)
**Files: 3 | Changes: ~6 additions | Risk: Low (additive text)**

| # | Intel Point | File | Where | Text to Add |
|---|-----------|------|-------|-------------|
| 3.1 | $136M regulatory penalties | Index.tsx (THE GAP) | After ZERO credit AI statement | "$61M FRB + $75M OCC penalties for data quality deficiencies — automated controls are no longer optional." |
| 3.2 | Sakana AI investment | HowItWorks.tsx | Stylus section (~325) | "Citi's February 2026 strategic investment in Sakana AI signals accelerating commitment to AI-native workflows." |
| 3.3 | OCC consent order removal | Impact.tsx | Strategic Alignment (~360) | "December 2025: OCC removes amendment to consent order — confirming 80%+ Transformation progress." |
| 3.4 | CRA Outstanding | Impact.tsx or About.tsx | Credibility context | "Outstanding CRA rating — $145.9B in CRA-allocated activity, #1 U.S. Affordable Housing Lender for 15 consecutive years." |
| 3.5 | Charge-off context | Impact.tsx | KPI section | "Current net charge-off rate: 0.42% — above 0.31% industry average, indicating room for credit intelligence improvement." |
| 3.6 | Corporate loans migrated | Index.tsx (THE GAP) or HowItWorks | Architecture context | "Corporate loans have been migrated to a strategic lending platform in North America — the rails exist, the intelligence layer is missing." |

### Phase 4: Charts & Visualization Enhancements (P2)
**Files: 2-3 | Changes: 2-3 new Recharts components | Risk: Medium (new code)**

| # | Chart | File | Component | Data |
|---|-------|------|-----------|------|
| 4.1 | Digital Lending Maturity | Impact.tsx | `<BarChart>` horizontal | JPMorgan 9.2, BofA 8.7, Wells Fargo 7.9, Citi 6.8 (Celent scores) |
| 4.2 | ROI Waterfall | Impact.tsx | `<BarChart>` waterfall-style | $600K investment → decisioning savings → approval lift → NCO reduction → net ROI |
| 4.3 | 90-Day Timeline | Pilot.tsx | Enhanced timeline visual | 5-phase breakdown with KPI milestones and Investor Day marker |

### Phase 5: Design System Alignment (P2)
**Files: 2-3 | Changes: ~10 token fixes | Risk: Low-Medium (visual changes)**

| # | Change | File | Current | New |
|---|--------|------|---------|-----|
| 5.1 | Fix --primary HSL alignment | index.css + tailwind.config.ts | Mismatched HSL→hex | Align token to #0C4A6E consistently |
| 5.2 | Add --cta token | index.css | Missing | `--cta: 38 62% 47%` (#C9922A) |
| 5.3 | Reduce border-radius | index.css:40 | 1.25rem (20px) | 0.75rem (12px) for enterprise |
| 5.4 | Review backdrop-blur usage | Multiple | Used in 16+ files | Keep in Header scroll; review elsewhere |
| 5.5 | Remove "Seamlessly" | HowItWorks.tsx:240 | "Seamlessly integrated" | "Directly integrated" |

### Phase 6: Pilot Page Objection FAQ (P2)
**Files: 1 | Changes: 1 new section (~40 lines) | Risk: Low (additive)**

Add collapsible FAQ section to Pilot.tsx addressing top objections from intel:
1. "We're building this internally" → "LumiqAI is the structured JSON credit module your Stylus agents consume natively. 83ms, 4-bureau, SR 11-7."
2. "SOC 2 is still in progress" → "The pilot runs on synthetic or Citi-approved non-production data. Production deployment security review, including SOC 2 Type II completion, is part of the post-pilot readiness gate."
3. "We have Sakana AI" → "Sakana is research. LumiqAI is production credit underwriting today."
4. "$600K is a lot for a pilot" → "$600K = 0.005% of annual $12.5B technology investment. 100% redeemable against Year 1 platform license."

### Phase 7: QA & Visual Verification (P0 — Do Last)
**Re-run Playwright screenshots after all phases**

```bash
cd /Users/devaccount/citibank-website && node audit-screenshots.mjs
```

Verify:
- [ ] All P0 fixes landed (hero headline, CTA colors, ZERO credit AI statement)
- [ ] $600K appears everywhere pricing is shown
- [ ] No regressions (compare before/after screenshots)
- [ ] All routes render content (not just HTTP 200)
- [ ] `npm run build` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Mobile responsive (check mobile screenshots)
- [ ] Fonts loading (Satoshi, Instrument Serif, JetBrains Mono)

---

## 7. SUMMARY

| Category | Count |
|----------|-------|
| **P0 Issues (Critical)** | 0 on active pages (all P0 bugs are on archived/commented pages) |
| **P1 Enhancements (High)** | 8 changes across 4 files |
| **P2 Enhancements (Medium)** | 15 changes across 5 files |
| **P3 Fixes (Low — Archived)** | 12 issues on commented-out pages |
| **Total Files Affected** | 7 active files |
| **Estimated LOC Changes** | ~200 lines (additions + modifications) |
| **Phases** | 7 (sequential, each non-breaking) |

### Overall Site Assessment
The site is in **strong shape** after the Wave 8 rework (commit d613499b). All active pages pass data verification — pricing ($600K), pilot duration (90 days), SOC 2 ("in progress"), Tim Ryan attribution, and brand naming are correct. The main opportunities are:

1. **Hero headline tweak** (CitiDirect → Citi Commercial Bank)
2. **Gold CTA buttons** (#C9922A instead of dark charcoal)
3. **Competitive Disambiguation section** (new, ~60 lines)
4. **Weaponize the killer insight** ("ZERO disclosed AI for credit underwriting")
5. **Add missing intelligence** ($136M penalties, Sakana AI, OCC removal, CRA Outstanding)
6. **Expand charts** (Celent maturity comparison, ROI waterfall)
7. **Pilot objection FAQ** (address "building internally" and SOC 2 concerns)

**No production-critical bugs exist on active pages.** All Chase data contamination is confined to archived (commented-out) routes.
