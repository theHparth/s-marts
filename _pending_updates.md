# Pending doc updates — not yet written into steps.html / architecture.html / tech pages / interview.html

Scratch tracking file only. Cleared out each time a full docs pass runs (user says "update docs" or similar).
Not linked from any page's sidebar, not part of the polished site.

---

## Phase 8 (Claims Triage ML) — full pre-study docs pass written 2026-08-14
- `steps.html` Steps 32 (done) - 40 (planned), `tech/python-fastapi.html` (new page), 4 Q&A entries on
  `interview.html`, Python/FastAPI column on `tech/comparison.html` — all written from the planned Step
  33-40 instructions, marked "Planned" status, per the new phase-start-pre-study cadence.
- **Still pending:** once the user actually builds Steps 33-40 for real and reports progress/errors/questions,
  do the lighter follow-up pass — flip "Planned" → "Done" per step, correct any commands/output that differed
  from the plan, fold in real questions asked while building into python-fastapi.html + interview.html, flip
  architecture.html's ml node to green.

## Site-structure requests, confirmed 2026-08-13 — apply during the NEXT full docs pass, not before
1. **New page: `tech/comparison.html`** — cross-technology comparison table, NOT step-narrative. Columns =
   each stack introduced so far (Java/Spring, React/Redux/TS, Python/FastAPI — add a column per new stack
   going forward, same growth pattern as the per-tech pages). Rows: Server/runtime (Tomcat-via-Spring-Boot
   vs Vite-dev-server/Nginx vs Uvicorn), Dependency file (pom.xml vs package.json vs requirements.txt), API
   framework/how routes are defined, Database/data store used, Testing framework + how tests run, Data
   exchange/import-export flow (how JSON serialization happens end to end). Link into every page's sidebar
   under "Technology Reference". Grows incrementally — add a column the first time a new stack is introduced,
   same update trigger as creating a new per-tech page.
2. **Readability upgrade — collapsible sections + in-page jump nav, W3Schools-style.** User's words: "this
   should be toggle like hide and show so i readable page become bigger... need to add direct sub selection
   like in python... top header for python... side bar select that particular place what do i want to read
   so i not need to scroll and find." Concretely:
   - Wrap each page's H2 sections in `<details class="collapsible"><summary>` so they can be individually
     collapsed/expanded — page gets shorter/scannable instead of one long scroll. Add "Expand all / Collapse
     all" buttons near the top. `<details>` auto-expands on anchor-link navigation in modern browsers, so
     existing `#id`-anchor deep-links (from steps.html, interview.html) keep working.
   - Add a sticky "on this page" chip-nav directly under each page's H1 — one chip per H2 section, click to
     jump straight there without scrolling. This is the "top header + local sidebar to a specific place"
     the user described, distinct from the existing global left sidebar (which picks the *page*, this picks
     the *section within the page*).
   - Applies to: `architecture.html` (explicitly requested first, via a screenshot of the global sidebar),
     and by extension every other long page — `steps.html`, `interview.html`, and all `tech/*.html` pages —
     for consistency, once the pattern is built.
   - CSS to build in `assets/style.css`: reuse existing variables (`--accent`, `--panel-2`, `--border`,
     `--panel`, `--text-dim`) — same visual language as `.box`/`.pill`/`.qa`, don't invent a new palette.
3. **Python tech page (`tech/python-fastapi.html` or similar), when created during the Phase 8 docs pass:
   full beginner-level explanation for EVERY library used**, same tutor-depth standard as the other tech
   pages but user re-confirmed it explicitly for Python specifically: scikit-learn (Pipeline, ColumnTransformer,
   train_test_split, RandomForestClassifier, joblib), FastAPI (app/routes, Pydantic models, TestClient),
   Uvicorn, redis-py, pytest, pandas — each with what it is, why used here, basic syntax, a runnable example,
   same as Java/Spring and React/Redux got. Not just API reference — from-scratch teaching, per the standing
   tutor-depth rule.
