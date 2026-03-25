"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCaptureFormProps {
  source: string;
  className?: string;
}

export function EmailCaptureForm({ source, className }: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800 ${className ?? ""}`}>
        ✓ Check your inbox — the checklist is on its way.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="h-12 flex-1 rounded-full border border-stone-300 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-60"
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="bg-stone-900 text-stone-50 hover:bg-stone-800 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Get the PDF"}
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-rose-600">{errorMsg}</p>
      )}
    </form>
  );
}
