import { Chapter } from '../types';
import { BookOpen, History, Globe, Microscope, FileText, ExternalLink } from 'lucide-react';

export const definitionChapter: Chapter = {
  id: "chapter-definition",
  title: "世界的な疼痛の分類における位置付けと診断基準",
  icon: <BookOpen className="w-5 h-5" />,
  subSections: [
    {
      id: "definition-intro",
      title: "導入：世界的な疼痛の分類における位置付けと診断基準の基礎",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            バーニングマウス症候群（Burning Mouth Syndrome: 以下BMS）は、世界的な疼痛分類において、明確な局所的あるいは全身的な病理学的変化が存在しないにもかかわらず発生する<strong>「特発性の慢性口腔顔面痛疾患」</strong>として確固たる位置付けを獲得しています。
          </p>
          <p>
            この疾患は、口腔粘膜に器質的な異常が見られないにもかかわらず、持続的で耐え難い灼熱痛をもたらすという特徴を持ち、長年にわたり臨床現場における診断と分類の大きな課題となってきました。この点に関する基本的な病態生理学的なコンセンサスは、
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11546372/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            において包括的に論じられています。
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
            <p className="font-medium text-blue-900 mb-2">
              現在の国際的な診断基準は、2020年に制定された「国際口腔顔面痛分類 第1版（ICOP: International Classification of Orofacial Pain, 1st edition）」に準拠しています。
            </p>
            <p className="text-sm text-blue-800">
              ICOPの枠組みにおいてBMSは、<strong>「基礎となる医学的・歯科的原因がない状態で、口腔粘膜の灼熱感および痛みが3ヶ月以上持続する状態」</strong>と厳密に定義されています。この定義は単なる症状の記述にとどまらず、後述する神経障害性メカニズムの関与を前提とした現代的な診断パラダイムを反映しています。
            </p>
          </div>
          <p>
            BMSは疫学的に特に閉経後の女性に好発し、一般人口における有病率は1.73%から、臨床環境においては7.72%に及ぶと報告されています。ヨーロッパにおける有病率は5.58%から6.46%の範囲であると推定されており、地域や診断基準の適用方法によって統計的なばらつきが存在します。
          </p>
          <p>
            本稿では、この複雑な疼痛疾患が、どのような歴史的変遷を経て現在の国際的診断基準に組み込まれたのか、そして「神経障害性疼痛」という現在の疾患定義の根拠となる最新の病態生理学的メカニズムについて、利用可能なエビデンスに基づき網羅的に解析します。
          </p>
        </div>
      )
    },
    {
      id: "definition-history",
      title: "バーニングマウス症候群の歴史的変遷（1800年代から1950年代）",
      icon: <History className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            BMSが現代の分類体系において「神経障害性疼痛」として位置付けられるまでには、1世紀以上にわたる医学的パラダイムの変遷が存在します。この歴史的文脈を理解することは、現在の診断基準がなぜ現在の形をとっているのかを理解する上で不可欠です。この初期の歴史的発展に関する最も詳細な調査は、
            <a href="https://pubmed.ncbi.nlm.nih.gov/29569416/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『History of burning mouth syndrome (1800-1950): a review』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            に記述されています。
          </p>
  
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">臨床的記述の黎明期と名称の多様性</h3>
            <p>
              1800年代初頭から、ヨーロッパの複数の医師によって、口腔粘膜に視覚的な病変がないにもかかわらず激しい灼熱感を訴える患者の存在が散発的に報告され始めました。1803年から1937年にかけての医学文献を対象に、Medic@、IndexCat、Gallicaといった歴史的データベースを用いて行われた網羅的調査では、55のレビュー、44の原著論文、40の引用、および11の医学辞典から、合計199例のBMS症例が確認されています。
            </p>
            <p>
              この時期、この不可解な症状を表現するために、統一された疾患名は存在せず、「Glossodynia（舌痛症）」、「Stomatodynia（口腔疼痛症）」、「Glossopyrosis（舌灼熱症）」など、痛みの部位や性質に基づいた多様な解剖学的・記述的名称が混在して使用されていました。このような名称の乱立は、疾患の病態に対する根本的な理解が欠如していたことを如実に示しています。
            </p>
  
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">フランス医学アカデミーによる症候群化と神経精神医学の影</h3>
            <p>
              BMSの医学的認識における最初の大きな転換点は、フランス医学アカデミー（French Academy of Medicine）による「症候群」としての公式な枠組みの構築でした。しかし、この時期の医学界において、器質的な病変を伴わない疼痛は、台頭しつつあった「神経精神医学（Neuropsychiatry）」による強い知的後援（Intellectual sponsorship）を受けることとなりました。
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 my-4">
              <p className="text-orange-900">
                19世紀後半から20世紀前半にかけて、BMSが主に中高年の女性に発生するという疫学的特徴は、当時の医学的偏見と結びつき、「心身症（Psychosomatic disorders）」や「ヒステリー」の一形態として解釈される傾向を強めました。
              </p>
              <p className="text-sm text-orange-800 mt-2">
                この「精神的ストレスや情緒不安定が引き起こす心因性の疼痛」という過度に単純化された病因論は、長年にわたり医学界を支配し、患者の訴えが「気のせいである」と軽視される原因となりました。この歴史的な烙印は、現代においてもBMS患者が適切な診断を受けるまでに多大な時間（Diagnostic delay）を要する遠因となっており、心因性疼痛という誤った概念が疾患の定義に与えた悪影響の大きさを物語っています。
              </p>
            </div>
  
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">アメリカにおける概念的シフトと器質的アプローチへの回帰</h3>
            <p>
              1950年代に向けて、BMSの病因論はアメリカの医学者たちによって重要な概念的シフト（Conceptual shift）を遂げました。アメリカの学派は、純粋な精神疾患としての解釈から距離を置き、口腔の物理的機能、内分泌の変化（閉経に伴うホルモン動態）、および神経学的な異常へと焦点を移し始めました。
            </p>
            <p>
              この物理的・器質的基盤への回帰は、後の1980年代以降における神経障害性メカニズムの発見と、それに伴う分類体系の再構築への道を切り開く決定的な転換点となりました。
            </p>
          </div>
        </div>
      )
    },
    {
      id: "definition-classification",
      title: "国際的な頭痛・口腔顔面痛分類システムにおけるBMSの位置付けと進化",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            現代の疼痛医学において、BMSの診断基準は複数の国際的組織によって定義され、相互に影響を与え合いながら進化してきました。主要な分類体系である国際頭痛疾患分類（ICHD）、国際口腔顔面痛分類（ICOP）、および国際疾病分類（ICD）におけるBMSの扱いの変遷を分析します。これらの分類体系の歴史的進化は、
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5033415/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『Evolution of burning mouth syndrome (BMS) diagnostic criteria』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            および
            <a href="https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-11-persistent-idiopathic-facial-pain-pifp/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『Burning mouth syndrome (BMS) - ICHD-3』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            に詳述されています。
          </p>
  
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-indigo-900 border-b whitespace-nowrap">発表年</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-indigo-900 border-b whitespace-nowrap">分類システム</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-indigo-900 border-b">BMSの主な定義と診断基準の要点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">1988年</td>
                  <td className="px-4 py-3 text-gray-600">ICHD-1</td>
                  <td className="px-4 py-3 text-gray-700">独立した疾患としての記載なし。</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">1994年</td>
                  <td className="px-4 py-3 text-gray-600">IASP</td>
                  <td className="px-4 py-3 text-gray-700">「Glossodynia and sore mouth」として分類。少なくとも4ヶ月間持続する舌または他の口腔粘膜の灼熱痛であり、正常な口腔粘膜および正常な臨床検査所見を伴うもの。</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">2004年</td>
                  <td className="px-4 py-3 text-gray-600">ICHD-2</td>
                  <td className="px-4 py-3 text-gray-700">初めて「BMS」として独立。1日の大半を持続する口腔内の痛み、正常な外観の口腔粘膜、および局所的・全身的疾患の除外を基準とする。</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">2013/2020年</td>
                  <td className="px-4 py-3 text-gray-600">ICHD-3</td>
                  <td className="px-4 py-3 text-gray-700">「有痛性脳神経ニューロパチーおよび他の顔面痛」に分類。1日2時間以上、3ヶ月以上にわたり毎日再発する口腔内の灼熱感または異常感覚。痛みは表在性で灼熱感を持ち、通常は両側性であると規定。</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">2020年</td>
                  <td className="px-4 py-3 text-gray-600">ICOP-1</td>
                  <td className="px-4 py-3 text-gray-700">ICHD-3の基準を拡張。定量的知覚検査（QST）の結果に基づき、「体性感覚異常を伴うBMS」と「伴わないBMS」のサブタイプに分類。まれな片側性の発症も許容。</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">2022年</td>
                  <td className="px-4 py-3 text-gray-600">ICD-11</td>
                  <td className="px-4 py-3 text-gray-700">「慢性原発性疼痛」の下位分類である「口腔顔面複合体を侵す感覚障害（DA0F.0）」としてコード化。生物心理社会的モデルを統合し、感情的苦痛や機能障害の存在を基準に組み込む。</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">ICHD（国際頭痛疾患分類）における分類の精緻化</h3>
          <p>
            国際頭痛学会（IHS）が発行するICHDは、BMSを神経学的疾患として正式に認めた最初の主要な分類体系の一つです。2004年のICHD-2において、BMSは初めて独立したカテゴリー（13.18.5）に組み込まれました。その後、2013年および2020年に発表されたICHD-3では、BMSは第13章「有痛性脳神経ニューロパチーおよび他の顔面痛」の中の「13.11 Burning mouth syndrome (BMS)」としてさらに厳密に定義されました。
          </p>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 my-4">
            <h4 className="font-bold text-gray-900 mb-2">ICHD-3の診断基準：</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>A. 基準BおよびCを満たす口腔内の痛み。</li>
              <li>B. 1日2時間以上、3ヶ月以上にわたり毎日再発する。</li>
              <li>C. 痛みは「灼熱感を伴う性質」および「口腔粘膜の表層で感じられる」という両方の特徴を持つ。</li>
              <li>D. 口腔粘膜は外観が正常であり、感覚検査を含む臨床検査も正常である。</li>
              <li>E. 他のICHD-3の診断でより適切に説明されない。</li>
            </ul>
          </div>
          <p>
            ICHD-3の特徴は、BMSを通常「両側性」の疾患とみなし、舌の先端が最も一般的な発症部位であると注記している点です。片側性の症状は、非定型顔面痛（Persistent idiopathic facial pain: PIFP）などの他のカテゴリーに分類されるべきであるという立場をとっています。
          </p>
  
          <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">ICOP-1（2020年）の導入：定量的知覚検査（QST）によるサブタイプ分類</h3>
          <p>
            ICHD-3の基準は包括的でしたが、口腔顔面領域に特有の複雑な病態を完全に捉えきれていないという課題がありました。これに対処するため、2020年に国際口腔顔面痛分類 第1版（ICOP-1）が策定されました。ICOPの基準の詳細は、
            <a href="https://www.binasss.sa.cr/feb23/25.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『International Classification of Orofacial Pain 1st edition ICOP-1 burning mouth syndrome criteria』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            に提示されています。
          </p>
          <p>
            ICOP-1におけるBMSの定義の最大の革新は、体性感覚評価の必須化とサブタイプ分類です。ICOP-1は、定量的知覚検査（QST）の実施状態を明確に区別しています。QSTが実施されていない段階での診断は単なる「BMS（6.1）」とみなされますが、QSTが実施された場合、患者は以下のいずれかに厳密に分類されなければなりません。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 my-4 bg-teal-50 p-4 rounded-lg border border-teal-100">
            <li><strong>6.1.1 体性感覚異常を伴わないBMS</strong> (BMS without somatosensory changes)</li>
            <li><strong>6.1.2 体性感覚異常を伴うBMS</strong> (BMS with somatosensory changes)</li>
          </ul>
          <p>
            この枠組みは、BMSが単一の特発性疾患ではなく、末梢神経系の機能不全を背景とする神経障害性疼痛のスペクトラムに属することを分類体系として公式に認めた画期的なステップです。また、ICHD-3が症状を厳密に両側性であると想定しているのに対し、ICOP-1は臨床的な現実をより広く反映し、症状がまれに片側性で発生する可能性を認めています。
          </p>
          <p>
            さらに、二次的要因（局所的要因や全身疾患）によって引き起こされる類似の症状（二次性BMS）は、原発性のBMSとは明確に区別されなければなりません。糖尿病、シェーグレン症候群、栄養欠乏（鉄、亜鉛、ビタミンB群）、扁平苔癬、薬剤の副作用などが完全に除外されて初めて、原発性BMSの診断が確定します。
          </p>
  
          <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">最新の名称変更に関する議論（SyndromeからDisorderへ）とODPDの概念</h3>
          <p>
            現在、BMSの分類と定義をさらに正確にするための国際的な議論が進行しています。2021年に行われた国際的なデルファイ合意（Delphi consensus）の研究（Chmieliauskaiteら）では、「症候群（Syndrome）」という用語は常に一貫した特徴の集合を意味するのに対し、BMSでは灼熱感のみが確実に存在するという事実に基づき、疾患の異質性を正確に反映させるために名称を<strong>「Burning Mouth Disorder（BMD）」</strong>へ変更することが強く推奨されています
            <span className="text-sm ml-1">
              （URL: 
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12738272/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 mx-1">1<ExternalLink className="w-3 h-3 inline ml-0.5" /></a>, 
              <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2024.1443817/full" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 mx-1">2<ExternalLink className="w-3 h-3 inline ml-0.5" /></a>
              ）
            </span>。
          </p>
          <p>
            また、この合意においては、ICD-11の診断基準から「感情的（emotional）」要因を独立した診断要件から除外することも提案されており、BMS（BMD）を精神的要因ではなく純粋な器質的・神経障害性疾患として定義しようとする動きが強まっています。
          </p>
          <p>
            さらに、灼熱感を伴わず、チクチク感、味覚異常、異物感、唾液分泌過多といった知覚異常や感覚の歪みのみを呈する患者のサブグループを分類するため、新たに<strong>「Oral Dysaesthetic and Perceptual Disorder（ODPD）」</strong>という概念が提唱されており、従来のBMSの枠組みをより精緻に細分化する試みが続けられています。
          </p>
  
          <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">ICD-11（国際疾病分類 第11版）の枠組み</h3>
          <p>
            世界保健機関（WHO）によるICD-11において、BMSは「慢性原発性疼痛（Chronic primary pain）」という大きな枠組みの下、「口腔顔面複合体を侵す感覚障害（Sensory disturbances affecting orofacial complex: コードDA0F.0）」として分類されました。
          </p>
          <p>
            ICD-11のアプローチは、生物学的要因（神経障害）だけでなく、心理的および社会的要因が痛みの経験に寄与するという「生物心理社会的モデル」を採用し、疼痛による生活への干渉度合い（Mild, Moderate, Severe）を追加コードとして評価する構造となっています。前述のデルファイ合意による批判的議論はあるものの、ICD-11の分類はBMSが心身症ではなく、「一次性の慢性疼痛」であることを世界保健機関レベルで位置付けた重要な指標です。
          </p>
        </div>
      )
    },
    {
      id: "definition-pathophysiology",
      title: "病態生理学的定義の根拠：スモールファイバーニューロパチー（SFN）の全容",
      icon: <Microscope className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            歴史的に心因性と誤認されてきたBMSが、ICOPやICHDにおいて「神経障害」のサブタイプとして分類されるに至った最大の科学的・生物学的根拠は、口腔粘膜における<strong>「スモールファイバーニューロパチー（Small Fiber Neuropathy: SFN）」</strong>の発見です。この疾患の生物学的定義の核心は、
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11546372/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center font-medium mx-1">
              『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            において包括的に分析されています。
          </p>
  
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">小径感覚神経線維の構造的変性と密度の低下</h3>
            <p>
              SFNは、末梢神経系における小径の感覚神経線維に特異的に発生する損傷または機能不全を指します。具体的には、温度覚と一次的な鋭い痛みを伝達する「Aδ線維」と、持続的な鈍痛や炎症性刺激を伝達する無髄の「C線維」が標的となります。
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100 my-4">
              <p className="text-red-900 font-medium">
                システマティックレビューにおいて統合された複数の組織学的研究（舌粘膜の生検）は、BMS患者の舌粘膜における上皮内神経線維密度（Intraepithelial nerve fiber density: IENFD）が、健康な対照群と比較して30%から60%も有意に減少しているという決定的な証拠を提供しました。
              </p>
              <p className="text-sm text-red-800 mt-2">
                この物理的な神経線維の「脱落」こそが、BMSが「体性感覚異常を伴う神経障害性疼痛」に分類されるための最も直接的な生物学的定義となります。
              </p>
            </div>
  
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">侵害受容マーカーとイオンチャネルの過剰発現（末梢感作）</h3>
            <p>
              神経線維の脱落に伴い、残存する神経ネットワークでは痛みのシグナルを増幅させる劇的な分子レベルの再構築が進行します。
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1 shrink-0">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <strong className="text-gray-900 block">TRPV1の過剰発現</strong>
                  <p className="text-sm mt-1">熱や化学的刺激に反応するTRPV1受容体が残存神経上で異常に増加し、通常は痛みを感じない温かい食事等に対して受容体が過敏に反応し、異常な灼熱感を引き起こします。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1 shrink-0">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <strong className="text-gray-900 block">P2X3受容体とNGFの増加</strong>
                  <p className="text-sm mt-1">組織損傷後の侵害受容に関与するP2X3陽性線維や神経成長因子（NGF）の発現が上昇し、神経末端の感度が異常に高まる末梢感作が形成されています。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1 shrink-0">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <strong className="text-gray-900 block">電位依存性ナトリウムチャネル（Nav1.7）の異常</strong>
                  <p className="text-sm mt-1">痛みのシグナル発生に重要なNav1.7の過剰発現が発見されており、これが刺激がなくても自発的に活動電位を発生させる（異所性発火）原因となり、「常に舌が燃えるように痛い」という自発痛の直接的な病態生理学的メカニズムと定義されています。</p>
                </div>
              </li>
            </ul>
  
            <h3 className="text-xl font-bold text-indigo-900 mt-8 mb-4 border-b pb-2">神経生理学的検査による分類の裏付け</h3>
            <p>
              ICOP-1がサブタイプ分類の基準として推奨するQSTを用いた複数の研究により、BMS患者では「冷覚検出閾値の低下」や「冷刺激に対する痛覚閾値の異常」が確認されています。これは主にAδ線維の機能不全を反映する客観的なデータです。
            </p>
            <p>
              さらに、瞬目反射（Blink Reflex）や角膜共焦点顕微鏡といった評価により、BMSの神経障害が口腔局所だけでなく三叉神経系全体、あるいは脳幹レベルの中枢神経系にも及んでいることが実証されています。
            </p>
          </div>
        </div>
      )
    },
    {
      id: "definition-summary",
      title: "分類と診断基準のまとめ",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            本報告書では、世界的な頭痛および疼痛分類におけるバーニングマウス症候群（BMS）の「定義」と「分類」、およびその根拠となる「病態生理」と「歴史」に絞って包括的な解析を行いました。
          </p>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-6">
            <p className="font-medium text-indigo-900 mb-4">
              かつて19世紀から20世紀半ばにかけて「心因性疾患」として誤って定義されていたBMSは、現代医学において「神経障害性疼痛」という分類へと完全なパラダイムシフトを遂げました。
            </p>
            <ul className="list-disc pl-5 space-y-2 text-indigo-800 text-sm">
              <li><strong>ICHD-3</strong>による脳神経ニューロパチーとしての分類</li>
              <li><strong>ICD-11</strong>による慢性原発性疼痛としての位置付け</li>
              <li><strong>ICOP-1</strong>による定量的知覚検査（QST）を必須とした「体性感覚異常の有無」に基づくサブタイプ分類の導入</li>
            </ul>
            <p className="mt-4 text-indigo-900">
              これらは、BMSの定義が器質的疾患へと進化したことを明確に示しています。
            </p>
          </div>
          <p>
            さらに最新の動向として、疾患の実態をより正確に反映させるために「Burning Mouth Disorder（BMD）」への名称変更や、非灼熱性の知覚異常を分離する「ODPD」の定義など、分類の精緻化を目指す国際的議論が進行しています。
          </p>
          <p>
            これらの分類の根底には、生検や分子生物学的手法によって証明された「小径神経線維の脱落（SFN）」と「イオンチャネル（TRPV1, Nav1.7等）の異常発現」という、揺るぎない病態生理学的基盤が存在しています。
          </p>
        </div>
      )
    }
  ]
};
