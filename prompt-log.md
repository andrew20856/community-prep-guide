# Hands-On Lab Activity #4: Effective Prompt Engineering for AI-Assisted Web Development

## Task 1: Sector Selection
* **Sector:** Disaster Risk Reduction / Climate Change Adaptation
* **Local Challenge:** Residents in local communities need an easy-to-understand and interactive household disaster-preparedness checklist and guide.
* **Target Users:** Community residents, families, and local households.
* **Proposed Project:** Community Preparedness Guide
* **Key Features:** Interactive disaster preparedness checklist, emergency kit items overview, and basic evacuation reminders.
## Task 2: Zero-Shot Prompting

**Objective:** Observe what Copilot generates from a basic prompt without examples or detailed constraints[cite: 3].


> Create a simple webpage that helps residents prepare for disasters.[cite: 3]

**Actual Copilot Output:**
Saved generated code baseline to `outputs/task2-zero-shot.html`[cite: 6]. Applied layout directly to `index.html`, `style.css`, and `script.js`[cite: 12].

**What Worked:**
* Copilot generated a modern, styled single-page web app with hero sections and structured checklist cards[cite: 12].
* Automatically separated code into HTML, CSS, and JS files[cite: 12].

**What Needs Improvement:**
* Content is generic and lacks explicit local Philippine community context.
* Needs explicit rules for strict accessibility standards, mobile responsiveness verification, and clear custom item structures.

**Next Action / Verification:**
* Apply Task 3 structured prompt components (Role, Task, Context, Constraints, Acceptance Criteria) to refine responsiveness, local relevance, and interactive features[cite: 4].

## Task 3: Improve: Anatomy of a Prompt

**Objective:** Enhance output relevance and structure using explicit prompt components (Role, Task, Context, Constraints, Expected Output, Acceptance Criteria).


> Role: Act as a senior frontend web developer.
> Task: Refine the Community Preparedness Guide into an interactive single-page web application specifically designed for Philippine local households facing tropical cyclones and flooding[cite: 2, 3, 4].
> Context: Local residents need a direct tool to check off essential emergency kit items, view critical household disaster steps, and access local emergency reminders[cite: 3, 4].
> Constraints: Use semantic HTML5 (<header>, <main>, <section>, <footer>), custom modern CSS with responsive Flexbox/Grid layout, and modular vanilla JavaScript[cite: 2, 4, 5]. Do not use external libraries, backend services, or live hazard APIs[cite: 2, 4].
> Expected Output: Update index.html, style.css, and script.js with complete, clean, functional code[cite: 2, 4].
> Acceptance Criteria: Must feature an interactive checkbox list with local emergency kit items (e.g., flashlights, water supply, document preservation), accessible keyboard controls, high-contrast readable elements, and layout adaptability down to 320px mobile screens.

**Actual Copilot Output:**
Saved generated structured code to `outputs/task3-structured.html`.

**What Worked:**
* Structured prompt produced localized Philippine context and clearer feature sections[cite: 3, 4].
* Semantic HTML structure improved significantly with explicit header, main, and section tagging.

**What Needs Improvement:**
* Standard checklist items need more consistency in data format across categories.
* Accessibility and contrast require dedicated testing.

**Next Action / Verification:**
* Apply Few-Shot Prompting and Role Assignment in Task 4 to standardize data and review accessibility compliance.

## Task 4: Few-Shot and Role Assignment

**Objective:** Explore how examples (few-shot) and specialized personas (role assignment) influence AI output quality[cite: 4, 5].

### Experiment A: Few-Shot Prompting

> Create preparedness checklist items using this format:
> Example 1:
> Item: Waterproof Flashlight
> Category: Emergency Kit
> Description: Keep a working battery-operated or hand-crank flashlight available.
> Example 2:
> Item: Bottled Drinking Water
> Category: Emergency Kit
> Description: Prepare 1 gallon of water per person per day for at least 3 days.
> Generate four additional general preparedness items for Philippine households using the exact same format and render them directly into the checklist component.

**Actual Copilot Output:**
Saved output record to `outputs/task4a-fewshot.txt`[cite: 2, 6].

**Observation:**
The few-shot prompt ensured that all newly generated items strictly followed the uniform data structure (Item, Category, Description) without extra unnecessary attributes[cite: 4].

---

### Experiment B: Role Assignment

> Act as a frontend accessibility reviewer. Examine the generated Community Preparedness Guide. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

**Actual Copilot Output:**
Saved accessibility audit response to `outputs/task4b-role-review.md`[cite: 2, 6].

**Observation:**
Adopting an accessibility reviewer persona highlighted actionable technical concerns, such as explicitly linking checkbox `<label>` elements and ensuring clear focus outline styles for keyboard navigation.

**Next Action / Verification:**
* Apply a structured reasoning prompt in Task 5 to diagnose and patch a specific technical issue.

## Task 5: Analyze Structured Reasoning and Refinement

**Objective:** Use AI-assisted technical analysis to diagnose and resolve specific implementation weaknesses.


> Review my Community Preparedness Guide. Check whether the interactive checklist works correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

**Actual Copilot Output:**
Saved technical audit response to `outputs/task5-analysis.md`[cite: 2, 6]. Copilot identified progress count mismatches and missing list semantics for accessibility[cite: 5].

**Selected Correction & Verification Result:**
Applied the list semantics update (`<ul>` and `<li>` structure) and updated the dynamic progress counter in `script.js`. Verified in the browser that checking off items updates the completion count accurately

## Task 6: Final Comparison and Reflection

### Prompting Technique Comparison

| Technique | Observation |
| :--- | :--- |
| **Zero-Shot** | Produced a basic layout but lacked local context and interactive checklist capabilities. |
| **Structured Prompt** | Greatly improved output quality by specifying local Philippine context, responsive layout requirements, and feature scope. |
| **Few-Shot** | Enforced uniform item data formatting across all emergency checklist items. |
| **Role Assignment** | Highlighted critical web accessibility issues (ARIA labels, keyboard navigation, contrast). |
| **Structured Analysis** | Identified functional code mismatches and provided targeted fixes with clear verification steps. |

### Final Reflection
Structured prompting provided the most comprehensive initial codebase by defining technical scope, tools, and layout requirements[cite: 6]. Few-shot prompting guaranteed data consistency, while role assignment uncovered accessibility details that were initially overlooked[cite: 6]. Overall, AI assistance dramatically speeds up frontend prototyping, but manual verification, testing, and refine steps remain necessary to deliver a fully reliable web application.