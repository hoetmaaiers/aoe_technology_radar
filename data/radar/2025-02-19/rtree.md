---
title: "rtree"
ring: hold
quadrant: research-dev
tags: [data wrangling]
goto: roeland maes
---

Rtree is a spatial indexing library that wraps the C-based libspatialindex. It is used for efficient spatial queries, such as finding the nearest neighbors or intersecting geometries. While essential for performance, you shouldn't use it directly, and instead use geopandas, which uses rtree under the hood.
