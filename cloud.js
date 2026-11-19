/**
 * Google 具身真心话 · 3D 悬浮词云页面脚本
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

const GOOGLE_THEMES = ['blue', 'red', 'yellow', 'green'];

class TruthCloud3D {
  constructor(containerEl, items) {
    this.container = containerEl;
    this.items = items;
    this.nodes = [];

    this.baseSpeedY = 0.0028;
    this.baseSpeedX = 0.0006;
    this.velY = this.baseSpeedY;
    this.velX = this.baseSpeedX;

    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.time = 0;

    this.initNodes();
    this.bindInteraction();
    this.animate();
  }

  formatCloudSnippet(person) {
    const raw = (person.truth || '').trim();
    if (!raw || raw.startsWith('现场盲盒')) {
      return `✨ ${person.org.split('·')[0].trim()} · 具身真心话`;
    }
    return raw.length > 22 ? raw.slice(0, 21) + '…' : raw;
  }

  initNodes() {
    this.container.innerHTML = '';
    const N = this.items.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    this.nodes = this.items.map((person, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const theme = GOOGLE_THEMES[i % 4];
      const el = document.createElement('div');
      el.className = `cloud-tag tag-theme-${theme}`;

      const snippet = this.formatCloudSnippet(person);
      el.innerHTML = `
        <span class="tag-geo-dot"></span>
        <span class="tag-quote">“${this.escape(snippet)}”</span>
        <span class="tag-author">${this.escape(person.name)}</span>
      `;

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuoteModal(person, theme);
      });

      this.container.appendChild(el);

      return {
        el,
        x,
        y,
        z,
        phase: i * 0.73
      };
    });
  }

  bindInteraction() {
    const vp = document.getElementById('cloud-viewport');

    vp.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.velY = dx * 0.00035;
        this.velX = -dy * 0.00035;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      } else {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        this.velY += (nx * 0.0045 - this.velY) * 0.035;
        this.velX += (-ny * 0.0028 - this.velX) * 0.035;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch support for tablets/mobile
    vp.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - this.lastMouseX;
        const dy = e.touches[0].clientY - this.lastMouseY;
        this.velY = dx * 0.0004;
        this.velX = -dy * 0.0004;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  animate() {
    this.time += 0.022;

    const cosY = Math.cos(this.velY);
    const sinY = Math.sin(this.velY);
    const cosX = Math.cos(this.velX);
    const sinX = Math.sin(this.velX);

    const rx = Math.min(window.innerWidth * 0.42, 620);
    const ry = Math.min(window.innerHeight * 0.36, 350);
    const rz = 400;

    this.nodes.forEach(node => {
      const x1 = node.x * cosY - node.z * sinY;
      const z1 = node.z * cosY + node.x * sinY;

      const y2 = node.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + node.y * sinX;

      node.x = x1;
      node.y = y2;
      node.z = z2;

      const floatOffsetY = Math.sin(this.time + node.phase) * 10;

      const px = node.x * rx;
      const py = node.y * ry + floatOffsetY;
      const pz = node.z * rz;

      const depthNorm = (node.z + 1) / 2;
      const scale = 0.58 + depthNorm * 0.58;
      const opacity = 0.22 + Math.pow(depthNorm, 1.3) * 0.78;
      const blurPx = depthNorm < 0.32 ? ((0.32 - depthNorm) * 4.5).toFixed(1) : 0;

      node.el.style.transform = `translate3d(calc(-50% + ${px.toFixed(1)}px), calc(-50% + ${py.toFixed(1)}px), ${pz.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      node.el.style.opacity = opacity.toFixed(2);
      node.el.style.zIndex = Math.round(depthNorm * 100);
      node.el.style.filter = blurPx > 0 ? `blur(${blurPx}px)` : 'none';
    });

    requestAnimationFrame(() => this.animate());
  }

  escape(str = '') {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

function openQuoteModal(person, theme) {
  const modal = document.getElementById('quote-modal');
  const card = document.getElementById('quote-card');
  const orgEl = document.getElementById('quote-org');
  const textEl = document.getElementById('quote-full-text');
  const nameEl = document.getElementById('quote-author-name');

  card.style.boxShadow = `10px 10px 0 var(--g-${theme})`;
  orgEl.textContent = person.org;
  textEl.textContent = `“${person.truth}”`;
  nameEl.textContent = `${person.name} (${person.role || '参会嘉宾'})`;

  modal.classList.remove('is-hidden');
}

function closeQuoteModal() {
  document.getElementById('quote-modal').classList.add('is-hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const cloudContainer = document.getElementById('cloud-stage-3d');
  new TruthCloud3D(cloudContainer, ROSTER_LIST);

  document.getElementById('quote-close').addEventListener('click', closeQuoteModal);
  document.getElementById('quote-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quote-modal') closeQuoteModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeQuoteModal();
  });
});
