import { ArrowDown, MessageCircle } from 'lucide-react';
import { Chapter } from '../types';

export const tmdDiscussionChapter: Chapter = {
  id: 'chapter-tmd-discussion',
  title: '顎関節症の問題を語るにあたっての土俵の掛け違い',
  icon: <MessageCircle className="w-5 h-5" />,
  subSections: [
    {
      id: "tmd-discussion-introduction",
      title: "同じTMDでも、見ている患者は違う",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <p><strong>同じ「TMD」を語りながら、互いに違う患者を思い浮かべている。私が考える「土俵の掛け違い」は、このずれです。</strong></p>
          <p>地域で初めて相談を受ける患者と、治療を重ねても痛みが続く患者では、必要な診療が違います。一方の経験だけでTMD全体を語ると、議論がかみ合わなくなります。</p>
          <ul className="list-none space-y-3 text-lg text-indigo-900">
          <li><strong>・土俵が異なっていることを認識しない限り理解してもらえない</strong></li>
          <li>
            <strong>・自分の目の前の患者層で物事を考えないことが世界（米国の口腔顔面痛系）の潮流を理解するために必要である</strong>
            <div className="mt-2">
              <a href="#tmd-discussion-us-prosthodontics" className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-base font-semibold no-underline transition-colors hover:bg-indigo-50">
                米国の口腔顔面痛系とした理由
                <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </li>
          </ul>
          <p>本稿は、私の診療経験、周囲の先生との会話、講演で聞いた話に基づく私見です。全国の実態調査ではありません。定義や診断分類には参考文献を添え、経験からの見解と区別しています。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-overview",
      title: "議論の前に確認したいこと",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <p>まず、どのような患者が来る外来なのか。次に、何を治療し、何を成果とするのか。確認する点を一覧にしました。</p>
          <div className="max-w-full overflow-x-auto rounded-xl border border-gray-200 bg-white focus-visible:outline-2 focus-visible:outline-indigo-600" role="region" aria-label="全体像の比較表" tabIndex={0}>
          <table className="w-full min-w-[40rem] table-fixed border-collapse text-sm leading-relaxed text-left">
          <colgroup><col className="w-[28%]" /><col className="w-[36%]" /><col className="w-[36%]" /></colgroup>
          <thead className="bg-indigo-50 text-indigo-950"><tr>
          <th scope="col" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>分けて考える視点</strong></p></th>
          <th scope="col" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>具体的に異なり得るもの</strong></p></th>
          <th scope="col" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>議論の前に確認すること</strong></p></th>
          </tr>
          </thead>
          <tbody>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>患者の集まり方</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>初めて相談する患者、初期対応前の直接紹介患者、既治療の再紹介患者</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>どの経路を経て、その外来へ来た患者なのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>病院の位置づけと診療機能</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>1次病院・2次病院・3次病院という位置づけと、その外来が実際に担う役割</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>病院全体の話なのか、顎関節・口腔顔面痛診療の専門性の話なのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>診療科・外来の違い</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>一般歯科、保存系、補綴系、地域口腔外科、大学口腔外科、口腔顔面痛外来、ペインクリニック</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>どのような問題を解決するために患者が集まっているのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>用語・診断の範囲</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>顎関節症、TMD、有痛性TMD、口腔顔面痛、顎関節疾患全般</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>同じ病態の範囲を指しているのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>病態の割合の示し方</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>筋痛・関節痛・円板障害の割合、主診断、重複診断、新患数、延べ受診数</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>分母、診断方法、集計単位が同じか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>患者の状態と治療段階</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>症状の持続期間、疼痛、機能・生活障害、前治療、治療反応</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>慢性、重症、複雑、難治性を同じ意味で使っていないか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>医療者の専門性</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>総合的な保存診療、口腔顔面痛の包括的管理、顎関節外科</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>何を自立して診療でき、何について連携が必要なのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>治療と成果の意味</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>使用した治療、治療目的、症状改善、機能改善、治癒、終診</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>何を改善させたいのか、何をもって成功としているのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>教育・学会活動の目的</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>一般臨床医への基礎教育、地域口腔外科の診療能力向上、高度専門医育成、研究</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>誰に、どの能力を身につけてもらうための議論なのか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>経験・研究・推奨の違い</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>個人的経験、施設統計、比較研究、システマティックレビュー、診療ガイドライン</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>観察されたこと、因果関係、勧めるべきことを混同していないか</p></td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
          <th scope="row" className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p><strong>地域・制度上の条件</strong></p></th>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>紹介慣行、費用、保険、距離、受入条件、専門家へのアクセス</p></td>
          <td className="border-b border-r border-gray-200 p-4 align-top last:border-r-0"><p>診療体制の違いが、患者の集まり方にどう影響し得るか</p></td>
          </tr>
          </tbody></table></div>
          <p><strong>顎関節と咬合の関係については、今回は扱いません。</strong></p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-1",
      title: "1．治療論の前に、患者像をそろえる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">1-1．病名だけでは、患者は見えてこない</h4>
          <p>初めて顎の痛みを相談する人。何か所も受診し、食事や仕事に支障が出ている人。手術の適否を検討する人。「顎関節症の患者」という言葉から、どの人を思い浮かべるかは医療者によって違います。</p>
          <p>この違いを確認せずに治療法を論じても、別々の問題への答えが並ぶだけです。<strong>病名をそろえるだけでは足りません。症状、治療歴、診療段階までそろえて話す必要があります。</strong></p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">1-2．同じ患者でも、解決したい問題をそろえる</h4>
          <p>関節雑音、開口時の痛み、筋痛、食事への支障を併せ持つ患者を考えてみます。関節内の状態を知ることと、痛みを減らすこと、食べられるようにすることは、それぞれ別の課題です。</p>
          <p>関節の構造について話す人と、疼痛管理について話す人では、答える問いが違います。まず「この患者の何を解決したいのか」を共有します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">1-3．所属名より、外来の役割を見る</h4>
          <p>患者像の違いは、国や診療科の境界だけに生じるものではありません。同じ大学、同じ口腔外科の中にもあります。比較するのは、<strong>患者の受診経路、評価の内容、外来が引き受けている仕事</strong>です。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-2",
      title: "2．三次病院にも、初期対応の患者は集まる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">2-1．三次病院だから、難治例ばかりとは限らない</h4>
          <p><strong>私が見てきた日本の地方口腔外科では、三次病院にも、自然軽快が期待できる経過のよいロック・クリックの患者が多く集まっています。</strong>一般歯科から、初期対応の前に紹介される患者もいます。</p>
          <p>その外来の仕事は、まず評価し、経過を説明し、必要な初期対応を行うことです。治療を重ねても改善しない痛みを中心に診る専門外来とは、患者層が違います。<strong>病院全体の位置づけと、顎関節外来の役割は別です。</strong></p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">2-2．施設の段階と、診療の仕事を混同しない</h4>
          <p>本稿では便宜上、一般歯科医院を1次、地域の病院歯科・口腔外科を2次、高度医療を提供する病院・専門部門を3次と呼びます。正式な施設認定区分ではなく、1次には診療所を含みます。</p>
          <p>実際の仕事は、入口の評価・振り分け、初期診療、専門的再評価、口腔顔面痛診療、顎関節外科、継続管理・共同診療の六つに整理できます。</p>
          <p>患者がこの順に進むとは限りません。最初から高度専門評価が必要な人もいれば、専門外来で初期対応をやり直す人もいます。診療所が高度な専門相談を担うこともあります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">2-3．紹介状で確認するのは、紹介の目的である</h4>
          <p>「初期対応をお願いしたい」「診断を見直してほしい」「治療しても改善しない」。同じ紹介でも、求める仕事は違います。</p>
          <p>助言だけを求めるのか、診療を引き継いでほしいのか、共同で管理するのかも明確にします。紹介された事実だけで、難治性や紹介先の役割は決まりません。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-3",
      title: "3．診療科名より、患者が来る理由を見る",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">3-1．何を相談するために来たのか</h4>
          <p>私が外来の違いを考えるときに注目するのは、患者の入口です。一般歯科で初めて顎の不調を相談する人と、専門診療所へ紹介される既治療の人。同じ「開業医の患者」でも、受診までの経過が違います。</p>
          <p>大学でも、保存・歯内療法系への歯痛の精査と、補綴系への咀嚼機能や治療後の違和感の相談では、出発点が違います。「保存・補綴系」と一括りにすると、この違いが見えなくなります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">3-2．同じ施設内にも、別の患者層がある</h4>
          <p>一般歯科から広く初診を受ける口腔外科と、対応困難な患者を受ける専門外来では、患者の集まり方が違います。さらに、TMD全般、口腔顔面痛、顎関節外科のどこを中心に診るかでも変わります。</p>
          <p>歯科の口腔顔面痛外来と医科のペインクリニックを比較する場合も、TMD患者だけの話なのか、幅広い疼痛患者の一部としてTMDを語っているのかを確かめます。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">3-3．診療科の名前から病態を決めつけない</h4>
          <p>「口腔外科は円板障害、補綴系は筋痛」と決めつけると、施設ごとの違いを見落とします。見るべきなのは、実際の主訴、治療歴、紹介目的です。</p>
          <p>紹介の慣習があることと、その振り分けが適切であることも別です。役割分担は、患者が必要とする診療から考えます。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-4",
      title: "4．「多い・少ない」は、数え方まで確かめる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">4-1．調べたことだけが、記録に残る</h4>
          <p>筋痛や生活障害を調べなければ、それらは記録に現れません。痛みを主診断にする外来では、併存する円板障害が主診断として数えられないこともあります。</p>
          <p><strong>本当に少ないのか、調べていないのか、主診断にしていないのか。</strong>記録上の割合を比べる前に、ここを確かめます。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">4-2．重複診断と、一人一診断では割合が変わる</h4>
          <p>日本の顎関節症分類では、重複診断が認められています。筋痛、関節痛、円板障害を、必ず一つに絞る必要はありません。</p>
          <p>仮に100人中、円板障害60人、筋痛50人、関節痛40人なら、重複を含む合計は150％です。主診断を一つだけ選べば、同じ患者でも数字は変わります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">4-3．患者数と、診療に占める重みは違う</h4>
          <p>TMD全体か、有痛性TMDだけか。人数か、関節数か、新患数か、延べ受診数か。比較には同じ分母と集計単位が必要です。</p>
          <p>新患では少数でも、長く通院する患者は診療時間の大きな部分を占めます。「新患に多い」と「日々の診療で存在感が大きい」は違います。この差は、医療者の実感にも表れます。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-5",
      title: "5．同じ言葉を、同じ意味で使う",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">5-1．TMJは臓器名、TMDは疾患群</h4>
          <p>TMJは顎関節という解剖学的な名称です。TMD／TMDsは、顎関節や咀嚼筋などに関係する障害を扱う包括的な名称です。(<a href="https://www.nidcr.nih.gov/health-info/tmd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国立口腔顔面研究所</a>)</p>
          <p>日本の「顎関節症」は、咀嚼筋痛障害、顎関節痛障害、顎関節円板障害、変形性顎関節症を含みます。型の番号は、軽症から重症への順番ではありません。</p>
          <p>腫瘍、感染、外傷、強直症などを含む顎関節疾患全般は、さらに広い領域です。すべてを「顎関節症が進行した状態」と捉えると、診断の範囲が崩れます。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">5-2．口腔顔面痛は、重症TMDの別名ではない</h4>
          <p>口腔顔面痛は、歯・歯槽部の疼痛、筋・筋膜性疼痛、顎関節痛、神経に関連する疼痛、頭痛に似た口腔顔面痛、特発性の疼痛などを含む広い領域です。ICOPは、そのような口腔顔面痛を分類しています。(<a href="https://ihs-headache.org/wp-content/uploads/2025/04/International-Classification-of-Orofacial-Pain-1st-ed-ICOP-CEP.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">International Headache Society</a>)</p>
          <p>「簡単なうちはTMD、難しくなると口腔顔面痛」という区分ではありません。有痛性TMDを診る段階から、口腔顔面痛の基本的な考え方が必要です。</p>
          <p>DC/TMDはTMDの診断・評価を標準化する枠組みであり、特定治療の推奨を示すガイドラインとは目的が異なります。(<a href="https://pubmed.ncbi.nlm.nih.gov/24482784/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">PubMed</a>)</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">5-3．検索用語と、臨床診断を区別する</h4>
          <p>2026年版MeSHの見出し語は <em>Temporomandibular Joint Disorders</em> で、<em>Temporomandibular Disorders</em> はEntry Termとして登録されています。その範囲には外傷や腫瘍なども含まれています。(<a href="https://meshb.nlm.nih.gov/record/ui?ui=D013705" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">MeSH Browser</a>)</p>
          <p>検索で見つかった論文が、どの患者を対象にした研究かは、採用基準と診断で確かめます。見出し語だけでは決まりません。なお、“joint”を含まない呼称は、1992年のRDC/TMDでも使われています。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">5-4．名称と、実際の診療を一緒に見直す</h4>
          <p>「顎関節症」から関節や円板だけを連想するなら、「顎関節・咀嚼筋障害」など、対象を明示する名称を検討する価値があります。</p>
          <p>診療では、今の名称に「顎関節と咀嚼筋の障害を含む」と補足し、筋痛、関節痛、円板障害を具体的に説明できます。私が重視したいのは、呼び名と、診断・説明・教育を一緒に見直すことです。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-6",
      title: "6．「慢性」「重症」「難治性」を一括りにしない",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">6-1．長く続くことと、治療が効かないことは違う</h4>
          <p>慢性は主に時間経過、初期治療は診療の段階、難治性は適切な治療への反応に関する言葉です。症状が長く続いていても、適切な初期対応を受けていない患者はいます。</p>
          <p>「装置を使った」「薬を使った」だけでは、治療抵抗性は分かりません。診断、目標、方法、期間、実施状況、副作用、効果を確かめます。実施できなかった治療と、十分に行っても効かなかった治療は区別します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">6-2．何が重く、何が難しいのかを言葉にする</h4>
          <p>痛みが強い。口が開かない。食事や仕事に支障がある。構造的な変化が大きい。これらは別々の評価です。</p>
          <p>診断の難しさと、管理の難しさも違います。診断が明確でも、併存疾患や服薬、通院条件によって管理は複雑になります。「重症」「簡単」で済ませず、問題を具体的に示します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">6-3．筋痛、心理社会的負担、精神疾患を混同しない</h4>
          <p>筋痛は身体的な疼痛診断です。不安、睡眠、生活上の負担は、それぞれ評価します。精神疾患の診断には、その診断基準が必要です。</p>
          <p>DC/TMDも、身体診断のAxis Iと、疼痛関連障害・心理社会的状態などを扱うAxis IIを分けています。(<a href="https://pmc.ncbi.nlm.nih.gov/articles/4478082/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">PubMed Central (PMC)</a>)</p>
          <p>画像で説明しきれない、長く痛む、訴えが強い。この情報だけで精神疾患や心因性疼痛と判断することはできません。</p>
          <p>また、侵害受容性、神経障害性、痛覚変調性という疼痛機序の分類も、重症度の分類ではありません。画像に明瞭な異常がないことだけで機序を確定することもできません。(<a href="https://www.iasp-pain.org/resources/terminology/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">痛みの国際学会 (IASP)</a>)</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-7",
      title: "7．必要な専門性は、患者の課題で決まる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">7-1．地域でTMDを診る力を、土台に置く</h4>
          <p>専門性を疼痛診療と外科手術だけで語ると、一般的なTMDを適切に診る力が抜け落ちます。基本診断、鑑別、痛みと機能の評価、説明、初期対応、再評価、紹介判断。これが共通の土台です。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">7-2．疼痛診療と外科診療は、必要な能力が違う</h4>
          <p>口腔顔面痛の専門診療では、幅広い鑑別、併存する痛みの整理、生活障害を含む管理、他科との連携を深めます。顎関節外科では、手術適応、手術・再建、周術期・術後管理を深めます。</p>
          <p>疼痛診療は薬を使う力だけではありません。外科診療も、手術をする力に加え、手術をしない方がよい患者を見極める力が要ります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">7-3．予後が厳しい患者を支える専門医は必要である</h4>
          <p>私の経験では、円板障害に関連するロック・クリックには、症状や機能の改善が期待できる患者が多くいます。その中にも、痛みや開口の問題が長引く患者はいます。「経過がよい」は症状・機能・生活の改善を指し、円板の位置が元に戻ることとは別です。</p>
          <p>難治例や慢性痛には、長い支援が必要な患者がいます。こうした患者に対応する専門医は欠かせません。同時に、経過のよい患者への初期対応も、地域には必要です。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">7-4．肩書きより、提供できる診療を確かめる</h4>
          <p>どこまで自立して診療でき、何を相談・紹介するのか。専門性は、この具体的な能力で見ます。臨床、研究、教育、ガイドライン作成の能力も、それぞれ別に評価します。</p>
          <p>専門家がいても、スタッフや再診枠が不足すれば十分な診療はできません。一人の能力と、組織として提供できる診療の両方が必要です。</p>
          <p>複数科を受診していることと、共通の目標を持って診療していることも違います。IASPは、各職種が並列に治療する形と、共通の目標・方針の下で協働する形を区別しています。(<a href="https://www.iasp-pain.org/resources/terminology/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">痛みの国際学会 (IASP)</a>)</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-8",
      title: "8．治療後に改善した。それだけで効果は断定できない",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">8-1．先に目的を決め、それから手段を選ぶ</h4>
          <p>装置、薬物、運動、心理的支援、注射、手術は手段です。痛みを減らす、口を開けやすくする、食事を楽にする、構造を再建することが目的です。</p>
          <p>「装置を使うか、薬を使うか」を先に論じると、何のための治療かが抜けます。評価する成果も、目的に合わせて決めます。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">8-2．治療の分類だけで、安全性や適応は決まらない</h4>
          <p>保存的は治療方針、非外科的は手術との区分、低侵襲は身体への侵入・損傷の程度、可逆的は変更を戻せるかを表します。「非外科的だから簡単」「低侵襲だから無害」とは言えません。</p>
          <p>装置も同じです。設計・適合・調整のよさと、その患者に使うべきかは別問題です。よくできた装置を入れたことと、適切な診療をしたことを同一視してはいけません。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">8-3．改善の原因を、治療だけに求めない</h4>
          <p>TMDには、経過とともに軽快するものも、持続性の問題となるものもあります。(<a href="https://www.nidcr.nih.gov/health-info/tmd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国立口腔顔面研究所</a>)</p>
          <p>改善には、自然経過、症状の変動、説明、行動の変化、併用した対応も関わります。一方、説明や自己管理支援を行った経過を、完全な無治療と扱うこともできません。</p>
          <p><strong>何を行い、何が改善したのか。その改善を、どこまで治療の効果と言えるのか。</strong>この順で検討します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">8-4．終診と治癒を混同しない</h4>
          <p>痛み、開口、食事、画像所見は、それぞれ別の結果です。寛解や治癒と呼ぶなら、何が、どの期間改善した状態かを示します。</p>
          <p>再受診がない理由には、改善だけでなく、他院受診、通院困難、受診断念もあります。初診で終診したか、長期通院したかだけでは、診療の良否は判断できません。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-9",
      title: "9．教えるべきは、装置の作り方より診療判断",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">9-1．地域で必要な診断・鑑別の力を育てる</h4>
          <p>地域の口腔外科に、全例で高度な疼痛診療を求める必要はありません。しかし、通常のTMDとして対応できるのか、別の病態を疑うのか、何を再評価するのかは判断できなければなりません。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">9-2．手順だけを受け継ぐ教育から抜け出す</h4>
          <p>周囲の先生の話を聞いて、私が気になるのは、症状を聞いて装置を作る手順だけが受け継がれていないか、という点です。<strong>装置を作れることと、TMDを診られることは違います。</strong></p>
          <p>自然に改善する患者が多ければ、「装置を入れたらよくなった」という経験も積み重なります。だからこそ、診断の根拠と適応を教える必要があります。</p>
          <p>日本の初期治療ガイドラインの一般歯科医師向け資料は、適切な診断を行わずに治療を開始しないことを示しています。また、成人の筋痛・関節痛に対するスタビリゼーション型装置は、弱い推奨、エビデンスの確実性は非常に低いとされています。(<a href="https://kokuhoken.net/jstmj/publication/file/guideline/clinicalGL_TMJ_2023_RevisedVer_general.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国保険.net</a>)</p>
          <p>対象患者、治療目標、利益と害、不確実性、使わない選択肢まで扱って、初めて治療選択の教育になります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">9-3．受講歴ではなく、患者の前での判断を見る</h4>
          <p>主訴を整理できるか。診断の根拠を示せるか。別の病態を検討し、痛みと生活障害を評価できるか。治療を説明し、再評価し、必要な紹介につなげられるか。教育目標は、こうした行動で示します。</p>
          <p>指導医も「装置を作ったか」だけで終わらず、「なぜ選んだか」「改善しなければ何を見直すか」を確認します。症例相談の機会、指導付き診療、再診枠、紹介先との連携も整えます。</p>
          <p>日本顎関節学会も、一般臨床医への対応の定着を課題として、質問票、診察用紙、簡易マニュアルを公開しています。ただし、これは地方総合病院口腔外科医の全国的な能力調査ではありません。(<a href="https://kokuhoken.net/jstmj/medical/manual.html" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国保険.net</a>)</p>
          <p>高度専門医の育成と並行して、地域の診療を支える基礎教育にも力を注ぐべきです。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-10",
      title: "10．学会が誰の診療を支えるのかを明確にする",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">10-1．参加者の顔ぶれと、議論の中心は別である</h4>
          <p>私が見聞きしてきた米国中心のTMDの議論では、さまざまな分野の先生が参加していても、中心は口腔外科ではありません。口腔顔面痛を専門とする先生たちの関心が強く表れています。</p>
          <p>この分野の中心的な先生の講演で、後から他分野の先生に文句を言われないよう、あらかじめ参加してもらう事情もある、という趣旨の話を聞きました。</p>
          <p><strong>多分野の先生が参加していることと、各分野の患者像が同じ比重で扱われることは別です。</strong>誰が主導し、どの患者の問題を解決しようとしているのか。そこを見る必要があります。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">10-2．高度専門診療と、地域の基礎教育を両方支える</h4>
          <p>学会には、専門医育成、地域の診療支援、研究、患者への情報提供、連携づくりという仕事があります。専門医に新しくない内容でも、地域で必要なら教える価値があります。</p>
          <p>日本の初期治療ガイドラインも、成人の筋痛または関節痛を扱っています。関節雑音や円板の位置だけを対象とする資料ではありません。(<a href="https://kokuhoken.net/jstmj/publication/file/guideline/clinicalGL_TMJ_2023_RevisedVer_general.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国保険.net</a>)</p>
          <p>「一般歯科医師向け」は読む人の区分、「慢性疼痛」は患者の状態、「初期治療」は診療の段階です。この三つを混同せず、誰が、どの患者に、いつ使う資料かを明示します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">10-3．活動の数より、診療がどう変わったかを見る</h4>
          <p>診断基準は診断をそろえ、レビューは研究結果をまとめ、ガイドラインは意思決定を支えます。コンセンサス文書、教科書、手技マニュアル、診療経路、患者向け資料にも、それぞれの役割があります。専門診療に不足する資料は、答えるべき問いから考えます。</p>
          <p>専門医数、受講者数、教材数だけでは、診療の改善は分かりません。診断、治療選択、説明、再評価、紹介がどう変わったかを見ます。適切な紹介が増えた結果、紹介件数が増えることもあります。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-11",
      title: "11．制度と治療歴の違いが、患者像に表れる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">11-1．専門外来に到達するまでの経路を見る</h4>
          <p>費用、保険、距離、紹介の慣行、待機期間、受入条件。外来の患者像を比べるときは、受診までの条件も確かめます。</p>
          <p>米国のTMD診療については、費用や保険給付による負担が報告されています。(<a href="https://www.nationalacademies.org/read/25652/chapter/5" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">ナショナルアカデミーズ</a>)</p>
          <p>こうした条件が、軽い症状で相談する人や専門外来まで来る人の割合にどう影響するか。ここは患者層を考えるうえで重要ですが、本稿で示せる実測値はありません。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">11-2．国名や症状名だけで、予後を決めない</h4>
          <p>費用負担は、軽度の症状だけでなく、重い症状を持つ患者の受療も妨げ得ます。米国の報告も、急性・慢性双方のTMD関連疼痛が受診につながるとしています。(<a href="https://www.nationalacademies.org/read/25652/chapter/5" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">ナショナルアカデミーズ</a>)</p>
          <p>「米国では難治例しか受診しない」とは言えません。国の違いと、個々の外来に集まる患者の違いを区別します。</p>
          <p>また、クリックやロックという呼び方だけで、予後がよいと判断することもできません。痛みのない関節雑音は通常治療を必要としませんが、疼痛や機能障害を伴う患者は別に評価します。(<a href="https://www.nidcr.nih.gov/health-info/tmd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">国立口腔顔面研究所</a>)</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">11-3．出身分野と、現在の専門領域を区別する</h4>
          <p>米国では、口腔顔面痛は補綴や口腔顎顔面外科とは別の専門領域として認められています。(<a href="https://ncrdscb.ada.org/recognized-dental-specialties" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">NCRD SCB</a>)</p>
          <p>本稿で「米国の口腔顔面痛系」と呼ぶのは、TMD・口腔顔面痛の診療や研究を専門にする先生たちです。出身分野と現在の専門領域を分け、ここでは後者に注目しています。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">11-4．自費治療歴から見える、私の施設の患者層</h4>
          <p><strong>私の施設では、経過が思わしくない患者や口腔顔面痛の患者の8割近くに、自費治療またはインプラント治療の経験があります。</strong>これは診療経験に基づく目安で、全国の割合ではありません。</p>
          <p>私は治療歴を必ず尋ねます。何を期待し、どのような治療を受け、今は何に困っているのか。その経過を聞き、これからの対応に前向きな見通しを持てるよう説明します。</p>
          <p>ICOPでも、持続性特発性歯槽部痛と、外傷後三叉神経障害性疼痛は別の診断です。(<a href="https://ihs-headache.org/wp-content/uploads/2025/04/International-Classification-of-Orofacial-Pain-1st-ed-ICOP-CEP.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">International Headache Society</a>)</p>
          <p>治療歴だけで痛みの原因は決まりません。ここでの論点は、<strong>治療を重ねてきた患者を診る外来と、初期のロック・クリックを多く診る外来では、患者層が違う</strong>ということです。そこから生まれる予後の実感も違います。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-12",
      title: "12．研究の関心と、地域で多く診る患者は一致しない",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">12-1．難治例への関心と、地域の患者数の間にずれがある</h4>
          <p>私には、米国の口腔顔面痛系によるTMD研究は、難治例や慢性痛へ関心を強めているように見えます。従来から調べられてきたロック・クリックでは新規性を出しにくく、未解決の問題に研究が向かう事情もあると考えています。</p>
          <p>一方、私が地域の診療で多く接するのは、ロック・クリックを主訴とし、その後の経過もよい患者です。不安や困りごとはあっても、生活全体を妨げる難治性疼痛の患者と、必要な支援は同じではありません。</p>
          <p><strong>研究が注目する「改善が難しい患者」と、地域で数多く診る「経過のよい患者」。このずれを飛ばして、専門性や教育の方向を論じることに無理があります。</strong></p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">12-2．研究の対象は、研究者の外来患者とは限らない</h4>
          <p>例えば、OPPERA研究には、地域から募集した参加者を対象とする研究が含まれています。(<a href="https://pubmed.ncbi.nlm.nih.gov/22074749/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">PubMed</a>)</p>
          <p>また、DC/TMDは単純な症例から複雑な症例までの診断・評価を想定しており、高度専門外来の難治例だけのための枠組みではありません。(<a href="https://pubmed.ncbi.nlm.nih.gov/24482784/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">PubMed</a>)</p>
          <p>研究者が難治例を多く診ていても、研究まで難治例だけとは限りません。適用できるかどうかは、実際の研究対象で判断します。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">12-3．経験を、効果や推奨にすり替えない</h4>
          <p>「自分の外来では改善する」は観察です。「この治療で改善した」は因果関係の主張です。「この治療を勧める」は、利益、害、負担、患者の価値観まで含む判断です。</p>
          <p>研究を使う際は、患者、介入、比較対象、アウトカム、実施環境を確認し、その違いがどの結論に影響し得るかを検討します。(<a href="https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-15" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">Cochrane</a>)</p>
          <p>ロック・クリックの研究が不要になったわけでもありません。自然経過、説明、不必要な介入、紹介時期など、地域の診療に残る問いにも研究する価値があります。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-13",
      title: "13．患者・目的・根拠をそろえてから、意見を比べる",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">13-1．まず、発言が答えている問いを確かめる</h4>
          <p>「説明で改善する」と「包括的な疼痛管理が必要」は、対象患者が違えば両立します。「円板障害が多い」と「筋痛が多い」は、評価や数え方の違いからも生じます。</p>
          <p>「初期治療を普及させたい」と「専門診療には不十分だ」も、誰の何を支える話かが違います。「装置でよくなる」という経験と、「装置の効果は不確実」という研究上の評価も、同じ主張ではありません。</p>
          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">13-2．条件をそろえても残る違いを、根拠で検討する</h4>
          <p>患者の病態、受診経路、治療歴、診断基準、評価項目、治療目的をそろえます。そのうえで、発言の根拠が経験、施設統計、比較研究、レビュー、推奨のどれかを示します。</p>
          <p>それでも結論が異なるなら、研究の採用基準、バイアス、効果の大きさ、確実性、害、価値判断を比べます。<strong>「土俵が違う」は議論を終える言葉ではありません。何を比較すべきかをはっきりさせる出発点です。</strong></p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-conclusion",
      title: "結び――目の前の患者層を、TMD全体にしない",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <p>地域で経過のよいロック・クリックを診ることも、専門外来で難治性疼痛に向き合うことも、TMD診療です。患者が違えば、予後の実感も、必要な専門性も変わります。</p>
          <p>難治例を支える専門医を育てる。同時に、多くの患者が最初に受ける診療の質を上げる。学会と教育には、この両方が必要です。</p>
          <p><strong>「誰を、どの段階で、何のために診ているのか。」</strong></p>
          <p><strong>「同じ言葉を使っているが、同じ患者・同じ病態・同じ問題について話しているのか。」</strong></p>
          <p>患者像をそろえてから、治療と専門性を語る。私が提案したいのは、この順序です。</p>
        </div>
      ),
    },
    {
      id: "tmd-discussion-us-prosthodontics",
      title: "米国の口腔顔面痛系とした理由",
      content: (
        <div className="space-y-6 text-gray-700 leading-loose">
          <p><strong>2026年のEric Schiffman教授（米国ミネソタ州・ミネソタ大学、DC/TMD 2014年論文の筆頭著者）の講演より。</strong></p>
          <p>Eric Schiffman教授は、ミネソタ大学の2年間のTMD・口腔顔面痛レジデンシーを修了し、現在は同大学の<strong>「TMD and Orofacial Pain（顎関節症・口腔顔面痛部門）」</strong>に所属する教授です。（<a href="https://dentistry.umn.edu/faculty/eric-schiffman" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">ミネソタ大学の公式略歴</a>）</p>
          <p>講演は英語で行われました。以下は、英語が苦手な私が、つたないながらも理解した内容です。聞き違いや誤解により、全く違う意味に受け取っている可能性もあります。正確な逐語訳ではなく、著者の受け止めとしてお読みください。</p>

          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">1．多数の著者名には、合意と支持を広げる狙いもあった</h4>
          <p>著者名が数多く並ぶDC/TMDの論文を見ると、大勢の専門家が何十年もかけて議論を重ね、作り上げた印象を持ちます。しかし、演者は質疑応答で、<strong>データを集めた期間は2年間だった</strong>と説明していました。ここでの2年間はデータ収集の期間です。研究・開発全体が2年で完結した、という意味には取りません。</p>
          <p>専門家に求めたのは、学術的な「意見」と、論文に載せる「名前」の二つだった、という話も印象に残りました。知見を取り入れるだけでなく、著者として名前を連ねてもらい、基準を支持してもらう。そのための政治的な意味もあった、という説明です。</p>
          <p><strong>私が受け取ったのは、中核メンバーが作業を進め、幅広い専門家の参加によって合意と支持を広げた、という姿です。</strong>著者の多さと、全員が同じ役割で策定を担ったことは別です。学術的な作業と、基準を受け入れてもらうための合意形成。その両方があったのだと理解しました。</p>

          <h4 className="text-xl font-bold text-indigo-900 leading-relaxed pt-6">2．Axis IIで重視されたのは、予後と対応の難しさの見極め</h4>
          <p>Axis I（第1軸）は身体的な診断、Axis II（第2軸）は痛みによる生活への支障や心理社会的な状態などの評価です。二つの軸が並ぶと、私は「今後は第2軸を診断し、その治療を進めることが中心になる」という印象を持っていました。</p>
          <p>ところが、紹介前にAxis IIがどれほど実施されているかという質問に、演者は、自身の地域ではほとんど行われていないと答えていました。さらに、一般歯科では対応が難しい患者が、自分の専門外来へ紹介されてくるとも話していました。これは、演者の地域と外来についての説明です。</p>
          <p><strong>私が強く受け取ったのは、予後のよい患者と、経過が長引き対応が難しくなりそうな患者を見分ける、という役割です。</strong>Axis IIそのものを一つの病名のように診断し、それを治すという話ではなく、評価を通じて次の対応を考える仕組みだと理解しました。</p>
          <p>そのために演者が目指していたのは、約10分で答えられ、点数の意味もその場で分かる質問票への簡略化でした。研究で使われる基準を、日々の診療でも使える道具にする。その課題が、私には強く印象に残りました。</p>
          <p>なお、2014年の原著では、Axis IIは予後の推定に加え、患者の振り分けや治療計画にも役立てる評価とされています。「治療には使わない」という意味ではありません。（<a href="https://pubmed.ncbi.nlm.nih.gov/24482784/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900 break-words">DC/TMD 2014年原著</a>）</p>

          <p><strong>この講演を聞き、私は「誰が枠組みを主導し、どの患者層を見ているのか」をいっそう意識しました。</strong>本稿で「米国の口腔顔面痛系」と補う理由は、ここにあります。多分野の名前が並んでいても、関心の中心や日々向き合う患者層まで同じになるわけではない。それが、私の受け止めです。</p>
        </div>
      ),
    },
  ],
};
