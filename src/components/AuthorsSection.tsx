import React from 'react';
import {
  featuredResearchers,
  SLOCK_EMAIL,
  SLOCK_GOOGLE_SCHOLAR_URL,
  SLOCK_LINKEDIN_URL,
  SLOCK_GITHUB_URL,
  SLOCK_PERSONAL_WEBSITE_URL,
  PRAVEEN_EMAIL,
  PRAVEEN_GOOGLE_SCHOLAR_URL,
  PRAVEEN_LINKEDIN_URL,
} from '../config/authors';
import {
  Award,
  GraduationCap,
  Building2,
  Mail,
  Linkedin,
  Github,
  Globe,
  BookOpen,
  Sparkles,
  ArrowRight,
  GitMerge,
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  Cpu,
  Radio,
  Layers,
} from 'lucide-react';

export const AuthorsSection: React.FC = () => {
  const slock = featuredResearchers[0];
  const praveen = featuredResearchers[1];

  return (
    <section id="authors" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambient Lighting (Dark Navy, Electric Blue & Cyan Accents) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            SECTION 4 — FEATURED RESEARCH LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Research Team & Academic Collaboration
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Research leadership, academic mentorship and AI-driven innovation in 6G Non-Terrestrial Networks.
          </p>
        </div>

        {/* TWO LARGE RESEARCHER PROFILE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20 items-stretch">
          {/* CARD 1: SLOCK AHUJA — LEAD RESEARCHER & PRESENTER */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-500/30 hover:border-blue-400 shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-blue-500/10">
            <div>
              {/* Card Badge & Role Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  {slock.cardRole}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Paper ID: 272 • Presenter
                </span>
              </div>

              {/* Photo & Identity Layout */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-blue-400 shadow-xl shadow-blue-500/20 ring-4 ring-blue-500/10">
                  <img
                    src={slock.image}
                    alt={`${slock.name} - ${slock.designation}`}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 p-1 bg-blue-600 text-white rounded-md shadow-md text-[10px] font-bold">
                    Lead
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {slock.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wide uppercase">
                    {slock.designation}
                  </p>
                  <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{slock.institution}</span>
                  </p>
                  <p className="text-xs text-slate-400 pl-0 sm:pl-5">
                    {slock.department}, {slock.location}
                  </p>
                  <p className="text-xs text-blue-400 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <Mail className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                    <a href={`mailto:${SLOCK_EMAIL}`} className="hover:underline font-semibold">
                      {SLOCK_EMAIL}
                    </a>
                  </p>
                </div>
              </div>

              {/* Bio Excerpt */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 border-t border-slate-800/80 pt-4">
                {slock.bio}
              </p>

              {/* Research Interests Tags */}
              <div className="space-y-2 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Primary Research Domains
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {slock.expertiseOrInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 text-blue-200 border border-slate-700/80 hover:border-cyan-400 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 Professional Profile Buttons */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {/* Google Scholar */}
                <a
                  href={SLOCK_GOOGLE_SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="View Slock Ahuja on Google Scholar"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Google Scholar</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={SLOCK_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="Connect with Slock Ahuja on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={SLOCK_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-black text-white font-bold text-xs border border-slate-700 shadow-md transition-all duration-200"
                  title="View Slock Ahuja's GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* Personal Website */}
                <a
                  href={SLOCK_PERSONAL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs shadow-md transition-all duration-200 col-span-2 sm:col-span-1"
                  title="Visit Slock Ahuja's Research Website"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Personal Website</span>
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${SLOCK_EMAIL}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all duration-200 col-span-2 sm:col-span-2"
                  title="Send Direct Email to Slock Ahuja"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#researcher"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link"
                >
                  <span>Explore Expanded Lead Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: PROF. DR. PRAVEEN KUMAR SHARMA — PROFESSOR & RESEARCH SUPERVISOR */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-cyan-500/10">
            <div>
              {/* Card Badge & Role Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  {praveen.cardRole}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Ph.D. BITS Pilani • SeoulTech
                </span>
              </div>

              {/* Photo & Identity Layout */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-4 ring-cyan-500/10">
                  <img
                    src={praveen.image}
                    alt={`${praveen.name} - ${praveen.designation}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 p-1 bg-cyan-600 text-white rounded-md shadow-md text-[10px] font-bold">
                    Supervisor
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {praveen.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wide uppercase">
                    {praveen.designation}
                  </p>
                  <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{praveen.institution}</span>
                  </p>
                  <p className="text-xs text-slate-400 pl-0 sm:pl-5">
                    {praveen.department}, {praveen.location}
                  </p>
                  <p className="text-xs text-blue-400 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                    <Mail className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                    <a href={`mailto:${PRAVEEN_EMAIL}`} className="hover:underline font-semibold">
                      {PRAVEEN_EMAIL}
                    </a>
                  </p>
                </div>
              </div>

              {/* Academic Background Badges */}
              <div className="mb-4 space-y-1.5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-300">
                <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  Verified Academic Pedigree:
                </p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  • Ph.D. from <strong>Birla Institute of Technology and Science (BITS), Pilani</strong>.
                  <br />
                  • Former Research Scientist at <strong>Seoul National University of Science and Technology (SeoulTech)</strong>, South Korea.
                </p>
              </div>

              {/* Bio Excerpt */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {praveen.bio}
              </p>

              {/* Research Expertise Tags */}
              <div className="space-y-2 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Core Research Expertise
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {praveen.expertiseOrInterests.map((expertise, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 text-cyan-200 border border-slate-700/80 hover:border-cyan-400 transition-colors"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Professional Profile Buttons */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Google Scholar */}
                <a
                  href={PRAVEEN_GOOGLE_SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="View Prof. Dr. Praveen Kumar Sharma on Google Scholar"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Google Scholar</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PRAVEEN_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="Connect with Prof. Dr. Praveen Kumar Sharma on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${PRAVEEN_EMAIL}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="Send Direct Email to Prof. Dr. Praveen Kumar Sharma"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="#supervisor"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link"
                >
                  <span>Explore Expanded Supervisor Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: DEDICATED ACADEMIC COLLABORATION BRIDGE */}
        <div id="collaboration" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3">
              <GitMerge className="w-3.5 h-3.5 text-cyan-400" />
              SECTION 5 — ACADEMIC COLLABORATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Research Collaboration
            </h3>
            <p className="text-sm font-semibold text-blue-300 mt-2">
              AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems
            </p>
            <p className="text-xs text-slate-400 mt-1">
              IEEE ACROSET 2026 (Paper ID: 272) • Department of ICT, Marwadi University
            </p>
          </div>

          {/* Visual Relationship Between Research Leadership & Academic Supervision */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* Left Pillar: Slock Ahuja */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 shadow-lg text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-400 shrink-0">
                  <img src={slock.image} alt={slock.name} className="w-full h-full object-cover object-[center_15%]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">{slock.name}</h4>
                  <p className="text-xs font-bold text-cyan-400">Lead Researcher & Presenter</p>
                  <p className="text-[11px] text-slate-300">{slock.institution}, {slock.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                • <strong>Research Leadership:</strong> PPO RL formulation, multi-beam NTN simulation engine design, and IEEE conference presentation.
              </p>
            </div>

            {/* Center Bridge: Synergy & Methodology Oversight */}
            <div className="md:col-span-1 flex flex-col items-center justify-center py-2">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-blue animate-pulse-slow">
                <GitMerge className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest mt-1">
                Synergy
              </span>
            </div>

            {/* Right Pillar: Prof. Dr. Praveen Kumar Sharma */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-lg text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-400 shrink-0">
                  <img src={praveen.image} alt={praveen.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">{praveen.name}</h4>
                  <p className="text-xs font-bold text-cyan-400">Professor, Head of Department (ECE)</p>
                  <p className="text-[11px] text-slate-300">{praveen.institution}, {praveen.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                • <strong>Academic Supervision:</strong> Academic oversight, 3GPP channel dynamics validation, and research mentorship.
              </p>
            </div>
          </div>

          {/* Publication Authorship Preservation Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Official IEEE Publication Citation:</span> Published under Paper ID 272 at IEEE ACROSET 2026. The full official bibliographic author list includes Slock Ahuja, Prof. Dr. Praveen Kumar Sharma, Dr. C. D. Parmar, and Indu Jaiswal. See the{' '}
            <a href="#paper-info" className="text-blue-400 hover:underline font-bold">
              Conference Citation Section
            </a>{' '}
            for complete BibTeX and proceedings metadata.
          </div>
        </div>
      </div>
    </section>
  );
};
