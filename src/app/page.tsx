import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 sm:px-10">
      <nav className="mx-auto mb-16 flex max-w-6xl items-center justify-between">
        <strong className="text-sm tracking-wide text-slate-900">
          Event Registration Workflow Automation System
        </strong>

        <div className="flex gap-5 text-sm text-slate-600">
          <Link className="hover:text-slate-950" href="/register">
            Demo
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Event Registration Workflow Automation System
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Event Registration Workflow Automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A workflow automation system that replaces manual event tracking
            with a structured registration and reporting system using Airtable
            and Next.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              href="/register"
            >
              Enter Demo
            </Link>
            <a
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-400"
              href="https://github.com/robgmerrill/event-registration-workflow"
              rel="noreferrer"
              target="_blank"
            >
              View GitHub
            </a>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-400"
              href="/docs/architecture.md"
            >
              View Architecture
            </Link>
            <Link
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-400"
              href="/docs/case-study.md"
            >
              View Case Study
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-semibold text-slate-950">
            Workflow Context
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            This project demonstrates how organizations can transition from
            manual spreadsheet-based event tracking and email coordination into
            a structured workflow system.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-600 marker:text-blue-600">
            <li>Capturing registrations through a web form</li>
            <li>Storing data in Airtable</li>
            <li>Surfacing registrations in an operational dashboard</li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm leading-6 text-blue-950">
          <h2 className="font-semibold">Important Note</h2>
          <p className="mt-2">
            This is a portfolio simulation of a workflow automation system. It
            is not a production SaaS product.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-semibold text-slate-950">
            What This Project Demonstrates
          </h2>
          <ul className="mt-5 grid list-disc gap-3 pl-5 text-slate-700 marker:text-blue-600 sm:grid-cols-2">
            <li>Workflow automation design</li>
            <li>Airtable data modeling and system-of-record design</li>
            <li>Next.js API route integration</li>
            <li>Operational dashboard visibility</li>
            <li>Implementation tradeoffs in lightweight systems</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
