/**
 * Google 具身真心话 · 现场抽人上台网页
 * 已内置问卷全量真实嘉宾名单（共 44 位）
 */

const ROSTER_LIST = [
  {
    name: '庄子文',
    role: '参会嘉宾',
    org: '清华大学交叉信息研究院 · 博士生',
    truth: '一群不懂的人抄另一群不懂的人'
  },
  {
    name: '高敏',
    role: '探月主办方',
    org: '探月具身智能社区 · 联合创始人',
    truth: '具身智能行业啥时候能让我的股票不亏'
  },
  {
    name: '朱徽',
    role: '参会嘉宾',
    org: '荣耀终端股份有限公司 · 具身模型平台负责人',
    truth: '期待一场具身领域数据×模型范式的变革'
  },
  {
    name: '邱子昱',
    role: '参会嘉宾',
    org: '香港大学 Mobility Transformation Lab · 博士生',
    truth: '慢科研是对的'
  },
  {
    name: '冯志远',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '模型方面应该走vla路线还是wam路线还是直接完全走llm路线，硬件方面真的可以做到和人一样灵巧和延迟嘛'
  },
  {
    name: '姚浩煊',
    role: '参会嘉宾',
    org: '北京大学生命科学学院唐世明实验室 · 视觉神经科学博士生',
    truth: '作为视觉神经科学领域的应届毕业生，是否有机会加入到具身智能行业中？'
  },
  {
    name: '孟相汀',
    role: '参会嘉宾',
    org: '上海科技大学 · 博士生',
    truth: 'code always as the policy'
  },
  {
    name: '陈粤洋',
    role: '参会嘉宾',
    org: '时切科技 · 联创 & CEO',
    truth: '我对具身智能有个挺私人的期待：就是等我老了，在各种场景它能照顾好我，让我想去的地方还能去，想做的事情还能做'
  },
  {
    name: '洪东海',
    role: '参会嘉宾',
    org: '北京大学 · 硕士生（智能科学与技术）',
    truth: '想聊一聊大家对于世界模型的看法，是故事还是真实技术方向？如果是后者，对其的技术预期是什么？'
  },
  {
    name: '刘逸阳',
    role: '参会嘉宾',
    org: '清华大学智能产业研究院 · 学生',
    truth: '未来是具身的'
  },
  {
    name: '吴合风',
    role: '参会嘉宾',
    org: '清华大学 · 硕士生',
    truth: '目前大模型已进入自迭代，进入RSI，具身领域未来是否也会这样，未来大模型边界是否能够进入到具身智能领域'
  },
  {
    name: '贺一鸣',
    role: '参会嘉宾',
    org: '清华大学机械系 · 博士生',
    truth: '希望蛋糕越做越大'
  },
  {
    name: '张天秋',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '在技术没有收敛的今天，任何尝试都值得'
  },
  {
    name: '黄悦',
    role: '参会嘉宾',
    org: '智身科技 · 研究员',
    truth: 'Make Simulation Great Again'
  },
  {
    name: '谭恒楷',
    role: '圆桌嘉宾',
    org: '生数科技 · 世界模型负责人',
    truth: '耐心长期做难而正确的事'
  },
  {
    name: '杨润心',
    role: '圆桌嘉宾',
    org: '自然常数机器人 · 创始人',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '池晓威',
    role: '圆桌嘉宾',
    org: '莫刻机器人 · CEO',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '马璁',
    role: '圆桌嘉宾',
    org: '北京星源智机器人科技有限公司 · 合伙人',
    truth: '需要行业共同努力推进具身的研发及落地'
  },
  {
    name: '洪戴维',
    role: '参会嘉宾',
    org: '清华大学电子工程系 / DISCOVER Lab · 博士研究生',
    truth: '什么时候能进家庭？成本能压到多少？路线会收敛到哪？'
  },
  {
    name: '曹家骏',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: 'astra是不是具身的gpt时刻'
  },
  {
    name: '胡王浩',
    role: '参会嘉宾',
    org: '清华大学电子工程系 · 博士生',
    truth: '或许道路是曲折的，但我相信前途是光明的'
  },
  {
    name: '钱泽中',
    role: '参会嘉宾',
    org: '北京大学 HMI Lab · 博士生',
    truth: 'Astra时代下，VLA/WAM这种actor是否已经被淘汰了'
  },
  {
    name: '王欣晖',
    role: '参会嘉宾',
    org: 'botworld · 创始人',
    truth: '一起加油'
  },
  {
    name: '李世乾',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '希望看到能真正落地的技术突破'
  },
  {
    name: '黄力昂',
    role: '主旨演讲嘉宾',
    org: '共绩科技 · 联合创始人',
    truth: '感觉类似GPT-6接入机器人的方案很有戏'
  },
  {
    name: '丁鹏翔',
    role: '参会嘉宾',
    org: '共生知行 · 创始人',
    truth: '慢慢长征路刚刚开始'
  },
  {
    name: '郑思鹏',
    role: '圆桌嘉宾',
    org: '北京智在无界科技有限公司 · 预训练负责人',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '李和衷',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '可能都是给gpt打工的'
  },
  {
    name: '王鹏伟',
    role: '主旨演讲嘉宾',
    org: '子午线公司 · 创始人',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '申倩',
    role: '探月主办方',
    org: '探月具身智能社区 · 市场总监',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '刘思彤',
    role: '探月主办方',
    org: '探月具身智能社区 · 联合创始人',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: '徐超逸',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '未来可期!'
  },
  {
    name: '王瑞恒',
    role: '参会嘉宾',
    org: '西安交通大学 · 硕士生',
    truth: '新agentic时代下vla wam 的路应该何去何从，我们尚在探索中'
  },
  {
    name: '何畅',
    role: '参会嘉宾',
    org: '北京理工大学管理学院 / 探月具身智能社区 · MBA硕士生 / 公关和生态总监',
    truth: '希望具身智能2-3年以一批“场景专用、边界清晰、ROI可算”的具身系统在物流、巡检、零售、医疗配送等领域逐步铺开的方式兑现'
  },
  {
    name: '邱迪聪',
    role: '参会嘉宾',
    org: '数耀量生 QuantSparkle.ai · 联合创始人 & CTO',
    truth: '希望可以更在落地方向发力'
  },
  {
    name: '臧晟',
    role: '参会嘉宾',
    org: '新加坡南洋理工大学 AMI Lab · 博士生',
    truth: '后Astra时代具身基模的定位以及Sim在其中的作用'
  },
  {
    name: '王博',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '具身智能的未来将走向哪里？'
  },
  {
    name: '胡鹏飞',
    role: '受邀嘉宾',
    org: '普罗社 puluopic · 联合创始人',
    truth: '这是一个很好很有未来的行业'
  },
  {
    name: '王楠',
    role: '参会嘉宾',
    org: 'POOPSENSE 便知 · 创始人 & CEO',
    truth: '具身行业任重道远，但physical AI是未来！'
  },
  {
    name: '郭彦江',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '继续加油呀'
  },
  {
    name: '张艺潆',
    role: '参会嘉宾',
    org: '大模型公司（自由量级+新项目） · 联合创始人',
    truth: '还有很长的路 一起加油 互相上下游'
  },
  {
    name: '马国政',
    role: '参会嘉宾',
    org: '南洋理工大学 GRAIL · 博士生',
    truth: '具身智能，是否还需要多少人的灵光一现'
  },
  {
    name: '韦小宝',
    role: '参会嘉宾',
    org: '北京大学 HMI Lab · 博士生',
    truth: 'gpt时刻什么时候来临'
  },
  {
    name: '胡钰承',
    role: '参会嘉宾',
    org: '受邀嘉宾 · 具身智能专场',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: 'Heather Zhang',
    role: '参会嘉宾',
    org: '受邀嘉宾 · 具身智能专场',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  },
  {
    name: 'Iris Chen',
    role: '参会嘉宾',
    org: '受邀嘉宾 · 具身智能专场',
    truth: '现场盲盒 · 欢迎在台上即兴分享你的具身真心话！'
  }
];

// 优先抽取顺序（按指定顺序依次登台，抽完后其余嘉宾随机不重复抽取）
const PRIORITY_NAMES = [
  '庄子文',
  '丁鹏翔',
  '朱徽',
  '胡钰承',
  '贺一鸣',
  'Heather Zhang',
  'Iris Chen',
  '刘逸阳',
  '洪戴维',
  '胡王浩',
  '黄悦',
  '徐超逸',
  '李和衷',
  '陈粤洋'
];

const GOOGLE_THEMES = ['blue', 'red', 'yellow', 'green'];
const GOOGLE_HEX = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

let isRolling = false;
let rollTimer = null;
let priorityQueue = [];
let randomPoolIndices = [];

function initDrawPools() {
  const prioritySet = new Set();
  priorityQueue = [];

  PRIORITY_NAMES.forEach(targetName => {
    const idx = ROSTER_LIST.findIndex(p => p.name === targetName);
    if (idx !== -1 && !prioritySet.has(idx)) {
      priorityQueue.push(idx);
      prioritySet.add(idx);
    }
  });

  randomPoolIndices = ROSTER_LIST
    .map((_, i) => i)
    .filter(i => !prioritySet.has(i));
}

initDrawPools();

// Web Audio API Synthesizer for crisp Google-style Marimba chimes
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
  tick(step = 0) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(notes[step % notes.length], now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.065);
  }
  win() {
    this.init();
    if (!this.ctx) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const now = this.ctx.currentTime + i * 0.075;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.58);
    });
  }
}

const sfx = new SoundFX();

// Bauhaus 4-Color Embodied AI Avatar Generator
function buildBauhausAvatar(seedIndex = 0) {
  const c1 = GOOGLE_HEX[seedIndex % 4];
  const c2 = GOOGLE_HEX[(seedIndex + 1) % 4];
  const c3 = GOOGLE_HEX[(seedIndex + 2) % 4];
  const c4 = GOOGLE_HEX[(seedIndex + 3) % 4];
  const style = seedIndex % 3;

  if (style === 0) {
    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none">
        <rect width="100" height="100" fill="#F8F9FA"/>
        <circle cx="50" cy="17" r="7" fill="${c2}" stroke="#202124" stroke-width="2.5"/>
        <line x1="50" y1="24" x2="50" y2="32" stroke="#202124" stroke-width="3"/>
        <rect x="22" y="32" width="56" height="46" rx="14" fill="${c1}" stroke="#202124" stroke-width="3"/>
        <rect x="31" y="44" width="38" height="15" rx="7.5" fill="#FFFFFF" stroke="#202124" stroke-width="2.5"/>
        <circle cx="41" cy="51.5" r="4.5" fill="${c3}"/>
        <circle cx="59" cy="51.5" r="4.5" fill="${c4}"/>
        <rect x="39" y="66" width="22" height="5" rx="2.5" fill="${c3}"/>
      </svg>`;
  } else if (style === 1) {
    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none">
        <rect width="100" height="100" fill="#F8F9FA"/>
        <circle cx="42" cy="50" r="26" fill="${c1}" stroke="#202124" stroke-width="2.5"/>
        <rect x="44" y="28" width="34" height="44" rx="10" fill="${c3}" stroke="#202124" stroke-width="2.5"/>
        <circle cx="42" cy="50" r="10" fill="#FFFFFF" stroke="#202124" stroke-width="2.5"/>
        <circle cx="62" cy="50" r="6" fill="${c2}"/>
        <polygon points="22,82 78,82 50,64" fill="${c4}" stroke="#202124" stroke-width="2.5"/>
      </svg>`;
  } else {
    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none">
        <rect width="100" height="100" fill="#F8F9FA"/>
        <circle cx="34" cy="34" r="17" fill="${c1}" stroke="#202124" stroke-width="2.5"/>
        <rect x="54" y="18" width="26" height="26" rx="6" fill="${c2}" stroke="#202124" stroke-width="2.5"/>
        <polygon points="34,54 17,82 51,82" fill="${c3}" stroke="#202124" stroke-width="2.5"/>
        <rect x="54" y="58" width="28" height="20" rx="10" fill="${c4}" stroke="#202124" stroke-width="2.5"/>
      </svg>`;
  }
}

function renderPerson(person, idx, isLocked = false) {
  const theme = GOOGLE_THEMES[idx % 4];
  const stageCard = document.getElementById('stage-card');
  const avatarFrame = document.getElementById('avatar-frame');
  const orgEl = document.getElementById('speaker-org');
  const nameEl = document.getElementById('speaker-name');
  const truthEl = document.getElementById('truth-content');
  const statusEl = document.getElementById('stage-status-tag');

  avatarFrame.innerHTML = buildBauhausAvatar(idx);
  orgEl.className = `speaker-org-tag tag-${theme}`;
  orgEl.textContent = person.org;
  nameEl.textContent = person.name;
  truthEl.textContent = `“${person.truth}”`;

  stageCard.className = `stage-card accent-${theme}`;
  if (isLocked) {
    void stageCard.offsetWidth;
    stageCard.classList.add('winner-locked');
    statusEl.textContent = `${person.role || '登台嘉宾'} · ON STAGE`;
  }
}

function toggleDraw() {
  const btn = document.getElementById('btn-draw');
  const btnLabel = document.getElementById('btn-label');
  const statusEl = document.getElementById('stage-status-tag');

  if (!isRolling) {
    // Refill pools if everyone has been drawn once
    if (priorityQueue.length === 0 && randomPoolIndices.length === 0) {
      initDrawPools();
    }

    isRolling = true;
    document.body.classList.add('is-rolling');
    btn.classList.add('is-rolling');
    btnLabel.textContent = '停止并锁定嘉宾';
    statusEl.textContent = 'SELECTING · 正在抽取...';

    let step = 0;
    rollTimer = setInterval(() => {
      step++;
      sfx.tick(step);
      const randIdx = Math.floor(Math.random() * ROSTER_LIST.length);
      renderPerson(ROSTER_LIST[randIdx], randIdx, false);
    }, 70);
  } else {
    clearInterval(rollTimer);
    isRolling = false;
    document.body.classList.remove('is-rolling');
    btn.classList.remove('is-rolling');
    btnLabel.textContent = '抽取下一位分享嘉宾';

    // Pick in priority order first, then randomly from remaining guests
    let chosenIdx;
    if (priorityQueue.length > 0) {
      chosenIdx = priorityQueue.shift();
    } else {
      const poolPos = Math.floor(Math.random() * randomPoolIndices.length);
      chosenIdx = randomPoolIndices.splice(poolPos, 1)[0];
    }
    const winner = ROSTER_LIST[chosenIdx];

    renderPerson(winner, chosenIdx, true);
    sfx.win();
    launchConfetti();
  }
}

// 4-Color Geometric Confetti
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const shapes = ['circle', 'square', 'triangle', 'pill'];
  const particles = Array.from({ length: 90 }, (_, i) => ({
    x: canvas.width * (0.3 + Math.random() * 0.4),
    y: canvas.height * 0.48,
    vx: (Math.random() - 0.5) * 18,
    vy: -(Math.random() * 14 + 6),
    gravity: 0.36,
    size: Math.random() * 9 + 6,
    color: GOOGLE_HEX[i % 4],
    shape: shapes[i % 4],
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.16,
    alpha: 1
  }));

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.rot += p.vr;
      if (p.y > canvas.height - 80) p.alpha -= 0.03;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'square') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.shape === 'pill') {
          ctx.beginPath();
          ctx.roundRect(-p.size * 0.8, -p.size * 0.3, p.size * 1.6, p.size * 0.6, 4);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.6);
          ctx.lineTo(-p.size * 0.6, p.size * 0.5);
          ctx.lineTo(p.size * 0.6, p.size * 0.5);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    });
    if (active) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  frame();
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial idle avatar
  document.getElementById('avatar-frame').innerHTML = buildBauhausAvatar(0);

  document.getElementById('btn-draw').addEventListener('click', toggleDraw);

  window.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      e.preventDefault();
      toggleDraw();
    }
  });
});
