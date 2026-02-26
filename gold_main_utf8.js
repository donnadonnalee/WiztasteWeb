/**
             * CONSTANTS & DATA
             */
const VIEW_DIST = 6;
const MAP_SIZE = 16;

const CLASSES = {
    WARRIOR: { name: '謌ｦ螢ｫ', hp: 30, mp: 0, str: 15, int: 5, vit: 15, agi: 8, luk: 5, desc: '鬮倥＞HP縺ｨ髦ｲ蠕｡蜉帙ｒ隱・ｋ蜑崎｡帙・隕√・, skillDesc: '蜈ｨ蜉帶脈繧・ 螟ｧ繝繝｡繝ｼ繧ｸ繧剃ｸ弱∴繧句ｼｷ蜉帙↑荳謦・・ },
    THIEF: { name: '逶苓ｳ・, hp: 20, mp: 10, str: 10, int: 8, vit: 8, agi: 15, luk: 15, desc: '邏譌ｩ縺輔→驕九′鬮倥￥縲∝ｮ晉ｮｱ縺ｮ謇ｱ縺・↓髟ｷ縺代※縺・ｋ縲・, skillDesc: '荳肴э謇薙■: 邏譌ｩ縺輔ｒ豢ｻ縺九＠縺溷･・･ｲ謾ｻ謦・・ },
    CLERIC: { name: '蜒ｧ萓ｶ', hp: 22, mp: 12, str: 8, int: 12, vit: 10, agi: 10, luk: 10, desc: '逾櫁＊縺ｪ鬲疲ｳ輔〒繝代・繝・ぅ縺ｮ蛯ｷ繧堤剪繧・☆縲・, skillDesc: '繝偵・繝ｫ: 莉ｲ髢謎ｸ莠ｺ縺ｮHP繧貞､ｧ縺阪￥蝗槫ｾｩ縺吶ｋ縲・ },
    MAGE: { name: '鬲碑｡灘ｸｫ', hp: 15, mp: 25, str: 5, int: 18, vit: 5, agi: 12, luk: 8, desc: '蠑ｷ蜉帙↑鬲碑｡薙ｒ謫阪ｊ縲∵雰霆阪ｒ荳謗・☆繧九・, skillDesc: '繝輔ぃ繧､繝､繝ｼ繝懊・繝ｫ: 謨ｵ蜈ｨ菴薙↓鬲疲ｳ輔ム繝｡繝ｼ繧ｸ繧剃ｸ弱∴繧九・ },
    SAMURAI: { name: '萓・, hp: 25, mp: 12, str: 16, int: 8, vit: 12, agi: 14, luk: 8, desc: '蛻繧呈･ｵ繧√∝ｼｷ蜉帙↑騾｣謦・ｒ謾ｾ縺､縲・, skillDesc: '辯戊ｿ斐＠: 莠悟屓騾｣邯壹〒繝繝｡繝ｼ繧ｸ繧剃ｸ弱∴繧九・ },
    MARTIAL_ARTIST: { name: '豁ｦ髣伜ｮｶ', hp: 28, mp: 0, str: 14, int: 6, vit: 14, agi: 16, luk: 6, desc: '蠑ｷ髱ｱ縺ｪ閧我ｽ薙ｒ謖√■縲・亟蠕｡辟｡隕悶・辭ｱ豕｢繧呈叛縺､縲・, skillDesc: '豌怜粥豕｢: 謨ｵ縺ｮ髦ｲ蠕｡繧堤┌隕悶＠縺ｦ繝繝｡繝ｼ繧ｸ繧剃ｸ弱∴繧九・ },
    ARCHER: { name: '迢ｩ莠ｺ', hp: 20, mp: 10, str: 12, int: 8, vit: 10, agi: 18, luk: 12, desc: '蠑鍋泙縺ｮ驕比ｺｺ縲ら漁縺・☆縺ｾ縺励◆荳謦・〒謨ｵ繧貞ｰ・栢縺上・, skillDesc: '迢吶＞謦・■: 諤･謇繧堤ｪ√￥鬮伜ｨ∝鴨縺ｮ蟆・茶縲・ },
    MONK: { name: '繝｢繝ｳ繧ｯ', hp: 26, mp: 12, str: 13, int: 12, vit: 12, agi: 12, luk: 10, desc: '蝗槫ｾｩ縺ｨ謾ｻ謦・ｒ荳｡遶九＠縲∫ｲ倥ｊ蠑ｷ縺乗姶縺・・, skillDesc: '邊ｾ逾樒ｵｱ荳: 蜻ｳ譁ｹ繧貞屓蠕ｩ縺励▽縺､縲∵雰縺ｸ霑ｽ謦・ｒ陦後≧縲・ },
    BISHOP: { name: '繝薙す繝ｧ繝・・', hp: 22, mp: 22, str: 8, int: 18, vit: 10, agi: 10, luk: 12, desc: '遨ｶ讌ｵ縺ｮ閨冶・閠・ら剪繧・＠縺ｨ谿ｲ貊・ｒ蜷梧凾縺ｫ陦後≧縲・, skillDesc: '繝帙・繝ｪ繝ｼ繝ｩ繧､繝・ 蜻ｳ譁ｹ繧貞屓蠕ｩ縺励∵雰蜈ｨ蜩｡縺ｫ逾櫁＊繝繝｡繝ｼ繧ｸ縲・ }
};

const ITEMS = [
    // Consumables (1-5)
    { id: 1, name: '蛯ｷ阮ｬ', type: 'consumable', level: 1, hpRestore: 30, desc: 'HP繧・0蝗槫ｾｩ' },
    { id: 2, name: '荳雁す阮ｬ', type: 'consumable', level: 4, hpRestore: 100, desc: 'HP繧・00蝗槫ｾｩ' },
    { id: 3, name: '迚ｹ螟ｧ蛯ｷ阮ｬ', type: 'consumable', level: 7, hpRestore: 300, desc: 'HP繧・00蝗槫ｾｩ' },
    { id: 4, name: '繧ｨ繝ｪ繧ｯ繧ｵ繝ｼ', type: 'consumable', level: 10, hpRestore: 999, desc: 'HP繧貞・蝗槫ｾｩ' },

    // Weapons (10-25)
    { id: 10, name: '繝繧ｬ繝ｼ', type: 'weapon', level: 1, atk: 3, desc: '霆ｽ縺・洒蜑｣(ATK+3)' },
    { id: 11, name: '繧ｷ繝ｧ繝ｼ繝医た繝ｼ繝・, type: 'weapon', level: 2, atk: 5, req: { str: 5 }, desc: '蟆丞梛縺ｮ蜑｣(ATK+5)' },
    { id: 12, name: '譛ｨ縺ｮ譚・, type: 'weapon', level: 2, atk: 2, int: 5, req: { int: 8 }, desc: '隧蜚ｱ繧貞勧縺代ｋ(ATK+2, INT+5)' },
    { id: 13, name: '繝｡繧､繧ｹ', type: 'weapon', level: 3, atk: 5, req: { str: 8 }, desc: '蜒ｧ萓ｶ繧ゆｽｿ縺医ｋ(ATK+5)' },
    { id: 14, name: '繝ｬ繧､繝斐い', type: 'weapon', level: 4, atk: 7, req: { agi: 10 }, desc: '邏ｰ霄ｫ縺ｮ蜑｣(ATK+7)' },
    { id: 15, name: '繝ｭ繝ｳ繧ｰ繧ｽ繝ｼ繝・, type: 'weapon', level: 5, atk: 8, req: { str: 10 }, desc: '讓呎ｺ也噪縺ｪ蜑｣(ATK+8)' },
    { id: 16, name: '鬲秘％螢ｫ縺ｮ譚・, type: 'weapon', level: 5, atk: 4, int: 12, req: { int: 15 }, desc: '鬲泌鴨蟶ｯ縺ｳ縺滓摶(ATK+4, INT+12)' },
    { id: 17, name: '繝｢繝ｼ繝九Φ繧ｰ繧ｹ繧ｿ繝ｼ', type: 'weapon', level: 6, atk: 12, req: { str: 12 }, desc: '譽倅ｻ倥″驩・帥(ATK+12)' },
    { id: 18, name: '繧ｰ繝ｩ繝・ぅ繧ｦ繧ｹ', type: 'weapon', level: 7, atk: 13, req: { agi: 12 }, desc: '證玲ｮｺ閠・・遏ｭ蜑｣(ATK+13)' },
    { id: 19, name: '繝舌ヨ繝ｫ繧｢繝・け繧ｹ', type: 'weapon', level: 8, atk: 15, req: { str: 15 }, desc: '驥阪＞譁ｧ(ATK+15)' },
    { id: 20, name: '繧ｰ繝ｬ繝ｼ繝医た繝ｼ繝・, type: 'weapon', level: 9, atk: 18, req: { str: 18 }, desc: '蟾ｨ螟ｧ縺ｪ荳｡謇句殴(ATK+18)' },
    { id: 21, name: '繝輔Λ繝ｳ繝吶Ν繧ｸ繝･', type: 'weapon', level: 10, atk: 22, req: { str: 35 }, desc: '豕｢謇薙▽蛻霄ｫ(ATK+22)' },
    { id: 22, name: '螟ｧ雉｢閠・・譚・, type: 'weapon', level: 10, atk: 8, int: 25, req: { int: 40 }, desc: '荳也阜讓ｹ縺ｮ譫・ATK+8, INT+25)' },
    { id: 23, name: '螯門・繝繝ｩ繝槭し', type: 'weapon', level: 10, atk: 35, agi: 15, req: { agi: 45 }, desc: '蜻ｪ繧上ｌ縺怜・(ATK+35, AGI+15)' },
    { id: 24, name: '繧ｨ繧ｯ繧ｹ繧ｫ繝ｪ繝舌・', type: 'weapon', level: 10, atk: 40, req: { str: 50 }, desc: '莨晁ｪｬ縺ｮ閨門殴(ATK+40)' },

    // Armors (30-45)
    { id: 30, name: '繝ｭ繝ｼ繝・, type: 'armor', level: 1, def: 2, desc: '蟶・・譛・DEF+2)' },
    { id: 31, name: '譌・ｺｺ縺ｮ譛・, type: 'armor', level: 2, def: 3, desc: '荳亥､ｫ縺ｪ譛・DEF+3)' },
    { id: 32, name: '繝ｬ繧ｶ繝ｼ繧｢繝ｼ繝槭・', type: 'armor', level: 3, def: 4, req: { str: 6 }, desc: '髱ｩ縺ｮ骼ｧ(DEF+4)' },
    { id: 33, name: '繧ｷ繝ｫ繧ｯ縺ｮ繝ｭ繝ｼ繝・, type: 'armor', level: 4, def: 5, int: 5, req: { int: 10 }, desc: '鬲疲ｳ輔・陦｣(DEF+5, INT+5)' },
    { id: 34, name: '逶苓ｳ翫・霆ｽ骼ｧ', type: 'armor', level: 5, def: 6, agi: 5, req: { agi: 12 }, desc: '蜍輔″繧・☆縺・DEF+6, AGI+5)' },
    { id: 35, name: '繝√ぉ繧､繝ｳ繝｡繧､繝ｫ', type: 'armor', level: 6, def: 8, req: { str: 15 }, desc: '骼門ｸｷ蟄・DEF+8)' },
    { id: 36, name: '繧ｹ繧ｱ繧､繝ｫ繝｡繧､繝ｫ', type: 'armor', level: 7, def: 11, req: { str: 18 }, desc: '魍励・骼ｧ(DEF+11)' },
    { id: 37, name: '繝励Ξ繝ｼ繝医Γ繧､繝ｫ', type: 'armor', level: 8, def: 15, req: { str: 20 }, desc: '驥崎｣・抜(DEF+15)' },
    { id: 38, name: '繝溘せ繝ｪ繝ｫ繝｡繧､繝ｫ', type: 'armor', level: 9, def: 20, req: { str: 15 }, desc: '霆ｽ縺冗｡ｬ縺・DEF+20)' },
    { id: 39, name: '繝峨Λ繧ｴ繝ｳ繝｡繧､繝ｫ', type: 'armor', level: 10, def: 28, req: { str: 40 }, desc: '遶懊・魍励〒菴懊ｉ繧後◆(DEF+28)' },
    { id: 40, name: '繧､繝ｼ繧ｸ繧ｹ縺ｮ逶ｾ', type: 'armor', level: 10, def: 35, req: { str: 55 }, desc: '逾櫁ｩｱ縺ｮ逶ｾ(DEF+35)' },

    // Accessories (50-60)
    { id: 50, name: '蜉帙・閻戊ｼｪ', type: 'accessory', level: 3, atk: 3, desc: '謾ｻ謦・鴨繧｢繝・・(ATK+3)' },
    { id: 51, name: '螳医ｊ縺ｮ謖・ｼｪ', type: 'accessory', level: 3, def: 3, desc: '髦ｲ蠕｡蜉帙い繝・・(DEF+3)' },
    { id: 52, name: '逍ｾ鬚ｨ縺ｮ謖・ｼｪ', type: 'accessory', level: 5, agi: 5, desc: '邏譌ｩ縺輔い繝・・(AGI+5)' },
    { id: 53, name: '雉｢閠・・遏ｳ', type: 'accessory', level: 7, int: 10, desc: '鬲泌鴨繧｢繝・・(INT+10)' },
    { id: 54, name: '蜍・・・險ｼ', type: 'accessory', level: 9, atk: 5, def: 5, desc: '謾ｻ髦ｲ繧｢繝・・(ATK+5, DEF+5)' },
    { id: 55, name: '蟷ｸ驕九・蜈弱・雜ｳ', type: 'accessory', level: 6, luk: 15, desc: '驕区ｰ励い繝・・(LUK+15)' },
    { id: 56, name: '螂ｳ逾槭・謖・ｼｪ', type: 'accessory', level: 10, def: 10, int: 5, desc: '蜉隴ｷ(DEF+10, INT+5)' },

    // High-End Weapons (60+)
    { id: 60, name: '譁ｹ螟ｩ逕ｻ謌・, type: 'weapon', level: 10, atk: 55, req: { str: 70 }, desc: '豁ｦ逾槭・髟ｷ譟・ｭｦ蝎ｨ(ATK+55)' },
    { id: 61, name: '繧ｲ繧､繝懊Ν繧ｰ', type: 'weapon', level: 10, atk: 50, agi: 20, req: { agi: 65, str: 40 }, desc: '蠢・ｸｭ縺ｮ鬲疲ｧ・ATK+50, AGI+20)' },
    { id: 62, name: '逾樣ｭ斐・諱ｯ蜷ｹ', type: 'weapon', level: 10, atk: 15, int: 60, req: { int: 80 }, desc: '遨ｶ讌ｵ縺ｮ鬲泌ｰ取嶌(ATK+15, INT+60)' },
    { id: 63, name: '螟ｩ蜿｢髮ｲ蜑｣', type: 'weapon', level: 10, atk: 65, luk: 30, req: { str: 60, luk: 50 }, desc: '荳臥ｨｮ縺ｮ逾槫勣縺ｮ荳縺､(ATK+65, LUK+30)' },
    { id: 64, name: '繝ｬ繝ｼ繝ｴ繧｡繝・う繝ｳ', type: 'weapon', level: 10, atk: 75, req: { str: 90 }, desc: '荳也阜繧堤┥縺城ｭ泌殴(ATK+75)' },
    { id: 65, name: '繝溘Ι繝ｫ繝九Ν', type: 'weapon', level: 10, atk: 85, req: { str: 110 }, desc: '髮ｷ逾槭・骼・ATK+85)' },
    { id: 66, name: '繧｢繝昴Ο繝ｳ縺ｮ蠑・, type: 'weapon', level: 10, atk: 45, agi: 40, req: { agi: 80 }, desc: '螟ｪ髯ｽ逾槭・蠑・ATK+45, AGI+40)' },

    // High-End Armors (70+)
    { id: 70, name: '貅先ｰ上・骼ｧ', type: 'armor', level: 10, def: 45, req: { str: 65 }, desc: '譚ｱ譁ｹ縺ｮ蜷榊ｰ・・骼ｧ(DEF+45)' },
    { id: 71, name: '螟ｩ螂ｳ縺ｮ鄒ｽ陦｣', type: 'armor', level: 10, def: 20, agi: 30, luk: 20, req: { agi: 50, int: 50 }, desc: '豬ｮ荳夜屬繧後＠縺溽ｾ弱＠縺・DEF+20, AGI+30, LUK+20)' },
    { id: 72, name: '繧｢繝繝槭Φ繧｢繝ｼ繝槭・', type: 'armor', level: 10, def: 60, req: { str: 100 }, desc: '雜・｡ｬ蠎ｦ縺ｮ骼ｧ(DEF+60)' },
    { id: 73, name: '荳・弌縺ｮ繝ｭ繝ｼ繝・, type: 'armor', level: 10, def: 35, int: 45, req: { int: 90 }, desc: '譏溘・蜉帙ｒ螳ｿ縺呎ｳ戊｡｣(DEF+35, INT+45)' },
    { id: 74, name: '讖溽･槭・陬・抜', type: 'armor', level: 10, def: 55, agi: -10, req: { str: 85, vit: 70 }, desc: '讖滓｢ｰ莉墓寺縺代・驥崎｣・抜(DEF+55, AGI-10)' },
    { id: 75, name: '繝峨Ξ繝・ラ繝弱・繝・, type: 'armor', level: 10, def: 80, agi: -20, req: { str: 120 }, desc: '邨ｶ蟇ｾ逧・↑髦ｲ蠕｡蜉・DEF+80, AGI-20)' },
    { id: 76, name: '閨夜ｨ主｣ｫ縺ｮ逶ｾ', type: 'armor', level: 10, def: 50, vit: 20, req: { str: 75, vit: 60 }, desc: '蜈ｨ縺ｦ繧貞ｼｾ縺冗崟(DEF+50, VIT+20)' },

    // High-End Accessories (80+)
    { id: 80, name: '繧ｪ繝ｪ繝上Ν繧ｳ繝ｳ縺ｮ迺ｰ', type: 'accessory', level: 10, atk: 15, def: 15, desc: '讌ｵ髯舌・遑ｬ蠎ｦ(ATK+15, DEF+15)' },
    { id: 81, name: '繧ｯ繝ｭ繝弱せ繧ｮ繧｢', type: 'accessory', level: 10, agi: 25, desc: '譎ゅｒ蜉騾溘＆縺帙ｋ(AGI+25)' },
    { id: 82, name: '繧ｽ繝ｭ繝｢繝ｳ縺ｮ謖・ｼｪ', type: 'accessory', level: 10, int: 35, desc: '荳・黄縺ｮ蜿｡譎ｺ(INT+35)' },
    { id: 83, name: '繝倥Λ繧ｯ繝ｬ繧ｹ縺ｮ蟶ｯ', type: 'accessory', level: 10, str: 20, vit: 20, desc: '蜑帛鴨縺ｨ蠑ｷ髱ｭ(STR+20, VIT+20)' },
    { id: 84, name: '蟷ｸ驕九・荳・ｦ冗･・, type: 'accessory', level: 10, luk: 50, desc: '逾槭′縺九ｊ逧・↑蟷ｸ驕・LUK+50)' },
    { id: 85, name: '繧ｫ繝ｬ繧､繝峨せ繧ｳ繝ｼ繝・, type: 'accessory', level: 10, int: 20, luk: 20, desc: '螟夂ｨｮ螟壽ｧ倥↑鬲泌鴨(INT+20, LUK+20)' },
    { id: 86, name: '荳也阜讓ｹ縺ｮ遞ｮ', type: 'accessory', level: 10, hp: 100, def: 10, desc: '逕溷多縺ｮ譬ｹ貅・HP+100, DEF+10)' }
];

const ITEM_PREFIXES = [
    { name: '蜻ｪ繧上ｌ縺・, mult: -1.0, weight: 5 },
    { name: '繝懊Ο繝懊Ο縺ｮ', mult: 0.5, weight: 20 },
    { name: '', mult: 1.0, weight: 45 },
    { name: '荳願ｳｪ縺ｮ', mult: 1.5, weight: 20 },
    { name: '蜷榊ｷ･縺ｮ', mult: 2.0, weight: 8 },
    { name: '閨悶↑繧・, mult: 3.0, weight: 2 }
];

const MONSTER_NAMES = [
    '繧ｹ繝ｩ繧､繝', '繝舌ャ繝・, '繧ｹ繝代う繝繝ｼ', '繧ｹ繝阪・繧ｯ', '繧ｴ繝悶Μ繝ｳ',
    '繧ｹ繧ｱ繝ｫ繝医Φ', '繝輔ぃ繝ｳ繝医Β', '繧ｪ繝ｼ繧ｬ', '繝・・繝｢繝ｳ', '繝峨Λ繧ｴ繝ｳ',
    '繧ｾ繝ｳ繝・, '繝｡繧､繧ｸ', '繝ｴ繧｡繝ｳ繝代う繧｢', '繝・・繝｢繝ｳ繝｡繧､繧ｸ'
];

// HP, ATK, AGI multipliers by base monster to give them unique characteristics
const MONSTER_STATS_MULT = [
    { hp: 1.2, atk: 0.8, agi: 0.5 }, // 0: 繧ｹ繝ｩ繧､繝 (High HP, Low AGI)
    { hp: 0.6, atk: 0.8, agi: 1.5 }, // 1: 繝舌ャ繝・(Low HP, High AGI)
    { hp: 0.8, atk: 1.0, agi: 1.2 }, // 2: 繧ｹ繝代う繝繝ｼ (Fast)
    { hp: 0.7, atk: 1.2, agi: 1.3 }, // 3: 繧ｹ繝阪・繧ｯ (Fast, High ATK)
    { hp: 1.0, atk: 1.0, agi: 1.0 }, // 4: 繧ｴ繝悶Μ繝ｳ (Balanced)
    { hp: 0.8, atk: 1.2, agi: 0.8 }, // 5: 繧ｹ繧ｱ繝ｫ繝医Φ (High ATK, Low HP)
    { hp: 0.5, atk: 1.5, agi: 1.8 }, // 6: 繝輔ぃ繝ｳ繝医Β (Glass Cannon, Very Fast)
    { hp: 2.8, atk: 1.5, agi: 0.6 }, // 7: 繧ｪ繝ｼ繧ｬ (Tank, High ATK, Slow)
    { hp: 2.0, atk: 1.8, agi: 1.2 }, // 8: 繝・・繝｢繝ｳ (Strong all-rounder)
    { hp: 2.5, atk: 2.5, agi: 1.0 }, // 9: 繝峨Λ繧ｴ繝ｳ (Boss level base)
    { hp: 3.5, atk: 1.1, agi: 0.4 }, // 10: 繧ｾ繝ｳ繝・(High HP, Very Slow)
    { hp: 0.7, atk: 3.5, agi: 0.9 }, // 11: 繝｡繧､繧ｸ (Low HP, Very High ATK)
    { hp: 1.3, atk: 1.4, agi: 1.5 }, // 12: 繝ｴ繧｡繝ｳ繝代う繧｢ (Strong, Fast)
    { hp: 1.2, atk: 5.0, agi: 1.1 }  // 13: 繝・・繝｢繝ｳ繝｡繧､繧ｸ (High ATK magic)
];

const ENEMY_VARIANTS = [
    { prefix: '繧ｹ繝｢繝ｼ繝ｫ', filter: 'hue-rotate(90deg) saturate(1.2)', scale: 'transform: scale(0.8);' },
    { prefix: '', filter: 'none', scale: 'transform: scale(1.2);' },
    { prefix: '繝ｬ繝・ラ', filter: 'hue-rotate(180deg) saturate(2)', scale: 'transform: scale(1.2);' },
    { prefix: '繝繝ｼ繧ｯ', filter: 'hue-rotate(270deg) brightness(0.6)', scale: 'transform: scale(1.2);' },
    { prefix: '繧ｭ繝ｳ繧ｰ', filter: 'hue-rotate(45deg) brightness(1.5)', scale: 'transform: scale(1.6);' }
];

let _generatedMonsters = [];
MONSTER_NAMES.forEach((name, i) => {
    ENEMY_VARIANTS.forEach((v, j) => {
        const htmlStr = `<img src="assets/monster_${i}.png" 
                    style="width:100%; height:100%; object-fit:contain; object-position:bottom; transform-origin:bottom; filter: ${v.filter}; ${v.scale}; image-rendering: pixelated;" />`;

        _generatedMonsters.push({
            name: v.prefix + MONSTER_NAMES[i],
            svgStr: htmlStr,
            baseVal: i * 2 + j * 5,
            imgIndex: i
        });
    });
});
_generatedMonsters.sort((a, b) => a.baseVal - b.baseVal);

const MONSTERS = [];
_generatedMonsters.forEach((m, idx) => {
    // Make late game drastically harder by using an exponential baseline.
    // idx goes up to 69 (14 base monsters * 5 variants).
    // idx / 7 evaluates to floor 0 ~ 9 roughly.
    const floorRaw = idx / 7;
    // Base scale slowly grows, but adds exponential growth for late game
    const scale = 1 + floorRaw * 0.2 + Math.pow(1.3, floorRaw) * 0.15;

    const statsMult = MONSTER_STATS_MULT[m.imgIndex] || { hp: 1, atk: 1, agi: 1 };

    MONSTERS.push({
        name: m.name,
        level: Math.floor(floorRaw) + 1,
        hp: Math.floor(25 * scale * statsMult.hp),
        atk: Math.floor(8 * scale * statsMult.atk),
        agi: Math.floor((5 + floorRaw * 2.5) * statsMult.agi),
        exp: Math.floor(15 * scale * statsMult.hp),
        imgIndex: m.imgIndex,
        svg: m.svgStr
    });
});

const ENEMY_SKILLS = {
    0: { name: '蛻・｣・, chance: 0.5, type: 'summon', desc: '菴薙′莠後▽縺ｫ蛻・°繧後◆・・ },
    1: { name: '蜷ｸ陦', chance: 0.4, type: 'drain', desc: '驪ｭ縺・甥縺ｧ蝎帙∩縺､縺・◆・・, mult: 1.2 },
    2: { name: '邊倡捩邉ｸ', chance: 0.3, type: 'attack', desc: '邊倡捩雉ｪ縺ｪ邉ｸ繧貞瑞縺榊・縺励◆・・, mult: 1.5 },
    3: { name: '豈堤甥', chance: 0.4, type: 'pierce', desc: '豈偵・迚吶′豺ｱ縺冗ｪ√″蛻ｺ縺輔ｋ・・, mult: 1.5 },
    4: { name: '莉ｲ髢薙ｒ蜻ｼ縺ｶ', chance: 0.3, type: 'summon', desc: '莉ｲ髢薙ｒ蜻ｼ縺ｳ蟇・○縺滂ｼ・ },
    5: { name: '鬪ｨ謚輔￡', chance: 0.4, type: 'attack', desc: '閾ｪ蛻・・鬪ｨ繧呈兜縺偵▽縺代※縺阪◆・・, mult: 1.8 },
    6: { name: '繧ｨ繝翫ず繝ｼ繝峨Ξ繧､繝ｳ', chance: 0.4, type: 'drain', desc: '逕溷多蜉帙ｒ蜷ｸ縺・叙繧峨ｌ縺滂ｼ・, mult: 1.5 },
    7: { name: '逞帶→縺ｮ荳謦・, chance: 0.3, type: 'attack', desc: '貂ｾ霄ｫ縺ｮ荳謦・′蜿ｩ縺崎ｾｼ縺ｾ繧後◆・・, mult: 2.5 },
    8: { name: '證鈴ｻ偵・轤・, chance: 0.3, type: 'aoe', desc: '遖阪・＠縺・ｎ縺悟捉蝗ｲ繧堤┥縺榊ｰｽ縺上☆・・, mult: 1.2 },
    9: { name: '轤・, chance: 0.4, type: 'aoe', desc: '轣ｼ辭ｱ縺ｮ轤弱ｒ蜷舌″蜃ｺ縺励◆・・, mult: 1.5 },
    10: { name: '閻先風豸ｲ', chance: 0.4, type: 'pierce', desc: '閻宣｣滓ｧ縺ｮ豸ｲ菴薙ｒ豬ｴ縺ｳ縺帙°縺代※縺阪◆・・, mult: 1.5 },
    11: { name: '繝輔ぃ繧､繧｢繝懊・繝ｫ', chance: 0.5, type: 'attack', desc: '蟾ｨ螟ｧ縺ｪ轣ｫ逅・ｒ謾ｾ縺｣縺滂ｼ・, mult: 2.0 },
    12: { name: '蜷ｸ陦', chance: 0.4, type: 'drain', desc: '髣・・荳ｭ縺九ｉ迚吶ｒ遯√″遶九※縺滂ｼ・, mult: 1.4 },
    13: { name: '繝｡繝・が', chance: 0.3, type: 'aoe', desc: '螳・ｮ吶°繧蛾囎遏ｳ縺碁剄繧頑ｳｨ縺撰ｼ・, mult: 2.0 },
    'boss': { name: '邨ｶ譛帙・豕｢蜍・, chance: 0.25, type: 'aoe', desc: '蜻ｨ蝗ｲ縺ｮ遨ｺ豌励′驥阪￥髴・∴繧・..・・, mult: 2.5 }
};

function generateMaze(size, depth = 0) {
    const map = Array(size).fill().map(() => Array(size).fill(1));
    const rooms = [];
    const numRooms = 4 + Math.floor(Math.random() * 4);

    for (let i = 0; i < numRooms; i++) {
        const rw = 3 + Math.floor(Math.random() * 3);
        const rh = 3 + Math.floor(Math.random() * 3);
        const rx = 1 + Math.floor(Math.random() * (size - rw - 2));
        const ry = 1 + Math.floor(Math.random() * (size - rh - 2));
        rooms.push({ x: rx, y: ry, w: rw, h: rh });
        for (let y = ry; y < ry + rh; y++) {
            for (let x = rx; x < rx + rw; x++) {
                map[y][x] = 0;
            }
        }
    }

    for (let i = 1; i < rooms.length; i++) {
        const r1 = rooms[i - 1];
        const r2 = rooms[i];
        let x1 = Math.floor(r1.x + r1.w / 2);
        let y1 = Math.floor(r1.y + r1.h / 2);
        let x2 = Math.floor(r2.x + r2.w / 2);
        let y2 = Math.floor(r2.y + r2.h / 2);

        while (x1 !== x2) { map[y1][x1] = 0; x1 += (x2 > x1) ? 1 : -1; }
        while (y1 !== y2) { map[y1][x1] = 0; y1 += (y2 > y1) ? 1 : -1; }
        map[y2][x2] = 0;
    }

    let sx = 1, sy = 1;
    let cx = Math.floor(rooms[0].x + rooms[0].w / 2);
    let cy = Math.floor(rooms[0].y + rooms[0].h / 2);
    while (sx !== cx) { map[sy][sx] = 0; sx += (cx > sx) ? 1 : -1; }
    while (sy !== cy) { map[sy][sx] = 0; sy += (cy > sy) ? 1 : -1; }
    map[1][1] = 2; // Up stair

    const lastRoom = rooms[rooms.length - 1];
    let stairX = lastRoom.x + Math.floor(Math.random() * lastRoom.w);
    let stairY = lastRoom.y + Math.floor(Math.random() * lastRoom.h);
    if (stairX === 1 && stairY === 1) stairX++;
    map[stairY][stairX] = 3;

    // Generate Gimmicks based on depth
    if (depth >= 1) { // Start gimmicks from B2F
        const diff = Math.min(depth * 0.02, 0.15); // Max 15% chance per eligible tile
        for (let y = 1; y < size - 1; y++) {
            for (let x = 1; x < size - 1; x++) {
                if (map[y][x] === 1 && Math.random() < diff * 0.2) {
                    // Convert some walls to hidden doors (4), ensuring they connect to at least one 0
                    if (map[y - 1][x] === 0 || map[y + 1][x] === 0 || map[y][x - 1] === 0 || map[y][x + 1] === 0) {
                        map[y][x] = 4;
                    }
                } else if (map[y][x] === 0 && (x !== stairX && y !== stairY) && (x !== 1 && y !== 1)) {
                    if (Math.random() < diff * 0.3) map[y][x] = 5; // Teleporter
                    else if (Math.random() < diff * 0.4) map[y][x] = 6; // Dark Zone
                    else if (Math.random() < diff * 0.3) map[y][x] = 7; // Spinner
                }
            }
        }
    }

    return map;
}

let LEVELS = [];
for (let i = 0; i < 10; i++) {
    const map = generateMaze(MAP_SIZE, i);
    if (i === 9) {
        for (let r = 0; r < map.length; r++) {
            for (let c = 0; c < map[r].length; c++) {
                if (map[r][c] === 3) map[r][c] = 8;
            }
        }
    }

    // Seed fixed floor events for 2F(1), 3F(2), 4F(3), 5F(4), 6F(5), 7F(6), 8F(7), 9F(8)
    if (i >= 1 && i <= 8) {
        let emptySpots = [];
        for (let r = 1; r < map.length - 1; r++) {
            for (let c = 1; c < map[r].length - 1; c++) {
                // Find safe, empty spots that are not stairs or boss
                if (map[r][c] === 0 && !(r === 1 && c === 1) && map[r][c] !== 2 && map[r][c] !== 3 && map[r][c] !== 8) {
                    emptySpots.push({ r, c });
                }
            }
        }
        if (emptySpots.length > 0) {
            let spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
            map[spot.r][spot.c] = 9; // 9 = Event NPC
        }
    }
    LEVELS.push(map);
}

const assets = {
    wall: { img: new Image(), loaded: false },
    floor: { img: new Image(), loaded: false },
    ceiling: { img: new Image(), loaded: false },
    stair_up: { img: new Image(), loaded: false },
    stair_down: { img: new Image(), loaded: false }
};

['wall', 'floor', 'ceiling', 'stair_up', 'stair_down'].forEach(k => {
    assets[k].img.onload = () => { assets[k].loaded = true; if (game) game.render(); };
    assets[k].img.src = `assets/${k}.png`;
});

/**
 * AUDIO MANAGER
 */
class AudioManager {
    constructor() {
        this.sounds = {};
        this.bgmAudio = null;
        this.isMuted = false;
        this.isAudioUnlocked = false;

        this.loadSound('bgm_intro', 'assets/bgm_intro.mp3', true);
        this.loadSound('bgm_explore', 'assets/bgm_explore.mp3', true);
        this.loadSound('bgm_battle', 'assets/bgm_battle.mp3', true);
        this.loadSound('bgm_boss', 'assets/bgm_boss.mp3', true);

        this.loadSound('se_attack', 'assets/se_attack.mp3', false);
        this.loadSound('se_magic', 'assets/se_magic.mp3', false);
        this.loadSound('se_damage', 'assets/se_damage.mp3', false);
        this.loadSound('se_dead', 'assets/se_dead.mp3', false);
        this.loadSound('se_victory', 'assets/se_victory.mp3', false);
    }

    loadSound(name, url, isBgm) {
        const audio = new Audio(url);
        if (isBgm) audio.loop = true;
        this.sounds[name] = audio;
    }

    unlockAudio() {
        if (this.isAudioUnlocked) return;
        // On first interaction, just load the audio tags to ensure the browser has permission
        Object.values(this.sounds).forEach(audio => {
            audio.load();
        });
        this.isAudioUnlocked = true;
    }

    playSE(name, vol = 1.0) {
        if (this.isMuted || !this.sounds[name]) return;
        try {
            const se = this.sounds[name].cloneNode(); // Clone to allow overlapping sounds
            se.volume = vol;
            se.play().catch(e => { }); // Catch missing file/not interacted errors silently
        } catch (e) { }
    }

    playBGM(name, vol = 0.5) {
        if (this.isMuted) return;
        this.stopBGM();
        if (!this.sounds[name]) return;

        try {
            const bgm = this.sounds[name];
            bgm.volume = vol;
            bgm.currentTime = 0;
            bgm.play().catch(e => {
                console.warn(`Could not play ${name}:`, e);
            });
            this.bgmAudio = bgm;
        } catch (e) { }
    }

    stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio.currentTime = 0;
            this.bgmAudio = null;
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const btn = document.getElementById('btn-mute');
        if (btn) {
            btn.textContent = this.isMuted ? '這' : '矧';
        }

        if (this.isMuted) {
            if (this.bgmAudio) {
                this.bgmAudio.pause();
            }
        } else {
            // Resume BGM if it was playing and we unmuted
            if (this.bgmAudio) {
                this.bgmAudio.play().catch(e => { });
            }
        }
    }
}
const audio = new AudioManager();

/**
 * GAME ENGINE
 */
class Game {
    constructor() {
        this.canvas = document.getElementById('view-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.minimapCanvas = document.getElementById('minimap-canvas');
        this.mCtx = this.minimapCanvas.getContext('2d');

        this.currentFloor = 0;
        this.playerPos = { x: 1, y: 1, dir: 1 };
        this.party = [];
        this.inventory = [];
        this.visited = LEVELS.map(() => Array(MAP_SIZE).fill().map(() => Array(MAP_SIZE).fill(false)));
        this.state = 'START';
        this.startTime = null;
        this.clearTime = null;
        this.karma = 0;

        this.currentBattle = null;
        this.turnIndex = 0;
        this.npcFlags = {
            helpedAdventurer: false, event5FDone: false, event9FDone: false,
            metSwordsman: false, event3FDone: false, event7FDone: false,
            savedGoblin: false, friendGoblin: false, event4FDone: false, event6FDone: false,
            event8FDone: false
        };
        this.elapsedTimeAtSave = 0;
        this.discardingItemIdx = -1; // Added for in-game confirmation

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        document.getElementById('btn-reroll').onclick = () => this.rollParty();
        document.getElementById('btn-start').onclick = () => this.startStory();
        document.getElementById('btn-story-next').onclick = () => {
            audio.unlockAudio();
            this.displayNextStory();
        };
        document.getElementById('btn-story-skip').onclick = () => {
            audio.unlockAudio();
            this.startGame();
        };

        // Check for save data
        this.checkSaveData();

        // Resume audio on ANY click, then play intro if we are still in START/STORY
        document.addEventListener('click', () => {
            audio.unlockAudio();
            if (!this.introPlayed && (this.state === 'START' || this.state === 'STORY')) {
                audio.playBGM('bgm_intro');
                this.introPlayed = true;
            }
        });

        this.rollParty();

        this.updateVisited();
        this.render();

        document.addEventListener('keydown', (e) => this.handleInput(e));
    }

    rollParty() {
        this.party = [];
        const jobs = Object.values(CLASSES);
        let names = [
            // European / Fantasy
            '繧｢繝ｬ繧ｹ', '繝ｫ繝・, '繧ｼ繝ｭ', '繧ｷ繧ｪ繝ｳ', '繧ｫ繧､繝ｳ', '繧ｻ繝ｪ繧ｹ', '繝ｬ繧ｪ繝ｳ', '繧｢繝ｪ繧｢',
            '繧ｯ繝ｭ繧ｦ', '繝ｬ繧､', '繝・ぅ繝・, '繧｢繝ｼ繝ｩ繝ｳ', '繧ｼ繧ｯ繧ｹ', '繝弱い', '繧､繝ｪ繧ｹ', '繝輔ぃ繝ｪ繧ｹ',
            // Japanese
            '繧ｳ繝・ヤ', '繝､繝槭ヨ', '繧ｵ繧ｯ繝ｩ', '繧ｫ繧ｰ繝ｩ', '繝上Ζ繝・, '繧ｷ繧ｺ繧ｯ', '繧ｲ繝ｳ', '繧ｫ繧ｨ繝・,
            // Chinese
            '繝ｬ繧､繝輔ぉ繧､', '繧ｷ繝｣繧ｪ', '繝ｪ繝ｳ', '繝ｪ繝･繧ｦ', '繝｡繧､', '繧ｷ繝ｳ', '繝ｩ繝ｳ', '繝ｦ繝ｳ',
            // Islamic / Middle Eastern
            '繧｢繝ｪ繝ｼ', '繧｢繝溘・繝ｫ', '繝輔ぃ繝・ぅ繝・, '繝上し繝ｳ', '繝ｩ繧､繝ｩ', '繧ｫ繧ｷ繝', '繧ｶ繝ｩ', '繧ｪ繝槭・繝ｫ'
        ];

        // Shuffle names array to pick 4 unique names easily
        for (let i = names.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [names[i], names[j]] = [names[j], names[i]];
        }

        for (let i = 0; i < 4; i++) {
            const job = jobs[Math.floor(Math.random() * jobs.length)];
            const name = names.pop(); // Take one completely unique name
            const bonus = 5 + Math.floor(Math.random() * 11);

            const char = this.createChar(name, job);
            char.bonusLeft = bonus;
            this.party.push(char);
        }
        this.renderCharCreate();
    }

    checkSaveData() {
        const save = localStorage.getItem('wiztaste_save');
        const screen = document.getElementById('char-create-screen');
        if (save) {
            const data = JSON.parse(save);
            const menuArea = screen.querySelector('div:last-of-type');

            // Add Continue button
            const btnContinue = document.createElement('button');
            btnContinue.className = 'btn';
            btnContinue.id = 'btn-continue';
            btnContinue.style.borderColor = '#5f5';
            btnContinue.style.color = '#5f5';
            btnContinue.style.marginRight = '10px';
            btnContinue.textContent = `邯壹″縺九ｉ (${data.floor + 1}F)`;
            btnContinue.onclick = () => {
                audio.unlockAudio();
                this.loadGame(data);
            };
            menuArea.prepend(btnContinue);
        }
        this.renderCharCreate();
    }

    renderCharCreate() {
        let html = '';
        this.party.forEach((char, idx) => {
            const statRow = (statName, display) => {
                const baseKey = 'base' + statName.charAt(0).toUpperCase() + statName.slice(1);
                const isMin = char[statName] <= char[baseKey];
                const isMax = char.bonusLeft <= 0;
                return `
                            <div style="display:inline-flex; align-items:center; width:90px; margin-bottom:4px;">
                                <span style="display:inline-block; width:30px; font-size:12px;">${display}</span>
                                <button class="btn" style="padding:0 5px; height:18px; font-size:10px;" ${isMin ? 'disabled' : ''} onclick="game.adjustStat(${idx}, '${statName}', -1)">-</button>
                                <span style="display:inline-block; width:20px; text-align:center; font-size:12px;">${char[statName]}</span>
                                <button class="btn" style="padding:0 5px; height:18px; font-size:10px;" ${isMax ? 'disabled' : ''} onclick="game.adjustStat(${idx}, '${statName}', 1)">+</button>
                            </div>
                        `;
            };

            html += `
                        <div style="border: 1px dashed var(--text-color); padding: 5px; background: rgba(0,0,0,0.8);">
                            <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
                                <span><strong style="color:#ffcc00;">${char.name} (${char.job})</strong></span>
                                <span style="color:${char.bonusLeft > 0 ? '#5f5' : '#888'}; font-size:12px;">Bonus: ${char.bonusLeft}</span>
                            </div>
                            <div style="font-size:11px; color:#ccc; margin-bottom:5px;">
                                ${char.desc}<br>
                                <span style="color:#aaf;">[繧ｹ繧ｭ繝ｫ] ${char.skillDesc}</span>
                            </div>
                            <div style="display:flex; flex-wrap:wrap; gap:2px;">
                                ${statRow('str', 'STR')}
                                ${statRow('int', 'INT')}
                                ${statRow('vit', 'VIT')}
                                ${statRow('agi', 'AGI')}
                                ${statRow('luk', 'LUK')}
                            </div>
                            <div style="font-size:12px; color:#aaa; margin-top:2px;">HP: ${char.hp} | MP: ${char.mp}</div>
                        </div>
                    `;
        });
        document.getElementById('char-create-list').innerHTML = html;

        const allAssigned = this.party.every(p => p.bonusLeft === 0);
        const btnStart = document.getElementById('btn-start');
        btnStart.disabled = false;
        btnStart.textContent = '蜀帝匱髢句ｧ・(繧ｿ繧､繝槭・蟋句虚)';
    }

    adjustStat(charIdx, statName, delta) {
        const char = this.party[charIdx];
        const baseKey = 'base' + statName.charAt(0).toUpperCase() + statName.slice(1);

        if (delta > 0 && char.bonusLeft > 0) {
            char[statName]++;
            char.bonusLeft--;
        } else if (delta < 0 && char[statName] > char[baseKey]) {
            char[statName]--;
            char.bonusLeft++;
        }
        this.renderCharCreate();
    }

    startStory() {
        audio.unlockAudio();

        // Update base stats to include allocated bonus points (used for equipment requirements)
        this.party.forEach(p => {
            p.baseStr = p.str;
            p.baseInt = p.int;
            p.baseVit = p.vit;
            p.baseAgi = p.agi;
            p.baseLuk = p.luk;
        });

        document.getElementById('char-create-screen').style.display = 'none';
        document.getElementById('story-screen').style.display = 'flex';
        this.storyIndex = 0;

        this.state = 'STORY';
        if (!this.introPlayed) {
            audio.playBGM('bgm_intro');
            this.introPlayed = true;
        }
        this.storyMessages = [
            "驟貞ｴ縺ｫ縺ｦ...<br>阮・囓縺・ｺ怜・縺ｫ縲∝・髯ｺ閠・◆縺｡縺ｮ蝟ｧ鬨偵′髻ｿ縺・※縺・ｋ縲・,
            "繝舌・繝・Φ繝繝ｼ<br>縲悟慍荳玖ｿｷ螳ｮ縺ｮ隧ｱ縺ｯ遏･縺｣縺ｦ縺・ｋ縺九＞・・br>縺ｩ縺・ｄ繧峨≠縺昴％縺ｫ縺ｯ縲弱い繝薙せ繝ｭ繝ｼ繝峨上→縺・≧蠑ｷ螟ｧ縺ｪ鬲皮黄縺・br>貎懊ｓ縺ｧ縺・※縲∵怙霑題ｵｷ縺阪※縺・ｋ轣ｽ縺・・蜈・↓縺ｪ縺｣縺ｦ縺・ｋ繧峨＠縺・ゅ・,
            "繝舌・繝・Φ繝繝ｼ<br>縲後％繧後∪縺ｧ螟壹￥縺ｮ蜀帝匱閠・′繧｢繝薙せ繝ｭ繝ｼ繝峨ｒ迢ｩ繧九∋縺・br>霑ｷ螳ｮ縺ｫ蜈･縺｣縺溘′縲∝､ｧ螟壽焚縺悟ｸｰ繧峨〓閠・→縺ｪ縺｣縺ｦ縺・ｋ...縲・,
            "繝舌・繝・Φ繝繝ｼ<br>縲後Ζ繝・↓縺ｯ螟夐｡阪・諛ｸ雉樣≡縺後°縺代ｉ繧後※縺・ｋ縲・br>蛟偵○縺ｰ荳螳壽悄髢灘ｹｳ蜥後′險ｪ繧後ｋ縺後∵凾縺檎ｵ後※縺ｰ縺ｾ縺溷ｾｩ豢ｻ縺吶ｋ<br>蜴・ｻ九↑蟄伜惠縺縺昴≧縺縲ゅ・,
            "隱ｰ縺九ｉ縺ｨ繧ゅ↑縺上∝錐荵励ｊ繧偵≠縺偵ｋ螢ｰ縺後≠縺｣縺溘・,
            `${this.party[0].name}<br>縲・..縺ｪ繧九⊇縺ｩ縺ｪ縲・br>縺薙・驟貞ｴ縺ｫ縺ｯ閻募茜縺阪′髮・∪縺｣縺ｦ繧九ｓ縺繧搾ｼ溘港,
            "縺昴≧險縺・→縲∝捉蝗ｲ縺ｫ縺・◆閠・◆縺｡縺梧ｬ｡縲・↓遶九■荳翫′縺｣縺溘・,
            `${this.party[1].name}<br>縲碁擇逋ｽ縺昴≧縺倥ｃ縺ｪ縺・°縲・br>縺ｵ縺ｵ縲∫ｧ√ｂ荳蜿｣荵励ｋ繧医ゅ港,
            `${this.party[2].name}<br>縲瑚ｿｷ螳ｮ縺・..蠑ｷ謨ｵ縺ｨ縺ｮ謌ｦ縺・∵が縺上↑縺・↑縲・br>遘√ｂ陦後％縺・ゅ港,
            `${this.party[3].name}<br>縲後ｈ縺励√§繧・≠縺薙・4莠ｺ縺ｧ豎ｺ縺ｾ繧翫□縺ｪ・・br>譌ｩ騾溯ｿｷ螳ｮ縺ｸ荵励ｊ霎ｼ繧ゅ≧縺懶ｼ√港,
            "縺薙≧縺励※縲∝ｽｼ繧峨・縺昴・蝣ｴ縺ｮ蜍｢縺・〒<br>諱舌ｋ縺ｹ縺崎ｿｷ螳ｮ縺ｸ縺ｨ雜ｳ繧定ｸ上∩蜈･繧後ｋ縺薙→縺ｫ縺ｪ縺｣縺溪披・
        ];
        this.displayNextStory();
    }

    displayNextStory() {
        const storyContent = document.getElementById('story-content');
        const nextBtn = document.getElementById('btn-story-next');

        if (this.storyIndex >= this.storyMessages.length) {
            document.getElementById('story-screen').style.display = 'none';
            this.startGame();
            return;
        }

        const msg = this.storyMessages[this.storyIndex];
        storyContent.innerHTML = `<div class="story-anim">${msg}</div>`;
        this.storyIndex++;

        nextBtn.style.display = 'none';
        setTimeout(() => {
            nextBtn.style.display = 'inline-block';
            if (this.storyIndex >= this.storyMessages.length) {
                nextBtn.textContent = '霑ｷ螳ｮ縺ｸ蜷代°縺・;
                nextBtn.style.color = '#f55';
                nextBtn.style.borderColor = '#f55';
            } else {
                nextBtn.textContent = '谺｡縺ｸ 笆ｼ';
                nextBtn.style.color = '#ffcc00';
                nextBtn.style.borderColor = '#ffcc00';
            }
        }, 800);
    }

    startGame() {
        audio.unlockAudio();
        this.state = 'EXPLORE';
        this.startTime = Date.now();
        document.getElementById('story-screen').style.display = 'none';
        this.addLog("豺ｱ豺ｵ縺ｮ霑ｷ螳ｮ縺ｸ繧医≧縺薙◎縲・10F縺ｮ繝懊せ險惹ｼ舌ｒ逶ｮ謖・○縲・);
        audio.playBGM('bgm_explore');
        this.updateTimer();
    }

    updateTimer() {
        if (this.state === 'START' || this.state === 'ENDING') return;

        const now = Date.now();
        const elapsed = Math.floor((this.elapsedTimeAtSave + (now - this.startTime)) / 1000);
        const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
        const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
        const s = String(elapsed % 60).padStart(2, '0');

        document.getElementById('timer-display').textContent = `${h}:${m}:${s}`;
        requestAnimationFrame(() => this.updateTimer());
    }

    createChar(name, job) {
        return {
            name, job: job.name, desc: job.desc, skillDesc: job.skillDesc,
            hp: job.hp, maxHp: job.hp, mp: job.mp, maxMp: job.mp,
            str: job.str, int: job.int, vit: job.vit, agi: job.agi, luk: job.luk,
            baseStr: job.str, baseInt: job.int, baseVit: job.vit, baseAgi: job.agi, baseLuk: job.luk,
            bonusLeft: 0,
            level: 1, exp: 0,
            equipment: { weapon: null, armor: null, accessory: null },
            inventory: []
        };
    }

    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.render();
    }

    handleInput(e) {
        if (this.state === 'EXPLORE') {
            switch (e.key) {
                case 'ArrowUp': case 'w': this.move('forward'); break;
                case 'ArrowDown': case 's': this.move('backward'); break;
                case 'ArrowLeft': case 'a': this.move('left'); break;
                case 'ArrowRight': case 'd': this.move('right'); break;
                case 'c': case 'C': this.toggleCamp(); break;
            }
        } else if (this.state === 'CAMP') {
            if (e.key === 'c' || e.key === 'C' || e.key === 'Escape') {
                this.toggleCamp();
            }
        } else if (this.state === 'BATTLE' && this.currentBattle?.phase === 'INPUT') {
            switch (e.key.toLowerCase()) {
                case 'a': this.battleAction('attack'); break;
                case 's': this.battleAction('skill'); break;
                case 'd': this.battleAction('guard'); break;
                case 'f': this.battleAction('run'); break;
            }
        } else if (this.state === 'EVENT' || this.state === 'TREASURE') {
            const index = ['a', 's', 'd', 'f'].indexOf(e.key.toLowerCase());
            if (index !== -1) {
                const buttons = document.getElementById('event-options').querySelectorAll('button');
                if (buttons[index]) buttons[index].click();
            }
        }
    }

    move(action) {
        if (this.state !== 'EXPLORE') return;

        let { x, y, dir } = this.playerPos;
        const dx = [0, 1, 0, -1][dir];
        const dy = [-1, 0, 1, 0][dir];
        const map = LEVELS[this.currentFloor];

        if (action === 'forward') {
            const nx = x + dx;
            const ny = y + dy;
            if (ny >= 0 && ny < map.length && nx >= 0 && nx < map[ny].length && map[ny][nx] !== 1) {
                this.playerPos.x = nx;
                this.playerPos.y = ny;
                this.checkTile();
            }
        } else if (action === 'backward') {
            const nx = x - dx;
            const ny = y - dy;
            if (ny >= 0 && ny < map.length && nx >= 0 && nx < map[ny].length && map[ny][nx] !== 1) {
                this.playerPos.x = nx;
                this.playerPos.y = ny;
                this.checkTile();
            }
        } else if (action === 'left') {
            this.playerPos.dir = (dir + 3) % 4;
        } else if (action === 'right') {
            this.playerPos.dir = (dir + 1) % 4;
        }

        this.updateVisited();
        this.render();
    }

    checkTile() {
        const floorData = LEVELS[this.currentFloor];
        if (!floorData[this.playerPos.y]) return;

        const tile = floorData[this.playerPos.y][this.playerPos.x];
        if (tile === 3) {
            this.currentFloor++;
            this.addLog(`蝨ｰ荳・${this.currentFloor + 1} 髫弱∈髯阪ｊ縺溘Ａ);

            let found = false;
            const nextFloor = LEVELS[this.currentFloor];
            for (let r = 0; r < nextFloor.length; r++) {
                for (let c = 0; c < nextFloor[r].length; c++) {
                    if (nextFloor[r][c] === 2) {
                        this.playerPos.x = c;
                        this.playerPos.y = r;
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }

            if (!found) {
                this.playerPos.x = 1;
                this.playerPos.y = 1;
            }

            document.getElementById('floor-indicator').textContent = `B${this.currentFloor + 1}F`;
            this.updateVisited();
        } else if (tile === 2) {
            if (this.currentFloor === 0) {
                this.addLog("蝨ｰ荳翫∈縺ｮ髫取ｮｵ縺縲ゅ＠縺九＠莉翫・謌ｻ繧後↑縺・・);
            } else {
                this.currentFloor--;
                this.addLog(`蝨ｰ荳・${this.currentFloor + 1} 髫弱∈荳翫′縺｣縺溘Ａ);

                let found = false;
                const prevFloor = LEVELS[this.currentFloor];
                for (let r = 0; r < prevFloor.length; r++) {
                    for (let c = 0; c < prevFloor[r].length; c++) {
                        if (prevFloor[r][c] === 3) {
                            this.playerPos.x = c;
                            this.playerPos.y = r;
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }

                if (!found) {
                    this.playerPos.x = 1;
                    this.playerPos.y = 1;
                }

                document.getElementById('floor-indicator').textContent = `B${this.currentFloor + 1}F`;
                this.updateVisited();
            }
        } else if (tile === 5) { // Teleporter
            this.addLog("繝・Ξ繝昴・繧ｿ繝ｼ縺・・);
            let rx, ry;
            do {
                rx = 1 + Math.floor(Math.random() * (MAP_SIZE - 2));
                ry = 1 + Math.floor(Math.random() * (MAP_SIZE - 2));
            } while (floorData[ry][rx] === 1 || floorData[ry][rx] === 4);
            this.playerPos.x = rx;
            this.playerPos.y = ry;
            this.updateVisited();
            this.checkTile(); // Recursive check incase of double trap
        } else if (tile === 7) { // Spinner
            this.addLog("蠎翫′蝗櫁ｻ｢縺励◆・・);
            this.playerPos.dir = Math.floor(Math.random() * 4);
            this.checkEncounter();
        } else if (tile === 6) { // Dark Zone
            this.addLog("證鈴裸縺...");
            this.checkEncounter();
        } else if (tile === 8) { // Boss Tile
            this.addLog("蝨ｧ蛟堤噪縺ｪ驍ｪ謔ｪ縺ｪ豌鈴・繧呈─縺倥ｋ...!!");
            this.startBossBattle();
        } else if (tile === 9) { // Event NPC Tile
            if (this.currentFloor === 1 ||
                (this.currentFloor === 2 && !this.npcFlags.event3FDone) ||
                (this.currentFloor === 3 && (!this.npcFlags.event4FDone || (this.npcFlags.friendGoblin && !this.npcFlags.rewardedGoblin))) ||
                (this.currentFloor === 4 && !this.npcFlags.event5FDone) ||
                (this.currentFloor === 5 && !this.npcFlags.event6FDone) ||
                (this.currentFloor === 6 && !this.npcFlags.event7FDone) ||
                (this.currentFloor === 7 && !this.npcFlags.event8FDone) ||
                (this.currentFloor === 8 && !this.npcFlags.event9FDone)) {
                this.addLog("隱ｰ縺九′縺・ｋ繧医≧縺...");
                if (this.currentFloor === 1) this.triggerEvent(2);
                else if (this.currentFloor === 2) this.triggerEvent(3);
                else if (this.currentFloor === 3) this.triggerEvent(4);
                else if (this.currentFloor === 4) this.triggerEvent(5);
                else if (this.currentFloor === 5) this.triggerEvent(6);
                else if (this.currentFloor === 6) this.triggerEvent(7);
                else if (this.currentFloor === 7) this.triggerEvent(8);
                else if (this.currentFloor === 8) this.triggerEvent(9);
            } else {
                this.addLog("縺励°縺励√◎縺薙↓縺ｯ繧ゅ≧隱ｰ繧ゅ＞縺ｪ縺・..");
            }
        } else if (tile === 4) { // Hidden Door
            this.addLog("髫縺玲演縺九ｉ螂･縺ｸ騾ｲ繧薙□...");
            floorData[this.playerPos.y][this.playerPos.x] = 0; // Remoe hidden door once stepped on

            if (Math.random() < 0.7) {
                // 70% chance of powerful item
                this.addLog("隱ｰ繧りｶｳ繧定ｸ上∩蜈･繧後※縺・↑縺・Κ螻九□・∝ｮ晉ｮｱ繧定ｦ九▽縺代◆・・);
                const currentLvl = this.currentFloor + 1;
                const minLevel = Math.max(1, currentLvl); // Base floor level
                const maxLevel = Math.min(10, currentLvl + 4); // Up to +4 floor!
                const pool = ITEMS.filter(i => (i.level || 1) >= minLevel && (i.level || 1) <= maxLevel);

                if (pool.length > 0) {
                    const baseDrop = pool[Math.floor(Math.random() * pool.length)];
                    const drop = { ...baseDrop };

                    if (drop.type !== 'consumable') {
                        // Force a good prefix for hidden door loot
                        const goodPrefixes = ITEM_PREFIXES.filter(p => p.mult >= 1.5);
                        let prefix = goodPrefixes[Math.floor(Math.random() * goodPrefixes.length)] || ITEM_PREFIXES[2];
                        drop.name = prefix.name + drop.name;

                        let statArr = [];
                        if (drop.atk !== undefined) { drop.atk = Math.round(drop.atk * prefix.mult); statArr.push(`ATK+${drop.atk}`); }
                        if (drop.def !== undefined) { drop.def = Math.round(drop.def * prefix.mult); statArr.push(`DEF+${drop.def}`); }
                        if (drop.int !== undefined) { drop.int = Math.round(drop.int * prefix.mult); statArr.push(`INT+${drop.int}`); }
                        if (drop.agi !== undefined) { drop.agi = Math.round(drop.agi * prefix.mult); statArr.push(`AGI+${drop.agi}`); }
                        if (drop.luk !== undefined) { drop.luk = Math.round(drop.luk * prefix.mult); statArr.push(`LUK+${drop.luk}`); }

                        drop.desc = `${statArr.join(', ')} (蜈・ ${baseDrop.name})`;
                    }
                    this.inventory.push(drop);
                    this.addLog(`縲・{drop.name}縲阪ｒ謇九↓蜈･繧後◆・～);
                }
            } else {
                // 30% chance of powerful enemy
                this.addLog("驛ｨ螻九・螂･縺九ｉ蠑ｷ蜉帙↑鬲皮黄縺檎樟繧後◆・・);
                this.startBattle(true); // pass true for hidden door enemy
            }
        } else {
            // Normal floor tile
            this.checkEncounter();
        }
    }

    triggerEvent(floor) {
        this.state = 'EVENT';
        document.getElementById('explore-menu').style.display = 'none';

        const screen = document.getElementById('event-screen');
        const title = document.getElementById('event-title');
        const desc = document.getElementById('event-desc');
        const img = document.getElementById('event-img');
        const options = document.getElementById('event-options');

        screen.style.display = 'flex';
        options.innerHTML = '';
        this.currentEventOptionsCount = 0;

        // Determine event image name
        let imgName = `event_${floor}`;
        if (floor === 9) {
            imgName = this.npcFlags.helpedAdventurer ? 'event_9alive' : 'event_9dead';
        } else if (floor === 7) {
            imgName = this.npcFlags.metSwordsman ? 'event_7mad' : 'event_7dead';
        } else if (floor === 4) {
            // Re-visit case
            if (this.npcFlags.friendGoblin && !this.npcFlags.rewardedGoblin) {
                imgName = 'event_4reunion';
            } else {
                imgName = 'event_4child';
            }
        } else if (floor === 6) {
            imgName = this.npcFlags.savedGoblin ? 'event_6parent_friend' : 'event_6parent_enemy';
        }

        // Load event image
        img.src = `assets/${imgName}.png`;
        img.style.display = 'block';
        img.onerror = () => { img.style.display = 'none'; }; // Hide if image is missing

        if (floor === 2) {
            title.textContent = "閠∝ｸｫ";
            const allHighLevel = this.party.every(p => p.level >= 50);

            if (allHighLevel) {
                desc.innerHTML = "髱吶°縺ｫ逶ｮ繧帝哩縺倥◆閠∽ｺｺ縺後√♀繧ゅ・繧阪↓蜿｣繧帝幕縺・◆縲・br><br>縲梧ｱ昴√＆繧峨↑繧矩ｫ倥∩縺ｸ蟆弱％縺・ょｿ・＠縺ｦ蜉ｱ繧縺瑚憶縺・ゅ・br><br>窶ｻ迴ｾ蝨ｨ縺ｮ繧ｹ繝・・繧ｿ繧ｹ縺後・繝ｼ繧ｹ繧ｹ繝・・繧ｿ繧ｹ縺ｨ縺励※蝗ｺ螳壹＆繧後∪縺吶・br>縺薙ｌ縺ｫ繧医ｊ縲∝ｼｷ蜉帙↑豁ｦ蝎ｨ繧・亟蜈ｷ縺ｮ陬・ｙ譚｡莉ｶ繧偵け繝ｪ繧｢縺励ｄ縺吶￥縺ｪ繧翫∪縺吶・;

                const btnUpgrade = document.createElement('button');
                btnUpgrade.className = 'btn';
                btnUpgrade.textContent = '菫ｮ陦後ｒ蜿励￠繧・;
                btnUpgrade.onclick = () => {
                    this.party.forEach(p => {
                        p.baseStr = p.str;
                        p.baseInt = p.int;
                        p.baseVit = p.vit;
                        p.baseAgi = p.agi;
                        p.baseLuk = p.luk;
                    });
                    this.addLog("閠∝ｸｫ縺ｮ蟆弱″縺ｫ繧医ｊ縲∫悄縺ｮ蜉帙′蜻ｼ縺ｳ隕壹∪縺輔ｌ縺滂ｼ∬｣・ｙ縺ｮ蛻ｶ髯舌′螟ｧ蟷・↓邱ｩ蜥後＆繧後◆縲・);
                    this.closeEvent();
                };
                options.appendChild(btnUpgrade);
            } else {
                desc.innerHTML = "髱吶°縺ｫ逶ｮ繧帝哩縺倥◆閠∽ｺｺ縺後√♀繧ゅ・繧阪↓蜿｣繧帝幕縺・◆縲・br><br>縲梧ｱ昴∵悽蠖薙・邨ｶ譛帙ｒ遏･繧峨〓繧医≧縺縲ゅ・br><br>窶ｻ菫ｮ陦後ｒ蜿励￠繧九↓縺ｯ蜈ｨ蜩｡縺後Ξ繝吶Ν50莉･荳翫〒縺ゅｋ蠢・ｦ√′縺ゅｊ縺ｾ縺吶・;
                const btnLeave = document.createElement('button');
                btnLeave.className = 'btn';
                btnLeave.textContent = '遶九■蜴ｻ繧・;
                btnLeave.onclick = () => this.closeEvent();
                options.appendChild(btnLeave);
            }

        } else if (floor === 3) {
            title.textContent = "豌怜燕縺ｮ繧医＞蜑｣螢ｫ縲弱い繝ｫ繝医Μ繧ｦ繧ｹ縲・;
            desc.innerHTML = "髯ｽ豌励↑隨代∩繧呈ｵｮ縺九∋縺溯ｦ狗岼鮗励＠縺・殴螢ｫ縺後・ｦｴ繧碁ｦｴ繧後＠縺剰ｩｱ縺励°縺代※縺阪◆縲・br><br>縲後ｄ縺ょ菅縺溘■縲√◎繧薙↑陬・ｙ縺ｧ縺薙％縺ｫ譚･縺溘・縺九＞・溘・縺ｯ縺ｯ縲∫┌闌ｶ繧偵☆繧具ｼ√・br><br>蠖ｼ縺ｯ豌励・縺・＞逕ｷ縺ｮ繧医≧縺縲り・蛻・・縺翫＆縺後ｊ縺ｮ豁ｦ蝎ｨ繧貞ｷｮ縺怜・縺励※縺阪◆縲・br>縲後％縺薙〒縺ｮ謗溘・謖√■縺､謖√◆繧後▽縺輔ゆｿｺ縺ｮ縺翫＆縺後ｊ縺縺代←縲∵戟縺｣縺ｦ縺・￥縺ｨ縺・＞縲ゅ＞縺､縺区←霑斐＠縺励※縺上ｌ繧茨ｼ溘・;

            const btnThanks = document.createElement('button');
            btnThanks.className = 'btn';
            btnThanks.textContent = '蜿励￠蜿悶ｋ';
            btnThanks.onclick = () => {
                this.karma += 10;
                this.addLog("豌怜燕縺ｮ繧医＞蜑｣螢ｫ繧｢繝ｫ繝医Μ繧ｦ繧ｹ縺九ｉ 繝ｭ繝ｳ繧ｰ繧ｽ繝ｼ繝・繧偵ｂ繧峨▲縺滂ｼ・);
                this.npcFlags.metSwordsman = true;
                this.npcFlags.event3FDone = true;

                const weapon = ITEMS.find(i => i.name === '繝ｭ繝ｳ繧ｰ繧ｽ繝ｼ繝・);
                if (weapon) this.inventory.push({ ...weapon });
                else this.inventory.push({ name: '繝ｭ繝ｳ繧ｰ繧ｽ繝ｼ繝・, type: 'weapon', level: 2, atk: 5, req: { str: 8 }, desc: '讓呎ｺ也噪縺ｪ蜑｣(ATK+5)' });

                this.closeEvent();
            };
            options.appendChild(btnThanks);

        } else if (floor === 4) {
            if (this.npcFlags.friendGoblin && !this.npcFlags.rewardedGoblin) {
                // Re-visit after helping parent
                title.textContent = "繧ｴ繝悶Μ繝ｳ隕ｪ蟄舌・蜀堺ｼ・;
                desc.innerHTML = "莉･蜑崎ｦ矩・＠縺溷ｰ上ざ繝悶Μ繝ｳ縺ｨ縲∬ｦｪ繧ｴ繝悶Μ繝ｳ縺梧干縺榊粋縺｣縺ｦ蝟懊ｓ縺ｧ縺・ｋ縲・br><br>隕ｪ繧ｴ繝悶Μ繝ｳ縺後％縺｡繧峨↓豌励▼縺阪∵ｷｱ縺城ｭ繧剃ｸ九￡縺ｦ<br>蜈峨ｊ霈昴￥蟆冗童繧貞ｷｮ縺怜・縺励※縺阪◆縲・;

                const btnAccept = document.createElement('button');
                btnAccept.className = 'btn';
                btnAccept.textContent = '蜿励￠蜿悶ｋ';
                btnAccept.onclick = () => {
                    this.karma += 30;
                    this.addLog("繧ｴ繝悶Μ繝ｳ縺ｮ隕ｪ蟄舌°繧・螯也ｲｾ縺ｮ髴願脈 繧偵ｂ繧峨▲縺滂ｼ・);
                    this.npcFlags.rewardedGoblin = true;
                    // Note: Ensure flag event4FDone remains true so standard interaction stops

                    const elixir = {
                        name: '螯也ｲｾ縺ｮ髴願脈', type: 'consumable', infinite: true, targetAll: true, desc: '菴募ｺｦ縺ｧ繧ゆｽｿ縺医ｋ蜈ｨ菴灘屓蠕ｩ阮ｬ',
                        effect: () => { this.party.forEach(mbr => { if (mbr.hp > 0) mbr.hp = Math.min(mbr.maxHp, mbr.hp + 50); }); this.addLog(`螯也ｲｾ縺ｮ髴願脈繧剃ｽｿ縺｣縺滂ｼ∝・蜩｡縺ｮHP縺・0蝗槫ｾｩ・～); }
                    };
                    this.inventory.push(elixir);
                    this.closeEvent();
                };
                options.appendChild(btnAccept);

                const btnFight = document.createElement('button');
                btnFight.className = 'btn';
                btnFight.style.color = '#f55';
                btnFight.style.borderColor = '#f55';
                btnFight.textContent = '謌ｦ縺・;
                btnFight.onclick = () => {
                    this.karma -= 100;
                    this.addLog("鬲皮黄縺九ｉ譁ｽ縺励ｒ蜿励￠繧狗ｾｩ逅・・縺ｪ縺・ゅ≠縺ｪ縺溘・蜈ｨ縺ｦ縺ｮ謖√■迚ｩ繧貞･ｪ縺・叙繧九∋縺丞殴繧呈栢縺・◆縲・);
                    this.npcFlags.rewardedGoblin = true;
                    document.getElementById('event-screen').style.display = 'none';

                    this.state = 'BATTLE';
                    this.currentBattle = {
                        isBoss: false,
                        isGoblinEvent: true, // Custom flag
                        monsters: [{
                            id: 'monster-0',
                            name: "繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ",
                            originalName: "繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ",
                            hp: 1500, maxHp: 1500, currentHp: 1500, atk: 150, agi: 25, exp: 600, level: 8,
                            svg: `<img src="assets/event_6parent_enemy.png" style="width:100%; height:100%; object-fit:contain; transform:scale(1.5);" />`
                        },
                        {
                            id: 'monster-1',
                            name: "繧ｹ繝｢繝ｼ繝ｫ繧ｴ繝悶Μ繝ｳ",
                            originalName: "繧ｹ繝｢繝ｼ繝ｫ繧ｴ繝悶Μ繝ｳ",
                            hp: 40, maxHp: 40, currentHp: 40, atk: 10, agi: 5, exp: 20, level: 4,
                            svg: `<img src="assets/event_4child.png" style="width:100%; height:100%; object-fit:contain; transform:scale(0.8);" />`
                        }],
                        turnOrder: [],
                        phase: 'INPUT',
                        logs: ["髦ｲ陦帙・縺溘ａ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺檎ｫ九■縺ｯ縺縺九▲縺滂ｼ・]
                    };

                    document.getElementById('explore-menu').style.display = 'none';
                    document.getElementById('battle-menu').style.display = 'flex';
                    const mo = document.getElementById('monster-overlay');
                    mo.innerHTML = `<div class="monster-img-container" id="monster-img-0">${this.currentBattle.monsters[0].svg}</div>`;
                    mo.style.display = 'flex';
                    mo.style.justifyContent = 'center';

                    audio.playBGM('bgm_battle');
                    this.turnIndex = 0;
                    this.updateUI();
                };
                options.appendChild(btnFight);

            } else {
                title.textContent = "縺ｯ縺舌ｌ繧ｴ繝悶Μ繝ｳ";
                desc.innerHTML = "隕ｪ縺ｨ縺ｯ縺舌ｌ縺溷ｭ蝉ｾ帙・繧ｴ繝悶Μ繝ｳ縺悟｣√・髫・〒髴・∴縺ｦ縺・ｋ縲・br><br>縺ｲ縺ｩ縺乗ｯ縺医※縺翫ｊ縲√％縺｡繧峨↓隘ｲ縺・°縺九▲縺ｦ縺上ｋ讒伜ｭ舌・縺ｪ縺・・;

                const btnFight = document.createElement('button');
                btnFight.className = 'btn';
                btnFight.textContent = '謌ｦ縺・;
                btnFight.onclick = () => {
                    this.karma -= 50;
                    this.addLog("鬲皮黄縺ｮ蟷ｼ逕溘→縺ｯ縺・∴縲∫函縺九＠縺ｦ縺翫￠縺ｰ縺・★繧瑚у螽√→縺ｪ繧九ゅ≠縺ｪ縺溘・髱吶°縺ｫ豁ｦ蝎ｨ繧呈ｧ九∴縺溘・);
                    this.npcFlags.event4FDone = true;
                    document.getElementById('event-screen').style.display = 'none';

                    this.state = 'BATTLE';
                    this.currentBattle = {
                        isBoss: false,
                        monsters: [{
                            id: 'monster-0',
                            name: "繧ｹ繝｢繝ｼ繝ｫ繧ｴ繝悶Μ繝ｳ",
                            originalName: "繧ｹ繝｢繝ｼ繝ｫ繧ｴ繝悶Μ繝ｳ",
                            hp: 40, maxHp: 40, currentHp: 40, atk: 10, agi: 5, exp: 20, level: 4,
                            svg: `<img src="assets/event_4child.png" style="width:100%; height:100%; object-fit:contain; transform:scale(0.8);" />`
                        }],
                        turnOrder: [],
                        phase: 'INPUT',
                        logs: ["繧ｹ繝｢繝ｼ繝ｫ繧ｴ繝悶Μ繝ｳ縺檎樟繧後◆・・]
                    };

                    document.getElementById('explore-menu').style.display = 'none';
                    document.getElementById('battle-menu').style.display = 'flex';
                    const mo = document.getElementById('monster-overlay');
                    mo.innerHTML = `<div class="monster-img-container" id="monster-img-0">${this.currentBattle.monsters[0].svg}</div>`;
                    mo.style.display = 'flex';
                    mo.style.justifyContent = 'center';

                    audio.playBGM('bgm_battle');
                    this.turnIndex = 0;
                    this.updateUI();
                };

                const btnMercy = document.createElement('button');
                btnMercy.className = 'btn';
                btnMercy.style.color = '#888';
                btnMercy.textContent = '隕矩・☆';
                btnMercy.onclick = () => {
                    this.karma += 20;
                    this.addLog("荳崎ｦ√↑謌ｦ髣倥・驕ｿ縺代ｋ縺ｹ縺阪□縲ゅ≠縺ｪ縺溘・髴・∴繧九ざ繝悶Μ繝ｳ繧呈ｨｪ逶ｮ縺ｫ縲∬ｶｳ譌ｩ縺ｫ騾驕ｿ縺励◆縲・);
                    this.npcFlags.savedGoblin = true;
                    this.npcFlags.event4FDone = true;
                    this.closeEvent();
                };
                options.appendChild(btnFight);
                options.appendChild(btnMercy);
            }

        } else if (floor === 5) {
            title.textContent = "雋蛯ｷ縺励◆蜀帝匱閠・;
            desc.innerHTML = "阮・ｰ怜袖謔ｪ縺・夊ｷｯ縺ｮ髫・↓縲・br>陦繧呈ｵ√＠縺ｦ蛟偵ｌ縺ｦ縺・ｋ蜀帝匱閠・′縺・ｋ縲・br><br>諱ｯ繧らｵｶ縺育ｵｶ縺医↓縺薙■繧峨ｒ隕倶ｸ翫￡縲・br>蜉ｩ縺代ｒ豎ゅａ縺ｦ縺・ｋ繧医≧縺...縲・br><br>窶ｻ蜉ｩ縺代ｋ蝣ｴ蜷医√ヱ繝ｼ繝・ぅ蜈ｨ蜩｡縺ｮMP縺・縺ｫ縺ｪ繧翫・br>謇謖√＠縺ｦ縺・ｋ豸郁ｲｻ繧｢繧､繝・Β・医・繝ｼ繧ｷ繝ｧ繝ｳ遲会ｼ峨ｒ縺吶∋縺ｦ螟ｱ縺・∪縺吶・;

            const btnHelp = document.createElement('button');
            btnHelp.className = 'btn';
            btnHelp.textContent = '蜉ｩ縺代ｋ';
            btnHelp.onclick = () => {
                this.karma += 50;
                this.addLog("縺ゅ↑縺溘・謇区戟縺｡縺ｮ驕灘・縺ｨ鬲泌鴨繧帝ｧ・ｽｿ縺励※蜀帝匱閠・ｒ豐ｻ逋ゅ＠縺滂ｼ・);
                this.npcFlags.helpedAdventurer = true;
                this.npcFlags.event5FDone = true;

                // Set all MP to 0
                this.party.forEach(p => p.mp = 0);

                // Remove all consumable items from inventory
                this.inventory = this.inventory.filter(item => item.type !== 'consumable');

                this.addLog("繝代・繝・ぅ蜈ｨ蜩｡縺ｮMP縺・縺ｫ縺ｪ繧翫∝・豸郁ｲｻ繧｢繧､繝・Β繧貞､ｱ縺｣縺・..");
                this.closeEvent();
            };

            const btnAbandon = document.createElement('button');
            btnAbandon.className = 'btn';
            btnAbandon.style.borderColor = '#888';
            btnAbandon.style.color = '#888';
            btnAbandon.textContent = '隕区昏縺ｦ繧・;
            btnAbandon.onclick = () => {
                this.karma -= 20;
                this.addLog("閾ｪ蛻・◆縺｡縺ｮ逕溷ｭ倥☆繧我ｿ晁ｨｼ縺輔ｌ縺ｦ縺・↑縺・ｿｷ螳ｮ縺ｧ縲∝ｽｼ繧定レ雋縺・ｽ呵｣輔・縺ｪ縺・ゅ≠縺ｪ縺溘・辟｡險縺ｧ遶九■蜴ｻ縺｣縺溘・);
                this.npcFlags.event5FDone = true;
                this.closeEvent();
            };

            options.appendChild(btnHelp);
            options.appendChild(btnAbandon);

        } else if (floor === 7) {
            title.textContent = "迢ゆｹｱ縺ｮ蜑｣螢ｫ縲弱い繝ｫ繝医Μ繧ｦ繧ｹ縲・;
            if (this.npcFlags.metSwordsman) {
                desc.innerHTML = "・遺ｦ窶ｦ蠖ｼ縺ｯ縲・ｼ馴嚴縺ｧ繝ｭ繝ｳ繧ｰ繧ｽ繝ｼ繝峨ｒ縺上ｌ縺滓ｰ怜燕縺ｮ繧医＞蜀帝匱閠・□縲ゅ≠縺ｮ蠢ｫ豢ｻ縺ｪ隨鷹｡斐・魑ｴ繧翫ｒ貎懊ａ縲∽ｻ翫・縺溘□陦襍ｰ縺｣縺溷曙逵ｸ縺ｧ陌夂ｩｺ繧堤舉縺ｿ縺､縺代※縺・ｋ・・br><br>霑ｷ螳ｮ縺ｮ逖ｴ豌励↓縺ゅ※繧峨ｌ縲∝ｽｼ縺ｮ邊ｾ逾槭・螳悟・縺ｫ蟠ｩ螢翫＠縺ｦ縺・◆縲ょ哨蜈・°繧画ｭ｢繧√←縺ｪ縺乗ｶ弱ｒ蝙ゅｉ縺励√°縺､縺ｦ蜷帙◆縺｡縺ｫ霆ｽ蜿｣繧貞娼縺・◆縺昴・蜿｣縺ｧ縲∽ｻ翫・諢丞袖繧偵↑縺輔↑縺・測隧帙ｒ蜷舌″邯壹￠縺ｦ縺・ｋ縲・br><br>縲後い繧｡窶ｦ繝｢繧ｦ窶ｦ繝｢繧ｦ菴輔Δ繧ｫ繝｢繧ｪ繧ｷ繝槭う繝窶ｦ・√が繝槭お繧ｿ繝√Δ縲∽ｿｺ繝朱が鬲斐Υ繧ｹ繝ｫ繝弱き窶ｦ繝・ｼ√・br><br>遯∝ｦゅ∫塙縺悟･・｣ｰ繧剃ｸ翫￡縲∝ｾ礼黄繧呈険繧翫°縺悶＠縺ｦ隘ｲ縺・°縺九▲縺ｦ縺阪◆・・;

                const btnFight = document.createElement('button');
                btnFight.className = 'btn';
                btnFight.textContent = '謌ｦ縺・;
                btnFight.onclick = () => {
                    this.karma += 10;
                    this.addLog("迢よｰ励↓鬟ｲ縺ｾ繧後◆蜑｣螢ｫ縺瑚･ｲ縺・°縺九▲縺ｦ縺阪◆・・);
                    this.npcFlags.event7FDone = true;
                    document.getElementById('event-screen').style.display = 'none';

                    // Trigger custom battle
                    this.state = 'BATTLE';
                    this.currentBattle = {
                        isBoss: false,
                        isSwordsmanEvent: true, // Custom flag to drop item on win
                        monsters: [{
                            id: 'monster-0',
                            name: "迢ゆｹｱ縺ｮ蜑｣螢ｫ",
                            originalName: "迢ゆｹｱ縺ｮ蜑｣螢ｫ",
                            hp: 2500, maxHp: 2500, currentHp: 2500, atk: 190, agi: 85, exp: 900, level: 7,
                            svg: `<img src="assets/event_7mad.png" style="width:100%; height:100%; object-fit:contain; transform:scale(1.2);" />`
                        }],
                        turnOrder: [],
                        phase: 'INPUT',
                        logs: ["迢ゆｹｱ縺ｮ蜑｣螢ｫ 迴ｾ繧具ｼ・]
                    };

                    document.getElementById('explore-menu').style.display = 'none';
                    document.getElementById('battle-menu').style.display = 'flex';
                    const mo = document.getElementById('monster-overlay');
                    mo.innerHTML = `<div class="monster-img-container" id="monster-img-0">${this.currentBattle.monsters[0].svg}</div>`;
                    mo.style.display = 'flex';
                    mo.style.justifyContent = 'center';

                    audio.playBGM('bgm_battle');
                    this.turnIndex = 0;
                    this.updateUI();
                };

                const btnRun = document.createElement('button');
                btnRun.className = 'btn';
                btnRun.style.borderColor = '#888';
                btnRun.style.color = '#888';
                btnRun.textContent = '騾・￡繧・;
                btnRun.onclick = () => {
                    this.karma -= 10;
                    this.addLog("迢よｰ励↓陜輔∪繧後◆蠖ｼ縺九ｉ逶ｮ繧定レ縺代√≠縺ｪ縺溘・蜻ｽ縺九ｉ縺後ｉ縺昴・蝣ｴ繧帝屬繧後◆縲・);
                    this.npcFlags.event7FDone = true;

                    // 80% HP reduction
                    this.party.forEach(p => {
                        if (p.hp > 0) {
                            p.hp = Math.max(1, Math.floor(p.hp * 0.2));
                        }
                    });
                    this.addLog("騾・ｵｰ縺ｮ莉｣蜆溘→縺励※縲√ヱ繝ｼ繝・ぅ蜈ｨ蜩｡縺梧ｷｱ謇九ｒ雋縺｣縺滂ｼ・P谿九ｊ20%・・);
                    this.closeEvent();
                };

                options.appendChild(btnFight);
                options.appendChild(btnRun);

            } else {
                desc.innerHTML = "騾夊ｷｯ縺ｮ蜈医〒縲∝・髯ｺ閠・・辟｡諠ｨ縺ｪ豁ｻ菴薙ｒ逋ｺ隕九＠縺溘・br><br>蠖ｼ縺ｮ蛯阪ｉ縺ｫ縺ｯ縲∫ｦ阪・＠縺・｡縺ｮ豌励ｒ謾ｾ縺､<br>陬・ｙ蜩√′霆｢縺後▲縺ｦ縺・ｋ縲・;

                const btnLoot = document.createElement('button');
                btnLoot.className = 'btn';
                btnLoot.style.color = '#888';
                btnLoot.textContent = '螂ｪ縺・叙繧・;
                btnLoot.onclick = () => {
                    this.karma -= 20;
                    this.addLog("縺薙ｌ縺ｯ蠖ｼ縺ｫ縺ｯ繧ゅ≧蠢・ｦ√・縺ｪ縺・黄縺縲ゅ≠縺ｪ縺溘・驕ｺ菴薙°繧芽｣・ｙ蜩√ｒ蝗槫庶縺励◆縲・);
                    this.npcFlags.event7FDone = true;

                    const weapon = { name: "蜻ｪ繧上ｌ縺・迢よ姶螢ｫ縺ｮ蜑｣", type: "weapon", atk: 45, desc: "蠑ｷ蜉帙□縺梧園譛芽・・邊ｾ逾槭ｒ陜輔・" };
                    this.inventory.push(weapon);
                    this.closeEvent();
                };
                options.appendChild(btnLoot);
            }

        } else if (floor === 6) {
            title.textContent = "隕ｪ繧ｴ繝悶Μ繝ｳ";
            if (this.npcFlags.savedGoblin) {
                desc.innerHTML = "蟾ｨ螟ｧ縺ｪ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺檎ｫ九■縺ｯ縺縺九▲縺滂ｼ・br>...縺励°縺励∵雰諢上・縺ｪ縺・ｈ縺・□縲・br><br>縺ｩ縺・ｄ繧峨√≠縺ｪ縺溘′・秘嚴縺ｧ閾ｪ蛻・・蟄蝉ｾ帙ｒ隕矩・＠縺溘％縺ｨ縺ｫ<br>豌励▼縺・※縺・ｋ繧峨＠縺・ょ暑螂ｽ逧・↓鬆ｭ繧剃ｸ九￡縺ｦ縺・ｋ縲・;

                const btnNod = document.createElement('button');
                btnNod.className = 'btn';
                btnNod.textContent = '鬆ｷ縺・;
                btnNod.onclick = () => {
                    this.karma += 20;
                    this.addLog("繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺ｯ諢溯ｬ昴ｒ遉ｺ縺吶ｈ縺・↓菴弱￥蜚ｸ縺｣縺溘・);
                    this.npcFlags.friendGoblin = true;
                    this.npcFlags.event6FDone = true;
                    this.closeEvent();
                };
                options.appendChild(btnNod);
            } else {
                desc.innerHTML = "蟾ｨ螟ｧ縺ｪ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺檎ｫ九■縺ｯ縺縺九▲縺滂ｼ・br><br>蟄蝉ｾ帙ｒ谿ｺ縺輔ｌ縺滓偵ｊ迢ゅ▲縺ｦ縺・ｋ縺ｮ縺九・br>縺薙■繧峨ｒ逹ｨ縺ｿ縺､縺代∝ｷｨ螟ｧ縺ｪ譽肴｣偵ｒ謖ｯ繧贋ｸ翫￡縺ｦ縺・ｋ・・;

                const btnFight = document.createElement('button');
                btnFight.className = 'btn';
                btnFight.style.color = '#f55';
                btnFight.style.borderColor = '#f55';
                btnFight.textContent = '謌ｦ縺・;
                btnFight.onclick = () => {
                    this.addLog("諤偵ｌ繧九く繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺ｮ蜥・動縺碁涸縺擾ｼ・);
                    this.npcFlags.event6FDone = true;
                    document.getElementById('event-screen').style.display = 'none';

                    this.state = 'BATTLE';
                    this.currentBattle = {
                        isBoss: false,
                        monsters: [{
                            id: 'monster-0',
                            name: "諤偵ｊ縺ｮ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ",
                            originalName: "諤偵ｊ縺ｮ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ",
                            hp: 1300, maxHp: 1300, currentHp: 1300, atk: 130, agi: 25, exp: 600, level: 6,
                            svg: `<img src="assets/event_6parent_enemy.png" style="width:100%; height:100%; object-fit:contain; transform:scale(1.5);" />`
                        }],
                        turnOrder: [],
                        phase: 'INPUT',
                        logs: ["諤偵ｊ縺ｮ繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺檎樟繧後◆・・]
                    };

                    document.getElementById('explore-menu').style.display = 'none';
                    document.getElementById('battle-menu').style.display = 'flex';
                    const mo = document.getElementById('monster-overlay');
                    mo.innerHTML = `<div class="monster-img-container" id="monster-img-0">${this.currentBattle.monsters[0].svg}</div>`;
                    mo.style.display = 'flex';
                    mo.style.justifyContent = 'center';

                    audio.playBGM('bgm_battle');
                    this.turnIndex = 0;
                    this.updateUI();
                };
                options.appendChild(btnFight);
            }

        } else if (floor === 8) {
            title.textContent = "髣・・雉｢閠・;
            desc.innerHTML = "鮟定｡｣縺ｫ霄ｫ繧貞桁繧薙□縲∝ｺ慕衍繧後〓鬲泌鴨繧呈叛縺､閠∽ｺｺ縺御ｽ・ｓ縺ｧ縺・ｋ縲・br><br>縲後％縺薙∪縺ｧ霎ｿ繧顔捩縺上→縺ｯ縺ｪ縲ゅ□縺後√♀蜑阪◆縺｡縺ｮ蜉帙〒縺ｯ譛豺ｱ驛ｨ縺ｮ荳ｻ縺ｫ縺ｯ蜍昴※縺ｾ縺・ゅ・br>縲後←縺・□縲ゆｽｿ縺医〓閠・ｸ莠ｺ縺ｮ縲主多縺ｮ轣ｯ轣ｫ縲上ｒ蜷ｾ霈ｩ縺ｫ蟾ｮ縺怜・縺輔〓縺具ｼ・br>縺昴ｌ縺ｯ縲∫ｵ・ｹ斐→縺励※縺ｮ蜷育炊逧・↑蛻､譁ｭ縺ｧ縺ｯ縺ｪ縺・°縺ｭ窶ｦ窶ｦ・溘・br><br>窶ｻ蜷梧э縺励◆蝣ｴ蜷医・∈謚槭＠縺溘Γ繝ｳ繝舌・縺・strong>豌ｸ荵・↓繝ｭ繧ｹ繝・/strong>縺励∪縺吶′縲・br>蠑輔″謠帙∴縺ｫ譛蠑ｷ繧ｯ繝ｩ繧ｹ縺ｮ陬・ｙ繧ｻ繝・ヨ繧貞・謇九＠縺ｾ縺吶・;

            const alive = this.party.filter(p => p.hp > 0);

            if (alive.length <= 1) {
                const btnSolo = document.createElement('button');
                btnSolo.className = 'btn';
                btnSolo.textContent = '隧ｱ縺励°縺代ｋ';
                btnSolo.onclick = () => {
                    this.addLog("縲後⊇縺・ｦ縺ｾ縺輔°閾ｪ蛻・・霄ｫ繧呈懇縺偵ｋ縺､繧ゅｊ縺具ｼ溪ｦ迢ゅ▲縺ｦ縺・ｋ縺ｪ縲ょｸｰ繧九′繧医＞縲・);
                    this.closeEvent();
                };
                options.appendChild(btnSolo);
            } else {
                // Generate a sacrifice button for each alive member
                alive.forEach(sacrifice => {
                    const btnSacrifice = document.createElement('button');
                    btnSacrifice.className = 'btn';
                    btnSacrifice.style.color = '#f55';
                    btnSacrifice.style.borderColor = '#f55';
                    btnSacrifice.style.marginBottom = '5px';
                    btnSacrifice.textContent = `${sacrifice.name}繧堤刈迚ｲ縺ｫ縺吶ｋ`;

                    btnSacrifice.onclick = () => {
                        if (!confirm(`譛ｬ蠖薙↓ ${sacrifice.name} 繧堤函雍・↓謐ｧ縺偵∪縺吶°・歃n(莠悟ｺｦ縺ｨ陂・函縺ｧ縺阪↑縺上↑繧翫∪縺・`)) return;

                        // Unequip items first
                        ['weapon', 'armor', 'accessory'].forEach(slot => {
                            if (sacrifice.equipment[slot]) {
                                this.inventory.push(sacrifice.equipment[slot]);
                                sacrifice.equipment[slot] = null;
                            }
                        });

                        // Perma-death logic
                        sacrifice.hp = 0;
                        sacrifice.baseVit = -999; // Ensures they cannot be revived normally
                        this.karma -= 100;
                        this.addLog(`${sacrifice.name}縲後≧縲√≧縺昴ゆｻ翫∪縺ｧ荳邱偵↓繧・▲縺ｦ縺阪※縺薙％縺ｾ縺ｧ縺阪◆繧薙□縺槭ゆｸ邱偵↓繧｢繝薙せ繝ｭ繝ｼ繝峨ｒ蛟偵◎縺・ｈ繝ｻ繝ｻ繝ｻ縺ｪ縺ゅ・繝ｻ繝ｻ縲港);
                        this.addLog(`髣・・雉｢閠・・鬲碑｡薙↓繧医ｊ縲・{sacrifice.name}縺ｮ蜻ｽ縺悟精縺・ｰｽ縺上＆繧後◆窶ｦ窶ｦ・～);

                        this.npcFlags.event8FDone = true;

                        // Generate Dark Sage Reward Sets
                        this.addLog("蠑輔″謠帙∴縺ｫ縲梧ｷｱ豺ｵ縺ｮ雉｢閠・そ繝・ヨ縲阪ｒ謇九↓蜈･繧後◆・・);
                        const weapon = { name: "豺ｱ豺ｵ縺ｮ譚・, type: "weapon", atk: 15, req: { int: 25 }, desc: "INT+80 縺ｨ縺ｦ縺､繧ゅ↑縺・ｭ泌鴨繧堤ｧ倥ａ縺滓摶", intBonus: 80 };
                        const armor = { name: "鮟偵″遏･諱ｵ縺ｮ繝ｭ繝ｼ繝・, type: "armor", def: 30, req: { int: 20 }, desc: "INT+40 髣・・鬲泌鴨繧堤ｷｨ縺ｿ霎ｼ繧薙□豕戊｡｣", intBonus: 40 };
                        const acc = { name: "雉｢閠・・遏ｳ縺ｮ谺迚・, type: "accessory", atk: 5, def: 5, req: { int: 20 }, desc: "INT+30 閹ｨ螟ｧ縺ｪ遏･隴倥ｒ豕ｨ縺手ｾｼ縺ｾ繧後◆鬲皮浹", intBonus: 30 };

                        this.inventory.push(weapon, armor, acc);

                        this.closeEvent();
                    };
                    options.appendChild(btnSacrifice);
                });

                const btnReject = document.createElement('button');
                btnReject.className = 'btn';
                btnReject.style.color = '#888';
                btnReject.style.marginTop = '15px';
                btnReject.textContent = '諡堤ｵｶ縺吶ｋ';
                btnReject.onclick = () => {
                    this.karma += 50;
                    this.addLog("縲娯ｦ窶ｦ縺昴≧縺九ゅ↑繧峨・蟾ｱ縺ｮ辟｡蜉帙ｒ蜻ｪ縺・↑縺後ｉ豁ｻ縺ｬ縺瑚憶縺・・);
                    this.addLog("閠∽ｺｺ縺ｯ阮・ｌ縲・裸縺ｫ貅ｶ縺題ｾｼ繧繧医≧縺ｫ豸域ｻ・＠縺溘・);
                    this.npcFlags.event8FDone = true;
                    this.closeEvent();
                };
                options.appendChild(btnReject);
            }

        } else if (floor === 9) {
            title.textContent = "・僥縺ｧ縺ｮ驕ｭ驕・;
            if (this.npcFlags.helpedAdventurer) {
                desc.innerHTML = "隕玖ｦ壹∴縺ｮ縺ゅｋ蜀帝匱閠・′遶九▲縺ｦ縺・ｋ・・br>蠖ｼ縺ｯ・暮嚴縺ｧ蜉ｩ縺代◆縺ゅ・逕ｷ縺縲・br><br>縲後≠縺ｮ譎ゅ・譛ｬ蠖薙↓縺ゅｊ縺後→縺・・br>縺翫°縺偵〒縺薙％縺ｾ縺ｧ譚･繧峨ｌ縺溘ゅ％繧後・縺顔､ｼ縺縲∽ｽｿ縺｣縺ｦ縺上ｌ・√・;

                const btnThanks = document.createElement('button');
                btnThanks.className = 'btn';
                btnThanks.textContent = '蜿励￠蜿悶ｋ';
                btnThanks.onclick = () => {
                    this.karma += 20;
                    this.addLog("諱ｩ霑斐＠縺ｨ縺励※縲∽ｼ晁ｪｬ縺ｮ陬・ｙ繧ｻ繝・ヨ繧貞女縺大叙縺｣縺滂ｼ・);
                    this.npcFlags.event9FDone = true;

                    // Generate powerful generic items
                    const weapon = { name: "蜍・・・蜑｣", type: "weapon", atk: 50, desc: "諱ｩ遏･繧峨★縺ｫ縺ｯ謇ｱ縺医↑縺・ｼ晁ｪｬ縺ｮ蜑｣" };
                    const armor = { name: "闍ｱ髮・・骼ｧ", type: "armor", def: 40, desc: "蠑ｷ蝗ｺ縺ｪ螳郁ｭｷ繧偵ｂ縺溘ｉ縺咎而" };
                    const acc = { name: "蜈峨・謖・ｼｪ", type: "accessory", atk: 10, def: 10, desc: "蜈ｨ繧ｹ繝・・繧ｿ繧ｹ繧貞ｺ穂ｸ翫￡縺吶ｋ謖・ｼｪ" };

                    this.inventory.push(weapon, armor, acc);
                    this.closeEvent();
                };
                options.appendChild(btnThanks);
            } else {
                desc.innerHTML = "騾夊ｷｯ縺ｮ蜈医〒縲∝・髯ｺ閠・・辟｡諠ｨ縺ｪ豁ｻ菴薙ｒ逋ｺ隕九＠縺溘・br>・暮嚴縺ｧ隕区昏縺ｦ縺溘≠縺ｮ逕ｷ縺ｮ繧医≧縺...縲・br><br>蠖ｼ縺ｮ蛯阪ｉ縺ｫ縺ｯ縲∫ｦ阪・＠縺・が繝ｼ繝ｩ繧呈叛縺､<br>陬・ｙ蜩√′霆｢縺後▲縺ｦ縺・ｋ縲・;

                const btnLoot = document.createElement('button');
                btnLoot.className = 'btn';
                btnLoot.style.color = '#888';
                btnLoot.textContent = '螂ｪ縺・叙繧・;
                btnLoot.onclick = () => {
                    this.karma -= 20;
                    this.addLog("縺薙ｌ縺ｯ蠖ｼ縺ｫ縺ｯ繧ゅ≧蠢・ｦ√・縺ｪ縺・黄縺縲る⊆菴薙°繧芽｣・ｙ蜩√ｒ蝗槫庶縺励◆縲・);
                    this.npcFlags.event9FDone = true;

                    const weapon = { name: "蜻ｪ繧上ｌ縺・陦蝪励ｉ繧後◆蛻・, type: "weapon", atk: 60, desc: "蠑ｷ蜉帙□縺梧園譛芽・・邊ｾ逾槭ｒ陜輔・" };
                    const armor = { name: "蜻ｪ繧上ｌ縺・諤ｨ蠢ｵ縺ｮ逧ｮ骼ｧ", type: "armor", def: 50, desc: "辟｡蠢ｵ繧貞精縺・ｾｼ繧薙□荳榊翠縺ｪ髦ｲ蜈ｷ" };
                    const acc = { name: "蜻ｪ繧上ｌ縺・遐ｴ貊・・鬥夜｣ｾ繧・, type: "accessory", atk: 20, def: -20, desc: "螟ｧ縺阪↑蜉帙→蠑輔″謠帙∴縺ｫ髦ｲ蠕｡繧呈昏縺ｦ繧・ };

                    this.inventory.push(weapon, armor, acc);
                    this.closeEvent();
                };
                options.appendChild(btnLoot);
            }
        }

        // Add keyboard hints to event options
        const hints = ['(A)', '(S)', '(D)', '(F)'];
        const buttons = options.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            if (hints[idx]) btn.textContent += hints[idx];
        });
    }

    closeEvent() {
        document.getElementById('event-screen').style.display = 'none';
        document.getElementById('explore-menu').style.display = 'flex';
        this.state = 'EXPLORE';
        this.updateUI();
    }

    updateVisited() {
        const floorArray = this.visited[this.currentFloor];
        if (!floorArray) return;

        const maxLevel = LEVELS[this.currentFloor].length;
        const cx = this.playerPos.x;
        const cy = this.playerPos.y;

        // Reveal 3x3 surrounding tiles
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                const ny = cy + y;
                const nx = cx + x;
                if (ny >= 0 && ny < maxLevel && nx >= 0 && nx < LEVELS[this.currentFloor][ny].length) {
                    floorArray[ny][nx] = true;
                }
            }
        }
    }

    checkEncounter() {
        if (Math.random() < 0.12) this.startBattle();
    }

    addLog(text) {
        const logWin = document.getElementById('log-window');
        const entry = document.createElement('div');
        entry.textContent = `> ${text}`;
        logWin.prepend(entry);
    }

    /**
     * BATTLE SYSTEM
     */
    startBattle(isHard = false) {
        this.state = 'BATTLE';
        let floorMonsters;

        if (isHard) {
            // Pick enemies from 2-3 floors deeper
            const targetFloor = Math.min(10, this.currentFloor + 2 + Math.floor(Math.random() * 2));
            floorMonsters = MONSTERS.filter(m => m.level === targetFloor);
            if (floorMonsters.length === 0) floorMonsters = MONSTERS.filter(m => m.level === 10);
        } else {
            floorMonsters = MONSTERS.filter(m => m.level === this.currentFloor + 1);
        }

        let numMonsters = 1;
        const r = Math.random();
        if (r > 0.6) numMonsters = 2; // 40% chance of 2
        if (r > 0.9) numMonsters = 3; // 10% chance of 3

        this.currentBattle = {
            monsters: [],
            turnOrder: [],
            phase: 'INPUT',
            isBoss: false
        };

        let moHtml = '';
        for (let i = 0; i < numMonsters; i++) {
            const data = floorMonsters.length > 0 ? floorMonsters[Math.floor(Math.random() * floorMonsters.length)] : MONSTERS[0];
            const mData = { ...data, currentHp: data.hp, id: `monster-${i}`, originalName: data.name };

            // Rename if duplicates exist
            const count = this.currentBattle.monsters.filter(m => m.originalName === mData.originalName).length;
            if (count > 0) mData.name = mData.name + " " + String.fromCharCode(65 + count); // A, B, C...
            else if (numMonsters > 1 && floorMonsters.filter(m => m.name === mData.name).length > 1) {
                mData.name = mData.name + " A";
            }

            this.currentBattle.monsters.push(mData);
            this.addLog(`${mData.name}縺檎樟繧後◆・～);
            moHtml += `<div class="monster-img-container" id="monster-img-${i}">${mData.svg}</div>`;
        }

        document.getElementById('explore-menu').style.display = 'none';
        document.getElementById('battle-menu').style.display = 'flex';
        const mo = document.getElementById('monster-overlay');
        mo.innerHTML = moHtml;
        mo.style.display = 'flex'; // Changed to flex over block for side-by-side multiple

        audio.playBGM('bgm_battle');
        this.turnIndex = 0;
        this.updateUI();
    }

    startBossBattle() {
        this.state = 'BATTLE';

        const baseMonster = MONSTERS[MONSTERS.length - 1]; // Use King variant svg
        let bossData = {
            ...baseMonster,
            name: '繧｢繝薙せ繝ｭ繝ｼ繝・,
            hp: 8500,
            atk: 280,
            agi: 60,
            exp: 30000,
            level: 10,
            id: 'monster-0'
        };

        this.currentBattle = {
            monsters: [{ ...bossData, currentHp: bossData.hp }],
            turnOrder: [],
            phase: 'INPUT',
            isBoss: true
        };

        this.addLog(`${bossData.name}縺檎樟繧後◆・～);
        document.getElementById('explore-menu').style.display = 'none';
        document.getElementById('battle-menu').style.display = 'flex';

        const bossImgStr = `<img src="assets/boss.png" style="width:100%; height:100%; object-fit:contain; object-position:bottom; transform-origin:bottom; image-rendering:pixelated;" onerror="this.onerror=null; this.src='assets/monster_9.png';" />`;

        const mo = document.getElementById('monster-overlay');
        mo.innerHTML = `<div class="monster-img-container" id="monster-img-0" style="flex: none; width: 300px;">${bossImgStr}</div>`;
        mo.style.display = 'flex';
        mo.style.justifyContent = 'center';

        const imgCont = document.getElementById('monster-img-0');
        imgCont.style.transform = 'scale(1.5)';
        imgCont.style.filter = 'drop-shadow(0 0 10px red)';

        audio.playBGM('bgm_boss');
        this.turnIndex = 0;
        this.updateUI();
    }

    battleAction(type) {
        if (this.state !== 'BATTLE' || this.currentBattle.phase !== 'INPUT') return;
        const actor = this.party[this.turnIndex];
        this.currentBattle.turnOrder.push({ actor, type, isPlayer: true });
        this.turnIndex++;
        if (this.turnIndex >= this.party.length) this.executeBattleTurn();
        else this.updateUI();
    }

    async executeBattleTurn() {
        this.currentBattle.phase = 'EXECUTE';
        const monsters = this.currentBattle.monsters;

        monsters.forEach(m => {
            if (m.currentHp > 0) {
                this.currentBattle.turnOrder.push({ actor: m, type: 'attack', isPlayer: false });
            }
        });

        this.currentBattle.turnOrder.sort((a, b) => (b.actor.agi || 10) - (a.actor.agi || 10));

        for (let action of this.currentBattle.turnOrder) {
            const aliveMonsters = monsters.filter(m => m.currentHp > 0);
            if (aliveMonsters.length === 0) break;

            if (action.isPlayer) {
                if (action.actor.hp <= 0) continue;
                audio.playSE('se_attack');

                // Pick random live target for standard single-target attacks
                let targetIdx = Math.floor(Math.random() * aliveMonsters.length);
                let monster = aliveMonsters[targetIdx];
                let monsterDOMId = monster.id;

                if (action.type === 'attack') {
                    const wpnAtk = (action.actor.equipment.weapon?.atk || 0) + (action.actor.equipment.accessory?.atk || 0);
                    const dmg = Math.max(1, (action.actor.str + wpnAtk) + Math.floor(Math.random() * 5) - 2);
                    monster.currentHp -= dmg;
                    this.addLog(`${action.actor.name}縺ｮ謾ｻ謦・ｼ・${monster.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                    this.showHitEffect(monsterDOMId, dmg);
                } else if (action.type === 'skill') {
                    audio.playSE('se_magic');
                    const job = action.actor.job;
                    if (job === '謌ｦ螢ｫ') {
                        if (action.actor.hp > 5) {
                            action.actor.hp -= 5;
                            const wpnAtk = (action.actor.equipment.weapon?.atk || 0) + (action.actor.equipment.accessory?.atk || 0);
                            const dmg = Math.floor(((action.actor.str + wpnAtk) + Math.random() * 5) * 1.5);
                            monster.currentHp -= dmg;
                            this.addLog(`${action.actor.name}縺ｮ蜈ｨ蜉帶脈繧奇ｼ・HP-5) ${monster.name}縺ｫ${dmg}縺ｮ螟ｧ繝繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯ菴灘鴨縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '豁ｦ髣伜ｮｶ') {
                        if (action.actor.hp > 4) {
                            action.actor.hp -= 4;
                            const dmg = Math.floor(action.actor.str * 1.5 + action.actor.agi * 0.5);
                            monster.currentHp -= dmg;
                            this.addLog(`${action.actor.name}縺ｮ豌怜粥豕｢・・HP-4) ${monster.name}縺ｫ髦ｲ蠕｡辟｡隕悶・${dmg}繝繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯ菴灘鴨縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '逶苓ｳ・) {
                        if (action.actor.mp >= 3) {
                            action.actor.mp -= 3;
                            const dmg = Math.floor(action.actor.agi * 1.8 + Math.random() * 5);
                            monster.currentHp -= dmg;
                            this.addLog(`${action.actor.name}縺ｮ荳肴э謇薙■・・MP-3) ${monster.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '蜒ｧ萓ｶ') {
                        if (action.actor.mp >= 4) {
                            action.actor.mp -= 4;
                            let target = action.actor;
                            let minHpPct = target.hp / target.maxHp;
                            this.party.forEach(p => {
                                if (p.hp > 0 && (p.hp / p.maxHp) < minHpPct) {
                                    target = p;
                                    minHpPct = p.hp / p.maxHp;
                                }
                            });
                            const heal = Math.max(15, action.actor.int + 10);
                            target.hp = Math.min(target.maxHp, target.hp + heal);
                            this.addLog(`${action.actor.name}縺ｮ繝偵・繝ｫ・・MP-4) ${target.name}縺ｮHP縺・{heal}蝗槫ｾｩ・～);
                            const tgtIdx = this.party.indexOf(target);
                            if (tgtIdx !== -1) this.showHealEffect(tgtIdx, heal);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '鬲碑｡灘ｸｫ') {
                        if (action.actor.mp >= 5) {
                            action.actor.mp -= 5;
                            this.addLog(`${action.actor.name}縺ｮ繝輔ぃ繧､繝､繝ｼ繝懊・繝ｫ・・MP-5) 蜈ｨ菴薙↓轤弱′隘ｲ縺・ｼ～);

                            aliveMonsters.forEach(m => {
                                const dmg = Math.max(10, Math.floor(action.actor.int * 1.5 + 5));
                                m.currentHp -= dmg;
                                this.addLog(`${m.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                                this.showHitEffect(m.id, dmg);
                            });
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '萓・) {
                        if (action.actor.mp >= 4) {
                            action.actor.mp -= 4;
                            const wpnAtk = (action.actor.equipment.weapon?.atk || 0) + (action.actor.equipment.accessory?.atk || 0);
                            const dmg1 = Math.floor((action.actor.str + wpnAtk) * 0.8 + Math.random() * 3);
                            const dmg2 = Math.floor((action.actor.str + wpnAtk) * 0.8 + Math.random() * 3);
                            monster.currentHp -= (dmg1 + dmg2);
                            this.addLog(`${action.actor.name}縺ｮ辯戊ｿ斐＠・・MP-4) ${monster.name}縺ｫ${dmg1}縺ｨ${dmg2}縺ｮ騾｣邯壹ム繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg1 + dmg2);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '迢ｩ莠ｺ') {
                        if (action.actor.mp >= 3) {
                            action.actor.mp -= 3;
                            const dmg = Math.floor(action.actor.str + action.actor.agi * 1.2);
                            monster.currentHp -= dmg;
                            this.addLog(`${action.actor.name}縺ｮ迢吶＞謦・■・・MP-3) 諤･謇繧堤ｪ√＞縺ｦ${monster.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '繝｢繝ｳ繧ｯ') {
                        if (action.actor.mp >= 4) {
                            action.actor.mp -= 4;
                            // Small Heal (half of Cleric)
                            let target = action.actor;
                            let minHpPct = target.hp / target.maxHp;
                            this.party.forEach(p => {
                                if (p.hp > 0 && (p.hp / p.maxHp) < minHpPct) {
                                    target = p;
                                    minHpPct = p.hp / p.maxHp;
                                }
                            });
                            const heal = Math.max(8, Math.floor(action.actor.int * 0.5 + 5));
                            target.hp = Math.min(target.maxHp, target.hp + heal);
                            this.addLog(`${action.actor.name}縺ｮ邊ｾ逾樒ｵｱ荳・・MP-4) ${target.name}縺ｮHP縺・{heal}蝗槫ｾｩ・～);
                            const tgtIdx = this.party.indexOf(target);
                            if (tgtIdx !== -1) this.showHealEffect(tgtIdx, heal);

                            // Follow-up attack
                            const wpnAtk = (action.actor.equipment.weapon?.atk || 0) + (action.actor.equipment.accessory?.atk || 0);
                            const dmg = Math.max(1, (action.actor.str + wpnAtk) + Math.floor(Math.random() * 3));
                            monster.currentHp -= dmg;
                            this.addLog(`${action.actor.name}縺ｮ霑ｽ謦・ｼ・${monster.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                            this.showHitEffect(monsterDOMId, dmg);
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    } else if (job === '繝薙す繝ｧ繝・・') {
                        if (action.actor.mp >= 8) {
                            action.actor.mp -= 8;
                            // Standard Heal (same as Cleric)
                            let target = action.actor;
                            let minHpPct = target.hp / target.maxHp;
                            this.party.forEach(p => {
                                if (p.hp > 0 && (p.hp / p.maxHp) < minHpPct) {
                                    target = p;
                                    minHpPct = p.hp / p.maxHp;
                                }
                            });
                            const heal = Math.max(15, action.actor.int + 10);
                            target.hp = Math.min(target.maxHp, target.hp + heal);
                            this.addLog(`${action.actor.name}縺ｮ繝帙・繝ｪ繝ｼ繝ｩ繧､繝茨ｼ・MP-8) ${target.name}縺ｮHP縺・{heal}蝗槫ｾｩ・～);
                            const tgtIdx = this.party.indexOf(target);
                            if (tgtIdx !== -1) this.showHealEffect(tgtIdx, heal);

                            // AoE Attack
                            this.addLog("縺輔ｉ縺ｫ閨悶↑繧句・縺梧雰蜈ｨ蜩｡繧堤┥縺肴鴛縺・ｼ・);
                            aliveMonsters.forEach(m => {
                                const dmg = Math.max(12, Math.floor(action.actor.int * 1.8 + 10));
                                m.currentHp -= dmg;
                                this.addLog(`${m.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                                this.showHitEffect(m.id, dmg);
                            });
                        } else {
                            this.addLog(`${action.actor.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
                        }
                    }
                } else if (action.type === 'run') {
                    if (Math.random() > 0.4) {
                        this.addLog("騾・￡蜃ｺ縺励◆・・);
                        audio.playBGM('bgm_explore');
                        this.endBattle(false);
                        return;
                    } else this.addLog("騾・￡繧峨ｌ縺ｪ縺九▲縺滂ｼ・);
                }

                monsters.forEach(m => {
                    if (m.currentHp <= 0 && !m.deadLogged) {
                        m.deadLogged = true;
                        this.addLog(`${m.name}繧貞偵＠縺滂ｼ～);
                    }
                });
            } else {
                if (action.actor.currentHp <= 0) continue; // Skip attacks if monster died before turn
                const aliveParty = this.party.filter(p => p.hp > 0);
                if (aliveParty.length === 0) break;

                const skill = this.currentBattle.isBoss ? ENEMY_SKILLS['boss'] : ENEMY_SKILLS[action.actor.imgIndex];
                if (skill && Math.random() < skill.chance) {
                    this.addLog(`${action.actor.name}縺ｮ${skill.name}・～);
                    if (skill.desc) this.addLog(skill.desc);

                    const target = aliveParty[Math.floor(Math.random() * aliveParty.length)];
                    const pIdx = this.party.indexOf(target);

                    if (skill.type === 'attack') {
                        const armDef = (target.equipment.armor?.def || 0) + (target.equipment.accessory?.def || 0);
                        const dmg = Math.max(1, Math.floor((action.actor.atk * skill.mult) - (target.vit + armDef) / 2) + Math.floor(Math.random() * 3));
                        target.hp = Math.max(0, target.hp - dmg);
                        this.addLog(`${target.name}縺ｯ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                        this.showPartyHitEffect(pIdx, dmg);
                        audio.playSE('se_damage');
                    } else if (skill.type === 'pierce') {
                        const dmg = Math.max(1, Math.floor(action.actor.atk * skill.mult) + Math.floor(Math.random() * 3));
                        target.hp = Math.max(0, target.hp - dmg);
                        this.addLog(`${target.name}縺ｯ髦ｲ蠕｡荳崎・縺ｮ${dmg}繝繝｡繝ｼ繧ｸ・～);
                        this.showPartyHitEffect(pIdx, dmg);
                        audio.playSE('se_damage');
                    } else if (skill.type === 'aoe') {
                        audio.playSE('se_magic');
                        this.party.forEach((p, idx) => {
                            if (p.hp > 0) {
                                const armDef = (p.equipment.armor?.def || 0) + (p.equipment.accessory?.def || 0);
                                const dmg = Math.max(1, Math.floor((action.actor.atk * skill.mult) - (p.vit + armDef) / 2) + Math.floor(Math.random() * 3));
                                p.hp = Math.max(0, p.hp - dmg);
                                this.addLog(`${p.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                                this.showPartyHitEffect(idx, dmg);
                            }
                        });
                    } else if (skill.type === 'drain') {
                        const armDef = (target.equipment.armor?.def || 0) + (target.equipment.accessory?.def || 0);
                        const dmg = Math.max(1, Math.floor((action.actor.atk * skill.mult) - (target.vit + armDef) / 2) + Math.floor(Math.random() * 3));
                        target.hp = Math.max(0, target.hp - dmg);
                        const heal = Math.floor(dmg * 0.5);
                        action.actor.currentHp = Math.min(action.actor.hp, action.actor.currentHp + heal);
                        this.addLog(`${target.name}縺ｫ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・・${action.actor.name}縺ｯ${heal}蝗槫ｾｩ縺励◆・～);
                        this.showPartyHitEffect(pIdx, dmg);
                        audio.playSE('se_damage');
                    } else if (skill.type === 'summon') {
                        if (this.currentBattle.monsters.length < 5) {
                            const newIdx = this.currentBattle.monsters.length;
                            const mData = { ...action.actor, id: `monster-${newIdx}`, currentHp: action.actor.hp, deadLogged: false };
                            const sameType = this.currentBattle.monsters.filter(m => (m.originalName || m.name).startsWith(mData.originalName || mData.name.split(' ')[0]));
                            mData.name = (mData.originalName || mData.name.split(' ')[0]) + " " + String.fromCharCode(65 + sameType.length);
                            this.currentBattle.monsters.push(mData);
                            const mo = document.getElementById('monster-overlay');
                            const container = document.createElement('div');
                            container.className = 'monster-img-container';
                            container.id = `monster-img-${newIdx}`;
                            container.innerHTML = mData.svg;
                            mo.appendChild(container);
                            this.addLog(`譁ｰ縺溘↑${mData.originalName || mData.name.split(' ')[0]}縺檎樟繧後◆・～);
                        } else {
                            this.addLog("縺励°縺嶺ｻｲ髢薙ｒ蜻ｼ縺ｶ繧ｹ繝壹・繧ｹ縺後↑縺・ｼ・);
                        }
                    }
                } else {
                    const target = aliveParty[Math.floor(Math.random() * aliveParty.length)];
                    const pIdx = this.party.indexOf(target);
                    if (target) {
                        const armDef = (target.equipment.armor?.def || 0) + (target.equipment.accessory?.def || 0);
                        const dmg = Math.max(1, action.actor.atk - Math.floor((target.vit + armDef) / 2) + Math.floor(Math.random() * 3));
                        target.hp = Math.max(0, target.hp - dmg);
                        this.addLog(`${action.actor.name}縺ｮ謾ｻ謦・ｼ・${target.name}縺ｯ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                        this.showPartyHitEffect(pIdx, dmg);
                        audio.playSE('se_damage');
                    }
                }

                this.party.forEach(p => {
                    if (p.hp <= 0 && !p.deadLogged) {
                        p.deadLogged = true;
                        this.addLog(`${p.name}縺ｯ蛟偵ｌ縺・..`);
                    }
                });
            }
            this.updateUI();

            // Re-check for remaining enemies after applying damage
            const remain = monsters.filter(m => m.currentHp > 0);
            if (remain.length === 0) break;

            await new Promise(r => setTimeout(r, 600));
        }

        const remainMonsters = monsters.filter(m => m.currentHp > 0);
        if (remainMonsters.length === 0) {
            audio.playSE('se_dead');
            this.addLog(`鬲皮黄縺溘■繧定ｨ惹ｼ舌＠縺滂ｼ～);
            this.endBattle(true);
        } else if (this.party.every(p => p.hp <= 0)) {
            this.handleGameOver();
            return;
        } else {
            this.currentBattle.turnOrder = [];
            this.currentBattle.phase = 'INPUT';
            this.turnIndex = 0;
            this.updateUI();
        }
    }

    flashEffect() {
        const viewport = document.getElementById('viewport-container');
        viewport.classList.add('flash');
        setTimeout(() => viewport.classList.remove('flash'), 200);
    }

    showHitEffect(monsterId, dmgNum) {
        audio.playSE('se_attack');
        // monsterId is 'monster-0', but DOM id is 'monster-img-0'
        const domId = monsterId.replace('monster-', 'monster-img-');
        const mNode = document.getElementById(domId);
        if (!mNode) return;
        mNode.classList.remove('target-hit');
        void mNode.offsetWidth; // trigger reflow
        mNode.classList.add('target-hit');

        const rect = mNode.getBoundingClientRect();

        const popup = document.createElement('div');
        popup.className = 'damage-popup';
        popup.textContent = dmgNum;
        // Calculate center position relative to document viewport
        popup.style.left = `${rect.left + (rect.width || 100) / 2 + window.scrollX}px`;
        popup.style.top = `${rect.top + (rect.height || 100) / 2 - 20 + window.scrollY}px`;

        document.body.appendChild(popup);
        setTimeout(() => { if (popup.parentNode) popup.remove(); }, 1000);

        // Hide monster smoothly if HP dropped to 0
        const mData = this.currentBattle.monsters.find(m => m.id === monsterId);
        if (mData && mData.currentHp <= 0) {
            mNode.style.transition = 'all 0.5s ease-out';
            mNode.style.opacity = '0';
            mNode.style.transform = 'scale(0.1)';
            setTimeout(() => {
                mNode.style.display = 'none';
            }, 500);
        }
    }

    showHealEffect(partyIdx, healNum) {
        const pNode = document.getElementById(`party-member-${partyIdx}`);
        if (!pNode) return;

        const rect = pNode.getBoundingClientRect();

        const popup = document.createElement('div');
        popup.className = 'heal-popup';
        popup.textContent = healNum;
        popup.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
        popup.style.top = `${rect.top + rect.height / 2 - 20 + window.scrollY}px`;

        document.body.appendChild(popup);
        setTimeout(() => { if (popup.parentNode) popup.remove(); }, 1000);
    }

    showPartyHitEffect(partyIdx, dmgNum) {
        const pNode = document.getElementById(`party-member-${partyIdx}`);
        if (!pNode) return;
        pNode.classList.remove('target-hit');
        void pNode.offsetWidth; // trigger reflow
        pNode.classList.add('target-hit');

        const rect = pNode.getBoundingClientRect();

        const popup = document.createElement('div');
        popup.className = 'damage-popup';
        popup.textContent = dmgNum;
        popup.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
        popup.style.top = `${rect.top + rect.height / 2 - 20 + window.scrollY}px`;

        document.body.appendChild(popup);
        setTimeout(() => { if (popup.parentNode) popup.remove(); }, 1000);
    }

    async showBlackout(message, duration = 3000, midCallback = null) {
        const overlay = document.getElementById('fade-overlay');
        const textNode = document.getElementById('fade-text');

        overlay.style.display = 'flex';
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');

        if (message) {
            textNode.textContent = message;
            textNode.style.opacity = 1;
        }

        // Wait for fade-in (approx 1s)
        await new Promise(r => setTimeout(r, 1000));

        // If there's a callback to run while black (e.g., teleportation)
        if (midCallback) {
            await midCallback();
        }

        // Wait the remaining time (considering the 1s fade-in)
        const waitTime = Math.max(0, duration - 1000);
        await new Promise(r => setTimeout(r, waitTime));

        if (message) {
            textNode.style.opacity = 0;
        }

        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');

        await new Promise(r => setTimeout(r, 1000));
        overlay.style.display = 'none';
    }

    async handleGameOver() {
        const currentFloorNum = this.currentFloor + 1;
        const penaltySeconds = currentFloorNum * 30;
        const penaltyMs = penaltySeconds * 1000;

        await this.showBlackout("蜈ｨ貊・＠縺・, 2000, async () => {
            // Restore health and return to start while the screen is black
            this.party.forEach(p => {
                p.hp = p.maxHp;
                p.mp = p.maxMp;
                p.deadLogged = false;
            });

            this.playerPos = { x: 1, y: 1, dir: 1 };
            this.currentFloor = 0;
            document.getElementById('floor-indicator').textContent = `B1F`;
            this.updateVisited();

            this.state = 'EXPLORE';
            document.getElementById('explore-menu').style.display = 'flex';
            document.getElementById('battle-menu').style.display = 'none';
            document.getElementById('monster-overlay').style.display = 'none';
            this.currentBattle = null;

            audio.playBGM('bgm_explore');
            this.render(); // Use render() instead of updateUI() to refresh canvas
            this.saveGame();
        });

        this.addLog("隰弱・蜉帙↓繧医▲縺ｦ霑ｷ螳ｮ縺ｮ蜈･繧雁哨縺ｫ謌ｻ縺輔ｌ縺溪ｦ");
        this.addLog(`・医・繝翫Ν繝・ぅ: 繧ｿ繧､繝縺・{penaltySeconds}遘貞刈邂励＆繧後◆・荏);

        // Apply (floor * 30) seconds penalty to timer
        this.startTime -= penaltyMs;

        this.addLog("豌励′莉倥￥縺ｨ霑ｷ螳ｮ縺ｮ蜈･繧雁哨縺ｫ縺・ｋ縲ら伴縺ｫ縺ｯ謌ｻ繧後↑縺・ゅい繝薙せ繝ｭ繝ｼ繝峨ｒ蛟偵☆縺励°縺ｪ縺・ｈ縺・□縲・);
    }

    endBattle(won) {
        const mo = document.getElementById('monster-overlay');
        mo.style.transform = '';
        mo.style.filter = '';
        mo.innerHTML = '';

        if (won) {
            audio.playSE('se_victory');
            if (this.currentBattle.isBoss) {
                this.triggerEnding();
                return;
            }

            if (this.currentBattle.isSwordsmanEvent) {
                this.addLog("迢ゆｹｱ縺ｮ蜑｣螢ｫ繧帝縺代◆...・∝ｼｷ蜉帙↑蜷榊・繧呈焔縺ｫ蜈･繧後◆縲・);
                const specialWpn = { name: "蜷榊・繝ｻ迢らｾ", type: "weapon", atk: 65, req: { str: 20 }, desc: "逕滓ｰ励ｒ蜷ｸ縺・ｦ門・(ATK+65)" };
                this.inventory.push(specialWpn);
            }
            if (this.currentBattle.isGoblinEvent) {
                this.addLog("繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ繧呈遠縺｡蛟偵☆縺ｨ縲√◎縺ｮ謇九°繧牙ｰ冗童縺ｨ驩医′霆｢縺後ｊ關ｽ縺｡縺溪ｦ縲・);
                const elixir = {
                    name: '螯也ｲｾ縺ｮ髴願脈', type: 'consumable', infinite: true, targetAll: true, desc: '菴募ｺｦ縺ｧ繧ゆｽｿ縺医ｋ蜈ｨ菴灘屓蠕ｩ阮ｬ',
                    effect: () => { this.party.forEach(mbr => { if (mbr.hp > 0) mbr.hp = Math.min(mbr.maxHp, mbr.hp + 50); }); this.addLog(`螯也ｲｾ縺ｮ髴願脈繧剃ｽｿ縺｣縺滂ｼ∝・蜩｡縺ｮHP縺・0蝗槫ｾｩ・～); }
                };
                const goblinWpn = { name: "繧ｭ繝ｳ繧ｰ繧ｴ繝悶Μ繝ｳ縺ｮ驩・, type: "weapon", atk: 25, req: { str: 15 }, desc: "闕偵・＠縺・ｸ謦・ｒ謾ｾ縺､驩・ATK+25)" };
                this.inventory.push(elixir, goblinWpn);
            }

            const exp = this.currentBattle.monsters.reduce((sum, m) => sum + m.exp, 0);
            this.party.forEach(p => {
                if (p.hp > 0) {
                    p.exp += exp;
                    // Exponentially scaling requirement: standard formula is roughly (Lv^2 or Lv^3) * base
                    // Here we use Lv^2.2 to stay ahead of exponential monster exp growth
                    let nextExpThreshold = Math.floor(60 * Math.pow(p.level, 2.2));
                    while (p.exp >= nextExpThreshold) {
                        p.level++;
                        p.maxHp += 8;
                        p.maxMp += 4; p.mp = p.maxMp;
                        p.str += 2; p.int += 2; p.vit += 2; p.agi += 2; p.luk += 2;
                        this.addLog(`${p.name}縺ｯ繝ｬ繝吶Ν${p.level}縺ｫ荳翫′縺｣縺滂ｼ～);
                        nextExpThreshold = Math.floor(60 * Math.pow(p.level, 2.2));
                    }
                }
            });

            // Item Drop
            if (Math.random() < 0.4) {
                const currentLvl = this.currentFloor + 1;
                const maxLevel = Math.min(10, currentLvl + 2); // Up to +2 floor
                const minLevel = Math.max(1, currentLvl - 3);  // Down to -3 floor
                const pool = ITEMS.filter(i => (i.level || 1) >= minLevel && (i.level || 1) <= maxLevel);

                if (pool.length > 0) {
                    const baseDrop = pool[Math.floor(Math.random() * pool.length)];
                    const drop = { ...baseDrop }; // Clone object for variants

                    if (drop.type !== 'consumable') {
                        let totalWeight = ITEM_PREFIXES.reduce((sum, p) => sum + p.weight, 0);
                        let r = Math.random() * totalWeight;
                        let prefix = ITEM_PREFIXES[0];
                        for (let p of ITEM_PREFIXES) {
                            r -= p.weight;
                            if (r <= 0) { prefix = p; break; }
                        }

                        if (prefix.name !== '') {
                            drop.name = prefix.name + drop.name;
                            let statArr = [];

                            if (drop.atk !== undefined) {
                                drop.atk = Math.round(drop.atk * prefix.mult);
                                statArr.push(`ATK${drop.atk >= 0 ? '+' : ''}${drop.atk}`);
                            }
                            if (drop.def !== undefined) {
                                drop.def = Math.round(drop.def * prefix.mult);
                                statArr.push(`DEF${drop.def >= 0 ? '+' : ''}${drop.def}`);
                            }
                            if (drop.int !== undefined) {
                                drop.int = Math.round(drop.int * prefix.mult);
                                statArr.push(`INT${drop.int >= 0 ? '+' : ''}${drop.int}`);
                            }
                            if (drop.agi !== undefined) {
                                drop.agi = Math.round(drop.agi * prefix.mult);
                                statArr.push(`AGI${drop.agi >= 0 ? '+' : ''}${drop.agi}`);
                            }
                            if (drop.luk !== undefined) {
                                drop.luk = Math.round(drop.luk * prefix.mult);
                                statArr.push(`LUK${drop.luk >= 0 ? '+' : ''}${drop.luk}`);
                            }

                            drop.desc = `${statArr.join(', ')} (蜈・ ${baseDrop.name})`;
                        }
                    }
                    // Instead of pushing to inventory directly, trigger treasure event
                    this.triggerTreasureEvent(drop);
                    return; // endBattle will be completed via treasure UI
                }
            }
            this.exitBattle();
        }
    }

    exitBattle() {
        this.state = 'EXPLORE';
        document.getElementById('explore-menu').style.display = 'flex';
        document.getElementById('battle-menu').style.display = 'none';
        document.getElementById('monster-overlay').style.display = 'none';
        this.currentBattle = null;
        if (!this.currentBattle?.isBoss) {
            audio.playBGM('bgm_explore');
        }
        this.updateUI();
    }

    triggerTreasureEvent(drop) {
        this.state = 'TREASURE';
        const screen = document.getElementById('event-screen');
        const title = document.getElementById('event-title');
        const img = document.getElementById('event-img');
        const desc = document.getElementById('event-desc');
        const opts = document.getElementById('event-options');

        title.textContent = "螳晉ｮｱ繧堤匱隕具ｼ・;
        img.src = "assets/chest.png";
        img.style.display = "block";
        desc.textContent = "鬲皮黄縺悟ｮ晉ｮｱ繧呈ｮ九＠縺ｦ縺・▲縺溘ｈ縺・□縲ゅ←縺・☆繧具ｼ・;

        opts.innerHTML = '';
        const btnOpen = document.createElement('button');
        btnOpen.className = 'btn';
        btnOpen.textContent = "髢九￠繧・;
        btnOpen.onclick = () => this.openChest(drop);

        const btnLeave = document.createElement('button');
        btnLeave.className = 'btn';
        btnLeave.textContent = "遶九■蜴ｻ繧・;
        btnLeave.onclick = () => {
            this.addLog("螳晉ｮｱ繧呈叛鄂ｮ縺励※遶九■蜴ｻ縺｣縺溘・);
            this.closeEvent();
            this.exitBattle();
            this.saveGame();
        };

        opts.appendChild(btnOpen);
        opts.appendChild(btnLeave);

        // Add keyboard hints
        const buttons = opts.querySelectorAll('button');
        const hints = ['(A)', '(S)'];
        buttons.forEach((btn, idx) => {
            if (hints[idx]) btn.textContent += hints[idx];
        });

        screen.style.display = 'flex';
    }

    openChest(drop) {
        // Find player with highest Luck + Agility
        let expert = this.party[0];
        let maxVal = expert.luk + expert.agi;
        this.party.forEach(p => {
            if (p.hp > 0 && (p.luk + p.agi) > maxVal) {
                expert = p;
                maxVal = p.luk + p.agi;
            }
        });

        this.addLog(`${expert.name}縺瑚ｧ｣骭繧定ｩｦ縺ｿ繧・..`);

        const roll = Math.random() * 100;
        const successRate = 40 + (expert.luk + expert.agi) / 4;
        const trapRate = Math.max(10, 30 - (expert.luk + expert.agi) / 8);

        if (roll < successRate) {
            this.addLog("隗｣骭謌仙粥・・);
            this.addLog(`縲・{drop.name}縲阪ｒ謇九↓蜈･繧後◆・～);
            this.inventory.push(drop);
            this.closeEvent();
            this.exitBattle();
            this.saveGame();
        } else if (roll < successRate + trapRate) {
            this.addLog("鄂縺ｫ縺九°縺｣縺滂ｼ・ｼ・);
            const traps = ['alarm', 'teleport', 'drain', 'bomb', 'curse'];
            const trapType = traps[Math.floor(Math.random() * traps.length)];
            this.triggerTrap(trapType);
        } else {
            this.addLog("隗｣骭縺ｫ螟ｱ謨励＠縺溘′縲∫ｽ縺ｯ菴懷虚縺励↑縺九▲縺溘・);
            this.closeEvent();
            this.exitBattle();
            this.saveGame();
        }
    }

    triggerTrap(type) {
        this.closeEvent();
        switch (type) {
            case 'alarm':
                this.addLog("隴ｦ蝣ｱ縺・∝捉蝗ｲ縺ｮ鬲皮黄縺碁寔縺ｾ縺｣縺ｦ縺阪◆・・);
                this.startBattle(true);
                break;
            case 'teleport':
                this.addLog("繝・Ξ繝昴・繧ｿ繝ｼ縺御ｽ懷虚縺励◆・・);
                let rx, ry;
                const map = LEVELS[this.currentFloor];
                do {
                    rx = 1 + Math.floor(Math.random() * (MAP_SIZE - 2));
                    ry = 1 + Math.floor(Math.random() * (MAP_SIZE - 2));
                } while (map[ry][rx] !== 0 && map[ry][rx] !== 2 && map[ry][rx] !== 3);
                this.playerPos.x = rx;
                this.playerPos.y = ry;
                this.exitBattle();
                break;
            case 'drain':
                this.addLog("繝峨Ξ繧､繝ｳ縺ｮ鄂縺・√ヱ繝ｼ繝・ぅ縺ｮ逕溷多蜉帙′蜷ｸ縺・叙繧峨ｌ繧具ｼ・);
                this.party.forEach(p => {
                    if (p.level > 1) {
                        p.level--;
                        p.maxHp = Math.max(1, p.maxHp - 8);
                        p.maxMp = Math.max(0, p.maxMp - 4);
                        p.hp = Math.min(p.hp, p.maxHp);
                        p.mp = Math.min(p.mp, p.maxMp);
                        p.str = Math.max(1, p.str - 2); p.int = Math.max(1, p.int - 2);
                        p.vit = Math.max(1, p.vit - 2); p.agi = Math.max(1, p.agi - 2);
                        p.luk = Math.max(1, p.luk - 2);
                        this.addLog(`${p.name}縺ｯ繝ｬ繝吶Ν${p.level}縺ｫ荳九′縺｣縺・..`);
                    }
                });
                this.exitBattle();
                break;
            case 'bomb':
                this.addLog("辷・ｼｾ縺檎・逋ｺ縺励◆・∝・蜩｡縺後ム繝｡繝ｼ繧ｸ繧貞女縺代◆・・);
                this.party.forEach((p, idx) => {
                    if (p.hp > 0) {
                        const dmg = Math.floor(p.maxHp * 0.3);
                        p.hp = Math.max(1, p.hp - dmg); // Leave at least 1 HP? User didn't specify, but regular bombs usually leave 1 HP or kill. Let's make it dangerous.
                        this.addLog(`${p.name}縺ｯ${dmg}縺ｮ繝繝｡繝ｼ繧ｸ・～);
                        this.showPartyHitEffect(idx, dmg);
                    }
                });
                this.exitBattle();
                break;
            case 'curse':
                this.addLog("蜻ｪ縺・・髴ｧ縺檎ｫ九■霎ｼ繧√ｋ...繝代・繝・ぅ縺ｮ鬲泌鴨縺梧ｸ帛ｰ代＠縺滂ｼ・);
                this.party.forEach(p => {
                    if (p.mp > 0) {
                        const loss = Math.floor(p.maxMp * 0.5);
                        p.mp = Math.max(0, p.mp - loss);
                        this.addLog(`${p.name}縺ｮMP縺・{loss}貂帛ｰ代＠縺溘Ａ);
                    }
                });
                this.exitBattle();
                break;
        }
        this.saveGame();
    }

    async triggerEnding() {
        this.state = 'ENDING';
        this.clearTime = Date.now() - this.startTime;

        await this.showBlackout("繧｢繝薙せ繝ｭ繝ｼ繝峨・豕｢蜍輔′豸亥､ｱ縺励◆", 3000);

        // Show ending story
        this.startEndingStory();
    }

    startEndingStory() {
        audio.playBGM('bgm_intro'); // Re-use intro music for ending
        const storyScreen = document.getElementById('story-screen');
        const storyContent = document.getElementById('story-content');
        const nextBtn = document.getElementById('btn-story-next');
        const skipBtn = document.getElementById('btn-story-skip');

        storyScreen.style.display = 'flex';
        skipBtn.style.display = 'none'; // No skipping the ending!

        this.endingIndex = 0;
        this.endingMessages = [
            "霑ｷ螳ｮ縺ｮ譛豺ｱ驛ｨ...<br>繧｢繝薙せ繝ｭ繝ｼ繝峨・蟾ｨ霄ｯ縺悟ｴｩ繧瑚誠縺｡縲・悸縺ｮ繧医≧縺ｫ豸医∴縺ｦ縺・￥縲・,
            "蝨ｰ荳翫↓謌ｻ繧九→縲∵≒縺九＠縺・・蝣ｴ縺ｮ譏弱°繧翫′隕九∴縺溘・,
            "驟貞ｴ縺ｫ縺ｦ...<br>豁ｻ邱壹ｒ貎懊ｊ謚懊￠縺溘ヱ繝ｼ繝・ぅ繧偵√ヰ繝ｼ繝・Φ繝繝ｼ縺梧ｸｩ縺九￥霑弱∴繧九・,
            "繝舌・繝・Φ繝繝ｼ<br>縲後ｈ縺上ｄ縺｣縺溘↑縲ゅ♀蜑阪◆縺｡縺ｪ繧峨ｄ縺｣縺ｦ縺上ｌ繧九→菫｡縺倥※縺・◆繧医・br>縺薙ｌ縺ｧ縺励・繧峨￥縺ｯ縺薙・陦励ｂ螳画ｳｰ縺縲ゅ・,
            `${this.party[0].name}<br>縲後≠縺ゅ√↑繧薙→縺九↑縺｣縺溘↑縲・br>縺縺後√い繝薙せ繝ｭ繝ｼ繝峨・縺ｾ縺溘＞縺､縺句ｾｩ豢ｻ縺吶ｋ繧薙□繧阪≧・溘港,
            "繝舌・繝・Φ繝繝ｼ<br>縲後ヵ繝・..縺昴・譎ゅ・縺ｾ縺溘∵眠縺励＞闍ｱ髮・′蠢・ｦ√↓縺ｪ繧九□繧阪≧縺ｪ縲・br>縺縺御ｻ翫・縲∝享蛻ｩ縺ｮ鄒朱・繧貞袖繧上≧縺後＞縺・ゅ・,
            `${this.party[1].name}<br>縲檎ｧ√・鬲疲ｳ輔′螟ｧ縺・↓蠖ｹ遶九▲縺溘ｏ縺ｭ縲・br>縺輔※縲∫ｧ√・閾ｪ蛻・・遐皮ｩｶ縺ｫ謌ｻ繧九ｏ縲ゅ∪縺溽ｸ√′縺ゅｌ縺ｰ縲ゅ港,
            `${this.party[2].name}<br>縲御ｿｮ陦後・謌先棡繧定ｩｦ縺吶↓縺ｯ蜊∝・縺ｪ霑ｷ螳ｮ縺縺｣縺溘・br>縺輔ｉ縺ｰ縺縲らｧ√・縺輔ｉ縺ｪ繧矩ｫ倥∩繧堤岼謖・☆縲ゅ港,
            `${this.party[3].name}<br>縲後♀縺・♀縺・√ｂ縺・ｧ｣謨｣縺九ｈ・・br>縺ｾ縺√＞縺・＆縲∽ｿｺ繧ょｰ代＠縺ｮ繧薙・繧翫＆縺帙※繧ゅｉ縺・●・√港,
            `${this.party[0].name}<br>縲後≠縺・..縺昴ｌ縺槭ｌ蛻･縺ｮ驕薙ｒ陦後￥縺｣縺ｦ繧上￠縺九ゅ港,
            "繝舌・繝・Φ繝繝ｼ<br>縲御ｸ譛滉ｸ莨壹√◎繧後′蜀帝匱閠・→縺・≧繧ゅ・縺輔・br>縺輔＝縲∵怙蠕後・荵ｾ譚ｯ繧偵＠繧医≧縲り｡励・蟷ｳ蜥後↓・√・,
            "縺薙≧縺励※縲∬・譎ゅ〒邨・∪繧後◆繝代・繝・ぅ縺ｯ隗｣謨｣縺励・br>縺昴ｌ縺槭ｌ縺ｮ迚ｩ隱槭∈縺ｨ蟶ｰ縺｣縺ｦ縺・▲縺溪披・
        ];

        this.displayNextEndingStory();
    }

    displayNextEndingStory() {
        const storyContent = document.getElementById('story-content');
        const nextBtn = document.getElementById('btn-story-next');

        if (this.endingIndex >= this.endingMessages.length) {
            document.getElementById('story-screen').style.display = 'none';
            this.showFinalRanking();
            return;
        }

        const msg = this.endingMessages[this.endingIndex];
        storyContent.innerHTML = `<div class="story-anim">${msg}</div>`;
        this.endingIndex++;

        nextBtn.style.display = 'none';
        nextBtn.onclick = () => this.displayNextEndingStory(); // override for ending

        setTimeout(() => {
            nextBtn.style.display = 'inline-block';
            if (this.endingIndex >= this.endingMessages.length) {
                nextBtn.textContent = '繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ縺ｸ';
                nextBtn.style.color = '#5f5';
                nextBtn.style.borderColor = '#5f5';
            } else {
                nextBtn.textContent = '谺｡縺ｸ 笆ｼ';
                nextBtn.style.color = '#ffcc00';
                nextBtn.style.borderColor = '#ffcc00';
            }
        }, 800);
    }

    showFinalRanking() {
        const elapsed = Math.floor(this.clearTime / 1000);
        const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
        const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
        const s = String(elapsed % 60).padStart(2, '0');
        const timeStr = `${h}:${m}:${s}`;

        document.getElementById('clear-time-display').textContent = timeStr;
        document.getElementById('ending-screen').style.display = 'flex';

        const btn = document.getElementById('btn-submit-score');
        btn.onclick = () => {
            const name = document.getElementById('player-name-input').value.trim() || '蜷咲┌縺・;
            btn.disabled = true;
            btn.textContent = '騾∽ｿ｡荳ｭ...';

            if (window.firebaseInitialized) {
                const dbRankRef = window.firebaseRef(window.firebaseDB, 'rankings');
                window.firebasePush(dbRankRef, {
                    name: name,
                    time: this.clearTime,
                    timeStr: timeStr,
                    karma: this.karma,
                    timestamp: Date.now()
                }).then(() => {
                    btn.textContent = '逋ｻ骭ｲ螳御ｺ・ｼ・;
                }).catch(e => {
                    btn.textContent = '繧ｨ繝ｩ繝ｼ逋ｺ逕・;
                    console.error(e);
                });
            }
        };

        this.loadRankings();
    }

    loadRankings() {
        if (!window.firebaseInitialized) return;
        const dbRankRef = window.firebaseRef(window.firebaseDB, 'rankings');
        const q = window.firebaseQuery(dbRankRef, window.firebaseOrderByChild('time'), window.firebaseLimitToFirst(10));

        window.firebaseOnValue(q, (snapshot) => {
            let html = '';
            let rank = 1;
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val();

                // XSS蟇ｾ遲厄ｼ唏TML繧ｿ繧ｰ縺ｮ繧ｨ繧ｹ繧ｱ繝ｼ繝怜・逅・                const safeName = typeof data.name === 'string' ?
                    data.name.replace(/[&<>'"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[m])) : '蜷咲┌縺・;
                const safeTime = typeof data.timeStr === 'string' ?
                    data.timeStr.replace(/[&<>'"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[m])) : '';
                const karmaStr = data.karma !== undefined ? `<span style="color:#aaf; font-size:12px; margin-left:10px;">[繧ｫ繝ｫ繝・ ${parseInt(data.karma, 10)}]</span>` : '';

                html += `<div class="rank-item"><span>${rank}. ${safeName}${karmaStr}</span> <span style="color:#ffcc00;">${safeTime}</span></div>`;
                rank++;
            });
            document.getElementById('ranking-container').innerHTML = html || '縺ｾ縺險倬鹸縺後≠繧翫∪縺帙ｓ縲・;
        });
    }

    /**
     * CAMP SYSTEM
     */
    toggleCamp() {
        const campMenu = document.getElementById('camp-menu');
        if (this.state === 'EXPLORE') {
            this.state = 'CAMP';
            document.getElementById('explore-menu').style.display = 'none';
            campMenu.style.display = 'flex';
            this.updateCampUI();
        } else if (this.state === 'CAMP') {
            this.state = 'EXPLORE';
            campMenu.style.display = 'none';
            document.getElementById('explore-menu').style.display = 'flex';
            this.saveGame();
        }
    }

    updateCampUI() {
        const campMenu = document.getElementById('camp-menu');
        if (this.state !== 'CAMP') return;
        this.updateUI(); // Keep sidebar in sync

        let html = '<div class="camp-header">CAMP - 繝代・繝・ぅ迥ｶ豕・/div>';

        this.party.forEach((p, idx) => {
            const nextExp = Math.floor(60 * Math.pow(p.level, 2.2));
            const wpn = p.equipment.weapon ? p.equipment.weapon.name : '縺ｪ縺・;
            const arm = p.equipment.armor ? p.equipment.armor.name : '縺ｪ縺・;
            const acc = p.equipment.accessory ? p.equipment.accessory.name : '縺ｪ縺・;

            const getBonus = (statKey) => {
                let bonus = 0;
                ['weapon', 'armor', 'accessory'].forEach(slot => {
                    if (p.equipment[slot] && p.equipment[slot][statKey] !== undefined) {
                        bonus += p.equipment[slot][statKey];
                    }
                });
                return bonus !== 0 ? ` <span style="color:${bonus > 0 ? '#5f5' : '#f55'}">(${bonus > 0 ? '+' : ''}${bonus})</span>` : '';
            };

            const strBonus = getBonus('atk');
            const vitBonus = getBonus('def');
            const intBonus = getBonus('int');
            const agiBonus = getBonus('agi');
            const lukBonus = getBonus('luk');

            html += `
                        <div class="camp-character">
                            <div class="camp-char-stats">
                                <strong style="color:var(--text-color); font-size:16px;">${p.name} (${p.job})</strong> - Lv: ${p.level}<br>
                                <div style="font-size:11px; color:#ccc; margin-bottom:4px;">
                                    ${p.desc}<br>
                                    <span style="color:#aaf;">[繧ｹ繧ｭ繝ｫ] ${p.skillDesc}</span>
                                </div>
                                HP: ${p.hp} / ${p.maxHp} | MP: ${p.mp} / ${p.maxMp}<br>
                                STR: ${p.str}${strBonus} | INT: ${p.int}${intBonus} | VIT: ${p.vit}${vitBonus} | AGI: ${p.agi}${agiBonus} | LUK: ${p.luk}${lukBonus}<br>
                                EXP: ${p.exp} / ${nextExp}<br>
                                <span style="color:#888; font-size:12px;">EQ: [${wpn}] [${arm}] [${acc}]</span>
                            </div>
                            <div class="camp-char-actions">
                                ${p.job === '蜒ｧ萓ｶ' ? `<button class="btn" style="padding:4px; font-size:10px; margin-bottom:2px;" onclick="game.castCampMagic(${idx})">蝗槫ｾｩ鬲疲ｳ・3MP)</button>` : ''}
                                ${p.job === '繝｢繝ｳ繧ｯ' ? `<button class="btn" style="padding:4px; font-size:10px; margin-bottom:2px;" onclick="game.castCampMagic(${idx})">邊ｾ逾樒ｵｱ荳(3MP)</button>` : ''}
                                ${p.job === '繝薙す繝ｧ繝・・' ? `<button class="btn" style="padding:4px; font-size:10px; margin-bottom:2px;" onclick="game.castCampMagic(${idx})">閨門挨縺ｮ蜆(3MP)</button>` : ''}
                                ${p.equipment.weapon ? `<button class="btn" style="padding:2px 4px; font-size:10px; border-color:#833;" onclick="game.unequipItem(${idx}, 'weapon')">豁ｦ蝎ｨ螟悶☆</button>` : ''}
                                ${p.equipment.armor ? `<button class="btn" style="padding:2px 4px; font-size:10px; border-color:#833;" onclick="game.unequipItem(${idx}, 'armor')">骼ｧ螟悶☆</button>` : ''}
                                ${p.equipment.accessory ? `<button class="btn" style="padding:2px 4px; font-size:10px; border-color:#833;" onclick="game.unequipItem(${idx}, 'accessory')">陬・｣ｾ螟悶☆</button>` : ''}
                            </div>
                        </div>
                    `;
        });

        html += '<div class="camp-header" style="margin-top:10px; font-size:14px;">繝代・繝・ぅ縺ｮ謇玖差迚ｩ</div>';
        html += '<div style="display:flex; flex-wrap:wrap; gap:5px; margin-bottom:10px;">';
        if (this.inventory.length === 0) {
            html += '<span style="color:#888; font-size:12px;">菴輔ｂ謖√▲縺ｦ縺・↑縺・・/span>';
        } else {
            this.inventory.forEach((item, itemIdx) => {
                html += `
                            <div style="border:1px solid #444; padding:5px; font-size:12px; min-width:100px;">
                                ${item.name} <br>
                                <span style="color:#888; font-size:10px;">${item.desc}</span>
                                ${item.req ? `<br><span style="color:#ffcc00; font-size:10px;">[譚｡莉ｶ: ${Object.entries(item.req).map(([k, v]) => `${k.toUpperCase()} ${v}`).join(', ')}]</span>` : ''}
                                <br>
                                <div style="margin-top:5px; display:flex; gap:5px;">
                                    ${item.type === 'consumable'
                        ? (item.targetAll
                            ? `<button class="btn" style="padding:2px 5px; font-size:10px;" onclick="game.useItem(null, ${itemIdx})">菴ｿ縺・/button>`
                            : `<button class="btn" style="padding:2px 5px; font-size:10px;" onclick="game.showTargetSelection(${itemIdx}, 'use')">菴ｿ縺・/button>`)
                        : `<button class="btn" style="padding:2px 5px; font-size:10px;" onclick="game.showTargetSelection(${itemIdx}, 'equip')">陬・ｙ</button>`
                    }
                                    ${this.discardingItemIdx === itemIdx ?
                        `<span style="color:#f55; font-size:10px;">謐ｨ縺ｦ繧具ｼ・/span>
                                     <button class="btn" style="padding:2px 5px; font-size:10px; border-color:#f55; color:#f55;" onclick="game.dropItem(${itemIdx}, true)">縺ｯ縺・/button>
                                     <button class="btn" style="padding:2px 5px; font-size:10px;" onclick="game.dropItem(-1)">縺・＞縺・/button>` :
                        `<button class="btn" style="padding:2px 5px; font-size:10px; border-color:#833;" onclick="game.dropItem(${itemIdx})">謐ｨ縺ｦ繧・/button>`
                    }
                                </div>
                            </div>
                        `;
            });
        }
        html += '</div>';

        // Add close button at the bottom
        html += `<button class="btn" style="margin-top:auto;" onclick="game.toggleCamp()">繧ｭ繝｣繝ｳ繝礼ｵゆｺ・(ESC)</button>`;
        campMenu.innerHTML = html;
    }

    castCampMagic(casterIdx) {
        const caster = this.party[casterIdx];
        if (caster.job !== '蜒ｧ萓ｶ' && caster.job !== '繝｢繝ｳ繧ｯ' && caster.job !== '繝薙す繝ｧ繝・・') return;
        if (caster.hp <= 0) {
            this.addLog(`${caster.name}縺ｯ蛟偵ｌ縺ｦ縺・ｋ...`);
            return;
        }
        if (caster.mp < 3) {
            this.addLog(`${caster.name}縺ｯMP縺瑚ｶｳ繧翫↑縺・ｼ～);
            return;
        }

        // Find target with lowest HP percentage
        let target = null;
        let lowestPct = 1.0;
        this.party.forEach(p => {
            const pct = p.hp / p.maxHp;
            if (p.hp > 0 && pct < lowestPct && p.hp < p.maxHp) {
                lowestPct = pct;
                target = p;
            }
        });

        if (!target) {
            this.addLog("蝗槫ｾｩ縺悟ｿ・ｦ√↑莉ｲ髢薙・縺・↑縺・・);
            return;
        }

        caster.mp -= 3;
        let healAmt = 0;
        if (caster.job === '蜒ｧ萓ｶ' || caster.job === '繝薙す繝ｧ繝・・') {
            healAmt = Math.max(15, caster.int + 10);
        } else if (caster.job === '繝｢繝ｳ繧ｯ') {
            healAmt = Math.max(8, Math.floor(caster.int * 0.5 + 5));
        }

        target.hp = Math.min(target.maxHp, target.hp + healAmt);

        const skillName = caster.job === '繝｢繝ｳ繧ｯ' ? '邊ｾ逾樒ｵｱ荳' : (caster.job === '繝薙す繝ｧ繝・・' ? '閨門挨縺ｮ蜆' : '蝗槫ｾｩ鬲疲ｳ・);
        this.addLog(`${caster.name}縺ｮ${skillName}・・${target.name}縺ｮHP縺・{healAmt}蝗槫ｾｩ縺励◆縲Ａ);
        this.updateCampUI();
        this.updateUI(); // Update side bar too
    }

    showTargetSelection(itemIdx, action) {
        const item = this.inventory[itemIdx];
        const campMenu = document.getElementById('camp-menu');

        let html = `<div class="camp-header">${action === 'use' ? '隱ｰ縺御ｽｿ縺・ｼ・ : '隱ｰ縺瑚｣・ｙ縺吶ｋ・・} - ${item.name}</div>`;
        html += `<div style="text-align:center; margin-bottom:20px; color:#888;">${item.desc}</div>`;

        html += '<div style="display:flex; flex-direction:column; gap:10px; align-items:center;">';
        this.party.forEach((p, cidx) => {
            let disabled = '';
            let color = '';
            let errorMsg = '';
            let currentEquip = '';

            if (p.hp <= 0) {
                disabled = 'disabled';
                color = '#444';
            } else if (action === 'equip') {
                if (item.req) {
                    // Check requirements
                    for (const [stat, reqVal] of Object.entries(item.req)) {
                        // Base stat check, to prevent equipping items by using other items' bonuses
                        let pStat = p['base' + stat.charAt(0).toUpperCase() + stat.slice(1)] || p[stat];
                        if (pStat < reqVal) {
                            disabled = 'disabled';
                            color = '#844';
                            errorMsg = `(荳崎ｶｳ: ${stat.toUpperCase()} ${reqVal})`;
                            break;
                        }
                    }
                }
                const currentItem = p.equipment[item.type];
                currentEquip = `<div style="font-size:10px; color:#aaa; margin-top:4px;">[迴ｾ蝨ｨ: ${currentItem ? currentItem.name : '縺ｪ縺・}]</div>`;
            }

            if (!color) color = 'var(--text-color)';
            html += `<button class="btn" style="width:200px; padding:10px; color:${color}; border-color:${color}; display:flex; flex-direction:column; align-items:center;" ${disabled} onclick="game.executeItemAction(${cidx}, ${itemIdx}, '${action}')">
                        <div>${p.name} (${p.job}) <span style="color:#f55">${errorMsg}</span></div>
                        ${currentEquip}
                    </button>`;
        });
        html += `</div>`;

        html += `<button class="btn" style="margin-top:auto;" onclick="game.updateCampUI()">繧ｭ繝｣繝ｳ繧ｻ繝ｫ</button>`;
        campMenu.innerHTML = html;
    }

    executeItemAction(charIdx, itemIdx, action) {
        if (action === 'use') {
            this.useItem(charIdx, itemIdx);
        } else if (action === 'equip') {
            this.equipItem(charIdx, itemIdx);
        }
    }

    useItem(charIdx, itemIdx) {
        const item = this.inventory[itemIdx];
        let target = null;
        if (charIdx !== null && charIdx !== undefined) {
            target = this.party[charIdx];
            if (target && target.hp <= 0) {
                this.addLog(`${target.name}縺ｯ蛟偵ｌ縺ｦ縺・ｋ...`);
                return;
            }
        }

        if (item.type === 'consumable') {
            if (item.effect) {
                item.effect(target); // Call custom effect (target might be null for targetAll items)
            } else if (target) {
                if (item.hpRestore) {
                    target.hp = Math.min(target.maxHp, target.hp + item.hpRestore);
                    this.addLog(`${target.name}縺ｯ${item.name}繧剃ｽｿ縺｣縺溘・P縺悟屓蠕ｩ縺励◆・～);
                } else if (item.mpRestore) {
                    target.mp = Math.min(target.maxMp, target.mp + item.mpRestore);
                    this.addLog(`${target.name}縺ｯ${item.name}繧剃ｽｿ縺｣縺溘・P縺悟屓蠕ｩ縺励◆・～);
                } else if (item.recover) {
                    target.hp = Math.min(target.maxHp, target.hp + item.recover);
                    this.addLog(`${target.name}縺ｯ${item.name}繧剃ｽｿ逕ｨ・・${target.name}縺ｮHP縺・{item.recover}蝗槫ｾｩ縺励◆・～);
                }
            }
            if (!item.infinite) {
                this.inventory.splice(this.inventory.indexOf(item), 1);
            }
            this.updateCampUI();
            this.updateUI();
        }
    }

    equipItem(charIdx, itemIdx) {
        const item = this.inventory[itemIdx];
        const target = this.party[charIdx];
        const type = item.type; // 'weapon', 'armor', 'accessory'
        if (target.equipment[type]) {
            this.inventory.push(target.equipment[type]); // put old item back in bag
        }
        target.equipment[type] = item;
        this.inventory.splice(itemIdx, 1);
        this.addLog(`${target.name}縺ｯ${item.name}繧定｣・ｙ縺励◆縲Ａ);
        this.updateCampUI();
        this.updateUI();
    }

    dropItem(itemIdx, confirmed = false) {
        if (itemIdx === -1) {
            this.discardingItemIdx = -1;
            this.updateCampUI();
            return;
        }

        if (confirmed) {
            const item = this.inventory[itemIdx];
            this.addLog(`縲・{item.name}縲阪ｒ謐ｨ縺ｦ縺溘Ａ);
            this.inventory.splice(itemIdx, 1);
            this.discardingItemIdx = -1;
            this.updateCampUI();
        } else {
            this.discardingItemIdx = itemIdx;
            this.updateCampUI();
        }
    }

    unequipItem(charIdx, slot) {
        const target = this.party[charIdx];
        if (target.equipment[slot]) {
            this.inventory.push(target.equipment[slot]);
            target.equipment[slot] = null;
            this.updateCampUI();
            this.updateUI();
        }
    }

    /**
     * RENDERING (3D Logic)
     */
    render() {
        this.drawDungeon();
        this.drawMinimap();
        this.updateUI();
    }

    drawDungeon() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const map = LEVELS[this.currentFloor];
        const curTile = map[this.playerPos.y][this.playerPos.x];

        // Dark Zone (6) completely obscures vision
        if (curTile === 6) {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, w, h);
            return;
        }

        // Draw ceiling and floor
        if (assets.ceiling.loaded) {
            ctx.drawImage(assets.ceiling.img, 0, 0, w, h / 2);
        } else {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, w, h / 2);
        }

        if (assets.floor.loaded) {
            ctx.drawImage(assets.floor.img, 0, h / 2, w, h / 2);
            // Add darkness gradient over the loaded texture to blend into the horizon
            const grad = ctx.createLinearGradient(0, h / 2, 0, h);
            grad.addColorStop(0, 'rgba(0,0,0,1)');
            grad.addColorStop(0.3, 'rgba(0,0,0,0.6)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, h / 2, w, h / 2);
        } else {
            const grad = ctx.createLinearGradient(0, h / 2, 0, h);
            grad.addColorStop(0, '#000');
            grad.addColorStop(0.5, '#111');
            grad.addColorStop(1, '#112');
            ctx.fillStyle = grad;
            ctx.fillRect(0, h / 2, w, h / 2);
        }

        // Draw walls from back to front
        for (let d = VIEW_DIST; d >= 0; d--) {
            this.drawWallsAtDistance(d);
        }
    }

    drawWallsAtDistance(dist) {
        const { x, y, dir } = this.playerPos;
        const dx = [0, 1, 0, -1][dir];
        const dy = [-1, 0, 1, 0][dir];
        const px = [1, 0, -1, 0][dir];
        const py = [0, 1, 0, -1][dir];

        const map = LEVELS[this.currentFloor];
        const tx = x + dx * dist;
        const ty = y + dy * dist;

        if (ty < 0 || ty >= map.length || tx < 0 || tx >= map[ty].length) return;

        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;

        const getProj = (d, offsetX) => {
            // d ranges 0 (player square) to VIEW_DIST. Add offset to push wall slightly back so d=0 doesn't clip past screen
            const scale = 1 / (d + 0.5);
            const hz = h * 0.5 * scale;
            const wz = w * 0.7 * scale;
            // Raise the center point y to lift walls up from the bottom edge
            return { x: w / 2 + (offsetX * wz), y: h / 2 - (h * 0.05), w: wz, h: hz };
        };

        const fillWall = (d, offset, side) => {
            const p1 = getProj(d, offset);
            const p2 = getProj(d + 1, offset);

            let dx, dy, dw, dh;
            if (side === 'front') {
                dx = p1.x - p1.w / 2;
                dy = p1.y - p1.h;
                dw = p1.w;
                dh = p1.h * 2;
                if (assets.wall.loaded) {
                    ctx.drawImage(assets.wall.img, dx, dy, dw, dh);
                } else {
                    ctx.beginPath();
                    ctx.rect(dx, dy, dw, dh);
                    ctx.closePath();
                }
            } else {
                const img = assets.wall.loaded ? assets.wall.img : null;
                const srcW = img ? img.width : 1;
                const srcH = img ? img.height : 1;

                let startX, endX, y1top, y1bot, y2top, y2bot;
                if (side === 'left') {
                    startX = p1.x - p1.w / 2;
                    endX = p2.x - p2.w / 2;
                } else {
                    startX = p1.x + p1.w / 2;
                    endX = p2.x + p2.w / 2;
                }
                y1top = p1.y - p1.h;
                y1bot = p1.y + p1.h;
                y2top = p2.y - p2.h;
                y2bot = p2.y + p2.h;

                if (img) {
                    const steps = Math.ceil(Math.abs(endX - startX));
                    if (steps > 0) {
                        const stepCol = srcW / steps;
                        const wStep = (endX - startX) / steps;
                        const drawWidth = wStep > 0 ? wStep + 1 : wStep - 1;
                        for (let i = 0; i < steps; i++) {
                            const t = i / steps;
                            const cx = startX + wStep * i;
                            const cyTop = y1top + (y2top - y1top) * t;
                            const cyBot = y1bot + (y2bot - y1bot) * t;
                            const ch = cyBot - cyTop;
                            ctx.drawImage(img, Math.floor(i * stepCol), 0, Math.max(1, Math.ceil(stepCol)), srcH, cx, cyTop, drawWidth, ch);
                        }
                    }
                } else {
                    ctx.beginPath();
                    ctx.moveTo(startX, y1top);
                    ctx.lineTo(endX, y2top);
                    ctx.lineTo(endX, y2bot);
                    ctx.lineTo(startX, y1bot);
                    ctx.closePath();
                }
            }

            if (!assets.wall.loaded) {
                const brightness = Math.max(0, 100 - (d * 20));
                ctx.fillStyle = `rgb(0, ${brightness}, 0, 0.9)`;
                ctx.fill();
                ctx.strokeStyle = `rgb(0, ${brightness * 1.5}, 65)`;
                ctx.lineWidth = 2;
                ctx.stroke();
            } else {
                // Apply darkness over image based on depth
                const darkness = Math.max(0, Math.min(0.8, d * 0.15));
                if (darkness > 0) {
                    ctx.fillStyle = `rgba(0, 0, 0, ${darkness})`;
                    if (side === 'front') {
                        ctx.fillRect(dx, dy, dw, dh);
                    } else {
                        ctx.beginPath();
                        let sx = side === 'left' ? p1.x - p1.w / 2 : p1.x + p1.w / 2;
                        let ex = side === 'left' ? p2.x - p2.w / 2 : p2.x + p2.w / 2;
                        ctx.moveTo(sx, p1.y - p1.h);
                        ctx.lineTo(ex, p2.y - p2.h);
                        ctx.lineTo(ex, p2.y + p2.h);
                        ctx.lineTo(sx, p1.y + p1.h);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
        };

        // Draw side walls of depth slice
        for (let offsetX = -3; offsetX <= 3; offsetX++) {
            const ox = tx + offsetX * px;
            const oy = ty + offsetX * py;
            const isSolid = oy >= 0 && oy < map.length && ox >= 0 && ox < map[oy].length && (map[oy][ox] === 1 || map[oy][ox] === 4);

            if (isSolid) {
                if (offsetX < 0) {
                    const rx = tx + (offsetX + 1) * px;
                    const ry = ty + (offsetX + 1) * py;
                    const rightEmpty = !(ry >= 0 && ry < map.length && rx >= 0 && rx < map[ry].length && (map[ry][rx] === 1 || map[ry][rx] === 4));
                    if (rightEmpty) fillWall(dist, offsetX, 'right');
                }
                if (offsetX > 0) {
                    const lx = tx + (offsetX - 1) * px;
                    const ly = ty + (offsetX - 1) * py;
                    const leftEmpty = !(ly >= 0 && ly < map.length && lx >= 0 && lx < map[ly].length && (map[ly][lx] === 1 || map[ly][lx] === 4));
                    if (leftEmpty) fillWall(dist, offsetX, 'left');
                }
            }
        }

        // Draw front walls of depth slice
        for (let offsetX = -3; offsetX <= 3; offsetX++) {
            const ox = tx + offsetX * px;
            const oy = ty + offsetX * py;
            const isSolid = oy >= 0 && oy < map.length && ox >= 0 && ox < map[oy].length && (map[oy][ox] === 1 || map[oy][ox] === 4);

            if (isSolid) {
                // If it's a hidden door (4), make it darker to hint the player
                const isHiddenDoor = (map[oy][ox] === 4);
                if (isHiddenDoor) {
                    ctx.globalAlpha = 0.6; // Darken the wall
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                }

                fillWall(dist, offsetX, 'front');

                if (isHiddenDoor) {
                    ctx.globalAlpha = 1.0; // Reset
                }
                if (map[oy][ox] === 9) {
                    // Optionally draw something in 3D for the NPC Event if we want to
                }
            } else {
                const tile = (oy >= 0 && oy < map.length && ox >= 0 && ox < map[oy].length) ? map[oy][ox] : 0;
                // 霍晞屬縺ｫ蠢懊§縺滓囓蠎ｦ・亥｣√→蜷後§險育ｮ暦ｼ・                const darkness = Math.max(0, Math.min(0.8, dist * 0.15));

                if (tile === 3) {
                    const p = getProj(dist + 0.5, offsetX);
                    if (assets.stair_down.loaded) {
                        ctx.drawImage(assets.stair_down.img, p.x - p.w / 2, p.y - p.h, p.w, p.h * 2);
                        if (darkness > 0) {
                            ctx.fillStyle = `rgba(0, 0, 0, ${darkness})`;
                            ctx.fillRect(p.x - p.w / 2, p.y - p.h, p.w, p.h * 2);
                        }
                    } else {
                        ctx.fillStyle = `rgba(255, 0, 255, ${1 - darkness})`;
                        ctx.fillRect(p.x - p.w / 4, p.y + p.h / 2, p.w / 2, p.h / 4);
                    }
                } else if (tile === 2) {
                    const p = getProj(dist + 0.5, offsetX);
                    if (assets.stair_up.loaded) {
                        ctx.drawImage(assets.stair_up.img, p.x - p.w / 2, p.y - p.h, p.w, p.h * 2);
                        if (darkness > 0) {
                            ctx.fillStyle = `rgba(0, 0, 0, ${darkness})`;
                            ctx.fillRect(p.x - p.w / 2, p.y - p.h, p.w, p.h * 2);
                        }
                    } else {
                        ctx.fillStyle = `rgba(0, 255, 255, ${1 - darkness})`;
                        ctx.fillRect(p.x - p.w / 4, p.y - p.h / 4, p.w / 2, p.h / 2);
                    }
                }
            }
        }
    }

    drawMinimap() {
        const ctx = this.mCtx;
        const size = 160 / MAP_SIZE;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 160, 160);

        const map = LEVELS[this.currentFloor];
        const visited = this.visited[this.currentFloor];

        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (!visited[y] || !visited[y][x]) continue;

                const mc = map[y][x];
                if (mc === 1 || mc === 4) { // Wall or hidden door
                    ctx.fillStyle = '#d3d3d3'; // Light Gray
                } else if (mc === 3) {
                    ctx.fillStyle = '#ff00ff';
                } else if (mc === 2) {
                    ctx.fillStyle = '#00ffff';
                } else if (mc === 6) { // Dark zones show dark green/grey on minimap
                    ctx.fillStyle = '#112211';
                } else if (mc === 8) { // Boss Tile
                    ctx.fillStyle = '#ff0000';
                } else if (mc === 9) { // Event NPC Tile
                    ctx.fillStyle = '#ffff00'; // Yellow
                } else {
                    // Empty floors, spinners, teleporters all look like safe floor on map
                    ctx.fillStyle = '#113311';
                }
                ctx.fillRect(x * size, y * size, size - 1, size - 1);
            }
        }

        ctx.fillStyle = '#fff';
        const px = this.playerPos.x * size + size / 2;
        const py = this.playerPos.y * size + size / 2;
        ctx.beginPath();
        ctx.arc(px, py, size / 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(px, py);
        const dx = [0, 1, 0, -1][this.playerPos.dir] * size;
        const dy = [-1, 0, 1, 0][this.playerPos.dir] * size;
        ctx.lineTo(px + dx, py + dy);
        ctx.stroke();
    }

    updateUI() {
        const list = document.getElementById('party-list');
        list.innerHTML = '';
        this.party.forEach((p, i) => {
            const div = document.createElement('div');
            // ID assigned so we can target them for damage/heal floaters
            div.id = `party-member-${i}`;
            div.className = `party-member ${this.state === 'BATTLE' && this.turnIndex === i ? 'active' : ''}`;
            const hpW = (p.hp / p.maxHp) * 100;
            const mpW = p.maxMp > 0 ? (p.mp / p.maxMp) * 100 : 0;
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom: 2px;"><strong>${p.name}</strong> <span>Lv${p.level} ${p.job}</span></div>
                <div style="display:flex; gap:10px;">
                    <div style="flex:1;">
                        <div class="stat-bar">
                            <div class="stat-fill" style="width:${hpW}%; background:#ff4444;"></div>
                            <div style="position:absolute; top:0; left:0; width:100%; text-align:center; font-size:10px; line-height:14px; text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; z-index:2;">HP ${p.hp}/${p.maxHp}</div>
                        </div>
                    </div>
                    <div style="flex:1;">
                        <div class="stat-bar">
                            <div class="stat-fill" style="width:${mpW}%; background:#4444ff;"></div>
                            <div style="position:absolute; top:0; left:0; width:100%; text-align:center; font-size:10px; line-height:14px; text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; z-index:2;">MP ${p.mp}/${p.maxMp}</div>
                        </div>
                    </div>
                </div>
            `;
            list.appendChild(div);
        });
        if (this.state === 'BATTLE') {
            document.querySelectorAll('.battle-btn').forEach(b => b.disabled = (this.currentBattle.phase !== 'INPUT'));
        }
    }

    saveGame() {
        if (this.state === 'ENDING' || this.state === 'START') return;

        const saveData = {
            party: this.party,
            inventory: this.inventory,
            pos: this.playerPos,
            floor: this.currentFloor,
            visited: this.visited,
            npcFlags: this.npcFlags,
            karma: this.karma,
            levels: LEVELS,
            elapsed: this.elapsedTimeAtSave + (Date.now() - this.startTime)
        };
        localStorage.setItem('wiztaste_save', JSON.stringify(saveData));
    }

    loadGame(data) {
        this.party = data.party;
        this.inventory = data.inventory;
        this.playerPos = data.pos;
        this.currentFloor = data.floor;
        this.visited = data.visited;
        this.npcFlags = data.npcFlags;
        this.karma = data.karma;
        if (data.levels) LEVELS = data.levels;
        this.elapsedTimeAtSave = data.elapsed;
        this.startTime = Date.now();

        this.state = 'EXPLORE';
        document.getElementById('char-create-screen').style.display = 'none';
        document.getElementById('floor-indicator').textContent = `B${this.currentFloor + 1}F`;
        audio.playBGM('bgm_explore');
        this.updateTimer();
        this.render();
        this.addLog("蜑榊屓縺ｮ險倬鹸縺九ｉ蜀帝匱繧貞・髢九＠縺溘・);
    }
}

let game;
window.onload = () => { game = new Game(); };
