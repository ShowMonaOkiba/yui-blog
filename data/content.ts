
import { ProfileData, BlogPost, GalleryImage } from '../types';

export const profileData: ProfileData = {
  name: "Yui.exe",
  avatar: "https://picsum.photos/seed/yui-avatar/150/150",
  introduction: [
    "はじめまして！Yui.exeです。ピクセルアートを描いたり、昔のPCをいじったりするのが好きです。",
    "このサイトは趣味で作った作品や、日々の出来事を記録するための秘密基地です。",
    "ゆっくりしていってね！"
  ],
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    date: "2004.10.26",
    title: "ホームページ開設しました！",
    body: [
      { type: 'text', content: "ついに自分のホームページを開設しました！HTMLを手打ちで書くのは大変だったけど、すごく楽しいです。これから作品とか日記を載せていくので、ぜひ見てくださいね。" },
      { type: 'image', content: "https://picsum.photos/seed/pixel-city/400/250", alt: "A pixel art cityscape" },
      { type: 'text', content: "キリ番踏んだ方はぜひ掲示板に書き込みお願いします！" },
    ],
  },
  {
    id: 2,
    date: "2004.11.05",
    title: "新しいドット絵「森の奥の廃墟」",
    body: [
      { type: 'text', content: "最近、新しいドット絵が完成しました。テーマは「森の奥の廃墟」です。苔むした石とか、差し込む光の表現を頑張ってみました。ギャラリーにもアップしたので、見てみてください！感想待ってます。" },
      { type: 'text', content: "次はどんなテーマで描こうかな？" },
    ],
  },
];

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/gallery1/200/200",
    title: "サイバーパンクの夜",
    description: "ネオンが輝く未来の都市を描きました。",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/gallery2/200/200",
    title: "森の妖精",
    description: "ファンタジーな雰囲気のキャラクターです。",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/gallery3/200/200",
    title: "海の見える駅",
    description: "夏っぽくて、どこか懐かしい風景。",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/gallery4/200/200",
    title: "8-bit モンスター",
    description: "昔のゲームに出てきそうなモンスター。",
  },
];
