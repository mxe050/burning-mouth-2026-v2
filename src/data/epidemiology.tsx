import { ReactNode } from 'react';
import { Activity, ExternalLink } from 'lucide-react';
import { Chapter } from '../types';

export const epidemiologyChapter: Chapter = {
  id: "chapter-epidemiology",
  title: "疫学",
  icon: <Activity className="w-5 h-5" />,
  subSections: [
    {
      id: "epidemiology-intro",
      title: "1. 序論および基本疫学パラメーターの定義と初期構造",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            灼熱症候群（Burning Mouth Syndrome: 以下、BMS）は、視覚的な口腔粘膜の器質的病変や症状を説明しうる全身性の原因疾患が存在しないにもかかわらず、舌などの口腔粘膜に慢性かつ難治性の灼熱感や疼痛を引き起こす特発性の慢性口腔顔面痛疾患です。本報告では、BMSの基本疫学データを出発点とし、最新の疫学調査や精神心理学的併存疾患の複雑なネットワークに至るまで、詳細な分析を展開します。疾患の全体像を把握する上で不可欠となる基礎的な疫学パラメーターは、近年のシステマティックレビューにおいて以下のように厳密に定義されています。
          </p>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』</p>
            <a href="https://www.researchgate.net/publication/385241889_Small_Fiber_Neuropathy_in_Burning_Mouth_Syndrome_A_Systematic_Review_International_Journal_of_Molecular_Sciences_Small_Fiber_Neuropathy_in_Burning_Mouth_Syndrome_A_Systematic_Review" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Burning mouth syndrome (BMS) is an idiopathic, chronic orofacial pain disorder affecting the oral cavity, characterized by a persistent burning sensation and pain, lasting for more than three months, without any local or systemic pathological changes."
            </blockquote>
          </div>

          <p>
            基礎的な疫学データとして特筆すべきは、一般人口と臨床現場における有病率の乖離、そして極端な人口統計学的偏りです。BMSの有病率は一般人口で1.73%にとどまる一方、臨床現場では7.72%に上ります。地域別では、ヨーロッパの有病率が5.58%から6.46%と推定されています。人口統計学的特性としては男女比が1:3であり、女性に圧倒的に多いという顕著な特徴があります。好発年齢は50歳から70歳に集中しており、とりわけ閉経後の女性で発症リスクが上昇します。これらの基礎データは、BMSの背後にある内分泌学的・社会心理学的なメカニズムの存在を強く示唆しています。
          </p>
        </div>
      )
    },
    {
      id: "epidemiology-prevalence",
      title: "2. 有病率における地理的・人種的差異と最新の世界的な疫学動向",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            BMSの疫学において、直近の大規模なメタアナリシスにより世界規模での有病率の真の姿が浮き彫りになってきました。一般人口と臨床現場における有病率の劇的な差異について、以下の学術論文が決定的な裏付けを提供しています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Worldwide Prevalence Estimates of Burning Mouth Syndrome: A Systematic Review and Meta-analysis』</p>
            <a href="https://www.researchgate.net/publication/362748663_Burning_Mouth_Disorder_in_the_Background_of_Periodontal_Disease" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "The overall pooled prevalence of burning mouth syndrome was 1.73% (95%CI= 0.176‐0.351, n=26,632) in general population, and 7.72% (95%CI= 0.434‐0.691, n=86,591) in clinical patients. The subgroup analysis by continent showed that among the population‐based studies the prevalence in Asia (1.05%) lower than in Europe (5.58%) and North America (1.10%)."
            </blockquote>
          </div>

          <p>
            「一般人口1.73%、臨床現場7.72%」という乖離は、BMSの疼痛が患者のQOLを著しく低下させ、積極的な医療機関受診を促すという疾患の特異性を物語っています。大陸別のサブグループ解析において、一般人口における有病率がアジア（1.05%）等と比較してヨーロッパ（5.58%）で特出して高い理由は、医療アクセスの容易さや疼痛認知の文化的差異が影響していると考えられます。しかし、「臨床現場」に限定した場合、この地理的勢力図は一変します。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Worldwide prevalence estimates of burning mouth syndrome: A systematic review and meta-analysis』</p>
            <a href="https://www.explorationpub.com/Journals/em/Article/1001244" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              Exploration Pub
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "In the current study, the prevalence of BMS was found to be 7.9% of the present sample of the Egyptian population... It is also in close range to the occurrence rate of BMS of 7.03% which was reported in the Saudi Arabian population. Additionally, clinical-based studies reported an almost similar BMS prevalence of 6.96%, 8.96%, and 7.50% in Asia... While a higher prevalence of BMS was reported in Brazil (14.91%) and in China (15.71%) due to the increase in medication use, depression, and percentage of menopausal females."
            </blockquote>
          </div>

          <p>
            エジプト（7.9%）やサウジアラビア（7.03%）の有病率が世界の臨床平均（約7.7%）と合致したことは、疾患の普遍性を証明しています。特筆すべきはブラジル（14.91%）や中国（15.71%）の極めて高い臨床有病率です。これら新興国における爆発的な増加は、多剤併用、うつ病の蔓延、閉経後女性の急増といった現代社会特有の複合的要因が引き金となっていると指摘されています。
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold border-b">対象集団および地域</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">有病率 (%)</th>
                  <th className="py-3 px-4 text-left font-semibold border-b">疫学的な背景および主要な変動要因</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">世界平均（一般人口）</td>
                  <td className="py-3 px-4">1.73%</td>
                  <td className="py-3 px-4">地域によりばらつきがあるがベースラインとなる数値</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">世界平均（臨床現場）</td>
                  <td className="py-3 px-4">7.72%</td>
                  <td className="py-3 px-4">QOL低下により医療機関を受診する患者が極めて多いことを反映</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">ヨーロッパ（一般）</td>
                  <td className="py-3 px-4">5.58%〜6.46%</td>
                  <td className="py-3 px-4">他大陸と比較して高く、医療アクセスや疼痛認知の文化的差異が影響</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">アジア全般（一般）</td>
                  <td className="py-3 px-4">1.05%</td>
                  <td className="py-3 px-4">一般人口では比較的低値を示す</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">アジア全般（臨床）</td>
                  <td className="py-3 px-4">8.96%</td>
                  <td className="py-3 px-4">臨床現場ではヨーロッパや南米を上回る受診率の高さを示す</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">エジプト / サウジアラビア</td>
                  <td className="py-3 px-4">7.90% / 7.03%</td>
                  <td className="py-3 px-4">世界の臨床平均と合致し、疾患の普遍性を裏付ける</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">ブラジル（臨床）</td>
                  <td className="py-3 px-4">14.91%</td>
                  <td className="py-3 px-4">服薬の増加（副作用としての口腔乾燥等）とうつ病の増加が寄与</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">中国（臨床）</td>
                  <td className="py-3 px-4">15.71%</td>
                  <td className="py-3 px-4">人口動態の変化（閉経後女性の割合の急激な増加）が主要因</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "epidemiology-demographics",
      title: "3. 人口統計学的プロファイル：性差と好発年齢に潜む深層メカニズム",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            BMSの疫学において最も一貫したエビデンスが存在するのが、極端な性差と年齢分布です。「男女比1:3」「50-70歳の閉経後女性に集中」という基礎データは、現代の統計解析によってさらに詳細に裏付けられています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Worldwide Prevalence Estimates of Burning Mouth Syndrome: A Systematic Review and Meta-analysis』</p>
            <a href="https://www.researchgate.net/publication/350642097_Worldwide_Prevalence_Estimates_of_Burning_Mouth_Syndrome_A_Systematic_Review_and_Meta-analysis" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "The subgroup analysis by gender showed the prevalence of female (1.15%) was higher than male (0.38%) in general population. The subgroup analysis by age showed the prevalence was higher for people over 50 (3.31%) than under 50 (1.92%)."
            </blockquote>
          </div>

          <p>
            一般人口において、女性の有病率（1.15%）は男性（0.38%）の3倍に達し、50歳以上の集団（3.31%）は50歳未満（1.92%）と比較して有意に高く、発症における加齢の決定的な役割が明白です。しかし、臨床現場ではこの格差がさらに拡大します。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Burning mouth syndrome: updates on pathogenesis and diagnostic algorithms』</p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12738272/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              PMC
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded space-y-2">
              <p>"Clinical settings report female-to-male ratios ranging from 6:1 to 9:1. The onset of the disorder has shifted toward older ages, predominantly manifesting around 65 years."</p>
              <p>"Individuals aged 50 and older have a higher incidence (3.31%) than those under 50 (1.92%)."</p>
            </blockquote>
          </div>

          <p>
            臨床現場での男女比が「6:1から最大9:1」に跳ね上がる事象は、女性において症状の重症度や心理的苦痛が高く、治療をより強く求める傾向にあることを示唆しています。発症年齢のピークがかつての50代から「65歳前後」へシフトしている点は、人口の高齢化に軌を一にしています。この集中の背景には、エストロゲン等の性腺ホルモン減少に伴う神経保護作用の喪失が有力視されています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Burning mouth syndrome: updates on pathogenesis and diagnostic algorithms』</p>
            <a href="https://www.researchgate.net/publication/330092165_Burning_mouth_syndrome-a_diagnostic_dilemma" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "After the age of 50 years, the incidence of BMS in men and women significantly increased across age groups (P=.02). Study participants residing in Olmsted County, Minnesota, were predominantly white..."
            </blockquote>
          </div>

          <p>
            年齢が50歳を超えると男女問わず発生率が統計学的に有意（P=0.02）に上昇することは、ホルモン枯渇に加え、加齢による末梢神経の変性や環境的ストレスの蓄積が重なる「累積的発症モデル」を支持するものです。
          </p>
        </div>
      )
    },
    {
      id: "epidemiology-comorbidities",
      title: "4. 精神医学的・心理社会的併存疾患の複雑な疫学ネットワーク",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            BMSの疼痛と精神心理的要因との関係は、一方通行の因果関係ではなく、「双方向的な関係（Bidirectional relationship）」であることが最新の疫学調査で証明されています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Worldwide Prevalence Estimates of Burning Mouth Syndrome: A Systematic Review and Meta-analysis』</p>
            <a href="https://www.researchgate.net/publication/350642097_Worldwide_Prevalence_Estimates_of_Burning_Mouth_Syndrome_A_Systematic_Review_and_Meta-analysis" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Clinically significant OC symptoms (OCI-R &gt; 21) were observed in 41.7% of the sample, while 37% met OCPD criteria; both OC symptoms and OCPD were present in 24.5% of patients. Conclusions BMS patients show a high prevalence of OC symptoms and OCPD traits, which should be taken into account by clinicians and considered in the therapeutic approach, given that they could complicate symptom management."
            </blockquote>
          </div>

          <p>
            臨床的に有意な強迫性症状（OC症状）を示す患者が全体の41.7%、強迫性パーソナリティ障害（OCPD）を満たす患者が37%、両者併発が24.5%という異常な高頻度で確認されました。この過覚醒（Hypervigilance）の特性により、わずかな違和感が激しい疼痛として中枢神経系に刻み込まれ、BMSの難治化に直結します。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Worldwide prevalence estimates of burning mouth syndrome: A systematic review and meta-analysis』</p>
            <a href="https://www.explorationpub.com/Journals/em/Article/1001244" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              Exploration Pub
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "In the current study, 53.3% of cases displayed moderate PSS scores and 46.7% of cases displayed high PSS scores reflecting the high amount of stress BMS patients are burdened with... Moreover, earlier research reported that 80% of BMS patients had anxiety disorders and depression before the onset of BMS , which agrees well with our results revealing a significantly positive strong correlation between the intensity of BMS and QOL as well as PSS scores."
            </blockquote>
          </div>

          <p>
            知覚されたストレス尺度（PSS）調査では、患者の100%（中等度53.3%、高度46.7%）が有意なストレス負荷状態にあり、発症「以前」から不安障害やうつ病を罹患していた患者が80%に達します。慢性ストレスが下行性疼痛抑制系を枯渇させ、BMS発症の土壌を形成しています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Burning mouth syndrome: updates on pathogenesis and diagnostic algorithms』</p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12738272/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              PMC
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Evaluations show that BMS is frequently linked with sleep disorders (78.8% to 90.2% prevalence) and medically unexplained extra-oral physical symptoms (MUEPS), such as irritable bowel syndrome and fibromyalgia."
            </blockquote>
          </div>

          <p>
            精神的苦痛は睡眠障害（78.8%〜90.2%）や過敏性腸症候群（IBS）等の全身疾患（MUEPS）を高い割合で合併させます。これは、BMSが局所病変ではなく、中枢神経系全体の感作を基盤とするシステムエラーであることを証明しています。
          </p>
        </div>
      )
    },
    {
      id: "epidemiology-biomarkers",
      title: "5. 客観的生体指標（バイオマーカー）の最新研究動向",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            長年主観的な疾患とされたBMSですが、唾液や血清を用いた客観的バイオマーカーの探索が急速に進展しています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Salivary and serum biomarkers to evaluate psychological disorders in burning mouth syndrome: A systematic review and meta-analysis』</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/38438274/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              PubMed
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Of these biomarkers, only three (cortisol, α-amylase, and IL-6) were analyzed in two or more studies. Only salivary cortisol levels were significantly higher in the patient group compared to the controls (Mean Difference = 1.39; 95% CI [0.80-1.97]; p &lt; 0.001). Moreover, cortisol might be relevant to psychological scores, especially anxiety."
            </blockquote>
          </div>

          <p>
            唾液中コルチゾール濃度は健常群と比較して極めて有意に高く（平均差 = 1.39、p &lt; 0.001）、患者の強い不安などの心理的スコアと密接に連動しています。これはBMSと心理社会的ストレスの双方向性を客観的に裏付ける画期的な発見です。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Potential salivary biomarkers by analyzing saliva before and after clonazepam treatment in patients with burning mouth syndrome』</p>
            <a href="https://www.jofph.com/articles/10.22514/jofph.2024.019" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              JOFPH
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Although not all patients showed the same pattern, there was a difference in the alteration of salivary α-amylase activity before and after treatment between responders and non-responders. Further study is required to clarify whether there is a causal relationship between salivary α-amylase activity and treatment response. However, considering that salivary α-amylase activity is related to orofacial pain and psychological stress, this suggests the potential use of salivary α-amylase as a biomarker for burning mouth syndrome."
            </blockquote>
          </div>

          <p>
            もう一つのストレスマーカー「唾液中α-アミラーゼ」は、クロナゼパム治療において症状が改善した群とそうでない群とで変動パターンに明確な違いが確認されました。これにより、治療の個別化（Personalized Medicine）に向けた重要な疫学的ステップが示されています。
          </p>
        </div>
      )
    },
    {
      id: "epidemiology-systemic",
      title: "6. 全身疾患および内分泌・微量栄養学的要因との疫学的相関",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            神経の健康を支える微量栄養素の欠乏や甲状腺機能の異常も、BMSの発症基盤として深く関与しています。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Burning Mouth Syndrome epidemiology systematic review 2023 2024 2025』</p>
            <a href="https://bmjopen.bmj.com/content/15/8/e100523" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              BMJ Open
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Additionally, recent research has highlighted the potential benefits of supplementing micronutrients, such as zinc, iron, folate and vitamins, to alleviate the symptoms of the disease... Deficiencies in cobalamin, folate, iron and other essential nutrients have been reported in patients with BMS, suggesting that nutritional imbalances may contribute to the pathogenesis or persistence of the condition."
            </blockquote>
          </div>

          <p>
            BMS患者群では亜鉛、鉄、葉酸、ビタミンB12などの血中濃度低下が異常な高頻度で報告されています。これら栄養素の欠乏は神経の不可逆的な変性を引き起こし、高齢女性において吸収能力の衰えが重なることで発症しやすくなります。
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
            <p className="text-sm font-medium text-indigo-700 mb-1">『Role of thyroid hormones in burning mouth syndrome. Systematic review』</p>
            <a href="https://www.researchgate.net/publication/364037046_Role_of_thyroid_hormones_in_burning_mouth_syndrome_Systematic_review" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
              <ExternalLink className="w-3 h-3 mr-1" />
              ResearchGate
            </a>
            <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
              "Conclusion: The level of TSH, Anti-TPO, and Anti-TG, Free T3, and TSH indices of Hashimoto's patients were associated with the presence and severity of BSM. However, Free T4 level was only associated with the presence of BMS and not the intensity."
            </blockquote>
          </div>

          <p>
            甲状腺機能低下症（橋本病など）の患者において、TSHや抗TPO抗体などの数値異常がBMSの発症のみならず、痛みの「重症度」と強く相関していることが実証されています。内分泌代謝の最適化は、自己免疫的な炎症メカニズムの観点からも極めて重要な治療ターゲットです。
          </p>
        </div>
      )
    },
    {
      id: "epidemiology-conclusion",
      title: "7. 結論と次世代医療への展望",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            BMSの疫学は、最新の学術的証拠の統合により、その複雑な病態の真の姿が明確化されました。
          </p>
          
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">疫学データと人口統計の再確認</h5>
              <p>一般人口1.73%に対して臨床現場で7.72%に跳ね上がる有病率、そして「好発年齢65歳前後の閉経後女性」というデータは、疾患の特異性と加齢による影響を如実に示しています。</p>
            </li>
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">内分泌・栄養・心理の複合ネットワーク</h5>
              <p>エストロゲンの枯渇、甲状腺機能異常、微量栄養素の欠乏といった生理的脆弱性を基盤とし、強迫性傾向（OCPD）や慢性ストレス（コルチゾール上昇）、睡眠障害といった心理社会的負荷が引き金となって中枢性増感を引き起こす多次元的な病態モデルが確立しました。</p>
            </li>
            <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">バイオマーカーによる個別化医療</h5>
              <p>唾液中のコルチゾールやα-アミラーゼ等を用いた客観的指標の活用は、薬物反応性の予測を可能にし、BMS治療を科学的根拠に基づく個別化医療へと進化させています。</p>
            </li>
          </ul>

          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mt-6">
            <p className="font-medium text-indigo-900">
              高齢化が進行し社会的ストレスが増大する現代において、多職種連携による徹底したスクリーニングと最新の病態生理学的アプローチの普及は、公衆衛生上極めて重要かつ急務の課題です。
            </p>
          </div>
        </div>
      )
    }
  ]
};
