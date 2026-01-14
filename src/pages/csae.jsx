export default function CSAE() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Child Safety Standards & CSAE Policy
          </h1>
          <div className="mb-6 text-slate-700">
            <p className="mb-1">
              <span className="font-semibold">App Name:</span> KickBack - Find
              Guy Friends
            </p>
            <p className="mb-1">
              <span className="font-semibold">Developer Name:</span> KVB
              Technology LLC
            </p>
            <p className="mb-1">
              <span className="font-semibold">Platform:</span> Google Play
            </p>
            <p className="mb-1">
              <span className="font-semibold">Last Updated:</span> 13 January
              2026
            </p>
          </div>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            KickBack is committed to protecting minors and maintaining a safe
            platform in compliance with Google Play’s Child Safety Standards,
            applicable child safety laws, and regulations related to Child
            Sexual Abuse and Exploitation (CSAE).
          </p>

          {/* 1. Zero Tolerance for CSAE */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              1. Zero Tolerance for Child Sexual Abuse and Exploitation (CSAE)
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              KickBack has a zero-tolerance policy for child sexual abuse and
              exploitation (CSAE).
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              <li>Child sexual abuse material (CSAM)</li>
              <li>Sexual content involving minors</li>
              <li>Grooming or exploitation of minors</li>
              <li>Any activity that facilitates harm to children</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Any account found engaging in CSAE-related behavior will be
              immediately suspended or permanently removed and, where legally
              required, reported to appropriate authorities, including the
              National Center for Missing and Exploited Children (NCMEC).
            </p>
          </section>

          {/* 2. Prohibited Content and Behavior */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Prohibited Content and Behavior
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The following content and behavior are strictly prohibited on the
              KickBack app:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              <li>
                Creation, possession, sharing, solicitation, or promotion of
                CSAM
              </li>
              <li>
                Grooming, sexual exploitation, or predatory behavior toward
                minors
              </li>
              <li>
                Any communication or media that violates child protection laws
              </li>
              <li>
                Attempts to use the platform to endanger or exploit minors
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              KickBack follows industry best practices, including guidance from
              the Tech Coalition, to prevent and address CSAE.
            </p>
          </section>

          {/* 3. User Reporting and Moderation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. User Reporting and Moderation
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              KickBack provides accessible in-app reporting tools that allow
              users to report content or behavior that may violate this policy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Reporting options are available within user profiles, messages,
                and interactive areas
              </li>
              <li>
                Reports are reviewed promptly by trained moderation personnel
              </li>
              <li>
                Enforcement actions include content removal, account suspension
                or termination, and escalation to authorities when required
              </li>
            </ul>
          </section>

          {/* 4. Detection, Removal, and Reporting of CSAM */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Detection, Removal, and Reporting of CSAM
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When KickBack becomes aware of potential CSAM:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              <li>The content is immediately removed</li>
              <li>The associated account is blocked or permanently banned</li>
              <li>
                Reports are submitted to NCMEC and/or law enforcement as
                required by law
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              KickBack complies with all mandatory CSAE reporting obligations.
            </p>
          </section>

          {/* 5. Child Safety Point of Contact */}
          <section className="mb-10 bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Child Safety Point of Contact
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              KickBack maintains a designated point of contact for child safety
              and CSAE-related concerns.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">
                Email:{" "}
                <a
                  href="mailto:kickback.guys@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  kickback.guys@gmail.com
                </a>
              </p>
              <p className="font-semibold text-slate-900">
                Phone: 845-300-4337
              </p>
            </div>
          </section>

          {/* 6. Enforcement and Policy Updates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Enforcement and Policy Updates
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Violations of this policy may result in account suspension,
              permanent removal, or referral to law enforcement authorities.
              <br />
              KickBack reserves the right to update this policy to remain
              compliant with Google Play policies, evolving safety standards,
              and applicable laws.
            </p>
          </section>

          {/* 7. Immediate Risk Situations */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Immediate Risk Situations
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              If a child is in immediate danger, contact local law enforcement
              immediately.
              <br />
              Users should report CSAE-related concerns using in-app reporting
              tools or by emailing{" "}
              <a
                href="mailto:kickback.guys@gmail.com"
                className="text-blue-600 hover:underline"
              >
                kickback.guys@gmail.com
              </a>
              .
            </p>
          </section>

          {/* 8. Intended Audience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Intended Audience
            </h2>
            <p className="text-slate-700 leading-relaxed">
              KickBack is intended for adults only.
              <br />
              The app includes moderation, reporting, enforcement, and
              escalation procedures aligned with Google Play’s Child Safety
              Standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
