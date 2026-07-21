<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## News publishing workflow

- New JSON news records may start with `durum: "taslak"` while their content and image are incomplete.
- A news task is not complete until `npm run news:publish -- --slug=<slug>` succeeds.
- Do not report a news item as published while it remains `taslak`, and do not bypass the publication quality checks.
