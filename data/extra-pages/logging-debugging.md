## Logging, debugging and profiling

Effective logging and profiling help us monitor, debug, and improve performance. Below are the best practices we follow:

### Logging

- Built-in Logging to stdout should be the default. It works well for containerized applications and ensures logs are accessible in real-time.
- File-based Logging is recommended if logs need to be persisted on a network drive, especially for ephemeral containers where logs might otherwise be lost.
- Python's built-in logging functionality is fine to start out, but it's harder to customize and trace logs from different packages. For improved logging with sane defaults yet easy customization, check out [loguru](https://github.com/Delgan/loguru).
- Don't use `print()` for logging in production; it can clutter your code and doesn’t provide levels or structured output.
- Don’t over-log: logging every function call will impact performance and obscure useful information.

### Debugging

- All modern IDEs have built-in debugging capabilities: add a breakpoint, and run the code in debug mode.
- You can also include `import pdb; pdb.set_trace()` anywhere to set a breakpoint and debug from your terminal.

### Profiling

- Use PyCharm Profiler for quick, basic performance analysis during development.
- For deeper insights, especially with performance bottlenecks, leverage Intel VTune Profiler for more comprehensive profiling and optimization. Lorenz Hambsch can help you out.
