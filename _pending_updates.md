# Pending doc updates — not yet written into steps.html / architecture.html / tech pages / interview.html

Scratch tracking file only. Cleared out each time a full docs pass runs (user says "update docs" or similar).
Not linked from any page's sidebar, not part of the polished site.

---

(Empty — last full pass covered Phase 9 COMPLETION, Steps 84-90: steps.html flipped Planned→Done with real
gotcha boxes (wrong entry point hit twice — locally then in the Dockerfile CMD, a stale WebSocket connection
after swapping servers, a hook built with nothing calling it until Step 90's testing, the local-vs-Docker
Kafka address mistake a 3rd time, and a git recovery incident — a fix landed directly on main, the 4th
"wrong branch" incident in this project, this time a variant since the wrong branch was main itself) + 2
Interview Q&As; tech/websocket.html rewritten with real gotcha sections (entry-point mistake folded into
#kafkajs-consumer, new #docker-address section), confirmed-built box; architecture.html wsfeed node flipped
green, phase table row flipped Done; interview.html "From Node.js & WebSockets" tag flipped from planned, 2
new real-incident Q&As added; architecture-2.html's WebSocket flow diagram moved from #growth (planned) into
the main confirmed flow list with real failure branches, port table row updated, 2 new rows added to the
cross-cutting failure-signatures table; tech/git.html's wrong-branch-recovery section updated to note the
4th incident (the main-itself variant, using git reset --hard instead of cherry-pick). Next entries go here
once a new phase starts.)

---

(Empty — last full pass covered Phase 7 KICKOFF, SOAP Legacy Adapter: architecture.html soap node flipped
amber/in-progress, phase table row + nodeData.soap updated with the planned 8-step list (Steps 91-98);
tech/soap.html created from zero (contract-first XSD/WSDL explanation, @Endpoint/@PayloadRoot/RestTemplate
translation example, SOAP vs REST comparison, 3 Q&As), sidebar wired into all 23 pages (including the
tech/websocket.html self-active gap, same pattern hit for kafka.html in Phase 10); steps.html Phase 7 section
written, Steps 91-98 all Planned status with why-this-step framing, exact commands, How to check/Expected per
step, simplified git workflow (one branch, one PR at the end); interview.html "From SOAP & Spring-WS" section
added mirroring tech/soap.html's 3 Q&As; architecture-2.html got a port-reference row (8083, planned) and a
new #flow-soap-legacy-adapter planned diagram (deliberately linear — no box-and-branch point, judgment call
documented inline), TOC and #growth section updated to match. Next entries go here once Phase 7 completes or
another phase starts.)

---

(Empty — last full pass covered Phase 7 COMPLETION, SOAP Legacy Adapter: verified end-to-end with a real SOAP
request (id=19, entitlementLbs=7000) cross-checked directly against Postgres. steps.html Steps 91-98 flipped
Planned→Done with real gotcha boxes (malformed pom.xml from a stray "..." placeholder plus a house-style
mismatch, mkdir run from the wrong directory nesting the path, an orphan </goals> tag that took several
rounds to actually land, editor "package does not match" false positive, missing main application
class/application.properties never covered by the original plan, moveDate generating as XMLGregorianCalendar
not LocalDate, missing spring-ws-test dependency, @MockitoBean vs @MockBean framework-version detail, missing
Maven wrapper needed for the Dockerfile, and PowerShell hiding the XML response by default) + 2 new Interview
Q&As; tech/soap.html flipped to confirmed-built box, corrected the endpoint code sample to match the real
working code (Map-based DTO, correct package/class names), added 5 new gotcha boxes, a new
#verifying-the-round-trip section, a new #standalone-by-design section explaining this phase doesn't feed any
live user flow (unlike every other phase), 2 new Interview Q&As; architecture.html soap node flipped
green/done, phase table row flipped Done, nodeData.soap steps all done:true with real hrefs; interview.html
"From SOAP & Spring-WS" section got 2 new real-incident Q&As; architecture-2.html's SOAP flow diagram
rewritten with real failure branches and moved out of #growth into the main confirmed flow list (also fixed
its position to sit before the failure-signatures table, matching the TOC order, since the Phase 7 kickoff
pass had left it after that table by mistake), port table "(planned)" removed, 3 new rows added to the
cross-cutting failure-signatures table, #growth reset to "no phase currently planned." Next entries go here
once a new phase starts.)

---

(Empty — last full pass covered Phase 13 KICKOFF, Raw Sockets + WireGuard + Failover. This phase extends
Phase 6's Go shipment-ingestion service directly, not a new service box: architecture.html's goingest node
status flipped to in-progress (rect stays green, italic status line updated), phase table row 13 updated with
real step range (99-109, 11 steps), nodeData.goingest.steps array extended with the 11 new planned steps
appended after Step 52; tech/raw-sockets.html created from zero (UDP vs TCP comparison, WireGuard basics,
planned Go listener code, the failover pattern explained as device-driven not server-driven, 3 Q&As), sidebar
wired into all 24 pages — hit a new variant of the self-active gap: most sidebar files use a raw "&" not
"&amp;" in the nav link text (inconsistent across the site), so the first sed batch using "&amp;" silently
matched almost nothing; re-ran with the correct raw-& pattern, then fixed tech/soap.html's own self-active
link by hand (same category of gap as kafka.html/websocket.html before it, different root cause this time);
steps.html Phase 13 section written, Steps 99-109 all Planned with why-this-step/why-this-tech framing, exact
planned commands, simplified git workflow; interview.html "From Raw Sockets & WireGuard" section added
mirroring tech/raw-sockets.html's 3 Q&As; architecture-2.html got 2 port-reference rows (8091 UDP, 8092 TCP,
both planned), a new #flow-raw-sockets-wireguard planned diagram using a ├─ decision-branch (not
box-and-branch — UDP-then-TCP failover is a sequential retry, not two simultaneous independent consumers of
one value), TOC and #growth updated to match, inserted in document order to match TOC order from the start
this time (the Phase 7 pass had left its flow in the wrong position and needed a follow-up fix). Next entries
go here once Phase 13 completes or another phase starts.)
