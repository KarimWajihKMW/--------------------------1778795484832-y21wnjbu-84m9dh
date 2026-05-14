const app = document.getElementById('app');
const navLinks = document.getElementById('navLinks');
const menuButton = document.getElementById('menuButton');

const programs = [
  { id: 'kids-starter', path: '/programs/kids', title: 'Kids English Starter', age: '5-8', level: 'A0-A1', type: 'Kids', duration: '3 شهور', price: 1850, rating: 4.9, accent: 'mint', lessons: 36, description: 'تعلم ممتع بالقصص، الألعاب، الأغاني، والأنشطة البصرية لبناء الثقة من أول حصة.' },
  { id: 'kids-explorer', path: '/programs/kids', title: 'Kids Explorer', age: '8-11', level: 'A1-A2', type: 'Kids', duration: '4 شهور', price: 2200, rating: 4.8, accent: 'champagne', lessons: 48, description: 'قراءة ومحادثة ومفردات يومية مع مشاريع صغيرة ونظام badges محفز.' },
  { id: 'teens-fluency', path: '/programs/teens', title: 'Teens Fluency Lab', age: '12-15', level: 'A2-B1', type: 'Teens', duration: '4 شهور', price: 2600, rating: 4.9, accent: 'coral', lessons: 48, description: 'محادثة واقعية، كتابة منظمة، تدريب presentation، ومهارات school communication.' },
  { id: 'teens-ielts', path: '/programs/teens', title: 'Young IELTS Pathway', age: '15-18', level: 'B1-B2', type: 'Teens', duration: '5 شهور', price: 3400, rating: 4.7, accent: 'ocean', lessons: 60, description: 'تمهيد أكاديمي قوي للـ IELTS مع writing clinics وspeaking rooms.' },
  { id: 'adults-practical', path: '/programs/adults', title: 'Adults Practical English', age: '18+', level: 'A1-B2', type: 'Adults', duration: '3 شهور', price: 2850, rating: 4.8, accent: 'mint', lessons: 36, description: 'لغة عملية للسفر، العمل، الاجتماعات، والمواقف اليومية بدون تعقيد.' },
  { id: 'business-elite', path: '/programs/business', title: 'Business English Elite', age: 'Professionals', level: 'B1-C1', type: 'Business', duration: '8 أسابيع', price: 4200, rating: 5.0, accent: 'champagne', lessons: 24, description: 'Meetings, negotiation, emails, pitches، ومصطلحات بيزنس بتطبيقات حقيقية.' },
  { id: 'speaking-sprint', path: '/programs/adults', title: 'Speaking Sprint', age: '16+', level: 'A2-B2', type: 'Adults', duration: '6 أسابيع', price: 1950, rating: 4.6, accent: 'coral', lessons: 18, description: 'كورس مكثف لكسر حاجز الخوف والتحدث بطلاقة في مجموعات صغيرة.' },
  { id: 'grammar-polish', path: '/programs/teens', title: 'Grammar Polish Studio', age: '12+', level: 'A1-B1', type: 'Teens', duration: '8 أسابيع', price: 1600, rating: 4.5, accent: 'ocean', lessons: 20, description: 'قواعد بطريقة ذكية ومباشرة مع تطبيقات كتابة ومحادثة.' }
];

const clubs = [
  { id: 'story-club', title: 'Storytelling Club', type: 'Kids', day: 'السبت', seats: 8, level: 'A1', host: 'Ms. Lara', vibe: 'قصص وتمثيل وأصوات شخصيات' },
  { id: 'movie-club', title: 'Movie Talk Club', type: 'Teens', day: 'الأحد', seats: 10, level: 'A2-B1', host: 'Mr. Adam', vibe: 'مشاهد قصيرة ونقاشات ممتعة' },
  { id: 'debate-club', title: 'Debate Club', type: 'Teens', day: 'الثلاثاء', seats: 6, level: 'B1-B2', host: 'Ms. Salma', vibe: 'حجج، رأي، وثقة في الكلام' },
  { id: 'business-cafe', title: 'Business Café', type: 'Business', day: 'الأربعاء', seats: 12, level: 'B1-C1', host: 'Mr. Kareem', vibe: 'اجتماعات ومفاوضات وسيناريوهات شغل' },
  { id: 'pronunciation-lab', title: 'Pronunciation Lab', type: 'Adults', day: 'الخميس', seats: 7, level: 'A2-B2', host: 'Ms. Nora', vibe: 'نطق، rhythm، وaccent clarity' },
  { id: 'game-night', title: 'English Game Night', type: 'Kids', day: 'الجمعة', seats: 14, level: 'A0-A2', host: 'Team Lingowich', vibe: 'Games, quizzes, missions' }
];

const students = [
  { id: 'LW-1021', name: 'ليلى محمود', age: 7, program: 'Kids Starter', progress: 72, status: 'نشط', next: 'السبت 6:00 م' },
  { id: 'LW-1022', name: 'آدم خالد', age: 12, program: 'Teens Fluency', progress: 54, status: 'متابعة', next: 'الأحد 5:00 م' },
  { id: 'LW-1023', name: 'ملك سامي', age: 16, program: 'Young IELTS', progress: 81, status: 'نشط', next: 'الثلاثاء 7:30 م' },
  { id: 'LW-1024', name: 'أحمد طارق', age: 29, program: 'Business Elite', progress: 43, status: 'نشط', next: 'الأربعاء 8:00 م' },
  { id: 'LW-1025', name: 'جنى وائل', age: 10, program: 'Kids Explorer', progress: 64, status: 'نشط', next: 'الخميس 6:30 م' },
  { id: 'LW-1026', name: 'نورهان علي', age: 34, program: 'Adults Practical', progress: 38, status: 'جديد', next: 'الجمعة 8:30 م' },
  { id: 'LW-1027', name: 'يوسف شريف', age: 14, program: 'Grammar Studio', progress: 90, status: 'نشط', next: 'السبت 4:00 م' }
];

let programState = { page: 1, filter: 'All', sort: 'rating' };
let clubState = { page: 1, filter: 'All', sort: 'day' };
let studentState = { page: 1, filter: 'All', sort: 'progress' };
const pageSize = 4;

function money(value) { return `${value.toLocaleString('ar-EG')} جنيه`; }
function routeTo(path) { history.pushState({}, '', path); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function linkify() {
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      routeTo(link.getAttribute('href'));
      navLinks.classList.add('hidden');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });
}

function layoutShell(content) {
  return `<div class="page-shell">${content}</div>`;
}

function hero() {
  return `
    <section class="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div class="reveal">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-white/70 px-4 py-2 text-sm font-bold text-ocean shadow-sm backdrop-blur">
            <span class="h-2 w-2 rounded-full bg-coral animate-pulse"></span>
            أكاديمية دولية أونلاين بالكامل من ٥ سنوات حتى الكبار
          </div>
          <h1 class="font-display text-5xl font-bold leading-[1.08] text-night sm:text-6xl lg:text-7xl">الإنجليزي يتحول لتجربة فاخرة، مرحة، ومستمرة.</h1>
          <p class="mt-6 max-w-2xl text-lg leading-9 text-ink/72">Lingowich International Academy بتقدم رحلة تعلم أونلاين مصممة للأطفال، المراهقين، الكبار، وفرق العمل — بحصص live، متابعة تقدم، Clubs تفاعلية، وخطة واضحة لكل طالب.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/assessment" data-route class="btn-primary">احجز اختبار مستوى مجاني</a>
            <a href="/programs" data-route class="btn-secondary">استكشف البرامج</a>
          </div>
          <div class="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
            ${stat('5-18', 'سنوات أطفال ومراهقين')}
            ${stat('100%', 'Online live')}
            ${stat('Clubs', 'محادثة تفاعلية')}
          </div>
        </div>
        <div class="relative reveal delay-150">
          <div class="academy-bottle" aria-hidden="true">
            <div class="bottle-shine"></div>
            <div class="floating-word word-one">Speak</div>
            <div class="floating-word word-two">Listen</div>
            <div class="floating-word word-three">Grow</div>
          </div>
          <div class="absolute -bottom-4 right-2 rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-glow backdrop-blur-xl sm:right-10">
            <p class="text-xs font-bold uppercase tracking-[.25em] text-ocean">Live progress</p>
            <div class="mt-3 flex items-end gap-2">
              <span class="font-display text-4xl font-bold text-night">92%</span>
              <span class="pb-2 text-sm text-ink/60">student confidence</span>
            </div>
            <div class="mt-4 h-2 w-52 overflow-hidden rounded-full bg-pearl"><span class="block h-full w-[92%] rounded-full bg-gradient-to-l from-ocean to-champagne"></span></div>
          </div>
        </div>
      </div>
    </section>`;
}

function stat(value, label) {
  return `<div class="rounded-3xl border border-white/70 bg-white/65 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-gold"><strong class="block font-display text-2xl text-night">${value}</strong><span class="text-xs text-ink/60">${label}</span></div>`;
}

function homePage() {
  return layoutShell(`
    ${hero()}
    <section class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="section-heading reveal"><p>Lingowich Method</p><h2>منهج واضح يشبه عطر فاخر: طبقات صغيرة تبني طلاقة كبيرة.</h2></div>
        <div class="grid gap-5 md:grid-cols-3">
          ${feature('01', 'Live Boutique Classes', 'مجموعات صغيرة مع مدرسين متخصصين ومتابعة فردية لكل طالب.', 'bg-mint/30')}
          ${feature('02', 'Personal Learning Map', 'خريطة تقدم خاصة بالطالب: مستوى، أهداف، واجبات، وتقارير للأهل.', 'bg-champagne/30')}
          ${feature('03', 'Interactive Clubs', 'نوادي محادثة أسبوعية حسب السن والمستوى لتطبيق اللغة في مواقف حقيقية.', 'bg-coral/20')}
        </div>
      </div>
    </section>
    <section class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div class="rounded-[2rem] bg-night p-8 text-cream shadow-glow reveal">
          <p class="text-sm font-bold uppercase tracking-[.3em] text-champagne">Age pathways</p>
          <h2 class="mt-4 font-display text-4xl font-bold">مسارات مناسبة لكل عمر وهدف.</h2>
          <p class="mt-4 leading-8 text-cream/70">كل مرحلة لها طريقة تعليم مختلفة: لعب وقصص للصغار، مشاريع وحوارات للمراهقين، ونتائج عملية للكبار والبيزنس.</p>
          <a href="/programs" data-route class="mt-7 inline-flex rounded-full bg-champagne px-6 py-3 font-bold text-night transition hover:-translate-y-1 hover:bg-cream focus:outline-none focus:ring-4 focus:ring-champagne/30">شاهد كل المسارات</a>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 reveal delay-150">
          ${pathCard('/programs/kids', 'Kids 5-11', 'قصص، ألعاب، مفردات، ونطق سليم.', '👧')}
          ${pathCard('/programs/teens', 'Teens 12-18', 'Fluency, school skills, IELTS pathway.', '🎓')}
          ${pathCard('/programs/adults', 'Adults', 'سفر، عمل، محادثة، ومواقف يومية.', '🌍')}
          ${pathCard('/programs/business', 'Business English', 'Meetings, emails, negotiation, pitches.', '💼')}
        </div>
      </div>
    </section>
    <section class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl rounded-[2.5rem] border border-white/70 bg-white/65 p-6 shadow-gold backdrop-blur md:p-10">
        <div class="grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
          <div class="reveal"><p class="eyebrow">Online Command Center</p><h2 class="font-display text-4xl font-bold text-night">ولي الأمر يشوف تقدم الطالب كأنه dashboard احترافي.</h2><p class="mt-4 leading-8 text-ink/70">تقارير حضور، واجبات، تقييم speaking، ومستوى التفاعل في الـ Clubs — كل شيء منظم وسهل المتابعة.</p></div>
          <div class="dashboard-preview reveal delay-150">
            <div class="dash-row"><span>Speaking confidence</span><b>86%</b></div>
            <div class="dash-line"><i style="width:86%"></i></div>
            <div class="dash-row"><span>Vocabulary missions</span><b>24/30</b></div>
            <div class="dash-line"><i style="width:80%"></i></div>
            <div class="dash-row"><span>Club attendance</span><b>9 sessions</b></div>
            <div class="dash-line"><i style="width:70%"></i></div>
          </div>
        </div>
      </div>
    </section>
    ${contactSection()}
  `);
}

function feature(num, title, text, bg) {
  return `<article class="group rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-gold reveal"><span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg} font-display text-xl font-bold text-night">${num}</span><h3 class="mt-6 text-xl font-bold text-night">${title}</h3><p class="mt-3 leading-7 text-ink/65">${text}</p></article>`;
}

function pathCard(path, title, text, icon) {
  return `<a href="${path}" data-route class="group rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-ocean/20"><span class="text-4xl transition group-hover:scale-110 inline-block">${icon}</span><h3 class="mt-5 text-xl font-bold text-night">${title}</h3><p class="mt-2 text-sm leading-7 text-ink/65">${text}</p><span class="mt-5 inline-flex text-sm font-bold text-ocean">اعرف أكتر ←</span></a>`;
}

function contactSection() {
  return `
    <section id="contact-us" class="px-4 py-14 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/75 shadow-gold backdrop-blur">
        <div class="grid lg:grid-cols-[.9fr_1.1fr]">
          <div class="relative overflow-hidden bg-night p-8 text-cream md:p-10 lg:p-12">
            <div class="absolute -left-24 top-10 h-52 w-52 rounded-full bg-champagne/30 blur-3xl"></div>
            <div class="absolute -bottom-20 right-8 h-56 w-56 rounded-full bg-mint/25 blur-3xl"></div>
            <div class="relative reveal">
              <p class="eyebrow text-champagne">تواصل معنا</p>
              <h2 class="mt-4 font-display text-4xl font-bold leading-tight lg:text-5xl">خلينا نختار معاك مسار الإنجليزي الأنسب.</h2>
              <p class="mt-5 leading-8 text-cream/72">ابعت بياناتك، وفريق الاستشارات التعليمية هيرد عليك بخطة واضحة حسب السن، المستوى، الهدف، والمواعيد المناسبة.</p>
              <div class="mt-8 grid gap-4">
                ${contactInfoCard('💬', 'واتساب سريع', '+20 100 000 0000', 'رد خلال ساعات العمل')}
                ${contactInfoCard('📧', 'البريد الإلكتروني', 'hello@lingowich.academy', 'للاستفسارات والشراكات')}
                ${contactInfoCard('🕘', 'مواعيد التواصل', 'يوميًا 10 ص - 9 م', 'بتوقيت القاهرة')}
              </div>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" data-route class="rounded-full bg-champagne px-6 py-3 text-center font-bold text-night transition hover:-translate-y-1 hover:bg-cream focus:outline-none focus:ring-4 focus:ring-champagne/30">صفحة التواصل</a>
                <a href="/assessment" data-route class="rounded-full border border-cream/25 px-6 py-3 text-center font-bold text-cream transition hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-cream/20">احجز اختبار مستوى</a>
              </div>
            </div>
          </div>
          <form id="homeContactForm" class="p-6 md:p-10 lg:p-12 reveal delay-150">
            <p class="eyebrow">Contact form</p>
            <h3 class="mt-3 font-display text-3xl font-bold text-night">أرسل رسالة قصيرة</h3>
            <div class="mt-6 grid gap-4 md:grid-cols-2">
              ${input('homeContactName','الاسم','text')}
              ${input('homeContactPhone','رقم واتساب','tel')}
              <label class="field md:col-span-2"><span>المسار المهتم به</span><select required class="form-control"><option value="">اختر المسار</option><option>Kids English</option><option>Teens English</option><option>Adults English</option><option>Business English</option><option>Interactive Clubs</option></select></label>
              <label class="field md:col-span-2"><span>رسالتك</span><textarea required class="form-control min-h-32" placeholder="اكتب السن، المستوى المتوقع، والهدف من التعلم..."></textarea></label>
            </div>
            <button class="mt-6 w-full rounded-full bg-ocean px-6 py-4 font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-night focus:outline-none focus:ring-4 focus:ring-ocean/25">إرسال الرسالة</button>
            <p id="homeContactMessage" class="mt-4 hidden rounded-2xl bg-mint/30 p-4 text-center font-bold text-ocean">تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.</p>
          </form>
        </div>
      </div>
    </section>`;
}

function contactInfoCard(icon, title, value, note) {
  return `<div class="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur"><div class="flex items-start gap-3"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream/10 text-xl">${icon}</span><div><h3 class="font-bold text-cream">${title}</h3><p class="mt-1 font-bold text-champagne">${value}</p><p class="mt-1 text-sm text-cream/58">${note}</p></div></div></div>`;
}

function programsPage(type = null) {
  const title = type ? programTitle(type) : 'كل برامج Lingowich';
  const desc = type ? programDesc(type) : 'اختار المسار المناسب حسب السن، المستوى، والهدف. كل البرامج Live Online مع متابعة وتقارير.';
  return layoutShell(`
    ${pageHero(title, desc, 'Programs', '/assessment', 'ابدأ اختبار المستوى')}
    <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl">
      <div class="mb-6 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-2" id="programFilters">
          ${['All','Kids','Teens','Adults','Business'].map(f => `<button class="filter-btn ${programState.filter===f?'active':''}" data-filter="${f}">${filterLabel(f)}</button>`).join('')}
        </div>
        <label class="flex items-center gap-3 text-sm font-bold text-ink/70">ترتيب
          <select id="programSort" class="rounded-2xl border border-night/10 bg-cream px-4 py-3 outline-none transition focus:ring-4 focus:ring-ocean/20">
            <option value="rating" ${programState.sort==='rating'?'selected':''}>الأعلى تقييماً</option>
            <option value="price" ${programState.sort==='price'?'selected':''}>الأقل سعراً</option>
            <option value="lessons" ${programState.sort==='lessons'?'selected':''}>عدد الحصص</option>
          </select>
        </label>
      </div>
      <div id="programList"></div>
    </div></section>
  `);
}

function programTitle(type) {
  return ({ kids: 'Kids English من ٥ إلى ١١ سنة', teens: 'Teens English من ١٢ إلى ١٨ سنة', adults: 'كورسات إنجليزي للكبار', business: 'Business English للمهنيين والشركات' })[type] || 'برامج Lingowich';
}
function programDesc(type) {
  return ({ kids: 'تعلم مرح بالقصص والألعاب والأنشطة التفاعلية لبناء الأساس بثقة.', teens: 'طلاقة، كتابة، عروض تقديمية، وتحضير أكاديمي يناسب المدارس والجامعات.', adults: 'محادثة عملية وسهلة للاستخدام اليومي والسفر والعمل.', business: 'إنجليزي اجتماعات، إيميلات، تفاوض، وعروض تقديمية بنتائج سريعة.' })[type] || '';
}
function filterLabel(f) { return ({ All: 'الكل', Kids: 'الأطفال', Teens: 'المراهقين', Adults: 'الكبار', Business: 'Business' })[f]; }

function renderPrograms() {
  const mount = document.getElementById('programList');
  if (!mount) return;
  let rows = [...programs];
  if (programState.filter !== 'All') rows = rows.filter(p => p.type === programState.filter);
  rows.sort((a, b) => programState.sort === 'price' ? a.price - b.price : programState.sort === 'lessons' ? b.lessons - a.lessons : b.rating - a.rating);
  const pages = Math.max(1, Math.ceil(rows.length / pageSize));
  programState.page = Math.min(programState.page, pages);
  const paged = rows.slice((programState.page - 1) * pageSize, programState.page * pageSize);
  mount.innerHTML = `<div class="grid gap-5 md:grid-cols-2">${paged.map(programCard).join('')}</div>${pagination('program', programState.page, pages)}`;
  document.querySelectorAll('#programFilters button').forEach(btn => btn.onclick = () => { programState.filter = btn.dataset.filter; programState.page = 1; renderPrograms(); document.querySelectorAll('#programFilters button').forEach(b => b.classList.toggle('active', b===btn)); });
  document.getElementById('programSort').onchange = (e) => { programState.sort = e.target.value; renderPrograms(); };
  wirePagination('program', (page) => { programState.page = page; renderPrograms(); });
  linkify();
}

function programCard(p) {
  return `<article class="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-gold reveal">
    <div class="absolute -left-12 -top-12 h-28 w-28 rounded-full bg-${p.accent}/30 blur-2xl transition group-hover:scale-150"></div>
    <div class="relative flex items-start justify-between gap-4"><div><p class="eyebrow">${p.type} • ${p.level}</p><h3 class="mt-2 text-2xl font-bold text-night">${p.title}</h3></div><span class="rounded-full bg-night px-3 py-1 text-sm font-bold text-cream">★ ${p.rating}</span></div>
    <p class="relative mt-4 min-h-[64px] leading-8 text-ink/68">${p.description}</p>
    <div class="relative mt-5 grid grid-cols-3 gap-2 text-center text-sm"><span class="mini-chip">${p.age}</span><span class="mini-chip">${p.duration}</span><span class="mini-chip">${p.lessons} حصة</span></div>
    <div class="relative mt-6 flex items-center justify-between"><strong class="font-display text-3xl text-night">${money(p.price)}</strong><a href="/assessment" data-route class="rounded-full bg-ocean px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-night focus:outline-none focus:ring-4 focus:ring-ocean/25">سجّل اهتمام</a></div>
  </article>`;
}

function clubsPage() {
  return layoutShell(`
    ${pageHero('Interactive English Clubs', 'نوادي تفاعلية أسبوعية تخلي اللغة ممارسة حقيقية: قصص، مناظرات، ألعاب، أفلام، وBusiness Café.', 'Clubs', '/assessment', 'انضم لنادي مناسب')}
    <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl">
      <div class="club-stage reveal"><span>Speak Room</span><span>Debate</span><span>Storytelling</span><span>Business Café</span></div>
      <div class="mt-8 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-2" id="clubFilters">${['All','Kids','Teens','Adults','Business'].map(f => `<button class="filter-btn ${clubState.filter===f?'active':''}" data-filter="${f}">${filterLabel(f)}</button>`).join('')}</div>
        <label class="flex items-center gap-3 text-sm font-bold text-ink/70">ترتيب <select id="clubSort" class="rounded-2xl border border-night/10 bg-cream px-4 py-3 outline-none transition focus:ring-4 focus:ring-ocean/20"><option value="day">اليوم</option><option value="seats">المقاعد المتاحة</option><option value="level">المستوى</option></select></label>
      </div>
      <div id="clubList" class="mt-6"></div>
    </div></section>
  `);
}

function renderClubs() {
  const mount = document.getElementById('clubList');
  if (!mount) return;
  let rows = [...clubs];
  if (clubState.filter !== 'All') rows = rows.filter(c => c.type === clubState.filter);
  rows.sort((a, b) => clubState.sort === 'seats' ? b.seats - a.seats : String(a[clubState.sort]).localeCompare(String(b[clubState.sort]), 'ar'));
  const pages = Math.max(1, Math.ceil(rows.length / pageSize));
  clubState.page = Math.min(clubState.page, pages);
  const paged = rows.slice((clubState.page - 1) * pageSize, clubState.page * pageSize);
  mount.innerHTML = `<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">${paged.map(clubCard).join('')}</div>${pagination('club', clubState.page, pages)}`;
  document.querySelectorAll('#clubFilters button').forEach(btn => btn.onclick = () => { clubState.filter = btn.dataset.filter; clubState.page = 1; renderClubs(); });
  document.getElementById('clubSort').onchange = (e) => { clubState.sort = e.target.value; renderClubs(); };
  wirePagination('club', (page) => { clubState.page = page; renderClubs(); });
}

function clubCard(c) {
  return `<article class="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-glow reveal"><div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/50 to-champagne/50 text-2xl">🎙️</div><p class="eyebrow">${c.type} • ${c.level}</p><h3 class="mt-2 text-xl font-bold text-night">${c.title}</h3><p class="mt-3 min-h-[56px] text-sm leading-7 text-ink/65">${c.vibe}</p><div class="mt-5 space-y-2 text-sm text-ink/70"><p>اليوم: <b>${c.day}</b></p><p>المدرب: <b>${c.host}</b></p><p>مقاعد متاحة: <b>${c.seats}</b></p></div><button class="mt-6 w-full rounded-full bg-night px-5 py-3 text-sm font-bold text-cream transition hover:-translate-y-1 hover:bg-ocean focus:outline-none focus:ring-4 focus:ring-ocean/25">احجز مقعد</button></article>`;
}

function assessmentPage() {
  return layoutShell(`${pageHero('اختبار مستوى مجاني', 'املأ البيانات وسيقترح لك فريق Lingowich المسار المناسب حسب السن، الهدف، والمستوى الحالي.', 'Assessment', '/contact', 'تحدث مع مستشار')}
  <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
    <div class="rounded-[2rem] bg-night p-8 text-cream shadow-glow reveal"><h2 class="font-display text-4xl font-bold">رحلة التسجيل</h2><ol class="mt-8 space-y-5">${['تحديد السن والهدف','اختبار مستوى قصير أونلاين','جلسة تعريف بالمدرس المناسب','بدء الخطة ومتابعة التقدم'].map((x,i)=>`<li class="flex gap-4"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne font-bold text-night">${i+1}</span><span class="pt-1 text-cream/80">${x}</span></li>`).join('')}</ol></div>
    <form class="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-gold backdrop-blur reveal delay-150" id="leadForm">
      <div class="grid gap-4 md:grid-cols-2">
        ${input('studentName','اسم الطالب','text')}${input('parentName','اسم ولي الأمر / المتدرب','text')}${input('age','السن','number')}${input('phone','رقم واتساب','tel')}
        <label class="field md:col-span-2"><span>المسار المطلوب</span><select required class="form-control"><option>Kids English</option><option>Teens English</option><option>Adults English</option><option>Business English</option><option>Interactive Clubs</option></select></label>
        <label class="field md:col-span-2"><span>هدفك من الكورس</span><textarea required class="form-control min-h-32" placeholder="مثلاً: تحسين المحادثة، مدرسة دولية، سفر، شغل..."></textarea></label>
      </div>
      <button class="mt-6 w-full rounded-full bg-ocean px-6 py-4 font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-night focus:outline-none focus:ring-4 focus:ring-ocean/25">إرسال طلب التقييم</button>
      <p id="formMessage" class="mt-4 hidden rounded-2xl bg-mint/30 p-4 text-center font-bold text-ocean">تم استلام طلبك بنجاح. فريق Lingowich هيتواصل معاك قريباً.</p>
    </form>
  </div></section>`);
}

function input(id, label, type) {
  return `<label class="field"><span>${label}</span><input id="${id}" required type="${type}" class="form-control" /></label>`;
}

function dashboardPage() {
  return layoutShell(`${pageHero('لوحة إدارة الأكاديمية', 'إدارة طلاب، جداول، تقدم، وإجراءات CRUD واضحة لكل جدول محتوى.', 'Academy Dashboard', '/dashboard/schedule', 'عرض الجدول')}
  <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl">
    <div class="grid gap-4 md:grid-cols-4">${stat('248','طلاب نشطين')}${stat('36','حصص هذا الأسبوع')}${stat('18','Clubs مفتوحة')}${stat('94%','رضا أولياء الأمور')}</div>
    <div class="mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-gold backdrop-blur">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><h2 class="font-display text-3xl font-bold text-night">Students CRM</h2><div class="flex flex-wrap gap-2"><button class="action-btn bg-ocean text-white">+ إضافة طالب</button><button class="action-btn bg-cream text-night">تصدير CSV</button><button class="action-btn bg-night text-cream">إرسال تقرير جماعي</button></div></div>
      <div class="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><div class="flex flex-wrap gap-2" id="studentFilters">${['All','نشط','متابعة','جديد'].map(f=>`<button class="filter-btn" data-filter="${f}">${f==='All'?'الكل':f}</button>`).join('')}</div><label class="flex items-center gap-3 text-sm font-bold">ترتيب <select id="studentSort" class="rounded-2xl border border-night/10 bg-cream px-4 py-3"><option value="progress">التقدم</option><option value="age">السن</option><option value="name">الاسم</option></select></label></div>
      <div id="studentsTable" class="mt-5 overflow-x-auto"></div>
    </div>
  </div></section>`);
}

function renderStudents() {
  const mount = document.getElementById('studentsTable');
  if (!mount) return;
  let rows = [...students];
  if (studentState.filter !== 'All') rows = rows.filter(s => s.status === studentState.filter);
  rows.sort((a,b) => studentState.sort === 'name' ? a.name.localeCompare(b.name, 'ar') : b[studentState.sort] - a[studentState.sort]);
  const pages = Math.max(1, Math.ceil(rows.length / 5));
  const paged = rows.slice((studentState.page - 1) * 5, studentState.page * 5);
  mount.innerHTML = `<table class="w-full min-w-[820px] overflow-hidden rounded-3xl text-right"><thead class="bg-night text-cream"><tr><th class="p-4">الكود</th><th class="p-4">الطالب</th><th class="p-4">السن</th><th class="p-4">البرنامج</th><th class="p-4">التقدم</th><th class="p-4">الحالة</th><th class="p-4">الحصة القادمة</th><th class="p-4">CRUD Actions</th></tr></thead><tbody>${paged.map(s=>`<tr class="border-b border-night/5 bg-white/70 transition hover:bg-mint/10"><td class="p-4 font-bold text-ocean">${s.id}</td><td class="p-4 font-bold">${s.name}</td><td class="p-4">${s.age}</td><td class="p-4">${s.program}</td><td class="p-4"><div class="h-2 w-28 rounded-full bg-pearl"><span class="block h-full rounded-full bg-gradient-to-l from-ocean to-champagne" style="width:${s.progress}%"></span></div><small>${s.progress}%</small></td><td class="p-4"><span class="rounded-full bg-mint/25 px-3 py-1 text-sm font-bold text-ocean">${s.status}</span></td><td class="p-4">${s.next}</td><td class="p-4"><div class="flex gap-2"><button class="crud view">عرض</button><button class="crud edit">تعديل</button><button class="crud delete">حذف</button></div></td></tr>`).join('')}</tbody></table>${pagination('student', studentState.page, pages)}`;
  document.querySelectorAll('#studentFilters button').forEach(btn => btn.onclick = () => { studentState.filter = btn.dataset.filter; studentState.page = 1; renderStudents(); });
  document.getElementById('studentSort').onchange = (e) => { studentState.sort = e.target.value; renderStudents(); };
  wirePagination('student', (page) => { studentState.page = page; renderStudents(); });
}

function schedulePage() {
  return layoutShell(`${pageHero('جدول الحصص والنوادي', 'Deep path للجدولة: حصص مباشرة، Clubs، ومتابعة حضور.', 'Schedule', '/dashboard/students', 'إدارة الطلاب')}
  <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">${['Kids phonics • السبت 6:00م','Teens debate • الأحد 7:00م','Business Café • الأربعاء 8:00م','Adults speaking • الخميس 8:30م','Story Club • الجمعة 5:00م','IELTS writing • الثلاثاء 7:30م'].map((item,i)=>`<article class="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-glow"><p class="eyebrow">Session ${i+1}</p><h3 class="mt-2 text-xl font-bold text-night">${item}</h3><div class="mt-5 flex gap-2"><button class="crud view">عرض</button><button class="crud edit">تعديل</button><button class="crud delete">إلغاء</button></div></article>`).join('')}</div></section>`);
}

function contactPage() {
  return layoutShell(`${pageHero('تواصل مع Lingowich', 'احجز مكالمة تعريفية أو اسأل عن أنسب مسار لطفلك أو لفريق شركتك.', 'Contact', '/assessment', 'اختبار مستوى')}
  <section class="px-4 py-10 sm:px-6 lg:px-8"><div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div class="rounded-[2rem] bg-night p-8 text-cream shadow-glow"><h2 class="font-display text-4xl font-bold">جاهزين نبدأ؟</h2><p class="mt-4 leading-8 text-cream/70">فريق الاستشارات التعليمية هيساعدك تختار البرنامج المناسب ويشرح خطة الدراسة الأونلاين بالكامل.</p><div class="mt-8 grid gap-4">${contactInfoCard('📧', 'البريد الإلكتروني', 'hello@lingowich.academy', 'للاستفسارات والشراكات')}${contactInfoCard('💬', 'واتساب مباشر', '+20 100 000 0000', 'رد سريع من فريق التسجيل')}${contactInfoCard('🌍', 'نطاق الخدمة', 'Online worldwide', 'طلاب من مصر وخارجها')}</div></div><form id="contactForm" class="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-gold"><h3 class="font-display text-3xl font-bold text-night">أرسل رسالة</h3><div class="mt-5 grid gap-4">${input('contactName','الاسم','text')}${input('contactPhone','رقم الهاتف','tel')}<label class="field"><span>الرسالة</span><textarea required class="form-control min-h-32" placeholder="اكتب سؤالك أو السن والهدف من الكورس..."></textarea></label><button class="rounded-full bg-ocean px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-night">إرسال</button><p id="contactMessage" class="hidden rounded-2xl bg-mint/30 p-4 text-center font-bold text-ocean">تم استلام رسالتك بنجاح. سنتواصل معك قريباً.</p></div></form></div></section>`);
}

function pageHero(title, desc, label, ctaPath, cta) {
  return `<section class="px-4 py-16 sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-gold backdrop-blur lg:p-12 reveal"><p class="eyebrow">${label}</p><h1 class="mt-3 font-display text-5xl font-bold leading-tight text-night lg:text-6xl">${title}</h1><p class="mt-5 max-w-3xl text-lg leading-9 text-ink/70">${desc}</p><a href="${ctaPath}" data-route class="mt-8 inline-flex rounded-full bg-night px-6 py-3 font-bold text-cream transition hover:-translate-y-1 hover:bg-ocean focus:outline-none focus:ring-4 focus:ring-ocean/25">${cta}</a></div></section>`;
}

function pagination(prefix, current, pages) {
  return `<div class="mt-8 flex items-center justify-center gap-2">${Array.from({ length: pages }, (_, i) => `<button class="page-btn ${current===i+1?'active':''}" data-${prefix}-page="${i+1}">${i+1}</button>`).join('')}</div>`;
}
function wirePagination(prefix, cb) { document.querySelectorAll(`[data-${prefix}-page]`).forEach(btn => btn.onclick = () => cb(Number(btn.dataset[`${prefix}Page`]))); }

function bindForms() {
  const leadForm = document.getElementById('leadForm');
  if (leadForm) leadForm.addEventListener('submit', (e) => { e.preventDefault(); document.getElementById('formMessage').classList.remove('hidden'); leadForm.reset(); });

  const contactForms = [
    { form: document.getElementById('homeContactForm'), message: document.getElementById('homeContactMessage') },
    { form: document.getElementById('contactForm'), message: document.getElementById('contactMessage') }
  ];

  contactForms.forEach(({ form, message }) => {
    if (!form || !message) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      message.classList.remove('hidden');
      form.reset();
    });
  });
}

function render() {
  const path = location.pathname;
  if (path === '/' || path === '/home') app.innerHTML = homePage();
  else if (path === '/programs') app.innerHTML = programsPage();
  else if (path === '/programs/kids') { programState.filter = 'Kids'; app.innerHTML = programsPage('kids'); }
  else if (path === '/programs/teens') { programState.filter = 'Teens'; app.innerHTML = programsPage('teens'); }
  else if (path === '/programs/adults') { programState.filter = 'Adults'; app.innerHTML = programsPage('adults'); }
  else if (path === '/programs/business') { programState.filter = 'Business'; app.innerHTML = programsPage('business'); }
  else if (path === '/clubs') app.innerHTML = clubsPage();
  else if (path === '/assessment') app.innerHTML = assessmentPage();
  else if (path === '/dashboard/students') app.innerHTML = dashboardPage();
  else if (path === '/dashboard/schedule') app.innerHTML = schedulePage();
  else if (path === '/contact') app.innerHTML = contactPage();
  else app.innerHTML = layoutShell(`${pageHero('الصفحة غير موجودة', 'ارجع للرئيسية أو اختار مسار من القائمة.', '404', '/', 'العودة للرئيسية')}`);
  linkify();
  renderPrograms();
  renderClubs();
  renderStudents();
  bindForms();
  revealOnScroll();
}

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.1 });
  items.forEach(item => observer.observe(item));
}

menuButton?.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', String(!navLinks.classList.contains('hidden')));
});
window.addEventListener('popstate', render);
render();