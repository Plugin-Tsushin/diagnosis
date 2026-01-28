// メインコンポーネント
function PluginDiagnosis() {
  const [stage, setStage] = React.useState('start'); // start, quiz, result
  const [currentQ, setCurrentQ] = React.useState(0);
  const [scores, setScores] = React.useState({});
  const [answers, setAnswers] = React.useState([]);
  const [result, setResult] = React.useState(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // スコア初期化
  React.useEffect(() => {
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

// アプリケーションをレンダリング
ReactDOM.createRoot(document.getElementById('app')).render(<PluginDiagnosis />);
