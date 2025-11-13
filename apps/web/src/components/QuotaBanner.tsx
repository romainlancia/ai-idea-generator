'use client';

export default function QuotaBanner({ quotaLeft }: { quotaLeft: number }) {
  return (
    <div className="mt-4 text-sm text-neutral-300">
      Crédits restants ce mois-ci: <span className="font-semibold">{quotaLeft}</span> / 5
    </div>
  );
}
