/* ==========================================================================
   TABLERO — galería de las 17 piezas, ficha de arte y comparativa
   ========================================================================== */

const { useState, useEffect, useRef, useLayoutEffect, useCallback, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tipografia": "fraunces",
  "composicion": "top",
  "paleta": "marfil",
  "telefono": "22 27 10 79 08",
  "mostrarCotas": false,
  "foto": true
}/*EDITMODE-END*/;

/* ---------- escalado de la pieza dentro de su marco ---------- */

function Scaled({ children, width, height, base = 1080, onScale }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const s = el.clientWidth / base;
      setScale(s);
      if (onScale) onScale(s);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [base, onScale]);

  return (
    <div ref={ref} style={{ width: '100%', height: height * scale || undefined, position: 'relative' }}>
      <div style={{ width: base, height: base * (height / width), transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
        {children}
      </div>
    </div>
  );
}

/* ---------- tarjeta del tablero ---------- */

function Card({ piece, tweaks, onOpen }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.28);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1080));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <article className="card">
      <div className="card__frame" ref={ref} onClick={() => onOpen(piece)} role="button" tabIndex={0}
           onKeyDown={(e) => { if (e.key === 'Enter') onOpen(piece); }}
           aria-label={`Abrir pieza ${piece.n}: ${piece.servicio}`}>
        <div className="card__scaler" style={{ transform: `scale(${scale})` }}>
          <RPost piece={piece} tweaks={tweaks} />
        </div>
      </div>
      <div className="card__meta">
        <span className="card__n">{piece.n}</span>
        <div>
          <div className="card__t">{piece.servicio}</div>
          <div className="card__s">{labelFormato(piece.formato)} · {piece.linea === 'ia' ? 'Rendón IA' : 'Legal'}</div>
        </div>
      </div>
    </article>
  );
}

function labelFormato(f) {
  return ({
    portada: 'Portada', titular: 'Antes de firmar', clausula: 'Cláusula roja', retrato: 'Retrato · quién te atiende',
    marca: 'Sangrado tipográfico', checklist: 'Checklist de 3', documentos: 'Expediente',
    caso: 'Caso sin nombre', dato: 'Dato duro', cita: 'Cita editorial',
    tipografico: 'Tipográfico', energia: 'Energía', metodo: 'Método',
    cierre: 'Cómo empezar'
  })[f] || f;
}

/* ---------- ficha / detalle ---------- */

function Focus({ pieces, index, tweaks, onClose, onNav, onToast }) {
  const piece = pieces[index];
  const [tab, setTab] = useState('ig');
  const stageRef = useRef(null);
  const [scale, setScale] = useState(0.6);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const fit = () => {
      const s = Math.min((el.clientWidth - 60) / 1080, (el.clientHeight - 130) / 1350);
      setScale(Math.max(0.18, s));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNav]);

  useEffect(() => { setTab('ig'); }, [piece.id]);

  const texto = tab === 'fb' ? piece.captionFB : piece.captionIG;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      onToast('Copy copiado');
    } catch (e) {
      onToast('No se pudo copiar');
    }
  };

  const descargar = async () => {
    const nodo = document.querySelector(`[data-export="${piece.id}"] .rpost`);
    if (!nodo) { onToast('Pieza no encontrada'); return; }
    onToast('Generando PNG 1080 × 1350…');
    try {
      const dataUrl = await window.htmlToImage.toPng(nodo, {
        width: 1080, height: 1350, pixelRatio: 2,
        backgroundColor: 'transparent',
        style: { transform: 'none', transformOrigin: 'top left' }
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `Rendon-${piece.n}-${piece.id}.png`;
      a.click();
      onToast('PNG descargado');
    } catch (e) {
      console.error(e);
      onToast('Error al exportar');
    }
  };

  return (
    <div className="focus" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="focus__stage" ref={stageRef}>
        <div data-export={piece.id} style={{ width: 1080, height: 1350, transform: `scale(${scale})`, transformOrigin: 'center center', flex: '0 0 auto' }}>
          <RPost piece={piece} tweaks={tweaks} />
        </div>
        <div className="focus__nav" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => onNav(-1)} aria-label="Anterior">←</button>
          <span>{String(index + 1).padStart(2, '0')} / {pieces.length}</span>
          <button onClick={() => onNav(1)} aria-label="Siguiente">→</button>
        </div>
      </div>

      <aside className="focus__panel" onClick={(e) => e.stopPropagation()}>
        <div className="focus__top">
          <div>
            <h4>{piece.servicio}</h4>
            <p>Pieza {piece.n} · {labelFormato(piece.formato)} · {piece.persona}</p>
          </div>
          <button className="xbtn" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="focus__tabs">
          <button aria-pressed={tab === 'ig'} onClick={() => setTab('ig')}>Instagram</button>
          <button aria-pressed={tab === 'fb'} onClick={() => setTab('fb')}>Facebook</button>
          <button aria-pressed={tab === 'arte'} onClick={() => setTab('arte')}>Arte</button>
        </div>

        <div className="focus__copy">
          {tab === 'arte' ? (
            <ArteFicha piece={piece} tweaks={tweaks} />
          ) : (
            <>
              <pre>{texto}</pre>
              {piece.clave && tab === 'ig' && (
                <pre style={{ color: 'rgba(18,35,59,.5)', fontSize: 11.5 }}>
                  {`Primer comentario:\n${piece.clave} → WhatsApp ${tweaks.telefono}\nTarjeta digital: ${RENDON.tarjeta}`}
                </pre>
              )}
            </>
          )}
        </div>

        <div className="focus__acts">
          <button className="btn btn--solid" onClick={descargar}>Descargar PNG</button>
          <button className="btn" onClick={copiar}>Copiar copy</button>
          <button className="btn btn--ghost" onClick={async () => {
            await navigator.clipboard.writeText(`${texto}\n\n${RENDON.tarjeta}`);
            onToast('Copy + tarjeta copiados');
          }}>Copy + tarjeta</button>
        </div>
      </aside>
    </div>
  );
}

function ArteFicha({ piece, tweaks }) {
  const filas = [
    ['Formato', labelFormato(piece.formato)],
    ['Línea', piece.linea === 'ia' ? 'Rendón IA' : 'Legal'],
    ['Persona', piece.persona],
    ['Palabra clave', piece.clave || '—'],
    ['Titular', piece.titular.filter(Boolean).join(' / ')],
    ['Prueba', piece.prueba || '—'],
    ['Medida', '1080 × 1350 px · 4:5'],
    ['Márgenes', '92 px laterales · 84 px superior'],
    ['Display', { fraunces: 'Fraunces', newsreader: 'Newsreader', instrument: 'Instrument Serif' }[tweaks.tipografia]],
    ['Texto', 'Public Sans'],
    ['Paleta', tweaks.paleta],
    ['CTA', piece.clave ? `${piece.clave} → WhatsApp ${tweaks.telefono}` : `WhatsApp ${tweaks.telefono}`]
  ];
  return (
    <div>
      {filas.map(([k, v]) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 10, padding: '9px 0', borderBottom: '1px solid rgba(18,35,59,.09)' }}>
          <span style={{ fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(18,35,59,.46)', paddingTop: 2 }}>{k}</span>
          <span style={{ fontSize: 12.5, lineHeight: 1.45, color: 'rgba(18,35,59,.88)' }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- comparativa ---------- */

function Comparativa({ tweaks }) {
  return (
    <div className="cmp">
      {COMPARATIVA.map((row) => {
        const nueva = PIEZAS.find((p) => p.id === row.nuevo);
        return (
          <div className="cmp__row" key={row.id}>
            <div className="cmp__head">
              <h3>{row.tema}</h3>
              <span>La misma pieza, dos sistemas</span>
            </div>
            <div>
              <div className="cmp__lbl old">Template actual — 17 piezas ya producidas</div>
              <Scaled width={1080} height={1350}>
                <PieceVieja item={row.viejo} />
              </Scaled>
            </div>
            <div>
              <div className="cmp__lbl new">Sistema v2.1 — Editorial de despacho</div>
              <Scaled width={1080} height={1350}>
                <RPost piece={nueva} tweaks={tweaks} />
              </Scaled>
            </div>
            <p className="cmp__note">{row.nota}</p>
          </div>
        );
      })}
      <div style={{ maxWidth: 780, fontSize: 14, lineHeight: 1.62, color: 'rgba(18,35,59,.7)' }}>
        <p style={{ marginTop: 0 }}>
          <strong>Qué mirar:</strong> el template actual comunica el servicio y se apoya en un ícono de línea
          que cualquier despacho puede tener. El sistema v2.1 comunica el riesgo, usa el documento como prueba
          y tiene un dispositivo propio — la línea de firma — que no se puede confundir con un banco de imágenes.
        </p>
        <p>
          El template actual no es malo: es competente y es genérico. El diagnóstico §2.2 del Sistema lo dice
          con precisión: se lee como cualquier despacho, y eso en servicios profesionales cuesta credibilidad.
        </p>
      </div>
    </div>
  );
}

/* ---------- aplicación ---------- */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [vista, setVista] = useState(() => localStorage.getItem('rendon:vista') || 'serie');
  const [foco, setFoco] = useState(null);
  const [toast, setToast] = useState(null);
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => { localStorage.setItem('rendon:vista', vista); }, [vista]);

  useEffect(() => {
    if (!foco) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (foco.index !== null) {
      window.parent.postMessage({ slideIndexChanged: foco.index }, '*');
      localStorage.setItem('rendon:pieza', String(foco.index));
    }
    return () => { document.body.style.overflow = prev; };
  }, [foco]);

  const notificar = useCallback((m) => {
    setToast(m);
    window.clearTimeout(notificar._t);
    notificar._t = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const lista = useMemo(() => {
    if (filtro === 'todas') return PIEZAS;
    if (filtro === 'legal') return PIEZAS.filter((p) => p.linea === 'legal');
    if (filtro === 'ia') return PIEZAS.filter((p) => p.linea === 'ia');
    if (filtro === 'foto') return PIEZAS.filter((p) => p.formato === 'retrato' || p.formato === 'portada' || p.formato === 'cierre');
    if (filtro === 'b2b') return PIEZAS.filter((p) => /^[AB]/.test(p.persona) || p.persona === 'Todas');
    if (filtro === 'b2c') return PIEZAS.filter((p) => /^[C]/.test(p.persona) || p.persona === 'D' || p.persona.startsWith('D'));
    return PIEZAS;
  }, [filtro]);

  const abrir = (piece) => {
    const idx = PIEZAS.findIndex((p) => p.id === piece.id);
    setFoco({ index: idx });
  };

  const navegar = (delta) => {
    setFoco((f) => {
      if (!f) return f;
      const n = (f.index + delta + PIEZAS.length) % PIEZAS.length;
      return { index: n };
    });
  };

  return (
    <div className="board">
      <div className="bar">
        <div className="bar__id">
          <b>Rendón</b>
          <span>Serie 18 piezas · v2.1</span>
        </div>
        <div className="bar__spacer" />
        <div className="seg" role="group" aria-label="Vista">
          <button aria-pressed={vista === 'serie'} onClick={() => setVista('serie')}>Serie</button>
          <button aria-pressed={vista === 'comparativa'} onClick={() => setVista('comparativa')}>Comparativa</button>
        </div>
      </div>

      {vista === 'serie' ? (
        <>
          <div className="intro">
            <h1>Dieciocho piezas para <em>antes de firmar</em>.</h1>
            <p>
              Serie completa del catálogo bajo el Sistema de marca v2.1: papel marfil, tinta azul, latón y rojo lacre.
              Una sola idea por pieza, un solo CTA, ni una promesa de resultado.
            </p>
            <p style={{ fontSize: 13.5, color: 'rgba(18,35,59,.52)' }}>
              Catorce servicios canónicos + portada + método + cierre + «quién te atiende».
              El retrato es la única excepción al sistema tipográfico: aparece solo en tres piezas.
              Haz clic en cualquier pieza para ver el copy de Instagram y Facebook, la ficha de arte y descargar el PNG.
            </p>
          </div>

          <div className="chips" role="group" aria-label="Filtro">
            {[['todas', `Todas · ${PIEZAS.length}`], ['legal', 'Línea legal'], ['ia', 'Rendón IA'], ['b2b', 'B2B'], ['b2c', 'B2C'], ['foto', 'Con retrato']].map(([k, l]) => (
              <button key={k} className="chip" aria-pressed={filtro === k} onClick={() => setFiltro(k)}>{l}</button>
            ))}
          </div>

          <div className="grid">
            {lista.map((p) => <Card key={p.id} piece={p} tweaks={t} onOpen={abrir} />)}
          </div>
        </>
      ) : (
        <Comparativa tweaks={t} />
      )}

      {foco && (
        <Focus
          pieces={PIEZAS}
          index={foco.index}
          tweaks={t}
          onClose={() => setFoco(null)}
          onNav={navegar}
          onToast={notificar}
        />
      )}

      {toast && <div className="toast">{toast}</div>}

      <TweaksPanel>
        <TweakSection label="Tipografía" />
        <TweakSelect
          label="Display"
          value={t.tipografia}
          options={[
            { value: 'fraunces', label: 'Fraunces' },
            { value: 'newsreader', label: 'Newsreader' },
            { value: 'instrument', label: 'Instrument Serif' }
          ]}
          onChange={(v) => setTweak('tipografia', v)}
        />
        <TweakSection label="Composición" />
        <TweakRadio
          label="Titular"
          value={t.composicion}
          options={['top', 'bottom', 'bleed']}
          onChange={(v) => setTweak('composicion', v)}
        />
        <TweakSection label="Paleta" />
        <TweakRadio
          label="Fondo"
          value={t.paleta}
          options={['marfil', 'tinta', 'arena']}
          onChange={(v) => setTweak('paleta', v)}
        />
        <TweakSection label="Fotografía" />
        <TweakToggle
          label="Retrato en portada, 17 y cierre"
          value={t.foto !== false}
          onChange={(v) => setTweak('foto', v)}
        />
        <TweakSection label="CTA" />
        <TweakText label="Teléfono" value={t.telefono} onChange={(v) => setTweak('telefono', v)} />
        <TweakSuggestionBar suggestions={[
          'Cambia la tipografía a Newsreader y compárala',
          'Pon la composición en sangrado',
          'Prueba la paleta tinta dominante',
          '¿Cuál de las tres tipografías se lee mejor en celular?'
        ]} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
