export default {
  name: "Davinderjit Kaur",
  role: "Software Developer",
  location: "Alberta, Canada",
  summary: "Full‑stack engineer with a focus on Vue.js frontends and data‑driven backends (CouchDB/Azure). I ship accessible healthtech, mentor teams, and document systems for long‑term maintainability.",
  email: "davinderjit01@gmail.com",
  // phone: "510-366-9102",
  website: "https://github.com/davinderjit01",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davinderjit-kaur-055b7b100/" },
    { label: "GitHub", url: "https://github.com/davinderjit01" }
  ],
  skills: [
    "Vue 3", "JavaScript", "TypeScript", "HTML5", "CSS3",
    "Node.js", "Express.js",
    "Python", "Dart", "Java", "C++", "C",
    "Flutter", "ReactJS",
    "MATLAB", "TensorFlow", "PyTorch", "Unity",
    "CouchDB", "NoSQL",
    "Azure",
    "Git/GitHub", "GitLab", "SonarCloud",
    "Adobe XD", "Photoshop", "diagrams.net"
  ],
  experience: [
    {
      company: "Become Health | The Chokka Center",
      title: "Software Developer",
      period: "Oct 2023 – Present",
      bullets: [
        "Contributed to the end-to-end development of a mental-health assessment platform (Vue.js + CouchDB).",
        "Built role-based access for Super Admins, Clinic Owners, Restricted Admins; designed secure partner APIs (e.g., TELUS).",
        "Owned delivery planning and cross-functional alignment; enforced code quality via reviews and standards.",
        "Implemented CI/CD and managed Azure infrastructure for production releases.",
        "Enhanced accessibility & clinician/patient workflows; authored API references, onboarding guides, and architecture diagrams.",
        "Maintained SSL certificates, issued new certificates, and managed wildcard SSL certificates for production environments.",
        "Data & ML: cleaned/structured assessment data; experimented with SDV (TVAE/CTGAN) for privacy-preserving synthetic data; evaluated distributions/utility; integrated synthetic cohorts into predictive pipelines."
      ]
    },
    {
      company: "Become Health | The Chokka Center",
      title: "Research Assistant",
      period: "Jun 2022 – Oct 2023",
      bullets: [
        "Implemented early UI with question logic & real‑time scoring in Vue; localized app and improved accessibility.",
        "Modeled CouchDB documents; optimized data fetching patterns for responsive forms.",
        "Integrated/consumed REST APIs for data visualization and submission flows; collaborated with clinicians to align scoring logic."
      ]
    },
    {
      company: "AMMI Lab, University of Alberta",
      title: "Research Assistant",
      period: "May 2021 – Mar 2022",
      bullets: [
        "Redesigned MedROAD frontend for usability/accessibility; prototyped flows in Adobe XD.",
        "Developed Flutter UI components; integrated REST APIs for assessments, appointments, and vitals."
      ]
    },
    {
      company: "AMMI Lab, University of Alberta",
      title: "Software Engineering Intern",
      period: "May 2020 – Mar 2021",
      bullets: [
        "Conducted unit/integration testing; created onboarding docs and architectural notes.",
        "Enhanced React+TS validation logic; fixed bugs and refined features in an agile team."
      ]
    }
  ],
  education: [
    { school: "University of Alberta", degree: "M.Sc. Computer Science (Multimedia)", period: "2019 – 2021" },
    { school: "Guru Nanak Dev Engineering College (PTU)", degree: "B.Tech. Electronics & Communication", period: "2013 – 2017" }
  ],
  projects: [
    {
      name: "MedROAD — Virtual e‑Health Platform",
      description: "End‑to‑end virtual clinic with web/Android apps, REST APIs, and WebRTC consults.",
      tags: ["Flutter","Web","WebRTC","FHIR","REST"],
      details: [
        "Designed clinician/patient flows; prototyped in Adobe XD.",
        "Integrated Bluetooth devices (thermometer, glucometer) and emitted FHIR Observation objects.",
        "Implemented real‑time alerts; used SonarQube for code quality."
      ]
    },
    {
      name: "World Religions by Region",
      description: "Interactive web app for exploring demographic data with dynamic plots.",
      tags: ["HTML/CSS","JavaScript","Data Viz"],
      details: [
        "Local JSON + XHR for fast, offline‑friendly access.",
        "Drill‑downs by region/nation/subdivision; comparative visualizations."
      ]
    },
    {
      name: "Ice Hockey in Proxy Haptic VR",
      description: "Unity‑based VR simulation with HTC sensors and realistic puck physics.",
      tags: ["Unity","VR","Physics"],
      details: [
        "Real hockey‑stick interaction with tracked motion sensors.",
        "Custom physics tuning for stick‑puck contact and glide."
      ]
    },
    {
      name: "Optimization of Video Encoding in Cloud Gaming",
      description: "Unity + WebRTC streaming study; analyzed motion blur impacts.",
      tags: ["Unity","WebRTC","Analytics"],
      details: [
        "Built Nature Simulation and streamed locally with WebRTC.",
        "Measured latency and data consumption with/without motion blur."
      ]
    },
    {
      name: "Fatigue Detection",
      description: "OpenPose features + Linear SVM to monitor driver fatigue (PoC).",
      tags: ["Python","OpenPose","SVM"],
      details: [
        "Skeletal and facial features (eye closure, joint velocities).",
        "Trained on ~1k images; achieved ~60% accuracy as PoC."
      ]
    },
    {
      name: "Store Traffic Demographic Analysis",
      description: "CV pipeline for foot‑traffic counting and gender estimation.",
      tags: ["OpenCV","Python","Gait"],
      details: [
        "Background subtraction via frame differencing; motion segmentation.",
        "Gait‑based classifier; ~72% accuracy under low‑contrast conditions."
      ]
    },
    {
      name: "Password‑Based Door Lock System",
      description: "8051 microcontroller + 4x3 keypad with LCD status display.",
      tags: ["Embedded","C++","Keil","Proteus"],
      details: [
        "Secure access logic with pre‑stored password and motor control.",
        "Schematic in Proteus; firmware in C/C++ (Keil)."
      ]
    },
    {
      name: "Emergency Alert System (Automotive)",
      description: "Arduino‑based tilt/crash detection with GSM/GPS alerts.",
      tags: ["Arduino","C/C++","Sensors"],
      details: [
        "Detects abnormal tilt (>40°) or crash and notifies pre‑stored contacts.",
        "Led department team for SAE SUPRA 2016; won Best Girl Participant."
      ]
    }
  ],
  awards: [
    "Best Girl Participant — SAE SUPRA 2016 (Electronics team lead)",
    "Creative Head — ISTE, GNE (2013–2015)",
    "Department Representative — Training & Placement Cell, GNE (2016)"
  ]
}
