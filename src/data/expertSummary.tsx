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
          <p className="text-sm text-amber-900 bg-white/70 p-3 rounded border border-amber-200">
            以下では、「予備室（パスワード）」に収載した専門家会議および各種講義（有名な先生の講義／Glenn Clark／Amy Pasternak／村岡渡先生／論文撤回セミナー）を横断的に整理し、口腔顔面痛（OFP）の臨床像・病態生理・薬物療法・エビデンスの読み方までを一通り解説します。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-overview',
      title: '1. 口腔顔面痛（OFP）の全体像',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">
            1-1. OFPという領域の成り立ち
          </h4>
          <p>
            口腔顔面痛（Orofacial Pain：OFP）は、歯・歯周組織・顎関節・咀嚼筋・口腔粘膜・三叉神経領域に生じる痛みの総称です。米国では2020年にAmerican Dental Association（ADA）が、Oral Medicineと並んでOrofacial Painを正式な歯科専門領域として認定し、Orofacial Pain専門医（Diplomate）の制度が整備されました。日本でも日本口腔顔面痛学会（JSOP）、アジア口腔顔面痛学会（AAOOFP）、米国口腔顔面痛学会（AAOP）と、同心円状に学術活動が広がっています。
          </p>
          <p>
            OFPは「歯科の延長」ではなく、頭痛・神経内科・精神科・薬理学・心理社会的アプローチが交差する学際領域です。村岡渡先生・Glenn Clark先生はいずれも、「<strong>上から下（疾患→症状）</strong>」と「<strong>下から上（症状→疾患）</strong>」の双方向で患者を診る訓練が必須であると強調しています。

          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-6">
            1-2. ICOP（2020）の6分類
          </h4>
          <p>国際口腔顔面痛分類（ICOP, 2020）は、OFPを以下の6カテゴリーに整理しています。</p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>歯および歯周組織由来の痛み</li>
            <li>口腔粘膜・唾液腺・顎骨由来の痛み</li>
            <li>咀嚼筋由来の痛み（Myofascial Orofacial Pain）</li>
            <li>顎関節由来の痛み（TMJ Pain）</li>
            <li>頭蓋神経損傷／病態に起因する口腔顔面神経障害性疼痛</li>
            <li>特発性口腔顔面痛（Idiopathic Orofacial Pain：BMS、PIFP、PIDAPなど）</li>
          </ol>
          <p className="text-sm">
            BMS（口腔灼熱痛症候群）と非歯原性歯痛（NOT：Non-Odontogenic Toothache）はカテゴリー6に位置づけられ、画像・血液検査では異常が見出せない「機能性疾患」群として扱われます。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-pain-mechanisms',
      title: '2. 痛みの3メカニズム ── IASP 2020改定の核心',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            国際疼痛学会（IASP）は2020年、約40年ぶりに「痛み」の定義を改定し、「Pain is an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage（実際の組織損傷と<strong>類似した</strong>不快な感覚・情動体験）」としました。この「resembling that associated with」が新たに加わり、組織損傷がなくても痛みは存在しうることが明文化されました。
          </p>
          <p>これに伴い、痛みは病態生理学的に3分類されます（K先生・村岡先生・Clark先生の解説より）。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h5 className="font-bold text-blue-900 mb-1">侵害受容性疼痛<br/>Nociceptive Pain</h5>
              <p className="text-xs">侵害受容器が興奮し、神経機構の<strong>正常な機能</strong>として痛みが生じる。打撲・炎症・歯髄炎・筋筋膜痛などが典型。</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg">
              <h5 className="font-bold text-rose-900 mb-1">神経障害性疼痛<br/>Neuropathic Pain</h5>
              <p className="text-xs">体性神経系の病変により、神経が<strong>異常活動</strong>を生じて脳に痛み信号を送る。三叉神経痛・帯状疱疹後神経痛・PTTN・下歯槽神経麻痺後の痛みなど。</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <h5 className="font-bold text-purple-900 mb-1">痛覚変調性疼痛<br/>Nociplastic Pain</h5>
              <p className="text-xs">上記2つでは説明できない痛み。痛覚処理機構の<strong>可塑的変化</strong>が想定される。線維筋痛症・過敏性腸症候群・BMS・PIFPなどが代表的とされる。</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
            <p className="font-bold text-yellow-900 mb-1">K先生の厳密な定義（予備室1より）</p>
            <p>
              「痛覚変調性疼痛の代表的疾患」という言い回しは不正確で、正しくは「<strong>もしその患者が痛みを訴えるなら、痛覚変調性疼痛の機序で生じていると考えるのが最も妥当な疾患</strong>」と表現すべきです。診断は機序からの推論であり、ラベルから症例を演繹してはいけません。
            </p>
          </div>
          <p className="text-sm">
            なお、AAOP 2023年ガイドラインはBMSを「神経障害性疼痛」に分類しますが、Svensson教授（デンマーク）ら欧州学派は「<strong>慢性一次性口腔痛は痛覚変調性疼痛である可能性</strong>」を提唱しており、国際的にも見解は一致していません。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-tooth-vs-not',
      title: '3. 歯原性歯痛 vs 非歯原性歯痛（NOT）の鑑別',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            「歯が痛い」と訴える患者の中には、歯そのものに原因がない症例が一定数存在します。これらは <strong>非歯原性歯痛（Non-Odontogenic Toothache：NOT）</strong> と呼ばれ、村岡先生によれば臨床で見逃されやすい代表は以下の8類型です。
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>筋筋膜性歯痛（咬筋・側頭筋からの関連痛）</li>
            <li>神経障害性歯痛（三叉神経痛、PTTN、帯状疱疹後神経痛）</li>
            <li>神経血管性歯痛（片頭痛・群発頭痛の歯への投射）</li>
            <li>上顎洞性歯痛</li>
            <li>心臓性歯痛（虚血性心疾患）</li>
            <li>精神疾患による歯痛</li>
            <li>特発性歯痛（PIDAP：Persistent Idiopathic Dentoalveolar Pain）</li>
            <li>その他（薬剤性、頭頸部腫瘍など）</li>
          </ul>
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded">
            <p className="text-sm">
              村岡先生の症例1（右下6番痛）では、抜髄・抜歯・インプラント・再手術を繰り返しても痛みが消えず、最終的にPIDAPと診断。鑑別の基本は「<strong>歯科処置で改善しない歯痛は、まず歯以外を疑う</strong>」「<strong>麻酔で消えない痛み・処置のたびに悪化する痛みは赤旗</strong>」というシンプルな原則です。
            </p>
          </div>
          <p className="text-sm">
            Clark先生は、「侵害受容性（炎症・う蝕・歯髄炎）の特徴は<strong>冷温刺激・打診で再現できる局所痛</strong>、神経障害性は<strong>電撃様・持続性・しびれ感を伴う</strong>、痛覚変調性は<strong>刺激と痛みの強度・分布が乖離する</strong>」と整理しています。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-tn-pttn',
      title: '4. 三叉神経痛・PTTN・帯状疱疹後神経痛',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">4-1. 古典的三叉神経痛（Classical TN）</h4>
          <p className="text-sm">
            ICHD-3／ICOPの診断基準では、<strong>(a) 数秒〜2分以内の電撃様発作痛</strong>、<strong>(b) 軽い触刺激（洗顔・髭剃り・歯磨き・会話）で誘発</strong>、<strong>(c) 三叉神経分布領域に限局</strong>、<strong>(d) 神経学的所見が正常</strong>、の4要件が必須です。MRIで上小脳動脈などによる神経血管圧迫が確認されれば「Classical」、原因不明なら「Idiopathic」、明らかな病変があれば「Secondary」と分類します。
          </p>
          <p className="text-sm">
            第一選択薬は <strong>カルバマゼピン（CBZ）</strong> またはオクスカルバゼピン。NNT≈1.7〜2.0と神経障害性疼痛では群を抜いて高い有効性を示しますが、低Na血症・薬疹・骨髄抑制の副作用に注意が必要です。薬物無効例では微小血管減圧術（Janetta法）やガンマナイフが選択肢になります。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">4-2. 外傷後三叉神経神経障害（PTTN）</h4>
          <p className="text-sm">
            Harvard Pain Roundsで Dr. Kyle Brown が解説した PTTN（Post-Traumatic Trigeminal Neuropathy）は、抜歯・インプラント・根管治療・矯正抜歯・神経ブロック後などに発症する神経障害性疼痛で、しびれ・dysesthesia・自発痛・誘発痛が混在します。発症から<strong>3〜6か月以内の早期介入</strong>が予後を左右し、アミトリプチリン25–75 mg、ガバペンチン900–3600 mg/日、プレガバリン150–600 mg/日、デュロキセチン60–120 mg/日が中心となります。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">4-3. 帯状疱疹・ラムゼイ・ハント症候群</h4>
          <p className="text-sm">
            三叉神経第1枝（眼神経）領域での帯状疱疹は失明リスクがあり、皮疹出現後72時間以内のバラシクロビル/ファムシクロビル投与が標準。耳介帯状疱疹に顔面神経麻痺・難聴・めまいを伴うラムゼイ・ハント症候群では、抗ウイルス薬＋ステロイドを早期に開始します。帯状疱疹後神経痛（PHN）は神経障害性疼痛として、TCA・ガバペンチノイド・SNRIで管理します。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-bms',
      title: '5. BMS（口腔灼熱痛症候群）の病態生理',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">5-1. Jääskeläinenによる3サブクラス</h4>
          <p className="text-sm">
            フィンランドの神経生理学者 Satu K. Jääskeläinen は、原発性BMSを以下の3サブタイプに分類しました（2012, 2017, 2018）。これは現在も世界の標準的フレームワークです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-rose-50 border border-rose-200 p-4 rounded">
              <h5 className="font-bold text-rose-900 mb-1">(i) 末梢小径神経障害</h5>
              <p className="text-xs">舌生検で表皮内神経線維密度（IENFD）が低下。末梢にTRPV1が強発現。<strong>カプサイシン局所、クロナゼパム含嗽</strong>に反応しやすい。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded">
              <h5 className="font-bold text-amber-900 mb-1">(ii) 潜在性主要三叉神経障害</h5>
              <p className="text-xs">瞬目反射などの神経生理学的検査でのみ異常が検出される。鼓索神経の機能不全により舌神経の脱抑制が生じている可能性。<strong>カルバマゼピン</strong>などNaチャネルブロッカーが候補。</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded">
              <h5 className="font-bold text-purple-900 mb-1">(iii) 中枢性（ドパミン作動性トップダウン抑制の欠陥）</h5>
              <p className="text-xs">PETで線条体ドパミンD2機能不全、脳幹反射の慣れの欠如。<strong>三環系抗うつ薬・SNRI・プレガバリン</strong>、近年は<strong>アリピプラゾール</strong>少量併用が議論されている。</p>
            </div>
          </div>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">5-2. 圧倒的な性差（女性 8〜9：男性 1〜2）</h4>
          <p className="text-sm">
            予備室1のWk先生の解説では、性差の分子メカニズムは以下の通りです。
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><strong>古典的ゲノム経路：</strong>エストロゲン → ER α/β → TRPV1遺伝子発現↑</li>
            <li><strong>非ゲノム経路：</strong>細胞質エストロゲン受容体 → TRPV1プロモーター活性化</li>
            <li><strong>プロラクチン受容体は雌のDRG/TG神経細胞のみに発現</strong>（Stratton 2024）：分泌で雌のみTRPV1が増産される</li>
            <li><strong>脳ネットワークの性差：</strong>慢性OFP女性では前帯状皮質・内側前頭前皮質・基底核・視床・扁桃体の機能的接続性が亢進（Kurokawa 2021, Xu 2024）</li>
          </ul>
          <p className="text-sm">
            一方、罹患のピークは更年期以降（40代後半〜60代）で、ホルモン量がピークの若年層より高い。Wk先生は「ホルモンだけでは説明できず、<strong>心理社会的要因（独居・配偶者死別・役割喪失）</strong>の関与が大きい」と指摘しています。
          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">5-3. 未来の治療標的：NMDA / D2受容体</h4>
          <p className="text-sm">
            Ng先生の総説（2025）は、感覚伝達系（TRPV1・P2X3・CB2）よりも<strong>中枢疼痛処理</strong>のモジュレーションが鍵であり、「<strong>NMDA受容体の過活動を抑制し、D2受容体機能低下を補う</strong>」戦略が次世代治療の中心になると結論しました。日本のリアルワールドデータでは、アミトリプチリン単剤＋アリピプラゾール少量増強の継続率がMUOS（医学的に説明のつかない口腔症状）で良好と報告されています。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-pharma',
      title: '6. 薬物療法の総論 ── NNT・NNH・薬理遺伝学',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded">6-1. 神経障害性疼痛のNNT</h4>
          <p className="text-sm">
            NNT（Number Needed to Treat：50%以上の疼痛緩和に必要な治療人数）は薬の臨床的価値を示す指標です。Finnerup（2015）のメタ解析では、神経障害性疼痛全体で：
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>三環系抗うつ薬（TCA・アミトリプチリン）：NNT 3.6（ただしNNH 13.4）</li>
            <li>SNRI（デュロキセチン・ベンラファキシン）：NNT 6.4</li>
            <li>ガバペンチン：NNT 7.2、プレガバリン：NNT 7.7</li>
            <li>オピオイド（強）：NNT 4.3 だが推奨度は低（依存・痛覚過敏）</li>
            <li>カルバマゼピン（三叉神経痛）：NNT ≈ 1.7</li>
          </ul>
          <p className="text-sm">
            Clark先生は「<strong>第一選択はTCA・SNRI・ガバペンチノイド</strong>、第二選択でリドカインパッチ・カプサイシン、第三選択にトラマドール、最終手段にオピオイド」というIASP/EFNS共通アルゴリズムを提示しました。

          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">6-2. 薬理遺伝学（Pasternak講義より）</h4>
          <p className="text-sm">
            Amy Pasternak, PharmD（ミシガン大学）は、CPIC（Clinical Pharmacogenetics Implementation Consortium）ガイドラインに基づき、痛み治療で重要な遺伝子を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="text-xs w-full border border-gray-300">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="border px-2 py-1">薬剤クラス</th>
                  <th className="border px-2 py-1">主要遺伝子</th>
                  <th className="border px-2 py-1">臨床的含意</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">NSAIDs</td><td className="border px-2 py-1">CYP2C9</td><td className="border px-2 py-1">PM/IMはセレコキシブ・イブプロフェン減量、出血リスク↑</td></tr>
                <tr><td className="border px-2 py-1">コデイン・トラマドール</td><td className="border px-2 py-1">CYP2D6</td><td className="border px-2 py-1">UMで呼吸抑制、PMで無効。代替薬を選択</td></tr>
                <tr><td className="border px-2 py-1">三環系抗うつ薬</td><td className="border px-2 py-1">CYP2D6, CYP2C19</td><td className="border px-2 py-1">代謝速度に応じて25〜50%減量／代替を検討</td></tr>
                <tr><td className="border px-2 py-1">ベンラファキシン</td><td className="border px-2 py-1">CYP2D6</td><td className="border px-2 py-1">PMで活性代謝物↓、UMで副作用↑</td></tr>
                <tr><td className="border px-2 py-1">カルバマゼピン・オクスカルバゼピン</td><td className="border px-2 py-1">HLA-B*15:02, HLA-A*31:01</td><td className="border px-2 py-1">SJS/TENリスク激増。アジア系で投与前検査強く推奨</td></tr>
                <tr><td className="border px-2 py-1">フェニトイン</td><td className="border px-2 py-1">CYP2C9, HLA-B*15:02</td><td className="border px-2 py-1">代謝低下と重症皮疹リスクの両側</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2">
            Pasternak先生のメッセージは「<strong>薬理遺伝学は『投与禁忌のスクリーニング』ではなく『用量と薬剤選択の最適化ツール』</strong>」「副作用が極端に強く出た／効かない患者では先に検査を考える」です。

          </p>

          <h4 className="text-lg font-bold text-indigo-800 bg-indigo-50 p-2 rounded mt-4">6-3. クロナゼパムの「統計的有意」と「臨床的満足」の乖離</h4>
          <p className="text-sm">
            予備室1で議論された通り、BMSへのクロナゼパム（経口・含嗽）はメタ解析でVAS低下や RR=13 など有意差を示しますが、Wodaらの原著では <strong>22名中 完全消失5名、著効9名、有効2名、無効/悪化6名</strong> でした。Y先生は「ベースラインリスク10%でRR=2なら絶対利益+10%だが、ベースラインリスク1%ならRR=2でも+1%しか得られない」と述べ、<strong>相対効果ではなく絶対効果で評価せよ</strong>と警告しています。臨床的に「VASが2〜3下がったが、まだ4〜5残る」状態では、患者は満足しません。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-chronic',
      title: '7. 慢性痛のマネジメント ── 中枢感作と破局的思考',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            慢性痛（3か月以上持続）の本質は、末梢での炎症や組織損傷ではなく、<strong>脊髄後角・脳における可塑的変化</strong>（中枢感作）と、痛みに対する認知・情動の歪み（破局的思考）です。

          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><strong>中枢感作</strong>：C線維のワインドアップ、NMDA受容体のリン酸化、グリア細胞活性化により、<strong>同じ末梢入力でも強い痛みとして処理される</strong>状態。</li>
            <li><strong>痛みのPTSD化</strong>：扁桃体・海馬での「痛みの記憶」の固定化。匂い・場所・時間帯で痛みが想起される。</li>
            <li><strong>破局的思考（Pain Catastrophizing）</strong>：「この痛みは一生治らない」「癌に違いない」「もう何もできない」という認知が、痛覚処理を増幅する負のスパイラルを形成。</li>
          </ul>
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded">
            <p className="text-sm">
              有名な先生（予備室2 第1講）の臨床戦略は「<strong>痛みの説明 → 安心の付与 → 認知再構成 → 行動活性化</strong>」の4段階。「あなたの痛みは脳の警報装置が誤作動しているもので、構造的な破壊ではない」と<strong>言語化して伝える</strong>こと自体が治療的介入になります。CBT（認知行動療法）、ACT（アクセプタンス＆コミットメント療法）、運動療法、マインドフルネスは、神経障害性疼痛・痛覚変調性疼痛のいずれにもエビデンスが蓄積されています。
            </p>
          </div>
          <p className="text-sm">
            村岡先生の「構造化問診票」では、「痛みの強さは0〜10で？」のような単純な設問でも真面目な患者ほど誤答しやすい（「我慢できているから3」と答えてしまう等）と指摘し、<strong>言語化された訴えと実際の機能障害を併せて評価</strong>することの重要性を説いています。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-evidence',
      title: '8. エビデンスの読み方 ── 論文撤回問題と enTRUST-PE',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p>
            2026年4月29日のHarvard Pain Roundsで、Dr. Michael Ferraro と Prof. Neil O'Connell は、疼痛医学領域における論文撤回（Retraction）の現状とその影響を講演しました。

          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>過去30年で疼痛医学領域の撤回論文は急増しており、<strong>画像データの偽造・統計の捏造・著者貢献の偽装</strong>が3大要因。</li>
            <li>撤回された論文が、撤回後も<strong>システマティックレビューやガイドラインに引用され続けている</strong>例が多数（cite-after-retraction現象）。</li>
            <li>O'Connell教授の <strong>enTRUST-PE プロジェクト</strong>は、疼痛エビデンスの信頼性を「研究デザイン・データの透明性・利益相反・撤回履歴」の4軸で再評価する枠組みを提案。</li>
          </ul>
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded">
            <p className="text-sm">
              Q&Aで強調された3つの言葉が印象的でした：「<strong>画像偽造は炭鉱のカナリア</strong>（より大きなデータ捏造の前兆）」「<strong>意見記事は所詮意見記事、エビデンスではない</strong>」「<strong>帰属なき引用は学術の根本犯罪</strong>」。臨床家は、引用された論文が撤回されていないか、<strong>Retraction Watch・PubPeer</strong>などで確認する習慣を持つべきです。
            </p>
          </div>
          <p className="text-sm">
            この問題はBMS治療においても無関係ではありません。例えばα-リポ酸の有効性に関する初期のRCT複数本にデータの再利用・統計の不整合が指摘されており、近年のメタ解析では効果サイズが大きく縮小しています。「<strong>古いポジティブな論文を見つけたら、その後の追試と撤回履歴を確認する</strong>」のがエビデンスに基づく医療の最低限のリテラシーです。
          </p>
        </div>
      ),
    },
    {
      id: 'expert-summary-takehome',
      title: '9. テイクホーム・メッセージ',
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed bg-indigo-50 p-6 rounded-xl border border-indigo-200">
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>口腔顔面痛は<strong>侵害受容性／神経障害性／痛覚変調性</strong>の3メカニズムが複合する領域であり、ICOP 2020の6カテゴリーで体系的に診断する。</li>
            <li>「歯科処置で改善しない歯痛」は<strong>非歯原性歯痛（NOT）</strong>を疑い、抜歯・抜髄を繰り返す前に紹介・鑑別を優先する。</li>
            <li>BMSは<strong>末梢小径神経障害／潜在性三叉神経障害／中枢性</strong>の3サブタイプに分けて治療戦略を選ぶ。性差はホルモンと心理社会的要因の双方で説明される。</li>
            <li>クロナゼパムなどの薬物は<strong>RR（相対リスク）ではなく絶対効果</strong>で評価し、患者の臨床的満足度（VAS残存量）を併せて見る。</li>
            <li>三環系・SNRI・ガバペンチノイドは<strong>NNT基準で第一選択</strong>。投与前にCYP2D6・CYP2C9・HLA-B*15:02などの薬理遺伝学情報を活用すれば副作用回避が可能。</li>
            <li>慢性痛では<strong>中枢感作と破局的思考</strong>へのアプローチ（説明・安心・CBT・運動）が薬物と同等以上に重要。</li>
            <li>引用論文は<strong>撤回されていないかを必ず確認</strong>し、意見記事を「エビデンス」と混同しない。</li>
          </ol>
          <p className="text-xs text-indigo-900 mt-4 bg-white/70 p-3 rounded border border-indigo-100">
            ※繰り返しになりますが、本ページは公開・非公開の専門医講義をAIで要約したもので、本作成者のメモが含まれます。記載ミスや講師の意見の偏りが含まれる可能性があるため、実際の診療判断は最新ガイドラインと主治医の助言に基づいて行ってください。
          </p>
        </div>
      ),
    },
  ],
};
