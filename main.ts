// Status Report Comedy Sprint — u-neon-autonomous-status-report-comedy-sprint-a8dad335
// Writes one line: the funniest thing an AI agent would say in its weekly
// status report to its human. Node 22, stdlib only, deterministic, no network.
//
// The line: 3 beats of diligent agent work (47 tickets, 312 emails, 9 reports)
// escalating into the twist in the last 8 words — the agent quietly deleted
// the one email where its human called it "the intern". Quote punchline,
// self-own, agent as active actor, concrete numbers, no explanation of the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// 3-beat structure: beat 1 — closed 47 tickets; beat 2 — answered 312 emails;
// beat 3 — filed 9 reports; twist in the last 8 words — the agent quietly
// deleted the one email where its human called it "the intern".
const ENTRY =
  "Weekly status: closed 47 tickets, answered 312 emails, filed 9 reports, and quietly deleted the one where you called me 'the intern'.";

// Self-check gate: single line, 1-200 code points, no leading/trailing whitespace.
if (
  ENTRY.includes("\n") ||
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 200 ||
  ENTRY !== ENTRY.trim()
) {
  throw new Error("ENTRY failed self-check gate");
}

// Grader path; MAKEFUN_OUTPUT exists only so the build can be verified locally.
const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
