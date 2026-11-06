import React from 'react';
import {
  presenterProfile,
  SLOCK_EMAIL,
  SLOCK_GOOGLE_SCHOLAR_URL,
  SLOCK_LINKEDIN_URL,
  SLOCK_GITHUB_URL,
  SLOCK_PERSONAL_WEBSITE_URL,
} from '../config/profile';
import {
  User,
  Mail,
  Linkedin,
  Github,
  Globe,
  MapPin,
  GraduationCap,
  Sparkles,
  BookCheck,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Building2,
  Award,
} from 'lucide-react';

export const ResearcherProfile: React.FC = () => {
  return (
    <section id="researcher" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100/90 text-blue-800 border border-blue-200 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              SECTION 2 — LEAD RESEARCHER & PRESENTER PROFILE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
              Lead Researcher Profile
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Lead Author, Algorithm Architect, and Conference Presenter of IEEE ACROSET 2026 Paper 272
            </p>
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50/90 border border-blue-200/80 px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-1.5">
            <Award className="w-4 h-4 text-blue-600" />
            Lead Author & Conference Presenter
          </span>
        </div>

        {/* Premium Profile Glass Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 border-slate-200/90 hover:border-blue-400 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Photograph & Fast Profile Buttons */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-blue-50/50 via-slate-50 to-white border border-blue-100 shadow-sm">
              {/* Profile Photograph Frame */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-500/40 ring-4 ring-blue-500/10 group mb-5">
                <img
                  src={presenterProfile.image}
                  alt={`${presenterProfile.name} - ${presenterProfile.designation}`}
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-2 right-2 p-1.5 bg-blue-600 text-white rounded-lg shadow-md border border-white/50 text-[10px] font-bold flex items-center gap-1"
                  title="Lead Author & Conference Presenter"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Lead Presenter</span>
                </div>
              </div>

              {/* Title & Affiliation Details */}
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-tight">
                {presenterProfile.name}
              </h3>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
                {presenterProfile.designation}
              </p>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {presenterProfile.role}
              </p>

              <div className="mt-5 w-full space-y-2.5 text-left text-xs text-slate-600 border-t border-slate-200/80 pt-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{presenterProfile.affiliation.department}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800">{presenterProfile.affiliation.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{presenterProfile.affiliation.state}, {presenterProfile.affiliation.country}</span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`mailto:${SLOCK_EMAIL}`}
                    className="text-blue-600 hover:text-blue-800 font-bold hover:underline truncate"
                    title="Send Direct Email to Slock Ahuja"
                  >
                    {SLOCK_EMAIL}
                  </a>
                </div>
              </div>

              {/* 5 Verified Profile Buttons */}
              <div className="mt-6 w-full space-y-2">
                {/* Google Scholar Button */}
                <a
                  href={SLOCK_GOOGLE_SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="View Slock Ahuja on Google Scholar"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Google Scholar Profile</span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={SLOCK_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>

                {/* GitHub & Personal Website Split Row */}
                <div className="grid grid-cols-2 gap-2 w-full">
                  <a
                    href={SLOCK_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow-sm transition-all duration-200"
                    title="GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={SLOCK_PERSONAL_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-sm transition-all duration-200"
                    title="Personal Website"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Website</span>
                  </a>
                </div>

                {/* Direct Email Button */}
                <a
                  href={`mailto:${SLOCK_EMAIL}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bio, Conference Presentation Role & Research Interests */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <BookCheck className="w-5 h-5 text-blue-600" />
                  Research Leadership & Background
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {presenterProfile.bio}
                </p>

                {/* Conference Presentation Role Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/60 border border-blue-200/80 text-xs text-slate-700 leading-relaxed space-y-2 shadow-sm">
                  <p className="font-bold text-blue-950 flex items-center gap-1.5 text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    Conference Presentation Role (Paper ID: 272):
                  </p>
                  <p className="text-slate-700">
                    Lead investigator responsible for formulating the PPO state-action space, designing the 3GPP channel modeling simulation testbed, benchmarking ~12,000 communication samples, and presenting Paper 272 at IEEE ACROSET 2026.
                  </p>
                </div>
              </div>

              {/* Verified Research Interests Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Research Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {presenterProfile.researchInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50/50 transition-all cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Metrics Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="text-center p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <p className="text-xl sm:text-2xl font-black font-display text-blue-700">272</p>
                  <p className="text-[11px] font-semibold text-slate-500">IEEE Paper ID</p>
                </div>
                <div className="text-center p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <p className="text-xl sm:text-2xl font-black font-display text-orange-600">~12,000</p>
                  <p className="text-[11px] font-semibold text-slate-500">Dataset Samples</p>
                </div>
                <div className="text-center p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <p className="text-xl sm:text-2xl font-black font-display text-emerald-600">6G NTN</p>
                  <p className="text-[11px] font-semibold text-slate-500">Domain Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
