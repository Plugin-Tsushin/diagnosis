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
      { type: "EQ", name: "Waves PuigTec EQs", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/13694-PuigTec-EQs?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-76", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13688-CLA-76-Compressor-Limiter?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Room", url: "https://valhalladsp.com/shop/reverb/valhalla-room/" },
      { type: "Saturation", name: "Soundtoys Decapitator", url: "https://www.pluginboutique.com/product/2-Effects/44-Saturation/1801-Decapitator?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "FabFilter Pro-Q 4", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/14125-FabFilter-Pro-Q-4?a_aid=688228cd487ff" },
      { type: "Comp", name: "FabFilter Pro-C 2", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/1756-FabFilter-Pro-C-2?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla VintageVerb", url: "https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/" },
      { type: "Saturation", name: "FabFilter Saturn 2", url: "https://www.pluginboutique.com/product/2-Effects/30-Distortion/6423-FabFilter-Saturn-2?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "SSL Native Channel Strip 2", url: "https://www.pluginboutique.com/product/2-Effects/21-Channel-Strip/8653-SSL-Native-Channel-Strip-2?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-76", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13688-CLA-76-Compressor-Limiter?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Soundtoys Little Plate", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/4715-Little-Plate?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Waves Abbey Road J37 Tape", url: "https://www.pluginboutique.com/product/2-Effects/96-Tape-Emulation/13691-Abbey-Road-J37-Tape?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "TDR Nova GE", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/4656-TDR-Nova-GE?a_aid=688228cd487ff" },
      { type: "Comp", name: "TDR Kotelnikov GE", url: "https://www.pluginboutique.com/product/2-Effects/71-Dynamics-Processor/4657-TDR-Kotelnikov-GE?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Shimmer", url: "https://valhalladsp.com/shop/reverb/valhalla-shimmer/" },
      { type: "Saturation", name: "Soundtoys Radiator", url: "https://www.pluginboutique.com/product/2-Effects/44-Saturation/1802-Radiator?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "Waves API 550", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/13680-API-550?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves API 2500", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13695-API-2500?a_aid=688228cd487ff" },
      { type: "Reverb", name: "FabFilter Pro-R 2", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/11576-FabFilter-Pro-R-2?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Kazrog True Iron", url: "https://kazrog.com/products/true-iron" }
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
      { type: "EQ", name: "TDR Nova GE", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/4656-TDR-Nova-GE?a_aid=688228cd487ff" },
      { type: "Comp", name: "TDR Kotelnikov GE", url: "https://www.pluginboutique.com/product/2-Effects/71-Dynamics-Processor/4657-TDR-Kotelnikov-GE?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Supermassive", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/" },
      { type: "Saturation", name: "Klanghelm SDRR", url: "https://klanghelm.com/contents/products/SDRR.php" }
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
      { type: "EQ", name: "Pulsar Massive", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/5866-Pulsar-Massive?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-2A", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13687-CLA-2A-Compressor-Limiter?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Delay", url: "https://valhalladsp.com/shop/delay/valhalladelay/" },
      { type: "Saturation", name: "Goodhertz Lossy", url: "https://goodhertz.com/lossy/" }
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
      { type: "EQ", name: "Waves SSL E-Channel", url: "https://www.pluginboutique.com/product/2-Effects/21-Channel-Strip/13693-SSL-E-Channel?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves SSL E-Channel", url: "https://www.pluginboutique.com/product/2-Effects/21-Channel-Strip/13693-SSL-E-Channel?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Arturia Rev PLATE-140", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/6637-Rev-PLATE-140?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Waves Abbey Road Vinyl", url: "https://www.pluginboutique.com/product/2-Effects/44-Saturation/13681-Abbey-Road-Vinyl?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "Waves H-EQ", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/13768-H-EQ-Hybrid-Equalizer?a_aid=688228cd487ff" },
      { type: "Comp", name: "Arturia Comp FET-76", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/5643-Comp-FET-76?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Eventide Blackhole", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/2855-Blackhole?a_aid=688228cd487ff" },
      { type: "Saturation", name: "XLN Audio RC-20 Retro Color", url: "https://www.pluginboutique.com/product/2-Effects/44-Saturation/3016-RC-20-Retro-Color?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "iZotope Neutron 5", url: "https://www.pluginboutique.com/product/2-Effects/21-Channel-Strip/9124-Neutron-4?a_aid=688228cd487ff" },
      { type: "Comp", name: "FabFilter Pro-C 2", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/1756-FabFilter-Pro-C-2?a_aid=688228cd487ff" },
      { type: "Reverb", name: "FabFilter Pro-R 2", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/11576-FabFilter-Pro-R-2?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Kazrog KClip 3", url: "https://kazrog.com/products/kclip" }
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
      { type: "EQ", name: "Waves PuigTec EQs", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/13694-PuigTec-EQs?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves Kramer Master Tape", url: "https://www.pluginboutique.com/product/2-Effects/96-Tape-Emulation/13679-Kramer-Master-Tape?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Arturia Rev PLATE-140", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/6637-Rev-PLATE-140?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Waves Abbey Road Vinyl", url: "https://www.pluginboutique.com/product/2-Effects/44-Saturation/13681-Abbey-Road-Vinyl?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "Waves PuigChild Compressor", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13678-PuigChild-Compressor?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves dbx 160", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13682-dbx-160-Compressor-Limiter?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Delay", url: "https://valhalladsp.com/shop/delay/valhalladelay/" },
      { type: "Saturation", name: "Soundtoys Devil-Loc Deluxe", url: "https://www.pluginboutique.com/product/2-Effects/9-Limiter/1803-Devil-Loc-Deluxe?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "FabFilter Pro-Q 4", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/14125-FabFilter-Pro-Q-4?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves CLA-2A", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13687-CLA-2A-Compressor-Limiter?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Valhalla Room", url: "https://valhalladsp.com/shop/reverb/valhalla-room/" },
      { type: "Saturation", name: "Waves NLS Non-Linear Summer", url: "https://www.pluginboutique.com/product/3-Studio-Tools/72-Utility/13800-NLS-Non-Linear-Summer?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "oeksound Soothe2", url: "https://oeksound.com/plugins/soothe2/" },
      { type: "Comp", name: "Waves Infected Mushroom Pusher", url: "https://www.pluginboutique.com/product/2-Effects/42-Enhancer/13599-Infected-Mushroom-Pusher?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Output Portal", url: "https://www.pluginboutique.com/product/2-Effects/45-Granular-FX/5458-Portal?a_aid=688228cd487ff" },
      { type: "Saturation", name: "iZotope Trash", url: "https://www.pluginboutique.com/product/2-Effects/30-Distortion/11987-Trash?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "Waves Renaissance EQ", url: "https://www.pluginboutique.com/product/2-Effects/16-EQ/13614-Renaissance-Equalizer?a_aid=688228cd487ff" },
      { type: "Comp", name: "Waves Renaissance Compressor", url: "https://www.pluginboutique.com/product/2-Effects/8-Compressor/13646-Renaissance-Compressor?a_aid=688228cd487ff" },
      { type: "Reverb", name: "Waves Renaissance Reverb", url: "https://www.pluginboutique.com/product/2-Effects/17-Reverb/13674-Renaissance-Reverb?a_aid=688228cd487ff" },
      { type: "Saturation", name: "Waves Vitamin", url: "https://www.pluginboutique.com/product/2-Effects/42-Enhancer/13785-Vitamin-Sonic-Enhancer?a_aid=688228cd487ff" }
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
      { type: "EQ", name: "TDR Nova (Free)", url: "https://www.tokyodawn.net/tdr-nova/" },
      { type: "Comp", name: "TDR Kotelnikov (Free)", url: "https://www.tokyodawn.net/tdr-kotelnikov/" },
      { type: "Reverb", name: "Valhalla Supermassive (Free)", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/" },
      { type: "Saturation", name: "Softube Saturation Knob (Free)", url: "https://www.softube.com/saturationknob" }
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
