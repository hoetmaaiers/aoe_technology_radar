---
title: "pip"
ring: hold
quadrant: env-pkg-mgmt
tags: []
goto:
---

pip is fine for installing individual packages but not for managing environments. It lacks isolation, does not handle non-Python dependencies, and does not track project requirements. Use virtualenv for basic isolation or tools like Conda and Pixi for full environment management. These tools may still use pip but you should not use pip on its own
