export interface VerificationMethod {
  icon: string; // image path or emoji
  title: string;
  description?: string;
  hasBorder?: boolean;
}

export const verificationMethods: VerificationMethod[] = [
  { icon: "/sms.svg", title: "Get a verification code at •••••• ••19", description: "2-Step Verification phone\nStandard rates apply", hasBorder: true },
  { icon: "/Vector-1.svg", title: "Get a verification code at •••••• ••19", description: "2-Step Verification phone\nBy WhatsApp", hasBorder: true },
  { icon: "/@.svg", title: "Get a verification code at Email", description: "at ...@themar.net", hasBorder: true },
  { icon: "/finger.svg", title: "Two-factor authentication", description: "Use your authenticator app", hasBorder: true },
  { icon: "/facelock.svg", title: "Passkey (App security)", description: "Use biometric or device security", hasBorder: false },
];


