# Draft: Investor Relations Updates

## Requirements (confirmed)
- Update "Last updated" timestamp to January 21, 2026 at 4:00 PM ET.
- Remove placeholder news/events already done.
- Add Taddesse Inc. as parent company (done).
- Compute implied ticker price using a $9.7M implied valuation and 10M shares.
- Display ticker price as $0.970.
- Do NOT display valuation on the page.
- Manual verification only (no tests).

## Technical Decisions
- Use implied valuation $9.7M (pre-money) and 10,000,000 shares outstanding.
- Replace ticker price with implied per-share price formatted as $0.970.
- QA approach: manual verification only.

## Research Findings
- User notes: seed friends & family, valuation cap $10M, target $1.2M for 12%, actual raised $300,000.
- Implied valuation specified by user: $9.7M.
- Implied per-share price: $9,700,000 / 10,000,000 = $0.97.
- User requested formatting: $0.970.

## Open Questions
- Confirm appropriate label to replace ticker text (currently "PRIVATE: ISLND") to reflect private friends-and-family round with no public ticker.

## Scope Boundaries
- INCLUDE: Update investor page ticker date and valuation number.
- EXCLUDE: Other page content changes unless requested.