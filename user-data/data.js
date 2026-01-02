const data ={
  "bio": [
    "Hi, I'm Mohammadamin(Amin) Shafiei, a systems and network software engineer with a strong focus on Linux kernel development, high-performance networking, and low-latency systems.",
    "I specialize in eBPF, TCP and kernel networking optimizations, concurrent systems, and performance-critical infrastructure, with experience at Fortinet and in academic research. I enjoy working close to the hardware, solving deep systems problems, and building efficient, scalable software where performance and correctness really matter."
  ],
  "skills": [
    "C/C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "Node.js",
    "Swift",
    "Linux",
    "Git",
    "Docker",
    "CMake",
    "Multithreading",
    "Encryption",
    "Bash",
    "OpenMP",
    "eBPF",
    "CI/CD",
    "Agile Development",
    "Kubernetes",
    "OpenCV",
    "Pandas",
    "Keras",
    "TensorFlow",
    "Wireshark",
    "tcpdump",
    "OpenSSL",
    "CUDA",
    "SIMD",
    "Flask",
    "Express.js",
    "React",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Memcached"
  ],
  "experience": [
    {
      "title": "Fortinet",
      "duration": "2025 - Present",
      "subtitle": "Intermediate Software Engineer",
      "details": [
        "Optimized Certificate Inspection traffic by implementing an eBPF sockmap (SK_SKB hook) redirection that bypasses the userspace proxy after TLS handshake completion, enabling direct kernel-level TCP socket splicing and projecting a 25% improvement in latency and performance.",
        "Engineered an eBPF-driven connection dispatching strategy using SO_REUSEPORT hook, replacing default kernel distribution with a custom load-balancing logic; reduced tail latency by 10% for high-concurrency, short-lived TCP sessions.",
        "Built a high-throughput Control Plane service for TLS Deep Inspection, leveraging Unix Domain Sockets (IPC) and a caching layer to handle dynamic server certificate swaps, ensuring low-latency replacement during active sessions in the FortiOS deep inspection workflow."
      ],
      "tags": ["eBPF", "Certificate", "Https", "TLS", "C", "Async Tasks", "Network Security", "OpenSSL"],
      "icon": "money"
    },
    {
      "title": "University of Waterloo",
      "duration": "2023 - 2025",
      "subtitle": "Research Assistant",
      "details": [
        "Working as Graduate Research Assistant under the supervision of Prof. Martin Karsten, in the Systems and Network.",
        "Collaborated on the development and testing of a new IRQ suspension mechanism for the Linux kernel, achieving a 30% performance gain by optimizing CPU usage and network efficiency during varying traffic loads.",
        "Contributed to the interrupt subsystem by developing and testing an IRQ suspension mechanism to optimize network stack (TCP) latency as part of my research thesis."
      ],
      "tags": [
        "Linux",
        "Epoll",
        "Interrupts",
        "SoftIRQ",
        "C",
        "Async IO"
      ],
      "icon": "truck"
    },
    {
      "title": "Synamedia",
      "duration": "2024 - 2024",
      "subtitle": "Software Engineer (Intern)",
      "details": [
        "Developed a high-performance C++ VVC decoder, achieving a 4x speedup via multi-threaded slice-level parallelism; optimized cache locality and memory access patterns to double performance on NUMA architectures.",
        "DevelopedaTPM2.0driverinCfortheIKGTbare-metalhypervisor,implementingtheTPMInterfaceSpecification(TIS)toenable hardware-backed cryptographic operations, including HMAC session handling, policy-based authentication, and state-based data encryption."
      ],
      "tags": [
        "IKGT Hypervisor",
        "TPM",
        "OpenSSL",
        "Video Encoding",
        "H266 (VCC)",
        "Multi-threaded Programming"
      ],
      "icon": "heartbeat"
    },
    {
      "title": "Rahbin Sanat Nasir",
      "duration": "2021 - 2022",
      "subtitle": "Software Engineer",
      "details": [
        "Developed a highly efficient pipelined Android app in Native JAVA for real-time streaming camera frames using RTP.",
        "Developed a multithreaded C++ App with the Qt framework to process and filter frames from the Android app over a local network.",
        "Enhanced the filtering process by 25% using the SIMD library, outperforming single-threaded code."
      ],
      "tags": [
        "SIMD",
        "Multi-threading programming",
        "QT",
        "CPP",
        "Realtime streaming"
      ],
      "icon": "qrcode"
    },
    {
      "title": "K. N. Toosi university of Technology",
      "duration": "2020 - 2021",
      "subtitle": "Software Engineer",
      "details": [
        "Developed an IOS app for an indoor navigation system using ARKit Framework in Swift.",
        "Boosted node positioning speed by 3x using background threading, reducing latency and improving rendering efficiency.",
        "Achieved a 5x improvement in overall system performance by leveraging priority job dispatch queues."
      ],
      "tags": [
        "Multi-threading programming",
        "IOS",
        "Realtime streaming",
        "Async Task",
        "Swift"
      ],
      "icon": "qrcode"
    }
  ],
  "education": [
    {
      "title": "Full time Master Student in Computer Science (Systems & Network)",
      "duration": "2023 - 2025",
      "subtitle": "University of Waterloo ",
      "details": [
        "GPA 91/100",
        "International Master's Award of Excellence Scholarship"
      ],
      "tags": [],
      "icon": "graduation-cap"
    },
    {
      "title": " Bachelor of Science in Computer Engineering",
      "duration": "2018 - 2022",
      "subtitle": "K. N. Toosi University of Technology",
      "details": [
        "GPA 18.86/20",
        "Ranked 3rd in class of 82",
        "Dean's list"
      ],
      "tags": [],
      "icon": "graduation-cap"
    }
  ],
  "blogs": [
    {
      "link": "./pages/blogs/sk-skb.html",
      "title": "Turning your proxy into a more efficient and performant one!",
      "content": "lorem",
      "categories": ["eBPF", "Network Security", "Network Performance", "Packet Processing"],
      "pubDate": "2025-12-30 18:30"
    }
  ],
  "contactLinks": [
    {
      "label": "Email",
      "link": "mailto:shafiee.mohamin@gmail.com",
      "icon": "fa fa-envelope"
    },
    {
      "label": "LinkedIn",
      "link": "https://www.linkedin.com/in/aminshafiei/",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "GitHub",
      "link": "https://github.com/shamohamin",
      "icon": "fa-brands fa-github"
    },
  ],
  "footer": [
    {
      "label": "Links",
      "data": [
        {
          "text": "Github",
          "link": "https://github.com/shamohamin/aminshafiei"
        }
      ]
    },
    // {
      // "label": "Pages",
      // "data": [
      //   {
      //     // "text": "Trekking & Himalayan Pass Adventures",
      //     // "link": "./pages/adventure.html"
      //   },
      // ]
    // },
    {
      "label": "copyright-text",
      "data": [
        "Built with HTML, CSS, JavaScript, and ❤️"
      ]
    }
  ]
}

export const bio = data.bio;

export const skills = data.skills;

export const experience = data.experience

export const education = data.education

export const contactLinks = data.contactLinks

export const footer = data.footer;

export const blogCards = data.blogs;
