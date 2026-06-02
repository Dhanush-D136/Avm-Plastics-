import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vel Billing | POS ERP & Inventory Platform",
  description: "Ultra-fast keyboard-first POS, inventory forecasting, outstanding credit ledger statements, voice assistant billing, and WhatsApp automatic invoices.",
};

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
