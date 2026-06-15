import React, { useState, useEffect } from 'react';
// Nettoyage des imports inutilisés et remplacement de Github par Code
import { Menu, X, Code, Mail, ExternalLink, Share2 } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Nettoyage de scrollY et activeProject qui n'étaient pas lus
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      category: "IA + IoT",
      description: "Système embarqué de reconnaissance faciale temps réel sur Raspberry Pi avec modèle TensorFlow optimisé. Déploiement sécurisé avec chiffrement des données.",
      technologies: ["TensorFlow", "Python", "Raspberry Pi", "OpenCV", "MQTT"],
      impact: "Latence < 200ms | Accuracy 96% | Consommation 2W",
      color: "#87CEEB",
      image: "🤖"
    },
    {
      id: 2,
      title: "Application Mobile de Monitoring IoT",
      category: "Mobile + IoT",
      description: "Application Flutter pour surveiller et contrôler des capteurs IoT en temps réel. Dashboard avec graphiques dynamiques et alertes intelligentes.",
      technologies: ["Flutter", "Dart", "Firebase", "Charts", "Real-time Database"],
      impact: "500+ objets connectés | Sync instantané | Mode offline",
      color: "#F4A6D3",
      image: "📱"
    },
    {
      id: 3,
      title: "Audit de Sécurité & Hardening Réseau",
      category: "Cybersécurité",
      description: "Audit complet d'infrastructure réseau, identification de vulnérabilités critiques et implémentation de mesures de sécurité. Rapport détaillé avec remédiation.",
      technologies: ["Nmap", "Wireshark", "Burp Suite", "Linux", "Firewall Config"],
      impact: "23 vulnérabilités corrigées | Score A+ | 0 faux positif",
      color: "#A8D5BA",
      image: "🔐"
    },
    {
      id: 4,
      title: "Détection d'Anomalies Machine Learning",
      category: "IA + Cybersécurité",
      description: "Modèle ML pour détecter les anomalies dans les logs réseau. Utilisé pour identifier les attaques DDoS et intrusions non conventionnelles.",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "ElasticSearch"],
      impact: "Détection 94% | False Positives < 2% | 1M logs/jour",
      color: "#FFD4A3",
      image: "🔍"
    }
  ];

  const skills = [
    { category: "IA & Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"] },
    { category: "IoT & Systèmes", items: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Embedded Linux"] },
    { category: "Cybersécurité", items: ["Pentesting", "Network Security", "Cryptographie", "Security Audit", "Forensics"] },
    { category: "Développement", items: ["Python", "Java", "Dart (Flutter)", "C++", "JavaScript/React"] }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFAF5" }}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(255, 250, 245, 0.95)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: "#87CEEB" }}>
            IA.dev
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:font-semibold transition"
                style={{ color: "#555" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: "#E8D4E0" }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-6 py-3 border-b"
                style={{ borderColor: "#E8D4E0", color: "#555" }}
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
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(135,206,235,0.12) 0%, rgba(244,166,211,0.12) 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              backgroundImage: "linear-gradient(135deg, #87CEEB, #F4A6D3, #A8D5BA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Intelligence<br />en Action
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#666" }}>
            Étudiant M1 IA à l'ENI Madagascar | Spécialiste IoT, Computer Vision & Cybersécurité
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projets"
              className="px-8 py-3 rounded-lg font-semibold transition hover:shadow-lg text-center"
              style={{ backgroundColor: "#87CEEB", color: "white" }}
            >
              Voir mes projets
            </a>
            <button
              className="px-8 py-3 rounded-lg font-semibold border-2 transition hover:bg-gray-50"
              style={{ borderColor: "#F4A6D3", color: "#F4A6D3" }}
            >
              Télécharger CV
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: "#F4A6D3", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-20"
          style={{ backgroundColor: "#87CEEB", filter: "blur(40px)" }}
        />
      </section>

      {/* À Propos */}
      <section id="apropos" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#555" }}>
            Qui suis-je ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#666" }}>
                Passionné par l'<span className="font-semibold" style={{ color: "#87CEEB" }}>Intelligence Artificielle</span> et ses applications concrètes. Je combine l'IA avec l'IoT et la cybersécurité pour créer des solutions robustes et sécurisées.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#666" }}>
                En tant qu'étudiant en M1 Mention IA au parcours Objet Connecté et Cybersécurité, j'ai développé une expertise multidisciplinaire à travers des projets concrets.
              </p>
              <p className="text-lg" style={{ color: "#666" }}>
                Je recherche une <span className="font-semibold" style={{ color: "#F4A6D3" }}>alternance</span> ou un <span className="font-semibold" style={{ color: "#F4A6D3" }}>stage</span> pour mettre mes compétences au service de défis technologiques impactants.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projets", value: "12+" },
                { label: "Langages", value: "7" },
                { label: "Domaines", value: "3" },
                { label: "Expérience", value: "2+ ans" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: "#F4F1EA" }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#87CEEB" }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#999" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-20 px-6" style={{ backgroundColor: "#F4F1EA" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "#555" }}>
            Projets Phares
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                style={{ backgroundColor: "white" }}
              >
                {/* Header */}
                <div
                  className="h-32 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: `${project.color}30` }}
                >
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="text-sm font-semibold mb-3 inline-block px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: "#555" }}>
                    {project.title}
                  </h3>

                  <p className="mb-4" style={{ color: "#777" }}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: "#F4F1EA", color: "#555" }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs" style={{ color: "#999" }}>
                          +{project.technologies.length - 3} plus
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="text-sm font-semibold mb-4 p-3 rounded-lg"
                    style={{ backgroundColor: `${project.color}15`, color: project.color }}
                  >
                    {project.impact}
                  </div>

                  <button
                    className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                    style={{
                      backgroundColor: project.color,
                      color: "white"
                    }}
                  >
                    <span>Voir le détail</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "#555" }}>
            Compétences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-4" style={{ color: "#87CEEB" }}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition hover:shadow-md"
                      style={{ backgroundColor: "#F4F1EA", color: "#555" }}
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
      <section
        id="contact"
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, rgba(135,206,235,0.12) 0%, rgba(244,166,211,0.12) 100%)"
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#555" }}>
            Intéressé pour collaborer ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#666" }}>
            Contactez-moi pour discuter d'opportunités de stage, alternance ou de projets passionnants.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition hover:shadow-lg"
              style={{ backgroundColor: "#87CEEB", color: "white" }}
            >
              <Mail size={20} />
              Envoyer un email
            </button>
            {/* Correction ESLint : Changement du href="#" vide par un lien vers la section contact ou une adresse réelle */}
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition border-2"
              style={{ borderColor: "#F4A6D3", color: "#F4A6D3" }}
            >
              <Share2 size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t" style={{ borderColor: "#E8D4E0" }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div style={{ color: "#999" }}>
            © 2026 Portfolio. Créé avec React & passion.
          </div>
          <div className="flex gap-6">
            {[
              { icon: Code, label: "GitHub" },
              { icon: Share2, label: "LinkedIn" },
              { icon: Mail, label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={`#${social.label.toLowerCase()}`}
                className="transition hover:scale-110"
                style={{ color: "#87CEEB" }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}