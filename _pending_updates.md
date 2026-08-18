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

---

(Empty — last full pass covered Phase 13 COMPLETION, Raw Sockets + WireGuard + Failover. Verified with a real
live WireGuard tunnel (wg show, matching real peer keys), a real UDP ping cross-checked against Postgres, and
a genuine TCP failover (UDP disabled for real, real ack received, real row landed). Live testing surfaced 4
real bugs beyond the original plan, all fixed: UDP client retries caused duplicate Postgres rows (fixed with
a RequestID + server-side dedup cache), a "successful" TCP write turned out to be a false positive from
Docker Desktop's port-publishing proxy accepting connections independent of backend state (fixed with an
explicit application-level ack), the first ack fix then broke on a second Docker quirk — the proxy doesn't
pass a client half-close (CloseWrite) through correctly (fixed by switching to length-prefixed TCP framing,
removing the need for half-close entirely), and handlePing's Kafka publish was synchronous despite the
documented "don't block the response" intent (fixed by firing it in a goroutine). Also found and fixed one
unrelated pre-existing bug: services/soap-legacy-adapter/mvnw had CRLF line endings from a Windows checkout
with no protecting .gitattributes (unlike move-entitlement-service, which has one) — broke that service's own
Docker build; fixed the file and added the missing .gitattributes. architecture.html goingest node flipped
fully green/done, phase table row 13 → Done, nodeData.goingest steps 99-109 renumbered to match what actually
got built (11 steps, real hrefs); tech/raw-sockets.html flipped to confirmed-built, corrected the Go code
samples to match the real final implementation (dedup check, length-prefixed TCP), added 4 new gotcha boxes
for the real bugs, corrected the failover diagram (TCP does need an explicit ack after all), 2 new Interview
Q&As; interview.html "From Raw Sockets & WireGuard" got the same 2 new Q&As; architecture-2.html's flow
diagram rewritten with all 4 real failure branches, port table cleaned up (no more "planned"), 3 new
failure-signatures rows, #growth reset to "no phase currently planned." Also standing rule change mid-session: user said steps.html should never include routine/repeated git or
docker commands per step (only genuinely new ones). A background agent retroactively cleaned Phases 1-12
(everything before the phase13 heading, left untouched as instructed) — verified afterward: tag balance
clean, real incidents (cherry-pick/reset --hard/revert recoveries) correctly preserved, only one real problem
found (step49 left with zero content after its all-ceremony code block was stripped) — fixed with a real
one-line note instead of leaving it empty. Phase 13's own steps.html completion section was then written from
scratch following the new rule (no git/docker commands at all — every step now reads as pure why/what
happened/how to check). Also added a new tech/git.html section (#line-endings-crlf) for the mvnw CRLF
incident, since steps.html referenced it but the real explanation didn't exist anywhere yet — matches this
project's "link to the tech page, don't repeat the explanation" convention. All 6 touched files
(steps.html, tech/git.html, tech/raw-sockets.html, architecture.html, architecture-2.html, interview.html)
tag-balance validated clean. Next entries go here once a new phase starts.)

---

(Empty — last full pass covered Phase 15 KICKOFF, VPC/Terraform/EKS/RDS/HPA/SSM/Ansible — by far the largest
phase in the project. User picked "real AWS, spin up then destroy" over local/never-applied alternatives to
control cost. Two judgment calls made and explained (not asked, since user delegated "pick best for
learning"): Postgres → RDS while Kafka/RabbitMQ/MongoDB/Redis stay as EKS StatefulSets (bounds cost/scope
while still teaching the core managed-vs-self-hosted tradeoff with one concrete example); Ansible configures
EKS worker nodes over the AWS SSM connection plugin instead of SSH (ties Ansible+SSM into one real technique
instead of two disconnected checkboxes). Two new tech pages created from zero: tech/terraform-eks.html
(Terraform fundamentals, Kubernetes fundamentals, Docker-Compose-to-K8s term mapping, this project's specific
architecture decisions, 4 Q&As) and tech/ansible-ssm.html (Ansible fundamentals, the real SSM-over-SSH
technique, 4 Q&As) — both deliberately scoped to NOT duplicate notes/aws.html's already-comprehensive general
AWS reference, linking back to it for generic service definitions (IAM, EKS-as-a-concept, Systems Manager)
and focusing only on what's genuinely new (Terraform itself, Kubernetes itself, Ansible itself, and how this
project specifically wires them together). Sidebar wired into all 24 existing pages plus the 2 new ones —
caught 2 real pre-existing gaps unrelated to this phase while doing it: architecture-2.html's sidebar was
missing raw-sockets.html entirely, and steps.html's sidebar was too (both silent casualties of an earlier
sed's pattern not matching); fixed both. Also hit 3 files using &amp; instead of raw & in their sidebar text
(tech/websocket.html, tech/soap.html, tech/raw-sockets.html's own self-active link) — same recurring
inconsistency-across-the-site pattern as Phase 13's kickoff, fixed with a separate &amp;-pattern sed pass.
architecture.html: updated the existing "Target: Kubernetes on AWS... Phase 15, not started" placeholder note
(it already anticipated this phase) to in-progress with real step numbers, and clarified the existing SVG
diagram stays the service-level view — the real AWS topology lives on architecture-2.html instead, not as a
new SVG here; phase table row 15 updated with the real 19-step plan (not the rough ~30 estimate). steps.html
got the full 19-step Phase 15 section (Steps 110-128), Planned status, following the new no-boilerplate rule
— but real terraform/kubectl/aws-cli/ansible commands were KEPT since those are the substantive technical
content of this phase, not routine ceremony the way git commit/push is; only git ceremony itself was omitted.
interview.html got both new "From Terraform, VPC & EKS" and "From Ansible & SSM" sections. architecture-2.html
got a new #flow-aws-deployment planned diagram (ALB → EKS Ingress/Service/Pod → RDS, with the
StatefulSet-vs-managed distinction called out) — hit the same TOC-position mistake twice before landing it
correctly before #failure-signatures on the third attempt (a mid-response server error interrupted the first
attempt right after finishing a Read with no Edit yet, so no content was actually lost — the second attempt's
own Edit accidentally duplicated the #growth heading, caught immediately via a heading-order grep and fixed
by removing then re-inserting the block cleanly). User then set a new standing workflow for actually building
this phase: strict step-by-step — Claude explains why, gives exact location (code file or real AWS Console
path) and how to test (terminal/browser/AWS dashboard), user runs it and reports the result, Claude confirms
against expected before giving the next step. No steps have been executed yet as of this entry — Step 110
(AWS credentials) is next. Next entries go here once Phase 15 makes real progress or another phase starts.)
