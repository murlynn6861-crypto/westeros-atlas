document.addEventListener('DOMContentLoaded', () => {
  const titles = ['王国地图 · Realm Map', '编年史 · Chronicle', '人物关系 · Blood & Oaths', '冰火世界大典 · Great Codex'];
  document.querySelectorAll('.tab').forEach((tab, index) => { if (titles[index]) tab.textContent = titles[index]; });

  const entries = [
    ['人物与血统 · Persons & Lineage', '人物与血统', '记录人物的出身、血缘、婚姻、称号与政治身份；原著事实、影视改编和未来推测分开标注。', '琼恩·雪诺（Jon Snow）在已出版原著中是守夜人总司令；电视剧关于其坦格利安血统的表述属于改编线。', '《权力的游戏》·琼恩 I；GoT S1–S8'],
    ['家族与纹章 · Houses & Heraldry', '家族与纹章', '连接封地、纹章、家训、继承关系与历史归附。', '史塔克家族（House Stark）以冰原狼为纹章，临冬城为中心；北境政治结局应与电视剧版本分列。', '《权力的游戏》·艾德 I；《冰与火的世界》'],
    ['地点与区域 · Places & Regions', '地点与区域', '记录地理、文化、势力归属、人物活动与相关事件。', '龙石岛（Dragonstone）连接征服战争、龙之舞与丹妮莉丝的归返。', '《火与血》；GoT S7'],
    ['事件与战役 · Events & Wars', '事件与战役', '战役词条按编年史、原著叙事和影视改编分别记录。', '伊耿征服（Aegon’s Conquest）改变了七国政治结构。', '《火与血》'],
    ['历史年代 · History & Chronology', '历史年代', '以伊耿历为锚点，比较维斯特洛历史、征服战争、原著主线、剧集与《龙之家族》时代。', '龙之舞（Dance of the Dragons）发生在伊耿历129–131年。', '《火与血》；House of the Dragon'],
    ['文化与信仰 · Culture & Faith', '文化与信仰', '涵盖旧神、七神、骑士制度、继承法与多恩传统。', '旧神（Old Gods）与北境神木林和长夜传说相连。', '《权力的游戏》·布兰章节']
  ];

  const panel = document.querySelector('#codex .entry');
  document.querySelectorAll('.codex-index button').forEach((button, index) => {
    const entry = entries[index];
    if (!entry) return;
    button.textContent = entry[0];
    button.addEventListener('click', () => {
      panel.innerHTML = `<h2 class="manuscript-title">${entry[0]}</h2><p>${entry[2]}</p><h3>条目示例 · Entry</h3><p>${entry[3]}</p><p class="source-note">来源 · Sources：${entry[4]}</p>`;
    });
  });
});
