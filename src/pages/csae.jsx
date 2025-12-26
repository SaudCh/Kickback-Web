export default function CSAE() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Child Safety Standards Policy
          </h1>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            KickBack is committed to protecting minors and maintaining a safe
            platform in compliance with Google Play's Child Safety Standards,
            applicable child safety laws, and regulations related to child
            sexual abuse and exploitation (CSAE).
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-red-600">
              1. Zero Tolerance for Child Sexual Abuse and Exploitation (CSAE)
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              KickBack has a zero-tolerance policy for child sexual abuse and
              exploitation (CSAE). We strictly prohibit any activity that
              facilitates, promotes, or involves the sexual exploitation or
              abuse of minors.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Any account found to be engaging in CSAE-related behavior will be
              immediately suspended or permanently removed and, where required,
              reported to the appropriate authorities, including the National
              Center for Missing and Exploited Children (NCMEC).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Prohibited Content and Behavior
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The following content and conduct are strictly prohibited on the
              KickBack platform:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              <li>
                Creation, possession, distribution, sharing, solicitation, or
                promotion of child sexual abuse material (CSAM).
              </li>
              <li>
                Grooming, sexual exploitation, or any interaction intended to
                endanger or exploit a minor.
              </li>
              <li>
                Any communication, media, or behavior that violates local,
                national, or international child protection laws.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              KickBack follows industry best practices and guidance, including
              standards established by the Tech Coalition, to prevent and
              address CSAE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. User Reporting and Moderation
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              KickBack provides a clear and accessible in-app reporting
              mechanism that allows users to report content or behavior they
              believe violates this policy, including suspected CSAE or CSAM.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Reporting tools are available within user profiles, messages,
                and other interactive areas of the app.
              </li>
              <li>
                Reports are reviewed promptly by trained moderation and support
                personnel.
              </li>
              <li>
                Appropriate enforcement actions may include content removal,
                account suspension or termination, and escalation to relevant
                authorities as required by law.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Detection, Removal, and Reporting of CSAM
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              When KickBack becomes aware of potential CSAM through user reports
              or internal review:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
              <li>The content is immediately removed from the platform.</li>
              <li>The associated account is blocked or permanently banned.</li>
              <li>
                Reports are submitted to NCMEC and/or relevant law enforcement
                authorities in compliance with applicable legal requirements.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              KickBack complies with all mandatory reporting obligations related
              to child sexual abuse material.
            </p>
          </section>

          <section className="mb-10 bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Child Safety Point of Contact
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              KickBack maintains a designated Child Safety Point of Contact
              responsible for overseeing compliance with child safety
              requirements and handling CSAE-related concerns.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">
                Contact Information:
              </p>
              <p className="text-slate-700 flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a
                  href="mailto:kickback.guys@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  kickback.guys@gmail.com
                </a>
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">Phone:</span> 845-300-4337
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Enforcement and Policy Updates
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Failure to comply with this policy may result in account
              suspension, permanent removal, or referral to law enforcement
              authorities. KickBack reserves the right to update this policy as
              necessary to remain compliant with Google Play policies, evolving
              safety standards, and applicable laws.
            </p>
          </section>

          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Immediate Risk Situations
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              If you believe a child is in immediate danger, contact local law
              enforcement immediately. Users should also report any content or
              behavior that violates this policy using the in-app reporting
              tools or by contacting kickback.guys@gmail.com.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>KickBack is intended for adults only.</li>
              <li>
                The app includes reporting tools, moderation, enforcement, and
                escalation procedures aligned with Google Play's Child Safety
                Standards.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
