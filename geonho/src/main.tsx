import './styles.css'

const skills = [
  '멋쟁이사자처럼 14기 백엔드파트',
  'Spring Boot · FastAPI 경험',
  '바이브코딩을 좋아하는 실행형 성향',
  'Obsidian/워크플로우 중심 정리 습관',
]

const workflow = [
  '아이디어를 먼저 구조화한다.',
  '필요하면 바로 만들고, 부족하면 다시 다듬는다.',
  '기록은 짧고 선명하게 남긴다.',
  '다음 세션에서 바로 이어갈 수 있게 정리한다.',
]

const root = document.getElementById('app')

if (!root) {
  throw new Error('App root not found')
}

root.innerHTML = `
  <div class="min-h-screen bg-[#07111f] text-slate-100">
    <div class="pointer-events-none fixed inset-0 opacity-70" style="background: radial-gradient(circle at 20% 20%, rgba(122,167,255,.22), transparent 22%), radial-gradient(circle at 80% 10%, rgba(114,245,200,.18), transparent 18%), radial-gradient(circle at 70% 78%, rgba(255,139,212,.16), transparent 20%), linear-gradient(145deg, #07111f 0%, #091425 45%, #0b1b33 100%);"></div>
    <main class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <header class="float-slow flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div class="inline-flex items-center gap-3">
          <div class="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-mint to-sky text-[#07111f] font-black glow-pulse">L</div>
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-slate-400">LikeLion</p>
            <h1 class="text-lg font-semibold">김건호 · Backend Intro</h1>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 text-sm text-slate-200">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">🧭 calm</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">✦ modern</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">⚡ vibe coding</span>
        </div>
      </header>

      <section class="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div class="float-medium rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <div class="inline-flex rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-sm text-mint">✨ 안녕, 나는 건호</div>
          <h2 class="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            <span class="bg-gradient-to-r from-white via-[#d2f7ff] to-[#84a8ff] bg-clip-text text-transparent">멋쟁이사자처럼 14기</span>
            <br />
            <span class="bg-gradient-to-r from-[#8ef5ce] via-[#84a8ff] to-[#ffb2e2] bg-clip-text text-transparent">백엔드파트 김건호입니다.</span>
          </h2>
          <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            스프링부트랑 FastAPI 같은 걸 만져보면서 백엔드가 어떻게 굴러가는지 계속 익히는 중이다.
            나는 바이브코딩을 좋아해서, 일단 감 좋게 빠르게 만들고 나서 구조를 정리해가는 스타일을 선호한다.
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <a href="#about" class="rounded-2xl bg-gradient-to-r from-mint to-sky px-5 py-3 font-semibold text-[#07111f] transition hover:-translate-y-0.5">자기소개 보기 →</a>
            <a href="#skills" class="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">강점 보기</a>
          </div>
        </div>

        <aside class="float-slow rounded-[2rem] border border-white/10 bg-[#081120]/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <p class="text-sm uppercase tracking-[0.25em] text-slate-400">Snapshot</p>
          <div class="mt-5 grid grid-cols-2 gap-3">
            ${[
              ['이름', '김건호'],
              ['소속', 'LikeLion 14기'],
              ['학과', '컴퓨터소프트웨어학과'],
              ['스타일', '바이브코딩'],
            ]
              .map(
                ([label, value]) => `
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p class="text-xs text-slate-400">${label}</p>
                    <p class="mt-2 text-xl font-bold">${value}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </aside>
      </section>

      <section id="about" class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <h3 class="text-2xl font-bold">About me</h3>
          <div class="mt-5 space-y-3 text-slate-200">
            <p>• 멋쟁이사자처럼 14기 백엔드파트로 활동 중이다.</p>
            <p>• 한국교통대학교 컴퓨터소프트웨어학과를 다니고 있다.</p>
            <p>• Spring Boot, FastAPI 같은 백엔드 기술을 만져보면서 감을 넓히는 중이다.</p>
            <p>• 일단 만들어보고, 나중에 더 좋게 다듬는 바이브코딩 스타일을 좋아한다.</p>
          </div>
        </article>

        <article id="skills" class="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <h3 class="text-2xl font-bold">What I value</h3>
          <div class="mt-5 space-y-3 text-slate-200">
            ${skills.map((item) => `<div class="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span class="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-mint to-sky"></span><span>${item}</span></div>`).join('')}
          </div>
        </article>
      </section>

      <section class="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <h3 class="text-2xl font-bold">How I work</h3>
          <div class="mt-5 space-y-3 text-slate-200">
            ${workflow.map((item, idx) => `<div class="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span class="mt-1 text-mint">0${idx + 1}</span><span>${item}</span></div>`).join('')}
          </div>
        </article>

        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <h3 class="text-2xl font-bold">Vibe</h3>
          <p class="mt-5 leading-8 text-slate-300">
            너무 딱딱한 설명보다는, 보기 좋고 이해하기 쉬운 느낌을 선호한다.
            살짝 감각적이면서도 실용적인 페이지가 좋다 😎
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-sm text-slate-200">
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">🌙 glassmorphism</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">🎨 gradients</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">🧠 structure first</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2">✨ gentle motion</span>
          </div>
        </article>
      </section>
    </main>
  </div>
`
