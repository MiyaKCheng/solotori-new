
import './info.css'
import Title from "../../shared/title";
import { Link } from "react-router-dom";

function Info() {

    return (
<<<<<<< HEAD
        <section id="info" className="h-[800px]">
            <Title text="応募要項" marginLeft="-100px" marginLeftTittle="110px" />
            <div className="bg-white/60 mt-[70px] m-5 h-[600px] p-5 rounded-lg">
                <ul className=" info-list text-[#D13200] h-[580px] pr-5 pb-5">
                    <li className="font-bold">応募期間</li>
=======
        <section id="info" className="max-h-screen">
            <Title text="応募要項" marginLeft="-100px" marginLeftTittle="110px" />
            <div className="bg-white/60 mt-[54px] m-5 h-[600px] p-5 rounded-lg list-disc list-inside">
                <ul role="list" className="prose  prose-li:{color-[#D13200]} info-list text-[#D13200] h-[580px] pr-5">
                    <li className="sub-title">応募期間</li>
>>>>>>> origin/main
                    <li>
                        <p>2024/01/01-2024/02/29</p>
                    </li>
                    <li className="sub-title">応募人数</li>
                    <li>
                        <p>5名様</p>
                    </li>
                    <li className="sub-title">当選発表</li>
                    <li>
                        <p>2024/03/10</p>
                    </li>
                    <li className="sub-title">応募方法</li>
                    <li>
                        <p>以下の手順に従って、ご応募いただけます。</p>
                        <ol>
                            <li>Instagramアカウント「solotori_official」をフォロー。</li>
                            <li>「1人旅世界観同化を乗せる」を撮影。</li>
                            <li>撮影した写真と指定のハッシュタグ「#SOLOTORI」、「#一人旅募集中」「 #世界観同化」と「#NewNormal」を付けて、Instagramに投稿。</li>
                        </ol>
                    </li>
                    <li className="font-bold">応募資格</li>
                    <li>
                        <ul className="">
                            <li className="">日本国内在住の方（本キャンペーンの関係者は応募できません）</li>
                            <li>この規約に同意された方 Instagramアカウントを保有し、当社指定アカウントをフォローされている方。</li>
                            <ul className="new-style">
                                <li className="new-style-child">1応募者1アカウントでの応募とさせていただきます。</li>
                                <li>15歳未満のお客さまは、保護者の同意が必要です。保護者の方に本規約に同意してもらってください。15歳未満のお客さまからの応募は、すべて保護者の同意を得たものとみなします。</li>
                                <li>アカウントが非公開設定になっている方、投稿が検索対象外となっている方、ご応募いただいた投稿を削除された方は、応募が無効となりますのでご注意ください。</li>
                                <li>発表時点まで当社指定アカウントをフォローしている必要があります。</li>
                                <li>アカウントをお持ちでない方は、アカウントを作成して応募してください。アカウント作成にあたっては、ご自身で対象サービスの利用規約などをご確認ください。 Instagram（https://www.instagram.com） </li>
                            </ul>
                        </ul>
                    </li>
                    <li className="font-bold">ご注意</li>
                    <li>
                        <ul>
                            <li>投稿された作品は、当サイトに掲載させていただくことがあります</li>
                            <li>掲載された作品を削除をご希望の方は「 お問い合わせフォーム 」までご連絡お願いいたします。（※応募は無効になりません。）</li>
                            <li>今後の当社のプロモーション活動として、投稿された写真を、当社が管理するWEBサイト、SNSアカウント、その他販促物で利用させていただくことがあります。その際には、ご応募いただいたアカウントにDMでご連絡させていただき、許諾をとって利用させていただきます。</li>
                            <li>応募された作品が入賞した場合、撮影した元の写真が必要になりますので、応募された写真は結果発表まで削除しないようにしてください。削除して元の写真が提供できない場合は入賞を取り消す場合があります。</li>
                            <li>応募された作品に肖像権等の第三者の権利侵害があった場合、当社は一切責任を負いません。作品に人物が写っている場合は、投稿前に被写体および撮影者の方の許諾を得て下さい。応募者は、ご自身の責任で作品を応募してください。応募者の作品に起因して当社または第三者が苦情等を受けた場合、当該苦情等の解決に要した費用を応募者に負担して頂く場合があります。</li>
                            <li>芸能事務所等に所属されている方は、予め事務所等へご相談の上、本規約への同意および応募の許可を得た上で応募ください。万が一、掲載後に問合せがあった場合、当社は責任を負うものではありません。</li>
                            <li>その他（著作権侵害、営業活動もうくは営利目的の画像、政治活動を伴う画像、宗教活動を伴う画像、犯罪に結びつく画像、公序良俗に反した画像、見た人が不快になる画像、などは投稿しないでください。</li>
                            <li>本コンテスト応募作品撮影の際に発生したいかなる損失、負債、被害、費用、その他の申し立てについて、当社は一斉責任を負いません。</li>
                        </ul>
                    </li>
                    <li className="sub-title">禁止事項</li>
                    <li>
                        <p>
                            応募を通じて、以下の事項に該当するアカウントからの応募は無効とさせていただく場合があります。
                            また入賞後に判明した場合も、入賞権利を無効とさせていただく場合があります。
                        </p>
                        <ol className="list-disc">
                            <li>Instagramまの利用規約に違反している。</li>
                            <li>自動プログラムを利用して応募。</li>
                            <li>複数のアカウントからの応募。</li>
                            <li>本キャンペーンの運営を妨げる行為。</li>
                            <li>特定の団体や個人に対する誹謗中傷。</li>
                            <li>控除良俗に反する行為。</li>
                            <li>宣伝及び勧誘行為。</li>
                            <li>その他、運営事務局が不適切だと判断した行為。</li>
                        </ol>
                    </li>
                    <li className="sub-title">お問い合わせ先</li>
                    <li>
                        <p><Link to="contact" className="text-[#FB3C00] underline decoration-1">お問い合わせフォーム</Link> にご記入ください。</p>
                        <p>受け付け期間：2024年1月2日（火）〜 2024年4月30日（火）。</p>
                        <p>※応募の有効無効、当落について、 発表状況のお問い合わせには、回答できません。</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Info;
