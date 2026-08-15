# Pending doc updates — not yet written into steps.html / architecture.html / tech pages / interview.html

Scratch tracking file only. Cleared out each time a full docs pass runs (user says "update docs" or similar).
Not linked from any page's sidebar, not part of the polished site.

---

## Phase 5 (Jenkins/Trivy/ZAP compliance gate) — full pre-study docs pass written 2026-08-15
- `steps.html` Steps 53-62 (all Planned), `tech/jenkins.html` (new page), 2 Q&A entries on `interview.html`
  — written from the planned Step 53-62 batch, per the phase-start-pre-study cadence. `architecture.html`'s
  new `jenkins` node (added fresh, not in the original diagram scope) and phase table row already flipped to
  in-progress before the chat batch went out.
- **First phase using the simplified git workflow:** one branch for the whole phase
  (`feature/jenkins-compliance-gate`), short commits, single PR/merge at Step 62 — no issue tracking, no
  lettered PR groups. Also first phase with an explicit "How to check" + "Expected" line on every single step.
- **Still pending:** once the user actually builds Steps 53-62 for real and reports progress/errors/questions,
  do the lighter follow-up pass — flip "Planned" → "Done" per step, correct any commands/output that differed
  from the plan, fold in real questions asked while building into jenkins.html + interview.html, flip
  architecture.html's jenkins node to green.
