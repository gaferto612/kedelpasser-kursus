# BRIEFING — 2026-07-16T13:14:08+02:00

## Mission
Audit and expand the 9 HTML modules of the kedelpasser-kursus with advanced technical details in Danish, and ensure citations/references are included for all engineering facts/formulas.

## 🔒 My Identity
- Archetype: teamwork_preview_orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\orchestrator
- Original parent: main agent
- Original parent conversation ID: 54cf462a-e288-4d40-8b64-f38bc1ec7499

## 🔒 My Workflow
- **Pattern**: Project Pattern
- **Scope document**: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\PROJECT.md
1. **Decompose**: Decompose the 9 modules into separate milestones.
2. **Dispatch & Execute**:
   - **Delegate (sub-orchestrator)**: For each milestone (module), spawn an Explorer -> Worker -> Reviewer loop via subagents.
3. **On failure**:
   - Retry: nudge stuck agent or re-send task
   - Replace: spawn fresh agent with partial progress
   - Skip: proceed without (only if non-critical)
   - Redistribute: split stuck agent's remaining work
   - Redesign: re-partition decomposition
   - Escalate: report to parent (sub-orchestrators only, last resort)
4. **Succession**: Self-succeed at 16 spawns, write handoff.md, spawn successor.
- **Work items**:
  - M1: Certifikater & lovgivning [in-progress]
  - M2: Dampkedler [pending]
  - M3: Termodynamik [in-progress]
  - M4: Forbrænding & Brændsel [pending]
  - M5: Vandbehandling [pending]
  - M6: Armaturer & Sikkerhed [pending]
  - M7: Drift & Vedligehold [pending]
  - M8: Energi & Grøn Omstilling [pending]
  - M9: Formler & Tabeller [pending]
- **Current phase**: 2
- **Current focus**: Parallel execution of M1, M3 (M2 pending retry)

## 🔒 Key Constraints
- NEVER write, modify, or create source code files directly.
- NEVER run build/test commands yourself — require workers to do so.
- Keep layout classes intact.
- Danish language must be used.
- Include citations for all engineering facts/formulas.

## Current Parent
- Conversation ID: 54cf462a-e288-4d40-8b64-f38bc1ec7499
- Updated: not yet

## Key Decisions Made
- Chose Project Pattern with 9 milestones matching the 9 course modules.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| M1 | teamwork_preview_orchestrator | Audit & expand Modul 01 | in-progress | 5e4becf3-d6ca-4da8-8e5d-72c1fc6fc9b1 |
| M2 | teamwork_preview_orchestrator | Audit & expand Modul 02 | failed | 852fee0f-316f-4073-a958-6ecab1b6d35a |
| M3 | teamwork_preview_orchestrator | Audit & expand Modul 03 | in-progress | d1b063e1-9fff-4309-a181-9c5dd71b0e20 |

## Succession Status
- Succession required: no
- Spawn count: 4 / 16
- Pending subagents: 5e4becf3-d6ca-4da8-8e5d-72c1fc6fc9b1, d1b063e1-9fff-4309-a181-9c5dd71b0e20
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: task-19
- Safety timer: none

## Artifact Index
- c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\PROJECT.md — Global project plan and milestones
- c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\orchestrator\plan.md — Detailed orchestration steps
- c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\orchestrator\progress.md — Heartbeat and status log
- c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\orchestrator\context.md — Context metadata
