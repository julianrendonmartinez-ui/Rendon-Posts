/* ==========================================================================
   COMPONENTES DE PIEZA — 1080 × 1350
   Cada formato del §8 del Sistema v2.1 renderizado en CSS puro.
   Paleta, tipografía y línea de firma vienen de --r-* (rendon.css).
   ========================================================================== */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ---------- marcas pequeñas ---------- */

function CheckMark() {
  return (
    <svg className="chk" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 21.5 L15.5 31 L34 8.5" stroke="#12233B" strokeWidth="3.2"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Seal({ size = 132, color = 'var(--r-accent)' }) {
  /* balanza reducida a sello institucional (§5.3: se degrada a sello) */
  return (
    <div className="seal" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="1.1" opacity=".55" />
        <circle cx="60" cy="60" r="49" stroke={color} strokeWidth=".6" opacity=".32" />
        <path d="M60 30 L60 82" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M34 42 L86 42" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="60" cy="28" r="3.4" stroke={color} strokeWidth="1.5" />
        <path d="M34 42 L25 60 h18 z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M86 42 L77 60 h18 z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M25 60 a9 9 0 0 0 18 0" stroke={color} strokeWidth="1.3" />
        <path d="M77 60 a9 9 0 0 0 18 0" stroke={color} strokeWidth="1.3" />
        <path d="M48 84 h24" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M44 90 h32" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function QrBadge({ big = false, label = 'Tarjeta digital' }) {
  const qr = window.QR_TARJETA;
  const lado = big ? 190 : 106;
  const pad = 6;
  const total = qr.size + pad * 2;
  return (
    <div className={big ? 'rpost__qr rpost__qr--big' : 'rpost__qr'}>
      <svg
        viewBox={`${-pad} ${-pad} ${total} ${total}`}
        width={lado} height={lado} role="img"
        aria-label="QR a la tarjeta digital del despacho"
        shapeRendering="crispEdges"
        style={{ display: 'block' }}
      >
        <rect x={-pad} y={-pad} width={total} height={total} fill="#FFFFFF" />
        <path d={qr.path} fill="#12233B" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

/* ---------- cabecera y pie ---------- */

function Head({ piece, meta }) {
  return (
    <header className="rpost__head">
      <div className="rpost__mark">
        <span>Consultoría Jurídica</span>
        <span>Estratégica Rendón</span>
      </div>
      <div className="rpost__meta">
        {piece.linea === 'ia' ? 'Rendón IA' : 'Legal'}
        <br />
        {meta}
      </div>
      <div className="rpost__head-rule" />
    </header>
  );
}

function Foot({ piece, phone }) {
  return (
    <footer className="rpost__foot">
      <div>
        {piece.clave && <p className="rpost__cta-k">{piece.clave} →</p>}
        <p className="rpost__cta">WhatsApp {phone}</p>
        <p className="rpost__cta-s">Diagnóstico sin costo y sin compromiso.</p>
      </div>
      <QrBadge />
    </footer>
  );
}

function Sign() { return <div className="rpost__sign" />; }

/* ---------- fotografía ---------- */

function Photo({ className, src, alt, label, tag }) {
  const [fallo, setFallo] = useState(false);
  return (
    <figure className={`rpost__photo ${className || ''}`}>
      {!fallo ? (
        <img src={src} alt={alt} onError={() => setFallo(true)} />
      ) : (
        <div className="rpost__photo-ph">retrato editorial · 4:5<br />arrastra la foto aquí</div>
      )}
      {tag && <figcaption className="rpost__photo-tag">{tag}</figcaption>}
    </figure>
  );
}

function Medallion({ src, alt, cap }) {
  const [fallo, setFallo] = useState(false);
  return (
    <div className="rpost__person">
      <div className="rpost__medallion">
        {!fallo
          ? <img src={src} alt={alt} onError={() => setFallo(true)} />
          : <span>foto</span>}
      </div>
      {cap && <p className="rpost__person-cap">{cap}</p>}
    </div>
  );
}

/* ---------- envoltorio ---------- */

const TYPE_KEY = { fraunces: 'Fraunces', newsreader: 'Newsreader', instrument: 'Instrument Serif' };

function RPost({ piece, tweaks }) {
  const display = TYPE_KEY[tweaks.tipografia] || 'Fraunces';
  const conFoto = tweaks.foto !== false;
  const cls = [
    'rpost',
    `f-${piece.formato}`,
    piece.formato === 'portada' && conFoto ? 'f-portada--foto' : '',
    tweaks.paleta === 'tinta' && piece.formato !== 'checklist' ? 'rpost--dark' : '',
    tweaks.paleta === 'arena' ? 'rpost--ia' : '',
    piece.invertida ? 'rpost--invert' : '',
    piece.formato === 'titular' ? `l-${tweaks.composicion}` : '',
    piece.id === 's9' ? 'f-clausula--margen' : ''
  ].filter(Boolean).join(' ');

  const style = { '--r-display': `'${display}', Georgia, serif` };
  const meta = `${piece.n} / 17`;
  const common = { piece, style, cls, meta, conFoto };

  return (
    <div className={cls} style={style} data-screen-label={`${piece.n} — ${piece.servicio}`}>
      <div className="rpost__vignette" />
      <div className="rpost__fiber" />
      <div className="rpost__texture" />
      {renderFormat(common, tweaks)}
      {piece.formato !== 'portada' && piece.formato !== 'cierre' && <Sign />}
    </div>
  );
}

function renderFormat({ piece, style, meta, conFoto }, tweaks) {
  const phone = tweaks.telefono || '22 27 10 79 08';

  switch (piece.formato) {

    /* 00 — portada */
    case 'portada':
      if (conFoto) return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <h1 className="rpost__wordmark">Rendón</h1>
            <p className="rpost__sub">Consultoría Jurídica<br />Estratégica</p>
            <div className="rpost__rule" />
            <p className="rpost__claim">Antes de firmar, certeza.</p>
          </div>
          <Photo
            className="rpost__photo--cover"
            src={RETRATO.src} alt={RETRATO.alt}
            tag={RETRATO.label}
          />
          <p className="rpost__place">Puebla, México<br />MMXXVI</p>
        </>
      );
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <h1 className="rpost__wordmark">Rendón</h1>
            <p className="rpost__sub">Consultoría Jurídica Estratégica</p>
            <div className="rpost__rule" />
            <p className="rpost__claim">Antes de firmar, certeza.</p>
          </div>
          <div className="rpost__seal"><Seal size={128} /></div>
          <footer className="rpost__foot" style={{ borderTop: 'none', justifyContent: 'flex-end', paddingTop: 12 }}>
            <p className="rpost__cta-s" style={{ margin: 0 }}>Puebla, México</p>
          </footer>
        </>
      );

    /* 01, 07, 08, 11 — titular de una línea */
    case 'titular':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow">{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>{l}</span>
              ))}
            </h1>
            <p className="rpost__p">{piece.cuerpo}</p>
            {piece.lista && (
              <ul className="rpost__list">
                {piece.lista.map((l) => <li key={l}>{l}</li>)}
              </ul>
            )}
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 02, 09 — cláusula roja */
    case 'clausula':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <div className="rpost__doc">
              <p className="rpost__doc-label">Cláusula — texto íntegro</p>
              <p className="rpost__quote">
                {piece.clausula.split(piece.resaltado).map((parte, i, arr) => (
                  <React.Fragment key={i}>
                    {parte}
                    {i < arr.length - 1 && <mark>{piece.resaltado}</mark>}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <p className="rpost__p">{piece.cuerpo}</p>
            <p className="rpost__proof" style={{ marginTop: 'auto', paddingTop: 26 }}>{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 03 — marca, sangrado tipográfico */
    case 'marca':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <div className="rpost__h" style={{ position: 'relative' }}>
              <span className="ghost" aria-hidden="true">®</span>
              <p className="rpost__eyebrow" style={{ marginBottom: 40, position: 'relative', zIndex: 2 }}>
                {piece.servicio}
              </p>
              {piece.titular.map((l, i) => (
                <span key={i} style={{ display: 'block', position: 'relative', zIndex: 2 }}>{l}</span>
              ))}
            </div>
            <p className="rpost__p">{piece.cuerpo}</p>
          </div>
          <p className="rpost__proof" style={{ marginBottom: 24 }}>{piece.prueba}</p>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 05 — checklist de 3 */
    case 'checklist':
      return (
        <>
          <header className="rpost__head" style={{ marginBottom: 44 }}>
            <div className="rpost__mark">
              <span>Consultoría Jurídica</span>
              <span><b>Estratégica Rendón</b></span>
            </div>
            <div className="rpost__meta">Legal<br />{meta}</div>
          </header>
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 34 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <div className="rpost__sheet">
              <ul className="rpost__items">
                {piece.items.map(([t, d]) => (
                  <li key={t}>
                    <CheckMark />
                    <div>
                      <strong>{t}</strong>
                      <em>{d}</em>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="rpost__sheet-rule" />
            </div>
            {piece.prueba && <p className="rpost__proof rpost__proof--sheet">{piece.prueba}</p>}
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 10 — expediente numerado */
    case 'documentos':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 28 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <ul className="rpost__ledger">
              {piece.items.map(([n, t, d]) => (
                <li key={n}>
                  <span className="num">{n}</span>
                  <div>
                    <strong>{t}</strong>
                    <em>{d}</em>
                  </div>
                </li>
              ))}
            </ul>
            <p className="rpost__proof">{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 04 — caso sin nombre (texto editorial puro) */
    case 'caso':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 44 }}>{piece.servicio}</p>
            <p className="rpost__h">
              <span>Le ofrecieron tres años.</span>
              <span>Firmó el mismo día.</span>
              <span className="last">Lo que le correspondía era más.</span>
            </p>
            <div className="rpost__rule" />
            <p className="rpost__proof">{piece.cuerpo}</p>
          </div>
          <p className="rpost__tag">{RENDON.ilustrativo}</p>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 06 — dato duro */
    case 'dato':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body" style={{ position: 'relative' }}>
            <p className="rpost__eyebrow" style={{ marginBottom: 26 }}>{piece.servicio}</p>
            <p className="rpost__figure">{piece.dato}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <p className="rpost__p">{piece.cuerpo}</p>
            <p className="rpost__proof">{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 12 — cita editorial */
    case 'cita':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow">{piece.servicio}</p>
            <h1 className="rpost__h">
              <span className="q">“</span>
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <div className="rpost__rule" />
            <p className="rpost__proof">{piece.cuerpo}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 13 — tipográfico */
    case 'tipografico':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 36 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => (
                <span key={i} className={i === 2 ? 'strike' : ''} style={{ display: 'block' }}>{l}</span>
              ))}
            </h1>
            <p className="rpost__p">{piece.cuerpo}</p>
            <p className="rpost__proof">{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 14 — energía */
    case 'energia':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 34 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              <span style={{ display: 'block' }}>{piece.titular[0]}</span>
              <span className="hi">{piece.titular[1]}</span>
              <span style={{ display: 'block' }}>{piece.titular[2]}</span>
              <span style={{ display: 'block', color: 'var(--r-accent)' }}>{piece.titular[3]}</span>
            </h1>
            <p className="rpost__p">{piece.cuerpo}</p>
            <p className="rpost__proof">{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 15 — método */
    case 'metodo':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 28 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <ol className="rpost__steps">
              {piece.items.map(([n, t, d]) => (
                <li key={n}>
                  <span className="num">{n}</span>
                  <strong>{t}</strong>
                  <em>{d}</em>
                </li>
              ))}
            </ol>
            <p className="rpost__proof">{piece.prueba}</p>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 17 — retrato: quién te atiende */
    case 'retrato':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow">{piece.servicio}</p>
            <div className="rpost__cols">
              <div>
                <h1 className="rpost__h">
                  {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
                </h1>
                <p className="rpost__p">{piece.cuerpo}</p>
                <p className="rpost__proof">{piece.prueba}</p>
              </div>
              {conFoto && (
                <Photo
                  className="rpost__photo--band"
                  src={RETRATO.src} alt={RETRATO.alt}
                  tag={RETRATO.label}
                />
              )}
            </div>
          </div>
          <Foot piece={piece} phone={phone} />
        </>
      );

    /* 16 — cierre / cómo empezar */
    case 'cierre':
      return (
        <>
          <Head piece={piece} meta={meta} />
          <div className="rpost__body">
            <p className="rpost__eyebrow" style={{ marginBottom: 26 }}>{piece.servicio}</p>
            <h1 className="rpost__h">
              {piece.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h1>
            <p className="rpost__p">{piece.cuerpo}</p>
            <ul className="rpost__words">
              {piece.palabras.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          {conFoto && (
            <Medallion src={RETRATO.src} alt={RETRATO.alt} cap={RETRATO.pie} />
          )}
          <footer className="rpost__foot" style={{ alignItems: 'center' }}>
            <div>
              <p className="rpost__cta-k">WhatsApp directo</p>
              <p className="rpost__cta" style={{ fontSize: 40 }}>{phone}</p>
              <p className="rpost__cta-s">Puebla y zona metropolitana</p>
            </div>
            <QrBadge big label="Tarjeta digital" />
          </footer>
          <Sign />
        </>
      );
  }
  return null;
}

/* ---------- comparativa: template anterior ---------- */

function PieceVieja({ item }) {
  /* Reproducción del template que el Sistema v2.1 pide retirar:
     mitades marfil/azul marino, píldora dorada, íconos de línea. */
  const icons = {
    documento: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <path d="M18 8h30l16 16v48H18z" stroke="#D9A63C" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M48 8v16h16" stroke="#D9A63C" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M27 38h26M27 48h26M27 58h16" stroke="#D9A63C" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    lupa: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <circle cx="34" cy="34" r="21" stroke="#D9A63C" strokeWidth="2.4" />
        <path d="M50 50l18 18" stroke="#D9A63C" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M26 30h16M26 38h11" stroke="#D9A63C" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    escudo: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
        <path d="M40 6l26 10v24c0 16-11 28-26 34C25 68 14 56 14 40V16z" stroke="#D9A63C" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M40 24v22M29 34h22" stroke="#D9A63C" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  };

  return (
    <div style={{
      width: 1080, height: 1350, background: '#FBF7EE', position: 'relative',
      display: 'flex', flexDirection: 'column', fontFamily: "'Public Sans', sans-serif"
    }}>
      {/* cabecera con isotipo de balanza en círculo dorado */}
      <div style={{ padding: '58px 64px 0', display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{
          width: 62, height: 62, borderRadius: '50%', background: '#D9A63C',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto'
        }}>
          <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
            <path d="M20 8v22M11 14h18" stroke="#FBF7EE" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 14l-4 7h8zM29 14l-4 7h8z" stroke="#FBF7EE" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M15 32h10" stroke="#FBF7EE" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{
          fontSize: 20, lineHeight: 1.28, letterSpacing: '.10em',
          color: '#1B2444', fontWeight: 500, textTransform: 'uppercase'
        }}>
          Consultoría Jurídica<br />Estratégica Rendón
        </div>
      </div>

      {/* bloque superior marfil */}
      <div style={{ padding: '104px 64px 0', flex: '1 1 auto' }}>
        <div style={{
          fontSize: 21, letterSpacing: '.16em', textTransform: 'uppercase',
          color: '#D9A63C', fontWeight: 600, marginBottom: 46
        }}>
          {item.servicio}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 26 }}>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontSize: 82, lineHeight: 1.06,
            color: '#1B2444', margin: 0, fontWeight: 500, letterSpacing: 0, flex: '1 1 auto'
          }}>
            {item.titular.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
          </h2>
          <div style={{ flex: '0 0 auto', marginTop: 8 }}>{icons[item.icono]}</div>
        </div>
      </div>

      {/* banda inferior azul marino */}
      <div style={{ background: '#1B2444', padding: '44px 64px 34px' }}>
        <div style={{
          fontSize: 20, letterSpacing: '.19em', textTransform: 'uppercase',
          color: '#E8E2D2', fontWeight: 500, marginBottom: 40
        }}>
          {item.keywords}
        </div>
        <div style={{
          display: 'inline-block', background: '#E9C463', color: '#1B2444',
          borderRadius: 999, padding: '14px 30px', fontSize: 24, fontWeight: 600,
          letterSpacing: '.01em'
        }}>
          Asesoría directa · 22 27 10 79 08
        </div>
        <div style={{
          fontSize: 14, letterSpacing: '.18em', textTransform: 'uppercase',
          color: 'rgba(232,226,210,.52)', marginTop: 34
        }}>
          Consultoría Jurídica Estratégica Rendón · Puebla
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  RPost, PieceVieja, Seal, QrBadge, CheckMark, TYPE_KEY, Photo, Medallion
});
