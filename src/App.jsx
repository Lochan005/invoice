import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Settings2, ShieldCheck, Factory } from "lucide-react";

export default function SaitechEngineeringHomepage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-200">
      {/* Navbar Placeholder */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="SAITECH Engineering Pty Ltd. Logo" className="h-10 w-auto object-contain p-0.5 rounded-lg bg-white/5 backdrop-blur-sm" />
            <span className="text-xl font-bold tracking-wider text-white">SAITECH Engineering</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work-show" className="hover:text-cyan-400 transition-colors">Work Show</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <a href="tel:0470530451" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
            0470 530 451
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 text-white">
        {/* Abstract Background Blurs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]" />
          <div className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeInUp}>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                  </span>
                  Precision Machining • Fabrication
                </p>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Engineering excellence, built for precision.
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-slate-300">
                SAITECH Engineering Pty Ltd. delivers reliable machining, fabrication, and maintenance solutions backed by CNC and conventional workshop capability for industrial and commercial needs.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="group rounded-2xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/40">
                  Discuss Your Project
                </a>
                <a href="#services" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10">
                  Explore Services
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
                
                {/* Auto Sliding Hero Carousel */}
                <div className="relative w-full h-[500px] rounded-[1.5rem] overflow-hidden shadow-inner bg-slate-800">
                  <AnimatePresence initial={false}>
                    {heroImages.map((num, idx) => (
                      heroIndex === idx && (
                        <motion.img 
                          key={num}
                          src={`/images/hero/${num}.jpg`} 
                          alt={`SAITECH capability view ${num}`} 
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                        />
                      )
                    ))}
                  </AnimatePresence>
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20 rounded-3xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                      <ShieldCheck />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">ISO Compliant</p>
                      <p className="text-xs text-slate-400">Precision strictly verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Curved Divider Line */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block h-[50px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="relative mx-auto -mt-12 max-w-7xl px-6 lg:px-8 z-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            { title: "Workshop Capability", icon: <Factory className="text-cyan-500" />, text: "CNC and conventional machinery for flexible, high-quality machining solutions." },
            { title: "Custom Solutions", icon: <Wrench className="text-indigo-500" />, text: "Support for one-off jobs, product development, repairs, and fabrication work." },
            { title: "Trusted Support", icon: <ShieldCheck className="text-emerald-500" />, text: "Practical engineering services focused on precision, reliability, and turnaround." },
          ].map((item, i) => (
            <motion.div key={item.title} variants={fadeInUp} className="group overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-slate-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Workshop Action Images & Capabilities */}
      <section id="capabilities" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">Our Capabilities</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Engineering capability built for precision</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We support both custom and ongoing workshop requirements with a strong range of machining and fabrication capabilities. From rough cuts to final polish, our tools match our expertise.
              </p>

              <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3">
                {[
                  "General Machining", "Precision Machining", "CNC Turning",
                  "CNC Machining", "Conventional Lathe", "Milling",
                  "Band Sawing", "Radial Drilling", "Fabrication"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <img src="/images/work_show/12.jpg" alt="Workshop CNC Action" className="rounded-3xl object-cover h-[600px] w-full shadow-2xl" />
              <img src="/images/work_show/14.jpg" alt="Metal Components" className="absolute -bottom-10 -left-10 w-64 rounded-2xl border-8 border-slate-50 object-cover shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-[40rem] w-[40rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Focused Engineering Services</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative h-full rounded-[2.25rem] bg-slate-900/50 p-10 pt-12 backdrop-blur-xl">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Wrench size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Maintenance & Fabrication</h3>
                <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                  We provide repair, replacement, modification, and fabrication services to support ongoing maintenance and operational reliability of plant, equipment, and machinery.
                </p>
                <img src="/images/work_show/5.jpg" alt="Maintenance specific build" className="mt-10 rounded-2xl object-cover h-[250px] w-full border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative h-full rounded-[2.25rem] bg-slate-900/50 p-10 pt-12 backdrop-blur-xl">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Settings2 size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Custom Design & Development</h3>
                <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                  We work collaboratively with clients to design and manufacture custom components and products tailored to specific operational requirements, from concept to finished part.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {["CNC Turning Centre", "CNC Machining Centre", "Conventional Lathe", "Milling Machine"].map(item => (
                     <div key={item} className="rounded-xl bg-white/5 p-4 text-center text-sm font-semibold text-slate-300 border border-white/5 backdrop-blur-sm">
                       {item}
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Work Show Section */}
      <section id="work-show" className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
             <p className="text-sm font-bold uppercase tracking-widest text-cyan-600 mb-2">Our Work</p>
             <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">Precision parts showcase</h2>
          </motion.div>
        </div>
        
        {/* The marquee wrapper must hide overflow completely */}
        <div className="relative w-full overflow-hidden shrink-0 flex items-center justify-start flex-nowrap bg-white py-4 mask-edges group">
          {/* Two consecutive identical containers animate-marquee to create the loop */}
          <div className="flex w-max shrink-0 animate-marquee space-x-6 pr-6 group-hover:[animation-play-state:paused] items-center">
            {/* Creates an array with 50 elements (25 cloned twice) */}
            {[...Array(50).keys()].map(i => {
              const imgNum = (i % 25) + 1;
              return (
                <div key={i} className="shrink-0 h-[280px] w-auto inline-block rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 bg-slate-50 transform transition hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-200">
                  <img
                    src={`/images/work_show/${imgNum}.jpg`}
                    alt={`Work showcase ${imgNum}`}
                    className="h-full w-auto object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="overflow-hidden rounded-[3rem] bg-gradient-to-br from-cyan-600 to-indigo-700 shadow-2xl relative"
          >
            {/* Background design pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-[50px] mix-blend-overlay"></div>
            
            <div className="grid lg:grid-cols-2 items-center p-12 sm:p-16 lg:p-20 relative z-10 gap-16">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">Let’s discuss your next machining or fabrication job.</h2>
                <p className="text-lg text-cyan-50 mb-10">
                  Contact SAITECH Engineering Pty Ltd. for reliable precision machining, fabrication, maintenance support, or custom product development. We are ready to help.
                </p>
                <a href="tel:0470530451" className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-indigo-900 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                  Call 0470 530 451
                </a>
              </div>

              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                <div className="space-y-6 text-cyan-50">
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-1">Company</p>
                    <p className="text-xl font-medium text-white">SAITECH Engineering Pty Ltd.</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-lg">Unit 5, 10 Tidal Way<br/>Bibra Lake WA 6163</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-1">Director</p>
                        <p className="text-lg font-medium text-white">Shiva Prasad</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-1">Mobile</p>
                        <a href="tel:0470530451" className="text-lg font-medium text-white hover:text-cyan-300 transition-colors">
                          0470 530 451
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:saitechengineering2023@gmail.com" className="text-lg font-medium text-white hover:text-cyan-300 transition-colors break-all">
                      saitechengineering2023@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SAITECH Engineering Pty Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
