import { GraduationCap } from 'lucide-react';
import { Chapter } from '../types';

export const expertSummaryChapter: Chapter = {
  id: 'chapter-expert-summary',
  title: '有識者たの口腔顔面痛講義より',
  icon: <GraduationCap className="w-5 h-5" />,
  subSections: [
    {
      id: 'expert-summary-disclaimer',
      title: 'はじめに（本ページの位置づけ）',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-amber-50/60 p-6 rounded-xl border border-amber-200">
          <p className="leading-loose">
            本内容は、有名な口腔顔面痛の専門医の講義をAIでまとめたものです。
            よって、引用となる論文はありません。その専門医の情報が間違っているという問題は残りますが、ネットのいい加減な情報は含まれていません。講義は、ほとんどが無料のものですが、多くが公開されておりません。また、本作成者が講義を聞いてメモした内容も多く含まれるため、記載ミスもありますので注意してください。
          </p>
          <p className="text-sm text-amber-900 bg-white/70 p-4 rounded border border-amber-200 leading-relaxed">
            以下では、「予備室（パスワード）」に収載した
            <strong>専門家会議</strong>と<strong>5つの講義（有名な先生／Glenn Clark／Amy Pasternak／村岡渡／論文撤回セミナー）</strong>を横断的に整理し、
            <strong>「BMS（舌痛症）と口腔顔面痛をどう理解し、どう診断し、どう治療戦略を立てるか」</strong>という一本の流れに再構成しました。
            医学的には教育目的の整理であり、個別患者への診断・処方指示ではありません。
          </p>
        </div>
      ),
    },

    /* 1 ───────────────────────────────────────── */
    {
      id: 'es-overview',
      title: '1. BMSは「舌だけの病気」ではない ── 口腔顔面痛・慢性痛医学の交差点',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            バーニングマウス症候群（Burning Mouth Syndrome：BMS、舌痛症）は、典型的には次のような特徴をもつ慢性口腔痛です。
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>舌がヒリヒリ・ピリピリする、口腔粘膜が焼けるように痛い</li>
            <li>見た目には明らかな異常がない</li>
            <li>炎症・潰瘍・腫瘍・感染などが検査で見つからない</li>
            <li>痛みが3か月以上続く</li>
            <li>食事中や何かに集中していると軽くなることがある</li>
          </ul>
          <p>
            国際口腔顔面痛分類（ICOP, 2020）はBMSを「特発性口腔顔面痛」の中に位置づけ、
            「明らかな原因病変がないにもかかわらず、口腔内の灼熱感または異常感覚が、<strong>1日2時間以上、3か月を超えて反復・持続</strong>する状態」と扱います。
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
            <p className="text-sm">
              重要なのは、BMSが単なる「舌の炎症」ではない点です。現代的には、
              <strong>末梢神経の異常／三叉神経系の変化／中枢神経の痛み処理異常／ドパミン系・NMDA受容体系の変調／ホルモン環境／心理社会的因子</strong>
              が重なって生じる慢性口腔顔面痛として理解されつつあります。
            </p>
          </div>
        </div>
      ),
    },

    /* 2 ───────────────────────────────────────── */
    {
      id: 'es-pain-definition',
      title: '2. 痛みの定義と3分類 ── IASP 2020改定の核心',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">
            2-1. IASP 2020：「組織損傷がなくても痛みは本物」
          </h4>
          <p>
            国際疼痛学会（IASP）は2020年、約40年ぶりに痛みの定義を改訂し、
            「<strong>実際の組織損傷もしくは組織損傷が起こりうる状態に付随する、あるいはそれに類似した、不快な感覚かつ情動の体験</strong>」と定めました。
            最大のポイントは「resembling that associated with（類似した）」が加わったこと。
            つまり<strong>組織損傷が明確になくても、痛みは本物</strong>という宣言です。
          </p>
          <p className="text-sm">
            この定義はBMSの理解に直結します。BMSでは舌や口腔粘膜に潰瘍・炎症・腫瘍が見つからないことが多いものの、
            だからといって「気のせい」ではありません。痛みは末梢組織だけでなく、
            <strong>神経系・脳・情動ネットワークの中で成立する主観的かつ生物学的な体験</strong>です。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-6">
            2-2. 痛みの3メカニズム
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h5 className="font-bold text-blue-900 mb-1">① 侵害受容性疼痛<br/><span className="text-xs font-normal">Nociceptive pain</span></h5>
              <p className="text-xs leading-relaxed">
                組織損傷や炎症で侵害受容器が刺激される<strong>「正常な警報」</strong>。<br/>
                例：虫歯／歯髄炎／歯周炎／口内炎／外傷／顎関節炎／筋過負荷。<br/>
                NSAIDsが効きやすい。
              </p>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg">
              <h5 className="font-bold text-rose-900 mb-1">② 神経障害性疼痛<br/><span className="text-xs font-normal">Neuropathic pain</span></h5>
              <p className="text-xs leading-relaxed">
                体性感覚神経そのものに病変があり<strong>異常信号</strong>を出す痛み。<br/>
                例：三叉神経痛／帯状疱疹後神経痛／PTTN／下歯槽神経麻痺後痛。<br/>
                ビリビリ・電撃様・焼ける・しびれ・触覚痛、感覚鈍麻と過敏が混在。
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <h5 className="font-bold text-purple-900 mb-1">③ 痛覚変調性疼痛<br/><span className="text-xs font-normal">Nociplastic pain</span></h5>
              <p className="text-xs leading-relaxed">
                明確な炎症も神経損傷もなく、<strong>痛み処理そのものが過敏化・変調</strong>。<br/>
                例：線維筋痛症／IBS／慢性骨盤痛／PIDAP／PIFP／BMS。
              </p>
            </div>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-6">
            2-3. BMSは神経障害性？それとも痛覚変調性？
          </h4>
          <p className="text-sm">
            ここが専門家議論の核心です。米国のAAOP（口腔顔面痛学会）はBMSを<strong>神経障害性疼痛</strong>に分類する傾向があります。
            一方、欧州のSvensson教授らは<strong>痛覚変調性疼痛</strong>の側面を強く提唱しています。
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
            <p className="font-bold text-yellow-900 mb-1">K先生の厳密な定義（予備室1より）</p>
            <p>
              「痛覚変調性疼痛の代表的疾患」という言い回しは不正確で、正しくは
              「<strong>もしその患者が痛みを訴えるなら、痛覚変調性疼痛の機序で生じていると考えるのが最も妥当な疾患</strong>」。
              診断は機序からの推論であり、ラベルから症例を演繹してはいけません。
            </p>
          </div>
          <p className="text-sm">
            結論として、BMSは
            <strong>「末梢小径線維障害／三叉神経系機能異常／中枢性感作／ドパミン系機能低下／情動・注意・ストレス系の変調が混在するヘテロな疾患群」</strong>
            と理解するのが最も現実的です。
          </p>
        </div>
      ),
    },

    /* 3 ───────────────────────────────────────── */
    {
      id: 'es-epidemiology',
      title: '3. 疫学 ── なぜBMSは中高年女性に多いのか',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            BMSは圧倒的に女性に多く、特に<strong>更年期以降</strong>に多発します。ここで疑問になるのが、
            「女性ホルモンが関係するなら、なぜホルモン量の多い若年女性ではなく、更年期以降に多いのか？」という点です。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">3-1. エストロゲンとTRPV1</h4>
          <p className="text-sm">
            TRPV1は痛み・熱刺激・灼熱感に関与する受容体（カプサイシン＝唐辛子で活性化）。
            エストロゲンは<strong>古典的ゲノム経路（ERα/β → 遺伝子発現↑）</strong>と<strong>非ゲノム経路（プロモーター活性化）</strong>の両方でTRPV1を増加させます。
            すなわち女性ホルモン環境は、三叉神経節（TG）や後根神経節（DRG）の痛みセンサーを敏感にしうるのです。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">3-2. プロラクチンと性差</h4>
          <p className="text-sm">
            Stratton ら（2024）は、プロラクチン受容体が<strong>雌の侵害受容ニューロンのみ</strong>に特異的に発現し、分泌されると雌の神経細胞だけ活性化してTRPV1を増産することを示しました。
            BMSの女性優位は、単なる心理的要因ではなく<strong>侵害受容ニューロンそのものの性差</strong>に根ざしている可能性があります。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">3-3. 更年期・ストレス・脳ネットワーク</h4>
          <p className="text-sm">
            ただしホルモン量だけでは更年期以降の好発は説明できません。更年期には
            <strong>エストロゲンの急激な変動・低下／睡眠障害／不安・抑うつ／生活環境の変化／身体症状への注意増大／慢性ストレス／神経保護作用の低下</strong>
            が重なります。BMS患者の脳機能画像では、
            <strong>前帯状皮質・内側前頭前皮質・基底核・視床・扁桃体</strong>の機能的接続性が亢進していることが報告されています。
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-3 rounded text-sm">
            <strong>整理：</strong>BMSの女性優位は
            「<strong>ホルモンによる末梢神経感受性の上昇 ＋ 更年期の神経保護低下 ＋ ストレス・睡眠・情動ネットワークの変化</strong>」
            の合算として理解する。
          </div>
        </div>
      ),
    },

    /* 4 ───────────────────────────────────────── */
    {
      id: 'es-bms-subtypes',
      title: '4. BMSの病態生理 ── 3つのサブタイプで考える',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            Satu K. Jääskeläinen らの議論を踏まえると、BMSは単一疾患ではなく、少なくとも3つの病態サブクラスに分けて考える必要があります。
            治療戦略はこのサブタイプ推定に直結します。
          </p>

          <div className="space-y-4">
            {/* 末梢型 */}
            <div className="bg-rose-50 border border-rose-200 p-5 rounded-lg">
              <h5 className="font-bold text-rose-900 mb-2">① 末梢小径線維障害型</h5>
              <p className="text-sm mb-2">舌粘膜・口腔粘膜の小径神経線維が障害される。</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>口腔粘膜の灼熱感、表在性のヒリヒリ</li>
                <li>TRPV1など痛み受容体発現の増加</li>
                <li>生検で表皮内神経線維密度（IENFD）低下が示される場合あり</li>
                <li>局所治療に反応する可能性が高い</li>
              </ul>
              <p className="text-xs mt-2"><strong>治療候補：</strong>局所クロナゼパム／局所リドカイン／カプサイシン／口腔内ステント併用局所薬</p>
            </div>

            {/* 三叉神経型 */}
            <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
              <h5 className="font-bold text-amber-900 mb-2">② 潜在性三叉神経障害型</h5>
              <p className="text-sm mb-2">明らかな外傷がなくても、三叉神経系の機能異常が背景にある。</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>舌神経・鼓索神経・三叉神経系の抑制バランス破綻</li>
                <li>味覚異常を伴うことがある</li>
                <li>しびれ／ピリピリ／知覚過敏</li>
                <li>瞬目反射など神経生理学的検査でのみ異常を検出</li>
              </ul>
              <p className="text-xs mt-2"><strong>治療候補：</strong>カルバマゼピン／ガバペンチノイド／TCA／SNRI／局所薬</p>
              <p className="text-xs mt-1 text-amber-800">
                ※三叉神経痛とは異なる：三叉神経痛は「数秒〜2分の電撃発作／発作間無痛／トリガー／不応期」が特徴で、BMSの持続灼熱痛とは臨床像が違う。
              </p>
            </div>

            {/* 中枢型 */}
            <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
              <h5 className="font-bold text-purple-900 mb-2">③ 中枢性疼痛・痛覚変調型（最も難治）</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>痛みが長期化、食事中・会話中には軽くなる</li>
                <li>ストレスで増悪、睡眠障害・不安・抑うつ併存</li>
                <li>痛みに注意が集中、局所治療だけでは改善しにくい</li>
                <li><strong>下行性疼痛抑制系の機能低下／ドパミン系機能低下／NMDA受容体過活動／中枢感作</strong></li>
              </ul>
              <p className="text-xs mt-2">
                <strong>治療候補：</strong>アミトリプチリン／デュロキセチン／プレガバリン／認知行動療法／運動療法／睡眠改善／病態説明／学際的慢性痛マネジメント／（将来）NMDA・D2受容体標的薬
              </p>
            </div>
          </div>
        </div>
      ),
    },

    /* 5 ───────────────────────────────────────── */
    {
      id: 'es-clonazepam',
      title: '5. クロナゼパムのエビデンス ── 効くが、過大評価してはいけない',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            BMS治療で頻繁に登場するのがクロナゼパムです。特に局所使用（口腔内で保持して作用させる）が議論されてきました。
            しかし専門家会議で重要視されたのは、
          </p>
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded">
            <p className="font-bold text-rose-900">統計的有意差と、患者が満足する臨床的改善は同じではない。</p>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">5-1. 統計上は有効でも、完全除痛は少ない</h4>
          <p className="text-sm">
            古典的なWoda（2004）の局所クロナゼパム試験では疼痛スコアの改善が認められましたが、専門家が精読すると
            <strong>22名中：完全消失5名／著効9名／有効2名／無効・悪化6名</strong>。
            つまり「平均スコアが下がった」ことと、「患者が痛みから解放された」ことは別問題です。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">5-2. 相対リスク（RR）の罠</h4>
          <p className="text-sm">メタ解析でよく使われるRRは要注意です。同じRR=2でも患者集団にとっての意味は大きく異なります。</p>
          <div className="overflow-x-auto">
            <table className="text-sm w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="border px-2 py-1">標準治療の改善率</th>
                  <th className="border px-2 py-1">RR</th>
                  <th className="border px-2 py-1">新薬での改善人数（1000人中）</th>
                  <th className="border px-2 py-1">絶対利益</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">10%（100人）</td><td className="border px-2 py-1">2</td><td className="border px-2 py-1">200人</td><td className="border px-2 py-1 text-emerald-700 font-bold">+100人</td></tr>
                <tr><td className="border px-2 py-1">1%（10人）</td><td className="border px-2 py-1">2</td><td className="border px-2 py-1">20人</td><td className="border px-2 py-1 text-rose-700 font-bold">+10人のみ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2">
            BMS研究は症例数が少なく研究の質も限定的。
            「<strong>効く可能性はあるが、確実性は低く、過度な期待は禁物</strong>」が現実的評価です。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">5-3. 全身投与 vs 局所投与</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-rose-50 border border-rose-200 p-3 rounded text-sm">
              <strong>全身投与の注意：</strong>眠気／めまい／ふらつき／依存／認知機能低下／高齢者の転倒リスク
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded text-sm">
              <strong>局所投与：</strong>全身副作用を抑えやすい。ただし吸収・眠気・依存性ゼロではない
            </div>
          </div>
          <p className="text-sm">
            <strong>選択は</strong>痛みの型／年齢／併用薬／睡眠薬使用歴／転倒リスク／認知機能／期待値／治療目標を総合判断します。
          </p>
        </div>
      ),
    },

    /* 6 ───────────────────────────────────────── */
    {
      id: 'es-other-drugs',
      title: '6. クロナゼパム以外の治療戦略',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>BMSはヘテロな疾患なので、全員に同じ薬を使えばよいわけではありません。サブタイプと併存症で薬を選びます。</p>

          <div className="space-y-4">
            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-1. アミトリプチリン（TCA）</h5>
              <p className="text-sm"><strong>期待作用：</strong>下行性疼痛抑制系の賦活／睡眠改善／中枢感作緩和／神経障害性疼痛への効果。少量5–10mgから開始し漸増する戦略が主流。</p>
              <p className="text-sm text-rose-700"><strong>注意：</strong>口渇／便秘／眠気／ふらつき／尿閉／心電図異常／高齢者の転倒・認知影響。BMSは口腔乾燥感を訴えることが多く、口渇副作用は継続障害になりやすい。</p>
            </div>

            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-2. SNRI（デュロキセチン等）</h5>
              <p className="text-sm"><strong>利点：</strong>下行性抑制系を介して鎮痛／TCAより忍容性良好な場合あり／うつ・不安併存例で有用。</p>
              <p className="text-sm text-rose-700">
                <strong>注意：</strong>悪心／不眠／血圧上昇／発汗／離脱症状／<strong>ブラキシズム・クレンチング誘発</strong>。
                Dr. Glenn Clarkは「SSRI/SNRIが運動亢進・アカシジア・クレンチングを誘発しうる」と強調。
                <span className="block mt-1">→ <strong>痛みを抑える薬が、咬筋過活動を介して別の痛みを作ることがある</strong>。</span>
              </p>
            </div>

            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-3. ガバペンチノイド（プレガバリン／ガバペンチン／ミロガバリン）</h5>
              <p className="text-sm"><strong>期待作用：</strong>神経過興奮の抑制／アロディニア・しびれを伴う痛みに有効な可能性。</p>
              <p className="text-sm text-rose-700"><strong>注意：</strong>傾眠／めまい／浮腫／体重増加／高齢者ふらつき。NNTは決して低くなく「全員が劇的に良くなる薬」ではない。</p>
            </div>

            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-4. カルバマゼピン</h5>
              <p className="text-sm">主に三叉神経痛の第一選択（NNT≈1.7）。BMSの一般的第一選択ではないが、舌神経・三叉神経系の発作性異常活動が強く疑われる場合に検討。</p>
              <p className="text-sm text-rose-700"><strong>注意：</strong>眠気／肝機能障害／白血球減少／薬疹／<strong>Stevens-Johnson症候群（HLA-B*15:02でリスク激増、アジア系で投与前検査推奨）</strong>／薬物相互作用。</p>
            </div>

            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-5. カプサイシン</h5>
              <p className="text-sm">TRPV1を強く刺激し神経伝達物質を枯渇させる発想。<strong>初期刺激が強く灼熱感が増える／忍容性が低い／リバウンドの可能性</strong>あり、扱いは難しい。</p>
            </div>

            <div className="bg-white border border-indigo-200 p-4 rounded-lg shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-1">6-6. 局所薬と口腔内ステント</h5>
              <p className="text-sm">
                Harvard Pain RoundsのPTTN治療では局所薬とステントの併用が重要視されました。
                局所薬候補は<strong>リドカイン／カプサイシン／アミトリプチリン／ノルトリプチリン／クロニジン／NSAIDs／ガバペンチン／ケタミン</strong>。
              </p>
              <p className="text-sm">
                ステントの利点：薬剤を患部に保持／全身吸収を抑える／副作用減／触覚刺激による<strong>ゲートコントロール効果</strong>（Aβ線維刺激が痛み入力を抑制）。
                持続的で無害な刺激に脳が慣れる効果も期待される。
              </p>
            </div>
          </div>
        </div>
      ),
    },

    /* 7 ───────────────────────────────────────── */
    {
      id: 'es-future-targets',
      title: '7. 未来の治療標的 ── NMDA受容体とドパミンD2受容体',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>BMSの治療将来像で特に重要なのが、中枢で起きている異常を直接の標的とする発想です。</p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">7-1. NMDA受容体</h4>
          <p className="text-sm">
            NMDA受容体は神経可塑性・中枢感作・ワインドアップに深く関わります。痛み信号が反復入力されるとNMDA受容体を介したシナプス可塑性が進み、痛みの「ボリューム」が上がります。
            BMSの一部では<strong>NMDA受容体系の過活動を抑える</strong>ことが治療戦略になりえます（ケタミン低用量、メマンチン、デキストロメトルファンなどが研究レベルで議論）。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">7-2. ドパミンD2受容体</h4>
          <p className="text-sm">
            BMSでは基底核・線条体のドパミン低下が示唆され、Jääskeläinenらは中枢型を「ドパミン作動性トップダウン抑制の欠陥」と関連づけています。
            この視点から<strong>アリピプラゾール（D2部分作動薬）少量併用</strong>が日本のリアルワールド研究で注目されています（T先生・Ng先生 2025）。
          </p>
          <div className="bg-indigo-100 border-l-4 border-indigo-500 p-3 rounded text-sm">
            Ng総説（2025）の結論：効果的治療戦略は「<strong>NMDA受容体の過活動を抑制し、D2受容体機能低下を補う</strong>」ことを目指すべき。
            ただし<strong>標準治療として確立したとは言えない</strong>──理論的に魅力的だが慎重な位置づけが必要。
          </div>
        </div>
      ),
    },

    /* 8 ───────────────────────────────────────── */
    {
      id: 'es-ofp-position',
      title: '8. 口腔顔面痛全体から見たBMS',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>BMSを正しく理解するには、口腔顔面痛全体（ICOPの6分類）を知る必要があります。</p>
          <ol className="list-decimal pl-6 text-sm space-y-1">
            <li>歯・歯槽・関連構造に起因する痛み</li>
            <li>筋・筋膜性口腔顔面痛</li>
            <li>顎関節痛（TMJ Pain）</li>
            <li>脳神経の病変・疾患に起因する痛み</li>
            <li>一次性頭痛に似た口腔顔面痛</li>
            <li>特発性口腔顔面痛 ← <strong>BMSはここ</strong></li>
          </ol>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">8-1. 非歯原性歯痛との関係</h4>
          <p className="text-sm font-bold text-rose-700">「歯が痛い」＝「歯が原因」とは限らない。</p>
          <p className="text-sm">非歯原性歯痛（NOT：Non-Odontogenic Toothache）の主な原因：</p>
          <ul className="list-disc pl-6 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <li>筋筋膜性疼痛</li>
            <li>三叉神経痛</li>
            <li>外傷後三叉神経ニューロパチー（PTTN）</li>
            <li>帯状疱疹後神経痛</li>
            <li>片頭痛関連歯痛</li>
            <li>群発頭痛関連歯痛</li>
            <li>上顎洞疾患</li>
            <li>心臓疾患関連痛（虚血性心疾患）</li>
            <li>持続性特発性歯痛（PIDAP）</li>
            <li>BMS関連の口腔異常感</li>
          </ul>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">8-2. 筋筋膜性疼痛は歯痛に「見える」</h4>
          <p className="text-sm">咬筋・側頭筋のトリガーポイントは歯に関連痛を飛ばします。</p>
          <div className="overflow-x-auto">
            <table className="text-sm w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr><th className="border px-2 py-1">トリガー筋</th><th className="border px-2 py-1">関連痛の場所</th></tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">咬筋上部</td><td className="border px-2 py-1">上顎臼歯部</td></tr>
                <tr><td className="border px-2 py-1">咬筋下部</td><td className="border px-2 py-1">下顎臼歯部</td></tr>
                <tr><td className="border px-2 py-1">側頭筋前部</td><td className="border px-2 py-1">上顎前歯部</td></tr>
                <tr><td className="border px-2 py-1">胸鎖乳突筋</td><td className="border px-2 py-1">顔面・眼窩周囲・肩・腕</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded text-sm">
            <strong>臨床原則：</strong>問診票の「痛みの場所」は最も信用してはいけない。<strong>痛みの場所と発生源は一致しない</strong>からである。
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">8-3. 診断的局所麻酔と触診</h4>
          <p className="text-sm">
            歯が原因なら歯肉・歯髄周囲への麻酔で痛みが消える。咬筋トリガーポイントが原因なら筋触診で関連痛が再現する。
            <strong>口腔内診査／X線・CBCT／打診／冷温診／診断的局所麻酔／咀嚼筋触診／脳神経検査／感覚検査／頭痛診断／心疾患・上顎洞疾患の除外</strong>を組み合わせる。
          </p>
        </div>
      ),
    },

    /* 9 ───────────────────────────────────────── */
    {
      id: 'es-tn-pttn-bms',
      title: '9. 三叉神経痛・PTTN・BMSの違い',
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="text-sm w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="border px-2 py-1">特徴</th>
                  <th className="border px-2 py-1">三叉神経痛</th>
                  <th className="border px-2 py-1">PTTN</th>
                  <th className="border px-2 py-1">BMS</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm">
                <tr><td className="border px-2 py-1 font-bold">持続時間</td><td className="border px-2 py-1">数秒〜2分の発作</td><td className="border px-2 py-1">3か月以上の持続痛</td><td className="border px-2 py-1">持続性灼熱感</td></tr>
                <tr><td className="border px-2 py-1 font-bold">性質</td><td className="border px-2 py-1">電撃様</td><td className="border px-2 py-1">焼ける／しびれ／アロディニア</td><td className="border px-2 py-1">ヒリヒリ／灼熱感</td></tr>
                <tr><td className="border px-2 py-1 font-bold">発作間</td><td className="border px-2 py-1">無痛</td><td className="border px-2 py-1">持続</td><td className="border px-2 py-1">持続（食事中軽減）</td></tr>
                <tr><td className="border px-2 py-1 font-bold">トリガー</td><td className="border px-2 py-1">洗顔・髭剃り・歯磨き</td><td className="border px-2 py-1">触覚で増悪</td><td className="border px-2 py-1">なし</td></tr>
                <tr><td className="border px-2 py-1 font-bold">外傷歴</td><td className="border px-2 py-1">なし</td><td className="border px-2 py-1">あり（抜歯・インプラント等）</td><td className="border px-2 py-1">なし</td></tr>
                <tr><td className="border px-2 py-1 font-bold">分布</td><td className="border px-2 py-1">片側性・神経支配領域</td><td className="border px-2 py-1">神経支配領域に一致</td><td className="border px-2 py-1">両側性または広範囲が多い</td></tr>
                <tr><td className="border px-2 py-1 font-bold">感覚障害</td><td className="border px-2 py-1">通常なし</td><td className="border px-2 py-1">あり（しびれ・鈍麻）</td><td className="border px-2 py-1">味覚異常を伴うことあり</td></tr>
                <tr><td className="border px-2 py-1 font-bold">第一選択薬</td><td className="border px-2 py-1">カルバマゼピン</td><td className="border px-2 py-1">TCA／ガバペンチノイド／局所薬</td><td className="border px-2 py-1">サブタイプ別</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            <strong>PTTN（外傷後三叉神経ニューロパチー）</strong>は抜歯・インプラント・根管治療・矯正抜歯・神経ブロック後などに発症し、
            <strong>3〜6か月以内の早期介入</strong>が予後を左右します（Dr. Kyle Brown / Harvard Pain Rounds）。
          </p>
        </div>
      ),
    },

    /* 10 ───────────────────────────────────────── */
    {
      id: 'es-chronic-mgmt',
      title: '10. 慢性痛マネジメント ── 完全除痛より機能回復',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded">
            <p className="font-bold text-indigo-900">慢性痛診療最大の発想転換：痛みをゼロにすることだけを目標にしない。</p>
          </div>
          <p className="text-sm">国際的な慢性痛治療の現実的目標：</p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>痛みを<strong>30%改善</strong></li>
            <li>身体活動を<strong>70%回復</strong></li>
            <li>できなくなった活動を<strong>50%回復</strong></li>
          </ul>
          <p className="text-sm">
            完全除痛に固執すると、<strong>破局的思考の悪化／医療者の焦り／不要な処置の連鎖（抜歯・根管治療・再手術）／さらなる慢性化</strong>を招きます。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">10-1. 病態説明そのものが治療になる</h4>
          <p className="text-sm">長期慢性口腔痛の患者は、しばしば次のように考えています：</p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>何か重大な病気が隠れているのでは</li>
            <li>歯科医が見逃しているのでは</li>
            <li>舌癌ではないか</li>
            <li>神経が壊れて一生治らないのでは</li>
            <li>この痛みは誰にも理解されない</li>
          </ul>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded text-sm">
            ここで専門医が
            <strong>「検査で危険な病気は否定的です。ただし痛みは本物です。これは神経系が過敏になっている状態で、治療の対象になります」</strong>
            と説明することそのものが、患者の恐怖・注意集中・破局的思考を下げ、痛みを軽減させる<strong>治療的介入</strong>になります。
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">10-2. 慢性痛の負のスパイラル</h4>
          <div className="bg-rose-50 border border-rose-200 p-4 rounded text-sm">
            <p className="text-center font-medium">
              痛い → 不安 → 痛みに注意集中 → さらに痛む → 動かなくなる<br/>
              → 睡眠悪化 → 気分低下 → 筋緊張増加 → さらに痛む
            </p>
            <p className="text-center text-xs mt-2 text-rose-700">治療はこのスパイラルを<strong>複数箇所で同時に</strong>切る必要がある。</p>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">10-3. 統合的8ステップ</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border p-3 rounded"><strong>① ラポール形成</strong><br/>遮らず聞く。解釈モデルを理解する。</div>
            <div className="bg-white border p-3 rounded"><strong>② 病態説明</strong><br/>神経過敏・中枢感作・痛みの記憶を平易に。</div>
            <div className="bg-white border p-3 rounded"><strong>③ 薬物療法</strong><br/>TCA／SNRI／ガバペンチノイド／局所薬を病態別に。</div>
            <div className="bg-white border p-3 rounded"><strong>④ 睡眠改善</strong><br/>疼痛抑制・抗炎症・組織修復に直結。</div>
            <div className="bg-white border p-3 rounded"><strong>⑤ 運動療法</strong><br/>運動誘発性疼痛抑制（散歩でもよい）。</div>
            <div className="bg-white border p-3 rounded"><strong>⑥ 筋肉マネジメント</strong><br/>咬筋・側頭筋・胸鎖乳突筋・僧帽筋。</div>
            <div className="bg-white border p-3 rounded"><strong>⑦ 認知行動療法的関わり</strong><br/>破局的思考・回避行動・過剰監視の修正。</div>
            <div className="bg-white border p-3 rounded"><strong>⑧ 不要な歯科処置を避ける</strong><br/>原因が歯にない場合、抜歯・再根管は悪化させる。</div>
          </div>
        </div>
      ),
    },

    /* 11 ───────────────────────────────────────── */
    {
      id: 'es-rx-principles',
      title: '11. 薬物療法の臨床原則',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">11-1. 慢性痛薬は2週間で判定しない</h4>
          <p className="text-sm">Dr. Glenn Clarkの講義で重要だったのは：</p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <p className="font-bold text-amber-900">副作用は早く出るが、効果は遅れて出る。</p>
          </div>
          <p className="text-sm">
            TCA／SNRI／ガバペンチノイドなど神経抑制薬は、飲み始めに<strong>眠気・めまい・ぼーっと感・口渇・ふらつき</strong>が先に出ます。
            一方、神経系のリモデリング・過敏性低下には<strong>数週間〜数か月</strong>かかります。
            「2週間で効かないから失敗」と判断してはいけません。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">11-2. NNTとNNHを天秤にかける</h4>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><strong>NNT</strong>：何人治療すれば1人が利益を得るか</li>
            <li><strong>NNH</strong>：何人治療すれば1人に害が出るか</li>
          </ul>
          <p className="text-sm">
            口腔顔面痛・神経障害性疼痛領域では多くの薬で<strong>NNTとNNHが近接</strong>します。「効く可能性と副作用リスクが常に隣り合わせ」。
            患者の年齢／転倒リスク／併用薬／肝腎機能／心疾患／睡眠／口腔乾燥／生活背景／治療目標を踏まえて選択します。
          </p>
          <div className="overflow-x-auto">
            <table className="text-xs w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr><th className="border px-2 py-1">薬剤</th><th className="border px-2 py-1">NNT</th><th className="border px-2 py-1">NNH</th></tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">TCA（アミトリプチリン）</td><td className="border px-2 py-1">3.6</td><td className="border px-2 py-1">13.4</td></tr>
                <tr><td className="border px-2 py-1">SNRI（デュロキセチン等）</td><td className="border px-2 py-1">6.4</td><td className="border px-2 py-1">11.8</td></tr>
                <tr><td className="border px-2 py-1">ガバペンチン</td><td className="border px-2 py-1">7.2</td><td className="border px-2 py-1">25.6</td></tr>
                <tr><td className="border px-2 py-1">プレガバリン</td><td className="border px-2 py-1">7.7</td><td className="border px-2 py-1">13.9</td></tr>
                <tr><td className="border px-2 py-1">カルバマゼピン（三叉神経痛）</td><td className="border px-2 py-1">≈1.7</td><td className="border px-2 py-1">3.4</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">11-3. CYP多型と薬理遺伝学（Pasternak講義）</h4>
          <p className="text-sm">同じ用量でも血中濃度は人によって大きく異なります。とくに<strong>CYP2D6・CYP2C19</strong>の多型が重要。</p>
          <div className="overflow-x-auto">
            <table className="text-xs w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr><th className="border px-2 py-1">薬剤</th><th className="border px-2 py-1">主要遺伝子</th><th className="border px-2 py-1">臨床的含意</th></tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">NSAIDs（セレコキシブ等）</td><td className="border px-2 py-1">CYP2C9</td><td className="border px-2 py-1">PM/IMで減量、出血リスク↑</td></tr>
                <tr><td className="border px-2 py-1">コデイン・トラマドール</td><td className="border px-2 py-1">CYP2D6</td><td className="border px-2 py-1">UMで呼吸抑制、PMで無効</td></tr>
                <tr><td className="border px-2 py-1">三環系（TCA）</td><td className="border px-2 py-1">CYP2D6, CYP2C19</td><td className="border px-2 py-1">代謝速度別に25–50%減量</td></tr>
                <tr><td className="border px-2 py-1">ベンラファキシン</td><td className="border px-2 py-1">CYP2D6</td><td className="border px-2 py-1">PMで活性代謝物↓、UMで副作用↑</td></tr>
                <tr><td className="border px-2 py-1">カルバマゼピン</td><td className="border px-2 py-1">HLA-B*15:02, HLA-A*31:01</td><td className="border px-2 py-1">SJS/TENリスク激増（アジア系で投与前検査強推奨）</td></tr>
                <tr><td className="border px-2 py-1">フェニトイン</td><td className="border px-2 py-1">CYP2C9, HLA-B*15:02</td><td className="border px-2 py-1">代謝低下＋重症皮疹リスク</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2">
            <strong>Pasternak先生のメッセージ：</strong>薬理遺伝学は「投与禁忌のスクリーニング」ではなく「<strong>用量と薬剤選択の最適化ツール</strong>」。
            副作用が極端に強く出た／効かない患者では<strong>先に検査を考える</strong>。
          </p>
        </div>
      ),
    },

    /* 12 ───────────────────────────────────────── */
    {
      id: 'es-botox',
      title: '12. Botox・ブラキシズム・SSRI/SNRIの問題',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>Dr. Clarkの講義で興味深かったのが、Botoxへの批判的視点です。</p>
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded text-sm">
            <p className="font-bold text-rose-900 mb-1">Botoxは万能ではない</p>
            <p>
              Botoxは最大咬合力を落としますが、<strong>睡眠時ブラキシズムや低レベルの持続的クレンチング</strong>を十分抑えるとは限りません。
              さらに主観的改善はプラセボ効果や盲検不成立の影響を受けます──200単位投与されれば、患者は顔の動きの変化で<strong>自分が実薬群だと気づく</strong>可能性があります。
            </p>
            <p className="mt-2 font-medium">
              → Botoxは<strong>筋力低下薬</strong>であって、<strong>中枢の運動亢進や疼痛処理異常を根本的に抑える薬ではない</strong>。
            </p>
          </div>
          <p className="text-sm">
            一方で、SSRI/SNRIや覚醒剤が<strong>アカシジア／クレンチング／ブラキシズム／顎顔面筋緊張</strong>を誘発することもあります。
            口腔顔面痛診療では<strong>服薬歴の時系列確認</strong>が極めて重要です。
            「痛みが始まった時期」と「精神科薬の開始・増量時期」を必ず突き合わせます。
          </p>
        </div>
      ),
    },

    /* 13 ───────────────────────────────────────── */
    {
      id: 'es-evidence-quality',
      title: '13. エビデンスの読み方 ── 撤回論文・Paper mill・数字の罠',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>2026年4月29日のHarvard Pain Roundsで、Dr. Michael Ferraro と Prof. Neil O'Connell が論文撤回問題を講演しました。</p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <p className="font-bold text-amber-900">論文に書いてあるから正しい、とは限らない。</p>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">13-1. Retractionは文献を訂正する仕組み</h4>
          <p className="text-sm">
            撤回は著者を罰する制度ではなく、信頼できない文献を科学記録から訂正する仕組みです。
            疼痛分野でも撤回論文は少なくありません。しかも撤回後も<strong>システマティックレビューやガイドラインに引用され続けている</strong>例が多数（cite-after-retraction現象）。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">13-2. Paper millとAIの脅威</h4>
          <p className="text-sm">
            現代では<strong>論文工場（paper mill）やAI</strong>によって、実施していない研究・捏造データ・画像加工が大量に流通するリスクがあります。
            疼痛医学、特に前臨床・機序研究はこの影響を受けやすい領域です。
          </p>
          <p className="text-sm">
            BMSのようにエビデンスが限られる疾患では、
            <strong>症例数／ランダム化／盲検化／アウトカム／絶対効果／脱落率／COI／撤回情報／再現性</strong>を厳しく見る必要があります。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">13-3. 意見記事はエビデンスではない</h4>
          <p className="text-sm">
            Editorial、Opinion、Perspective、Narrative reviewは重要な示唆を与えることがありますが、
            厳密には<strong>エビデンスそのものではなく、専門家意見</strong>に近いものです。
          </p>
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded text-sm">
            <p className="font-bold text-rose-900 mb-1">Q&Aで強調された3つの言葉</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>「<strong>画像偽造は炭鉱のカナリア</strong>」（より大きなデータ捏造の前兆）</li>
              <li>「<strong>意見記事は所詮意見記事、エビデンスではない</strong>」</li>
              <li>「<strong>帰属なき引用は学術の根本犯罪</strong>」</li>
            </ul>
          </div>
          <p className="text-sm">
            これはBMS治療論にも直結します。「有名な先生が言った」だけでは不十分で、<strong>研究の質と臨床的妥当性</strong>を見極めなければなりません。
            臨床家は<strong>Retraction Watch・PubPeer</strong>などで撤回履歴を確認する習慣を持つべきです。
          </p>
        </div>
      ),
    },

    /* 14 ───────────────────────────────────────── */
    {
      id: 'es-bms-workflow',
      title: '14. BMS診療の実践フロー（5ステップ）',
      content: (
        <div className="space-y-5 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          {/* Step 1 */}
          <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-lg">
            <h5 className="font-bold text-indigo-900 mb-2">Step 1：二次性の原因を除外する</h5>
            <p className="text-sm mb-2">BMSに似た症状を起こす疾患を除外します（除外できないと「一次性BMS」と診断できない）。</p>
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <ul className="list-disc pl-5">
                <li>カンジダ症</li>
                <li>口腔扁平苔癬</li>
                <li>口内炎・舌炎</li>
                <li>口腔乾燥症・シェーグレン症候群</li>
                <li>糖尿病</li>
                <li>亜鉛・鉄・ビタミンB12欠乏</li>
                <li>薬剤性口腔乾燥</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>アレルギー</li>
                <li>義歯不適合</li>
                <li>口腔悪習癖</li>
                <li>逆流性食道炎</li>
                <li>神経障害性疼痛・三叉神経痛・PTTN</li>
                <li>頭痛関連痛</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-lg">
            <h5 className="font-bold text-indigo-900 mb-2">Step 2：痛みの性質を分類する</h5>
            <ul className="text-sm list-disc pl-5 space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <li>表在性ヒリヒリか／電撃様か</li>
              <li>持続性か発作性か</li>
              <li>食事で軽くなるか</li>
              <li>触れると痛いか</li>
              <li>感覚鈍麻があるか</li>
              <li>味覚異常があるか</li>
              <li>口渇感があるか</li>
              <li>片側性か両側性か</li>
              <li>神経支配領域に一致するか</li>
              <li>筋触診で再現するか</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-lg">
            <h5 className="font-bold text-indigo-900 mb-2">Step 3：BMSのサブタイプを推定する</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-rose-50 border border-rose-200 p-3 rounded">
                <strong className="text-rose-900">末梢優位</strong><br/>局所灼熱感／TRPV1／表在性過敏／局所治療反応性
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                <strong className="text-amber-900">三叉神経系優位</strong><br/>味覚異常／知覚異常／神経支配領域／神経障害性特徴
              </div>
              <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                <strong className="text-purple-900">中枢・痛覚変調優位</strong><br/>長期化／広範囲／ストレス増悪／睡眠障害／食事中軽減／局所治療不応
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-lg">
            <h5 className="font-bold text-indigo-900 mb-2">Step 4：治療目標を共有する</h5>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>完全除痛だけを目指さない</li>
              <li>30%改善でも意味がある</li>
              <li>食事・会話・睡眠・外出を回復させる</li>
              <li>神経過敏は時間をかけて下げる</li>
              <li>薬は数週間〜数か月で評価する</li>
              <li>不要な歯科処置は避ける</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-lg">
            <h5 className="font-bold text-indigo-900 mb-2">Step 5：多面的治療を組み合わせる</h5>
            <p className="text-sm">
              病態説明／局所薬／神経調整薬／睡眠改善／運動／筋肉管理／ストレス対策／認知行動療法的介入／口腔内ステント／専門医連携を統合する。
            </p>
          </div>
        </div>
      ),
    },

    /* 15 ───────────────────────────────────────── */
    {
      id: 'es-patient-talk',
      title: '15. 患者さんへの一言説明（テンプレート）',
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>BMSを患者さんに説明するなら、次のような表現が有用です。</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded text-sm leading-loose">
            「舌に大きな傷や癌がある痛みではなさそうです。<br/>
            しかし<strong>痛みは本物</strong>です。<br/>
            長く続く痛みによって、舌や三叉神経、脳の痛みを感じるシステムが<strong>敏感になっている状態</strong>です。<br/>
            そのため、舌そのものだけでなく、<strong>神経の過敏さ・睡眠・ストレス・筋肉・脳の痛み抑制システムを一緒に整える治療</strong>が必要です。」
          </div>
          <p className="text-sm">
            この説明は、患者の<strong>「異常なし＝気のせい」という誤解を防ぎ</strong>、医療への信頼と治療意欲を引き出します。
          </p>
        </div>
      ),
    },

    /* 16 ───────────────────────────────────────── */
    {
      id: 'es-takehome',
      title: '16. 核心的テイクホーム・メッセージ（12項目）',
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed bg-indigo-50 p-6 rounded-xl border border-indigo-200">
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>BMSは舌だけの病気ではない。</strong>末梢神経・三叉神経・中枢神経・ホルモン・情動・睡眠・ストレスが関与する慢性口腔顔面痛である。</li>
            <li><strong>BMSは神経障害性疼痛だけでは説明しきれない。</strong>痛覚変調性疼痛（nociplastic pain）の視点が重要になっている。</li>
            <li><strong>女性に多い背景には、TRPV1・エストロゲン・プロラクチン・脳内ネットワーク・更年期変化が関与する。</strong></li>
            <li><strong>クロナゼパムは有効な症例があるが、万能薬ではない。</strong>統計的有意差と臨床的満足は異なる。</li>
            <li><strong>BMSには少なくとも3タイプある。</strong>末梢小径線維障害型／三叉神経系異常型／中枢痛覚変調型。</li>
            <li><strong>次世代治療の鍵はNMDA受容体とドパミンD2受容体かもしれない。</strong></li>
            <li><strong>非歯原性歯痛の理解なしにBMSは診られない。</strong>筋筋膜性疼痛・三叉神経痛・PTTN・頭痛関連痛との鑑別が必須。</li>
            <li><strong>問診票の「痛い場所」を鵜呑みにしてはいけない。</strong>関連痛では痛みの場所と原因部位が違う。</li>
            <li><strong>慢性痛治療のゴールは完全除痛ではなく機能回復である。</strong></li>
            <li><strong>正しい病態説明そのものが治療になる。</strong></li>
            <li><strong>薬は早期副作用・後期効果を説明したうえで、数か月単位で評価する。</strong></li>
            <li><strong>研究エビデンスは批判的に読む必要がある。</strong>撤回論文／paper mill／AI生成論文／相対リスクの誇張／意見記事の過大評価に注意。</li>
          </ol>

          <div className="bg-white/80 p-4 rounded border border-indigo-100 mt-4">
            <p className="font-bold text-indigo-900 mb-2">最終結論</p>
            <p className="text-sm leading-loose">
              バーニングマウス症候群は、かつてのように「原因不明の舌の痛み」とだけ捉える時代から、
              <strong>慢性口腔顔面痛・神経科学・中枢感作・ホルモン・情動ネットワーク・薬理学を横断する疾患群</strong>として理解する時代に入っています。
              治療も、単一薬剤で解決する発想では不十分です。これからのBMS診療では、
              <strong>正確な鑑別診断／痛みの機序分類／患者への病態説明／局所治療と中枢治療の使い分け／機能回復を目標とした慢性痛マネジメント</strong>
              が中核になります。
            </p>
          </div>

          <p className="text-xs text-indigo-900 mt-4 bg-white/70 p-3 rounded border border-indigo-100">
            ※繰り返しになりますが、本ページは公開・非公開の専門医講義をAIで要約したもので、本作成者のメモが含まれます。
            記載ミスや講師の意見の偏りが含まれる可能性があるため、実際の診療判断は最新ガイドラインと主治医の助言に基づいて行ってください。
          </p>
        </div>
      ),
    },
  ],
};
