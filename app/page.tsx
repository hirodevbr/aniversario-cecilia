'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  done: boolean;
};

type Heart = {
  id: number;
  emoji: string;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
};

const targetMillis = new Date('2026-01-15T00:00:00-03:00').getTime();

function formatCountdown(diff: number): Countdown {
  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      done: true,
    };
  }
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(secs),
    done: false,
  };
}

function generateHearts(): Heart[] {
  const emojis = ['💖', '✨', '💗', '🌸', '💘', '🪽'];
  const total = 18;
  return Array.from({ length: total }, (_, idx) => ({
    id: idx,
    emoji: emojis[idx % emojis.length],
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 40}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${10 + Math.random() * 6}s`,
  }));
}

export default function HomePage() {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    formatCountdown(targetMillis - Date.now())
  );
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [typing, setTyping] = useState(false);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [typingComplete, setTypingComplete] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const letterLines = useMemo(
    () => [
      'Minha Cecilia,',
      'Você transforma cada manhã em uma nova aventura, como se Mondstadt tivesse descido para perto da gente.',
      'Seu riso é minha trilha sonora favorita, e seus olhos são a constelação que guia meu caminho.',
      'Prometo ser o viajante que nunca larga sua mão, em cada missão, cada festa, cada silêncio confortável.',
      'Feliz aniversário, meu amor. Obrigado por existir, por cuidar, por ser simplesmente você.',
      'Com todo meu coração, para sempre seu.',
    ],
    []
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setCountdown(formatCountdown(targetMillis - Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setHearts(generateHearts());
  }, []);

  useEffect(
    () => () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    },
    []
  );

  const startTyping = () => {
    if (typing) return;
    setTyping(true);
    setTypingComplete(false);
    setTypedLines(Array(letterLines.length).fill(''));
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current = [];

    const typeLine = (lineIndex: number) => {
      if (lineIndex >= letterLines.length) {
        setTyping(false);
        setTypingComplete(true);
        return;
      }
      const chars = [...letterLines[lineIndex]];
      let acc = '';
      const step = () => {
        acc += chars.shift() ?? '';
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = acc;
          return next;
        });
        if (chars.length > 0) {
          const id = window.setTimeout(step, 22);
          timeoutsRef.current.push(id);
        } else {
          const id = window.setTimeout(() => typeLine(lineIndex + 1), 300);
          timeoutsRef.current.push(id);
        }
      };
      step();
    };

    typeLine(0);
  };

  const handleReveal = () => {
    if (!countdown.done || typing || revealed) return;
    setRevealed(true);
    startTyping();
  };

  const handleClose = () => {
    setRevealed(false);
    setTyping(false);
    setTypingComplete(false);
    setTypedLines([]);
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current = [];
  };

  const lockedText = countdown.done
    ? 'Chegou a hora! Clique para abrir e sentir meu carinho. 💚'
    : 'O presente abre quando der meia-noite em Brasília. Estou contando os segundos para te ver sorrir! 💜';

  const poem = [
    'Entre ventos suaves de Mondstadt,',
    'ouço seu riso como harpa de Barbatos.',
    'Sua luz colore meu mapa, constelação que guio,',
    'e cada passo com você é tesouro que não tem preço.',
  ];

  const promessas = [
    'Ser seu player 2 em toda quest e em todo silêncio confortável.',
    'Guardar seu riso como música rara de evento limitado.',
    'Fazer café quentinho e abraços demorados em manhãs frias.',
    'Lembrar de comprar flores mesmo quando não houver motivo.',
    'Celebrar cada vitória sua como se fosse banner 5★ garantido.',
  ];

  const momentos = [
    'Pôr do sol na praia com vento de Mondstadt imaginário.',
    'Piquenique noturno com luzinhas e playlist lo-fi.',
    'Sessão de fotos boba com poses de personagens favoritos.',
    'Caminhada ouvindo trilhas de Liyue enquanto contamos sonhos.',
  ];

  const motivos = [
    'Seu jeito doce que transforma qualquer dia difícil.',
    'Seus olhos que brilham como constelação recém-desbloqueada.',
    'Seu abraço que parece um domínio seguro e protegido.',
    'Sua risada que ecoa como trilha sonora de aventura.',
    'Seu cuidado delicado, detalhe por detalhe.',
    'Sua coragem de explorar o novo, sempre de mãos dadas.',
    'Seu carinho com cada pessoa que você ama.',
    'Seu coração generoso, mais raro que artefato perfeito.',
    'Seu humor que me faz querer pausar o tempo.',
    'Seu nome, Cecilia, que já soa como poesia.',
  ];

  const poemAurora = [
    'Aurora rosada no horizonte de Teyvat,',
    'você é a primeira luz que espanta o frio da manhã.',
    'Cada passo com você é bênção,',
    'cada olhar seu, um waypoint seguro para voltar.',
  ];

  const poemVento = [
    'Se o vento de Mondstadt sussurrar seu nome,',
    'vou seguir a brisa até te encontrar.',
    'E ali, entre flores de Cecilia,',
    'vou dizer baixinho: meu lar é onde você está.',
  ];

  const chicagoExcerpt = [
    '"I met her on my way to Chicago..."',
    '"...she waited for me, quietly, like a secret skyline."',
  ];

  const characters = [
    {
      name: 'Columbina',
      description: 'A nova personagem que você está esperando ansiosamente!',
      emoji: '🕊️',
      color: '#ffb6c1',
      image: '/characters/Columbina.gif',
    },
    {
      name: 'Raiden Shogun',
      description: 'A poderosa Shogun de Inazuma',
      emoji: '⚡',
      color: '#dda0dd',
      image: '/characters/RaidenShogun.gif',
    },
    {
      name: 'Yae Miko',
      description: 'A astuta Guuji do Grande Santuário',
      emoji: '🦊',
      color: '#ffb6c1',
      image: '/characters/YaeMiko.gif',
    },
    {
      name: 'Ganyu',
      description: 'A doce secretária de Liyue',
      emoji: '❄️',
      color: '#b0e0e6',
      image: '/characters/Ganyu.gif',
    },
    {
      name: 'Hu Tao',
      description: 'A brincalhona diretora do Serviço Funerário',
      emoji: '🔥',
      color: '#ff69b4',
      image: '/characters/HuTao.gif',
    },
    {
      name: 'Ayaka',
      description: 'A elegante Princesa de Inazuma',
      emoji: '❄️',
      color: '#e0e6ff',
      image: '/characters/Ayaka.gif',
    },
  ];

  const isLocked = !countdown.done;

  return (
    <main className="frame" id="frame">
      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            style={{
              left: heart.left,
              bottom: heart.bottom,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      {/* Header sempre visível */}
      <div className="header">
        <p className="title">Para a maravilhosa Cecilia Zhang Yuan</p>
        <p className="subtitle">
          Contagem romântica até 15/01/2026 · Horário de Brasília (UTC-3)
        </p>
        <div className="genshin-tag">🍃 Inspiração Genshin · "Ventos de Mondstadt"</div>
      </div>

      {/* Contador sempre visível - SEM blur */}
      <div className="hero">
        <div className="countdown-card countdown-always-visible">
          <h2>Faltam apenas...</h2>
          <div className="timer" id="timer">
            <div className="unit">
              <span className="number" id="days">
                {countdown.days}
              </span>
              <span className="label">dias</span>
            </div>
            <div className="unit">
              <span className="number" id="hours">
                {countdown.hours}
              </span>
              <span className="label">horas</span>
            </div>
            <div className="unit">
              <span className="number" id="minutes">
                {countdown.minutes}
              </span>
              <span className="label">min</span>
            </div>
            <div className="unit">
              <span className="number" id="seconds">
                {countdown.seconds}
              </span>
              <span className="label">seg</span>
            </div>
          </div>
          <div className="locked" id="lockedHint">
            <span
              className="dot"
              style={
                countdown.done
                  ? { background: '#4ade80', boxShadow: '0 0 10px rgba(74,222,128,0.8)' }
                  : undefined
              }
            />
            <span>{lockedText}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo bloqueado - completamente escondido quando bloqueado */}
      <div className={`content-wrapper ${isLocked ? 'content-locked' : ''}`}>
        {/* Overlay de bloqueio - só aparece quando bloqueado */}
        {isLocked && (
          <div className="content-lock-overlay" aria-hidden="true">
            <div className="lock-box">
              <h3>Presente Selado</h3>
              <p>
                Segurando a ansiedade até o grande dia... Quando der meia-noite em Brasília, tudo aqui
                vai se iluminar para você, Cecilia! 🌟
              </p>
            </div>
          </div>
        )}
        <div className="hero" style={{ marginTop: -6 }}>
          <div className="letter-card" id="letterCard">
            <h2>Cartinha para você</h2>
            {!revealed && (
              <>
                <p>
                  Minha Cecilia, cada dia ao seu lado é como explorar um novo reino mágico. Você é
                  minha aventureira favorita, minha luz em cada missão.
                </p>
                <p>
                  Quando o relógio chegar ao momento certo, este site se abre como uma nova fase — e
                  eu estarei aqui, seu player 2, pronto para celebrar cada segundo com você.
                </p>
              </>
            )}
            {revealed && (
              <div aria-live="polite">
                {typedLines.map((line, idx) => (
                  <p className="typed-line" key={idx}>
                    {line}
                  </p>
                ))}
              </div>
            )}
            <p className="signature">Com todo amor, seu para sempre.</p>
            <button
              className="reveal"
              id="revealBtn"
              onClick={revealed && typingComplete ? handleClose : handleReveal}
              disabled={!countdown.done || typing || (revealed && !typingComplete)}
            >
              {!countdown.done
                ? 'Bloqueado até 15/01/2026'
                : revealed && typingComplete
                  ? 'Fechar presente'
                  : revealed && typing
                    ? 'Abrindo...'
                    : 'Abrir presente agora'}
            </button>
          </div>
        </div>

        <div className="hero" style={{ marginTop: -6 }}>
          <div className="extras">
            <div className="mini-card">
              <div className="tagline">🌸 Poema para Cecilia</div>
              {poem.map((line, idx) => (
                <p className="quote" key={idx}>
                  "{line}"
                </p>
              ))}
            </div>

            <div className="mini-card">
              <div className="tagline">💜 5 promessas</div>
              <ul className="list">
                {promessas.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="mini-card">
              <div className="tagline">🪽 Momentos que quero viver com você</div>
              <ul className="list">
                {momentos.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="mini-card">
              <div className="tagline">🍃 10 motivos de te amar</div>
              <ul className="list">
                {motivos.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="mini-card">
              <div className="tagline">🌌 Poema Aurora</div>
              {poemAurora.map((line, idx) => (
                <p className="quote" key={idx}>
                  "{line}"
                </p>
              ))}
            </div>

            <div className="mini-card">
              <div className="tagline">🍃 Poema do Vento</div>
              {poemVento.map((line, idx) => (
                <p className="quote" key={idx}>
                  "{line}"
                </p>
              ))}
            </div>

            <div className="mini-card">
              <div className="tagline">🎧 Trilha para a nossa noite</div>
              <p>
                Escolhi uma vibe calma, como se o vento de Mondstadt passasse no quarto.
                Quando der a hora, dá play:
              </p>
              <div className="pill-row">
                <span className="pill">"Theme of Mondstadt"</span>
                <span className="pill">"Tender Strength"</span>
                <span className="pill">"Another Hopeful Tomorrow"</span>
                <span className="pill">"Moonlike Smile"</span>
                <span className="pill">"Caelestinum Finale Termini"</span>
              </div>
            </div>

            <div className="mini-card">
              <div className="tagline">🎵 "Chicago" — Michael Jackson (trecho)</div>
              {chicagoExcerpt.map((line, idx) => (
                <p className="quote" key={idx}>
                  {line}
                </p>
              ))}
              <p style={{ color: 'var(--muted)', fontSize: 13 }}>
                Trecho curto por direitos autorais. Veja a letra completa no link seguro abaixo.
              </p>
              <a
                className="lyrics-btn"
                href="https://www.google.com/search?q=chicago+michael+jackson+lyrics"
                target="_blank"
                rel="noreferrer"
              >
                Ver letra completa
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Personagens do Genshin */}
        <div className="hero" style={{ marginTop: 20 }}>
          <div className="character-section">
            <h2 className="section-title">💖 Personagens que lembram você</h2>
            <p className="section-subtitle">
              Cada uma delas tem um pouco da sua personalidade única e especial
            </p>
            <div className="characters-grid">
              {characters.map((char, idx) => (
                <div key={idx} className="character-card">
                  {char.image ? (
                    <div className="character-image-wrapper">
                      <Image
                        src={char.image}
                        alt={char.name}
                        width={120}
                        height={120}
                        className="character-image"
                        unoptimized
                        onError={(e) => {
                          // Se a imagem falhar, mostra o emoji
                          const wrapper = e.currentTarget.parentElement;
                          if (wrapper) wrapper.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="character-emoji">{char.emoji}</div>
                  )}
                  <h3 className="character-name">{char.name}</h3>
                  <p className="character-desc">{char.description}</p>
                </div>
              ))}
            </div>
            <div className="character-highlight">
              <div className="tagline">🕊️ Destaque especial: Columbina</div>
              <div className="highlight-image-wrapper">
                <Image
                  src="/characters/Columbina-Destaque.gif"
                  alt="Columbina - Destaque Especial"
                  width={200}
                  height={200}
                  className="highlight-image"
                  unoptimized
                />
              </div>
              <p>
                A personagem que você mais está esperando! Assim como ela, você traz uma aura única e
                especial que ilumina tudo ao redor. Mal posso esperar para ver você explorando Teyvat
                com ela quando lançar! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
