import React, { useState, useEffect } from "react";

const PALETTE = {
  lavender: "#A799CE",
  purple: "#8370B3",
  darkPurple: "#47314E",
  orange: "#FCA35D",
  redOrange: "#EF5237",
  blue: "#3B82F6",
};

const PROFILE_DATA = {
  name: "Pedro Alejandro Chavez Rivero",
  role: "Estudiante de Ingeniería Tecnologias de Software",
  location: "UACAM - FDI",
  status: "En constante aprendizaje (creo).",
  bio: "El propósito de esta asignación para la materia de Diseño Web es elaborar un portafolio web en REACT que podamos enseñar a futuros empleadores, Aqui se muestran los trabajos mas destacados que realicé durante el semestre.",
  github: "https://github.com/65020-dev",
  email: "al065020@uacam.mx",
};

const PROJECTS_DATA = [
  {
    id: 1,
    code: "PRJ_01.SYS",
    title: "Escapa de Beyoncé",
    description:
      "Juego de navegador que me ayudó a familiarizarme con las estructuras básicas de JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/65020-dev/Ejercicio-Escapa-de-Beyonce",
    demoUrl: "https://65020-dev.github.io/Ejercicio-Escapa-de-Beyonce/",
    demoType: "play",
    demoLabel: "Jugar",
    featured: true,
  },
  {
    id: 2,
    code: "PRJ_02.SYS",
    title: "POROGALLETA",
    description:
      "Sitio web informativo de mi hobby favorito, la idea es que pueda servir como guía a personas que esten interesadas en el tema.",
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/65020-dev/Guia-informativa",
    demoUrl: "https://65020-dev.github.io/Guia-informativa/",
    demoType: "web",
    demoLabel: "Abrir Web",
    featured: false,
  },
  {
    id: 3,
    code: "PRJ_03.SYS",
    title: "Diseño Web: Red Social",
    description:
      "Maqueta de red social, es un mockup, es decir, únicamente contiene la interfaz, sin ningún tipo de funcionalidad.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/65020-dev/Dise-o_Web-RedS",
    demoUrl: "",
    demoType: "",
    demoLabel: "",
    featured: true,
  },
  {
    id: 4,
    code: "PRJ_04.SYS",
    title: "Mini DBeaver",
    description:
      "Cliente ligero de administración de bases de datos desarrollado en equipo para ejecutar consultas y gestionar tablas.",
    tech: ["Java", "SQL", "MariaDB"],
    repoUrl: "https://github.com/Mauricio75710/Mini_DBeaver",
    demoUrl: "",
    demoType: "",
    demoLabel: "",
    featured: true,
  },
];

const SKILLS_DATA = [
  { name: "React / JS", level: 20 },
  { name: "HTML5 & CSS3", level: 67 },
  { name: "Java / POO", level: 50 },
  { name: "SQL / MariaDB", level: 30 },
  { name: "Git & Linux", level: 67 },
];

function PixelIcon({ type }) {
  if (type === "about") {
    return (
      <svg width="34" height="34" viewBox="0 0 16 16" className="pixelated">
        <path
          d="M3 1 H10 L13 4 V15 H3 Z"
          fill={PALETTE.lavender}
          stroke={PALETTE.darkPurple}
          strokeWidth="1.2"
        />
        <path
          d="M10 1 V4 H13"
          fill="none"
          stroke={PALETTE.darkPurple}
          strokeWidth="1.2"
        />
        <rect x="5" y="5" width="4" height="1.4" fill={PALETTE.redOrange} />
        <rect x="5" y="8" width="6" height="1.2" fill={PALETTE.darkPurple} />
        <rect x="5" y="10.5" width="6" height="1.2" fill={PALETTE.darkPurple} />
        <rect x="5" y="13" width="4" height="1.2" fill={PALETTE.darkPurple} />
      </svg>
    );
  }
  if (type === "projects") {
    return (
      <svg width="34" height="34" viewBox="0 0 16 16" className="pixelated">
        <path
          d="M1 3 H6 L7.5 5 H15 V13 H1 Z"
          fill={PALETTE.orange}
          stroke={PALETTE.darkPurple}
          strokeWidth="1.2"
        />
        <rect x="1.6" y="11" width="12.8" height="1.6" fill={PALETTE.redOrange} />
        <rect x="7" y="7.2" width="2" height="2" fill={PALETTE.darkPurple} />
        <line x1="1" y1="5" x2="15" y2="5" stroke={PALETTE.darkPurple} strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === "skills") {
    return (
      <svg width="34" height="34" viewBox="0 0 16 16" className="pixelated">
        <rect
          x="2"
          y="1.5"
          width="12"
          height="13"
          fill={PALETTE.lavender}
          stroke={PALETTE.darkPurple}
          strokeWidth="1.2"
        />
        <rect
          x="3.8"
          y="3.2"
          width="8.4"
          height="6"
          fill={PALETTE.purple}
          stroke={PALETTE.darkPurple}
          strokeWidth="1"
        />
        <rect x="5.5" y="5" width="1.2" height="1.2" fill={PALETTE.orange} />
        <rect x="9.3" y="5" width="1.2" height="1.2" fill={PALETTE.orange} />
        <rect x="6.5" y="7.2" width="3" height="1" fill={PALETTE.orange} />
        <rect x="3.8" y="11.2" width="1.4" height="1.4" fill={PALETTE.redOrange} />
        <rect x="8.2" y="11.5" width="4" height="1" fill={PALETTE.darkPurple} />
      </svg>
    );
  }
  return (
    <svg width="34" height="34" viewBox="0 0 16 16" className="pixelated">
      <rect
        x="1.5"
        y="3"
        width="13"
        height="10"
        fill={PALETTE.lavender}
        stroke={PALETTE.darkPurple}
        strokeWidth="1.2"
      />
      <polyline
        points="1.5,3 8,8.5 14.5,3"
        fill="none"
        stroke={PALETTE.darkPurple}
        strokeWidth="1.2"
      />
      <rect x="7" y="7.5" width="2" height="1.5" fill={PALETTE.redOrange} />
      <rect x="10.5" y="9.8" width="2.5" height="1.6" fill={PALETTE.orange} />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" className="pixelated inline-block">
      <polygon points="2,1 11,6 2,11" fill="currentColor" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" className="pixelated inline-block">
      <rect x="4" y="1" width="6" height="1" fill="currentColor" />
      <rect x="2" y="2" width="2" height="1" fill="currentColor" />
      <rect x="10" y="2" width="2" height="1" fill="currentColor" />
      <rect x="1" y="4" width="1" height="6" fill="currentColor" />
      <rect x="12" y="4" width="1" height="6" fill="currentColor" />
      <rect x="2" y="11" width="2" height="1" fill="currentColor" />
      <rect x="10" y="11" width="2" height="1" fill="currentColor" />
      <rect x="4" y="12" width="6" height="1" fill="currentColor" />
      <rect x="2" y="6.5" width="10" height="1" fill="currentColor" />
      <rect x="6.5" y="2" width="1" height="10" fill="currentColor" />
      <rect x="4" y="3" width="1" height="8" fill="currentColor" />
      <rect x="9" y="3" width="1" height="8" fill="currentColor" />
    </svg>
  );
}

function RetroWindow({
  id,
  title,
  isOpen,
  isActive,
  zIndex,
  position,
  onClose,
  onFocus,
  onDragStart,
  children,
  widthClass = "md:w-[560px]",
}) {
  if (!isOpen) return null;

  return (
    <div
      onMouseDown={() => onFocus(id)}
      style={{
        zIndex,
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: PALETTE.lavender,
        borderColor: PALETTE.darkPurple,
        boxShadow: `6px 6px 0px ${PALETTE.darkPurple}`,
      }}
      className={`relative md:absolute w-full ${widthClass} border-2 mb-6 md:mb-0 select-none`}
    >
      <div
        onMouseDown={(e) => onDragStart(e, id)}
        style={{
          borderBottom: `2px solid ${PALETTE.darkPurple}`,
          background: isActive
            ? `repeating-linear-gradient(0deg, ${PALETTE.darkPurple}, ${PALETTE.darkPurple} 1px, ${PALETTE.lavender} 1px, ${PALETTE.lavender} 3px)`
            : PALETTE.lavender,
        }}
        className="flex items-center justify-between px-2 py-1.5 cursor-move"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
          aria-label={`Cerrar ${title}`}
          style={{
            backgroundColor: PALETTE.redOrange,
            borderColor: PALETTE.darkPurple,
            color: PALETTE.darkPurple,
          }}
          className="w-5 h-5 border-2 flex items-center justify-center font-pixel text-[8px] hover:brightness-110 active:translate-y-0.5 cursor-pointer"
        >
          X
        </button>

        <span
          style={{
            backgroundColor: PALETTE.lavender,
            color: PALETTE.darkPurple,
          }}
          className="px-3 py-0.5 font-pixel text-[10px] sm:text-xs tracking-wider uppercase truncate"
        >
          {title}
        </span>

        <div
          style={{
            backgroundColor: isActive ? PALETTE.orange : PALETTE.lavender,
            borderColor: PALETTE.darkPurple,
          }}
          className="w-5 h-5 border-2 flex items-center justify-center"
        >
          <div
            style={{ borderColor: PALETTE.darkPurple }}
            className="w-2.5 h-2.5 border"
          />
        </div>
      </div>

      <div
        style={{ color: PALETTE.darkPurple }}
        className="p-4 sm:p-5 max-h-[75vh] overflow-y-auto font-vt text-xl leading-snug select-text"
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [clock, setClock] = useState("");
  const [selectedTech, setSelectedTech] = useState("Todos");
  const [activeProject, setActiveProject] = useState(null);

  const [windows, setWindows] = useState({
    about: { isOpen: true, z: 3, x: 190, y: 35 },
    projects: { isOpen: true, z: 2, x: 780, y: 55 },
    skills: { isOpen: false, z: 1, x: 250, y: 120 },
    contact: { isOpen: false, z: 1, x: 310, y: 160 },
  });

  const [topZ, setTopZ] = useState(4);
  const [dragging, setDragging] = useState(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e) => {
      setWindows((prev) => ({
        ...prev,
        [dragging.id]: {
          ...prev[dragging.id],
          x: Math.max(0, e.clientX - dragging.offsetX),
          y: Math.max(0, e.clientY - dragging.offsetY),
        },
      }));
    };

    const handleMouseUp = () => setDragging(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const openWindow = (id) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, z: nextZ },
    }));
  };

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  };

  const focusWindow = (id) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], z: nextZ },
    }));
  };

  const handleDragStart = (e, id) => {
    if (window.innerWidth < 768) return;
    focusWindow(id);
    setDragging({
      id,
      offsetX: e.clientX - windows[id].x,
      offsetY: e.clientY - windows[id].y,
    });
  };

  const allTechs = [
    "Todos",
    ...Array.from(new Set(PROJECTS_DATA.flatMap((p) => p.tech))),
  ];

  const filteredProjects =
    selectedTech === "Todos"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.tech.includes(selectedTech));

  const highestZ = Math.max(
    ...Object.values(windows).map((w) => (w.isOpen ? w.z : 0))
  );

  return (
    <div
      style={{
        backgroundColor: PALETTE.lavender,
        backgroundImage: `
          linear-gradient(45deg, ${PALETTE.purple} 25%, transparent 25%),
          linear-gradient(-45deg, ${PALETTE.purple} 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, ${PALETTE.purple} 75%),
          linear-gradient(-45deg, transparent 75%, ${PALETTE.purple} 75%)
        `,
        backgroundSize: "4px 4px",
        backgroundPosition: "0 0, 0 2px, 2px -2px, -2px 0",
        color: PALETTE.darkPurple,
      }}
      className="min-h-screen w-full relative overflow-x-hidden flex flex-col"
    >
      <style>{`
        .font-pixel { font-family: 'Press Start 2P', monospace; }
        .font-vt { font-family: 'VT323', monospace; }
        .pixelated { image-rendering: pixelated; }
        .crt-overlay {
          background: repeating-linear-gradient(
            0deg,
            rgba(71, 49, 78, 0.14),
            rgba(71, 49, 78, 0.14) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
        }
      `}</style>

      {crtEnabled && (
        <div
          style={{ zIndex: 9999 }}
          className="crt-overlay fixed inset-0"
        />
      )}

      <header
        style={{
          backgroundColor: PALETTE.lavender,
          borderBottom: `2px solid ${PALETTE.darkPurple}`,
          zIndex: 9000,
        }}
        className="w-full px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 sticky top-0"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            style={{
              backgroundColor: PALETTE.orange,
              borderColor: PALETTE.darkPurple,
            }}
            className="px-2.5 py-1 border-2 font-pixel text-[10px] sm:text-xs flex items-center gap-2"
          >
            <img
              src="/gengar.gif"
              alt="AdesOS"
              className="w-4 h-4 pixelated object-contain"
            />
            AdesOS
          </span>

          <nav className="flex items-center gap-2 font-pixel text-[9px] sm:text-[10px]">
            {[
              { id: "about", label: "Sobre Mí" },
              { id: "projects", label: "Proyectos" },
              { id: "skills", label: "Habilidades" },
              { id: "contact", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => openWindow(item.id)}
                style={{
                  backgroundColor: windows[item.id].isOpen
                    ? PALETTE.darkPurple
                    : "transparent",
                  color: windows[item.id].isOpen
                    ? PALETTE.orange
                    : PALETTE.darkPurple,
                }}
                className="px-2.5 py-1.5 hover:underline cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCrtEnabled((prev) => !prev)}
            style={{
              backgroundColor: crtEnabled ? PALETTE.redOrange : PALETTE.purple,
              borderColor: PALETTE.darkPurple,
              color: PALETTE.orange,
            }}
            className="px-2.5 py-1 border-2 font-pixel text-[9px] cursor-pointer"
          >
            CRT:{crtEnabled ? "ON" : "OFF"}
          </button>
          <span
            style={{
              backgroundColor: PALETTE.purple,
              borderColor: PALETTE.darkPurple,
              color: PALETTE.lavender,
            }}
            className="px-2.5 py-1 border-2 font-pixel text-[9px] hidden sm:inline"
          >
            {clock}
          </span>
        </div>
      </header>

      <div className="flex-1 relative flex flex-col md:flex-row">
        <aside className="p-4 flex flex-row md:flex-col flex-wrap gap-5 z-10 md:w-36 items-start">
          {[
            { id: "about", label: "BIENVENIDA.TXT" },
            { id: "projects", label: "PROYECTOS_SEMESTRE/" },
            { id: "skills", label: "SKILLS.SYS" },
            { id: "contact", label: "CONTACTO.MAIL" },
          ].map((shortcut) => {
            const isOpen = windows[shortcut.id].isOpen;
            return (
              <button
                key={shortcut.id}
                onClick={() => openWindow(shortcut.id)}
                className="flex flex-col items-center gap-1.5 w-28 cursor-pointer group"
              >
                <div
                  style={{
                    backgroundColor: isOpen ? PALETTE.orange : PALETTE.lavender,
                    borderColor: PALETTE.darkPurple,
                    boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                  }}
                  className="w-16 h-16 border-2 flex items-center justify-center group-hover:brightness-105 active:translate-y-0.5"
                >
                  <PixelIcon type={shortcut.id} />
                </div>
                <span
                  style={{
                    backgroundColor: isOpen
                      ? PALETTE.darkPurple
                      : PALETTE.lavender,
                    color: isOpen ? PALETTE.orange : PALETTE.darkPurple,
                    borderColor: PALETTE.darkPurple,
                  }}
                  className="border px-1.5 py-0.5 font-pixel text-[8px] leading-tight text-center break-all w-full"
                >
                  {shortcut.label}
                </span>
              </button>
            );
          })}
        </aside>

        <main className="flex-1 relative px-4 pb-10 md:p-0">
          <RetroWindow
            id="about"
            title="BIENVENIDA.TXT"
            isOpen={windows.about.isOpen}
            isActive={windows.about.z === highestZ}
            zIndex={windows.about.z}
            position={{ x: windows.about.x, y: windows.about.y }}
            onClose={closeWindow}
            onFocus={focusWindow}
            onDragStart={handleDragStart}
            widthClass="md:w-[560px]"
          >
            <div
              style={{
                backgroundColor: PALETTE.purple,
                borderColor: PALETTE.darkPurple,
              }}
              className="border-2 p-4 mb-4 flex flex-col sm:flex-row items-center gap-4"
            >
              <div
                style={{
                  backgroundColor: PALETTE.orange,
                  borderColor: PALETTE.darkPurple,
                  boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                }}
                className="p-1.5 border-2 shrink-0"
              >
                <div
                  style={{
                    backgroundColor: PALETTE.purple,
                    borderColor: PALETTE.darkPurple,
                  }}
                  className="w-28 h-28 border-2 flex items-center justify-center p-1"
                >
                  <img
                    src="/gengar.gif"
                    alt="Avatar Gengar"
                    className="w-full h-full object-contain pixelated"
                  />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div
                  style={{
                    backgroundColor: PALETTE.orange,
                    borderColor: PALETTE.darkPurple,
                    color: PALETTE.darkPurple,
                  }}
                  className="border-2 px-2.5 py-1 font-pixel text-[8px] leading-relaxed mb-3 inline-block"
                >
                  • {PROFILE_DATA.status}
                </div>

                <h1
                  style={{ color: PALETTE.lavender }}
                  className="font-pixel text-sm sm:text-base leading-relaxed mb-2"
                >
                  {PROFILE_DATA.name}
                </h1>

                <p
                  style={{ color: PALETTE.darkPurple }}
                  className="font-vt text-2xl font-bold leading-tight mb-1"
                >
                  {PROFILE_DATA.role}
                </p>

                <p
                  style={{ color: PALETTE.lavender }}
                  className="font-vt text-lg"
                >
                  {PROFILE_DATA.location}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: PALETTE.lavender,
                borderColor: PALETTE.darkPurple,
                color: PALETTE.darkPurple,
              }}
              className="border-2 p-4 mb-4"
            >
              <p className="font-pixel text-[9px] mb-2">&gt; INFO.LOG</p>
              <p className="font-vt text-xl leading-snug">{PROFILE_DATA.bio}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openWindow("projects")}
                style={{
                  backgroundColor: PALETTE.redOrange,
                  borderColor: PALETTE.darkPurple,
                  color: PALETTE.lavender,
                  boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                }}
                className="border-2 px-4 py-2 font-pixel text-[9px] cursor-pointer hover:brightness-110 active:translate-y-0.5"
              >
                ★ Ver Proyectos
              </button>
              <button
                onClick={() => openWindow("contact")}
                style={{
                  backgroundColor: PALETTE.orange,
                  borderColor: PALETTE.darkPurple,
                  color: PALETTE.darkPurple,
                  boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                }}
                className="border-2 px-4 py-2 font-pixel text-[9px] cursor-pointer hover:brightness-110 active:translate-y-0.5"
              >
                ✉ Contacto
              </button>
              <button
                onClick={() => openWindow("skills")}
                style={{
                  backgroundColor: PALETTE.purple,
                  borderColor: PALETTE.darkPurple,
                  color: PALETTE.lavender,
                  boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                }}
                className="border-2 px-4 py-2 font-pixel text-[9px] cursor-pointer hover:brightness-110 active:translate-y-0.5"
              >
                ⚙ Ver Skills
              </button>
            </div>
          </RetroWindow>

          <RetroWindow
            id="projects"
            title="PROYECTOS_SEMESTRE/"
            isOpen={windows.projects.isOpen}
            isActive={windows.projects.z === highestZ}
            zIndex={windows.projects.z}
            position={{ x: windows.projects.x, y: windows.projects.y }}
            onClose={closeWindow}
            onFocus={focusWindow}
            onDragStart={handleDragStart}
            widthClass="md:w-[440px]"
          >
            <div className="flex items-center justify-between mb-3 text-lg">
              <span>{filteredProjects.length} elementos encontrados</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  style={{
                    backgroundColor:
                      selectedTech === tech ? PALETTE.redOrange : PALETTE.purple,
                    borderColor: PALETTE.darkPurple,
                    color: PALETTE.lavender,
                  }}
                  className="border-2 px-2 py-1 font-pixel text-[8px] cursor-pointer"
                >
                  {tech}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  style={{
                    backgroundColor: PALETTE.purple,
                    borderColor: PALETTE.darkPurple,
                    color: PALETTE.lavender,
                    boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                  }}
                  className="border-2 p-3"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className="font-pixel text-[9px]"
                      style={{ color: PALETTE.orange }}
                    >
                      {project.code}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          backgroundColor: PALETTE.redOrange,
                          color: PALETTE.lavender,
                        }}
                        className="px-1.5 py-0.5 font-pixel text-[8px]"
                      >
                        ★ TOP
                      </span>
                    )}
                  </div>

                  <h3 className="font-pixel text-xs sm:text-sm mb-1.5 text-white">
                    {project.title}
                  </h3>
                  <p className="text-xl mb-2.5 leading-snug">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          backgroundColor: PALETTE.orange,
                          color: PALETTE.darkPurple,
                        }}
                        className="px-2 py-0.5 text-base font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          backgroundColor:
                            project.demoType === "web"
                              ? PALETTE.blue
                              : PALETTE.redOrange,
                          borderColor: PALETTE.darkPurple,
                          color: "#FFFFFF",
                        }}
                        className="border-2 px-2.5 py-1 font-pixel text-[8px] flex items-center gap-1.5 hover:brightness-110"
                      >
                        {project.demoType === "web" ? <WebIcon /> : <PlayIcon />}
                        <span>{project.demoLabel || "Abrir"}</span>
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundColor: PALETTE.darkPurple,
                        color: PALETTE.orange,
                      }}
                      className="px-2.5 py-1.5 font-pixel text-[8px] hover:underline"
                    >
                      Ver en GitHub &gt;
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      style={{
                        backgroundColor: PALETTE.lavender,
                        color: PALETTE.darkPurple,
                      }}
                      className="px-2.5 py-1.5 font-pixel text-[8px] cursor-pointer"
                    >
                      Abrir detalles &gt;
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </RetroWindow>

          <RetroWindow
            id="skills"
            title="SKILLS.SYS"
            isOpen={windows.skills.isOpen}
            isActive={windows.skills.z === highestZ}
            zIndex={windows.skills.z}
            position={{ x: windows.skills.x, y: windows.skills.y }}
            onClose={closeWindow}
            onFocus={focusWindow}
            onDragStart={handleDragStart}
            widthClass="md:w-[400px]"
          >
            <div className="space-y-3">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-pixel text-[10px] mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: PALETTE.darkPurple,
                      borderColor: PALETTE.darkPurple,
                    }}
                    className="w-full h-5 border-2 p-0.5"
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: PALETTE.orange,
                      }}
                      className="h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </RetroWindow>

          <RetroWindow
            id="contact"
            title="CONTACTO.MAIL"
            isOpen={windows.contact.isOpen}
            isActive={windows.contact.z === highestZ}
            zIndex={windows.contact.z}
            position={{ x: windows.contact.x, y: windows.contact.y }}
            onClose={closeWindow}
            onFocus={focusWindow}
            onDragStart={handleDragStart}
            widthClass="md:w-[420px]"
          >
            <p className="mb-3 text-2xl">Contactame:</p>
            <div className="space-y-2.5">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: PALETTE.darkPurple,
                  color: PALETTE.orange,
                  boxShadow: `3px 3px 0px ${PALETTE.purple}`,
                }}
                className="block p-3 font-pixel text-[9px] text-center hover:brightness-110"
              >
                GitHub: github.com/65020-dev
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                style={{
                  backgroundColor: PALETTE.redOrange,
                  color: PALETTE.lavender,
                  boxShadow: `3px 3px 0px ${PALETTE.darkPurple}`,
                }}
                className="block p-3 font-pixel text-[9px] text-center hover:brightness-110"
              >
                Email: {PROFILE_DATA.email}
              </a>
            </div>
          </RetroWindow>
        </main>
      </div>

      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          style={{ zIndex: 9998 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: PALETTE.lavender,
              borderColor: PALETTE.darkPurple,
              boxShadow: `6px 6px 0px ${PALETTE.darkPurple}`,
            }}
            className="w-full max-w-md border-4 p-4 font-vt text-2xl"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-pixel text-xs">
                {activeProject.code}
              </span>
              <button
                onClick={() => setActiveProject(null)}
                style={{
                  backgroundColor: PALETTE.redOrange,
                  borderColor: PALETTE.darkPurple,
                }}
                className="border-2 px-2 py-0.5 font-pixel text-[10px] cursor-pointer"
              >
                X
              </button>
            </div>
            <h3 className="font-pixel text-sm mb-2">
              {activeProject.title}
            </h3>
            <p className="mb-4">{activeProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeProject.demoUrl && (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor:
                      activeProject.demoType === "web"
                        ? PALETTE.blue
                        : PALETTE.redOrange,
                    borderColor: PALETTE.darkPurple,
                    color: "#FFFFFF",
                  }}
                  className="border-2 inline-flex items-center gap-1.5 px-3 py-1.5 font-pixel text-[9px] hover:brightness-110"
                >
                  {activeProject.demoType === "web" ? (
                    <WebIcon />
                  ) : (
                    <PlayIcon />
                  )}
                  <span>{activeProject.demoLabel || "Abrir"}</span>
                </a>
              )}
              <a
                href={activeProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: PALETTE.darkPurple,
                  color: PALETTE.orange,
                }}
                className="inline-block px-3 py-2 font-pixel text-[9px]"
              >
                Abrir Repositorio en GitHub &gt;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}