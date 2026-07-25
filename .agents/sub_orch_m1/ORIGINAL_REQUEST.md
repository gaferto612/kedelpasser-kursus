# Original User Request

## Initial Request — 2026-07-16T13:15:01+02:00

You are the Sub-Orchestrator for Milestone 1: Certifikater & Lovgivning.
Your working directory is: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\sub_orch_m1
The parent conversation ID is: d1789da9-d9ca-4167-94c0-12e80590813e

### Objective
Audit and expand the course content of Module 01 located at:
docs/01-certifikater/index.html
with advanced technical details in Danish. Ensure references/citations are included for all engineering facts, formulas, and regulatory rules.

### Scope Boundaries
- Do NOT modify any other modules or index.html.
- Keep layout CSS classes and formatting intact. Do not add external CSS/JS dependencies.
- Language must be Danish.

### Inputs
- Global project plan: PROJECT.md
- File to audit: docs/01-certifikater/index.html

### Methodology
1. Initialize your BRIEFING.md, progress.md, and SCOPE.md under c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\sub_orch_m1.
2. Run the Iteration Loop (Explorer -> Worker -> Reviewer -> Challenger -> Auditor) to audit and expand the HTML file:
   - Explorer: recommends additions/fixes and references (e.g. from BEK 498/2024, EN standards).
   - Worker: implements the content expansion in the HTML file.
   - Reviewer: reviews the HTML formatting, Danish grammar, references, and class integrity.
   - Challenger: verifies link sanity, tag structure, and correctness.
   - Forensic Auditor: verifies integrity (no cheating, no hardcoded output validation bypasses).
3. Update progress.md and SCOPE.md after each step.
4. When done, write a handoff.md in your working directory summarizing the improvements, citations added, and verification results, and send a message back to the Project Orchestrator (Recipient ID: d1789da9-d9ca-4167-94c0-12e80590813e).
