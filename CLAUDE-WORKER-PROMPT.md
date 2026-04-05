# CLAUDE WORKER — EXTRACT & INSERT INTERACTIVE ELEMENTS
## You are the WORKER instance. There is a REVIEWER instance watching your every edit.
## Repo: /Users/devaccount/citibank-website/
## Branch: staging/citi-rollout

---

## RULES

1. You are extracting interactive elements from the rework/wave-execution branch and INSERTING them into existing pages on staging/citi-rollout.
2. You are NOT replacing pages. You are NOT deleting existing content. INSERT ONLY.
3. After EACH element insertion, you MUST:
   a. Run: git add -A && git diff --cached > /tmp/latest-diff.txt && git reset HEAD
   b. Wait for the REVIEWER to check /tmp/review-log.txt
   c. Read /tmp/review-log.txt — if REVIEWER says "REVERT", fix the issue before proceeding
   d. Only then move to the next element
4. First tool call MUST be Read or Edit. No text. No planning. No summarizing.
5. No agents. Do every edit yourself.
6. No text responses longer than 2 sentences between edits.
7. For each element, state: SOURCE: [file]:[lines] → TARGET: [file]:after line [N]

---

## SETUP

```bash
cd /Users/devaccount/citibank-website/
git checkout staging/citi-rollout
git branch --show-current
# Must say: staging/citi-rollout

# Extract source files
mkdir -p /tmp/rw
git show rework/wave-execution:src/pages/Index.tsx > /tmp/rw/Index.tsx
git show rework/wave-execution:src/pages/Impact.tsx > /tmp/rw/Impact.tsx
git show rework/wave-execution:src/pages/Pilot.tsx > /tmp/rw/Pilot.tsx
git show rework/wave-execution:src/pages/HowItWorks.tsx > /tmp/rw/HowItWorks.tsx
git show rework/wave-execution:src/components/sections/home/Hero.tsx > /tmp/rw/Hero.tsx
git show rework/wave-execution:src/components/shared/DoubleBezel.tsx > /tmp/rw/DoubleBezel.tsx

# Initialize review log
echo "REVIEWER: Waiting for first diff." > /tmp/review-log.txt
echo "" > /tmp/latest-diff.txt

# Check if DoubleBezel exists on target
ls src/components/shared/DoubleBezel.tsx 2>/dev/null || echo "NEED TO COPY DOUBLEBEZEL"
```

---

## SHARED COMPONENT PREREQUISITES

Before any element insertion, ensure these exist on target:

1. **DoubleBezel** — if missing, copy from /tmp/rw/DoubleBezel.tsx to src/components/shared/DoubleBezel.tsx
2. **SectionReveal** — should already exist at src/components/shared/SectionReveal.tsx
3. **SpotlightCard** — should already exist at src/components/shared/SpotlightCard.tsx
4. **AnimatedCounter** — should already exist at src/components/shared/AnimatedCounter.tsx

---

## ELEMENT EXECUTION ORDER

Do them in this EXACT order. One at a time. No batching. No skipping.

### HOMEPAGE ELEMENTS (target: src/pages/Index.tsx + src/components/sections/home/Hero.tsx)

**H1: Hero BeforeAfterWidget**
- Source: /tmp/rw/Hero.tsx — the BeforeAfterWidget function + blur transitions
- Target: src/components/sections/home/Hero.tsx
- Action: COMPARE source and target comparison cards. If source has better animations (blur, cubic-bezier, motion.div with filter), upgrade the target's card component ONLY. Keep all surrounding Hero content.
- After edit: git add -A && git diff --cached > /tmp/latest-diff.txt && git reset HEAD
- Check /tmp/review-log.txt before proceeding

**H2: Swiper Carousel (6 screenshots)**
- Source: /tmp/rw/Index.tsx — find `<Swiper` and the screenshots array and EffectCoverflow config
- Target: src/pages/Index.tsx — INSERT after the Seven Outputs section or product section
- Add imports: `import { Swiper, SwiperSlide } from 'swiper/react'; import { Autoplay, EffectCoverflow } from 'swiper/modules'; import 'swiper/css'; import 'swiper/css/effect-coverflow';`
- Add: `import { DoubleBezel } from '@/components/shared/DoubleBezel';`
- Copy the screenshots data array
- After edit: git add -A && git diff --cached > /tmp/latest-diff.txt && git reset HEAD
- Check /tmp/review-log.txt

**H3: BarChart (4-bar impact preview)**
- Source: /tmp/rw/Index.tsx — find the impactData array and the BarChart JSX
- Target: src/pages/Index.tsx — INSERT near the impact metrics area
- Add Recharts imports if missing
- After edit: diff + review

**H4: Built vs Missing Bento Grid Upgrade**
- Source: /tmp/rw/Index.tsx — find the "What Citi has" / "What's missing" bento grid with SpotlightCard + stagger animations + $12.5B accent card
- Target: src/pages/Index.tsx — find the existing Built vs Missing section
- Action: COMPARE. If source has SpotlightCard, stagger variants, $12.5B accent card that target lacks → upgrade the SECTION CONTENT ONLY (not the surrounding wrapper)
- After edit: diff + review

### HOW IT WORKS ELEMENTS (target: src/pages/HowItWorks.tsx)

**W1: ReactFlow Architecture Diagram**
- Source: /tmp/rw/HowItWorks.tsx — find archNodes array, archEdges array, nodeStyle/accentNodeStyle objects, <ReactFlow> JSX block
- Target: src/pages/HowItWorks.tsx — find the existing architecture diagram section
- Action: REPLACE only the diagram component (SVG → ReactFlow). Keep the section wrapper and heading.
- Add imports: `import ReactFlow, { Background, type Node, type Edge, Position, MarkerType } from 'reactflow'; import 'reactflow/dist/style.css';`
- After edit: diff + review

**W2: SyntaxJSON (line-by-line animated JSON)**
- Source: /tmp/rw/HowItWorks.tsx — find the SyntaxJSON function component (the lines array with motion.div per line)
- Target: src/pages/HowItWorks.tsx — find the existing JSON display
- Action: REPLACE the JSON display component with the animated SyntaxJSON. Keep surrounding content.
- After edit: diff + review

**W3: Swiper Carousel (4 mockups)**
- Source: /tmp/rw/HowItWorks.tsx — find the Swiper with 4 SwiperSlide images
- Target: src/pages/HowItWorks.tsx — INSERT in the Stylus integration section
- Add Swiper imports
- After edit: diff + review

**W4: 5-Stage Pipeline Timeline**
- Source: /tmp/rw/HowItWorks.tsx — find pipelineStages array and the timeline JSX with stagger animations
- Target: src/pages/HowItWorks.tsx — INSERT as new section (if not present) or upgrade existing
- After edit: diff + review

**W5: Governance Grid (6 items)**
- Source: /tmp/rw/HowItWorks.tsx — find governanceItems array and the SpotlightCard grid
- Target: src/pages/HowItWorks.tsx — INSERT or upgrade governance section
- After edit: diff + review

**W6: Security Cards (4 with SVG icons)**
- Source: /tmp/rw/HowItWorks.tsx — find the security cards with inline SVG (shield, lock, globe, box)
- Target: src/pages/HowItWorks.tsx — INSERT or upgrade security section
- After edit: diff + review

### IMPACT ELEMENTS (target: src/pages/Impact.tsx)

**I1: AnimatedCounter Hero Stats (450K, $710B, 160+, 15 days)**
- Source: /tmp/rw/Impact.tsx — find the 4-stat AnimatedCounter grid with stagger animations
- Target: src/pages/Impact.tsx — INSERT in hero section if not present
- After edit: diff + review

**I2: KPI BarChart (8 metrics, Current vs Target)**
- Source: /tmp/rw/Impact.tsx — find kpiChartData array and the grouped BarChart
- Target: src/pages/Impact.tsx — CHECK if target already has this. If yes and source is better, upgrade. If no, INSERT.
- After edit: diff + review

**I3: KPI Detail Cards (8 SpotlightCards)**
- Source: /tmp/rw/Impact.tsx — find kpiItems array and the SpotlightCard list
- Target: src/pages/Impact.tsx — INSERT alongside KPI chart if not present
- After edit: diff + review

**I4: Approval Trend AreaChart (W1-W8)**
- Source: /tmp/rw/Impact.tsx — find trendData array and the AreaChart with gradient fill (linearGradient)
- Target: src/pages/Impact.tsx — INSERT after KPI section
- After edit: diff + review

**I5: Celent Maturity Horizontal BarChart**
- Source: /tmp/rw/Impact.tsx — find celentData array and horizontal BarChart (layout="vertical")
- Target: src/pages/Impact.tsx — CHECK if exists. INSERT or upgrade.
- Keep disclaimer: "Not official Celent scores"
- After edit: diff + review

**I6: ROI Waterfall BarChart**
- Source: /tmp/rw/Impact.tsx — find roiData array and BarChart with Cell colors
- Target: src/pages/Impact.tsx — CHECK if exists. INSERT or upgrade.
- After edit: diff + review

**I7: Investor Day Urgency Cards (3 cards)**
- Source: /tmp/rw/Impact.tsx — find the 3-card grid (May 7, 80%+, $600K)
- Target: src/pages/Impact.tsx — CHECK if exists. INSERT or upgrade.
- After edit: diff + review

**I8: Case Study Cards (2 anonymized)**
- Source: /tmp/rw/Impact.tsx — find the case study SpotlightCards
- Target: src/pages/Impact.tsx — INSERT after Investor Day cards
- After edit: diff + review

### PILOT ELEMENTS (target: src/pages/Pilot.tsx)

**P1: AnimatedCounter ($600,000 hero)**
- Source: /tmp/rw/Pilot.tsx — find the large AnimatedCounter in hero
- Target: src/pages/Pilot.tsx — INSERT in hero pricing area
- After edit: diff + review

**P2: PieChart Donut (investment allocation)**
- Source: /tmp/rw/Pilot.tsx — find investmentData array, PieChart with innerRadius/outerRadius, center label, legend
- Target: src/pages/Pilot.tsx — CHECK if exists. If source version is better (DoubleBezel wrapper, animation, center label), upgrade.
- After edit: diff + review

**P3: Investment Breakdown SpotlightCards (4 items)**
- Source: /tmp/rw/Pilot.tsx — find the 4 breakdown cards with stagger animations
- Target: src/pages/Pilot.tsx — INSERT or upgrade alongside donut
- After edit: diff + review

**P4: Timeline (6 phases, responsive)**
- Source: /tmp/rw/Pilot.tsx — find timelinePhases array, desktop horizontal grid-cols-6, mobile vertical stacked
- Target: src/pages/Pilot.tsx — REPLACE timeline section content (keep wrapper)
- After edit: diff + review

**P5: Risk Mitigation SpotlightCards (4 items)**
- Source: /tmp/rw/Pilot.tsx — find risk mitigation cards with shield SVG
- Target: src/pages/Pilot.tsx — INSERT near risk/governance section
- After edit: diff + review

**P6: Governance Grid (6 items)**
- Source: /tmp/rw/Pilot.tsx — find governanceItems array and SpotlightCard grid
- Target: src/pages/Pilot.tsx — INSERT or upgrade
- After edit: diff + review

**P7: FAQ Accordion (4 items)**
- Source: /tmp/rw/Pilot.tsx — find details/summary FAQ with chevron SVG rotation
- Target: src/pages/Pilot.tsx — COMPARE. Upgrade chevron animation if source is better.
- After edit: diff + review

**P8: Trust Badges (5 pills)**
- Source: /tmp/rw/Pilot.tsx — find the trust badge strip
- Target: src/pages/Pilot.tsx — INSERT near bottom
- After edit: diff + review

**P9: Swiper Carousel (4 platform mockups)**
- Source: /tmp/rw/Pilot.tsx — find Swiper with 4 SwiperSlide images in DoubleBezel
- Target: src/pages/Pilot.tsx — INSERT in platform preview area
- After edit: diff + review

**P10: Contact Form (full form with state)**
- Source: /tmp/rw/Pilot.tsx — find the form with useState, 5 fields, handleSubmit, DoubleBezel wrapper
- Target: src/pages/Pilot.tsx — CHECK if exists. Upgrade with source version if source is better.
- After edit: diff + review

**P11: Investor Day Urgency Banner**
- Source: /tmp/rw/Pilot.tsx — find final urgency section ("$600K. 90 days. 8 KPIs. Zero risk.")
- Target: src/pages/Pilot.tsx — INSERT at bottom before footer
- After edit: diff + review

---

## AFTER ALL 26 ELEMENTS

```bash
# Verify corrections
grep -rn "\$150K\|\$150,000" src/pages/ --include="*.tsx" | wc -l  # Must be 0
grep -rn "Griffiths" src/pages/ --include="*.tsx" | wc -l  # Must be 0
grep -rn "FuteurCredX" src/pages/ --include="*.tsx" | grep -v "@\|email" | wc -l  # Must be 0

# Final build
npm run build

# Deploy
npx vercel --prod --token $VERCEL_TOKEN --yes
```
