/**
 * Google 具身真心话 · 3D 分类漫游词云脚本
 * 37 条真实问卷真心话 · 三类情感分类词云（正面好评 / 中性思辨 / 消极吐槽 + 全部）
 * 高帧率 2.5D GPU 合成驱动引擎（零 blur 滤镜、dt 帧率无关物理惯性、悬停减速、平滑切换过渡）
 */

const TRUTH_ITEMS = [
  // ======================== 正面好评 (17 条) ========================
  {
    name: '朱徽',
    role: '参会嘉宾',
    org: '荣耀终端股份有限公司 · 具身模型平台负责人',
    truth: '期待一场具身领域数据×模型范式的变革',
    sentiment: 'positive'
  },
  {
    name: '陈粤洋',
    role: '参会嘉宾',
    org: '时切科技 · 联创 & CEO',
    truth: '我对具身智能有个挺私人的期待：就是等我老了，在各种场景它能照顾好我，让我想去的地方还能去，想做的事情还能做',
    sentiment: 'positive'
  },
  {
    name: '刘逸阳',
    role: '参会嘉宾',
    org: '清华大学智能产业研究院 · 学生',
    truth: '未来是具身的',
    sentiment: 'positive'
  },
  {
    name: '贺一鸣',
    role: '参会嘉宾',
    org: '清华大学机械系 · 博士生',
    truth: '希望蛋糕越做越大',
    sentiment: 'positive'
  },
  {
    name: '张天秋',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '在技术没有收敛的今天，任何尝试都值得',
    sentiment: 'positive'
  },
  {
    name: '黄悦',
    role: '参会嘉宾',
    org: '智身科技 · 研究员',
    truth: 'Make Simulation Great Again',
    sentiment: 'positive'
  },
  {
    name: '谭恒楷',
    role: '圆桌嘉宾',
    org: '生数科技 · 世界模型负责人',
    truth: '耐心长期做难而正确的事',
    sentiment: 'positive'
  },
  {
    name: '马璁',
    role: '圆桌嘉宾',
    org: '北京星源智机器人科技有限公司 · 合伙人',
    truth: '需要行业共同努力推进具身的研发及落地',
    sentiment: 'positive'
  },
  {
    name: '胡王浩',
    role: '参会嘉宾',
    org: '清华大学电子工程系 · 博士生',
    truth: '或许道路是曲折的，但我相信前途是光明的',
    sentiment: 'positive'
  },
  {
    name: '王欣晖',
    role: '参会嘉宾',
    org: 'botworld · 创始人',
    truth: '一起加油',
    sentiment: 'positive'
  },
  {
    name: '黄力昂',
    role: '主旨演讲嘉宾',
    org: '共绩科技 · 联合创始人',
    truth: '感觉类似GPT-6接入机器人的方案很有戏',
    sentiment: 'positive'
  },
  {
    name: '徐超逸',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '未来可期!',
    sentiment: 'positive'
  },
  {
    name: '何畅',
    role: '参会嘉宾',
    org: '北京理工大学管理学院 / 探月具身智能社区 · MBA硕士生 / 公关和生态总监',
    truth: '希望具身智能2-3年以一批“场景专用、边界清晰、ROI可算”的具身系统在物流、巡检、零售、医疗配送等领域逐步铺开的方式兑现',
    sentiment: 'positive'
  },
  {
    name: '胡鹏飞',
    role: '受邀嘉宾',
    org: '普罗社 puluopic · 联合创始人',
    truth: '这是一个很好很有未来的行业',
    sentiment: 'positive'
  },
  {
    name: '王楠',
    role: '参会嘉宾',
    org: 'POOPSENSE 便知 · 创始人 & CEO',
    truth: '具身行业任重道远，但physical AI是未来！',
    sentiment: 'positive'
  },
  {
    name: '郭彦江',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '继续加油呀',
    sentiment: 'positive'
  },
  {
    name: '张艺潆',
    role: '参会嘉宾',
    org: '大模型公司（自由量级+新项目） · 联合创始人',
    truth: '还有很长的路 一起加油 互相上下游',
    sentiment: 'positive'
  },

  // ======================== 中性思辨 (12 条) ========================
  {
    name: '邱子昱',
    role: '参会嘉宾',
    org: '香港大学 Mobility Transformation Lab · 博士生',
    truth: '慢科研是对的',
    sentiment: 'neutral'
  },
  {
    name: '姚浩煊',
    role: '参会嘉宾',
    org: '北京大学生命科学学院唐世明实验室 · 视觉神经科学博士生',
    truth: '作为视觉神经科学领域的应届毕业生，是否有机会加入到具身智能行业中？',
    sentiment: 'neutral'
  },
  {
    name: '孟相汀',
    role: '参会嘉宾',
    org: '上海科技大学 · 博士生',
    truth: 'code always as the policy',
    sentiment: 'neutral'
  },
  {
    name: '洪东海',
    role: '参会嘉宾',
    org: '北京大学 · 硕士生（智能科学与技术）',
    truth: '想聊一聊大家对于世界模型的看法，是故事还是真实技术方向？如果是后者，对其的技术预期是什么？',
    sentiment: 'neutral'
  },
  {
    name: '吴合风',
    role: '参会嘉宾',
    org: '清华大学 · 硕士生',
    truth: '目前大模型已进入自迭代，进入RSI，具身领域未来是否也会这样，未来大模型边界是否能够进入到具身智能领域',
    sentiment: 'neutral'
  },
  {
    name: '曹家骏',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: 'astra是不是具身的gpt时刻',
    sentiment: 'neutral'
  },
  {
    name: '李世乾',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '希望看到能真正落地的技术突破',
    sentiment: 'neutral'
  },
  {
    name: '丁鹏翔',
    role: '参会嘉宾',
    org: '共生知行 · 创始人',
    truth: '慢慢长征路刚刚开始',
    sentiment: 'neutral'
  },
  {
    name: '邱迪聪',
    role: '参会嘉宾',
    org: '数耀量生 QuantSparkle.ai · 联合创始人 & CTO',
    truth: '希望可以更在落地方向发力',
    sentiment: 'neutral'
  },
  {
    name: '臧晟',
    role: '参会嘉宾',
    org: '新加坡南洋理工大学 AMI Lab · 博士生',
    truth: '后Astra时代具身基模的定位以及Sim在其中的作用',
    sentiment: 'neutral'
  },
  {
    name: '王博',
    role: '参会嘉宾',
    org: '北京大学 · 博士生',
    truth: '具身智能的未来将走向哪里？',
    sentiment: 'neutral'
  },
  {
    name: '韦小宝',
    role: '参会嘉宾',
    org: '北京大学 HMI Lab · 博士生',
    truth: 'gpt时刻什么时候来临',
    sentiment: 'neutral'
  },

  // ======================== 消极吐槽 (8 条) ========================
  {
    name: '庄子文',
    role: '参会嘉宾',
    org: '清华大学交叉信息研究院 · 博士生',
    truth: '一群不懂的人抄另一群不懂的人',
    sentiment: 'negative'
  },
  {
    name: '高敏',
    role: '探月主办方',
    org: '探月具身智能社区 · 联合创始人',
    truth: '具身智能行业啥时候能让我的股票不亏',
    sentiment: 'negative'
  },
  {
    name: '李和衷',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '可能都是给gpt打工的',
    sentiment: 'negative'
  },
  {
    name: '钱泽中',
    role: '参会嘉宾',
    org: '北京大学 HMI Lab · 博士生',
    truth: 'Astra时代下，VLA/WAM这种actor是否已经被淘汰了',
    sentiment: 'negative'
  },
  {
    name: '冯志远',
    role: '参会嘉宾',
    org: '清华大学 · 博士生',
    truth: '模型方面应该走vla路线还是wam路线还是直接完全走llm路线，硬件方面真的可以做到和人一样灵巧和延迟嘛',
    sentiment: 'negative'
  },
  {
    name: '洪戴维',
    role: '参会嘉宾',
    org: '清华大学电子工程系 / DISCOVER Lab · 博士研究生',
    truth: '什么时候能进家庭？成本能压到多少？路线会收敛到哪？',
    sentiment: 'negative'
  },
  {
    name: '王瑞恒',
    role: '参会嘉宾',
    org: '西安交通大学 · 硕士生',
    truth: '新agentic时代下vla wam 的路应该何去何从，我们尚在探索中',
    sentiment: 'negative'
  },
  {
    name: '马国政',
    role: '参会嘉宾',
    org: '南洋理工大学 GRAIL · 博士生',
    truth: '具身智能，是否还需要多少人的灵光一现',
    sentiment: 'negative'
  }
];

const CLOUD_CATEGORIES = {
  positive: {
    key: 'positive',
    title: '正面好评',
    subtitle: '乐观期待与行业愿景',
    themes: ['green', 'blue'],
    accent: 'green'
  },
  neutral: {
    key: 'neutral',
    title: '中性思辨',
    subtitle: '理性探讨与技术发问',
    themes: ['blue', 'yellow'],
    accent: 'blue'
  },
  negative: {
    key: 'negative',
    title: '消极吐槽',
    subtitle: '犀利批判与现实焦虑',
    themes: ['red', 'yellow'],
    accent: 'red'
  },
  all: {
    key: 'all',
    title: '全部词条',
    subtitle: '全景具身真心话漫游',
    themes: ['blue', 'red', 'yellow', 'green'],
    accent: 'blue'
  }
};

const SENTIMENT_LABELS = {
  positive: '正面好评',
  neutral: '中性思辨',
  negative: '消极吐槽'
};

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

class TruthCloud3D {
  constructor(containerEl, viewportEl) {
    this.container = containerEl;
    this.viewport = viewportEl;
    this.nodes = [];
    this.activeCategory = 'positive';

    // Frame-rate independent angular physics (rad/s)
    this.baseVelY = 0.24;
    this.baseVelX = 0.045;
    this.dragVelY = 0;
    this.dragVelX = 0;
    this.parallaxVelY = 0;
    this.parallaxVelX = 0;
    this.speedScale = 1;

    this.isDragging = false;
    this.isHoveringTag = false;
    this.isModalOpen = false;
    this.dragDistance = 0;
    this.activePointerId = null;
    this.lastPtrX = 0;
    this.lastPtrY = 0;

    // Transition state ('idle' | 'exiting' | 'entering')
    this.transitionState = 'idle';
    this.transitionElapsed = 0;
    this.exitDuration = 0.20;
    this.enterDuration = 0.50;
    this.pendingCategory = null;

    this.elapsed = 0;
    this.lastFrameTime = 0;
    this.vpWidth = window.innerWidth;
    this.vpHeight = window.innerHeight;
    this.resizeTimer = null;

    this.bindInteraction();
    this.mountCategory('positive');
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => this.measureNodes());
    }
    requestAnimationFrame((now) => this.loop(now));
  }

  getItemsForCategory(catKey) {
    if (catKey === 'all') return TRUTH_ITEMS;
    return TRUTH_ITEMS.filter((item) => item.sentiment === catKey);
  }

  formatCloudSnippet(item) {
    const raw = (item.truth || '').trim();
    return raw.length > 22 ? raw.slice(0, 21) + '…' : raw;
  }

  mountCategory(catKey) {
    this.activeCategory = catKey;
    const config = CLOUD_CATEGORIES[catKey];
    const items = this.getItemsForCategory(catKey);

    document.body.setAttribute('data-category', catKey);
    const subtitleEl = document.getElementById('cloud-subtitle');
    if (subtitleEl) {
      subtitleEl.textContent = `${config.title} · ${config.subtitle}（${items.length} 条）`;
    }

    this.container.innerHTML = '';
    const N = items.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    // Scale sphere radius & card size dynamically by item count
    if (N <= 10) {
      this.radiusScale = 0.74;
      this.cardBaseScale = 1.12;
    } else if (N <= 18) {
      this.radiusScale = 0.88;
      this.cardBaseScale = 1.04;
    } else {
      this.radiusScale = 1.0;
      this.cardBaseScale = 1.0;
    }

    this.nodes = items.map((item, i) => {
      const y = N === 1 ? 0 : 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const theme = config.themes[i % config.themes.length];
      const el = document.createElement('div');
      el.className = `cloud-tag tag-theme-${theme}`;

      const snippet = this.formatCloudSnippet(item);
      el.innerHTML = `
        <span class="tag-geo-dot"></span>
        <span class="tag-quote">“${this.escape(snippet)}”</span>
        <span class="tag-author">${this.escape(item.name)}</span>
      `;

      el.addEventListener('pointerenter', () => {
        this.isHoveringTag = true;
      });
      el.addEventListener('pointerleave', () => {
        this.isHoveringTag = false;
      });
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.dragDistance > 6) return;
        openQuoteModal(item, theme);
      });

      this.container.appendChild(el);

      return {
        el,
        x,
        y,
        z,
        phase: i * 0.73,
        delay: Math.min(i * 0.008, 0.14),
        halfW: 0,
        halfH: 0,
        lastZ: -1
      };
    });

    this.measureNodes();
    this.isHoveringTag = false;
    this.transitionState = 'entering';
    this.transitionElapsed = 0;
  }

  measureNodes() {
    this.vpWidth = window.innerWidth;
    this.vpHeight = window.innerHeight;
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      n.halfW = n.el.offsetWidth * 0.5;
      n.halfH = n.el.offsetHeight * 0.5;
    }
  }

  switchCategory(catKey) {
    if (!CLOUD_CATEGORIES[catKey]) return;
    if (catKey === this.activeCategory && this.transitionState !== 'exiting') return;

    this.pendingCategory = catKey;
    if (this.transitionState !== 'exiting') {
      this.transitionState = 'exiting';
      this.transitionElapsed = 0;
    }
  }

  setModalOpen(open) {
    this.isModalOpen = open;
    if (open) {
      this.isHoveringTag = false;
    }
  }

  rotateAllNodes(ay, ax) {
    const cosY = Math.cos(ay);
    const sinY = Math.sin(ay);
    const cosX = Math.cos(ax);
    const sinX = Math.sin(ax);

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const x1 = node.x * cosY - node.z * sinY;
      const z1 = node.z * cosY + node.x * sinY;
      const y2 = node.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + node.y * sinX;

      node.x = x1;
      node.y = y2;
      node.z = z2;
    }
  }

  bindInteraction() {
    this.viewport.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      this.isDragging = true;
      this.activePointerId = e.pointerId;
      this.dragDistance = 0;
      this.lastPtrX = e.clientX;
      this.lastPtrY = e.clientY;
      this.dragVelY = 0;
      this.dragVelX = 0;
    });

    window.addEventListener('pointermove', (e) => {
      if (this.isDragging && e.pointerId === this.activePointerId) {
        const dx = e.clientX - this.lastPtrX;
        const dy = e.clientY - this.lastPtrY;
        this.dragDistance += Math.hypot(dx, dy);

        // 1:1 responsive direct rotation while dragging
        const dAngleY = dx * 0.0042;
        const dAngleX = -dy * 0.0042;
        this.rotateAllNodes(dAngleY, dAngleX);

        // Track instantaneous angular velocity for smooth release inertia
        this.dragVelY = Math.max(-4.5, Math.min(4.5, dx * 0.24));
        this.dragVelX = Math.max(-3.0, Math.min(3.0, -dy * 0.24));

        this.lastPtrX = e.clientX;
        this.lastPtrY = e.clientY;
      } else if (e.pointerType === 'mouse' && !this.isHoveringTag && !this.isModalOpen) {
        // Gentle clamped cursor steering that smoothly decays when pointer stops
        const nx = (e.clientX / this.vpWidth - 0.5) * 2;
        const ny = (e.clientY / this.vpHeight - 0.5) * 2;
        this.parallaxVelY = Math.max(-0.55, Math.min(0.55, nx * 0.42));
        this.parallaxVelX = Math.max(-0.35, Math.min(0.35, -ny * 0.26));
      }
    });

    const endDrag = (e) => {
      if (this.isDragging && e.pointerId === this.activePointerId) {
        this.isDragging = false;
        this.activePointerId = null;
      }
    };

    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => this.measureNodes(), 120);
    });
  }

  loop(now) {
    if (!this.lastFrameTime) this.lastFrameTime = now;
    const dt = Math.min((now - this.lastFrameTime) / 1000, 0.05);
    this.lastFrameTime = now;
    this.elapsed += dt;

    // Smoothly handle exit -> mount -> enter transition
    let isExiting = false;
    let exitProgress = 0;

    if (this.transitionState === 'exiting') {
      this.transitionElapsed += dt;
      exitProgress = Math.min(1, this.transitionElapsed / this.exitDuration);
      isExiting = true;
      if (exitProgress >= 1) {
        const nextCat = this.pendingCategory || 'positive';
        this.pendingCategory = null;
        this.mountCategory(nextCat);
      }
    } else if (this.transitionState === 'entering') {
      this.transitionElapsed += dt;
      if (this.transitionElapsed >= this.enterDuration + 0.16) {
        this.transitionState = 'idle';
      }
    }

    // Target ambient speed multiplier: freeze on modal, slow down smoothly on hover
    const targetSpeedScale = this.isModalOpen ? 0.0 : (this.isHoveringTag ? 0.12 : 1.0);
    const lerpAlpha = 1 - Math.exp(-10 * dt);
    this.speedScale += (targetSpeedScale - this.speedScale) * lerpAlpha;

    // Exponential decay on drag inertia & passive cursor steering
    if (!this.isDragging) {
      const dragDecay = Math.exp(-3.5 * dt);
      const parallaxDecay = Math.exp(-2.8 * dt);
      this.dragVelY *= dragDecay;
      this.dragVelX *= dragDecay;
      this.parallaxVelY *= parallaxDecay;
      this.parallaxVelX *= parallaxDecay;

      const effectiveVelY = (this.baseVelY + this.parallaxVelY) * this.speedScale + this.dragVelY;
      const effectiveVelX = (this.baseVelX + this.parallaxVelX) * this.speedScale + this.dragVelX;

      this.rotateAllNodes(effectiveVelY * dt, effectiveVelX * dt);
    }

    // Ellipsoid spatial dimensions
    const rx = Math.min(this.vpWidth * 0.41, 610) * this.radiusScale;
    const ry = Math.min(this.vpHeight * 0.34, 320) * this.radiusScale;
    const rz = 380 * this.radiusScale;
    const focal = 980;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      let animScale = 1;
      let animOpacity = 1;
      let radialMultiplier = 1;

      if (isExiting) {
        const p = easeOutCubic(exitProgress);
        animScale = 1 - p * 0.45;
        animOpacity = 1 - p;
        radialMultiplier = 1 + p * 0.22;
      } else if (this.transitionState === 'entering') {
        const localT = Math.max(0, Math.min(1, (this.transitionElapsed - node.delay) / this.enterDuration));
        const p = easeOutCubic(localT);
        animScale = 0.38 + p * 0.62;
        animOpacity = p;
        radialMultiplier = 0.55 + p * 0.45;
      }

      const floatOffsetY = Math.sin(this.elapsed * 1.15 + node.phase) * 7;

      const px = node.x * rx * radialMultiplier;
      const py = node.y * ry * radialMultiplier + floatOffsetY;
      const pz = node.z * rz * radialMultiplier;

      // Clean 2.5D perspective projection rendered purely in GPU 2D transform
      const persp = focal / (focal - pz);
      const screenX = px * persp;
      const screenY = py * persp;

      const depthNorm = Math.max(0, Math.min(1, (node.z + 1) * 0.5));
      const scale = (0.58 + depthNorm * 0.56) * this.cardBaseScale * animScale;
      const opacity = (0.20 + Math.pow(depthNorm, 1.35) * 0.80) * animOpacity;

      const tx = (screenX - node.halfW).toFixed(1);
      const ty = (screenY - node.halfH).toFixed(1);

      node.el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale.toFixed(4)})`;
      node.el.style.opacity = opacity.toFixed(3);

      const newZ = Math.round(depthNorm * 100);
      if (newZ !== node.lastZ) {
        node.lastZ = newZ;
        node.el.style.zIndex = newZ;
      }
    }

    requestAnimationFrame((t) => this.loop(t));
  }

  escape(str = '') {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

let cloudApp = null;

function openQuoteModal(item, theme) {
  const modal = document.getElementById('quote-modal');
  const card = document.getElementById('quote-card');
  const badgeEl = document.getElementById('quote-sentiment-badge');
  const orgEl = document.getElementById('quote-org');
  const textEl = document.getElementById('quote-full-text');
  const nameEl = document.getElementById('quote-author-name');

  card.style.boxShadow = `10px 10px 0 var(--g-${theme})`;
  badgeEl.className = `quote-sentiment-badge sent-${item.sentiment}`;
  badgeEl.textContent = SENTIMENT_LABELS[item.sentiment] || '具身真心话';
  orgEl.textContent = item.org;
  textEl.textContent = `“${item.truth}”`;
  nameEl.textContent = `${item.name} (${item.role || '参会嘉宾'})`;

  modal.classList.remove('is-hidden');
  if (cloudApp) cloudApp.setModalOpen(true);
}

function closeQuoteModal() {
  document.getElementById('quote-modal').classList.add('is-hidden');
  if (cloudApp) cloudApp.setModalOpen(false);
}

function setActiveCategoryButton(catKey) {
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.category === catKey);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Update live category counts dynamically
  const posCount = TRUTH_ITEMS.filter((i) => i.sentiment === 'positive').length;
  const neuCount = TRUTH_ITEMS.filter((i) => i.sentiment === 'neutral').length;
  const negCount = TRUTH_ITEMS.filter((i) => i.sentiment === 'negative').length;
  document.getElementById('count-positive').textContent = posCount;
  document.getElementById('count-neutral').textContent = neuCount;
  document.getElementById('count-negative').textContent = negCount;
  document.getElementById('count-all').textContent = TRUTH_ITEMS.length;

  const cloudContainer = document.getElementById('cloud-stage-3d');
  const cloudViewport = document.getElementById('cloud-viewport');
  cloudApp = new TruthCloud3D(cloudContainer, cloudViewport);

  // Category switch buttons
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      setActiveCategoryButton(cat);
      cloudApp.switchCategory(cat);
    });
  });

  // Modal close listeners
  document.getElementById('quote-close').addEventListener('click', closeQuoteModal);
  document.getElementById('quote-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quote-modal') closeQuoteModal();
  });

  // Keyboard shortcuts: 1/2/3/4 to switch clouds, Escape to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuoteModal();
      return;
    }
    const keyMap = { '1': 'positive', '2': 'neutral', '3': 'negative', '4': 'all' };
    if (keyMap[e.key]) {
      const cat = keyMap[e.key];
      setActiveCategoryButton(cat);
      cloudApp.switchCategory(cat);
    }
  });
});
