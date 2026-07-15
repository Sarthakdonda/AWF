import React from "react";
import { ArrowLeft, ArrowUpRight, BarChart3, BatteryCharging, CalendarCheck, Check, CreditCard, FileText, Github, MapPin, Server, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [["03", "connected user roles"], ["10+", "operational domains"], ["Real time", "session visibility"], ["Atlas", "cloud data layer"]];

function PluginCaseStudy({ project }) {
  return (
    <main id="main-content" className="plugin-case">
      <section className="plugin-hero">
        <Link className="case-back" to="/#projects"><ArrowLeft size={15} /> Back to projects</Link>
        <div className="plugin-eyebrow"><span>02 / Full-stack case study</span><span>EV mobility · 2026</span></div>
        <h1>Plugin<span>®</span></h1>
        <div className="plugin-intro"><p>One connected operating system for drivers, charging stations, and network teams.</p><a href={project.github} target="_blank" rel="noreferrer">Explore repository <Github size={16} /><ArrowUpRight size={14} /></a></div>
      </section>

      <section className="plugin-network" data-reveal aria-label="Animated EV charging network">
        <header><span>Live network / Gujarat</span><span className="plugin-live"><i /> 24 stations online</span></header>
        <div className="network-map">
          <div className="network-grid" />
          <div className="energy-radar"><i /><i /><i /></div>
          <svg viewBox="0 0 1200 570" preserveAspectRatio="none" aria-hidden="true"><path d="M80 390 C220 390 210 175 375 175 S530 390 680 390 800 160 960 160 1050 290 1130 290"/><path className="energy-flow" d="M80 390 C220 390 210 175 375 175 S530 390 680 390 800 160 960 160 1050 290 1130 290"/><circle r="5"><animateMotion dur="5s" repeatCount="indefinite" path="M80 390 C220 390 210 175 375 175 S530 390 680 390 800 160 960 160 1050 290 1130 290"/></circle></svg>
          <div className="map-station station-a"><span><Zap /></span><strong>Ahmedabad One</strong><small>8 / 10 chargers available</small><em><i /> Online</em></div>
          <div className="map-station station-b"><span><Zap /></span><strong>Vadodara Hub</strong><small>5 / 6 chargers available</small><em><i /> Online</em></div>
          <div className="map-station station-c"><span><Zap /></span><strong>Surat Central</strong><small>12 / 14 chargers available</small><em><i /> Online</em></div>
          <div className="charging-session"><div className="charge-ring"><BatteryCharging /><span>72<small>%</small></span></div><div><small>ACTIVE SESSION</small><strong>Charging in progress</strong><span>32.4 kWh · ₹486.00</span></div></div>
          <div className="booking-float"><CalendarCheck /><div><small>NEXT BOOKING</small><strong>Today, 16:30</strong><span>CCS2 · Bay 04</span></div><b>Confirmed</b></div>
          <div className="network-activity"><span>LIVE ACTIVITY</span><p><i /> Session #482 started</p><p><i /> Bay 04 reserved</p><p><i /> Payment verified</p></div>
          <div className="power-meter"><span>NETWORK LOAD</span><div><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><b>68.4 kW</b></div>
          <div className="network-stats"><span><MapPin />24 stations</span><span><BatteryCharging />186 charge points</span><span><Zap />91% uptime</span></div>
        </div>
      </section>

      <section className="plugin-content" data-reveal><aside><span>01</span><p>Product vision</p></aside><div><h2>Charging infrastructure becomes useful when every participant shares the same truth.</h2><p>{project.overview}</p><p>Plugin replaces fragmented booking, billing, and operating workflows with role-aware experiences backed by a secure Java service layer and a cloud-native document model.</p></div></section>
      <section className="plugin-metrics" data-reveal>{metrics.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="plugin-content" data-reveal><aside><span>02</span><p>Experience system</p></aside><div><h2>Three focused products. One coordinated platform.</h2><div className="role-grid"><article><Users/><span>01 / DRIVER</span><h3>Find, book, charge.</h3><p>Station discovery, conflict-safe reservations, live sessions, wallet payments, invoices, and vehicle profiles.</p></article><article><MapPin/><span>02 / MANAGER</span><h3>Operate with confidence.</h3><p>KYC onboarding, station and charger oversight, application tracking, credentials, and revenue visibility.</p></article><article className="dark"><BarChart3/><span>03 / ADMIN</span><h3>See the whole network.</h3><p>Customers, stations, sessions, pricing, revenue analytics, approval workflows, and immutable audit trails.</p></article></div></div></section>

      <section className="plugin-content plugin-system" data-reveal><aside><span>03</span><p>System design</p></aside><div><h2>Built as a secure transaction pipeline from interface to invoice.</h2><div className="system-flow"><div><span>CLIENT</span><strong>React application</strong><small>Routing · Axios · Motion</small></div><i>→</i><div><span>SECURITY</span><strong>Spring Boot API</strong><small>JWT · BCrypt · Validation</small></div><i>→</i><div><span>DATA</span><strong>MongoDB Atlas</strong><small>Documents · Sequences · Audit</small></div></div><div className="system-signals"><span><ShieldCheck/>Role-based access</span><span><CreditCard/>Razorpay payments</span><span><FileText/>PDF invoices</span><span><Server/>Cloud deployment</span></div><div className="case-stack">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></section>

      <section className="plugin-content" data-reveal><aside><span>04</span><p>Core capabilities</p></aside><div><h2>Designed beyond the happy path.</h2><div className="plugin-feature-grid">{project.features.map((feature,index)=><article key={feature}><span>0{index+1}</span><Check/><p>{feature}</p></article>)}</div></div></section>
    </main>
  );
}

export default PluginCaseStudy;
