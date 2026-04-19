import { Presentation } from 'lucide-react';
import { Chapter } from '../types';

export const expertLecturesChapter: Chapter = {
  id: "chapter-expert-lectures",
  title: "有識者の講演・会議（パスワード）",
  icon: <Presentation className="w-5 h-5" />,
  password: "yuasa2026",
  subSections: [
    {
      id: "famous-lecture",
      title: "有名な先生の講義より",
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">
              口腔顔面痛・非歯原性歯痛の総論と慢性痛マネジメント
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              ※本章は、ベテラン口腔顔面痛専門医による講義録画の音声テキストを、専門家の監修のもとに加筆・整理したものです。原発言の要旨を忠実に保ちつつ、誤変換（資源性 → 歯原性 等）を修正し、初学者にも理解できるよう構造化しています。
            </p>

            {/* 1. 口腔顔面痛を取り巻く世界的潮流 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                1. 口腔顔面痛を取り巻く世界的潮流
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  「歯が痛いのに、虫歯も歯周病もない」という患者さんは、歯科・口腔外科・耳鼻科・神経内科・ペインクリニックを次々と巡りながら、どこでも「異常がない」と言われて口腔顔面痛外来にたどり着きます。先生自身は2000年に口腔顔面痛懇談会を発足させた当初、「口腔顔面痛」という言葉は一般歯科医にとって馴染みが薄いため、あえて<strong>「非歯原性歯痛（ひしげんせいしつう）」</strong>という概念を前面に出して普及活動を行いました。「歯が原因でない歯の痛み」と言うほうが、歯科医に興味を持ってもらいやすいという戦略的判断です。
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-800 mb-2">日本での歩み</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>2011年</strong>：『非歯原性歯痛診療ガイドライン』Mindsに正式収載。</li>
                    <li><strong>2014年</strong>：歯科医師国家試験の出題範囲に「非歯原性歯痛」が組み込まれる。</li>
                    <li><strong>2016年</strong>：歯学教育モデル・コア・カリキュラムに「口腔顔面痛」が明記される。</li>
                    <li><strong>2019年</strong>：『非歯原性歯痛診療ガイドライン 改訂版』発行。</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-800 mb-2">国際的な潮流</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>2020年</strong>：国際口腔顔面痛分類 第1版（ICOP：International Classification of Orofacial Pain）発行。</li>
                    <li><strong>2020年</strong>：米国にて Orofacial Pain が歯科の <strong>12番目の公式Specialty</strong>として認定。Academy（AAOP）が公式学会、American Board of Orofacial Pain（ABOP）が専門医認定機構となる。レジデントプログラムがある大学は全米で20校前後に限られ、ハワイ・アラスカ・西海岸北部（オレゴン、ワシントン等）には専門医が常駐しない州も存在する。</li>
                    <li><strong>2022年</strong>：国際疾病分類 第11版（ICD-11）発効。<strong>慢性疼痛（chronic pain）</strong>という概念が初めて ICD に取り込まれ、<strong>慢性一次性疼痛</strong>（原因不明）と<strong>慢性二次性疼痛</strong>に分類され、その中に「慢性一次性／二次性の頭痛および口腔顔面痛」が明記された。</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. ICOP 第1版 2020 の6分類 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                2. ICOP（2020）の6分類と、顎関節症の位置づけ
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  ICOPは口腔顔面の痛みを以下の6カテゴリに体系化しました。広義には歯髄痛・歯周痛・歯肉痛（1番目）も含みますが、臨床で「口腔顔面痛」と言うときには狭義の2〜6を指すことが多いです。
                </p>
                <ol className="list-decimal pl-6 space-y-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <li>歯槽および解剖学的に関連する構造の障害に起因する口腔顔面痛（虫歯、歯周病など）</li>
                  <li>筋・筋膜性口腔顔面痛（<strong>咀嚼筋の痛み</strong>）</li>
                  <li>顎関節の痛み（<strong>関節性顎関節症</strong>）</li>
                  <li>脳神経の病変または疾患に起因する口腔顔面痛（有痛性三叉神経ニューロパチー／神経障害性疼痛 など）</li>
                  <li>一次性頭痛の症状に似た口腔顔面痛（<strong>片頭痛、群発頭痛</strong>など）</li>
                  <li>特発性口腔顔面痛（<strong>口腔灼熱痛症候群／BMS</strong>、持続性特発性顔面痛など。痛覚変調性疼痛のメカニズムによる痛み）</li>
                </ol>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                  <p className="font-bold text-orange-900 mb-1">重要ポイント</p>
                  <p>
                    ICOPでは<strong>「顎関節症」という統一病名は採用されず、「咀嚼筋痛」と「顎関節痛」に分類されています</strong>。6番目の特発性口腔顔面痛の主たる機序は「痛覚変調性疼痛（nociplastic pain）」ではないかと推測されていますが、独立カテゴリとするにはまだエビデンスが不十分、というのが現在の国際的コンセンサスです。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. 歯原性 vs 非歯原性の鑑別 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                3. 歯原性歯痛と非歯原性歯痛の臨床的鑑別
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-bold text-blue-900 mb-2">歯原性（歯が原因）</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>う蝕・歯冠破折・歯周ポケットなどの器質的所見あり</li>
                      <li>打診痛、冷温刺激で再現性のある誘発痛</li>
                      <li>自発痛時の診断的局所麻酔で<strong>痛みが消える</strong></li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 className="font-bold text-red-900 mb-2">非歯原性（歯以外が原因）</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>明らかな器質的所見なし（綺麗な歯）</li>
                      <li>打診痛なし、冷温刺激で誘発されない</li>
                      <li>上顎歯痛の場合は上顎洞も含め<strong>同側全体を精査</strong>しても原因なし</li>
                    </ul>
                  </div>
                </div>
                <p>
                  非歯原性歯痛は<strong>8つの原因</strong>に大別されますが、先生の2015年までの統計では、<strong>筋筋膜性44%、神経障害性20%、両者の合併約16%で合計約80%</strong>を占めます。つまり、口腔顔面痛を扱うなら、少なくとも「筋肉の痛み」と「神経障害性疼痛」を確実に診断・治療できる必要があります。
                </p>
              </div>
            </section>

            {/* 4. 痛みの定義と3分類 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                4. 痛みの定義（IASP 2020）と3つのメカニズム
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <blockquote className="border-l-4 border-indigo-400 pl-4 italic bg-indigo-50/60 py-3">
                  痛みとは、「実際の組織損傷もしくは組織損傷が起こりうる状態に付随する、あるいは、それに似た感覚かつ情動の不快な体験」である。（IASP 2020年改訂、約40年ぶりの改訂）
                </blockquote>
                <p>
                  付録には「痛みは常に個人的な経験であり、生物学的・心理的・社会的要因によって様々な程度で影響を受ける」「組織損傷がなくても、似たような状況により感覚情動の不快な体験を感じうる」と明記されました。つまり<strong>痛みは「末梢で感じる」のではなく「脳で統合された主観的な苦痛体験」</strong>であるという現代的理解です。
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                  <h5 className="font-bold text-gray-800">IASPによる痛みの3分類</h5>
                  <div>
                    <p className="font-bold text-indigo-700">① 侵害受容性疼痛（Nociceptive pain）</p>
                    <p>末梢の侵害受容器が活性化されて伝わる「正常な痛み」。NSAIDsはアラキドン酸カスケードのCOXを阻害しプロスタグランジン産生を抑える<strong>末梢作用</strong>。アセトアミノフェンは<strong>中枢性</strong>に働き、機序が全く異なる。併用の意義はここにある。</p>
                  </div>
                  <div>
                    <p className="font-bold text-indigo-700">② 神経障害性疼痛（Neuropathic pain）</p>
                    <p>体性感覚神経系の病変・疾患による痛み。末梢側の侵害受容器は正常で、神経そのものから異常信号が出る。下行性疼痛抑制系の破綻も関与する。</p>
                  </div>
                  <div>
                    <p className="font-bold text-indigo-700">③ 痛覚変調性疼痛（Nociplastic pain）</p>
                    <p>2017年に「Nociplastic pain」という概念が提唱され、日本語訳は2022年に定着。侵害受容性でも神経障害性でもないが、感覚過敏性変化により生じる痛み。<strong>中枢感作が主機序</strong>と考えられている。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. 筋筋膜性疼痛 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                5. 筋筋膜性疼痛（咬筋・側頭筋・胸鎖乳突筋）と関連痛
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  移所性疼痛（heterotopic pain）とは「痛みの発生源と感じる場所が異なる」現象で、その代表が<strong>関連痛（referred pain）</strong>です。筋筋膜性疼痛は関連痛として歯に症状が出やすく、咬筋上部のトリガーポイントは上顎臼歯部へ、下部は下顎臼歯部へ関連痛を起こします。側頭筋前部のトリガーポイントは<strong>上顎前歯部</strong>に響くため、「健康な前歯が痛い」という訴えの原因となります。
                </p>
                <p>
                  胸鎖乳突筋は二腹性で、上部のトリガーポイントは顔面（頬、眼窩周囲）へ、下部は胸・腕・肩甲骨・背中へ関連痛を起こし、ときに<strong>指のしびれ</strong>として訴えられることもあります。スマートフォンを左手で保持し顔を左に傾ける姿勢が多い人では、<strong>右側の胸鎖乳突筋</strong>が過活動となりトリガーポイントを形成しやすい点に注意。
                </p>
                <p>
                  片頭痛や群発頭痛が歯痛として感じられるのは、三叉神経第1枝の侵害入力が三叉神経脊髄路核で2枝・3枝と<strong>収束（convergence）</strong>するためです。心臓虚血（狭心症・心筋梗塞）の痛みが左肩・左腕だけでなく<strong>下顎・咽喉</strong>に関連痛として出る現象も同じ仕組みです。
                </p>
              </div>
            </section>

            {/* 6. 神経障害性疼痛 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                6. 神経障害性疼痛：下歯槽神経障害、帯状疱疹、ラムゼイ・ハント症候群
              </h4>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  歯科領域では、インプラントによる<strong>下歯槽神経（下顎管内を走行する下歯槽神経）</strong>損傷、下顎智歯抜去に伴う神経圧迫、根管治療・歯肉切開後の瘢痕形成などが有痛性三叉神経ニューロパチーの契機となります。陰性症状（鈍麻・どんま）だけでなく、アロディニア・ハイパルジア・ジセステジア・パレステジアといった<strong>陽性症状</strong>が併存するのが特徴です。
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-800 mb-2">診断アルゴリズム</h5>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>解剖学的に神経支配と一致した領域（三叉神経第1／2／3枝、左右が明確）か</li>
                    <li>痛み以外の感覚障害が観察されるか（綿棒・ピンセット・音叉・冷却スプレーなどでQST）</li>
                    <li>確定的検査で損傷の裏付けがとれるか</li>
                  </ol>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-bold text-yellow-900 mb-2">帯状疱疹とワクチンの動向</h5>
                  <p>
                    2014年の水痘ワクチン定期接種化以降、小児から親世代へのブースター効果（自然ブースト）が減少し、<strong>20〜40代の帯状疱疹罹患率が1.37〜1.41倍に上昇</strong>しました。2025年度からは<strong>65歳以上が5歳刻みで定期接種の対象</strong>となっています。
                  </p>
                  <p className="mt-2">
                    三叉神経領域の帯状疱疹では、50歳以上の約<strong>2割が帯状疱疹後神経痛（PHN）</strong>に移行します。顔面神経の中間神経に帯状疱疹が生じた場合は<strong>ラムゼイ・ハント症候群</strong>となり、顔面神経麻痺・難聴・めまい・味覚障害を伴い、早期のステロイド＋抗ウイルス薬投与で顔面神経麻痺の残存を防ぐことが最重要です。
                  </p>
                </div>
              </div>
            </section>

            {/* 7. 三叉神経痛 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                7. 三叉神経痛の臨床的特徴
              </h4>
              <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
                <p>
                  三叉神経痛は<strong>電撃様・瞬間的</strong>な痛みで、持続時間は通常1秒〜最長2分。5〜10分続く痛みは三叉神経痛ではありません。痛みの立ち上がりはダラダラではなく<strong>「ドーン」と瞬時に最大</strong>になります。
                </p>
                <p>
                  好発年齢は50〜60歳代。より若年で発症した場合は<strong>二次性三叉神経痛</strong>（血管圧迫・腫瘍・多発性硬化症等）を疑い、MRIでの精査が必須です。第一選択はカルバマゼピンですが、副作用管理は難しく、安易な処方は禁物です。
                </p>
              </div>
            </section>

            {/* 8. 神経障害性疼痛薬物療法 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                8. 神経障害性疼痛の薬物療法と NNT（Number Needed to Treat）
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  カルバマゼピンは日本で1978年に承認されて以来約50年、三叉神経痛の第一選択薬として君臨しています。オキシカルバマゼピンは副作用が少ないと期待されましたが日本市場からは消退、現在は<strong>オキシカルバマゼピンの代謝物</strong>がアメリカで治験中です。
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-800 mb-2">神経障害性疼痛のファーストライン（いずれもNNTに注意）</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>三環系抗うつ薬（アミトリプチリン＝トリプタノール、1961年発売）<strong>NNT ≒ 3</strong>（3人に処方して1人が50％改善）</li>
                    <li>SNRI（デュロキセチン＝サインバルタ、ベンラファキシン）</li>
                    <li>ガバペンチノイド（ガバペンチン、プレガバリン＝リリカ2010年、ミロガバリン＝タリージェ2019年）<strong>NNT ≒ 6</strong></li>
                  </ul>
                </div>
                <p>
                  つまり「NNT=6」とは<strong>6人に投与して1人しか半分良くならない</strong>という意味であり、神経障害性疼痛の完全除痛は極めて困難です。2010年代以降、これを超える画期的な新薬は登場していません。
                </p>
              </div>
            </section>

            {/* 9. 慢性痛のメカニズム */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                9. 慢性痛のメカニズム：中枢感作と「痛みのPTSD」
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  急性痛は「警報システム」として機能しますが、<strong>3〜6か月以上持続する慢性痛</strong>では、末梢に痛み信号の発生源がなくとも、脳内に蓄えられた痛みの記憶や感情によって痛みが維持されます。先生は慢性痛を以下の2要素の複合として捉えています。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-bold text-blue-900 mb-1">① 感覚信号の増幅（Sensory）</h5>
                    <p>反復する痛み信号がシナプス可塑性を変化させ、ボリュームが上がる方向に神経系が変質する。これが<strong>中枢感作</strong>。</p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <h5 className="font-bold text-pink-900 mb-1">② 情動体験の固着（Emotional）</h5>
                    <p>痛みが記憶される<strong>情動刺激</strong>となり、PTSDと類似した機序で残存する。三叉神経は脊髄を経ず、扁桃体・辺縁系に直接入力する経路が多く、情動的影響が大きいと考えられる。</p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                  <p className="font-bold text-amber-900 mb-1">臨床的示唆</p>
                  <p>
                    BMSや持続性特発性歯痛（PIDAP）で、食事中だけは痛みが消える患者が多い現象は、<strong>注意の転換</strong>や<strong>下行性疼痛抑制系の活性化</strong>で説明できる可能性があります。
                  </p>
                </div>
              </div>
            </section>

            {/* 10. 慢性痛の診療戦略 */}
            <section>
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                10. 慢性痛の診療戦略：破局的思考の負のスパイラルから脱出させる
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  先生が実践する慢性痛診療の枠組みは、千葉大の認知行動療法（CBT）の影響を受けた以下の構造です。
                </p>
                <ol className="list-decimal pl-6 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <li><strong>ラポール形成</strong>：患者の話を徹底的に聞き、「解釈モデル」「認知」「感情」を認知的に理解する（共感ではなく理解）。</li>
                  <li><strong>病態説明</strong>：長期の痛みで痛覚神経が過敏になっている、あるいは痛みへのマイナス感情が脳内に残っている、と平易に説明。患者の誤った解釈モデルをすり合わせる。</li>
                  <li><strong>薬物療法</strong>：トリプタノール 1/2 〜 1/4 錠（5〜10mg）から漸増。中枢感作改善と睡眠改善の2目的。</li>
                  <li><strong>運動療法</strong>：「Exercise-induced hypoalgesia」を利用。散歩でもよいから動く習慣を作る。疲れは睡眠の原資になる負の因子ではない。</li>
                  <li><strong>睡眠改善</strong>：睡眠中に免疫機能・抗炎症・組織修復が行われる。</li>
                  <li><strong>筋肉マネジメント</strong>：頸部・咀嚼筋のトリガーポイントを触診し、リラクセーション（筋収縮→脱力）を指導。</li>
                  <li><strong>経過中の継続的な認知アプローチ</strong>：毎回、現在の考えを聞き取り、破局的思考を少しずつ修正。</li>
                </ol>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mt-4">
                  <h5 className="font-bold text-indigo-900 mb-2">治療目標（慢性痛の国際的コンセンサス）</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>現在の痛みを<strong>30％改善</strong></li>
                    <li>身体活動を<strong>70％回復</strong></li>
                    <li>できなくなった活動の<strong>50％を回復</strong></li>
                  </ul>
                  <p className="mt-2">「完全除痛」ではなく「機能回復」を目標に設定することが、患者・医療者双方の破局的思考を防ぐ上で重要です。</p>
                </div>
              </div>
            </section>

            {/* 質疑応答 */}
            <section className="mt-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                質疑応答より：「痛覚変調性疼痛」の訳語をめぐる議論
              </h4>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  聴講者から「<strong>痛覚変調性</strong>という和訳は、IASPの痛み定義が『感覚＋情動』を明記しているのに、『感覚変調』の面のみを強調してしまっており違和感がある」という指摘がありました。
                </p>
                <p>
                  講師も同意し、「Nociplastic painの『plastic』というニュアンスには中枢感作だけでなく情動的変容までは含まれていないかもしれない」と認めつつ、「2024年のヨーロッパ疼痛学会でも議論が続いており、今後訳語や概念が洗練されていくだろう」と応じました。
                </p>
                <p>
                  さらに先生は、<strong>「口腔顔面領域における痛覚変調性疼痛の典型像」</strong>について、自身の仮説を提示しました。
                </p>
                <blockquote className="border-l-4 border-indigo-400 pl-4 italic bg-indigo-50/60 py-3">
                  「三叉神経1・2・3枝の分布に従わず、<strong>玉ねぎ状皮質（Onion skin pattern）</strong>に従った左右・上下をまたぐ痛みを訴える患者は、実は口腔顔面領域の痛覚変調性疼痛の候補ではないか。上顎前歯部の上下左右にアロディニアが広がる症例が、私の外来だけで現在5名ほどいる。」
                </blockquote>
                <p>
                  玉ねぎ状分布は三叉神経脊髄路核の<strong>吻側亜核・中間亜核・尾側亜核</strong>への収束によって生じる中枢性の体性局在であり、この神経学的解剖と痛覚変調性疼痛の関係は、今後の重要な研究課題です。
                </p>
              </div>
            </section>

          </div>
        </div>
      )
    },
    {
      id: "harvard-pain-rounds-20260419",
      title: "Harvard Interdisciplinary Pain & Headache Rounds 20260419",
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">
              Harvard Interdisciplinary Pain & Headache Rounds（2026年4月19日）
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              本章は、2026年4月19日に開催されたハーバード大学主催・多職種連携（Interdisciplinary）Pain & Headache Roundsのライブ配信録画からの講演内容および質疑応答を、日本語で詳細に解説したものです。症例提示は Dr. Kyle Brown（オーラルフェイシャルペイン・レジデント）による post-traumatic trigeminal neuropathy（PTTN）の薬物療法、ゲスト講演は USC 教授 Dr. Glenn Clark による Pharmacotherapy in Orofacial Pain です。
            </p>

            {/* Part A: Kyle Brown - PTTN pharmacology */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                Part A. Dr. Kyle Brown「Post-Traumatic Trigeminal Neuropathy（PTTN）の薬物療法」
              </h4>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-1. 症例サマリーと背景</h5>
                  <p>
                    71歳男性。複数の歯科・外科・ペインクリニックを経由し、紹介時には顎骨骨髄炎（osteomyelitis）疑いで複数の抜歯・根管治療を受けた後、右側顔面の慢性神経障害性痛として紹介された症例。Dr. Brown はトリゲミナル・ニューラルジア（triminal neuralgia：TN）と PTTN の鑑別から治療選択までを体系的に提示しました。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-2. TN と PTTN の臨床的鑑別</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-bold text-blue-900 mb-1">三叉神経痛（TN）</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>発作間は「無痛」</li>
                        <li>突発的で電撃様、数秒〜最長2分</li>
                        <li>トリガーポイントによる誘発が典型</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-bold text-red-900 mb-1">PTTN（外傷性三叉神経障害性疼痛）</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>持続痛＋flare（増悪期）</li>
                        <li>罹病期間 3か月以上が必要（慢性）</li>
                        <li>過去6か月以内の外傷・感染歴</li>
                        <li>アロディニア／ハイパルジアを伴う</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-3. ファーストライン全身薬（経口）と NNT</h5>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                    <div>
                      <p className="font-bold">三環系抗うつ薬（TCA：amitriptyline, nortriptyline）</p>
                      <p>最も有効（NNT最小）だが、<strong>抗コリン性副作用（口渇、めまい、霧視、尿閉、眠気）</strong>で脱落が多い。10mg〜150mg で処方されるが、75mg以上に耐えられるのは約50％に過ぎない。高齢者では<strong>心リスク・転倒リスク</strong>を要警告。</p>
                    </div>
                    <div>
                      <p className="font-bold">SNRI（duloxetine＝サインバルタ、venlafaxine）</p>
                      <p>神経障害性疼痛で最も研究されているが、効力はTCAにやや劣る。忍容性はTCAより良好。</p>
                    </div>
                    <div>
                      <p className="font-bold">ガバペンチノイド（gabapentin, pregabalin）</p>
                      <p>副作用は少なく安全性が高いが、息切れ・傾眠などは存在。TCAより忍容性良好。</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-4. 近年注目される新規治療</h5>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>低用量ナルトレキソン（LDN：Low-Dose Naltrexone）</strong>：通常50mgのオピオイド拮抗薬を<strong>1〜4mg</strong>に減量して使用。痛みを悪化させそうに思えるが、μ受容体拮抗による<strong>内因性オピオイドの代償的産生増加</strong>仮説で説明される（筋トレで筋が肥大するのと同様）。
                    </li>
                    <li>
                      <strong>ボツリヌス毒素A（Botox）</strong>：神経筋接合部でのアセチルコリン放出阻害に加え、<strong>疼痛関連神経伝達物質（CGRP, substance P 等）の放出抑制</strong>が示唆されている。難治性TNに対するケース報告レベルのエビデンス。
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-5. トピカル製剤（局所製剤）という戦略</h5>
                  <p>
                    口腔内は唾液・会話・咀嚼により薬剤を保持しにくいため、<strong>口腔内ステント（intraoral stent）</strong>を併用すると局所化が可能で、全身吸収と副作用を最小化できます。薬剤は以下：
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-2">
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>リドカイン</strong>：電位依存性ナトリウムチャネル遮断。最も安全で定番。</li>
                      <li><strong>カプサイシン</strong>：灼熱痛部位の神経伝達物質を涸渇させる「毒を以て毒を制す」。忍容性は低い。</li>
                      <li><strong>TCA（amitriptyline, nortriptyline）局所</strong>：SNRI様作用＋局所麻酔様作用。</li>
                      <li><strong>クロニジン</strong>：元々は降圧薬（α2作動）。炎症部位で受容体がアップレギュレートされる性質を利用。</li>
                      <li><strong>NSAIDs局所</strong>：経口で消化管副作用のある患者に有用。約10%で発疹。</li>
                      <li><strong>ガバペンチン局所</strong>：高価かつ保険外が難点。</li>
                      <li><strong>ケタミン局所</strong>：全身投与のような向精神作用が少なく、局所で有効。</li>
                    </ul>
                  </div>
                  <p className="mt-2">
                    舌下粘膜は薄く血管豊富で吸収良好、硬口蓋の角化歯肉は吸収が悪いなど<strong>部位による薬物動態の違い</strong>にも注意。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">A-6. 質疑応答ハイライト</h5>
                  <div className="space-y-3">
                    <div className="border-l-4 border-indigo-300 pl-3">
                      <p className="font-bold text-indigo-800">Q（Dr. David Keith）：この症例の「骨髄炎」診断は本当に正しかったのか？</p>
                      <p>
                        71歳、比較的健康、喫煙歴のみで、他のリスク因子なく骨髄炎が発症するのは非典型。抜歯3本後の骨変化を病理が「骨細胞なし→骨髄炎」と判定するが、それは「骨髄炎の病理診断基準」として適切ではない可能性がある。<strong>もともと神経障害性疼痛であり、痛みに対する『歯科介入の連鎖』で悪化した症例では？</strong>という疑義が呈された。また、同時に「NICO（Neuralgia-Inducing Cavitational Osteonecrosis：神経痛誘発性空洞化骨壊死）」について、「<strong>NICOという疾患概念は存在しないというのが現在の国際的コンセンサスであり、今年中に欧州から共同レビューが出る予定</strong>」とDr. Keithが明言。
                      </p>
                    </div>
                    <div className="border-l-4 border-indigo-300 pl-3">
                      <p className="font-bold text-indigo-800">Q（Dr. Ron）：「巨細胞性動脈炎（GCA）」や「TAC（群発頭痛群）」の鑑別は？</p>
                      <p>
                        71歳男性で片側性痛＋顎運動で悪化となると GCA（temporal arteritis）も重要な鑑別。GCAは<strong>両側性で咀嚼筋領域の顎跛行（jaw claudication）</strong>が典型であり失明リスクがあるため常に視野に置くべき、との補足。TACとの鑑別は、片側性鼻閉や日内変動など臨床像が重なるため、再評価を要する。
                      </p>
                    </div>
                    <div className="border-l-4 border-indigo-300 pl-3">
                      <p className="font-bold text-indigo-800">Q：ステントそのものに治療効果はあるか？</p>
                      <p>
                        「毎朝履いた靴下を数秒後には感じなくなる」比喩の通り、<strong>無害な持続刺激を与えることで脳がその入力をフィルタリングするようになる</strong>可能性、さらに<strong>ゲートコントロール理論</strong>によりβ線維刺激が疼痛伝達を抑制する可能性がある。薬なしでステントだけを装着して改善する患者が一定数存在する。
                      </p>
                    </div>
                    <div className="border-l-4 border-indigo-300 pl-3">
                      <p className="font-bold text-indigo-800">Q（Dr. Jeff）：両側性に広がったPTTNは、もはや治療抵抗性ではないか？</p>
                      <p>
                        両側性化は<strong>中枢変化（central change）が進行した証拠</strong>であり、末梢治療（局所薬・ステント）の効果は限定的。全身投与（TCA、筋弛緩薬）や<strong>学際的慢性痛プログラムでの中枢感作アプローチ</strong>への紹介が必要、との合意。
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Part B: Glenn Clark */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                Part B. Dr. Glenn Clark（USC Herman Ostrow School of Dentistry 教授）
                <br/>
                <span className="text-sm font-normal text-indigo-700">「Pharmacotherapy in Orofacial Pain（口腔顔面痛における薬物療法）」</span>
              </h4>

              <p className="text-xs text-gray-500 mb-4">
                Dr. Clark は250本以上の研究論文を持ち、American Academy of Orofacial Pain から生涯功労賞、American Academy of Oral Medicine から名誉フェロー、ABOP 認定医でもある世界的権威。USC の遠隔教育・オンライン修士課程（Orofacial Pain and Oral Medicine）ディレクターを務めます。今回の講演は「Charcuterie Board（盛り合わせ）」形式で9つのトピックを概観。
              </p>

              <div className="space-y-5 text-sm text-gray-700 leading-relaxed">

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-1. NNT と NNH（Number Needed to Harm）</h5>
                  <p>
                    薬物評価の要はNNT（低いほど有効）とNNH（高いほど安全）の比較。当分野の平均は<strong>NNT 3〜7、NNH 4〜8</strong>で、ほぼ同等。個別薬剤で NNT&lt;NNH となるよう選ぶのが臨床判断。
                  </p>
                  <p className="mt-2">
                    ただし<strong>これらの数字は多くが短期（2週間程度）試験から算出されている点に注意</strong>。慢性痛薬は効果発現に2〜3か月要するため、「2週間で効かない＝失敗」と判断してはならない。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-2. 「早期の副作用」vs「後から現れる効果」</h5>
                  <p>
                    神経抑制薬（neurosuppressive meds：Dr. Clark はこの名称を推奨、「抗うつ薬」「抗てんかん薬」というブランディングは誤解を生むため）は、めまい・認知の霧が先に出現し、本来の効果である<strong>神経の長期リモデリング</strong>は数か月かかる。<strong>最初の2週間を患者に耐えてもらう</strong>ための事前説明が成否を分ける。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-3. SSRI／SNRI／覚醒剤による「運動亢進（motor hyperactivity）」</h5>
                  <p>
                    fluoxetine, sertraline, paroxetine などSSRIは<strong>アカシジア（akathisia）＝運動亢進／ブラキシズム／クレンチング</strong>を誘発することが発売直後から知られています。SNRIはやや弱いが同様。成人ADHD診断の急増により処方されるアンフェタミン系覚醒剤も、クレンチング／BRUX誘発の大きな原因となっています。Dr. Clark は「<strong>Get the backstory</strong>：いつから症状が始まり、その時何の薬を飲み始めたか」を必ず時系列で聞けとレジデントに教えています。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-4. セロトニン多型と GABA脱抑制（Dr. Kazuyoshi Baba らとの共同研究）</h5>
                  <p>
                    昭和大学・Baba 教授と実施した研究で、高ブラキシズム患者には<strong>5-HT2A受容体の遺伝子多型</strong>が多いことを確認。その後のiPSC細胞研究シリーズ（2022年〜）で、
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>多型を持つニューロンは<strong>興奮性が亢進</strong>している</li>
                    <li>運動系に対する<strong>GABA抑制系が機能不全</strong>である（脱抑制：disinhibition）</li>
                    <li>パッチクランプでも同様の所見が確認された（近刊）</li>
                  </ul>
                  <p>
                    この「興奮亢進＋抑制低下」の<strong>二重の破綻</strong>が、睡眠中の下肢ピクつきや下顎ブラキシズムの病態と考えられる、との提言。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-5. 治療候補薬剤（細胞実験ベースの推論）</h5>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Buspirone（ブスピロン）</strong>：5-HT1A<strong>シナプス前オートレセプター作動薬</strong>。シナプス前で「セロトニン出し過ぎ」のフィードバックを作動させ、結果的にセロトニン放出を抑制。SSRI誘発ブラキシズムでの報告多数。
                    </li>
                    <li>
                      <strong>Gabapentin</strong>：カルシウムチャネル阻害。セロトニン系の過興奮抑制にも寄与する可能性。
                    </li>
                    <li>
                      <strong>Baclofen</strong>：GABA-B受容体作動薬。脱抑制系を補強。
                    </li>
                  </ul>
                  <p>
                    これら3剤はそれぞれ別機序で、併用加算性が期待できる可能性がある。ただし<strong>すべて2週間では判定不能</strong>。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-6. CYP2D6／CYP2C19 多型と血中濃度</h5>
                  <p>
                    「用量≠血中濃度暴露」。<strong>CYP2D6 poor metabolizer は10人に1人（10%）</strong>に存在し、標準用量でも duloxetine 血中濃度が<strong>2倍</strong>となる。CYP2C19 poor metabolizer では citalopram, sertraline の血中濃度が<strong>2.6〜2.7倍</strong>に達するという論文報告。
                  </p>
                  <p className="mt-2">
                    シンガポールでは三叉神経痛にカルバマゼピン処方前に<strong>HLA検査（Stevens-Johnson症候群予防）</strong>が必須。漢民族で12％、南アジア系10％、太平洋諸島民12％に HLA多型が存在。米国では施行されていないが、Dr. Clark は「疑わしい症例では<strong>血中濃度測定（約$66）</strong>や<strong>ファーマコゲノミクス検査（約$300〜350）</strong>を行うべき」と提言。
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-7. Botox への批判的視点</h5>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p>
                      「Botoxは<strong>中枢抑制作用を持たない</strong>（成人用量ではシナプスを越えて脳に達しない）。筋最大随意収縮（MVC）を20〜30％低下させるが、安静時の低レベル筋緊張（＝クレンチング時のトーン）はほとんど抑制しない」
                    </p>
                    <p className="mt-2">
                      Dr. Clark は Ando らの研究（200単位を咬筋・側頭筋に注射し PSG 測定）を引用。Botox群12人のうち<strong>ブラキシズム減少はわずか2人、同じく増加が2人、残りは不変</strong>。プラセボ（生食）群でも2人減少・4〜5人増加。つまり<strong>客観的EMGでは効果が極めて限定的</strong>。
                    </p>
                    <p className="mt-2">
                      彼は著者の結論文「subjective bruxism が改善」という記載を厳しく批判。「200単位のBotoxで患者が盲検を維持できるわけがない（3日で顔が動かなくなるから自明）。<strong>ブラインディング・チェックを行っていない試験をダブルブラインドと称してはならない</strong>」
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-8. シナプス前作動薬（presynaptic agonists）</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Clonidine（クロニジン）</strong>：α2アドレナリン作動性シナプス前オートレセプター。CRPS の局所治療に。三叉神経領域CRPSの存在自体が議論中。</li>
                    <li><strong>Tizanidine（チザニジン）</strong>：筋緊張性頭痛・神経障害性疼痛に。</li>
                    <li><strong>Buspirone</strong>：5-HT1Aで前述。</li>
                  </ul>
                  <p>これらは<strong>脳レベルの上流入力を抑制</strong>するため、末梢だけでなく中枢にも作用するのが強み。</p>
                </div>

                <div>
                  <h5 className="font-bold text-indigo-700 mb-2">B-9. 受容体・イオンチャネルの「非永続性（mortality）」</h5>
                  <p>
                    神経は傷害や圧迫で<strong>Nav1.8（電位依存性ナトリウムチャネル）をアップレギュレート</strong>する。Nav1.8 は開きやすく閉じにくく、麻酔に対して<strong>通常の5倍</strong>量が必要。この異常チャネルが神経障害性疼痛の要。
                  </p>
                  <p className="mt-2">
                    皮膚細胞が更新されるように、イオンチャネル・Gタンパク共役受容体も寿命を持ち、長期に神経活動を抑制すれば<strong>DNAが正常チャネル産生にフェノタイプ・スイッチ</strong>する可能性がある。Dr. Clark の臨床経験では<strong>およそ9か月〜1年</strong>で処方更新が不要になる症例が多い。「抗生物質のような即効性はない。<strong>患者の期待値設定（expectation setting）</strong>こそが治療の要」
                  </p>
                </div>
              </div>
            </section>

            {/* 質疑応答 for Clark */}
            <section>
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                Part B 質疑応答
              </h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">

                <div className="border-l-4 border-indigo-300 pl-3">
                  <p className="font-bold text-indigo-800">Q（Dr. Brown）：Duloxetine は下行性疼痛抑制を強めるが、クレンチングも誘発する。どう折り合いをつける？</p>
                  <p>
                    A：「オピオイド誘発痛覚過敏（opioid-induced hyperalgesia）と同じジレンマ。クレンチングが強い症例では<strong>血中濃度測定</strong>を行い、過量暴露かどうかを確認すべき」
                  </p>
                </div>

                <div className="border-l-4 border-indigo-300 pl-3">
                  <p className="font-bold text-indigo-800">Q：Buspirone は昼間のブラキシズムにも効くか？</p>
                  <p>
                    A：「SSRI誘発のアカシジア様症状は昼間の顔面筋緊張としても出現する。患者の症状出現時間帯に合わせ、半減期を考慮して投薬タイミングを決める」
                  </p>
                </div>

                <div className="border-l-4 border-indigo-300 pl-3">
                  <p className="font-bold text-indigo-800">Q（Dr. Mishra）：ファーマコゲノミクス検査をどのタイミングで行うべきか？</p>
                  <p>
                    A：「標準治療に抵抗性の症例と、SSRI/SNRI服用中のクレンチング患者に限って血中濃度測定を。23andMe 倒産後、ゲノム解析の選択肢は狭まっているが、血中濃度なら安価で即実施可能」
                  </p>
                </div>

                <div className="border-l-4 border-indigo-300 pl-3">
                  <p className="font-bold text-indigo-800">Q：Botoxの主観的効果に惑わされず、客観評価するには？</p>
                  <p>
                    A：「<strong>スプリントをデジタルスキャンし、3か月後の摩耗を計測</strong>する試験デザインを推奨。保険でBotoxが未カバーのため discontinuation data が蓄積されない点も問題」
                  </p>
                </div>

              </div>
            </section>

            {/* まとめ */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mt-8">
              <h4 className="font-bold text-indigo-900 mb-2">全体のテイクホーム・メッセージ</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-indigo-900">
                <li>PTTN は慢性（3か月以上）＋6か月以内の外傷・感染歴＋陽性症状で診断。両側性化は中枢変化進行のサイン。</li>
                <li>TCA は最も有効だが最も忍容性が悪い。局所（topical）＋口腔内ステントは副作用を最小化する強力な戦略。</li>
                <li>NICO は存在しない診断概念（2026年末に欧州発コンセンサスレビュー予定）。</li>
                <li>SSRI／SNRI／覚醒剤は「運動亢進」を介してブラキシズムとクレンチングを誘発する。<strong>Get the backstory</strong>。</li>
                <li>CYP2D6・CYP2C19 多型で血中濃度が2〜3倍になる患者が10％存在。疑わしい症例では<strong>血中濃度測定</strong>（$66程度）を。</li>
                <li>Botox の客観的抗ブラキシズム効果は極めて限定的。プラセボ効果を排除できていない研究に注意。</li>
                <li>慢性痛薬の評価は<strong>2週間ではなく2〜3か月</strong>単位で。「早期副作用／後期効果」のメッセージを事前に患者と共有することが治療成功の鍵。</li>
                <li>神経系にも<strong>mortality（寿命）</strong>があり、長期の神経抑制で phenotypic switching が起き、9か月〜1年で減薬可能になる症例がある。</li>
              </ul>
            </div>

          </div>
        </div>
      )
    }
  ]
};
