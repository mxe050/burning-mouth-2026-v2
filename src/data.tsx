import { ReactNode } from 'react';
import { 
  BookOpen, 
  Activity, 
  Brain, 
  Stethoscope, 
  Pill, 
  MessageCircle, 
  AlertCircle, 
  HeartHandshake,
  ShieldCheck,
  Zap,
  RefreshCw,
  Smile,
  History,
  Globe,
  Microscope,
  FileText,
  ExternalLink,
  Info,
  Search
} from 'lucide-react';
import { Chapter } from './types';
import { definitionChapter } from './data/definition';
import { epidemiologyChapter } from './data/epidemiology';
import { relationshipChapter } from './data/relationship';
import { similaritiesChapter } from './data/similarities';
import { pathophysiologyChapter } from './data/pathophysiology';
import { treatmentMechanismChapter } from './data/treatmentMechanism';
import { expertDiscussionChapter } from './data/expertDiscussion';
import { expertLecturesChapter } from './data/expertLectures';

export const coverChapter: Chapter = {
  id: "chapter-cover",
  title: "表紙・はじめに",
  icon: <Info className="w-5 h-5" />,
  subSections: [
    {
      id: "cover-disclaimer",
      title: "免責事項および本資料について",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mt-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">バーニングマウス症候群<br className="md:hidden" />（舌痛症）解説</h1>
            <p className="text-lg text-gray-600">専門医の見解とアプローチ</p>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100 space-y-6 text-sm md:text-base text-gray-800">
            <p className="leading-loose">
              本資料に引用した参考文献については、URLの存在は確認していますが、記載内容と文献原文との完全な一致については検証を行っていません。また、文献の検索はシステマティックレビューに基づくものではなく、AIによる検索を用いているため、特定の論文が優先的に選出されている可能性があることをご了承ください。
            </p>
            <p className="leading-loose">
              「個人的見解」の章を除く各章の記述は、世界的な動向を客観的に示すことを目的として、著者個人の経験を排し、公平性に配慮した内容となっています。また、可能な限り現行の論文・文献に基づいた記載を心がけています。
            </p>
            <p className="leading-loose">
              著者は、本解説作成時は地方の口腔外科医で、毎週数名の「舌がピリピリします・口が乾きます」という新患の診察をしています。また、できる限り再診するかどうかは患者に決めてもらっています。そして、軽症患者への薬物療法に否定的な立場であるので（薬物治療が必要な方は紹介している）、解説をうのみにしないこと。
            </p>
          </div>
        </div>
      )
    }
  ]
};

export const chapters: Chapter[] = [
  coverChapter,
  definitionChapter,
  epidemiologyChapter,
  relationshipChapter,
  similaritiesChapter,
  pathophysiologyChapter,
  treatmentMechanismChapter,
  {
    id: "chapter-treatments",
    title: "治療法および成功率",
    icon: <Pill className="w-5 h-5" />,
    subSections: [
      {
        id: "treatments",
        title: "治療法および成功率",
        content: (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              BMSには確立された単一の治療法（完治させる方法）は存在せず、症状を管理・軽減することを目的としたアプローチが行われます<span className="text-xs text-gray-500 ml-1">（参考文献：『Burning mouth syndrome - Diagnosis and treatment - Mayo Clinic』）</span>。
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 text-sm text-yellow-800">
              <strong>重要：</strong>以下の治療法が文献で報告されていますが、いずれの文献においても具体的なパーセンテージによる「成功率の記載なし」となっています。原発性BMSを確実に治療する方法や確立された治癒率は存在せず、一人の人に効いた治療が別の人に効くとは限らないとされています。
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "クロナゼパム", desc: "抗てんかん薬 / ベンゾジアゼピン系。全身投与または局所投与で使用。TRPV1受容体を脱感作する作用があり、痛みのコントロールに役立ちます。" },
                { title: "α-リポ酸", desc: "神経痛の緩和に役立つ可能性のある抗酸化物質。最大2ヶ月間の追跡調査で痛みの有意な改善が報告されています。" },
                { title: "カプサイシン", desc: "唐辛子成分。痛みを和らげる局所薬として使用され有意な改善を示しましたが、副作用として顕著な消化不良を引き起こすことが報告されています。" },
                { title: "心理療法・認知行動療法（CBT）", desc: "不安やうつ病に対処し、慢性的な痛みに対処するための実践的なスキルを身につけるための治療であり、痛みの改善に有効な結果を示しています。" },
                { title: "舌プロテクター", desc: "物理的保護。歯と舌の物理的な接触を防ぐマウスピースのような装置で、有望な結果を示しています。" },
                { title: "抗てんかん薬・三環系抗うつ薬など", desc: "ガバペンチン、プレガバリン、神経痛ブロック薬など。損傷した末梢神経の異常な興奮を抑えることで、神経障害性疼痛を軽減するために使用されます。" },
                { title: "唾液代替物やリドカインの洗口液", desc: "ドライマウスの緩和や、一時的に口内を麻痺させて痛みを和らげる対症療法です。" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold text-gray-900 mb-1">{i + 1}. {item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <span className="inline-block mt-2 text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">成功率の記載なし</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "recent-sr-results",
        title: "近年のSRの結果",
        content: (
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <h3 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2">
              最近（2026年3月作成）のSR（レビューを含む）の結果より
            </h3>

            {/* SR 1 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-indigo-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-lg text-indigo-900">
                  1. Tan HL, Smith JG, Hoffmann J, Renton T. A systematic review of treatment for patients with burning mouth syndrome.
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Cephalalgia. 2022 Feb;42(2):128-161. doi: 10.1177/03331024211036152. Epub 2021 Aug 18. PMID: 34404247; PMCID: PMC8793318.
                </p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8793318/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2 bg-blue-100 px-2 py-1 rounded">
                  <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                </a>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-2 mb-2">結果</h5>
                  <p>
                    RCT22件中20件がメタ分析。選択基準に基づき22件の研究を選定し、分析を行った。灼熱口内症候群の治療法として、<strong>抗けいれん薬および抗うつ薬、植物性医薬品およびα-リポ酸サプリメント、低出力レーザー療法、唾液代替剤、経頭蓋磁気刺激、認知行動療法</strong>の9つのカテゴリーが特定された。
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm bg-gray-50 p-3 rounded">
                    <li><strong>認知行動療法、カプサイシン外用剤およびクロナゼパム、ならびにレーザー療法</strong>は、短期および長期の評価の双方において良好な結果を示した。</li>
                    <li><strong>植物性医薬品</strong>については、疼痛スコアの低減において短期的な効果が報告された。</li>
                    <li><strong>α-リポ酸（ALA）</strong>による疼痛スコアの改善に関する統合効果は低かったが、その肯定的な効果は長期評価において増大した。</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-gray-400 pl-2 mb-2">エビデンスの確実性の記載</h5>
                  <p>なし</p>
                </div>
                
                <div className="my-6">
                  <img src="/bmj1-1.jpg" alt="Figure 2. Forest plot showing standardised mean differences" className="w-full rounded-lg shadow-sm border border-gray-200" />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Figure 2. Forest plot showing standardised mean differences (SMD) and 95% confidence intervals for short-term outcomes (2 months and 3 months) of RCTs comparing an intervention with placebo for the treatment of BMS (with separate pooled effects for ALA).
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-bold text-yellow-800 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> 個人的見解
                  </h5>
                  <p className="text-sm text-yellow-900">
                    フォレストプロットより、マルチ介入のメタ分析であり、ほぼほぼ各介入は、この症例数でと思われる、一つの小さなRCTからであり、エビデンスの確実性は、<strong>「“極めて”非常に低い」</strong>と判断できる。結果は、SMDであり、各介入がプラセボより、優位ではあるが、どれが良いか不明で、結果の利用は困難と思われる。
                  </p>
                </div>
              </div>
            </div>

            {/* SR 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-indigo-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-lg text-indigo-900">
                  2. Lu C, Yang C, Li X, Du G, Zhou X, Luo W, Du Q, Tang G. Effects of low-level laser therapy on burning pain and quality of life in patients with burning mouth syndrome: a systematic review and meta-analysis.
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  BMC Oral Health. 2023 Oct 9;23(1):734. doi: 10.1186/s12903-023-03441-w. PMID: 37814265; PMCID: PMC10561515.
                </p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10561515/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2 bg-blue-100 px-2 py-1 rounded">
                  <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                </a>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-2 mb-2">結果</h5>
                  <p>
                    BMS患者計550名を対象とした14件のRCTが選択基準を満たした。その結果、<strong>LLLT</strong>（視覚的アナログ尺度で測定；SMD：-0.87、95% CI：-1.29～-0.45、P＜0.001）は、プラセボLLLTやクロナゼパムと比較して、<strong>灼熱痛の軽減により有効</strong>であることが示された。
                  </p>
                  <p className="mt-2">
                    また、LLLTは生活の質（Oral Health Impact Profile-14で評価； SMD：0.01、95% CI：-0.58～0.60、P＝0.97）および否定的感情（Hospital Anxiety and Depression Scaleにより評価；SMD：-0.12、95% CI：-0.54～0.30、P＝0.59）を改善したが、これらの効果は統計的に有意ではなかった。
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-gray-400 pl-2 mb-2">エビデンスの確実性の記載</h5>
                  <p>Additional file 2 shows the GRADE assessments.</p>
                </div>
                
                <div className="my-6 space-y-6">
                  <div>
                    <img src="/bmj2-1.jpg" alt="Additional file 2 Results of the GRADE assessment." className="w-full rounded-lg shadow-sm border border-gray-200" />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Additional file 2 Results of the GRADE assessment.
                    </p>
                  </div>
                  <div>
                    <img src="/bms2-2.jpg" alt="Fig. 4 Forest plot and meta-analysis of changes in pain intensity." className="w-full rounded-lg shadow-sm border border-gray-200" />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Fig. 4 Forest plot and meta-analysis of changes in pain intensity. Subgroup analysis with different intervention methods as moderators
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-bold text-yellow-800 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> 個人的見解
                  </h5>
                  <p className="text-sm text-yellow-900">
                    GRADEアプローチでエビデンスの確実性を<strong>「非常に低」</strong>としており評価できる（本文にそれが書いてない？）。レーザーでブラインドしてあるRCTもあるので、それでサブグループにするとよいかも。Fig. 4を見ると、同じ研究者の重複が多いので、なかなか結果を利用するのは難しい。優位ではあるが、臨床的に意味のある効果かどうかは疑問視されるだろう。
                  </p>
                </div>
              </div>
            </div>

            {/* SR 3 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-indigo-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-lg text-indigo-900">
                  3. Porporatti AL, Schroder ÂGD, Lebel A, Moreau N, Misery L, Alajbeg I, Braud A, Boucher Y. Is burning mouth syndrome associated with stress? A meta-analysis.
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  J Oral Rehabil. 2023 Nov;50(11):1279-1315. doi: 10.1111/joor.13536. Epub 2023 Jul 4. PMID: 37332081.
                </p>
                <a href="https://onlinelibrary.wiley.com/doi/10.1111/joor.13536" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2 bg-blue-100 px-2 py-1 rounded">
                  <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                </a>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-2 mb-2">結果</h5>
                  <p>
                    ストレスと関係がありますか?というアンケート調査を用いたすべての研究において、<strong>BMS群では対照群と比較してストレスが有意に高かった。</strong>BMS患者は、対照群と比較してコルチゾール値が25.73％高く、IgA値が28.17％高く、α-アミラーゼ値が40.62％高かった。
                  </p>
                  <p className="mt-2">
                    メタ解析の結果、BMS被験者は対照群と比較して、コルチゾール値が3.01 nmol/L [0.53; 5.50]高く、α-アミラーゼ値が84.35 kU/L [15.00; 153.71]高いα-アミラーゼ値、29.25 mg/mL [9.86; 48.64]高いIgA値、および258.59 pg/mL [59.24; 457.94]高いIL-8値を示した。
                  </p>
                  <p className="mt-2 text-sm bg-gray-50 p-3 rounded">
                    オピオルフィンの濃度（ng/mL）[−0.96; 2.53]については、差は認められなかった。インターロイキンについては、IL-1β、IL-2、IL-4、IL-6、IL-8、IL-10、およびTNF-αのいずれについても、差は認められなかった。
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-gray-400 pl-2 mb-2">エビデンスの確実性の記載</h5>
                  <p>アンケート調査であり、なし</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-bold text-yellow-800 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> 個人的見解
                  </h5>
                  <p className="text-sm text-yellow-900">
                    「メタアナリシスではBMS被験者でコルチゾール、αアミラーゼ、IgA、IL-8のバイオマーカーレベルが対照群と比較して高かったことが判明しました」との事だが、それで？という感じだ。個人的には、ストレスというか、恒例の独居（だから女性が多い）で暇というストレスの方が多い気がする。まあ、こんな研究もあるんだ～とは勉強になった。
                  </p>
                </div>
              </div>
            </div>

            {/* SR 4 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-indigo-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-lg text-indigo-900">
                  4. Canfora F, Coppola N, Calabria E, Armogida NG, Mignogna MD, Spagnuolo G, Adamo D. Management strategies for burning mouth syndrome: a comprehensive review.
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  J Oral Facial Pain Headache. 2026 Jan;40(1):1-24. doi: 10.22514/jofph.2026.001. Epub 2026 Jan 12. PMID: 41607318; PMCID: PMC12853153.
                </p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12853153/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2 bg-blue-100 px-2 py-1 rounded">
                  <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                </a>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-indigo-500 pl-2 mb-2">結果</h5>
                  <p>
                    BMSの治療は、単なる症状の緩和にとどまらず、身体的および心理的側面の両方にアプローチし、患者が制限なく通常の活動に戻れるようにすることを目指す<strong>「完全な機能回復（FFR）」</strong>の実現に重点を置くよう進化している。
                  </p>
                  <p className="mt-2">
                    クロナゼパムやカプサイシンといった主要な薬物療法に加え、BMSの多因子的な性質に対処する上で有望視されている、各種抗うつ薬（三環系抗うつ薬、選択的セロトニン再取り込み阻害薬、セロトニン・ノルアドレナリン再取り込み阻害薬、ボルチオキセチンなど）や抗てんかん薬といった新規薬剤の可能性についても詳細に検討される。
                  </p>
                  <p className="mt-2">
                    認知行動療法（CBT）、低出力レーザー療法（LLLT）、経頭蓋磁気刺激（TMS）などの非薬物療法は、薬物療法を補完する可能性が注目されている。
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 border-l-4 border-gray-400 pl-2 mb-2">エビデンスの確実性の記載</h5>
                  <p>なし：comprehensive reviewとある。</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-bold text-yellow-800 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> 個人的見解
                  </h5>
                  <p className="text-sm text-yellow-900">
                    comprehensive reviewとあるが、病態生理の総論みたいなもの。
                  </p>
                </div>
              </div>
            </div>

            {/* 参考にしなかったSR */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">参考にしなかったSR</h4>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h5 className="font-bold text-gray-900">
                    McMillan R, Forssell H, Buchanan JA, Glenny A-M, Weldon JC, Zakrzewska JM. Interventions for treating burning mouth syndrome.
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Cochrane Database of Systematic Reviews 2016, Issue 11. Art. No.: CD002779. DOI: 10.1002/14651858.CD002779.pub3.
                  </p>
                  <a href="https://www.cochrane.org/ja/evidence/CD002779_interventions-treating-burning-mouth-syndrome" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2">
                    <ExternalLink className="w-3 h-3 mr-1" /> リンク
                  </a>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-sm"><strong className="text-gray-700">理由：</strong> コクランレビューだが、古いため</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h5 className="font-bold text-gray-900">
                    Rossetti A, Teixeira A, Milhazes N. Efficacy of different therapeutic options for pain relief and treatment of burning mouth syndrome: a systematic review.
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Clin Oral Investig. 2025 Nov 6;29(11):551. doi: 10.1007/s00784-025-06608-7. PMID: 41193828.
                  </p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/41193828/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2">
                    <ExternalLink className="w-3 h-3 mr-1" /> リンク
                  </a>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-sm mb-2"><strong className="text-gray-700">理由：</strong> 有力で手に入らず</p>
                    <div className="text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                      <strong>抄録の結果：</strong>アルファリポ酸、外用／全身投与のクロナゼパム、低出力レーザー療法（LLLT）、カプサイシン、メラトニン、ガバペンチン、認知行動療法など、14の介入法が特定された。外用クロナゼパム、アルファリポ酸、およびLLLTは、軽度の副作用がほとんど見られない一方で、一貫して最も顕著な症状の改善を示した。臨床的および方法論的な多様性が大きいため、質的統合のみが行われました。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "chapter-terminology",
    title: "バーニングマウス症候群の用語まとめ",
    icon: <MessageCircle className="w-5 h-5" />,
    subSections: [
      {
        id: "terminology",
        title: "バーニングマウス症候群の用語まとめ",
        content: (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              歴史的および世界的な文献において、バーニングマウス症候群（BMS）は、様々な名称で呼ばれてきました。代表的な同義語や関連用語として以下が挙げられます<span className="text-xs text-gray-500 ml-1">（参考文献：『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』）</span>。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Stomatodynia（口腔痛 / 舌痛症）",
                "Stomatopyrosis（口腔灼熱症）",
                "Glossodynia（舌痛）",
                "Glossopyrosis（舌灼熱症）",
                "Oral dysesthesia（口腔感覚異常）",
                "Sore mouth（口腔痛）",
                "Sore tongue（舌痛）",
                "Burning tongue（舌灼熱感）"
              ].map((term, i) => (
                <span key={i} className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-2 rounded-full text-sm font-medium">
                  {term}
                </span>
              ))}
            </div>

            {/* New Content Start */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
                <Search className="w-6 h-6 mr-2 text-indigo-600" />
                BMSシステマティックレビュー検索式の網羅的比較一覧
              </h3>
              <p className="mb-6">
                既存の主要なバーニングマウス症候群（BMS）のシステマティックレビュー（メタ解析やプロトコルを含む）から抽出された検索式および検索語の組み合わせを以下の表に集約します。
              </p>

              {/* Diagram / Visual Summary */}
              <div className="bg-indigo-50 rounded-xl p-6 mb-8 border border-indigo-100 shadow-sm">
                <h4 className="font-bold text-indigo-900 mb-4 text-center">主要な検索キーワードの傾向</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-200 text-center">
                    <span className="block text-xs text-gray-500 mb-1">中核キーワード</span>
                    <strong className="text-indigo-700">Burning mouth syndrome / BMS</strong>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-200 text-center">
                    <span className="block text-xs text-gray-500 mb-1">医学的同義語</span>
                    <strong className="text-indigo-700">Stomatodynia / Glossodynia</strong>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-200 text-center">
                    <span className="block text-xs text-gray-500 mb-1">症状表現</span>
                    <strong className="text-indigo-700">Oral dysesthesia / Glossopyrosis</strong>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 w-1/4">論文の著者・発表年<br/><span className="text-xs font-normal text-gray-500">(主題)</span></th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 w-1/4">検索対象データベース</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 w-1/2">実際の検索式・検索語の構造</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">McMillan et al., 2016</div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（BMSに対する治療介入全般：Cochrane Review）</div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/27855478/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Cochrane Oral Health's Trials Register</li>
                          <li>MEDLINE</li>
                          <li>EMBASE</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-xs text-gray-800 space-y-1">
                          <div>1 ("burning mouth":ti,ab)</div>
                          <div>2 ("burning tongue":totalling,ab)</div>
                          <div>3 (glossodynia:ti,ab)</div>
                          <div>4 (glossopyrosis:ti,ab)</div>
                          <div>5 ((stomatodynia or stomatopyrosis):ti,ab)</div>
                          <div>6 (("oral dysaesthesia" or "oral dysesthesia"):ti,ab)</div>
                          <div>7 (BMS:ti,ab)</div>
                          <div className="font-bold text-indigo-700 pt-1 border-t border-gray-200 mt-1">8 (#1 or #2 or #3 or #4 or #5 or #6 or #7) AND (INREGISTER)</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">Tan et al., 2022</div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（BMS患者に対する治療法のシステマティックレビュー）</div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/35099042/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>PubMed Medline</li>
                          <li>Embase Ovid</li>
                          <li>Cochrane Database of Systematic Reviews</li>
                          <li>CENTRAL</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-xs text-gray-800">
                          “burning mouth syndrome <strong className="text-indigo-600">or</strong> glossalgia <strong className="text-indigo-600">or</strong> stomatodynia <strong className="text-red-600">AND</strong> treatment <strong className="text-indigo-600">or</strong> therapy <strong className="text-indigo-600">or</strong> therapeutic <strong className="text-indigo-600">or</strong> management”
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">Wu et al., 2022</div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（BMSの世界的な有病率の推定：疫学メタ解析）</div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/35133674/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>PubMed</li>
                          <li>EMBASE</li>
                          <li>Web of Science</li>
                          <li>Cochrane</li>
                          <li>CNKI</li>
                          <li>Wanfang database</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="text-xs text-gray-500 mb-1">（以下の検索語の組み合わせを適用）</div>
                        <div className="flex flex-wrap gap-1">
                          {["Burning mouth syndrome", "stomatodynia", "stomatopyrosis", "glossopyrosis", "glossodynia", "oral dysesthesia", "glossalgia", "etiology", "aetiology", "pathogenesis", "aetiopathogenesis", "pathophysiology"].map((term, idx) => (
                            <span key={idx} className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs">"{term}"</span>
                          ))}
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">Al-Maweri et al., 2017</div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（BMSの治療における低出力レーザー療法の有効性）</div>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/28714545/" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>PubMed</li>
                          <li>Embase</li>
                          <li>Scopus</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="text-xs text-gray-500 mb-1">（以下のキーワードの様々な組み合わせを使用）</div>
                        <div className="flex flex-wrap gap-1">
                          {["burning mouth syndrome", "BMS", "stomatodynia", "laser therapy", "laser treatment", "phototherapy"].map((term, idx) => (
                            <span key={idx} className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs">{term}</span>
                          ))}
                        </div>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">Capsaicin Review<br/><span className="text-xs font-normal text-gray-500">(CRD42022379471)</span></div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（局所カプサイシン適用の効果：プロトコル）</div>
                        <a href="https://www.crd.york.ac.uk/prospero/display_record.php?RecordID=379471" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>PubMed</li>
                          <li>Ovid SP</li>
                          <li>Cochrane</li>
                          <li>LILACS</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-xs text-gray-800">
                          (Capsaicin) <strong className="text-red-600">AND</strong> (Burning mouth)
                        </div>
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-top">
                        <div className="font-bold text-gray-900">Pauletto et al., 2025<br/><span className="text-xs font-normal text-gray-500">(Protocol)</span></div>
                        <div className="text-xs text-gray-600 mt-1 mb-2">（BMSと微量栄養素欠乏の有病率: BMJ Open）</div>
                        <a href="https://bmjopen.bmj.com/content/15/2/e089249" target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                          <ExternalLink className="w-3 h-3 mr-1" /> 論文リンクを開く
                        </a>
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>MEDLINE</li>
                          <li>Embase</li>
                          <li>LILACS</li>
                          <li>Scopus</li>
                          <li>Web of Science</li>
                          <li>灰色文献</li>
                        </ul>
                      </td>
                      <td className="px-4 py-4 align-top text-sm">
                        <div className="text-xs text-gray-500 mb-1">（以下の検索語を用いて構築）</div>
                        <div className="flex flex-wrap gap-1">
                          {["Burning Mouth Syndrome", "stomatodynia", "glossopyrosis", "micronutrients", "vitamins"].map((term, idx) => (
                            <span key={idx} className="bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs">"{term}"</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "chapter-personal-view",
    title: "個人的見解（舌痛症：口腔顔面痛）",
    icon: <AlertCircle className="w-5 h-5 text-indigo-600" />,
    subSections: [
      {
        id: "personal-view",
        title: "個人的見解の概要",
        content: (
          <div className="space-y-6 text-gray-700 leading-relaxed bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <p>
              舌痛症の患者さんは、朝のうちは比較的調子が良く、昼過ぎから夜にかけて徐々に痛みが悪化していく傾向が多く見られます。また、「舌が痛いにもかかわらず、会話や食事は問題なくできる」というのも大きな特徴です。もちろん例外となる方もいらっしゃいますが、このパターンに当てはまる方の比率が非常に高いように感じます。
            </p>
            <p>
              さらに、こうした患者さんの口腔内は比較的きれいに保たれており、健康に対する意識が高いことも特徴です。私の臨床経験上、強いストレスを抱えている方というよりも、むしろ一人暮らしの女性や、日中の活動が少なく時間を持て余している方（暇にしている人）に多く見受けられます。
            </p>
            <p>
              いわゆる舌痛症の実際の臨床現場においての分類は、<strong>「軽度・軽症」と「重度・重症」とすることが有用</strong>と考えています。重度の方に関しては、現在世界的に主流となっている抗うつ剤などの薬物治療に頼らざるを得ないケースが多いというロジックになるでしょう。
            </p>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-indigo-100">
              <p className="font-medium text-indigo-900">
                しかし実際には、軽度な症状を抱えている方もかなりの数にのぼります。ここが重要なのですが、軽度な方と重度な方とでは、治療のアプローチを明確に変えるべきです。
              </p>
              <p className="mt-2 text-indigo-800">
                軽度の方に対しては、薬に頼るのではなく、まずは患者さんの辛さにしっかりと共感しつつ、痛みを増幅させている「認知」や「無意識の癖」をいかに治していくか、という点にポイントを置いた説明と指導が有効だと考えております。
              </p>
            </div>
            <p>
              舌痛症の厳密な定義には当てはまらないほどの軽微な症状の方も多く存在します。そうした方々は、口腔顔面痛の専門医・口腔内科医の治療対象者になっておらず、現在の世界の主流となっている治療法やロジックから完全に見放されてしまっているように感じてなりません。これはあくまで私個人の見解ではありますが、こうした軽度な方々が、実は地方の総合病院の口腔外科には多いにも関わらず、敷居が高い大学病院には少ないので、専門医に見逃されているかもしれません。その多くの軽度な方は、口腔顔面痛の知識が少ない、歯科医師・口腔外科医によって、「正常です」「問題ないと思います」という言葉だけで済まされ、軟膏をだされるだけで、かえって悪化しているケースも少なくないと考えている。さらには、安易に「ストレスです」とレッテルを貼ったり、抗真菌剤の処方を行っている場合も多いです。患者は、「正常・思う・多分」という用語に敏感に反応します。
            </p>
          </div>
        )
      },
      {
        id: "vicious-cycle",
        title: "舌痛症：無意識の摩擦が招く神経ダメージの悪循環",
        content: (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h3 className="text-xl font-bold text-indigo-900 text-center py-4 border-b-2 border-indigo-100">
              「自然なピリピリ感から無意識に歯で舌を触ってしまい、それが悪循環となって見えない擦過創（すり傷）のようになる」
            </h3>
    
            <div className="space-y-8 mt-6">
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-indigo-100"></div>
                
                {/* Step 1 */}
                <div className="relative mb-8 md:flex items-start">
                  <div className="absolute -left-[37px] md:static md:shrink-0 md:mr-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10">1</div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">発端となる違和感と無意識の接触（口腔内悪習癖）</h4>
                    <p>BMSの患者は、初期症状として舌に「ピリピリ感」や「何かがへばりついているような異物感」を感じることがよくあります（幻肢痛とまではいきませんが）。この気になる感覚を和らげようとして、知らず知らずのうちに舌を歯に押し当てたり、こすりつけたりしてしまいます。</p>
                    <p className="mt-2">実際、BMS患者の多くには、歯ぎしりや食いしばりといった無意識の「口腔内の悪習癖（Oral habits）」が関与していることが分かっています（本邦でいうところの、TCH・舌の圧痕がある方も多い）。</p>
                  </div>
                </div>
    
                {/* Step 2 */}
                <div className="relative mb-8 md:flex items-start">
                  <div className="absolute -left-[37px] md:static md:shrink-0 md:mr-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10">2</div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">見た目には分からない「ミクロの擦過創」（微小神経の物理的ダメージ）</h4>
                    <p>肉眼で見ると舌は赤く健康そうで、目に見える傷（擦過創）は一切ありません。しかし、顕微鏡を用いた組織生検で観察すると、舌の表面近くにある「痛みを感知する微細な神経（小径線維）」が物理的なダメージを受けており、神経線維の密度が30％〜60％も減少していることが判明しています。</p>
                    <p className="mt-2">残っている神経も軸索が変性するなどのダメージを受けており、肉眼では見えないだけで、舌の粘膜下では確実に「ミクロの擦過創（神経の損傷）」が起きています。</p>
                    
                    <div className="mt-4 bg-gray-50 p-4 rounded border-l-4 border-gray-400 text-sm">
                      <h5 className="font-bold text-gray-800 mb-1">追加：Lauria 2005：Trigeminal small-fiber sensory neuropathy causes burning mouth syndrome</h5>
                      <p className="text-gray-500 mb-2">Pain. 2005 Jun;115(3):332-337. URL：<a href="https://pubmed.ncbi.nlm.nih.gov/15911160/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://pubmed.ncbi.nlm.nih.gov/15911160/</a></p>
                      <p><strong>【背景】</strong>舌痛症（BMS）は、舌（特に前方3分の2）に持続的なヒリヒリとした痛みや灼熱感が生じる疾患で、50〜70代の女性に多く見られます。見た目には異常がないため、長年にわたり「心理的な原因（心因性）」によるものだと考えられてきました。</p>
                      <p className="mt-1"><strong>【研究内容】</strong>研究チームは、舌痛症が「末梢神経のダメージ」によって引き起こされているのではないかという仮説を立てました。これを検証するため、6ヶ月以上舌痛症を患っている患者12名と、健康な対照群9名の舌から組織を採取（生検）し、顕微鏡を用いて神経線維の分布や状態を比較観察しました。</p>
                      <p className="mt-1"><strong>【結果と結論】</strong>患者群の舌の粘膜上皮では、健常者群と比較して細径神経線維（痛覚などを伝える細い神経）の密度が明らかに低下しており、神経線維が変性（萎縮やダメージ）している様子が観察されました。この結果から、著者らは「舌痛症は心理的なものではなく、三叉神経の小径線維の神経障害（ニューロパチー）が原因である」と結論づけています。</p>
                      <div className="mt-2 bg-red-50 p-2 rounded border border-red-100">
                        <p className="text-red-800"><strong>批判的な問題点：【年齢要因の交絡（バイアス）】</strong></p>
                        <p className="text-red-900 mt-1">
                          ネットで本論文に対しての吟味があった。樋口先生によると「研究対象となった舌痛症患者のグループは高齢者でしたが、対照となったグループ合は若年者であり、群間に差異があったからです。細径神経の萎縮は加齢による変化を観察しただけなのかもしれません。」と分析している。<br />
                          <span className="text-sm">参考：<a href="https://www.koku-naika.com/%E3%81%8B%E3%81%A4%E3%81%A6%E8%88%8C%E7%97%9B%E7%97%87%E3%81%8C%E7%A5%9E%E7%B5%8C%E9%9A%9C%E5%AE%B3%E7%96%BC%E7%97%9B%E3%81%A8%E3%81%95%E3%82%8C%E3%81%9F%E6%A0%B9%E6%8B%A02/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all">https://www.koku-naika.com/%E3%81%8B%E3%81%A4%E3%81%A6%E8%88%8C%E7%97%9B%E7%97%87%E3%81%8C%E7%A5%9E%E7%B5%8C%E9%9A%9C%E5%AE%B3%E7%96%BC%E7%97%9B%E3%81%A8%E3%81%95%E3%82%8C%E3%81%9F%E6%A0%B9%E6%8B%A02/</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Step 3 */}
                <div className="relative mb-8 md:flex items-start">
                  <div className="absolute -left-[37px] md:static md:shrink-0 md:mr-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10">3</div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">知覚過敏化と悪循環の増幅</h4>
                    <p>微細な神経がダメージを受けると、残された神経はそれを補おうとして「痛みを感じるセンサー（TRPV1やP2X3などの受容体）」を異常に増やしてしまいます。このセンサーは本来、強い熱や痛みにだけ反応するものですが、異常に増殖することで舌が極度の「知覚過敏状態」に陥ります。</p>
                    <p className="mt-2">その結果、「舌を歯で少し触る」程度の本来なら痛みを感じないはずの微小な摩擦であっても、過敏になったセンサーが過剰に反応し、さらに強い「ピリピリ感」や「灼熱痛」として脳に伝わってしまいます。舌痛症の方は、口腔内がきれいで口腔管理の意識が高い方が多い。さらには、他に大きな病気があると痛みを忘れていることも多い。</p>
                  </div>
                </div>
    
                {/* Step 4 */}
                <div className="relative mb-8 md:flex items-start">
                  <div className="absolute -left-[37px] md:static md:shrink-0 md:mr-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10">4</div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">悪循環の完成</h4>
                    <p>痛みが強くなることで患者はさらに舌の感覚が気になり、再び無意識に舌を歯にこすりつけてしまいます。この絶え間ない物理的摩擦が、ミクロの神経ダメージとセンサーの過敏化をさらに悪化させ、抜け出せない痛みの悪循環を引き起こしていると考えられます。</p>
                    <p className="mt-2">実際、この「歯との摩擦による物理的刺激」を防ぐために、歯と舌が直接触れないようにする「舌プロテクター」を使用した治療法が有望な結果を示しているという研究報告もあり、無意識の摩擦が悪循環の要因になっていることを裏付けています。</p>
                  </div>
                </div>
    
                {/* Step 5 */}
                <div className="relative mb-8 md:flex items-start">
                  <div className="absolute -left-[37px] md:static md:shrink-0 md:mr-6 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10">5</div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">口腔乾燥との関係</h4>
                    <p>また、舌痛症の患者さんの中には、強い口腔乾燥（ドライマウス）を訴えられる方も多くいらっしゃいます。しかし、実際に口腔内を拝見すると、客観的な乾燥状態はほとんど見られず、唾液自体はしっかりと分泌されています。それにもかかわらず、「舌の上（舌背）にだけ唾液が回っていない状態」になっている方を頻繁に経験します。</p>
                    <p className="mt-2">この現象の背景には、無意識の習癖が関係しています。口をしっかりと閉じ、上下の歯を合わせた状態（TCH：歯列接触癖など）を維持していると、舌の上面が上あご（口蓋）にぴったりと密着してしまいます。そのままじっとしていると、せっかく唾液が分泌されていても、舌の上には物理的に唾液が回らなくなってしまいます。その結果として、患者さんは強い「口の中の乾燥感」を自覚することになるのです。そして、この乾燥感を感じると、それを解消しようとして無意識に生唾をごくりと飲み込んでしまい、かえって口腔内（特に舌の周囲）の唾液を失わせ、さらに乾燥状態を助長するという悪循環に陥ってしまいます。</p>
                    <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
                      <p className="font-medium text-indigo-900">
                        本来であれば、上下の歯をわずかに離し、むやみに唾液を飲み込まずに、いわゆる「赤ちゃんのお口のような、リラックスした状態」を保っていれば、自然と唾液が溜まり、舌の上にもしっかりと潤いが巡ります。
                      </p>
                      <p className="mt-2 text-indigo-800">
                        一般の方であれば自然に行えているこの状態を、舌痛症の患者さんは、過度な緊張や無意識の癖によって自ら「舌背に唾液が回らない環境」をわざわざ作り出してしまっているのです。そして、この自ら招いた乾燥状態が舌の摩擦や過敏さを生み、結果的に舌痛症をさらに悪化させる要因になっているのではないか、というのが私の個人的見解です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "cognitive-approach",
        title: "追加考察：なぜ「軽症」には身体的・認知的アプローチが有効なのか",
        content: (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-2 text-xl">5.</span>
                  脳の「痛みフィルター」と暇（ひま）の関係
                </h4>
                <p className="text-sm">
                  朝に調子が良く、夜にかけて悪化する、あるいは「暇な時に痛む」という現象は、脳のゲートコントロール理論で説明できます。何かに集中している時や運動している時は、脳から「下行性抑制系」という痛みをブロックする信号が出ますが、一人暮らしで会話が少なかったり、静かに過ごしていたりすると、脳の関心が口腔内の微細な違和感に集中してしまいます。この「注視」こそが、神経の過敏性をさらに高める増幅器となってしまいます。
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-2 text-xl">6.</span>
                  全身運動による「除痛システム」の再起動
                </h4>
                <p className="text-sm">
                  軽症の患者において全身運動が推奨されるのは、単なる気分転換ではありません。ウォーキングなどの有酸素運動は、脳内麻薬とも呼ばれるエンドルフィンやセロトニンの分泌を促し、過敏になった神経の興奮を鎮める効果があります。また、運動によって血流が改善されることで、舌粘膜下の微細な神経修復を助ける可能性も考えられます。
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-2 text-xl">7.</span>
                  「治そう」とする努力が「癖」を強める矛盾
                </h4>
                <p className="text-sm">
                  真面目で口腔意識が高い人ほど、「舌になにか異常があるのではないか」と鏡で見たり、舌で歯を確認したりする「確認行動（チェック癖）」を繰り返します。軽症の方への説明のポイントは、<strong>「舌を触って確認する行為そのものが、ミクロの擦過傷を深めている」</strong>という事実を認知してもらうことです。薬で抑えるのではなく、「舌を歯から離す（TCHの是正）」「意識を外に向ける（運動や趣味）」という行動変容こそが、物理的な神経ダメージを食い止める唯一の手段となります。
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "control-methods",
        title: "全身運動と「安心」による痛みのコントロール（治療法）",
        content: (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-8 flex items-center">
                <ShieldCheck className="w-7 h-7 mr-3 text-indigo-600" />
                【実践表】痛みを軽減するためのコントロール
              </h3>
              
              <div className="mb-10">
                <img 
                  src="/bms-pamphlet.png" 
                  alt="BMS パンフレット" 
                  className="w-full max-w-4xl mx-auto rounded-xl shadow-lg border border-gray-200"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-50 border-b border-indigo-100">
                      <th className="p-5 font-bold text-indigo-900 w-1/3 text-lg">項目</th>
                      <th className="p-5 font-bold text-indigo-900 w-2/3 text-lg">具体的な実践内容とポイント</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（１）</span>
                          痛みについて考える時間を減らし、1人でぼんやりしない
                        </div>
                      </td>
                      <td className="p-5 align-top text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                          何かに集中している時に、痛みを感じにくいことに気がついていると思います。従って<strong>その「何か」を自分で見つけて、その時間を長くしてください。</strong>（心理学・精神医学でも有用とされている方法：<strong>コービング</strong>）。もちろん、このためには、夢中になれるものを普段から意識的に作る努力が必要です。わざわざ、「痛いかな？、やっぱり痛いな？、今日も痛いかな？」などと、自分で痛みを感じる時間を増やさないようにしましょう。
                        </p>
                        <p className="bg-blue-50 p-4 rounded-lg text-sm border border-blue-100 leading-relaxed">
                          糖尿病の方は、「食事療法としてカロリーの摂取を減らす努力」が必要です。同じように、口腔顔面痛・違和感のある方は、<strong>「痛みについて考える時間を減らす努力」</strong>が必要です。なぜ、痛いかどうかを考えてしまうのか、そのような考えが頭に浮かんだ時に、別の考え方ができないか探してみましょう（<strong>認知再構成法</strong>）。
                        </p>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（２）</span>
                          痛みの原因や今後のことを考えて落ち込まない
                        </div>
                      </td>
                      <td className="p-5 align-top text-gray-700 space-y-3">
                        <p className="leading-relaxed">
                          「この痛みには原因があるはずで、それを治せば痛みがすっかり治る」・「この痛みに効く治療法などないのではないか」・「あの治療のせいだ」などといった考えを持つことは、人間として当然のことです。
                        </p>
                        <p className="leading-relaxed">
                          しかし、<strong>この思考は、痛みをさらに悪化させ、あなたが痛みをコントロールしようとする意欲も奪ってしまいます。</strong>特に、歯科医院などで、痛いことをされたとかの悪いきっかけは、原因ではありませんので忘れて下さい。
                        </p>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（３）</span>
                          積極的に、生活・趣味に打ち込む
                        </div>
                      </td>
                      <td className="p-5 align-top text-gray-700 space-y-3">
                        <p className="leading-relaxed">
                          多くの方が、これまで続けてきた趣味・外出・旅行・仕事・家事などを辞めたりします。<strong>少しでもできることは、続けましょう。</strong>このような生活のパターンが崩れると一日中痛みのことばかりを考えてしまいます。
                        </p>
                        <ul className="list-disc list-inside bg-green-50 p-4 rounded-lg text-sm border border-green-100 space-y-2 leading-relaxed">
                          <li>痛みをコントロールするには、積極的に活動することも必要なのです（うつ病の場合は、除きます）。</li>
                          <li>できれば、<strong>日光にあたってください。</strong></li>
                          <li>痛いから、何もできないと「全か無か」で判断しないでください。</li>
                        </ul>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（４）</span>
                          家族に依存しすぎない・薬に頼らない
                        </div>
                        <div className="text-sm text-gray-500 mt-2">（海外では薬も流行っていますが、当科では使いません）</div>
                      </td>
                      <td className="p-5 align-top text-gray-700">
                        <p className="leading-relaxed">
                          痛みを家族に訴えれば訴えるほど、家族は、安心して「気のせい」と思い、痛みを共感してくれなくなります。痛みがあることで何か得をしたり嫌なことをしなくて済むようになると（<strong>疾病利得</strong>）、本人が治りたいと思っているのに、無意識に治りたくないと考えてしまい、予後が悪化します。
                        </p>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（５）</span>
                          筋肉・心をリラックスさせる
                        </div>
                        <div className="text-sm text-gray-500 mt-2">（全身の運動が局所にも効果があります）</div>
                      </td>
                      <td className="p-5 align-top text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                          心が緊張したり、癖を行ったり、身体に力を入れすぎたり、筋肉が硬くなると痛みが悪化するため、軽い体操や温湿布などを行って、リラックスした状態を保ってください。
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 leading-relaxed">
                            <strong className="block text-orange-800 mb-2 text-base">呼吸法・マインドフルネス</strong>
                            特に、呼吸が大切で、<strong>腹式呼吸</strong>が良いとされています（これらの方法として、マインドフルネス・瞑想・坐禅・ヨガがあります）。
                          </div>
                          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 leading-relaxed">
                            <strong className="block text-teal-800 mb-2 text-base">筋肉の弛緩</strong>
                            一度、全身に力をいれ、息を吐きながら筋肉を緩ませる感じを感じてください。顔の力を、だらっと抜ける感覚をしっかりと意識してください（<strong>漸進的筋弛緩法</strong>・ジェイコブソン先生）。
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed bg-gray-50 p-3 rounded border border-gray-200">
                          口腔のマッサージや、顔・舌の運動も効果があります。<strong>上下の歯と歯を離すことも有用です（歯牙接触癖の改善）。</strong>
                        </p>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 align-top">
                        <div className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-indigo-600 mr-1">（６）</span>
                          癖によって痛みなどの症状が増強している方は、張り紙でゆっくりと深呼吸を繰り返す
                        </div>
                      </td>
                      <td className="p-5 align-top text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                          貼り紙をして、その癖を行わないようにしたり、上記にあるような筋肉をゆるめたり、ゆっくりと深呼吸しながら息を吐くなど違う行動（よい癖）を行うことを数カ月努力して続けてください。そして、<strong>変容行動の強化</strong>を行います（徐々に、癖が無くなってくるのを自覚する）。
                        </p>
                        <p className="bg-red-50 p-4 rounded-lg text-sm border border-red-100 leading-relaxed">
                          このような通常では疼痛をもたらさない微小刺激が、すべて疼痛としてとても痛く認識される感覚異常のことを<strong>アロディニア（allodynia）</strong>と言います。コントロールして治しましょう。
                        </p>
                        <p className="font-bold text-indigo-800 text-lg bg-indigo-50 p-3 rounded border border-indigo-100">
                          歯の接触・痛みに気が付いたら、少し肩を動かすだけで、すぐ上下の歯は離れます
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg">
                <ul className="space-y-4 font-medium text-lg mb-8">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-2xl leading-none">※</span>
                    <span>心配なのに、「この程度で受診して、良いのかな？」と思わずに、気軽に予約して下さい！</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-2xl leading-none">※</span>
                    <span>気にしないことを気にしたり、気にした後に落ち込まないでください。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-2xl leading-none">※</span>
                    <span>「一生、付き合っていかなくてはならない・我慢する・あきらめる」ことでは、ありません。</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-gray-700">
                  <p className="font-bold text-xl leading-relaxed text-yellow-50">
                    この痛みのコントロールは、痛み・違和感の増強要因を理解し、<br className="hidden md:block" />
                    これ以上悪くならい・癌ではないと、「安心」することと、気になったら深呼吸・運動を行うことで、緊張をほぐすことで、症状緩和を目指す治療です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  expertDiscussionChapter,
  expertLecturesChapter
];
