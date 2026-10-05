export type LegalSection = { title: string; paragraphs: string[] };

// Consolidates existing website and app disclosures, with age, operator status
// and retention commitments confirmed by the owner on October 5, 2026.
export const privacySections: LegalSection[] = [
  {
    "title": "Scope and contact",
    "paragraphs": [
      "This Privacy Policy explains how Ampleat (also branded ampleat, formerly Nouria) handles personal information when you visit our website, apply for beta access, contact us, or use our kitchen-assistant app. Ampleat is an unincorporated project operated by Nimai Garg. References to Ampleat describe the service and Nimai Garg as its operator, not an incorporated company. For privacy questions or requests, email hello@ampleat.com."
    ]
  },
  {
    "title": "Information you provide",
    "paragraphs": [
      "Account and identity information includes your name, username or account identifier, email address, authentication details, and telephone number if you provide one. We receive the account details shared when you sign in through Google or Apple using Firebase Authentication.",
      "Kitchen and dietary information includes household size and servings, pantry inventory, quantities, storage locations and expiry information, cooking equipment, available time, cooking skill, cuisines, dislikes, allergies, religious restrictions and other exclusions. Allergy and religious information can reveal sensitive personal information; only provide information needed for the features you choose.",
      "We also process saved recipes, generated recommendations, meal history, cooking activity, actual ingredient usage, ratings, rejections, feedback, consent choices, beta applications and support submissions. Receipt and food photographs are processed when you choose scanning features. Avoid including unrelated personal information in photos or support messages."
    ]
  },
  {
    "title": "Technical information and sources",
    "paragraphs": [
      "Technical information can include IP address, browser type and version, time zone, device platform, app version, authentication and security events, and error information. Sources include you, your use of the website and app, sign-in providers, and service providers operating these features."
    ]
  },
  {
    "title": "Information collected automatically",
    "paragraphs": [
      "With analytics consent, Ampleat records limited product events such as onboarding completion, pantry actions, recommendation timing, cooking starts and completions, error codes, app version, and platform. Analytics never includes raw allergy details, private comments, secrets, or full recipe text."
    ]
  },
  {
    "title": "How information is used",
    "paragraphs": [
      "To authenticate approved testers, keep inventory accurate, validate recipes against restrictions, generate recommendations, provide support, prevent abuse, maintain security, and improve reliability when consent permits.",
      "We also manage beta applications and our relationship with you, including service communications, beta updates and support. Required service communications are distinct from optional marketing consent."
    ]
  },
  {
    "title": "AI processing",
    "paragraphs": [
      "Pantry and preference fields needed for recommendations are sent from Ampleat’s protected server to its AI service. When you photograph a receipt or use AmpleatVision, that photo is also sent to the AI service to extract food details. Ampleat does not save these photos in pantry records. Direct account identifiers are omitted. Meal output is validated; scanned food suggestions are reviewed and edited by you before saving."
    ]
  },
  {
    "title": "Sharing",
    "paragraphs": [
      "Service providers process data only to operate Ampleat, including cloud hosting, authentication, error monitoring, and AI generation. Research or growth use requires separate opt-in consent. Ampleat does not sell personal information."
    ]
  },
  {
    "title": "Retention",
    "paragraphs": [
      "Account and kitchen data is retained while your account is active. Deleted account data is removed from live systems promptly; encrypted backups may persist for up to 90 days. Support and security audit records may be retained for up to 24 months. Consent-based analytics is retained for up to 14 months."
    ]
  },
  {
    "title": "Your controls",
    "paragraphs": [
      "You can correct preferences and pantry data, disable optional analytics or research sharing, export account data, withdraw consent, and delete your account from Settings. Withdrawing consent does not affect processing already completed."
    ]
  },
  {
    "title": "Security",
    "paragraphs": [
      "Ampleat uses verified authentication, approved-tester claims, per-account authorization, App Check, server-side validation, rate limits, audit logs, and encrypted service connections. We use measures intended to protect against accidental loss, unauthorized access or use, alteration and disclosure. Access is limited to people and operational partners who need it. No security system can guarantee absolute protection."
    ]
  },
  {
    "title": "Cookies, browser storage and embedded forms",
    "paragraphs": [
      "Cookies are small files stored on your device. Cookies and similar browser storage can support account creation, administration, sign-in and remembering your session. Signing out ends your authenticated session; it does not necessarily remove all browser storage. The website’s existing Cookie Policy describes account and login cookies.",
      "You can manage cookies and browser storage through your browser settings. Blocking or clearing them can affect sign-in and other features. Optional product analytics is subject to the consent controls described above.",
      "The beta application page embeds a Tally form. Information you submit through that form is processed to manage applications; Tally also processes information under its own privacy notice. External social media and other linked services have their own policies. Review those policies before sharing information."
    ]
  },
  {
    "title": "Sensitive information and optional choices",
    "paragraphs": [
      "Allergies, religious restrictions and explicit exclusions are used as hard constraints for recipe validation. Cuisines, softer preferences, dislikes, rejections, ratings and cooking feedback support personalization. These safety checks do not establish that a food is safe to eat.",
      "Optional analytics and research sharing are separate choices. When enabled, de-identified usage patterns may support product research and understanding tester needs. Disabling either option stops future optional collection without disabling pantry, meal or cooking features. Marketing or research use requires separate consent. De-identification does not mean every operational record is anonymous."
    ]
  },
  {
    "title": "Service providers and disclosures",
    "paragraphs": [
      "Firebase/Google provides authentication and cloud data services; Google and Apple supply the sign-in methods you select. OpenAI processes the information needed for AI recipe generation and food-photo extraction. Tally supports beta applications. Cloud hosting, error monitoring and other operational providers may process information needed to run their services. Direct account identifiers are omitted from AI requests, but kitchen, dietary and photo content can still contain personal or sensitive information.",
      "We do not sell personal information. Access is limited to personnel and partners with an operational need. We may disclose information when required by applicable law or a valid legal request, or when necessary to address fraud, security threats or protect legal rights, subject to applicable legal restrictions."
    ]
  },
  {
    "title": "Privacy rights and requests",
    "paragraphs": [
      "Use Settings to correct information, export account data, change optional consent and delete your account, or email hello@ampleat.com for help. Deleting the app alone does not delete your account. We may need to verify your identity before releasing or deleting account data. Do not send passwords or sensitive identity documents in an initial request.",
      "Depending on the laws that apply to you and Ampleat, you may have rights to know or access information, obtain a portable copy, correct inaccuracies, request deletion, object to or restrict processing, withdraw consent, limit certain sensitive-information uses, and opt out of legally defined sale, sharing or targeted advertising. Where applicable, authorized agents may act on your behalf and you may appeal a decision or complain to your data-protection authority. We will handle requests within applicable legal deadlines and explain applicable exceptions. Exercising a privacy right will not result in unlawful discrimination."
    ]
  },
  {
    "title": "International processing",
    "paragraphs": [
      "Ampleat’s service providers may process information in countries other than your country of residence. Those countries can have different privacy laws. Contact hello@ampleat.com for information about the processing locations and safeguards applicable to your information."
    ]
  },
  {
    "title": "Children and household information",
    "paragraphs": [
      "Ampleat account holders must be at least 13. We do not knowingly collect personal information directly from children under 13. Users below the age of legal majority require parent or guardian authorization, and additional parental consent may be required by their local data-protection laws. Where these requirements cannot be met, the service must not be used.",
      "If you believe an under-13 child has provided information, or a minor has used the service without legally required authorization, email hello@ampleat.com so we can investigate and delete or otherwise address that information as required. Household dietary information may relate to other people, including children; an authorized adult should supply only the information necessary for household meal planning."
    ]
  },
  {
    "title": "Policy changes",
    "paragraphs": [
      "We may update this policy as the service or information practices change. We will update the date on this page and provide any notice or renewed consent required by applicable law. New optional uses remain subject to the applicable consent choices."
    ]
  },
  {
    "title": "Contact",
    "paragraphs": [
      "For privacy questions, access or deletion requests, or assistance with your controls, email hello@ampleat.com or write to the operator at the mailing address below.",
      "Nimai Garg, operator of Ampleat. Mailing address: 11238 Bubb Road, Cupertino, CA 95014, United States. Email: hello@ampleat.com."
    ]
  }
];

export const termsSections: LegalSection[] = [
  {
    "title": "Scope and acceptance",
    "paragraphs": [
      "These Terms of Service govern the Ampleat website and the Ampleat Version 1.0 private beta kitchen-assistant app. Ampleat is also branded ampleat and was formerly named Nouria. Ampleat is an unincorporated project operated by Nimai Garg. These terms are between you and Nimai Garg as the operator of Ampleat, not an incorporated company.",
      "By accessing or using the service, you agree to these terms and applicable laws and are responsible for compliance with laws that apply to your use. If you do not agree, do not use the service. Contact hello@ampleat.com with questions."
    ]
  },
  {
    "title": "Eligibility and beta access",
    "paragraphs": [
      "You must be at least 13 years old, have an approved invitation and verified email, and meet the age and consent requirements that apply where you live. If you are below the age of legal majority, your parent or legal guardian must review these terms and authorize your use. Where law requires parental authorization for personal-data processing at a higher age, that authorization is also required. Do not use the service if those requirements cannot be met.",
      "Beta access is available internationally only where using and providing the service is lawful, subject to applicable sanctions, export restrictions, local laws and platform availability. The service currently provides English-language support only. An invitation does not override legal restrictions. Invitations are personal and may be revoked for misuse, security risk or the end of a testing cohort."
    ]
  },
  {
    "title": "Account responsibility",
    "paragraphs": [
      "Keep credentials secure, provide accurate restrictions and pantry information, and notify Ampleat of suspected unauthorized use. You are responsible for activity on your account."
    ]
  },
  {
    "title": "Free beta and future offers",
    "paragraphs": [
      "Version 1.0 private-beta access is free. No credit card is required to join, and beta access does not create a purchase, automatic trial renewal, subscription or paid commitment. As stated on the website, early testers will receive a significant lifetime discount when Ampleat launches publicly. The discount amount and redemption details have not yet been published. Contact hello@ampleat.com with questions about this offer.",
      "Any future paid service will require separate disclosure of its pricing, billing, renewal, cancellation and refund terms before you make a paid commitment."
    ]
  },
  {
    "title": "Food and allergy limitations",
    "paragraphs": [
      "Ampleat is a planning aid, not a medical professional, dietitian, allergen laboratory, or substitute for product labels. Ingredient databases and AI outputs can be incomplete. Always verify labels, cross-contamination warnings, preparation temperatures, and suitability for every person eating."
    ]
  },
  {
    "title": "Safe use",
    "paragraphs": [
      "Use appropriate food-handling practices, follow appliance instructions, cook foods to safe internal temperatures, and stop if a recommendation appears unsafe or conflicts with a restriction."
    ]
  },
  {
    "title": "Acceptable use",
    "paragraphs": [
      "Do not bypass invitation controls, probe other accounts, manipulate requests, automate excessive AI calls, inject instructions into pantry fields, reverse engineer protected services, or use Ampleat unlawfully."
    ]
  },
  {
    "title": "Allergies and cross-contact",
    "paragraphs": [
      "Enter allergies as hard restrictions, review every generated ingredient and substitution, and inspect manufacturer labels. Ampleat cannot detect cross-contact in a kitchen, restaurant, factory, or shared appliance."
    ]
  },
  {
    "title": "Food temperatures",
    "paragraphs": [
      "Use a reliable food thermometer and follow current local food-safety guidance for meat, seafood, eggs, leftovers, and reheating. Visual appearance alone is not a reliable test."
    ]
  },
  {
    "title": "Expiry information",
    "paragraphs": [
      "Exact, estimated, and unknown dates are shown differently. A date is not a guarantee of safety. Discard food with spoilage, damaged packaging, unsafe storage, or uncertain history."
    ]
  },
  {
    "title": "Equipment",
    "paragraphs": [
      "Use equipment only as instructed by its manufacturer. Never leave active heat unattended, and keep knives, steam, hot oil, and electrical appliances away from children and hazards."
    ]
  },
  {
    "title": "AI recommendations, scans and accuracy",
    "paragraphs": [
      "Generated recipes, ingredient identifications, quantities, expiry estimates, grocery lists and substitutions can be inaccurate, incomplete or outdated. Review food suggestions and edits before saving them, and confirm actual ingredient usage before updating inventory. Recipe validation reduces risk but cannot guarantee allergen-free food, correct recognition, safe handling or suitability for every household member.",
      "Website information and materials can contain technical, typographical or photographic errors. Ampleat does not guarantee that they are accurate, complete or current. Materials and features may be changed; legally required notices and existing consumer rights remain unaffected. Marketing descriptions do not replace product labels, independent safety checks or qualified medical advice."
    ]
  },
  {
    "title": "Beta availability",
    "paragraphs": [
      "Features may change, be limited, or be disabled to protect safety, reliability, or cost. Ampleat may preserve exact meal and inventory records for auditability even when later recommendations change."
    ]
  },
  {
    "title": "Intellectual property",
    "paragraphs": [
      "Ampleat’s software, brand, and service design belong to Ampleat and its licensors. You retain rights in recipes and feedback you submit and grant Ampleat permission to process them to provide the service."
    ]
  },
  {
    "title": "Website materials and permitted use",
    "paragraphs": [
      "Ampleat grants a limited, personal, non-commercial license to access the website and temporarily download one copy of its materials for personal, non-commercial transitory viewing. This is a license, not a transfer of title. Subject to permissions expressly provided by the service and rights that cannot be restricted by law, do not modify or copy proprietary website materials, use them for a commercial purpose or public display, remove copyright or proprietary notices, or decompile or reverse engineer protected software. This restriction does not prevent you from using your own content, exporting your account data or using recipe features as intended."
    ]
  },
  {
    "title": "Third-party services and links",
    "paragraphs": [
      "Google and Apple sign-in, Firebase services, AI processing, Tally application forms and external social-media or other links involve third-party services. Their own terms and privacy policies may apply. Ampleat does not control the content, accuracy, availability or practices of independent third-party websites."
    ]
  },
  {
    "title": "Disclaimers",
    "paragraphs": [
      "To the maximum extent permitted by applicable law, website materials and the private beta are provided “as is” and “as available,” without express or implied warranties, including merchantability, fitness for a particular purpose, accuracy or non-infringement. Features may be interrupted or unavailable. No term excludes a warranty or consumer protection that applicable law does not allow to be excluded."
    ]
  },
  {
    "title": "Limitations of liability",
    "paragraphs": [
      "To the maximum extent permitted by applicable law, Ampleat and its suppliers are not liable for indirect, incidental or consequential damages, including loss of data, profits or business interruption arising from using or being unable to use the service or website materials, even if advised of the possibility. This does not limit liability or remedies that cannot lawfully be limited, including any applicable protections for fraud, intentional misconduct, negligence, injury or statutory consumer rights."
    ]
  },
  {
    "title": "Termination",
    "paragraphs": [
      "You may delete your account at any time. Ampleat may suspend access for a revoked invitation, abuse, security risk, or material breach. Terms that logically survive termination remain in effect."
    ]
  },
  {
    "title": "Changes and legal rights",
    "paragraphs": [
      "We may update these terms as the service changes. The date on this page identifies the latest update. We will provide any notice or acceptance process required by applicable law. Changes do not remove rights already protected by law. If part of these terms is unenforceable, the remaining terms continue to apply to the extent permitted by law. Nothing in these terms requires arbitration, waives a class action, selects a particular court or removes mandatory consumer rights."
    ]
  },
  {
    "title": "Report a concern or contact us",
    "paragraphs": [
      "Do not cook or eat a recommendation you believe is unsafe. Reject it as unsuitable and report it through the in-app support form with the recipe title, exact version and issue, or email hello@ampleat.com. The same email address handles terms, account, beta-offer and service questions. You may also write to the operator at the mailing address below.",
      "Nimai Garg, operator of Ampleat. Mailing address: 11238 Bubb Road, Cupertino, CA 95014, United States. Email: hello@ampleat.com."
    ]
  }
];
