/**
 * Google 具身真心话 · 3D 分类漫游词云脚本
 * 36 条真实匿名真心话（已移除庄子文词条，不显示姓名、标题栏与底部切换条）
 * 通过键盘快捷键切换：1(正面好评) / 2(中性思辨) / 3(消极吐槽) / 4或0(全部) / ←→ 循环切换 / Esc 关闭弹窗
 */

const TRUTH_ITEMS = [
  // ======================== 正面好评 (17 条) ========================
  {
    truth: '期待一场具身领域数据×模型范式的变革',
    sentiment: 'positive'
  },
  {
    truth: '我对具身智能有个挺私人的期待：就是等我老了，在各种场景它能照顾好我，让我想去的地方还能去，想做的事情还能做',
    sentiment: 'positive'
  },
  {
    truth: '未来是具身的',
    sentiment: 'positive'
  },
  {
    truth: '希望蛋糕越做越大',
    sentiment: 'positive'
  },
  {
    truth: '在技术没有收敛的今天，任何尝试都值得',
    sentiment: 'positive'
  },
  {
    truth: 'Make Simulation Great Again',
    sentiment: 'positive'
  },
  {
    truth: '耐心长期做难而正确的事',
    sentiment: 'positive'
  },
  {
    truth: '需要行业共同努力推进具身的研发及落地',
    sentiment: 'positive'
  },
  {
    truth: '或许道路是曲折的，但我相信前途是光明的',
    sentiment: 'positive'
  },
  {
    truth: '一起加油',
    sentiment: 'positive'
  },
  {
    truth: '感觉类似GPT-6接入机器人的方案很有戏',
    sentiment: 'positive'
  },
  {
    truth: '未来可期!',
    sentiment: 'positive'
  },
  {
    truth: '希望具身智能2-3年以一批“场景专用、边界清晰、ROI可算”的具身系统在物流、巡检、零售、医疗配送等领域逐步铺开的方式兑现',
    sentiment: 'positive'
  },
  {
    truth: '这是一个很好很有未来的行业',
    sentiment: 'positive'
  },
  {
    truth: '具身行业任重道远，但physical AI是未来！',
    sentiment: 'positive'
  },
  {
    truth: '继续加油呀',
    sentiment: 'positive'
  },
  {
    truth: '还有很长的路 一起加油 互相上下游',
    sentiment: 'positive'
  },

  // ======================== 中性思辨 (12 条) ========================
  {
    truth: '慢科研是对的',
    sentiment: 'neutral'
  },
  {
    truth: '作为视觉神经科学领域的应届毕业生，是否有机会加入到具身智能行业中？',
    sentiment: 'neutral'
  },
  {
    truth: 'code always as the policy',
    sentiment: 'neutral'
  },
  {
    truth: '想聊一聊大家对于世界模型的看法，是故事还是真实技术方向？如果是后者，对其的技术预期是什么？',
    sentiment: 'neutral'
  },
  {
    truth: '目前大模型已进入自迭代，进入RSI，具身领域未来是否也会这样，未来大模型边界是否能够进入到具身智能领域',
    sentiment: 'neutral'
  },
  {
    truth: 'astra是不是具身的gpt时刻',
    sentiment: 'neutral'
  },
  {
    truth: '希望看到能真正落地的技术突破',
    sentiment: 'neutral'
  },
  {
    truth: '慢慢长征路刚刚开始',
    sentiment: 'neutral'
  },
  {
    truth: '希望可以更在落地方向发力',
    sentiment: 'neutral'
  },
  {
    truth: '后Astra时代具身基模的定位以及Sim在其中的作用',
    sentiment: 'neutral'
  },
  {
    truth: '具身智能的未来将走向哪里？',
    sentiment: 'neutral'
  },
  {
    truth: 'gpt时刻什么时候来临',
    sentiment: 'neutral'
  },

  // ======================== 消极吐槽 (7 条) ========================
  {
    truth: '具身智能行业啥时候能让我的股票不亏',
    sentiment: 'negative'
  },
  {
    truth: '可能都是给gpt打工的',
    sentiment: 'negative'
  },
  {
    truth: 'Astra时代下，VLA/WAM这种actor是否已经被淘汰了',
    sentiment: 'negative'
  },
  {
    truth: '模型方面应该走vla路线还是wam路线还是直接完全走llm路线，硬件方面真的可以做到和人一样灵巧和延迟嘛',
    sentiment: 'negative'
  },
  {
    truth: '什么时候能进家庭？成本能压到多少？路线会收敛到哪？',
    sentiment: 'negative'
  },
  {
    truth: '新agentic时代下vla wam 的路应该何去何从，我们尚在探索中',
    sentiment: 'negative'
  },
  {
    truth: '具身智能，是否还需要多少人的灵光一现',
    sentiment: 'negative'
  }
];

const CATEGORY_ORDER = ['positive', 'neutral', 'negative', 'all'];

const CLOUD_CATEGORIES = {
  positive: {
    key: 'positive',
    themes: ['green', 'blue']
  },
  neutral: {
    key: 'neutral',
    themes: ['blue', 'yellow']
  },
  negative: {
    key: 'negative',
    themes: ['red', 'yellow']
  },
  all: {
    key: 'all',
    themes: ['blue', 'red', 'yellow', 'green']
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
    return raw.length > 24 ? raw.slice(0, 23) + '…' : raw;
  }

  mountCategory(catKey) {
    this.activeCategory = catKey;
    const config = CLOUD_CATEGORIES[catKey];
    const items = this.getItemsForCategory(catKey);

    document.body.setAttribute('data-category', catKey);

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

  stepCategory(delta) {
    const targetCat = this.pendingCategory || this.activeCategory;
    const idx = CATEGORY_ORDER.indexOf(targetCat);
    const nextIdx = (idx + delta + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
    this.switchCategory(CATEGORY_ORDER[nextIdx]);
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

        const dAngleY = dx * 0.0042;
        const dAngleX = -dy * 0.0042;
        this.rotateAllNodes(dAngleY, dAngleX);

        this.dragVelY = Math.max(-4.5, Math.min(4.5, dx * 0.24));
        this.dragVelX = Math.max(-3.0, Math.min(3.0, -dy * 0.24));

        this.lastPtrX = e.clientX;
        this.lastPtrY = e.clientY;
      } else if (e.pointerType === 'mouse' && !this.isHoveringTag && !this.isModalOpen) {
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

    const targetSpeedScale = this.isModalOpen ? 0.0 : (this.isHoveringTag ? 0.12 : 1.0);
    const lerpAlpha = 1 - Math.exp(-10 * dt);
    this.speedScale += (targetSpeedScale - this.speedScale) * lerpAlpha;

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

    const rx = Math.min(this.vpWidth * 0.41, 610) * this.radiusScale;
    const ry = Math.min(this.vpHeight * 0.36, 340) * this.radiusScale;
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
  const textEl = document.getElementById('quote-full-text');

  card.style.boxShadow = `10px 10px 0 var(--g-${theme})`;
  badgeEl.className = `quote-sentiment-badge sent-${item.sentiment}`;
  badgeEl.textContent = SENTIMENT_LABELS[item.sentiment] || '具身真心话';
  textEl.textContent = `“${item.truth}”`;

  modal.classList.remove('is-hidden');
  if (cloudApp) cloudApp.setModalOpen(true);
}

function closeQuoteModal() {
  document.getElementById('quote-modal').classList.add('is-hidden');
  if (cloudApp) cloudApp.setModalOpen(false);
}

document.addEventListener('DOMContentLoaded', () => {
  const cloudContainer = document.getElementById('cloud-stage-3d');
  const cloudViewport = document.getElementById('cloud-viewport');
  cloudApp = new TruthCloud3D(cloudContainer, cloudViewport);

  document.getElementById('quote-close').addEventListener('click', closeQuoteModal);
  document.getElementById('quote-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quote-modal') closeQuoteModal();
  });

  // Pure keyboard switching:
  // 1 = 正面好评, 2 = 中性思辨, 3 = 消极吐槽, 4 or 0 = 全部词条, ArrowLeft/ArrowRight = 循环切换, Escape = 关闭弹窗
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuoteModal();
      return;
    }
    const keyMap = {
      '1': 'positive',
      '2': 'neutral',
      '3': 'negative',
      '4': 'all',
      '0': 'all'
    };
    if (keyMap[e.key]) {
      cloudApp.switchCategory(keyMap[e.key]);
    } else if (e.key === 'ArrowRight') {
      cloudApp.stepCategory(1);
    } else if (e.key === 'ArrowLeft') {
      cloudApp.stepCategory(-1);
    }
  });
});
