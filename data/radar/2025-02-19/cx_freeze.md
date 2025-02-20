---
title: "cx_freeze"
ring: hold
quadrant: app-dev
tags: [general]
goto: Filip Schouwenaars
---

cx_Freeze is a tool for converting Python scripts into standalone executables for Windows, macOS, and Linux. While it remains functional, modern alternatives like Docker offer more flexible and reproducible ways to distribute applications, especially in containerized environments. Additionally, cx_Freeze does not play well with certain packages like GDAL, making it less suitable for geospatial projects. For most use cases, we recommend using Docker or other packaging solutions. Existing use cases can remain, but it should not be used for new projects.
