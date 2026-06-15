import React, { useState } from 'react';
import { Menu, X, Mail, ExternalLink, BrainCircuit, Smartphone, ShieldCheck, Cpu, Layers } from 'lucide-react';

// Centralisation de tes informations personnelles
const personalInfo = {
  firstName: "Elie Victorien",
  lastName: "ANTSONILAINA",
  title: "IA, IOT et Cybersécurité",
  email: "elievictoriena@gmail.com",
  linkedin: "https://www.linkedin.com/in/antsonilaina-elie-victorien-83350a305/",
  github: "https://github.com/elie7702",
  bio: "Étudiant en M1 IA à l'ENI Madagascar. Spécialisé dans le déploiement d'architectures IoT, la Computer Vision et le Hardening de réseaux."
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'À propos', id: 'apropos' },
    { label: 'Projets', id: 'projets' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Contact', id: 'contact' }
  ];

  const projects = [
    {
      id: 1,
      title: "Système de Reconnaissance Faciale IoT",
      category: "IA + Embedded Systems",
      description: "Système embarqué de reconnaissance faciale temps réel sur Raspberry Pi avec modèle TensorFlow optimisé. Déploiement sécurisé avec chiffrement de bout en bout.",
      technologies: ["TensorFlow", "Python", "Raspberry Pi", "OpenCV", "MQTT"],
      impact: "Latence < 200ms | Accuracy 96% | Consommation 2W",
      color: "#06B6D4",
      icon: BrainCircuit,
      githubUrl: personalInfo.github,
      liveUrl: personalInfo.github
    },
    {
      id: 2,
      title: "Application Mobile de Monitoring IoT",
      category: "Mobile + Cloud",
      description: "Application Flutter pour surveiller et contrôler des capteurs IoT en temps réel. Dashboard de supervision avec graphiques dynamiques et alertes intelligentes.",
      technologies: ["Flutter", "Dart", "Firebase", "Real-time DB", "Charts"],
      impact: "500+ objets connectés | Sync instantanée | Mode hors-ligne",
      color: "#3B82F6",
      icon: Smartphone,
      githubUrl: personalInfo.github,
      liveUrl: personalInfo.github
    },
    {
      id: 3,
      title: "Audit de Sécurité & Hardening Réseau",
      category: "Cybersécurité",
      description: "Audit complet d'infrastructure réseau, identification de vulnérabilités critiques et implémentation de contre-mesures. Rapport détaillé avec remédiations.",
      technologies: ["Nmap", "Wireshark", "Burp Suite", "Linux", "Firewall Config"],
      impact: "23 vulnérabilités corrigées | Score de sécurité A+ | 0 faux positif",
      color: "#10B981",
      icon: ShieldCheck,
      githubUrl: personalInfo.github,
      liveUrl: personalInfo.github
    },
    {
      id: 4,
      title: "Détection d'Anomalies par Machine Learning",
      category: "IA + SecOps",
      description: "Modèle de Machine Learning entraîné pour détecter les comportements malveillants dans les logs réseau. Identification précoce des attaques DDoS.",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "ElasticSearch"],
      impact: "Détection 94% | Faux Positifs < 2% | Analyse 1M logs/jour",
      color: "#6366F1",
      icon: Layers,
      githubUrl: personalInfo.github,
      liveUrl: personalInfo.github
    }
  ];

  const skills = [
    { category: "IA & Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"] },
    { category: "IoT & Systèmes", items: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Embedded Linux"] },
    { category: "Cybersécurité", items: ["Pentesting", "Network Security", "Cryptographie", "Security Audit", "Forensics"] },
    { category: "Développement", items: ["Python", "Java", "Dart (Flutter)", "C++", "JavaScript / React"] }
  ];

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: "#0B0F19" }}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-lg border-b border-slate-800/50" style={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            NILAINA<span className="text-white">.dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-400 hover:text-cyan-400 font-medium transition duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0B0F19]/95">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-6 py-4 text-slate-400 border-b border-slate-800/50 hover:bg-slate-800/30 hover:text-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="pt-40 pb-28 px-6 relative overflow-hidden text-center"
        style={{
          background: "radial-gradient(circle at top, rgba(6,182,212,0.08) 0%, transparent 50%)"
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
            <Cpu size={14} /> Disponible pour Stage / Alternance
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            L'Intelligence Artificielle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Au Service de la Sécurité
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projets"
              className="px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 text-slate-950"
              style={{ backgroundColor: "#06B6D4" }}
            >
              Explorer mes projets
            </a>
            <a
              href="/CV_Elie.pdf"
              download="CV_ANTSONILAINA_Elie.pdf"
              className="px-8 py-4 rounded-xl font-bold border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800/50 transition duration-200 flex items-center gap-2"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Effets lumineux */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      </section>

      {/* À Propos */}
      <section id="apropos" className="py-24 px-6 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">
            <span className="text-cyan-400">01. </span>À Propos de moi
          </h2>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Texte descriptif */}
            <div className="md:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Moi c'est <span className="text-slate-100 font-semibold">{personalInfo.firstName} {personalInfo.lastName}</span>. Passionné par l'interaction synergique entre l'Intelligence Artificielle et les systèmes connectés, je m'efforce de concevoir des solutions technologiques robustes et sécurisées dès la conception.
              </p>
              <p>
                Actuellement en Master 1 Mention IA (Parcours Objets Connectés et Cybersécurité) au sein de l'<span className="text-cyan-400 font-medium">École Nationale d'Informatique (ENI) de Fianarantsoa</span>, j'allie rigueur mathématique et développement agile pour concrétiser des projets à fort impact numérique.
              </p>
            </div>

            {/* Colonne Photo Professionnelle avec effet néon cyber */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
                
                <div className="relative p-1.5 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 group-hover:from-cyan-400 group-hover:to-blue-500 transition duration-500 shadow-2xl">
                  <img
                    src="elie.jpg"
                    alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                    className="w-56 h-56 rounded-full object-cover group-hover:scale-[1.01] transition duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      document.getElementById('avatar-fallback').style.display = 'flex';
                    }}
                  />
                  <div
                    id="avatar-fallback"
                    className="hidden w-56 h-56 rounded-full bg-slate-900 items-center justify-center border border-slate-800 text-slate-500 text-sm text-center px-4"
                  >
                    Fichier "elie.jpg" introuvable dans /public
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-24 px-6 border-t border-slate-900" style={{ backgroundColor: "#090D16" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">
            <span className="text-cyan-400">02. </span>Projets Récents
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-800/60 p-6 hover:border-slate-700 bg-slate-950/60 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className="p-3 rounded-xl border"
                        style={{ backgroundColor: `${project.color}10`, borderColor: `${project.color}25` }}
                      >
                        <ProjectIcon size={24} style={{ color: project.color }} />
                      </div>
                      <div className="flex gap-3 text-slate-500">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.38-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: project.color }}>
                      {project.category}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium border border-slate-800 text-slate-400"
                          style={{ backgroundColor: "#0F172A" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className="text-xs font-semibold p-2.5 rounded-lg border border-slate-800 text-center"
                      style={{ backgroundColor: "rgba(15,23,42,0.4)", color: project.color }}
                    >
                      {project.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-24 px-6 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">
            <span className="text-cyan-400">03. </span>Compétences Techniques
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-900 bg-slate-950/80">
                <h3 className="text-md font-bold mb-4 text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800 bg-slate-900/30 text-slate-300 transition hover:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6 border-t border-slate-900 bg-[#070A12] text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Faisons équipe</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Mon profil correspond à vos besoins ? N'hésitez pas à me contacter pour discuter d'opportunités de stage, d'alternance ou de projets.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 transition bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md"
            >
              <Mail size={18} />
              Me contacter par Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 transition border border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800"
            >
              <svg className="w-5 h-5 fill-current text-sky-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Profil LinkedIn
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4 text-sm text-slate-500">
          <div>
            © 2026 {personalInfo.firstName} {personalInfo.lastName}. Déployé sur Vercel.
          </div>
          <div className="flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}