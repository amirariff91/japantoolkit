"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackToolUsed(toolName: string) {
  trackEvent("tool_used", { tool_name: toolName });
}

export function trackAffiliateCTA(product: string, location: string) {
  trackEvent("affiliate_cta_click", { product, location });
}
