# Variables (QA Perspective)

## Why this matters

Understanding scope and variable behaviour is critical in test automation.

### Real QA Use Cases

- `let` → Use for test data that changes per test  
- `const` → Use for:
  - URLs
  - Selectors
  - Page Object values  

- Avoid `var` → can introduce hard-to-debug issues due to scope leakage  

---

## Key Takeaway

Poor variable handling = flaky tests  
Good variable handling = stable automation
