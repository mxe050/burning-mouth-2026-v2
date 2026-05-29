import {
  AlertTriangle,
  Bed,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  ExternalLink,
  MessageCircle,
  Moon,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { ReactNode } from 'react';
import { Chapter } from '../types';

const referenceLinks = [
  {
    label: 'Villa et al. 2015: Diagnosis and management of xerostomia and hyposalivation',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4278738/',
  },
  {
    label: 'Niklander et al. 2017: Risk factors, hyposalivation and xerostomia (PMID: 28099580)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/28099580/',
  },
  {
    label: 'Villa/Wolff et al. 2015: WWOM VI medication-induced salivary gland dysfunction (PMID: 25994331)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/25994331/',
  },
  {
    label: 'Furness et al. 2011: Cochrane topical therapies for dry mouth (CD008934)',
    href: 'https://www.cochrane.org/CD008934/ORAL_interventions-for-the-management-of-dry-mouth-topical-therapies',
  },
  {
    label: 'Gómez-Moreno et al. 2013: 1% malic acid spray RCT (PMID: 23124914)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/23124914/',
  },
  {
    label: 'Kairaitis et al. 2006: breathing route and upper airway surface tension (PMID: 16690717)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/16690717/',
  },
  {
    label: 'Xerostomia in sleep apnea-hypopnea syndrome (PMID: 32913565 / PMC7474945)',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7474945/',
  },
  {
    label: 'CPAP therapy and nocturia meta-analysis (PMC4582090)',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4582090/',
  },
  {
    label: 'Bergdahl & Bergdahl 2000: subjective oral dryness, anxiety, depression, stress (PMID: 11023259)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/11023259/',
  },
  {
    label: 'Gurvits & Tan 2013: Burning mouth syndrome review (PMID: 23429751 / PMC3574592)',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3574592/',
  },
  {
    label: 'Mahesh et al. 2022: Xerostomia and mid-life health (PMC9583374)',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9583374/',
  },
  {
    label: 'Plemons et al. 2014: ADA xerostomia management report (PMID: 25082939)',
    href: 'https://pubmed.ncbi.nlm.nih.gov/25082939/',
  },
  {
    label: 'American Dental Association: Xerostomia oral health topic',
    href: 'https://www.ada.org/resources/ada-library/oral-health-topics/xerostomia',
  },
];

const EvidenceCard = ({
  title,
  children,
  tone = 'indigo',
}: {
  title: string;
  children: ReactNode;
  tone?: 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky';
}) => {
  const styles = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-950',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-950',
    amber: 'bg-amber-50 border-amber-200 text-amber-950',
    rose: 'bg-rose-50 border-rose-200 text-rose-950',
    sky: 'bg-sky-50 border-sky-200 text-sky-950',
  };

  return (
    <div className={`rounded-xl border p-5 ${styles[tone]}`}>
      <p className="font-bold mb-2">{title}</p>
      <div className="text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
};

const ScriptBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
    <p className="font-bold text-gray-900 mb-3 flex items-center">
      <MessageCircle className="w-5 h-5 mr-2 text-cyan-700" />
      {title}
    </p>
    <div className="text-sm text-gray-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

export const oralDrynessChapter: Chapter = {
  id: 'chapter-oral-dryness',
  title: '口腔乾燥について',
  icon: <Droplets className="w-5 h-5" />,
  subSections: [
    {
      id: 'dryness-overview',
      title: '口腔乾燥は「唾液量」だけで説明しない',
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-5">
            <div className="flex items-start">
              <div className="bg-cyan-100 text-cyan-800 p-3 rounded-xl mr-4 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  まず患者さんに伝えるべき核心
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  「乾いている感じ」は本物です。しかし、医学的には
                  <strong> xerostomia（主観的な乾燥感）</strong>と
                  <strong> hyposalivation（客観的な唾液分泌低下）</strong>を分けて考えます。
                  唾液があるのに乾燥感が強い患者さんは珍しくありません。これは「気のせい」ではなく、
                  唾液量、唾液の性状、粘膜の濡れ性、口呼吸、睡眠の質、薬剤、注意・不安、BMS様の口腔感覚過敏が重なった状態です。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <EvidenceCard title="世界の文献で確認できること" tone="emerald">
                <p>
                  Villaらの総説は、乾燥を訴えても客観的な唾液分泌低下を示さない患者がいることを明記しています。
                  Niklanderらの研究でも、乾燥を訴える群の全員が低唾液量ではありませんでした。
                </p>
              </EvidenceCard>
              <EvidenceCard title="臨床で最初に避けるべきこと" tone="amber">
                <p>
                  「唾液は出ています。だから乾いていません」と言うと、患者さんはほぼ納得しません。
                  正しくは「唾液量だけでは症状を説明できないので、量・表面の乾き・睡眠・薬・感覚過敏を分けて調べます」と説明します。
                </p>
              </EvidenceCard>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-bold mb-4">患者さんへの最初の説明例</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-100">
              <p>
                「乾いて感じること自体は本物です。ただ、口の中の乾きには2種類あります。
                ひとつは唾液が本当に少ない乾き、もうひとつは唾液はある程度あるのに、舌や粘膜の表面が乾く・乾いたと脳が強く感じる乾きです。」
              </p>
              <p>
                「治療方針が変わるので、まず唾液の量、粘膜の濡れ具合、口呼吸、夜間に何で目が覚めているかを分けて確認します。
                ここを分けないと、いくら保湿剤を変えても同じ話を繰り返してしまいます。」
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dryness-assessment',
      title: '診療の第一歩：客観化して「争点」をずらす',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-5 flex items-center">
              <ClipboardCheck className="w-6 h-6 mr-2" />
              患者さんと議論しないための測定セット
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
              {[
                {
                  title: '1. 唾液量',
                  text: '安静時唾液と刺激時唾液を測ります。Villaらは hyposalivation の目安として、安静時 0.1 mL/min 以下、刺激時 0.5〜0.7 mL/min 以下を示しています。',
                },
                {
                  title: '2. 粘膜の濡れ性',
                  text: 'ミラーが頬粘膜や舌に貼り付く、泡状唾液、口底に唾液が貯まらない、舌乳頭萎縮、口角炎、カンジダ、急な齲蝕増加を確認します。',
                },
                {
                  title: '3. 薬剤',
                  text: '抗うつ薬、睡眠薬、抗不安薬、抗ヒスタミン薬、抗コリン薬、利尿薬、降圧薬、頻尿治療薬、鎮痛補助薬を必ず一覧化します。',
                },
                {
                  title: '4. 夜間イベント',
                  text: '口が乾いて起きたのか、トイレで起きた時に乾きに気づいたのか、いびき・無呼吸・鼻閉・CPAP・夜間頻尿を分けて聞きます。',
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <EvidenceCard title="患者さんが納得しない時の言い方" tone="sky">
            <p>
              「乾いていない」と否定するのではなく、「乾きの原因を1つに決めない」方向へ誘導します。
              診療上の目標は、患者さんの確信を論破することではなく、測定値と症状日誌を使って
              <strong>『何を変えると翌朝が楽になるか』</strong>を一緒に検証することです。
            </p>
          </EvidenceCard>
        </div>
      ),
    },
    {
      id: 'dryness-evidence-based-actions',
      title: '世界のエビデンスから見た具体策',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-5 flex items-center">
              <Stethoscope className="w-6 h-6 mr-2" />
              「何をすればよいか」を順番にする
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'A. 低唾液量がある場合',
                  body: '薬剤性、シェーグレン、糖尿病、放射線治療後、脱水、カンジダ、口腔衛生不良を評価します。機能する唾液腺が残る場合だけ、ピロカルピンやセビメリンを検討します。ただし発汗、頻尿、消化器症状、徐脈、喘息・COPD、緑内障などに注意します。',
                },
                {
                  title: 'B. 唾液量は保たれるが乾燥感が強い場合',
                  body: '保湿剤だけで治す発想を捨て、口呼吸・睡眠分断・薬剤・BMS様感覚過敏・不安/注意の固定を同時に扱います。Bergdahlらの研究では、この群では心理社会的因子との関連が強く出ています。',
                },
                {
                  title: 'C. 局所療法',
                  body: 'Cochraneは、局所療法全般について強いエビデンスはないと結論しています。だから「完治薬」と説明せず、夜間の粘膜保護・齲蝕予防・症状の波を下げる補助として使います。夜間はスプレーよりゲルや粘膜に残る製剤のほうが理屈に合います。',
                },
                {
                  title: 'D. 酸味刺激',
                  body: '1%リンゴ酸スプレーのRCTはPMID 23124914が正しい出典です。抗うつ薬性乾燥で症状と唾液流量改善が報告されていますが、酸蝕リスクがあるため、フッ化物併用・使用期間・歯質リスクを考えずに漫然と勧めません。',
                },
                {
                  title: 'E. 予防',
                  body: 'ADAの実践指針どおり、乾燥感の強い患者では齲蝕、根面齲蝕、脱灰、カンジダ、口角炎を予防対象にします。高濃度フッ化物、無糖ガム、定期メインテナンス、義歯清掃、含糖/酸性製品の回避を組み込みます。',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-indigo-400 bg-indigo-50/50 p-4 rounded-r-lg">
                  <p className="font-bold text-indigo-950 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <EvidenceCard title="勧めやすい" tone="emerald">
              <ul className="list-disc pl-5 space-y-1">
                <li>就寝前の保湿ゲル</li>
                <li>日中の無糖ガム/タブレット</li>
                <li>高濃度フッ化物と定期管理</li>
                <li>鼻閉・いびき・無呼吸の評価</li>
              </ul>
            </EvidenceCard>
            <EvidenceCard title="条件付き" tone="amber">
              <ul className="list-disc pl-5 space-y-1">
                <li>リンゴ酸スプレー</li>
                <li>ピロカルピン/セビメリン</li>
                <li>神経調整薬</li>
                <li>婦人科でのHRT検討</li>
              </ul>
            </EvidenceCard>
            <EvidenceCard title="安易にしない" tone="rose">
              <ul className="list-disc pl-5 space-y-1">
                <li>「乾いていない」と否定</li>
                <li>酸性製品の長期漫然使用</li>
                <li>未評価の口閉鎖テープ</li>
                <li>口腔乾燥だけを理由にHRT開始</li>
              </ul>
            </EvidenceCard>
          </div>
        </div>
      ),
    },
    {
      id: 'dryness-night-sleep',
      title: '夜間乾燥・口呼吸・トイレ・睡眠の考え方',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-5 flex items-center">
              <Moon className="w-6 h-6 mr-2" />
              「口が乾いて目が覚めた」と「目が覚めた時に口が乾いていた」は違う
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              ここは患者さんが最も納得しにくい部分です。患者さんは「口が乾いたから起きた」と言い切ります。
              しかし実際には、睡眠が浅くなる、無呼吸やいびきで覚醒する、夜間頻尿で起きる、その時に開口・口呼吸で乾いた舌に気づく、という順番も非常に多いと考えます。
              つまり「乾燥が原因」だけではなく、<strong>覚醒した瞬間に乾燥を強く認識している</strong>可能性があります。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <EvidenceCard title="口呼吸の物理" tone="sky">
                <p>
                  Kairaitisらのヒト研究では、呼吸経路が上気道粘膜表面の液体状態に影響することが示されています。
                  唾液がゼロでなくても、口を開けて寝ると舌背や咽頭側の表面は乾きやすくなります。
                </p>
              </EvidenceCard>
              <EvidenceCard title="睡眠時無呼吸と乾燥" tone="indigo">
                <p>
                  SAHS患者の前向き症例対照研究では、起床時の口腔乾燥が健常対照より多く、CPAP使用者で特に多いことが報告されています。
                  CPAPでは加温加湿、マスクリーク、鼻閉管理が重要です。
                </p>
              </EvidenceCard>
              <EvidenceCard title="夜間頻尿との接点" tone="emerald">
                <p>
                  OSAでは夜間頻尿が問題になり、CPAP治療で夜間排尿回数と睡眠関連指標が改善したメタ解析があります。
                  口腔乾燥の訴えが強い患者でも、睡眠分断と夜間頻尿を別枠で評価する価値があります。
                </p>
              </EvidenceCard>
              <EvidenceCard title="口閉鎖テープは慎重" tone="rose">
                <p>
                  鼻閉、未診断のOSA、嘔吐リスク、呼吸器疾患がある患者に、医学的評価なしで口を閉じる処置を勧めるのは危険です。
                  目標は「口を無理に閉じる」ではなく、鼻呼吸しやすくし、乾燥の害を減らすことです。
                </p>
              </EvidenceCard>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center">
              <Bed className="w-5 h-5 mr-2 text-cyan-700" />
              実際に患者さんに依頼する1週間の記録
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>寝る前の乾燥感 0〜10</li>
                <li>起床時の乾燥感 0〜10</li>
                <li>夜間に起きた時刻</li>
                <li>その時トイレに行ったか</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>いびき・無呼吸を指摘されたか</li>
                <li>鼻閉・口呼吸の自覚</li>
                <li>就寝前の飲酒・カフェイン・水分量</li>
                <li>保湿ゲルを使った日の翌朝の変化</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dryness-patient-communication',
      title: '患者さんへの説明：納得しない前提で設計する',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-5">
              説明の目的は「説得」ではなく「共同実験」にする
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              主観的乾燥が強い患者さんは、自分の体験として「乾いている」と確信しています。
              そのため、唾液量や口腔内所見を示しても、体験を否定されたように受け取られやすいです。
              説明は、乾燥感を認めたうえで「原因を分解して、変えられる部分から試す」形にします。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ScriptBox title="検査結果を伝える時">
                <p>
                  「唾液量は極端には少なくありませんでした。これは『乾いていない』という意味ではありません。
                  唾液量だけでなく、寝ている間の口呼吸、粘膜表面の乾き、薬、睡眠の浅さ、舌の感覚過敏が関係している可能性があります。」
                </p>
                <p>
                  「ここからは、唾液を増やす治療だけでなく、朝の乾燥を作っている条件を減らす治療に切り替えます。」
                </p>
              </ScriptBox>
              <ScriptBox title="夜間頻尿を無視される時">
                <p>
                  「口の乾きで目が覚めたと感じるのは自然です。ただ、同じタイミングでトイレにも行っているので、
                  睡眠が浅くなって起きた時に口の乾きに気づいた可能性もあります。」
                </p>
                <p>
                  「どちらが先かを決めつけず、1週間だけ記録して、保湿ゲル・鼻の通り・夜間排尿回数が翌朝の乾燥にどう関係するかを見ましょう。」
                </p>
              </ScriptBox>
              <ScriptBox title="保湿剤に不満がある時">
                <p>
                  「保湿剤は原因を消す薬ではなく、夜間に粘膜表面が乾ききるのを防ぐ道具です。
                  スプレーは流れやすいので、夜はゲルタイプのほうが合うことがあります。」
                </p>
                <p>
                  「効かなかったら、製品名を変えるだけでなく、口呼吸・鼻閉・睡眠・薬の側も同時に見直します。」
                </p>
              </ScriptBox>
              <ScriptBox title="心理要因を伝える時">
                <p>
                  「心理的と言うと『気のせい』に聞こえますが、そうではありません。
                  口の感覚は脳で感じるので、不安、睡眠不足、痛みへの注意が強いと、同じ口腔内の状態でも乾きとして強く感じます。」
                </p>
                <p>
                  「これはBMSにも近い仕組みです。唾液だけでなく、感覚の過敏さを下げる治療を一緒に考えます。」
                </p>
              </ScriptBox>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dryness-bms-spectrum',
      title: '閉経後女性・BMS・口腔-脳軸としての乾燥感',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-5">
            <h3 className="text-xl font-bold text-indigo-900 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2" />
              乾燥感はBMSスペクトラムとして扱うと理解しやすい
            </h3>
            <p className="text-gray-700 leading-relaxed">
              閉経後女性で、舌背の乾燥感、灼熱感、味覚異常、違和感が重なり、見た目の異常や明確な低唾液量が乏しい場合、
              BMSに近い「口腔感覚の過敏化」として整理すると説明しやすくなります。
              Gurvits & TanのBMSレビューは、BMSが正常唾液下でも乾燥感を伴うこと、末梢・中枢の神経障害性機序や心理社会的要因が関与することを述べています。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <EvidenceCard title="Bergdahl 2000 の臨床的意味" tone="indigo">
                <p>
                  低唾液量群では年齢・薬剤が主因になりやすい一方、唾液量が保たれた主観的乾燥群では、
                  女性、抑うつ、不安、ストレスとの関連が強く示されました。
                  これは「主観的乾燥型」は単なる唾液腺疾患ではない、という重要な根拠です。
                </p>
              </EvidenceCard>
              <EvidenceCard title="閉経後女性での位置づけ" tone="amber">
                <p>
                  中年期・閉経後にはホルモン変化、服薬、睡眠障害、口腔粘膜の脆弱性、疼痛感受性が重なります。
                  HRTが有効な可能性を示す報告はありますが、口腔乾燥だけを理由に始める治療ではありません。
                </p>
              </EvidenceCard>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold text-lg mb-4">臨床的な結論</h4>
            <p className="text-sm leading-relaxed text-indigo-50">
              患者さんには「乾燥感は本物だが、唾液腺だけの問題とは限らない」と繰り返し伝えます。
              医療者側は、唾液量、粘膜濡れ性、薬剤、齲蝕/カンジダリスク、夜間口呼吸、鼻閉、OSA、夜間頻尿、
              不安・睡眠の質、BMS様感覚過敏を同時に評価します。対症療法しかないのではなく、
              <strong>対症療法を土台にしながら、乾燥感を増幅している条件を分解して減らす</strong>のが世界の文献に合う実践です。
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'dryness-fact-check',
      title: 'ファクトチェック済み出典と使わない引用',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-2" />
              今回採用した出典
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {referenceLinks.map((ref) => (
                <a
                  key={ref.href}
                  href={ref.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
                >
                  <span>{ref.label}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-indigo-600" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h4 className="font-bold text-rose-950 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              使わない引用
            </h4>
            <div className="space-y-3 text-sm text-rose-950 leading-relaxed">
              <p>
                1%リンゴ酸スプレーRCTのPMIDは <strong>23124914</strong> が正しいです。
                <strong>23300127</strong> は別のうつ病アドヒアランス研究であり、この章では使用していません。
              </p>
              <p>
                Osailanの粘膜濡れ性評価として <strong>20796229</strong> を引用するのは誤りです。
                そのPMIDは放射線誘発唾液腺障害に対する幹細胞治療レビューです。
                粘膜濡れ性の臨床所見はVilla 2015の総説内の整理として扱います。
              </p>
              <p>
                Strietzelの口腔内電気刺激装置RCTとして <strong>20882667</strong> を引用するのも誤りです。
                この章では同論点を治療アルゴリズムの中心に置いていません。
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ],
};
