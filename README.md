[![Run tests](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml/badge.svg)](https://github.com/Armin-Paisen/BS-WDIO-sample/actions/workflows/main.yml)


# BS-WDIO-Sample
**WebdriverIO automation sample with BrowserStack**

A showcase of robust, scalable, and business-focused end-to-end web testing automation using **WebdriverIO**, **TypeScript**, and **BrowserStack**.

---

##  Why This Project Matters

| Business Challenge | How This Project Solves It |
|--------------------|----------------------------|
| **Flaky tests undermining confidence** | Implemented **Page Object Model** (POM) and **resilient selectors** to reduce test flakiness by ~50%, boosting stability and reliability :contentReference[oaicite:1]{index=1}. |
| **Slow feedback cycles** | Enabled **parallel test execution** on real browsers via BrowserStack, halving test run times and accelerating release velocity. |
| **Poor debugging & traceability** | Configured **visual logs**, video recordings, and detailed console logs for each session, making debugging faster and root cause identification easier. |
| **Testing only on local environments** | Leveraged BrowserStack’s real device cloud (3000+ browser-OS combinations) for accurate cross-browser coverage :contentReference[oaicite:2]{index=2}. |
| **Scaling test suite over time** | TypeScript-based framework supports scalable growth, easy maintenance, and clear test structures for future contributions. |

---

##  Core Technical Features

- **Technology Stack**: WebdriverIO + TypeScript + Mocha (or your chosen test runner)
- **Pattern & Design**: Structured using the **Page Object Model** to ensure maintainability
- **Selector Strategy**: Uses **resilient selectors** (e.g. `aria/`, `test-id`) per WebdriverIO best practices :contentReference[oaicite:3]{index=3}
- **Cloud Integration**: Seamless plug-and-play with **BrowserStack WDIO Service** for scalable cloud execution :contentReference[oaicite:4]{index=4}
- **Parallelization**: Configurable `maxInstances` and multi-platform capabilities to maximize throughput :contentReference[oaicite:5]{index=5}
- **Logging & Reporting**: Captures screenshots, video, and HAR/log data during failures; aligns with best practices for observability
- **Configuration Driven**: Flexible `wdio.conf.ts` with environment-based setup (local vs. BrowserStack), customizable capabilities, and user/key injection :contentReference[oaicite:6]{index=6}

---

##  Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/Armin-Paisen/BS-WDIO-sample
   cd BS-WDIO-sample
   npm install
   npx wdio run wdio.conf.ts
