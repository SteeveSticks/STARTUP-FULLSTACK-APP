# 🚀 StartupFounder

StartupFounders is a modern web platform built for aspiring founders and entrepreneurs to share insights, resources, and startup journeys.  
It combines **Next.js**, **Sanity CMS**, and **Sentry monitoring** to deliver a scalable, content-rich experience with real-time reliability tracking.

<img width="1894" height="951" alt="image" src="https://github.com/user-attachments/assets/56790941-a831-47bd-bc47-d51dfa6b7165" />

---

## ✨ Features

- 🧞 **Dynamic Content** – Powered by Sanity for easy content management
- 🧞 **Modern UI/UX** – Styled with Tailwind CSS v4
- 🧞 **Error Tracking & Performance** – Integrated with Sentry for monitoring
- ⚡ **Fast & Scalable** – Built on Next.js 15.3 + React 19
- 🔐 **Type Safety** – Full TypeScript support

---

## 🛠 Tech Stack

- [Next.js 15.3](https://nextjs.org/) – Next.js framework for production/speed
- [Sanity 3.85](https://www.sanity.io/) – Headless CMS for managing content
- [Tailwind CSS 4.1.4](https://tailwindcss.com/) – Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript
- [Sentry](https://sentry.io/) – Error & performance monitoring

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/SteeveSticks/STARTUP-FULLSTACK-APP.git
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
Create a .env.local file in the root directory and add the following variables:

```
NEXT_PUBLIC_SENTRY_DSN=https://<your-sentry-dsn>
NEXT_PUBLIC_SANITY_TOKEN=<your-sanity-token>
SANITY_API_TOKEN=your_sanity_api_token
SENTRY_AUTH_TOKEN=your_sentry_token
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

- Deployed on Vercel
- Sentry monitoring enabled for both frontend and backend

## Monitoring with Sentry

Sentry is configured to

- Track errors and crashes in real-time
- Measure performance metrics(page load time, response time, etc.)
- Provide insights into user sessions

## Authors

- [Stephen Adebanjo](https://github.com/SteeveSticks)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
