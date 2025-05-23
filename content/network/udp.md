# User Datagram Protocol (UDP)

Services provided by UDP:

1. [data delivery (multiplexing)](#multiplexing)
2. [error checking](#error-checking)

## Header

```mermaid
packet-beta
title UDP Packet
0-15: "Source Port"
16-31: "Destination Port"
32-47: "Length"
48-63: "Checksum"
64-95: "Data (variable length)"
```

Used for [multiplexing](#multiplexing):

- **Source Port**
- **Destination Port**

Used for simple data validation:

- **Checksum**

Other fields:

- **Length**: the number of bytes in the UDP segment (header plus data)

## Multiplexing

Extending the host-to-host delivery service provided by the network layer to a **process-to-process** delivery service.

1. **multiplexing**: gathering data from different sockets, and passing the segments to the network layer
2. **demultiplexing**: delivering the data in segment to the correct socket

> [!TIP]
>
> **How does UDP identify a socket?**
>
> UDP socket is fully identified by **(destination IP, destination Port)**. if two UDP segments have different source IP or Port, but have the same destination IP and Port, they will be directed to the same process via the same socket.

![multiplexing](/network-udp-multiplexing.svg)

## Checksum

> [!TIP]
>
> **Why UDP provides a checksum?**
>
> 1. may use a link-layer protocol that does not provide error checking
> 2. bit errors could be introduced when a segment is stored in a router’s memory
