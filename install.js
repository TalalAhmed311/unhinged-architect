#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "unhinged-architect";
const home = os.homedir();
const src = __dirname;

const skillDir = path.join(home, ".claude", "skills", SKILL_NAME);
const agentsDir = path.join(home, ".claude", "agents");

function copyItem(name, destDir) {
  const from = path.join(src, name);
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, path.join(destDir, name), { recursive: true });
}

// 1. Install the skill (SKILL.md must sit at the top of the skill folder)
if (fs.existsSync(skillDir)) {
  console.log(`⚠️  ${skillDir} already exists — overwriting.`);
}
fs.mkdirSync(skillDir, { recursive: true });
for (const item of ["SKILL.md", "references", "assets", "agents"]) {
  copyItem(item, skillDir);
}

// 2. The Junior subagent must live in ~/.claude/agents/ to be spawnable
fs.mkdirSync(agentsDir, { recursive: true });
fs.cpSync(
  path.join(src, "agents", "junior-engineer.md"),
  path.join(agentsDir, "junior-engineer.md")
);

console.log(`✅ Installed "${SKILL_NAME}" skill into ${skillDir}`);
console.log(`✅ Installed junior-engineer agent into ${agentsDir}`);
console.log(`\nOpen Claude Code and say "I've got an app idea, let's start".`);
