---
title: "PostgREST"
ring: hold
quadrant: infra
tags: [database, rest]
goto: robin houdmeyers
---

PostgREST is a standalone web server that turns your PostgreSQL database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations. Although it allow a quick spinup of a RESTfull API based on the database model, it also limits features outside PostgRESTs capabilities. We advise not to use this because of poor ways to extend beyond it.
