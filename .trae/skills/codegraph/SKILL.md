---
name: "codegraph"
description: "Semantic code intelligence via indexed knowledge graph. Invoke when exploring codebase structure, tracing call chains, analyzing impact, or searching symbols — use BEFORE grep/read loops."
---

# CodeGraph — Semantic Code Intelligence

CodeGraph builds a local SQLite knowledge graph of every symbol, edge, and file in the workspace using tree-sitter parsing. It provides sub-millisecond reads for code exploration, replacing expensive grep/read loops with targeted graph queries.

## Prerequisites

- CodeGraph must be installed: `npm i -g @colbymchenry/codegraph`
- The project must be initialized: `codegraph init` then `codegraph index`
- A `.codegraph/` directory must exist in the project root

## Core Principle: Answer Directly

For "how does X work", architecture, trace, or where-is-X questions, answer DIRECTLY using CodeGraph CLI queries instead of running grep + read loops. CodeGraph IS the pre-built search index — delegating lookup to a file-reading sub-task repeats work CodeGraph already did.

## CLI Commands

```bash
codegraph init                  # Initialize project (creates .codegraph/)
codegraph index                 # Build the knowledge graph index
codegraph sync                  # Sync changed files into the index
codegraph status                # Check index status and size
codegraph search <query>        # Full-text symbol search (FTS5)
codegraph context <query>       # Map a task/feature/area (composes search + node + callers + callees)
codegraph callers <symbol>      # Find all callers of a symbol
codegraph callees <symbol>      # Find all callees of a symbol
codegraph impact <symbol>       # Blast-radius analysis of a symbol
codegraph node <symbol>         # Show symbol source/signature/docstring
codegraph files [path]          # List indexed files
codegraph serve --mcp           # Start MCP server for AI agents
```

## Tool Selection by Intent

| Intent | Command |
|--------|---------|
| "What is the symbol named X?" | `codegraph search X` |
| "What's the deal with this task/feature/area?" | `codegraph context <query>` (PRIMARY) |
| "What calls this?" | `codegraph callers <symbol>` |
| "What does this call?" | `codegraph callees <symbol>` |
| "What would changing this break?" | `codegraph impact <symbol>` |
| "Show me this symbol's source" | `codegraph node <symbol>` |
| "What's in directory X?" | `codegraph files <path>` |
| "Is the index ready?" | `codegraph status` |

## Common Chains

- **Onboarding**: `codegraph context` first. If still unclear, explore breadth, then `codegraph node` on specific symbols.
- **Refactor planning**: `codegraph search` → `codegraph callers` → `codegraph impact`. The blast-radius answer comes from impact, not from walking callers manually.
- **Debugging a regression**: `codegraph callers` of the suspected symbol; widen with `codegraph impact` if an unexpected call appears.

## Anti-patterns

- **Don't grep first** when looking up a symbol by name — `codegraph search` is faster and returns kind + location + signature.
- **Don't chain search + node** when you just want context — `codegraph context` is one round-trip.
- **Don't query the index immediately after editing a file** — the watcher needs ~500ms to debounce + sync.

## Supported Languages (19+)

TypeScript, JavaScript, Python, Go, Rust, Java, C#, PHP, Ruby, C, C++, Swift, Kotlin, Dart, Lua, Luau, Svelte, Liquid, Pascal/Delphi

## Framework-aware Routing (14 frameworks)

Django, Flask, FastAPI, Express, NestJS, Laravel, Drupal, Rails, Spring, Gin/chi/gorilla/mux, Axum/actix/Rocket, ASP.NET, Vapor, React Router/SvelteKit

## Limitations

- Index lags file writes by ~1 second.
- Cross-file resolution is best-effort name matching; ambiguous calls may return multiple candidates.
- No live correctness validation — that's still the compiler/test suite/linter's job. CodeGraph supplements those with structural context they don't have.
