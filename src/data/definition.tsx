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
      id: "definition-peripheral-central",
      title: "末梢型と中枢型に分類（Jääskeläinen 2017 PAIN 徹底解説）",
      icon: <Microscope className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* 出典 */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-sm">
            <p>
              <strong>出典：</strong>Jääskeläinen SK. <em>Is burning mouth syndrome a neuropathic pain condition?</em> PAIN 2017; <strong>NeuPSIG（IASP神経障害性疼痛特別興味グループ）第6回国際会議レビュー論文</strong>。
              本節では、原著4ページのほぼ全文を、特に<strong>末梢神経系の関与</strong>については一文も省かずに日本語化し、
              さらに各根拠論文をWeb検索でサマリーします。
            </p>
          </div>

          {/* 0. アブストラクト */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">0. 論文アブストラクト（全訳）</h3>
            <p className="text-sm">
              原発性バーニングマウス症候群（BMS）は、IHS 2013において
              「<strong>口腔内の灼熱感または異常感覚が、毎日…3か月以上持続し、臨床的に明らかな原因病変を伴わない</strong>」状態と定義される。
              痛みに加え、味覚異常（味覚障害、口腔乾燥）も高頻度にみられる。臨床的には神経障害の徴候を欠くが、
              より精密な診断手法を用いると、神経軸の様々なレベルで神経障害性病変が認められる：
              <strong>末梢小径線維障害</strong>（温度覚QST、電気味覚検査、上皮内神経線維密度）、
              <strong>末梢または脳幹レベルでの三叉神経系病変</strong>（脳幹反射記録、三叉神経電気生理検査、誘発電位）、
              <strong>中枢神経系における抑制の低下</strong>（脳幹反射の慣れ消失、QSTにおける陽性徴候、神経伝達物質PETによる線条体ドパミン機能不全所見）。
              電気味覚検査の異常は、体性感覚小径線維に加え<strong>小径Aδ味覚求心線維</strong>の関与を示す。
              これらの所見から、BMSは<strong>末梢性または中枢性神経障害性疼痛の2つの主要サブタイプ</strong>に分類でき、両者は個々の患者で重複しうる。
              <strong>中枢型</strong>は局所治療に反応せず、しばしば<strong>精神医学的併存症（うつ・不安）</strong>を伴う。
              一方、<strong>末梢型</strong>は<strong>末梢リドカインブロックや局所クロナゼパムに反応</strong>する。
              BMSは<strong>閉経後女性に最も多く</strong>、これは「閉経による神経保護的性腺ホルモンの減少とストレスホルモンの上昇という背景下で、
              脆弱な小径線維と基底核を侵す神経毒性因子による神経系障害」という仮説に至っている。
            </p>
          </section>

          {/* 1. 序論 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">1. 序論（全訳）</h3>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                IHS最新分類において、BMSは「<strong>有痛性脳神経障害</strong>」の見出しの下に分類され、
                「<strong>口腔内の灼熱感または異常感覚が、1日2時間以上、3か月を超えて反復し、臨床的に明らかな原因病変を伴わない</strong>」と定義される。
              </li>
              <li>
                痛みは中等度から重度で歯痛と同程度の強さだが、<strong>表在性で灼熱性の独特な性質</strong>を持ち、
                しばしば<strong>味覚異常と口腔乾燥</strong>（患者の50–70%）を伴う。<strong>舌尖が最も多く侵される</strong>が、口腔粘膜のいかなる部位も罹患しうる。
              </li>
              <li>
                BMSの集団有病率は0.01%から40%まで大きく幅があるが、現行診断基準を用いた最近の良好な対照研究では<strong>1%未満〜3.7%</strong>と推定される。
                有病率は<strong>閉経後女性で最も高く18%</strong>、女性対男性の比は<strong>3:1〜20:1</strong>の範囲。
                多くの患者は<strong>夜間の改善</strong>を訴える――痛みは睡眠を妨げず、朝は軽く、日中悪化する。
              </li>
              <li>
                定義上、臨床検査および量的測定を伴わない感覚診察は正常であり、したがってBMSは
                <strong>「体性感覚系の損傷または疾患の直接的結果として生じ、神経解剖学的に妥当な分布の症状と徴候を伴う」</strong>
                というIASPの神経障害性疼痛の定義には適合しないように見える。つまり、
                <strong>IHSがBMSを有痛性脳神経障害に分類することと、IASPの神経障害性疼痛の定義との間には乖離</strong>が存在する。
              </li>
              <li>
                それにもかかわらず、過去20年間にBMSに対して厳密な臨床診断基準と、臨床神経生理学・心理物理学・神経病理学・機能的脳画像という洗練された手法を用いて行われた研究は、
                <strong>大多数の患者で神経軸の様々なレベルにおける神経障害性関与</strong>を明らかにしてきた。
              </li>
            </ul>
          </section>

          {/* 2.1 末梢神経系（最重要・全訳） */}
          <section className="bg-rose-50/40 p-5 rounded-xl shadow-sm border-2 border-rose-200">
            <h3 className="text-lg font-bold text-rose-900 border-b-2 border-rose-200 pb-2 mb-3">
              2-1. BMSにおける末梢神経系（原著ほぼ全文翻訳）
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>① 脳幹反射と亜臨床三叉神経障害（約20%）</strong><br/>
                大径有髄Aβ求心線維を介する<strong>脳幹反射記録</strong>では、臨床的に典型的な原発性BMS患者の<strong>約20%</strong>に
                三叉神経本幹あるいはその脳幹回路の障害徴候が認められた。この亜群のBMSは、
                <strong>明確な臨床徴候を伴わない亜臨床的な三叉神経神経障害性疼痛</strong>を表しており、
                これは特に神経損傷後慢性期における臨床感覚診察の感度の低さと整合する。
              </p>
              <p>
                <strong>② 温度覚QSTと舌粘膜生検</strong><br/>
                温度覚QSTと舌粘膜生検は、BMSの末梢神経系関与をさらに明らかにした。
                BMS患者の<strong>大多数（76%）</strong>は温度覚QSTで<strong>低感覚（hypoesthesia）</strong>を示し、
                特に<strong>無害な冷却刺激と温刺激に対して</strong>、また程度は軽いが<strong>痛覚低下（hypoalgesia）</strong>を示す。
                BMS患者のQSTプロファイルは、多様な神経障害性疼痛疾患の大規模コホートで報告されたものに非常に類似する。
              </p>
              <p>
                <strong>③ 機能喪失徴候は舌上皮小径線維の局所障害による</strong><br/>
                BMS患者の温度覚QSTにおけるこれらの<strong>機能喪失徴候は、その後、舌上皮の小径神経線維の局所的障害</strong>に起因することが示された。
                個々の患者では、<strong>大径線維と小径線維の病変が重複</strong>することがある。
              </p>
              <p>
                <strong>④ 電気味覚検査とAδ味覚求心線維</strong><br/>
                さらに、<strong>電気味覚検査の異常</strong>は、原発性BMSの病態生理過程に<strong>小径Aδ味覚求心線維</strong>も関与することを示唆し、
                これらの患者で味覚異常が高頻度にみられる説明となる。
              </p>
              <p>
                <strong>⑤ Aδ冷線維障害の優位 ── 「脱抑制」仮説</strong><br/>
                興味深いことに、BMSでは<strong>Aδ冷求心線維がC線維よりもしばしば強く障害</strong>されており、
                これは<strong>中枢神経系への小径線維入力の不均衡</strong>を示す。
                正常状態において、<strong>Aδ冷線維は多型C侵害受容線維のシグナル伝達に対して持続的な抑制（tonic inhibition）</strong>を発揮しているため、
                C線維機能を相対的に保ったまま<strong>Aδ線維系がより強く障害</strong>されると、<strong>系の脱抑制（disinhibition / unmasking）</strong>により
                BMSにおいて中枢痛と同様に<strong>持続的な灼熱痛が生じうる</strong>。
              </p>
              <p>
                <strong>⑥ 機能獲得徴候（gain-of-function）</strong><br/>
                温度モダリティの機能喪失に加え、QSTは少数のBMS患者において<strong>機能獲得徴候</strong>を示した――
                <strong>熱痛耐性低下、または熱痛覚過敏とアロディニア</strong>の形で。
                同様に、脳幹反射記録は<strong>約1/3の患者で瞬目反射R2成分の慣れの欠如という形で三叉神経脳幹複合体の脱抑制</strong>を客観的に示した。
              </p>
              <p>
                <strong>⑦ 黒質線条体ドパミン制御へのリンク</strong><br/>
                瞬目反射の慣れは<strong>下行性黒質線条体ドパミン作動性制御下にある</strong>ため、
                BMSにおける中枢ドパミン系の病態を明らかにするために<strong>神経伝達物質PET研究</strong>が実施された。
                これらは「<strong>線条体ドパミンによる下行性抑制の欠陥が口腔顔面神経障害性疼痛の主要トリガー</strong>」という仮説を検証することを目的とした。
                その結果と、原発性BMSにおける中枢神経系（CNS）関与の他の収斂証拠は、次節で扱う。
              </p>
            </div>

            {/* 末梢サマリー視覚化 */}
            <div className="mt-5 bg-white border border-rose-300 p-4 rounded-lg">
              <h4 className="font-bold text-rose-900 mb-2">末梢関与の所見まとめ（数値・検査別）</h4>
              <div className="overflow-x-auto">
                <table className="text-xs w-full border border-gray-300">
                  <thead className="bg-rose-100">
                    <tr>
                      <th className="border px-2 py-1">検査</th>
                      <th className="border px-2 py-1">所見</th>
                      <th className="border px-2 py-1">陽性率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-2 py-1">脳幹反射（Aβ）</td><td className="border px-2 py-1">三叉神経/脳幹回路の障害徴候</td><td className="border px-2 py-1 text-rose-700 font-bold">約20%</td></tr>
                    <tr><td className="border px-2 py-1">温度覚QST</td><td className="border px-2 py-1">冷温の低感覚（機能喪失）</td><td className="border px-2 py-1 text-rose-700 font-bold">76%</td></tr>
                    <tr><td className="border px-2 py-1">瞬目反射R2慣れ</td><td className="border px-2 py-1">慣れの欠如（脱抑制）</td><td className="border px-2 py-1 text-rose-700 font-bold">約1/3</td></tr>
                    <tr><td className="border px-2 py-1">QST機能獲得</td><td className="border px-2 py-1">熱痛覚過敏／アロディニア</td><td className="border px-2 py-1">少数</td></tr>
                    <tr><td className="border px-2 py-1">舌粘膜生検</td><td className="border px-2 py-1">上皮内小径線維密度↓</td><td className="border px-2 py-1">大多数</td></tr>
                    <tr><td className="border px-2 py-1">電気味覚検査</td><td className="border px-2 py-1">Aδ味覚求心線維障害</td><td className="border px-2 py-1">高頻度</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 2.2 中枢神経系 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">
              2-2. BMSにおける中枢神経系
            </h3>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                BMS患者は健常対照に比べ、<strong>fMRIで熱痛刺激への両側視床の容積活性化が低下</strong>。
                これは体性感覚路の脱求心化による他の神経障害性疼痛の所見と類似する。
              </li>
              <li>
                線条体ドパミン系の<strong>fluoro-DOPA / ¹¹C-raclopride PET</strong>研究は、
                BMS患者において対照と比べ<strong>シナプスドパミン濃度の低下</strong>を示す。
                所見は<strong>早期パーキンソン病に類似</strong>しており、PDでは中枢型神経障害性疼痛がしばしばみられ、BMSの発症率も一般集団より高いとされる。
              </li>
              <li>
                神経生理学・神経伝達物質PET所見は、<strong>基底核、特に脳ドパミン作動性ネットワークが臨床痛みの処理と修飾に重要な役割</strong>を果たすことの
                <strong>ヒトにおける初の直接的証拠</strong>を提供した。動物実験でも<strong>黒質線条体DA経路の障害が三叉神経領域のアロディニアを誘導</strong>することが示されている。
              </li>
              <li>
                ドパミンD2受容体（DRD2）の<strong>957C&gt;T一塩基多型</strong>はBMSを含む口腔顔面神経障害性疼痛のリスクと症状重症度に関連する。
                線条体シナプスドパミン低下と関連する<strong>957 TTホモ接合体は、BMS患者で50%、一般集団で27%</strong>と増加し、
                この遺伝型を持つ患者は<strong>NRSで最も高い疼痛強度</strong>を報告した。
              </li>
              <li>
                <strong>末梢リドカインブロック（舌神経）</strong>はBMS患者を2亜群に分類できる：
                <strong>末梢亜群</strong>は良好な鎮痛反応を示すのに対し、<strong>中枢亜群</strong>は無反応または<strong>痛覚過敏</strong>を示す。
                この簡易手技は<strong>局所クロナゼパム治療への反応をも予測</strong>し、効果は末梢亜群でのみ認められた。
                さらに中枢亜群は<strong>不安・抑うつスコアが高い</strong>。
              </li>
              <li>
                BMSの精神医学的併存は二次的・非特異的とされてきたが、構造化精神医学面接を用いた研究では
                <strong>BMS患者は脳ドパミントーンの低下に起因する精神疾患のみに罹患</strong>する傾向があり、
                <strong>大うつ病・社会恐怖が55%、C型（恐怖性／神経質）人格が16%</strong>に認められた。
                内在的または誘発された<strong>脳ドパミン系の脆弱性が、慢性神経障害性疼痛と精神疾患併存への共通経路</strong>を提供しうる。
              </li>
              <li>
                ドパミン仮説は<strong>反復経頭蓋磁気刺激（rTMS）研究</strong>からも支持される。
                rTMSは線条体でドパミン放出を初期に誘発し、<strong>内因性オピオイド系を活性化</strong>することにより<strong>BMS痛を効果的に緩和</strong>する。
              </li>
            </ul>
          </section>

          {/* 3. 考察 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">3. 考察（要約全訳）</h3>
            <div className="space-y-3 text-sm">
              <p>
                上皮神経線維から脳に至る神経路を網羅する複数の研究ラインからの収斂証拠は、
                臨床的に典型的なBMSが<strong>大多数の症例で慢性神経障害性疼痛</strong>であり、
                <strong>末梢型と中枢型の2主要亜群</strong>からなることを示す。これらは<strong>亜臨床的</strong>であり、明らかな臨床徴候を示さないため、
                神経生理学・心理物理学・神経病理学的検査によってのみ正確に同定・分類できる。
                舌神経リドカインブロックも分類補助となるが、神経生理・心理物理・神経病理学的所見との対比検証が必要。
              </p>
              <p>
                <strong>第1のBMS亜群＝末梢型</strong>は、より広範だが亜臨床的な三叉神経神経障害／三叉脳幹病変、または<strong>純粋な口腔粘膜小径線維神経障害</strong>に起因し、
                確認検査で機能喪失徴候を示す。BMSの局所小径線維型は<strong>長さ非依存性小径線維神経障害（NLDSFN）</strong>の枠組みにも適合し、これは女性に多く、顔・体幹などへの斑状分布を示す。
              </p>
              <p>
                <strong>第2の亜群＝中枢型</strong>は、神経生理・神経伝達物質PETで<strong>脳ドパミントーン低下</strong>と精神疾患併存の増加を示し、QSTで機能獲得徴候を伴うこともある。
                個々の患者では末梢型と中枢型は機能喪失・獲得徴候の様々な組み合わせで重複しうる。
              </p>
              <p>
                精神疾患併存のプロファイルは、BMS患者の<strong>線条体ドパミントーン低下</strong>のPET所見と整合的である。
                内因性ドパミン-オピオイド軸と基底核回路を介した<strong>下行性抑制の弱さ</strong>が、うつ・不安・C型人格、そして慢性神経障害性疼痛への共通の脆弱性を表しうる。
                したがって神経障害性疼痛とうつは互いに因果関係にあるのではなく、<strong>低脳ドパミントーンという共通素因（遺伝性または獲得性）から生じる</strong>と考えるべきである。
              </p>
              <p>
                <strong>新たな統合仮説</strong>：BMSの4つの主要特徴――(1)閉経後女性の優位／(2)精神医学的併存／(3)口腔症状／(4)末梢・中枢の確認検査異常――を踏まえると、
                慢性不安・抑うつによる副腎ステロイド変化、および/または閉経による性腺ホルモンの劇的変化が
                <strong>神経保護ステロイド（例：DHEA）</strong>の有意な減少を招き、神経毒性因子の存在下で
                <strong>DHEA依存性のAδ小径線維と黒質線条体DA神経の選択的障害</strong>を惹起、
                これが遺伝的に弱いDA-オピオイド軸下行性抑制と組み合わさって、末梢／中枢／混合型の臨床BMS表現型を生みうる。
              </p>
              <p>
                さらに注目すべきは、神経生理検査で<strong>臨床的に典型的なBMSの約20%に亜臨床三叉神経系病変</strong>（亜臨床的舌神経・下歯槽神経損傷、脳幹病変など）が見られることである。
                既存文献から、<strong>臨床感覚診察では神経障害性口腔顔面痛の診断・分類に不十分</strong>であることは明らかである。
                神経解剖学的に妥当な臨床徴候を必須とする現行のIASP神経障害性疼痛の定義は<strong>亜臨床的神経障害性疼痛を認識せず、
                確認検査の結果のみでは神経障害性の証拠と認めない</strong>点で不適切と論じうる。
                症状から神経生理・心理物理・神経病理・機能的脳画像所見への「ショートカット」を許容することで、
                BMSのような疾患でも確定診断が可能になる。
                これらを踏まえると、IHSが<strong>BMSを有痛性脳神経障害に分類することは最も適切</strong>と思われる。
              </p>
              <p>
                BMSの2亜群（末梢／中枢）の正しい診断・分類は、<strong>個々の患者レベルで最適治療を導く</strong>ため重要である：
                末梢型は<strong>クロナゼパムやカプサイシンの局所治療</strong>から利益を得うる一方、
                中枢型は<strong>rTMSやドパミン作動薬で内因性ドパミン-オピオイド下行性制御を増強する</strong>ことで最も緩和されうる。
                純粋な小径線維神経障害の徴候があれば、治癒可能な小径線維神経障害の病因の系統的精査が必要である。
              </p>
            </div>
          </section>

          {/* 4. 末梢性の根拠論文Web検索サマリー */}
          <section className="bg-white p-5 rounded-xl shadow-sm border-2 border-rose-200">
            <h3 className="text-lg font-bold text-rose-900 border-b-2 border-rose-200 pb-2 mb-3">
              4. 末梢性の根拠となる主要論文（Web検索サマリー）
            </h3>
            <p className="text-sm mb-4">
              Jääskeläinen 2017 が末梢神経系関与の根拠として引用した主要論文を、PubMed/ScienceDirect/Wileyで実検索のうえサマリー化しました。
            </p>

            <div className="space-y-4">
              {/* Lauria 2005 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">① Lauria G et al. (2005) PAIN 115:332-7 — 舌粘膜生検で小径線維神経障害を初めて証明</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>ミラノ・国立神経学研究所Carlo BestaのLauriaらが、6か月以上のBMS患者<strong>12名</strong>と健常対照<strong>9名</strong>から舌側方の表在生検を採取。</li>
                  <li>免疫組織化学・共焦点顕微鏡で多種マーカーを共局在解析、<strong>上皮内神経線維密度（IENFD）を定量</strong>。</li>
                  <li><strong>BMS患者の上皮内神経線維密度は対照より有意に低く、症状持続期間と相関傾向</strong>。上皮および乳頭下神経線維は<strong>軸索変性を反映するびまん性形態変化</strong>を呈した。</li>
                  <li>結論：<strong>BMSは三叉神経小径線維感覚神経障害が原因</strong>であり、舌の表在生検は診断補助となる。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  この論文はBMSが「気のせい」ではなく<strong>組織学的に証明可能な神経障害</strong>であることを最初に示したランドマーク研究。
                </p>
              </div>

              {/* Yilmaz 2007 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">② Yilmaz Z et al. (2007) J Clin Neurosci 14:864-71 — TRPV1とNGFの増加が疼痛スコアと相関</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>BMS患者<strong>10名</strong>と対照<strong>10名</strong>の舌生検を、<strong>TRPV1（カプサイシン受容体・熱受容体）／NGF（神経成長因子）／神経マーカー（neurofilament, peripherin）</strong>で免疫染色。</li>
                  <li>BMSでは<strong>上皮を貫通する神経線維が減少（小径線維神経障害を示唆）</strong>。</li>
                  <li>一方、<strong>TRPV1陽性線維とNGF陽性線維は有意に増加</strong>、基底上皮細胞のNGF染色も増加。</li>
                  <li><strong>ベースライン疼痛スコアとTRPV1／NGF線維数に有意な相関</strong>。</li>
                  <li>結論：<strong>選択的TRPV1／NGFブロッカーがBMSの新規治療となりうる</strong>。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  「線維数は減るのに、残存線維のTRPV1発現は増える」という一見矛盾した所見が、<strong>残存線維の過敏化（peripheral sensitization）</strong>を直接的に示した重要研究。
                </p>
              </div>

              {/* Beneng 2010 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">③ Beneng K et al. (2010) Int J Oral Maxillofac Surg 39:815-9 — P2X3受容体の上昇</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>BMS患者<strong>9名</strong>（IASP基準）と智歯抜歯対照<strong>10名</strong>の舌粘膜で、<strong>ATP感受性のP2X3プリン受容体</strong>免疫反応性を初評価。</li>
                  <li><strong>P2X3陽性線維はBMSで有意に増加</strong>（平均%面積：対照0.96±0.30 vs BMS 2.51±0.61, p=0.024）。</li>
                  <li>一方、<strong>neurofilament染色線維はBMSで減少</strong>。両者の比をとるとP2X3線維の増加傾向。</li>
                  <li>結論：<strong>三叉神経感覚系のP2X3亢進がBMS症状に寄与</strong>、P2X3はBMS・三叉神経障害性疼痛の治療標的となりうる。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  TRPV1に加え<strong>P2X3も末梢過敏化メディエーター</strong>として働くことを示し、BMSの末梢性メカニズムの分子的多様性を支持。
                </p>
              </div>

              {/* Grémeau-Richard 2010 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">④ Grémeau-Richard C et al. (2010) PAIN 149:27-32 — リドカイン舌神経ブロックで末梢／中枢に分類</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li><strong>無作為化二重盲検クロスオーバー</strong>試験。注射前と注射15分後にVASで自発灼熱痛を測定。</li>
                  <li><strong>末梢群（n=10）</strong>：リドカインでVAS −4.3±3.1 cm、生食 −0.9±0.3 cm（<strong>p=0.02</strong>）。<strong>明確な鎮痛反応</strong>。</li>
                  <li><strong>中枢群（n=7）</strong>：リドカインで疼痛<strong>増悪（−0.8±2.6 cm、つまり悪化方向）</strong>、生食で −1.5±3.0 cm（p=0.15）。</li>
                  <li><strong>局所クロナゼパムは末梢群でより有効傾向（p=0.07）、HADスコアも末梢群で低い（p&lt;0.03）</strong>。</li>
                  <li>結論：BMSの神経障害性病態は<strong>個々で末梢性／中枢性／混合型</strong>であり、<strong>局所クロナゼパムとHADはサブタイプの指標</strong>になりうる。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  本論文は<strong>「末梢／中枢の臨床的サブタイプ分類」のエビデンス上の柱</strong>。Jääskeläinen 2017 の中核引用。
                </p>
              </div>

              {/* Puhakka 2016 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">⑤ Puhakka A et al. (2016) Oral Dis 22:338-44 — IENFD低下を再確認、亜臨床全身性末梢神経障害の可能性</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>慎重に表現型化されたBMS患者<strong>10名</strong>と年齢・性別マッチ屍体対照<strong>19名</strong>（うち6名は生前糖尿病）の舌粘膜IENFDを比較。</li>
                  <li>三叉神経系および四肢遠位末梢神経の徹底的な神経生理・心理物理学的検査を実施。</li>
                  <li>BMS患者は非糖尿病対照に比し<strong>IENFDが有意に低下（0.27±0.18 mm⁻¹ vs 0.92±0.15 mm⁻¹, p=0.0253）</strong>。</li>
                  <li>結論：<strong>口腔粘膜の純粋な局所小径線維神経障害が原発性BMS病態に役割</strong>を果たす。さらにBMSは<strong>より全身性で亜臨床的な末梢神経障害</strong>に関連する可能性。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  Lauria 2005の所見を独立した別グループ（フィンランド）が再現。<strong>外的妥当性</strong>を強化した研究。
                </p>
              </div>

              {/* Forssell 2002 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">⑥ Forssell H et al. (2002) PAIN 99:41-7 — 「BMS患者の76%にQST異常」の根拠論文</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li><strong>BMS患者52名</strong>に対しQSTと瞬目反射（BR）を施行。</li>
                  <li>電気生理所見からBMSは4カテゴリーに分類でき、<strong>10名（19%）に脳幹病変または末梢三叉神経障害を示唆するBR異常</strong>を認めた。</li>
                  <li><strong>約90%</strong>のBMS患者で何らかの感覚閾値・BR反応の異常が検出された。</li>
                  <li>結論：BMSは「症状のみ」の機能性疾患ではなく、<strong>大多数で電気生理学的に客観的な感覚機能障害</strong>を伴う。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  Jääskeläinen 2017 が引用する「<strong>76%が温度覚QSTで低感覚</strong>」の数値はこの論文に由来。
                </p>
              </div>

              {/* Eliav 2007 */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h4 className="font-bold text-rose-900 mb-1">⑦ Eliav E et al. (2007) JADA 138:628-33 — 鼓索神経機能不全を電気味覚検査で証明</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>電気味覚閾値は<strong>鼓索神経機能</strong>を、電気的検出/しびれ閾値は<strong>三叉神経機能</strong>を反映するという原理に基づく。</li>
                  <li>BMS患者では電気味覚/しびれ検出比と味覚検出閾値が二次性BMS・対照より有意に高く、<strong>22名中18名（82%）に鼓索神経機能不全</strong>（13名片側性／5名両側性）。</li>
                  <li>結論：<strong>鼓索神経機能低下がBMS病態に重要な役割</strong>を果たし、片側性機能低下でも全般的灼熱感を生じうる。</li>
                </ul>
                <p className="text-xs mt-2 text-rose-800">
                  Aδ味覚求心線維障害という「<strong>味覚異常を神経障害として説明</strong>」した代表的研究。
                </p>
              </div>
            </div>
          </section>

          {/* 5. Guyatt先生シミュレーション */}
          <section className="bg-slate-50 p-5 rounded-xl border-2 border-slate-300 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-300 pb-2 mb-3">
              5. G先生（Guyatt）シミュレーションによる批判的吟味
            </h3>
            <p className="text-xs text-slate-600 italic mb-3">
              ※ EBM/GRADE学派（McMaster大学・Guyatt教授）の方法論を踏まえた批判的吟味の<strong>シミュレーション</strong>。本人の見解ではない。
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-slate-800">5-1. 短い結論</h4>
                <p>
                  Guyatt学派の観点から述べる。Jääskeläinen 2017 は、原発性BMSが神経障害性疼痛であるかという問いに対し、末梢・中枢両方の神経系異常のエビデンスを包括的にまとめた
                  <strong>ナラティブレビュー</strong>である。BMSという「所見のない」慢性疼痛にQST・神経生理・PET・舌粘膜生検という多角的所見を集約し、
                  「末梢型」「中枢型」の枠組みを提示した点は<strong>病態理解と個別化治療の方向性として有意義</strong>である。
                </p>
                <p className="mt-2">
                  しかしEBMの枠組みでは、(1)<strong>系統的レビューではなく検索戦略・risk of bias評価が明示されない</strong>、
                  (2)引用研究の多くが<strong>著者自身のグループ</strong>、(3)個々は<strong>小規模横断・症例対照研究・症例集積</strong>で因果推論には限定的、
                  (4)<strong>病態生理仮説の提示が中心で治療効果エビデンスは限定</strong>、(5)ドパミン仮説は<strong>仮説生成段階</strong>にとどまる、という明確な限界がある。
                </p>
                <p className="mt-2 font-medium">
                  結論：<strong>BMSの病態理解を深めるナラティブレビューとして価値があるが、診断基準変更や治療選択を直接導くレベルのエビデンスは提供しない。仮説生成的論文として読むべき。</strong>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-2. PICO/研究の問い</h4>
                <div className="overflow-x-auto">
                  <table className="text-xs w-full border border-slate-300 mt-2">
                    <tbody>
                      <tr><td className="border px-2 py-1 font-bold w-32">Population</td><td className="border px-2 py-1">原発性BMS患者（IHS 2013基準）</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">Question</td><td className="border px-2 py-1">BMSにおける神経障害性疼痛の病態生理学的エビデンスはあるか</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">Comparator</td><td className="border px-2 py-1">健常対照</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">Outcomes</td><td className="border px-2 py-1">QST／神経生理／IENFD／PET／リドカインブロック反応／精神医学的併存</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">Design</td><td className="border px-2 py-1">ナラティブレビュー（NeuPSIG第6回会議論文）</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">Setting</td><td className="border px-2 py-1">主にフィンランド・トゥルク大学グループ</td></tr>
                      <tr><td className="border px-2 py-1 font-bold">COI</td><td className="border px-2 py-1">なしと報告</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-2 text-slate-700">
                  ※アウトカムはすべて<strong>病態生理・診断的指標（サロゲート）</strong>であり、患者重要アウトカム（疼痛軽減・QOL・機能・害）の治療研究のレビューではない。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-3. 著者の主張の3層分類</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs mt-2">
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded">
                    <strong className="text-emerald-900">データから直接支持</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>精密検査で大多数に末梢/中枢の神経障害性変化</li>
                      <li>QSTで76%に温度覚低下</li>
                      <li>リドカインブロックで末梢/中枢分類可</li>
                      <li>線条体ドパミンレベル低下</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                    <strong className="text-amber-900">解釈として一歩踏み出した主張</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>BMSは末梢/中枢2サブタイプの慢性神経障害性疼痛</li>
                      <li>ドパミン系機能低下が疼痛と精神症状の共通基盤</li>
                      <li>IASP定義を修正し確認検査のみで確定診断とする提案</li>
                    </ul>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded">
                    <strong className="text-rose-900">支持が不十分な主張</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>閉経後ステロイド変化→神経保護能低下→小径線維損傷の包括仮説</li>
                      <li>rTMS/ドパミン作動薬が中枢型BMSに有効という治療示唆</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-4. 妥当性の点検</h4>
                <div className="overflow-x-auto">
                  <table className="text-xs w-full border border-slate-300 mt-2">
                    <thead className="bg-slate-200">
                      <tr><th className="border px-2 py-1">項目</th><th className="border px-2 py-1">評価</th><th className="border px-2 py-1">深刻度</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-2 py-1">検索の系統性</td><td className="border px-2 py-1">記載なし</td><td className="border px-2 py-1 text-rose-700">重要</td></tr>
                      <tr><td className="border px-2 py-1">引用研究の独立性</td><td className="border px-2 py-1">著者グループへの依存度高</td><td className="border px-2 py-1 text-rose-700">重要</td></tr>
                      <tr><td className="border px-2 py-1">個々の研究デザイン</td><td className="border px-2 py-1">小規模横断・症例対照</td><td className="border px-2 py-1 text-rose-700">重要</td></tr>
                      <tr><td className="border px-2 py-1">アウトカムの患者重要性</td><td className="border px-2 py-1">サロゲート中心</td><td className="border px-2 py-1 text-rose-700">重要</td></tr>
                      <tr><td className="border px-2 py-1">仮説の検証レベル</td><td className="border px-2 py-1">仮説生成中心</td><td className="border px-2 py-1 text-amber-700">軽〜重要</td></tr>
                      <tr><td className="border px-2 py-1">COI</td><td className="border px-2 py-1">なし報告</td><td className="border px-2 py-1 text-emerald-700">大きな懸念なし</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-5. GRADEによる確実性評価（暫定）</h4>
                <div className="overflow-x-auto">
                  <table className="text-xs w-full border border-slate-300 mt-2">
                    <thead className="bg-slate-200">
                      <tr><th className="border px-2 py-1">主張</th><th className="border px-2 py-1">デザイン</th><th className="border px-2 py-1">確実性</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-2 py-1">末梢小径線維異常がある</td><td className="border px-2 py-1">小規模横断・症例対照</td><td className="border px-2 py-1 text-amber-700 font-bold">Low</td></tr>
                      <tr><td className="border px-2 py-1">線条体ドパミン低下</td><td className="border px-2 py-1">非常に小規模PET</td><td className="border px-2 py-1 text-rose-700 font-bold">Very low</td></tr>
                      <tr><td className="border px-2 py-1">リドカインブロックでサブタイプ分類可</td><td className="border px-2 py-1">小規模RCT 1件</td><td className="border px-2 py-1 text-amber-700 font-bold">Low</td></tr>
                      <tr><td className="border px-2 py-1">ドパミン共通基盤仮説</td><td className="border px-2 py-1">観察・遺伝・動物の複合</td><td className="border px-2 py-1 text-rose-700 font-bold">Very low</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-6. EtD（Evidence-to-Decision）の要点</h4>
                <ul className="list-disc pl-5 text-xs space-y-1 mt-2">
                  <li><strong>問題の重要性：</strong>BMSは慢性疼痛でQOLを大きく損なう。診断・分類改善は患者にとって重要</li>
                  <li><strong>エビデンスの確実性：</strong>Low〜Very low</li>
                  <li><strong>資源・費用：</strong>QST・PET・舌粘膜生検は高コスト、広く利用不可</li>
                  <li><strong>公平性：</strong>高度検査へのアクセスは施設・地域間で大きく異なる</li>
                  <li><strong>実行可能性：</strong>大多数の臨床現場でPET・詳細神経生理は利用困難</li>
                  <li><strong>判断：</strong><strong>推奨を出す段階ではない</strong>。仮説生成的レビューとして有用</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-7. 言えること／言えないこと</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded">
                    <strong className="text-emerald-900">言えること</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>BMSの大多数に精密検査で末梢/中枢の神経系異常を認めうる（複数小規模研究）</li>
                      <li>末梢型/中枢型の概念的枠組みには一定の根拠</li>
                      <li>BMSをIASPの神経障害性疼痛枠組みで理解する試みは理論的に合理的</li>
                    </ul>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded">
                    <strong className="text-rose-900">言えないこと</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>「BMSは神経障害性疼痛である」と確定はできない（Low〜Very low）</li>
                      <li>ドパミン仮説が正しいと断定はできない</li>
                      <li>末梢型クロナゼパム／中枢型rTMSを推奨に変換するのは時期尚早</li>
                      <li>これらの検査を全BMS患者に行うべきかは判断不可</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800">5-8. G先生ならどう表現するか（想定発言）</h4>
                <blockquote className="border-l-4 border-slate-400 pl-4 italic text-sm bg-white p-3 rounded mt-2">
                  「この論文は、BMSが神経障害性疼痛であるという仮説を支持するエビデンスを包括的に整理しており、その貢献は認められる。
                  しかし、臨床家が知りたいのは、この分類が治療選択を改善し、患者にとって重要なアウトカム――疼痛の軽減、生活の質の向上――を変えるかどうかである。
                  その問いに答えるためには、ナラティブレビューではなく系統的レビューが必要であり、サブタイプ別の治療効果を検証するRCTが必要である。
                  現時点でこの論文は、病態理解を深め、今後の研究の方向性を示す<strong>仮説生成的な資料</strong>として最も適切に位置づけられる。
                  完全でないことは無価値であることを意味しない――しかし、この段階のエビデンスから強い臨床的推奨を導くことは、
                  エビデンスが支えられる範囲を超えている。」
                </blockquote>
              </div>

              <div className="bg-white border border-slate-200 p-3 rounded text-xs">
                <strong>本シミュレーションの限界：</strong>
                単一ナラティブレビュー論文のみに基づき原著の個別評価は行っていない。
                BMS治療の系統的レビューや他のbody of evidenceとの照合は未実施。
                G先生本人の見解ではなく、Guyatt/McMaster EBM/GRADE学派の方法論に基づくシミュレーション。
              </div>
            </div>
          </section>
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
    },
    {
      id: "definition-rdc-currie2020",
      title: "BMS研究用診断基準（RDC/BMS）── Currie 2020 Delphi合意の徹底解説",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* 出典 */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-sm">
            <p>
              <strong>出典：</strong>Currie CC, Ohrbach R, De Leeuw R, Forssell H, Imamura Y, Jääskeläinen SK, Koutris M, Nasri-Heir C, Tan H, Renton T, Svensson P, Durham J.
              <em> Developing a Research Diagnostic Criteria for Burning Mouth Syndrome: Results from an International Delphi Process.</em>
              <strong> J Oral Rehabil. 2020; doi:10.1111/joor.13123</strong>
            </p>
            <p className="mt-2 text-xs text-amber-900">
              ※ 著者には Ohrbach（RDC/TMDの開発者）・Jääskeläinen（前項BMS神経障害性疼痛論文の著者）・今村佳樹（日本大学）・Svensson（オーフス大学）など、BMS研究の主要人物12名が結集。INfORM（International Network for Orofacial Pain and Related Disorders Methodology）が主催した6ラウンドのDelphi合意プロセスにより、ベータ版 <strong>RDC/BMS</strong> を策定。
            </p>
          </div>

          {/* 1. 論文の背景と目的 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">1. 背景と目的</h3>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                BMSは集団の<strong>0.7〜18%</strong>に発症し、特に閉経後女性で頻発する。しかし<strong>BMSの定義そのものが研究ごとにバラバラ</strong>で、本来BMSではない患者が研究に組み入れられ、結果の再現性を著しく損なってきた。
              </li>
              <li>
                顎関節症（TMD）では1992年に Dworkin らが <strong>RDC/TMD</strong> を発表し、その後20年間で何千もの再現可能な研究を生み出した実績がある。RDC/TMDは
                <strong>(1) 生物心理社会モデル</strong>、<strong>(2) 疫学データ基盤</strong>、<strong>(3) 二軸分類（疾患＋人）</strong>、<strong>(4) 操作的基準と検査仕様の明確化</strong>、<strong>(5) 初版は不完全でも改訂前提</strong>──の5原則で構築された。
              </li>
              <li>
                Currieらは「BMSの研究と臨床がカオスだった1980年代後半のTMDと同じ状況にある」と判断し、RDC/TMDをテンプレートとして <strong>BMS版RDC</strong> をDelphi合意で開発した。最終目標は<strong>「真のBMS患者のみが研究に組み入れられること」</strong>と<strong>「多施設で比較可能な高品質研究の実施」</strong>である。
              </li>
            </ul>
          </section>

          {/* 2. Delphiプロセスの方法 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">2. Delphiプロセスの方法</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-indigo-50/60 border border-indigo-200 p-3 rounded">
                <strong>参加者：</strong>BMS臨床経験8年以上の国際エキスパート12名（招待14名中2名辞退、第1著者除く全員が8年以上）
              </div>
              <div className="bg-indigo-50/60 border border-indigo-200 p-3 rounded">
                <strong>ラウンド数：</strong>合計6ラウンド。Round 1は2017年San Francisco IADR年次総会で<strong>対面フォーカスグループ</strong>（7名対面＋5名遠隔）。Round 2〜6は<strong>メール往復</strong>で改訂を反復。
              </div>
              <div className="bg-indigo-50/60 border border-indigo-200 p-3 rounded">
                <strong>議長：</strong>シニア著者 Durham（モデレーター）、第1著者 Currie は議事録のみで意思決定には不関与。
              </div>
              <div className="bg-indigo-50/60 border border-indigo-200 p-3 rounded">
                <strong>合意ルール：</strong>すべてのコメント・改訂履歴を文書上で透明化。全員が合意し、それ以上の改訂提案が出なくなった時点（Round 6）でベータ版完成。
              </div>
            </div>
          </section>

          {/* 3. 合意されたBMS定義 */}
          <section className="bg-emerald-50 p-5 rounded-xl shadow-sm border-2 border-emerald-300">
            <h3 className="text-lg font-bold text-emerald-900 border-b-2 border-emerald-300 pb-2 mb-3">
              3. 合意されたBMSの定義（ICOP 2020準拠）
            </h3>
            <div className="bg-white border-l-4 border-emerald-500 p-4 rounded">
              <p className="text-sm font-medium leading-loose">
                「<strong>An intraoral burning or dysaesthetic sensation, recurring daily for more than 2 hours per day over more than 3 months, without evident causative lesions on clinical examination and investigation.</strong>」<br/>
                ＝「<strong>口腔内の灼熱感または異常感覚が、1日2時間以上、3か月を超えて連日反復し、臨床検査および各種精査において明らかな原因病変を認めないもの</strong>」
              </p>
            </div>
            <ul className="list-disc pl-6 text-sm space-y-1 mt-3">
              <li>痛みは<strong>灼熱性（burning quality）</strong>であり、<strong>口腔粘膜の表在性</strong>に感じられる必要がある。</li>
              <li>「精査（investigation）」には<strong>臨床所見と検査所見の両方</strong>が含まれる。</li>
              <li><strong>例外規定①：</strong>ICOPの粘膜痛障害（mucosal pain disorder）と分類された患者が、原因病変を治療した後も持続的な灼熱症状を訴える場合 → <strong>RDC/BMSで再分類可</strong>。</li>
              <li><strong>例外規定②：</strong>灼熱症状が<strong>3か月未満</strong>でも、本RDCにより <strong>"Probable BMS"（疑いBMS）</strong> として運用可。</li>
            </ul>
          </section>

          {/* 4. RDC/BMSの全体構造 */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">4. RDC/BMSの全体構造（2軸 ＋ 願望的バイオマーカー）</h3>
            <p className="text-sm mb-3">RDC/TMDをテンプレートとし、<strong>3つのデータ収集ツール＋第4のバイオマーカー枠</strong>で構成される。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                <h5 className="font-bold text-blue-900 mb-1">Part 1：症状自己報告（Symptom Self-Report）</h5>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>患者デモグラフィー</li>
                  <li>症状の記述（<strong>SF-MPQ-2</strong>＋BMS特有語彙＋自由記述）</li>
                  <li>症状部位（DC/TMD検証済み <strong>pain diagram</strong>＋舌専用図）</li>
                  <li>発症時期（≥3か月の判定用）／持続時間（≥2時間/日の判定用）</li>
                  <li>日内変動／増悪・寛解因子</li>
                  <li>症状強度：<strong>GCPS v2（Graded Chronic Pain Scale）</strong></li>
                  <li>味覚異常／口腔乾燥／飲食物・活動の影響</li>
                  <li>原因となりうる疾患・薬剤の既往</li>
                  <li><strong>1か月の毎日記録ダイアリー</strong>（&gt;2時間/日の確認）</li>
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 p-4 rounded">
                <h5 className="font-bold text-rose-900 mb-1">Part 2：診察（Examination）</h5>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li><strong>口腔外診察</strong>：神経学的・顔面所見</li>
                  <li><strong>口腔内診察</strong>：軟組織・硬組織・義歯／補綴物</li>
                  <li><strong>除外すべき病態</strong>：唾液腺疾患／粘膜疾患（水疱性・感染性・自己免疫性=ループス）／慢性粘膜皮膚炎症（扁平苔癬）／特発性（地図状舌）／外傷（化学的・熱的・放射線・機械的）／貧血／金属その他のアレルギー</li>
                  <li><strong>追加精査</strong>：血液検査／カンジダスメア／<strong>QST</strong>（または代替の <strong>QualST</strong>）／パッチテスト</li>
                  <li>画像検査は<strong>必須ではない（aspirational）</strong>。</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded">
                <h5 className="font-bold text-purple-900 mb-1">Part 3：心理社会的自己報告（Psychosocial）</h5>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>DC/TMD Axis II を<strong>痛み特異的に改変</strong>した尺度群。</li>
                  <li><strong>短縮版（Short）</strong>：PHQ-4 ／ Ultra-brief Pain Catastrophizing Scale ／ GCPS v2 ／ pain diagram（Part1再利用）</li>
                  <li><strong>長尺版（Long）</strong>：PHQ-9 ／ GAD-7 ／ PHQ-15 ／ Ultra-brief Catastrophizing ／ <strong>OBC（Oral Behaviors Checklist）</strong> ／ <strong>PROMIS Sleep Disturbance Short Form v1.0</strong> ／ GCPS v2 ／ pain diagram</li>
                  <li>各尺度の<strong>時間枠は2週間〜3か月に統一</strong>（BMSの3か月診断基準に整合）。GCPSの設問文は「口腔内症状」に合うよう改変。</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded">
                <h5 className="font-bold text-amber-900 mb-1">Part 4：願望的バイオマーカー（Aspirational Biomarkers）</h5>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>診断には<strong>必須ではないが将来研究に有用</strong>な指標群。</li>
                  <li>唾液中酸化ストレス（NO・CRP）／神経ペプチド／CGRP／血清サイトカイン・T制御細胞／可溶性CD14・TLR-2 など。</li>
                  <li>その他の心理社会領域：被虐待歴／自己効力感／体性感覚増幅（somatosensory amplification）／心理社会的ストレス。</li>
                  <li>QST／末梢ドパミン測定／嗅覚・味覚試験／プロテオミクス／外陰部痛との関連 など、今後の研究課題として列挙。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. 除外診断のリスト */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">5. 必ず除外すべき「二次性灼熱症状」の原因</h3>
            <p className="text-sm mb-3">
              本RDCの根本思想は「<strong>明らかな原因病変が見つかったらBMSとは呼ばない</strong>」こと。次の病態をすべて系統的に除外して初めてBMS診断が成立する。
            </p>
            <div className="overflow-x-auto">
              <table className="text-sm w-full border border-gray-300">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="border px-2 py-1 text-left">カテゴリー</th>
                    <th className="border px-2 py-1 text-left">疾患・状態</th>
                    <th className="border px-2 py-1 text-left">主な確認方法</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr><td className="border px-2 py-1 font-medium">感染症</td><td className="border px-2 py-1">カンジダ症</td><td className="border px-2 py-1">口腔内スワブ／スメア</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">粘膜疾患</td><td className="border px-2 py-1">扁平苔癬（OLP）／天疱瘡などの水疱性疾患／ループスなどの自己免疫疾患／地図状舌</td><td className="border px-2 py-1">視診・触診・生検</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">唾液関連</td><td className="border px-2 py-1">口腔乾燥／Sjögren症候群</td><td className="border px-2 py-1">唾液腺機能検査・唾液流量測定</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">栄養・代謝</td><td className="border px-2 py-1">貧血／ビタミンB12欠乏／葉酸欠乏／糖尿病／甲状腺機能低下症</td><td className="border px-2 py-1">血液検査</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">接触性</td><td className="border px-2 py-1">粘膜接触性反応（金属・成分アレルギー）</td><td className="border px-2 py-1">パッチテスト</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">外傷</td><td className="border px-2 py-1">化学的／熱的／放射線／機械的損傷</td><td className="border px-2 py-1">問診・診察</td></tr>
                  <tr><td className="border px-2 py-1 font-medium">薬剤性</td><td className="border px-2 py-1">ACE阻害薬／プロトンポンプ阻害薬／抗凝固薬など灼熱感を起こしうる薬剤</td><td className="border px-2 py-1">薬剤歴聴取</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. デザインされた診断基準フロー */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl shadow-sm border-2 border-indigo-300">
            <h3 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-300 pb-2 mb-4 text-center">
              ★ Currie 2020 RDC/BMS 診断基準フロー（デザイン版）
            </h3>

            {/* Step形式のフローチャート */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white border-2 border-indigo-400 rounded-xl p-5 shadow-md relative">
                <div className="absolute -left-3 -top-3 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <h4 className="font-bold text-indigo-900 mb-2 ml-8">症状の <span className="text-rose-600">必須5要件</span> をすべて満たすか？</h4>
                <div className="ml-8 grid grid-cols-1 md:grid-cols-5 gap-2 text-xs">
                  <div className="bg-indigo-50 border border-indigo-200 p-2 rounded text-center">
                    <strong className="block text-indigo-900">① 性質</strong>
                    口腔内の<br/><strong>灼熱感</strong>または<br/>異常感覚
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-2 rounded text-center">
                    <strong className="block text-indigo-900">② 部位</strong>
                    口腔粘膜の<br/><strong>表在性</strong><br/>に感じる
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-2 rounded text-center">
                    <strong className="block text-indigo-900">③ 頻度</strong>
                    <strong>連日</strong><br/>反復する
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-2 rounded text-center">
                    <strong className="block text-indigo-900">④ 持続</strong>
                    <strong>1日2時間以上</strong><br/>（ダイアリーで確認）
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-2 rounded text-center">
                    <strong className="block text-indigo-900">⑤ 期間</strong>
                    <strong>3か月超</strong><br/>※3か月未満は<br/>"probable BMS"
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-indigo-600 text-2xl">↓ Yes</div>

              {/* Step 2 */}
              <div className="bg-white border-2 border-rose-400 rounded-xl p-5 shadow-md relative">
                <div className="absolute -left-3 -top-3 bg-rose-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                <h4 className="font-bold text-rose-900 mb-2 ml-8">原因病変の <span className="text-rose-600">系統的除外</span></h4>
                <p className="ml-8 text-sm mb-2">下記をすべてチェックし、原因となる病変が <strong>すべて陰性</strong> であること：</p>
                <div className="ml-8 grid grid-cols-2 md:grid-cols-4 gap-1 text-xs">
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ カンジダ（スメア）</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 扁平苔癬／粘膜疾患</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 唾液腺機能（流量低下）</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 接触性反応（パッチ）</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 貧血／B12／葉酸</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 糖尿病／甲状腺</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ Sjögren症候群</div>
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded">☐ 薬剤性／外傷</div>
                </div>
                <p className="ml-8 text-xs mt-2 text-rose-700">
                  ※例外：粘膜痛障害として治療後も灼熱症状が残存する患者は <strong>RDC/BMSで再分類可</strong>。
                </p>
              </div>

              <div className="text-center text-rose-600 text-2xl">↓ すべて陰性</div>

              {/* Step 3 */}
              <div className="bg-white border-2 border-purple-400 rounded-xl p-5 shadow-md relative">
                <div className="absolute -left-3 -top-3 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                <h4 className="font-bold text-purple-900 mb-2 ml-8">Axis II：心理社会的評価（必須）</h4>
                <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                    <strong className="text-purple-900 block mb-1">短縮版（スクリーニング）</strong>
                    PHQ-4／Ultra-brief Catastrophizing／GCPS v2／pain diagram
                  </div>
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                    <strong className="text-purple-900 block mb-1">長尺版（詳細評価）</strong>
                    PHQ-9／GAD-7／PHQ-15／OBC／PROMIS Sleep／GCPS v2／pain diagram
                  </div>
                </div>
              </div>

              <div className="text-center text-purple-600 text-2xl">↓</div>

              {/* Step 4 */}
              <div className="bg-white border-2 border-amber-400 rounded-xl p-5 shadow-md relative">
                <div className="absolute -left-3 -top-3 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">4</div>
                <h4 className="font-bold text-amber-900 mb-2 ml-8">願望的バイオマーカー（任意）</h4>
                <p className="ml-8 text-xs">QST／末梢ドパミン／嗅覚・味覚検査／唾液NO・CRP／神経ペプチド・CGRP／TRPV1関連／プロテオミクス／VVD（外陰部痛）の併存評価 など。診断には不要だが、研究データとして収集を推奨。</p>
              </div>

              <div className="text-center text-amber-600 text-2xl">↓</div>

              {/* Final Diagnosis */}
              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-emerald-900 text-center text-lg mb-2">
                  ✓ RDC/BMS による BMS 確定診断
                </h4>
                <p className="text-center text-sm text-emerald-800">
                  Axis I：身体的診断（BMS）／Axis II：心理社会的プロファイル
                </p>
              </div>
            </div>
          </section>

          {/* 7. 重要ポイント */}
          <section className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-indigo-900 border-b-2 border-indigo-100 pb-2 mb-3">7. RDC/BMSの臨床的意義（テイクホーム）</h3>
            <ol className="list-decimal pl-6 text-sm space-y-2">
              <li><strong>「真のBMS」と「BMS様症状」を明確に区別する初の国際合意基準</strong>。研究組み入れ・除外を標準化し、メタ解析の質を底上げする。</li>
              <li>診断は<strong>「症状要件＋系統的除外」</strong>の2段階。Axis IIの心理社会的評価を<strong>必須化</strong>した点はTMD研究の延長にあり、生物心理社会モデルを徹底。</li>
              <li><strong>1か月ダイアリー</strong>と<strong>pain diagram（舌専用図含む）</strong>は、患者の主観だけでなく客観的な「2時間/日・3か月」の確認手段として有用。</li>
              <li><strong>QSTはaspirational</strong>（必須ではない）。機材のない施設でも代替の<strong>QualST</strong>で運用可。BMSの末梢／中枢サブタイピングは今後の課題。</li>
              <li>本RDCは <strong>ベータ版（beta test version）</strong>。多施設での試行・改訂後に正式版が発表される予定。臨床応用には慎重な解釈が必要。</li>
              <li>画像検査・サブタイプ分類・バイオマーカーは<strong>必須要素から外す</strong>ことで、地域格差なく国際的に普及できる設計になっている。</li>
              <li>3か月未満の症例も<strong>"probable BMS"</strong>として扱えるため、早期介入研究にも応用可能。</li>
            </ol>
          </section>

          {/* 8. 限界とG先生（Guyatt）視点 */}
          <section className="bg-slate-50 p-5 rounded-xl border border-slate-300 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-300 pb-2 mb-3">8. 限界とEBM的視点</h3>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li><strong>Delphi合意 ≠ エビデンス</strong>：12名の専門家意見の合意であり、診断基準の<strong>妥当性・信頼性（reliability・validity）は未検証</strong>。今後のフィールドテストで偽陽性・偽陰性率を評価する必要がある。</li>
              <li><strong>専門家の地理的・学派的偏り</strong>：欧米・日本のINfORMメンバー中心。アジア・南米・アフリカの臨床現場での適用性は未確認。</li>
              <li><strong>サブタイプ分類が未反映</strong>：Jääskeläinen 2017の「末梢型／中枢型」モデルはRDC本体に組み込まれていない（Aspirational扱い）。研究現場では別途phenotypingを追加することが推奨される。</li>
              <li><strong>「probable BMS」の妥当性</strong>：3か月未満の患者は自然軽快も多く、「probable BMS」基準で組み入れた場合、自然回復による治療効果の過大評価リスクがある。</li>
              <li><strong>ベータ版である</strong>：著者自身が「使用には臨床的解釈を要する（should be used with clinical interpretation）」と明記。正式版の発表を待つ姿勢が望ましい。</li>
            </ul>
          </section>
        </div>
      )
    }
  ]
};
