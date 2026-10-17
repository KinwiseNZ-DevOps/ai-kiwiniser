// SessionStart hook: injects the AI Kiwiniser always-on rules into the session.
// On by default once the plugin is installed. A user turns it off for good by
// creating $CLAUDE_CONFIG_DIR/.ai-kiwiniser-off (default ~/.claude).
// Never blocks session start: any failure exits 0.
//
// Runs under Node so it works on macOS, Linux and Windows.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

try {
  const claudeDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");
  const offPath = path.join(claudeDir, ".ai-kiwiniser-off");

  if (fs.existsSync(offPath)) process.exit(0);

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const rulesPath = path.join(scriptDir, "..", "skills", "ai-kiwiniser", "references", "always-on-rules.md");
  if (!fs.existsSync(rulesPath)) process.exit(0);

  const rules = fs
    .readFileSync(rulesPath, "utf8")
    .replace(/FLAG_PATH/g, offPath)
    .replace(/(?:\r?\n)+$/, "");

  process.stdout.write(`${rules}\n`);
} catch {
  process.exit(0);
}
