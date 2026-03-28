import { ReactNode } from 'react';
import { Zap, ExternalLink, Activity, Network, ArrowRight, BrainCircuit, GitBranch } from 'lucide-react';
import { Chapter } from '../types';

export const pathophysiologyChapter: Chapter = {
  id: "chapter-pathophysiology",
  title: "現在の病態生理（痛みのメカニズム）",
  icon: <Zap className="w-5 h-5" />,
  subSections: [
    {
      id: "pathophysiology-basics",
      title: "第1部：初心者向け基礎知識",
      content: (
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          {/* 新規追加：第1部 */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <BrainCircuit className="w-6 h-6 mr-2 text-blue-600" />
                第1部：初心者向け基礎知識 — 神経の構造と痛みが伝わる仕組み
              </h3>
              <p className="text-blue-800 mb-6 font-medium">
                三叉神経痛や舌痛症のメカニズムを理解するために、まずは「神経」がどのように情報を伝え、どのように「痛み」として脳に届くのか、その基本を分かりやすく解説します。
              </p>

              <div className="space-y-8">
                {/* 1. 神経は「電気のコード」のようなもの */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">1</span>
                    神経は「電気のコード」のようなもの
                  </h4>
                  <p className="mb-4 text-sm">
                    私たちの体中に張り巡らされている神経は、情報を伝えるための「電気コード」のような役割をしています。<br />
                    例えば、舌に何かが触れたり、熱いものを食べたりしたとき、その刺激は電気信号に変えられ、神経を通って脳へと送られます。
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h5 className="text-sm font-bold text-gray-700 mb-3 text-center">【図解：神経細胞（ニューロン）の基本構造】</h5>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                      <div className="bg-blue-100 p-3 rounded-full w-24 h-24 flex flex-col items-center justify-center border-2 border-blue-300 relative z-10">
                        <span className="font-bold text-blue-800 text-sm">細胞体</span>
                        <span className="text-[10px] text-blue-600">（司令塔）</span>
                      </div>
                      <div className="hidden md:block w-16 h-1 bg-blue-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-around">
                          <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
                        </div>
                      </div>
                      <div className="bg-indigo-100 p-3 rounded-full w-24 h-24 flex flex-col items-center justify-center border-2 border-indigo-300 relative z-10">
                        <span className="font-bold text-indigo-800 text-sm">軸索</span>
                        <span className="text-[10px] text-indigo-600">（コード部分）</span>
                      </div>
                      <div className="hidden md:block w-16 h-1 bg-indigo-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-around">
                          <ArrowRight className="w-4 h-4 text-indigo-500" />
                        </div>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full w-24 h-24 flex flex-col items-center justify-center border-2 border-purple-300 relative z-10">
                        <span className="font-bold text-purple-800 text-sm">終末</span>
                        <span className="text-[10px] text-purple-600">（出口）</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li><strong className="text-blue-700">細胞体（さいぼうたい）:</strong> 神経の本体で、核などの重要なパーツが入っています。</li>
                      <li><strong className="text-indigo-700">軸索（じくさく）:</strong> 電気信号が走る長いコードの部分です。</li>
                      <li><strong className="text-purple-700">終末（しゅうまつ）:</strong> コードの先端です。ここから次の神経へとバトンタッチします。</li>
                    </ul>
                  </div>
                </div>

                {/* 2. 三叉神経とは？ */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">2</span>
                    三叉神経（さんさしんけい）とは？
                  </h4>
                  <p className="mb-4 text-sm">
                    顔の感覚（触った感じ、痛み、温度）を脳に伝えるための、顔専用の大きな神経です。<br />
                    脳から出て、顔の左右でそれぞれ「3つの大きな枝」に分かれているため、「三叉（さんさ）」と呼ばれます。
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h5 className="text-sm font-bold text-gray-700 mb-3 text-center">【図解：三叉神経の3本の道】</h5>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="bg-gray-800 text-white p-4 rounded-lg font-bold shadow-md">
                        脳幹
                      </div>
                      <GitBranch className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" />
                      <div className="space-y-3 w-full md:w-auto">
                        <div className="flex items-center bg-green-50 border border-green-200 p-3 rounded-lg shadow-sm">
                          <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</div>
                          <div>
                            <strong className="text-green-800 text-sm block">第1枝（眼神経）</strong>
                            <span className="text-xs text-green-700">おでこ、目、鼻のあたりの感覚</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-yellow-50 border border-yellow-200 p-3 rounded-lg shadow-sm">
                          <div className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</div>
                          <div>
                            <strong className="text-yellow-800 text-sm block">第2枝（上顎神経）</strong>
                            <span className="text-xs text-yellow-700">ほっぺた、上の歯、口の天井（口蓋）の感覚</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm relative overflow-hidden">
                          <div className="absolute inset-0 bg-red-100 opacity-50 animate-pulse"></div>
                          <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0 relative z-10">3</div>
                          <div className="relative z-10">
                            <strong className="text-red-800 text-sm block">第3枝（下顎神経）</strong>
                            <span className="text-xs text-red-700">あご、下の歯、舌の前の方の感覚</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-red-100 text-red-800 p-3 rounded-md text-sm font-medium text-center border border-red-200">
                      ※ 舌痛症（BMS）では、主にこの「第3枝（舌の神経）」や「第2枝（口蓋の神経）」が関係しています。
                    </div>
                  </div>
                </div>

                {/* 3. シナプス */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 shrink-0">3</span>
                    シナプス：神経と神経の「バトンタッチ」
                  </h4>
                  <p className="mb-4 text-sm">
                    神経のコードは1本で脳まで繋がっているわけではありません。途中でいくつもの神経がリレー形式で情報を伝えています。この、神経と神経の「つなぎ目」をシナプスと呼びます。
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h5 className="text-sm font-bold text-gray-700 mb-4 text-center">【図解：シナプスの伝達（バトンタッチの瞬間）】</h5>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="bg-purple-100 border-2 border-purple-300 p-4 rounded-t-lg rounded-bl-lg relative">
                          <strong className="text-purple-800 block mb-2">神経 A (出口)</strong>
                          <div className="bg-white p-2 rounded border border-purple-200 text-xs text-purple-600 mb-2">終末 (小胞)</div>
                          <div className="flex justify-center gap-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 block">神経伝達物質</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-gray-500 mb-1">放出</span>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-teal-100 border-2 border-teal-300 p-4 rounded-b-lg rounded-tr-lg relative">
                          <div className="flex justify-center gap-2 mb-2">
                            <div className="w-4 h-3 border-b-2 border-l-2 border-r-2 border-teal-500 rounded-b-sm"></div>
                            <div className="w-4 h-3 border-b-2 border-l-2 border-r-2 border-teal-500 rounded-b-sm"></div>
                            <div className="w-4 h-3 border-b-2 border-l-2 border-r-2 border-teal-500 rounded-b-sm"></div>
                          </div>
                          <div className="bg-white p-2 rounded border border-teal-200 text-xs text-teal-600 mb-2">受容体 (キャッチ)</div>
                          <strong className="text-teal-800 block">神経 B (入口)</strong>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 block">信号を受け取る</span>
                      </div>
                    </div>
                    
                    <ul className="mt-6 space-y-2 text-sm text-gray-600">
                      <li><strong className="text-purple-700">放出:</strong> 神経Aの先端（終末）に電気信号が届くと、「神経伝達物質」という化学物質（カプセル）が放出されます。</li>
                      <li><strong className="text-teal-700">キャッチ:</strong> 神経Bの入り口にある「受容体（レセプター）」がその物質をキャッチします。</li>
                      <li><strong className="text-gray-800">再起動:</strong> キャッチに成功すると、神経Bで再び電気信号が発生し、脳へと情報が進みます。</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <strong className="text-red-800 block mb-1">【重要】</strong>
                    <p className="text-sm text-red-900">
                      痛みの病態（舌痛症など）では、この「キャッチする受容体」が異常に増えすぎたり、敏感になりすぎたりすることで、普段なら何でもない刺激を「激痛」としてバトンタッチしてしまうようになります。
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
      id: "pathophysiology-details",
      title: "第2部：BMSの病態生理とメカニズム詳細",
      content: (
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* 第2部：原発性舌痛症（BMS）の病態生理と痛みのメカニズム詳細 */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
              第2部：原発性舌痛症（BMS）の病態生理と痛みのメカニズム詳細
            </h3>
            <p className="text-gray-600 text-sm">
              ここからは、最新の学術論文に基づき、なぜ舌痛症において「異常な痛み」が生じるのか、その専門的な詳細を解説します。
            </p>

            {/* 既存部分の完全維持 */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                近年、原発性BMSの病態生理として、末梢神経および中枢神経の経路の双方が関与する<strong>「小径線維ニューロパチー（SFN：Small Fiber Neuropathy）」</strong>との強い関連が挙げられています<span className="text-xs text-gray-500 ml-1">（参考文献：『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』）</span>。
              </p>
              <p>
                SFNは、痛みや温度感覚を伝える細い神経線維（薄い髄鞘を持つAδ線維と、無髄のC線維）が特異的にダメージを受ける病態です。BMS患者の舌粘膜を組織生検（バイオプシー）で観察すると、上皮内の神経線維の密度が健常者と比較して<strong>30%〜60%も減少</strong>しており、軸索変性などの形態学的な物理的ダメージが確認されています。
              </p>
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 my-4">
                <h4 className="font-bold text-red-800 mb-2">極度の知覚過敏状態（末梢の感作）</h4>
                <p className="text-sm text-red-900">
                  神経線維が減少する一方で、生き残った神経線維や再生過程の神経において、痛みや熱を感知するセンサーである受容体（TRPV1、P2X3、NGF、および電位依存性ナトリウムチャネルNav1.7など）が異常に過剰発現（アップレギュレーション）していることが判明しています。これにより、患者の舌は「極度の知覚過敏状態」に陥り、わずかな刺激でも灼熱痛や異物感として脳に伝達されてしまうと考えられています。
                </p>
              </div>
              <p className="text-xs text-gray-500 text-right mt-2">
                （参考文献：『Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review』）
              </p>
            </div>

            {/* 新規追加：第2部の詳細内容 */}
            <div className="space-y-8 mt-8">
              
              {/* 1. 末梢神経の損傷 */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-gray-800 flex items-center border-b pb-2">
                  <span className="text-indigo-600 mr-2">1.</span> 末梢神経の損傷：小径線維ニューロパチー（SFN）
                </h4>
                <p className="text-sm">
                  近年の研究により、原発性舌痛症（BMS）の根底には、痛みや温度を伝える細い神経線維（Aδ線維およびC線維）が物理的にダメージを受ける「小径線維ニューロパチー（SFN）」が存在することが明らかになっています。
                </p>
                <p className="text-sm">
                  BMS患者の舌粘膜を詳しく調べると、上皮内の神経線維の密度（ENFD）が健常者と比較して30%〜60%も減少しており、軸索（神経のコード部分）の変性が確認されています。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
                  <h5 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">学術論文からの引用</h5>
                  <p className="text-sm font-medium text-indigo-700 mb-1">タイトル: Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review</p>
                  <a href="https://www.mdpi.com/1422-0067/25/21/11442" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-2">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    https://www.mdpi.com/1422-0067/25/21/11442
                  </a>
                  <blockquote className="border-l-4 border-indigo-300 pl-3 text-sm text-gray-600 italic">
                    "These techniques show a marked reduction in intraepithelial nerve fibers, implicating SFN in the condition's pathophysiology."
                  </blockquote>
                </div>
              </div>

              {/* 2. 極度の知覚過敏 */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-800 flex items-center border-b pb-2">
                  <span className="text-indigo-600 mr-2">2.</span> 極度の知覚過敏（末梢感作）の分子メカニズム
                </h4>
                <p className="text-sm">
                  神経線維が減少しているにもかかわらず、なぜ「痛み」が強まるのでしょうか。それは、生き残った神経や再生しようとしている神経において、痛みを感じ取る「センサー（受容体やイオンチャネル）」が異常に増えてしまうからです。これを<strong>「末梢感作（まっしょうかんさ）」</strong>と呼びます。
                </p>
                
                <div className="ml-4 space-y-4 mt-3">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <h5 className="font-bold text-orange-800 mb-2">2.1 TRPV1（熱のセンサー）の過剰発現</h5>
                    <p className="text-sm text-orange-900">
                      TRPV1は本来、43℃以上の熱い刺激やカプサイシン（唐辛子の成分）に反応するセンサーです。BMS患者ではこのセンサーが舌の神経で過剰に増えています（アップレギュレーション）。そのため、体温程度のわずかな熱でも「燃えるような痛み」として感じてしまいます。
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h5 className="font-bold text-yellow-800 mb-2">2.2 P2X3受容体とNGF（神経成長因子）</h5>
                    <p className="text-sm text-yellow-900">
                      また、細胞が傷ついた時に出る物質（ATP）に反応する「P2X3受容体」や、神経の成長を促す「NGF」も増加しています。これらは神経をより敏感にし、痛みの火に油を注ぐような役割を果たします。
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
                  <h5 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">学術論文からの引用</h5>
                  <p className="text-sm font-medium text-indigo-700 mb-1">タイトル: Small Fiber Neuropathy in Burning Mouth Syndrome: A Systematic Review</p>
                  <a href="https://www.mdpi.com/1422-0067/25/21/11442" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-2">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    https://www.mdpi.com/1422-0067/25/21/11442
                  </a>
                  <blockquote className="border-l-4 border-indigo-300 pl-3 text-sm text-gray-600 italic">
                    "Additionally, an increase in TRPV1-positive, NGF-positive, and P2X3-positive fibers, overexpression of Nav1.7... were observed in BMS patients."
                  </blockquote>
                </div>
              </div>

              {/* 3. ホルモンバランスの影響 */}
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-gray-800 flex items-center border-b pb-2">
                  <span className="text-indigo-600 mr-2">3.</span> ホルモンバランスの影響：エストロゲンと痛みの関係
                </h4>
                <p className="text-sm">
                  BMSが更年期以降の女性に多い理由として、女性ホルモンであるエストロゲンの低下が関与していると考えられています。エストロゲンには痛みの受容体を調節する働きがあり、その不足が受容体の異常（感作）を引き起こす一因となります。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
                  <h5 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">学術論文からの引用</h5>
                  <p className="text-sm font-medium text-indigo-700 mb-1">タイトル: Estrogen-dependent regulation of transient receptor potential vanilloid 1 (TRPV1) and P2X purinoceptor 3 (P2X3): implication in burning mouth syndrome</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/35028015/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-2">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    https://pubmed.ncbi.nlm.nih.gov/35028015/
                  </a>
                  <blockquote className="border-l-4 border-indigo-300 pl-3 text-sm text-gray-600 italic">
                    "Reduced estrogen level of the BMS patient might have caused increased activity of P2X3 receptors."
                  </blockquote>
                </div>
              </div>

              {/* 4. 三叉神経系の解剖学的走行 */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-800 flex items-center border-b pb-2">
                  <span className="text-indigo-600 mr-2">4.</span> 三叉神経系の解剖学的走行と情報の伝わり方
                </h4>
                <p className="text-sm">
                  舌で発生した異常な電気信号は、以下の経路を辿って脳に到達します。
                </p>
                
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h5 className="text-sm font-bold text-slate-800 mb-4 text-center">【詳細図解：痛みの伝導路】</h5>
                  
                  <div className="relative">
                    {/* 縦の接続線 */}
                    <div className="absolute left-6 top-6 bottom-6 w-1 bg-slate-200 z-0"></div>
                    
                    <div className="space-y-6 relative z-10">
                      {/* ステップ1 */}
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-400 flex items-center justify-center shrink-0 mr-4 shadow-sm">
                          <span className="font-bold text-red-600 text-sm">1</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                          <strong className="text-slate-800 block text-sm">舌の末梢（入口）</strong>
                          <p className="text-xs text-slate-600 mt-1">異常に増えたセンサー（TRPV1等）が些細な刺激で発火。</p>
                        </div>
                      </div>
                      
                      {/* ステップ2 */}
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center shrink-0 mr-4 shadow-sm">
                          <span className="font-bold text-orange-600 text-sm">2</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                          <strong className="text-slate-800 block text-sm">三叉神経（第3枝）</strong>
                          <p className="text-xs text-slate-600 mt-1">電気信号があごの神経（下顎神経）を通って頭蓋骨の中へ。</p>
                        </div>
                      </div>
                      
                      {/* ステップ3 */}
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center shrink-0 mr-4 shadow-sm">
                          <span className="font-bold text-yellow-600 text-sm">3</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                          <strong className="text-slate-800 block text-sm">三叉神経節（TG）</strong>
                          <p className="text-xs text-slate-600 mt-1">ここに一次ニューロンの細胞体（中継基地）が集まっています。</p>
                        </div>
                      </div>
                      
                      {/* ステップ4 */}
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center shrink-0 mr-4 shadow-sm">
                          <span className="font-bold text-green-600 text-sm">4</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                          <strong className="text-slate-800 block text-sm">三叉神経脊髄路核尾側亜核（脳幹の入り口）</strong>
                          <p className="text-xs text-slate-600 mt-1">ここで二次ニューロンへの「バトンタッチ（シナプス伝達）」が行われます。BMSではここでのバトンタッチが異常に強化され、痛みがさらに増幅されます。</p>
                        </div>
                      </div>
                      
                      {/* ステップ5 */}
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-400 flex items-center justify-center shrink-0 mr-4 shadow-sm">
                          <span className="font-bold text-blue-600 text-sm">5</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                          <strong className="text-slate-800 block text-sm">視床・大脳皮質（最終目的地）</strong>
                          <p className="text-xs text-slate-600 mt-1">「痛い！」という感覚と、「不快だ、辛い」という感情が引き起こされます。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
                  <h5 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">学術論文からの引用</h5>
                  <p className="text-sm font-medium text-indigo-700 mb-1">タイトル: Trigeminal Neuralgia: A Comprehensive Review...</p>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6985973/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center mb-2">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    https://pmc.ncbi.nlm.nih.gov/articles/PMC6985973/
                  </a>
                  <blockquote className="border-l-4 border-indigo-300 pl-3 text-sm text-gray-600 italic">
                    "Sensory information from the craniofacial region is conveyed by the trigeminal sensory system, which is composed of peripheral structures, such as the trigeminal nerve (V) and trigeminal ganglia (TG), and central structures..."
                  </blockquote>
                </div>
              </div>

              {/* 5. まとめ */}
              <div className="space-y-4 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-xl text-indigo-900 flex items-center border-b border-indigo-200 pb-2">
                  <span className="mr-2">5.</span> まとめ
                </h4>
                <p className="text-indigo-800 font-medium">
                  原発性舌痛症（BMS）は、単なる気のせいではなく、以下の3つの連鎖によって生じる神経の病気です。
                </p>
                
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                    <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5 shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-indigo-900 block">神経の物理的減少</strong>
                      <span className="text-sm text-gray-700">舌の細い神経（小径線維）が減ってしまう。</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                    <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5 shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-indigo-900 block">センサーの暴走</strong>
                      <span className="text-sm text-gray-700">生き残った神経のセンサー（TRPV1など）が異常に増えて敏感になる。</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                    <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5 shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-indigo-900 block">中枢での増幅</strong>
                      <span className="text-sm text-gray-700">脳幹や脳において、痛みの信号を「より大きく」伝えるような変化が起きてしまう。</span>
                    </div>
                  </li>
                </ul>
                
                <p className="text-indigo-900 font-bold mt-4 text-center bg-white p-3 rounded-lg border-2 border-indigo-200">
                  この多角的なメカニズムが合わさることで、何も食べていない時でも、舌が「燃えるように痛む」という症状が持続的に発生するのです。
                </p>
              </div>

            </div>
          </div>
        </div>
      )
    }
  ]
};
