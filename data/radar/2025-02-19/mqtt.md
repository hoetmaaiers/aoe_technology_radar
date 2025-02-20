---
title: "MQTT"
ring: adopt
quadrant: infra
tags: [queue]
goto: Stijn Van Looy
---

Message Queuing Telemetry Transport. A lightweight, publish-subscribe protocol designed for low-bandwidth, low-latency messaging (commonly used in IoT). Use Mosquitto as your broker, with paho-mqtt as the client. This provides full MQTT compliance and is perfectly suitable for IoT use cases. Avoid using RabbitMQ with the MQTT plugin, as it doesn't fully implement all MQTT features.
