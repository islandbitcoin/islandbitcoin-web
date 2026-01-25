# Investor Relations Ticker Updates

## Context

### Original Request
Update the investor relations ticker to reflect a private friends-and-family round: change the label to a non‑ticker private company label, update the implied per‑share price based on a $9.7M valuation and 10M shares, and update the last updated timestamp.

### Interview Summary
**Key Discussions**:
- User wants to replace the ticker label with "PRIVATE COMPANY" (not a public ticker).
- Per‑share price should be derived from $9.7M implied valuation and 10,000,000 shares.
- Display the price as `$0.970` (explicit trailing zero).
- Update timestamp to "January 21, 2026 | 4:00 PM ET".
- Manual verification only (no tests).

**Research Findings**:
- Ticker text is in `components/investors/InvestorHero.tsx` as two spans: `PRIVATE:` and `ISLND`.
- Price is currently `$0.001` and timestamp is "February 28, 2025 | 4:00 PM EST".

### Metis Review
**Identified Gaps** (addressed):
- Confirmed replacement label "PRIVATE COMPANY" for private status.
- Confirmed price formatting with trailing zero: `$0.970`.
- Confirmed manual verification only.

---

## Work Objectives

### Core Objective
Update the Investor Relations ticker display to reflect the latest private round info (label, price, and timestamp) without changing layout or animations.

### Concrete Deliverables
- Update label text in `components/investors/InvestorHero.tsx` to "PRIVATE COMPANY".
- Update ticker price to `$0.970`.
- Update timestamp to "January 21, 2026 | 4:00 PM ET".

### Definition of Done
- [ ] Investor ticker label shows "PRIVATE COMPANY".
- [ ] Ticker price shows `$0.970`.
- [ ] Timestamp shows "January 21, 2026 | 4:00 PM ET".
- [ ] No layout changes beyond text updates.

### Must Have
- Preserve all existing Tailwind classes and Framer Motion animations.

### Must NOT Have (Guardrails)
- No refactors or reformatting.
- No new imports, constants, or config files.
- No changes outside `components/investors/InvestorHero.tsx`.

---

## Verification Strategy (Manual QA Only)

### Test Decision
- **Infrastructure exists**: YES
- **User wants tests**: Manual-only
- **Framework**: none

### Manual Verification
- Open `https://islandbitcoin.com/investors`.
- Confirm the ticker label reads **PRIVATE COMPANY**.
- Confirm the price reads **$0.970**.
- Confirm the timestamp reads **January 21, 2026 | 4:00 PM ET**.

---

## Task Flow

```
Task 1 → Task 2 → Task 3
```

---

## TODOs

- [ ] 1. Update ticker label text in `components/investors/InvestorHero.tsx`

  **What to do**:
  - Replace the existing label spans (`PRIVATE:` and `ISLND`) with the single label text `PRIVATE COMPANY`.
  - Keep the label styled with existing typography classes (no class changes).

  **Must NOT do**:
  - Do not change layout or spacing.
  - Do not modify other sections or files.

  **Parallelizable**: NO

  **References**:
  - `components/investors/InvestorHero.tsx` - current ticker markup and label spans.

  **Acceptance Criteria**:
  - Ticker label displays **PRIVATE COMPANY**.

- [ ] 2. Update ticker price and timestamp in `components/investors/InvestorHero.tsx`

  **What to do**:
  - Replace the price text with `$0.970`.
  - Update the timestamp to `January 21, 2026 | 4:00 PM ET`.
  - Keep the change indicator `0.00 (0.00%)` unchanged.

  **Must NOT do**:
  - Do not change any class names or layout.
  - Do not alter the change indicator text.

  **Parallelizable**: NO (depends on Task 1)

  **References**:
  - `components/investors/InvestorHero.tsx` - price span and timestamp paragraph.

  **Acceptance Criteria**:
  - Price displays **$0.970**.
  - Timestamp displays **January 21, 2026 | 4:00 PM ET**.

- [ ] 3. Manual verification

  **What to do**:
  - Visit `/investors` in the browser.
  - Verify label, price, and timestamp.

  **Parallelizable**: NO

  **Acceptance Criteria**:
  - Visual confirmation of updated label, price, and timestamp.

---

## Success Criteria

### Verification Commands
- None (manual browser check only).

### Final Checklist
- [ ] Label updated to **PRIVATE COMPANY**.
- [ ] Price updated to **$0.970**.
- [ ] Timestamp updated to **January 21, 2026 | 4:00 PM ET**.
- [ ] No unintended layout or style changes.
