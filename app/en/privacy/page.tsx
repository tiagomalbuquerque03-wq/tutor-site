export const metadata = {
  title: "Privacy Policy — Clari",
  description: "Privacy policy for Clari, the AI tutor for students.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-slate-200">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-slate-400 mb-10">Last updated: May 2026</p>

      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">1. Who we are</h2>
          <p>
            Clari is an AI-powered tutoring platform developed by Alexandre Martins de Albuquerque
            ("we", "us"). Our app is designed for students in middle and high school between the
            ages of 13 and 18.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">2. Data we collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, email address, and password (account creation)</li>
            <li>Grade level, country, and school name (learning profile)</li>
            <li>Text messages, audio recordings, and images sent during study sessions</li>
            <li>Session history, subjects studied, and learning progress</li>
            <li>App usage data for service improvement purposes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">3. How we use your data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personalize each student's learning experience</li>
            <li>Generate AI responses based on the student's pedagogical context</li>
            <li>Allow parents to monitor their child's progress (with consent)</li>
            <li>Improve our algorithms and service quality</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">4. Data sharing</h2>
          <p>
            We do not sell your data. We share it only with infrastructure providers required to
            operate the service (servers, AI processing, and authentication), all bound by
            confidentiality agreements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">5. Minors (LGPD / COPPA)</h2>
          <p>
            Users under 18 require parental or legal guardian consent before using Clari. By
            creating an account for a minor, the responsible adult confirms they have read and
            agreed to this policy. We comply with Brazil's LGPD and applicable international
            regulations regarding the protection of minors' data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">6. Your rights</h2>
          <p>You may at any time:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Access the data we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Request complete deletion of your account and data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@clari.online" className="text-blue-400 underline">
              privacy@clari.online
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">7. Data retention</h2>
          <p>
            We retain your data for as long as your account is active. Upon account deletion, data
            is removed within 30 days, unless retention is required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">8. Security</h2>
          <p>
            We use encryption in transit (TLS) and at rest. Data access is controlled through
            authentication and row-level security (RLS) policies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">9. Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href="mailto:privacy@clari.online" className="text-blue-400 underline">
              privacy@clari.online
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
