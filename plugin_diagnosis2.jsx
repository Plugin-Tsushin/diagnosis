import React, { useState, useEffect } from 'react';

// 16タイプ定義
const types = {
  WARM: {
    name: "ウォームアナログ職人",
    subtitle: "Warm Analog Master",
    emoji: "🎸",
    color: "#D97706",
    description: "アナログ機材の温かみを愛し、ビンテージサウンドを追求するあなた。音の質感や倍音の豊かさにこだわり、デジタル臭さを排除したいと考えています。真空管やテープの持つ有機的な響きこそが、あなたの理想のサウンドです。",
    genre: "Lo-Fi / ネオソウル / ジャズ",
    plugins: [
      { type: "EQ", name: "Waves PuigTec EQP-1A", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-PuigTec-EQP-1A?a=688228cd487ff" },
      { type: "Comp", name: "UAD 1176 Collection", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1176-Collection?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Room", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Valhalla-Room?a=688228cd487ff" },
      { type: "Saturation", name: "Soundtoys Decapitator", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Decapitator?a=688228cd487ff" }
    ]
  },
  CRSP: {
    name: "クリスプモダン派",
    subtitle: "Crisp Modern Producer",
    emoji: "✨",
    color: "#0EA5E9",
    description: "クリーンでモダンなサウンドを好み、解像度の高いミックスを目指すあなた。透明感があり、各楽器がはっきり分離したサウンドを求めています。最新のデジタル技術を駆使して、洗練されたプロダクションを実現します。",
    genre: "ポップス / R&B / シティポップ",
    plugins: [
      { type: "EQ", name: "FabFilter Pro-Q 3", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Pro-Q-3?a=688228cd487ff" },
      { type: "Comp", name: "FabFilter Pro-C 2", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Pro-C-2?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla VintageVerb", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-VintageVerb?a=688228cd487ff" },
      { type: "Saturation", name: "FabFilter Saturn 2", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Saturn-2?a=688228cd487ff" }
    ]
  },
  PNCH: {
    name: "パンチ重視アタッカー",
    subtitle: "Punch Attack Specialist",
    emoji: "👊",
    color: "#DC2626",
    description: "音のアタック感とパンチを最重視するあなた。キック、スネア、ベースの存在感を際立たせ、体に響くサウンドを追求しています。聴く人の胸を打つようなインパクトのあるビートが、あなたの武器です。",
    genre: "HipHop / Trap / ダブステップ",
    plugins: [
      { type: "EQ", name: "SSL Native Channel Strip 2", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-SSL-Channel?a=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-76", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-CLA-76?a=688228cd487ff" },
      { type: "Reverb", name: "Soundtoys Little Plate", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Little-Plate?a=688228cd487ff" },
      { type: "Saturation", name: "Waves J37 Tape", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-J37?a=688228cd487ff" }
    ]
  },
  WIDE: {
    name: "空間デザイナー",
    subtitle: "Spatial Designer",
    emoji: "🌌",
    color: "#7C3AED",
    description: "ステレオイメージと空間表現に強いこだわりを持つあなた。奥行きと広がりのある立体的なミックスを作り上げることを目指しています。音の配置と残響で、リスナーを別世界へ誘います。",
    genre: "アンビエント / シネマティック / ポストロック",
    plugins: [
      { type: "EQ", name: "Tokyo Dawn Labs SlickEQ", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-SlickEQ?a=688228cd487ff" },
      { type: "Comp", name: "Klanghelm MJUC", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-MJUC?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Shimmer", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Shimmer?a=688228cd487ff" },
      { type: "Saturation", name: "Soundtoys Radiator", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Radiator?a=688228cd487ff" }
    ]
  },
  LOUD: {
    name: "音圧マスター",
    subtitle: "Loudness Master",
    emoji: "🔊",
    color: "#EA580C",
    description: "音圧と迫力を最重視するあなた。配信プラットフォームでも負けない存在感のある音を目指し、ラウドネスとダイナミクスのバランスを追求しています。フロアを揺らすサウンドがあなたのアイデンティティです。",
    genre: "EDM / ハードコア / メタル",
    plugins: [
      { type: "EQ", name: "Waves API 550A/B", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-API-550?a=688228cd487ff" },
      { type: "Comp", name: "Waves API 2500", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-API-2500?a=688228cd487ff" },
      { type: "Reverb", name: "FabFilter Pro-R", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Pro-R?a=688228cd487ff" },
      { type: "Saturation", name: "Kazrog True Iron", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-True-Iron?a=688228cd487ff" }
    ]
  },
  CLEN: {
    name: "クリーンミニマリスト",
    subtitle: "Clean Minimalist",
    emoji: "🍃",
    color: "#059669",
    description: "必要最小限の処理で最大の効果を狙うあなた。過度な加工を避け、素材の良さを活かしたナチュラルなサウンドを好んでいます。引き算の美学で、本質を際立たせます。",
    genre: "アコースティック / フォーク / クラシック",
    plugins: [
      { type: "EQ", name: "TDR Nova", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Nova?a=688228cd487ff" },
      { type: "Comp", name: "TDR Kotelnikov", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Kotelnikov?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Supermassive", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Supermassive?a=688228cd487ff" },
      { type: "Saturation", name: "Klanghelm SDRR", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-SDRR?a=688228cd487ff" }
    ]
  },
  DARK: {
    name: "ダークトーン追求者",
    subtitle: "Dark Tone Seeker",
    emoji: "🌑",
    color: "#374151",
    description: "深みのある暗めのトーンを好むあなた。高域を抑えめにした落ち着いたサウンドで、雰囲気のある楽曲を作り上げます。影と光のコントラストで、独特の世界観を表現します。",
    genre: "ダークアンビエント / インダストリアル / ドゥームメタル",
    plugins: [
      { type: "EQ", name: "Pulsar Massive", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Massive?a=688228cd487ff" },
      { type: "Comp", name: "Analog Obsession LALA", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-LALA?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Delay", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Delay?a=688228cd487ff" },
      { type: "Saturation", name: "Goodhertz Lossy", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Lossy?a=688228cd487ff" }
    ]
  },
  BRIT: {
    name: "ブリティッシュサウンド愛好家",
    subtitle: "British Sound Enthusiast",
    emoji: "🇬🇧",
    color: "#1D4ED8",
    description: "英国製コンソールやアウトボードのサウンドを愛するあなた。Neveの暖かみ、SSLのパンチ感など、伝統的なブリティッシュサウンドを追求しています。歴史に裏打ちされた音が、あなたの信頼の証です。",
    genre: "ロック / ブリットポップ / インディー",
    plugins: [
      { type: "EQ", name: "Plugin Alliance Neve 1073", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Neve-1073?a=688228cd487ff" },
      { type: "Comp", name: "Waves SSL E-Channel", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-SSL-E?a=688228cd487ff" },
      { type: "Reverb", name: "Arturia Rev Plate-140", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Plate-140?a=688228cd487ff" },
      { type: "Saturation", name: "Waves Abbey Road Saturator", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Abbey-Road?a=688228cd487ff" }
    ]
  },
  VIBE: {
    name: "バイブス優先クリエイター",
    subtitle: "Vibes First Creator",
    emoji: "🎵",
    color: "#DB2777",
    description: "技術的な完璧さより、楽曲の雰囲気やフィーリングを大切にするあなた。直感的に「気持ちいい」と感じるサウンドを追求しています。理論より感覚、数値より心地よさが判断基準です。",
    genre: "チルアウト / ドリームポップ / シューゲイザー",
    plugins: [
      { type: "EQ", name: "Waves H-EQ", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-H-EQ?a=688228cd487ff" },
      { type: "Comp", name: "Arturia Comp FET-76", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-FET-76?a=688228cd487ff" },
      { type: "Reverb", name: "Eventide Blackhole", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Blackhole?a=688228cd487ff" },
      { type: "Saturation", name: "XLN Audio RC-20 Retro Color", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-RC-20?a=688228cd487ff" }
    ]
  },
  PRCS: {
    name: "精密エンジニア",
    subtitle: "Precision Engineer",
    emoji: "🔬",
    color: "#0891B2",
    description: "数値やアナライザーを駆使し、科学的アプローチでミックスを行うあなた。問題を特定し、的確に解決することを重視しています。データに基づく判断で、確実に品質を向上させます。",
    genre: "プログレッシブ / エレクトロニカ / テクノ",
    plugins: [
      { type: "EQ", name: "iZotope Neutron 4", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Neutron-4?a=688228cd487ff" },
      { type: "Comp", name: "Weiss DS1-MK3", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-DS1-MK3?a=688228cd487ff" },
      { type: "Reverb", name: "Exponential Audio PhoenixVerb", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-PhoenixVerb?a=688228cd487ff" },
      { type: "Saturation", name: "Kazrog KClip 3", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-KClip-3?a=688228cd487ff" }
    ]
  },
  RETRO: {
    name: "レトロ志向マニア",
    subtitle: "Retro Sound Maniac",
    emoji: "📼",
    color: "#CA8A04",
    description: "60〜80年代のビンテージサウンドを現代に蘇らせたいあなた。テープ、真空管、古いデジタル機材の質感を愛しています。過去の名機が生み出す魔法を、現代の制作に取り入れます。",
    genre: "ファンク / ディスコ / シンセウェーブ",
    plugins: [
      { type: "EQ", name: "Waves Kramer PIE Compressor", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Kramer-PIE?a=688228cd487ff" },
      { type: "Comp", name: "Waves Kramer Master Tape", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Kramer-Tape?a=688228cd487ff" },
      { type: "Reverb", name: "UAD EMT 140", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-EMT-140?a=688228cd487ff" },
      { type: "Saturation", name: "Waves Abbey Road Vinyl", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Vinyl?a=688228cd487ff" }
    ]
  },
  AGGR: {
    name: "アグレッシブサウンドメーカー",
    subtitle: "Aggressive Sound Maker",
    emoji: "🔥",
    color: "#B91C1C",
    description: "攻撃的で荒々しいサウンドを求めるあなた。歪み、クリッピング、過激な処理を恐れず、インパクトのある音を追求しています。ルールを破り、限界を超えることで、唯一無二のサウンドを生み出します。",
    genre: "メタルコア / ハードコアテクノ / ノイズ",
    plugins: [
      { type: "EQ", name: "Waves PuigChild 670", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-PuigChild?a=688228cd487ff" },
      { type: "Comp", name: "Waves dbx 160", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-dbx-160?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla UberMod", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-UberMod?a=688228cd487ff" },
      { type: "Saturation", name: "Soundtoys Devil-Loc", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Devil-Loc?a=688228cd487ff" }
    ]
  },
  SMTH: {
    name: "スムースブレンダー",
    subtitle: "Smooth Blender",
    emoji: "☁️",
    color: "#8B5CF6",
    description: "すべての要素がシームレスに溶け合うミックスを目指すあなた。突出した要素がなく、心地よく聴き続けられるサウンドを追求しています。調和とバランスの美学で、耳に優しい音楽を作ります。",
    genre: "スムースジャズ / ボサノバ / イージーリスニング",
    plugins: [
      { type: "EQ", name: "Maag EQ4", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Maag-EQ4?a=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-2A", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-CLA-2A?a=688228cd487ff" },
      { type: "Reverb", name: "Altiverb 7", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Altiverb-7?a=688228cd487ff" },
      { type: "Saturation", name: "Waves NLS", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-NLS?a=688228cd487ff" }
    ]
  },
  EDGE: {
    name: "エッジ追求者",
    subtitle: "Edge Seeker",
    emoji: "⚡",
    color: "#F59E0B",
    description: "サウンドにエッジと個性を求めるあなた。平凡を嫌い、聴いた瞬間に「これは違う」と思わせるユニークなサウンドを目指しています。実験と革新で、新しい音の地平を切り開きます。",
    genre: "オルタナティブ / エクスペリメンタル / グリッチ",
    plugins: [
      { type: "EQ", name: "Soothe2", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Soothe2?a=688228cd487ff" },
      { type: "Comp", name: "Waves Infected Mushroom Pusher", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Pusher?a=688228cd487ff" },
      { type: "Reverb", name: "Output Portal", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Portal?a=688228cd487ff" },
      { type: "Saturation", name: "iZotope Trash 2", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Trash-2?a=688228cd487ff" }
    ]
  },
  BLNC: {
    name: "バランス重視オールラウンダー",
    subtitle: "Balanced All-Rounder",
    emoji: "⚖️",
    color: "#6366F1",
    description: "特定の方向性に偏らず、バランスの取れたミックスを目指すあなた。汎用性が高く、どんなジャンルにも対応できる柔軟性を持っています。安定感と適応力で、あらゆる状況に対応します。",
    genre: "多ジャンル対応",
    plugins: [
      { type: "EQ", name: "Waves Renaissance EQ", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-Renaissance-EQ?a=688228cd487ff" },
      { type: "Comp", name: "Waves Renaissance Compressor", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Renaissance-Comp?a=688228cd487ff" },
      { type: "Reverb", name: "Waves Renaissance Reverb", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Renaissance-Reverb?a=688228cd487ff" },
      { type: "Saturation", name: "Waves Vitamin", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Vitamin?a=688228cd487ff" }
    ]
  },
  BUDG: {
    name: "コスパ最強主義",
    subtitle: "Best Value Hunter",
    emoji: "💰",
    color: "#16A34A",
    description: "限られた予算で最大の効果を得ることを目指すあなた。無料や低価格でも高品質なプラグインを見つけ出し、賢く活用しています。コストパフォーマンスの最大化が、あなたのスキルです。",
    genre: "全ジャンル（予算重視）",
    plugins: [
      { type: "EQ", name: "TDR VOS SlickEQ", url: "https://www.pluginboutique.com/product/2-Effects/17-EQ/1234-SlickEQ-Free?a=688228cd487ff" },
      { type: "Comp", name: "Analog Obsession Fetish", url: "https://www.pluginboutique.com/product/2-Effects/58-Compressor/1234-Fetish?a=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Supermassive (Free)", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/1234-Supermassive-Free?a=688228cd487ff" },
      { type: "Saturation", name: "Softube Saturation Knob (Free)", url: "https://www.pluginboutique.com/product/2-Effects/39-Saturation/1234-Saturation-Knob?a=688228cd487ff" }
    ]
  }
};

// 30問の質問
const questions = [
  // 制作ジャンル（5問）
  { category: "制作ジャンル", question: "普段よく作る・聴く音楽のジャンルは？", options: [
    { text: "EDM / ダンスミュージック", scores: { LOUD: 2, CRSP: 1, PNCH: 1 } },
    { text: "HipHop / Trap / R&B", scores: { PNCH: 2, WARM: 1, DARK: 1 } },
    { text: "ロック / ポップス", scores: { BRIT: 2, BLNC: 1, CRSP: 1 } },
    { text: "Lo-Fi / チル / アンビエント", scores: { WARM: 2, VIBE: 1, DARK: 1 } }
  ]},
  { category: "制作ジャンル", question: "作りたい曲の雰囲気は？", options: [
    { text: "エネルギッシュで踊れる曲", scores: { LOUD: 2, PNCH: 1, AGGR: 1 } },
    { text: "落ち着いてリラックスできる曲", scores: { SMTH: 2, WARM: 1, CLEN: 1 } },
    { text: "感情的でドラマチックな曲", scores: { WIDE: 2, BRIT: 1, VIBE: 1 } },
    { text: "実験的で個性的な曲", scores: { EDGE: 2, DARK: 1, RETRO: 1 } }
  ]},
  { category: "制作ジャンル", question: "参考にしたいアーティストのサウンドは？", options: [
    { text: "Daft Punk / Calvin Harris系", scores: { CRSP: 2, LOUD: 1, RETRO: 1 } },
    { text: "Kendrick Lamar / Travis Scott系", scores: { PNCH: 2, WARM: 1, DARK: 1 } },
    { text: "Radiohead / Bon Iver系", scores: { EDGE: 2, WIDE: 1, VIBE: 1 } },
    { text: "Norah Jones / Jack Johnson系", scores: { CLEN: 2, SMTH: 1, WARM: 1 } }
  ]},
  { category: "制作ジャンル", question: "ビートの好みは？", options: [
    { text: "重くてパンチのあるビート", scores: { PNCH: 2, LOUD: 1, AGGR: 1 } },
    { text: "グルーヴィーでファンキーなビート", scores: { RETRO: 2, WARM: 1, VIBE: 1 } },
    { text: "繊細で緻密なビート", scores: { PRCS: 2, CRSP: 1, EDGE: 1 } },
    { text: "ミニマルでシンプルなビート", scores: { CLEN: 2, SMTH: 1, DARK: 1 } }
  ]},
  { category: "制作ジャンル", question: "ボーカルの処理で重視するのは？", options: [
    { text: "クリアで前に出るボーカル", scores: { CRSP: 2, PRCS: 1, BLNC: 1 } },
    { text: "温かみのあるビンテージ感", scores: { WARM: 2, RETRO: 1, BRIT: 1 } },
    { text: "空間に溶け込む雰囲気", scores: { WIDE: 2, VIBE: 1, SMTH: 1 } },
    { text: "特殊エフェクトで個性を出す", scores: { EDGE: 2, AGGR: 1, DARK: 1 } }
  ]},
  // 制作スタイル（5問）
  { category: "制作スタイル", question: "ミックスのアプローチは？", options: [
    { text: "直感でサッと決める派", scores: { VIBE: 2, BUDG: 1, WARM: 1 } },
    { text: "数値やアナライザーで緻密に", scores: { PRCS: 2, CRSP: 1, BLNC: 1 } },
    { text: "プリセットをベースにカスタマイズ", scores: { BLNC: 2, BUDG: 1, SMTH: 1 } },
    { text: "時間をかけて細部まで作り込む", scores: { BRIT: 2, WARM: 1, PRCS: 1 } }
  ]},
  { category: "制作スタイル", question: "新しいプラグインを選ぶ基準は？", options: [
    { text: "評判やレビューの良さ", scores: { BLNC: 2, CRSP: 1, SMTH: 1 } },
    { text: "独自の個性やユニークさ", scores: { EDGE: 2, VIBE: 1, RETRO: 1 } },
    { text: "コストパフォーマンス", scores: { BUDG: 2, CLEN: 1, BLNC: 1 } },
    { text: "プロが使っているかどうか", scores: { BRIT: 2, PRCS: 1, WARM: 1 } }
  ]},
  { category: "制作スタイル", question: "制作中の完璧主義度は？", options: [
    { text: "完璧になるまで何度もやり直す", scores: { PRCS: 2, CRSP: 1, CLEN: 1 } },
    { text: "ある程度で妥協できる", scores: { VIBE: 2, BUDG: 1, BLNC: 1 } },
    { text: "勢いを大切にしてサッと仕上げる", scores: { PNCH: 2, AGGR: 1, LOUD: 1 } },
    { text: "細部より全体の雰囲気を重視", scores: { WARM: 2, SMTH: 1, WIDE: 1 } }
  ]},
  { category: "制作スタイル", question: "プラグインのUIデザインは気にする？", options: [
    { text: "見た目より音が重要", scores: { PRCS: 2, BUDG: 1, CLEN: 1 } },
    { text: "ビンテージ風の見た目が好き", scores: { RETRO: 2, WARM: 1, BRIT: 1 } },
    { text: "モダンで視認性が高いUIが良い", scores: { CRSP: 2, PRCS: 1, BLNC: 1 } },
    { text: "独創的でインスピレーションが湧くUI", scores: { EDGE: 2, VIBE: 1, WIDE: 1 } }
  ]},
  { category: "制作スタイル", question: "アナログvsデジタル、どちら派？", options: [
    { text: "断然アナログ！温かみが大事", scores: { WARM: 2, RETRO: 1, BRIT: 1 } },
    { text: "デジタルの精密さが好き", scores: { CRSP: 2, PRCS: 1, CLEN: 1 } },
    { text: "両方のいいとこ取りしたい", scores: { BLNC: 2, SMTH: 1, WIDE: 1 } },
    { text: "こだわりはない", scores: { BUDG: 2, VIBE: 1, PNCH: 1 } }
  ]},
  // ミックスの悩み（6問）
  { category: "ミックスの悩み", question: "ミックスで一番困っていることは？", options: [
    { text: "音圧が上がらない", scores: { LOUD: 2, PNCH: 1, AGGR: 1 } },
    { text: "各楽器が分離しない", scores: { CRSP: 2, PRCS: 1, WIDE: 1 } },
    { text: "なんか冷たい・デジタル臭い", scores: { WARM: 2, RETRO: 1, BRIT: 1 } },
    { text: "プロっぽくならない", scores: { BLNC: 2, SMTH: 1, PRCS: 1 } }
  ]},
  { category: "ミックスの悩み", question: "低域について悩みは？", options: [
    { text: "ボワボワして締まりがない", scores: { PRCS: 2, CRSP: 1, PNCH: 1 } },
    { text: "キックとベースがぶつかる", scores: { LOUD: 2, PNCH: 1, PRCS: 1 } },
    { text: "低域が物足りない", scores: { WARM: 2, PNCH: 1, AGGR: 1 } },
    { text: "特に悩みはない", scores: { BLNC: 2, CLEN: 1, SMTH: 1 } }
  ]},
  { category: "ミックスの悩み", question: "ステレオイメージについて悩みは？", options: [
    { text: "広がりが足りない", scores: { WIDE: 2, VIBE: 1, CRSP: 1 } },
    { text: "センターが弱い", scores: { PNCH: 2, LOUD: 1, BLNC: 1 } },
    { text: "左右のバランスが悪い", scores: { PRCS: 2, BLNC: 1, CRSP: 1 } },
    { text: "特に悩みはない", scores: { SMTH: 2, WARM: 1, CLEN: 1 } }
  ]},
  { category: "ミックスの悩み", question: "リバーブの使い方で悩むことは？", options: [
    { text: "どのリバーブを使えばいいかわからない", scores: { BUDG: 2, BLNC: 1, CLEN: 1 } },
    { text: "音が濁ってしまう", scores: { CRSP: 2, PRCS: 1, WIDE: 1 } },
    { text: "空間が不自然になる", scores: { WIDE: 2, SMTH: 1, WARM: 1 } },
    { text: "もっと個性的なリバーブを使いたい", scores: { EDGE: 2, VIBE: 1, DARK: 1 } }
  ]},
  { category: "ミックスの悩み", question: "音の「温かみ」について悩みは？", options: [
    { text: "もっと温かみが欲しい", scores: { WARM: 2, RETRO: 1, BRIT: 1 } },
    { text: "温かすぎてモコモコする", scores: { CRSP: 2, PRCS: 1, LOUD: 1 } },
    { text: "ジャンルによって使い分けたい", scores: { BLNC: 2, SMTH: 1, VIBE: 1 } },
    { text: "温かみより他の要素が重要", scores: { PNCH: 2, AGGR: 1, EDGE: 1 } }
  ]},
  { category: "ミックスの悩み", question: "ダイナミクス処理で困ることは？", options: [
    { text: "コンプのかけ方がわからない", scores: { BUDG: 2, BLNC: 1, CLEN: 1 } },
    { text: "音が平坦になりすぎる", scores: { VIBE: 2, WARM: 1, EDGE: 1 } },
    { text: "アタック感が出せない", scores: { PNCH: 2, AGGR: 1, LOUD: 1 } },
    { text: "ダイナミクスを保ちつつ音圧を上げたい", scores: { PRCS: 2, CRSP: 1, BLNC: 1 } }
  ]},
  // 好みのサウンド（5問）
  { category: "好みのサウンド", question: "理想のサウンドを一言で表すと？", options: [
    { text: "温かくて心地いい", scores: { WARM: 2, SMTH: 1, RETRO: 1 } },
    { text: "クリアで透明感がある", scores: { CRSP: 2, CLEN: 1, PRCS: 1 } },
    { text: "パワフルでインパクトがある", scores: { LOUD: 2, PNCH: 1, AGGR: 1 } },
    { text: "独特で唯一無二", scores: { EDGE: 2, DARK: 1, VIBE: 1 } }
  ]},
  { category: "好みのサウンド", question: "ドラムサウンドの好みは？", options: [
    { text: "パンチがあって前に出るドラム", scores: { PNCH: 2, LOUD: 1, AGGR: 1 } },
    { text: "ナチュラルでルーム感のあるドラム", scores: { WIDE: 2, WARM: 1, BRIT: 1 } },
    { text: "タイトでモダンなドラム", scores: { CRSP: 2, PRCS: 1, CLEN: 1 } },
    { text: "ローファイでビンテージなドラム", scores: { RETRO: 2, VIBE: 1, DARK: 1 } }
  ]},
  { category: "好みのサウンド", question: "シンセ/楽器の音作りで重視するのは？", options: [
    { text: "倍音豊かで温かいトーン", scores: { WARM: 2, RETRO: 1, VIBE: 1 } },
    { text: "クリーンで原音忠実", scores: { CLEN: 2, CRSP: 1, PRCS: 1 } },
    { text: "攻撃的で存在感のある音", scores: { AGGR: 2, EDGE: 1, LOUD: 1 } },
    { text: "空間的で幻想的な音", scores: { WIDE: 2, DARK: 1, VIBE: 1 } }
  ]},
  { category: "好みのサウンド", question: "サチュレーション/歪みの使い方は？", options: [
    { text: "うっすら味付け程度", scores: { SMTH: 2, CLEN: 1, BLNC: 1 } },
    { text: "しっかり色付けしたい", scores: { WARM: 2, BRIT: 1, RETRO: 1 } },
    { text: "ガッツリ歪ませたい", scores: { AGGR: 2, EDGE: 1, DARK: 1 } },
    { text: "素材によって使い分ける", scores: { PRCS: 2, BLNC: 1, CRSP: 1 } }
  ]},
  { category: "好みのサウンド", question: "マスタリング後の理想の仕上がりは？", options: [
    { text: "迫力があって音圧の高い仕上がり", scores: { LOUD: 2, PNCH: 1, AGGR: 1 } },
    { text: "ダイナミクスを活かした自然な仕上がり", scores: { CLEN: 2, SMTH: 1, WARM: 1 } },
    { text: "クリアで解像度の高い仕上がり", scores: { CRSP: 2, PRCS: 1, BLNC: 1 } },
    { text: "独特の質感がある仕上がり", scores: { EDGE: 2, RETRO: 1, VIBE: 1 } }
  ]},
  // 予算・経験（4問）
  { category: "予算・経験", question: "DTM歴は？", options: [
    { text: "始めたばかり（1年未満）", scores: { BUDG: 2, BLNC: 1, CLEN: 1 } },
    { text: "そこそこ（1〜3年）", scores: { BLNC: 2, CRSP: 1, VIBE: 1 } },
    { text: "中堅（3〜5年）", scores: { PRCS: 2, WARM: 1, BRIT: 1 } },
    { text: "ベテラン（5年以上）", scores: { EDGE: 2, RETRO: 1, PRCS: 1 } }
  ]},
  { category: "予算・経験", question: "プラグインにかけられる予算は？", options: [
    { text: "できるだけ無料で済ませたい", scores: { BUDG: 2, CLEN: 1, BLNC: 1 } },
    { text: "〜5,000円程度", scores: { BUDG: 1, BLNC: 2, VIBE: 1 } },
    { text: "〜20,000円程度", scores: { CRSP: 2, WARM: 1, PRCS: 1 } },
    { text: "良いものなら投資する", scores: { BRIT: 2, PRCS: 1, RETRO: 1 } }
  ]},
  { category: "予算・経験", question: "プラグインの数は？", options: [
    { text: "必要最低限でいい", scores: { CLEN: 2, BUDG: 1, SMTH: 1 } },
    { text: "定番は一通り揃えたい", scores: { BLNC: 2, CRSP: 1, BRIT: 1 } },
    { text: "色々試したい派", scores: { EDGE: 2, VIBE: 1, RETRO: 1 } },
    { text: "すでに大量に持っている", scores: { PRCS: 2, WARM: 1, LOUD: 1 } }
  ]},
  { category: "予算・経験", question: "CPU負荷は気にする？", options: [
    { text: "とても気にする（軽さ重視）", scores: { BUDG: 2, CLEN: 1, BLNC: 1 } },
    { text: "多少は気にする", scores: { BLNC: 2, CRSP: 1, SMTH: 1 } },
    { text: "あまり気にしない", scores: { WARM: 2, BRIT: 1, VIBE: 1 } },
    { text: "全く気にしない（ハイスペックPC）", scores: { PRCS: 2, EDGE: 1, WIDE: 1 } }
  ]},
  // ワークフロー（5問）
  { category: "ワークフロー", question: "プリセットはよく使う？", options: [
    { text: "ほぼプリセットから選ぶ", scores: { BUDG: 2, BLNC: 1, VIBE: 1 } },
    { text: "プリセットをカスタマイズする", scores: { SMTH: 2, CRSP: 1, WARM: 1 } },
    { text: "基本ゼロから作る", scores: { PRCS: 2, EDGE: 1, BRIT: 1 } },
    { text: "時と場合による", scores: { BLNC: 2, CLEN: 1, WIDE: 1 } }
  ]},
  { category: "ワークフロー", question: "プラグインの使い方を学ぶ方法は？", options: [
    { text: "YouTube等の動画で学ぶ", scores: { BUDG: 2, BLNC: 1, VIBE: 1 } },
    { text: "マニュアルをしっかり読む", scores: { PRCS: 2, CRSP: 1, CLEN: 1 } },
    { text: "触りながら直感で覚える", scores: { VIBE: 2, EDGE: 1, PNCH: 1 } },
    { text: "プロのセッティングを真似る", scores: { BRIT: 2, WARM: 1, RETRO: 1 } }
  ]},
  { category: "ワークフロー", question: "ミックスで一番時間をかけるのは？", options: [
    { text: "EQ処理", scores: { CRSP: 2, PRCS: 1, WARM: 1 } },
    { text: "コンプ/ダイナミクス処理", scores: { PNCH: 2, LOUD: 1, BRIT: 1 } },
    { text: "空間系処理（リバーブ/ディレイ）", scores: { WIDE: 2, VIBE: 1, SMTH: 1 } },
    { text: "全体のバランス調整", scores: { BLNC: 2, CLEN: 1, PRCS: 1 } }
  ]},
  { category: "ワークフロー", question: "作業中のリファレンス曲は？", options: [
    { text: "必ず用意する", scores: { PRCS: 2, CRSP: 1, BLNC: 1 } },
    { text: "時々参考にする", scores: { BLNC: 2, WARM: 1, SMTH: 1 } },
    { text: "あまり使わない", scores: { VIBE: 2, EDGE: 1, PNCH: 1 } },
    { text: "自分の耳を信じる", scores: { BRIT: 2, RETRO: 1, WARM: 1 } }
  ]},
  { category: "ワークフロー", question: "最終的に目指す方向性は？", options: [
    { text: "商業クオリティを目指したい", scores: { CRSP: 2, PRCS: 1, BLNC: 1 } },
    { text: "自分らしい個性を追求したい", scores: { EDGE: 2, VIBE: 1, DARK: 1 } },
    { text: "趣味として楽しみたい", scores: { BUDG: 2, WARM: 1, CLEN: 1 } },
    { text: "プロのエンジニアを目指している", scores: { BRIT: 2, PRCS: 1, WIDE: 1 } }
  ]}
];

// メインコンポーネント
export default function PluginDiagnosis() {
  const [stage, setStage] = useState('start'); // start, quiz, result
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({});
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // スコア初期化
  useEffect(() => {
    const initialScores = {};
    Object.keys(types).forEach(key => { initialScores[key] = 0; });
    setScores(initialScores);
  }, []);

  // 回答処理
  const handleAnswer = (option) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([type, score]) => {
      newScores[type] = (newScores[type] || 0) + score;
    });
    setScores(newScores);
    setAnswers([...answers, option]);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        // 結果計算
        const sortedTypes = Object.entries(newScores).sort((a, b) => b[1] - a[1]);
        setResult({
          main: sortedTypes[0][0],
          sub: [sortedTypes[1][0], sortedTypes[2][0]],
          scores: newScores
        });
        setStage('result');
      }
      setIsAnimating(false);
    }, 300);
  };

  // スタート画面
  const StartScreen = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)'
    }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
            style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#a5b4fc' }}>
            <span>🎚️</span>
            <span>30問 / 約5分</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #f0f0ff 0%, #c7d2fe 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            DTMプラグイン
            <br />診断
          </h1>
          
          <p className="text-xl md:text-2xl mb-2" style={{ color: '#a5b4fc' }}>
            あなたにぴったりの
          </p>
          <p className="text-xl md:text-2xl" style={{ color: '#c7d2fe' }}>
            EQ・コンプ・リバーブ・サチュレーターを診断
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-10 max-w-lg mx-auto">
          {['🎛️ EQ', '📊 Comp', '🌊 Reverb', '🔥 Sat', '✨ 飛び道具'].map((item, i) => (
            <div key={i} className="py-3 px-1 rounded-xl text-center text-xs"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
              <span style={{ color: '#e0e7ff' }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStage('quiz')}
          className="group relative px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            color: '#fff'
          }}>
          <span className="relative z-10 flex items-center gap-3">
            診断をはじめる
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        <p className="mt-8 text-sm" style={{ color: '#6b7280' }}>
          Powered by プラグイン通信
        </p>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );

  // クイズ画面
  const QuizScreen = () => {
    const q = questions[currentQ];
    const progress = ((currentQ + 1) / questions.length) * 100;
    
    return (
      <div className="min-h-screen flex flex-col" style={{
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a3e 100%)'
      }}>
        <div className="p-4 md:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium" style={{ color: '#a5b4fc' }}>
                {q.category}
              </span>
              <span className="text-sm" style={{ color: '#6b7280' }}>
                {currentQ + 1} / {questions.length}
              </span>
            </div>
            
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)'
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-relaxed"
              style={{ color: '#f0f0ff' }}>
              {q.question}
            </h2>

            <div className="space-y-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnimating}
                  className="w-full p-5 rounded-2xl text-left transition-all duration-200 hover:scale-102 group"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e0e7ff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc' }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-lg">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 結果画面
  const ResultScreen = () => {
    const mainType = types[result.main];
    const [imgErrors, setImgErrors] = useState({});
    
    const handleImgError = (idx) => {
      setImgErrors(prev => ({ ...prev, [idx]: true }));
    };
    
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a3e 100%)'
      }}>
        <div className="max-w-3xl mx-auto p-6 py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#a5b4fc' }}>
              <span>✨</span>
              <span>診断結果</span>
            </div>
            
            <p className="text-lg mb-4" style={{ color: '#a5b4fc' }}>あなたのタイプは...</p>
            
            <div className="text-7xl mb-4">{mainType.emoji}</div>
            
            <h1 className="text-3xl md:text-4xl font-black mb-2"
              style={{ color: mainType.color }}>
              {result.main}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#f0f0ff' }}>
              {mainType.name}
            </h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              {mainType.subtitle}
            </p>
          </div>

          <div className="rounded-2xl p-6 mb-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-lg leading-relaxed" style={{ color: '#e0e7ff' }}>
              {mainType.description}
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-sm" style={{ color: '#6b7280' }}>得意ジャンル: </span>
              <span style={{ color: mainType.color }}>{mainType.genre}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#f0f0ff' }}>
              🎚️ おすすめプラグインセット
            </h3>
            
            <div className="grid gap-4">
              {mainType.plugins.map((plugin, i) => (
                <a
                  key={i}
                  href={plugin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden transition-all duration-200 hover:scale-102"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${mainType.color}15`;
                    e.currentTarget.style.borderColor = `${mainType.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}>
                  <div className="flex gap-4 p-4">
                    {/* プラグイン画像 */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden" 
                      style={{ background: 'rgba(0,0,0,0.3)' }}>
                      {!imgErrors[i] ? (
                        <img 
                          src={plugin.image} 
                          alt={plugin.name}
                          className="w-full h-full object-cover"
                          onError={() => handleImgError(i)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl"
                          style={{ background: `${mainType.color}30` }}>
                          {plugin.type === 'EQ' && '🎛️'}
                          {plugin.type === 'Comp' && '📊'}
                          {plugin.type === 'Reverb' && '🌊'}
                          {plugin.type === 'Saturation' && '🔥'}
                          {plugin.type === '飛び道具' && '✨'}
                        </div>
                      )}
                    </div>
                    
                    {/* プラグイン情報 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-xs font-bold"
                          style={{ background: `${mainType.color}30`, color: mainType.color }}>
                          {plugin.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-1 truncate" style={{ color: '#f0f0ff' }}>
                        {plugin.name}
                      </h4>
                      <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#9ca3af' }}>
                        {plugin.description}
                      </p>
                      <p className="text-xs mt-2 flex items-center gap-1" style={{ color: mainType.color }}>
                        Plugin Boutiqueで見る
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 mb-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-sm font-medium mb-4" style={{ color: '#6b7280' }}>
              あなたの傾向に近いタイプ
            </h4>
            <div className="flex gap-4">
              {result.sub.map((typeKey, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-2xl">{types[typeKey].emoji}</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#a5b4fc' }}>{typeKey}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{types[typeKey].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const text = `私のDTMプラグイン診断結果は「${result.main} - ${mainType.name}」でした！\n\n#DTMプラグイン診断 #プラグイン通信 #DTM`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ background: '#1DA1F2', color: '#fff' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Xでシェア
            </button>
            
            <button
              onClick={() => {
                setStage('start');
                setCurrentQ(0);
                setAnswers([]);
                const initialScores = {};
                Object.keys(types).forEach(key => { initialScores[key] = 0; });
                setScores(initialScores);
                setResult(null);
              }}
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#e0e7ff'
              }}>
              もう一度診断する
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Powered by <a href="https://plugin-tsushin.github.io/plugin-sale" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>プラグイン通信</a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {stage === 'start' && <StartScreen />}
      {stage === 'quiz' && <QuizScreen />}
      {stage === 'result' && <ResultScreen />}
    </div>
  );
}
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #f0f0ff 0%, #c7d2fe 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            DTMプラグイン
            <br />診断
          </h1>
          
          <p className="text-xl md:text-2xl mb-2" style={{ color: '#a5b4fc' }}>
            あなたにぴったりの
          </p>
          <p className="text-xl md:text-2xl" style={{ color: '#c7d2fe' }}>
            EQ・コンプ・リバーブ・サチュレーターを診断
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-10 max-w-md mx-auto">
          {['🎛️ EQ', '📊 Comp', '🌊 Reverb', '🔥 Sat'].map((item, i) => (
            <div key={i} className="py-3 px-2 rounded-xl text-center text-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
              <span style={{ color: '#e0e7ff' }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStage('quiz')}
          className="group relative px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            color: '#fff'
          }}>
          <span className="relative z-10 flex items-center gap-3">
            診断をはじめる
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        <p className="mt-8 text-sm" style={{ color: '#6b7280' }}>
          Powered by プラグイン通信
        </p>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );

  // クイズ画面
  const QuizScreen = () => {
    const q = questions[currentQ];
    const progress = ((currentQ + 1) / questions.length) * 100;
    
    return (
      <div className="min-h-screen flex flex-col" style={{
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a3e 100%)'
      }}>
        {/* ヘッダー */}
        <div className="p-4 md:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium" style={{ color: '#a5b4fc' }}>
                {q.category}
              </span>
              <span className="text-sm" style={{ color: '#6b7280' }}>
                {currentQ + 1} / {questions.length}
              </span>
            </div>
            
            {/* プログレスバー */}
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* 質問 */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-relaxed"
              style={{ color: '#f0f0ff' }}>
              {q.question}
            </h2>

            <div className="space-y-4">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnimating}
                  className="w-full p-5 rounded-2xl text-left transition-all duration-200 hover:scale-102 group"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e0e7ff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc' }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-lg">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 結果画面
  const ResultScreen = () => {
    const mainType = types[result.main];
    
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a3e 100%)'
      }}>
        <div className="max-w-3xl mx-auto p-6 py-12">
          {/* 結果ヘッダー */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#a5b4fc' }}>
              <span>✨</span>
              <span>診断結果</span>
            </div>
            
            <p className="text-lg mb-4" style={{ color: '#a5b4fc' }}>あなたのタイプは...</p>
            
            <div className="text-7xl mb-4">{mainType.emoji}</div>
            
            <h1 className="text-3xl md:text-4xl font-black mb-2"
              style={{ color: mainType.color }}>
              {result.main}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#f0f0ff' }}>
              {mainType.name}
            </h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              {mainType.subtitle}
            </p>
          </div>

          {/* 説明 */}
          <div className="rounded-2xl p-6 mb-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-lg leading-relaxed" style={{ color: '#e0e7ff' }}>
              {mainType.description}
            </p>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-sm" style={{ color: '#6b7280' }}>得意ジャンル: </span>
              <span style={{ color: mainType.color }}>{mainType.genre}</span>
            </div>
          </div>

          {/* おすすめプラグイン */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#f0f0ff' }}>
              🎚️ おすすめプラグインセット
            </h3>
            
            <div className="grid gap-4">
              {mainType.plugins.map((plugin, i) => (
                <a
                  key={i}
                  href={plugin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl transition-all duration-200 hover:scale-102"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${mainType.color}20`;
                    e.currentTarget.style.borderColor = `${mainType.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-xl flex items-center justify-center font-bold"
                        style={{ background: `${mainType.color}30`, color: mainType.color }}>
                        {plugin.type}
                      </span>
                      <div>
                        <p className="font-bold" style={{ color: '#f0f0ff' }}>{plugin.name}</p>
                        <p className="text-sm" style={{ color: '#6b7280' }}>Plugin Boutiqueで見る →</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5" style={{ color: mainType.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* サブタイプ */}
          <div className="rounded-2xl p-6 mb-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-sm font-medium mb-4" style={{ color: '#6b7280' }}>
              あなたの傾向に近いタイプ
            </h4>
            <div className="flex gap-4">
              {result.sub.map((typeKey, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-2xl">{types[typeKey].emoji}</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#a5b4fc' }}>{typeKey}</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>{types[typeKey].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* シェア・リトライ */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const text = `私のDTMプラグイン診断結果は「${result.main} - ${mainType.name}」でした！\n\n#DTMプラグイン診断 #プラグイン通信`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ background: '#1DA1F2', color: '#fff' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Xでシェア
            </button>
            
            <button
              onClick={() => {
                setStage('start');
                setCurrentQ(0);
                setAnswers([]);
                const initialScores = {};
                Object.keys(types).forEach(key => { initialScores[key] = 0; });
                setScores(initialScores);
                setResult(null);
              }}
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#e0e7ff'
              }}>
              もう一度診断する
            </button>
          </div>

          {/* フッター */}
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Powered by <a href="https://plugin-tsushin.github.io/plugin-sale" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>プラグイン通信</a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  // レンダリング
  return (
    <div style={{ fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {stage === 'start' && <StartScreen />}
      {stage === 'quiz' && <QuizScreen />}
      {stage === 'result' && <ResultScreen />}
    </div>
  );
}
