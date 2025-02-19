---
title: "typeguard"
ring: assess
quadrant: app-dev
tags: [typing, validation and testing]
goto: roeland maes
---

Typeguard is a runtime type-checking library for Python that verifies type annotations at runtime. It complements static type checkers like mypy by ensuring type correctness during execution. While useful for catching type errors that static analysis might miss, it can introduce some runtime overhead. Use Typeguard for debugging and testing in type-annotated projects, especially in cases where stricter type enforcement is needed. For static-only checking, rely on mypy.
