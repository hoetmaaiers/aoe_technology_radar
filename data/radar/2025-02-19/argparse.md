---
title: "argparse"
ring: hold
quadrant: app-dev
tags: [cli]
goto:
---

argparse is the standard library for command-line argument parsing in Python. While it is reliable and widely used, its syntax can be verbose and less intuitive for complex CLIs. We recommend using Typer for new projects due to its cleaner API, type hints support, and better developer experience. Existing scripts using argparse can remain, but new command-line tools should use Typer.
