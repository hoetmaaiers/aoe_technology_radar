### Codebase Documentation Guideline

Documentation is crucial to ensure your codebase remains understandable and maintainable, both for others as well as your future self.

We suggest multi-layered approach to documentation: Each type of documentation serves a distinct purpose, but all help both current and future developers navigate the codebase effectively. Below is a breakdown of recommended documentation practices:

1. README: Every repository should have a well-maintained README.md. Its primary goal is to help a user of your software to get up and running quickly. Include a project overview, setup instructions, and basic usage examples. Keep it concise and update it as the project evolves.

2. Confluence: Use Confluence for overarching documentation that explains how different repositories and components fit together. This is ideal for architecture overviews, workflows, how-tos on period manual tasks, etc.

3. Swagger (FastAPI): For APIs, use Swagger documentation (built through FastAPI, see radar) to ensure the documentation is always up to date and generated from the code itself. This reduces maintenance overhead and guarantees consistency.

4. Code Comments and Typing: Comment code as needed to clarify non-obvious logic, and leverage Python's type hints (typing) for self-documenting code.

5. Sphinx and Python-doc: For detailed code documentation, particularly in shared libraries meant to be used by colleagues or customers, use Sphinx with Python docstrings. Reference the [bmdata codebase](https://git.vito.be/projects/MARVIN-BALMATT/repos/bmdata/browse) (and the resulting [docs](http://docs.marvin.vito.local/rma/bmdata/)) for an example setup (including CI/CD integration, which ensures your documentation is generated and published automatically).

6. Jupyter Notebooks: Use Jupyter Notebooks for documenting complex workflows or code that requires detailed explanation and examples. Keep in mind that versioning them in Git can be challenging, so clean them before committing (nbstripout can help).
