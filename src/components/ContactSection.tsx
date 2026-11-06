import React from 'react';
import {
  presenterProfile,
  SLOCK_LINKEDIN_URL,
  SLOCK_GOOGLE_SCHOLAR_URL,
  SLOCK_GITHUB_URL,
  SLOCK_PERSONAL_WEBSITE_URL,
  SLOCK_EMAIL,
} from '../config/profile';
import { Mail, Linkedin, Github, Sparkles, MapPin, GraduationCap, Globe, Award, BookOpen } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          RESEARCH COLLABORATION & CONTACT
        </div>

        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
          Let's Connect
        </h2>

        <p className="text-xl font-bold font-display text-blue-400 mb-1">
          {presenterProfile.name}
        </p>

        <p className="text-sm font-semibold text-slate-400 mb-8">
          {presenterProfile.designation} • Department of ICT, Marwadi University
        </p>

        {/* 5 Professional Profile Buttons Card */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-2xl mb-10 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Google Scholar Button */}
            <a
              href={SLOCK_GOOGLE_SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all"
              title="Google Scholar Profile"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Scholar</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={SLOCK_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub Button */}
            <a
              href={SLOCK_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs border border-slate-700 shadow-md transition-all"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* Personal Website */}
            <a
              href={SLOCK_PERSONAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs shadow-md transition-all"
              title="Personal Website"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Website</span>
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${SLOCK_EMAIL}`}
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all col-span-2 sm:col-span-1"
              title="Send Direct Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 space-y-1">
            <p>
              <strong>Affiliation:</strong> {presenterProfile.affiliation.department}, {presenterProfile.affiliation.institution}
            </p>
            <p>
              <strong>Published Paper:</strong> IEEE ACROSET 2026 (Paper ID: 272) • Indore, Madhya Pradesh, India
            </p>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="text-center text-xs text-slate-500 pt-6 border-t border-slate-800">
          <p>© 2026 IEEE ACROSET Paper 272 Research Project. Academic Collaboration Platform.</p>
        </div>
      </div>
    </footer>
  );
};
