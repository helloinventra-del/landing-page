"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

/* ---------------------------------- icons --------------------------------- */

const TABS = [
  { id: "ai", label: "AI Suite", icon: "M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3z" },
  { id: "automation", label: "Automation", icon: "M4 6h10M4 12h7M4 18h13M17 4v4M17 14v4" },
  { id: "analytics", label: "Analytics", icon: "M4 20V10M10 20V4M16 20v-7M22 20H2" },
  { id: "security", label: "Security", icon: "M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3z" },
  { id: "integrations", label: "Integrations", icon: "M8 12a4 4 0 118 0 4 4 0 01-8 0zM2 12h6m8 0h6" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function TabIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

function Dot({ tone }: { tone: "ok" | "run" | "wait" }) {
  const map = {
    ok: "bg-emerald-400",
    run: "bg-violet",
    wait: "bg-cool/40",
  } as const;
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${map[tone]}`} />;
}

function StatusPill({ label, tone }: { label: string; tone: "ok" | "run" | "wait" }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-cool">
      <Dot tone={tone} />
      {label}
    </span>
  );
}

/* --------------------------------- panels --------------------------------- */

function AISuitePanel() {
  const insights = [
    { title: "Invoice anomaly detected", detail: "PO #4821 · 12% above baseline", tone: "run" as const },
    { title: "Churn risk flagged", detail: "Vertex Systems · usage down 18%", tone: "wait" as const },
    { title: "Report compiled", detail: "Q4 revenue forecast · ready", tone: "ok" as const },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-5">
      <div className="rounded-xl border border-violet/30 bg-violet/10 p-4 md:col-span-2">
        <p className="text-[11px] font-semibold tracking-wide text-violet-soft">ASK FUTUREX AI</p>
        <p className="mt-3 text-[13px] leading-relaxed text-white/90">
          &ldquo;Summarize operational risk across all active projects.&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-navy/80 px-3 py-2">
          <Dot tone="run" />
          <span className="text-[11px] text-cool">Analyzing 42 data sources…</span>
        </div>
      </div>
      <div className="space-y-3 md:col-span-3">
        {insights.map((i) => (
          <div key={i.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <div>
              <p className="text-[13px] font-medium text-white">{i.title}</p>
              <p className="mt-0.5 text-[11px] text-cool">{i.detail}</p>
            </div>
            <StatusPill label={i.tone === "ok" ? "Done" : i.tone === "run" ? "Review" : "Flagged"} tone={i.tone} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationPanel() {
  const steps = [
    { name: "Trigger — new enterprise lead", tone: "ok" as const },
    { name: "Enrich account with AI research", tone: "ok" as const },
    { name: "Route to regional sales pod", tone: "run" as const },
    { name: "Draft proposal + follow-up sequence", tone: "wait" as const },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[11px] font-semibold tracking-wide text-violet-soft">WORKFLOW · ENTERPRISE ONBOARDING</p>
      <div className="mt-4 space-y-0">
        {steps.map((s, idx) => (
          <div key={s.name}>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-navy/60 px-4 py-3">
              <span className="text-[13px] text-white/90">{s.name}</span>
              <StatusPill label={s.tone === "ok" ? "Completed" : s.tone === "run" ? "Running" : "Queued"} tone={s.tone} />
            </div>
            {idx < steps.length - 1 && (
              <div className="mx-auto h-4 w-px bg-gradient-to-b from-violet/60 to-white/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  const bars = [34, 52, 44, 66, 58, 78, 62, 88, 74, 95, 84, 100];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { k: "MRR", v: "$1.24M", d: "+18.2%" },
        { k: "Active workflows", v: "3,184", d: "+9.6%" },
        { k: "Hours automated", v: "41,209", d: "+24.1%" },
      ].map((c) => (
        <div key={c.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[11px] text-cool">{c.k}</p>
          <p className="font-display mt-1.5 text-xl font-bold text-white">{c.v}</p>
          <p className="mt-1 text-[11px] font-semibold text-violet-soft">{c.d} vs last quarter</p>
        </div>
      ))}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:col-span-3">
        <div className="flex items-end justify-between gap-2 sm:gap-3">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h * 0.6}px` }}
              className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-violet" : "bg-white/10"}`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-cool">
          <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
        </div>
      </div>
    </div>
  );
}

function SecurityPanel() {
  const rows = [
    { name: "SSO — SAML 2.0", detail: "Okta · all employees", tone: "ok" as const },
    { name: "Role-based access", detail: "14 roles · least privilege", tone: "ok" as const },
    { name: "Audit log streaming", detail: "Realtime · immutable", tone: "run" as const },
    { name: "SOC 2 Type II", detail: "Annual audit · current", tone: "ok" as const },
  ];
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((c) => (
          <span key={c} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[11px] font-semibold text-violet-soft">
            {c}
          </span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-[13px] font-medium text-white">{r.name}</p>
            <p className="mt-0.5 text-[11px] text-cool">{r.detail}</p>
          </div>
          <StatusPill label="Active" tone={r.tone} />
        </div>
      ))}
    </div>
  );
}

function IntegrationsPanel() {
  const apps = ["Slack", "Google", "Salesforce", "GitHub", "Notion", "HubSpot", "Jira", "Zapier"];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {apps.map((a) => (
        <div key={a} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-navy/70 font-display text-[13px] font-bold text-violet-soft">
            {a[0]}
          </div>
          <p className="mt-2.5 text-[12px] font-medium text-white">{a}</p>
          <p className="mt-0.5 text-[10px] text-cool">Connected</p>
        </div>
      ))}
    </div>
  );
}

const PANELS: Record<TabId, () => React.ReactElement> = {
  ai: AISuitePanel,
  automation: AutomationPanel,
  analytics: AnalyticsPanel,
  security: SecurityPanel,
  integrations: IntegrationsPanel,
};

/* -------------------------------- component ------------------------------- */

export default function Showcase() {
  const [tab, setTab] = useState<TabId>("ai");
  const Panel = PANELS[tab];
  const tablistRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent) => {
    // APG pattern: arrow keys move from the FOCUSED tab, not the selected one
    const activeId = document.activeElement?.id?.replace("tab-", "");
    const current = TABS.some((t) => t.id === activeId) ? (activeId as TabId) : tab;
    const idx = TABS.findIndex((t) => t.id === current);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next >= 0) {
      e.preventDefault();
      setTab(TABS[next].id);
      tablistRef.current
        ?.querySelector<HTMLButtonElement>(`#tab-${TABS[next].id}`)
        ?.focus();
    }
  };

  return (
    <section id="product" className="relative px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          {/* Tab pills — proper tablist with roving tabindex and arrow-key support */}
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="FutureX Control Center modules"
            onKeyDown={onKeyDown}
            className="mx-auto mb-8 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-navy/10 bg-white p-2 shadow-sm"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                aria-controls="showcase-panel"
                tabIndex={tab === t.id ? 0 : -1}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-all ${
                  tab === t.id
                    ? "bg-violet text-white shadow-[0_0_20px_rgba(108,92,231,0.35)]"
                    : "text-muted hover:bg-navy/5 hover:text-navy"
                }`}
              >
                <TabIcon path={t.icon} />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          {/* Product window: light shell, dark app frame */}
          <div className="relative rounded-[2rem] border border-navy/10 bg-white p-2 shadow-[0_24px_80px_rgba(11,16,32,0.12)] sm:p-3">
            <div className="overflow-hidden rounded-[1.6rem] border border-navy/40 bg-navy/90">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
                </div>
                <p className="text-[12px] font-medium text-cool">
                  FutureX Control Center · {TABS.find((t) => t.id === tab)?.label}
                </p>
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-cool">acme.com</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet/80 text-[10px] font-bold text-white">A</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex">
                <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-white/10 p-4 md:flex">
                  {TABS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      aria-pressed={tab === t.id}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] font-medium transition-colors ${
                        tab === t.id ? "bg-violet/15 text-white" : "text-cool hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <TabIcon path={t.icon} />
                      {t.label}
                    </button>
                  ))}
                  <div className="mt-auto rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[10px] text-cool">Usage</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[68%] rounded-full bg-violet" />
                    </div>
                    <p className="mt-1.5 text-[10px] text-cool">68% of plan</p>
                  </div>
                </aside>
                <div
                  role="tabpanel"
                  id="showcase-panel"
                  aria-labelledby={`tab-${tab}`}
                  tabIndex={0}
                  className="min-w-0 flex-1 p-4 sm:p-6"
                >
                  <Panel />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
