import React from 'react';
import {
  supervisorProfile,
  PRAVEEN_NAME,
  PRAVEEN_DESIGNATION,
  PRAVEEN_ROLE,
  PRAVEEN_INSTITUTION,
  PRAVEEN_DEPARTMENT,
  PRAVEEN_LOCATION,
  PRAVEEN_EMAIL,
  PRAVEEN_GOOGLE_SCHOLAR_URL,
  PRAVEEN_LINKEDIN_URL,
  PRAVEEN_ACADEMIC_BACKGROUND,
  PRAVEEN_RESEARCH_EXPERTISE,
} from '../config/authors';
import {
  Award,
  GraduationCap,
  Building2,
  MapPin,
  Mail,
  Linkedin,
  BookOpen,
  CheckCircle2,
  UserCheck,
  Sparkles,
  ExternalLink,
  Layers,
  Radio,
} from 'lucide-react';

export const SupervisorSection: React.FC = () => {
  return (
    <section id="supervisor" className="py-20 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-100/90 text-cyan-800 border border-cyan-200 shadow-sm mb-3">
              <Award className="w-3.5 h-3.5 text-cyan-600" />
              SECTION 3 — RESEARCH SUPERVISOR & ACADEMIC MENTOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
              Research Supervisor Profile
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Professor, Faculty Advisor, and Academic Mentor for IEEE ACROSET 2026 Paper 272
            </p>
          </div>
          <span className="text-xs font-bold text-cyan-800 bg-cyan-50/80 border border-cyan-200/80 px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-cyan-600" />
            {PRAVEEN_INSTITUTION} • Department of ECE
          </span>
        </div>

        {/* Premium Academic Profile Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 border-slate-200/90 bg-white/95 hover:border-cyan-400 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Photograph & Verified Profile Buttons */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-cyan-50/40 via-slate-50 to-white border border-cyan-100 shadow-sm">
              {/* Profile Photograph Frame */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-cyan-500/40 ring-4 ring-cyan-500/10 group mb-5">
                <img
                  src={supervisorProfile.image}
                  alt={`${PRAVEEN_NAME} - ${PRAVEEN_DESIGNATION}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-2 right-2 p-1.5 bg-cyan-600 text-white rounded-lg shadow-md border border-white/50 text-[10px] font-bold flex items-center gap-1"
                  title="Research Supervisor & Academic Mentor"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Supervisor</span>
                </div>
              </div>

              {/* Title & Affiliation Details */}
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-tight">
                {PRAVEEN_NAME}
              </h3>
              <p className="text-xs font-bold text-cyan-700 uppercase tracking-wider mt-1">
                {PRAVEEN_DESIGNATION}
              </p>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {PRAVEEN_ROLE}
              </p>

              <div className="mt-5 w-full space-y-2.5 text-left text-xs text-slate-600 border-t border-slate-200/80 pt-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-700">{PRAVEEN_DEPARTMENT}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800">{PRAVEEN_INSTITUTION}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{PRAVEEN_LOCATION}</span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={`mailto:${PRAVEEN_EMAIL}`}
                    className="text-blue-600 hover:text-blue-800 font-bold hover:underline truncate"
                    title="Send Direct Email to Prof. Dr. Praveen Kumar Sharma"
                  >
                    {PRAVEEN_EMAIL}
                  </a>
                </div>
              </div>

              {/* 3 Verified Profile Buttons */}
              <div className="mt-6 w-full space-y-2.5">
                {/* Google Scholar Button */}
                <a
                  href={PRAVEEN_GOOGLE_SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="View Prof. Dr. Praveen Kumar Sharma on Google Scholar"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Google Scholar Profile</span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={PRAVEEN_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all duration-200"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                {/* Direct Email Button */}
                <a
                  href={`mailto:${PRAVEEN_EMAIL}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Academic Pedigree, Research Expertise & Supervisory Oversight */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                  Academic Background & Research Leadership
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {supervisorProfile.bio}
                </p>

                {/* Verified Academic Pedigree Card */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md mb-4">
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    Academic Background & International Research
                  </p>
                  <ul className="space-y-2 text-xs text-slate-200 leading-relaxed">
                    {PRAVEEN_ACADEMIC_BACKGROUND.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Supervisory Oversight in Paper 272 Callout Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-50/90 to-blue-50/60 border border-cyan-200/80 text-xs text-slate-700 leading-relaxed space-y-2 shadow-sm">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Supervisory Oversight in Paper 272:
                  </p>
                  <p className="text-slate-700">
                    Guided the mathematical formulation for non-terrestrial 3GPP channel dynamics, supervised the design of Proximal Policy Optimization (PPO) reward constraints, and reviewed the empirical benchmarking against baseline greedy heuristic algorithms.
                  </p>
                </div>
              </div>

              {/* Research Expertise Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Research Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {PRAVEEN_RESEARCH_EXPERTISE.map((expertise, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-cyan-400 hover:text-cyan-800 hover:bg-cyan-50/50 transition-all cursor-default"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              {/* Institutional Collaboration Banner */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                <div>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    Direct Inquiries & Research Mentorship
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {PRAVEEN_DEPARTMENT}, {PRAVEEN_INSTITUTION}, {PRAVEEN_LOCATION}
                  </p>
                </div>
                <a
                  href={`mailto:${PRAVEEN_EMAIL}`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
                >
                  Contact Supervisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
