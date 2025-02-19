## Code Formatting Guideline

To maintain a consistent and efficient Python codebase across our team, we will adopt Ruff as our primary tool for formatting and linting.
Ruff offers cross-editor compatibility, with rules stored in either ruff.toml or pyproject.toml for transparency and consistency.
This ensures a uniform experience regardless of the IDE or editor used.

We recommend PEP8 as a general guideline, but we don’t enforce it strictly.
Instead, each project should explicitly define its formatting rules to prevent unnecessary reformatting when switching between contributors.
To further support various development environments, we will also use EditorConfig to define general formatting preferences like indentation, line endings, and character encoding.
This helps avoid situations where opening a project authored by someone else leads to an entire reformat due to different defaults not persisted in the project.

### Enforcement

Enforcement of code formatting will happen at the CI/CD level using Ruff checks, rather than pre-commit hooks.
This approach avoids the pitfalls of pre-commit failures that cannot be reproduced locally and keeps the developer workflow simple and fast.
Pre-commit hooks can be optionally used for developers who prefer local checks before committing.

For a new project, initialize Ruff and EditorConfig as part of the project setup, and integrate Ruff checks into your CI/CD pipeline to ensure all contributions comply with the formatting rules.

### Example Configuration

```
# pyproject.toml (Ruff Rules)

[tool.ruff]
line-length = 79
ignore = ["E501"] # Example of ignoring long lines


# .editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
```

### Adoption

To adopt this in an existing project:

- Install Ruff as a development dependency
- Add ruff.toml or update pyproject.toml with appropriate formatting rules.
- Add Ruff checks to your CI/CD configuration
- Set up and configure EditorCOnfig in your IDE and encourage your collaborators to do the same.

By ensuring formatting rules are explicitly defined within each project, we avoid unnecessary reformatting due to differing defaults while maintaining reasonable standards across the team.
