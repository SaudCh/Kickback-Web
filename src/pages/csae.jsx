import PageShell from "../components/PageShell";

export default function CSAE() {
  return (
    <PageShell title="Child Safety Standards & CSAE Policy">
      <div className="mb-8 text-gray-400 space-y-1 text-sm">
        <p>
          <span className="text-gray-500">App Name:</span> KickBack - Find Guy
          Friends
        </p>
        <p>
          <span className="text-gray-500">Developer:</span> KVB Technology LLC
        </p>
        <p>
          <span className="text-gray-500">Platform:</span> Google Play
        </p>
        <p>
          <span className="text-gray-500">Last Updated:</span> 13 January 2026
        </p>
      </div>

      <p className="mb-8">
        KickBack is committed to protecting minors and maintaining a safe
        platform in compliance with Google Play's Child Safety Standards,
        applicable child safety laws, and regulations related to Child Sexual
        Abuse and Exploitation (CSAE).
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-4">
          1. Zero Tolerance for Child Sexual Abuse and Exploitation (CSAE)
        </h2>
        <p className="mb-4">
          KickBack has a zero-tolerance policy for child sexual abuse and
          exploitation (CSAE).
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
          <li>Child sexual abuse material (CSAM)</li>
          <li>Sexual content involving minors</li>
          <li>Grooming or exploitation of minors</li>
          <li>Any activity that facilitates harm to children</li>
        </ul>
        <p>
          Any account found engaging in CSAE-related behavior will be
          immediately suspended or permanently removed and, where legally
          required, reported to appropriate authorities, including the National
          Center for Missing and Exploited Children (NCMEC).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          2. Prohibited Content and Behavior
        </h2>
        <p className="mb-4">
          The following content and behavior are strictly prohibited on the
          KickBack app:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
          <li>
            Creation, possession, sharing, solicitation, or promotion of CSAM
          </li>
          <li>
            Grooming, sexual exploitation, or predatory behavior toward minors
          </li>
          <li>
            Any communication or media that violates child protection laws
          </li>
          <li>
            Attempts to use the platform to endanger or exploit minors
          </li>
        </ul>
        <p>
          KickBack follows industry best practices, including guidance from the
          Tech Coalition, to prevent and address CSAE.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          3. User Reporting and Moderation
        </h2>
        <p className="mb-4">
          KickBack provides accessible in-app reporting tools that allow users
          to report content or behavior that may violate this policy.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>
            Reporting options are available within user profiles, messages, and
            interactive areas
          </li>
          <li>
            Reports are reviewed promptly by trained moderation personnel
          </li>
          <li>
            Enforcement actions include content removal, account suspension or
            termination, and escalation to authorities when required
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          4. Detection, Removal, and Reporting of CSAM
        </h2>
        <p className="mb-4">When KickBack becomes aware of potential CSAM:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
          <li>The content is immediately removed</li>
          <li>The associated account is blocked or permanently banned</li>
          <li>
            Reports are submitted to NCMEC and/or law enforcement as required by
            law
          </li>
        </ul>
        <p>
          KickBack complies with all mandatory CSAE reporting obligations.
        </p>
      </section>

      <section className="mb-10 bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          5. Child Safety Point of Contact
        </h2>
        <p className="mb-4">
          KickBack maintains a designated point of contact for child safety and
          CSAE-related concerns.
        </p>
        <div className="space-y-2">
          <p>
            <span className="text-gray-500">Email:</span>{" "}
            <a
              href="mailto:kickback.guys@gmail.com"
              className="text-primary hover:underline"
            >
              kickback.guys@gmail.com
            </a>
          </p>
          <p>
            <span className="text-gray-500">Phone:</span> 845-300-4337
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          6. Enforcement and Policy Updates
        </h2>
        <p>
          Violations of this policy may result in account suspension, permanent
          removal, or referral to law enforcement authorities. KickBack reserves
          the right to update this policy to remain compliant with Google Play
          policies, evolving safety standards, and applicable laws.
        </p>
      </section>

      <section className="mb-10 bg-red-500/10 border border-red-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          7. Immediate Risk Situations
        </h2>
        <p>
          If a child is in immediate danger, contact local law enforcement
          immediately. Users should report CSAE-related concerns using in-app
          reporting tools or by emailing{" "}
          <a
            href="mailto:kickback.guys@gmail.com"
            className="text-primary hover:underline"
          >
            kickback.guys@gmail.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          8. Intended Audience
        </h2>
        <p>
          KickBack is intended for adults only. The app includes moderation,
          reporting, enforcement, and escalation procedures aligned with Google
          Play's Child Safety Standards.
        </p>
      </section>
    </PageShell>
  );
}
