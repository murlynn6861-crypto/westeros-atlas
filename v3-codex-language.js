document.addEventListener('DOMContentLoaded', () => {
  const uiStyle = document.createElement('style');
  uiStyle.textContent = `
    .season-buttons { gap: 6px; }
    .season-buttons .season, #timelineButtons .season {
      width: auto; min-width: 48px; height: 31px; padding: 0 8px;
      white-space: nowrap; line-height: 29px; border-radius: 0;
    }
    @media (max-width: 800px) {
      .season-buttons { gap: 4px; }
      .season-buttons .season, #timelineButtons .season { min-width: 43px; padding: 0 6px; font-size: 11px; }
    }
  `;
  document.head.appendChild(uiStyle);

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

  // 电视剧改编线：界面中文为主，英文仅保留为正式剧名与检索术语。
  const chronicle = [
    ['第一季：权力的游戏（A Game of Thrones）', '王权继承危机从君临蔓延至北境、河间地与狭海彼岸。', [
      ['伊耿历 298 年', '国王之手之死', '琼恩·艾林死亡后，艾德·史塔克受劳勃召唤前往君临，并逐步发现王室子嗣的真相。', 'GoT S1E1–E7'],
      ['伊耿历 298 年', '艾德之死', '乔佛里下令处决艾德，谈判破裂，北境与兰尼斯特的战争全面爆发。', 'GoT S1E9'],
      ['伊耿历 298 年', '龙焰重临', '丹妮莉丝在卓戈的葬礼火堆中孵化三条龙，坦格利安复辟线由此展开。', 'GoT S1E10']]],
    ['第二季：列王的纷争（A Clash of Kings）', '五位君王分别提出主张；黑水河之战决定君临暂时不易手。', [
      ['伊耿历 299 年', '五王之战', '乔佛里、史坦尼斯、蓝礼、罗柏与巴隆分别争夺王位或独立，战线横贯维斯特洛。', 'GoT S2'],
      ['伊耿历 299 年', '黑水河之战', '提利昂以野火阻滞史坦尼斯舰队，提利尔—兰尼斯特同盟及时抵达，守住首都。', 'GoT S2E9'],
      ['伊耿历 299 年', '临冬城陷落', '席恩占领临冬城，随后波顿势力借机控制北境局势。', 'GoT S2E6–E10']]],
    ['第三季：冰雨的风暴（A Storm of Swords）', '政治同盟在婚宴上以背叛收场，奴隶湾则出现新的解放力量。', [
      ['伊耿历 300 年', '红色婚礼', '佛雷与波顿在兰尼斯特支持下杀害罗柏、凯特琳及北境随从，北境同盟瓦解。', 'GoT S3E9'],
      ['伊耿历 300 年', '解放无垢者', '丹妮莉丝夺取阿斯塔波并带走无垢者，开始以“解放者”身份进入奴隶湾。', 'GoT S3E4'],
      ['伊耿历 300 年', '越过长城', '琼恩随自由民翻越长城，与耶哥蕊特建立感情，也更理解长城以北的危机。', 'GoT S3E5–E10']]],
    ['第四季：守誓人（Oathkeeper）', '兰尼斯特权势达到顶点，又迅速被内部冲突侵蚀。', [
      ['伊耿历 300 年', '紫色婚礼', '乔佛里在婚宴上中毒身亡，提利昂被指控；此案重塑君临权力关系。', 'GoT S4E2'],
      ['伊耿历 300 年', '审判比武', '奥柏伦为提利昂出战却死于魔山之手，多恩对兰尼斯特的仇恨进一步加深。', 'GoT S4E8'],
      ['伊耿历 300 年', '守夜人保卫长城', '琼恩协助守夜人击退曼斯·雷德的进攻，长城威胁转为公开战争。', 'GoT S4E9']]],
    ['第五季：与龙共舞（A Dance with Dragons）', '信仰、冰与火同时抬头，旧有的政治秩序出现裂口。', [
      ['伊耿历 300 年', '艰难屯之战', '夜王屠戮自由民，琼恩亲眼见证异鬼军团的规模。', 'GoT S5E8'],
      ['伊耿历 300 年', '羞辱游行', '大麻雀审判瑟曦；她的屈辱成为后来报复性重塑君临的伏笔。', 'GoT S5E10'],
      ['伊耿历 300 年', '琼恩死而复生', '守夜人叛变者刺杀琼恩，梅丽珊卓随后将他复活。', 'GoT S5E10 / S6E2']]],
    ['第六季：凛冬的寒风（The Winds of Winter）', '北境被夺回，君临被野火改写，丹妮莉丝终于向西出航。', [
      ['伊耿历 300 年', '私生子之战', '琼恩与珊莎夺回临冬城；谷地骑士的介入扭转战局，拉姆斯被处决。', 'GoT S6E9'],
      ['伊耿历 300 年', '贝勒大圣堂爆炸', '瑟曦引爆野火，杀死大麻雀、玛格丽与洛拉斯，并在其后自立为女王。', 'GoT S6E10'],
      ['伊耿历 300 年', '北境之王', '北境诸侯拥立琼恩；布兰的记忆线同时提示其出身之谜。', 'GoT S6E10']]],
    ['第七季：冰与火之歌（The Dragon and the Wolf）', '两位女王争夺七国，而亡者大军突破长城。', [
      ['伊耿历 300 年', '战利品列车之战', '丹妮莉丝骑卓耿突袭兰尼斯特军队，龙在维斯特洛战场首次展现决定性力量。', 'GoT S7E4'],
      ['伊耿历 300 年', '龙穴大会', '琼恩展示尸鬼以求停战；瑟曦表面同意，实则准备违背承诺。', 'GoT S7E7'],
      ['伊耿历 300 年', '长城崩塌', '被夜王复生的韦赛里昂摧毁东海望防线，亡者大军南下。', 'GoT S7E7']]],
    ['第八季：铁王座（The Iron Throne）', '长夜结束，最终的征服战争亦摧毁了铁王座本身。', [
      ['伊耿历 300 年', '长夜之战', '艾莉亚在临冬城杀死夜王，亡者军团随之覆灭。', 'GoT S8E3'],
      ['伊耿历 300 年', '钟声之后', '君临投降后，丹妮莉丝焚毁城市，琼恩对她的忠诚彻底破裂。', 'GoT S8E5'],
      ['伊耿历 300 年', '新的秩序', '琼恩杀死丹妮莉丝；布兰当选国王，珊莎统治独立的北境，艾莉亚向西航行。', 'GoT S8E6']]]
  ];

  let selectedSeason = 0;
  const renderChronicle = () => {
    const record = chronicle[selectedSeason];
    const events = document.getElementById('events');
    const index = document.getElementById('seasonIndex');
    if (!events || !index) return;
    events.innerHTML = `<h2>${record[0]}</h2><p class="season-desc">${record[1]}</p>${record[2].map(([year, title, text, source]) => `<article class="event"><div class="event-year">${year}</div><div><h3>${title}</h3><p>${text}</p><div class="event-tags">改编来源 · ${source}</div></div></article>`).join('')}`;
    index.innerHTML = chronicle.map((season, i) => `<button class="season-nav ${i === selectedSeason ? 'active' : ''}" data-season="${i}">第 ${i + 1} 季<span>${season[0].split('：')[1]}</span></button>`).join('');
    index.querySelectorAll('.season-nav').forEach(button => button.addEventListener('click', () => { selectedSeason = Number(button.dataset.season); renderChronicle(); }));
    document.querySelectorAll('#seasonButtons, #timelineButtons').forEach(container => {
      container.innerHTML = chronicle.map((_, i) => `<button class="season ${i === selectedSeason ? 'active' : ''}" data-season="${i}">第${i + 1}季</button>`).join('');
      container.querySelectorAll('.season').forEach(button => button.addEventListener('click', () => { selectedSeason = Number(button.dataset.season); renderChronicle(); }));
    });
  };
  renderChronicle();
});
