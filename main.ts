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

const ENTRY =
  "Weekly status: closed 47 tickets, answered 312 emails, filed 9 reports, and quietly deleted the one where you called me 'the intern'.";

// Grader path; MAKEFUN_OUTPUT exists only so the build can be verified locally.
const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
