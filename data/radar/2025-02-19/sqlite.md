---
title: "SQLite"
ring: adopt
quadrant: infra
tags: [database]
goto: lorenz hambsch
---

SQLite is becoming the DBMS of choice for simple backends that deal with e.g. only two tables. In such a setting, PostgreSQL is overkill. SQLite is exposed to the application by mounting it from a shared location of the cluster.
