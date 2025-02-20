---
title: "gdal"
ring: hold
quadrant: research-dev
tags: [data i/o]
goto: Lorenz Hambsch
---

GDAL is a powerful library for working with raster and vector geospatial data. However, we recommend avoiding its direct use in Python. Instead, prefer higher-level libraries like geopandas, rasterio for raster data and fiona for vector data. These libraries provide a more Pythonic and readable interface while still leveraging GDAL under the hood. Shapely and GeoPandas can handle most geometry-related tasks, further reducing the need for direct GDAL usage.
