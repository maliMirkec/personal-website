---
name: staticrafter-setup
description: Set up or rescan StatiCrafter in this site. Use when the user asks to set up, configure, rescan or update StatiCrafter, or the designer config. Scans pages, posts and data files, asks the user questions, and writes designer.config.json. Never handles secret values.
---

# StatiCrafter setup

Use this to set up StatiCrafter in a site, or to rescan it later. You write `designer.config.json`. You never see or write secret values.

## 1. Scan

Run `npx staticrafter scan --json` in the site root. Read the report and the current `designer.config.json`, if there is one.

- `project.jsOptions: true` means some options are set in JavaScript, in the Eleventy config. Tell the user which settings you cannot change there. Do not edit JavaScript config without asking.
- `config.error` means the config file is broken. Show the error and fix it first, with the user's consent.
- Every finding has a `status`. On a rescan, ask only about `new` findings. Never remove or change `configured` settings unless the user asks.

## 2. Ask

Use AskUserQuestion. Ask up to 4 questions at a time, grouped in this order. Put the recommended option first, and explain each option in one short sentence. Skip a group when it has nothing new.

1. **Site basics:** the name, and the new page path. Offer `site.newPageSuggestion` when it is set, like `src/{lang}/{name}.md` for a site with language folders.
2. **Pages:** `pages.fields` with a suggestion. `enum` becomes a select, `ui: url` a URL field, `ui: date` a date field, `suggestions` a list of values offered while typing. Also offer `seo.baseUrlSuggestion` as `site.seo.baseUrl`.
3. **Posts:** if `posts.count` is 0 but `posts.candidates` lists folders, ask which folder holds posts. Then go through `posts.links` and `posts.fields`:
   - `suggest.data` turns the field into a picker for that data file, like `"author": { "data": "authors" }`.
   - `suggest.suggestions` offers those values while typing.
   - Offer an `order` with title, date and description first.
4. **Data files:** offer every `dataFiles` item with `status: new` and `suggest: data-tab`, several per question (multiSelect). Show what each holds and which templates read it (`usage.files`). Files read only by templates in a `_legacy` folder are likely unused.
5. **Integrations:** GitHub pull requests need `site.github` with `repo` (owner/name) and `base` (branch). Ask for both. Cloudinary uploads and hosted Ask AI need secrets only.
6. **Hosting:** ask whether editors should use the designer on Netlify deploy previews. If yes, and `project.adapter` is `eleventy`, run `npx staticrafter init --netlify`. Then show the user how to add `hosted: true` to the StatiCrafter plugin in the Eleventy config, and ask before you edit that file. Remove only the lines the command lists as leftovers.

## 3. Write the config

Edit `designer.config.json` with your file edit tool. Keep every existing key and its order. Add only what the user chose.

- Data files go in `site.dataFiles` as `{ "file", "label", "scope" }`. `scope` is the data name the templates use: `site` for `_data/site.json`, `mcm2026.speakers` for `_data/mcm2026/speakers.yml`.
- A whole data file needs a `name` that differs from any `data` field name. If `forms` is already a field's `data`, name the whole file `forms-file`.
- Page fields go in `page.fields`, post fields in `post.fields`, like `{ "layout": { "enum": ["default", "post"] } }`.
- Do not list more than about 40 suggestions. For bigger lists, add a `help` text that says where the values come from.
- `seo.baseUrl` turns on canonical checks. Pages with a `canonical` in front matter are checked against it.

Then run `npx staticrafter check`. Fix every error it reports. Run `npx staticrafter scan` again and confirm the chosen findings now show as configured.

## 4. Secrets

Look at `integrations.secrets`. It shows only whether each secret is set.

- Never ask the user to paste a secret into the chat. Never read `.env`.
- Tell the user to run `npx staticrafter secrets` in a terminal. It asks for each value with hidden input, and finds Cloudinary and hosting from the config. `npx staticrafter secrets --update` goes through every secret again; Enter keeps a value.
- For Netlify, `npx staticrafter secrets --netlify` prints the commands to add the same variables for deploy previews and branch deploys.
- For GitHub, explain the token: a fine-grained token for that repository only, with Contents and Pull requests set to read and write.
- If `integrations.license.valid` is false, Ask AI, MCP and pull requests stay off until the user adds a license key.

## 5. Finish

Tell the user in a few lines what changed. Ask them to restart the dev server. Do not commit anything.
