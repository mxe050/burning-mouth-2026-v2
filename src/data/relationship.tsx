import { ReactNode } from 'react';
import { HeartHandshake, ExternalLink } from 'lucide-react';
import { Chapter } from '../types';

export const relationshipChapter: Chapter = {
  id: "chapter-relationship",
  title: "一般的な口腔顔面痛とバーニングマウス症候群の関係",
  icon: <HeartHandshake className="w-5 h-5" />,
  subSections: [
    {
      id: "relationship-overview",
      title: "一般的な口腔顔面痛とバーニングマウス症候群の関係",
      content: (
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* 既存部分の完全維持 */}
          <div className="space-y-6">
            <p>
              一般的な口腔顔面痛（虫歯、歯周病、感染症、外傷、明確な神経損傷などによる痛み）とBMSの最大の違いは、<strong>「目に見える病変や、痛みを引き起こす直接的な原因疾患の有無」</strong>にあります<span className="text-xs text-gray-500 ml-1">（参考文献：『Burning mouth syndrome - Diagnosis and treatment - Mayo Clinic』）</span>。一般的な口腔顔面痛は、原因となる疾患を特定しそれを治療することで痛みが消失します<span className="text-xs text-gray-500 ml-1">（参考文献：『Burning Mouth | NIDCR』）</span>。
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 border-b pb-2">BMSの分類</h4>
              
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                <h5 className="font-bold text-orange-800 flex items-center mb-2">
                  <span className="bg-orange-200 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                  原発性（一次性）BMS
                </h5>
                <p className="mb-2">
                  詳細な検査を行っても痛みを説明できる口内の異常（炎症や傷）や全身疾患が見つからない特発性の痛みを指します。
                </p>
                <p className="text-sm bg-white/60 p-3 rounded">
                  この原発性BMSにおける痛みは、主に三叉神経の分布領域に沿って両側性に現れることが多く、口の渇きや味覚障害を伴う神経障害性疼痛としての性質を持ちます。
                </p>
                <p className="text-xs text-orange-700/70 mt-2">
                  （参考文献：『Burning Mouth | NIDCR』、『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』）
                </p>
              </div>
    
              <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                <h5 className="font-bold text-teal-800 flex items-center mb-2">
                  <span className="bg-teal-200 text-teal-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                  続発性（二次性）BMS
                </h5>
                <p className="mb-2">
                  一般的な口腔・全身トラブルが引き金となって「BMSのような灼熱痛」を引き起こしている状態を指し、これらは原因疾患の治療によって症状が消失します。
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 bg-white/60 p-3 rounded">
                  <li>歯ぎしりや食いしばりといった口腔内の悪習癖</li>
                  <li>アレルギー</li>
                  <li>ドライマウス（シェーグレン症候群など）</li>
                  <li>カンジダなどの感染症</li>
                  <li>ビタミンBや鉄分の栄養欠乏</li>
                  <li>胃酸逆流</li>
                  <li>糖尿病や甲状腺疾患などの内分泌異常など</li>
                </ul>
                <p className="text-xs text-teal-700/70 mt-2">
                  （参考文献：『Burning Mouth | NIDCR』）
                </p>
              </div>
            </div>
          </div>

          {/* 新規追加部分 */}
          <div className="space-y-8 pt-8 border-t-2 border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 border-b-2 border-indigo-100 pb-3">
              現在の学術的分類に基づく一般的な口腔顔面痛とバーニングマウス症候群の関係
            </h3>

            {/* 1. 口腔顔面痛全体におけるバーニングマウス症候群（BMS）の現在の位置づけ */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-800 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">1</span>
                口腔顔面痛全体におけるバーニングマウス症候群（BMS）の現在の位置づけ
              </h4>
              <p>
                一般的な歯痛や歯周病、顎関節症などを含む「口腔顔面痛（Orofacial Pain）」という大きな学術的枠組みの中で、バーニングマウス症候群（BMS：いわゆる舌痛症）は明確に区別された特殊な位置づけを持っています。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『Palmitoylethanolamide (PEA) in the Treatment of Orofacial Pain』</p>
                <a href="https://www.mdpi.com/1999-4923/15/4/1193" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  MDPI
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "Pain is the most common symptom that dentists are confronted with, whether acute (pulpitis, acute periodontitis, post-surgery, etc.) or chronic diseases, such as periodontitis, muscle pain, temporomandibular joint (TMJ) disorders, burning mouth syndrome (BMS), oral lichen planus (OLP) and others."
                </blockquote>
              </div>

              <p>
                この原文記述が示す通り、臨床的に直面する口腔顔面痛には、急性歯髄炎などの明確な組織損傷による<strong>「急性痛（侵害受容性疼痛）」</strong>と、顎関節症やBMSを含む<strong>「慢性痛」</strong>が混在しています。その中で、BMSが一般的な口腔顔面痛とどのように学術的に区別されているかについて、以下の論文で定義されています。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『Burning mouth syndrome: updates on pathogenesis and diagnostic algorithms』</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12738272/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  PMC
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "Burning Mouth Syndrome (BMS) is a complex, chronic neuropathic orofacial pain disorder characterized by a persistent burning or dysesthetic sensation in the oral cavity without an identifiable organic cause."
                </blockquote>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-900 font-medium">
                  すなわち、明確な原因疾患（虫歯や炎症など）が存在しそれを治療すれば治る一般的な口腔顔面痛とは異なり、現在の学術界においてBMSは<strong>「特定可能な器質的原因を持たない、複雑な慢性神経障害性口腔顔面痛」</strong>として完全に別のカテゴリーとして扱われています。
                </p>
              </div>
            </div>

            {/* 2. 国際口腔顔面痛分類（ICOP）における分類と関係性 */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-lg text-gray-800 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">2</span>
                国際口腔顔面痛分類（ICOP）における分類と関係性
              </h4>
              <p>
                現在の学術界において、一般的な口腔顔面痛とBMSの関係性を最も明確に体系化しているのが<strong>「国際口腔顔面痛分類（ICOP：International Classification of Orofacial Pain）」</strong>です。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『Journal of Oral & Facial Pain and Headache』</p>
                <a href="https://www.jofph.com/articles/10.22514/jofph.2025.060/htm" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  JOFPH
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "Burning mouth syndrome (BMS) is defined as “idiopathic orofacial pain with intraoral burning or dysesthesia recurring daily for more than 2 hours per day and more than 3 months, without any identifiable causative lesions, with or without somatosensory changes”."
                </blockquote>
              </div>

              <p>
                ICOPの体系において、一般的な虫歯や歯周病による痛みは「歯・歯髄・歯周組織に起因する痛み（第1章）」等として分類されます。それに対し、BMSは<strong>第6章の「特発性口腔顔面痛（Idiopathic orofacial pain）」</strong>という独立したカテゴリーに分類されます。この特発性口腔顔面痛内の階層構造について、以下の論文で示されています。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『International Classification of Orofacial Pain Algorithm』</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12709632/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  PMC
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "Level 1: 6. Idiopathic orofacial pain<br/>
                  Level 2: 6.1. Burning mouth syndrome (BMS)<br/>
                  Level 3: 6.1.1. Burning mouth syndrome without somatosensory changes, 6.1.2. Burning mouth syndrome with somatosensory changes"
                </blockquote>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-900 font-medium">
                  このように、現在の分類学上、BMSは口腔顔面痛という大きな枠組みの一部でありながら、一般的な組織損傷による痛みとは完全に切り離され、<strong>「特発性（原因不明）」の疾患として細分化・独立して分類</strong>されています。
                </p>
              </div>
            </div>

            {/* 3. 国際頭痛分類（ICHD-3）に基づく他の口腔顔面痛との鑑別 */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-lg text-gray-800 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">3</span>
                国際頭痛分類（ICHD-3）に基づく他の口腔顔面痛との鑑別
              </h4>
              <p>
                国際頭痛学会が定める<strong>国際頭痛分類第3版（ICHD-3）</strong>においても、一般的な口腔顔面痛とBMSを分かつ鑑別基準が厳密に定められています。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『13.11 Burning mouth syndrome (BMS)』</p>
                <a href="https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-11-persistent-idiopathic-facial-pain-pifp/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  ICHD-3
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "13.11 Burning mouth syndrome (BMS) - An intraoral burning or dysaesthetic sensation, recurring daily for more than 2 hours/day over more than 3 months, without clinically evident causative lesions. Diagnostic criteria: Oral mucosa is of normal appearance and clinical examination including sensory testing is normal."
                </blockquote>
              </div>

              <p>
                一般的な口腔顔面痛が特定の歯や組織の異常所見を伴うのに対し、BMSの診断は<strong>「臨床的に明らかな原因病変がなく、粘膜が正常に見え、臨床検査が完全に正常であること」</strong>が絶対条件となります。さらに、他の口腔顔面痛との鑑別において<strong>「痛みの広がり方」</strong>が重要な学術的指標となります。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『Burning mouth syndrome: updates on pathogenesis and diagnostic algorithms』</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12738272/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  PMC
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "BMS patients generally report oral burning/pain that diffuse to the entire oral mucosa or restricted to the tongue... When pain is unilateral, it is essential to differentiate BMS from other orofacial pain conditions, such as persistent idiopathic facial pain (PIFP), persistent idiopathic dentoalveolar pain"
                </blockquote>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-900 font-medium">
                  一般的な歯痛や他の非定型歯痛（PIFPなど）は片側性に現れることが多いのに対し、BMSは<strong>口腔粘膜全体に拡散する特徴</strong>があり、学術的にはこれら他の口腔顔面痛と厳密に鑑別されるべき疾患とされています。
                </p>
              </div>
            </div>

            {/* 4. 他の慢性口腔顔面痛（中枢過敏性症候群など）との関連性 */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-lg text-gray-800 flex items-center">
                <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">4</span>
                他の慢性口腔顔面痛（中枢過敏性症候群など）との関連性
              </h4>
              <p>
                BMSはICOPにおいて独立した特発性疾患として分類される一方で、顎関節症（TMD）やその他の慢性疼痛と共通の神経学的基盤を持つ可能性についても学術的に議論されています。
              </p>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-2">参考文献</h5>
                <p className="text-sm font-medium text-indigo-700 mb-1">『Co-occurring pain symptoms and quantitative sensory testing in burning mouth syndrome』</p>
                <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0163449" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-3">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  PLOS ONE
                </a>
                <blockquote className="border-l-4 border-indigo-300 pl-4 text-sm text-gray-600 italic bg-white p-3 rounded">
                  "BMS has been associated with other chronic pain syndromes including other idiopathic orofacial pain, the dynias group and the family of central sensitivity syndromes. This would imply that BMS shares common mechanisms with other cephalic and/or extracephalic chronic pains."
                </blockquote>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-900 font-medium">
                  この記述から、現在の学術界においてBMSは、局所のトラブルで完結する一般的な口腔顔面痛（虫歯など）とは異なり、中枢過敏性症候群や他の特発性疼痛と共通のメカニズムを持つ<strong>「慢性疼痛症候群」</strong>の一つとして、より広範な口腔顔面の神経痛ネットワークの中に位置づけられていることが分かります。
                </p>
              </div>
            </div>

          </div>
        </div>
      )
    }
  ]
};
