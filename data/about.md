# How to use the VITO Python Tech Radar

## Introduction

Technology is advancing rapidly. It is essential for a research organization like VITO to:

- Keep track of the latest valuable technology innovations to see if they can benefit the quality and speed of our research.
- Question the validity of established tooling, technolgy and methods to avoid it becoming outdated.
- Make these considerations continuously and share them broadly, transparently and collaboratively.

## What is the VITO Python Tech Radar?

The VITO Tech Radar is an overview of Python packages for research, Python packages for application development, Python package tooling and more broadly infrastructure, organized like blips on a radar with quadrants.
The radar contains both elements that are currently actively used at VITO as well as elements that we consider new or noteworthy. Every blip on the radar is complemented with a so-called ring assessment, which can be one of four things:

- **Adopt:** We wholeheartedly recommend this technology. It has been extensively used in many teams for an extended period, proving its stability and utility.
- **Trial:** We have successfully implemented this technology, but using it more actively can still uncover limitations we don't yet know about. Compared to Adopt, Trial technologies are slightly more risky. We should scrutinize these items more closely with the intention of elevating them to the 'Adopt' level.
- **Assess:** Technologies that are promising and have clear potential value-add for us, and thus are worth to invest some research and prototyping efforts in. When it's proving its value in several projects, it can move to Trial. Assess is riskier and 'earlier-stage' than Trial items.
- **Hold:** Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth to (further) invest in. 'Hold blips' should not be used for new projects, but usually can be continued for existing projects.

Aside from these blips with ring assessments, this website also includes guides on code formatting, documentation and logging that can be helpful resources.

### What is the purpose of the Tech Radar?

We built the Python Tech Radar:

- To inspire and support R&D and application development teams at VITO to pick the best technologies for new projects. This will lead to more efficient, effective, and future-proof research output that is easier to productize/valorize.
- To provide a platform to connect across units in search for expertise of particular technologies.
- To continuously reflect on technology decisions and evolve our technology landscape, so we ensure that technology works for us, not against us.

### How the Python Tech Radar was conceived

The first version of the Tech Radar was put together by the Competence Center Software & Services (CC SAS) in March of 2025 and is currently scoped to Python only. The first version is the result of several interal iterations, rooted in CC SAS' collective experience of turning research code by domain experts into functional products that run with high availability (a website, a simulation tool, a dashboard, IoT devices deployed in the wild, etc).

The experience of SAS' Python developers is not a complete nor a fully accurate picture of how Python is and should be used across VITO: there are a ton of unknown unknowns and there may be better tools and technologies. We actively encourage other teams to contribute to the radar by suggesting additional blips, or challenging current ring assessments. That way, the Tech Radar becomes a living, breathing thing, that undergoes regular updates as new technologies emerge and potentially invalidate other technologies.

If this tech radar gains traction internally, we may consider doing a similar exercise for other programming languages, to update the scope of the current radar, to no longer show obvious blips on the radar to keep the oversight, ... . Time will tell.

### How to contribute to the Python Tech Radar

We're still figuring out how we'll set up the collaboration model, but all ideas, suggestions, new submissions, concerns are welcome! For now, just [shoot an email to Robin Houdmeyers and Filip Schouwenaars with "Tech Radar" in the subject line]([Send Email](mailto:robin.houdmeyers@vito.be;filip.schouwenaars@vito.be?subject=Tech%20Radar).

The source code for this tech radar website is [here](TODO). We welcome non-controversial pull requests (typo fixes, obvious things we missed). If you disagree with the current ring assessments, just email us; we promise we'll get back to you promptly!

### References

The Tech Radar concept was pioneered by Thoughtworks and adopted across many technology organizations since. We got a lot of inspiration from:

- https://opensource.zalando.com/tech-radar/
- https://www.thoughtworks.com/radar
- https://www.aoe.com/techradar/
