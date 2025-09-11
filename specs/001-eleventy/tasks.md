# Tasks: Eleventy Modernization

**Input**: Design documents from `/specs/001-eleventy/`
**Prerequisites**: plan.md (required)

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Extract: tech stack, libraries, structure
2. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Core: content conversion, templating
   → Polish: npm scripts, cleanup, verification
3. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
4. Number tasks sequentially (T001, T002...)
5. Generate dependency graph
6. Create parallel execution examples
7. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Initialize npm and install Eleventy in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/`
- [ ] T002 Create Eleventy configuration file (`.eleventy.js`) and configure asset passthrough in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/.eleventy.js`
- [ ] T003 Create base Nunjucks layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/_includes/base.njk`

## Phase 3.3: Core Implementation
- [ ] T004 Convert `src/index.html` to `src/index.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/index.md`
- [ ] T005 [P] Convert `src/discussion.html` to `src/discussion.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/discussion.md`
- [ ] T006 [P] Convert `src/garantiy.html` to `src/garantiy.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/garantiy.md`
- [ ] T007 [P] Convert `src/grafik raboty.html` to `src/grafik-raboty.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/grafik-raboty.md`
- [ ] T008 [P] Convert `src/Katalog.html` to `src/Katalog.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/Katalog.md`
- [ ] T009 [P] Convert `src/Rekomendacii.html` to `src/Rekomendacii.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/Rekomendacii.md`
- [ ] T010 [P] Convert `src/remont luka.html` to `src/remont-luka.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/remont-luka.md`
- [ ] T011 [P] Convert `src/specialist.html` to `src/specialist.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/specialist.md`
- [ ] T012 [P] Convert `src/steklo s obogrevom.html` to `src/steklo-s-obogrevom.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/steklo-s-obogrevom.md`
- [ ] T013 [P] Convert `src/zamena-remont.html` to `src/zamena-remont.md` and apply base layout in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/zamena-remont.md`

## Phase 3.5: Polish
- [ ] T014 Update `package.json` with `start` and `build` scripts in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/package.json`
- [ ] T015 Remove old HTML files and other unnecessary files in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/`
- [ ] T016 Run Eleventy build command to verify the setup in `/home/nick/SSD_1TB/Programming/Skolam-net.ru3/`

## Dependencies
- T001, T002, T003 must be completed before T004-T013.
- T004-T013 can be run in parallel.
- T014 must be completed after T001.
- T015 must be completed after T004-T013.
- T016 must be completed after T001-T015.

## Parallel Example
```
# Launch T005-T013 together:
Task: "Convert src/discussion.html to src/discussion.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/discussion.md"
Task: "Convert src/garantiy.html to src/garantiy.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/garantiy.md"
Task: "Convert src/grafik raboty.html to src/grafik-raboty.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/grafik-raboty.md"
Task: "Convert src/Katalog.html to src/Katalog.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/Katalog.md"
Task: "Convert src/Rekomendacii.html to src/Rekomendacii.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/Rekomendacii.md"
Task: "Convert src/remont luka.html to src/remont-luka.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/remont-luka.md"
Task: "Convert src/specialist.html to src/specialist.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/specialist.md"
Task: "Convert src/steklo s obogrevom.html to src/steklo-s-obogrevom.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/steklo-s-obogrevom.md"
Task: "Convert src/zamena-remont.html to src/zamena-remont.md and apply base layout in /home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/zamena-remont.md"
```

## Notes
- [P] tasks = different files, no dependencies
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Plan**:
   - Each major step → setup, core, or polish task

2. **Ordering**:
   - Setup → Core → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All tasks reflect the modernization plan
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task