// constants.ts test part 3
import { Region, Language, Place } from './types';

type RegionSupplement = Pick<
  Region,
  'history' | 'regional_culture' | 'natural_features' | 'climate' | 'local_cuisine' | 'accessibility'
>;

type PlaceSupplement = Pick<
  Place,
  'history' | 'culture_festivals' | 'things_to_do' | 'local_cuisine' | 'access'
>;

const createLocalizedText = (ja: string, en: string, th: string, zh: string) => ({
  [Language.JA]: ja,
  [Language.EN]: en,
  [Language.TH]: th,
  [Language.ZH]: zh,
});

const BASE_REGIONS_DATA: Region[] = [
  {
    id: 'hokkaido',
    name: {
      [Language.JA]: '北海道',
      [Language.EN]: 'Hokkaido',
      [Language.TH]: 'ฮอกไกโด',
      [Language.ZH]: '北海道',
    },
    description: {
      [Language.JA]: '日本の最北端に位置する広大な島。雄大な自然、新鮮な海の幸、冬の雪まつりで知られています。',
      [Language.EN]: 'The northernmost major island of Japan, known for its vast wilderness, fresh seafood, and stunning winter snow festivals.',
      [Language.TH]: 'เกาะใหญ่ทางเหนือสุดของญี่ปุ่น มีชื่อเสียงด้านธรรมชาติที่กว้างใหญ่ อาหารทะเลสดใหม่ และเทศกาลหิมะฤดูหนาวที่น่าตื่นตาตื่นใจ',
      [Language.ZH]: '日本最北端的主要岛屿，以其广阔的荒野、新鲜的海鲜和壮观的冬季雪祭而闻名。',
    },
    image: 'https://picsum.photos/seed/hokkaido-main/800/400',
    places: [
      {
        id: 'sapporo',
        name: { 
          [Language.JA]: '札幌市', 
          [Language.EN]: 'Sapporo City',
          [Language.TH]: 'เมืองซัปโปโร',
          [Language.ZH]: '札幌市',
        },
        description: {
          [Language.JA]: '北海道の経済と文化の中心地。札幌雪まつり、美味しいラーメン、ビール園が有名です。',
          [Language.EN]: 'The economic and cultural center of Hokkaido. Famous for the Sapporo Snow Festival, delicious ramen, and beer gardens.',
          [Language.TH]: 'ศูนย์กลางเศรษฐกิจและวัฒนธรรมของฮอกไกโด มีชื่อเสียงด้านเทศกาลหิมะซัปโปโร ราเม็งอร่อย และสวนเบียร์',
          [Language.ZH]: '北海道的经济和文化中心。以札幌雪祭、美味的拉面和啤酒园而闻名。',
        },
        history: {
            [Language.JA]: '札幌の歴史は、1869年に開拓使が置かれたことから始まります。都市計画はアメリカの専門家を招いて行われ、碁盤の目のような美しい街並みが形成されました。',
            [Language.EN]: 'The history of Sapporo began in 1869 with the establishment of the Development Commission. The city was planned with the help of American experts, resulting in a beautiful grid-like street layout.',
            [Language.TH]: 'ประวัติศาสตร์ของซัปโปโรเริ่มต้นในปี 1869 ด้วยการจัดตั้งคณะกรรมการพัฒนาเมือง เมืองนี้ได้รับการวางผังโดยผู้เชี่ยวชาญชาวอเมริกัน ทำให้มีผังเมืองที่เป็นระเบียบสวยงามเหมือนตารางหมากรุก',
            [Language.ZH]: '札幌的历史始于1869年开拓使的设立。城市规划是在美国专家的帮助下进行的，形成了美丽的棋盘式街道格局。',
        },
        culture_festivals: {
            [Language.JA]: '最も有名なのは「さっぽろ雪まつり」で、世界中から観光客が訪れます。夏には「YOSAKOIソーラン祭り」も開催され、街は活気に満ち溢れます。',
            [Language.EN]: 'The most famous event is the Sapporo Snow Festival, which attracts tourists from all over the world. In summer, the YOSAKOI Soran Festival fills the city with energy.',
            [Language.TH]: 'เทศกาลที่มีชื่อเสียงที่สุดคือ "เทศกาลหิมะซัปโปโร" ซึ่งดึงดูดนักท่องเที่ยวจากทั่วโลก ในฤดูร้อนยังมี "เทศกาลโยซาโคอิโซรัน" ที่ทำให้เมืองเต็มไปด้วยความมีชีวิตชีวา',
            [Language.ZH]: '最著名的是“札幌雪祭”，吸引了来自世界各地的游客。夏天举办的“YOSAKOI索朗节”也让城市充满活力。',
        },
        things_to_do: {
            [Language.JA]: '大通公園での散策、時計台や旧北海道庁赤れんが庁舎の見学、すすきのの夜景を楽しむなど、見どころがたくさんあります。',
            [Language.EN]: 'There is much to see, including strolling in Odori Park, visiting the Clock Tower and the Former Hokkaido Government Office Building (Red Brick Office), and enjoying the nightlife of Susukino.',
            [Language.TH]: 'มีกิจกรรมน่าสนใจมากมาย เช่น การเดินเล่นในสวนโอโดริ การเยี่ยมชมหอนาฬิกาและอาคารที่ทำการรัฐบาลเก่าฮอกไกโด (อาคารอิฐแดง) และการเพลิดเพลินกับสถานบันเทิงยามค่ำคืนของย่านซูซูกิโนะ',
            [Language.ZH]: '有很多值得一看的地方，包括在大通公园散步、参观钟楼和北海道旧本厅舍（红砖厅舍），以及享受薄野的夜生活。',
        },
        local_cuisine: {
            [Language.JA]: '味噌ラーメン、スープカレー、ジンギスカンは必食です。新鮮な海の幸も豊富で、寿司や海鮮丼も絶品です。',
            [Language.EN]: 'Miso ramen, soup curry, and Genghis Khan (grilled mutton) are must-tries. Fresh seafood is also abundant, with excellent sushi and seafood bowls.',
            [Language.TH]: 'มิโซะราเม็ง ซุปแกงกะหรี่ และเจงกิสข่าน (เนื้อแกะย่าง) เป็นเมนูที่ต้องลอง นอกจากนี้ยังมีอาหารทะเลสดใหม่มากมาย ทั้งซูชิและข้าวหน้าทะเลที่อร่อยเป็นเลิศ',
            [Language.ZH]: '味噌拉面、汤咖喱和成吉思汗烤肉是必尝的美食。新鲜的海鲜也很丰富，寿司和海鲜盖饭非常美味。',
        },
        access: {
            [Language.JA]: '新千歳空港からJR快速エアポートで約40分。市内は地下鉄やバスが発達しており、移動は非常に便利です。',
            [Language.EN]: 'About 40 minutes from New Chitose Airport by JR Rapid Airport train. The city has a well-developed subway and bus system, making it very convenient to get around.',
            [Language.TH]: 'จากสนามบินชิโตเสะใหม่โดยรถไฟ JR Rapid Airport ใช้เวลาประมาณ 40 นาที การเดินทางภายในเมืองสะดวกสบายด้วยรถไฟใต้ดินและรถประจำทางที่ครอบคลุม',
            [Language.ZH]: '从新千岁机场乘坐JR快速机场线约40分钟。市内地铁和巴士系统发达，交通非常便利。',
        },
        image: 'https://picsum.photos/seed/sapporo-city/600/300',
      },
      {
        id: 'otaru',
        name: { 
          [Language.JA]: '小樽市', 
          [Language.EN]: 'Otaru City',
          [Language.TH]: 'เมืองโอตารุ',
          [Language.ZH]: '小樽市',
        },
        description: {
          [Language.JA]: '歴史的な運河とガラス工芸で知られるノスタルジックな港町。明治時代からの歴史的建造物が数多く残っています。',
          [Language.EN]: 'A nostalgic port town known for its historic canal and glasswork, with many preserved buildings from the Meiji era.',
          [Language.TH]: 'เมืองท่าที่ชวนให้คิดถึงอดีต มีชื่อเสียงด้านคลองประวัติศาสตร์และเครื่องแก้ว พร้อมอาคารเก่าแก่จากยุคเมจิที่ได้รับการอนุรักษ์ไว้',
          [Language.ZH]: '一个怀旧的港口小镇，以其历史悠久的运河和玻璃工艺品而闻名，保存着许多明治时期的历史建筑。',
        },
        history: {
            [Language.JA]: '小樽は明治時代から昭和初期にかけて、北海道の海運と金融の中心として栄えました。運河や倉庫群は当時の繁栄を今に伝えています。',
            [Language.EN]: 'Otaru flourished as Hokkaido\'s shipping and financial center from the Meiji period to early Showa period. The canal and warehouse district preserve this prosperous history.',
            [Language.TH]: 'โอตารุเจริญรุ่งเรืองในฐานะศูนย์กลางการขนส่งทางทะเลและการเงินของฮอกไกโดตั้งแต่สมัยเมจิถึงต้นสมัยโชวะ คลองและย่านโกดังยังคงรักษาประวัติศาสตร์แห่งความรุ่งเรืองนี้ไว้',
            [Language.ZH]: '小樽在明治时期到昭和初期作为北海道的海运和金融中心而繁荣。运河和仓库群至今仍传承着当时的繁荣。',
        },
        culture_festivals: {
            [Language.JA]: '「小樽雪あかりの路」は冬の風物詩で、雪と光の幻想的な景色を楽しめます。夏には「小樽潮まつり」が開催されます。',
            [Language.EN]: 'The Otaru Snow Light Path Festival is a winter highlight, creating magical scenes with snow and light. The Otaru Tide Festival is held in summer.',
            [Language.TH]: 'เทศกาลแสงไฟหิมะโอตารุเป็นไฮไลท์ในฤดูหนาว สร้างทัศนียภาพที่มหัศจรรย์ด้วยหิมะและแสงไฟ ส่วนในฤดูร้อนมีเทศกาลคลื่นโอตารุ',
            [Language.ZH]: '"小樽雪灯之路"是冬季的风物诗，可以欣赏到雪和光的梦幻景色。夏季举办"小樽潮祭"。',
        },
        things_to_do: {
            [Language.JA]: '小樽運河散策、ガラス工房見学、寿司屋通りでの食事、堺町通りでのショッピング、旧日本銀行小樽支店の見学がおすすめです。',
            [Language.EN]: 'Recommended activities include walking along Otaru Canal, visiting glass workshops, dining at Sushi Street, shopping on Sakaimachi Street, and visiting the former Otaru Branch of the Bank of Japan.',
            [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินเล่นตามคลองโอตารุ เยี่ยมชมโรงงานเครื่องแก้ว รับประทานอาหารที่ถนนซูชิ ช้อปปิ้งที่ถนนซาไกมาจิ และเยี่ยมชมอาคารธนาคารแห่งประเทศญี่ปุ่นสาขาโอตารุเก่า',
            [Language.ZH]: '推荐活动包括漫步小樽运河、参观玻璃工房、在寿司街用餐、在堺町通购物、参观旧日本银行小樽支店。',
        },
        local_cuisine: {
            [Language.JA]: '新鮮な寿司、ウニ丼、小樽ビール、ルタオのチーズケーキが有名です。',
            [Language.EN]: 'Famous for fresh sushi, sea urchin rice bowls, Otaru beer, and LeTAO cheesecakes.',
            [Language.TH]: 'มีชื่อเสียงด้านซูชิสด ข้าวหน้าหอยเม่น เบียร์โอตารุ และชีสเค้ก LeTAO',
            [Language.ZH]: '以新鲜寿司、海胆盖饭、小樽啤酒和LeTAO芝士蛋糕而闻名。',
        },
        access: {
            [Language.JA]: '札幌から快速で約30分。小樽市内は徒歩やバスで観光できます。',
            [Language.EN]: 'About 30 minutes from Sapporo by rapid train. The city can be explored on foot or by bus.',
            [Language.TH]: 'ใช้เวลาประมาณ 30 นาทีจากซัปโปโรโดยรถไฟด่วน สามารถเที่ยวชมเมืองได้โดยการเดินหรือนั่งรถประจำทาง',
            [Language.ZH]: '从札幌乘快速列车约30分钟。市内可以步行或乘巴士游览。',
        },
        image: 'https://picsum.photos/seed/otaru-city/600/300',
      },
      {
        id: 'furano',
        name: {
          [Language.JA]: '富良野',
          [Language.EN]: 'Furano',
          [Language.TH]: 'ฟุราโนะ',
          [Language.ZH]: '富良野',
        },
        description: {
          [Language.JA]: '夏には美しいラベンダー畑が広がり、冬にはスキーリゾートとして人気です。北海道の自然と農業の魅力が詰まった地域です。',
          [Language.EN]: 'Famous for its beautiful lavender fields in summer and popular as a ski resort in winter. A region filled with the natural beauty and agricultural charm of Hokkaido.',
          [Language.TH]: 'มีชื่อเสียงด้านทุ่งลาเวนเดอร์ที่สวยงามในฤดูร้อนและเป็นที่นิยมในฐานะสกีรีสอร์ทในฤดูหนาว ภูมิภาคที่เต็มไปด้วยความงามทางธรรมชาติและเสน่ห์ทางการเกษตรของฮอกไกโด',
          [Language.ZH]: '夏季以美丽的薰衣草田而闻名，冬季则作为滑雪胜地广受欢迎。这里充满了北海道的自然之美和农业魅力。',
        },
        history: {
            [Language.JA]: '富良野は1900年代初頭から開拓が始まり、農業地域として発展。1970年代からラベンダー栽培が始まり、現在の観光地としての姿を形作っています。',
            [Language.EN]: 'Furano\'s development began in the early 1900s as an agricultural area. Lavender cultivation started in the 1970s, shaping its current status as a tourist destination.',
            [Language.TH]: 'ฟุราโนะเริ่มพัฒนาในต้นศตวรรษที่ 20 ในฐานะพื้นที่เกษตรกรรม การปลูกลาเวนเดอร์เริ่มขึ้นในทศวรรษ 1970 ซึ่งหล่อหลอมให้กลายเป็นจุดหมายปลายทางการท่องเที่ยวในปัจจุบัน',
            [Language.ZH]: '富良野从1900年代初期开始开发，发展为农业地区。从1970年代开始种植薰衣草，塑造了现在作为旅游胜地的面貌。',
        },
        culture_festivals: {
            [Language.JA]: '「富良野ラベンダーまつり」は夏の一大イベント。冬には「ふらの雪まつり」が開催され、雪像や冬のアクティビティを楽しめます。',
            [Language.EN]: 'The Furano Lavender Festival is a major summer event. In winter, the Furano Snow Festival offers snow sculptures and winter activities.',
            [Language.TH]: 'เทศกาลลาเวนเดอร์ฟุราโนะเป็นงานใหญ่ในฤดูร้อน ส่วนในฤดูหนาวมีเทศกาลหิมะฟุราโนะที่มีประติมากรรมหิมะและกิจกรรมฤดูหนาว',
            [Language.ZH]: '"富良野薰衣草节"是夏季的重大活动。冬季举办"富良野雪节"，可以欣赏雪雕和参加冬季活动。',
        },
        things_to_do: {
            [Language.JA]: 'ファーム富田でのラベンダー観賞、富良野スキー場でのウィンタースポーツ、チーズ工房見学、ワイナリー巡り、乗馬体験などが楽しめます。',
            [Language.EN]: 'Enjoy viewing lavender at Farm Tomita, winter sports at Furano Ski Resort, visiting cheese factories, wine tasting at local wineries, and horseback riding.',
            [Language.TH]: 'เพลิดเพลินกับการชมลาเวนเดอร์ที่ฟาร์มโทมิตะ กีฬาฤดูหนาวที่ลานสกีฟุราโนะ เยี่ยมชมโรงงานชีส ชิมไวน์ที่ไวน์เนอรี่ท้องถิ่น และขี่ม้า',
            [Language.ZH]: '可以在富田农场欣赏薰衣草、在富良野滑雪场享受冬季运动、参观奶酪工厂、品尝当地酒庄的美酒、体验骑马等。',
        },
        local_cuisine: {
            [Language.JA]: '新鮮な野菜を使った料理、ジンギスカン、富良野産チーズ、地元ワインが特に人気です。',
            [Language.EN]: 'Popular dishes include meals made with fresh local vegetables, Genghis Khan (grilled lamb), Furano cheese, and local wines.',
            [Language.TH]: 'อาหารยอดนิยมได้แก่ อาหารที่ทำจากผักสดในท้องถิ่น เจงกิสข่าน (เนื้อแกะย่าง) ชีสฟุราโนะ และไวน์ท้องถิ่น',
            [Language.ZH]: '使用新鲜蔬菜制作的料理、成吉思汗烤肉、富良野奶酪和当地葡萄酒特别受欢迎。',
        },
        access: {
            [Language.JA]: '札幌から特急で約2時間。レンタカーでの観光もおすすめです。',
            [Language.EN]: 'About 2 hours from Sapporo by express train. Rental car is recommended for sightseeing.',
            [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงจากซัปโปโรโดยรถไฟด่วนพิเศษ แนะนำให้เช่ารถยนต์สำหรับการเที่ยวชม',
            [Language.ZH]: '从札幌乘特快列车约2小时。推荐租车观光。',
        },
        image: 'https://picsum.photos/seed/furano-lavender/600/300',
      },
      {
        id: 'hakodate',
        name: {
          [Language.JA]: '函館市',
          [Language.EN]: 'Hakodate City',
          [Language.TH]: 'เมืองฮาโกดาเตะ',
          [Language.ZH]: '函馆市',
        },
        description: {
          [Language.JA]: '函館山の夜景は世界三大夜景の一つと称されることも。新鮮な魚介類、歴史的な建造物、温泉など、多彩な魅力にあふれています。',
          [Language.EN]: 'The night view from Mount Hakodate is often acclaimed as one of the world\'s best. The city offers diverse attractions including fresh seafood, historic buildings, and hot springs.',
          [Language.TH]: 'ทิวทัศน์ยามค่ำคืนจากภูเขาฮาโกดาเตะมักได้รับการยกย่องว่าเป็นหนึ่งในทิวทัศน์ที่ดีที่สุดในโลก เมืองนี้มีสิ่งที่น่าสนใจหลากหลาย ทั้งอาหารทะเลสด อาคารประวัติศาสตร์ และบ่อน้ำร้อน',
          [Language.ZH]: '函馆山夜景常被誉为世界最佳夜景之一。城市充满各种魅力，包括新鲜海鲜、历史建筑和温泉。',
        },
        history: {
            [Language.JA]: '1854年の開港以来、日本最初の国際貿易港の一つとして栄えました。西洋と日本の文化が融合した独特の街並みは、その歴史を今に伝えています。',
            [Language.EN]: 'Since opening its port in 1854, Hakodate has prospered as one of Japan\'s first international trading ports. The unique cityscape, blending Western and Japanese cultures, reflects this history.',
            [Language.TH]: 'นับตั้งแต่เปิดท่าเรือในปี 1854 ฮาโกดาเตะเจริญรุ่งเรืองในฐานะหนึ่งในท่าเรือการค้าระหว่างประเทศแห่งแรกของญี่ปุ่น ภูมิทัศน์เมืองที่เป็นเอกลักษณ์ ผสมผสานวัฒนธรรมตะวันตกและญี่ปุ่นสะท้อนให้เห็นประวัติศาสตร์นี้',
            [Language.ZH]: '自1854年开港以来，作为日本最早的国际贸易港口之一而繁荣。融合了西方和日本文化的独特街景至今仍传承着这段历史。',
        },
        culture_festivals: {
            [Language.JA]: '「函館港まつり」では華麗な踊りが披露され、冬には「函館海上冬花火」で夜空を彩ります。クリスマスファンタジーも人気イベントです。',
            [Language.EN]: 'The Hakodate Port Festival features magnificent dances, while winter brings the Hakodate Offshore Winter Fireworks. Christmas Fantasy is also a popular event.',
            [Language.TH]: 'เทศกาลท่าเรือฮาโกดาเตะมีการแสดงระบำที่งดงาม ส่วนในฤดูหนาวมีการจุดดอกไม้ไฟกลางทะเลในฤดูหนาว และเทศกาลคริสต์มาสแฟนตาซีก็เป็นงานยอดนิยม',
            [Language.ZH]: '"函馆港节"展示华丽的舞蹈，冬季则有"函馆海上冬季烟花"点缀夜空。圣诞幻想曲也是很受欢迎的活动。',
        },
        things_to_do: {
            [Language.JA]: '函館山からの夜景観賞、元町の歴史的建造物巡り、朝市での海鮮購入、函館公園での花見、トラピスチヌ修道院の訪問がおすすめです。',
            [Language.EN]: 'Recommended activities include viewing the night scene from Mt. Hakodate, exploring historic buildings in Motomachi, shopping at the morning market, cherry blossom viewing at Hakodate Park, and visiting the Trappistine Convent.',
            [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมวิวกลางคืนจากภูเขาฮาโกดาเตะ สำรวจอาคารประวัติศาสตร์ในโมโตมาจิ ช้อปปิ้งที่ตลาดเช้า ชมซากุระที่สวนฮาโกดาเตะ และเยี่ยมชมอารามแทรปปิสต์',
            [Language.ZH]: '推荐活动包括从函馆山观赏夜景、游览元町历史建筑、在晨市购买海鲜、在函馆公园赏樱、参观特拉普女修道院。',
        },
        local_cuisine: {
            [Language.JA]: '函館朝市の海鮮丼、イカ料理、ラッキーピエロのハンバーガー、塩ラーメンが特に人気です。',
            [Language.EN]: 'Popular foods include seafood bowls from the morning market, squid dishes, Lucky Pierrot hamburgers, and salt ramen.',
            [Language.TH]: 'อาหารยอดนิยม ได้แก่ ข้าวหน้าอาหารทะเลจากตลาดเช้า อาหารจากปลาหมึก แฮมเบอร์เกอร์ Lucky Pierrot และราเม็งน้ำซุปเค็ม',
            [Language.ZH]: '函馆晨市的海鲜盖饭、乌贼料理、Lucky Pierrot汉堡、盐味拉面特别受欢迎。',
        },
        access: {
            [Language.JA]: '新函館北斗駅から新幹線で東京まで約4時間。市内は路面電車が便利です。',
            [Language.EN]: 'About 4 hours from Tokyo to Shin-Hakodate-Hokuto Station by Shinkansen. The city\'s tram system is convenient for local transport.',
            [Language.TH]: 'ใช้เวลาประมาณ 4 ชั่วโมงจากโตเกียวถึงสถานีชินฮาโกดาเตะโฮคุโตโดยรถไฟชินคันเซ็น ระบบรถรางในเมืองสะดวกสำหรับการเดินทางในท้องถิ่น',
            [Language.ZH]: '从东京到新函馆北斗站乘新干线约4小时。市内有便利的有轨电车系统。',
        },
        image: 'https://picsum.photos/seed/hakodate-city/600/300',
      },
    ],
  },
  {
    id: 'tohoku',
    name: {
      [Language.JA]: '東北地方',
      [Language.EN]: 'Tohoku Region',
      [Language.TH]: 'ภูมิภาคโทโฮคุ',
      [Language.ZH]: '东北地区',
    },
    description: {
      [Language.JA]: '本州北部に位置し、豊かな自然、温泉、伝統的な祭りを持つ地方。四季折々の美しい風景に加え、独自の食文化と伝統工芸が魅力です。',
      [Language.EN]: 'Located in northern Honshu, this region boasts rich nature, hot springs, and traditional festivals. Besides beautiful scenery in all four seasons, it offers unique food culture and traditional crafts.',
      [Language.TH]: 'ตั้งอยู่ทางตอนเหนือของฮอนชู เป็นภูมิภาคที่มีธรรมชาติอุดมสมบูรณ์ น้ำพุร้อน และเทศกาลแบบดั้งเดิม นอกจากทิวทัศน์ที่สวยงามในทุกฤดูกาลแล้ว ยังมีวัฒนธรรมอาหารและงานฝีมือดั้งเดิมที่เป็นเอกลักษณ์',
      [Language.ZH]: '位于本州北部，拥有丰富的自然风光、温泉和传统节日。除了四季优美的景色，还有独特的饮食文化和传统工艺。',
    },
    history: {
      [Language.JA]: '古来より独自の文化を育んできた地域で、奈良時代には蝦夷地として知られていました。平安時代以降、徐々に本州文化圏に組み込まれ、独特の文化を形成しています。',
      [Language.EN]: 'A region that has cultivated its own culture since ancient times, known as Ezo in the Nara period. Since the Heian period, it gradually integrated into the Honshu cultural sphere while maintaining its unique characteristics.',
      [Language.TH]: 'เป็นภูมิภาคที่มีวัฒนธรรมเป็นของตัวเองมาตั้งแต่โบราณ รู้จักในนาม Ezo ในสมัยนาระ นับตั้งแต่สมัยเฮอัน ค่อยๆ ผสมผสานเข้ากับวัฒนธรรมฮอนชูในขณะที่ยังคงรักษาเอกลักษณ์ของตนไว้',
      [Language.ZH]: '自古以来就培育着独特文化的地区，奈良时代被称为虾夷地。平安时代以后，逐渐融入本州文化圈，形成了独特的文化。',
    },
    regional_culture: {
      [Language.JA]: '伝統的な祭りや芸能が今も大切に受け継がれ、特に「ねぶた祭り」や「七夕祭り」は全国的に有名です。また、陶芸や漆器などの伝統工芸も盛んです。',
      [Language.EN]: 'Traditional festivals and performing arts are still carefully preserved, with the Nebuta Festival and Tanabata Festival being nationally famous. Traditional crafts such as pottery and lacquerware also flourish.',
      [Language.TH]: 'เทศกาลและศิลปะการแสดงแบบดั้งเดิมยังคงได้รับการอนุรักษ์อย่างดี โดยเฉพาะเทศกาลเนบุตะและเทศกาลทานาบาตะที่มีชื่อเสียงระดับประเทศ งานฝีมือดั้งเดิมเช่นเครื่องปั้นดินเผาและเครื่องเขินก็รุ่งเรือง',
      [Language.ZH]: '传统节日和艺能至今仍被精心传承，特别是"睡魔祭"和"七夕节"在全国闻名。此外，陶艺和漆器等传统工艺也很兴盛。',
    },
    natural_features: {
      [Language.JA]: '十和田湖や奥入瀬渓流などの美しい自然、世界遺産の白神山地、名湯として知られる温泉地が点在しています。',
      [Language.EN]: 'Features beautiful nature such as Lake Towada and Oirase Stream, the World Heritage Shirakami Mountains, and numerous famous hot spring areas.',
      [Language.TH]: 'มีธรรมชาติที่สวยงาม เช่น ทะเลสาบโทวาดะและลำธารโออิราเสะ เทือกเขาชิราคามิที่เป็นมรดกโลก และแหล่งน้ำพุร้อนที่มีชื่อเสียงมากมาย',
      [Language.ZH]: '拥有十和田湖和奥入濑溪流等美丽自然景观、世界遗产白神山地、以及众多知名温泉地。',
    },
    climate: {
      [Language.JA]: '夏は比較的涼しく、冬は豪雪地帯となります。春の桜と秋の紅葉が特に美しく、観光のハイシーズンとなっています。',
      [Language.EN]: 'Summers are relatively cool, and winters bring heavy snow. Spring cherry blossoms and autumn foliage are particularly beautiful, marking peak tourist seasons.',
      [Language.TH]: 'ฤดูร้อนค่อนข้างเย็น และฤดูหนาวมีหิมะตกหนัก ดอกซากุระในฤดูใบไม้ผลิและใบไม้เปลี่ยนสีในฤดูใบไม้ร่วงมีความสวยงามเป็นพิเศษ เป็นช่วงไฮซีซั่นของการท่องเที่ยว',
      [Language.ZH]: '夏季相对凉爽，冬季是豪雪地带。春季樱花和秋季红叶特别美丽，是旅游旺季。',
    },
    local_cuisine: {
      [Language.JA]: 'きりたんぽ鍋、いも煮、はっと鍋などの郷土料理や、新鮮な海産物、果物（りんご、さくらんぼ）が特産です。',
      [Language.EN]: 'Known for local dishes like Kiritanpo Nabe, Imoni, and Hatto Nabe, as well as fresh seafood and fruits (apples and cherries).',
      [Language.TH]: 'มีชื่อเสียงด้านอาหารท้องถิ่น เช่น คิริทันโปนาเบะ อิโมนิ และฮัตโตะนาเบะ รวมถึงอาหารทะเลสดและผลไม้ (แอปเปิ้ลและเชอร์รี่)',
      [Language.ZH]: '以切炭火锅、芋煮、水团火锅等乡土料理，以及新鲜海产品、水果（苹果、樱桃）为特产。',
    },
    accessibility: {
      [Language.JA]: '東北新幹線で東京から仙台まで約1時間半。主要都市間は新幹線や特急列車で結ばれています。',
      [Language.EN]: 'About 1.5 hours from Tokyo to Sendai by Tohoku Shinkansen. Major cities are connected by Shinkansen and express trains.',
      [Language.TH]: 'ใช้เวลาประมาณ 1.5 ชั่วโมงจากโตเกียวถึงเซนไดโดยรถไฟชินคันเซ็นโทโฮคุ เมืองสำคัญๆ เชื่อมต่อกันด้วยรถไฟชินคันเซ็นและรถไฟด่วนพิเศษ',
      [Language.ZH]: '从东京到仙台乘坐东北新干线约1.5小时。主要城市之间通过新干线和特快列车相连。',
    },
    image: 'https://picsum.photos/seed/tohoku-main/800/400',
    places: [
      {
        id: 'sendai',
        name: {
          [Language.JA]: '仙台市',
          [Language.EN]: 'Sendai City',
          [Language.TH]: 'เมืองเซนได',
          [Language.ZH]: '仙台市',
        },
        description: {
          [Language.JA]: '東北地方最大の都市で、杜の都として知られる緑豊かな近代都市。伊達政宗の歴史と現代文化が調和しています。',
          [Language.EN]: 'The largest city in the Tohoku region, known as the City of Trees, where the history of Date Masamune harmonizes with modern culture.',
          [Language.TH]: 'เมืองที่ใหญ่ที่สุดในภูมิภาคโทโฮคุ รู้จักในนาม "เมืองแห่งต้นไม้" ที่ซึ่งประวัติศาสตร์ของดาเตะ มาซามุเนะผสานกับวัฒนธรรมสมัยใหม่',
          [Language.ZH]: '东北地区最大的城市，被称为"杜之都"，伊达政宗的历史与现代文化和谐共存。',
        },
        history: {
          [Language.JA]: '1601年に伊達政宗が城を築いて以来、東北の政治・経済の中心として発展。江戸時代には城下町として栄え、現代では東北の中枢都市として重要な役割を果たしています。',
          [Language.EN]: 'Since Date Masamune built his castle in 1601, the city has developed as the political and economic center of Tohoku. It flourished as a castle town during the Edo period and now serves as a key city in Tohoku.',
          [Language.TH]: 'นับตั้งแต่ดาเตะ มาซามุเนะสร้างปราสาทในปี 1601 เมืองนี้ได้พัฒนาเป็นศูนย์กลางการเมืองและเศรษฐกิจของโทโฮคุ เจริญรุ่งเรืองในฐานะเมืองปราสาทในสมัยเอโดะ และปัจจุบันเป็นเมืองสำคัญในโทโฮคุ',
          [Language.ZH]: '自1601年伊达政宗建城以来，作为东北政治经济中心发展。江户时代作为城下町繁荣，现代作为东北枢纽城市发挥重要作用。',
        },
        culture_festivals: {
          [Language.JA]: '七夕まつりは日本三大祭りの一つで、毎年8月に開催。竹飾りや紙飾りで街中が華やかに彩られます。また、ジャズフェスティバルなど現代的なイベントも盛んです。',
          [Language.EN]: 'The Tanabata Festival, one of Japan\'s three great festivals, is held annually in August, decorating the city with bamboo and paper ornaments. Modern events like the Jazz Festival are also popular.',
          [Language.TH]: 'เทศกาลทานาบาตะ หนึ่งในสามเทศกาลใหญ่ของญี่ปุ่น จัดขึ้นทุกปีในเดือนสิงหาคม ประดับประดาเมืองด้วยไม้ไผ่และเครื่องประดับกระดาษ นอกจากนี้ยังมีงานร่วมสมัยอย่างเทศกาลแจ๊สที่ได้รับความนิยม',
          [Language.ZH]: '七夕节是日本三大节日之一，每年8月举行，竹饰和纸饰装点全城。此外，爵士音乐节等现代活动也很盛行。',
        },
        things_to_do: {
          [Language.JA]: '仙台城跡や瑞鳳殿の観光、定禅寺通りでの散策、秋保温泉での入浴、牛タンやずんだ餅の味覚探訪がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Sendai Castle Ruins and Zuihoden Mausoleum, strolling down Jozenji Street, bathing in Akiu Onsen, and trying local delicacies like beef tongue and zunda mochi.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมซากปราสาทเซนไดและสุสานซุยโฮเด็น เดินเล่นที่ถนนโจเซ็นจิ แช่น้ำพุร้อนอาคิอุ และลิ้มลองอาหารท้องถิ่นอย่างลิ้นวัวและขนมโมจิซุนดะ',
          [Language.ZH]: '推荐参观仙台城遗址和瑞凤殿、漫步定禅寺通、泡秋保温泉、品尝牛舌和豆馅糯米糕。',
        },
        local_cuisine: {
          [Language.JA]: '牛タン焼き、ずんだ餅、はらこ飯、芋煮が代表的な郷土料理。新鮮な海の幸や山の幸も豊富です。',
          [Language.EN]: 'Famous local dishes include grilled beef tongue, zunda mochi (edamame-flavored rice cakes), salmon roe rice, and imoni (taro soup). Fresh seafood and mountain vegetables are also abundant.',
          [Language.TH]: 'อาหารท้องถิ่นที่มีชื่อเสียง ได้แก่ ลิ้นวัวย่าง โมจิซุนดะ (ขนมโมจิรสถั่วแระญี่ปุ่น) ข้าวไข่ปลาแซลมอน และอิโมนิ (ซุปเผือก) มีอาหารทะเลสดและผักจากภูเขามากมาย',
          [Language.ZH]: '著名的当地美食包括烤牛舌、豆馅糯米糕、鲑鱼子饭和芋头汤。新鲜的海鲜和山珍也很丰富。',
        },
        access: {
          [Language.JA]: '東京から東北新幹線で約90分。市内は地下鉄とバスが発達しており、観光に便利です。',
          [Language.EN]: 'About 90 minutes from Tokyo by Tohoku Shinkansen. The city has a well-developed subway and bus system, convenient for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 90 นาทีจากโตเกียวโดยรถไฟชินคันเซ็นโทโฮคุ เมืองมีระบบรถไฟใต้ดินและรถประจำทางที่พัฒนาดี สะดวกสำหรับการท่องเที่ยว',
          [Language.ZH]: '从东京乘坐东北新干线约90分钟。市内地铁和公交系统发达，观光便利。',
        },
        image: 'https://picsum.photos/seed/sendai-city/600/300',
      },
      {
        id: 'matsushima',
        name: {
          [Language.JA]: '松島',
          [Language.EN]: 'Matsushima',
          [Language.TH]: 'มัตสึชิมะ',
          [Language.ZH]: '松岛',
        },
        description: {
          [Language.JA]: '日本三景の一つに数えられる風光明媚な景勝地。260余りの島々が織りなす景観は、四季を通じて美しい眺めを見せてくれます。',
          [Language.EN]: 'One of Japan\'s Three Great Views, featuring over 260 pine-covered islands creating beautiful scenery throughout the seasons.',
          [Language.TH]: 'หนึ่งในสามทิวทัศน์ที่สวยที่สุดของญี่ปุ่น มีเกาะที่ปกคลุมด้วยต้นสนกว่า 260 เกาะ สร้างทัศนียภาพที่งดงามตลอดทั้งปี',
          [Language.ZH]: '日本三景之一的风景胜地，260多个岛屿编织出的景观四季美丽。',
        },
        history: {
          [Language.JA]: '奈良時代から霊場として栄え、伊達政宗の庇護のもと、寺院建築や庭園文化が発展しました。',
          [Language.EN]: 'Flourishing as a spiritual site since the Nara period, temple architecture and garden culture developed under Date Masamune\'s patronage.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะสถานที่ศักดิ์สิทธิ์ตั้งแต่สมัยนาระ สถาปัตยกรรมวัดและวัฒนธรรมสวนพัฒนาขึ้นภายใต้การอุปถัมภ์ของดาเตะ มาซามุเนะ',
          [Language.ZH]: '自奈良时代起就作为灵场繁荣，在伊达政宗的庇护下，寺院建筑和园林文化得到发展。',
        },
        culture_festivals: {
          [Language.JA]: '松島海岸の花火大会や観月会など、自然と調和した行事が年間を通じて開催されています。',
          [Language.EN]: 'Events harmonizing with nature are held throughout the year, including fireworks displays on Matsushima Coast and moon-viewing parties.',
          [Language.TH]: 'มีงานที่ผสานกับธรรมชาติตลอดทั้งปี รวมถึงการแสดงดอกไม้ไฟที่ชายฝั่งมัตสึชิมะและงานชมจันทร์',
          [Language.ZH]: '全年举办松岛海岸烟花大会和赏月会等与自然和谐的活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船での島巡り、瑞巌寺の参拝、五大堂の見学、牡蠣小屋での新鮮な牡蠣の試食がおすすめです。',
          [Language.EN]: 'Recommended activities include island cruises, visiting Zuiganji Temple, exploring Godaido Temple, and trying fresh oysters at oyster shacks.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมเกาะ เยี่ยมชมวัดซุยกันจิ สำรวจวัดโกไดโด และลิ้มลองหอยนางรมสดที่ร้านหอยนางรม',
          [Language.ZH]: '推荐乘游览船环岛、参拜瑞岩寺、参观五大堂、在牡蛎小屋品尝新鲜牡蛎。',
        },
        local_cuisine: {
          [Language.JA]: '新鮮な牡蠣料理、あなご料理、笹かまぼこが特産。季節の海産物も豊富です。',
          [Language.EN]: 'Specialties include fresh oyster dishes, conger eel dishes, and sasa-kamaboko (fish cakes). Seasonal seafood is also abundant.',
          [Language.TH]: 'อาหารพิเศษประจำท้องถิ่น ได้แก่ อาหารจากหอยนางรมสด อาหารจากปลาไหลทะเล และซาซะคามาโบโกะ (ลูกชิ้นปลา) มีอาหารทะเลตามฤดูกาลมากมาย',
          [Language.ZH]: '特产包括新鲜牡蛎料理、穴子料理和笹蒲鉾。时令海产也很丰富。',
        },
        access: {
          [Language.JA]: '仙台から JR 仙石線で約25分。島々を巡る遊覧船が運航しています。',
          [Language.EN]: 'About 25 minutes from Sendai by JR Senseki Line. Sightseeing boats operate for island tours.',
          [Language.TH]: 'ใช้เวลาประมาณ 25 นาทีจากเซนไดโดยรถไฟ JR สายเซนเซกิ มีเรือท่องเที่ยวให้บริการสำหรับเที่ยวชมเกาะต่างๆ',
          [Language.ZH]: '从仙台乘JR仙石线约25分钟。有环岛游览船运营。',
        },
        image: 'https://picsum.photos/seed/matsushima/600/300',
      },
      {
        id: 'aomori',
        name: { 
          [Language.JA]: '青森市', 
          [Language.EN]: 'Aomori City',
          [Language.TH]: 'เมืองอาโอโมริ',
          [Language.ZH]: '青森市',
        },
        description: {
          [Language.JA]: '本州最北端の県庁所在地。ねぶた祭りで有名で、新鮮な海産物と豊かな自然に恵まれた都市です。',
          [Language.EN]: 'The northernmost prefectural capital on Honshu. Famous for the Nebuta Festival and blessed with fresh seafood and rich nature.',
          [Language.TH]: 'เมืองหลวงจังหวัดที่อยู่เหนือสุดของเกาะฮอนชู มีชื่อเสียงจากเทศกาลเนบุตะและอุดมด้วยอาหารทะเลสดและธรรมชาติที่อุดมสมบูรณ์',
          [Language.ZH]: '本州最北端的县厅所在地。因睡魔祭而闻名，拥有新鲜的海产和丰富的自然资源。',
        },
        history: {
          [Language.JA]: '江戸時代から北前船の寄港地として栄え、明治時代には鉄道の終着点として更なる発展を遂げました。',
          [Language.EN]: 'Prospered as a port for Kitamae ships during the Edo period, and developed further as a railway terminus in the Meiji era.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะท่าเรือสำหรับเรือคิตามาเอะในสมัยเอโดะ และพัฒนาต่อในฐานะปลายทางรถไฟในสมัยเมจิ',
          [Language.ZH]: '江户时代作为北前船停靠港而繁荣，明治时代作为铁路终点站进一步发展。',
        },
        culture_festivals: {
          [Language.JA]: '8月に開催される青森ねぶた祭りは、巨大な灯籠山車と囃子、跳人の踊りで知られる日本を代表する祭りです。',
          [Language.EN]: 'The Aomori Nebuta Festival in August is one of Japan\'s major festivals, known for its giant illuminated floats, traditional music, and dancers.',
          [Language.TH]: 'เทศกาลเนบุตะอาโอโมริในเดือนสิงหาคมเป็นหนึ่งในเทศกาลหลักของญี่ปุ่น มีชื่อเสียงด้านรถแห่ขนาดใหญ่ที่มีไฟประดับ ดนตรีพื้นเมือง และการเต้นรำ',
          [Language.ZH]: '8月举办的青森睡魔祭是日本代表性节日，以巨大灯笼花车、囃子和跳人舞蹈而闻名。',
        },
        things_to_do: {
          [Language.JA]: 'ねぶたの家ワ・ラッセの見学、三内丸山遺跡の探訪、八甲田山ロープウェイでの紅葉狩りがおすすめです。',
          [Language.EN]: 'Recommended activities include visiting the Nebuta Museum Wa-Rasse, exploring the Sannai-Maruyama Site, and viewing autumn leaves via the Hakkoda Ropeway.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมพิพิธภัณฑ์เนบุตะ วา-รัสเสะ สำรวจแหล่งโบราณคดีซันไน-มารุยามะ และชมใบไม้เปลี่ยนสีผ่านกระเช้าฮักโคดะ',
          [Language.ZH]: '推荐参观睡魔之家瓦拉西、探访三内丸山遗迹、乘八甲田山缆车赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '青森県産りんご、大間まぐろ、帆立、いかの刺身など、新鮮な海の幸と農産物が豊富です。',
          [Language.EN]: 'Rich in fresh seafood and agricultural products, including Aomori apples, Oma tuna, scallops, and squid sashimi.',
          [Language.TH]: 'อุดมด้วยอาหารทะเลสดและผลผลิตทางการเกษตร รวมถึงแอปเปิ้ลอาโอโมริ ทูน่าโอมะ หอยเชลล์ และปลาหมึกซาชิมิ',
          [Language.ZH]: '丰富的新鲜海产和农产品，包括青森苹果、大间金枪鱼、扇贝和鱿鱼刺身等。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約3時間半。市内は路面電車とバスが便利です。',
          [Language.EN]: 'About 3.5 hours from Tokyo by Shinkansen. Trams and buses are convenient for city transportation.',
          [Language.TH]: 'ใช้เวลาประมาณ 3.5 ชั่วโมงจากโตเกียวโดยรถไฟชินคันเซ็น รถรางและรถประจำทางสะดวกสำหรับการเดินทางในเมือง',
          [Language.ZH]: '从东京乘新干线约3.5小时。市内有便利的有轨电车和公交车。',
        },
        image: 'https://picsum.photos/seed/aomori-city/600/300',
      },
      {
        id: 'yamadera',
        name: {
          [Language.JA]: '山寺',
          [Language.EN]: 'Yamadera',
          [Language.TH]: 'ยามะเดระ',
          [Language.ZH]: '山寺',
        },
        description: {
          [Language.JA]: '山形市にある立石寺の通称。山肌に点在するお堂からの眺めは絶景です。松尾芭蕉も訪れた歴史ある寺院です。',
          [Language.EN]: 'Common name for Risshaku-ji Temple in Yamagata. The view from the halls scattered on the mountainside is superb. A historic temple visited by the famous poet Matsuo Basho.',
          [Language.TH]: 'ชื่อสามัญของวัดริชชะคุจิในยามากาตะ ทิวทัศน์จากห้องโถงที่กระจายอยู่บนไหล่เขานั้นยอดเยี่ยมมาก เป็นวัดประวัติศาสตร์ที่กวีชื่อดังมัตสึโอะ บาโชเคยมาเยือน',
          [Language.ZH]: '山形市立石寺的通称。从散布在山腰上的殿堂眺望的景色绝佳。这是一座被著名俳句诗人松尾芭蕉造访过的历史悠久的寺院。',
        },
        history: {
          [Language.JA]: '860年に創建された天台宗の古刹で、1000段以上の石段を登って参拝する山岳寺院です。芭蕉の句「閑かさや 岩にしみ入る 蝉の声」で有名です。',
          [Language.EN]: 'Founded in 860 as a Tendai Buddhist temple, it\'s a mountain temple accessed by climbing over 1,000 stone steps. Famous for Basho\'s haiku about the silence and cicada\'s voice penetrating the rocks.',
          [Language.TH]: 'ก่อตั้งในปี 860 เป็นวัดนิกายเทนได เป็นวัดบนภูเขาที่ต้องขึ้นบันไดหินกว่า 1,000 ขั้น มีชื่อเสียงจากบทกวีไฮกุของบาโชเกี่ยวกับความเงียบและเสียงจักจั่นที่แทรกซึมเข้าไปในหิน',
          [Language.ZH]: '创建于860年的天台宗古刹，需要攀登1000多级石阶参拜的山岳寺院。因芭蕉"寂静啊 渗入岩石的 蝉鸣声"的俳句而闻名。',
        },
        culture_festivals: {
          [Language.JA]: '山寺の風鈴まつり、七夕ライトアップ、紅葉ライトアップなど、季節ごとに様々な行事が開催されます。',
          [Language.EN]: 'Various seasonal events are held, including the Wind Chime Festival, Tanabata illumination, and autumn foliage light-up.',
          [Language.TH]: 'มีงานตามฤดูกาลต่างๆ รวมถึงเทศกาลระฆังลม การประดับไฟทานาบาตะ และการประดับไฟชมใบไม้แดง',
          [Language.ZH]: '举办山寺风铃节、七夕灯饰、红叶灯饰等各种季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '1,015段の石段巡り、五大堂からの眺望、宝物殿の見学、門前町での和菓子店巡りがおすすめです。',
          [Language.EN]: 'Recommended activities include climbing the 1,015 stone steps, enjoying the view from Godaido Hall, visiting the treasure house, and exploring traditional Japanese sweets shops in the temple town.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ การเดินขึ้นบันไดหิน 1,015 ขั้น ชมวิวจากห้องโถงโกไดโด เยี่ยมชมห้องสมบัติ และสำรวจร้านขนมญี่ปุ่นดั้งเดิมในเมืองหน้าวัด',
          [Language.ZH]: '推荐活动包括攀登1,015级石阶、欣赏五大堂的景色、参观宝物殿、在门前町品尝和菓子。',
        },
        local_cuisine: {
          [Language.JA]: '山形そば、だだちゃ豆、芋煮、山寺特製の和菓子が名物です。',
          [Language.EN]: 'Local specialties include Yamagata soba noodles, dadacha-mame edamame, imoni stew, and Yamadera\'s special Japanese sweets.',
          [Language.TH]: 'อาหารพิเศษประจำท้องถิ่น ได้แก่ โซบะยามากาตะ ถั่วแระญี่ปุ่นดาดาชามาเมะ สตูอิโมนิ และขนมญี่ปุ่นพิเศษของยามาเดระ',
          [Language.ZH]: '当地特产包括山形荞麦面、茶豆、芋头炖煮和山寺特制和菓子。',
        },
        access: {
          [Language.JA]: 'JR山形駅から仙山線で約20分。山寺駅から徒歩で約10分です。',
          [Language.EN]: 'About 20 minutes from JR Yamagata Station by Senzan Line. 10 minutes walk from Yamadera Station.',
          [Language.TH]: 'ใช้เวลาประมาณ 20 นาทีจากสถานี JR ยามากาตะโดยรถไฟสายเซ็นซัง เดิน 10 นาทีจากสถานียามาเดระ',
          [Language.ZH]: '从JR山形站乘坐仙山线约20分钟。从山寺站步行约10分钟。',
        },
        image: 'https://picsum.photos/seed/yamadera-temple/600/300',
      },
      {
        id: 'kakunodate',
        name: {
          [Language.JA]: '角館',
          [Language.EN]: 'Kakunodate',
          [Language.TH]: 'คาคุโนดาเตะ',
          [Language.ZH]: '角馆',
        },
        description: {
          [Language.JA]: '江戸時代の武家屋敷が良好に保存された「みちのくの小京都」。春の桜と武家屋敷のコントラストが美しい城下町です。',
          [Language.EN]: 'Known as the "Little Kyoto of Michinoku," with well-preserved samurai residences from the Edo period. A castle town beautiful for its contrast of spring cherry blossoms and samurai houses.',
          [Language.TH]: 'รู้จักในนาม "เกียวโตน้อยแห่งมิชิโนคุ" มีบ้านซามูไรสมัยเอโดะที่ได้รับการอนุรักษ์อย่างดี เป็นเมืองปราสาทที่สวยงามด้วยความตัดกันของดอกซากุระในฤดูใบไม้ผลิและบ้านซามูไร',
          [Language.ZH]: '被称为"陆奥小京都"，完好保存着江户时代的武家宅邸。春季樱花与武家宅邸的对比美丽的城下町。',
        },
        history: {
          [Language.JA]: '1620年に佐竹氏の支城として開かれ、武家文化が栄えました。現在も当時の町割りや建築が残り、江戸時代の面影を今に伝えています。',
          [Language.EN]: 'Established in 1620 as a subsidiary castle town of the Satake clan, samurai culture flourished here. The original town layout and architecture remain, preserving the atmosphere of the Edo period.',
          [Language.TH]: 'ก่อตั้งในปี 1620 ในฐานะเมืองปราสาทย่อยของตระกูลซาตาเคะ วัฒนธรรมซามูไรเจริญรุ่งเรืองที่นี่ ผังเมืองและสถาปัตยกรรมดั้งเดิมยังคงอยู่ รักษาบรรยากาศของสมัยเอโดะไว้',
          [Language.ZH]: '1620年作为佐竹氏的支城开设，武家文化繁荣。现在仍保留着当时的町割和建筑，传承着江户时代的风貌。',
        },
        culture_festivals: {
          [Language.JA]: '桜まつりは有名で、武家屋敷通りのしだれ桜は必見。秋には伝統工芸品の展示会なども開催されます。',
          [Language.EN]: 'Famous for its Cherry Blossom Festival, with must-see weeping cherry trees along Samurai District Street. Traditional craft exhibitions are held in autumn.',
          [Language.TH]: 'มีชื่อเสียงจากเทศกาลดอกซากุระ โดยเฉพาะต้นซากุระห้อยที่ถนนย่านซามูไรที่ไม่ควรพลาด มีการจัดแสดงงานฝีมือดั้งเดิมในฤดูใบไม้ร่วง',
          [Language.ZH]: '樱花节闻名，武家宅邸街的垂枝樱花是必看景点。秋季还举办传统工艺品展览会。',
        },
        things_to_do: {
          [Language.JA]: '武家屋敷の見学、伝統工芸の体験、桜並木の散策、近隣の温泉めぐりがおすすめです。',
          [Language.EN]: 'Recommended activities include touring samurai residences, experiencing traditional crafts, strolling through cherry blossom-lined streets, and visiting nearby hot springs.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เที่ยวชมบ้านซามูไร สัมผัสประสบการณ์งานฝีมือดั้งเดิม เดินเล่นตามถนนที่เรียงรายด้วยต้นซากุระ และเยี่ยมชมบ่อน้ำร้อนในบริเวณใกล้เคียง',
          [Language.ZH]: '推荐参观武家宅邸、体验传统工艺、漫步樱花街道、游览周边温泉。',
        },
        local_cuisine: {
          [Language.JA]: '稲庭うどん、きりたんぽ鍋、日本酒、山菜料理が特産。季節の郷土料理も豊富です。',
          [Language.EN]: 'Specialties include Inaniwa udon noodles, Kiritanpo nabe hot pot, sake, and mountain vegetable dishes. Seasonal local dishes are also abundant.',
          [Language.TH]: 'อาหารพิเศษประจำท้องถิ่น ได้แก่ อุด้งอินานิวะ หม้อไฟคิริทันโปะ สาเก และอาหารจากผักป่า มีอาหารท้องถิ่นตามฤดูกาลมากมาย',
          [Language.ZH]: '特产包括稻庭乌冬面、切炭火锅、日本酒、山菜料理。时令乡土料理也很丰富。',
        },
        access: {
          [Language.JA]: '東京から秋田新幹線で約3時間。角館駅から武家屋敷まで徒歩圏内です。',
          [Language.EN]: 'About 3 hours from Tokyo via Akita Shinkansen. The samurai district is within walking distance from Kakunodate Station.',
          [Language.TH]: 'ใช้เวลาประมาณ 3 ชั่วโมงจากโตเกียวโดยรถไฟชินคันเซ็นอากิตะ ย่านซามูไรอยู่ในระยะเดินจากสถานีคาคุโนดาเตะ',
          [Language.ZH]: '从东京乘坐秋田新干线约3小时。从角馆站步行即可到达武家宅邸。',
        },
        image: 'https://picsum.photos/seed/kakunodate/600/300',
      },
      {
        id: 'hirosaki-castle',
        name: {
          [Language.JA]: '弘前城',
          [Language.EN]: 'Hirosaki Castle',
          [Language.TH]: 'ปราสาทฮิโรซากิ',
          [Language.ZH]: '弘前城',
        },
        description: {
          [Language.JA]: '青森県弘前市にある城。春には日本有数の桜の名所として多くの観光客で賑わい、四季を通じて美しい景観を楽しめます。',
          [Language.EN]: 'A castle in Hirosaki, Aomori. In spring, it is one of Japan\'s most famous cherry blossom viewing spots, attracting many tourists. Beautiful scenery can be enjoyed throughout all four seasons.',
          [Language.TH]: 'ปราสาทในฮิโรซากิ อาโอโมริ ในฤดูใบไม้ผลิ ที่นี่เป็นหนึ่งในจุดชมซากุระที่มีชื่อเสียงที่สุดของญี่ปุ่น ดึงดูดนักท่องเที่ยวจำนวนมาก สามารถเพลิดเพลินกับทิวทัศน์ที่สวยงามได้ตลอดทั้งสี่ฤดู',
          [Language.ZH]: '位于青森县弘前市的城堡。春天是日本最著名的赏樱胜地之一，吸引了许多游客。四季都能欣赏到美丽的景观。',
        },
        history: {
          [Language.JA]: '1611年に津軽氏により築城され、江戸時代を通じて津軽藩の居城として栄えました。現存する天守は1810年に再建されたものです。',
          [Language.EN]: 'Built in 1611 by the Tsugaru clan, it flourished as their seat of power throughout the Edo period. The current castle tower was rebuilt in 1810.',
          [Language.TH]: 'สร้างขึ้นในปี 1611 โดยตระกูลสึงารุ เจริญรุ่งเรืองในฐานะที่ประทับของพวกเขาตลอดสมัยเอโดะ หอคอยปราสาทปัจจุบันได้รับการสร้างใหม่ในปี 1810',
          [Language.ZH]: '1611年由津轻氏建造，在整个江户时代作为津轻藩的居城而繁荣。现存的天守是1810年重建的。',
        },
        culture_festivals: {
          [Language.JA]: '弘前さくらまつり、弘前城菊と紅葉まつり、冬には弘前城雪燈籠まつりが開催され、季節ごとに異なる魅力を楽しめます。',
          [Language.EN]: 'The castle hosts various seasonal festivals: Hirosaki Cherry Blossom Festival in spring, Chrysanthemum and Autumn Leaves Festival, and Snow Lantern Festival in winter.',
          [Language.TH]: 'ปราสาทจัดเทศกาลตามฤดูกาลต่างๆ: เทศกาลดอกซากุระฮิโรซากิในฤดูใบไม้ผลิ เทศกาลดอกเบญจมาศและใบไม้แดง และเทศกาลโคมไฟหิมะในฤดูหนาว',
          [Language.ZH]: '举办弘前樱花节、弘前城菊花与红叶节，冬季有弘前城雪灯笼节，每个季节都能享受不同的魅力。',
        },
        things_to_do: {
          [Language.JA]: '天守閣の見学、桜の時期の花見、藩政時代の武具・調度品の展示がある弘前市立博物館の見学、周辺の武家屋敷めぐりがおすすめです。',
          [Language.EN]: 'Recommended activities include visiting the castle tower, cherry blossom viewing in season, exploring the Hirosaki City Museum with its feudal-era artifacts, and touring nearby samurai residences.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมหอคอยปราสาท ชมดอกซากุระตามฤดูกาล สำรวจพิพิธภัณฑ์เมืองฮิโรซากิที่มีสิ่งประดิษฐ์สมัยศักดินา และเที่ยวชมบ้านซามูไรในบริเวณใกล้เคียง',
          [Language.ZH]: '推荐参观天守阁、樱花季赏樱、参观展示藩政时代武具和陈设品的弘前市立博物馆、游览周边武家宅邸。',
        },
        local_cuisine: {
          [Language.JA]: '津軽そば、りんご料理、津軽の郷土料理。特に弘前産のりんごを使用したスイーツや加工品が人気です。',
          [Language.EN]: 'Local specialties include Tsugaru soba noodles, apple dishes, and regional Tsugaru cuisine. Sweets and products made from local Hirosaki apples are particularly popular.',
          [Language.TH]: 'อาหารพิเศษประจำท้องถิ่น ได้แก่ โซบะสึงารุ อาหารจากแอปเปิ้ล และอาหารท้องถิ่นสึงารุ ขนมและผลิตภัณฑ์ที่ทำจากแอปเปิ้ลฮิโรซากิท้องถิ่นเป็นที่นิยมเป็นพิเศษ',
          [Language.ZH]: '当地特色包括津轻荞麦面、苹果料理和津轻乡土料理。特别是使用弘前产苹果制作的甜点和加工品很受欢迎。',
        },
        access: {
          [Language.JA]: 'JR弘前駅からバスで約15分。弘前公園（弘前城）下車すぐです。',
          [Language.EN]: 'About 15 minutes by bus from JR Hirosaki Station. The castle is right at the Hirosaki Park bus stop.',
          [Language.TH]: 'ใช้เวลาประมาณ 15 นาทีโดยรถบัสจากสถานี JR ฮิโรซากิ ปราสาทอยู่ติดกับป้ายรถบัสสวนฮิโรซากิ',
          [Language.ZH]: '从JR弘前站乘巴士约15分钟。在弘前公园（弘前城）站下车即到。',
        },
        image: 'https://picsum.photos/seed/hirosaki-castle/600/300',
      },
      {
        id: 'lake-towada',
        name: {
          [Language.JA]: '十和田湖',
          [Language.EN]: 'Lake Towada',
          [Language.TH]: 'ทะเลสาบโทวาดะ',
          [Language.ZH]: '十和田湖',
        },
        description: {
          [Language.JA]: '青森県と秋田県にまたがるカルデラ湖。深い青色の湖水と周囲の紅葉が織りなす景観は絶景です。',
          [Language.EN]: 'A caldera lake straddling Aomori and Akita prefectures. The deep blue waters and surrounding autumn foliage create breathtaking scenery.',
          [Language.TH]: 'ทะเลสาบปล่องภูเขาไฟที่คร่อมระหว่างจังหวัดอาโอโมริและอากิตะ น้ำสีน้ำเงินเข้มและใบไม้เปลี่ยนสีโดยรอบสร้างทิวทัศน์ที่งดงามตระการตา',
          [Language.ZH]: '横跨青森县和秋田县的破火山口湖。深蓝色的湖水与周围的红叶编织出绝美景观。',
        },
        history: {
          [Language.JA]: '約2万年前の火山活動によって形成された二重カルデラ湖で、1936年に十和田八幡平国立公園に指定されました。',
          [Language.EN]: 'Formed by volcanic activity about 20,000 years ago as a double caldera lake, it was designated as part of Towada-Hachimantai National Park in 1936.',
          [Language.TH]: 'ก่อตัวจากกิจกรรมภูเขาไฟเมื่อประมาณ 20,000 ปีก่อนเป็นทะเลสาบปล่องภูเขาไฟซ้อน ได้รับการกำหนดให้เป็นส่วนหนึ่งของอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1936',
          [Language.ZH]: '约2万年前由火山活动形成的双重破火山口湖，1936年被指定为十和田八幡平国立公园的一部分。',
        },
        culture_festivals: {
          [Language.JA]: '十和田湖夏祭り、十和田湖冬物語など、季節ごとに様々なイベントが開催されます。',
          [Language.EN]: 'Various seasonal events are held, including the Lake Towada Summer Festival and Lake Towada Winter Story.',
          [Language.TH]: 'มีงานตามฤดูกาลต่างๆ รวมถึงเทศกาลฤดูร้อนทะเลสาบโทวาดะและเทศกาลฤดูหนาวทะเลสาบโทวาดะ',
          [Language.ZH]: '举办十和田湖夏季节、十和田湖冬季物语等各种季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船での湖上観光、乙女の像の見学、奥入瀬渓流散策、キャンプ、紅葉狩りがおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, visiting the Maiden Statue, hiking the Oirase Stream, camping, and autumn leaf viewing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว เยี่ยมชมรูปปั้นหญิงสาว เดินป่าตามลำธารโออิราเสะ ตั้งแคมป์ และชมใบไม้เปลี่ยนสี',
          [Language.ZH]: '推荐乘游览船观光、参观乙女像、漫步奥入濑溪流、露营、赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '十和田湖ひめます、山の幸を使った料理、きりたんぽ鍋などが人気です。',
          [Language.EN]: 'Popular dishes include Lake Towada himemasu (kokanee salmon), mountain ingredient dishes, and Kiritanpo hot pot.',
          [Language.TH]: 'อาหารยอดนิยม ได้แก่ ปลาแซลมอนโคคานีจากทะเลสาบโทวาดะ อาหารจากวัตถุดิบจากภูเขา และหม้อไฟคิริทันโปะ',
          [Language.ZH]: '十和田湖姬鱒鱼、山珍料理、切炭火锅等很受欢迎。',
        },
        access: {
          [Language.JA]: '十和田市からバスで約2時間。レンタカーでの観光がおすすめです。',
          [Language.EN]: 'About 2 hours by bus from Towada City. Rental car is recommended for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงโดยรถบัสจากเมืองโทวาดะ แนะนำให้เช่ารถยนต์สำหรับการเที่ยวชม',
          [Language.ZH]: '从十和田市乘巴士约2小时。推荐租车观光。',
        },
        image: 'https://picsum.photos/seed/lake-towada/600/300',
      },
      {
        id: 'ginzan-onsen',
        name: {
          [Language.JA]: '銀山温泉',
          [Language.EN]: 'Ginzan Onsen',
          [Language.TH]: 'กินซังออนเซ็น',
          [Language.ZH]: '银山温泉',
        },
        description: {
          [Language.JA]: '大正ロマン漂う木造旅館が川沿いに並ぶ、山形県を代表する温泉地。冬の雪景色が特に美しいことで知られています。',
          [Language.EN]: 'A famous hot spring town in Yamagata, lined with nostalgic wooden inns along a river. Renowned for its beautiful snowy scenery in winter.',
          [Language.TH]: 'เมืองออนเซ็นชื่อดังในจังหวัดยามากาตะ มีเรียวกังไม้โบราณเรียงรายริมลำธาร มีชื่อเสียงเรื่องทิวทัศน์หิมะในฤดูหนาวที่สวยงาม',
          [Language.ZH]: '山形县著名的温泉地，河畔排列着充满大正浪漫风情的木造旅馆。以冬季雪景尤为著名。',
        },
        history: {
          [Language.JA]: '江戸時代初期に銀鉱山の発見とともに温泉地として発展。大正時代に現在のような温泉街が形成されました。',
          [Language.EN]: 'Developed as a hot spring town after the discovery of a silver mine in the early Edo period. The current townscape was formed in the Taisho era.',
          [Language.TH]: 'พัฒนาเป็นเมืองออนเซ็นหลังจากค้นพบเหมืองเงินในต้นสมัยเอโดะ เมืองออนเซ็นในรูปแบบปัจจุบันเกิดขึ้นในยุคไทโช',
          [Language.ZH]: '江户时代初期因发现银矿而发展为温泉地。大正时代形成了如今的温泉街景。',
        },
        culture_festivals: {
          [Language.JA]: '冬の雪灯籠まつりや、浴衣でのそぞろ歩きが名物。温泉街全体がノスタルジックな雰囲気に包まれます。',
          [Language.EN]: 'Famous for the winter snow lantern festival and strolling the town in yukata. The whole town exudes a nostalgic atmosphere.',
          [Language.TH]: 'มีชื่อเสียงเรื่องเทศกาลโคมไฟหิมะในฤดูหนาว และการเดินเล่นในชุดยูกาตะ บรรยากาศเมืองเต็มไปด้วยความย้อนยุค',
          [Language.ZH]: '冬季雪灯笼节和穿浴衣漫步温泉街是特色。整个温泉街充满怀旧氛围。',
        },
        things_to_do: {
          [Language.JA]: '温泉旅館での宿泊、足湯体験、川沿いの散策、地元グルメの食べ歩き、冬のライトアップ鑑賞がおすすめです。',
          [Language.EN]: 'Recommended activities include staying at a ryokan, enjoying foot baths, strolling along the river, sampling local delicacies, and viewing winter illuminations.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ พักเรียวกัง แช่เท้าในบ่อน้ำร้อน เดินเล่นริมลำธาร ชิมอาหารท้องถิ่น และชมไฟประดับฤดูหนาว',
          [Language.ZH]: '推荐住宿温泉旅馆、体验足浴、沿河散步、品尝当地美食、欣赏冬季灯饰。',
        },
        local_cuisine: {
          [Language.JA]: '山形牛、玉こんにゃく、そば、地酒など、山形ならではの味覚が楽しめます。',
          [Language.EN]: 'Enjoy Yamagata beef, tama-konnyaku, soba noodles, and local sake unique to Yamagata.',
          [Language.TH]: 'เพลิดเพลินกับเนื้อวากิวยามากาตะ ลูกบุกซอสโชยุ โซบะ และสาเกท้องถิ่น',
          [Language.ZH]: '可品尝山形牛肉、玉蒟蒻、荞麦面和山形地酒等特色美食。',
        },
        access: {
          [Language.JA]: 'JR大石田駅からバスで約40分。冬季は積雪のためアクセスに注意が必要です。',
          [Language.EN]: 'About 40 minutes by bus from JR Oishida Station. Note that access may be affected by heavy snow in winter.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR โออิชิดะ ฤดูหนาวควรระวังหิมะตกหนัก',
          [Language.ZH]: '从JR大石田站乘巴士约40分钟。冬季因大雪需注意交通状况。',
        },
        image: 'https://picsum.photos/seed/ginzan-onsen/600/300',
      },
      {
        id: 'oirase-stream',
        name: {
          [Language.JA]: '奥入瀬渓流',
          [Language.EN]: 'Oirase Stream',
          [Language.TH]: 'ลำธารโออิราเสะ',
          [Language.ZH]: '奥入濑溪流',
        },
        description: {
          [Language.JA]: '十和田湖から流れ出る清流で、青森県を代表する景勝地。四季折々の美しい渓谷美が魅力です。',
          [Language.EN]: 'A pristine stream flowing from Lake Towada, one of Aomori\'s most scenic spots. Known for its beautiful gorge views throughout the seasons.',
          [Language.TH]: 'ลำธารใสสะอาดที่ไหลจากทะเลสาบโทวาดะ หนึ่งในสถานที่ทิวทัศน์สวยที่สุดของอาโอโมริ มีชื่อเสียงด้านวิวหุบเขาที่สวยงามตลอดทั้งปี',
          [Language.ZH]: '从十和田湖流出的清流，是青森县代表性的景胜地。四季都有美丽的溪谷景观。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の道として栄え、1949年に十和田八幡平国立公園の一部として指定されました。',
          [Language.EN]: 'Historically prosperous as a mountain pilgrimage route, it was designated as part of Towada-Hachimantai National Park in 1949.',
          [Language.TH]: 'รุ่งเรืองในฐานะเส้นทางแสวงบุญบนภูเขามาตั้งแต่โบราณ ได้รับการกำหนดให้เป็นส่วนหนึ่งของอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1949',
          [Language.ZH]: '自古以来作为山岳信仰之路而繁荣，1949年被指定为十和田八幡平国立公园的一部分。',
        },
        culture_festivals: {
          [Language.JA]: '新緑まつりや紅葉まつりが開催され、ライトアップされた渓流の風景は幻想的です。',
          [Language.EN]: 'Fresh Green Festival and Autumn Leaves Festival are held, featuring magical illuminated views of the stream.',
          [Language.TH]: 'มีเทศกาลใบไม้เขียวและเทศกาลใบไม้แดง โดยมีการประดับไฟลำธารที่สร้างบรรยากาศเหมือนเทพนิยาย',
          [Language.ZH]: '举办新绿节和红叶节，溪流的夜间灯光营造出梦幻般的景色。',
        },
        things_to_do: {
          [Language.JA]: '渓流沿いのトレッキング、滝巡り、バードウォッチング、写真撮影、紅葉狩りがおすすめです。',
          [Language.EN]: 'Recommended activities include stream-side trekking, waterfall viewing, bird watching, photography, and autumn leaf viewing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินป่าริมลำธาร ชมน้ำตก ดูนก ถ่ายภาพ และชมใบไม้แดง',
          [Language.ZH]: '推荐沿溪徒步、观赏瀑布、观鸟、摄影和赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩魚の塩焼き、十和田バラ焼きなど、地元の食材を活かした料理が楽しめます。',
          [Language.EN]: 'Enjoy local dishes featuring mountain vegetables, grilled char fish, and Towada bara-yaki (grilled beef and vegetables).',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่นที่ใช้ผักป่า ปลาชาร์ย่าง และโทวาดะบาระยากิ (เนื้อวัวและผักย่าง)',
          [Language.ZH]: '可以品尝到山菜料理、岩鱼盐烤、十和田玫瑰烤肉等当地食材的美食。',
        },
        access: {
          [Language.JA]: '十和田湖から八甲田方面へ向かう国道102号線沿い。バスや観光タクシーでの観光が便利です。',
          [Language.EN]: 'Located along National Route 102 from Lake Towada towards Hakkoda. Tour buses and taxis provide convenient access.',
          [Language.TH]: 'ตั้งอยู่ริมทางหลวงแผ่นดินหมายเลข 102 จากทะเลสาบโทวาดะไปทางฮักโคดะ สะดวกในการเดินทางด้วยรถบัสทัวร์และแท็กซี่',
          [Language.ZH]: '位于从十和田湖通往八甲田的102号国道沿线。乘坐观光巴士或出租车很方便。',
        },
        image: 'https://picsum.photos/seed/oirase-stream/600/300',
      },
      {
        id: 'mount-hakkoda',
        name: {
          [Language.JA]: '八甲田山',
          [Language.EN]: 'Mount Hakkoda',
          [Language.TH]: 'ภูเขาฮักโคดะ',
          [Language.ZH]: '八甲田山',
        },
        description: {
          [Language.JA]: '青森市の南に位置する山群。冬のスキー、夏のトレッキング、紅葉狩りと一年中楽しめる山岳リゾートです。',
          [Language.EN]: 'A mountain range south of Aomori City. A year-round mountain resort offering winter skiing, summer trekking, and autumn leaf viewing.',
          [Language.TH]: 'เทือกเขาทางตอนใต้ของเมืองอาโอโมริ เป็นรีสอร์ทบนภูเขาที่สนุกได้ตลอดปี ทั้งสกีในฤดูหนาว เดินป่าในฤดูร้อน และชมใบไม้เปลี่ยนสีในฤดูใบไม้ร่วง',
          [Language.ZH]: '位于青森市南部的山群。是一年四季都可享受的山岳度假胜地，冬季滑雪、夏季徒步、秋季赏红叶。',
        },
        history: {
          [Language.JA]: '明治時代に起きた八甲田雪中行軍遭難事件で知られ、その後スキー場として開発。現在は観光地として人気を集めています。',
          [Language.EN]: 'Known for the tragic Hakkoda Mountains incident during the Meiji period, later developed as a ski resort. Now a popular tourist destination.',
          [Language.TH]: 'เป็นที่รู้จักจากโศกนาฏกรรมในเทือกเขาฮักโคดะในสมัยเมจิ ต่อมาได้รับการพัฒนาเป็นรีสอร์ทสกี ปัจจุบันเป็นสถานที่ท่องเที่ยวยอดนิยม',
          [Language.ZH]: '以明治时代发生的八甲田雪中行军遇难事件而闻名，后来开发为滑雪场。现在是受欢迎的旅游目的地。',
        },
        culture_festivals: {
          [Language.JA]: '八甲田山スキーフェスティバル、山開き祭り、紅葉まつりなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Hakkoda Ski Festival, Mountain Opening Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล เช่น เทศกาลสกีฮักโคดะ เทศกาลเปิดภูเขา และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办八甲田山滑雪节、山开祭、红叶节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: 'スキー、スノーボード、ロープウェイでの山頂散策、温泉入浴、トレッキング、樹氷見学がおすすめです。',
          [Language.EN]: 'Recommended activities include skiing, snowboarding, ropeway sightseeing, hot spring bathing, trekking, and viewing snow monsters.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เล่นสกี สโนว์บอร์ด ชมวิวจากกระเช้าลอยฟ้า แช่ออนเซ็น เดินป่า และชมต้นไม้น้ำแข็ง',
          [Language.ZH]: '推荐滑雪、单板滑雪、乘缆车游览山顶、泡温泉、徒步、观赏树冰。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、十和田バラ焼き、地元の温泉宿の郷土料理が楽しめます。',
          [Language.EN]: 'Enjoy mountain vegetable dishes, mushroom dishes, Towada bara-yaki, and local ryokan cuisine.',
          [Language.TH]: 'เพลิดเพลินกับอาหารจากผักป่า อาหารจากเห็ด โทวาดะบาระยากิ และอาหารท้องถิ่นในเรียวกัง',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、十和田玫瑰烤肉和当地温泉旅馆的乡土料理。',
        },
        access: {
          [Language.JA]: '青森市から車やバスで約1時間。ロープウェイは通年営業しています。',
          [Language.EN]: 'About 1 hour by car or bus from Aomori City. The ropeway operates year-round.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถยนต์หรือรถบัสจากเมืองอาโอโมริ กระเช้าลอยฟ้าเปิดให้บริการตลอดปี',
          [Language.ZH]: '从青森市乘车或巴士约1小时。缆车全年运营。',
        },
        image: 'https://picsum.photos/seed/mount-hakkoda/600/300',
      },
      {
        id: 'chusonji',
        name: {
          [Language.JA]: '中尊寺',
          [Language.EN]: 'Chusonji Temple',
          [Language.TH]: 'วัดจูซนจิ',
          [Language.ZH]: '中尊寺',
        },
        description: {
          [Language.JA]: '平泉の世界遺産。金色堂をはじめとする平安時代の建造物群は、奥州藤原氏の栄華を今に伝えています。',
          [Language.EN]: 'A World Heritage site in Hiraizumi. The Heian period buildings, including the Golden Hall, preserve the glory of the Northern Fujiwara clan.',
          [Language.TH]: 'มรดกโลกในฮิราอิซูมิ อาคารสมัยเฮอันรวมถึงศาลาทองคำ แสดงถึงความรุ่งเรืองของตระกูลฟุจิวาระฝ่ายเหนือ',
          [Language.ZH]: '平泉的世界遗产。以金色堂为首的平安时代建筑群，传承着奥州藤原氏的荣华。',
        },
        history: {
          [Language.JA]: '850年に開山。12世紀には奥州藤原氏の庇護を受け、東北随一の寺院として栄えました。',
          [Language.EN]: 'Founded in 850. Flourished in the 12th century under the patronage of the Northern Fujiwara clan as the premier temple in Tohoku.',
          [Language.TH]: 'ก่อตั้งในปี 850 เจริญรุ่งเรืองในศตวรรษที่ 12 ภายใต้การอุปถัมภ์ของตระกูลฟุจิวาระฝ่ายเหนือในฐานะวัดชั้นนำในโทโฮคุ',
          [Language.ZH]: '850年开山。12世纪在奥州藤原氏的庇护下，作为东北首屈一指的寺院而繁荣。',
        },
        culture_festivals: {
          [Language.JA]: '初詣、藤原まつり、紅葉ライトアップなど、年間を通じて様々な行事が開催されます。',
          [Language.EN]: 'Various events throughout the year including New Year visits, Fujiwara Festival, and autumn foliage illuminations.',
          [Language.TH]: 'มีงานต่างๆ ตลอดทั้งปี รวมถึงการเยี่ยมชมปีใหม่ เทศกาลฟุจิวาระ และการประดับไฟใบไม้แดง',
          [Language.ZH]: '全年举办初诣、藤原节、红叶灯饰等各种活动。',
        },
        things_to_do: {
          [Language.JA]: '金色堂の見学、毛越寺との寺院巡り、宝物館での国宝鑑賞、境内での座禅体験がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting the Golden Hall, temple hopping with Motsuji Temple, viewing National Treasures at the museum, and experiencing zazen meditation.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมศาลาทองคำ เที่ยวชมวัดร่วมกับวัดโมซึจิ ชมสมบัติแห่งชาติที่พิพิธภัณฑ์ และทดลองนั่งสมาธิแบบเซน',
          [Language.ZH]: '推荐参观金色堂、与毛越寺一同游览寺院、在宝物馆欣赏国宝、体验境内坐禅。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、もち料理、わんこそば、地元の郷土料理を楽しめます。',
          [Language.EN]: 'Enjoy Buddhist vegetarian cuisine, mochi dishes, wanko soba noodles, and local specialties.',
          [Language.TH]: 'เพลิดเพลินกับอาหารเจแบบพุทธ อาหารจากโมจิ บะหมี่วันโกะโซบะ และอาหารพิเศษท้องถิ่น',
          [Language.ZH]: '可以品尝精进料理、年糕料理、碗仓荞麦面和当地乡土料理。',
        },
        access: {
          [Language.JA]: 'JR平泉駅から徒歩約20分。バスも運行しています。',
          [Language.EN]: 'About 20 minutes on foot from JR Hiraizumi Station. Bus service is also available.',
          [Language.TH]: 'ใช้เวลาเดินประมาณ 20 นาทีจากสถานี JR ฮิราอิซูมิ มีบริการรถบัสด้วย',
          [Language.ZH]: '从JR平泉站步行约20分钟。也有巴士运行。',
        },
        image: 'https://picsum.photos/seed/chusonji-temple/600/300',
      },
      {
        id: 'motsuji',
        name: {
          [Language.JA]: '毛越寺',
          [Language.EN]: 'Motsuji Temple',
          [Language.TH]: 'วัดโมสึจิ',
          [Language.ZH]: '毛越寺',
        },
        description: {
          [Language.JA]: '平安時代の浄土庭園が見事に復元された世界遺産。大泉が池を中心とした庭園は、往時の優美さを今に伝えています。',
          [Language.EN]: 'A World Heritage site featuring a beautifully restored Heian period Pure Land garden. The garden centered around Oizumi ga Ike pond conveys the elegance of ancient times.',
          [Language.TH]: 'มรดกโลกที่มีการบูรณะสวนแบบโจโดจากสมัยเฮอันอย่างงดงาม สวนที่มีสระโออิซึมิกะอิเกะเป็นศูนย์กลางแสดงให้เห็นถึงความงามอันประณีตจากอดีต',
          [Language.ZH]: '世界遗产，完美复原了平安时代的净土庭园。以大泉池为中心的庭园传承着往昔的优美。',
        },
        history: {
          [Language.JA]: '850年に円仁により創建。12世紀には奥州藤原氏の庇護により、東北有数の寺院として栄えました。',
          [Language.EN]: 'Founded in 850 by Ennin. Flourished as one of the major temples in Tohoku under the patronage of the Northern Fujiwara clan in the 12th century.',
          [Language.TH]: 'ก่อตั้งในปี 850 โดยเอนนิน เจริญรุ่งเรืองเป็นหนึ่งในวัดสำคัญของโทโฮคุภายใต้การอุปถัมภ์ของตระกูลฟุจิวาระฝ่ายเหนือในศตวรรษที่ 12',
          [Language.ZH]: '850年由圆仁创建。12世纪在奥州藤原氏的庇护下，作为东北著名寺院而繁荣。',
        },
        culture_festivals: {
          [Language.JA]: '毛越寺大祭、蓮まつり、薪能、延年の舞など、伝統的な行事が数多く開催されます。',
          [Language.EN]: 'Many traditional events are held including the Motsuji Grand Festival, Lotus Festival, Takigi Noh performances, and Ennen no Mai ritual dances.',
          [Language.TH]: 'มีงานประเพณีมากมาย เช่น เทศกาลใหญ่โมสึจิ เทศกาลดอกบัว การแสดงโนะกลางแจ้ง และการเต้นรำพิธีกรรมเอนเนนโนะไม',
          [Language.ZH]: '举办毛越寺大祭、莲花节、薪能、延年舞等众多传统活动。',
        },
        things_to_do: {
          [Language.JA]: '浄土庭園の散策、朝の勤行体験、座禅体験、国宝館見学、蓮の花観賞がおすすめです。',
          [Language.EN]: 'Recommended activities include strolling in the Pure Land garden, experiencing morning Buddhist services, zazen meditation, visiting the National Treasure Hall, and viewing lotus flowers.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินเล่นในสวนโจโด ร่วมพิธีสวดมนต์เช้า นั่งสมาธิแบบเซน เยี่ยมชมหอสมบัติแห่งชาติ และชมดอกบัว',
          [Language.ZH]: '推荐游览净土庭园、体验晨间功课、体验坐禅、参观国宝馆、观赏莲花。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、もち料理、平泉メロン、しいたけ料理など、地元の食材を使った料理が楽しめます。',
          [Language.EN]: 'Enjoy local dishes including Buddhist vegetarian cuisine, mochi dishes, Hiraizumi melons, and shiitake mushroom dishes.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารเจแบบพุทธ อาหารจากโมจิ เมลอนฮิราอิซูมิ และอาหารจากเห็ดชิตาเกะ',
          [Language.ZH]: '可以品尝精进料理、年糕料理、平泉甜瓜、香菇料理等使用当地食材的美食。',
        },
        access: {
          [Language.JA]: 'JR平泉駅から徒歩約7分。中尊寺と合わせて観光するのがおすすめです。',
          [Language.EN]: 'About 7 minutes on foot from JR Hiraizumi Station. Recommended to visit together with Chusonji Temple.',
          [Language.TH]: 'ใช้เวลาเดินประมาณ 7 นาทีจากสถานี JR ฮิราอิซูมิ แนะนำให้เที่ยวพร้อมกับวัดจูซนจิ',
          [Language.ZH]: '从JR平泉站步行约7分钟。建议与中尊寺一同游览。',
        },
        image: 'https://picsum.photos/seed/motsuji-temple/600/300',
      },
      {
        id: 'mount-zao',
        name: {
          [Language.JA]: '蔵王山',
          [Language.EN]: 'Mount Zao',
          [Language.TH]: 'ภูเขาไซโย',
          [Language.ZH]: '藏王山',
        },
        description: {
          [Language.JA]: '宮城県と山形県の県境に位置する火山。スキー場や温泉で有名で、冬の樹氷は特に人気の観光スポットです。',
          [Language.EN]: 'A volcanic mountain range on the border of Miyagi and Yamagata prefectures. Famous for its ski resort and hot springs, especially the winter "snow monsters".',
          [Language.TH]: 'เทือกเขาภูเขาไฟบนพรมแดนระหว่างจังหวัดมิยางิและยามากาตะ มีชื่อเสียงด้านรีสอร์ทสกีและน้ำพุร้อน โดยเฉพาะ "ปีศาจหิมะ" ในฤดูหนาว',
          [Language.ZH]: '位于宫城县和山形县县境的火山。以滑雪场和温泉闻名，冬季的树冰特别受欢迎。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇拝され、1935年に蔵王国定公園に指定されました。',
          [Language.EN]: 'Long worshipped as a sacred mountain, it was designated as Zao Quasi-National Park in 1935.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน ได้รับการกำหนดให้เป็นอุทยานกึ่งแห่งชาติไซโยในปี 1935',
          [Language.ZH]: '自古以来就作为山岳信仰的对象受到崇拜，1935年被指定为藏王国定公园。',
        },
        culture_festivals: {
          [Language.JA]: 'スキーフェスティバル、樹氷ライトアップ、夏山開き、紅葉まつりなど、四季折々のイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Ski Festival, Snow Monster Light-up, Summer Mountain Opening, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล เช่น เทศกาลสกี การประดับไฟปีศาจหิมะ พิธีเปิดภูเขาฤดูร้อน และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办滑雪节、树冰灯光秀、夏山开山、红叶节等四季活动。',
        },
        things_to_do: {
          [Language.JA]: 'スキー、スノーボード、御釜（火口湖）見学、温泉巡り、トレッキング、ロープウェイでの空中散歩がおすすめです。',
          [Language.EN]: 'Recommended activities include skiing, snowboarding, visiting the Okama crater lake, hot spring hopping, trekking, and riding the ropeway.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เล่นสกี สโนว์บอร์ด เยี่ยมชมทะเลสาบปล่องภูเขาไฟโอคามะ แช่น้ำพุร้อน เดินป่า และนั่งกระเช้าลอยฟ้า',
          [Language.ZH]: '推荐滑雪、单板滑雪、参观御釜（火口湖）、温泉巡游、徒步、乘缆车空中散步。',
        },
        local_cuisine: {
          [Language.JA]: '蔵王チーズ、こけし餅、山形牛、きのこ料理、温泉粥など、地元の特産品が豊富です。',
          [Language.EN]: 'Rich in local specialties including Zao cheese, kokeshi mochi, Yamagata beef, mushroom dishes, and onsen porridge.',
          [Language.TH]: 'มีอาหารท้องถิ่นมากมาย เช่น ชีสไซโย โมจิโคเคชิ เนื้อวากิวยามากาตะ อาหารจากเห็ด และข้าวต้มน้ำพุร้อน',
          [Language.ZH]: '当地特产丰富，包括藏王奶酪、木偶年糕、山形牛肉、蘑菇料理和温泉粥等。',
        },
        access: {
          [Language.JA]: 'JR山形駅からバスで約40分。蔵王温泉スキー場まではさらにバスで約35分です。',
          [Language.EN]: 'About 40 minutes by bus from JR Yamagata Station. Another 35 minutes by bus to Zao Onsen Ski Resort.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR ยามากาตะ และอีก 35 นาทีโดยรถบัสไปยังรีสอร์ทสกีไซโยออนเซ็น',
          [Language.ZH]: '从JR山形站乘巴士约40分钟。到藏王温泉滑雪场还需乘巴士约35分钟。',
        },
        image: 'https://picsum.photos/seed/mount-zao/600/300',
      },
      {
        id: 'naruko-gorge',
        name: {
          [Language.JA]: '鳴子峡',
          [Language.EN]: 'Naruko Gorge',
          [Language.TH]: 'หุบเขานารุโกะ',
          [Language.ZH]: '鸣子峡',
        },
        description: {
          [Language.JA]: '宮城県を代表する渓谷で、紅葉の名所として知られています。温泉郷としても有名で、数多くの温泉宿が点在しています。',
          [Language.EN]: 'A representative gorge of Miyagi Prefecture, famous for autumn foliage. Also known as a hot spring resort area with numerous onsen inns.',
          [Language.TH]: 'หุบเขาที่เป็นตัวแทนของจังหวัดมิยางิ มีชื่อเสียงด้านใบไม้เปลี่ยนสี และเป็นที่รู้จักในฐานะแหล่งน้ำพุร้อนที่มีเรียวกังออนเซ็นมากมาย',
          [Language.ZH]: '宫城县具代表性的峡谷，以红叶胜地闻名。作为温泉乡也很有名，分布着众多温泉旅馆。',
        },
        history: {
          [Language.JA]: '江戸時代から温泉地として栄え、大正時代には鉄道の開通により観光地としても発展しました。',
          [Language.EN]: 'Flourished as a hot spring resort since the Edo period, and developed as a tourist destination with the opening of railways in the Taisho era.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะแหล่งน้ำพุร้อนตั้งแต่สมัยเอโดะ และพัฒนาเป็นสถานที่ท่องเที่ยวพร้อมกับการเปิดเส้นทางรถไฟในยุคไทโช',
          [Language.ZH]: '自江户时代起就作为温泉地繁荣，大正时代随着铁路开通而发展成为旅游胜地。',
        },
        culture_festivals: {
          [Language.JA]: '鳴子温泉紅葉まつり、こけし祭り、温泉神社例祭など、伝統的な行事が数多く開催されます。',
          [Language.EN]: 'Many traditional events are held including the Naruko Onsen Autumn Leaves Festival, Kokeshi Festival, and Onsen Shrine Festival.',
          [Language.TH]: 'มีงานประเพณีมากมาย เช่น เทศกาลใบไม้แดงนารุโกะออนเซ็น เทศกาลตุ๊กตาโคเคชิ และเทศกาลศาลเจ้าออนเซ็น',
          [Language.ZH]: '举办鸣子温泉红叶节、木偶节、温泉神社例祭等众多传统活动。',
        },
        things_to_do: {
          [Language.JA]: '紅葉狩り、温泉巡り、こけし工房見学、遊歩道散策、足湯体験がおすすめです。',
          [Language.EN]: 'Recommended activities include autumn leaf viewing, hot spring hopping, visiting kokeshi doll workshops, walking the promenade, and enjoying foot baths.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมใบไม้แดง แช่น้ำพุร้อน เยี่ยมชมโรงงานตุ๊กตาโคเคชิ เดินเล่นตามทางเดินชมวิว และแช่เท้าในบ่อน้ำร้อน',
          [Language.ZH]: '推荐赏红叶、温泉巡游、参观木偶工房、漫步步道、体验足浴。',
        },
        local_cuisine: {
          [Language.JA]: '温泉玉子、鳴子そば、きのこ料理、山菜料理など、地元の食材を活かした料理が豊富です。',
          [Language.EN]: 'Rich in local dishes using regional ingredients, including onsen eggs, Naruko soba noodles, mushroom dishes, and mountain vegetable cuisine.',
          [Language.TH]: 'มีอาหารท้องถิ่นที่ใช้วัตถุดิบในพื้นที่มากมาย เช่น ไข่ออนเซ็น โซบะนารุโกะ อาหารจากเห็ด และอาหารจากผักป่า',
          [Language.ZH]: '丰富的当地美食包括温泉蛋、鸣子荞麦面、蘑菇料理、山菜料理等。',
        },
        access: {
          [Language.JA]: 'JR鳴子温泉駅から徒歩約10分。秋の紅葉シーズンは観光バスも運行しています。',
          [Language.EN]: 'About 10 minutes on foot from JR Naruko-Onsen Station. Tourist buses operate during autumn foliage season.',
          [Language.TH]: 'ใช้เวลาเดินประมาณ 10 นาทีจากสถานี JR นารุโกะ-ออนเซ็น มีรถบัสท่องเที่ยวให้บริการในช่วงฤดูใบไม้แดง',
          [Language.ZH]: '从JR鸣子温泉站步行约10分钟。秋季红叶季节有观光巴士运行。',
        },
        image: 'https://picsum.photos/seed/naruko-gorge/600/300',
      },
      {
        id: 'lake-tazawa',
        name: {
          [Language.JA]: '田沢湖',
          [Language.EN]: 'Lake Tazawa',
          [Language.TH]: 'ทะเลสาบทาซาวะ',
          [Language.ZH]: '田泽湖',
        },
        description: {
          [Language.JA]: '日本一の深さを誇る湖で、コバルトブルーの美しい湖面が特徴です。たつこ像や周辺の温泉街も人気の観光スポットです。',
          [Language.EN]: 'Japan\'s deepest lake, characterized by its beautiful cobalt blue waters. The Tatsuko Statue and surrounding hot spring areas are popular tourist spots.',
          [Language.TH]: 'ทะเลสาบที่ลึกที่สุดในญี่ปุ่น มีเอกลักษณ์ด้วยผืนน้ำสีคอบอลต์บลูที่สวยงาม รูปปั้นทัตสึโกะและย่านน้ำพุร้อนโดยรอบเป็นจุดท่องเที่ยวยอดนิยม',
          [Language.ZH]: '日本最深的湖泊，以其美丽的钴蓝色湖面为特征。辰子像和周边温泉街也是受欢迎的观光景点。',
        },
        history: {
          [Language.JA]: '古くから神聖な湖として崇められ、たつこ伝説など多くの伝説が残されています。1905年に観光地として開発が始まりました。',
          [Language.EN]: 'Long revered as a sacred lake with many legends including the Tatsuko legend. Tourism development began in 1905.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะทะเลสาบศักดิ์สิทธิ์มายาวนาน มีตำนานมากมายรวมถึงตำนานทัตสึโกะ การพัฒนาการท่องเที่ยวเริ่มขึ้นในปี 1905',
          [Language.ZH]: '自古以来就被视为神圣的湖泊，留存着辰子传说等众多传说。1905年开始作为旅游地开发。',
        },
        culture_festivals: {
          [Language.JA]: '田沢湖まつり、たつこ祭り、冬の花火大会など、季節ごとに様々なイベントが開催されます。',
          [Language.EN]: 'Various seasonal events are held including the Lake Tazawa Festival, Tatsuko Festival, and winter fireworks display.',
          [Language.TH]: 'มีงานตามฤดูกาลต่างๆ เช่น เทศกาลทะเลสาบทาซาวะ เทศกาลทัตสึโกะ และการแสดงดอกไม้ไฟฤดูหนาว',
          [Language.ZH]: '举办田泽湖节、辰子节、冬季烟花大会等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船での湖上観光、たつこ像の見学、サイクリング、周辺の温泉巡り、カヌー体験がおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, visiting the Tatsuko Statue, cycling, hot spring hopping, and canoeing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว เยี่ยมชมรูปปั้นทัตสึโกะ ปั่นจักรยาน แช่น้ำพุร้อน และพายเรือแคนู',
          [Language.ZH]: '推荐乘游览船观光、参观辰子像、骑行、温泉巡游、体验划独木舟。',
        },
        local_cuisine: {
          [Language.JA]: '湖の幸（ワカサギ、ヒメマス）、きりたんぽ鍋、稲庭うどん、地酒など、秋田の味覚が楽しめます。',
          [Language.EN]: 'Enjoy Akita specialties including lake fish (smelt, kokanee salmon), Kiritanpo hot pot, Inaniwa udon noodles, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารพิเศษของอากิตะ เช่น ปลาจากทะเลสาบ (ปลาแซลมอนโคคานี ปลาเงิน) หม้อไฟคิริทันโปะ อุด้งอินานิวะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝到湖鱼（公鱼、姬鱒）、切炭火锅、稻庭乌冬面、地酒等秋田美食。',
        },
        access: {
          [Language.JA]: 'JR田沢湖駅からバスで約15分。レンタカーでの観光も便利です。',
          [Language.EN]: 'About 15 minutes by bus from JR Tazawako Station. Rental car is also convenient for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 15 นาทีโดยรถบัสจากสถานี JR ทาซาวาโกะ การเช่ารถยนต์ก็สะดวกสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR田泽湖站乘巴士约15分钟。租车观光也很方便。',
        },
        image: 'https://picsum.photos/seed/lake-tazawa/600/300',
      },
      {
        id: 'mount-hayachine',
        name: {
          [Language.JA]: '早池峰山',
          [Language.EN]: 'Mount Hayachine',
          [Language.TH]: 'ภูเขาฮายาชิเนะ',
          [Language.ZH]: '早池峰山',
        },
        description: {
          [Language.JA]: '岩手県の名峰で、貴重な高山植物の宝庫として知られています。早池峰神社の神域としても崇められ、山岳信仰の聖地です。',
          [Language.EN]: 'A famous peak in Iwate Prefecture, known as a treasure trove of rare alpine plants. Revered as the sacred ground of Hayachine Shrine and a site of mountain worship.',
          [Language.TH]: 'ยอดเขาชื่อดังในจังหวัดอิวาเตะ เป็นที่รู้จักในฐานะแหล่งพืชพรรณบนภูเขาที่หายาก ได้รับการเคารพบูชาในฐานะพื้นที่ศักดิ์สิทธิ์ของศาลเจ้าฮายาชิเนะและสถานที่สักการะบูชาภูเขา',
          [Language.ZH]: '岩手县的名峰，以珍稀高山植物的宝库而闻名。作为早池峰神社的神域受到崇敬，是山岳信仰的圣地。',
        },
        history: {
          [Language.JA]: '古来より山岳信仰の対象として崇められ、早池峰神社は平安時代から存在します。高山植物の保護区域として1982年に国定公園に指定されました。',
          [Language.EN]: 'Worshipped as a sacred mountain since ancient times, with Hayachine Shrine dating back to the Heian period. Designated as a Quasi-National Park in 1982 for protecting alpine plants.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาตั้งแต่โบราณ โดยศาลเจ้าฮายาชิเนะมีมาตั้งแต่สมัยเฮอัน ได้รับการกำหนดให้เป็นอุทยานกึ่งแห่งชาติในปี 1982 เพื่อปกป้องพืชพรรณบนภูเขา',
          [Language.ZH]: '自古以来就作为山岳信仰的对象受到崇敬，早池峰神社始建于平安时代。1982年被指定为国定公园，以保护高山植物。',
        },
        culture_festivals: {
          [Language.JA]: '早池峰神社例大祭、早池峰山開き、高山植物観察会など、山にまつわる行事が開催されます。',
          [Language.EN]: 'Mountain-related events are held including the Hayachine Shrine Grand Festival, Mountain Opening Ceremony, and Alpine Plant Observation Tours.',
          [Language.TH]: 'มีงานที่เกี่ยวข้องกับภูเขา เช่น เทศกาลใหญ่ศาลเจ้าฮายาชิเนะ พิธีเปิดภูเขา และทัวร์ชมพืชพรรณบนภูเขา',
          [Language.ZH]: '举办早池峰神社例大祭、早池峰山开山、高山植物观察会等与山有关的活动。',
        },
        things_to_do: {
          [Language.JA]: '山頂からの展望を楽しむ、高山植物の観察、早池峰神社参拝、トレッキング、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include enjoying the summit view, observing alpine plants, visiting Hayachine Shrine, trekking, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมวิวจากยอดเขา สังเกตพืชพรรณบนภูเขา เยี่ยมชมศาลเจ้าฮายาชิเนะ เดินป่า และถ่ายภาพ',
          [Language.ZH]: '推荐欣赏山顶景色、观察高山植物、参拜早池峰神社、徒步、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩手の郷土料理、早池峰山麓の湧き水で作られたそば、地元の食材を使った山の食事が楽しめます。',
          [Language.EN]: 'Enjoy mountain vegetable dishes, Iwate local cuisine, soba noodles made with spring water from Mount Hayachine\'s foothills, and mountain meals using local ingredients.',
          [Language.TH]: 'เพลิดเพลินกับอาหารจากผักป่า อาหารท้องถิ่นอิวาเตะ โซบะที่ทำจากน้ำพุจากเชิงเขาฮายาชิเนะ และอาหารภูเขาที่ใช้วัตถุดิบท้องถิ่น',
          [Language.ZH]: '可以品尝山菜料理、岩手乡土料理、使用早池峰山麓涌水制作的荞麦面和使用当地食材的山间美食。',
        },
        access: {
          [Language.JA]: 'JR花巻駅からバスで約2時間。山開き期間中は登山バスも運行しています。',
          [Language.EN]: 'About 2 hours by bus from JR Hanamaki Station. Hiking buses operate during the mountain opening season.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงโดยรถบัสจากสถานี JR ฮานามากิ มีรถบัสสำหรับนักปีนเขาให้บริการในช่วงเปิดภูเขา',
          [Language.ZH]: '从JR花卷站乘巴士约2小时。山开期间有登山巴士运行。',
        },
        image: 'https://picsum.photos/seed/mount-hayachine/600/300',
      },
      {
        id: 'kakunodate-samurai-district',
        name: {
          [Language.JA]: '角館武家屋敷',
          [Language.EN]: 'Kakunodate Samurai District',
          [Language.TH]: 'ย่านซามูไรคาคุโนดาเตะ',
          [Language.ZH]: '角馆武家宅邸',
        },
        description: {
          [Language.JA]: '江戸時代の武家屋敷が良好に保存された歴史的な町並み。春には桜と黒塀のコントラストが美しく、「みちのくの小京都」と呼ばれています。',
          [Language.EN]: 'A historical district with well-preserved samurai residences from the Edo period. Called "Little Kyoto of Michinoku" for its beautiful contrast of cherry blossoms and black walls in spring.',
          [Language.TH]: 'ย่านประวัติศาสตร์ที่มีบ้านซามูไรสมัยเอโดะที่ได้รับการอนุรักษ์อย่างดี เรียกว่า "เกียวโตน้อยแห่งมิชิโนคุ" จากความงามของดอกซากุระที่ตัดกับกำแพงสีดำในฤดูใบไม้ผลิ',
          [Language.ZH]: '保存完好的江户时代武家宅邸的历史街区。春季樱花与黑墙的对比美丽，被称为"陆奥小京都"。',
        },
        history: {
          [Language.JA]: '1620年に佐竹氏の支城として開かれ、約80戸の武家屋敷が建ち並びました。現在も当時の町割りや建築様式が良く保存されています。',
          [Language.EN]: 'Established in 1620 as a subsidiary castle town of the Satake clan, with about 80 samurai residences. The original town layout and architectural style are well preserved.',
          [Language.TH]: 'ก่อตั้งในปี 1620 ในฐานะเมืองปราสาทย่อยของตระกูลซาตาเคะ มีบ้านซามูไรประมาณ 80 หลัง ผังเมืองดั้งเดิมและรูปแบบสถาปัตยกรรมยังคงได้รับการอนุรักษ์อย่างดี',
          [Language.ZH]: '1620年作为佐竹氏的支城开设，建有约80户武家宅邸。现在仍保存着当时的町割和建筑风格。',
        },
        culture_festivals: {
          [Language.JA]: '桜まつり、武家屋敷ライトアップ、雛めぐり、秋の味覚まつりなど、四季折々の行事が開催されます。',
          [Language.EN]: 'Seasonal events are held including Cherry Blossom Festival, Samurai Residence Light-up, Hina Doll Festival, and Autumn Food Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล เช่น เทศกาลดอกซากุระ การประดับไฟบ้านซามูไร เทศกาลตุ๊กตาฮินะ และเทศกาลอาหารฤดูใบไม้ร่วง',
          [Language.ZH]: '举办樱花节、武家宅邸灯光秀、雏人偶巡游、秋季美食节等四季活动。',
        },
        things_to_do: {
          [Language.JA]: '武家屋敷の見学、歴史資料館の訪問、着物レンタルでの町歩き、伝統工芸品の買い物、庭園散策がおすすめです。',
          [Language.EN]: 'Recommended activities include touring samurai residences, visiting the historical museum, strolling in rental kimono, shopping for traditional crafts, and exploring gardens.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เที่ยวชมบ้านซามูไร เยี่ยมชมพิพิธภัณฑ์ประวัติศาสตร์ เดินเล่นในชุดกิโมโนเช่า ช้อปปิ้งงานฝีมือดั้งเดิม และสำรวจสวน',
          [Language.ZH]: '推荐参观武家宅邸、访问历史资料馆、租借和服漫步、购买传统工艺品、游览庭园。',
        },
        local_cuisine: {
          [Language.JA]: '稲庭うどん、きりたんぽ鍋、山の芋料理、秋田の郷土料理、地酒など、伝統的な味覚が楽しめます。',
          [Language.EN]: 'Enjoy traditional tastes including Inaniwa udon noodles, Kiritanpo hot pot, mountain yam dishes, Akita local cuisine, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับรสชาติดั้งเดิม เช่น อุด้งอินานิวะ หม้อไฟคิริทันโปะ อาหารจากมันภูเขา อาหารท้องถิ่นอากิตะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝稻庭乌冬面、切炭火锅、山药料理、秋田乡土料理、地酒等传统美食。',
        },
        access: {
          [Language.JA]: 'JR角館駅から徒歩約10分。レンタサイクルでの観光も人気です。',
          [Language.EN]: 'About 10 minutes on foot from JR Kakunodate Station. Rental bicycles are also popular for sightseeing.',
          [Language.TH]: 'ใช้เวลาเดินประมาณ 10 นาทีจากสถานี JR คาคุโนดาเตะ การเช่าจักรยานก็เป็นที่นิยมสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR角馆站步行约10分钟。租赁自行车观光也很受欢迎。',
        },
        image: 'https://picsum.photos/seed/kakunodate-samurai/600/300',
      },
      {
        id: 'nyuto-onsen',
        name: {
          [Language.JA]: '乳頭温泉郷',
          [Language.EN]: 'Nyuto Onsen',
          [Language.TH]: 'นิวโตะออนเซ็น',
          [Language.ZH]: '乳头温泉乡',
        },
        description: {
          [Language.JA]: '秋田県の山間にある秘湯の温泉郷。7つの温泉旅館があり、それぞれが独自の泉質と雰囲気を持つ癒しの湯として知られています。',
          [Language.EN]: 'A hidden hot spring village in the mountains of Akita Prefecture. Known for its seven onsen inns, each with unique water properties and atmosphere.',
          [Language.TH]: 'หมู่บ้านน้ำพุร้อนที่ซ่อนตัวอยู่ในหุบเขาของจังหวัดอากิตะ มีชื่อเสียงจากเรียวกังออนเซ็นเจ็ดแห่ง แต่ละแห่งมีคุณสมบัติน้ำและบรรยากาศที่เป็นเอกลักษณ์',
          [Language.ZH]: '位于秋田县山间的秘汤温泉乡。以七个温泉旅馆闻名，每个都以独特的泉质和氛围作为疗养温泉而知名。',
        },
        history: {
          [Language.JA]: '江戸時代から湯治場として栄え、山の麓に点在する温泉は、その歴史と共に独自の文化を育んできました。',
          [Language.EN]: 'Flourishing as a therapeutic bathing destination since the Edo period, the scattered hot springs at the mountain\'s foot have developed their own unique culture throughout history.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะจุดหมายการแช่น้ำเพื่อการบำบัดตั้งแต่สมัยเอโดะ บ่อน้ำพุร้อนที่กระจายอยู่ตามเชิงเขาได้พัฒนาวัฒนธรรมเฉพาะตัวตลอดประวัติศาสตร์',
          [Language.ZH]: '自江户时代起就作为疗养地而繁荣，分布在山麓的温泉随着历史发展出独特的文化。',
        },
        culture_festivals: {
          [Language.JA]: '雪見温泉、新緑の温泉めぐり、紅葉狩りなど、四季折々の温泉体験を楽しむことができます。',
          [Language.EN]: 'Seasonal onsen experiences include snow-viewing baths, spring greenery hot spring tours, and autumn foliage viewing.',
          [Language.TH]: 'ประสบการณ์ออนเซ็นตามฤดูกาล รวมถึงการแช่น้ำชมหิมะ ทัวร์น้ำพุร้อนชมใบไม้เขียว และชมใบไม้แดง',
          [Language.ZH]: '可以享受赏雪温泉、新绿温泉巡游、赏红叶等四季温泉体验。',
        },
        things_to_do: {
          [Language.JA]: '各温泉施設での湯めぐり、山歩き、周辺の山菜採り、秘湯探訪、雪見露天風呂がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting different hot springs, hiking, foraging for mountain vegetables, exploring hidden baths, and enjoying snow-view open-air baths.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมบ่อน้ำพุร้อนต่างๆ เดินป่า เก็บผักป่า สำรวจบ่อน้ำร้อนที่ซ่อนตัว และเพลิดเพลินกับการแช่น้ำกลางแจ้งชมหิมะ',
          [Language.ZH]: '推荐泡不同温泉、徒步、采山菜、探访秘汤、体验赏雪露天浴。',
        },
        local_cuisine: {
          [Language.JA]: '山の幸を使った郷土料理、きりたんぽ鍋、地酒、山菜料理など、秋田の味覚を楽しめます。',
          [Language.EN]: 'Enjoy Akita specialties including local dishes using mountain ingredients, Kiritanpo hot pot, local sake, and mountain vegetable dishes.',
          [Language.TH]: 'เพลิดเพลินกับอาหารพิเศษของอากิตะ รวมถึงอาหารท้องถิ่นที่ใช้วัตถุดิบจากภูเขา หม้อไฟคิริทันโปะ สาเกท้องถิ่น และอาหารจากผักป่า',
          [Language.ZH]: '可以品尝使用山珍的乡土料理、切炭火锅、地酒、山菜料理等秋田美食。',
        },
        access: {
          [Language.JA]: 'JR田沢湖駅からバスで約50分。各旅館の送迎サービスもあります。',
          [Language.EN]: '50 minutes by bus from JR Tazawako Station. Shuttle services are available from each inn.',
          [Language.TH]: 'ใช้เวลา 50 นาทีโดยรถบัสจากสถานี JR ทาซาวาโกะ มีบริการรถรับส่งจากแต่ละเรียวกัง',
          [Language.ZH]: '从JR田泽湖站乘巴士约50分钟。各旅馆有接送服务。',
        },
        image: 'https://picsum.photos/seed/nyuto-onsen/600/300',
      },
      {
        id: 'mount-iwate',
        name: {
          [Language.JA]: '岩手山',
          [Language.EN]: 'Mount Iwate',
          [Language.TH]: 'ภูเขาอิวาเตะ',
          [Language.ZH]: '岩手山',
        },
        description: {
          [Language.JA]: '岩手県のシンボルとして知られる標高2,038メートルの活火山。その雄大な姿から「南部富士」とも呼ばれ、四季を通じて美しい景観を見せます。',
          [Language.EN]: 'An active volcano standing at 2,038 meters, known as the symbol of Iwate Prefecture. Called "Nanbu-Fuji" for its majestic appearance, it shows beautiful scenery throughout the seasons.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นสูง 2,038 เมตร เป็นสัญลักษณ์ของจังหวัดอิวาเตะ เรียกว่า "นัมบุ-ฟูจิ" จากรูปลักษณ์ที่สง่างาม แสดงทิวทัศน์ที่สวยงามตลอดทั้งสี่ฤดู',
          [Language.ZH]: '岩手县的象征，海拔2,038米的活火山。因其雄伟的姿态被称为"南部富士"，四季展现美丽景观。',
        },
        history: {
          [Language.JA]: '古来より山岳信仰の対象として崇められ、江戸時代には修験道の修行の場としても栄えました。1928年に国立公園に指定されています。',
          [Language.EN]: 'Worshipped as a sacred mountain since ancient times, it flourished as a training ground for mountain asceticism during the Edo period. Designated as a National Park in 1928.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาตั้งแต่โบราณ เจริญรุ่งเรืองเป็นสถานที่ฝึกฝนลัทธิชูเก็นโดในสมัยเอโดะ ได้รับการกำหนดให้เป็นอุทยานแห่งชาติในปี 1928',
          [Language.ZH]: '自古以来就作为山岳信仰的对象受到崇敬，江户时代作为修验道的修行场所而繁荣。1928年被指定为国立公园。',
        },
        culture_festivals: {
          [Language.JA]: '山開き祭、岩手山焼走り熔岩流まつり、紅葉まつりなど、山にまつわる行事が年間を通じて開催されます。',
          [Language.EN]: 'Mountain-related events are held throughout the year, including the Mountain Opening Festival, Iwate Yakehashiri Lava Flow Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานที่เกี่ยวข้องกับภูเขาตลอดทั้งปี รวมถึงเทศกาลเปิดภูเขา เทศกาลลาวาอิวาเตะยาเคะฮาชิริ และเทศกาลใบไม้แดง',
          [Language.ZH]: '全年举办山开祭、岩手山焼走熔岩流节、红叶节等与山有关的活动。',
        },
        things_to_do: {
          [Language.JA]: '山頂からの展望、トレッキング、キャンプ、紅葉狩り、野鳥観察、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include enjoying summit views, trekking, camping, autumn leaf viewing, bird watching, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมวิวจากยอดเขา เดินป่า ตั้งแคมป์ ชมใบไม้แดง ดูนก และถ่ายภาพ',
          [Language.ZH]: '推荐欣赏山顶景色、徒步、露营、赏红叶、观鸟、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山の幸を使った郷土料理、わんこそば、岩手の地酒、山菜料理など、地元の味覚を楽しめます。',
          [Language.EN]: 'Enjoy local flavors including regional dishes using mountain ingredients, Wanko Soba noodles, Iwate local sake, and mountain vegetable dishes.',
          [Language.TH]: 'เพลิดเพลินกับรสชาติท้องถิ่น รวมถึงอาหารภูมิภาคที่ใช้วัตถุดิบจากภูเขา บะหมี่วันโกะโซบะ สาเกท้องถิ่นอิวาเตะ และอาหารจากผักป่า',
          [Language.ZH]: '可以品尝使用山珍的乡土料理、碗仓荞麦面、岩手地酒、山菜料理等当地美食。',
        },
        access: {
          [Language.JA]: 'JR盛岡駅からバスで約1時間。山頂へは数カ所の登山口からアクセス可能です。',
          [Language.EN]: 'About 1 hour by bus from JR Morioka Station. The summit can be accessed from several trailheads.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR โมริโอกะ สามารถเข้าถึงยอดเขาได้จากจุดเริ่มเดินป่าหลายแห่ง',
          [Language.ZH]: '从JR盛冈站乘巴士约1小时。可从多个登山口到达山顶。',
        },
        image: 'https://picsum.photos/seed/mount-iwate/600/300',
      },
      {
        id: 'hiraizumi',
        name: {
          [Language.JA]: '平泉',
          [Language.EN]: 'Hiraizumi',
          [Language.TH]: 'ฮิราอิซูมิ',
          [Language.ZH]: '平泉',
        },
        description: {
          [Language.JA]: '世界遺産に登録された中尊寺をはじめとする平泉の文化遺産群。奥州藤原氏の栄華を今に伝える寺院や庭園が点在しています。',
          [Language.EN]: 'A UNESCO World Heritage site featuring cultural heritage sites including Chusonji Temple. Various temples and gardens preserve the glory of the Northern Fujiwara clan.',
          [Language.TH]: 'มรดกโลกที่มีมรดกทางวัฒนธรรมรวมถึงวัดจูซนจิ วัดและสวนต่างๆ รักษาความรุ่งเรืองของตระกูลฟุจิวาระฝ่ายเหนือไว้',
          [Language.ZH]: '以世界遗产中尊寺为首的平泉文化遗产群。散布着传承奥州藤原氏荣华的寺院和庭园。',
        },
        history: {
          [Language.JA]: '12世紀に奥州藤原氏によって建設され、浄土思想を基にした寺院や庭園が造営されました。2011年に世界遺産に登録されています。',
          [Language.EN]: 'Built by the Northern Fujiwara clan in the 12th century, with temples and gardens based on Pure Land Buddhism. Registered as a World Heritage site in 2011.',
          [Language.TH]: 'สร้างโดยตระกูลฟุจิวาระฝ่ายเหนือในศตวรรษที่ 12 มีวัดและสวนที่สร้างตามแนวคิดพุทธศาสนานิกายโจโด ได้รับการขึ้นทะเบียนเป็นมรดกโลกในปี 2011',
          [Language.ZH]: '12世纪由奥州藤原氏建造，建有基于净土思想的寺院和庭园。2011年被列入世界遗产。',
        },
        culture_festivals: {
          [Language.JA]: '春の藤原まつり、中尊寺大供養会、芭蕉祭、紅葉ライトアップなど、年間を通じて様々な行事が開催されます。',
          [Language.EN]: 'Various events are held throughout the year, including the Spring Fujiwara Festival, Chusonji Grand Memorial Service, Basho Festival, and autumn foliage illuminations.',
          [Language.TH]: 'มีงานต่างๆ ตลอดทั้งปี รวมถึงเทศกาลฟุจิวาระฤดูใบไม้ผลิ พิธีรำลึกใหญ่จูซนจิ เทศกาลบาโช และการประดับไฟใบไม้แดง',
          [Language.ZH]: '全年举办春季藤原节、中尊寺大供养会、芭蕉节、红叶灯光秀等各种活动。',
        },
        things_to_do: {
          [Language.JA]: '中尊寺金色堂見学、毛越寺庭園散策、芭蕉の辿った道を巡る、無量光院跡の見学、座禅体験がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Chusonji\'s Golden Hall, strolling in Motsuji Garden, following Basho\'s historical route, exploring Muryoko-in ruins, and experiencing zazen meditation.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมศาลาทองคำของจูซนจิ เดินเล่นในสวนโมสึจิ ตามรอยเส้นทางประวัติศาสตร์ของบาโช สำรวจซากมุเรียวโคอิน และทดลองนั่งสมาธิแบบเซน',
          [Language.ZH]: '推荐参观中尊寺金色堂、漫步毛越寺庭园、追寻芭蕉足迹、参观无量光院遗址、体验坐禅。',
        },
        local_cuisine: {
          [Language.JA]: '平泉もち、わんこそば、岩手短角牛、地酒など、地元の特産品を楽しむことができます。',
          [Language.EN]: 'Local specialties include Hiraizumi mochi, Wanko Soba noodles, Iwate Shorthorn beef, and local sake.',
          [Language.TH]: 'อาหารพิเศษท้องถิ่น ได้แก่ โมจิฮิราอิซูมิ บะหมี่วันโกะโซบะ เนื้อวัวพันธุ์ชอร์ทฮอร์นอิวาเตะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝平泉年糕、碗仓荞麦面、岩手短角牛、地酒等当地特产。',
        },
        access: {
          [Language.JA]: 'JR平泉駅から徒歩で主要な史跡へアクセス可能。観光周遊バスも運行しています。',
          [Language.EN]: 'Major historical sites are accessible on foot from JR Hiraizumi Station. Sightseeing loop buses are also available.',
          [Language.TH]: 'สามารถเดินไปยังสถานที่สำคัญทางประวัติศาสตร์จากสถานี JR ฮิราอิซูมิ มีรถบัสท่องเที่ยวรอบเมืองให้บริการด้วย',
          [Language.ZH]: '从JR平泉站步行可到达主要史迹。还有观光循环巴士运行。',
        },
        image: 'https://picsum.photos/seed/hiraizumi/600/300',
      },
      {
        id: 'lake-towada',
        name: {
          [Language.JA]: '十和田湖',
          [Language.EN]: 'Lake Towada',
          [Language.TH]: 'ทะเลสาบโทวาดะ',
          [Language.ZH]: '十和田湖',
        },
        description: {
          [Language.JA]: '青森県と秋田県にまたがる二重カルデラ湖。神秘的な青い湖面と周囲の紅葉が織りなす景観は、東北を代表する観光地として知られています。',
          [Language.EN]: 'A double caldera lake straddling Aomori and Akita prefectures. Known as one of Tohoku\'s premier tourist destinations for its mystical blue waters and surrounding autumn foliage.',
          [Language.TH]: 'ทะเลสาบปล่องภูเขาไฟซ้อนที่คร่อมระหว่างจังหวัดอาโอโมริและอากิตะ เป็นที่รู้จักในฐานะจุดหมายปลายทางท่องเที่ยวชั้นนำของโทโฮคุ ด้วยน้ำสีฟ้าลึกลับและใบไม้แดงโดยรอบ',
          [Language.ZH]: '横跨青森县和秋田县的双重破火山口湖。以神秘的蓝色湖面和周围红叶交织的景观闻名，是东北代表性的旅游胜地。',
        },
        history: {
          [Language.JA]: '約2万年前の火山活動によって形成され、古くから山岳信仰の対象として崇められてきました。1936年に十和田八幡平国立公園の一部となりました。',
          [Language.EN]: 'Formed by volcanic activity about 20,000 years ago and long revered as a sacred mountain site. Became part of Towada-Hachimantai National Park in 1936.',
          [Language.TH]: 'ก่อตัวจากกิจกรรมภูเขาไฟเมื่อประมาณ 20,000 ปีก่อน และได้รับการเคารพบูชาในฐานะสถานที่ศักดิ์สิทธิ์บนภูเขามาอย่างยาวนาน กลายเป็นส่วนหนึ่งของอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1936',
          [Language.ZH]: '约2万年前由火山活动形成，自古以来就作为山岳信仰的对象受到崇敬。1936年成为十和田八幡平国立公园的一部分。',
        },
        culture_festivals: {
          [Language.JA]: '十和田湖湖水まつり、奥入瀬渓流氷瀑まつり、紅葉まつりなど、季節に応じた催しが開かれます。',
          [Language.EN]: 'Seasonal events include the Lake Towada Water Festival, Oirase Stream Ice Falls Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลน้ำทะเลสาบโทวาดะ เทศกาลน้ำตกน้ำแข็งโออิราเสะ และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办十和田湖湖水节、奥入濑溪流冰瀑节、红叶节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船での湖上観光、乙女の像見学、奥入瀬渓流散策、紅葉狩り、カヌー体験がおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, visiting the Maiden Statue, walking along Oirase Stream, autumn leaf viewing, and canoeing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว เยี่ยมชมรูปปั้นหญิงสาว เดินเล่นตามลำธารโออิราเสะ ชมใบไม้แดง และพายเรือแคนู',
          [Language.ZH]: '推荐乘游览船观光、参观乙女像、漫步奥入濑溪流、赏红叶、体验划独木舟。',
        },
        local_cuisine: {
          [Language.JA]: '十和田湖ひめます、山菜料理、きりたんぽ鍋、地酒など、青森と秋田の味覚を楽しめます。',
          [Language.EN]: 'Enjoy local flavors from Aomori and Akita including Lake Towada kokanee salmon, mountain vegetable dishes, Kiritanpo hot pot, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับรสชาติท้องถิ่นจากอาโอโมริและอากิตะ รวมถึงปลาแซลมอนโคคานีจากทะเลสาบโทวาดะ อาหารจากผักป่า หม้อไฟคิริทันโปะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝十和田湖姬鳟鱼、山菜料理、切炭火锅、地酒等青森和秋田美食。',
        },
        access: {
          [Language.JA]: 'JR八戸駅または十和田市からバスで約2時間。レンタカーでの観光も人気です。',
          [Language.EN]: 'About 2 hours by bus from JR Hachinohe Station or Towada City. Rental cars are also popular for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงโดยรถบัสจากสถานี JR ฮาจิโนเฮะหรือเมืองโทวาดะ การเช่ารถยนต์ก็เป็นที่นิยมสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR八户站或十和田市乘巴士约2小时。租车观光也很受欢迎。',
        },
        image: 'https://picsum.photos/seed/lake-towada/600/300',
      },
      {
        id: 'mount-chokai',
        name: {
          [Language.JA]: '鳥海山',
          [Language.EN]: 'Mount Chokai',
          [Language.TH]: 'ภูเขาโชไค',
          [Language.ZH]: '鸟海山',
        },
        description: {
          [Language.JA]: '秋田県と山形県の県境に位置する標高2,236メートルの活火山。「出羽富士」の愛称で親しまれ、雄大な山容と豊かな自然が魅力です。',
          [Language.EN]: 'An active volcano standing at 2,236 meters on the border of Akita and Yamagata prefectures. Affectionately known as "Dewa Fuji", it\'s beloved for its majestic appearance and rich nature.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นสูง 2,236 เมตร ตั้งอยู่บนพรมแดนระหว่างจังหวัดอากิตะและยามากาตะ เป็นที่รู้จักในชื่อ "เดวะฟูจิ" เป็นที่ชื่นชอบจากรูปลักษณ์ที่สง่างามและธรรมชาติที่อุดมสมบูรณ์',
          [Language.ZH]: '位于秋田县和山形县县境的海拔2,236米的活火山。亲切地被称为"出羽富士"，以其雄伟的山容和丰富的自然风光闻名。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の霊場として崇拝され、修験道の修行の場としても重要な役割を果たしてきました。1963年に国定公園に指定されています。',
          [Language.EN]: 'Long worshipped as a sacred mountain site and played an important role as a training ground for mountain asceticism. Designated as a Quasi-National Park in 1963.',
          [Language.TH]: 'ได้รับการบูชาในฐานะสถานที่ศักดิ์สิทธิ์บนภูเขามาอย่างยาวนาน และมีบทบาทสำคัญในฐานะสถานที่ฝึกฝนลัทธิชูเก็นโด ได้รับการกำหนดให้เป็นอุทยานกึ่งแห่งชาติในปี 1963',
          [Language.ZH]: '自古以来就作为山岳信仰的灵场受到崇拜，在修验道的修行中也发挥着重要作用。1963年被指定为国定公园。',
        },
        culture_festivals: {
          [Language.JA]: '鳥海山大物忌、山開き祭、山菜まつり、紅葉まつりなど、山にまつわる行事が年間を通じて開催されます。',
          [Language.EN]: 'Mountain-related events are held throughout the year, including the Chokai Grand Festival, Mountain Opening Ceremony, Mountain Vegetable Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานที่เกี่ยวข้องกับภูเขาตลอดทั้งปี รวมถึงเทศกาลใหญ่โชไค พิธีเปิดภูเขา เทศกาลผักภูเขา และเทศกาลใบไม้แดง',
          [Language.ZH]: '全年举办鸟海山大物忌、山开祭、山菜节、红叶节等与山有关的活动。',
        },
        things_to_do: {
          [Language.JA]: '山頂からの展望、トレッキング、山菜採り、写真撮影、御池での釣り、周辺の温泉めぐりがおすすめです。',
          [Language.EN]: 'Recommended activities include enjoying summit views, trekking, foraging for mountain vegetables, photography, fishing at Miike Pond, and visiting nearby hot springs.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมวิวจากยอดเขา เดินป่า เก็บผักภูเขา ถ่ายภาพ ตกปลาที่สระมิอิเคะ และเยี่ยมชมบ่อน้ำร้อนใกล้เคียง',
          [Language.ZH]: '推荐欣赏山顶景色、徒步、采集山菜、摄影、在御池钓鱼、游览周边温泉。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩牡蠣、日本酒、きりたんぽ鍋など、秋田と山形の郷土料理を楽しめます。',
          [Language.EN]: 'Enjoy local dishes from Akita and Yamagata including mountain vegetable dishes, rock oysters, sake, and Kiritanpo hot pot.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่นจากอากิตะและยามากาตะ รวมถึงอาหารจากผักภูเขา หอยนางรมหิน สาเก และหม้อไฟคิริทันโปะ',
          [Language.ZH]: '可以品尝山菜料理、岩牡蛎、日本酒、切炭火锅等秋田和山形的乡土料理。',
        },
        access: {
          [Language.JA]: 'JR象潟駅からバスで約40分。登山シーズンは山頂へのシャトルバスも運行しています。',
          [Language.EN]: 'About 40 minutes by bus from JR Kisakata Station. Shuttle buses to the summit operate during climbing season.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR คิซาคาตะ มีรถรับส่งไปยังยอดเขาในช่วงฤดูปีนเขา',
          [Language.ZH]: '从JR象潟站乘巴士约40分钟。登山季节有往返山顶的班车运行。',
        },
        image: 'https://picsum.photos/seed/mount-chokai/600/300',
      },
      {
        id: 'geibikei',
        name: {
          [Language.JA]: '猊鼻渓',
          [Language.EN]: 'Geibikei Gorge',
          [Language.TH]: 'หุบเขาเกบิเค',
          [Language.ZH]: '猊鼻溪',
        },
        description: {
          [Language.JA]: '岩手県一関市にある石灰岩の渓谷。約2キロメートルにわたって続く断崖絶壁と清流が織りなす景観が魅力です。',
          [Language.EN]: 'A limestone gorge in Ichinoseki City, Iwate Prefecture. Known for its stunning scenery of sheer cliffs and clear streams stretching for about 2 kilometers.',
          [Language.TH]: 'หุบเขาหินปูนในเมืองอิจิโนเซกิ จังหวัดอิวาเตะ มีชื่อเสียงด้านทัศนียภาพอันงดงามของหน้าผาสูงชันและลำธารใสที่ทอดยาวประมาณ 2 กิโลเมตร',
          [Language.ZH]: '位于岩手县一关市的石灰岩峡谷。以绵延约2公里的悬崖绝壁与清流交织的景观为特色。',
        },
        history: {
          [Language.JA]: '古くから舟下りの景勝地として知られ、明治時代から観光地として発展。1925年に国の名勝に指定されました。',
          [Language.EN]: 'Long known for its boat rides through scenic spots, it developed as a tourist destination from the Meiji period. Designated as a National Place of Scenic Beauty in 1925.',
          [Language.TH]: 'เป็นที่รู้จักมานานในด้านการล่องเรือชมวิว พัฒนาเป็นสถานที่ท่องเที่ยวตั้งแต่สมัยเมจิ ได้รับการกำหนดให้เป็นสถานที่ทิวทัศน์งดงามแห่งชาติในปี 1925',
          [Language.ZH]: '自古以来就以泛舟景胜地闻名，从明治时代开始发展为旅游胜地。1925年被指定为国家名胜。',
        },
        culture_festivals: {
          [Language.JA]: '新緑まつり、もみじまつり、かっぱ祭り、ライトアップイベントなど、季節に応じた催しが開催されます。',
          [Language.EN]: 'Seasonal events include the Fresh Green Festival, Autumn Leaves Festival, Kappa Festival, and illumination events.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลใบไม้เขียว เทศกาลใบไม้แดง เทศกาลคัปปะ และงานประดับไฟ',
          [Language.ZH]: '举办新绿节、红叶节、河童节、灯光秀等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '舟下り、洞窟探検、奇岩怪石の観賞、カッパ淵での写真撮影、周辺散策がおすすめです。',
          [Language.EN]: 'Recommended activities include boat rides, cave exploration, viewing unique rock formations, taking photos at Kappa Pool, and walking around the area.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือ สำรวจถ้ำ ชมหินรูปร่างแปลกตา ถ่ายภาพที่สระคัปปะ และเดินเล่นรอบๆ พื้นที่',
          [Language.ZH]: '推荐泛舟、探洞、观赏奇岩怪石、在河童潭拍照、漫步周边。',
        },
        local_cuisine: {
          [Language.JA]: 'わんこそば、もち料理、岩魚の塩焼き、地酒など、岩手の郷土料理を楽しめます。',
          [Language.EN]: 'Enjoy Iwate local specialties including Wanko Soba noodles, mochi dishes, grilled char fish, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารพิเศษท้องถิ่นของอิวาเตะ รวมถึงบะหมี่วันโกะโซบะ อาหารจากโมจิ ปลาชาร์ย่าง และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝碗仓荞麦面、年糕料理、岩鱼盐烤、地酒等岩手乡土料理。',
        },
        access: {
          [Language.JA]: 'JR一ノ関駅から電車で約15分、猊鼻渓駅から徒歩約10分です。',
          [Language.EN]: 'About 15 minutes by train from JR Ichinoseki Station, then 10 minutes walk from Geibikei Station.',
          [Language.TH]: 'ใช้เวลาประมาณ 15 นาทีโดยรถไฟจากสถานี JR อิจิโนเซกิ จากนั้นเดิน 10 นาทีจากสถานีเกบิเค',
          [Language.ZH]: '从JR一关站乘火车约15分钟，从猊鼻溪站步行约10分钟。',
        },
        image: 'https://picsum.photos/seed/geibikei-gorge/600/300',
      },
      {
        id: 'lake-tazawa',
        name: {
          [Language.JA]: '田沢湖',
          [Language.EN]: 'Lake Tazawa',
          [Language.TH]: 'ทะเลสาบทาซาวะ',
          [Language.ZH]: '田泽湖',
        },
        description: {
          [Language.JA]: '秋田県仙北市にある日本最深の湖。水深423.4メートル、透明度が高く、コバルトブルーの美しい湖面が特徴です。',
          [Language.EN]: 'The deepest lake in Japan, located in Semboku City, Akita Prefecture. Known for its depth of 423.4 meters, high transparency, and beautiful cobalt blue waters.',
          [Language.TH]: 'ทะเลสาบที่ลึกที่สุดในญี่ปุ่น ตั้งอยู่ในเมืองเซ็มโบคุ จังหวัดอากิตะ มีความลึก 423.4 เมตร น้ำใสและมีสีน้ำเงินโคบอลต์ที่สวยงาม',
          [Language.ZH]: '位于秋田县仙北市的日本最深湖泊。水深423.4米，透明度高，以钴蓝色的湖面为特征。',
        },
        history: {
          [Language.JA]: '古くから辰子姫伝説が伝わり、湖畔には龍神伝説にまつわる辰子姫像が建立されています。1920年代に発電所建設により水位が上昇しました。',
          [Language.EN]: 'Home to the legend of Princess Tatsuko, with her statue standing by the shore related to the dragon god myth. The water level rose in the 1920s due to power plant construction.',
          [Language.TH]: 'เป็นที่มาของตำนานเจ้าหญิงทัตสึโกะ มีรูปปั้นของเธอริมฝั่งที่เกี่ยวข้องกับตำนานเทพมังกร ระดับน้ำสูงขึ้นในทศวรรษ 1920 เนื่องจากการก่อสร้างโรงไฟฟ้า',
          [Language.ZH]: '自古流传辰子姫传说，湖畔矗立着与龙神传说相关的辰子姫像。1920年代因发电站建设水位上升。',
        },
        culture_festivals: {
          [Language.JA]: '田沢湖まつり、たざわ湖スキー場感謝祭、新緑まつり、紅葉まつりなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Lake Tazawa Festival, Tazawako Ski Resort Thanksgiving Festival, Fresh Green Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลทะเลสาบทาซาวะ เทศกาลขอบคุณลานสกีทาซาวาโกะ เทศกาลใบไม้เขียว และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办田泽湖节、田泽湖滑雪场感谢祭、新绿节、红叶节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船、カヌー、釣り、サイクリング、スキー、温泉、紅葉狩り、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, canoeing, fishing, cycling, skiing, hot springs, autumn leaf viewing, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว พายเรือแคนู ตกปลา ปั่นจักรยาน เล่นสกี แช่น้ำพุร้อน ชมใบไม้แดง และถ่ายภาพ',
          [Language.ZH]: '推荐游览船、独木舟、钓鱼、骑行、滑雪、温泉、赏红叶、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '稲庭うどん、きりたんぽ鍋、秋田の地酒、岩魚料理、山菜料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Inaniwa Udon noodles, Kiritanpo hot pot, Akita sake, char fish dishes, and mountain vegetable cuisine.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อุด้งอินานิวะ หม้อไฟคิริทันโปะ สาเกอากิตะ อาหารจากปลาชาร์ และอาหารจากผักภูเขา',
          [Language.ZH]: '可以品尼庭乌冬面、切炭火锅、秋田地酒、岩鱼料理、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR田沢湖駅からバスで約15分。レンタカーでの観光も人気です。',
          [Language.EN]: 'About 15 minutes by bus from JR Tazawako Station. Rental cars are also popular for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 15 นาทีโดยรถบัสจากสถานี JR ทาซาวาโกะ การเช่ารถยนต์ก็เป็นที่นิยมสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR田泽湖站乘巴士约15分钟。租车观光也很受欢迎。',
        },
        image: 'https://picsum.photos/seed/lake-tazawa/600/300',
      },
      {
        id: 'mount-bandai',
        name: {
          [Language.JA]: '磐梯山',
          [Language.EN]: 'Mount Bandai',
          [Language.TH]: 'ภูเขาบันได',
          [Language.ZH]: '磐梯山',
        },
        description: {
          [Language.JA]: '福島県の象徴的な活火山で、標高1,816メートル。1888年の大噴火で現在の姿となり、周辺には多くの湖沼群が形成されています。',
          [Language.EN]: 'An iconic active volcano in Fukushima Prefecture, standing at 1,816 meters. Its current form was shaped by a major eruption in 1888, which created numerous lakes in the surrounding area.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นอันเป็นสัญลักษณ์ของจังหวัดฟุกุชิมะ สูง 1,816 เมตร รูปร่างปัจจุบันเกิดจากการระเบิดครั้งใหญ่ในปี 1888 ซึ่งทำให้เกิดทะเลสาบมากมายในบริเวณโดยรอบ',
          [Language.ZH]: '福岛县的标志性活火山，海拔1,816米。1888年的大喷发形成了现在的形态，周边形成了众多湖泊群。',
        },
        history: {
          [Language.JA]: '1888年7月15日の大噴火により北側が崩壊し、多くの犠牲者を出しました。その後、周辺の自然は徐々に回復し、現在は国立公園として保護されています。',
          [Language.EN]: 'The northern face collapsed during the major eruption on July 15, 1888, causing many casualties. The surrounding nature has gradually recovered, and the area is now protected as a national park.',
          [Language.TH]: 'ด้านเหนือพังทลายระหว่างการระเบิดครั้งใหญ่เมื่อวันที่ 15 กรกฎาคม 1888 ทำให้มีผู้เสียชีวิตจำนวนมาก ธรรมชาติโดยรอบค่อยๆ ฟื้นตัว และปัจจุบันพื้นที่นี้ได้รับการคุ้มครองในฐานะอุทยานแห่งชาติ',
          [Language.ZH]: '1888年7月15日的大喷发导致北侧崩塌，造成了大量伤亡。此后，周边自然环境逐渐恢复，现在作为国立公园受到保护。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、磐梯山神社例大祭、紅葉まつり、スキーフェスティバルなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Mountain Opening Ceremony, Bandai Shrine Grand Festival, Autumn Leaves Festival, and Ski Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงพิธีเปิดภูเขา เทศกาลใหญ่ศาลเจ้าบันได เทศกาลใบไม้แดง และเทศกาลสกี',
          [Language.ZH]: '举办山开祭、磐梯山神社例大祭、红叶节、滑雪节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、スキー、スノーボード、キャンプ、湖畔散策、紅葉狩り、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include mountain climbing, trekking, skiing, snowboarding, camping, lakeside walks, autumn leaf viewing, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ปีนเขา เดินป่า เล่นสกี สโนว์บอร์ด ตั้งแคมป์ เดินเล่นริมทะเลสาบ ชมใบไม้แดง และถ่ายภาพ',
          [Language.ZH]: '推荐登山、徒步、滑雪、单板滑雪、露营、湖畔散步、赏红叶、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '会津の郷土料理、山菜料理、きのこ料理、ソースカツ丼、日本酒が楽しめます。',
          [Language.EN]: 'Enjoy Aizu regional dishes, mountain vegetable cuisine, mushroom dishes, sauce katsu rice bowl, and sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่นไอซุ อาหารจากผักภูเขา อาหารจากเห็ด ข้าวหน้าหมูทอดราดซอส และสาเก',
          [Language.ZH]: '可以品尝会津乡土料理、山菜料理、蘑菇料理、炸猪排盖饭、日本酒。',
        },
        access: {
          [Language.JA]: 'JR磐梯町駅からバスで約40分。夏季は山頂へのロープウェイも運行しています。',
          [Language.EN]: 'About 40 minutes by bus from JR Bandaimachi Station. A ropeway to the summit operates during summer.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR บันไดมาจิ มีกระเช้าไปยังยอดเขาในช่วงฤดูร้อน',
          [Language.ZH]: '从JR磐梯町站乘巴士约40分钟。夏季有通往山顶的缆车运行。',
        },
        image: 'https://picsum.photos/seed/mount-bandai/600/300',
      },
      {
        id: 'mount-zao',
        name: {
          [Language.JA]: '蔵王山',
          [Language.EN]: 'Mount Zao',
          [Language.TH]: 'ภูเขาซาโอ',
          [Language.ZH]: '藏王山',
        },
        description: {
          [Language.JA]: '山形県と宮城県の県境に位置する火山群。特に冬の樹氷（スノーモンスター）で有名で、温泉やスキー場としても人気があります。',
          [Language.EN]: 'A volcanic mountain range on the border of Yamagata and Miyagi prefectures. Famous for its winter "snow monsters" (ice-covered trees) and popular for hot springs and skiing.',
          [Language.TH]: 'เทือกเขาภูเขาไฟบนพรมแดนระหว่างจังหวัดยามากาตะและมิยากิ มีชื่อเสียงจาก "ปีศาจหิมะ" (ต้นไม้ปกคลุมด้วยน้ำแข็ง) ในฤดูหนาว และเป็นที่นิยมสำหรับบ่อน้ำร้อนและการเล่นสกี',
          [Language.ZH]: '位于山形县和宫城县县境的火山群。以冬季树冰（雪怪）闻名，温泉和滑雪场也很受欢迎。',
        },
        history: {
          [Language.JA]: '古くから修験道の修行の場として知られ、江戸時代には既に温泉地として栄えていました。1960年代にスキー場として本格的に開発されました。',
          [Language.EN]: 'Long known as a site for mountain ascetic practices, it flourished as a hot spring resort during the Edo period. Fully developed as a ski resort in the 1960s.',
          [Language.TH]: 'เป็นที่รู้จักมานานในฐานะสถานที่ฝึกฝนลัทธิชูเก็นโด เฟื่องฟูเป็นรีสอร์ทน้ำพุร้อนในสมัยเอโดะ และได้รับการพัฒนาเป็นรีสอร์ทสกีอย่างเต็มรูปแบบในทศวรรษ 1960',
          [Language.ZH]: '自古以来就是修验道修行之地，江户时代已经作为温泉胜地繁荣。1960年代作为滑雪场全面开发。',
        },
        culture_festivals: {
          [Language.JA]: '樹氷まつり、スノーモンスターライトアップ、夏山開き、紅葉ライトアップなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Ice Trees Festival, Snow Monster Light-up, Summer Mountain Opening, and Autumn Leaves Illumination.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลต้นไม้น้ำแข็ง การประดับไฟปีศาจหิมะ พิธีเปิดภูเขาฤดูร้อน และการประดับไฟใบไม้แดง',
          [Language.ZH]: '举办树冰节、雪怪亮化、夏山开放、红叶亮化等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: 'スキー、スノーボード、温泉巡り、御釜（火口湖）観光、トレッキング、紅葉狩り、樹氷鑑賞が楽しめます。',
          [Language.EN]: 'Enjoy skiing, snowboarding, hot spring hopping, Okama crater lake sightseeing, trekking, autumn leaf viewing, and ice tree viewing.',
          [Language.TH]: 'เพลิดเพลินกับการเล่นสกี สโนว์บอร์ด แช่น้ำพุร้อน ชมทะเลสาบปล่องภูเขาไฟโอคามะ เดินป่า ชมใบไม้แดง และชมต้นไม้น้ำแข็ง',
          [Language.ZH]: '可以享受滑雪、单板滑雪、温泉巡游、御釜（火口湖）观光、徒步、赏红叶、观赏树冰。',
        },
        local_cuisine: {
          [Language.JA]: '芋煮、玉こんにゃく、蔵王チーズ、山形そば、地酒、山菜料理が楽しめます。',
          [Language.EN]: 'Local specialties include Imoni hot pot, Tama Konnyaku, Zao cheese, Yamagata soba noodles, local sake, and mountain vegetable dishes.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ หม้อไฟอิโมนิ ทามะคนยาคุ ชีสซาโอ โซบะยามากาตะ สาเกท้องถิ่น และอาหารจากผักภูเขา',
          [Language.ZH]: '可以品尝芋煮、玉蒟蒻、藏王奶酪、山形荞麦面、地酒、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR山形駅からバスで約40分。ロープウェイで山頂まで行くことができます。',
          [Language.EN]: 'About 40 minutes by bus from JR Yamagata Station. A ropeway is available to reach the summit.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR ยามากาตะ มีกระเช้าให้บริการไปถึงยอดเขา',
          [Language.ZH]: '从JR山形站乘巴士约40分钟。可以乘坐缆车到达山顶。',
        },
        image: 'https://picsum.photos/seed/mount-zao/600/300',
      },
      {
        id: 'matsushima',
        name: {
          [Language.JA]: '松島',
          [Language.EN]: 'Matsushima',
          [Language.TH]: 'มัตสึชิมะ',
          [Language.ZH]: '松岛',
        },
        description: {
          [Language.JA]: '宮城県松島湾に浮かぶ260余りの島々からなる景勝地。日本三景の一つとして知られ、風光明媚な景色と歴史的建造物が魅力です。',
          [Language.EN]: 'A scenic area consisting of over 260 islands in Matsushima Bay, Miyagi Prefecture. Known as one of Japan\'s Three Great Views, featuring picturesque scenery and historic buildings.',
          [Language.TH]: 'สถานที่ทิวทัศน์งดงามประกอบด้วยเกาะมากกว่า 260 เกาะในอ่าวมัตสึชิมะ จังหวัดมิยากิ เป็นหนึ่งในสามทิวทัศน์ที่สวยที่สุดของญี่ปุ่น มีทั้งทิวทัศน์สวยงามและอาคารประวัติศาสตร์',
          [Language.ZH]: '位于宫城县松岛湾的由260多个岛屿组成的景胜地。作为日本三景之一而闻名，以风光明媚的景色和历史建筑为特色。',
        },
        history: {
          [Language.JA]: '奈良時代から景勝地として知られ、伊達政宗が建立した瑞巌寺など、多くの歴史的建造物が残されています。2011年の東日本大震災でも島々が津波を和らげる防波堤の役割を果たしました。',
          [Language.EN]: 'Known as a scenic spot since the Nara period, with many historic buildings including Zuiganji Temple built by Date Masamune. During the 2011 Great East Japan Earthquake, the islands acted as natural breakwaters against the tsunami.',
          [Language.TH]: 'เป็นที่รู้จักในฐานะจุดชมวิวตั้งแต่สมัยนาระ มีอาคารประวัติศาสตร์มากมาย รวมถึงวัดซุยกันจิที่สร้างโดยดาเตะ มาซามุเนะ ในช่วงแผ่นดินไหวและสึนามิครั้งใหญ่ทางตะวันออกของญี่ปุ่นปี 2011 เกาะต่างๆ ทำหน้าที่เป็นกำแพงกันคลื่นตามธรรมชาติ',
          [Language.ZH]: '自奈良时代起就作为景胜地闻名，保存着包括伊达政宗建立的瑞岩寺在内的许多历史建筑。在2011年东日本大地震中，岛屿群发挥了减缓海啸的防波堤作用。',
        },
        culture_festivals: {
          [Language.JA]: '松島観光物産展、かき祭り、花火大会、灯籠流し、初詣など、年間を通じて様々な行事が開催されます。',
          [Language.EN]: 'Various events throughout the year including Matsushima Tourism Fair, Oyster Festival, Fireworks Display, Lantern Floating, and New Year\'s Temple Visit.',
          [Language.TH]: 'มีงานต่างๆ ตลอดทั้งปี รวมถึงงานแสดงสินค้าการท่องเที่ยวมัตสึชิมะ เทศกาลหอยนางรม การแสดงดอกไม้ไฟ การลอยโคมไฟ และการเยี่ยมชมวัดในวันปีใหม่',
          [Language.ZH]: '全年举办松岛观光物产展、牡蛎节、烟花大会、灯笼流放、新年参拜等各种活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船、瑞巌寺見学、五大堂参拝、かき小屋、茶屋での休憩、島巡り、写真撮影が楽しめます。',
          [Language.EN]: 'Enjoy sightseeing cruises, Zuiganji Temple tours, Godaido Temple visits, oyster huts, tea house breaks, island hopping, and photography.',
          [Language.TH]: 'เพลิดเพลินกับการล่องเรือชมวิว เยี่ยมชมวัดซุยกันจิ สักการะวัดโกไดโด ร้านหอยนางรม พักผ่อนที่ร้านน้ำชา ท่องเที่ยวเกาะต่างๆ และถ่ายภาพ',
          [Language.ZH]: '可以享受游览船、参观瑞岩寺、参拜五大堂、牡蛎小屋、茶屋休息、环岛游、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '牡蠣料理、笹かまぼこ、ずんだ餅、はらこ飯、銘酒「浦霞」、海鮮料理が楽しめます。',
          [Language.EN]: 'Local specialties include oyster dishes, Sasa Kamaboko fish cakes, Zunda mochi, Harako rice with salmon roe, Urakasumi sake, and seafood dishes.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากหอยนางรม ปลาคามาโบโกะ ขนมโมจิซุนดะ ข้าวฮาราโกะกับไข่ปลาแซลมอน สาเกอุระคาสึมิ และอาหารทะเล',
          [Language.ZH]: '可以品尝牡蛎料理、笹蒲鉾、枝豆年糕、鲑鱼子饭、名酒"浦雾"、海鲜料理。',
        },
        access: {
          [Language.JA]: 'JR松島海岸駅から徒歩約5分。仙台から電車で約25分です。',
          [Language.EN]: 'About 5 minutes walk from JR Matsushimakaigan Station. About 25 minutes by train from Sendai.',
          [Language.TH]: 'เดินประมาณ 5 นาทีจากสถานี JR มัตสึชิมะไคกัน ใช้เวลาประมาณ 25 นาทีโดยรถไฟจากเมืองเซนได',
          [Language.ZH]: '从JR松岛海岸站步行约5分钟。从仙台乘火车约25分钟。',
        },
        image: 'https://picsum.photos/seed/matsushima/600/300',
      },
      {
        id: 'yamadera',
        name: {
          [Language.JA]: '山寺',
          [Language.EN]: 'Yamadera Temple',
          [Language.TH]: 'วัดยามาเดระ',
          [Language.ZH]: '山寺',
        },
        description: {
          [Language.JA]: '山形県山形市にある1100年以上の歴史を持つ寺院。立石寺の正式名称で知られ、断崖絶壁に建つ伽藍と眺望が特徴です。',
          [Language.EN]: 'A temple with over 1,100 years of history in Yamagata City. Officially known as Risshakuji Temple, famous for its buildings perched on steep cliffs and spectacular views.',
          [Language.TH]: 'วัดที่มีประวัติศาสตร์ยาวนานกว่า 1,100 ปีในเมืองยามากาตะ มีชื่อเป็นทางการว่าวัดริชชาคุจิ มีชื่อเสียงจากอาคารที่ตั้งอยู่บนหน้าผาชันและวิวที่สวยงาม',
          [Language.ZH]: '位于山形县山形市的有着1100多年历史的寺院。正式名称为立石寺，以悬崖绝壁上的伽蓝和壮观景色为特征。',
        },
        history: {
          [Language.JA]: '860年に天台宗の僧侶円仁によって開山。松尾芭蕉が「閑かさや 岩にしみ入る 蝉の声」という句を詠んだことでも有名です。',
          [Language.EN]: 'Founded in 860 by Tendai Buddhist monk Ennin. Famous for inspiring Matsuo Basho\'s haiku about the silence and cicadas\' voices penetrating the rocks.',
          [Language.TH]: 'ก่อตั้งในปี 860 โดยพระเทนไดชื่อเอนนิน มีชื่อเสียงจากการเป็นแรงบันดาลใจให้มัตสึโอะ บาโชประพันธ์กลอนไฮกุเกี่ยวกับความเงียบและเสียงจักจั่นที่แทรกซึมเข้าไปในก้อนหิน',
          [Language.ZH]: '860年由天台宗僧人圆仁开山。因松尾芭蕉的俳句"闲寂兮 渗入岩石 蝉之声"而闻名。',
        },
        culture_festivals: {
          [Language.JA]: '除夜の鐘突き、初詣、雪灯籠、紅葉ライトアップ、写経体験など、年間を通じて様々な行事が開催されます。',
          [Language.EN]: 'Various events throughout the year including New Year\'s Eve bell ringing, New Year visits, snow lanterns, autumn leaves illumination, and sutra copying experiences.',
          [Language.TH]: 'มีกิจกรรมต่างๆ ตลอดทั้งปี รวมถึงการตีระฆังส่งท้ายปีเก่า การเยี่ยมชมวัดในวันปีใหม่ โคมไฟหิมะ การประดับไฟใบไม้แดง และประสบการณ์การคัดลอกพระสูตร',
          [Language.ZH]: '全年举办除夕敲钟、新年参拜、雪灯笼、红叶亮化、抄经体验等各种活动。',
        },
        things_to_do: {
          [Language.JA]: '1015段の石段参拝、写経体験、御朱印集め、展望台からの眺望、周辺散策、写真撮影が楽しめます。',
          [Language.EN]: 'Enjoy climbing 1,015 stone steps, sutra copying experience, collecting temple stamps, viewing from observation decks, exploring the surroundings, and photography.',
          [Language.TH]: 'เพลิดเพลินกับการเดินขึ้นบันไดหิน 1,015 ขั้น ประสบการณ์การคัดลอกพระสูตร สะสมตราประทับวัด ชมวิวจากจุดชมวิว สำรวจบริเวณโดยรอบ และถ่ายภาพ',
          [Language.ZH]: '可以享受攀登1015级石阶、抄经体验、收集御朱印、观景台眺望、周边散步、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山形そば、だだちゃ豆、芋煮、玉こんにゃく、山形牛、地酒が楽しめます。',
          [Language.EN]: 'Local specialties include Yamagata soba noodles, Dadacha-mame edamame, Imoni hot pot, Tama Konnyaku, Yamagata beef, and local sake.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ โซบะยามากาตะ ถั่วแระญี่ปุ่นดาดาชามาเมะ หม้อไฟอิโมนิ ทามะคนยาคุ เนื้อวัวยามากาตะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝山形荞麦面、茶豆、芋煮、玉蒟蒻、山形牛肉、地酒。',
        },
        access: {
          [Language.JA]: 'JR山寺駅から徒歩約5分。仙台から電車で約1時間です。',
          [Language.EN]: 'About 5 minutes walk from JR Yamadera Station. About 1 hour by train from Sendai.',
          [Language.TH]: 'เดินประมาณ 5 นาทีจากสถานี JR ยามาเดระ ใช้เวลาประมาณ 1 ชั่วโมงโดยรถไฟจากเมืองเซนได',
          [Language.ZH]: '从JR山寺站步行约5分钟。从仙台乘火车约1小时。',
        },
        image: 'https://picsum.photos/seed/yamadera/600/300',
      },
      {
        id: 'oirase-gorge',
        name: {
          [Language.JA]: '奥入瀬渓流',
          [Language.EN]: 'Oirase Gorge',
          [Language.TH]: 'หุบเขาโออิราเสะ',
          [Language.ZH]: '奥入濑溪流',
        },
        description: {
          [Language.JA]: '青森県十和田市の十和田湖から流れ出す約14キロメートルの渓流。豊かな緑と14の滝、数々の急流が織りなす景観が魅力です。',
          [Language.EN]: 'A 14-kilometer mountain stream flowing from Lake Towada in Towada City, Aomori Prefecture. Known for its rich greenery, 14 waterfalls, and stunning landscapes formed by numerous rapids.',
          [Language.TH]: 'ลำธารในภูเขายาว 14 กิโลเมตรที่ไหลจากทะเลสาบโทวาดะในเมืองโทวาดะ จังหวัดอาโอโมริ มีชื่อเสียงจากพืชพรรณเขียวขจี น้ำตก 14 แห่ง และภูมิทัศน์อันงดงามที่เกิดจากแก่งน้ำมากมาย',
          [Language.ZH]: '从青森县十和田市的十和田湖流出的约14公里长的溪流。以丰富的绿色植被、14处瀑布和众多急流交织成的景观为特色。',
        },
        history: {
          [Language.JA]: '1930年に国の名勝および天然記念物に指定。古くから画家や写真家に愛され、四季折々の美しい風景が描かれてきました。',
          [Language.EN]: 'Designated as a National Place of Scenic Beauty and Natural Monument in 1930. Long beloved by painters and photographers, capturing its beautiful scenery through all seasons.',
          [Language.TH]: 'ได้รับการกำหนดให้เป็นสถานที่ทิวทัศน์งดงามและอนุสรณ์ทางธรรมชาติแห่งชาติในปี 1930 เป็นที่รักของจิตรกรและช่างภาพมาอย่างยาวนาน บันทึกภาพทิวทัศน์อันงดงามในทุกฤดูกาล',
          [Language.ZH]: '1930年被指定为国家名胜及天然纪念物。自古以来深受画家和摄影师的喜爱，四季美景不断被描绘记录。',
        },
        culture_festivals: {
          [Language.JA]: '奥入瀬渓流新緑まつり、紅葉まつり、冬の奥入瀬氷瀑ツアー、ネイチャーガイドツアーなどが開催されます。',
          [Language.EN]: 'Events include the Oirase Fresh Green Festival, Autumn Leaves Festival, Winter Ice Falls Tour, and nature guide tours.',
          [Language.TH]: 'มีกิจกรรมต่างๆ รวมถึงเทศกาลใบไม้เขียวโออิราเสะ เทศกาลใบไม้แดง ทัวร์น้ำตกน้ำแข็งในฤดูหนาว และทัวร์ธรรมชาติ',
          [Language.ZH]: '举办奥入濑溪流新绿节、红叶节、冬季冰瀑tour、自然导览tour等活动。',
        },
        things_to_do: {
          [Language.JA]: '散策、ハイキング、写真撮影、バードウォッチング、ネイチャーガイド付きツアー、紅葉狩りが楽しめます。',
          [Language.EN]: 'Enjoy walking trails, hiking, photography, bird watching, guided nature tours, and autumn leaf viewing.',
          [Language.TH]: 'เพลิดเพลินกับการเดินเล่น เดินป่า ถ่ายภาพ ดูนก ทัวร์ธรรมชาติพร้อมไกด์ และชมใบไม้แดง',
          [Language.ZH]: '可以享受散步、远足、摄影、观鸟、自然导览tour、赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩魚料理、十和田バラ焼き、青森りんご、地酒、山の幸が楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, char fish dishes, Towada Barayaki (grilled beef and onions), Aomori apples, local sake, and mountain delicacies.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากปลาชาร์ โทวาดะบาระยากิ (เนื้อวัวและหัวหอมย่าง) แอปเปิลอาโอโมริ สาเกท้องถิ่น และอาหารจากภูเขา',
          [Language.ZH]: '可以品尝山菜料理、岩鱼料理、十和田烤肉、青森苹果、地酒、山珍。',
        },
        access: {
          [Language.JA]: 'JR八戸駅または三沢駅からバスで約2時間。レンタカーでの観光も人気です。',
          [Language.EN]: 'About 2 hours by bus from JR Hachinohe Station or Misawa Station. Rental cars are also popular for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงโดยรถบัสจากสถานี JR ฮาจิโนเฮะหรือสถานีมิซาวะ การเช่ารถยนต์ก็เป็นที่นิยมสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR八户站或三泽站乘巴士约2小时。租车观光也很受欢迎。',
        },
        image: 'https://picsum.photos/seed/oirase-gorge/600/300',
      },
      {
        id: 'hachinohe',
        name: {
          [Language.JA]: '八戸市',
          [Language.EN]: 'Hachinohe City',
          [Language.TH]: 'เมืองฮาจิโนเฮะ',
          [Language.ZH]: '八户市',
        },
        description: {
          [Language.JA]: '青森県南東部に位置する港町。新鮮な魚介類と朝市で知られ、工業都市としても発展しています。伝統的な祭りと現代的な都市機能が共存する魅力的な街です。',
          [Language.EN]: 'A port city in southeastern Aomori Prefecture. Known for fresh seafood and morning markets, it has also developed as an industrial city. An attractive city where traditional festivals and modern urban functions coexist.',
          [Language.TH]: 'เมืองท่าในตะวันออกเฉียงใต้ของจังหวัดอาโอโมริ มีชื่อเสียงด้านอาหารทะเลสดและตลาดเช้า พัฒนาเป็นเมืองอุตสาหกรรม เป็นเมืองที่น่าสนใจที่ผสมผสานเทศกาลประเพณีและความทันสมัยของเมือง',
          [Language.ZH]: '位于青森县东南部的港口城市。以新鲜海鲜和早市闻名，同时也发展为工业城市。是传统节日与现代城市功能共存的魅力城市。',
        },
        history: {
          [Language.JA]: '江戸時代から港町として栄え、南部藩の重要な外港でした。明治以降は漁業と工業の発展により、東北有数の都市に成長しました。',
          [Language.EN]: 'Flourished as a port town since the Edo period, serving as an important outer port for the Nambu domain. After the Meiji period, it grew into one of the major cities in Tohoku through fishing and industrial development.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองท่าตั้งแต่สมัยเอโดะ เป็นท่าเรือสำคัญของแคว้นนัมบุ หลังสมัยเมจิ เติบโตเป็นหนึ่งในเมืองสำคัญของโทโฮคุผ่านการพัฒนาด้านประมงและอุตสาหกรรม',
          [Language.ZH]: '自江户时代起就作为港口城市繁荣，是南部藩的重要外港。明治以后通过渔业和工业的发展，成长为东北地区重要城市之一。',
        },
        culture_festivals: {
          [Language.JA]: '八戸三社大祭、八戸えんぶり、八戸食文化まつり、みなと祭り、八戸酒造まつりなど、伝統と食文化を体験できるイベントが豊富です。',
          [Language.EN]: 'Rich in events showcasing tradition and food culture, including Hachinohe Sansha Festival, Hachinohe Enburi, Food Culture Festival, Port Festival, and Sake Brewery Festival.',
          [Language.TH]: 'มีงานที่แสดงถึงประเพณีและวัฒนธรรมอาหารมากมาย รวมถึงเทศกาลซันชาฮาจิโนเฮะ เทศกาลเอนบุริฮาจิโนเฮะ เทศกาลวัฒนธรรมอาหาร เทศกาลท่าเรือ และเทศกาลเหล้าสาเก',
          [Language.ZH]: '举办八户三社大祭、八户えんぶり、八户食文化节、港口节、八户酒造节等丰富的传统与饮食文化体验活动。',
        },
        things_to_do: {
          [Language.JA]: '館鼻岸壁朝市、種差海岸散策、八食センター巡り、酒蔵見学、むつ湾クルーズ、市場見学が楽しめます。',
          [Language.EN]: 'Enjoy the Tatehana Wharf Morning Market, walks along Tanesashi Coast, visiting the Hasshoku Center, sake brewery tours, Mutsu Bay cruises, and market tours.',
          [Language.TH]: 'เพลิดเพลินกับตลาดเช้าทาเทฮานะ เดินเล่นตามชายฝั่งทาเนซาชิ เยี่ยมชมศูนย์ฮัชโชคุ ทัวร์โรงกลั่นสาเก ล่องเรือในอ่าวมุตสึ และทัวร์ตลาด',
          [Language.ZH]: '可以享受馆鼻岸壁早市、种差海岸散步、八食中心游览、酒窖参观、陆奥湾巡游、市场参观。',
        },
        local_cuisine: {
          [Language.JA]: '八戸せんべい汁、いちご煮、八戸前沖サバ、のっけ丼、地酒、南部せんべいが特産です。',
          [Language.EN]: 'Local specialties include Hachinohe Senbei Soup, Ichigo-ni (sea urchin and abalone soup), Hachinohe mackerel, Nokke-don (seafood rice bowl), local sake, and Nanbu rice crackers.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ซุปเซนเบฮาจิโนเฮะ ซุปอิจิโกะนิ (ซุปหอยเม่นและหอยอาวาบิ) ปลาซาบะฮาจิโนเฮะ ข้าวหน้าอาหารทะเลน็อคเคะด้ง สาเกท้องถิ่น และข้าวเกรียบนัมบุ',
          [Language.ZH]: '特产包括八户仙贝汤、海胆鲍鱼汤、八户近海青花鱼、海鲜盖饭、地酒、南部仙贝。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約3時間。八戸駅から市内各所へバスで移動可能です。',
          [Language.EN]: 'About 3 hours from Tokyo by Shinkansen. Buses available from Hachinohe Station to various city locations.',
          [Language.TH]: 'ใช้เวลาประมาณ 3 ชั่วโมงจากโตเกียวโดยรถไฟชินคันเซ็น มีรถบัสจากสถานีฮาจิโนเฮะไปยังสถานที่ต่างๆ ในเมือง',
          [Language.ZH]: '从东京乘新干线约3小时。从八户站可乘巴士前往市内各处。',
        },
        image: 'https://picsum.photos/seed/hachinohe/600/300',
      },
      {
        id: 'shirakami-mountains',
        name: {
          [Language.JA]: '白神山地',
          [Language.EN]: 'Shirakami Mountains',
          [Language.TH]: 'เทือกเขาชิราคามิ',
          [Language.ZH]: '白神山地',
        },
        description: {
          [Language.JA]: '青森県と秋田県にまたがる世界自然遺産。原生的なブナ林が広がり、貴重な動植物が生息する手つかずの自然が残されています。',
          [Language.EN]: 'A UNESCO World Heritage site spanning Aomori and Akita prefectures. Features pristine beech forests and untouched nature home to precious flora and fauna.',
          [Language.TH]: 'มรดกโลกทางธรรมชาติที่ครอบคลุมจังหวัดอาโอโมริและอากิตะ มีป่าบีชที่อุดมสมบูรณ์และธรรมชาติที่ไม่ถูกรบกวน เป็นที่อยู่ของพืชและสัตว์ที่มีค่า',
          [Language.ZH]: '跨越青森县和秋田县的世界自然遗产。原始山毛榉林广布，保留着珍贵动植物栖息的原始自然。',
        },
        history: {
          [Language.JA]: '1993年に世界自然遺産に登録。約8000年前から続く原生的なブナ林は、日本の森林生態系を代表する貴重な存在として評価されています。',
          [Language.EN]: 'Registered as a UNESCO World Heritage site in 1993. The pristine beech forest, continuing from about 8,000 years ago, is valued as a precious representation of Japan\'s forest ecosystem.',
          [Language.TH]: 'ขึ้นทะเบียนเป็นมรดกโลกทางธรรมชาติในปี 1993 ป่าบีชที่อุดมสมบูรณ์ซึ่งมีมาตั้งแต่ประมาณ 8,000 ปีก่อน ได้รับการยกย่องว่าเป็นตัวแทนอันล้ำค่าของระบบนิเวศป่าไม้ของญี่ปุ่น',
          [Language.ZH]: '1993年被列入世界自然遗产。约8000年前就存在的原始山毛榉林，被评价为代表日本森林生态系统的珍贵存在。',
        },
        culture_festivals: {
          [Language.JA]: 'ブナ林散策ツアー、白神山地フォトコンテスト、エコツーリズム、山開き、紅葉まつりなどのイベントが開催されます。',
          [Language.EN]: 'Events include beech forest walking tours, Shirakami Mountains photo contests, ecotourism activities, mountain opening ceremonies, and autumn leaves festivals.',
          [Language.TH]: 'มีกิจกรรมต่างๆ รวมถึงทัวร์เดินป่าบีช การประกวดภาพถ่ายเทือกเขาชิราคามิ กิจกรรมการท่องเที่ยวเชิงนิเวศ พิธีเปิดภูเขา และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办山毛榉林徒步tour、白神山地摄影大赛、生态旅游、山开き、红叶节等活动。',
        },
        things_to_do: {
          [Language.JA]: 'トレッキング、森林浴、バードウォッチング、写真撮影、滝巡り、ガイド付きエコツアー、紅葉狩りが楽しめます。',
          [Language.EN]: 'Enjoy trekking, forest bathing, bird watching, photography, waterfall visits, guided eco-tours, and autumn leaf viewing.',
          [Language.TH]: 'เพลิดเพลินกับการเดินป่า อาบป่า ดูนก ถ่ายภาพ เยี่ยมชมน้ำตก ทัวร์ธรรมชาติพร้อมไกด์ และชมใบไม้แดง',
          [Language.ZH]: '可以享受徒步、森林浴、观鸟、摄影、瀑布巡游、导览生态tour、赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、マタギ料理、岩魚料理、青森りんご、地酒が楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, mushroom dishes, Matagi (traditional hunter) cuisine, char fish dishes, Aomori apples, and local sake.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากเห็ด อาหารมาทากิ (นายพรานแบบดั้งเดิม) อาหารจากปลาชาร์ แอปเปิลอาโอโมริ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、猎人料理、岩鱼料理、青森苹果、地酒。',
        },
        access: {
          [Language.JA]: 'JR鰺ヶ沢駅または深浦駅からバスで約1時間。世界遺産センターや各ビジターセンターが観光の拠点となります。',
          [Language.EN]: 'About 1 hour by bus from JR Ajigasawa Station or Fukaura Station. The World Heritage Center and various visitor centers serve as tourism bases.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR อาจิกาซาวะหรือสถานีฟุคาอุระ ศูนย์มรดกโลกและศูนย์บริการนักท่องเที่ยวต่างๆ เป็นฐานสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR鯵鱼沢站或深浦站乘巴士约1小时。世界遗产中心和各访客中心是观光据点。',
        },
        image: 'https://picsum.photos/seed/shirakami-mountains/600/300',
      },
      {
        id: 'morioka',
        name: {
          [Language.JA]: '盛岡市',
          [Language.EN]: 'Morioka City',
          [Language.TH]: 'เมืองโมริโอกะ',
          [Language.ZH]: '盛冈市',
        },
        description: {
          [Language.JA]: '岩手県の県庁所在地で、南部藩の城下町として栄えた歴史ある都市。岩手山を望む景観、伝統工芸、そば文化で知られています。',
          [Language.EN]: 'The capital city of Iwate Prefecture, a historic city that flourished as a castle town of the Nambu domain. Known for its views of Mount Iwate, traditional crafts, and soba noodle culture.',
          [Language.TH]: 'เมืองหลวงของจังหวัดอิวาเตะ เป็นเมืองประวัติศาสตร์ที่เจริญรุ่งเรืองในฐานะเมืองปราสาทของแคว้นนัมบุ มีชื่อเสียงด้านวิวภูเขาอิวาเตะ งานฝีมือดั้งเดิม และวัฒนธรรมบะหมี่โซบะ',
          [Language.ZH]: '岩手县县厅所在地，作为南部藩城下町繁荣的历史悠久的城市。以岩手山景观、传统工艺和荞麦面文化闻名。',
        },
        history: {
          [Language.JA]: '1597年に南部利直により盛岡城が築城され、以来400年以上にわたり東北の重要な政治・文化の中心として発展してきました。',
          [Language.EN]: 'Morioka Castle was built in 1597 by Nambu Toshinao, and for over 400 years the city has developed as an important political and cultural center of Tohoku.',
          [Language.TH]: 'ปราสาทโมริโอกะสร้างขึ้นในปี 1597 โดยนัมบุ โทชินาโอะ และเมืองนี้ได้พัฒนาเป็นศูนย์กลางการเมืองและวัฒนธรรมที่สำคัญของโทโฮคุมากว่า 400 ปี',
          [Language.ZH]: '1597年南部利直修建盛冈城，此后400多年来一直作为东北地区重要的政治文化中心发展。',
        },
        culture_festivals: {
          [Language.JA]: '盛岡さんさ踊り、チャグチャグ馬コ、盛岡秋まつり、いしがきミュージックフェスティバルなど、伝統と現代が融合したイベントが開催されます。',
          [Language.EN]: 'Events blending tradition and modernity include the Morioka Sansa Odori Dance Festival, Chagu Chagu Umako Horse Festival, Morioka Autumn Festival, and Ishigaki Music Festival.',
          [Language.TH]: 'มีงานที่ผสมผสานประเพณีและความทันสมัย รวมถึงเทศกาลเต้นรำซันซะโมริโอกะ เทศกาลม้าจากุจากุอุมาโกะ เทศกาลฤดูใบไม้ร่วงโมริโอกะ และเทศกาลดนตรีอิชิงากิ',
          [Language.ZH]: '举办盛冈三飒舞、铃铛马游行、盛冈秋季节、石垣音乐节等传统与现代融合的活动。',
        },
        things_to_do: {
          [Language.JA]: '盛岡城跡公園散策、南部鉄器体験、わんこそば挑戦、石割桜見学、啜り屋巡り、手づくり村工房見学が楽しめます。',
          [Language.EN]: 'Enjoy walking in Morioka Castle Site Park, Nambu ironware experiences, Wanko Soba challenge, viewing the Rock-Breaking Cherry Tree, visiting noodle shops, and touring handicraft workshops.',
          [Language.TH]: 'เพลิดเพลินกับการเดินเล่นในสวนซากปราสาทโมริโอกะ ประสบการณ์เครื่องเหล็กนัมบุ ท้าทายวันโกะโซบะ ชมต้นซากุระอิชิวาริ เยี่ยมชมร้านบะหมี่ และเยี่ยมชมโรงงานหัตถกรรม',
          [Language.ZH]: '可以享受盛冈城迹公园散步、南部铁器体验、挑战碗子荞麦面、参观石割樱花、巡访面馆、参观手工艺村工房。',
        },
        local_cuisine: {
          [Language.JA]: 'わんこそば、じゃじゃ麺、冷麺、南部せんべい、福田パン、岩手短角和牛が特産です。',
          [Language.EN]: 'Local specialties include Wanko Soba, Jaja-men, cold noodles, Nanbu rice crackers, Fukuda bread, and Iwate Shorthorn beef.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ วันโกะโซบะ จาจาเมน บะหมี่เย็น ข้าวเกรียบนัมบุ ขนมปังฟุคุดะ และเนื้อวัวชอร์ตฮอร์นอิวาเตะ',
          [Language.ZH]: '特产包括碗子荞麦面、炸酱面、冷面、南部仙贝、福田面包、岩手短角和牛。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約2時間10分。盛岡駅から市内各所へバスで移動可能です。',
          [Language.EN]: 'About 2 hours 10 minutes from Tokyo by Shinkansen. Buses available from Morioka Station to various city locations.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมง 10 นาทีจากโตเกียวโดยรถไฟชินคันเซ็น มีรถบัสจากสถานีโมริโอกะไปยังสถานที่ต่างๆ ในเมือง',
          [Language.ZH]: '从东京乘新干线约2小时10分钟。从盛冈站可乘巴士前往市内各处。',
        },
        image: 'https://picsum.photos/seed/morioka/600/300',
      },
      {
        id: 'dewa-sanzan',
        name: {
          [Language.JA]: '出羽三山',
          [Language.EN]: 'Dewa Sanzan',
          [Language.TH]: 'เทือกเขาเดวะซันซัน',
          [Language.ZH]: '出羽三山',
        },
        description: {
          [Language.JA]: '山形県の月山、羽黒山、湯殿山からなる三つの霊山。修験道の聖地として1400年以上の歴史を持ち、独自の山岳信仰文化を今に伝えています。',
          [Language.EN]: 'Three sacred mountains in Yamagata Prefecture: Mount Gassan, Mount Haguro, and Mount Yudono. With over 1,400 years of history as a Shugendo pilgrimage site, they preserve a unique mountain worship culture.',
          [Language.TH]: 'ภูเขาศักดิ์สิทธิ์สามลูกในจังหวัดยามากาตะ: ภูเขากัสซัน ภูเขาฮางุโระ และภูเขายุโดโนะ มีประวัติศาสตร์มากกว่า 1,400 ปีในฐานะสถานที่แสวงบุญชูเก็นโด รักษาวัฒนธรรมการบูชาภูเขาที่เป็นเอกลักษณ์',
          [Language.ZH]: '由山形县的月山、羽黑山、汤殿山组成的三座灵山。作为修验道圣地拥有1400多年历史，传承着独特的山岳信仰文化。',
        },
        history: {
          [Language.JA]: '593年に修験道の開祖・役行者により開山されたと伝えられ、以来、生まれ変わりの象徴として、多くの修験者や巡礼者が訪れています。',
          [Language.EN]: 'Reportedly founded in 593 by En no Gyoja, the founder of Shugendo. Since then, it has been visited by many mountain ascetics and pilgrims as a symbol of rebirth.',
          [Language.TH]: 'มีรายงานว่าก่อตั้งในปี 593 โดยเอ็น โนะ เกียวจะ ผู้ก่อตั้งลัทธิชูเก็นโด ตั้งแต่นั้นมา มีนักพรตและผู้แสวงบุญมากมายมาเยือนในฐานะสัญลักษณ์แห่งการเกิดใหม่',
          [Language.ZH]: '相传于593年由修验道开祖役行者开山，此后作为重生的象征，众多修验者和朝圣者前来参拜。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、松例祭、夏祭り、奥の院祭、御縁日、山伏修行体験など、年間を通じて伝統的な行事が行われます。',
          [Language.EN]: 'Traditional events throughout the year include Mountain Opening ceremonies, Shorei Festival, Summer Festival, Okunoin Festival, temple fair days, and yamabushi ascetic training experiences.',
          [Language.TH]: 'มีงานประเพณีตลอดทั้งปี รวมถึงพิธีเปิดภูเขา เทศกาลโชเรย์ เทศกาลฤดูร้อน เทศกาลโอคุโนอิน งานวัด และประสบการณ์การฝึกฝนยามาบุชิ',
          [Language.ZH]: '全年举行山开祭、松例祭、夏季节、奥院节、缘日、山伏修行体验等传统活动。',
        },
        things_to_do: {
          [Language.JA]: '羽黒山五重塔参拝、石段登り、山伏体験、修験道料理体験、自然散策、写真撮影が楽しめます。',
          [Language.EN]: 'Enjoy visiting Haguro\'s Five-Story Pagoda, climbing stone steps, yamabushi ascetic experiences, Shugendo cuisine experiences, nature walks, and photography.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมเจดีย์ห้าชั้นฮางุโระ ปีนบันไดหิน ประสบการณ์ยามาบุชิ ประสบการณ์อาหารชูเก็นโด เดินชมธรรมชาติ และถ่ายภาพ',
          [Language.ZH]: '可以享受参拜羽黑山五重塔、登石阶、山伏体验、修验道料理体验、自然散策、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、だだちゃ豆、山菜料理、きのこ料理、出羽の白酒、在来そばが楽しめます。',
          [Language.EN]: 'Local specialties include Buddhist vegetarian cuisine, Dadacha-mame edamame, mountain vegetable dishes, mushroom dishes, Dewa white sake, and local soba noodles.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารเจแบบพุทธ ถั่วแระญี่ปุ่นดาดาชามาเมะ อาหารจากผักภูเขา อาหารจากเห็ด สาเกขาวเดวะ และบะหมี่โซบะท้องถิ่น',
          [Language.ZH]: '可以品尝精进料理、茶豆、山菜料理、蘑菇料理、出羽白酒、当地荞麦面。',
        },
        access: {
          [Language.JA]: 'JR鶴岡駅からバスで約40分。各山へは羽黒山を起点にアクセスします。',
          [Language.EN]: 'About 40 minutes by bus from JR Tsuruoka Station. Access to each mountain begins from Mount Haguro.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR สึรุโอกะ การเข้าถึงแต่ละภูเขาเริ่มจากภูเขาฮางุโระ',
          [Language.ZH]: '从JR鹤冈站乘巴士约40分钟。以羽黑山为起点访问各山。',
        },
        image: 'https://picsum.photos/seed/dewa-sanzan/600/300',
      },
      {
        id: 'aomori-city',
        name: {
          [Language.JA]: '青森市',
          [Language.EN]: 'Aomori City',
          [Language.TH]: 'เมืองอาโอโมริ',
          [Language.ZH]: '青森市',
        },
        description: {
          [Language.JA]: '青森県の県庁所在地で、津軽海峡に面した港町。ねぶた祭で全国的に知られ、新鮮な海産物と独自の食文化、豊かな自然が魅力です。',
          [Language.EN]: 'The capital city of Aomori Prefecture, a port town facing the Tsugaru Strait. Nationally known for its Nebuta Festival, fresh seafood, unique food culture, and rich natural surroundings.',
          [Language.TH]: 'เมืองหลวงของจังหวัดอาโอโมริ เมืองท่าที่หันหน้าเข้าหาช่องแคบสึการุ เป็นที่รู้จักทั่วประเทศจากเทศกาลเนบุตะ อาหารทะเลสด วัฒนธรรมอาหารที่เป็นเอกลักษณ์ และธรรมชาติที่อุดมสมบูรณ์',
          [Language.ZH]: '青森县县厅所在地，面向津轻海峡的港口城市。以睡魔祭全国闻名，以新鲜海产品、独特的饮食文化和丰富的自然环境为特色。',
        },
        history: {
          [Language.JA]: '江戸時代から北前船の寄港地として栄え、明治以降は津軽地方の政治・経済の中心として発展。1993年に東北新幹線が開通し、さらなる発展を遂げています。',
          [Language.EN]: 'Flourished as a port for Kitamaebune trading ships during the Edo period, and developed as the political and economic center of the Tsugaru region after the Meiji period. Further development followed the 1993 opening of the Tohoku Shinkansen line.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะท่าเรือสำหรับเรือการค้าคิตามาเอบุเนะในสมัยเอโดะ และพัฒนาเป็นศูนย์กลางการเมืองและเศรษฐกิจของภูมิภาคสึการุหลังสมัยเมจิ พัฒนาต่อเนื่องหลังจากการเปิดรถไฟชินคันเซ็นโทโฮคุในปี 1993',
          [Language.ZH]: '江户时代作为北前船停靠港繁荣，明治以后发展为津轻地区的政治经济中心。1993年东北新干线开通后发展更进一步。',
        },
        culture_festivals: {
          [Language.JA]: '青森ねぶた祭、青森花火大会、青森春まつり、八甲田丸イルミネーション、冬の八甲田スノーモンスターなど、四季折々のイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Aomori Nebuta Festival, Aomori Fireworks Display, Aomori Spring Festival, Hakkodamaru Illumination, and winter Hakkoda Snow Monsters.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลเนบุตะอาโอโมริ การแสดงดอกไม้ไฟอาโอโมริ เทศกาลฤดูใบไม้ผลิอาโอโมริ การประดับไฟฮักโคดามารุ และปีศาจหิมะฮักโคดะในฤดูหนาว',
          [Language.ZH]: '举办青森睡魔祭、青森烟花大会、青森春节、八甲田丸彩灯、冬季八甲田雪怪等四季活动。',
        },
        things_to_do: {
          [Language.JA]: 'ねぶたの家ワ・ラッセ見学、八甲田丸見学、青森県立美術館、アスパム展望台、朝市巡り、市場散策が楽しめます。',
          [Language.EN]: 'Enjoy visiting Nebuta Museum Wa Rasse, Hakkodamaru Memorial Ship, Aomori Museum of Art, ASPAM Observatory, morning markets, and market walks.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมพิพิธภัณฑ์เนบุตะวะรัสเสะ เรืออนุสรณ์ฮักโคดามารุ พิพิธภัณฑ์ศิลปะอาโอโมริ หอชมวิวอาสปัม ตลาดเช้า และเดินเล่นในตลาด',
          [Language.ZH]: '可以参观睡魔之家wa rasse、八甲田丸、青森县立美术馆、aspam展望台、逛早市、市场散步。',
        },
        local_cuisine: {
          [Language.JA]: '青森県産りんご、大間まぐろ、いちご煮、貝焼き味噌、青森生姜味噌おでん、帆立、じゃっぱ汁が特産です。',
          [Language.EN]: 'Local specialties include Aomori apples, Oma tuna, Ichigo-ni (sea urchin and abalone soup), grilled shellfish with miso, Aomori ginger miso oden, scallops, and Jappa-jiru fish soup.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ แอปเปิลอาโอโมริ ปลาทูน่าโอมะ ซุปอิจิโกะนิ หอยย่างกับมิโสะ โอเด้งมิโสะขิงอาโอโมริ หอยเชลล์ และซุปปลาจัปปะจิรุ',
          [Language.ZH]: '特产包括青森县产苹果、大间金枪鱼、海胆鲍鱼汤、贝烤味噌、青森姜味噌关东煮、扇贝、鱼汤。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約3時間20分。青森空港から市内へはバスで約35分です。',
          [Language.EN]: 'About 3 hours 20 minutes from Tokyo by Shinkansen. About 35 minutes by bus from Aomori Airport to the city center.',
          [Language.TH]: 'ใช้เวลาประมาณ 3 ชั่วโมง 20 นาทีจากโตเกียวโดยรถไฟชินคันเซ็น ประมาณ 35 นาทีโดยรถบัสจากสนามบินอาโอโมริถึงใจกลางเมือง',
          [Language.ZH]: '从东京乘新干线约3小时20分钟。从青森机场乘巴士到市区约35分钟。',
        },
        image: 'https://picsum.photos/seed/aomori-city/600/300',
      },
      {
        id: 'genbikei',
        name: {
          [Language.JA]: '厳美渓',
          [Language.EN]: 'Genbikei Gorge',
          [Language.TH]: 'หุบเขาเก็นบิเค',
          [Language.ZH]: '严美溪',
        },
        description: {
          [Language.JA]: '岩手県一関市にある国の名勝。全長2キロメートルに及ぶ渓谷で、奇岩怪石と清流が織りなす景観が魅力です。四季折々の自然美を楽しめます。',
          [Language.EN]: 'A National Place of Scenic Beauty in Ichinoseki City, Iwate Prefecture. A 2-kilometer gorge known for its unique rock formations and clear streams, offering natural beauty through all seasons.',
          [Language.TH]: 'สถานที่ทิวทัศน์งดงามแห่งชาติในเมืองอิจิโนเซกิ จังหวัดอิวาเตะ หุบเขายาว 2 กิโลเมตรที่มีชื่อเสียงจากการก่อตัวของหินที่เป็นเอกลักษณ์และลำธารใส นำเสนอความงามตามธรรมชาติตลอดทั้งสี่ฤดู',
          [Language.ZH]: '位于岩手县一关市的国家名胜。全长2公里的峡谷以奇岩怪石与清流交织的景观为特色，四季可享自然美景。',
        },
        history: {
          [Language.JA]: '古くから景勝地として知られ、松尾芭蕉も「おくのほそ道」で訪れています。1927年に国の名勝に指定され、多くの観光客が訪れる観光スポットとなっています。',
          [Language.EN]: 'Long known as a scenic spot, it was visited by Matsuo Basho during his "Narrow Road to the Deep North" journey. Designated as a National Place of Scenic Beauty in 1927, it has become a popular tourist destination.',
          [Language.TH]: 'เป็นที่รู้จักมานานในฐานะจุดชมวิว มัตสึโอะ บาโชได้มาเยือนระหว่างการเดินทาง "เส้นทางแคบสู่ภาคเหนือลึก" ได้รับการกำหนดให้เป็นสถานที่ทิวทัศน์งดงามแห่งชาติในปี 1927 กลายเป็นสถานที่ท่องเที่ยวยอดนิยม',
          [Language.ZH]: '自古以来就是著名的景胜地，松尾芭蕉在《奥之细道》中也曾造访。1927年被指定为国家名胜，成为众多游客造访的观光景点。',
        },
        culture_festivals: {
          [Language.JA]: '厳美渓まつり、新緑まつり、もみじまつり、冬の氷瀑まつりなど、季節ごとの催しが開催されます。',
          [Language.EN]: 'Seasonal events include the Genbikei Festival, Fresh Green Festival, Autumn Leaves Festival, and Winter Ice Falls Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลเก็นบิเค เทศกาลใบไม้เขียว เทศกาลใบไม้แดง และเทศกาลน้ำตกน้ำแข็งในฤดูหนาว',
          [Language.ZH]: '举办严美溪节、新绿节、红叶节、冬季冰瀑节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '遊歩道散策、空飛ぶだんご、渓流釣り、写真撮影、紅葉狩り、周辺の温泉巡りが楽しめます。',
          [Language.EN]: 'Enjoy walking trails, flying dango dumplings, stream fishing, photography, autumn leaf viewing, and visiting nearby hot springs.',
          [Language.TH]: 'เพลิดเพลินกับเส้นทางเดิน ขนมดังโกะลอยฟ้า ตกปลาในลำธาร ถ่ายภาพ ชมใบไม้แดง และเยี่ยมชมบ่อน้ำร้อนใกล้เคียง',
          [Language.ZH]: '可以享受步道散步、空中团子、溪流钓鱼、摄影、赏红叶、周边温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: 'わんこそば、もち料理、岩魚の塩焼き、空飛ぶだんご、地酒、山菜料理が楽しめます。',
          [Language.EN]: 'Local specialties include Wanko Soba noodles, mochi dishes, grilled char fish, flying dango dumplings, local sake, and mountain vegetable dishes.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ บะหมี่วันโกะโซบะ อาหารจากโมจิ ปลาชาร์ย่าง ขนมดังโกะลอยฟ้า สาเกท้องถิ่น และอาหารจากผักภูเขา',
          [Language.ZH]: '可以品尝碗子荞麦面、年糕料理、岩鱼盐烤、空中团子、地酒、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR一ノ関駅からバスで約20分。レンタカーでの観光も便利です。',
          [Language.EN]: 'About 20 minutes by bus from JR Ichinoseki Station. Rental cars are also convenient for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 20 นาทีโดยรถบัสจากสถานี JR อิจิโนเซกิ การเช่ารถยนต์ก็สะดวกสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR一关站乘巴士约20分钟。租车观光也很方便。',
        },
        image: 'https://picsum.photos/seed/genbikei/600/300',
      },
      {
        id: 'hirosaki',
        name: {
          [Language.JA]: '弘前市',
          [Language.EN]: 'Hirosaki City',
          [Language.TH]: 'เมืองฮิโรซากิ',
          [Language.ZH]: '弘前市',
        },
        description: {
          [Language.JA]: '青森県南西部に位置する城下町。弘前城と桜、りんご産業で知られ、津軽文化の中心地として長い歴史を持つ文化都市です。',
          [Language.EN]: 'A castle town in southwestern Aomori Prefecture. Known for Hirosaki Castle, cherry blossoms, and apple industry, it\'s a cultural city with a long history as the center of Tsugaru culture.',
          [Language.TH]: 'เมืองปราสาทในตะวันตกเฉียงใต้ของจังหวัดอาโอโมริ เป็นที่รู้จักจากปราสาทฮิโรซากิ ดอกซากุระ และอุตสาหกรรมแอปเปิล เป็นเมืองวัฒนธรรมที่มีประวัติศาสตร์อันยาวนานในฐานะศูนย์กลางวัฒนธรรมสึการุ',
          [Language.ZH]: '位于青森县西南部的城下町。以弘前城和樱花、苹果产业闻名，作为津轻文化中心拥有悠久历史的文化城市。',
        },
        history: {
          [Language.JA]: '1611年に津軽氏により弘前城が築城され、以来400年以上にわたり津軽地方の政治・文化の中心として発展してきました。',
          [Language.EN]: 'Hirosaki Castle was built in 1611 by the Tsugaru clan, and for over 400 years, the city has developed as the political and cultural center of the Tsugaru region.',
          [Language.TH]: 'ปราสาทฮิโรซากิสร้างขึ้นในปี 1611 โดยตระกูลสึการุ และเมืองนี้ได้พัฒนาเป็นศูนย์กลางการเมืองและวัฒนธรรมของภูมิภาคสึการุมากว่า 400 ปี',
          [Language.ZH]: '1611年津轻氏修建弘前城，此后400多年来一直作为津轻地区的政治文化中心发展。',
        },
        culture_festivals: {
          [Language.JA]: '弘前さくらまつり、弘前ねぷたまつり、菊と紅葉まつり、りんご収穫祭、雪灯篭まつりなど、四季折々の祭りが開催されます。',
          [Language.EN]: 'Seasonal festivals include Hirosaki Cherry Blossom Festival, Hirosaki Neputa Festival, Chrysanthemum and Autumn Leaves Festival, Apple Harvest Festival, and Snow Lantern Festival.',
          [Language.TH]: 'มีเทศกาลตามฤดูกาล รวมถึงเทศกาลดอกซากุระฮิโรซากิ เทศกาลเนปุตะฮิโรซากิ เทศกาลดอกเบญจมาศและใบไม้แดง เทศกาลเก็บเกี่ยวแอปเปิล และเทศกาลโคมไฟหิมะ',
          [Language.ZH]: '举办弘前樱花节、弘前睡魔节、菊花与红叶节、苹果收获节、雪灯笼节等四季节日。',
        },
        things_to_do: {
          [Language.JA]: '弘前公園散策、りんご園巡り、津軽三味線ライブ、禅林街散策、城下町探索、りんご収穫体験が楽しめます。',
          [Language.EN]: 'Enjoy walking in Hirosaki Park, visiting apple orchards, Tsugaru Shamisen live performances, exploring Zenrin Street, castle town exploration, and apple picking experiences.',
          [Language.TH]: 'เพลิดเพลินกับการเดินเล่นในสวนฮิโรซากิ เยี่ยมชมสวนแอปเปิล การแสดงสดซามิเซ็นสึการุ สำรวจถนนเซ็นริน สำรวจเมืองปราสาท และประสบการณ์การเก็บแอปเปิล',
          [Language.ZH]: '可以享受弘前公园散步、苹果园巡游、津轻三味线现场演奏、禅林街散策、城下町探索、苹果采摘体验。',
        },
        local_cuisine: {
          [Language.JA]: 'りんごスイーツ、津軽そば、津軽おでん、嶽きみ、じょっぱり漬け、地酒が特産です。',
          [Language.EN]: 'Local specialties include apple sweets, Tsugaru soba, Tsugaru oden, Dake sweet corn, Joppari pickles, and local sake.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ขนมหวานแอปเปิล โซบะสึการุ โอเด้งสึการุ ข้าวโพดหวานดาเคะ ผักดองจอปปาริ และสาเกท้องถิ่น',
          [Language.ZH]: '特产包括苹果甜点、津轻荞麦面、津轻关东煮、岳甜玉米、顽固腌菜、地酒。',
        },
        access: {
          [Language.JA]: 'JR弘前駅から市内各所へバスで移動可能。弘前公園までは徒歩約15分です。',
          [Language.EN]: 'Buses available from JR Hirosaki Station to various city locations. About 15 minutes walk to Hirosaki Park.',
          [Language.TH]: 'มีรถบัสจากสถานี JR ฮิโรซากิไปยังสถานที่ต่างๆ ในเมือง ใช้เวลาเดินประมาณ 15 นาทีถึงสวนฮิโรซากิ',
          [Language.ZH]: '从JR弘前站可乘巴士前往市内各处。步行至弘前公园约15分钟。',
        },
        image: 'https://picsum.photos/seed/hirosaki/600/300',
      },
      {
        id: 'mount-kurikoma',
        name: {
          [Language.JA]: '栗駒山',
          [Language.EN]: 'Mount Kurikoma',
          [Language.TH]: 'ภูเขาคุริโคมะ',
          [Language.ZH]: '栗驹山',
        },
        description: {
          [Language.JA]: '岩手県、宮城県、秋田県の県境に位置する標高1,627メートルの活火山。紅葉の名所として知られ、高山植物の宝庫でもあります。',
          [Language.EN]: 'An active volcano standing at 1,627 meters on the border of Iwate, Miyagi, and Akita prefectures. Known for autumn colors and as a treasure trove of alpine plants.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นสูง 1,627 เมตร ตั้งอยู่บนพรมแดนระหว่างจังหวัดอิวาเตะ มิยากิ และอากิตะ เป็นที่รู้จักในด้านสีสันฤดูใบไม้ร่วงและเป็นแหล่งพืชพรรณบนภูเขาที่อุดมสมบูรณ์',
          [Language.ZH]: '位于岩手县、宫城县、秋田县县境的海拔1,627米的活火山。以红叶胜地闻名，也是高山植物的宝库。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇拝され、1968年に国定公園に指定されました。火山活動は現在も継続しており、温泉地としても人気があります。',
          [Language.EN]: 'Long worshipped as an object of mountain faith and designated as a Quasi-National Park in 1968. Volcanic activity continues today, making it popular for hot springs.',
          [Language.TH]: 'ได้รับการบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนานและได้รับการกำหนดให้เป็นอุทยานกึ่งแห่งชาติในปี 1968 กิจกรรมภูเขาไฟยังคงดำเนินอยู่จนถึงปัจจุบัน ทำให้เป็นที่นิยมสำหรับบ่อน้ำร้อน',
          [Language.ZH]: '自古以来就作为山岳信仰对象受到崇拜，1968年被指定为国定公园。火山活动至今仍在继续，作为温泉胜地也很受欢迎。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、紅葉まつり、温泉まつり、山菜まつり、雪灯りの宿など、季節に応じたイベントが開催されます。',
          [Language.EN]: 'Seasonal events include Mountain Opening Ceremony, Autumn Leaves Festival, Hot Spring Festival, Mountain Vegetable Festival, and Snow Light Inn.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงพิธีเปิดภูเขา เทศกาลใบไม้แดง เทศกาลน้ำพุร้อน เทศกาลผักภูเขา และที่พักแสงหิมะ',
          [Language.ZH]: '举办山开祭、红叶节、温泉节、山菜节、雪灯之宿等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、紅葉狩り、温泉巡り、山菜採り、野鳥観察、写真撮影が楽しめます。',
          [Language.EN]: 'Enjoy mountain climbing, trekking, autumn leaf viewing, hot spring hopping, mountain vegetable foraging, bird watching, and photography.',
          [Language.TH]: 'เพลิดเพลินกับการปีนเขา เดินป่า ชมใบไม้แดง แช่น้ำพุร้อน เก็บผักภูเขา ดูนก และถ่ายภาพ',
          [Language.ZH]: '可以享受登山、徒步、赏红叶、温泉巡游、采集山菜、观鸟、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、岩魚料理、温泉まんじゅう、地酒、そばが楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, mushroom dishes, char fish dishes, hot spring manju buns, local sake, and soba noodles.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากเห็ด อาหารจากปลาชาร์ ขนมมันจูน้ำพุร้อน สาเกท้องถิ่น และบะหมี่โซบะ',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、岩鱼料理、温泉馒头、地酒、荞麦面。',
        },
        access: {
          [Language.JA]: 'JR一関駅または栗駒駅からバスで約1時間。登山口まではさらにシャトルバスが運行しています。',
          [Language.EN]: 'About 1 hour by bus from JR Ichinoseki Station or Kurikoma Station. Shuttle buses operate to the trailhead.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR อิจิโนเซกิหรือสถานีคุริโคมะ มีรถรับส่งไปยังจุดเริ่มต้นเส้นทางเดินเขา',
          [Language.ZH]: '从JR一关站或栗驹站乘巴士约1小时。另有班车运行至登山口。',
        },
        image: 'https://picsum.photos/seed/mount-kurikoma/600/300',
      },
      {
        id: 'sendai',
        name: {
          [Language.JA]: '仙台市',
          [Language.EN]: 'Sendai City',
          [Language.TH]: 'เมืองเซนได',
          [Language.ZH]: '仙台市',
        },
        description: {
          [Language.JA]: '東北地方最大の都市で、宮城県の県庁所在地。「杜の都」として知られ、伊達政宗の城下町として栄えた歴史と、現代的な都市機能が調和する街です。',
          [Language.EN]: 'The largest city in the Tohoku region and capital of Miyagi Prefecture. Known as the "City of Trees," it harmoniously blends its history as Date Masamune\'s castle town with modern urban functions.',
          [Language.TH]: 'เมืองที่ใหญ่ที่สุดในภูมิภาคโทโฮคุและเป็นเมืองหลวงของจังหวัดมิยางิ รู้จักในนาม "เมืองแห่งต้นไม้" ผสมผสานประวัติศาสตร์ในฐานะเมืองปราสาทของดาเตะ มาซามุเนะกับความเป็นเมืองสมัยใหม่อย่างลงตัว',
          [Language.ZH]: '东北地区最大的城市，宫城县县厅所在地。作为"树木之都"而闻名，是伊达政宗的城下町与现代城市功能和谐共存的城市。',
        },
        history: {
          [Language.JA]: '1601年に伊達政宗が仙台城を築城し、以来400年以上にわたり東北の政治・経済・文化の中心として発展してきました。2011年の東日本大震災からの復興も着実に進んでいます。',
          [Language.EN]: 'Date Masamune built Sendai Castle in 1601, and for over 400 years, the city has developed as the political, economic, and cultural center of Tohoku. Recovery from the 2011 Great East Japan Earthquake continues steadily.',
          [Language.TH]: 'ดาเตะ มาซามุเนะสร้างปราสาทเซนไดในปี 1601 และเป็นเวลากว่า 400 ปีที่เมืองได้พัฒนาเป็นศูนย์กลางการเมือง เศรษฐกิจ และวัฒนธรรมของโทโฮคุ การฟื้นฟูจากแผ่นดินไหวและสึนามิครั้งใหญ่ทางตะวันออกของญี่ปุ่นปี 2011 ดำเนินไปอย่างต่อเนื่อง',
          [Language.ZH]: '1601年伊达政宗修建仙台城，此后400多年来一直作为东北地区的政治、经济、文化中心发展。从2011年东日本大地震中的重建也在稳步推进。',
        },
        culture_festivals: {
          [Language.JA]: '仙台七夕まつり、仙台青葉まつり、定禅寺ストリートジャズフェスティバル、SENDAI光のページェント、どんと祭など、伝統と現代が融合した祭りが開催されます。',
          [Language.EN]: 'Events blending tradition and modernity include Sendai Tanabata Festival, Sendai Aoba Festival, Jozenji Street Jazz Festival, SENDAI Pageant of Starlight, and Donto Festival.',
          [Language.TH]: 'งานที่ผสมผสานประเพณีและความทันสมัย รวมถึงเทศกาลทานาบาตะเซนได เทศกาลอาโอบะเซนได เทศกาลแจ๊สถนนโจเซ็นจิ งานประดับไฟเซนได และเทศกาลดนโตะ',
          [Language.ZH]: '举办仙台七夕节、仙台青叶节、定禅寺街爵士音乐节、SENDAI光之盛典、烧大节等传统与现代融合的节日。',
        },
        things_to_do: {
          [Language.JA]: '瑞鳳殿参拝、仙台城址散策、大崎八幡宮見学、青葉通り散策、国分町での夜遊び、牛タン屋巡りが楽しめます。',
          [Language.EN]: 'Enjoy visiting Zuihoden Mausoleum, exploring Sendai Castle Site, touring Osaki Hachimangu Shrine, walking down Aoba Street, nightlife in Kokubuncho, and beef tongue restaurant hopping.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมสุสานซุยโฮเด็น สำรวจซากปราสาทเซนได เที่ยวชมศาลเจ้าโอซากิฮาจิมังกู เดินเล่นถนนอาโอบะ ชีวิตกลางคืนในโคคุบุนโจ และชิมลิ้นวัวตามร้านต่างๆ',
          [Language.ZH]: '可以参拜瑞凤殿、漫步仙台城址、参观大崎八幡宫、散步青叶大街、国分町夜游、牛舌店巡游。',
        },
        local_cuisine: {
          [Language.JA]: '牛タン料理、笹かまぼこ、ずんだ餅、はらこ飯、芋煮、利久のおにぎり、萩の月が特産です。',
          [Language.EN]: 'Local specialties include beef tongue dishes, Sasa Kamaboko fish cakes, Zunda mochi, Harako rice with salmon roe, Imoni hot pot, Rikyu\'s onigiri, and Hagi no Tsuki sweets.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากลิ้นวัว ปลาคามาโบโกะ ขนมโมจิซุนดะ ข้าวฮาราโกะกับไข่ปลาแซลมอน หม้อไฟอิโมนิ ข้าวปั้นริคิว และขนมฮากิโนะสึกิ',
          [Language.ZH]: '特产包括牛舌料理、笹蒲鉾、枝豆年糕、鲑鱼子饭、芋煮、利久饭团、萩之月。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約90分。仙台空港から市内までは仙台空港アクセス線で最短17分です。',
          [Language.EN]: 'About 90 minutes from Tokyo by Shinkansen. From Sendai Airport to the city center takes as little as 17 minutes via the Sendai Airport Access Line.',
          [Language.TH]: 'ใช้เวลาประมาณ 90 นาทีจากโตเกียวโดยรถไฟชินคันเซ็น จากสนามบินเซนไดถึงใจกลางเมืองใช้เวลาเพียง 17 นาทีโดยรถไฟแอคเซสไลน์สนามบินเซนได',
          [Language.ZH]: '从东京乘新干线约90分钟。从仙台机场到市区通过仙台机场线最快17分钟。',
        },
        image: 'https://picsum.photos/seed/sendai/600/300',
      },
      {
        id: 'mount-hakkyo',
        name: {
          [Language.JA]: '八甲田山',
          [Language.EN]: 'Mount Hakkyo',
          [Language.TH]: 'ภูเขาฮักเคียว',
          [Language.ZH]: '八甲田山',
        },
        description: {
          [Language.JA]: '青森県に位置する複数の火山からなる山群。豪雪地帯として知られ、スキーや温泉、紅葉スポットとして人気があります。冬の樹氷は特に有名です。',
          [Language.EN]: 'A volcanic mountain range in Aomori Prefecture. Known as a heavy snow area, popular for skiing, hot springs, and autumn colors. Especially famous for its winter "snow monsters" (ice-covered trees).',
          [Language.TH]: 'เทือกเขาภูเขาไฟในจังหวัดอาโอโมริ เป็นที่รู้จักในฐานะพื้นที่หิมะตกหนัก เป็นที่นิยมสำหรับการเล่นสกี บ่อน้ำร้อน และชมใบไม้แดง มีชื่อเสียงโดยเฉพาะ "ปีศาจหิมะ" (ต้นไม้ปกคลุมด้วยน้ำแข็ง) ในฤดูหนาว',
          [Language.ZH]: '位于青森县的火山群。以豪雪地带闻名，作为滑雪、温泉、红叶景点很受欢迎。冬季树冰特别有名。',
        },
        history: {
          [Language.JA]: '1902年の八甲田雪中行軍遭難事件で知られ、その後スキー場として開発。1956年に十和田八幡平国立公園に指定されました。',
          [Language.EN]: 'Known for the 1902 Hakkoda Mountains incident involving military training in snow, later developed as a ski resort. Designated as part of Towada-Hachimantai National Park in 1956.',
          [Language.TH]: 'เป็นที่รู้จักจากเหตุการณ์เทือกเขาฮักโคดะในปี 1902 ที่เกี่ยวข้องกับการฝึกทหารในหิมะ ต่อมาได้รับการพัฒนาเป็นรีสอร์ทสกี ได้รับการกำหนดให้เป็นส่วนหนึ่งของอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1956',
          [Language.ZH]: '以1902年八甲田雪中行军遇难事件闻名，之后开发为滑雪场。1956年被指定为十和田八幡平国立公园。',
        },
        culture_festivals: {
          [Language.JA]: '樹氷まつり、紅葉まつり、スノーフェスティバル、山開き、温泉まつりなど、季節に応じたイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Snow Monster Festival, Autumn Leaves Festival, Snow Festival, Mountain Opening Ceremony, and Hot Spring Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงเทศกาลปีศาจหิมะ เทศกาลใบไม้แดง เทศกาลหิมะ พิธีเปิดภูเขา และเทศกาลน้ำพุร้อน',
          [Language.ZH]: '举办树冰节、红叶节、雪节、山开祭、温泉节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: 'スキー、スノーボード、ロープウェイ観光、温泉巡り、トレッキング、紅葉狩り、樹氷観賞が楽しめます。',
          [Language.EN]: 'Enjoy skiing, snowboarding, ropeway sightseeing, hot spring hopping, trekking, autumn leaf viewing, and snow monster viewing.',
          [Language.TH]: 'เพลิดเพลินกับการเล่นสกี สโนว์บอร์ด ชมวิวจากกระเช้าลอยฟ้า แช่น้ำพุร้อน เดินป่า ชมใบไม้แดง และชมปีศาจหิมะ',
          [Language.ZH]: '可以享受滑雪、单板滑雪、缆车观光、温泉巡游、徒步、赏红叶、观赏树冰。',
        },
        local_cuisine: {
          [Language.JA]: '温泉たまご、山菜料理、きのこ料理、青森りんご、地酒、十和田バラ焼きが楽しめます。',
          [Language.EN]: 'Local specialties include hot spring eggs, mountain vegetable dishes, mushroom dishes, Aomori apples, local sake, and Towada Barayaki (grilled beef and onions).',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ไข่ออนเซ็น อาหารจากผักภูเขา อาหารจากเห็ด แอปเปิลอาโอโมริ สาเกท้องถิ่น และโทวาดะบาระยากิ (เนื้อวัวและหัวหอมย่าง)',
          [Language.ZH]: '可以品尝温泉蛋、山菜料理、蘑菇料理、青森苹果、地酒、十和田烤肉。',
        },
        access: {
          [Language.JA]: 'JR青森駅からバスで約1時間。ロープウェイで山頂へアクセスできます。',
          [Language.EN]: 'About 1 hour by bus from JR Aomori Station. Access to the summit available via ropeway.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR อาโอโมริ สามารถขึ้นถึงยอดเขาได้โดยกระเช้าลอยฟ้า',
          [Language.ZH]: '从JR青森站乘巴士约1小时。可通过缆车前往山顶。',
        },
        image: 'https://picsum.photos/seed/mount-hakkyo/600/300',
      },
      {
        id: 'akita-city',
        name: {
          [Language.JA]: '秋田市',
          [Language.EN]: 'Akita City',
          [Language.TH]: 'เมืองอากิตะ',
          [Language.ZH]: '秋田市',
        },
        description: {
          [Language.JA]: '秋田県の県庁所在地で、伝統的な竿燈まつりで知られる歴史ある都市。秋田美人や秋田犬の故郷としても有名で、豊かな食文化が魅力です。',
          [Language.EN]: 'The capital city of Akita Prefecture, a historic city known for its traditional Kanto Festival. Famous as the home of Akita beauty standards and Akita dogs, with a rich food culture.',
          [Language.TH]: 'เมืองหลวงของจังหวัดอากิตะ เมืองประวัติศาสตร์ที่มีชื่อเสียงจากเทศกาลคันโตะแบบดั้งเดิม มีชื่อเสียงในฐานะบ้านเกิดของมาตรฐานความงามอากิตะและสุนัขพันธุ์อากิตะ พร้อมวัฒนธรรมอาหารที่อุดมสมบูรณ์',
          [Language.ZH]: '秋田县县厅所在地，以传统的竿灯节闻名的历史悠久的城市。作为秋田美人和秋田犬的故乡而闻名，拥有丰富的饮食文化。',
        },
        history: {
          [Language.JA]: '久保田城下町として栄え、明治時代以降は秋田県の政治・経済の中心として発展。伝統工芸や民俗芸能も大切に継承されています。',
          [Language.EN]: 'Flourished as Kubota Castle Town, and developed as the political and economic center of Akita Prefecture since the Meiji period. Traditional crafts and folk performing arts are carefully preserved.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองปราสาทคุโบตะ และพัฒนาเป็นศูนย์กลางการเมืองและเศรษฐกิจของจังหวัดอากิตะตั้งแต่สมัยเมจิ งานฝีมือดั้งเดิมและศิลปะการแสดงพื้นบ้านได้รับการอนุรักษ์อย่างดี',
          [Language.ZH]: '作为久保田城下町繁荣，明治时代以后发展为秋田县的政治经济中心。传统工艺和民俗艺能也得到精心传承。',
        },
        culture_festivals: {
          [Language.JA]: '竿燈まつり、千秋祭、土崎港曳山まつり、新屋竿燈まつり、秋田港海上花火大会など、伝統的な祭りが盛んです。',
          [Language.EN]: 'Traditional festivals are abundant, including the Kanto Festival, Senshu Festival, Tsuchizaki Port Festival, Arayana Kanto Festival, and Akita Port Fireworks Festival.',
          [Language.TH]: 'มีเทศกาลประเพณีมากมาย รวมถึงเทศกาลคันโตะ เทศกาลเซนชู เทศกาลท่าเรือสึจิซากิ เทศกาลคันโตะอารายานะ และเทศกาลดอกไม้ไฟท่าเรืออากิตะ',
          [Language.ZH]: '传统节日丰富，包括竿灯节、千秋节、土崎港曳山节、新屋竿灯节、秋田港海上烟花大会等。',
        },
        things_to_do: {
          [Language.JA]: '千秋公園散策、秋田県立美術館見学、秋田市民俗芸能伝承館、ポートタワー・セリオン、秋田犬会館、温泉巡りが楽しめます。',
          [Language.EN]: 'Enjoy walking in Senshu Park, visiting Akita Museum of Art, Folk Performing Arts Center, Port Tower Selion, Akita Dog Museum, and hot spring hopping.',
          [Language.TH]: 'เพลิดเพลินกับการเดินเล่นในสวนเซนชู เยี่ยมชมพิพิธภัณฑ์ศิลปะอากิตะ ศูนย์ศิลปะการแสดงพื้นบ้าน หอคอยท่าเรือเซลิออน พิพิธภัณฑ์สุนัขอากิตะ และแช่น้ำพุร้อน',
          [Language.ZH]: '可以享受千秋公园散步、参观秋田县立美术馆、民俗艺能传承馆、港口塔セリオン、秋田犬会馆、温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: 'きりたんぽ鍋、稲庭うどん、しょっつる鍋、ハタハタ料理、比内地鶏、日本酒が特産です。',
          [Language.EN]: 'Local specialties include Kiritanpo hot pot, Inaniwa udon noodles, Shottsuru hot pot, Hatahata fish dishes, Hinai chicken, and sake.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ หม้อไฟคิริทันโปะ บะหมี่อุด้งอินานิวะ หม้อไฟช็อตสึรุ อาหารจากปลาฮาตาฮาตะ ไก่ฮินาอิ และสาเก',
          [Language.ZH]: '特产包括切炭火锅、稲庭乌冬面、鱼酱火锅、鲱鱼料理、比内地鸡、日本酒。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約4時間。秋田空港から市内へはバスで約40分です。',
          [Language.EN]: 'About 4 hours from Tokyo by Shinkansen. About 40 minutes by bus from Akita Airport to the city center.',
          [Language.TH]: 'ใช้เวลาประมาณ 4 ชั่วโมงจากโตเกียวโดยรถไฟชินคันเซ็น ประมาณ 40 นาทีโดยรถบัสจากสนามบินอากิตะถึงใจกลางเมือง',
          [Language.ZH]: '从东京乘新干线约4小时。从秋田机场乘巴士到市区约40分钟。',
        },
        image: 'https://picsum.photos/seed/akita-city/600/300',
      },
      {
        id: 'lake-juniko',
        name: {
          [Language.JA]: '十二湖',
          [Language.EN]: 'Lake Juniko',
          [Language.TH]: 'ทะเลสาบจูนิโกะ',
          [Language.ZH]: '十二湖',
        },
        description: {
          [Language.JA]: '青森県の白神山地にある33の湖沼群の総称。特に青池は神秘的なコバルトブルーの水色で知られ、白神山地を代表する観光スポットです。',
          [Language.EN]: 'A collective name for 33 lakes in the Shirakami Mountains of Aomori Prefecture. Particularly famous for Aoike (Blue Pond) with its mystical cobalt blue water, representing a major tourist attraction in the Shirakami area.',
          [Language.TH]: 'ชื่อรวมของทะเลสาบ 33 แห่งในเทือกเขาชิราคามิของจังหวัดอาโอโมริ มีชื่อเสียงโดยเฉพาะทะเลสาบอาโออิเกะ (ทะเลสาบสีฟ้า) ด้วยน้ำสีฟ้าโคบอลต์ที่เป็นเอกลักษณ์ เป็นสถานที่ท่องเที่ยวสำคัญในพื้นที่ชิราคามิ',
          [Language.ZH]: '位于青森县白神山地的33个湖泊群的总称。特别以青池神秘的钴蓝色水色闻名，是白神山地具代表性的观光景点。',
        },
        history: {
          [Language.JA]: '約300年前の地震で山が崩れて形成された湖沼群で、1993年に白神山地が世界遺産に登録された際の重要な構成要素となっています。',
          [Language.EN]: 'These lakes were formed by a landslide following an earthquake about 300 years ago, becoming an important component when the Shirakami Mountains were registered as a World Heritage site in 1993.',
          [Language.TH]: 'ทะเลสาบเหล่านี้เกิดจากดินถล่มหลังเกิดแผ่นดินไหวเมื่อประมาณ 300 ปีก่อน กลายเป็นองค์ประกอบสำคัญเมื่อเทือกเขาชิราคามิได้รับการขึ้นทะเบียนเป็นมรดกโลกในปี 1993',
          [Language.ZH]: '约300年前的地震造成山体崩塌而形成的湖泊群，在1993年白神山地被登录为世界遗产时成为重要构成要素。',
        },
        culture_festivals: {
          [Language.JA]: '新緑まつり、紅葉まつり、冬の氷沼まつり、エコツーリズム、写真コンテストなど、自然を活かしたイベントが開催されます。',
          [Language.EN]: 'Nature-focused events include Fresh Green Festival, Autumn Leaves Festival, Winter Ice Lake Festival, ecotourism activities, and photo contests.',
          [Language.TH]: 'งานที่เน้นธรรมชาติ รวมถึงเทศกาลใบไม้เขียว เทศกาลใบไม้แดง เทศกาลทะเลสาบน้ำแข็งฤดูหนาว กิจกรรมการท่องเที่ยวเชิงนิเวศ และการประกวดภาพถ่าย',
          [Language.ZH]: '举办新绿节、红叶节、冬季冰湖节、生态旅游、摄影比赛等利用自然的活动。',
        },
        things_to_do: {
          [Language.JA]: '遊歩道散策、青池見学、トレッキング、カヌー体験、バードウォッチング、写真撮影、紅葉狩りが楽しめます。',
          [Language.EN]: 'Enjoy walking trails, visiting Blue Pond, trekking, canoeing, bird watching, photography, and autumn leaf viewing.',
          [Language.TH]: 'เพลิดเพลินกับเส้นทางเดิน เยี่ยมชมทะเลสาบสีฟ้า เดินป่า พายเรือแคนู ดูนก ถ่ายภาพ และชมใบไม้แดง',
          [Language.ZH]: '可以享受步道散步、参观青池、徒步、划独木舟、观鸟、摄影、赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩魚料理、十二湖わさび、白神そば、地酒、山の幸が楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, char fish dishes, Juniko wasabi, Shirakami soba noodles, local sake, and mountain delicacies.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากปลาชาร์ วาซาบิจูนิโกะ โซบะชิราคามิ สาเกท้องถิ่น และอาหารจากภูเขา',
          [Language.ZH]: '可以品尝山菜料理、岩鱼料理、十二湖芥末、白神荞麦面、地酒、山珍。',
        },
        access: {
          [Language.JA]: 'JR鰺ヶ沢駅からバスで約30分。レンタカーでの観光も人気です。',
          [Language.EN]: 'About 30 minutes by bus from JR Ajigasawa Station. Rental cars are also popular for sightseeing.',
          [Language.TH]: 'ใช้เวลาประมาณ 30 นาทีโดยรถบัสจากสถานี JR อาจิกาซาวะ การเช่ารถยนต์ก็เป็นที่นิยมสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR鯵鱼沢站乘巴士约30分钟。租车观光也很受欢迎。',
        },
        image: 'https://picsum.photos/seed/lake-juniko/600/300',
      },
      {
        id: 'tsuruoka',
        name: {
          [Language.JA]: '鶴岡市',
          [Language.EN]: 'Tsuruoka City',
          [Language.TH]: 'เมืองสึรุโอกะ',
          [Language.ZH]: '鹤冈市',
        },
        description: {
          [Language.JA]: '山形県庄内地方の中核都市で、出羽三山の玄関口。日本で初めてユネスコ食文化創造都市に認定され、伝統的な食文化と歴史的建造物が魅力です。',
          [Language.EN]: 'A core city in Yamagata Prefecture\'s Shonai region and gateway to the Dewa Sanzan. The first Japanese city designated as a UNESCO Creative City of Gastronomy, known for its traditional food culture and historic buildings.',
          [Language.TH]: 'เมืองหลักในภูมิภาคโชนัยของจังหวัดยามากาตะและประตูสู่เดวะซันซัน เป็นเมืองแรกของญี่ปุ่นที่ได้รับการกำหนดให้เป็นเมืองสร้างสรรค์ด้านอาหารของยูเนสโก มีชื่อเสียงด้านวัฒนธรรมอาหารดั้งเดิมและอาคารประวัติศาสตร์',
          [Language.ZH]: '山形县庄内地区的核心城市，出羽三山的门户。日本首个获得联合国教科文组织美食创意城市认定的城市，以传统饮食文化和历史建筑为特色。',
        },
        history: {
          [Language.JA]: '江戸時代は庄内藩の城下町として栄え、修験道の中心地としても重要な役割を果たしてきました。2014年にユネスコ食文化創造都市に認定されました。',
          [Language.EN]: 'Flourished as the castle town of the Shonai domain during the Edo period and played an important role as a center of mountain asceticism. Designated as a UNESCO Creative City of Gastronomy in 2014.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองปราสาทของแคว้นโชนัยในสมัยเอโดะและมีบทบาทสำคัญในฐานะศูนย์กลางของการบำเพ็ญตบะบนภูเขา ได้รับการกำหนดให้เป็นเมืองสร้างสรรค์ด้านอาหารของยูเนสโกในปี 2014',
          [Language.ZH]: '江户时代作为庄内藩的城下町繁荣，作为修验道中心地也发挥着重要作用。2014年被认定为联合国教科文组织美食创意城市。',
        },
        culture_festivals: {
          [Language.JA]: '鶴岡天神祭、荘内大祭、食文化創造都市フェスティバル、出羽三山参詣、だだちゃ豆収穫祭など、伝統と食文化のイベントが豊富です。',
          [Language.EN]: 'Rich in traditional and food culture events including Tsuruoka Tenjin Festival, Shonai Grand Festival, Food Creative City Festival, Dewa Sanzan Pilgrimage, and Dadacha-mame Harvest Festival.',
          [Language.TH]: 'มีงานประเพณีและวัฒนธรรมอาหารมากมาย รวมถึงเทศกาลเท็นจินสึรุโอกะ เทศกาลใหญ่โชนัย เทศกาลเมืองสร้างสรรค์ด้านอาหาร การแสวงบุญเดวะซันซัน และเทศกาลเก็บเกี่ยวถั่วดาดาชามาเมะ',
          [Language.ZH]: '丰富的传统与饮食文化活动，包括鹤冈天神祭、庄内大祭、美食创意城市节、出羽三山参拜、茶豆收获节等。',
        },
        things_to_do: {
          [Language.JA]: '致道博物館見学、藤島歴史公園散策、加茂水族館、善寳寺参拝、食文化体験、だだちゃ豆農場見学が楽しめます。',
          [Language.EN]: 'Enjoy visiting Chido Museum, exploring Fujishima Historical Park, Kamo Aquarium, Zenpoji Temple, food culture experiences, and Dadacha-mame farm tours.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมพิพิธภัณฑ์ชิโด สำรวจสวนประวัติศาสตร์ฟุจิชิมะ พิพิธภัณฑ์สัตว์น้ำคาโมะ วัดเซ็นโปจิ ประสบการณ์วัฒนธรรมอาหาร และทัวร์ฟาร์มถั่วดาดาชามาเมะ',
          [Language.ZH]: '可以参观致道博物馆、藤岛历史公园散步、加茂水族馆、善宝寺参拜、体验食文化、参观茶豆农场。',
        },
        local_cuisine: {
          [Language.JA]: 'だだちゃ豆、在来野菜料理、庄内米、庄内柿、地酒、サザエカレー、出羽三山精進料理が特産です。',
          [Language.EN]: 'Local specialties include Dadacha-mame edamame, heirloom vegetable dishes, Shonai rice, Shonai persimmons, local sake, turban shell curry, and Dewa Sanzan Buddhist cuisine.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ถั่วแระญี่ปุ่นดาดาชามาเมะ อาหารจากผักพื้นเมือง ข้าวโชนัย ลูกพลับโชนัย สาเกท้องถิ่น แกงหอยสังข์ และอาหารเจภูเขาเดวะซันซัน',
          [Language.ZH]: '特产包括茶豆、传统蔬菜料理、庄内大米、庄内柿子、地酒、响螺咖喱、出羽三山精进料理。',
        },
        access: {
          [Language.JA]: 'JR鶴岡駅から市内各所へバスで移動可能。レンタカーでの観光も便利です。',
          [Language.EN]: 'Buses available from JR Tsuruoka Station to various city locations. Rental cars are also convenient for sightseeing.',
          [Language.TH]: 'มีรถบัสจากสถานี JR สึรุโอกะไปยังสถานที่ต่างๆ ในเมือง การเช่ารถยนต์ก็สะดวกสำหรับการท่องเที่ยว',
          [Language.ZH]: '从JR鹤冈站可乘巴士前往市内各处。租车观光也很方便。',
        },
        image: 'https://picsum.photos/seed/tsuruoka/600/300',
      },
      {
        id: 'mount-azuma',
        name: {
          [Language.JA]: '吾妻山',
          [Language.EN]: 'Mount Azuma',
          [Language.TH]: 'ภูเขาอาซูมะ',
          [Language.ZH]: '吾妻山',
        },
        description: {
          [Language.JA]: '福島県の活火山で、四季折々の自然美が魅力。特に紅葉の名所として知られ、ロープウェイを利用して気軽に山頂からの絶景を楽しめます。',
          [Language.EN]: 'An active volcano in Fukushima Prefecture, known for its natural beauty through all seasons. Particularly famous for autumn colors, with easy access to spectacular summit views via ropeway.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นในจังหวัดฟุกุชิมะ มีชื่อเสียงด้านความงามตามธรรมชาติตลอดทั้งสี่ฤดู โดยเฉพาะใบไม้แดง สามารถเข้าถึงวิวอันงดงามบนยอดเขาได้ง่ายๆ ด้วยกระเช้าลอยฟ้า',
          [Language.ZH]: '福岛县的活火山，以四季自然美景为特色。特别以红叶胜地闻名，可通过缆车轻松欣赏山顶绝景。',
        },
        history: {
          [Language.JA]: '古くから信仰の山として崇拝され、1950年に磐梯朝日国立公園に編入されました。現在も火山活動が続いており、温泉地としても人気があります。',
          [Language.EN]: 'Long worshipped as a sacred mountain and incorporated into Bandai-Asahi National Park in 1950. Volcanic activity continues today, making it popular for hot springs.',
          [Language.TH]: 'ได้รับการบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนานและได้รับการผนวกเข้ากับอุทยานแห่งชาติบันได-อาซาฮิในปี 1950 กิจกรรมภูเขาไฟยังคงดำเนินอยู่จนถึงปัจจุบัน ทำให้เป็นที่นิยมสำหรับบ่อน้ำร้อน',
          [Language.ZH]: '自古以来作为信仰之山受到崇拜，1950年编入磐梯朝日国立公园。现在火山活动仍在继续，作为温泉胜地也很受欢迎。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、つつじ祭り、紅葉まつり、雪まつり、スキーフェスティバル、温泉まつりなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include Mountain Opening Ceremony, Azalea Festival, Autumn Leaves Festival, Snow Festival, Ski Festival, and Hot Spring Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล รวมถึงพิธีเปิดภูเขา เทศกาลดอกอาเซเลีย เทศกาลใบไม้แดง เทศกาลหิมะ เทศกาลสกี และเทศกาลน้ำพุร้อน',
          [Language.ZH]: '举办山开祭、杜鹃花节、红叶节、雪节、滑雪节、温泉节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: 'ロープウェイ観光、ハイキング、スキー、スノーボード、温泉巡り、紅葉狩り、火口湖見学が楽しめます。',
          [Language.EN]: 'Enjoy ropeway sightseeing, hiking, skiing, snowboarding, hot spring hopping, autumn leaf viewing, and crater lake visits.',
          [Language.TH]: 'เพลิดเพลินกับการชมวิวจากกระเช้าลอยฟ้า เดินป่า เล่นสกี สโนว์บอร์ด แช่น้ำพุร้อน ชมใบไม้แดง และเยี่ยมชมทะเลสาบปล่องภูเขาไฟ',
          [Language.ZH]: '可以享受缆车观光、远足、滑雪、单板滑雪、温泉巡游、赏红叶、火口湖观光。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、温泉まんじゅう、会津地鶏、地酒、そばが楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, mushroom dishes, hot spring manju buns, Aizu chicken, local sake, and soba noodles.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากเห็ด ขนมมันจูน้ำพุร้อน ไก่ไอซุ สาเกท้องถิ่น และบะหมี่โซบะ',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、温泉馒头、会津地鸡、地酒、荞麦面。',
        },
        access: {
          [Language.JA]: 'JR福島駅からバスで約60分。ロープウェイで山頂まで行くことができます。',
          [Language.EN]: 'About 60 minutes by bus from JR Fukushima Station. Summit accessible via ropeway.',
          [Language.TH]: 'ใช้เวลาประมาณ 60 นาทีโดยรถบัสจากสถานี JR ฟุกุชิมะ สามารถขึ้นถึงยอดเขาได้โดยกระเช้าลอยฟ้า',
          [Language.ZH]: '从JR福岛站乘巴士约60分钟。可通过缆车到达山顶。',
        },
        image: 'https://picsum.photos/seed/mount-azuma/600/300',
      },
      {
        id: 'yamagata-city',
        name: {
          [Language.JA]: '山形市',
          [Language.EN]: 'Yamagata City',
          [Language.TH]: 'เมืองยามากาตะ',
          [Language.ZH]: '山形市',
        },
        description: {
          [Language.JA]: '山形県の県庁所在地で、蔵王連峰の麓に位置する城下町。温泉、さくらんぼ、芋煮会など、四季折々の魅力と伝統文化が息づく街です。',
          [Language.EN]: 'The capital city of Yamagata Prefecture, a castle town at the foot of the Zao mountain range. A city where seasonal attractions and traditional culture thrive, known for hot springs, cherries, and Imoni gatherings.',
          [Language.TH]: 'เมืองหลวงของจังหวัดยามากาตะ เมืองปราสาทที่เชิงเทือกเขาซาโอ เมืองที่มีเสน่ห์ตามฤดูกาลและวัฒนธรรมประเพณีที่เฟื่องฟู มีชื่อเสียงด้านน้ำพุร้อน เชอร์รี่ และการรวมตัวทำอิโมนิ',
          [Language.ZH]: '山形县县厅所在地，位于蔵王连峰脚下的城下町。以温泉、樱桃、芋煮会等四季魅力和传统文化闻名的城市。',
        },
        history: {
          [Language.JA]: '最上義光により16世紀末に城下町として整備され、以来400年以上にわたり山形の政治・文化の中心として発展してきました。',
          [Language.EN]: 'Developed as a castle town by Mogami Yoshiaki in the late 16th century, it has evolved as the political and cultural center of Yamagata for over 400 years.',
          [Language.TH]: 'พัฒนาเป็นเมืองปราสาทโดยโมกามิ โยชิอากิในปลายศตวรรษที่ 16 และวิวัฒนาการเป็นศูนย์กลางการเมืองและวัฒนธรรมของยามากาตะมากว่า 400 ปี',
          [Language.ZH]: '由最上义光在16世纪末整备为城下町，此后400多年来作为山形的政治文化中心发展。',
        },
        culture_festivals: {
          [Language.JA]: '山形花笠まつり、山形国際ドキュメンタリー映画祭、やまがた雪フェスティバル、芋煮会フェスティバル、さくらんぼ狩りなど、多彩な行事があります。',
          [Language.EN]: 'Various events include Yamagata Hanagasa Festival, Yamagata International Documentary Film Festival, Yamagata Snow Festival, Imoni Festival, and cherry picking.',
          [Language.TH]: 'มีงานหลากหลาย รวมถึงเทศกาลฮานากาซะยามากาตะ เทศกาลภาพยนตร์สารคดีนานาชาติยามากาตะ เทศกาลหิมะยามากาตะ เทศกาลอิโมนิ และการเก็บเชอร์รี่',
          [Language.ZH]: '举办山形花笠节、山形国际纪录片电影节、山形雪节、芋煮会节、采摘樱桃等多彩活动。',
        },
        things_to_do: {
          [Language.JA]: '山形城跡散策、文翔館見学、山寺参拝、蔵王温泉、さくらんぼ狩り、芋煮会体験が楽しめます。',
          [Language.EN]: 'Enjoy exploring Yamagata Castle ruins, visiting Bunshokan, touring Yamadera Temple, Zao Onsen, cherry picking, and Imoni gathering experiences.',
          [Language.TH]: 'เพลิดเพลินกับการสำรวจซากปราสาทยามากาตะ เยี่ยมชมบุนโชคัง เที่ยวชมวัดยามาเดระ ออนเซ็นซาโอ เก็บเชอร์รี่ และประสบการณ์การทำอิโมนิ',
          [Language.ZH]: '可以享受山形城迹散步、文翔馆参观、山寺参拜、蔵王温泉、采摘樱桃、芋煮会体验。',
        },
        local_cuisine: {
          [Language.JA]: '芋煮、玉こんにゃく、山形牛、だだちゃ豆、冷やしラーメン、果物（さくらんぼ、ラ・フランス）が特産です。',
          [Language.EN]: 'Local specialties include Imoni hot pot, Tama Konnyaku, Yamagata beef, Dadacha-mame edamame, cold ramen, and fruits (cherries, La France pears).',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ หม้อไฟอิโมนิ ทามะคนยาคุ เนื้อวัวยามากาตะ ถั่วแระญี่ปุ่นดาดาชามาเมะ ราเมนเย็น และผลไม้ (เชอร์รี่ สาลี่ลาฟรองซ์)',
          [Language.ZH]: '特产包括芋煮、玉蒟蒻、山形牛肉、茶豆、冷拉面、水果（樱桃、香梨）。',
        },
        access: {
          [Language.JA]: 'JR山形駅から市内各所へバスで移動可能。観光地へはシャトルバスも運行しています。',
          [Language.EN]: 'Buses available from JR Yamagata Station to various city locations. Shuttle buses operate to tourist spots.',
          [Language.TH]: 'มีรถบัสจากสถานี JR ยามากาตะไปยังสถานที่ต่างๆ ในเมือง มีรถรับส่งไปยังสถานที่ท่องเที่ยว',
          [Language.ZH]: '从JR山形站可乘巴士前往市内各处。设有前往观光地的班车。',
        },
        image: 'https://picsum.photos/seed/yamagata-city/600/300',
      },
      {
        id: 'mount-gassan',
        name: {
          [Language.JA]: '月山',
          [Language.EN]: 'Mount Gassan',
          [Language.TH]: 'ภูเขากัสซัน',
          [Language.ZH]: '月山',
        },
        description: {
          [Language.JA]: '出羽三山の一つで、標高1,984メートル。山形県のシンボル的存在で、夏スキーが楽しめる珍しい山として知られています。',
          [Language.EN]: 'One of the Three Mountains of Dewa, standing at 1,984 meters. A symbol of Yamagata Prefecture, uniquely known for summer skiing opportunities.',
          [Language.TH]: 'หนึ่งในสามภูเขาแห่งเดวะ สูง 1,984 เมตร เป็นสัญลักษณ์ของจังหวัดยามากาตะ มีเอกลักษณ์ที่สามารถเล่นสกีในฤดูร้อนได้',
          [Language.ZH]: '出羽三山之一，海拔1,984米。作为山形县的象征，以可以享受夏季滑雪而闻名。',
        },
        history: {
          [Language.JA]: '古来より修験道の霊場として崇拝され、出羽三山信仰の中心地として重要な役割を果たしてきました。',
          [Language.EN]: 'Long venerated as a sacred site for mountain asceticism, playing a crucial role as the center of Dewa Sanzan faith.',
          [Language.TH]: 'ได้รับการเคารพบูชามาอย่างยาวนานในฐานะสถานที่ศักดิ์สิทธิ์สำหรับการบำเพ็ญตบะบนภูเขา มีบทบาทสำคัญในฐานะศูนย์กลางความเชื่อเดวะซันซัน',
          [Language.ZH]: '自古以来作为修验道灵场受到崇拜，作为出羽三山信仰的中心地发挥着重要作用。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、夏スキー祭り、山の日フェスティバル、紅葉まつり、修験道の祭事など、年間を通じて様々な行事が行われます。',
          [Language.EN]: 'Year-round events include Mountain Opening Ceremony, Summer Ski Festival, Mountain Day Festival, Autumn Leaves Festival, and mountain ascetic rituals.',
          [Language.TH]: 'มีงานตลอดทั้งปี รวมถึงพิธีเปิดภูเขา เทศกาลสกีฤดูร้อน เทศกาลวันภูเขา เทศกาลใบไม้แดง และพิธีกรรมบำเพ็ญตบะบนภูเขา',
          [Language.ZH]: '全年举行山开祭、夏季滑雪节、山之日节、红叶节、修验道仪式等各种活动。',
        },
        things_to_do: {
          [Language.JA]: '夏スキー、トレッキング、山菜採り、修験道体験、写真撮影、お花畑観賞、星空観察が楽しめます。',
          [Language.EN]: 'Enjoy summer skiing, trekking, mountain vegetable foraging, mountain ascetic experiences, photography, flower field viewing, and stargazing.',
          [Language.TH]: 'เพลิดเพลินกับการเล่นสกีฤดูร้อน เดินป่า เก็บผักภูเขา ประสบการณ์การบำเพ็ญตบะบนภูเขา ถ่ายภาพ ชมทุ่งดอกไม้ และดูดาว',
          [Language.ZH]: '可以享受夏季滑雪、徒步、采集山菜、修验道体验、摄影、赏花、观星。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、出羽三山精進料理、月山筍、地酒、月山ワインが楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, mushroom dishes, Dewa Sanzan Buddhist cuisine, Gassan bamboo shoots, local sake, and Gassan wine.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากเห็ด อาหารเจเดวะซันซัน หน่อไม้กัสซัน สาเกท้องถิ่น และไวน์กัสซัน',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、出羽三山精进料理、月山笋、地酒、月山葡萄酒。',
        },
        access: {
          [Language.JA]: '月山八合目まではバスで約2時間。夏季は山頂までリフトが運行しています。',
          [Language.EN]: 'About 2 hours by bus to the 8th station. Lifts operate to the summit during summer.',
          [Language.TH]: 'ใช้เวลาประมาณ 2 ชั่วโมงโดยรถบัสถึงสถานีที่ 8 มีลิฟต์ให้บริการถึงยอดเขาในช่วงฤดูร้อน',
          [Language.ZH]: '乘巴士到月山八合目约2小时。夏季有升降机运行至山顶。',
        },
        image: 'https://picsum.photos/seed/mount-gassan/600/300',
      },
      {
        id: 'oirase-gorge',
        name: {
          [Language.JA]: '奥入瀬渓流',
          [Language.EN]: 'Oirase Gorge',
          [Language.TH]: 'หุบเขาโออิราเสะ',
          [Language.ZH]: '奥入濑溪流',
        },
        description: {
          [Language.JA]: '十和田湖から流れ出る奥入瀬川が作り出した渓谷で、全長約14キロメートルに渡って続く日本を代表する渓流の一つです。',
          [Language.EN]: 'A picturesque river gorge created by the Oirase River flowing from Lake Towada, stretching about 14 kilometers and considered one of Japans most beautiful stream valleys.',
          [Language.TH]: 'หุบเขาที่เกิดจากแม่น้ำโออิราเสะที่ไหลจากทะเลสาบโทวาดะ ยาวประมาณ 14 กิโลเมตร เป็นหนึ่งในหุบเขาลำธารที่สวยที่สุดของญี่ปุ่น',
          [Language.ZH]: '由十和田湖流出的奥入濑川形成的溪谷，全长约14公里，是日本最具代表性的溪流之一。',
        },
        history: {
          [Language.JA]: '1930年に国の天然記念物に指定され、1952年には十和田八幡平国立公園の一部となりました。',
          [Language.EN]: 'Designated as a Natural Monument in 1930 and became part of the Towada-Hachimantai National Park in 1952.',
          [Language.TH]: 'ได้รับการขึ้นทะเบียนเป็นอนุสรณ์สถานทางธรรมชาติในปี 1930 และกลายเป็นส่วนหนึ่งของอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1952',
          [Language.ZH]: '1930年被指定为国家天然纪念物，1952年成为十和田八幡平国立公园的一部分。',
        },
        culture_festivals: {
          [Language.JA]: '奥入瀬渓流紅葉まつり、奥入瀬渓流氷瀑ツアー、新緑まつりなど、四季折々のイベントが開催されます。',
          [Language.EN]: 'Seasonal events include the Oirase Gorge Autumn Leaves Festival, Ice Falls Tour, and Fresh Greenery Festival.',
          [Language.TH]: 'มีงานเทศกาลตามฤดูกาล รวมถึงเทศกาลใบไม้แดงโออิราเสะ ทัวร์น้ำตกน้ำแข็ง และเทศกาลใบไม้เขียวใหม่',
          [Language.ZH]: '举办奥入濑溪流红叶节、冰瀑tour、新绿节等四季活动。',
        },
        things_to_do: {
          [Language.JA]: 'ハイキング、写真撮影、バードウォッチング、紅葉狩り、冬季の氷瀑観賞、渓流釣りが楽しめます。',
          [Language.EN]: 'Enjoy hiking, photography, birdwatching, autumn leaf viewing, winter ice falls viewing, and stream fishing.',
          [Language.TH]: 'เพลิดเพลินกับการเดินป่า ถ่ายภาพ ดูนก ชมใบไม้แดง ชมน้ำตกน้ำแข็งในฤดูหนาว และตกปลาในลำธาร',
          [Language.ZH]: '可以享受徒步、摄影、观鸟、赏红叶、冬季冰瀑观赏、溪流钓鱼。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、岩魚料理、十和田バラ焼き、青森シャモロック、ヤマメの塩焼きなどが特徴です。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, char fish dishes, Towada Barayaki, Aomori Shamrock chicken, and grilled cherry salmon.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากปลาชาร์ โทวาดะบาระยากิ ไก่ชาม็อกแห่งอาโอโมริ และปลาแซลมอนเชอร์รี่ย่าง',
          [Language.ZH]: '特色美食包括山菜料理、岩鱼料理、十和田玫瑰烤肉、青森夏模洛克鸡、山女鱼盐烤等。',
        },
        access: {
          [Language.JA]: 'JR八戸駅または三沢駅からバスで約1時間。レンタカーでのアクセスも便利です。',
          [Language.EN]: 'About 1 hour by bus from JR Hachinohe Station or Misawa Station. Also easily accessible by rental car.',
          [Language.TH]: 'ใช้เวลาประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR ฮาจิโนเฮะหรือสถานีมิซาวะ สะดวกในการเข้าถึงด้วยรถเช่า',
          [Language.ZH]: '从JR八户站或三泽站乘巴士约1小时。租车前往也很方便。',
        },
        image: 'https://picsum.photos/seed/oirase-gorge/600/300',
      },
      {
        id: 'mount-bandai',
        name: {
          [Language.JA]: '磐梯山',
          [Language.EN]: 'Mount Bandai',
          [Language.TH]: 'ภูเขาบันได',
          [Language.ZH]: '磐梯山',
        },
        description: {
          [Language.JA]: '福島県のシンボル的な活火山で、標高1,816メートル。1888年の大噴火で現在の姿となり、周辺には美しい湖沼群が点在しています。',
          [Language.EN]: 'An iconic active volcano in Fukushima Prefecture, standing at 1,816 meters. Its current form was shaped by the 1888 eruption, surrounded by beautiful lakes.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นอันเป็นสัญลักษณ์ของจังหวัดฟุกุชิมะ สูง 1,816 เมตร รูปร่างปัจจุบันเกิดจากการปะทุในปี 1888 ล้อมรอบด้วยทะเลสาบที่สวยงาม',
          [Language.ZH]: '福岛县的标志性活火山，海拔1,816米。1888年大喷发形成现在的面貌，周边散布着美丽的湖泊群。',
        },
        history: {
          [Language.JA]: '古くから信仰の対象として崇拝され、1888年の大噴火は日本の火山災害史上重要な出来事として記録されています。',
          [Language.EN]: 'Long worshipped as a sacred mountain, the 1888 eruption is recorded as a significant event in Japanese volcanic disaster history.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน การปะทุในปี 1888 ถูกบันทึกเป็นเหตุการณ์สำคัญในประวัติศาสตร์ภัยพิบัติจากภูเขาไฟของญี่ปุ่น',
          [Language.ZH]: '自古以来作为信仰对象受到崇拜，1888年的大喷发被记录为日本火山灾害史上的重要事件。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、磐梯山噴火記念祭、紅葉ライトアップ、スノーフェスティバルなど、季節ごとのイベントが開催されます。',
          [Language.EN]: 'Seasonal events include Mountain Opening Ceremony, Bandai Eruption Memorial Festival, Autumn Leaves Light-up, and Snow Festival.',
          [Language.TH]: 'มีงานเทศกาลตามฤดูกาล รวมถึงพิธีเปิดภูเขา เทศกาลรำลึกการปะทุภูเขาบันได การประดับไฟใบไม้แดง และเทศกาลหิมะ',
          [Language.ZH]: '举办山开祭、磐梯山喷火纪念节、红叶灯光秀、雪节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、スキー、スノーボード、キャンプ、湖水浴、紅葉狩り、写真撮影が楽しめます。',
          [Language.EN]: 'Enjoy mountain climbing, trekking, skiing, snowboarding, camping, lake swimming, autumn leaf viewing, and photography.',
          [Language.TH]: 'เพลิดเพลินกับการปีนเขา เดินป่า เล่นสกี สโนว์บอร์ด แคมป์ปิ้ง ว่ายน้ำในทะเลสาบ ชมใบไม้แดง และถ่ายภาพ',
          [Language.ZH]: '可以享受登山、徒步、滑雪、滑雪板、露营、湖泊游泳、赏红叶、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '会津地鶏、岩魚料理、山菜料理、会津そば、磐梯そば、地酒が楽しめます。',
          [Language.EN]: 'Local specialties include Aizu chicken, char fish dishes, mountain vegetable dishes, Aizu soba, Bandai soba, and local sake.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ไก่ไอสึ อาหารจากปลาชาร์ อาหารจากผักภูเขา โซบะไอสึ โซบะบันได และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝会津地鸡、岩鱼料理、山菜料理、会津荞麦面、磐梯荞麦面、地酒。',
        },
        access: {
          [Language.JA]: 'JR猪苗代駅からバスで約40分。冬季はスキー場へのシャトルバスも運行しています。',
          [Language.EN]: 'About 40 minutes by bus from JR Inawashiro Station. Shuttle buses to ski resorts operate during winter.',
          [Language.TH]: 'ใช้เวลาประมาณ 40 นาทีโดยรถบัสจากสถานี JR อินาวาชิโระ มีรถรับส่งไปยังลานสกีในช่วงฤดูหนาว',
          [Language.ZH]: '从JR猪苗代站乘巴士约40分钟。冬季有往返滑雪场的班车。',
        },
        image: 'https://picsum.photos/seed/mount-bandai/600/300',
      },
      {
        id: 'sakata-city',
        name: {
          [Language.JA]: '酒田市',
          [Language.EN]: 'Sakata City',
          [Language.TH]: 'เมืองซากาตะ',
          [Language.ZH]: '酒田市',
        },
        description: {
          [Language.JA]: '山形県の日本海側に位置する港町で、江戸時代には北前船の寄港地として栄えました。歴史的な建造物や文化遺産が数多く残る観光地です。',
          [Language.EN]: 'A port city on the Sea of Japan coast of Yamagata Prefecture, flourished as a port of call for Kitamaebune trading ships during the Edo period. Features numerous historical buildings and cultural heritage sites.',
          [Language.TH]: 'เมืองท่าบนชายฝั่งทะเลญี่ปุ่นของจังหวัดยามากาตะ เจริญรุ่งเรืองในฐานะท่าจอดเรือคิตามาเอบุเนะในสมัยเอโดะ มีอาคารประวัติศาสตร์และมรดกทางวัฒนธรรมมากมาย',
          [Language.ZH]: '位于山形县日本海沿岸的港口城市，江户时代作为北前船停靠港而繁荣。保留着众多历史建筑和文化遗产的旅游胜地。',
        },
        history: {
          [Language.JA]: '17世紀から港町として発展し、特に北前船交易で繁栄。山居倉庫群や旧鐙屋など、当時の繁栄を物語る建造物が現存します。',
          [Language.EN]: 'Developed as a port town since the 17th century, especially prospering through Kitamaebune trade. Historical structures like the Sakata Rice Warehouses and former Abumiya still stand as testament to its prosperity.',
          [Language.TH]: 'พัฒนาเป็นเมืองท่าตั้งแต่ศตวรรษที่ 17 เจริญรุ่งเรืองจากการค้าเรือคิตามาเอบุเนะ อาคารประวัติศาสตร์เช่นโกดังข้าวซากาตะและอดีตบ้านอาบุมิยะยังคงยืนเป็นประจักษ์พยานถึงความรุ่งเรือง',
          [Language.ZH]: '从17世纪开始发展成港口城市，尤其在北前船贸易中繁荣。山居仓库群和旧鐙屋等建筑至今仍在诉说着当时的繁荣。',
        },
        culture_festivals: {
          [Language.JA]: '酒田祭り、酒田の花火ショー、山王祭、庄内酒まつり、黒森歌舞伎などの伝統行事が継承されています。',
          [Language.EN]: 'Traditional events include Sakata Festival, Sakata Fireworks Show, Sanno Festival, Shonai Sake Festival, and Kuromori Kabuki performances.',
          [Language.TH]: 'สืบทอดงานประเพณีต่างๆ เช่น เทศกาลซากาตะ การแสดงดอกไม้ไฟซากาตะ เทศกาลซันโน เทศกาลสาเกโชไน และการแสดงคาบูกิคุโรโมริ',
          [Language.ZH]: '传承着酒田祭、酒田烟花秀、山王祭、庄内酒节、黑森歌舞伎等传统活动。',
        },
        things_to_do: {
          [Language.JA]: '山居倉庫見学、旧鐙屋訪問、日和山公園散策、庄内米料理体験、酒蔵見学、クルーズ体験が楽しめます。',
          [Language.EN]: 'Enjoy visiting Sakata Rice Warehouses, former Abumiya, Hiyoriyama Park strolls, Shonai rice cuisine experiences, sake brewery tours, and harbor cruises.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมโกดังข้าวซากาตะ อดีตบ้านอาบุมิยะ เดินเล่นที่สวนฮิโยริยามะ ประสบการณ์อาหารข้าวโชไน ทัวร์โรงกลั่นสาเก และล่องเรือในอ่าว',
          [Language.ZH]: '可以享受山居仓库参观、旧鐙屋访问、日和山公园散步、庄内米料理体验、酒窖参观、游轮体验。',
        },
        local_cuisine: {
          [Language.JA]: '庄内米、寒鱈料理、どんがら汁、玉こんにゃく、日本酒、海鮮料理が特産です。',
          [Language.EN]: 'Local specialties include Shonai rice, winter cod dishes, Dongara soup, Tama Konnyaku, sake, and seafood dishes.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ข้าวโชไน อาหารจากปลาค็อดฤดูหนาว ซุปดงการะ ทามะคนยาคุ สาเก และอาหารทะเล',
          [Language.ZH]: '特产包括庄内米、寒鳕鱼料理、炖汤、玉蒟蒻、日本酒、海鲜料理。',
        },
        access: {
          [Language.JA]: 'JR酒田駅から徒歩や市内循環バスで各観光スポットへアクセス可能。庄内空港からも近接しています。',
          [Language.EN]: 'Tourist spots accessible on foot or by city loop bus from JR Sakata Station. Close to Shonai Airport.',
          [Language.TH]: 'เข้าถึงสถานที่ท่องเที่ยวได้โดยการเดินเท้าหรือรถบัสรอบเมืองจากสถานี JR ซากาตะ ใกล้กับสนามบินโชไน',
          [Language.ZH]: '从JR酒田站可步行或乘坐市内循环巴士前往各个观光景点。临近庄内机场。',
        },
        image: 'https://picsum.photos/seed/sakata-city/600/300',
      },
      {
        id: 'mount-iide',
        name: {
          [Language.JA]: '飯豊山',
          [Language.EN]: 'Mount Iide',
          [Language.TH]: 'ภูเขาอิอิเดะ',
          [Language.ZH]: '饭丰山',
        },
        description: {
          [Language.JA]: '新潟県、山形県、福島県の県境に位置する標高2,105メートルの山。飯豊連峰の主峰で、深い渓谷や豊かな自然に恵まれた山岳地帯です。',
          [Language.EN]: 'A 2,105-meter peak located at the border of Niigata, Yamagata, and Fukushima prefectures. The main peak of the Iide mountain range, blessed with deep valleys and rich nature.',
          [Language.TH]: 'ยอดเขาสูง 2,105 เมตร ตั้งอยู่ที่รอยต่อของจังหวัดนีงาตะ ยามากาตะ และฟุกุชิมะ เป็นยอดเขาหลักของเทือกเขาอิอิเดะ อุดมไปด้วยหุบเขาลึกและธรรมชาติที่อุดมสมบูรณ์',
          [Language.ZH]: '位于新潟县、山形县、福岛县县界的海拔2,105米的山峰。作为饭丰连峰的主峰，拥有深邃的峡谷和丰富的自然环境。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇拝され、修験道の修行の場としても重要な役割を果たしてきました。',
          [Language.EN]: 'Long revered as an object of mountain worship and played an important role as a training ground for mountain asceticism.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะสถานที่ศักดิ์สิทธิ์บนภูเขามาอย่างยาวนาน และมีบทบาทสำคัญในฐานะสถานที่ฝึกฝนการบำเพ็ญตบะบนภูเขา',
          [Language.ZH]: '自古以来作为山岳信仰对象受到崇拜，作为修验道修行场所发挥着重要作用。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、山の日フェスティバル、紅葉まつり、雪山まつりなど、季節に応じた催しが開催されます。',
          [Language.EN]: 'Seasonal events include Mountain Opening Ceremony, Mountain Day Festival, Autumn Leaves Festival, and Snow Mountain Festival.',
          [Language.TH]: 'มีงานเทศกาลตามฤดูกาล รวมถึงพิธีเปิดภูเขา เทศกาลวันภูเขา เทศกาลใบไม้แดง และเทศกาลภูเขาหิมะ',
          [Language.ZH]: '举办山开祭、山之日节、红叶节、雪山节等应季活动。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、山菜採り、写真撮影、キャンプ、バードウォッチング、紅葉狩りが楽しめます。',
          [Language.EN]: 'Enjoy mountain climbing, trekking, mountain vegetable foraging, photography, camping, birdwatching, and autumn leaf viewing.',
          [Language.TH]: 'เพลิดเพลินกับการปีนเขา เดินป่า เก็บผักภูเขา ถ่ายภาพ แคมป์ปิ้ง ดูนก และชมใบไม้แดง',
          [Language.ZH]: '可以享受登山、徒步、采集山菜、摄影、露营、观鸟、赏红叶。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、岩魚料理、山形牛、地酒、そばなどが楽しめます。',
          [Language.EN]: 'Local specialties include mountain vegetable dishes, mushroom dishes, char fish dishes, Yamagata beef, local sake, and soba noodles.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากผักภูเขา อาหารจากเห็ด อาหารจากปลาชาร์ เนื้อวัวยามากาตะ สาเกท้องถิ่น และโซบะ',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、岩鱼料理、山形牛肉、地酒、荞麦面等。',
        },
        access: {
          [Language.JA]: '最寄りの米沢駅や小国駅からバスとタクシーを利用。登山口までは専用シャトルバスも運行しています。',
          [Language.EN]: 'Access via bus and taxi from nearby Yonezawa Station or Oguni Station. Dedicated shuttle buses also operate to the trailhead.',
          [Language.TH]: 'เข้าถึงได้โดยรถบัสและแท็กซี่จากสถานียอเนะซาวะหรือสถานีโอกุนิที่อยู่ใกล้เคียง มีรถรับส่งพิเศษไปยังจุดเริ่มต้นเส้นทางเดินป่า',
          [Language.ZH]: '从最近的米泽站或小国站乘坐巴士和出租车。另有专线班车开往登山口。',
        },
        image: 'https://picsum.photos/seed/mount-iide/600/300',
      },
      {
        id: 'kesennuma-city',
        name: {
          [Language.JA]: '気仙沼市',
          [Language.EN]: 'Kesennuma City',
          [Language.TH]: 'เมืองเคเซนนุมะ',
          [Language.ZH]: '气仙沼市',
        },
        description: {
          [Language.JA]: '宮城県北東部に位置する港町で、カツオやサメなどの水産業で有名。2011年の震災からの復興を遂げ、新たな観光スポットとしても注目されています。',
          [Language.EN]: 'A port city in northeastern Miyagi Prefecture, famous for its fishing industry, especially bonito and shark. Recovered from the 2011 disaster and emerging as a new tourist destination.',
          [Language.TH]: 'เมืองท่าในภาคตะวันออกเฉียงเหนือของจังหวัดมิยางิ มีชื่อเสียงด้านอุตสาหกรรมประมง โดยเฉพาะปลาโอและฉลาม ฟื้นตัวจากภัยพิบัติปี 2011 และกำลังเป็นที่สนใจในฐานะแหล่งท่องเที่ยวแห่งใหม่',
          [Language.ZH]: '位于宫城县东北部的港口城市，以金枪鱼和鲨鱼等渔业闻名。从2011年灾害中复兴，作为新的旅游景点备受关注。',
        },
        history: {
          [Language.JA]: '江戸時代から漁業の町として栄え、特にカツオ漁は日本有数の水揚げを誇ります。2011年の東日本大震災で被災しましたが、着実な復興を遂げています。',
          [Language.EN]: 'Prospered as a fishing town since the Edo period, particularly known for bonito fishing. Though affected by the 2011 Great East Japan Earthquake, it has achieved steady recovery.',
          [Language.TH]: 'รุ่งเรืองในฐานะเมืองประมงตั้งแต่สมัยเอโดะ โดดเด่นด้านการจับปลาโอ แม้จะได้รับผลกระทบจากแผ่นดินไหวครั้งใหญ่ทางตะวันออกของญี่ปุ่นในปี 2011 แต่ก็ฟื้นตัวอย่างมั่นคง',
          [Language.ZH]: '自江户时代起就作为渔业城市繁荣，尤其以金枪鱼渔获量位居日本前列。虽在2011年东日本大地震中受灾，但已实现稳步复兴。',
        },
        culture_festivals: {
          [Language.JA]: '気仙沼みなとまつり、サメの日イベント、かつお祭り、気仙沼食の文化祭など、海の幸を活かした催しが豊富です。',
          [Language.EN]: 'Rich in seafood-related events including Kesennuma Port Festival, Shark Day events, Bonito Festival, and Kesennuma Food Culture Festival.',
          [Language.TH]: 'มีงานที่เกี่ยวข้องกับอาหารทะเลมากมาย รวมถึงเทศกาลท่าเรือเคเซนนุมะ งานวันฉลาม เทศกาลปลาโอ และเทศกาลวัฒนธรรมอาหารเคเซนนุมะ',
          [Language.ZH]: '丰富的海鲜相关活动包括气仙沼港节、鲨鱼日活动、金枪鱼节、气仙沼食文化节等。',
        },
        things_to_do: {
          [Language.JA]: '魚市場見学、シャークミュージアム訪問、港町散策、遊覧船クルーズ、海鮮料理体験、復興まちづくり情報館見学ができます。',
          [Language.EN]: 'Visit the fish market, Shark Museum, stroll through the port town, enjoy harbor cruises, experience seafood cuisine, and visit the Reconstruction Memorial.',
          [Language.TH]: 'เยี่ยมชมตลาดปลา พิพิธภัณฑ์ฉลาม เดินเล่นในเมืองท่า ล่องเรือชมอ่าว สัมผัสประสบการณ์อาหารทะเล และเยี่ยมชมพิพิธภัณฑ์การฟื้นฟู',
          [Language.ZH]: '可以参观鱼市场、鲨鱼博物馆、港口散步、游览船巡游、海鲜料理体验、重建纪念馆参观。',
        },
        local_cuisine: {
          [Language.JA]: 'カツオの刺身、フカヒレ、さんま料理、ホヤ、気仙沼ホルモン、メカジキステーキが名物です。',
          [Language.EN]: 'Local specialties include bonito sashimi, shark fin, pacific saury dishes, sea squirt, Kesennuma hormone (offal), and swordfish steak.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ซาชิมิปลาโอ หูฉลาม อาหารจากปลาซันมะ เพรียงหัวหอม ฮอร์โมน(เครื่องในย่าง)เคเซนนุมะ และสเต๊กปลากระโทงแทง',
          [Language.ZH]: '特色美食包括金枪鱼刺身、鱼翅、秋刀鱼料理、海鞘、气仙沼火锅、旗鱼排。',
        },
        access: {
          [Language.JA]: 'JR気仙沼線BRTで気仙沼駅まで。市内は徒歩やバス、タクシーで観光スポットを巡れます。',
          [Language.EN]: 'Access via JR Kesennuma Line BRT to Kesennuma Station. Tourist spots can be reached on foot, by bus, or taxi.',
          [Language.TH]: 'เข้าถึงได้ทาง BRT สาย JR เคเซนนุมะถึงสถานีเคเซนนุมะ สามารถเดินทางไปยังสถานที่ท่องเที่ยวด้วยการเดิน รถบัส หรือแท็กซี่',
          [Language.ZH]: '通过JR气仙沼线BRT到达气仙沼站。市内可步行、乘坐巴士或出租车游览景点。',
        },
        image: 'https://picsum.photos/seed/kesennuma-city/600/300',
      },
      {
        id: 'zuiganji-temple',
        name: {
          [Language.JA]: '瑞巌寺',
          [Language.EN]: 'Zuiganji Temple',
          [Language.TH]: 'วัดซุยกันจิ',
          [Language.ZH]: '瑞岩寺',
        },
        description: {
          [Language.JA]: '松島を代表する禅寺で、伊達政宗の庇護を受けた名刹。国宝に指定された本堂や、石庭、洞窟群など、見どころが満載です。',
          [Language.EN]: 'A prominent Zen temple in Matsushima under the patronage of Date Masamune. Features numerous attractions including a National Treasure main hall, rock garden, and cave complexes.',
          [Language.TH]: 'วัดเซนที่โดดเด่นในมัตสึชิมะภายใต้การอุปถัมภ์ของดาเตะ มาซามุเนะ มีสถานที่น่าสนใจมากมาย รวมถึงหอประธานที่เป็นสมบัติแห่งชาติ สวนหิน และถ้ำต่างๆ',
          [Language.ZH]: '松岛具有代表性的禅寺，受到伊达政宗庇护的名刹。拥有被指定为国宝的本堂、石庭、洞窟群等众多看点。',
        },
        history: {
          [Language.JA]: '828年に創建され、伊達政宗により1609年に再建。その後、東北有数の禅寺として栄え、重要な文化財を多数所蔵しています。',
          [Language.EN]: 'Founded in 828 and rebuilt in 1609 by Date Masamune. Flourished as one of the major Zen temples in Tohoku, housing numerous important cultural properties.',
          [Language.TH]: 'ก่อตั้งในปี 828 และสร้างใหม่ในปี 1609 โดยดาเตะ มาซามุเนะ เจริญรุ่งเรืองในฐานะวัดเซนที่สำคัญแห่งหนึ่งในโทโฮคุ เก็บรักษาสมบัติทางวัฒนธรรมที่สำคัญมากมาย',
          [Language.ZH]: '创建于828年，由伊达政宗于1609年重建。此后作为东北地区重要的禅寺繁荣发展，收藏着众多重要文化财产。',
        },
        culture_festivals: {
          [Language.JA]: '除夜の鐘つき法要、新年祈祷会、花まつり、盂蘭盆会、紅葉ライトアップなど、年間を通じて様々な法要や行事が行われます。',
          [Language.EN]: 'Various ceremonies and events throughout the year including New Years Eve Bell Ringing, New Year Prayer Services, Flower Festival, Obon Festival, and Autumn Leaves Light-up.',
          [Language.TH]: 'มีพิธีกรรมและงานต่างๆ ตลอดทั้งปี รวมถึงพิธีตีระฆังส่งท้ายปี พิธีสวดมนต์ปีใหม่ เทศกาลดอกไม้ เทศกาลโอบง และการประดับไฟใบไม้แดง',
          [Language.ZH]: '全年举行除夕撞钟法会、新年祈祷会、花节、盂兰盆会、红叶灯光秀等各种法会和活动。',
        },
        things_to_do: {
          [Language.JA]: '国宝本堂見学、庭園散策、洞窟群探索、座禅体験、写経体験、宝物館見学ができます。',
          [Language.EN]: 'Visit the National Treasure main hall, stroll through gardens, explore cave complexes, experience Zen meditation, try sutra copying, and visit the treasure museum.',
          [Language.TH]: 'เยี่ยมชมหอประธานที่เป็นสมบัติแห่งชาติ เดินเล่นในสวน สำรวจถ้ำ ทดลองนั่งสมาธิแบบเซน ลองคัดลอกพระสูตร และเยี่ยมชมพิพิธภัณฑ์สมบัติ',
          [Language.ZH]: '可以参观国宝本堂、庭园散步、探索洞窟群、体验坐禅、写经、参观宝物馆。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、松島焼き牡蠣、ずんだ餅、笹かまぼこ、お茶席での抹茶と和菓子が楽しめます。',
          [Language.EN]: 'Enjoy Buddhist vegetarian cuisine, Matsushima grilled oysters, zunda mochi, sasa kamaboko, and matcha with Japanese sweets at tea ceremonies.',
          [Language.TH]: 'เพลิดเพลินกับอาหารเจแบบพุทธ หอยนางรมย่างมัตสึชิมะ ซุนดะโมจิ ซาซะคามาโบโกะ และชาเขียวกับขนมญี่ปุ่นในพิธีชา',
          [Language.ZH]: '可以品尝精进料理、松岛烤牡蛎、枝豆馅糯米糍、笹蒲鉾、茶席抹茶和和果子。',
        },
        access: {
          [Language.JA]: 'JR松島海岸駅から徒歩約5分。仙台市内からは電車で約25分です。',
          [Language.EN]: 'About 5 minutes walk from JR Matsushimakaigan Station. About 25 minutes by train from Sendai city.',
          [Language.TH]: 'เดินประมาณ 5 นาทีจากสถานี JR มัตสึชิมะไคกัน ใช้เวลาประมาณ 25 นาทีโดยรถไฟจากเมืองเซนได',
          [Language.ZH]: '从JR松岛海岸站步行约5分钟。从仙台市区乘电车约25分钟。',
        },
        image: 'https://picsum.photos/seed/zuiganji-temple/600/300',
      },
      {
        id: 'yonezawa-city',
        name: {
          [Language.JA]: '米沢市',
          [Language.EN]: 'Yonezawa City',
          [Language.TH]: 'เมืองโยเนะซาวะ',
          [Language.ZH]: '米泽市',
        },
        description: {
          [Language.JA]: '山形県南部に位置する歴史ある城下町で、上杉家の城下町として栄えました。米沢牛、織物、こけしなど、豊かな文化と伝統工芸が息づく街です。',
          [Language.EN]: 'A historic castle town in southern Yamagata Prefecture that flourished under the Uesugi clan. A city rich in culture and traditional crafts, known for Yonezawa beef, textiles, and kokeshi dolls.',
          [Language.TH]: 'เมืองปราสาทประวัติศาสตร์ในตอนใต้ของจังหวัดยามากาตะที่เจริญรุ่งเรืองภายใต้การปกครองของตระกูลอุเอสุกิ เมืองที่อุดมไปด้วยวัฒนธรรมและงานฝีมือดั้งเดิม มีชื่อเสียงด้านเนื้อวัวโยเนะซาวะ สิ่งทอ และตุ๊กตาโคเคชิ',
          [Language.ZH]: '位于山形县南部的历史悠久的城下町，作为上杉家的城下町而繁荣。以米泽牛、织物、木偶等丰富的文化和传统工艺闻名的城市。',
        },
        history: {
          [Language.JA]: '戦国時代から上杉家の本拠地として発展し、特に上杉鷹山の改革により、産業や教育が大きく発展しました。',
          [Language.EN]: 'Developed as the headquarters of the Uesugi clan since the Warring States period, with significant industrial and educational development under the reforms of Uesugi Yozan.',
          [Language.TH]: 'พัฒนาในฐานะศูนย์กลางของตระกูลอุเอสุกิตั้งแต่ยุคสงคราม มีการพัฒนาด้านอุตสาหกรรมและการศึกษาอย่างมากภายใต้การปฏิรูปของอุเอสุกิ โยซัง',
          [Language.ZH]: '自战国时代起作为上杉家的根据地发展，特别是在上杉鹰山的改革下，产业和教育得到了巨大发展。',
        },
        culture_festivals: {
          [Language.JA]: '上杉雪灯篭まつり、米沢牛まつり、なせばなる秋まつり、上杉まつり、米沢上杉まつりなど、伝統的な祭りが豊富です。',
          [Language.EN]: 'Rich in traditional festivals including Uesugi Snow Lantern Festival, Yonezawa Beef Festival, Naseba Naru Autumn Festival, Uesugi Festival, and Yonezawa Uesugi Festival.',
          [Language.TH]: 'อุดมไปด้วยเทศกาลประเพณี รวมถึงเทศกาลโคมไฟหิมะอุเอสุกิ เทศกาลเนื้อวัวโยเนะซาวะ เทศกาลฤดูใบไม้ร่วงนาเซบะนารุ เทศกาลอุเอสุกิ และเทศกาลโยเนะซาวะอุเอสุกิ',
          [Language.ZH]: '丰富的传统节日包括上杉雪灯笼节、米泽牛节、成事秋节、上杉节、米泽上杉节等。',
        },
        things_to_do: {
          [Language.JA]: '上杉神社参拝、松が岬公園散策、米沢市上杉博物館見学、米沢織工房体験、こけし絵付け体験、米沢牛の味覚巡りができます。',
          [Language.EN]: 'Visit Uesugi Shrine, stroll through Matsugasaki Park, explore Yonezawa City Uesugi Museum, experience textile weaving, try kokeshi doll painting, and enjoy Yonezawa beef tasting tours.',
          [Language.TH]: 'เยี่ยมชมศาลเจ้าอุเอสุกิ เดินเล่นในสวนมัตสึกาซากิ สำรวจพิพิธภัณฑ์อุเอสุกิเมืองโยเนะซาวะ สัมผัสประสบการณ์การทอผ้า ทดลองวาดตุ๊กตาโคเคชิ และทัวร์ชิมเนื้อวัวโยเนะซาวะ',
          [Language.ZH]: '可以参拜上杉神社、松岬公园散步、参观米泽市上杉博物馆、体验米泽织物工房、木偶彩绘体验、品尝米泽牛。',
        },
        local_cuisine: {
          [Language.JA]: '米沢牛、米沢らーめん、玉こんにゃく、米沢納豆、秘伝豆、冷やしそばが特産です。',
          [Language.EN]: 'Local specialties include Yonezawa beef, Yonezawa ramen, Tama Konnyaku, Yonezawa natto, Hiden-mame beans, and chilled soba noodles.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ เนื้อวัวโยเนะซาวะ ราเมนโยเนะซาวะ ทามะคนยาคุ นัตโตะโยเนะซาวะ ถั่วฮิเด็นมาเมะ และโซบะเย็น',
          [Language.ZH]: '特产包括米泽牛、米泽拉面、玉蒟蒻、米泽纳豆、秘传豆、冷荞麦面。',
        },
        access: {
          [Language.JA]: 'JR山形新幹線で米沢駅まで。市内は循環バスやタクシーで観光スポットを巡れます。',
          [Language.EN]: 'Access via JR Yamagata Shinkansen to Yonezawa Station. Tourist spots can be reached by loop bus or taxi.',
          [Language.TH]: 'เข้าถึงได้ทางชินคันเซ็นสายยามากาตะถึงสถานีโยเนะซาวะ สามารถเดินทางไปยังสถานที่ท่องเที่ยวด้วยรถบัสรอบเมืองหรือแท็กซี่',
          [Language.ZH]: '通过JR山形新干线到达米泽站。市内可乘坐循环巴士或出租车游览景点。',
        },
        image: 'https://picsum.photos/seed/yonezawa-city/600/300',
      },
      {
        id: 'naruko-gorge',
        name: {
          [Language.JA]: '鳴子峡',
          [Language.EN]: 'Naruko Gorge',
          [Language.TH]: 'หุบเขานารุโกะ',
          [Language.ZH]: '鸣子峡',
        },
        description: {
          [Language.JA]: '宮城県大崎市の渓谷で、約2.5キロメートルにわたって続く深さ100メートルの渓谷。特に紅葉シーズンは絶景で、温泉街としても有名です。',
          [Language.EN]: 'A gorge in Osaki City, Miyagi Prefecture, stretching about 2.5 kilometers with 100-meter deep cliffs. Especially spectacular during autumn foliage season and famous for its hot springs.',
          [Language.TH]: 'หุบเขาในเมืองโอซากิ จังหวัดมิยางิ ยาวประมาณ 2.5 กิโลเมตร มีหน้าผาลึก 100 เมตร สวยงามโดดเด่นในฤดูใบไม้ร่วงและมีชื่อเสียงด้านน้ำพุร้อน',
          [Language.ZH]: '位于宫城县大崎市的峡谷，延续约2.5公里，深度达100米。以红叶季节的绝景和温泉街而闻名。',
        },
        history: {
          [Language.JA]: '古くから温泉地として知られ、江戸時代には湯治場として多くの人々が訪れました。渓谷美と温泉文化が融合した独特の観光地です。',
          [Language.EN]: 'Known since ancient times for its hot springs, visited by many during the Edo period for therapeutic bathing. A unique tourist destination combining gorge scenery with onsen culture.',
          [Language.TH]: 'เป็นที่รู้จักมาตั้งแต่โบราณในฐานะแหล่งน้ำพุร้อน มีผู้คนมากมายมาเยือนในสมัยเอโดะเพื่อการอาบน้ำเพื่อสุขภาพ เป็นสถานที่ท่องเที่ยวที่มีเอกลักษณ์ที่ผสมผสานระหว่างทิวทัศน์หุบเขาและวัฒนธรรมออนเซ็น',
          [Language.ZH]: '自古以来就以温泉地而闻名，江户时代就有许多人前来疗养。是融合峡谷美景和温泉文化的独特旅游地。',
        },
        culture_festivals: {
          [Language.JA]: '鳴子峡紅葉まつり、こけし祭り、温泉神社例大祭、なるこ新米まつり、鳴子温泉郷冬の散策などが開催されます。',
          [Language.EN]: 'Events include Naruko Gorge Autumn Leaves Festival, Kokeshi Festival, Onsen Shrine Festival, New Rice Festival, and Winter Walking Tours of Naruko Onsen.',
          [Language.TH]: 'มีงานเทศกาลต่างๆ รวมถึงเทศกาลใบไม้แดงหุบเขานารุโกะ เทศกาลโคเคชิ เทศกาลศาลเจ้าออนเซ็น เทศกาลข้าวใหม่ และทัวร์เดินชมฤดูหนาวของนารุโกะออนเซ็น',
          [Language.ZH]: '举办鸣子峡红叶节、木偶节、温泉神社例大祭、鸣子新米节、鸣子温泉乡冬季散步等活动。',
        },
        things_to_do: {
          [Language.JA]: '渓谷トレッキング、紅葉狩り、温泉めぐり、こけし工人体験、足湯体験、鳴子峡レストハウスからの眺望が楽しめます。',
          [Language.EN]: 'Enjoy gorge trekking, autumn leaf viewing, hot spring hopping, kokeshi doll making experience, foot bath experience, and views from Naruko Gorge Rest House.',
          [Language.TH]: 'เพลิดเพลินกับการเดินป่าในหุบเขา ชมใบไม้แดง เที่ยวชมน้ำพุร้อน ทดลองทำตุ๊กตาโคเคชิ แช่เท้าในบ่อน้ำร้อน และชมวิวจากศาลาพักผ่อนหุบเขานารุโกะ',
          [Language.ZH]: '可以享受峡谷徒步、赏红叶、温泉巡游、木偶工匠体验、足汤体验、从鸣子峡休息处欣赏景色。',
        },
        local_cuisine: {
          [Language.JA]: '温泉卵、こけしサイダー、鳴子そば、温泉まんじゅう、郷土料理、山菜料理が特徴です。',
          [Language.EN]: 'Local specialties include onsen eggs, kokeshi cider, Naruko soba, onsen manju, local dishes, and mountain vegetable cuisine.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ไข่ต้มน้ำพุร้อน น้ำอัดลมโคเคชิ โซบะนารุโกะ ขนมมันจูน้ำพุร้อน อาหารท้องถิ่น และอาหารจากผักภูเขา',
          [Language.ZH]: '特色美食包括温泉蛋、木偶汽水、鸣子荞麦面、温泉馒头、乡土料理、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR鳴子温泉駅から徒歩または路線バスで約15分。仙台市内から電車で約2時間です。',
          [Language.EN]: 'About 15 minutes by foot or bus from JR Naruko-Onsen Station. About 2 hours by train from Sendai city.',
          [Language.TH]: 'ใช้เวลาประมาณ 15 นาทีโดยการเดินหรือรถบัสจากสถานี JR นารุโกะออนเซ็น ใช้เวลาประมาณ 2 ชั่วโมงโดยรถไฟจากเมืองเซนได',
          [Language.ZH]: '从JR鸣子温泉站步行或乘路线巴士约15分钟。从仙台市区乘电车约2小时。',
        },
        image: 'https://picsum.photos/seed/naruko-gorge/600/300',
      },
      {
        id: 'sanriku-coast',
        name: {
          [Language.JA]: '三陸海岸',
          [Language.EN]: 'Sanriku Coast',
          [Language.TH]: 'ชายฝั่งซันริคุ',
          [Language.ZH]: '三陆海岸',
        },
        description: {
          [Language.JA]: '岩手県から宮城県にかけて続くリアス式海岸。断崖絶壁と入り江が織りなす壮大な景観と新鮮な海の幸で知られています。',
          [Language.EN]: 'A rias coastline stretching from Iwate to Miyagi Prefecture. Known for its dramatic scenery of cliffs and inlets, and fresh seafood.',
          [Language.TH]: 'ชายฝั่งแบบเรียสที่ทอดยาวจากจังหวัดอิวาเตะถึงมิยางิ มีชื่อเสียงด้านทิวทัศน์อันน่าทึ่งของหน้าผาและอ่าว รวมถึงอาหารทะเลสด',
          [Language.ZH]: '从岩手县延伸至宫城县的海岸。以悬崖绝壁与海湾交织的壮观景观和新鲜海产而闻名。',
        },
        history: {
          [Language.JA]: '古くから漁業が盛んで、2013年に三陸復興国立公園として再編されました。震災からの復興のシンボルとしても知られています。',
          [Language.EN]: 'Long known for its fishing industry, it was reorganized as Sanriku Fukko National Park in 2013. Also known as a symbol of recovery from the disaster.',
          [Language.TH]: 'เป็นที่รู้จักด้านอุตสาหกรรมประมงมายาวนาน ได้รับการจัดตั้งใหม่เป็นอุทยานแห่งชาติซันริคุฟุกโกะในปี 2013 และเป็นสัญลักษณ์ของการฟื้นฟูจากภัยพิบัติ',
          [Language.ZH]: '自古以来渔业兴盛，2013年重组为三陆复兴国立公园。也被视为灾后重建的象征。',
        },
        culture_festivals: {
          [Language.JA]: '三陸海の博覧会、さんま祭り、牡蠣祭り、浜辺の芸術祭など、海の恵みを祝う行事が数多く開催されます。',
          [Language.EN]: 'Many events celebrating the sea\'s bounty are held, including the Sanriku Sea Expo, Pacific Saury Festival, Oyster Festival, and Beach Art Festival.',
          [Language.TH]: 'มีงานเฉลิมฉลองความอุดมสมบูรณ์ของทะเลมากมาย เช่น งานแสดงสินค้าทะเลซันริคุ เทศกาลปลาซอรี่ เทศกาลหอยนางรม และเทศกาลศิลปะชายหาด',
          [Language.ZH]: '举办三陆海洋博览会、秋刀鱼节、牡蛎节、海滨艺术节等庆祝海洋恩赐的活动。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船での海岸巡り、漁港での市場見学、シーカヤック、トレッキング、新鮮な海産物の試食がおすすめです。',
          [Language.EN]: 'Recommended activities include coastal sightseeing cruises, visiting fish markets at ports, sea kayaking, trekking, and sampling fresh seafood.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมชายฝั่ง เยี่ยมชมตลาดปลาที่ท่าเรือ พายเรือคายัคในทะเล เดินป่า และชิมอาหารทะเลสด',
          [Language.ZH]: '推荐乘游览船环游海岸、参观渔港市场、海上皮划艇、徒步、品尝新鲜海产。',
        },
        local_cuisine: {
          [Language.JA]: '三陸わかめ、生ウニ、ホタテ、サンマ、牡蠣など、新鮮な海産物が豊富です。',
          [Language.EN]: 'Rich in fresh seafood including Sanriku wakame seaweed, raw sea urchin, scallops, Pacific saury, and oysters.',
          [Language.TH]: 'อุดมด้วยอาหารทะเลสด เช่น สาหร่ายวากาเมะซันริคุ หอยเม่นดิบ หอยเชลล์ ปลาซอรี่ และหอยนางรม',
          [Language.ZH]: '丰富的新鲜海产包括三陆裙带菜、生海胆、扇贝、秋刀鱼、牡蛎等。',
        },
        access: {
          [Language.JA]: '三陸鉄道で各地を巡ることができます。主要な観光スポットまでは路線バスも運行しています。',
          [Language.EN]: 'The area can be explored via the Sanriku Railway. Local buses also operate to major tourist spots.',
          [Language.TH]: 'สามารถเดินทางท่องเที่ยวในพื้นที่ด้วยรถไฟซันริคุ มีรถบัสท้องถิ่นให้บริการไปยังสถานที่ท่องเที่ยวสำคัญ',
          [Language.ZH]: '可以乘坐三陆铁道游览各地。主要观光景点有公交车运营。',
        },
        image: 'https://picsum.photos/seed/sanriku-coast/600/300',
      },
      {
        id: 'risshakuji',
        name: {
          [Language.JA]: '立石寺',
          [Language.EN]: 'Risshakuji Temple',
          [Language.TH]: 'วัดริชชาคุจิ',
          [Language.ZH]: '立石寺',
        },
        description: {
          [Language.JA]: '山寺の名で知られる古刹。1015段の石段と山腹に建つ堂塔群、そして眼下に広がる景色が印象的です。',
          [Language.EN]: 'An ancient temple known as Yamadera. Impressive for its 1,015 stone steps, temple buildings built into the mountainside, and panoramic views.',
          [Language.TH]: 'วัดโบราณที่รู้จักในชื่อยามาเดระ โดดเด่นด้วยบันไดหิน 1,015 ขั้น อาคารวัดที่สร้างบนไหล่เขา และวิวพาโนรามา',
          [Language.ZH]: '以山寺之名闻名的古刹。1015级石阶和山腹上的殿堂群，以及脚下展开的景色令人印象深刻。',
        },
        history: {
          [Language.JA]: '860年に天台宗の寺院として開山。松尾芭蕉の「閑かさや 岩にしみ入る 蝉の声」の句で有名です。',
          [Language.EN]: 'Founded in 860 as a Tendai Buddhist temple. Famous for Matsuo Basho\'s haiku about the silence and cicada\'s voice.',
          [Language.TH]: 'ก่อตั้งในปี 860 เป็นวัดนิกายเทนได มีชื่อเสียงจากบทกวีไฮกุของมัตสึโอะ บาโชเกี่ยวกับความเงียบและเสียงจักจั่น',
          [Language.ZH]: '860年作为天台宗寺院开山。因松尾芭蕉"寂静啊 渗入岩石的 蝉鸣声"的俳句而闻名。',
        },
        culture_festivals: {
          [Language.JA]: '山寺の月まつり、光のイベント、雪灯篭まつりなど、季節ごとの行事が開催されます。',
          [Language.EN]: 'Seasonal events are held including the Mountain Temple Moon Festival, illumination events, and Snow Lantern Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล เช่น เทศกาลพระจันทร์วัดภูเขา งานประดับไฟ และเทศกาลโคมไฟหิมะ',
          [Language.ZH]: '举办山寺月见节、灯光活动、雪灯笼节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '石段巡り、五大堂からの眺望、宝物殿の見学、座禅体験、写経体験がおすすめです。',
          [Language.EN]: 'Recommended activities include climbing the stone steps, enjoying views from Godaido Hall, visiting the treasure hall, experiencing zazen meditation, and trying sutra copying.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินขึ้นบันไดหิน ชมวิวจากศาลาโกไดโด เยี่ยมชมหอสมบัติ ทดลองนั่งสมาธิแบบเซน และลองคัดลอกพระสูตร',
          [Language.ZH]: '推荐参拜石阶、欣赏五大堂的景色、参观宝物殿、体验坐禅、体验抄经。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、山形そば、だだちゃ豆、芋煮、ころ煮などの郷土料理が楽しめます。',
          [Language.EN]: 'Enjoy local dishes including Buddhist vegetarian cuisine, Yamagata soba noodles, dadacha-mame edamame, imoni stew, and koro-ni simmered vegetables.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารเจแบบพุทธ โซบะยามากาตะ ถั่วแระญี่ปุ่นดาดาชามาเมะ สตูอิโมนิ และผักตุ๋นโคโรนิ',
          [Language.ZH]: '可以品尝精进料理、山形荞麦面、茶豆、芋煮、炖菜等乡土料理。',
        },
        access: {
          [Language.JA]: 'JR山寺駅から徒歩5分。山寺観光協会のガイドツアーもおすすめです。',
          [Language.EN]: '5 minutes on foot from JR Yamadera Station. Guided tours by the Yamadera Tourism Association are also recommended.',
          [Language.TH]: 'ใช้เวลาเดิน 5 นาทีจากสถานี JR ยามาเดระ แนะนำให้ใช้บริการทัวร์นำเที่ยวโดยสมาคมการท่องเที่ยวยามาเดระ',
          [Language.ZH]: '从JR山寺站步行5分钟。推荐参加山寺观光协会的导游团。',
        },
        image: 'https://picsum.photos/seed/risshakuji-temple/600/300',
      },
      {
        id: 'towada-art-center',
        name: {
          [Language.JA]: '十和田市現代美術館',
          [Language.EN]: 'Towada Art Center',
          [Language.TH]: 'ศูนย์ศิลปะโทวาดะ',
          [Language.ZH]: '十和田市现代美术馆',
        },
        description: {
          [Language.JA]: '現代アートと建築が融合した美術館。街に開かれた斬新なデザインと、国内外の現代アート作品が特徴です。',
          [Language.EN]: 'A museum where contemporary art meets architecture. Features innovative design open to the city and contemporary artworks from Japan and abroad.',
          [Language.TH]: 'พิพิธภัณฑ์ที่ผสมผสานศิลปะร่วมสมัยกับสถาปัตยกรรม โดดเด่นด้วยการออกแบบที่ทันสมัยเปิดสู่เมืองและผลงานศิลปะร่วมสมัยจากในและต่างประเทศ',
          [Language.ZH]: '现代艺术与建筑融合的美术馆。以向城市开放的创新设计和国内外现代艺术作品为特色。',
        },
        history: {
          [Language.JA]: '2008年にアートによる町づくりの一環として開館。以来、地域の文化発信拠点として機能しています。',
          [Language.EN]: 'Opened in 2008 as part of city development through art. Since then, it has served as a cultural hub for the region.',
          [Language.TH]: 'เปิดในปี 2008 เป็นส่วนหนึ่งของการพัฒนาเมืองผ่านศิลปะ นับแต่นั้นมาได้ทำหน้าที่เป็นศูนย์กลางวัฒนธรรมของภูมิภาค',
          [Language.ZH]: '2008年作为艺术城市建设的一环开馆。此后一直作为地区文化传播基地发挥作用。',
        },
        culture_festivals: {
          [Language.JA]: 'アートフェスティバル、ワークショップ、アーティストトーク、季節限定の展示会が開催されます。',
          [Language.EN]: 'Art festivals, workshops, artist talks, and seasonal exhibitions are held.',
          [Language.TH]: 'มีการจัดเทศกาลศิลปะ เวิร์คช็อป การพูดคุยกับศิลปิน และนิทรรศการตามฤดูกาล',
          [Language.ZH]: '举办艺术节、工作坊、艺术家讲座、季节性展览。',
        },
        things_to_do: {
          [Language.JA]: '常設展示の鑑賞、企画展の見学、カフェでの休憩、ミュージアムショップでのショッピング、建築ツアーがおすすめです。',
          [Language.EN]: 'Recommended activities include viewing permanent exhibitions, special exhibitions, relaxing at the café, shopping at the museum shop, and taking architecture tours.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมนิทรรศการถาวร นิทรรศการพิเศษ พักผ่อนที่คาเฟ่ ช็อปปิ้งที่ร้านค้าพิพิธภัณฑ์ และทัวร์สถาปัตยกรรม',
          [Language.ZH]: '推荐参观常设展示、企划展、在咖啡厅休息、在博物馆商店购物、参加建筑之旅。',
        },
        local_cuisine: {
          [Language.JA]: 'ミュージアムカフェでは地元食材を使用した創作料理や、バリスタこだわりのコーヒーを提供しています。',
          [Language.EN]: 'The museum café serves creative dishes using local ingredients and barista-crafted coffee.',
          [Language.TH]: 'คาเฟ่พิพิธภัณฑ์เสิร์ฟอาหารสร้างสรรค์ที่ใช้วัตถุดิบท้องถิ่นและกาแฟที่ชงโดยบาริสต้า',
          [Language.ZH]: '博物馆咖啡厅提供使用当地食材的创意料理和咖啡师精心制作的咖啡。',
        },
        access: {
          [Language.JA]: 'JR十和田市駅からバスで15分。レンタサイクルでの市内観光もおすすめです。',
          [Language.EN]: '15 minutes by bus from JR Towada-shi Station. Rental bikes are recommended for city sightseeing.',
          [Language.TH]: '15 นาทีโดยรถบัสจากสถานี JR โทวาดะ แนะนำให้เช่าจักรยานสำหรับเที่ยวชมเมือง',
          [Language.ZH]: '从JR十和田市站乘巴士15分钟。推荐租借自行车游览市内。',
        },
        image: 'https://picsum.photos/seed/towada-art-center/600/300',
      },
      {
        id: 'kakunodate',
        name: {
          [Language.JA]: '角館武家屋敷',
          [Language.EN]: 'Kakunodate Samurai District',
          [Language.TH]: 'ย่านซามูไรคาคุโนดาเตะ',
          [Language.ZH]: '角馆武家宅邸',
        },
        description: {
          [Language.JA]: '江戸時代の武家屋敷が良好に保存された歴史地区。しだれ桜と黒塀が織りなす風情ある街並みが特徴です。',
          [Language.EN]: 'A historic district with well-preserved samurai residences from the Edo period. Known for its atmospheric streetscape of weeping cherry trees and black fences.',
          [Language.TH]: 'ย่านประวัติศาสตร์ที่มีบ้านซามูไรสมัยเอโดะที่ได้รับการอนุรักษ์อย่างดี มีชื่อเสียงด้านทิวทัศน์ถนนที่มีต้นซากุระห้อยและรั้วสีดำ',
          [Language.ZH]: '江户时代武家宅邸保存完好的历史街区。以垂樱和黑墙构成的风情街景为特色。',
        },
        history: {
          [Language.JA]: '1620年に佐竹氏の支城として開かれ、約80戸の武家屋敷が建ち並びました。現在も武家文化を伝える重要な史跡として保存されています。',
          [Language.EN]: 'Established in 1620 as a castle town of the Satake clan, with about 80 samurai residences. Currently preserved as an important historic site conveying samurai culture.',
          [Language.TH]: 'ก่อตั้งในปี 1620 เป็นเมืองปราสาทของตระกูลซาทาเกะ มีบ้านซามูไรประมาณ 80 หลัง ปัจจุบันได้รับการอนุรักษ์เป็นสถานที่ประวัติศาสตร์สำคัญที่บอกเล่าวัฒนธรรมซามูไร',
          [Language.ZH]: '1620年作为佐竹氏的城下町开设，约有80户武家宅邸。现作为传承武家文化的重要史迹保存。',
        },
        culture_festivals: {
          [Language.JA]: '桜まつり、武家屋敷ライトアップ、火振りかまくら、雛めぐりなど、季節の行事が豊富です。',
          [Language.EN]: 'Rich in seasonal events including Cherry Blossom Festival, Samurai Residence Light-up, Fire Swinging Festival, and Hina Doll Festival.',
          [Language.TH]: 'อุดมด้วยงานตามฤดูกาล เช่น เทศกาลซากุระ การประดับไฟบ้านซามูไร เทศกาลแกว่งไฟ และเทศกาลตุ๊กตาฮินะ',
          [Language.ZH]: '樱花节、武家宅邸灯光秀、火振镰仓、雏人偶巡游等丰富的季节活动。',
        },
        things_to_do: {
          [Language.JA]: '武家屋敷の見学、着物レンタル、伝統工芸体験、庭園散策、人力車での町巡りがおすすめです。',
          [Language.EN]: 'Recommended activities include visiting samurai houses, kimono rental, traditional craft experiences, garden walks, and rickshaw tours.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมบ้านซามูไร เช่าชุดกิโมโน ทดลองทำงานฝีมือดั้งเดิม เดินเล่นในสวน และนั่งรถลากชมเมือง',
          [Language.ZH]: '推荐参观武家宅邸、和服租赁、传统工艺体验、庭园散步、人力车游览。',
        },
        local_cuisine: {
          [Language.JA]: 'きりたんぽ鍋、稲庭うどん、山の幸を使った郷土料理、御殿まり型和菓子が特徴です。',
          [Language.EN]: 'Known for kiritanpo nabe hot pot, Inaniwa udon noodles, local dishes using mountain ingredients, and palace ball-shaped Japanese sweets.',
          [Language.TH]: 'มีชื่อเสียงด้านหม้อไฟคิริทันโปะ อุด้งอินานิวะ อาหารท้องถิ่นที่ใช้วัตถุดิบจากภูเขา และขนมญี่ปุ่นรูปทรงลูกบอลพระราชวัง',
          [Language.ZH]: '以切炭火锅、稻庭乌冬面、使用山珍的乡土料理、宫廷球形和果子为特色。',
        },
        access: {
          [Language.JA]: 'JR角館駅から徒歩15分。観光案内所でガイドマップを入手できます。',
          [Language.EN]: '15 minutes on foot from JR Kakunodate Station. Guide maps are available at the tourist information center.',
          [Language.TH]: '15 นาทีโดยการเดินจากสถานี JR คาคุโนดาเตะ สามารถรับแผนที่นำเที่ยวได้ที่ศูนย์ข้อมูลนักท่องเที่ยว',
          [Language.ZH]: '从JR角馆站步行15分钟。可在观光问讯处获取导览地图。',
        },
        image: 'https://picsum.photos/seed/kakunodate/600/300',
      },
      {
        id: 'hiraizumi',
        name: {
          [Language.JA]: '平泉世界遺産',
          [Language.EN]: 'Hiraizumi World Heritage Site',
          [Language.TH]: 'มรดกโลกฮิราอิซูมิ',
          [Language.ZH]: '平泉世界遗产',
        },
        description: {
          [Language.JA]: '奥州藤原氏の栄華を今に伝える寺院・庭園群。中尊寺金色堂をはじめとする文化遺産が世界遺産に登録されています。',
          [Language.EN]: 'A complex of temples and gardens that convey the glory of the Oshu Fujiwara clan. Cultural heritage sites including Chuson-ji Temple\'s Golden Hall are registered as World Heritage.',
          [Language.TH]: 'กลุ่มวัดและสวนที่บอกเล่าความรุ่งเรืองของตระกูลโอชู ฟุจิวาระ มรดกทางวัฒนธรรมรวมถึงศาลาทองของวัดชูซนจิได้รับการขึ้นทะเบียนเป็นมรดกโลก',
          [Language.ZH]: '传承奥州藤原氏荣华的寺院・庭园群。以中尊寺金色堂为首的文化遗产被列入世界遗产。',
        },
        history: {
          [Language.JA]: '12世紀に奥州藤原氏が造営。浄土思想を基に造られた建造物群は、東北における仏教文化の精華として知られています。',
          [Language.EN]: 'Built by the Oshu Fujiwara clan in the 12th century. The buildings, constructed based on Pure Land Buddhism concepts, are known as the essence of Buddhist culture in Tohoku.',
          [Language.TH]: 'สร้างโดยตระกูลโอชู ฟุจิวาระ ในศตวรรษที่ 12 กลุ่มอาคารที่สร้างตามแนวคิดพุทธศาสนานิกายโจโดเป็นที่รู้จักในฐานะแก่นแท้ของวัฒนธรรมพุทธในโทโฮคุ',
          [Language.ZH]: '12世纪由奥州藤原氏营建。基于净土思想建造的建筑群，被誉为东北佛教文化的精华。',
        },
        culture_festivals: {
          [Language.JA]: '芭蕉祭、藤原まつり、平泉文化フェスティバル、春季特別大法要が開催されます。',
          [Language.EN]: 'Events include the Basho Festival, Fujiwara Festival, Hiraizumi Cultural Festival, and Spring Special Buddhist Service.',
          [Language.TH]: 'มีการจัดงานเทศกาลบาโช เทศกาลฟุจิวาระ เทศกาลวัฒนธรรมฮิราอิซูมิ และพิธีกรรมทางพุทธศาสนาพิเศษในฤดูใบไม้ผลิ',
          [Language.ZH]: '举办芭蕉节、藤原节、平泉文化节、春季特别法会。',
        },
        things_to_do: {
          [Language.JA]: '中尊寺金色堂見学、毛越寺庭園散策、平泉文化遺産センター見学、座禅体験、写経体験がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Chuson-ji\'s Golden Hall, strolling in Motsuji Temple gardens, visiting the Cultural Heritage Center, experiencing zazen meditation, and trying sutra copying.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมศาลาทองของวัดชูซนจิ เดินเล่นในสวนวัดโมสึจิ เยี่ยมชมศูนย์มรดกวัฒนธรรม ทดลองนั่งสมาธิแบบเซน และลองคัดลอกพระสูตร',
          [Language.ZH]: '推荐参观中尊寺金色堂、毛越寺庭园散步、参观平泉文化遗产中心、体验坐禅、体验抄经。',
        },
        local_cuisine: {
          [Language.JA]: '平泉もち、わんこそば、精進料理、芋の子汁、いわて牛料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Hiraizumi mochi, Wanko soba noodles, Buddhist vegetarian cuisine, taro soup, and Iwate beef dishes.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โมจิฮิราอิซูมิ โซบะวังโกะ อาหารเจ ซุปเผือก และอาหารจากเนื้อวัวอิวาเตะ',
          [Language.ZH]: '可以品尝平泉年糕、碗子荞麦面、精进料理、芋头汤、岩手牛肉料理。',
        },
        access: {
          [Language.JA]: 'JR平泉駅から徒歩20分。世界遺産巡回バスも運行しています。',
          [Language.EN]: '20 minutes on foot from JR Hiraizumi Station. World Heritage loop buses are also available.',
          [Language.TH]: '20 นาทีโดยการเดินจากสถานี JR ฮิราอิซูมิ มีรถบัสรอบมรดกโลกให้บริการ',
          [Language.ZH]: '从JR平泉站步行20分钟。世界遗产循环巴士也在运行。',
        },
        image: 'https://picsum.photos/seed/hiraizumi/600/300',
      },
      {
        id: 'hirosaki-castle',
        name: {
          [Language.JA]: '弘前城',
          [Language.EN]: 'Hirosaki Castle',
          [Language.TH]: 'ปราสาทฮิโรซากิ',
          [Language.ZH]: '弘前城',
        },
        description: {
          [Language.JA]: '津軽氏の居城として知られる弘前城。桜の名所として有名で、春には約2,600本の桜が咲き誇ります。',
          [Language.EN]: 'Known as the castle of the Tsugaru clan, Hirosaki Castle is famous for cherry blossoms, with about 2,600 trees blooming in spring.',
          [Language.TH]: 'ปราสาทฮิโรซากิที่รู้จักในฐานะปราสาทของตระกูลสึงารุ มีชื่อเสียงด้านซากุระ โดยมีต้นซากุระประมาณ 2,600 ต้นบานสะพรั่งในฤดูใบไม้ผลิ',
          [Language.ZH]: '作为津轻氏居城而闻名的弘前城。作为赏樱名所而闻名，春季约有2,600棵樱花树盛开。',
        },
        history: {
          [Language.JA]: '1611年に建設が始まり、江戸時代を通じて津軽氏の居城として栄えました。現存する天守は日本最古の城郭建築の一つです。',
          [Language.EN]: 'Construction began in 1611, and it flourished as the Tsugaru clan\'s castle throughout the Edo period. The existing castle tower is one of Japan\'s oldest castle structures.',
          [Language.TH]: 'เริ่มก่อสร้างในปี 1611 และรุ่งเรืองในฐานะปราสาทของตระกูลสึงารุตลอดสมัยเอโดะ หอคอยปราสาทที่ยังคงอยู่เป็นหนึ่งในโครงสร้างปราสาทที่เก่าแก่ที่สุดของญี่ปุ่น',
          [Language.ZH]: '1611年开始建设，在整个江户时代作为津轻氏的居城而繁荣。现存天守是日本最古老的城郭建筑之一。',
        },
        culture_festivals: {
          [Language.JA]: '弘前さくらまつり、弘前城菊と紅葉まつり、弘前城雪燈籠まつり、津軽錦絵祭りが開催されます。',
          [Language.EN]: 'Events include Hirosaki Cherry Blossom Festival, Chrysanthemum and Autumn Leaves Festival, Snow Lantern Festival, and Tsugaru Nishiki-e Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลซากุระฮิโรซากิ เทศกาลเบญจมาศและใบไม้แดง เทศกาลโคมไฟหิมะ และเทศกาลนิชิกิเอะสึงารุ',
          [Language.ZH]: '举办弘前樱花节、弘前城菊花与红叶节、弘前城雪灯笼节、津轻锦绘节。',
        },
        things_to_do: {
          [Language.JA]: '天守閣見学、桜のライトアップ観賞、お堀めぐり、武家屋敷散策、津軽三味線の演奏体験がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting the castle tower, viewing illuminated cherry blossoms, moat boat rides, samurai district walks, and trying Tsugaru shamisen music.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมหอคอยปราสาท ชมการประดับไฟซากุระ ล่องเรือในคูน้ำ เดินเล่นในย่านซามูไร และทดลองเล่นซามิเซ็นสึงารุ',
          [Language.ZH]: '推荐参观天守阁、欣赏樱花夜景、游览护城河、武家宅邸散步、体验津轻三味线演奏。',
        },
        local_cuisine: {
          [Language.JA]: '津軽そば、りんご料理、けの汁、じょっぱ汁、いかめんちが地域の名物です。',
          [Language.EN]: 'Local specialties include Tsugaru soba noodles, apple dishes, vegetable miso soup, codfish soup, and squid meatballs.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ โซบะสึงารุ อาหารจากแอปเปิ้ล ซุปมิโซะผัก ซุปปลาค็อด และลูกชิ้นปลาหมึก',
          [Language.ZH]: '津轻荞麦面、苹果料理、蔬菜味噌汤、鳕鱼汤、鱿鱼丸子是当地特产。',
        },
        access: {
          [Language.JA]: 'JR弘前駅から市内バスで15分。城内には観光ガイドが常駐しています。',
          [Language.EN]: '15 minutes by city bus from JR Hirosaki Station. Tour guides are stationed inside the castle grounds.',
          [Language.TH]: '15 นาทีโดยรถบัสเมืองจากสถานี JR ฮิโรซากิ มีไกด์นำเที่ยวประจำอยู่ในบริเวณปราสาท',
          [Language.ZH]: '从JR弘前站乘市内巴士15分钟。城内有常驻观光导游。',
        },
        image: 'https://picsum.photos/seed/hirosaki-castle/600/300',
      },
      {
        id: 'mount-bandai',
        name: {
          [Language.JA]: '磐梯山',
          [Language.EN]: 'Mount Bandai',
          [Language.TH]: 'ภูเขาบันได',
          [Language.ZH]: '磐梯山',
        },
        description: {
          [Language.JA]: '会津地方のシンボルとして知られる活火山。1888年の大噴火で形成された五色沼や裏磐梯高原など、変化に富んだ自然景観が特徴です。',
          [Language.EN]: 'An active volcano known as the symbol of the Aizu region. Features diverse natural landscapes including Goshiki-numa Ponds and Urabandai Plateau, formed by the great eruption of 1888.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นซึ่งเป็นสัญลักษณ์ของภูมิภาคไอสึ โดดเด่นด้วยภูมิทัศน์ธรรมชาติที่หลากหลาย รวมถึงบึงโกชิกินุมะและที่ราบสูงอุระบันได ซึ่งก่อตัวจากการปะทุครั้งใหญ่ในปี 1888',
          [Language.ZH]: '作为会津地方象征的活火山。以1888年大喷发形成的五色沼和裏磐梯高原等丰富多变的自然景观为特色。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇められ、1888年の大噴火で現在の姿となりました。火山活動によって形成された独特の地形は、国定公園として保護されています。',
          [Language.EN]: 'Long revered as an object of mountain worship, it took its current form after the great eruption of 1888. The unique terrain formed by volcanic activity is protected as a Quasi-National Park.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน และมีรูปร่างปัจจุบันหลังการปะทุครั้งใหญ่ในปี 1888 ภูมิประเทศที่เป็นเอกลักษณ์ซึ่งเกิดจากกิจกรรมภูเขาไฟได้รับการคุ้มครองในฐานะอุทยานกึ่งแห่งชาติ',
          [Language.ZH]: '自古以来作为山岳信仰对象受到崇敬，1888年大喷发后形成现在的形态。火山活动形成的独特地形作为准国立公园受到保护。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、磐梯山山頂祭、紅葉まつり、雪まつりなど、季節の行事が開催されます。',
          [Language.EN]: 'Seasonal events include Mountain Opening Ceremony, Summit Festival, Autumn Leaves Festival, and Snow Festival.',
          [Language.TH]: 'มีงานตามฤดูกาล เช่น พิธีเปิดฤดูปีนเขา เทศกาลยอดเขา เทศกาลใบไม้แดง และเทศกาลหิมะ',
          [Language.ZH]: '举办山开き、磐梯山山顶节、红叶节、雪节等季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、五色沼散策、スキー、スノーシュー、バードウォッチング、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include mountain climbing, trekking, walking around Goshiki-numa Ponds, skiing, snowshoeing, bird watching, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ปีนเขา เดินป่า เดินเล่นรอบบึงโกชิกินุมะ เล่นสกี เดินบนหิมะ ดูนก และถ่ายภาพ',
          [Language.ZH]: '推荐登山、远足、五色沼散步、滑雪、雪鞋行走、观鸟、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '会津そば、山菜料理、きのこ料理、岩魚の塩焼き、会津地鶏が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Aizu soba noodles, mountain vegetable dishes, mushroom dishes, grilled char fish, and Aizu free-range chicken.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โซบะไอสึ อาหารจากผักภูเขา อาหารจากเห็ด ปลาชาร์ย่างเกลือ และไก่อิสระไอสึ',
          [Language.ZH]: '可以品尝会津荞麦面、山菜料理、蘑菇料理、岩鱼盐烤、会津地鸡。',
        },
        access: {
          [Language.JA]: 'JR磐梯町駅からバスで40分。レンタカーでの観光もおすすめです。',
          [Language.EN]: '40 minutes by bus from JR Bandai-machi Station. Rental car tourism is also recommended.',
          [Language.TH]: '40 นาทีโดยรถบัสจากสถานี JR บันไดมาจิ แนะนำให้เช่ารถเที่ยวชมด้วย',
          [Language.ZH]: '从JR磐梯町站乘巴士40分钟。推荐租车观光。',
        },
        image: 'https://picsum.photos/seed/mount-bandai/600/300',
      },
      {
        id: 'matsushima',
        name: {
          [Language.JA]: '松島',
          [Language.EN]: 'Matsushima Bay',
          [Language.TH]: 'อ่าวมัตสึชิมะ',
          [Language.ZH]: '松岛',
        },
        description: {
          [Language.JA]: '日本三景の一つに数えられる松島。約260の小島が織りなす景観は、「荘厳さの中にも優美さがある」と称賛されています。',
          [Language.EN]: 'One of Japan\'s Three Great Views, Matsushima features a landscape of about 260 small islands that is praised for having "grace within majesty".',
          [Language.TH]: 'หนึ่งในสามทิวทัศน์ที่งดงามที่สุดของญี่ปุ่น มัตสึชิมะมีเกาะเล็กๆ ประมาณ 260 เกาะ ที่สร้างภูมิทัศน์ซึ่งได้รับการยกย่องว่ามี "ความสง่างามในความยิ่งใหญ่"',
          [Language.ZH]: '被列为日本三景之一的松岛。约260个小岛编织的景观被誉为"庄严中带有优美"。',
        },
        history: {
          [Language.JA]: '奈良時代から風光明媚な景勝地として知られ、松尾芭蕉も訪れて句を詠みました。伊達政宗の庇護を受けた瑞巌寺も有名です。',
          [Language.EN]: 'Known as a scenic spot since the Nara period, it was visited by Matsuo Basho who composed haiku here. The Zuiganji Temple, which received patronage from Date Masamune, is also famous.',
          [Language.TH]: 'เป็นที่รู้จักในฐานะจุดชมวิวตั้งแต่สมัยนาระ มัตสึโอะ บาโชได้มาเยือนและแต่งบทกวีไฮกุที่นี่ วัดซุยกันจิที่ได้รับการอุปถัมภ์จากดาเตะ มาซามุเนะก็มีชื่อเสียงเช่นกัน',
          [Language.ZH]: '自奈良时代起就以风光明媚的景胜地闻名，松尾芭蕉也曾到访并吟诗。受到伊达政宗庇护的瑞岩寺也很有名。',
        },
        culture_festivals: {
          [Language.JA]: '松島観光船まつり、松島流灯会海道、かき祭り、松島灯篭流しが開催されます。',
          [Language.EN]: 'Events include the Matsushima Sightseeing Boat Festival, Ocean of Light Festival, Oyster Festival, and Lantern Floating Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลเรือท่องเที่ยวมัตสึชิมะ เทศกาลมหาสมุทรแห่งแสง เทศกาลหอยนางรม และเทศกาลลอยโคมไฟ',
          [Language.ZH]: '举办松岛观光船节、松岛流灯会海道、牡蛎节、松岛灯笼流放。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船クルーズ、瑞巌寺見学、五大堂参拝、福浦橋散策、かき小屋でのグルメ体験がおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, visiting Zuiganji Temple, worshipping at Godaido Hall, walking on Fukuura Bridge, and enjoying fresh oysters at oyster huts.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว เยี่ยมชมวัดซุยกันจิ สักการะที่ศาลาโกไดโด เดินเล่นบนสะพานฟุคุอุระ และลิ้มรสหอยนางรมสดที่ร้านหอยนางรม',
          [Language.ZH]: '推荐游览船巡游、参观瑞岩寺、参拜五大堂、福浦桥散步、在牡蛎小屋体验美食。',
        },
        local_cuisine: {
          [Language.JA]: '牡蠣料理、はらこ飯、笹かまぼこ、あなご料理、ずんだ餅が名物です。',
          [Language.EN]: 'Local specialties include oyster dishes, salmon roe rice, fish cakes, conger eel dishes, and zunda mochi (edamame rice cakes).',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจากหอยนางรม ข้าวไข่ปลาแซลมอน ขนมปลาคามาโบโกะ อาหารจากปลาไหลทะเล และโมจิซุนดะ (โมจิถั่วแระญี่ปุ่น)',
          [Language.ZH]: '牡蛎料理、鲑鱼子饭、笹鱼糕、星鳗料理、枝豆年糕是特产。',
        },
        access: {
          [Language.JA]: 'JR松島海岸駅から徒歩5分。仙台市内から電車で25分程度です。',
          [Language.EN]: '5 minutes on foot from JR Matsushimakaigan Station. About 25 minutes by train from Sendai city.',
          [Language.TH]: '5 นาทีโดยการเดินจากสถานี JR มัตสึชิมะไคงัน ประมาณ 25 นาทีโดยรถไฟจากเมืองเซนได',
          [Language.ZH]: '从JR松岛海岸站步行5分钟。从仙台市内乘电车约25分钟。',
        },
        image: 'https://picsum.photos/seed/matsushima-bay/600/300',
      },
      {
        id: 'geibikei',
        name: {
          [Language.JA]: '猊鼻渓',
          [Language.EN]: 'Geibikei Gorge',
          [Language.TH]: 'หุบเขาเกบิเค',
          [Language.ZH]: '猊鼻溪',
        },
        description: {
          [Language.JA]: '石灰岩の断崖が連なる渓谷。舟下りで楽しむ渓谷美は、四季折々の表情を見せ、特に新緑と紅葉の季節が人気です。',
          [Language.EN]: 'A gorge lined with limestone cliffs. The valley beauty enjoyed by boat shows different faces throughout the seasons, especially popular during fresh green and autumn foliage seasons.',
          [Language.TH]: 'หุบเขาที่มีหน้าผาหินปูนเรียงราย ความงามของหุบเขาที่ชมได้จากการล่องเรือแสดงให้เห็นความงามที่แตกต่างกันในแต่ละฤดูกาล โดยเฉพาะในฤดูใบไม้ผลิและฤดูใบไม้ร่วง',
          [Language.ZH]: '石灰岩悬崖连绵的溪谷。乘船欣赏的溪谷美景随四季变化，尤其是新绿和红叶季节最受欢迎。',
        },
        history: {
          [Language.JA]: '明治時代から観光地として知られ、1925年に国の名勝に指定されました。渓谷の名は、岩肌が獅子の鼻に似ていることに由来します。',
          [Language.EN]: 'Known as a tourist spot since the Meiji era, it was designated as a National Place of Scenic Beauty in 1925. The gorge\'s name comes from a rock formation resembling a lion\'s nose.',
          [Language.TH]: 'เป็นที่รู้จักในฐานะสถานที่ท่องเที่ยวตั้งแต่สมัยเมจิ และได้รับการขึ้นทะเบียนเป็นสถานที่ทิวทัศน์งดงามแห่งชาติในปี 1925 ชื่อหุบเขามาจากโขดหินที่มีลักษณะคล้ายจมูกสิงโต',
          [Language.ZH]: '自明治时代起就作为观光地闻名，1925年被指定为国家名胜。溪谷名称源于岩壁形似狮子鼻。',
        },
        culture_festivals: {
          [Language.JA]: '猊鼻渓舟唄まつり、ライトアップ、紅葉まつり、こたつ舟が開催されます。',
          [Language.EN]: 'Events include the Boat Song Festival, illumination events, Autumn Leaves Festival, and kotatsu boat rides (with heated tables).',
          [Language.TH]: 'มีการจัดงานเทศกาลเพลงเรือ งานประดับไฟ เทศกาลใบไม้แดง และการล่องเรือโคทัตสึ (เรือที่มีโต๊ะอุ่น)',
          [Language.ZH]: '举办猊鼻溪船歌节、灯光秀、红叶节、被炉船活动。',
        },
        things_to_do: {
          [Language.JA]: '舟下り、奇岩怪石の観賞、川魚釣り、ハイキング、写真撮影、洞窟探検がおすすめです。',
          [Language.EN]: 'Recommended activities include boat rides, viewing unique rock formations, river fishing, hiking, photography, and cave exploration.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือ ชมโขดหินรูปร่างแปลกตา ตกปลาในแม่น้ำ เดินป่า ถ่ายภาพ และสำรวจถ้ำ',
          [Language.ZH]: '推荐乘船游览、欣赏奇岩怪石、河钓、徒步、摄影、洞窟探险。',
        },
        local_cuisine: {
          [Language.JA]: '岩魚の塩焼き、山菜天ぷら、きのこ汁、わんこそば、郷土料理が楽しめます。',
          [Language.EN]: 'Enjoy local dishes including grilled char fish, mountain vegetable tempura, mushroom soup, wanko soba noodles, and regional specialties.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น ปลาชาร์ย่างเกลือ เทมปุระผักภูเขา ซุปเห็ด โซบะวังโกะ และอาหารพื้นเมือง',
          [Language.ZH]: '可以品尝岩鱼盐烤、山菜天妇罗、蘑菇汤、碗子荞麦面、乡土料理。',
        },
        access: {
          [Language.JA]: 'JR猊鼻渓駅から徒歩10分。4月から11月は毎日、12月から3月は天候により運航します。',
          [Language.EN]: '10 minutes on foot from JR Geibikei Station. Boats operate daily from April to November, and weather permitting from December to March.',
          [Language.TH]: '10 นาทีโดยการเดินจากสถานี JR เกบิเค เรือให้บริการทุกวันตั้งแต่เดือนเมษายนถึงพฤศจิกายน และขึ้นอยู่กับสภาพอากาศตั้งแต่เดือนธันวาคมถึงมีนาคม',
          [Language.ZH]: '从JR猊鼻溪站步行10分钟。4月至11月每日运营，12月至3月根据天气情况运营。',
        },
        image: 'https://picsum.photos/seed/geibikei-gorge/600/300',
      },
      {
        id: 'akita-kanto',
        name: {
          [Language.JA]: '秋田竿燈まつり',
          [Language.EN]: 'Akita Kanto Festival',
          [Language.TH]: 'เทศกาลคันโตะแห่งอะคิตะ',
          [Language.ZH]: '秋田竿灯节',
        },
        description: {
          [Language.JA]: '竿燈を操る技と伝統が織りなす夏の風物詩。夜空に浮かぶ提灯の列は「稲穂」を表現し、豊作を願う祭りとして知られています。',
          [Language.EN]: 'A summer spectacle weaving skill and tradition in handling giant lantern poles. The rows of lanterns floating in the night sky represent rice stalks, known as a festival praying for good harvest.',
          [Language.TH]: 'การแสดงในฤดูร้อนที่ผสมผสานทักษะและประเพณีในการถือเสาโคมไฟยักษ์ แถวของโคมไฟที่ลอยในท้องฟ้ายามค่ำคืนแทนต้นข้าว เป็นที่รู้จักในฐานะเทศกาลอธิษฐานขอพรให้ได้ผลผลิตที่ดี',
          [Language.ZH]: '操纵竿灯的技艺与传统交织成的夏日风物诗。夜空中飘浮的灯笼队列表现"稻穗"，作为祈愿丰收的节日而闻名。',
        },
        history: {
          [Language.JA]: '約260年の歴史を持つ伝統行事。江戸時代から続く竿燈の技は、代々受け継がれ、国の重要無形民俗文化財に指定されています。',
          [Language.EN]: 'A traditional event with about 260 years of history. The pole lantern skills continuing from the Edo period have been passed down through generations and are designated as an Important Intangible Folk Cultural Property.',
          [Language.TH]: 'งานประเพณีที่มีประวัติศาสตร์ยาวนานกว่า 260 ปี ทักษะการถือเสาโคมไฟที่สืบทอดมาตั้งแต่สมัยเอโดะได้รับการถ่ายทอดจากรุ่นสู่รุ่นและได้รับการขึ้นทะเบียนเป็นมรดกวัฒนธรรมพื้นบ้านที่จับต้องไม่ได้ที่สำคัญ',
          [Language.ZH]: '拥有约260年历史的传统活动。从江户时代延续至今的竿灯技艺代代相传，被指定为国家重要无形民俗文化财。',
        },
        culture_festivals: {
          [Language.JA]: '竿燈まつり期間中は、昼の竿燈演技、夜の本演技、太鼓演奏、民謡流しが行われます。',
          [Language.EN]: 'During the festival period, there are daytime pole lantern performances, main night performances, taiko drum performances, and folk song parades.',
          [Language.TH]: 'ในช่วงเทศกาลมีการแสดงเสาโคมไฟในเวลากลางวัน การแสดงหลักในตอนกลางคืน การแสดงกลองไทโกะ และขบวนพาเหรดเพลงพื้นบ้าน',
          [Language.ZH]: '竿灯节期间举行白天的竿灯表演、夜晚的主要表演、太鼓演奏、民谣游行。',
        },
        things_to_do: {
          [Language.JA]: '竿燈の見学、竿燈体験、写真撮影、屋台巡り、民謡鑑賞、伝統芸能の見学がおすすめです。',
          [Language.EN]: 'Recommended activities include watching pole lantern performances, trying pole lantern handling, photography, visiting food stalls, enjoying folk songs, and watching traditional performances.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมการแสดงเสาโคมไฟ ทดลองถือเสาโคมไฟ ถ่ายภาพ เยี่ยมชมร้านค้า ชมการแสดงเพลงพื้นบ้าน และชมการแสดงศิลปะการแสดงดั้งเดิม',
          [Language.ZH]: '推荐观看竿灯表演、体验竿灯、摄影、逛小吃摊、欣赏民谣、观看传统艺能。',
        },
        local_cuisine: {
          [Language.JA]: 'きりたんぽ鍋、稲庭うどん、横手やきそば、しょっつる鍋、日本酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including kiritanpo hot pot, Inaniwa udon noodles, Yokote yakisoba, shottsuru hot pot, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น หม้อไฟคิริทันโปะ อุด้งอินานิวะ ยากิโซบะโยโกเตะ หม้อไฟช็อตสึรุ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝切炭火锅、稻庭乌冬面、横手炒面、鱼酱火锅、日本酒。',
        },
        access: {
          [Language.JA]: 'JR秋田駅から徒歩10分。毎年8月3日から6日まで開催されます。',
          [Language.EN]: '10 minutes on foot from JR Akita Station. Held annually from August 3rd to 6th.',
          [Language.TH]: '10 นาทีโดยการเดินจากสถานี JR อะคิตะ จัดขึ้นทุกปีตั้งแต่วันที่ 3-6 สิงหาคม',
          [Language.ZH]: '从JR秋田站步行10分钟。每年8月3日至6日举行。',
        },
        image: 'https://picsum.photos/seed/akita-kanto/600/300',
      },
      {
        id: 'mount-azumaya',
        name: {
          [Language.JA]: '吾妻山',
          [Language.EN]: 'Mount Azumaya',
          [Language.TH]: 'ภูเขาอาซุมายะ',
          [Language.ZH]: '吾妻山',
        },
        description: {
          [Language.JA]: '上信越高原国立公園に位置する標高2,354mの山。岩峰と高山植物、そして360度の大パノラマが魅力です。',
          [Language.EN]: 'A 2,354-meter mountain located in Joshinetsu Kogen National Park. Known for its rocky peaks, alpine plants, and 360-degree panoramic views.',
          [Language.TH]: 'ภูเขาสูง 2,354 เมตรในอุทยานแห่งชาติโจชิเน็ตสึ โคเก็น มีชื่อเสียงด้านยอดเขาหิน พืชพรรณบนภูเขาสูง และวิวพาโนรามา 360 องศา',
          [Language.ZH]: '位于上信越高原国立公园的2,354米高山。以岩峰、高山植物和360度全景为魅力。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇められ、江戸時代には既に登山道が整備されていました。火山活動で形成された独特の地形が特徴です。',
          [Language.EN]: 'Long revered as an object of mountain worship, hiking trails were already established in the Edo period. Features unique terrain formed by volcanic activity.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน มีเส้นทางเดินป่าที่สร้างขึ้นตั้งแต่สมัยเอโดะ โดดเด่นด้วยภูมิประเทศที่เป็นเอกลักษณ์ซึ่งเกิดจากกิจกรรมภูเขาไฟ',
          [Language.ZH]: '自古以来作为山岳信仰对象受到崇敬，江户时代已建有登山道。以火山活动形成的独特地形为特征。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、高山植物観察会、紅葉まつり、山岳写真展が開催されます。',
          [Language.EN]: 'Events include Mountain Opening Ceremony, Alpine Plant Observation Tours, Autumn Leaves Festival, and Mountain Photography Exhibition.',
          [Language.TH]: 'มีการจัดงานพิธีเปิดฤดูปีนเขา ทัวร์ชมพืชพรรณบนภูเขาสูง เทศกาลใบไม้แดง และนิทรรศการภาพถ่ายภูเขา',
          [Language.ZH]: '举办山开き、高山植物观察会、红叶节、山岳摄影展。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、高山植物観察、バードウォッチング、写真撮影、ロッククライミングがおすすめです。',
          [Language.EN]: 'Recommended activities include mountain climbing, trekking, alpine plant observation, bird watching, photography, and rock climbing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ปีนเขา เดินป่า สังเกตพืชพรรณบนภูเขาสูง ดูนก ถ่ายภาพ และปีนหน้าผา',
          [Language.ZH]: '推荐登山、远足、高山植物观察、观鸟、摄影、攀岩。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ汁、おやき、そば、山の幸を使った郷土料理が楽しめます。',
          [Language.EN]: 'Enjoy local dishes including mountain vegetable dishes, mushroom soup, oyaki dumplings, soba noodles, and regional specialties using mountain ingredients.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารจากผักภูเขา ซุปเห็ด ขนมโอยากิ โซบะ และอาหารพื้นเมืองที่ใช้วัตถุดิบจากภูเขา',
          [Language.ZH]: '可以品尝山菜料理、蘑菇汤、煎饼、荞麦面、使用山珍的乡土料理。',
        },
        access: {
          [Language.JA]: '最寄りのJR駅からバスで約1時間。夏季はシャトルバスも運行しています。',
          [Language.EN]: 'About 1 hour by bus from the nearest JR station. Shuttle buses operate during summer season.',
          [Language.TH]: 'ประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR ที่ใกล้ที่สุด มีรถรับส่งให้บริการในช่วงฤดูร้อน',
          [Language.ZH]: '从最近的JR车站乘巴士约1小时。夏季有班车运行。',
        },
        image: 'https://picsum.photos/seed/mount-azumaya/600/300',
      },
      {
        id: 'nyuto-onsen',
        name: {
          [Language.JA]: '乳頭温泉郷',
          [Language.EN]: 'Nyuto Onsen',
          [Language.TH]: 'นิวโตะออนเซ็น',
          [Language.ZH]: '乳头温泉乡',
        },
        description: {
          [Language.JA]: '秋田県の山奥に位置する7つの温泉宿が点在する温泉郷。乳白色の温泉と静寂な山里の雰囲気が特徴です。',
          [Language.EN]: 'A hot spring village with seven traditional inns scattered in the mountains of Akita Prefecture. Known for its milky white hot springs and tranquil mountain atmosphere.',
          [Language.TH]: 'หมู่บ้านน้ำพุร้อนที่มีเรียวกัง 7 แห่งกระจายตัวอยู่ในภูเขาของจังหวัดอะคิตะ มีชื่อเสียงด้านน้ำพุร้อนสีขาวนมและบรรยากาศภูเขาที่เงียบสงบ',
          [Language.ZH]: '位于秋田县深山中的七个温泉旅馆散布的温泉乡。以乳白色温泉和宁静的山里氛围为特色。',
        },
        history: {
          [Language.JA]: '平安時代から湧出が確認され、江戸時代には武士の湯治場として栄えました。各温泉には独自の源泉と歴史があります。',
          [Language.EN]: 'Hot springs have been documented since the Heian period, and flourished as samurai healing spots during the Edo period. Each hot spring has its own source and history.',
          [Language.TH]: 'มีการบันทึกเกี่ยวกับน้ำพุร้อนตั้งแต่สมัยเฮอัน และรุ่งเรืองในฐานะสถานที่รักษาตัวของซามูไรในสมัยเอโดะ แต่ละน้ำพุร้อนมีต้นกำเนิดและประวัติศาสตร์เป็นของตัวเอง',
          [Language.ZH]: '自平安时代起就有温泉涌出记录，江户时代作为武士的疗养地而繁荣。各温泉都有独特的源泉和历史。',
        },
        culture_festivals: {
          [Language.JA]: '雪見温泉、新緑温泉まつり、紅葉ライトアップ、冬の雪見灯籠が開催されます。',
          [Language.EN]: 'Events include Snow Viewing Hot Springs, Fresh Green Hot Spring Festival, Autumn Leaves Light-up, and Winter Snow Lantern Festival.',
          [Language.TH]: 'มีกิจกรรม เช่น ออนเซ็นชมหิมะ เทศกาลออนเซ็นใบไม้ผลิ การประดับไฟใบไม้แดง และเทศกาลโคมไฟหิมะในฤดูหนาว',
          [Language.ZH]: '举办赏雪温泉、新绿温泉节、红叶灯光秀、冬季赏雪灯笼。',
        },
        things_to_do: {
          [Language.JA]: '温泉巡り、露天風呂、足湯、温泉療養、ハイキング、雪見風呂がおすすめです。',
          [Language.EN]: 'Recommended activities include hot spring hopping, outdoor baths, foot baths, hot spring therapy, hiking, and snow-viewing baths.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ แช่น้ำพุร้อนหลายแห่ง อ่างอาบน้ำกลางแจ้ง อ่างแช่เท้า การบำบัดด้วยน้ำพุร้อน เดินป่า และแช่น้ำชมหิมะ',
          [Language.ZH]: '推荐温泉巡游、露天浴、足浴、温泉疗养、徒步、赏雪浴。',
        },
        local_cuisine: {
          [Language.JA]: 'きりたんぽ鍋、山の幸料理、地酒、山菜料理、温泉湯豆腐が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including kiritanpo hot pot, mountain ingredients, local sake, mountain vegetable dishes, and hot spring tofu.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น หม้อไฟคิริทันโปะ อาหารจากวัตถุดิบภูเขา สาเกท้องถิ่น อาหารจากผักภูเขา และเต้าหู้น้ำพุร้อน',
          [Language.ZH]: '可以品尝切炭火锅、山珍料理、地酒、山菜料理、温泉汤豆腐。',
        },
        access: {
          [Language.JA]: 'JR田沢湖駅からバスで50分。各旅館で送迎サービスも行っています。',
          [Language.EN]: '50 minutes by bus from JR Tazawako Station. Shuttle services are available from each inn.',
          [Language.TH]: '50 นาทีโดยรถบัสจากสถานี JR ทาซาวาโกะ มีบริการรถรับส่งจากแต่ละเรียวกัง',
          [Language.ZH]: '从JR田泽湖站乘巴士50分钟。各旅馆提供接送服务。',
        },
        image: 'https://picsum.photos/seed/nyuto-onsen/600/300',
      },
      {
        id: 'nebuta-festival',
        name: {
          [Language.JA]: '青森ねぶた祭',
          [Language.EN]: 'Nebuta Festival',
          [Language.TH]: 'เทศกาลเนบุตะ',
          [Language.ZH]: '青森睡魔祭',
        },
        description: {
          [Language.JA]: '青森市の夏を代表する祭り。巨大な灯籠山車が街を練り歩き、囃子と踊り手が祭りを盛り上げます。',
          [Language.EN]: 'A representative summer festival of Aomori City. Giant illuminated floats parade through the streets, accompanied by festival music and dancers.',
          [Language.TH]: 'เทศกาลฤดูร้อนที่เป็นตัวแทนของเมืองอาโอโมริ มีขบวนแห่โคมไฟยักษ์ไปตามท้องถนน พร้อมด้วยดนตรีเทศกาลและนักเต้น',
          [Language.ZH]: '代表青森市夏季的节日。巨大灯笼山车在街上游行，配以囃子和舞者助兴。',
        },
        history: {
          [Language.JA]: '江戸時代から続く伝統行事で、武士の眠気払いの行事が起源とされています。1980年に重要無形民俗文化財に指定されました。',
          [Language.EN]: 'A traditional event continuing from the Edo period, originally meant to ward off sleepiness among samurai. Designated as an Important Intangible Folk Cultural Property in 1980.',
          [Language.TH]: 'งานประเพณีที่สืบทอดมาตั้งแต่สมัยเอโดะ มีที่มาจากพิธีขับไล่ความง่วงของเหล่าซามูไร ได้รับการขึ้นทะเบียนเป็นมรดกวัฒนธรรมพื้นบ้านที่จับต้องไม่ได้ที่สำคัญในปี 1980',
          [Language.ZH]: '从江户时代延续至今的传统活动，据说起源于武士驱赶睡意的仪式。1980年被指定为重要无形民俗文化财。',
        },
        culture_festivals: {
          [Language.JA]: 'ねぶた祭り期間中は、昼のねぶた運行、夜のねぶた運行、ハネト体験、総おどりが行われます。',
          [Language.EN]: 'During the festival period, there are daytime float parades, night parades, haneto dancer experiences, and mass dancing events.',
          [Language.TH]: 'ในช่วงเทศกาลมีขบวนแห่ในเวลากลางวัน ขบวนแห่ในเวลากลางคืน การทดลองเป็นนักเต้นฮาเนโตะ และการเต้นรำหมู่',
          [Language.ZH]: '睡魔祭期间举行白天的睡魔游行、夜间的睡魔游行、跳人体验、集体舞蹈。',
        },
        things_to_do: {
          [Language.JA]: 'ねぶた見学、ハネト体験、写真撮影、ワークショップ参加、ねぶた制作見学がおすすめです。',
          [Language.EN]: 'Recommended activities include watching the floats, trying haneto dancing, photography, participating in workshops, and observing float construction.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมขบวนแห่ ทดลองเต้นฮาเนโตะ ถ่ายภาพ เข้าร่วมเวิร์คช็อป และชมการสร้างโคมไฟ',
          [Language.ZH]: '推荐观看睡魔、体验跳人、摄影、参加工作坊、参观睡魔制作。',
        },
        local_cuisine: {
          [Language.JA]: '帆立焼き、生姜味噌おでん、十和田バラ焼き、りんご飴、祭り屋台の食べ物が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including grilled scallops, ginger miso oden, Towada rose-cut beef, candy apples, and festival food stalls.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น หอยเชลล์ย่าง โอเด้งมิโซะขิง เนื้อวัวโทวาดะ แอปเปิ้ลเคลือบน้ำตาล และอาหารจากร้านค้าในเทศกาล',
          [Language.ZH]: '可以品尝烤扇贝、姜味味噌关东煮、十和田玫瑰烤肉、糖苹果、节日小吃摊的食物。',
        },
        access: {
          [Language.JA]: 'JR青森駅から徒歩10分。毎年8月2日から7日まで開催されます。',
          [Language.EN]: '10 minutes on foot from JR Aomori Station. Held annually from August 2nd to 7th.',
          [Language.TH]: '10 นาทีโดยการเดินจากสถานี JR อาโอโมริ จัดขึ้นทุกปีตั้งแต่วันที่ 2-7 สิงหาคม',
          [Language.ZH]: '从JR青森站步行10分钟。每年8月2日至7日举行。',
        },
        image: 'https://picsum.photos/seed/nebuta-festival/600/300',
      },
      {
        id: 'hachinohe',
        name: {
          [Language.JA]: '八戸地域',
          [Language.EN]: 'Hachinohe District',
          [Language.TH]: 'เขตฮาจิโนเฮะ',
          [Language.ZH]: '八户地区',
        },
        description: {
          [Language.JA]: '太平洋に面した港町で、新鮮な魚介類と独自の食文化で知られる地域。種差海岸や蕪島神社など、自然と文化の見どころが豊富です。',
          [Language.EN]: 'A port town facing the Pacific Ocean, known for fresh seafood and unique food culture. Rich in natural and cultural attractions including Tanesashi Coast and Kabushima Shrine.',
          [Language.TH]: 'เมืองท่าติดมหาสมุทรแปซิฟิก มีชื่อเสียงด้านอาหารทะเลสดและวัฒนธรรมอาหารที่เป็นเอกลักษณ์ อุดมด้วยสถานที่ท่องเที่ยวทางธรรมชาติและวัฒนธรรม เช่น ชายฝั่งทาเนซาชิและศาลเจ้าคาบุชิมะ',
          [Language.ZH]: '面向太平洋的港口城市，以新鲜海鲜和独特的饮食文化闻名。种差海岸和蕪岛神社等自然与文化景点丰富。',
        },
        history: {
          [Language.JA]: '江戸時代から漁業と商業の中心として栄え、南部藩の外港として重要な役割を果たしました。現在も水産業が盛んです。',
          [Language.EN]: 'Flourished as a center of fishing and commerce since the Edo period, serving as an important outer port for the Nambu clan. Still thriving in the fishing industry today.',
          [Language.TH]: 'รุ่งเรืองในฐานะศูนย์กลางการประมงและการค้าตั้งแต่สมัยเอโดะ ทำหน้าที่เป็นท่าเรือนอกที่สำคัญของตระกูลนัมบุ ปัจจุบันยังคงมีอุตสาหกรรมประมงที่เฟื่องฟู',
          [Language.ZH]: '自江户时代起就作为渔业和商业中心繁荣，作为南部藩的外港发挥重要作用。现在水产业仍然兴盛。',
        },
        culture_festivals: {
          [Language.JA]: '八戸三社大祭、八戸えんぶり、八戸サバまつり、みなと祭りが開催されます。',
          [Language.EN]: 'Events include Hachinohe Sansha Festival, Hachinohe Enburi, Mackerel Festival, and Port Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลซันชาฮาจิโนเฮะ เทศกาลเอนบุริฮาจิโนเฮะ เทศกาลปลาซาบะ และเทศกาลท่าเรือ',
          [Language.ZH]: '举办八户三社大祭、八户えんぶり、八户鲭鱼节、港口节。',
        },
        things_to_do: {
          [Language.JA]: '朝市見学、種差海岸散策、蕪島神社参拝、魚市場見学、八食センターでの買い物がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting morning markets, walking along Tanesashi Coast, visiting Kabushima Shrine, touring fish markets, and shopping at Hasshoku Center.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมตลาดเช้า เดินเล่นตามชายฝั่งทาเนซาชิ เยี่ยมชมศาลเจ้าคาบุชิมะ ทัวร์ตลาดปลา และช็อปปิ้งที่ศูนย์ฮัชโชคุ',
          [Language.ZH]: '推荐参观早市、种差海岸散步、参拜蕪岛神社、参观鱼市场、在八食中心购物。',
        },
        local_cuisine: {
          [Language.JA]: '八戸せんべい汁、八戸前沖サバ、いちご煮、のっけ丼、南部せんべいが名物です。',
          [Language.EN]: 'Local specialties include Hachinohe senbei soup, Hachinohe mackerel, sea urchin and abalone soup, seafood rice bowls, and Nambu rice crackers.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ซุปเซนเบฮาจิโนเฮะ ปลาซาบะฮาจิโนเฮะ ซุปหอยเป๋าฮื้อและหอยเม่น ข้าวหน้าอาหารทะเล และขนมข้าวนัมบุ',
          [Language.ZH]: '八户仙贝汤、八户近海鲭鱼、海胆鲍鱼汤、海鲜盖饭、南部仙贝是特产。',
        },
        access: {
          [Language.JA]: 'JR八戸駅が主要アクセスポイント。市内は路線バスが発達しています。',
          [Language.EN]: 'JR Hachinohe Station is the main access point. The city has a well-developed bus network.',
          [Language.TH]: 'สถานี JR ฮาจิโนเฮะเป็นจุดเข้าถึงหลัก เมืองมีระบบรถบัสที่พัฒนาอย่างดี',
          [Language.ZH]: 'JR八户站是主要交通枢纽。市内公交线路发达。',
        },
        image: 'https://picsum.photos/seed/hachinohe-district/600/300',
      },
      {
        id: 'tono-furusato',
        name: {
          [Language.JA]: '遠野ふるさと村',
          [Language.EN]: 'Tono Furusato Village',
          [Language.TH]: 'หมู่บ้านโทโนะ ฟุรุซาโตะ',
          [Language.ZH]: '远野故乡村',
        },
        description: {
          [Language.JA]: '日本の民話と伝統的な農村文化を体験できる野外博物館。かやぶき屋根の民家や水車小屋など、昔ながらの農村風景が広がります。',
          [Language.EN]: 'An open-air museum where you can experience Japanese folklore and traditional farming culture. Features traditional rural landscapes including thatched-roof houses and watermill huts.',
          [Language.TH]: 'พิพิธภัณฑ์กลางแจ้งที่คุณสามารถสัมผัสนิทานพื้นบ้านญี่ปุ่นและวัฒนธรรมการเกษตรแบบดั้งเดิม มีทิวทัศน์ชนบทแบบดั้งเดิมรวมถึงบ้านมุงหลังคาด้วยหญ้าและโรงสีน้ำ',
          [Language.ZH]: '可以体验日本民间故事和传统农村文化的露天博物馆。茅草屋顶民居和水车小屋等传统农村景观延伸开来。',
        },
        history: {
          [Language.JA]: '柳田國男の『遠野物語』で知られる民話の里として、1996年に開村。地域の伝統文化を保存・継承する場として機能しています。',
          [Language.EN]: 'Opened in 1996 as a folklore village known from Kunio Yanagita\'s "Tono Monogatari". Functions as a place to preserve and pass on regional traditional culture.',
          [Language.TH]: 'เปิดในปี 1996 ในฐานะหมู่บ้านนิทานพื้นบ้านที่รู้จักจากหนังสือ "โทโนะ โมโนงาตาริ" ของคุนิโอะ ยานางิตะ ทำหน้าที่เป็นสถานที่อนุรักษ์และสืบทอดวัฒนธรรมประเพณีท้องถิ่น',
          [Language.ZH]: '作为柳田国男《远野物语》中知名的民间故事之乡，于1996年开村。作为保存和传承地区传统文化的场所发挥作用。',
        },
        culture_festivals: {
          [Language.JA]: '遠野まつり、夜神楽、田植え祭り、収穫祭、郷土芸能発表会が開催されます。',
          [Language.EN]: 'Events include Tono Festival, Night Kagura performances, Rice Planting Festival, Harvest Festival, and folk performing arts presentations.',
          [Language.TH]: 'มีการจัดงานเทศกาลโทโนะ การแสดงคากุระกลางคืน เทศกาลปลูกข้าว เทศกาลเก็บเกี่ยว และการแสดงศิลปะการแสดงพื้นบ้าน',
          [Language.ZH]: '举办远野节、夜神乐、插秧节、收获节、乡土艺能发表会。',
        },
        things_to_do: {
          [Language.JA]: '民話語り部との散策、農業体験、わら細工体験、郷土料理作り、民具展示見学がおすすめです。',
          [Language.EN]: 'Recommended activities include walking tours with storytellers, farming experiences, straw craft workshops, local cooking classes, and folk tool exhibitions.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินทัวร์กับนักเล่านิทาน ประสบการณ์ทำการเกษตร เวิร์คช็อปงานฝีมือฟาง ชั้นเรียนทำอาหารท้องถิ่น และนิทรรศการเครื่องมือพื้นบ้าน',
          [Language.ZH]: '推荐与说书人散步、农业体验、稻草工艺体验、乡土料理制作、民具展示参观。',
        },
        local_cuisine: {
          [Language.JA]: 'ジンギスカン、ひっつみ、かっけ、どぶろく、山菜料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Genghis Khan (grilled lamb), hittsumi noodle soup, kakke dumplings, doburoku sake, and mountain vegetable dishes.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น เนื้อแกะย่างแบบเกงกิสข่าน ซุปเส้นฮิตสึมิ เกี๊ยวคักเกะ สาเกโดบุโรคุ และอาหารจากผักภูเขา',
          [Language.ZH]: '可以品尝成吉思汗烤肉、扁面条汤、糯米团子、浊酒、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR遠野駅からバスで15分。レンタサイクルでの観光もおすすめです。',
          [Language.EN]: '15 minutes by bus from JR Tono Station. Rental bicycle tourism is also recommended.',
          [Language.TH]: '15 นาทีโดยรถบัสจากสถานี JR โทโนะ แนะนำให้เช่าจักรยานท่องเที่ยวด้วย',
          [Language.ZH]: '从JR远野站乘巴士15分钟。推荐租自行车观光。',
        },
        image: 'https://picsum.photos/seed/tono-furusato/600/300',
      },
      {
        id: 'lake-towada',
        name: {
          [Language.JA]: '十和田湖',
          [Language.EN]: 'Lake Towada',
          [Language.TH]: 'ทะเลสาบโทวาดะ',
          [Language.ZH]: '十和田湖',
        },
        description: {
          [Language.JA]: '青森県と秋田県にまたがる二重カルデラ湖。深い青色の湖面と断崖絶壁の火山壁、周囲の原生林が織りなす景観が魅力です。',
          [Language.EN]: 'A double caldera lake straddling Aomori and Akita prefectures. Attractive for its deep blue waters, steep volcanic walls, and surrounding virgin forests.',
          [Language.TH]: 'ทะเลสาบปล่องภูเขาไฟซ้อนที่คร่อมระหว่างจังหวัดอาโอโมริและอะคิตะ ดึงดูดใจด้วยน้ำสีน้ำเงินเข้ม หน้าผาภูเขาไฟชัน และป่าบริสุทธิ์โดยรอบ',
          [Language.ZH]: '横跨青森县和秋田县的双重破火山口湖。深蓝色的湖面、峭壁般的火山壁和周围的原始森林编织成的景观富有魅力。',
        },
        history: {
          [Language.JA]: '約20万年前の火山活動で形成され、1936年に十和田八幡平国立公園に指定されました。古くから山岳信仰の対象として崇められています。',
          [Language.EN]: 'Formed by volcanic activity about 200,000 years ago and designated as Towada-Hachimantai National Park in 1936. Long revered as an object of mountain worship.',
          [Language.TH]: 'ก่อตัวจากกิจกรรมภูเขาไฟเมื่อประมาณ 200,000 ปีก่อน และได้รับการกำหนดให้เป็นอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1936 ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน',
          [Language.ZH]: '约20万年前由火山活动形成，1936年被指定为十和田八幡平国立公园。自古以来作为山岳信仰对象受到崇敬。',
        },
        culture_festivals: {
          [Language.JA]: '十和田湖湖水まつり、十和田湖冬物語、紅葉まつり、雪と光のページェントが開催されます。',
          [Language.EN]: 'Events include Lake Towada Water Festival, Towada Winter Story, Autumn Leaves Festival, and Snow and Light Pageant.',
          [Language.TH]: 'มีการจัดงานเทศกาลน้ำทะเลสาบโทวาดะ เทศกาลฤดูหนาวโทวาดะ เทศกาลใบไม้แดง และงานประดับไฟและหิมะ',
          [Language.ZH]: '举办十和田湖湖水节、十和田湖冬物语、红叶节、雪与光之盛典。',
        },
        things_to_do: {
          [Language.JA]: '遊覧船クルーズ、トレッキング、カヌー、キャンプ、紅葉狩り、スノーアクティビティがおすすめです。',
          [Language.EN]: 'Recommended activities include sightseeing cruises, trekking, canoeing, camping, autumn leaf viewing, and snow activities.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมวิว เดินป่า พายเรือแคนู ตั้งแคมป์ ชมใบไม้แดง และกิจกรรมบนหิมะ',
          [Language.ZH]: '推荐游览船巡游、远足、划独木舟、露营、赏红叶、雪上活动。',
        },
        local_cuisine: {
          [Language.JA]: '白神マタギ飯、ひめます料理、山菜天ぷら、きのこ汁、郷土の漬物が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Shirakami Matagi rice, himemasu fish dishes, mountain vegetable tempura, mushroom soup, and local pickles.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น ข้าวมาทากิชิรากามิ อาหารจากปลาฮิเมมาสึ เทมปุระผักภูเขา ซุปเห็ด และผักดองท้องถิ่น',
          [Language.ZH]: '可以品尝白神猎人饭、姬鱒料理、山菜天妇罗、蘑菇汤、乡土腌菜。',
        },
        access: {
          [Language.JA]: 'JR七戸十和田駅からバスで2時間。レンタカーでの観光がおすすめです。',
          [Language.EN]: '2 hours by bus from JR Shichinohe-Towada Station. Rental car tourism is recommended.',
          [Language.TH]: '2 ชั่วโมงโดยรถบัสจากสถานี JR ชิจิโนเฮะ-โทวาดะ แนะนำให้เช่ารถท่องเที่ยว',
          [Language.ZH]: '从JR七户十和田站乘巴士2小时。推荐租车观光。',
        },
        image: 'https://picsum.photos/seed/lake-towada/600/300',
      },
      {
        id: 'sendai-castle',
        name: {
          [Language.JA]: '仙台城址',
          [Language.EN]: 'Sendai Castle Ruins',
          [Language.TH]: 'ซากปราสาทเซนได',
          [Language.ZH]: '仙台城遗址',
        },
        description: {
          [Language.JA]: '伊達政宗が築いた仙台藩の居城跡。青葉山の頂に位置し、仙台市街を一望できる景勝地として知られています。',
          [Language.EN]: 'The ruins of Sendai Domain\'s castle built by Date Masamune. Located atop Mount Aoba, known as a scenic spot overlooking Sendai city.',
          [Language.TH]: 'ซากปราสาทของแคว้นเซนไดที่สร้างโดยดาเตะ มาซามุเนะ ตั้งอยู่บนยอดเขาอาโอบะ เป็นที่รู้จักในฐานะจุดชมวิวที่มองเห็นเมืองเซนไดทั้งเมือง',
          [Language.ZH]: '伊达政宗建造的仙台藩居城遗址。位于青叶山顶，作为可俯瞰仙台市区的景胜地而闻名。',
        },
        history: {
          [Language.JA]: '1601年に築城が始まり、江戸時代を通じて伊達家の居城として栄えました。1945年の空襲で焼失しましたが、石垣や門は当時の姿を今に伝えています。',
          [Language.EN]: 'Construction began in 1601 and flourished as the Date clan\'s castle throughout the Edo period. Though burned in the 1945 air raids, stone walls and gates still convey its historical appearance.',
          [Language.TH]: 'เริ่มก่อสร้างในปี 1601 และรุ่งเรืองในฐานะปราสาทของตระกูลดาเตะตลอดสมัยเอโดะ แม้จะถูกไฟไหม้จากการทิ้งระเบิดในปี 1945 แต่กำแพงหินและประตูยังคงบอกเล่าลักษณะทางประวัติศาสตร์',
          [Language.ZH]: '1601年开始筑城，在整个江户时代作为伊达家的居城而繁荣。虽然1945年空袭中烧毁，但石墙和城门仍传承当时的面貌。',
        },
        culture_festivals: {
          [Language.JA]: '仙台青葉まつり、仙台七夕まつり、光のページェント、お城まつりが開催されます。',
          [Language.EN]: 'Events include Sendai Aoba Festival, Tanabata Festival, Pageant of Starlight, and Castle Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลอาโอบะเซนได เทศกาลทานาบาตะ งานประดับไฟ และเทศกาลปราสาท',
          [Language.ZH]: '举办仙台青叶节、仙台七夕节、光之盛典、城堡节。',
        },
        things_to_do: {
          [Language.JA]: '城址見学、伊達政宗像参拝、展望台からの眺望、博物館見学、ガイドツアー参加がおすすめです。',
          [Language.EN]: 'Recommended activities include exploring castle ruins, visiting Date Masamune statue, enjoying observatory views, museum visits, and joining guided tours.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ สำรวจซากปราสาท เยี่ยมชมรูปปั้นดาเตะ มาซามุเนะ ชมวิวจากหอชมวิว เยี่ยมชมพิพิธภัณฑ์ และเข้าร่วมทัวร์นำเที่ยว',
          [Language.ZH]: '推荐参观城址、参拜伊达政宗像、从展望台眺望、参观博物馆、参加导游团。',
        },
        local_cuisine: {
          [Language.JA]: '牛タン、ずんだ餅、はらこ飯、仙台味噌、笹かまぼこが名物です。',
          [Language.EN]: 'Local specialties include beef tongue, zunda mochi (edamame rice cakes), salmon roe rice, Sendai miso, and fish cakes.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ลิ้นวัวย่าง โมจิซุนดะ (โมจิถั่วแระญี่ปุ่น) ข้าวไข่ปลาแซลมอน มิโซะเซนได และขนมปลา',
          [Language.ZH]: '牛舌、枝豆年糕、鲑鱼子饭、仙台味噌、笹鱼糕是特产。',
        },
        access: {
          [Language.JA]: 'JR仙台駅から市営バスで20分。ロープウェイも利用できます。',
          [Language.EN]: '20 minutes by city bus from JR Sendai Station. Ropeway is also available.',
          [Language.TH]: '20 นาทีโดยรถบัสเมืองจากสถานี JR เซนได มีกระเช้าลอยฟ้าให้บริการด้วย',
          [Language.ZH]: '从JR仙台站乘市营巴士20分钟。也可以使用缆车。',
        },
        image: 'https://picsum.photos/seed/sendai-castle/600/300',
      },
      {
        id: 'mount-iwate',
        name: {
          [Language.JA]: '岩手山',
          [Language.EN]: 'Mount Iwate',
          [Language.TH]: 'ภูเขาอิวาเตะ',
          [Language.ZH]: '岩手山',
        },
        description: {
          [Language.JA]: '岩手県のシンボルとして知られる標高2,038mの活火山。その雄大な姿から「南部富士」とも呼ばれ、四季折々の表情を見せます。',
          [Language.EN]: 'A 2,038-meter active volcano known as the symbol of Iwate Prefecture. Called "Nambu Fuji" for its majestic appearance, it shows different faces throughout the seasons.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นสูง 2,038 เมตร เป็นสัญลักษณ์ของจังหวัดอิวาเตะ เรียกว่า "ฟูจิแห่งนัมบุ" เพราะรูปลักษณ์อันสง่างาม แสดงให้เห็นความงามที่แตกต่างกันในแต่ละฤดูกาล',
          [Language.ZH]: '作为岩手县象征而闻名的2,038米活火山。因其雄伟姿态被称为"南部富士"，随四季展现不同风貌。',
        },
        history: {
          [Language.JA]: '古くから山岳信仰の対象として崇められ、江戸時代には既に登山が行われていました。1936年に十和田八幡平国立公園に編入されました。',
          [Language.EN]: 'Long revered as an object of mountain worship, with climbing activities dating back to the Edo period. Incorporated into Towada-Hachimantai National Park in 1936.',
          [Language.TH]: 'ได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มาอย่างยาวนาน มีกิจกรรมปีนเขาตั้งแต่สมัยเอโดะ ได้รับการผนวกเข้ากับอุทยานแห่งชาติโทวาดะ-ฮาจิมันไทในปี 1936',
          [Language.ZH]: '自古以来作为山岳信仰对象受到崇敬，江户时代就有登山活动。1936年编入十和田八幡平国立公园。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、山頂祭、紅葉まつり、スノーフェスティバルが開催されます。',
          [Language.EN]: 'Events include Mountain Opening Ceremony, Summit Festival, Autumn Leaves Festival, and Snow Festival.',
          [Language.TH]: 'มีการจัดงานพิธีเปิดฤดูปีนเขา เทศกาลยอดเขา เทศกาลใบไม้แดง และเทศกาลหิมะ',
          [Language.ZH]: '举办山开き、山顶节、红叶节、雪节。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、写真撮影、スキー、スノーボード、キャンプ、星空観察がおすすめです。',
          [Language.EN]: 'Recommended activities include mountain climbing, trekking, photography, skiing, snowboarding, camping, and stargazing.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ปีนเขา เดินป่า ถ่ายภาพ เล่นสกี สโนว์บอร์ด ตั้งแคมป์ และดูดาว',
          [Language.ZH]: '推荐登山、远足、摄影、滑雪、单板滑雪、露营、观星。',
        },
        local_cuisine: {
          [Language.JA]: 'わんこそば、じゃじゃ麺、いわて牛、山菜料理、岩手の地酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including wanko soba noodles, jajamen noodles, Iwate beef, mountain vegetable dishes, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โซบะวังโกะ เส้นจาจาเมน เนื้อวัวอิวาเตะ อาหารจากผักภูเขา และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝碗子荞麦面、炸酱面、岩手牛肉、山菜料理、岩手地酒。',
        },
        access: {
          [Language.JA]: 'JR盛岡駅からバスで1時間。登山口まではタクシーやシャトルバスが利用できます。',
          [Language.EN]: '1 hour by bus from JR Morioka Station. Taxis and shuttle buses are available to trailheads.',
          [Language.TH]: '1 ชั่วโมงโดยรถบัสจากสถานี JR โมริโอกะ มีแท็กซี่และรถรับส่งไปยังจุดเริ่มต้นเส้นทางเดินป่า',
          [Language.ZH]: '从JR盛冈站乘巴士1小时。可乘坐出租车或班车到登山口。',
        },
        image: 'https://picsum.photos/seed/mount-iwate/600/300',
      },
      {
        id: 'basho-museum',
        name: {
          [Language.JA]: '山寺芭蕉記念館',
          [Language.EN]: 'Yamadera Basho Memorial Museum',
          [Language.TH]: 'พิพิธภัณฑ์อนุสรณ์บาโชยามาเดระ',
          [Language.ZH]: '山寺芭蕉纪念馆',
        },
        description: {
          [Language.JA]: '松尾芭蕉の足跡を伝える記念館。山寺を訪れた際の句「閑かさや 岩にしみ入る 蝉の声」にまつわる資料や芭蕉の遺品を展示しています。',
          [Language.EN]: 'A memorial museum dedicated to Matsuo Basho. Exhibits materials related to his famous haiku about silence and cicadas composed at Yamadera, along with his personal effects.',
          [Language.TH]: 'พิพิธภัณฑ์อนุสรณ์ที่อุทิศให้กับมัตสึโอะ บาโช จัดแสดงเอกสารที่เกี่ยวข้องกับบทกวีไฮกุอันโด่งดังของเขาเกี่ยวกับความเงียบและเสียงจักจั่นที่แต่งที่ยามาเดระ พร้อมด้วยของใช้ส่วนตัว',
          [Language.ZH]: '传承松尾芭蕉足迹的纪念馆。展示其访问山寺时创作的"寂静啊 渗入岩石的 蝉鸣声"俳句相关资料和芭蕉遗品。',
        },
        history: {
          [Language.JA]: '1989年に開館し、芭蕉の奥の細道の旅を記念して建てられました。山寺の景観に調和するよう設計された建築も特徴です。',
          [Language.EN]: 'Opened in 1989 to commemorate Basho\'s Journey to the Deep North. The building is designed to harmonize with Yamadera\'s landscape.',
          [Language.TH]: 'เปิดในปี 1989 เพื่อระลึกถึงการเดินทางสู่เหนือไกลของบาโช อาคารได้รับการออกแบบให้กลมกลืนกับภูมิทัศน์ของยามาเดระ',
          [Language.ZH]: '1989年开馆，为纪念芭蕉奥之细道之旅而建。建筑设计与山寺景观和谐统一也是特色。',
        },
        culture_festivals: {
          [Language.JA]: '芭蕉祭、俳句大会、文学講演会、企画展示会が開催されます。',
          [Language.EN]: 'Events include Basho Festival, Haiku Competition, Literary Lectures, and Special Exhibitions.',
          [Language.TH]: 'มีการจัดงานเทศกาลบาโช การแข่งขันไฮกุ การบรรยายวรรณกรรม และนิทรรศการพิเศษ',
          [Language.ZH]: '举办芭蕉节、俳句大会、文学讲演会、企划展示会。',
        },
        things_to_do: {
          [Language.JA]: '展示見学、俳句作り体験、茶室での呈茶、資料閲覧、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include viewing exhibitions, trying haiku composition, tea ceremony experience, browsing archives, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ชมนิทรรศการ ทดลองแต่งไฮกุ ประสบการณ์พิธีชงชา ค้นคว้าเอกสาร และถ่ายภาพ',
          [Language.ZH]: '推荐参观展示、体验俳句创作、茶室品茶、资料阅览、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山形そば、だだちゃ豆、芋煮、玉こんにゃく、お茶菓子が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Yamagata soba noodles, dadacha-mame edamame, imoni stew, konjac dumplings, and tea sweets.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โซบะยามากาตะ ถั่วแระญี่ปุ่นดาดาชามาเมะ สตูอิโมนิ ขนมโคนยากุ และขนมทานคู่กับชา',
          [Language.ZH]: '可以品尝山形荞麦面、茶豆、芋煮、蒟蒻丸子、茶点。',
        },
        access: {
          [Language.JA]: 'JR山寺駅から徒歩15分。山寺の参道沿いにあります。',
          [Language.EN]: '15 minutes on foot from JR Yamadera Station. Located along the temple approach path.',
          [Language.TH]: '15 นาทีโดยการเดินจากสถานี JR ยามาเดระ ตั้งอยู่ตามเส้นทางเข้าวัด',
          [Language.ZH]: '从JR山寺站步行15分钟。位于山寺参道旁。',
        },
        image: 'https://picsum.photos/seed/basho-museum/600/300',
      },
      {
        id: 'bandai-asahi',
        name: {
          [Language.JA]: '磐梯朝日国立公園',
          [Language.EN]: 'Bandai-Asahi National Park',
          [Language.TH]: 'อุทยานแห่งชาติบันได-อาซาฮิ',
          [Language.ZH]: '磐梯朝日国立公园',
        },
        description: {
          [Language.JA]: '福島県、山形県、新潟県にまたがる国立公園。火山や湖沼群、ブナの原生林など、多様な自然環境を有する山岳公園です。',
          [Language.EN]: 'A national park spanning Fukushima, Yamagata, and Niigata prefectures. A mountainous park featuring diverse natural environments including volcanoes, lakes, and virgin beech forests.',
          [Language.TH]: 'อุทยานแห่งชาติที่ครอบคลุมจังหวัดฟุกุชิมะ ยามากาตะ และนีงาตะ เป็นอุทยานภูเขาที่มีสภาพแวดล้อมทางธรรมชาติที่หลากหลาย รวมถึงภูเขาไฟ ทะเลสาบ และป่าบีชบริสุทธิ์',
          [Language.ZH]: '跨越福岛县、山形县、新潟县的国立公园。拥有火山、湖泊群、山毛榉原始林等多样自然环境的山岳公园。',
        },
        history: {
          [Language.JA]: '1950年に国立公園に指定され、古くから山岳信仰の地として知られています。1888年の磐梯山噴火で形成された地形も特徴です。',
          [Language.EN]: 'Designated as a national park in 1950, long known as a site of mountain worship. Features terrain formed by Mount Bandai\'s 1888 eruption.',
          [Language.TH]: 'ได้รับการกำหนดให้เป็นอุทยานแห่งชาติในปี 1950 เป็นที่รู้จักมานานในฐานะสถานที่สักการะภูเขาศักดิ์สิทธิ์ มีภูมิประเทศที่เกิดจากการปะทุของภูเขาบันไดในปี 1888',
          [Language.ZH]: '1950年被指定为国立公园，自古以来就作为山岳信仰之地而闻名。1888年磐梯山喷发形成的地形也是特色。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、紅葉まつり、雪まつり、山岳写真展、エコツアーが開催されます。',
          [Language.EN]: 'Events include Mountain Opening Ceremony, Autumn Leaves Festival, Snow Festival, Mountain Photography Exhibition, and Eco-tours.',
          [Language.TH]: 'มีการจัดงานพิธีเปิดฤดูปีนเขา เทศกาลใบไม้แดง เทศกาลหิมะ นิทรรศการภาพถ่ายภูเขา และทัวร์ธรรมชาติ',
          [Language.ZH]: '举办山开き、红叶节、雪节、山岳摄影展、生态旅游。',
        },
        things_to_do: {
          [Language.JA]: '登山、トレッキング、キャンプ、スキー、温泉巡り、バードウォッチング、写真撮影がおすすめです。',
          [Language.EN]: 'Recommended activities include mountain climbing, trekking, camping, skiing, hot spring hopping, bird watching, and photography.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ปีนเขา เดินป่า ตั้งแคมป์ เล่นสกี แช่น้ำพุร้อนหลายแห่ง ดูนก และถ่ายภาพ',
          [Language.ZH]: '推荐登山、远足、露营、滑雪、温泉巡游、观鸟、摄影。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ汁、あけびの実、山形牛、地酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including mountain vegetable dishes, mushroom soup, akebi fruit, Yamagata beef, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารจากผักภูเขา ซุปเห็ด ผลอาเคบิ เนื้อวัวยามากาตะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝山菜料理、蘑菇汤、木通果、山形牛、地酒。',
        },
        access: {
          [Language.JA]: '各エリアへのアクセスは異なりますが、主要な駅からバスやタクシーが利用できます。',
          [Language.EN]: 'Access varies by area, but buses and taxis are available from major stations.',
          [Language.TH]: 'การเข้าถึงแต่ละพื้นที่แตกต่างกัน แต่มีรถบัสและแท็กซี่ให้บริการจากสถานีหลัก',
          [Language.ZH]: '各区域的交通方式不同，但可从主要车站乘坐巴士或出租车。',
        },
        image: 'https://picsum.photos/seed/bandai-asahi/600/300',
      },
      {
        id: 'dewa-sanzan',
        name: {
          [Language.JA]: '出羽三山',
          [Language.EN]: 'Dewa Sanzan',
          [Language.TH]: 'เดวะซันซัน',
          [Language.ZH]: '出羽三山',
        },
        description: {
          [Language.JA]: '月山、羽黒山、湯殿山からなる三つの霊山。修験道の聖地として知られ、各山は誕生、死、再生を表すとされています。',
          [Language.EN]: 'Three sacred mountains consisting of Mount Gassan, Mount Haguro, and Mount Yudono. Known as a sacred site of Shugendo, each mountain represents birth, death, and rebirth.',
          [Language.TH]: 'ภูเขาศักดิ์สิทธิ์สามลูก ประกอบด้วยภูเขากัสซัน ภูเขาฮากุโระ และภูเขายุโดโนะ เป็นที่รู้จักในฐานะสถานที่ศักดิ์สิทธิ์ของลัทธิชูเก็นโด โดยแต่ละภูเขาเป็นตัวแทนของการเกิด การตาย และการเกิดใหม่',
          [Language.ZH]: '由月山、羽黑山、汤殿山组成的三座灵山。作为修验道圣地闻名，各山分别象征着诞生、死亡和再生。',
        },
        history: {
          [Language.JA]: '1400年以上の歴史を持つ修験道の聖地で、多くの修験者が修行を行ってきました。2016年に日本遺産に認定されました。',
          [Language.EN]: 'A sacred site of Shugendo with over 1,400 years of history where many ascetic practitioners have trained. Designated as Japan Heritage in 2016.',
          [Language.TH]: 'สถานที่ศักดิ์สิทธิ์ของลัทธิชูเก็นโดที่มีประวัติศาสตร์ยาวนานกว่า 1,400 ปี เป็นที่ฝึกฝนของนักพรตมากมาย ได้รับการขึ้นทะเบียนเป็นมรดกญี่ปุ่นในปี 2016',
          [Language.ZH]: '拥有1400多年历史的修验道圣地，众多修验者在此修行。2016年被认定为日本遗产。',
        },
        culture_festivals: {
          [Language.JA]: '山開き、松例祭、六十里越街道まつり、修験道の儀式が開催されます。',
          [Language.EN]: 'Events include Mountain Opening Ceremony, Matsunori Festival, Rokujuri-goe Highway Festival, and Shugendo rituals.',
          [Language.TH]: 'มีการจัดงานพิธีเปิดฤดูปีนเขา เทศกาลมัตสึโนริ เทศกาลถนนโรคุจูริโกเอะ และพิธีกรรมชูเก็นโด',
          [Language.ZH]: '举办山开き、松例节、六十里越街道节、修验道仪式。',
        },
        things_to_do: {
          [Language.JA]: '山岳巡礼、座禅体験、修験道体験、五重塔見学、山伏料理体験がおすすめです。',
          [Language.EN]: 'Recommended activities include mountain pilgrimage, zazen meditation, Shugendo experience, five-storied pagoda visits, and yamabushi cuisine experience.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ แสวงบุญตามภูเขา นั่งสมาธิแบบเซน ประสบการณ์ชูเก็นโด เยี่ยมชมเจดีย์ห้าชั้น และลองทานอาหารยามาบุชิ',
          [Language.ZH]: '推荐山岳朝圣、坐禅体验、修验道体验、五重塔参观、山伏料理体验。',
        },
        local_cuisine: {
          [Language.JA]: '精進料理、月山筍、だだちゃ豆、山菜料理、出羽の地酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Buddhist vegetarian cuisine, Gassan bamboo shoots, dadacha-mame edamame, mountain vegetable dishes, and Dewa local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารเจแบบพุทธ หน่อไม้กัสซัน ถั่วแระญี่ปุ่นดาดาชามาเมะ อาหารจากผักภูเขา และสาเกท้องถิ่นเดวะ',
          [Language.ZH]: '可以品尝精进料理、月山笋、茶豆、山菜料理、出羽地酒。',
        },
        access: {
          [Language.JA]: 'JR鶴岡駅からバスで1時間。各山へは参拝バスが運行しています。',
          [Language.EN]: '1 hour by bus from JR Tsuruoka Station. Pilgrimage buses operate to each mountain.',
          [Language.TH]: '1 ชั่วโมงโดยรถบัสจากสถานี JR สึรุโอกะ มีรถบัสแสวงบุญไปยังแต่ละภูเขา',
          [Language.ZH]: '从JR鹤冈站乘巴士1小时。各山有参拜巴士运行。',
        },
        image: 'https://picsum.photos/seed/dewa-sanzan/600/300',
      },
      {
        id: 'kitakami-tenshochi',
        name: {
          [Language.JA]: '北上展勝地',
          [Language.EN]: 'Kitakami Tenshochi',
          [Language.TH]: 'คิตาคามิ เท็นโชจิ',
          [Language.ZH]: '北上展胜地',
        },
        description: {
          [Language.JA]: '北上川沿いに約2キロメートルにわたって桜並木が続く公園。約10,000本の桜と約100基の鯉のぼりが春の風物詩を作り出します。',
          [Language.EN]: 'A park with cherry blossom trees lining the Kitakami River for about 2 kilometers. About 10,000 cherry trees and 100 carp streamers create a spring spectacle.',
          [Language.TH]: 'สวนที่มีต้นซากุระเรียงรายตามแม่น้ำคิตาคามิเป็นระยะทางประมาณ 2 กิโลเมตร ต้นซากุระประมาณ 10,000 ต้นและธงปลาคาร์พประมาณ 100 ผืนสร้างทัศนียภาพฤดูใบไม้ผลิ',
          [Language.ZH]: '沿北上川延绵约2公里的樱花树林公园。约10,000棵樱花树和约100个鲤鱼旗构成春季风物诗。',
        },
        history: {
          [Language.JA]: '1927年に開園し、東北有数の桜の名所として知られています。北上川の治水事業と共に整備された歴史ある公園です。',
          [Language.EN]: 'Opened in 1927 and known as one of the finest cherry blossom viewing spots in Tohoku. A historic park developed alongside flood control projects on the Kitakami River.',
          [Language.TH]: 'เปิดในปี 1927 และเป็นที่รู้จักในฐานะหนึ่งในจุดชมซากุระที่ดีที่สุดในโทโฮคุ เป็นสวนประวัติศาสตร์ที่พัฒนาควบคู่ไปกับโครงการควบคุมน้ำท่วมในแม่น้ำคิตาคามิ',
          [Language.ZH]: '1927年开园，作为东北地区著名赏樱胜地而闻名。是与北上川治水工程一同整备的历史悠久的公园。',
        },
        culture_festivals: {
          [Language.JA]: '北上展勝地さくらまつり、鯉のぼり掲揚、夜桜ライトアップ、野点茶会が開催されます。',
          [Language.EN]: 'Events include Kitakami Tenshochi Cherry Blossom Festival, carp streamer raising, night cherry blossom illumination, and outdoor tea ceremonies.',
          [Language.TH]: 'มีการจัดงานเทศกาลซากุระคิตาคามิ เท็นโชจิ การชักธงปลาคาร์พ การประดับไฟซากุระยามค่ำคืน และพิธีชงชากลางแจ้ง',
          [Language.ZH]: '举办北上展胜地樱花节、鲤鱼旗升挂、夜樱灯光秀、野点茶会。',
        },
        things_to_do: {
          [Language.JA]: '桜並木散策、屋形船乗船、写真撮影、野点体験、サイクリング、観光馬車がおすすめです。',
          [Language.EN]: 'Recommended activities include walking under cherry trees, riding pleasure boats, photography, outdoor tea ceremony experience, cycling, and horse-drawn carriage rides.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินใต้ต้นซากุระ ล่องเรือสำราญ ถ่ายภาพ ประสบการณ์พิธีชงชากลางแจ้ง ปั่นจักรยาน และนั่งรถม้า',
          [Language.ZH]: '推荐樱花树下散步、游船、摄影、野点体验、骑行、观光马车。',
        },
        local_cuisine: {
          [Language.JA]: 'わんこそば、北上コロッケ、じゃじゃ麺、日本酒、花見団子が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including wanko soba noodles, Kitakami croquettes, jajamen noodles, sake, and hanami dango dumplings.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โซบะวังโกะ คร็อกเกต์คิตาคามิ เส้นจาจาเมน สาเก และขนมดังโงะชมซากุระ',
          [Language.ZH]: '可以品尝碗子荞麦面、北上可乐饼、炸酱面、日本酒、赏花团子。',
        },
        access: {
          [Language.JA]: 'JR北上駅からバスで15分。桜の季節は臨時バスも運行します。',
          [Language.EN]: '15 minutes by bus from JR Kitakami Station. Special buses operate during cherry blossom season.',
          [Language.TH]: '15 นาทีโดยรถบัสจากสถานี JR คิตาคามิ มีรถบัสพิเศษให้บริการในช่วงฤดูซากุระ',
          [Language.ZH]: '从JR北上站乘巴士15分钟。樱花季节有临时巴士运行。',
        },
        image: 'https://picsum.photos/seed/kitakami-tenshochi/600/300',
      },
      {
        id: 'shirakami-sanchi',
        name: {
          [Language.JA]: '白神山地',
          [Language.EN]: 'Shirakami-Sanchi',
          [Language.TH]: 'ชิราคามิ-ซันจิ',
          [Language.ZH]: '白神山地',
        },
        description: {
          [Language.JA]: '青森県と秋田県にまたがる世界自然遺産。原生的なブナ林が広がり、多様な動植物が生息する貴重な生態系を有しています。',
          [Language.EN]: 'A UNESCO World Natural Heritage site spanning Aomori and Akita prefectures. Features pristine beech forests and hosts a precious ecosystem with diverse flora and fauna.',
          [Language.TH]: 'มรดกโลกทางธรรมชาติที่คร่อมระหว่างจังหวัดอาโอโมริและอะคิตะ มีป่าบีชบริสุทธิ์และระบบนิเวศอันล้ำค่าที่มีพืชและสัตว์หลากหลายชนิด',
          [Language.ZH]: '横跨青森县和秋田县的世界自然遗产。拥有原始山毛榉林和栖息着多样动植物的珍贵生态系统。',
        },
        history: {
          [Language.JA]: '1993年に世界自然遺産に登録され、日本で最初の世界自然遺産の一つとなりました。約8,000年前から続く原生的なブナ林が特徴です。',
          [Language.EN]: 'Registered as a UNESCO World Natural Heritage site in 1993, becoming one of Japan\'s first natural heritage sites. Features primeval beech forests dating back about 8,000 years.',
          [Language.TH]: 'ได้รับการขึ้นทะเบียนเป็นมรดกโลกทางธรรมชาติในปี 1993 เป็นหนึ่งในมรดกทางธรรมชาติแห่งแรกๆ ของญี่ปุ่น มีป่าบีชดั้งเดิมที่มีอายุย้อนไปประมาณ 8,000 ปี',
          [Language.ZH]: '1993年被列入世界自然遗产，成为日本最早的世界自然遗产之一。特色是延续约8,000年的原始山毛榉林。',
        },
        culture_festivals: {
          [Language.JA]: 'ブナ林散策会、白神山地フェスタ、エコツアー、山菜まつり、紅葉まつりが開催されます。',
          [Language.EN]: 'Events include Beech Forest Walking Tours, Shirakami-Sanchi Festival, Eco-tours, Mountain Vegetable Festival, and Autumn Leaves Festival.',
          [Language.TH]: 'มีการจัดงานทัวร์เดินป่าบีช เทศกาลชิราคามิ-ซันจิ ทัวร์ธรรมชาติ เทศกาลผักภูเขา และเทศกาลใบไม้แดง',
          [Language.ZH]: '举办山毛榉林散步会、白神山地节、生态旅游、山菜节、红叶节。',
        },
        things_to_do: {
          [Language.JA]: 'トレッキング、バードウォッチング、写真撮影、滝巡り、山菜採り、ガイド付きツアーがおすすめです。',
          [Language.EN]: 'Recommended activities include trekking, bird watching, photography, waterfall hopping, mountain vegetable gathering, and guided tours.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินป่า ดูนก ถ่ายภาพ ชมน้ำตก เก็บผักภูเขา และทัวร์กับไกด์',
          [Language.ZH]: '推荐远足、观鸟、摄影、瀑布巡游、采摘山菜、导游带队游览。',
        },
        local_cuisine: {
          [Language.JA]: '山菜料理、きのこ料理、イワナ料理、白神そば、地酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including mountain vegetable dishes, mushroom dishes, char fish dishes, Shirakami soba noodles, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารจากผักภูเขา อาหารจากเห็ด อาหารจากปลาชาร์ โซบะชิราคามิ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝山菜料理、蘑菇料理、岩鱼料理、白神荞麦面、地酒。',
        },
        access: {
          [Language.JA]: 'JR鰺ヶ沢駅または大館駅からバスで約1時間。ガイド付きツアーの利用がおすすめです。',
          [Language.EN]: 'About 1 hour by bus from JR Ajigasawa Station or Odate Station. Guided tours are recommended.',
          [Language.TH]: 'ประมาณ 1 ชั่วโมงโดยรถบัสจากสถานี JR อาจิกาซาวะหรือสถานีโอดาเตะ แนะนำให้ใช้บริการทัวร์กับไกด์',
          [Language.ZH]: '从JR鯵鹿沢站或大馆站乘巴士约1小时。推荐参加导游带队游览。',
        },
        image: 'https://picsum.photos/seed/shirakami-sanchi/600/300',
      },
      {
        id: 'samurai-district',
        name: {
          [Language.JA]: '武家屋敷',
          [Language.EN]: 'Samurai District',
          [Language.TH]: 'ย่านซามูไร',
          [Language.ZH]: '武家宅邸',
        },
        description: {
          [Language.JA]: '秋田市の城下町に残る武家屋敷群。江戸時代の武家の生活と建築様式を今に伝える貴重な文化遺産です。',
          [Language.EN]: 'A group of samurai residences remaining in Akita City\'s castle town. A precious cultural heritage conveying the life and architecture of Edo period samurai.',
          [Language.TH]: 'กลุ่มบ้านซามูไรที่ยังคงเหลืออยู่ในเมืองปราสาทอะคิตะ เป็นมรดกทางวัฒนธรรมอันล้ำค่าที่บอกเล่าชีวิตและสถาปัตยกรรมของซามูไรในสมัยเอโดะ',
          [Language.ZH]: '保存在秋田市城下町的武家宅邸群。传承江户时代武士生活和建筑样式的珍贵文化遗产。',
        },
        history: {
          [Language.JA]: '17世紀初頭から形成された武家地で、明治維新後も良好に保存されてきました。2019年に日本遺産に認定されています。',
          [Language.EN]: 'A samurai district formed from the early 17th century and well-preserved after the Meiji Restoration. Designated as Japan Heritage in 2019.',
          [Language.TH]: 'ย่านซามูไรที่ก่อตัวขึ้นตั้งแต่ต้นศตวรรษที่ 17 และได้รับการอนุรักษ์อย่างดีหลังการปฏิรูปเมจิ ได้รับการขึ้นทะเบียนเป็นมรดกญี่ปุ่นในปี 2019',
          [Language.ZH]: '从17世纪初形成的武家地，明治维新后也得到良好保存。2019年被认定为日本遗产。',
        },
        culture_festivals: {
          [Language.JA]: '武家屋敷ライトアップ、お茶会、武家文化体験、季節の催し物が開催されます。',
          [Language.EN]: 'Events include Samurai Residence Light-up, Tea Ceremonies, Samurai Culture Experiences, and Seasonal Events.',
          [Language.TH]: 'มีการจัดงานประดับไฟบ้านซามูไร พิธีชงชา ประสบการณ์วัฒนธรรมซามูไร และกิจกรรมตามฤดูกาล',
          [Language.ZH]: '举办武家宅邸灯光秀、茶会、武家文化体验、季节性活动。',
        },
        things_to_do: {
          [Language.JA]: '武家屋敷見学、着付け体験、庭園散策、茶道体験、古武道見学がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting samurai houses, trying on kimono, garden walks, tea ceremony experiences, and watching classical martial arts.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมบ้านซามูไร ลองสวมชุดกิโมโน เดินเล่นในสวน ประสบการณ์พิธีชงชา และชมศิลปะการต่อสู้แบบโบราณ',
          [Language.ZH]: '推荐参观武家宅邸、和服体验、庭园散步、茶道体验、古武道参观。',
        },
        local_cuisine: {
          [Language.JA]: 'きりたんぽ鍋、比内地鶏料理、いぶりがっこ、日本酒、和菓子が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including kiritanpo hot pot, Hinai chicken dishes, smoked pickled radish, sake, and Japanese sweets.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น หม้อไฟคิริทันโปะ อาหารจากไก่ฮินาอิ ผักดองรมควัน สาเก และขนมญี่ปุ่น',
          [Language.ZH]: '可以品尝切炭火锅、比内地鸡料理、烟熏萝卜、日本酒、和果子。',
        },
        access: {
          [Language.JA]: 'JR秋田駅からバスで15分。観光ガイドの案内も利用できます。',
          [Language.EN]: '15 minutes by bus from JR Akita Station. Tourist guide services are available.',
          [Language.TH]: '15 นาทีโดยรถบัสจากสถานี JR อะคิตะ มีบริการไกด์นำเที่ยว',
          [Language.ZH]: '从JR秋田站乘巴士15分钟。可以使用观光导游服务。',
        },
        image: 'https://picsum.photos/seed/samurai-district/600/300',
      },
      {
        id: 'hakkoda-ropeway',
        name: {
          [Language.JA]: '八甲田ロープウェー',
          [Language.EN]: 'Hakkoda Ropeway',
          [Language.TH]: 'กระเช้าลอยฟ้าฮักโคดะ',
          [Language.ZH]: '八甲田缆车',
        },
        description: {
          [Language.JA]: '八甲田山の山麓から山頂付近まで運行する日本有数のロープウェー。四季折々の絶景と、冬の樹氷が特に有名です。',
          [Language.EN]: 'One of Japan\'s premier ropeways, running from the foot to near the summit of Mount Hakkoda. Known for spectacular seasonal views and winter snow monsters.',
          [Language.TH]: 'หนึ่งในกระเช้าลอยฟ้าชั้นนำของญี่ปุ่น วิ่งจากเชิงเขาถึงใกล้ยอดเขาฮักโคดะ มีชื่อเสียงด้านทิวทัศน์ตามฤดูกาลและต้นไม้น้ำแข็งในฤดูหนาว',
          [Language.ZH]: '从八甲田山山麓到山顶附近运行的日本著名缆车。以四季美景和冬季树冰特别闻名。',
        },
        history: {
          [Language.JA]: '1977年に開業し、冬季の観光と登山の拠点として発展してきました。八甲田山の自然と歴史を紹介する施設も併設されています。',
          [Language.EN]: 'Opened in 1977 and developed as a hub for winter tourism and mountain climbing. Features facilities introducing the nature and history of Mount Hakkoda.',
          [Language.TH]: 'เปิดในปี 1977 และพัฒนาเป็นศูนย์กลางการท่องเที่ยวฤดูหนาวและการปีนเขา มีสิ่งอำนวยความสะดวกที่แนะนำธรรมชาติและประวัติศาสตร์ของภูเขาฮักโคดะ',
          [Language.ZH]: '1977年开业，发展成为冬季观光和登山的据点。配备介绍八甲田山自然和历史的设施。',
        },
        culture_festivals: {
          [Language.JA]: '樹氷ライトアップ、山頂コンサート、紅葉まつり、スノーフェスティバルが開催されます。',
          [Language.EN]: 'Events include Snow Monster Light-up, Summit Concerts, Autumn Leaves Festival, and Snow Festival.',
          [Language.TH]: 'มีการจัดงานประดับไฟต้นไม้น้ำแข็ง คอนเสิร์ตบนยอดเขา เทศกาลใบไม้แดง และเทศกาลหิมะ',
          [Language.ZH]: '举办树冰灯光秀、山顶音乐会、红叶节、雪节。',
        },
        things_to_do: {
          [Language.JA]: 'ロープウェー乗車、スキー、スノーボード、トレッキング、写真撮影、温泉巡りがおすすめです。',
          [Language.EN]: 'Recommended activities include riding the ropeway, skiing, snowboarding, trekking, photography, and hot spring hopping.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ นั่งกระเช้าลอยฟ้า เล่นสกี สโนว์บอร์ด เดินป่า ถ่ายภาพ และแช่น้ำพุร้อนหลายแห่ง',
          [Language.ZH]: '推荐乘坐缆车、滑雪、单板滑雪、远足、摄影、温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: '八甲田そば、十和田バラ焼き、青森りんご、地酒、山菜料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including Hakkoda soba noodles, Towada rose-cut beef, Aomori apples, local sake, and mountain vegetable dishes.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น โซบะฮักโคดะ เนื้อย่างโทวาดะ แอปเปิ้ลอาโอโมริ สาเกท้องถิ่น และอาหารจากผักภูเขา',
          [Language.ZH]: '可以品尝八甲田荞麦面、十和田玫瑰烤肉、青森苹果、地酒、山菜料理。',
        },
        access: {
          [Language.JA]: 'JR青森駅からバスで60分。冬期は専用シャトルバスも運行しています。',
          [Language.EN]: '60 minutes by bus from JR Aomori Station. Special shuttle buses operate during winter.',
          [Language.TH]: '60 นาทีโดยรถบัสจากสถานี JR อาโอโมริ มีรถรับส่งพิเศษให้บริการในช่วงฤดูหนาว',
          [Language.ZH]: '从JR青森站乘巴士60分钟。冬季有专用班车运行。',
        },
        image: 'https://picsum.photos/seed/hakkoda-ropeway/600/300',
      },
      {
        id: 'lake-inawashiro',
        name: {
          [Language.JA]: '猪苗代湖',
          [Language.EN]: 'Lake Inawashiro',
          [Language.TH]: 'ทะเลสาบอินาวาชิโระ',
          [Language.ZH]: '猪苗代湖',
        },
        description: {
          [Language.JA]: '福島県の中心に位置する日本第四位の湖。透明度が高く「天神の水鏡」と呼ばれ、白鳥の越冬地としても有名です。',
          [Language.EN]: 'Japan\'s fourth-largest lake, located in central Fukushima. Known for its high water clarity, called "Heaven\'s Mirror," and famous as a winter habitat for swans.',
          [Language.TH]: 'ทะเลสาบที่ใหญ่เป็นอันดับ 4 ของญี่ปุ่น ตั้งอยู่ใจกลางจังหวัดฟุกุชิมะ มีชื่อเสียงด้านน้ำที่ใสสะอาด เรียกว่า "กระจกสวรรค์" และเป็นที่อยู่อาศัยในฤดูหนาวของหงส์',
          [Language.ZH]: '位于福岛县中心的日本第四大湖。以高透明度而被称为"天神之镜"，作为天鹅越冬地也很有名。',
        },
        history: {
          [Language.JA]: '火山活動によって形成された湖で、江戸時代から水質の良さで知られてきました。野口英世博士の故郷としても有名です。',
          [Language.EN]: 'Formed by volcanic activity and known for its water quality since the Edo period. Also famous as the hometown of Dr. Hideyo Noguchi.',
          [Language.TH]: 'ก่อตัวจากกิจกรรมภูเขาไฟและมีชื่อเสียงด้านคุณภาพน้ำตั้งแต่สมัยเอโดะ ยังมีชื่อเสียงในฐานะบ้านเกิดของดร.ฮิเดโยะ โนกุจิ',
          [Language.ZH]: '由火山活动形成的湖泊，从江户时代起就以水质优良而闻名。作为野口英世博士的故乡也很有名。',
        },
        culture_festivals: {
          [Language.JA]: '白鳥まつり、花火大会、湖水まつり、野口英世記念祭が開催されます。',
          [Language.EN]: 'Events include Swan Festival, Fireworks Display, Lake Festival, and Dr. Noguchi Memorial Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลหงส์ การแสดงดอกไม้ไฟ เทศกาลทะเลสาบ และเทศกาลรำลึกดร.โนกุจิ',
          [Language.ZH]: '举办天鹅节、烟花大会、湖水节、野口英世纪念节。',
        },
        things_to_do: {
          [Language.JA]: '水上スポーツ、白鳥観察、湖畔サイクリング、キャンプ、釣り、温泉巡りがおすすめです。',
          [Language.EN]: 'Recommended activities include water sports, swan watching, lakeside cycling, camping, fishing, and hot spring hopping.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ กีฬาทางน้ำ ดูหงส์ ปั่นจักรยานริมทะเลสาบ ตั้งแคมป์ ตกปลา และแช่น้ำพุร้อนหลายแห่ง',
          [Language.ZH]: '推荐水上运动、观赏天鹅、湖畔骑行、露营、钓鱼、温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: 'ワカサギ料理、会津地鶏、ソースカツ丼、喜多方ラーメン、地酒が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including smelt dishes, Aizu chicken, sauce katsu bowl, Kitakata ramen, and local sake.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารจากปลาวากาซากิ ไก่ไอสึ ข้าวหน้าหมูทอดราดซอส ราเมนคิตาคาตะ และสาเกท้องถิ่น',
          [Language.ZH]: '可以品尝公鱼料理、会津地鸡、炸猪排盖饭、喜多方拉面、地酒。',
        },
        access: {
          [Language.JA]: 'JR猪苗代駅からバスで15分。レンタカーでの観光もおすすめです。',
          [Language.EN]: '15 minutes by bus from JR Inawashiro Station. Rental car tourism is also recommended.',
          [Language.TH]: '15 นาทีโดยรถบัสจากสถานี JR อินาวาชิโระ แนะนำให้เช่ารถท่องเที่ยวด้วย',
          [Language.ZH]: '从JR猪苗代站乘巴士15分钟。推荐租车观光。',
        },
        image: 'https://picsum.photos/seed/lake-inawashiro/600/300',
      },
    ],
  },
  {
    id: 'kanto',
    name: {
      [Language.JA]: '関東地方',
      [Language.EN]: 'Kanto Region',
      [Language.TH]: 'ภูมิภาคคันโต',
      [Language.ZH]: '关东地区',
    },
    description: {
      [Language.JA]: '日本の政治経済の中心であり、首都東京を含む多様な魅力を持つ地方です。近代的な都市と豊かな自然が共存しています。',
      [Language.EN]: 'The political and economic heart of Japan, home to the capital Tokyo. Offers a diverse mix of modern cityscapes and rich nature.',
      [Language.TH]: 'ศูนย์กลางทางการเมืองและเศรษฐกิจของญี่ปุ่น เป็นที่ตั้งของเมืองหลวงโตเกียว นำเสนอการผสมผสานที่หลากหลายของทิวทัศน์เมืองที่ทันสมัยและธรรมชาติที่อุดมสมบูรณ์',
      [Language.ZH]: '日本的政治和经济中心，首都东京的所在地。融合了现代都市景观和丰富的自然风光。',
    },
    image: 'https://picsum.photos/seed/kanto-main/800/400',
    places: [
      {
        id: 'tokyo',
        name: { 
          [Language.JA]: '東京都', 
          [Language.EN]: 'Tokyo Metropolis',
          [Language.TH]: 'มหานครโตเกียว',
          [Language.ZH]: '东京都',
        },
        description: {
          [Language.JA]: '日本の首都。伝統と革新が融合する世界的な大都市。渋谷のスクランブル交差点や浅草寺が有名。',
          [Language.EN]: 'The capital of Japan. A global megacity where tradition and innovation merge. Famous for Shibuya Crossing and Senso-ji Temple.',
          [Language.TH]: 'เมืองหลวงของญี่ปุ่น มหานครระดับโลกที่ซึ่งประเพณีและนวัตกรรมผสมผสานกัน มีชื่อเสียงด้านทางข้ามชิบูย่าและวัดเซ็นโซจิ',
          [Language.ZH]: '日本的首都。传统与创新融合的国际大都市。以涩谷十字路口和浅草寺闻名。',
        },
        history: {
          [Language.JA]: '1868年に江戸から東京に改称され、明治維新とともに近代都市として発展。関東大震災や戦災を乗り越え、現在の国際都市となりました。',
          [Language.EN]: 'Renamed from Edo to Tokyo in 1868, it developed as a modern city with the Meiji Restoration. It overcame the Great Kanto Earthquake and wartime destruction to become today\'s international metropolis.',
          [Language.TH]: 'เปลี่ยนชื่อจากเอโดะเป็นโตเกียวในปี 1868 พัฒนาเป็นเมืองสมัยใหม่พร้อมกับการปฏิรูปเมจิ ผ่านพ้นแผ่นดินไหวคันโตและการทำลายจากสงครามมาเป็นมหานครนานาชาติในปัจจุบัน',
          [Language.ZH]: '1868年从江户改名为东京，伴随明治维新发展为现代城市。克服了关东大地震和战争破坏，成为今天的国际大都市。',
        },
        culture_festivals: {
          [Language.JA]: '神田祭や三社祭などの伝統的な祭りから、現代的なイベントまで多彩。桜の季節には各地で花見が楽しめます。',
          [Language.EN]: 'From traditional festivals like Kanda Matsuri and Sanja Matsuri to modern events. Cherry blossom viewing is enjoyed throughout the city during sakura season.',
          [Language.TH]: 'ตั้งแต่เทศกาลดั้งเดิมอย่างคันดะมัตสึริและซันจะมัตสึริไปจนถึงงานสมัยใหม่ การชมซากุระได้รับความนิยมทั่วเมืองในช่วงฤดูซากุระ',
          [Language.ZH]: '从神田祭、三社祭等传统节日到现代活动，内容丰富多彩。樱花季节时全城都可欣赏樱花。',
        },
        things_to_do: {
          [Language.JA]: '浅草寺での参拝、皇居外苑の散策、築地・豊洲での寿司体験、渋谷・新宿でのショッピング、上野動物園でのパンダ観察がおすすめです。',
          [Language.EN]: 'Visit Senso-ji Temple, stroll through the Imperial Palace East Gardens, experience sushi at Tsukiji/Toyosu, shop in Shibuya/Shinjuku, and see pandas at Ueno Zoo.',
          [Language.TH]: 'แนะนำให้ไปสักการะที่วัดเซ็นโซจิ เดินเล่นที่สวนพระราชวัง ลิ้มลองซูชิที่สึกิจิ/โทโยซุ ช้อปปิ้งที่ชิบูยา/ชินจุกุ และชมแพนด้าที่สวนสัตว์อุเอโนะ',
          [Language.ZH]: '推荐参拜浅草寺、漫步皇居东御苑、在筑地/丰洲体验寿司、在涩谷/新宿购物、在上野动物园观赏熊猫。',
        },
        local_cuisine: {
          [Language.JA]: '江戸前寿司、もんじゃ焼き、ちゃんこ鍋、深川めし、どじょう鍋などの伝統料理から、世界各国の料理まで楽しめます。',
          [Language.EN]: 'Enjoy traditional dishes like Edomae sushi, monjayaki, chanko nabe, Fukagawa-meshi, and dojo nabe, as well as cuisine from around the world.',
          [Language.TH]: 'เพลิดเพลินกับอาหารดั้งเดิมอย่างซูชิเอโดะมาเอะ โมนจายากิ ฉันโกะนาเบะ ฟุคากาวะเมชิ และโดโจนาเบะ รวมถึงอาหารจากทั่วโลก',
          [Language.ZH]: '可以品尝江户前寿司、文字烧、相扑火锅、深川饭、泥鳅锅等传统料理，以及世界各国美食。',
        },
        access: {
          [Language.JA]: '羽田・成田の両空港があり、国内外からのアクセスが良好。山手線をはじめとする充実した鉄道網で移動が便利です。',
          [Language.EN]: 'Excellent access via Haneda and Narita airports. Convenient transportation with an extensive railway network including the Yamanote Line.',
          [Language.TH]: 'เข้าถึงได้สะดวกผ่านสนามบินฮาเนดะและนาริตะ การเดินทางสะดวกด้วยเครือข่ายรถไฟที่ครอบคลุม รวมถึงสายยามาโนเตะ',
          [Language.ZH]: '通过羽田和成田机场可便利到达。拥有包括山手线在内的完善铁路网，交通便利。',
        },
        image: 'https://picsum.photos/seed/tokyo-city/600/300',
      },
      {
        id: 'hakone',
        name: { 
          [Language.JA]: '箱根町', 
          [Language.EN]: 'Hakone Town',
          [Language.TH]: 'เมืองฮาโกเน่',
          [Language.ZH]: '箱根町',
        },
        description: {
          [Language.JA]: '富士山を望む温泉地。美術館、自然豊かな芦ノ湖、ロープウェイなどが楽しめます。',
          [Language.EN]: 'A mountain resort town with views of Mt. Fuji, famous for its hot springs, art museums, and scenic Lake Ashi.',
          [Language.TH]: 'เมืองรีสอร์ทบนภูเขาที่มองเห็นภูเขาไฟฟูจิ มีชื่อเสียงด้านน้ำพุร้อน พิพิธภัณฑ์ศิลปะ และทะเลสาบอาชิที่สวยงาม',
          [Language.ZH]: '一个可以欣赏富士山景色的山区度假小镇，以其温泉、美术馆和风景秀丽的芦之湖而闻名。',
        },
        history: {
          [Language.JA]: '江戸時代には東海道の宿場町として栄え、箱根関所が設けられていました。明治以降、富士箱根国立公園の一部として観光地化が進みました。',
          [Language.EN]: 'Flourished as a post town on the Tokaido highway during the Edo period, where the Hakone checkpoint was established. From the Meiji period onwards, it developed as a tourist destination as part of Fuji-Hakone-Izu National Park.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองสถานีบนทางหลวงโทไคโดในสมัยเอโดะ ซึ่งมีจุดตรวจฮาโกเน่ตั้งอยู่ ตั้งแต่สมัยเมจิเป็นต้นมา ได้พัฒนาเป็นจุดหมายปลายทางท่องเที่ยวเป็นส่วนหนึ่งของอุทยานแห่งชาติฟูจิ-ฮาโกเน่-อิซุ',
          [Language.ZH]: '江户时代作为东海道的宿场町繁荣，设置了箱根关所。明治以后，作为富士箱根伊豆国立公园的一部分发展成为观光胜地。',
        },
        culture_festivals: {
          [Language.JA]: '箱根大文字焼き、芦ノ湖夏まつり、箱根駅伝、温泉神社例祭など、四季を通じて様々なイベントが開催されます。',
          [Language.EN]: 'Various events are held throughout the seasons, including Hakone Daimonji Yaki bonfire, Lake Ashi Summer Festival, Hakone Ekiden relay race, and hot spring shrine festivals.',
          [Language.TH]: 'มีการจัดกิจกรรมต่างๆ ตลอดทั้งสี่ฤดู รวมถึงไฟ Hakone Daimonji Yaki เทศกาลฤดูร้อนทะเลสาบอาชิ การวิ่งผลัด Hakone Ekiden และเทศกาลศาลเจ้าน้ำพุร้อน',
          [Language.ZH]: '全年举办各种活动，包括箱根大文字烧篝火节、芦之湖夏祭、箱根接力跑和温泉神社祭等。',
        },
        things_to_do: {
          [Language.JA]: '芦ノ湖遊覧船、大涌谷見学、箱根神社参拝、美術館巡り、温泉巡り、ロープウェイでの空中散歩がおすすめです。',
          [Language.EN]: 'Recommended activities include Lake Ashi sightseeing cruises, visiting Owakudani Valley, Hakone Shrine visits, museum tours, hot spring hopping, and aerial walks via ropeway.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมทะเลสาบอาชิ เยี่ยมชมหุบเขาโอวาคุดานิ เยี่ยมชมศาลเจ้าฮาโกเน่ ทัวร์พิพิธภัณฑ์ แช่น้ำพุร้อน และเดินอากาศผ่านกระเช้า',
          [Language.ZH]: '推荐芦之湖游船、大涌谷参观、箱根神社参拜、美术馆巡游、温泉巡游、索道空中漫步。',
        },
        local_cuisine: {
          [Language.JA]: '黒たまご、温泉まんじゅう、箱根そば、うなぎ料理、地酒、懐石料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including kuro-tamago (black eggs), onsen manju, Hakone soba, eel dishes, local sake, and kaiseki cuisine.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น คุโระทามาโงะ (ไข่ดำ) ออนเซ็นมันจู โซบะฮาโกเน่ อาหารจากปลาไหล สาเกท้องถิ่น และอาหาร kaiseki',
          [Language.ZH]: '可以品尝黑鸡蛋、温泉馒头、箱根荞麦面、鳗鱼料理、地酒、怀石料理。',
        },
        access: {
          [Language.JA]: '新宿から小田急線で約85分。箱根登山電車、ケーブルカー、ロープウェイを使った周遊が便利です。',
          [Language.EN]: 'About 85 minutes from Shinjuku via Odakyu Line. Convenient sightseeing using the Hakone Tozan Railway, cable car, and ropeway.',
          [Language.TH]: 'ประมาณ 85 นาทีจากชินจุกุผ่านสายโอดะคิว สะดวกในการท่องเที่ยวโดยใช้รถไฟ Hakone Tozan เคเบิลคาร์ และกระเช้า',
          [Language.ZH]: '从新宿乘小田急线约85分钟。使用箱根登山电车、缆车和索道周游很方便。',
        },
        image: 'https://picsum.photos/seed/hakone-town/600/300',
      },
      {
        id: 'tokyo-skytree',
        name: { 
          [Language.JA]: '東京スカイツリー', 
          [Language.EN]: 'Tokyo Skytree',
          [Language.TH]: 'โตเกียวสกายทรี',
          [Language.ZH]: '东京晴空塔',
        },
        description: {
          [Language.JA]: '世界で最も高い自立式電波塔の一つ。展望台からは東京のパノラマビューを一望できます。',
          [Language.EN]: 'One of the world\'s tallest freestanding broadcasting towers. Its observation decks offer panoramic views of Tokyo.',
          [Language.TH]: 'หนึ่งในหอส่งสัญญาณกระจายเสียงอิสระที่สูงที่สุดในโลก จุดชมวิวของหอคอยนี้มองเห็นทัศนียภาพอันงดงามของโตเกียว',
          [Language.ZH]: '世界上最高的独立式广播塔之一。其观景台可欣赏东京全景。',
        },
        history: {
          [Language.JA]: '2012年に竣工した東京の新ランドマーク。高さ634mで、地上デジタル放送の電波塔として建設されました。スカイツリータウンも一体開発され、商業施設と文化施設が充実しています。',
          [Language.EN]: 'Completed in 2012 as Tokyo\'s new landmark tower. Standing at 634 meters, it was built as a broadcasting tower for digital terrestrial television. The integrated development includes Tokyo Skytree Town with shopping and cultural facilities.',
          [Language.TH]: 'สำเร็จในปี 2012 เป็นสถานที่สำคัญใหม่ของโตเกียว สูง 634 เมตร สร้างขึ้นเป็นหอส่งสัญญาณสำหรับโทรทัศน์ดิจิทัลภาคพื้นดิน การพัฒนาแบบรวมรวมถึงโตเกียวสกายทรีทาวน์พร้อมสิ่งอำนวยความสะดวกด้านการช้อปปิ้งและวัฒนธรรม',
          [Language.ZH]: '2012年竣工，成为东京新的地标性建筑。高634米，作为地面数字电视的广播塔而建造。综合开发包括东京晴空塔城，设有购物和文化设施。',
        },
        culture_festivals: {
          [Language.JA]: 'イルミネーション、七夕祭り、季節限定のライティング、特別展示会などが年間を通じて開催されています。東京スカイツリータウンでは様々なイベントも実施されています。',
          [Language.EN]: 'Year-round events include illuminations, Tanabata Festival, seasonal lighting displays, and special exhibitions. Tokyo Skytree Town also hosts various events.',
          [Language.TH]: 'กิจกรรมตลอดปี ได้แก่ การประดับไฟ เทศกาลทานาบาตะ การแสดงแสงตามฤดูกาล และนิทรรศการพิเศษ โตเกียวสกายทรีทาวน์ยังจัดกิจกรรมต่างๆ ด้วย',
          [Language.ZH]: '全年举办各种活动，包括彩灯装饰、七夕节、季节性灯光表演和特别展览。东京晴空塔城也举办各种活动。',
        },
        things_to_do: {
          [Language.JA]: '展望台からの絶景、すみだ水族館、プラネタリウム、ソラマチでのショッピング、レストランでの食事、写真撮影がおすすめです。',
          [Language.EN]: 'Enjoy spectacular views from observation decks, Sumida Aquarium, planetarium, shopping at Solamachi, dining at restaurants, and photography.',
          [Language.TH]: 'เพลิดเพลินกับวิวอันงดงามจากจุดชมวิว พิพิธภัณฑ์สัตว์น้ำสุมิดะ แพลนิแทเรียม ช้อปปิ้งที่โซลามาจิ รับประทานอาหารที่ร้านอาหาร และถ่ายภาพ',
          [Language.ZH]: '推荐从观景台欣赏壮观景色、参观墨田水族馆、天象馆、在晴空街道购物、在餐厅用餐、摄影。',
        },
        local_cuisine: {
          [Language.JA]: 'スカイツリータウンには江戸前寿司、天ぷら、すき焼き、和菓子など、伝統的な東京料理から国際料理まで幅広いレストランがあります。',
          [Language.EN]: 'Tokyo Skytree Town offers a wide range of restaurants, from traditional Tokyo cuisine like Edomae sushi, tempura, sukiyaki, and wagashi sweets to international foods.',
          [Language.TH]: 'โตเกียวสกายทรีทาวน์มีร้านอาหารหลากหลาย ตั้งแต่อาหารญี่ปุ่นแบบดั้งเดิม เช่น ซูชิเอโดะมาเอะ เทมปุระ สุกี้ยากิ และขนมวากาชิ ไปจนถึงอาหารนานาชาติ',
          [Language.ZH]: '东京晴空塔城拥有各种餐厅，从江户前寿司、天妇罗、寿喜烧、和果子等传统东京料理到国际美食。',
        },
        access: {
          [Language.JA]: '東武スカイツリーライン業平橋駅またはとうきょうスカイツリー駅から徒歩1分。都営浅草線・東京メトロ半蔵門線押上駅からも徒歩3分です。',
          [Language.EN]: '1 minute walk from Narihirabashi Station on Tobu Skytree Line or Tokyo Skytree Station. Also 3 minutes walk from Oshiage Station on Toei Asakusa Line and Tokyo Metro Hanzomon Line.',
          [Language.TH]: 'เดิน 1 นาทีจากสถานีนาริฮิราบาชิสายโทบุสกายทรีหรือสถานีโตเกียวสกายทรี ยังสามารถเดิน 3 นาทีจากสถานีโอชิอาเงะสายโทเออาซากุซ่าและโตเกียวเมโทรฮันโซมง',
          [Language.ZH]: '从东武晴空塔线业平桥站或东京晴空塔站步行1分钟。从都营浅草线、东京地铁半藏门线押上站也仅需步行3分钟。',
        },
        image: 'https://picsum.photos/seed/tokyo-skytree/600/300',
      },
      {
        id: 'kamakura',
        name: {
          [Language.JA]: '鎌倉市',
          [Language.EN]: 'Kamakura City',
          [Language.TH]: 'เมืองคามาคุระ',
          [Language.ZH]: '镰仓市',
        },
        description: {
          [Language.JA]: '鎌倉時代の古都として知られる歴史都市。鎌倉大仏や多くの寺社仏閣、古い街並みが魅力です。',
          [Language.EN]: 'A historic city known as the ancient capital of the Kamakura period. Famous for the Great Buddha of Kamakura, numerous temples and shrines, and old streetscapes.',
          [Language.TH]: 'เมืองประวัติศาสตร์ที่รู้จักในฐานะเมืองหลวงโบราณของยุคคามาคุระ มีชื่อเสียงจากพระพุทธรูปใหญ่คามาคุระ วัดวาอารามมากมาย และย่านเมืองเก่า',
          [Language.ZH]: '以镰仓时代古都著称的历史城市。以镰仓大佛、众多寺院神社和古老街景闻名。',
        },
        history: {
          [Language.JA]: '1192年に源頼朝が鎌倉幕府を開いて以来、約150年間日本の政治の中心地として栄えました。禅宗文化が花開いた地としても知られています。',
          [Language.EN]: 'Flourished as Japan\'s political center for about 150 years since Minamoto no Yoritomo established the Kamakura shogunate in 1192. Also known as the birthplace of Zen Buddhist culture.',
          [Language.TH]: 'เจริญรุ่งเรืองเป็นศูนย์กลางการเมืองของญี่ปุ่นเป็นเวลาประมาณ 150 ปี นับตั้งแต่มินาโมโตะ โนะ โยริโทโม่ ก่อตั้งโชกุนคามาคุระในปี 1192 ยังเป็นที่รู้จักในฐานะบ้านเกิดของวัฒนธรรมพุทธเซน',
          [Language.ZH]: '自1192年源赖朝建立镰仓幕府以来，作为日本政治中心繁荣了约150年。也以禅宗文化发源地而闻名。',
        },
        culture_festivals: {
          [Language.JA]: '鎌倉祭り、長谷観音のご開帳、竹林ライトアップ、あじさい祭り、流鏑馬神事など、季節ごとの伝統行事が開催されます。',
          [Language.EN]: 'Traditional seasonal events include Kamakura Festival, Hase Kannon special exhibitions, bamboo grove illuminations, hydrangea festival, and horseback archery ceremonies.',
          [Language.TH]: 'งานประเพณีตามฤดูกาล รวมถึงเทศกาลคามาคุระ การเปิดชมพิเศษหะเสะคันนง การประดับไฟป่าไผ่ เทศกาลดอกไฮเดรนเยีย และพิธีกรรมยิงธนูบนหลังม้า',
          [Language.ZH]: '季节性传统活动包括镰仓祭、长谷观音开帐、竹林灯光秀、紫阳花节、流镝马神事等。',
        },
        things_to_do: {
          [Language.JA]: '鎌倉大仏見学、建長寺・円覚寺参拝、長谷寺のあじさい観賞、竹林散策、小町通りでの食べ歩き、江ノ電での観光がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting the Great Buddha, touring Kenchoji and Engakuji temples, viewing hydrangeas at Hasedera Temple, walking through bamboo groves, food hopping on Komachi Street, and sightseeing by Enoden train.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมพระพุทธรูปใหญ่ เที่ยวชมวัดเค็นโชจิและเอ็งกาคุจิ ชมดอกไฮเดรนเยียที่วัดหะเสะเดระ เดินเล่นในป่าไผ่ ชิมอาหารตามถนนโคมาจิ และท่องเที่ยวโดยรถไฟเอโนะเด็น',
          [Language.ZH]: '推荐参观大佛、建长寺和圆觉寺参拜、长谷寺观赏紫阳花、竹林散步、小町通美食、江之电观光。',
        },
        local_cuisine: {
          [Language.JA]: 'しらす丼、鎌倉野菜、精進料理、あんみつ、鎌倉ビール、鳩サブレーなど、地元の食材を活かした料理やお菓子が人気です。',
          [Language.EN]: 'Popular dishes include shirasu (whitebait) rice bowls, Kamakura vegetables, Buddhist vegetarian cuisine, anmitsu, Kamakura beer, and Hato Sabure cookies.',
          [Language.TH]: 'อาหารยอดนิยม ได้แก่ ข้าวหน้าปลาชิราสุ ผักคามาคุระ อาหารเจแบบพุทธ อันมิตสึ เบียร์คามาคุระ และคุกกี้ฮาโตะซาบุเระ',
          [Language.ZH]: '人气美食包括吻仔鱼盖饭、镰仓蔬菜、精进料理、蜜豆、镰仓啤酒、鸽子饼干等。',
        },
        access: {
          [Language.JA]: 'JR東海道本線、小田急江ノ島線、江ノ島電鉄でアクセス。東京から約1時間で到着します。',
          [Language.EN]: 'Accessible via JR Tokaido Line, Odakyu Enoshima Line, and Enoshima Electric Railway. About 1 hour from Tokyo.',
          [Language.TH]: 'เข้าถึงได้ทางสาย JR โทไคโด สายโอดะคิวเอโนชิมะ และรถไฟไฟฟ้าเอโนชิมะ ใช้เวลาประมาณ 1 ชั่วโมงจากโตเกียว',
          [Language.ZH]: '通过JR东海道线、小田急江之岛线、江之岛电铁可达。从东京约1小时到达。',
        },
        image: 'https://picsum.photos/seed/kamakura-city/600/300',
      },
      {
        id: 'nikko',
        name: {
          [Language.JA]: '日光市',
          [Language.EN]: 'Nikko City',
          [Language.TH]: 'เมืองนิกโก',
          [Language.ZH]: '日光市',
        },
        description: {
          [Language.JA]: '世界遺産の東照宮を中心とした歴史と自然の宝庫。中禅寺湖、華厳の滝など美しい自然景観も魅力です。',
          [Language.EN]: 'A treasure trove of history and nature centered around the World Heritage Toshogu Shrine. Beautiful natural scenery including Lake Chuzenji and Kegon Falls.',
          [Language.TH]: 'สมบัติแห่งประวัติศาสตร์และธรรมชาติที่มีศาลเจ้าโทโชกุซึ่งเป็นมรดกโลกเป็นศูนย์กลาง มีทัศนียภาพธรรมชาติที่สวยงาม รวมถึงทะเลสาบจูเซ็นจิและน้ำตกเคงง',
          [Language.ZH]: '以世界遗产东照宫为中心的历史和自然宝库。包括中禅寺湖、华严瀑布等美丽自然景观。',
        },
        history: {
          [Language.JA]: '奈良時代から修験道の聖地として知られ、江戸時代に徳川家康の霊廟である東照宮が建立されました。1999年に世界文化遺産に登録されています。',
          [Language.EN]: 'Known as a sacred site for mountain asceticism since the Nara period, Toshogu Shrine was built as the mausoleum of Tokugawa Ieyasu during the Edo period. Registered as a World Cultural Heritage site in 1999.',
          [Language.TH]: 'เป็นที่รู้จักในฐานะสถานที่ศักดิ์สิทธิ์สำหรับการบำเพ็ญตบะบนภูเขาตั้งแต่สมัยนาระ ศาลเจ้าโทโชกุสร้างขึ้นเป็นสุสานของโทกุงาวะ อิเอยาสุในสมัยเอโดะ ขึ้นทะเบียนเป็นมรดกวัฒนธรรมโลกในปี 1999',
          [Language.ZH]: '自奈良时代起就作为修验道圣地而闻名，江户时代建立了作为德川家康陵墓的东照宫。1999年被登录为世界文化遗产。',
        },
        culture_festivals: {
          [Language.JA]: '春秋渡御祭、百物揃千人武者行列、日光夏祭り、神楽祭、もみじまつりなど、四季を通じて伝統的な行事が開催されます。',
          [Language.EN]: 'Traditional events throughout the seasons include Spring and Autumn Grand Festivals, Thousand Warrior Procession, Nikko Summer Festival, Kagura Festival, and Maple Festival.',
          [Language.TH]: 'งานประเพณีตลอดทั้งสี่ฤดู รวมถึงเทศกาลใหญ่ฤดูใบไม้ผลิและใบไม้ร่วง ขบวนนักรบพันคน เทศกาลฤดูร้อนนิกโก เทศกาลคะกุระ และเทศกาลใบเมเปิล',
          [Language.ZH]: '全年举办春秋大祭、千人武者行列、日光夏祭、神乐祭、红叶节等传统活动。',
        },
        things_to_do: {
          [Language.JA]: '東照宮参拝、華厳の滝見学、中禅寺湖遊覧、いろは坂ドライブ、奥日光散策、温泉巡りがおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Toshogu Shrine, viewing Kegon Falls, Lake Chuzenji cruises, driving Irohazaka winding road, exploring Oku-Nikko, and hot spring hopping.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ การไปสักการะศาลเจ้าโทโชกุ ชมน้ำตกเคงง ล่องเรือทะเลสาบจูเซ็นจิ ขับรถตามถนนคดเคี้ยวอิโรฮาซาคะ สำรวจโอคุนิกโก และแช่น้ำพุร้อนหลายแห่ง',
          [Language.ZH]: '推荐参拜东照宫、观赏华严瀑布、中禅寺湖游览、伊吕波坂驾车、奥日光散策、温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: '湯波料理、日光そば、だんご、羊羹、地酒、奥日光の山菜料理が楽しめます。',
          [Language.EN]: 'Enjoy local specialties including yuba (tofu skin) dishes, Nikko soba, dango dumplings, yokan sweets, local sake, and mountain vegetable dishes from Oku-Nikko.',
          [Language.TH]: 'เพลิดเพลินกับอาหารท้องถิ่น เช่น อาหารยูบะ (หนังเต้าหู้) โซบะนิกโก ขนมดังโกะ ขนมโยคัง สาเกท้องถิ่น และอาหารจากผักภูเขาของโอคุนิกโก',
          [Language.ZH]: '可以品尝湯波料理、日光荞麦面、团子、羊羹、地酒、奥日光的山菜料理。',
        },
        access: {
          [Language.JA]: '浅草から東武日光線で約2時間。新宿からJR日光線経由でもアクセス可能です。',
          [Language.EN]: 'About 2 hours from Asakusa via Tobu Nikko Line. Also accessible from Shinjuku via JR Nikko Line.',
          [Language.TH]: 'ประมาณ 2 ชั่วโมงจากอาซากุซ่าผ่านสายโทบุนิกโก สามารถเข้าถึงได้จากชินจุกุผ่านสาย JR นิกโกด้วย',
          [Language.ZH]: '从浅草经东武日光线约2小时。也可从新宿经JR日光线到达。',
        },
        image: 'https://picsum.photos/seed/nikko-city/600/300',
      },
      {
        id: 'yokohama',
        name: {
          [Language.JA]: '横浜市',
          [Language.EN]: 'Yokohama City',
          [Language.TH]: 'เมืองโยโกฮาม่า',
          [Language.ZH]: '横滨市',
        },
        description: {
          [Language.JA]: '神奈川県の県庁所在地で、日本最大の港湾都市。異国情緒あふれる港町として、みなとみらい21や中華街が人気です。',
          [Language.EN]: 'The capital of Kanagawa Prefecture and Japan\'s largest port city. Known for its exotic atmosphere as a port town, with popular areas like Minato Mirai 21 and Chinatown.',
          [Language.TH]: 'เมืองหลวงของจังหวัดคานากาว่าและเมืองท่าที่ใหญ่ที่สุดของญี่ปุ่น มีชื่อเสียงจากบรรยากาศแปลกตาในฐานะเมืองท่า มีพื้นที่ยอดนิยมอย่างมินาโตะ มิไร 21 และไชน่าทาวน์',
          [Language.ZH]: '神奈川县县厅所在地，日本最大的港口城市。以异国情调的港口城市而闻名，港未来21和中华街很受欢迎。',
        },
        history: {
          [Language.JA]: '1859年の開港以来、日本の近代化の玄関口として発展。多くの外国人が居住し、西洋文化が根付いた国際都市として成長しました。',
          [Language.EN]: 'Developed as the gateway to Japan\'s modernization since its port opening in 1859. Grew into an international city where many foreigners resided and Western culture took root.',
          [Language.TH]: 'พัฒนาเป็นประตูสู่การสมัยใหม่ของญี่ปุ่นนับตั้งแต่เปิดท่าเรือในปี 1859 เติบโตเป็นเมืองนานาชาติที่มีชาวต่างชาติจำนวนมากอาศัยอยู่และวัฒนธรรมตะวันตกหยั่งราก',
          [Language.ZH]: '自1859年开港以来，作为日本现代化的门户发展。成长为许多外国人居住、西方文化扎根的国际城市。',
        },
        culture_festivals: {
          [Language.JA]: '横浜開港祭、ピカチュウ大量発生チュウ、横浜中華街春節、神奈川新聞花火大会、よこはま国際フェスタなど、国際色豊かなイベントが開催されます。',
          [Language.EN]: 'International events include Yokohama Port Opening Festival, Pikachu Outbreak, Yokohama Chinatown Spring Festival, Kanagawa Shimbun Fireworks, and Yokohama International Festa.',
          [Language.TH]: 'งานนานาชาติ รวมถึงเทศกาลเปิดท่าเรือโยโกฮาม่า การระบาดของปิกาจู เทศกาลตรุษจีนไชน่าทาวน์โยโกฮาม่า ดอกไม้ไฟคานากาว่าชิมบุน และเฟสต้านานาชาติโยโกฮาม่า',
          [Language.ZH]: '国际性活动包括横滨开港祭、皮卡丘大量发生、横滨中华街春节、神奈川新闻花火大会、横滨国际节等。',
        },
        things_to_do: {
          [Language.JA]: 'みなとみらい21散策、中華街での食事、赤レンガ倉庫でのショッピング、コスモワールド、山下公園での散歩、カップヌードルミュージアム見学がおすすめです。',
          [Language.EN]: 'Recommended activities include exploring Minato Mirai 21, dining in Chinatown, shopping at Red Brick Warehouse, visiting Cosmo World, strolling in Yamashita Park, and touring the Cup Noodles Museum.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ สำรวจมินาโตะ มิไร 21 รับประทานอาหารในไชน่าทาวน์ ช้อปปิ้งที่โกดังอิฐแดง เยี่ยมชม Cosmo World เดินเล่นในสวนยามาชิตะ และทัวร์พิพิธภัณฑ์บะหมี่กึ่งสำเร็จรูป',
          [Language.ZH]: '推荐探索港未来21、中华街用餐、红砖仓库购物、游览宇宙世界、山下公园散步、参观杯面博物馆。',
        },
        local_cuisine: {
          [Language.JA]: '中華料理、横浜中華街の肉まん、ナポリタン、アイスクリーム、横浜ビール、シウマイ弁当などが名物です。',
          [Language.EN]: 'Local specialties include Chinese cuisine, steamed pork buns from Chinatown, Napolitan pasta, ice cream, Yokohama beer, and shumai bento.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ อาหารจีน ซาลาเปาหมูจากไชน่าทาวน์ พาสต้านาโปลิตัน ไอศกรีม เบียร์โยโกฮาม่า และเบนโตะชูไมย์',
          [Language.ZH]: '当地特色包括中华料理、中华街肉包、那不勒斯面、冰淇淋、横滨啤酒、烧卖便当等。',
        },
        access: {
          [Language.JA]: '東京から電車で約30分。JR、私鉄、地下鉄が充実しており、市内各地へのアクセスが良好です。',
          [Language.EN]: 'About 30 minutes by train from Tokyo. Excellent access throughout the city with well-developed JR, private railway, and subway systems.',
          [Language.TH]: 'ประมาณ 30 นาทีโดยรถไฟจากโตเกียว การเข้าถึงทั่วเมืองยอดเยี่ยมด้วยระบบ JR รถไฟเอกชน และรถไฟใต้ดินที่พัฒนาดี',
          [Language.ZH]: '从东京乘火车约30分钟。JR、私铁、地铁系统发达，市内各地交通便利。',
        },
        image: 'https://picsum.photos/seed/yokohama-city/600/300',
      },
      {
        id: 'chiba',
        name: {
          [Language.JA]: '千葉市',
          [Language.EN]: 'Chiba City',
          [Language.TH]: 'เมืองชิบะ',
          [Language.ZH]: '千叶市',
        },
        description: {
          [Language.JA]: '千葉県の県庁所在地で、東京湾に面した近代的な都市。世界最長の懸垂式モノレールや、千葉ポートタワーからの夜景で知られています。',
          [Language.EN]: 'The capital of Chiba Prefecture, a modern city facing Tokyo Bay. Known for the world\'s longest suspended monorail and night views from Chiba Port Tower.',
          [Language.TH]: 'เมืองหลวงของจังหวัดชิบะ เป็นเมืองทันสมัยที่หันหน้าไปทางอ่าวโตเกียว มีชื่อเสียงด้านโมโนเรลแบบแขวนที่ยาวที่สุดในโลกและทิวทัศน์ยามค่ำคืนจากหอคอยท่าเรือชิบะ',
          [Language.ZH]: '千叶县县厅所在地，面向东京湾的现代化都市。以世界最长的悬挂式单轨电车和千叶港塔的夜景而闻名。',
        },
        history: {
          [Language.JA]: '古くは城下町として栄え、第二次世界大戦後に大きく再建されました。現在では、首都圏の主要な住宅・工業都市として発展しています。',
          [Language.EN]: 'Flourished as a castle town in the past and was largely rebuilt after World War II. It has now developed into a major residential and industrial city in the Greater Tokyo Area.',
          [Language.TH]: 'เคยเจริญรุ่งเรืองในฐานะเมืองปราสาทและได้รับการสร้างขึ้นใหม่ส่วนใหญ่หลังสงครามโลกครั้งที่สอง ปัจจุบันได้พัฒนาเป็นเมืองที่อยู่อาศัยและอุตสาหกรรมที่สำคัญในเขตมหานครโตเกียว',
          [Language.ZH]: '过去曾作为城下町繁荣，第二次世界大战后进行了大规模重建。现已发展成为首都圈的主要住宅和工业城市。',
        },
        culture_festivals: {
          [Language.JA]: '千葉市民花火大会、千葉ポートタワーのイルミネーション、季節ごとの花のフェスティバルが開催されます。',
          [Language.EN]: 'Chiba Citizens\' Fireworks Festival, Chiba Port Tower illuminations, and various seasonal flower festivals are held.',
          [Language.TH]: 'มีการจัดเทศกาลดอกไม้ไฟพลเมืองชิบะ การประดับไฟที่หอคอยท่าเรือชิบะ และเทศกาลดอกไม้ตามฤดูกาลต่างๆ',
          [Language.ZH]: '举办千叶市民烟花大会、千叶港塔灯饰、季节性花卉节等活动。',
        },
        things_to_do: {
          [Language.JA]: '千葉ポートタワー訪問、稲毛海浜公園散策、千葉都市モノレール乗車、千葉市美術館見学がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Chiba Port Tower, exploring Inage Seaside Park, riding the Chiba Urban Monorail, and visiting the Chiba City Museum of Art.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ การเยี่ยมชมหอคอยท่าเรือชิบะ การสำรวจสวนสาธารณะชายทะเลอินาเกะ การนั่งรถไฟโมโนเรลเมืองชิบะ และการเยี่ยมชมพิพิธภัณฑ์ศิลปะเมืองชิบะ',
          [Language.ZH]: '推荐参观千叶港塔、稻毛海滨公园散步、乘坐千叶都市单轨电车、参观千叶市美术馆。',
        },
        local_cuisine: {
          [Language.JA]: '千葉名産の落花生、東京湾の新鮮な魚介類、太巻き寿司が有名です。',
          [Language.EN]: 'Famous for peanuts (a Chiba specialty), fresh seafood from Tokyo Bay, and Futomaki-zushi (thick sushi rolls).',
          [Language.TH]: 'มีชื่อเสียงด้านถั่วลิสง (ของขึ้นชื่อของชิบะ) อาหารทะเลสดจากอ่าวโตเกียว และฟุโตมากิซูชิ (ซูชิโรลหนา)',
          [Language.ZH]: '以千叶特产花生、东京湾的新鲜海鲜和粗卷寿司而闻名。',
        },
        access: {
          [Language.JA]: '東京駅からJR総武線で約40分です。',
          [Language.EN]: 'About 40 minutes from Tokyo Station by JR Sobu Line.',
          [Language.TH]: 'ใช้เวลาเดินทางประมาณ 40 นาทีจากสถานีโตเกียวโดยรถไฟ JR สายโซบุ',
          [Language.ZH]: '从东京站乘坐JR总武线约40分钟。',
        },
        image: 'https://picsum.photos/seed/chiba-city/600/300',
      },
      {
        id: 'saitama',
        name: {
          [Language.JA]: 'さいたま市',
          [Language.EN]: 'Saitama City',
          [Language.TH]: 'เมืองไซตามะ',
          [Language.ZH]: '埼玉市',
        },
        description: {
          [Language.JA]: '埼玉県の県庁所在地で、豊かな歴史と美しい公園を持つ近代的な都市。大宮盆栽村、鉄道博物館、さいたまスーパーアリーナで知られています。',
          [Language.EN]: 'The capital of Saitama Prefecture, a modern city with a rich history, known for the Omiya Bonsai Village, the Railway Museum, and Saitama Super Arena.',
          [Language.TH]: 'เมืองหลวงของจังหวัดไซตามะ เป็นเมืองทันสมัยที่มีประวัติศาสตร์อันยาวนานและเป็นที่รู้จักจากหมู่บ้านบอนไซโอมิยะ พิพิธภัณฑ์รถไฟ และไซตามะซูเปอร์อารีน่า',
          [Language.ZH]: '埼玉县县厅所在地，一个拥有丰富历史和美丽公园的现代化城市。以大宫盆栽村、铁道博物馆和埼玉超级竞技场而闻名。',
        },
        history: {
          [Language.JA]: '2001年に浦和、大宮、与野の3市が合併して誕生しました。大宮は江戸時代に主要な宿場町でした。',
          [Language.EN]: 'Formed in 2001 by the merger of Urawa, Omiya, and Yono cities. Omiya was a major post town in the Edo period.',
          [Language.TH]: 'ก่อตั้งขึ้นในปี 2001 จากการรวมตัวของเมืองอุราวะ โอมิยะ และโยโนะ โอมิยะเคยเป็นเมืองพักแรมที่สำคัญในสมัยเอโดะ',
          [Language.ZH]: '2001年由浦和、大宫、与野三市合并而成。大宫在江户时代是重要的驿站城镇。',
        },
        culture_festivals: {
          [Language.JA]: '大宮祭り、浦和よさこい、大盆栽祭りが開催されます。',
          [Language.EN]: 'Omiya Festival, Urawa Yosakoi, and the Great Bonsai Festival are held.',
          [Language.TH]: 'มีการจัดเทศกาลโอมิยะ เทศกาลอุราวะโยซาโคอิ และเทศกาลบอนไซที่ยิ่งใหญ่',
          [Language.ZH]: '举办大宫祭、浦和夜来舞节和大盆栽节。',
        },
        things_to_do: {
          [Language.JA]: '大宮盆栽村の散策、鉄道博物館の見学、さいたまスーパーアリーナでのイベント鑑賞、大宮公園での散策がおすすめです。',
          [Language.EN]: 'Recommended activities include exploring the Omiya Bonsai Village, visiting the Railway Museum, seeing an event at Saitama Super Arena, and walking through Omiya Park.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ การสำรวจหมู่บ้านบอนไซโอมิยะ การเยี่ยมชมพิพิธภัณฑ์รถไฟ การชมงานอีเวนต์ที่ไซตามะซูเปอร์อารีน่า และการเดินเล่นในสวนโอมิยะ',
          [Language.ZH]: '推荐活动包括探索大宫盆栽村、参观铁道博物馆、在埼玉超级竞技场观看活动以及在大宫公园散步。',
        },
        local_cuisine: {
          [Language.JA]: '浦和のうなぎ料理、冷汁うどん、さつまいものお菓子が有名です。',
          [Language.EN]: 'Famous for Unagi (eel) dishes from Urawa, Hiyajiru udon (cold udon with soup), and sweet potato sweets.',
          [Language.TH]: 'มีชื่อเสียงด้านอาหารจากปลาไหล (อุนางิ) จากอุราวะ ฮิยาจิรุอุด้ง (อุด้งเย็นพร้อมซุป) และขนมหวานจากมันเทศ',
          [Language.ZH]: '以浦和的鳗鱼料理、冷汤乌冬面和红薯甜点而闻名。',
        },
        access: {
          [Language.JA]: '東京駅からJR宇都宮線または高崎線で約30分です。',
          [Language.EN]: 'About 30 minutes from Tokyo Station by JR Utsunomiya Line or Takasaki Line.',
          [Language.TH]: 'ใช้เวลาเดินทางประมาณ 30 นาทีจากสถานีโตเกียวโดยรถไฟ JR สายอุสึโนมิยะหรือสายทาคาซากิ',
          [Language.ZH]: '从东京站乘坐JR宇都宫线或高崎线约30分钟。',
        },
        image: 'https://picsum.photos/seed/saitama-city/600/300',
      },
      {
        id: 'mount-fuji',
        name: {
          [Language.JA]: '富士山',
          [Language.EN]: 'Mount Fuji',
          [Language.TH]: 'ภูเขาไฟฟูจิ',
          [Language.ZH]: '富士山',
        },
        description: {
          [Language.JA]: '日本最高峰で最も象徴的な山。ユネスコの世界遺産であり、登山や観光の人気の目的地です。',
          [Language.EN]: 'Japan\'s highest and most iconic mountain, a UNESCO World Heritage site. A symbol of Japan, it is a popular destination for climbing and sightseeing.',
          [Language.TH]: 'ภูเขาที่สูงที่สุดและเป็นสัญลักษณ์ที่สุดของญี่ปุ่น ได้รับการขึ้นทะเบียนเป็นมรดกโลกโดยยูเนสโก เป็นสัญลักษณ์ของญี่ปุ่นและเป็นจุดหมายปลายทางยอดนิยมสำหรับการปีนเขาและการท่องเที่ยว',
          [Language.ZH]: '日本最高、最具标志性的山峰，联合国教科文组织世界遗产。作为日本的象征，是登山和观光的热门目的地。',
        },
        history: {
          [Language.JA]: '何世紀にもわたって神聖な山として崇められてきた活火山。日本の歴史を通じて数え切れないほどの芸術家や詩人にインスピレーションを与えてきました。',
          [Language.EN]: 'An active volcano that has been worshipped as a sacred mountain for centuries. It has inspired countless artists and poets throughout Japanese history.',
          [Language.TH]: 'ภูเขาไฟที่ยังคุกรุ่นซึ่งได้รับการเคารพบูชาในฐานะภูเขาศักดิ์สิทธิ์มานานหลายศตวรรษ เป็นแรงบันดาลใจให้กับศิลปินและกวีจำนวนนับไม่ถ้วนตลอดประวัติศาสตร์ญี่ปุ่น',
          [Language.ZH]: '一座活火山，几个世纪以来一直被尊为圣山。在日本历史上，它激励了无数的艺术家和诗人。',
        },
        culture_festivals: {
          [Language.JA]: '富士芝桜まつり、富士山本宮浅間大社祭、麓での様々な火祭りが開催されます。',
          [Language.EN]: 'Fuji Shibazakura Festival, Fujisan Hongu Sengen Taisha Festival, and various fire festivals at its base are held.',
          [Language.TH]: 'มีการจัดเทศกาลฟูจิชิบะซากุระ เทศกาลฟูจิซังฮงงูเซ็นเก็นไทฉะ และเทศกาลไฟต่างๆ ที่เชิงเขา',
          [Language.ZH]: '举办富士芝樱节、富士山本宫浅间大社祭以及山脚下的各种火节。',
        },
        things_to_do: {
          [Language.JA]: '公式シーズン（7月〜9月）の登山、富士五湖の訪問、忠霊塔などの様々な地点からの眺め、冬には近くのリゾートでのスキーがおすすめです。',
          [Language.EN]: 'Recommended activities include climbing during the official season (July-September), visiting the Fuji Five Lakes, enjoying views from various points like Chureito Pagoda, and skiing at nearby resorts in winter.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ การปีนเขาในช่วงฤดูที่เป็นทางการ (กรกฎาคม-กันยายน) การเยี่ยมชมทะเลสาบฟูจิทั้งห้า การชมทิวทัศน์จากจุดต่างๆ เช่น เจดีย์ชูเรโตะ และการเล่นสกีที่รีสอร์ทใกล้เคียงในฤดูหนาว',
          [Language.ZH]: '推荐活动包括在官方季节（7月至9月）登山、游览富士五湖、从忠灵塔等不同地点欣赏风景以及冬季在附近度假村滑雪。',
        },
        local_cuisine: {
          [Language.JA]: 'ほうとう（山梨名物）、富士宮やきそば、吉田うどんが有名です。',
          [Language.EN]: 'Famous for Hoto noodles (a Yamanashi specialty), Fujinomiya yakisoba, and Yoshida udon.',
          [Language.TH]: 'มีชื่อเสียงด้านเส้นโฮโต (ของขึ้นชื่อของยามานาชิ) ฟูจิโนะมิยะยากิโซบะ และโยชิดะอุด้ง',
          [Language.ZH]: '以ほうとう面（山梨特产）、富士宫炒面和吉田乌冬面而闻名。',
        },
        access: {
          [Language.JA]: '東京からバスまたは電車でアクセス可能で、登山シーズンには5合目への直通バスがあります。',
          [Language.EN]: 'Accessible from Tokyo by bus or train, with direct buses to the 5th station during climbing season.',
          [Language.TH]: 'สามารถเดินทางจากโตเกียวโดยรถบัสหรือรถไฟ และมีรถบัสตรงไปยังสถานีที่ 5 ในช่วงฤดูปีนเขา',
          [Language.ZH]: '可从东京乘坐巴士或火车到达，登山季节有直达五合目的巴士。',
        },
        image: 'https://picsum.photos/seed/mount-fuji/600/300',
      },
      {
        id: 'hakone',
        name: {
          [Language.JA]: '箱根',
          [Language.EN]: 'Hakone',
          [Language.TH]: 'ฮาโกเนะ',
          [Language.ZH]: '箱根',
        },
        description: {
          [Language.JA]: '富士箱根伊豆国立公園内にある温泉リゾート地。芦ノ湖、温泉、美術館、そして富士山の絶景で知られる国際的な観光地です。',
          [Language.EN]: 'A hot spring resort area within Fuji-Hakone-Izu National Park. An international tourist destination known for Lake Ashi, hot springs, museums, and spectacular views of Mount Fuji.',
          [Language.TH]: 'พื้นที่รีสอร์ทน้ำพุร้อนในอุทยานแห่งชาติฟูจิ-ฮาโกเนะ-อิซุ สถานที่ท่องเที่ยวระดับนานาชาติที่มีชื่อเสียงด้านทะเลสาบอาชิ น้ำพุร้อน พิพิธภัณฑ์ และวิวที่งดงามของภูเขาฟูจิ',
          [Language.ZH]: '位于富士箱根伊豆国立公园内的温泉度假地。以芦之湖、温泉、美术馆和富士山绝景闻名的国际旅游胜地。',
        },
        history: {
          [Language.JA]: '江戸時代から東海道の宿場町として栄え、明治時代に外国人向けリゾートとして発展しました。現在も国際的な温泉観光地として人気を集めています。',
          [Language.EN]: 'Flourished as a post town on the Tokaido route during the Edo period, and developed as a resort for foreigners during the Meiji era. Still popular today as an international hot spring tourist destination.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองพักแรมบนเส้นทางโทไคโดในสมัยเอโดะ และพัฒนาเป็นรีสอร์ทสำหรับชาวต่างชาติในสมัยเมจิ ปัจจุบันยังคงเป็นที่นิยมในฐานะสถานที่ท่องเที่ยวน้ำพุร้อนระดับนานาชาติ',
          [Language.ZH]: '江户时代作为东海道宿场町繁荣，明治时代发展为外国人度假村。现在仍作为国际温泉观光地备受欢迎。',
        },
        culture_festivals: {
          [Language.JA]: '箱根駅伝、芦ノ湖夏まつり、箱根大名行列、強羅公園のイルミネーション、各温泉地での季節イベントが開催されます。',
          [Language.EN]: 'Events include the Hakone Ekiden relay race, Lake Ashi Summer Festival, Hakone Daimyo Procession, Gora Park illuminations, and seasonal events at various hot spring areas.',
          [Language.TH]: 'มีกิจกรรมต่างๆ รวมถึงการแข่งวิ่งผลัดฮาโกเนะเอกิเด็น เทศกาลฤดูร้อนทะเลสาบอาชิ ขบวนแห่ไดเมียวฮาโกเนะ การประดับไฟสวนโกระ และงานตามฤดูกาลในแหล่งน้ำพุร้อนต่างๆ',
          [Language.ZH]: '举办箱根驿传、芦之湖夏日节、箱根大名行列、强罗公园彩灯、各温泉地的季节活动。',
        },
        things_to_do: {
          [Language.JA]: '芦ノ湖遊覧船、箱根ロープウェイ、温泉巡り、美術館見学、大涌谷観光、旧街道歩きがおすすめです。',
          [Language.EN]: 'Recommended activities include Lake Ashi sightseeing cruises, Hakone Ropeway, hot spring hopping, museum visits, Owakudani sightseeing, and walking the old Tokaido road.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ล่องเรือชมทะเลสาบอาชิ กระเช้าลอยฟ้าฮาโกเนะ แช่น้ำพุร้อนหลายแห่ง เยี่ยมชมพิพิธภัณฑ์ ชมโอวะคุดานิ และเดินตามถนนเก่าโทไคโด',
          [Language.ZH]: '推荐芦之湖游览船、箱根缆车、温泉巡游、美术馆参观、大涌谷观光、旧街道散步。',
        },
        local_cuisine: {
          [Language.JA]: '黒たまご、箱根そば、温泉まんじゅう、寄木細工、地酒、懐石料理が楽しめます。',
          [Language.EN]: 'Local specialties include black eggs, Hakone soba noodles, hot spring manju buns, yosegi marquetry crafts, local sake, and kaiseki cuisine.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ไข่ดำ โซบะฮาโกเนะ ขนมมันจูน้ำพุร้อน งานฝีมือโยเซกิ สาเกท้องถิ่น และอาหารไคเซกิ',
          [Language.ZH]: '可以品尝黑蛋、箱根荞麦面、温泉馒头、寄木细工、地酒、怀石料理。',
        },
        access: {
          [Language.JA]: '新宿から小田急ロマンスカーで約85分。箱根フリーパスを利用すると便利です。',
          [Language.EN]: 'About 85 minutes from Shinjuku by Odakyu Romance Car. The Hakone Free Pass is convenient for getting around.',
          [Language.TH]: 'ประมาณ 85 นาทีจากชินจูกุโดยรถไฟโรแมนซ์คาร์โอดาคิว สะดวกในการใช้บัตรฮาโกเนะฟรีพาส',
          [Language.ZH]: '从新宿乘坐小田急浪漫特快约85分钟。使用箱根自由通行证很方便。',
        },
        image: 'https://picsum.photos/seed/hakone/600/300',
      },
      {
        id: 'kawagoe',
        name: {
          [Language.JA]: '川越市',
          [Language.EN]: 'Kawagoe City',
          [Language.TH]: 'เมืองคาวาโกเอะ',
          [Language.ZH]: '川越市',
        },
        description: {
          [Language.JA]: '「小江戸」と呼ばれる歴史ある城下町。蔵造りの街並みや時の鐘で知られ、江戸時代の面影を色濃く残す観光地です。',
          [Language.EN]: 'A historic castle town known as "Little Edo." Famous for its traditional warehouse-style buildings and bell tower, preserving strong traces of the Edo period.',
          [Language.TH]: 'เมืองปราสาทประวัติศาสตร์ที่เรียกว่า "เอโดะน้อย" มีชื่อเสียงด้านอาคารสไตล์คลังสินค้าดั้งเดิมและหอระฆัง รักษาร่องรอยของสมัยเอโดะไว้อย่างเข้มข้น',
          [Language.ZH]: '被称为"小江户"的历史悠久的城下町。以藏造街景和时之钟闻名，浓厚保留着江户时代的风貌。',
        },
        history: {
          [Language.JA]: '江戸時代に川越藩の城下町として栄え、江戸への物資供給基地として「江戸の台所」と呼ばれました。明治時代の大火後に建てられた蔵造り建築が今も残っています。',
          [Language.EN]: 'Flourished as the castle town of Kawagoe Domain during the Edo period, called "Edo\'s kitchen" as a supply base for goods to Edo. The warehouse-style buildings constructed after the Meiji-era great fire still remain today.',
          [Language.TH]: 'เจริญรุ่งเรืองในฐานะเมืองปราสาทของแคว้นคาวาโกเอะในสมัยเอโดะ เรียกว่า "ครัวของเอโดะ" เป็นฐานจัดหาสินค้าไปยังเอโดะ อาคารสไตล์คลังสินค้าที่สร้างหลังไฟไหม้ใหญ่ในสมัยเมจิยังคงอยู่จนถึงปัจจุบัน',
          [Language.ZH]: '江户时代作为川越藩的城下町繁荣，作为向江户供应物资的基地被称为"江户的厨房"。明治时代大火后建造的藏造建筑至今仍然保存。',
        },
        culture_festivals: {
          [Language.JA]: '川越まつり、小江戸川越春まつり、川越百万灯夏まつり、時の鐘まつりが開催されます。',
          [Language.EN]: 'Events include Kawagoe Festival, Little Edo Kawagoe Spring Festival, Kawagoe Million Lanterns Summer Festival, and Bell Tower Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลคาวาโกเอะ เทศกาลฤดูใบไม้ผลิเอโดะน้อยคาวาโกเอะ เทศกาลฤดูร้อนโคมไฟล้านดวงคาวาโกเอะ และเทศกาลหอระฆัง',
          [Language.ZH]: '举办川越节、小江户川越春节、川越百万灯夏节、时之钟节。',
        },
        things_to_do: {
          [Language.JA]: '蔵造り街並み散策、時の鐘見学、菓子屋横丁巡り、川越城本丸御殿見学、着物レンタルでの町歩きがおすすめです。',
          [Language.EN]: 'Recommended activities include strolling through warehouse-style streets, visiting the Bell Tower, exploring Candy Lane, touring Kawagoe Castle Honmaru Palace, and town walking in rental kimono.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เดินเล่นตามถนนสไตล์คลังสินค้า เยี่ยมชมหอระฆัง สำรวจตรอกขนม เยี่ยมชมพระราชวังฮนมารุปราสาทคาวาโกเอะ และเดินเล่นในเมืองด้วยชุดกิโมโนเช่า',
          [Language.ZH]: '推荐藏造街道散步、参观时之钟、巡游糖果小巷、参观川越城本丸御殿、租借和服漫步。',
        },
        local_cuisine: {
          [Language.JA]: '川越いも、紫いもソフトクリーム、うなぎ、駄菓子、川越ビール、和菓子が楽しめます。',
          [Language.EN]: 'Local specialties include Kawagoe sweet potatoes, purple sweet potato soft cream, eel dishes, traditional candy, Kawagoe beer, and Japanese sweets.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ มันเทศคาวาโกเอะ ไอศกรีมซอฟต์เสิร์ฟมันเทศม่วง อาหารจากปลาไหล ขนมแบบดั้งเดิม เบียร์คาวาโกเอะ และขนมญี่ปุ่น',
          [Language.ZH]: '可以品尝川越红薯、紫薯软冰淇淋、鳗鱼、传统糖果、川越啤酒、和果子。',
        },
        access: {
          [Language.JA]: '池袋から東武東上線で約30分、または新宿から西武新宿線で約45分です。',
          [Language.EN]: 'About 30 minutes from Ikebukuro on the Tobu Tojo Line, or about 45 minutes from Shinjuku on the Seibu Shinjuku Line.',
          [Language.TH]: 'ประมาณ 30 นาทีจากอิเคะบุกุโระโดยรถไฟสายโทบุโทโจ หรือประมาณ 45 นาทีจากชินจูกุโดยรถไฟสายเซบุชินจูกุ',
          [Language.ZH]: '从池袋乘坐东武东上线约30分钟，或从新宿乘坐西武新宿线约45分钟。',
        },
        image: 'https://picsum.photos/seed/kawagoe/600/300',
      },
      {
        id: 'enoshima',
        name: {
          [Language.JA]: '江の島',
          [Language.EN]: 'Enoshima',
          [Language.TH]: 'เอโนะชิมะ',
          [Language.ZH]: '江之岛',
        },
        description: {
          [Language.JA]: '相模湾に浮かぶ小島で、江島神社や江の島シーキャンドルで有名なリゾート地。湘南の海とともに多くの観光客に愛されています。',
          [Language.EN]: 'A small island in Sagami Bay, famous as a resort destination for Enoshima Shrine and Enoshima Sea Candle. Beloved by many tourists along with the Shonan coast.',
          [Language.TH]: 'เกาะเล็กในอ่าวซากามิ มีชื่อเสียงในฐานะสถานที่ท่องเที่ยวด้วยศาลเจ้าเอโนะชิมะและเทียนทะเลเอโนะชิมะ เป็นที่รักของนักท่องเที่ยวมากมายพร้อมกับชายฝั่งโชนัน',
          [Language.ZH]: '相模湾上的小岛，以江岛神社和江之岛海蜡烛闻名的度假地。与湘南海岸一起深受众多游客喜爱。',
        },
        history: {
          [Language.JA]: '奈良時代から信仰の島として知られ、江戸時代には江島詣でで賑わいました。明治以降は海水浴場やリゾート地として発展しています。',
          [Language.EN]: 'Known as an island of faith since the Nara period, it was bustling with Enoshima pilgrimages during the Edo period. Since the Meiji era, it has developed as a seaside resort.',
          [Language.TH]: 'เป็นที่รู้จักในฐานะเกาะแห่งศรัทธาตั้งแต่สมัยนาระ คึกคักด้วยการแสวงบุญเอโนะชิมะในสมัยเอโดะ นับตั้งแต่สมัยเมจิได้พัฒนาเป็นรีสอร์ทริมทะเล',
          [Language.ZH]: '自奈良时代起就作为信仰之岛而闻名，江户时代因江岛参拜而热闹。明治以后发展为海水浴场和度假地。',
        },
        culture_festivals: {
          [Language.JA]: '江の島灯籠、湘南キャンドル、江の島花火大会、江島神社例大祭、江の島ビール祭りが開催されます。',
          [Language.EN]: 'Events include Enoshima Lantern Festival, Shonan Candle Festival, Enoshima Fireworks Display, Enoshima Shrine Festival, and Enoshima Beer Festival.',
          [Language.TH]: 'มีการจัดงานเทศกาลโคมไฟเอโนะชิมะ เทศกาลเทียนโชนัน การแสดงดอกไม้ไฟเอโนะชิมะ เทศกาลศาลเจ้าเอโนะชิมะ และเทศกาลเบียร์เอโนะชิมะ',
          [Language.ZH]: '举办江之岛灯笼节、湘南蜡烛节、江之岛烟花大会、江岛神社例大祭、江之岛啤酒节。',
        },
        things_to_do: {
          [Language.JA]: '江島神社参拝、江の島シーキャンドル見学、江の島エスカー乗車、新江ノ島水族館見学、海水浴、江の島ビール園がおすすめです。',
          [Language.EN]: 'Recommended activities include visiting Enoshima Shrine, viewing Enoshima Sea Candle, riding Enoshima Escar escalators, visiting New Enoshima Aquarium, swimming, and Enoshima Beer Garden.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ เยี่ยมชมศาลเจ้าเอโนะชิมะ ชมเทียนทะเลเอโนะชิมะ นั่งบันไดเลื่อนเอโนะชิมะเอสคาร์ เยี่ยมชมพิพิธภัณฑ์สัตว์น้ำนิวเอโนะชิมะ ว่ายน้ำ และสวนเบียร์เอโนะชิมะ',
          [Language.ZH]: '推荐参拜江岛神社、观看江之岛海蜡烛、乘坐江之岛扶梯、参观新江之岛水族馆、海水浴、江之岛啤酒园。',
        },
        local_cuisine: {
          [Language.JA]: 'たこせんべい、江の島ビール、しらす丼、江の島プリン、サザエのつぼ焼き、江の島スパイスが楽しめます。',
          [Language.EN]: 'Local specialties include octopus rice crackers, Enoshima beer, whitebait rice bowls, Enoshima pudding, grilled turban shells, and Enoshima spices.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ แครกเกอร์ข้าวปลาหมึก เบียร์เอโนะชิมะ ข้าวหน้าปลาจิ๋ว พุดดิ้งเอโนะชิมะ หอยสังข์ย่าง และเครื่องเทศเอโนะชิมะ',
          [Language.ZH]: '可以品尝章鱼仙贝、江之岛啤酒、银鱼盖饭、江之岛布丁、烤海螺、江之岛香料。',
        },
        access: {
          [Language.JA]: '新宿から小田急線で約1時間、片瀬江ノ島駅下車。江ノ電での観光もおすすめです。',
          [Language.EN]: 'About 1 hour from Shinjuku on the Odakyu Line to Katase-Enoshima Station. Sightseeing by Enoden train is also recommended.',
          [Language.TH]: 'ประมาณ 1 ชั่วโมงจากชินจูกุโดยรถไฟสายโอดาคิวไปยังสถานีคาตาเสะ-เอโนะชิมะ แนะนำให้ท่องเที่ยวโดยรถไฟเอโนเด็น',
          [Language.ZH]: '从新宿乘坐小田急线约1小时至片濑江之岛站。推荐乘坐江之电观光。',
        },
        image: 'https://picsum.photos/seed/enoshima/600/300',
      },
      {
        id: 'kamakura',
        name: {
          [Language.JA]: '鎌倉市',
          [Language.EN]: 'Kamakura City',
          [Language.TH]: 'เมืองคามาคุระ',
          [Language.ZH]: '镰仓市',
        },
        description: {
          [Language.JA]: '歴史的な寺社や大仏で知られる沿岸都市。東京からの日帰り旅行先として人気です。',
          [Language.EN]: 'A coastal city known for its historic temples, shrines, and the Great Buddha statue. Popular day trip from Tokyo.',
          [Language.TH]: 'เมืองชายฝั่งทะเลที่รู้จักกันดีจากวัด ศาลเจ้าเก่าแก่ และพระใหญ่ไดบุตสึ เป็นที่นิยมสำหรับการเดินทางแบบไปเช้าเย็นกลับจากโตเกียว',
          [Language.ZH]: '以其历史悠久的寺庙、神社和镰仓大佛而闻名的沿海城市。是从东京出发的热门一日游目的地。',
        },
        history: {
          [Language.JA]: '1185年に源頼朝が幕府を開いた武家政権発祥の地。鎌倉時代（1185-1333）には日本の政治の中心として栄えました。多くの寺社が建立され、禅文化が花開きました。',
          [Language.EN]: 'The birthplace of Japan\'s warrior government where Minamoto no Yoritomo established the shogunate in 1185. During the Kamakura period (1185-1333), it flourished as Japan\'s political center, with many temples built and Zen culture blooming.',
          [Language.TH]: 'สถานที่กำเนิดของรัฐบาลนักรบของญี่ปุ่น ที่มินาโมโตะ โนะ โยริโตโมะก่อตั้งโชคุนในปี 1185 ในช่วงสมัยคามาคุระ (1185-1333) เจริญรุ่งเรืองเป็นศูนย์กลางการเมืองของญี่ปุ่น มีการสร้างวัดมากมายและวัฒนธรรมเซ็นเบิกบาน',
          [Language.ZH]: '日本武家政权的发祥地，1185年源赖朝在此建立幕府。镰仓时代（1185-1333）作为日本政治中心而繁荣，建造了许多寺庙，禅宗文化盛开。',
        },
        culture_festivals: {
          [Language.JA]: '鎌倉まつり、長谷の観音まつり、ぼんぼり祭り、鶴岡八幡宮例大祭、あじさい祭りなど、四季を通じて伝統的な祭りが開催されます。',
          [Language.EN]: 'Traditional festivals throughout the seasons include Kamakura Festival, Hase Kannon Festival, Bonbori Festival, Tsurugaoka Hachimangu Grand Festival, and Hydrangea Festival.',
          [Language.TH]: 'เทศกาลดั้งเดิมตลอดทั้งปี รวมถึงเทศกาลคามาคุระ เทศกาลฮาเสะคันนง เทศกาลบงโบริ เทศกาลใหญ่สึรุกาโอกะฮาจิมันกู และเทศกาลไฮเดรนเยีย',
          [Language.ZH]: '全年举办传统节日，包括镰仓祭、长谷观音祭、雪洞祭、鹤冈八幡宫例大祭、紫阳花祭等。',
        },
        things_to_do: {
          [Language.JA]: '鎌倉大仏見学、鶴岡八幡宮参拝、建長寺や円覚寺の禅体験、竹林散策、江ノ電乗車、海岸でのマリンスポーツが楽しめます。',
          [Language.EN]: 'Enjoy visiting the Great Buddha of Kamakura, worshiping at Tsurugaoka Hachimangu, Zen experiences at Kenchoji and Engakuji temples, bamboo grove walks, riding the Enoshima Electric Railway, and marine sports at the beach.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมพระใหญ่คามาคุระ สักการะที่สึรุกาโอกะฮาจิมันกู ประสบการณ์เซ็นที่วัดเค็นโชจิและเอนกาคุจิ เดินเล่นในป่าไผ่ นั่งรถไฟเอโนชิม่า และกีฬาทางน้ำที่ชายหาด',
          [Language.ZH]: '可以参观镰仓大佛、参拜鹤冈八幡宫、在建长寺和圆觉寺体验禅修、竹林散步、乘坐江之电、海滨水上运动。',
        },
        local_cuisine: {
          [Language.JA]: '鎌倉野菜、しらす丼、鳩サブレー、鎌倉ビール、紫芋を使ったスイーツ、抹茶と和菓子が名物です。',
          [Language.EN]: 'Local specialties include Kamakura vegetables, shirasu (whitebait) rice bowls, dove-shaped cookies, Kamakura beer, purple sweet potato sweets, and matcha with Japanese confections.',
          [Language.TH]: 'อาหารท้องถิ่น ได้แก่ ผักคามาคุระ ข้าวหน้าชิราสุ (ปลาขาวเล็ก) คุกกี้รูปนกพิราบ เบียร์คามาคุระ ขนมมันเทศสีม่วง และชาเขียวกับขนมญี่ปุ่น',
          [Language.ZH]: '当地特产包括镰仓蔬菜、银鱼盖饭、鸽子形饼干、镰仓啤酒、紫薯甜点、抹茶和和果子。',
        },
        access: {
          [Language.JA]: 'JR東海道線や小田急線で東京から約1時間。江ノ電を使った周遊観光が人気です。',
          [Language.EN]: 'About 1 hour from Tokyo via JR Tokaido Line or Odakyu Line. Sightseeing tours using the Enoshima Electric Railway are popular.',
          [Language.TH]: 'ประมาณ 1 ชั่วโมงจากโตเกียวผ่าน JR โทไคโด หรือสายโอดะคิว การท่องเที่ยวโดยใช้รถไฟเอโนชิม่าได้รับความนิยม',
          [Language.ZH]: '从东京乘JR东海道线或小田急线约1小时。使用江之电的观光游览很受欢迎。',
        },
        image: 'https://picsum.photos/seed/kamakura-city/600/300',
      },
      {
        id: 'nikko',
        name: {
          [Language.JA]: '日光市',
          [Language.EN]: 'Nikko City',
          [Language.TH]: 'เมืองนิกโก้',
          [Language.ZH]: '日光市',
        },
        description: {
          [Language.JA]: '豪華絢爛な東照宮をはじめとする世界遺産の社寺群と、美しい自然景観が魅力です。',
          [Language.EN]: 'Famous for its lavishly decorated Toshogu Shrine (UNESCO World Heritage) and stunning natural landscapes.',
          [Language.TH]: 'มีชื่อเสียงด้านศาลเจ้าโทโชกุที่ตกแต่งอย่างหรูหรา (มรดกโลกยูเนสโก) และภูมิทัศน์ธรรมชาติที่สวยงาม',
          [Language.ZH]: '以其装饰华丽的东照宫（联合国教科文组织世界遗产）和壮丽的自然景观而闻名。',
        },
        history: {
          [Language.JA]: '江戸時代初期に徳川家康の霊廟として東照宮が建立され、日光は聖地として発展。古くから山岳信仰の霊場でもあり、二荒山神社を中心とした信仰が続いています。',
          [Language.EN]: 'Toshogu Shrine was built as a mausoleum for Tokugawa Ieyasu in the early Edo period, developing Nikko as a sacred place. It has also long been a sacred site for mountain worship, with faith centered around Futarasan Shrine.',
          [Language.TH]: 'ศาลเจ้าโทโชกุสร้างขึ้นเป็นสุสานของโทคุงาวะ อิเอยาสุในช่วงต้นสมัยเอโดะ ทำให้นิกโก้พัฒนาเป็นสถานที่ศักดิ์สิทธิ์ นอกจากนี้ยังเป็นสถานที่ศักดิ์สิทธิ์สำหรับการบูชาภูเขามาอย่างยาวนาน โดยมีศรัทธาที่เน้นไปที่ศาลเจ้าฟุตาราซัง',
          [Language.ZH]: '江户时代初期建造了德川家康的陵寝东照宫，日光发展为圣地。自古以来也是山岳信仰的灵场，以二荒山神社为中心的信仰延续至今。',
        },
        culture_festivals: {
          [Language.JA]: '春と秋の日光東照宮大祭、二荒山神社例祭、華厳の滝氷瀑まつり、中禅寺湖カヌー大会など、四季折々の祭りとイベントが開催されます。',
          [Language.EN]: 'Seasonal festivals and events include the grand festivals of Nikko Toshogu Shrine in spring and autumn, Futarasan Shrine Festival, Kegon Falls Ice Festival, and Lake Chuzenji Canoe Competition.',
          [Language.TH]: 'เทศกาลและงานตามฤดูกาล รวมถึงเทศกาลใหญ่ของศาลเจ้านิกโก้โทโชกุในฤดูใบไม้ผลิและฤดูใบไม้ร่วง เทศกาลศาลเจ้าฟุตาราซัง เทศกาลน้ำแข็งน้ำตกเคกง และการแข่งขันแคนูทะเลสาบจูเซ็นจิ',
          [Language.ZH]: '四季举办各种节庆活动，包括春秋两季的日光东照宫大祭、二荒山神社例祭、华严瀑布冰瀑节、中禅寺湖独木舟大赛等。',
        },
        things_to_do: {
          [Language.JA]: '東照宮や二荒山神社参拝、華厳の滝見学、中禅寺湖遊覧、いろは坂ドライブ、奥日光でのハイキング、温泉巡りが楽しめます。',
          [Language.EN]: 'Enjoy visiting Toshogu and Futarasan shrines, viewing Kegon Falls, cruising Lake Chuzenji, driving the winding Irohazaka road, hiking in Oku-Nikko, and hot spring hopping.',
          [Language.TH]: 'เพลิดเพลินกับการเยี่ยมชมศาลเจ้าโทโชกุและฟุตาราซัง ชมน้ำตกเคกง ล่องเรือทะเลสาบจูเซ็นจิ ขับรถบนถนนคดเคี้ยวอิโรฮาซะกะ เดินป่าในโอคุนิกโก้ และแช่น้ำพุร้อนหลายแห่ง',
          [Language.ZH]: '可以参拜东照宫和二荒山神社、观赏华严瀑布、中禅寺湖游船、驾车穿越伊吕波坂、在奥日光徒步旅行、温泉巡游。',
        },
        local_cuisine: {
          [Language.JA]: '湯波料理、日光そば、あんかけ焼きそば、けんちん汁、日光の地酒、栃木和牛が楽しめます。',
          [Language.EN]: 'Enjoy yuba (tofu skin) dishes, Nikko soba noodles, ankake yakisoba, kenchin soup, local Nikko sake, and Tochigi wagyu beef.',
          [Language.TH]: 'เพลิดเพลินกับอาหารยุบะ (ผิวเต้าหู้) โซบะนิกโก้ อันคาเกะยากิโซบะ ซุปเค็นจิง สาเกท้องถิ่นนิกโก้ และเนื้อวากิวโทจิงิ',
          [Language.ZH]: '可以品尝湯葉料理、日光荞麦面、勾芡炒面、建长汤、日光地酒、栃木和牛。',
        },
        access: {
          [Language.JA]: 'JR日光線またはJR日光駅・東武日光駅からバスやタクシーでアクセス。東武鉄道で浅草から約2時間です。',
          [Language.EN]: 'Accessible by JR Nikko Line or buses/taxis from JR Nikko Station and Tobu Nikko Station. About 2 hours from Asakusa by Tobu Railway.',
          [Language.TH]: 'เข้าถึงได้โดย JR สายนิกโก้หรือรถบัส/แท็กซี่จากสถานี JR นิกโก้และสถานีโทบุนิกโก้ ประมาณ 2 ชั่วโมงจากอาซากุซ่าโดยรถไฟโทบุ',
          [Language.ZH]: '可通过JR日光线或从JR日光站、东武日光站乘巴士/出租车到达。从浅草乘东武铁道约2小时。',
        },
        image: 'https://picsum.photos/seed/nikko-city/600/300',
      },
    ],
  },
  {
    id: 'chubu',
    name: {
      [Language.JA]: '中部地方',
      [Language.EN]: 'Chubu Region',
      [Language.TH]: 'ภูมิภาคจูบุ',
      [Language.ZH]: '中部地区',
    },
    description: {
      [Language.JA]: '日本のほぼ中央に位置し、富士山や日本アルプスなど壮大な山岳地帯を含みます。多様な気候と文化が特徴です。',
      [Language.EN]: 'Located roughly in the center of Japan, including spectacular mountainous areas like Mt. Fuji and the Japanese Alps. Features diverse climates and cultures.',
      [Language.TH]: 'ตั้งอยู่ประมาณศูนย์กลางของญี่ปุ่น รวมถึงพื้นที่ภูเขาที่งดงาม เช่น ภูเขาไฟฟูจิและเทือกเขาแอลป์ญี่ปุ่น มีสภาพอากาศและวัฒนธรรมที่หลากหลาย',
      [Language.ZH]: '大致位于日本中部，包括富士山和日本阿尔卑斯山等壮丽山区。气候和文化多样。',
    },
    image: 'https://picsum.photos/seed/chubu-main/800/400',
    places: [
      {
        id: 'nagoya',
        name: { 
          [Language.JA]: '名古屋市', 
          [Language.EN]: 'Nagoya City',
          [Language.TH]: 'เมืองนาโกย่า',
          [Language.ZH]: '名古屋市',
        },
        description: {
          [Language.JA]: '愛知県の県庁所在地で、日本三大都市の一つ。名古屋城や熱田神宮、独自の「名古屋めし」が有名です。',
          [Language.EN]: 'The capital of Aichi Prefecture and one of Japan\'s three largest cities. Famous for Nagoya Castle, Atsuta Shrine, and unique "Nagoya-meshi" cuisine.',
          [Language.TH]: 'เมืองหลวงของจังหวัดไอจิและหนึ่งในสามเมืองที่ใหญ่ที่สุดของญี่ปุ่น มีชื่อเสียงด้านปราสาทนาโกย่า ศาลเจ้าอัตสึตะ และอาหาร "นาโกย่าเมชิ" ที่เป็นเอกลักษณ์',
          [Language.ZH]: '爱知县首府，日本三大城市之一。以名古屋城、热田神宫和独特的"名古屋饭"而闻名。',
        },
        history: {
          [Language.JA]: '戦国時代から城下町として発展。織田信長、豊臣秀吉、徳川家康の三英傑を輩出した地です。明治以降は繊維産業を中心に発展し、現在は自動車産業の中心地として知られています。',
          [Language.EN]: 'Developed as a castle town since the Warring States period. This is the birthplace of the three great unifiers: Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu. Since the Meiji period, it developed centered around the textile industry and is now known as the center of the automobile industry.',
          [Language.TH]: 'พัฒนาเป็นเมืองปราสาทตั้งแต่ยุคสังคราม เป็นบ้านเกิดของผู้รวมประเทศสามยอด: โอดะ โนบุนากะ โทโยโตมิ ฮิเดโยชิ และโทคุงาวะ อิเอยาสุ ตั้งแต่สมัยเมจิ พัฒนาโดยมีศูนย์กลางอุตสาหกรรมหลักผ้าและปัจจุบันรู้จักในฐานะศูนย์กลางอุตสาหกรรมยานยนต์',
          [Language.ZH]: '从战国时代作为城下町发展。这里是三位大统一者的诞生地:织田信长、丰臣秀吉和德川家康。明治以后以纺织业为中心发展，现在以汽车业中心而闻名。',
        },
        culture_festivals: {
          [Language.JA]: '名古屋まつり、熱田神宮例祭、名古屋城春祭、大須観音・七寺巡りなどが開催されます。',
          [Language.EN]: 'Events include Nagoya Festival, Atsuta Shrine Festival, Nagoya Castle Spring Festival, and the Seven Temple Pilgrimage.',
          [Language.TH]: 'มีงานต่างๆ รวมถึงเทศกาลนาโกย่า เทศกาลศาลเจ้าอัตสุตะ เทศกาลฤดูใบไม้ผลิปราสาทนาโกย่า และการแสวงบุญเจ็ดวัด',
          [Language.ZH]: '举办名古屋祭、热田神宫例祭、名古屋城春祭、大須观音七寺巡礼等活动。',
        },
        things_to_do: {
          [Language.JA]: '名古屋城の天守閣登り、熱田神宮参拝、大須観音巡り、名古屋港水族館、トヨタ産業技術記念館、大須電器街でのショッピングがおすすめです。',
          [Language.EN]: 'Recommended activities include climbing Nagoya Castle tower, visiting Atsuta Shrine, temple hopping in Osu, Nagoya Port Aquarium, Toyota Commemorative Museum of Industry and Technology, and shopping in Osu shopping district.',
          [Language.TH]: 'กิจกรรมที่แนะนำ ได้แก่ ขึ้นหอคอยปราสาทนาโกย่า ไปสักการะศาลเจ้าอัตสุตะ เที่ยวชมวัดในโอซุ พิพิธภัณฑ์สัตว์น้ำท่าเรือนาโกย่า พิพิธภัณฑ์ระลึกอุตสาหกรรมโตโยต้า และช้อปปิ้งที่ย่านโอซุ',
          [Language.ZH]: '推荐活动包括登上名古屋城天守阁、参拜热田神宫、大须寺庙巡礼、名古屋港水族馆、丰田产业技术纪念馆、在大须电器街购物。',
        },
        local_cuisine: {
          [Language.JA]: '手羽先、ひつまぶし、味噌カツ、あんかけスパゲッティ、きしめん、台湾ラーメン、小倉トーストなど「名古屋めし」が豊富です。',
          [Language.EN]: 'Famous "Nagoya-meshi" includes tebasaki (chicken wings), hitsumabushi (grilled eel), miso katsu, ankake spaghetti, kishimen noodles, Taiwan ramen, and Ogura toast.',
          [Language.TH]: '"นาโกย่าเมชิ" ที่มีชื่อเสียง ได้แก่ เทบาซากิ (ปีกไก่) ฮิตสุมาบุชิ (ปลาไหลย่าง) มิโซะคัตซุ สปาเก็ตตีราดซอส คิชิเมน ราเม็งไต้หวัน และขนมปังโอกุระ',
          [Language.ZH]: '著名的"名古屋饭"包括手羽先(鸡翅)、鳗鱼饭、味噌炸猪排、勾芡意大利面、棋子面、台湾拉面、小倉烤面包等。',
        },
        access: {
          [Language.JA]: '東京から新幹線で約1時40分。市内は地下鉄、バス、名鉄、近鉄が発達しています。',
          [Language.EN]: 'About 1 hour 40 minutes from Tokyo by Shinkansen. The city has well-developed subway, bus, Meitetsu, and Kintetsu railway networks.',
          [Language.TH]: 'ประมาณ 1 ชั่วโมง 40 นาทีจากโตเกียวโดยชินคันเซ็น เมืองมีเครือข่ายรถไฟใต้ดิน รถประจำทาง และรถไฟ Meitetsu และ Kintetsu ที่พัฒนาดี',
          [Language.ZH]: '从东京乘新干线约1小时40分钟。市内地铁、公交、名铁、近铁系统发达。',
        },
        image: 'https://picsum.photos/seed/nagoya-city/600/300',
      },
      {
        id: 'kanazawa',
        name: { 
          [Language.JA]: '金沢市', 
          [Language.EN]: 'Kanazawa City',
          [Language.TH]: 'เมืองคานาซาวะ',
          [Language.ZH]: '金泽市',
        },
        description: {
          [Language.JA]: '石川県の県庁所在地。日本三名園の一つである兼六園や、伝統的な茶屋街、金箔工芸で知られています。',
          [Language.EN]: 'The capital of Ishikawa Prefecture. Known for Kenrokuen Garden (one of Japan\'s three great gardens), traditional teahouse districts, and gold leaf crafts.',
          [Language.TH]: 'เมืองหลวงของจังหวัดอิชิคาวะ เป็นที่รู้จักจากสวนเค็นโรคุเอ็น (หนึ่งในสามสวนใหญ่ของญี่ปุ่น) ย่านโรงน้ำชาแบบดั้งเดิม และงานฝีมือทองคำเปลว',
          [Language.ZH]: '石川县首府。以兼六园（日本三大名园之一）、传统茶屋街和金箔工艺而闻名。',
        },
        image: 'https://picsum.photos/seed/kanazawa-city/600/300',
      },
      {
        id: 'shirakawa-go',
        name: {
          [Language.JA]: '白川郷',
          [Language.EN]: 'Shirakawa-go',
          [Language.TH]: 'ชิราคาวาโกะ',
          [Language.ZH]: '白川乡',
        },
        description: {
          [Language.JA]: '合掌造りの集落で知られる世界遺産。日本の原風景のような美しい景色が広がります。',
          [Language.EN]: 'A UNESCO World Heritage site known for its traditional gassho-zukuri farmhouses. Offers stunning, timeless Japanese scenery.',
          [Language.TH]: 'แหล่งมรดกโลกยูเนสโกที่รู้จักกันดีจากบ้านไร่กัสโชซูคุริแบบดั้งเดิม นำเสนอทิวทัศน์ญี่ปุ่นที่สวยงามและเหนือกาลเวลา',
          [Language.ZH]: '联合国教科文组织世界遗产，以其传统的合掌式农舍而闻名。展现了永恒的日本乡村美景。',
        },
        image: 'https://picsum.photos/seed/shirakawa-go/600/300',
      },
      {
        id: 'takayama',
        name: {
          [Language.JA]: '高山市',
          [Language.EN]: 'Takayama City',
          [Language.TH]: 'เมืองทาคายามะ',
          [Language.ZH]: '高山市',
        },
        description: {
          [Language.JA]: '古い町並みが保存されている「飛騨の小京都」。春と秋の高山祭は日本三大美祭の一つです。',
          [Language.EN]: 'Known as "Little Kyoto of Hida" for its beautifully preserved old town. The Takayama Festival in spring and autumn is one of Japan\'s three most beautiful festivals.',
          [Language.TH]: 'รู้จักกันในชื่อ "ลิตเติ้ลเกียวโตแห่งฮิดะ" จากเมืองเก่าที่ได้รับการอนุรักษ์ไว้อย่างสวยงาม เทศกาลทาคายามะในฤดูใบไม้ผลิและฤดูใบไม้ร่วงเป็นหนึ่งในสามเทศกาลที่สวยที่สุดของญี่ปุ่น',
          [Language.ZH]: '因其保存完好的古镇而被誉为“飞驒的小京都”。春秋两季的高山祭是日本三大美祭之一。',
        },
        image: 'https://picsum.photos/seed/takayama-city/600/300',
      },
    ],
  },
  {
    id: 'kansai',
    name: {
      [Language.JA]: '関西地方',
      [Language.EN]: 'Kansai Region',
      [Language.TH]: 'ภูมิภาคคันไซ',
      [Language.ZH]: '关西地区',
    },
    description: {
      [Language.JA]: '日本の歴史と文化が色濃く残る地方。京都、大阪、奈良など古都が多く、独自の食文化も魅力です。',
      [Language.EN]: 'A region rich in Japanese history and culture, featuring ancient capitals like Kyoto, Osaka, and Nara, as well as a unique culinary scene.',
      [Language.TH]: 'ภูมิภาคที่อุดมไปด้วยประวัติศาสตร์และวัฒนธรรมของญี่ปุ่น มีเมืองหลวงเก่าแก่ เช่น เกียวโต โอซาก้า และนารา รวมถึงแหล่งอาหารที่เป็นเอกลักษณ์',
      [Language.ZH]: '一个拥有丰富日本历史和文化的地区，拥有京都、大阪、奈良等古都以及独特的烹饪文化。',
    },
    image: 'https://picsum.photos/seed/kansai-main/800/400',
    places: [
      {
        id: 'kyoto',
        name: { 
          [Language.JA]: '京都市', 
          [Language.EN]: 'Kyoto City',
          [Language.TH]: 'เมืองเกียวโต',
          [Language.ZH]: '京都市',
        },
        description: {
          [Language.JA]: '数多くの寺社仏閣が残る日本の古都。美しい庭園、伝統工芸、抹茶などが楽しめます。',
          [Language.EN]: 'Japan\'s former imperial capital, home to numerous temples, shrines, beautiful gardens, and traditional crafts.',
          [Language.TH]: 'อดีตเมืองหลวงของญี่ปุ่น เป็นที่ตั้งของวัด ศาลเจ้า สวนสวยงาม และงานฝีมือแบบดั้งเดิมมากมาย',
          [Language.ZH]: '日本前首都，拥有众多寺庙、神社、美丽的花园和传统工艺品。',
        },
        image: 'https://picsum.photos/seed/kyoto-city/600/300',
      },
      {
        id: 'osaka',
        name: { 
          [Language.JA]: '大阪市', 
          [Language.EN]: 'Osaka City',
          [Language.TH]: 'เมืองโอซาก้า',
          [Language.ZH]: '大阪市',
        },
        description: {
          [Language.JA]: '「食い倒れの街」として知られるグルメ都市。大阪城や道頓堀の賑わいが特徴です。',
          [Language.EN]: 'Known as Japan\'s kitchen, a vibrant city famous for its food scene, Osaka Castle, and Dotonbori entertainment district.',
          [Language.TH]: 'รู้จักกันในนามครัวของญี่ปุ่น เมืองที่คึกคักมีชื่อเสียงด้านอาหาร ปราสาทโอซาก้า และย่านบันเทิงโดทงโบริ',
          [Language.ZH]: '被誉为“日本的厨房”，一座充满活力的城市，以其美食、大阪城和道顿堀娱乐区而闻名。',
        },
        image: 'https://picsum.photos/seed/osaka-city/600/300',
      },
      {
        id: 'fushimi-inari',
        name: {
          [Language.JA]: '伏見稲荷大社',
          [Language.EN]: 'Fushimi Inari Shrine',
          [Language.TH]: 'ศาลเจ้าฟูชิมิอินาริ',
          [Language.ZH]: '伏见稻荷大社',
        },
        description: {
          [Language.JA]: '数千本もの赤い鳥居が連なることで有名な神社。稲荷信仰の総本宮です。',
          [Language.EN]: 'Famous for its thousands of vibrant red torii gates winding up a mountainside. The head shrine of Inari. ',
          [Language.TH]: 'มีชื่อเสียงจากประตูโทริอิสีแดงสดใสนับพันที่คดเคี้ยวขึ้นไปบนภูเขา เป็นศาลเจ้าหลักของอินาริ',
          [Language.ZH]: '以其成千上万个鲜红色的鸟居门蜿蜒而上山而闻名。稻荷神的总本社。',
        },
        image: 'https://picsum.photos/seed/fushimi-inari/600/300',
      },
      {
        id: 'nara-park',
        name: {
          [Language.JA]: '奈良公園',
          [Language.EN]: 'Nara Park',
          [Language.TH]: 'สวนนารา',
          [Language.ZH]: '奈良公园',
        },
        description: {
          [Language.JA]: '広大な公園で、野生の鹿と触れ合えます。東大寺の大仏や春日大社も園内にあります。',
          [Language.EN]: 'A large park where wild deer roam freely. Todai-ji Temple (with its Great Buddha) and Kasuga Taisha Shrine are located within the park.',
          [Language.TH]: 'สวนสาธารณะขนาดใหญ่ที่กวางป่าเดินเตร่อย่างอิสระ วัดโทไดจิ (พร้อมพระใหญ่) และศาลเจ้าคาสึกะ ไทฉะ ตั้งอยู่ในสวนสาธารณะ',
          [Language.ZH]: '一个广阔的公园，野生鹿自由漫步。东大寺（内有大佛）和春日大社都位于公园内。',
        },
        image: 'https://picsum.photos/seed/nara-park/600/300',
      },
      {
        id: 'himeji-castle',
        name: {
          [Language.JA]: '姫路城',
          [Language.EN]: 'Himeji Castle',
          [Language.TH]: 'ปราสาทฮิเมจิ',
          [Language.ZH]: '姬路城',
        },
        description: {
          [Language.JA]: '「白鷺城」の愛称で親しまれる、日本で最も美しいとされる城の一つ。世界文化遺産です。',
          [Language.EN]: 'Nicknamed "White Heron Castle," it is considered one of Japan\'s most beautiful castles and is a UNESCO World Heritage site.',
          [Language.TH]: 'มีชื่อเล่นว่า "ปราสาทนกกระเรียนขาว" ถือเป็นหนึ่งในปราสาทที่สวยที่สุดของญี่ปุ่นและเป็นมรดกโลกของยูเนสโก',
          [Language.ZH]: '昵称“白鹭城”，被认为是日本最美丽的城堡之一，也是联合国教科文组织世界遗产。',
        },
        image: 'https://picsum.photos/seed/himeji-castle/600/300',
      },
    ],
  },
  {
    id: 'chugoku',
    name: {
      [Language.JA]: '中国地方',
      [Language.EN]: 'Chugoku Region',
      [Language.TH]: 'ภูมิภาคจูโกกุ',
      [Language.ZH]: '中国地区',
    },
    description: {
      [Language.JA]: '本州西部に位置し、日本海と瀬戸内海に面しています。広島の平和記念公園や鳥取砂丘などがあります。',
      [Language.EN]: 'Located in western Honshu, facing both the Sea of Japan and the Seto Inland Sea. Home to Hiroshima Peace Memorial Park and Tottori Sand Dunes.',
      [Language.TH]: 'ตั้งอยู่ทางตะวันตกของฮอนชู หันหน้าเข้าหาทั้งทะเลญี่ปุ่นและทะเลเซโตะใน เป็นที่ตั้งของสวนสันติภาพฮิโรชิม่าและเนินทรายทตโตริ',
      [Language.ZH]: '位于本州西部，面向日本海和濑户内海。拥有广岛和平纪念公园和鸟取沙丘。',
    },
    image: 'https://picsum.photos/seed/chugoku-main/800/400',
    places: [
      {
        id: 'hiroshima',
        name: { 
          [Language.JA]: '広島市', 
          [Language.EN]: 'Hiroshima City',
          [Language.TH]: 'เมืองฮิโรชิม่า',
          [Language.ZH]: '广岛市',
        },
        description: {
          [Language.JA]: '平和記念公園と原爆ドームで世界的に知られています。宮島（厳島神社）へのアクセスも良いです。',
          [Language.EN]: 'Internationally known for its Peace Memorial Park and Atomic Bomb Dome. Also provides good access to Miyajima (Itsukushima Shrine).',
          [Language.TH]: 'เป็นที่รู้จักในระดับสากลจากสวนสันติภาพและโดมปรมาณู นอกจากนี้ยังเดินทางไปยังมิยาจิมะ (ศาลเจ้าอิตสึคุชิมะ) ได้สะดวก',
          [Language.ZH]: '以其和平纪念公园和原子弹爆炸圆顶屋而闻名于世。前往宫岛（严岛神社）也很方便。',
        },
        image: 'https://picsum.photos/seed/hiroshima-city/600/300',
      },
      {
        id: 'okayama',
        name: { 
          [Language.JA]: '岡山市', 
          [Language.EN]: 'Okayama City',
          [Language.TH]: 'เมืองโอคายาม่า',
          [Language.ZH]: '冈山市',
        },
        description: {
          [Language.JA]: '日本三名園の一つである後楽園や、黒い外観が特徴的な岡山城があります。「桃太郎」の伝説の地としても知られています。',
          [Language.EN]: 'Features Korakuen Garden, one of Japan\'s three great gardens, and Okayama Castle with its distinctive black exterior. Known as the land of the "Momotaro" legend.',
          [Language.TH]: 'มีสวนโคราคุเอ็น หนึ่งในสามสวนใหญ่ของญี่ปุ่น และปราสาทโอคายาม่าที่มีลักษณะภายนอกสีดำโดดเด่น เป็นที่รู้จักในฐานะดินแดนแห่งตำนาน "โมโมทาโร่"',
          [Language.ZH]: '拥有日本三大名园之一的后乐园和外观独特的黑色冈山城。被称为“桃太郎”传说的发源地。',
        },
        image: 'https://picsum.photos/seed/okayama-city/600/300',
      },
      {
        id: 'itsukushima-shrine',
        name: {
          [Language.JA]: '厳島神社',
          [Language.EN]: 'Itsukushima Shrine (Miyajima)',
          [Language.TH]: 'ศาลเจ้าอิตสึคุชิมะ (มิยาจิมะ)',
          [Language.ZH]: '严岛神社 (宫岛)',
        },
        description: {
          [Language.JA]: '海に浮かぶように見える大鳥居で有名な世界遺産。宮島にあり、干潮時には鳥居まで歩けます。',
          [Language.EN]: 'A UNESCO World Heritage site famous for its "floating" torii gate. Located on Miyajima Island, you can walk to the gate at low tide.',
          [Language.TH]: 'แหล่งมรดกโลกยูเนสโกที่มีชื่อเสียงจากประตูโทริอิ "ลอยน้ำ" ตั้งอยู่บนเกาะมิยาจิมะ คุณสามารถเดินไปยังประตูได้เมื่อน้ำลง',
          [Language.ZH]: '联合国教科文组织世界遗产，以其“漂浮”的鸟居门而闻名。位于宫岛，退潮时可以步行至鸟居门。',
        },
        image: 'https://picsum.photos/seed/itsukushima-shrine/600/300',
      },
      {
        id: 'kurashiki',
        name: {
          [Language.JA]: '倉敷市',
          [Language.EN]: 'Kurashiki City',
          [Language.TH]: 'เมืองคุราชิกิ',
          [Language.ZH]: '仓敷市',
        },
        description: {
          [Language.JA]: '白壁の蔵が並ぶ美観地区は、江戸時代の風情を残す美しい運河沿いの景観が楽しめます。',
          [Language.EN]: 'The Bikan Historical Quarter, with its white-walled storehouses, offers beautiful canal-side scenery preserving the atmosphere of the Edo period.',
          [Language.TH]: 'ย่านประวัติศาสตร์บิคัง พร้อมด้วยโกดังผนังสีขาว นำเสนอทิวทัศน์ริมคลองที่สวยงามซึ่งยังคงรักษาบรรยากาศของสมัยเอโดะ',
          [Language.ZH]: '美观地区拥有白墙仓库，沿河景色优美，保留了江户时代的风情。',
        },
        image: 'https://picsum.photos/seed/kurashiki-city/600/300',
      },
    ],
  },
  {
    id: 'shikoku',
    name: {
      [Language.JA]: '四国地方',
      [Language.EN]: 'Shikoku Region',
      [Language.TH]: 'ภูมิภาคชิโกกุ',
      [Language.ZH]: '四国地区',
    },
    description: {
      [Language.JA]: '日本で最も小さい主要な島。美しい海岸線、豊かな自然、そして88箇所の霊場を巡るお遍路で知られています。',
      [Language.EN]: 'Japan\'s smallest main island. Known for its beautiful coastlines, abundant nature, and the Shikoku Pilgrimage of 88 temples.',
      [Language.TH]: 'เกาะหลักที่เล็กที่สุดของญี่ปุ่น มีชื่อเสียงด้านแนวชายฝั่งที่สวยงาม ธรรมชาติที่อุดมสมบูรณ์ และการจาริกแสวงบุญชิโกกุ 88 วัด',
      [Language.ZH]: '日本最小的主要岛屿。以其美丽的海岸线、丰富的自然风光和四国八十八寺朝圣之旅而闻名。',
    },
    image: 'https://picsum.photos/seed/shikoku-main/800/400',
    places: [
      {
        id: 'takamatsu',
        name: { 
          [Language.JA]: '高松市', 
          [Language.EN]: 'Takamatsu City',
          [Language.TH]: 'เมืองทาคามัตสึ',
          [Language.ZH]: '高松市',
        },
        description: {
          [Language.JA]: '香川県の県庁所在地。特別名勝に指定されている栗林公園が有名です。讃岐うどんも楽しめます。',
          [Language.EN]: 'The capital of Kagawa Prefecture. Famous for Ritsurin Garden, a designated Special Place of Scenic Beauty. Sanuki udon is also a must-try.',
          [Language.TH]: 'เมืองหลวงของจังหวัดคางาวะ มีชื่อเสียงด้านสวนริทสึริน ซึ่งเป็นสถานที่พิเศษที่กำหนดให้เป็นจุดชมทัศนียภาพที่สวยงาม ซานุกิอุด้งก็เป็นสิ่งที่ต้องลองเช่นกัน',
          [Language.ZH]: '香川县首府。以被指定为特别名胜的栗林公园而闻名。赞岐乌冬面也值得一试。',
        },
        image: 'https://picsum.photos/seed/takamatsu-city/600/300',
      },
      {
        id: 'matsuyama',
        name: { 
          [Language.JA]: '松山市', 
          [Language.EN]: 'Matsuyama City',
          [Language.TH]: 'เมืองมัตสึยามะ',
          [Language.ZH]: '松山市',
        },
        description: {
          [Language.JA]: '愛媛県の県庁所在地。日本最古の温泉の一つである道後温泉や、松山城が有名です。',
          [Language.EN]: 'The capital of Ehime Prefecture. Famous for Dogo Onsen, one of Japan\'s oldest hot springs, and Matsuyama Castle.',
          [Language.TH]: 'เมืองหลวงของจังหวัดเอฮิเมะ มีชื่อเสียงด้านโดโงะอนเซ็น หนึ่งในน้ำพุร้อนที่เก่าแก่ที่สุดของญี่ปุ่น และปราสาทมัตสึยามะ',
          [Language.ZH]: '爱媛县首府。以日本最古老的温泉之一道后温泉和松山城而闻名。',
        },
        image: 'https://picsum.photos/seed/matsuyama-city/600/300',
      },
      {
        id: 'naruto-whirlpools',
        name: {
          [Language.JA]: '鳴門の渦潮',
          [Language.EN]: 'Naruto Whirlpools',
          [Language.TH]: 'น้ำวนนารูโตะ',
          [Language.ZH]: '鸣门漩涡',
        },
        description: {
          [Language.JA]: '鳴門海峡で発生するダイナミックな渦潮。観潮船や展望台から見学できます。',
          [Language.EN]: 'Dynamic tidal whirlpools that occur in the Naruto Strait. Can be viewed from sightseeing boats or observation decks.',
          [Language.TH]: 'น้ำวนจากกระแสน้ำที่เกิดขึ้นในช่องแคบนารูโตะ สามารถชมได้จากเรือท่องเที่ยวหรือจุดชมวิว',
          [Language.ZH]: '在鸣门海峡发生的动态潮汐漩涡。可以从观光船或观景台观看。',
        },
        image: 'https://picsum.photos/seed/naruto-whirlpools/600/300',
      },
      {
        id: 'kotohira-gu',
        name: {
          [Language.JA]: '金刀比羅宮 (こんぴらさん)',
          [Language.EN]: 'Kotohira-gu Shrine (Konpira-san)',
          [Language.TH]: 'ศาลเจ้าโคโตฮิระกุ (คมปิระซัง)',
          [Language.ZH]: '金刀比罗宫 (琴平山)',
        },
        description: {
          [Language.JA]: '長い石段を登った先にある海の神様を祀る神社。多くの参拝者で賑わいます。',
          [Language.EN]: 'A shrine dedicated to the god of the sea, reached by climbing a long stone staircase. Attracts many worshippers.',
          [Language.TH]: 'ศาลเจ้าที่อุทิศให้กับเทพเจ้าแห่งท้องทะเล ซึ่งต้องปีนบันไดหินยาวเพื่อไปถึง ดึงดูดผู้มาสักการะจำนวนมาก',
          [Language.ZH]: '供奉海神的神社，需攀登长长的石阶才能到达。吸引了许多朝拜者。',
        },
        image: 'https://picsum.photos/seed/kotohira-gu/600/300',
      },
    ],
  },
  {
    id: 'kyushu',
    name: {
      [Language.JA]: '九州地方',
      [Language.EN]: 'Kyushu Region',
      [Language.TH]: 'ภูมิภาคคิวชู',
      [Language.ZH]: '九州地区',
    },
    description: {
      [Language.JA]: '日本の南西部に位置し、温暖な気候と豊かな自然、活火山、温泉が特徴です。独自の歴史と文化も持ちます。',
      [Language.EN]: 'Located in southwestern Japan, Kyushu is known for its warm climate, lush nature, active volcanoes, hot springs, and distinct history and culture.',
      [Language.TH]: 'ตั้งอยู่ทางตะวันตกเฉียงใต้ของญี่ปุ่น คิวชูมีชื่อเสียงด้านสภาพอากาศที่อบอุ่น ธรรมชาติที่อุดมสมบูรณ์ ภูเขาไฟที่ยังคุกรุ่น น้ำพุร้อน รวมถึงประวัติศาสตร์และวัฒนธรรมที่เป็นเอกลักษณ์',
      [Language.ZH]: '位于日本西南部，以其温暖的气候、茂密的自然风光、活火山、温泉以及独特的历史和文化而闻名。',
    },
    image: 'https://picsum.photos/seed/kyushu-main/800/400',
    places: [
      {
        id: 'fukuoka',
        name: { 
          [Language.JA]: '福岡市', 
          [Language.EN]: 'Fukuoka City',
          [Language.TH]: 'เมืองฟุกุโอกะ',
          [Language.ZH]: '福冈市',
        },
        description: {
          [Language.JA]: '九州最大の都市で、アジアへの玄関口。屋台文化や博多ラーメンが有名です。',
          [Language.EN]: 'Kyushu\'s largest city and a gateway to Asia. Famous for its yatai (food stall) culture and Hakata ramen.',
          [Language.TH]: 'เมืองที่ใหญ่ที่สุดของคิวชูและประตูสู่เอเชีย มีชื่อเสียงด้านวัฒนธรรมยาไต (ร้านอาหารริมทาง) และฮากาตะราเม็ง',
          [Language.ZH]: '九州最大的城市，通往亚洲的门户。以其屋台（路边摊）文化和博多拉面而闻名。',
        },
        image: 'https://picsum.photos/seed/fukuoka-city/600/300',
      },
      {
        id: 'beppu',
        name: { 
          [Language.JA]: '別府市', 
          [Language.EN]: 'Beppu City',
          [Language.TH]: 'เมืองเบปปุ',
          [Language.ZH]: '别府市',
        },
        description: {
          [Language.JA]: '日本有数の温泉地。「地獄めぐり」と呼ばれる様々な泉質の温泉が見どころです。',
          [Language.EN]: 'One of Japan\'s most famous hot spring resorts, known for its "Hells of Beppu" – various unique hot springs for viewing.',
          [Language.TH]: 'หนึ่งในรีสอร์ทน้ำพุร้อนที่มีชื่อเสียงที่สุดของญี่ปุ่น เป็นที่รู้จักจาก "นรกแห่งเบปปุ" – น้ำพุร้อนที่มีเอกลักษณ์หลากหลายรูปแบบให้ชม',
          [Language.ZH]: '日本最著名的温泉胜地之一，以其“别府地狱”——各种独特的观赏性温泉而闻名。',
        },
        image: 'https://picsum.photos/seed/beppu-city/600/300',
      },
      {
        id: 'yakushima',
        name: {
          [Language.JA]: '屋久島',
          [Language.EN]: 'Yakushima Island',
          [Language.TH]: 'เกาะยาคุชิมะ',
          [Language.ZH]: '屋久岛',
        },
        description: {
          [Language.JA]: '樹齢数千年の屋久杉をはじめとする原生林が広がる世界自然遺産。神秘的な自然が魅力です。',
          [Language.EN]: 'A UNESCO World Natural Heritage site with ancient cedar forests, including Yakusugi trees thousands of years old. Mystical nature awaits.',
          [Language.TH]: 'แหล่งมรดกโลกทางธรรมชาติของยูเนสโกที่มีป่าสนซีดาร์โบราณ รวมถึงต้นยาคุสึกิอายุหลายพันปี ธรรมชาติอันลึกลับรออยู่',
          [Language.ZH]: '联合国教科文组织世界自然遗产，拥有古老的雪松林，包括数千年树龄的屋久杉。神秘的自然风光等待着您。',
        },
        image: 'https://picsum.photos/seed/yakushima-island/600/300',
      },
      {
        id: 'nagasaki',
        name: {
          [Language.JA]: '長崎市',
          [Language.EN]: 'Nagasaki City',
          [Language.TH]: 'เมืองนางาซากิ',
          [Language.ZH]: '长崎市',
        },
        description: {
          [Language.JA]: '異国情緒あふれる港町。平和公園やグラバー園など、歴史的な見どころが多いです。',
          [Language.EN]: 'A port city with an exotic atmosphere. Many historical sites like the Peace Park and Glover Garden.',
          [Language.TH]: 'เมืองท่าที่มีบรรยากาศแปลกตา มีสถานที่ทางประวัติศาสตร์มากมาย เช่น สวนสันติภาพและสวนโกลเวอร์',
          [Language.ZH]: '充满异国情调的港口城市。拥有和平公园和格洛弗花园等许多历史景点。',
        },
        image: 'https://picsum.photos/seed/nagasaki-city/600/300',
      },
    ],
  },
  {
    id: 'okinawa',
    name: {
      [Language.JA]: '沖縄地方',
      [Language.EN]: 'Okinawa Region',
      [Language.TH]: 'ภูมิภาคโอกินาว่า',
      [Language.ZH]: '冲绳地区',
    },
    description: {
      [Language.JA]: '日本の最南西端に位置する亜熱帯の島々。美しいビーチ、サンゴ礁、独自の琉球文化で知られています。',
      [Language.EN]: 'Subtropical islands located at the southwestern tip of Japan. Known for beautiful beaches, coral reefs, and its unique Ryukyu culture.',
      [Language.TH]: 'หมู่เกาะกึ่งเขตร้อนที่ตั้งอยู่ทางปลายสุดทางตะวันตกเฉียงใต้ของญี่ปุ่น มีชื่อเสียงด้านชายหาดที่สวยงาม แนวปะการัง และวัฒนธรรมริวกิวที่เป็นเอกลักษณ์',
      [Language.ZH]: '位于日本西南端的亚热带岛屿。以美丽的海滩、珊瑚礁和独特的琉球文化而闻名。',
    },
    image: 'https://picsum.photos/seed/okinawa-main/800/400',
    places: [
      {
        id: 'naha',
        name: { 
          [Language.JA]: '那覇市', 
          [Language.EN]: 'Naha City',
          [Language.TH]: 'เมืองนาฮะ',
          [Language.ZH]: '那霸市',
        },
        description: {
          [Language.JA]: '沖縄県の県庁所在地。琉球王国の首里城跡や国際通りが人気の観光スポットです。',
          [Language.EN]: 'The capital of Okinawa Prefecture. Shurijo Castle, the former palace of the Ryukyu Kingdom, and Kokusai Street are popular tourist spots.',
          [Language.TH]: 'เมืองหลวงของจังหวัดโอกินาว่า ปราสาทชูริโจ อดีตพระราชวังของอาณาจักรริวกิว และถนนโคคุไซเป็นสถานที่ท่องเที่ยวยอดนิยม',
          [Language.ZH]: '冲绳县首府。琉球王国的前宫殿首里城和国际通是热门旅游景点。',
        },
        image: 'https://picsum.photos/seed/naha-city/600/300',
      },
      {
        id: 'churaumi',
        name: { 
          [Language.JA]: '沖縄美ら海水族館', 
          [Language.EN]: 'Okinawa Churaumi Aquarium',
          [Language.TH]: 'พิพิธภัณฑ์สัตว์น้ำชูราอูมิโอกินาว่า',
          [Language.ZH]: '冲绳美丽海水族馆',
        },
        description: {
          [Language.JA]: '世界最大級の水族館の一つ。ジンベイザメやマンタが泳ぐ巨大な「黒潮の海」水槽が圧巻です。',
          [Language.EN]: 'One of the world\'s largest aquariums. The massive Kuroshio Sea tank, featuring whale sharks and manta rays, is breathtaking.',
          [Language.TH]: 'หนึ่งในพิพิธภัณฑ์สัตว์น้ำที่ใหญ่ที่สุดในโลก ตู้ปลาคุโรชิโอะซีขนาดใหญ่ที่มีฉลามวาฬและปลากระเบนราหูว่ายอยู่นั้นน่าทึ่งมาก',
          [Language.ZH]: '世界上最大的水族馆之一。巨大的黑潮之海水箱中有鲸鲨和蝠鲼，非常壮观。',
        },
        image: 'https://picsum.photos/seed/churaumi-aq/600/300',
      },
      {
        id: 'ishigaki-island',
        name: {
          [Language.JA]: '石垣島',
          [Language.EN]: 'Ishigaki Island',
          [Language.TH]: 'เกาะอิชิงากิ',
          [Language.ZH]: '石垣岛',
        },
        description: {
          [Language.JA]: '八重山諸島の中心的な島。美しいビーチやマンタと泳げるダイビングスポットが人気です。',
          [Language.EN]: 'The main island of the Yaeyama Islands. Popular for its beautiful beaches and diving spots where you can swim with manta rays.',
          [Language.TH]: 'เกาะหลักของหมู่เกาะยาเอยามะ เป็นที่นิยมจากชายหาดที่สวยงามและจุดดำน้ำที่คุณสามารถว่ายน้ำกับปลากระเบนราหูได้',
          [Language.ZH]: '八重山诸岛的中心岛屿。以其美丽的海滩和可以与蝠鲼一起游泳的潜水点而广受欢迎。',
        },
        image: 'https://picsum.photos/seed/ishigaki-island/600/300',
      },
      {
        id: 'taketomi-island',
        name: {
          [Language.JA]: '竹富島',
          [Language.EN]: 'Taketomi Island',
          [Language.TH]: 'เกาะทาเคโทมิ',
          [Language.ZH]: '竹富岛',
        },
        description: {
          [Language.JA]: '伝統的な琉球家屋と白砂の道が残る美しい島。水牛車での観光が名物です。',
          [Language.EN]: 'A beautiful island preserving traditional Ryukyu houses and white sand roads. Water buffalo cart tours are a famous attraction.',
          [Language.TH]: 'เกาะที่สวยงามที่ยังคงรักษาบ้านเรือนแบบริวกิวดั้งเดิมและถนนทรายขาว การท่องเที่ยวด้วยรถลากควายน้ำเป็นสถานที่ท่องเที่ยวที่มีชื่อเสียง',
          [Language.ZH]: '一个美丽的岛屿，保留着传统的琉球房屋和白沙路。水牛车观光是著名的景点。',
        },
        image: 'https://picsum.photos/seed/taketomi-island/600/300',
      },
    ],
  },
];

const REGION_SUPPLEMENTS: Record<string, RegionSupplement> = {
  hokkaido: {
    history: createLocalizedText(
      'アイヌ文化が根付く大地で、近代以降は開拓使の設置によって本格的な都市開発が進みました。港町や炭鉱町の歴史も地域ごとの個性を形作っています。',
      'A land shaped by Ainu culture, Hokkaido later underwent large-scale development after the Meiji government established the Development Commission. Port towns and mining communities also gave each area a distinct identity.',
      'เป็นดินแดนที่มีรากฐานจากวัฒนธรรมไอนุ และต่อมาได้รับการพัฒนาอย่างจริงจังหลังรัฐบาลเมจิจัดตั้งหน่วยบุกเบิกฮอกไกโด ประวัติของเมืองท่าและเมืองเหมืองก็สร้างเอกลักษณ์ให้แต่ละพื้นที่เช่นกัน',
      '这片土地深受阿伊努文化影响，明治时期设立开拓使后开始大规模开发。港口城市与矿业城镇的历史也塑造了各地不同的个性。'
    ),
    regional_culture: createLocalizedText(
      'アイヌの工芸や食文化に加え、札幌雪まつりに代表される冬のイベント、酪農文化、雄大な自然を楽しむアウトドア志向が地域文化を彩ります。',
      'Ainu crafts and food traditions, major winter events such as the Sapporo Snow Festival, dairy culture, and a strong outdoor lifestyle all define local culture.',
      'งานหัตถกรรมและอาหารของชาวไอนุ เทศกาลฤดูหนาวอย่างเทศกาลหิมะซัปโปโร วัฒนธรรมการทำปศุสัตว์นม และวิถีกลางแจ้ง ล้วนเป็นส่วนสำคัญของวัฒนธรรมท้องถิ่น',
      '阿伊努工艺与饮食文化、札幌雪祭等冬季活动、酪农文化以及浓厚的户外生活方式，共同构成了当地文化。'
    ),
    natural_features: createLocalizedText(
      '知床や大雪山国立公園、富良野の花畑、釧路湿原など、手つかずの自然が各地に広がります。流氷や火山地形などダイナミックな景観も魅力です。',
      'Unspoiled nature stretches across the region, from Shiretoko and Daisetsuzan National Park to Furano flower fields and Kushiro Marsh. Drift ice and volcanic terrain add dramatic scenery.',
      'มีธรรมชาติอันสมบูรณ์กระจายอยู่ทั่วภูมิภาค ตั้งแต่ชิเระโทโกะ อุทยานแห่งชาติไดเซ็ตสึซัง ทุ่งดอกไม้ฟุราโนะ ไปจนถึงพื้นที่ชุ่มน้ำคุชิโระ รวมถึงทิวทัศน์น้ำแข็งลอยและภูมิประเทศภูเขาไฟที่โดดเด่น',
      '这里遍布原始自然景观，包括知床、大雪山国立公园、富良野花田和钏路湿原，流冰与火山地形也带来极具震撼力的风景。'
    ),
    climate: createLocalizedText(
      '夏は涼しく過ごしやすい一方、冬は厳しい寒さと豪雪に見舞われます。四季の変化がはっきりしており、花、紅葉、雪景色それぞれに見どころがあります。',
      'Summers are cool and comfortable, while winters are cold with heavy snowfall. The seasons are clearly defined, offering flowers, autumn foliage, and snowy landscapes in turn.',
      'ฤดูร้อนเย็นสบาย ส่วนฤดูหนาวหนาวจัดและมีหิมะตกหนัก ฤดูกาลทั้งสี่ชัดเจน ทำให้มีเสน่ห์ทั้งดอกไม้ ใบไม้เปลี่ยนสี และหิมะ',
      '夏季凉爽舒适，冬季寒冷且降雪量大。四季分明，花海、红叶和雪景各有魅力。'
    ),
    local_cuisine: createLocalizedText(
      'カニ、ウニ、いくらなどの海産物に加え、味噌ラーメン、スープカレー、ジンギスカン、乳製品やスイーツも人気です。',
      'Seafood such as crab, sea urchin, and salmon roe is famous, along with miso ramen, soup curry, Genghis Khan barbecue, dairy products, and sweets.',
      'มีชื่อเสียงทั้งอาหารทะเลอย่างปู อูนิ และไข่ปลาแซลมอน รวมถึงมิโซะราเม็ง ซุปแกงกะหรี่ เจงกิสข่าน ผลิตภัณฑ์นม และขนมหวาน',
      '螃蟹、海胆、鲑鱼子等海鲜非常有名，味噌拉面、汤咖喱、成吉思汗烤肉、乳制品和甜点也很受欢迎。'
    ),
    accessibility: createLocalizedText(
      '新千歳空港を中心に道内各地へ空路が充実しており、新函館北斗駅までは北海道新幹線も利用できます。都市間移動はJR特急やレンタカーが便利です。',
      'Air access is extensive through New Chitose Airport and other regional airports, and the Hokkaido Shinkansen reaches Shin-Hakodate-Hokuto. JR limited express trains and rental cars are useful for travel between cities.',
      'มีเที่ยวบินเชื่อมต่อหลายพื้นที่ผ่านสนามบินชิโตเสะแห่งใหม่และสนามบินภูมิภาคต่าง ๆ อีกทั้งยังใช้ฮอกไกโดชินคันเซ็นถึงชินฮาโกดาเตะโฮคุโตได้ การเดินทางระหว่างเมืองสะดวกด้วยรถไฟด่วนพิเศษ JR และรถเช่า',
      '以新千岁机场为核心，北海道各地航空网络完善，也可搭乘北海道新干线到新函馆北斗。城市之间适合乘坐JR特急或租车移动。'
    ),
  },
  kanto: {
    history: createLocalizedText(
      '江戸幕府の本拠地として発展した地域で、明治以降は東京を中心に日本の政治・経済の中心となりました。港町、宿場町、城下町の歴史も各地に残ります。',
      'The region grew as the base of the Tokugawa shogunate and, after the Meiji era, became the political and economic center of Japan around Tokyo. Port towns, post towns, and castle towns still preserve their histories.',
      'ภูมิภาคนี้เติบโตขึ้นในฐานะศูนย์กลางของรัฐบาลโชกุนโทกุงาวะ และหลังยุคเมจิก็กลายเป็นศูนย์กลางการเมืองและเศรษฐกิจของญี่ปุ่นรอบกรุงโตเกียว เมืองท่า เมืองพักระหว่างทาง และเมืองปราสาทหลายแห่งยังคงเก็บร่องรอยประวัติศาสตร์ไว้',
      '关东地区曾是德川幕府的核心，明治以后又以东京为中心成为日本的政治与经济中枢。各地仍保留着港口城镇、宿场町和城下町的历史痕迹。'
    ),
    regional_culture: createLocalizedText(
      '最先端のポップカルチャーと、下町の祭礼や職人文化が共存するのが特徴です。アニメ、ファッション、相撲、老舗の食文化まで幅広い魅力があります。',
      'Its character comes from the coexistence of cutting-edge pop culture and traditional downtown festivals and craftsmanship. Anime, fashion, sumo, and long-established food culture all thrive here.',
      'จุดเด่นของภูมิภาคนี้คือการอยู่ร่วมกันของป๊อปคัลเจอร์ล้ำสมัยกับเทศกาลชุมชนเก่าและวัฒนธรรมช่างฝีมือ มีเสน่ห์ตั้งแต่อะนิเมะ แฟชั่น ซูโม่ ไปจนถึงอาหารร้านเก่าแก่',
      '这里最大的特色是前沿流行文化与下町祭典、匠人文化并存。从动漫、时尚、相扑到老字号美食，魅力十分多元。'
    ),
    natural_features: createLocalizedText(
      '大都市圏の印象が強い一方で、日光の山々、箱根の温泉、湘南や房総の海岸線など自然の表情も豊かです。',
      'Although known for its giant metropolitan area, Kanto also offers rich natural scenery such as the mountains of Nikko, the hot springs of Hakone, and the coastlines of Shonan and Boso.',
      'แม้จะเป็นที่รู้จักในฐานะเขตมหานครขนาดใหญ่ แต่คันโตยังมีธรรมชาติที่หลากหลาย เช่น ภูเขาของนิกโกะ ออนเซ็นของฮาโกเนะ และแนวชายฝั่งโชนันกับโบโซ',
      '尽管以大都市圈著称，关东也拥有丰富自然景观，如日光山地、箱根温泉以及湘南和房总半岛的海岸线。'
    ),
    climate: createLocalizedText(
      '夏は高温多湿、冬は晴天の日が多く比較的乾燥します。平野部は雪が少ないものの、山間部では四季の景色の変化が楽しめます。',
      'Summers are hot and humid, while winters are relatively dry with many clear days. Snow is uncommon on the plains, but mountain areas show strong seasonal change.',
      'ฤดูร้อนร้อนและชื้น ส่วนฤดูหนาวค่อนข้างแห้งและมีวันที่ฟ้าโปร่งมาก พื้นที่ราบมีหิมะไม่มาก แต่เขตภูเขาจะเห็นความเปลี่ยนแปลงของฤดูกาลได้ชัด',
      '夏季炎热潮湿，冬季相对干燥且晴天较多。平原地区少雪，但山区四季变化十分明显。'
    ),
    local_cuisine: createLocalizedText(
      '江戸前寿司、もんじゃ焼き、深川めし、宇都宮餃子、横浜中華街の料理など、都市ごとに個性的な味が揃います。',
      'Local favorites include Edomae sushi, monjayaki, Fukagawa-meshi, Utsunomiya gyoza, and the diverse food culture of Yokohama Chinatown.',
      'อาหารเด่นได้แก่ ซูชิแบบเอโดะ มนจะยากิ ฟุคางาวะเมชิ เกี๊ยวซ่าอุสึโนะมิยะ และอาหารหลากหลายในไชน่าทาวน์โยโกฮามะ',
      '代表美食包括江户前寿司、文字烧、深川饭、宇都宫饺子，以及横滨中华街的多样料理。'
    ),
    accessibility: createLocalizedText(
      '成田・羽田の両空港に加え、新幹線、私鉄、地下鉄、バス網が極めて発達しています。日本国内の周遊拠点として非常に便利です。',
      'With both Narita and Haneda airports plus dense networks of Shinkansen, private railways, subways, and buses, Kanto is one of the easiest bases for travel around Japan.',
      'มีทั้งสนามบินนาริตะและฮาเนดะ รวมถึงเครือข่ายชินคันเซ็น รถไฟเอกชน รถไฟใต้ดิน และรถบัสที่พัฒนาอย่างมาก จึงเป็นฐานเดินทางในญี่ปุ่นที่สะดวกมาก',
      '关东拥有成田与羽田两大机场，以及极其发达的新干线、私铁、地铁和巴士网络，是游览日本时非常便利的枢纽。'
    ),
  },
  chubu: {
    history: createLocalizedText(
      '東西日本を結ぶ交通の要衝として発展し、中山道や東海道の宿場町、北陸の城下町、山間部の農村が独自の歴史を育みました。',
      'Chubu developed as a crossroads between eastern and western Japan, with post towns on the Nakasendo and Tokaido routes, castle towns in Hokuriku, and mountain villages each building their own histories.',
      'จูบุเติบโตขึ้นในฐานะจุดเชื่อมสำคัญระหว่างญี่ปุ่นตะวันออกและตะวันตก โดยมีทั้งเมืองพักริมเส้นทางนากาเซ็นโดและโทไคโด เมืองปราสาทในโฮคุริคุ และหมู่บ้านภูเขาที่มีประวัติศาสตร์เฉพาะตัว',
      '中部地区作为连接日本东西的重要交通枢纽而发展，中山道与东海道的宿场町、北陆的城下町以及山间村落都孕育出各自独特的历史。'
    ),
    regional_culture: createLocalizedText(
      '山岳信仰、祭屋台、漆器や和紙などの工芸、酒蔵文化が色濃く残ります。地域ごとの差が大きく、多様性に富んだ文化圏です。',
      'Mountain worship, ornate festival floats, crafts such as lacquerware and washi, and sake brewing traditions remain strong. The cultural character varies widely from one area to another.',
      'ยังคงมีร่องรอยชัดเจนของความเชื่อเกี่ยวกับภูเขา รถแห่เทศกาล งานฝีมืออย่างเครื่องเขินและกระดาษวาชิ รวมถึงวัฒนธรรมโรงหมักสาเก แต่ละพื้นที่มีบุคลิกต่างกันมากจึงเป็นภูมิภาคที่หลากหลายทางวัฒนธรรม',
      '这里保留着浓厚的山岳信仰、祭典花车、漆器和和纸等工艺，以及酒藏文化，各地差异明显，是一个文化多样性很高的地区。'
    ),
    natural_features: createLocalizedText(
      '富士山、日本アルプス、白川郷の雪景色、能登や伊豆の海岸線など、山と海の雄大な風景に恵まれています。',
      'The region is blessed with grand scenery shaped by both mountains and sea, including Mount Fuji, the Japanese Alps, snowy Shirakawa-go, and the coastlines of Noto and Izu.',
      'ภูมิภาคนี้อุดมด้วยทิวทัศน์ยิ่งใหญ่ทั้งภูเขาและทะเล เช่น ภูเขาไฟฟูจิ เทือกเขาแอลป์ญี่ปุ่น ทัศนียภาพหิมะของชิราคาวาโกะ และแนวชายฝั่งโนโตะกับอิซุ',
      '这里兼具山海壮丽景观，包括富士山、日本阿尔卑斯山、白川乡雪景以及能登和伊豆海岸线。'
    ),
    climate: createLocalizedText(
      '太平洋側の温暖な地域から、日本海側の豪雪地帯、高原の冷涼な気候まで差が大きいのが特徴です。',
      'One hallmark of Chubu is its broad climatic range, from the mild Pacific side to the snowy Sea of Japan side and the cool conditions of highland areas.',
      'จุดเด่นของจูบุคือสภาพอากาศที่แตกต่างกันมาก ตั้งแต่เขตอบอุ่นฝั่งแปซิฟิก เขตหิมะหนักฝั่งทะเลญี่ปุ่น ไปจนถึงอากาศเย็นของพื้นที่สูง',
      '中部的气候差异很大，从太平洋一侧的温暖地区，到日本海一侧的豪雪地带，再到高原地区的凉爽气候都有。'
    ),
    local_cuisine: createLocalizedText(
      '飛騨牛、ほうとう、越前がに、味噌文化を生かした料理、地酒など、土地ごとの名物が充実しています。',
      'Regional specialties include Hida beef, hoto noodles, Echizen crab, dishes built around rich miso traditions, and excellent local sake.',
      'อาหารขึ้นชื่อมีทั้งเนื้อฮิดะ โฮโตะ ปูเอจิเซ็น เมนูที่ใช้มิโซะอย่างเข้มข้น และสาเกท้องถิ่นคุณภาพดี',
      '代表美食有飞驒牛、馎饦面、越前蟹、浓厚味噌料理以及优质地酒。'
    ),
    accessibility: createLocalizedText(
      '東海道・北陸新幹線に加え、高速道路網や特急列車が発達しています。中部国際空港や小松空港など空路も利用しやすい地域です。',
      'The area is well served by the Tokaido and Hokuriku Shinkansen, express trains, and expressways. Air access through Chubu Centrair and regional airports is also convenient.',
      'มีทั้งโทไคโดและโฮคุริคุชินคันเซ็น เครือข่ายทางด่วน และรถไฟด่วนที่ครอบคลุม อีกทั้งยังใช้สนามบินชูบุเซ็นแทรร์และสนามบินภูมิภาคอื่น ๆ ได้สะดวก',
      '中部地区有东海道、北陆新干线，以及完善的高速公路和特急列车网络，通过中部国际机场和地方机场出行也很方便。'
    ),
  },
  kansai: {
    history: createLocalizedText(
      '長く日本の政治・宗教・文化の中心を担ってきた地域で、京都や奈良には古代から中世にかけての都の記憶が色濃く残ります。',
      'Kansai long served as a political, religious, and cultural heart of Japan, and cities such as Kyoto and Nara still carry the memory of ancient and medieval capitals.',
      'คันไซเคยเป็นศูนย์กลางการเมือง ศาสนา และวัฒนธรรมของญี่ปุ่นมาอย่างยาวนาน เมืองอย่างเกียวโตและนารายังคงสะท้อนความทรงจำของอดีตราชธานีอย่างชัดเจน',
      '关西长期扮演着日本政治、宗教与文化核心的角色，京都和奈良等城市至今仍保留着古代与中世纪都城的浓厚记忆。'
    ),
    regional_culture: createLocalizedText(
      '茶道、能、文楽、祇園祭などの伝統文化に加え、商人文化や笑いの文化も根強く、格式と親しみやすさが共存しています。',
      'Tea ceremony, Noh, Bunraku, and famous festivals such as Gion Matsuri coexist with merchant culture and a strong tradition of humor, giving Kansai both elegance and warmth.',
      'ทั้งพิธีชงชา โนห์ บุนราคุ และเทศกาลดังอย่างกิองมัตสึริ อยู่ร่วมกับวัฒนธรรมพ่อค้าและอารมณ์ขันแบบคันไซ ทำให้ภูมิภาคนี้มีทั้งความงดงามและความเป็นกันเอง',
      '茶道、能乐、文乐、祇园祭等传统文化，与商人文化及浓厚的幽默感并存，使关西兼具典雅与亲切。'
    ),
    natural_features: createLocalizedText(
      '琵琶湖、紀伊山地、瀬戸内の海辺などがあり、歴史都市の近くに豊かな自然が広がっています。',
      'Lake Biwa, the Kii Mountains, and Seto Inland Sea coastlines show that rich nature lies close to the historic cities of Kansai.',
      'มีทั้งทะเลสาบบิวะ เทือกเขาคิอิ และชายฝั่งทะเลเซโตะใน ทำให้เห็นว่าธรรมชาติอุดมสมบูรณ์อยู่ใกล้เมืองประวัติศาสตร์ของคันไซมาก',
      '这里拥有琵琶湖、纪伊山地和濑户内海沿岸，丰富自然与历史城市之间距离很近。'
    ),
    climate: createLocalizedText(
      '平野部は夏の蒸し暑さが強く、冬は比較的穏やかです。山間部や日本海側では積雪も見られます。',
      'Lowland areas are hot and humid in summer and relatively mild in winter, while mountain districts and the Sea of Japan side can see snow.',
      'พื้นที่ราบจะร้อนชื้นมากในฤดูร้อน และฤดูหนาวค่อนข้างไม่รุนแรง ส่วนเขตภูเขาและฝั่งทะเลญี่ปุ่นอาจมีหิมะตก',
      '平原地区夏季闷热，冬季相对温和，山区和日本海一侧则可能降雪。'
    ),
    local_cuisine: createLocalizedText(
      '京料理、湯豆腐、たこ焼き、お好み焼き、串カツ、神戸牛など、上品さと庶民的な味が共に楽しめます。',
      'Kyoto cuisine, yudofu, takoyaki, okonomiyaki, kushikatsu, and Kobe beef show how refined food and everyday comfort food coexist here.',
      'มีทั้งอาหารเกียวโต ยูโดฟุ ทาโกะยากิ โอโคโนมิยากิ คุชิคัตสึ และเนื้อโกเบ แสดงให้เห็นทั้งความประณีตและความอร่อยแบบเข้าถึงง่าย',
      '京都料理、汤豆腐、章鱼烧、大阪烧、串炸和神户牛等美食并存，既有精致风味，也有亲民小吃。'
    ),
    accessibility: createLocalizedText(
      '関西国際空港や伊丹空港、東海道・山陽新幹線、私鉄網が充実しており、都市間移動も日帰り観光も容易です。',
      'Kansai is easy to navigate thanks to Kansai International Airport, Itami Airport, the Tokaido and Sanyo Shinkansen, and dense private railway networks.',
      'เดินทางในคันไซได้ง่ายด้วยสนามบินคันไซและอิตามิ รวมถึงโทไคโดและซันโยชินคันเซ็น ตลอดจนเครือข่ายรถไฟเอกชนที่หนาแน่น',
      '关西拥有关西国际机场、伊丹机场、东海道与山阳新干线以及密集的私铁网络，城市间移动和一日游都很方便。'
    ),
  },
  chugoku: {
    history: createLocalizedText(
      '毛利氏などの大名文化、山陰山陽を結ぶ交易、瀬戸内海の海運によって発展してきた地域です。広島は戦後、平和都市として再生を遂げました。',
      'The region developed through daimyo culture led by clans such as the Mori, trade linking Sanin and Sanyo, and maritime routes on the Seto Inland Sea. Hiroshima was later rebuilt as a city of peace.',
      'ภูมิภาคนี้พัฒนาขึ้นจากวัฒนธรรมไดเมียวอย่างตระกูลโมริ การค้าระหว่างซันอินกับซันโย และการคมนาคมทางทะเลในทะเลเซโตะใน เมืองฮิโรชิม่าหลังสงครามก็ได้รับการฟื้นฟูขึ้นใหม่ในฐานะเมืองแห่งสันติภาพ',
      '该地区在毛利氏等大名文化、连接山阴与山阳的贸易以及濑户内海海运的推动下发展起来。广岛在战后重建，成为和平之城。'
    ),
    regional_culture: createLocalizedText(
      '神楽や伝統芸能、焼き物、神話の残る社寺文化などが受け継がれています。瀬戸内の穏やかな港町文化も魅力の一つです。',
      'Kagura performances, traditional crafts, ceramics, and shrine traditions tied to ancient myths remain deeply rooted. Calm port-town culture along the Seto Inland Sea is another draw.',
      'ยังคงสืบทอดการแสดงคางุระ งานฝีมือ เครื่องปั้นดินเผา และวัฒนธรรมศาลเจ้าที่เกี่ยวข้องกับตำนานโบราณ อีกเสน่ห์หนึ่งคือวัฒนธรรมเมืองท่าที่สงบของทะเลเซโตะใน',
      '神乐、传统艺能、陶艺以及与古老神话相连的社寺文化在这里仍被传承，濑户内海沿岸宁静的港口文化也是魅力之一。'
    ),
    natural_features: createLocalizedText(
      '鳥取砂丘、帝釈峡、中国山地、瀬戸内の多島美など、海・山・大地の変化に富んだ景観が広がります。',
      'The landscape ranges from the Tottori Sand Dunes and Taishaku Gorge to the Chugoku Mountains and the island-dotted beauty of the Seto Inland Sea.',
      'มีทิวทัศน์ที่หลากหลายทั้งเนินทรายทตโตริ ช่องเขาไทชาคุ เทือกเขาจูโกกุ และความงามของหมู่เกาะในทะเลเซโตะใน',
      '这里景观变化丰富，包括鸟取沙丘、帝释峡、中国山地以及濑户内海多岛海景。'
    ),
    climate: createLocalizedText(
      '瀬戸内海側は晴天が多く温暖ですが、日本海側は雨や雪が多めです。同じ地方でも気候差がはっきりしています。',
      'The Seto Inland Sea side is generally sunny and mild, while the Sea of Japan side sees more rain and snow. Climatic contrasts within the region are quite clear.',
      'ฝั่งทะเลเซโตะในมักมีอากาศอบอุ่นและแดดดี ส่วนฝั่งทะเลญี่ปุ่นมีฝนและหิมะมากกว่า ทำให้ภูมิภาคเดียวกันนี้มีความต่างด้านภูมิอากาศชัดเจน',
      '濑户内海一侧通常阳光充足且温暖，而日本海一侧雨雪较多，同一地区内部的气候差异十分明显。'
    ),
    local_cuisine: createLocalizedText(
      '広島風お好み焼き、牡蠣、出雲そば、ふぐ、瀬戸内の魚介類など、海と山の恵みを生かした料理が豊富です。',
      'Hiroshima-style okonomiyaki, oysters, Izumo soba, fugu, and seafood from the Seto Inland Sea highlight the regional table.',
      'มีอาหารเด่นอย่างโอโคโนมิยากิสไตล์ฮิโรชิม่า หอยนางรม อิซุโมะโซบะ ปลาปักเป้า และอาหารทะเลจากทะเลเซโตะใน',
      '广岛风御好烧、牡蛎、出云荞麦面、河豚和濑户内海海鲜等，展现了这里丰富的山海风味。'
    ),
    accessibility: createLocalizedText(
      '山陽新幹線が主要都市を結び、空港やフェリーも利用できます。広島や岡山を拠点に周辺観光地へアクセスしやすい地方です。',
      'Major cities are linked by the Sanyo Shinkansen, with airports and ferries adding flexibility. Hiroshima and Okayama make useful bases for exploring the wider area.',
      'เมืองหลักเชื่อมกันด้วยซันโยชินคันเซ็น และยังมีสนามบินกับเรือเฟอร์รีให้เลือกใช้ ฮิโรชิม่าและโอคายามะจึงเป็นฐานที่ดีสำหรับเที่ยวพื้นที่รอบ ๆ',
      '主要城市由山阳新干线连接，也可利用机场和渡轮。以广岛或冈山为据点前往周边景点都很方便。'
    ),
  },
  shikoku: {
    history: createLocalizedText(
      '古くから海上交通と信仰の道で栄え、江戸時代には城下町や港町が発展しました。四国遍路は今も地域の精神文化を象徴しています。',
      'Shikoku prospered through maritime routes and pilgrimage traditions, while castle towns and ports grew during the Edo period. The Shikoku Pilgrimage still symbolizes the spiritual character of the region.',
      'ชิโกกุรุ่งเรืองมาจากเส้นทางทางทะเลและประเพณีแสวงบุญ โดยในสมัยเอโดะเมืองปราสาทและเมืองท่าก็เติบโตขึ้น การจาริก 88 วัดยังคงเป็นสัญลักษณ์ของจิตวิญญาณภูมิภาคนี้จนถึงปัจจุบัน',
      '四国自古因海上交通与信仰之路而繁荣，江户时期城下町和港口城镇进一步发展。四国遍路至今仍象征着这里的精神文化。'
    ),
    regional_culture: createLocalizedText(
      'お遍路文化、阿波おどり、藍染や和紙などの工芸が受け継がれています。土地の穏やかさと信仰文化の深さが共存しています。',
      'Pilgrimage culture, the Awa Odori dance festival, and crafts such as indigo dyeing and washi remain central to local identity. Calm daily life and deep religious traditions coexist here.',
      'วัฒนธรรมการแสวงบุญ การเต้นอาวะโอโดริ และงานฝีมืออย่างการย้อมครามกับกระดาษวาชิยังคงเป็นแกนหลักของอัตลักษณ์ท้องถิ่น วิถีชีวิตสงบและศรัทธาอันลึกซึ้งอยู่ร่วมกันได้อย่างกลมกลืน',
      '遍路文化、阿波舞以及蓝染、和纸等工艺仍是当地身份的重要部分，平和的生活节奏与深厚的信仰传统在此并存。'
    ),
    natural_features: createLocalizedText(
      '四万十川、祖谷渓、室戸岬、足摺岬など、清流や渓谷、海岸景観に恵まれています。',
      'Natural highlights include the Shimanto River, Iya Valley, Cape Muroto, and Cape Ashizuri, offering clear rivers, deep gorges, and dramatic coastal views.',
      'จุดเด่นทางธรรมชาติ ได้แก่ แม่น้ำชิมันโตะ หุบเขาอิยะ แหลมมุโระโตะ และแหลมอาชิซุริ ซึ่งมีทั้งลำน้ำใส หุบเขาลึก และวิวชายฝั่งอันน่าตื่นตา',
      '自然亮点包括四万十川、祖谷溪、室户岬和足摺岬，拥有清流、峡谷与壮观海岸景色。'
    ),
    climate: createLocalizedText(
      '瀬戸内側は比較的温暖で晴天が多く、太平洋側は雨量が多めです。夏から秋にかけては台風の影響を受けやすい地域です。',
      'The Seto Inland Sea side is generally mild and sunny, while the Pacific side is wetter. The region is also more exposed to typhoons from summer into autumn.',
      'ฝั่งทะเลเซโตะในค่อนข้างอบอุ่นและมีแดดมาก ส่วนฝั่งมหาสมุทรแปซิฟิกมีฝนมากกว่า และตั้งแต่ฤดูร้อนถึงฤดูใบไม้ร่วงมักได้รับอิทธิพลจากไต้ฝุ่น',
      '濑户内海一侧通常温暖晴朗，太平洋一侧降水较多，夏秋季也较容易受到台风影响。'
    ),
    local_cuisine: createLocalizedText(
      '讃岐うどん、かつおのたたき、鯛めし、柑橘類、徳島ラーメンなど、素朴ながら記憶に残る味が揃います。',
      'Sanuki udon, seared bonito, tai-meshi, citrus fruits, and Tokushima ramen are among the memorable local specialties.',
      'มีเมนูเด่นอย่างซานุกิอุด้ง คัตสึโอะทาทากิ ข้าวปลาไท ผลไม้ตระกูลส้ม และโทคุชิมะราเม็ง ซึ่งล้วนเรียบง่ายแต่จดจำได้ดี',
      '赞岐乌冬、炙烤鲣鱼、鲷鱼饭、柑橘类水果和德岛拉面等，都是朴实却令人难忘的地方味道。'
    ),
    accessibility: createLocalizedText(
      '本州とは瀬戸大橋などの連絡橋で結ばれ、高松・松山・高知・徳島の各空港も利用できます。鉄道はややゆったりしているため、レンタカー旅も人気です。',
      'Shikoku is connected to Honshu by major bridges such as the Great Seto Bridge, and airports in Takamatsu, Matsuyama, Kochi, and Tokushima add options. Because rail travel is slower, road trips are also popular.',
      'ชิโกกุเชื่อมกับฮอนชูผ่านสะพานใหญ่ เช่น สะพานเซโตะ และยังใช้สนามบินที่ทาคามัตสึ มัตสึยามะ โคจิ และโทคุชิมะได้ด้วย เนื่องจากรถไฟค่อนข้างช้า การเช่ารถขับจึงเป็นทางเลือกยอดนิยม',
      '四国通过濑户大桥等联络桥与本州相连，也可利用高松、松山、高知和德岛机场。由于铁路节奏较慢，自驾旅行也很受欢迎。'
    ),
  },
  kyushu: {
    history: createLocalizedText(
      '古くからアジアとの交流の玄関口であり、貿易、キリスト教伝来、近代産業の発展など、日本史の転換点にたびたび登場する地域です。',
      'Kyushu has long served as the gateway from Japan to Asia and appears repeatedly at turning points in national history through trade, the arrival of Christianity, and modern industrial development.',
      'คิวชูเป็นประตูสู่เอเชียของญี่ปุ่นมาแต่โบราณ และมักปรากฏในจุดเปลี่ยนสำคัญของประวัติศาสตร์ญี่ปุ่น ทั้งด้านการค้า การเข้ามาของคริสต์ศาสนา และการพัฒนาอุตสาหกรรมสมัยใหม่',
      '九州自古就是日本通往亚洲的门户，在贸易、基督教传入以及近代工业发展等日本历史转折点上都占有重要位置。'
    ),
    regional_culture: createLocalizedText(
      '博多祇園山笠や長崎くんちなどの祭り、焼き物文化、温泉文化、南国らしい開放的な気質が地域性をつくっています。',
      'Festivals such as Hakata Gion Yamakasa and Nagasaki Kunchi, ceramic traditions, hot spring culture, and a warm, open atmosphere shape local identity.',
      'เทศกาลอย่างฮากาตะกิองยามากาสะและนางาซากิคุนจิ วัฒนธรรมเครื่องปั้นดินเผา วัฒนธรรมออนเซ็น และบรรยากาศเปิดกว้างแบบเมืองใต้ ล้วนสร้างเอกลักษณ์ของภูมิภาคนี้',
      '博多祇园山笠、长崎宫日节等祭典、陶瓷文化、温泉文化以及南方特有的开放气质，共同塑造了九州的地方特色。'
    ),
    natural_features: createLocalizedText(
      '阿蘇山、桜島、霧島連山、海岸線、温泉地など、火山が生み出したダイナミックな自然に恵まれています。',
      'Kyushu is rich in dramatic volcanic scenery, including Mount Aso, Sakurajima, the Kirishima range, rugged coastlines, and famous hot spring areas.',
      'คิวชูเต็มไปด้วยธรรมชาติอันยิ่งใหญ่จากภูเขาไฟ เช่น ภูเขาอะโสะ ซากุระจิมะ เทือกเขาคิริชิมะ แนวชายฝั่ง และแหล่งออนเซ็นชื่อดัง',
      '九州拥有由火山塑造的壮丽自然景观，包括阿苏山、樱岛、雾岛连山、海岸线以及知名温泉地。'
    ),
    climate: createLocalizedText(
      '全体的に温暖で、北部と南部で気候差があります。梅雨や台風の影響を受けやすい一方、冬も比較的過ごしやすい地域です。',
      'The climate is generally warm, with noticeable differences between north and south. Rainy season and typhoons have a strong influence, but winters are often relatively mild.',
      'โดยรวมมีอากาศอบอุ่นและมีความแตกต่างระหว่างตอนเหนือกับตอนใต้ ได้รับอิทธิพลจากฤดูฝนและไต้ฝุ่นค่อนข้างมาก แต่ฤดูหนาวมักไม่รุนแรงนัก',
      '整体气候温暖，南北之间存在差异。这里较容易受到梅雨和台风影响，但冬季通常也相对温和。'
    ),
    local_cuisine: createLocalizedText(
      '博多ラーメン、もつ鍋、宮崎のチキン南蛮、鹿児島黒豚、焼酎など、力強く個性のある味が集まっています。',
      'Strong regional flavors include Hakata ramen, motsunabe, Miyazaki chicken nanban, Kagoshima black pork, and a wide range of shochu.',
      'มีรสชาติท้องถิ่นที่ชัดเจน เช่น ฮากาตะราเม็ง โมตสึนาเบะ ไก่นัมบังของมิยาซากิ หมูดำคาโกชิมะ และโชจูหลากหลายชนิด',
      '这里汇集了风味鲜明的地方美食，如博多拉面、内脏锅、宫崎南蛮鸡、鹿儿岛黑猪和各种烧酒。'
    ),
    accessibility: createLocalizedText(
      '九州新幹線や西九州新幹線、各都市の空港、港からのフェリー網が整っており、南北の周遊旅行がしやすい地域です。',
      'The Kyushu and Nishi-Kyushu Shinkansen, city airports, and ferry links from major ports make travel across the region relatively easy.',
      'มีทั้งคิวชูชินคันเซ็น นิชิคิวชูชินคันเซ็น สนามบินในเมืองหลัก และเครือข่ายเรือเฟอร์รีจากท่าเรือสำคัญ ทำให้เดินทางเที่ยวเหนือจรดใต้ได้สะดวก',
      '九州新干线、西九州新干线、各城市机场以及主要港口的渡轮网络，使得纵向游览整个地区相当方便。'
    ),
  },
  okinawa: {
    history: createLocalizedText(
      'かつて琉球王国として海上交易で栄え、1879年に沖縄県となりました。戦争の記憶と戦後復興の歴史も、現在の沖縄を理解する上で欠かせません。',
      'Once prosperous as the Ryukyu Kingdom through maritime trade, Okinawa became a Japanese prefecture in 1879. Memories of war and postwar recovery are also essential to understanding the islands today.',
      'ครั้งหนึ่งเคยรุ่งเรืองในฐานะอาณาจักรริวกิวจากการค้าทางทะเล ก่อนจะกลายเป็นจังหวัดโอกินาว่าในปี 1879 ความทรงจำจากสงครามและการฟื้นฟูหลังสงครามก็เป็นส่วนสำคัญในการเข้าใจโอกินาว่าในปัจจุบัน',
      '冲绳曾以琉球王国身份凭借海上贸易而繁荣，并于1879年成为冲绳县。战争记忆与战后复兴历史，也是理解今日冲绳不可缺少的一部分。'
    ),
    regional_culture: createLocalizedText(
      '三線、エイサー、琉球舞踊、紅型、空手など、本土とは異なる独自の文化が今も日常に息づいています。',
      'Sanshin music, Eisa dance, Ryukyu dance, bingata dyeing, and karate all reflect a living culture distinct from mainland Japan.',
      'ดนตรีซันชิน การเต้นเอสะ ระบำริวกิว การย้อมผ้าบิงาตะ และคาราเต้ ล้วนสะท้อนวัฒนธรรมมีชีวิตที่แตกต่างจากญี่ปุ่นแผ่นดินใหญ่',
      '三线、Eisa舞、琉球舞蹈、红型染与空手等，都体现了至今仍鲜活存在、且不同于日本本土的独特文化。'
    ),
    natural_features: createLocalizedText(
      '透明度の高い海、サンゴ礁、マングローブ、離島のビーチなど、南国らしい海洋自然が圧倒的です。',
      'Crystal-clear seas, coral reefs, mangroves, and remote island beaches make Okinawa one of the most striking marine environments in Japan.',
      'ทะเลใส แนวปะการัง ป่าชายเลน และชายหาดของเกาะห่างไกล ทำให้โอกินาว่าเป็นหนึ่งในภูมิทัศน์ทางทะเลที่โดดเด่นที่สุดของญี่ปุ่น',
      '清澈海水、珊瑚礁、红树林以及离岛海滩，共同构成了冲绳极具代表性的海洋自然景观。'
    ),
    climate: createLocalizedText(
      '一年を通して温暖な亜熱帯性気候で、夏は長く日差しが強めです。梅雨と台風の時期には天候の変化に注意が必要です。',
      'The islands have a warm subtropical climate year-round, with long sunny summers. Visitors should watch for changing weather during the rainy season and typhoon periods.',
      'มีภูมิอากาศกึ่งเขตร้อนอบอุ่นตลอดปี ฤดูร้อนยาวและแดดแรง ควรระวังสภาพอากาศที่เปลี่ยนแปลงในช่วงฤดูฝนและฤดูไต้ฝุ่น',
      '这里全年温暖，属于亚热带气候，夏季漫长且阳光强烈。梅雨和台风季节需要特别留意天气变化。'
    ),
    local_cuisine: createLocalizedText(
      '沖縄そば、ゴーヤーチャンプルー、ラフテー、タコライス、海ぶどう、泡盛など、独自性の高い食文化が楽しめます。',
      'Distinctive food culture includes Okinawa soba, goya champuru, rafute, taco rice, sea grapes, and awamori.',
      'มีอาหารเอกลักษณ์อย่างโอกินาว่าโซบะ โกยะจัมปุรุ ราฟุเตะ ทาโกะไรซ์ องุ่นทะเล และอาวาโมริ',
      '独具特色的饮食文化包括冲绳荞麦面、苦瓜炒杂烩、红烧五花肉、塔可饭、海葡萄和泡盛。'
    ),
    accessibility: createLocalizedText(
      '那覇空港が主な玄関口で、離島へは飛行機やフェリーが利用できます。島ごとに移動時間が異なるため、旅程には余裕を持つのがおすすめです。',
      'Naha Airport is the main gateway, and outlying islands can be reached by plane or ferry. Because travel times vary widely by island, a flexible itinerary works best.',
      'สนามบินนาฮะเป็นประตูหลัก ส่วนเกาะรอบนอกสามารถเดินทางต่อได้ด้วยเครื่องบินหรือเรือเฟอร์รี เนื่องจากเวลาเดินทางแต่ละเกาะต่างกันมาก จึงควรวางแผนเผื่อเวลาไว้',
      '那霸机场是主要门户，前往离岛可搭乘飞机或渡轮。由于各岛之间所需时间差异较大，行程安排最好预留弹性。'
    ),
  },
};

const PLACE_SUPPLEMENTS: Record<string, Record<string, PlaceSupplement>> = {
  chubu: {
    kanazawa: {
      history: createLocalizedText(
        '加賀藩前田家の城下町として栄え、第二次世界大戦の戦災を比較的免れたため、武家屋敷や茶屋街の町並みがよく残っています。',
        'Kanazawa flourished as the castle town of the Maeda clan in Kaga Domain. Because it escaped major wartime destruction, samurai districts and teahouse streets remain beautifully preserved.',
        'คานาซาวะรุ่งเรืองในฐานะเมืองปราสาทของตระกูลมาเอดะแห่งแคว้นคางะ และเพราะได้รับความเสียหายจากสงครามน้อย เมืองจึงยังคงย่านซามูไรและย่านโรงน้ำชาเก่าไว้ได้อย่างงดงาม',
        '金泽曾作为加贺藩前田家的城下町而繁荣。由于二战中较少遭到破坏，武家屋敷与茶屋街风貌得以很好地保存。'
      ),
      culture_festivals: createLocalizedText(
        '初夏の金沢百万石まつりが特に有名で、加賀藩ゆかりの華やかな行列が街を彩ります。伝統芸能や工芸体験も充実しています。',
        'The Kanazawa Hyakumangoku Festival in early summer is the best-known event, with elegant parades celebrating the Kaga domain. Traditional arts and craft experiences are also abundant.',
        'งานเด่นคือเทศกาลคานาซาวะเฮียคุมังกกุในต้นฤดูร้อน ซึ่งมีขบวนแห่หรูหราที่สะท้อนยุคแคว้นคางะ นอกจากนี้ยังมีกิจกรรมศิลปะการแสดงและงานฝีมือดั้งเดิมมากมาย',
        '最著名的是初夏举办的金泽百万石祭，以再现加贺藩风华的华丽游行闻名，传统艺能和工艺体验也很丰富。'
      ),
      things_to_do: createLocalizedText(
        '兼六園、ひがし茶屋街、近江町市場、長町武家屋敷跡、21世紀美術館などを巡るのがおすすめです。',
        'Recommended stops include Kenrokuen, Higashi Chaya District, Omicho Market, the Nagamachi samurai district, and the 21st Century Museum of Contemporary Art.',
        'สถานที่แนะนำ ได้แก่ สวนเค็นโรคุเอ็น ย่านฮิงาชิชายะ ตลาดโอมิโจ ย่านซามูไรนางามาจิ และพิพิธภัณฑ์ศิลปะร่วมสมัยศตวรรษที่ 21',
        '推荐游览兼六园、东茶屋街、近江町市场、长町武家屋敷遗迹以及21世纪美术馆。'
      ),
      local_cuisine: createLocalizedText(
        'のどぐろやカニなどの海鮮、治部煮、金箔スイーツ、加賀野菜を使った料理が人気です。',
        'Popular foods include seafood such as rosy seabass and crab, jibu-ni stew, gold leaf sweets, and dishes made with Kaga vegetables.',
        'อาหารยอดนิยม ได้แก่ อาหารทะเลอย่างปลาโนโดกุโระและปู สตูว์จิบุนิ ขนมทองคำเปลว และอาหารที่ใช้ผักคางะ',
        '人气美食包括喉黑鱼、螃蟹等海鲜、治部煮、金箔甜点以及使用加贺蔬菜制作的料理。'
      ),
      access: createLocalizedText(
        '東京から北陸新幹線で約2時間半。市内観光は周遊バスが便利で、主要見どころを効率よく回れます。',
        'It takes about 2.5 hours from Tokyo on the Hokuriku Shinkansen. Loop buses make it easy to visit the main sights within the city.',
        'จากโตเกียวใช้เวลาประมาณ 2 ชั่วโมงครึ่งด้วยโฮคุริคุชินคันเซ็น การเที่ยวในเมืองสะดวกด้วยรถบัสวนรอบที่เชื่อมจุดสำคัญต่าง ๆ',
        '从东京搭乘北陆新干线约2个半小时。市内有便利的观光循环巴士，可高效游览主要景点。'
      ),
    },
    'shirakawa-go': {
      history: createLocalizedText(
        '豪雪に適応した合掌造りの家々が受け継がれ、養蚕や農業で暮らしを支えてきた山村です。現在は世界遺産として保存されています。',
        'This mountain village preserved gassho-zukuri houses designed for heavy snow, and local life was long supported by farming and sericulture. Today it is protected as a World Heritage site.',
        'หมู่บ้านภูเขาแห่งนี้สืบทอดบ้านกัสโชซูคุริที่ออกแบบให้รับมือหิมะหนัก วิถีชีวิตเคยพึ่งพาเกษตรกรรมและการเลี้ยงไหม ปัจจุบันได้รับการอนุรักษ์เป็นมรดกโลก',
        '这个山村保留了适应豪雪环境的合掌造民居，当地过去依靠农业和养蚕维生，如今作为世界遗产受到保护。'
      ),
      culture_festivals: createLocalizedText(
        'どぶろく祭や冬のライトアップが有名で、季節ごとに集落の表情が大きく変わります。昔ながらの生活文化に触れられるのも魅力です。',
        'The Doburoku Festival and winter illuminations are especially well known, and the village changes dramatically with the seasons. Visitors can also experience elements of traditional rural life.',
        'มีชื่อเสียงจากเทศกาลโดบุโระกุและการประดับไฟฤดูหนาว โดยบรรยากาศของหมู่บ้านจะเปลี่ยนไปมากในแต่ละฤดูกาล อีกเสน่ห์คือการได้สัมผัสวิถีชีวิตชนบทแบบดั้งเดิม',
        '浊酒祭和冬季点灯活动尤其有名，村落会随季节呈现截然不同的面貌，也能让人感受到传统山村生活文化。'
      ),
      things_to_do: createLocalizedText(
        '荻町集落の散策、展望台からの眺望、合掌造り民家園の見学、雪景色や田園風景の写真撮影がおすすめです。',
        'Recommended activities include walking through Ogimachi, viewing the village from the observation deck, visiting open-air farmhouse museums, and photographing the seasonal scenery.',
        'กิจกรรมแนะนำคือเดินชมหมู่บ้านโอกิมาจิ ชมวิวจากจุดชมวิว เยี่ยมชมพิพิธภัณฑ์บ้านกัสโช และถ่ายภาพทิวทัศน์ตามฤดูกาล',
        '推荐活动包括漫步荻町聚落、在观景台俯瞰全景、参观合掌造民家园，以及拍摄四季风景。'
      ),
      local_cuisine: createLocalizedText(
        '飛騨牛、五平餅、山菜料理、そば、地酒やどぶろくなど、山里ならではの素朴な味が楽しめます。',
        'Hida beef, gohei mochi, mountain vegetable dishes, soba, local sake, and doburoku offer hearty mountain flavors.',
        'สามารถลิ้มลองรสชาติแบบหมู่บ้านภูเขา เช่น เนื้อฮิดะ โกเฮโมจิ อาหารผักป่า โซบะ สาเกท้องถิ่น และโดบุโระกุ',
        '可以品尝飞驒牛、五平饼、山菜料理、荞麦面、地酒和浊酒等具有山村风味的美食。'
      ),
      access: createLocalizedText(
        '鉄道駅はなく、高山・金沢・白川郷を結ぶ高速バスの利用が一般的です。冬季は天候による遅延にも注意が必要です。',
        'There is no train station in the village, so highway buses from Takayama, Kanazawa, and nearby cities are the standard way to visit. In winter, weather-related delays are possible.',
        'ไม่มีสถานีรถไฟในหมู่บ้าน การเดินทางหลักคือรถบัสด่วนจากทาคายามะ คานาซาวะ และเมืองใกล้เคียง โดยฤดูหนาวควรเผื่อเวลาสำหรับความล่าช้าจากสภาพอากาศ',
        '白川乡没有铁路车站，通常需搭乘来自高山、金泽等地的高速巴士前往。冬季还需留意天气造成的延误。'
      ),
    },
    takayama: {
      history: createLocalizedText(
        '江戸時代には幕府直轄地として栄え、商人町の古い町並みが今も残ります。周辺の飛騨文化と木工技術も高山の歴史を支えてきました。',
        'Takayama prospered as a shogunate-controlled town in the Edo period, and its merchant streets survive today. Hida culture and woodworking traditions are also central to its history.',
        'ทาคายามะรุ่งเรืองในสมัยเอโดะในฐานะเมืองที่อยู่ภายใต้การปกครองโดยตรงของโชกุน และถนนย่านพ่อค้าเก่ายังคงหลงเหลือมาถึงปัจจุบัน วัฒนธรรมฮิดะและงานไม้ก็เป็นส่วนสำคัญของประวัติศาสตร์เมืองนี้',
        '高山在江户时代曾作为幕府直辖地而繁荣，商人街的古老街景至今仍保存完好，飞驒文化与木工传统也构成了这座城市的重要历史。'
      ),
      culture_festivals: createLocalizedText(
        '春と秋の高山祭は豪華な屋台で知られ、日本屈指の美しい祭りとされます。朝市や地酒文化も旅情を高めてくれます。',
        'The spring and autumn Takayama Festivals are famous for their ornate floats and are often ranked among the most beautiful festivals in Japan. Morning markets and sake culture add to the charm.',
        'เทศกาลทาคายามะฤดูใบไม้ผลิและฤดูใบไม้ร่วงมีชื่อเสียงจากรถแห่ที่วิจิตร และมักถูกยกให้เป็นหนึ่งในเทศกาลที่สวยที่สุดของญี่ปุ่น ตลาดเช้าและวัฒนธรรมสาเกก็ช่วยเพิ่มเสน่ห์ของเมือง',
        '春秋两季的高山祭以华丽屋台著称，被视为日本最美的祭典之一，晨市与地酒文化也让旅程更有风情。'
      ),
      things_to_do: createLocalizedText(
        '古い町並みの散策、宮川朝市、飛騨民俗村、酒蔵巡り、近郊の上高地や白川郷への小旅行がおすすめです。',
        'Highlights include walking the old town, browsing the Miyagawa morning market, visiting Hida Folk Village, touring sake breweries, and making side trips to Kamikochi or Shirakawa-go.',
        'ไฮไลต์คือการเดินชมเมืองเก่า ตลาดเช้ามิยากาวะ หมู่บ้านพื้นบ้านฮิดะ การเยี่ยมชมโรงหมักสาเก และการเดินทางต่อไปคามิโคจิหรือชิราคาวาโกะ',
        '推荐活动包括漫步古街、逛宫川朝市、参观飞驒民俗村、走访酒藏，以及前往上高地或白川乡一日游。'
      ),
      local_cuisine: createLocalizedText(
        '飛騨牛、朴葉味噌、高山ラーメン、みたらし団子などが定番で、素朴で香り高い山の味が魅力です。',
        'Classic local foods include Hida beef, hoba miso, Takayama ramen, and mitarashi dango, all reflecting the fragrant simplicity of mountain cuisine.',
        'อาหารประจำถิ่นที่ควรลอง ได้แก่ เนื้อฮิดะ โฮบะมิโสะ ทาคายามะราเม็ง และดังโงะมิตาราชิ ซึ่งสะท้อนรสชาติเรียบง่ายแบบเมืองภูเขา',
        '经典美食包括飞驒牛、朴叶味噌、高山拉面和御手洗团子，展现了山地料理朴实而有香气的风味。'
      ),
      access: createLocalizedText(
        '名古屋や富山からJR特急でアクセスでき、白川郷や新穂高方面へのバス便も豊富です。コンパクトな街なので徒歩観光もしやすいです。',
        'Takayama is accessible by JR limited express from Nagoya and Toyama, and buses connect the city to Shirakawa-go and the Shinhotaka area. The center is compact and easy to explore on foot.',
        'สามารถเดินทางถึงทาคายามะได้ด้วยรถไฟด่วน JR จากนาโกย่าหรือโทยามะ และยังมีรถบัสไปชิราคาวาโกะกับชินโฮตากะมากมาย ตัวเมืองมีขนาดกะทัดรัด เดินเที่ยวได้สะดวก',
        '可从名古屋或富山搭乘JR特急前往高山，也有多条巴士线路连接白川乡与新穗高一带。市中心紧凑，适合步行游览。'
      ),
    },
  },
  kansai: {
    kyoto: {
      history: createLocalizedText(
        '794年の平安京遷都から長く都として栄え、多くの寺社、庭園、伝統産業が育まれました。戦災を大きく受けなかったため、歴史景観が今も色濃く残ります。',
        'From the transfer of the capital to Heian-kyo in 794, Kyoto flourished for centuries as the imperial capital. Because it avoided major wartime destruction, historic townscapes and traditions remain remarkably intact.',
        'เกียวโตเจริญรุ่งเรืองในฐานะราชธานีมายาวนานตั้งแต่การย้ายเมืองหลวงไปยังเฮอันเคียวในปี 794 และเพราะได้รับความเสียหายจากสงครามไม่มาก ภูมิทัศน์ทางประวัติศาสตร์จึงยังคงชัดเจนถึงปัจจุบัน',
        '自794年迁都平安京后，京都长期作为都城繁荣发展。由于较少遭受战火破坏，历史街景与传统文化至今仍保存得十分完整。'
      ),
      culture_festivals: createLocalizedText(
        '祇園祭、時代祭、葵祭は京都を代表する三大祭りです。茶道、華道、京友禅などの伝統文化も街の日常に息づいています。',
        'Gion Matsuri, Jidai Matsuri, and Aoi Matsuri are the city most famous festivals. Tea ceremony, flower arrangement, and Kyoto dyeing traditions still shape everyday culture.',
        'กิองมัตสึริ จิไดมัตสึริ และอาโออิมัตสึริคือสามเทศกาลสำคัญของเกียวโต ขณะที่พิธีชงชา การจัดดอกไม้ และงานย้อมผ้าแบบเกียวโตก็ยังคงอยู่ในชีวิตประจำวันของเมือง',
        '祇园祭、时代祭和葵祭是京都最具代表性的三大祭典，茶道、花道与京友禅等传统文化也依然融入日常生活。'
      ),
      things_to_do: createLocalizedText(
        '清水寺、金閣寺、嵐山、伏見稲荷、祇園の町歩き、京町家カフェ巡りなど、見どころが尽きません。',
        'There is no shortage of highlights, from Kiyomizu-dera, Kinkaku-ji, Arashiyama, and Fushimi Inari to walks through Gion and visits to machiya cafes.',
        'สถานที่น่าเที่ยวมีไม่สิ้นสุด ทั้งวัดคิโยมิสุ วัดคินคะคุจิ อาราชิยามะ ฟูชิมิอินาริ การเดินเล่นในกิอง และคาเฟ่ในบ้านมาจิยะ',
        '可游览的景点数不胜数，包括清水寺、金阁寺、岚山、伏见稻荷、祗园街区以及京町家咖啡馆。'
      ),
      local_cuisine: createLocalizedText(
        '京懐石、湯豆腐、にしんそば、抹茶スイーツ、八つ橋など、繊細で季節感のある味が楽しめます。',
        'Kyoto is known for delicate seasonal flavors such as kaiseki, yudofu, herring soba, matcha sweets, and yatsuhashi.',
        'เกียวโตขึ้นชื่อเรื่องรสชาติละเมียดละไมตามฤดูกาล เช่น ไคเซกิ ยูโดฟุ โซบะปลาเฮร์ริง ขนมมัทฉะ และยัตสึฮาชิ',
        '京都以精致且富有季节感的美食著称，如京怀石、汤豆腐、鲱鱼荞麦面、抹茶甜点和八桥。'
      ),
      access: createLocalizedText(
        '東京から東海道新幹線で約2時間強。市内はバス、地下鉄、私鉄を組み合わせると主要観光地を回りやすいです。',
        'Kyoto is a little over two hours from Tokyo by Tokaido Shinkansen. Within the city, buses, subways, and private railways together cover the main sightseeing areas.',
        'จากโตเกียวใช้เวลาเพียงกว่าสองชั่วโมงด้วยโทไคโดชินคันเซ็น ภายในเมืองสามารถใช้รถบัส รถไฟใต้ดิน และรถไฟเอกชนร่วมกันเพื่อเที่ยวจุดสำคัญได้ง่าย',
        '从东京搭乘东海道新干线约两小时多即可到达。市内结合巴士、地铁和私铁，就能轻松游览主要景点。'
      ),
    },
    osaka: {
      history: createLocalizedText(
        '古くから商業都市として発展し、豊臣秀吉の大阪城築城以降は政治的にも重要な拠点となりました。近代以降も商都としての活気を保ち続けています。',
        'Osaka grew as a major commercial city and became politically important after Toyotomi Hideyoshi built Osaka Castle. It has retained the energy of a merchant capital into the modern era.',
        'โอซาก้าเติบโตมาในฐานะเมืองการค้าสำคัญ และมีบทบาททางการเมืองมากขึ้นหลังโทโยโตมิ ฮิเดโยชิสร้างปราสาทโอซาก้า เมืองนี้ยังคงความคึกคักแบบนครพ่อค้ามาจนถึงปัจจุบัน',
        '大阪自古就是重要商都，在丰臣秀吉修建大阪城后也成为政治重地，并一直延续着商人之都的活力。'
      ),
      culture_festivals: createLocalizedText(
        '天神祭は日本三大祭りの一つで、船渡御と花火が有名です。上方落語や漫才など、笑いの文化も大阪らしさを象徴します。',
        'Tenjin Matsuri, one of Japan great festivals, is famous for its river procession and fireworks. Kamigata rakugo and manzai comedy also symbolize Osaka identity.',
        'เทนจินมัตสึริเป็นหนึ่งในเทศกาลใหญ่ของญี่ปุ่น มีชื่อเสียงจากขบวนเรือและดอกไม้ไฟ ขณะที่ราคุโกะคามิงาตะและมันไซก็สะท้อนวัฒนธรรมเสียงหัวเราะแบบโอซาก้า',
        '天神祭是日本最著名的祭典之一，以船渡御和烟花闻名；上方落语与漫才喜剧也象征着大阪的城市个性。'
      ),
      things_to_do: createLocalizedText(
        '大阪城、道頓堀、梅田スカイビル、海遊館、新世界、ユニバーサル・スタジオ・ジャパンなど、楽しみ方が非常に多彩です。',
        'Osaka Castle, Dotonbori, Umeda Sky Building, Kaiyukan Aquarium, Shinsekai, and Universal Studios Japan are among the many ways to enjoy the city.',
        'เมืองนี้มีกิจกรรมหลากหลายมาก ทั้งปราสาทโอซาก้า โดทงโบริ อาคารอุเมดะสกาย พิพิธภัณฑ์สัตว์น้ำไคยูคัง ชินเซไก และยูนิเวอร์แซลสตูดิโอเจแปน',
        '大阪的玩法非常丰富，包括大阪城、道顿堀、梅田蓝天大厦、海游馆、新世界以及环球影城。'
      ),
      local_cuisine: createLocalizedText(
        'たこ焼き、お好み焼き、串カツ、きつねうどん、豚まんなど、気軽に食べ歩ける名物が充実しています。',
        'Takoyaki, okonomiyaki, kushikatsu, kitsune udon, and pork buns make Osaka one of Japan best cities for casual food hopping.',
        'มีของกินขึ้นชื่อให้เดินชิมมากมาย เช่น ทาโกะยากิ โอโคโนมิยากิ คุชิคัตสึ คิตสึเนะอุด้ง และซาลาเปาหมู',
        '章鱼烧、大阪烧、串炸、狐狸乌冬和猪肉包等名物，让大阪成为最适合边走边吃的城市之一。'
      ),
      access: createLocalizedText(
        '新大阪駅は新幹線の主要駅で、関西国際空港や伊丹空港からのアクセスも良好です。市内は地下鉄網が発達しています。',
        'Shin-Osaka is a major Shinkansen station, and both Kansai International and Itami airports serve the city well. Osaka subway network is extensive and convenient.',
        'ชินโอซาก้าเป็นสถานีชินคันเซ็นหลัก และยังเดินทางจากสนามบินคันไซหรืออิตามิได้สะดวก ภายในเมืองมีเครือข่ายรถไฟใต้ดินครอบคลุมมาก',
        '新大阪站是重要的新干线车站，从关西国际机场和伊丹机场前往市区也很方便，地铁网络十分完善。'
      ),
    },
    'fushimi-inari': {
      history: createLocalizedText(
        '711年創建と伝わる古社で、全国にある稲荷神社の総本宮として信仰を集めています。商売繁盛の神として特に親しまれています。',
        'Believed to have been founded in 711, this shrine is the head shrine of thousands of Inari shrines across Japan and is especially revered as a place to pray for prosperity in business.',
        'เชื่อกันว่าศาลเจ้านี้ก่อตั้งขึ้นในปี 711 และเป็นศาลเจ้าหลักของศาลเจ้าอินาริทั่วญี่ปุ่น จึงได้รับความเคารพอย่างมาก โดยเฉพาะในฐานะเทพแห่งความรุ่งเรืองทางการค้า',
        '据传创建于711年，是日本各地稻荷神社的总本宫，尤其以祈求商业兴旺而广受信仰。'
      ),
      culture_festivals: createLocalizedText(
        '初午大祭をはじめ、狐や稲穂を象徴とする稲荷信仰の文化が今も大切に守られています。朱色の鳥居群そのものが信仰の風景です。',
        'Rituals such as the Hatsuuma Grand Festival keep Inari worship alive, with foxes and rice symbolism at the center. The endless vermilion torii themselves form a sacred landscape.',
        'พิธีต่าง ๆ เช่น ฮัตสึอุมะไทไซยังคงสืบทอดความเชื่ออินาริ โดยมีสุนัขจิ้งจอกและรวงข้าวเป็นสัญลักษณ์สำคัญ ขบวนประตูโทริอิสีแดงสดเองก็เป็นภูมิทัศน์แห่งศรัทธา',
        '初午大祭等仪式延续着稻荷信仰，狐狸与稻穗是其核心象征，连绵不断的朱红鸟居本身就是神圣景观。'
      ),
      things_to_do: createLocalizedText(
        '千本鳥居を歩き、山道を登りながら摂社や奥社を巡るのが定番です。途中の展望所から京都市内を眺めるのもおすすめです。',
        'The classic visit is to walk through the torii tunnels, climb the mountain paths, and stop at the smaller shrines and inner sanctuaries along the way. Viewpoints overlooking Kyoto are a bonus.',
        'กิจกรรมยอดนิยมคือเดินลอดอุโมงค์โทริอิ ปีนเส้นทางบนภูเขา และแวะศาลเจ้าย่อยกับเขตศักดิ์สิทธิ์ด้านใน ระหว่างทางยังมีจุดชมวิวเมืองเกียวโตด้วย',
        '经典玩法是穿行千本鸟居，沿山道参拜各处小神社与奥社，中途还能在观景点俯瞰京都市景。'
      ),
      local_cuisine: createLocalizedText(
        '参道ではいなり寿司や和菓子、抹茶スイーツなどが人気です。京都らしい軽食を楽しみながら散策できます。',
        'Along the approach, inari sushi, sweets, and matcha desserts are popular. It is easy to pair the visit with light Kyoto-style snacks.',
        'ตามทางขึ้นมีของกินยอดนิยมอย่างอินาริซูชิ ขนมญี่ปุ่น และของหวานมัทฉะ จึงสามารถเดินเที่ยวพร้อมชิมของว่างสไตล์เกียวโตได้',
        '参道上常见的人气美食有稻荷寿司、和果子和抹茶甜点，适合一边散步一边品尝京都风味小食。'
      ),
      access: createLocalizedText(
        'JR奈良線の稲荷駅が目の前で、京阪伏見稲荷駅からも徒歩圏内です。京都駅から短時間でアクセスできます。',
        'JR Inari Station sits directly in front of the shrine, and Keihan Fushimi-Inari Station is also within walking distance. The site is very quick to reach from Kyoto Station.',
        'สถานี JR Inari อยู่หน้าศาลเจ้าโดยตรง และยังเดินจากสถานี Keihan Fushimi-Inari ได้อีกด้วย จึงเดินทางจากสถานีเกียวโตได้ในเวลาไม่นาน',
        'JR稻荷站就在神社正前方，从京阪伏见稻荷站步行也很近，从京都站出发很快就能到达。'
      ),
    },
    'nara-park': {
      history: createLocalizedText(
        '奈良の古都を代表する寺社が集まる一帯で、明治時代に公園として整備されました。鹿は神の使いとされ、長く守られてきた存在です。',
        'The area gathers many of Nara ancient temples and shrines and was formally organized as a park in the Meiji era. The deer, regarded as sacred messengers, have been protected for centuries.',
        'บริเวณนี้รวมวัดและศาลเจ้าสำคัญของนครโบราณนาราไว้มากมาย และได้รับการจัดเป็นสวนสาธารณะในสมัยเมจิ กวางที่นี่ถือเป็นผู้ส่งสารของเทพ จึงได้รับการคุ้มครองมาอย่างยาวนาน',
        '这里汇聚了奈良古都最具代表性的寺社，并在明治时期整备为公园。鹿被视为神的使者，长期受到保护。'
      ),
      culture_festivals: createLocalizedText(
        '若草山焼きや春日大社の祭礼など、奈良らしい年中行事が楽しめます。鹿と共生する風景そのものが奈良文化の象徴です。',
        'Events such as the Wakakusa Yamayaki and Kasuga Taisha festivals showcase local traditions. The sight of deer living side by side with people is itself a symbol of Nara culture.',
        'งานอย่างการเผาหญ้าบนภูเขาวากาคุสะและพิธีของศาลเจ้าคาสุกะไทฉะสะท้อนประเพณีนาราได้ชัดเจน ภาพกวางอยู่ร่วมกับผู้คนก็เป็นสัญลักษณ์ของวัฒนธรรมนาราเช่นกัน',
        '若草山烧山和春日大社祭礼等活动展现了奈良传统，而鹿与人共处的景象本身就是奈良文化的象征。'
      ),
      things_to_do: createLocalizedText(
        '鹿とのふれあい、東大寺の大仏見学、春日大社参拝、興福寺散策、奈良国立博物館の見学がおすすめです。',
        'Recommended activities include meeting the deer, visiting the Great Buddha at Todai-ji, exploring Kasuga Taisha and Kofuku-ji, and stopping by the Nara National Museum.',
        'กิจกรรมแนะนำคือพบปะกวาง ชมพระใหญ่ที่วัดโทไดจิ เยี่ยมศาลเจ้าคาสุกะไทฉะ เดินชมวัดโคฟุกุจิ และแวะพิพิธภัณฑสถานแห่งชาตินารา',
        '推荐活动包括与鹿互动、参观东大寺大佛、游览春日大社和兴福寺，以及前往奈良国立博物馆。'
      ),
      local_cuisine: createLocalizedText(
        '柿の葉寿司、三輪そうめん、奈良漬け、草餅など、古都らしい素朴な味に出会えます。',
        'Local flavors include kakinoha-zushi, Miwa somen, narazuke pickles, and kusa mochi, all fitting the quiet mood of the old capital.',
        'รสชาติท้องถิ่นที่ควรลอง ได้แก่ ซูชิใบพลับ เส้นโซเม็งมิวะ นาราซึเกะ และคุสะโมจิ ซึ่งเข้ากับบรรยากาศเมืองเก่าเป็นอย่างดี',
        '地方美食有柿叶寿司、三轮素面、奈良渍和草饼等，风味朴实而充满古都气息。'
      ),
      access: createLocalizedText(
        '近鉄奈良駅から徒歩圏内で、JR奈良駅からはバスも便利です。公園内は広いので歩きやすい靴がおすすめです。',
        'The park is within walking distance of Kintetsu Nara Station, and buses from JR Nara Station are convenient. Comfortable walking shoes are a good idea because the grounds are extensive.',
        'สวนอยู่ในระยะเดินจากสถานีคินเท็ตสึนารา และยังนั่งรถบัสจากสถานี JR Nara ได้สะดวก พื้นที่ค่อนข้างกว้างจึงควรใส่รองเท้าที่เดินสบาย',
        '从近铁奈良站步行即可到达，从JR奈良站搭乘巴士也很方便。园区范围较大，建议穿着舒适的步行鞋。'
      ),
    },
    'himeji-castle': {
      history: createLocalizedText(
        '現在の天守群は17世紀初頭に整えられたもので、現存天守を持つ名城として高く評価されています。白い漆喰壁の美しさから白鷺城とも呼ばれます。',
        'The present main keep complex was completed in the early seventeenth century and is celebrated as one of Japan finest surviving castles. Its brilliant white plaster walls gave rise to the nickname White Heron Castle.',
        'กลุ่มหอคอยหลักในปัจจุบันสร้างเสร็จช่วงต้นศตวรรษที่ 17 และได้รับการยกย่องว่าเป็นหนึ่งในปราสาทดั้งเดิมที่งดงามที่สุดของญี่ปุ่น กำแพงปูนสีขาวทำให้มีฉายาว่า ปราสาทนกกระสาขาว',
        '现存天守群完成于17世纪初，被誉为日本保存最完好的名城之一。因洁白的灰泥墙面之美，也被称为白鹭城。'
      ),
      culture_festivals: createLocalizedText(
        '春の桜と城の共演が特に人気で、姫路ゆかたまつりなど季節行事も親しまれています。ライトアップされた夜の姿も見応えがあります。',
        'Cherry blossom season is especially popular, and events such as the Himeji Yukata Festival bring extra atmosphere. The illuminated castle at night is also striking.',
        'ช่วงซากุระบานได้รับความนิยมมากเป็นพิเศษ และงานตามฤดูกาลอย่างเทศกาลยูกาตะฮิเมจิก็สร้างบรรยากาศคึกคัก ปราสาทยามค่ำคืนที่ประดับไฟก็งดงามมาก',
        '樱花季时城堡与花景的组合尤其受欢迎，姬路浴衣祭等季节活动也很有人气，夜间点灯后的城堡同样值得一看。'
      ),
      things_to_do: createLocalizedText(
        '天守や櫓の見学、好古園の散策、城下町歩き、書写山圓教寺への足を延ばす旅が人気です。',
        'Visitors often tour the keep and turrets, stroll through Koko-en Garden, explore the castle town, and add a trip to Engyo-ji on Mount Shosha.',
        'นักท่องเที่ยวนิยมเข้าชมหอปราสาทและป้อมย่อย เดินเล่นในสวนโคโคเอ็น สำรวจย่านเมืองปราสาท และต่อทริปไปวัดเอ็งเงียวจิบนภูเขาโชฉะ',
        '常见玩法包括参观天守与櫓、漫步好古园、走访城下町，以及顺道前往书写山圆教寺。'
      ),
      local_cuisine: createLocalizedText(
        '穴子料理、姫路おでん、アーモンドトーストなど、播磨らしい名物が楽しめます。',
        'Regional favorites include conger eel dishes, Himeji oden, and almond toast, all of which reflect the Harima area food culture.',
        'เมนูท้องถิ่นที่น่าสนใจ ได้แก่ อาหารปลาอะนะโกะ ฮิเมจิโอเด้ง และขนมปังอัลมอนด์โทสต์ ซึ่งสะท้อนรสชาติแบบฮาริมะ',
        '可以品尝星鳗料理、姬路关东煮和杏仁吐司等富有播磨地方特色的美食。'
      ),
      access: createLocalizedText(
        '姫路駅は山陽新幹線の停車駅で、駅から城までは徒歩圏内です。アクセスの良さも人気の理由です。',
        'Himeji Station is served by the Sanyo Shinkansen, and the castle is within walking distance from the station. The easy access adds to its appeal.',
        'สถานีฮิเมจิเป็นสถานีของซันโยชินคันเซ็น และสามารถเดินจากสถานีไปถึงปราสาทได้ จึงเป็นจุดหมายที่เดินทางสะดวกมาก',
        '姬路站有山阳新干线停靠，从车站步行即可到达城堡，便利的交通也是其受欢迎的原因之一。'
      ),
    },
  },
  chugoku: {
    hiroshima: {
      history: createLocalizedText(
        '毛利氏の城下町として始まり、近代には軍都として拡大しました。1945年の原爆投下を経て、現在は平和を発信する都市として世界に知られています。',
        'Hiroshima began as a castle town of the Mori clan and later expanded as a military city. After the atomic bombing in 1945, it became internationally known as a city devoted to peace.',
        'ฮิโรชิม่าเริ่มต้นจากการเป็นเมืองปราสาทของตระกูลโมริ ก่อนจะขยายตัวเป็นเมืองทหารในยุคใหม่ หลังการทิ้งระเบิดปรมาณูในปี 1945 เมืองนี้จึงเป็นที่รู้จักทั่วโลกในฐานะเมืองแห่งสันติภาพ',
        '广岛最初是毛利氏的城下町，近代又发展为军事城市。经历1945年原爆后，如今以向世界传递和平理念的城市而闻名。'
      ),
      culture_festivals: createLocalizedText(
        '5月のひろしまフラワーフェスティバルや、8月の平和記念式典は特に象徴的です。神楽や瀬戸内の港町文化も地域の魅力を支えています。',
        'The Hiroshima Flower Festival in May and the peace memorial events in August are especially symbolic. Kagura performances and Seto Inland Sea port-town culture add further local character.',
        'เทศกาลดอกไม้ฮิโรชิม่าในเดือนพฤษภาคมและพิธีรำลึกสันติภาพในเดือนสิงหาคมเป็นงานที่มีความหมายมาก นอกจากนี้การแสดงคางุระและวัฒนธรรมเมืองท่าแห่งทะเลเซโตะในก็ช่วยสร้างเสน่ห์ให้เมือง',
        '5月的广岛花卉节和8月的和平纪念仪式最具代表性，神乐表演与濑户内港口文化也为这座城市增添魅力。'
      ),
      things_to_do: createLocalizedText(
        '平和記念公園と資料館、原爆ドーム、広島城、縮景園を巡り、宮島への日帰り旅を組み合わせるのが定番です。',
        'A classic itinerary combines Peace Memorial Park and Museum, the Atomic Bomb Dome, Hiroshima Castle, Shukkei-en Garden, and a day trip to Miyajima.',
        'ทริปยอดนิยมคือการเที่ยวสวนสันติภาพและพิพิธภัณฑ์ โดมปรมาณู ปราสาทฮิโรชิม่า สวนชุกเคเอ็น และต่อด้วยการไปมิยาจิมะแบบวันเดียว',
        '经典行程包括和平纪念公园与资料馆、原爆圆顶馆、广岛城、缩景园，再加上宫岛一日游。'
      ),
      local_cuisine: createLocalizedText(
        '広島風お好み焼き、牡蠣、穴子めし、瀬戸内レモンを使ったスイーツなどが人気です。',
        'Popular local foods include Hiroshima-style okonomiyaki, oysters, anago rice, and sweets made with Setouchi lemons.',
        'อาหารขึ้นชื่อ ได้แก่ โอโคโนมิยากิสไตล์ฮิโรชิม่า หอยนางรม ข้าวปลาอะนะโกะ และขนมที่ใช้เลมอนเซโตะใน',
        '人气美食包括广岛风御好烧、牡蛎、星鳗饭以及使用濑户内柠檬制作的甜点。'
      ),
      access: createLocalizedText(
        '広島駅は山陽新幹線の主要駅で、市内移動は路面電車が便利です。宮島へはJRとフェリーで気軽に向かえます。',
        'Hiroshima Station is a major Sanyo Shinkansen stop, and the tram network is convenient for getting around the city. Miyajima is easily reached by JR and ferry.',
        'สถานีฮิโรชิม่าถือเป็นสถานีหลักของซันโยชินคันเซ็น และรถรางในเมืองก็ใช้งานสะดวก ส่วนมิยาจิมะสามารถไปต่อได้ง่ายด้วย JR และเรือเฟอร์รี',
        '广岛站是山阳新干线的重要车站，市内有便利的有轨电车网络，前往宫岛也可轻松搭乘JR和渡轮。'
      ),
    },
    okayama: {
      history: createLocalizedText(
        '池田家の城下町として発展し、吉備地方の歴史や桃太郎伝説とも深く結びついています。温暖な気候から「晴れの国」と呼ばれることでも有名です。',
        'Okayama grew as the castle town of the Ikeda clan and is closely linked to the older history of the Kibi region and the Momotaro legend. It is also known as the Land of Sunshine for its mild weather.',
        'โอคายามะเติบโตในฐานะเมืองปราสาทของตระกูลอิเคดะ และยังเชื่อมโยงอย่างลึกซึ้งกับประวัติศาสตร์ของแคว้นคิบิและตำนานโมโมทาโร่ อีกทั้งยังมีชื่อเล่นว่า ดินแดนแห่งแสงแดด เพราะอากาศค่อนข้างอบอุ่น',
        '冈山作为池田家的城下町而发展，也与吉备地区的古老历史及桃太郎传说紧密相连，并因气候温和而被称为“晴天之国”。'
      ),
      culture_festivals: createLocalizedText(
        'おかやま桃太郎まつりが代表的で、踊りやパレードが街を盛り上げます。備前焼など周辺文化とのつながりも強いです。',
        'The Okayama Momotaro Festival is the signature event, filling the city with parades and dance. The city also maintains strong ties to nearby traditions such as Bizen ware.',
        'เทศกาลโอคายามะโมโมทาโร่เป็นงานเด่นของเมือง มีทั้งขบวนแห่และการเต้นรำอย่างคึกคัก อีกทั้งเมืองยังมีความเชื่อมโยงกับวัฒนธรรมรอบข้าง เช่น เครื่องปั้นดินเผาบิเซ็น',
        '冈山桃太郎祭是最具代表性的活动，游行与舞蹈让整座城市充满活力，与备前烧等周边传统文化的联系也很深。'
      ),
      things_to_do: createLocalizedText(
        '後楽園、岡山城、吉備津神社を巡り、倉敷へ足を延ばすコースが人気です。フルーツ狩りやカフェ巡りも楽しめます。',
        'Popular plans include visiting Korakuen, Okayama Castle, and Kibitsu Shrine, then continuing on to Kurashiki. Fruit picking and cafe hopping are also enjoyable here.',
        'แผนเที่ยวที่นิยมคือไปสวนโคราคุเอ็น ปราสาทโอคายามะ และศาลเจ้าคิบิสึ ก่อนต่อไปคุราชิกิ นอกจากนี้ยังสนุกกับการเก็บผลไม้และเที่ยวคาเฟ่ได้ด้วย',
        '热门路线包括游览后乐园、冈山城和吉备津神社，再顺道前往仓敷，也可以体验采摘水果和咖啡馆巡游。'
      ),
      local_cuisine: createLocalizedText(
        'ばら寿司、デミカツ丼、白桃、マスカットなど、海の幸と果物の両方に恵まれています。',
        'Bara-zushi, demi-katsu don, white peaches, and muscat grapes show how Okayama excels in both savory dishes and fruit.',
        'มีทั้งบาระซูชิ เดมิคัตสึด้ง ลูกพีชขาว และองุ่นมัสกัต สะท้อนว่าโอคายามะโดดเด่นทั้งอาหารคาวและผลไม้',
        '散寿司、酱汁炸猪排饭、白桃和麝香葡萄等美食，展现了冈山在料理和水果方面的丰富魅力。'
      ),
      access: createLocalizedText(
        '岡山駅は山陽新幹線の停車駅で、四国方面への玄関口にもなります。市内観光は路面電車とバスが便利です。',
        'Okayama Station is served by the Sanyo Shinkansen and also works as a gateway toward Shikoku. Trams and buses make city sightseeing straightforward.',
        'สถานีโอคายามะเป็นสถานีของซันโยชินคันเซ็น และยังเป็นประตูสู่ชิโกกุด้วย การเที่ยวในเมืองสะดวกด้วยรถรางและรถบัส',
        '冈山站有山阳新干线停靠，也是前往四国的重要门户，市内搭乘路面电车和巴士观光都很方便。'
      ),
    },
    'itsukushima-shrine': {
      history: createLocalizedText(
        '平安時代に平清盛の信仰を受けて壮麗な社殿が整えられ、海上に浮かぶような景観で知られるようになりました。島全体が信仰の対象とされています。',
        'The shrine reached its grand form in the Heian period under the patronage of Taira no Kiyomori and became famous for its overwater appearance. The entire island is regarded as sacred.',
        'ศาลเจ้าได้รับการสร้างอย่างงดงามในสมัยเฮอันภายใต้การอุปถัมภ์ของไทระ โนะ คิโยโมริ และมีชื่อเสียงจากภาพลักษณ์เหมือนลอยอยู่เหนือน้ำ ทั้งเกาะยังถือเป็นพื้นที่ศักดิ์สิทธิ์ด้วย',
        '严岛神社在平安时代得到平清盛的庇护而形成壮丽社殿，并因仿佛漂浮于海上的景观而闻名，整座岛屿也被视为神圣之地。'
      ),
      culture_festivals: createLocalizedText(
        '管絃祭をはじめ、神事と海の文化が結びついた行事が多く行われます。満潮と干潮で変わる景色そのものが特別な体験です。',
        'Rituals such as the Kangen Festival tie shrine tradition to the sea. The way the scenery changes between high and low tide is itself a memorable cultural experience.',
        'พิธีอย่างคังเก็นไซสะท้อนความเชื่อที่ผูกกับทะเล และทิวทัศน์ที่เปลี่ยนไปตามน้ำขึ้นน้ำลงก็เป็นประสบการณ์ทางวัฒนธรรมที่พิเศษมาก',
        '管弦祭等活动将神社传统与海洋文化结合在一起，而涨潮与退潮时截然不同的景象本身就是一种特别体验。'
      ),
      things_to_do: createLocalizedText(
        '大鳥居と社殿の参拝、表参道商店街の散策、弥山ロープウェー、鹿との出会い、干潮時の鳥居までの散歩が人気です。',
        'Popular activities include visiting the torii and shrine buildings, strolling Omotesando shopping street, riding the ropeway to Mount Misen, meeting the island deer, and walking to the torii at low tide.',
        'กิจกรรมยอดนิยมคือสักการะโทริอิและตัวศาลเจ้า เดินเล่นถนนช้อปปิ้งโอโมเตะซันโด ขึ้นกระเช้าไปภูเขามิเซ็น พบกวางบนเกาะ และเดินไปใกล้โทริอิในช่วงน้ำลง',
        '热门活动包括参拜大鸟居与社殿、漫步表参道商店街、乘缆车前往弥山、与岛上鹿群相遇，以及在退潮时步行接近鸟居。'
      ),
      local_cuisine: createLocalizedText(
        '焼き牡蠣、穴子めし、もみじ饅頭が定番で、参道の食べ歩きも楽しいです。',
        'Grilled oysters, anago rice, and momiji manju are the classic local treats, and sampling snacks along the approach is part of the fun.',
        'ของกินขึ้นชื่อคือหอยนางรมย่าง ข้าวปลาอะนะโกะ และโมมิจิมันจู การเดินชิมของตามทางก็สนุกมาก',
        '经典美食有烤牡蛎、星鳗饭和枫叶馒头，边逛参道边品尝小吃也是乐趣之一。'
      ),
      access: createLocalizedText(
        '広島駅から宮島口までJRで向かい、そこからフェリーで渡るのが一般的です。島内は徒歩中心でゆっくり巡れます。',
        'Most visitors take JR from Hiroshima to Miyajimaguchi and then continue by ferry. Once on the island, it is best explored slowly on foot.',
        'โดยทั่วไปจะนั่ง JR จากฮิโรชิม่าไปมิยาจิมะกุจิแล้วต่อเรือเฟอร์รี เมื่อถึงเกาะแล้วเหมาะกับการเดินเที่ยวแบบสบาย ๆ',
        '通常从广岛站搭乘JR到宫岛口，再换乘渡轮上岛。岛上以步行为主，适合慢慢游览。'
      ),
    },
    kurashiki: {
      history: createLocalizedText(
        '江戸時代には物資の集積地として栄え、白壁の蔵や運河沿いの町並みが形成されました。明治以降は紡績業でも発展しています。',
        'Kurashiki prospered as a center for goods distribution in the Edo period, creating the canal-side district lined with white storehouses. It later grew further through the textile industry.',
        'คุราชิกิเคยรุ่งเรืองในสมัยเอโดะในฐานะศูนย์กลางกระจายสินค้า จึงเกิดย่านคลองและโกดังผนังขาวที่เป็นเอกลักษณ์ ต่อมาเมืองยังเติบโตจากอุตสาหกรรมสิ่งทอในยุคเมจิ',
        '仓敷在江户时代曾作为物资集散地而繁荣，形成了沿运河排列白墙仓库的街景，明治以后又因纺织业而进一步发展。'
      ),
      culture_festivals: createLocalizedText(
        '美観地区では季節ごとの催しやライトアップが行われ、民藝やデニム文化にも触れられます。落ち着いた街歩きが似合う場所です。',
        'Seasonal events and illuminations are held in the Bikan quarter, and visitors can also encounter folk crafts and local denim culture. It is a city best enjoyed at a relaxed pace.',
        'ย่านบิคังมีงานตามฤดูกาลและการประดับไฟ รวมทั้งยังได้สัมผัสงานหัตถกรรมพื้นบ้านและวัฒนธรรมเดนิมของเมือง เป็นสถานที่ที่เหมาะกับการเดินเที่ยวแบบสบาย ๆ',
        '美观地区会举办季节活动与夜间点灯，也能接触民艺和牛仔布文化，是一座适合悠闲漫步的城市。'
      ),
      things_to_do: createLocalizedText(
        '運河沿いの散策、川舟体験、大原美術館、倉敷アイビースクエア、デニムストリート巡りがおすすめです。',
        'Recommended activities include walking the canal district, taking a river boat ride, visiting the Ohara Museum of Art, exploring Kurashiki Ivy Square, and shopping along Denim Street.',
        'แนะนำให้เดินเล่นริมคลอง ล่องเรือชมเมือง แวะพิพิธภัณฑ์ศิลปะโอฮาระ สำรวจ Kurashiki Ivy Square และเดินย่านเดนิมสตรีท',
        '推荐活动包括漫步运河地区、乘船游河、参观大原美术馆、探索仓敷常春藤广场以及逛牛仔街。'
      ),
      local_cuisine: createLocalizedText(
        'ままかり寿司、フルーツパフェ、瀬戸内の魚介などが人気で、カフェ文化も充実しています。',
        'Mamakari sushi, fruit parfaits, and Setouchi seafood are popular, and the local cafe scene is also strong.',
        'เมนูยอดนิยมมีทั้งมามาคาริซูชิ พาร์เฟต์ผลไม้ และอาหารทะเลจากเซโตะใน อีกทั้งวัฒนธรรมคาเฟ่ของเมืองก็โดดเด่น',
        '受欢迎的美食有青花鱼寿司、水果芭菲和濑户内海海鲜，当地咖啡馆文化也相当发达。'
      ),
      access: createLocalizedText(
        '岡山駅からJRで短時間で到着し、美観地区は倉敷駅から徒歩圏内です。日帰りでも訪れやすい街です。',
        'Kurashiki is a short JR ride from Okayama, and the Bikan quarter is within walking distance of Kurashiki Station. It is easy to visit even on a day trip.',
        'คุราชิกิอยู่ห่างจากโอคายามะเพียงนั่ง JR ไม่นาน และย่านบิคังก็เดินจากสถานีคุราชิกิได้ จึงเหมาะกับการเที่ยวแบบวันเดียว',
        '从冈山搭乘JR很快就能到达仓敷，美观地区也在仓敷站步行范围内，非常适合一日游。'
      ),
    },
  },
  shikoku: {
    takamatsu: {
      history: createLocalizedText(
        '讃岐国の城下町として発展し、瀬戸内海の港町としても重要な役割を果たしてきました。現在はアートの島々への玄関口でもあります。',
        'Takamatsu developed as the castle town of Sanuki Province and played an important role as a port on the Seto Inland Sea. Today it also serves as a gateway to the art islands.',
        'ทาคามัตสึเติบโตในฐานะเมืองปราสาทของแคว้นซานุกิ และมีบทบาทสำคัญในฐานะเมืองท่าแห่งทะเลเซโตะใน ปัจจุบันยังเป็นประตูสู่หมู่เกาะศิลปะอีกด้วย',
        '高松曾作为赞岐国的城下町而发展，也一直是濑户内海的重要港口，如今还是前往艺术岛屿的重要门户。'
      ),
      culture_festivals: createLocalizedText(
        '高松まつりや瀬戸内国際芸術祭の影響で、伝統と現代アートが自然に交わる空気があります。漆器などの工芸も地域文化の一部です。',
        'With the Takamatsu Festival and the wider influence of the Setouchi Triennale, tradition and contemporary art mix naturally here. Crafts such as lacquerware are also part of local culture.',
        'จากเทศกาลทาคามัตสึและอิทธิพลของเทศกาลศิลปะเซโตะอุจิ ทำให้เมืองนี้ผสานประเพณีกับศิลปะร่วมสมัยได้อย่างเป็นธรรมชาติ งานฝีมืออย่างเครื่องเขินก็เป็นส่วนหนึ่งของวัฒนธรรมท้องถิ่น',
        '受高松祭和濑户内国际艺术祭影响，这里自然融合了传统与当代艺术，漆器等工艺也是地方文化的一部分。'
      ),
      things_to_do: createLocalizedText(
        '栗林公園、玉藻公園、高松港からの島旅、屋島展望台、商店街散策がおすすめです。',
        'Highlights include Ritsurin Garden, Tamamo Park, island trips from Takamatsu Port, the Yashima viewpoint, and strolls through the shopping arcades.',
        'ไฮไลต์คือสวนริทสึริน สวนทามาโมะ การนั่งเรือเที่ยวเกาะจากท่าเรือทาคามัตสึ จุดชมวิวยาชิมะ และการเดินเล่นย่านช้อปปิ้ง',
        '推荐景点包括栗林公园、玉藻公园、从高松港出发的岛屿之旅、屋岛展望台以及商店街漫步。'
      ),
      local_cuisine: createLocalizedText(
        '讃岐うどんが圧倒的に有名で、骨付鳥やオリーブ牛など香川らしい名物も楽しめます。',
        'Sanuki udon is the undisputed star, but Kagawa specialties such as bone-in chicken and olive-fed beef are also worth trying.',
        'ซานุกิอุด้งคือของขึ้นชื่ออันดับหนึ่ง แต่ก็ยังมีเมนูท้องถิ่นของคางาวะอย่างไก่ติดกระดูกและเนื้อโอลีฟให้ลองด้วย',
        '赞岐乌冬面最为有名，另外也可品尝带骨鸡和橄榄牛等香川特色美食。'
      ),
      access: createLocalizedText(
        '岡山からマリンライナーで約1時間。高松空港やフェリー網もあり、四国観光の起点に向いています。',
        'It takes about an hour from Okayama on the Marine Liner, and the city also has an airport and ferry links, making it a practical base for Shikoku travel.',
        'จากโอคายามะนั่ง Marine Liner ประมาณ 1 ชั่วโมง เมืองยังมีสนามบินและเครือข่ายเรือเฟอร์รี จึงเหมาะเป็นฐานเที่ยวชิโกกุ',
        '从冈山搭乘Marine Liner约1小时即可到达，高松还有机场和渡轮网络，是游览四国的理想据点。'
      ),
    },
    matsuyama: {
      history: createLocalizedText(
        '松山城の城下町として発展し、道後温泉を中心とした湯治文化でも知られます。正岡子規や夏目漱石ゆかりの文学の町でもあります。',
        'Matsuyama developed as the castle town of Matsuyama Castle and is also famous for hot spring culture centered on Dogo Onsen. It is deeply tied to writers such as Masaoka Shiki and Natsume Soseki.',
        'มัตสึยามะเติบโตในฐานะเมืองปราสาทของปราสาทมัตสึยามะ และยังเป็นที่รู้จักจากวัฒนธรรมการแช่ออนเซ็นรอบโดโงะออนเซ็น เมืองนี้ยังเกี่ยวข้องกับนักเขียนอย่างมาซาโอกะ ชิกิ และนัตสึเมะ โซเซกิอย่างลึกซึ้ง',
        '松山作为松山城的城下町而发展，也因以道后温泉为中心的温泉文化而闻名，同时还是与正冈子规、夏目漱石等作家渊源深厚的文学之城。'
      ),
      culture_festivals: createLocalizedText(
        '松山まつりや道後温泉まつりが人気で、俳句や文学散歩もこの街ならではの楽しみ方です。',
        'Matsuyama Festival and Dogo Onsen events are popular, while haiku-themed walks and literary sites offer a cultural experience unique to the city.',
        'เทศกาลมัตสึยามะและงานต่าง ๆ ของโดโงะออนเซ็นได้รับความนิยมมาก ขณะเดียวกันการเดินตามรอยวรรณกรรมและไฮกุก็เป็นเสน่ห์เฉพาะของเมืองนี้',
        '松山祭和道后温泉相关活动很受欢迎，而俳句漫步与文学景点则提供了这座城市独有的文化体验。'
      ),
      things_to_do: createLocalizedText(
        '道後温泉本館、松山城、ロープウェイ街、石手寺、坂の上の雲ミュージアムなどを巡るのがおすすめです。',
        'Recommended stops include Dogo Onsen Honkan, Matsuyama Castle, Ropeway Street, Ishite-ji Temple, and the Saka no Ue no Kumo Museum.',
        'สถานที่แนะนำ ได้แก่ อาคารหลักโดโงะออนเซ็น ปราสาทมัตสึยามะ Ropeway Street วัดอิชิเตะจิ และพิพิธภัณฑ์ Saka no Ue no Kumo',
        '推荐游览道后温泉本馆、松山城、缆车商店街、石手寺以及《坂上之云》博物馆。'
      ),
      local_cuisine: createLocalizedText(
        '鯛めし、じゃこ天、柑橘スイーツなど愛媛らしい味が豊富で、温泉街の食べ歩きも楽しいです。',
        'Ehime flavors such as tai-meshi, jakoten fish cakes, and citrus sweets are abundant, and the hot spring district is fun for casual snacking.',
        'มีรสชาติแบบเอฮิเมะมากมาย เช่น ข้าวปลาไท จาโกะเท็น และขนมส้มต่าง ๆ การเดินชิมของในย่านออนเซ็นก็สนุกเช่นกัน',
        '这里有丰富的爱媛风味，如鲷鱼饭、小鱼天妇罗和柑橘甜点，温泉街边走边吃也很有趣。'
      ),
      access: createLocalizedText(
        '松山空港やJR予讃線、広島・呉方面からのフェリーでアクセスできます。市内は路面電車が便利です。',
        'Matsuyama can be reached by air, by JR Yosan Line, or by ferry from the Hiroshima and Kure side. The city tram is convenient for local travel.',
        'สามารถเดินทางถึงมัตสึยามะได้ทั้งทางอากาศ รถไฟ JR Yosan Line หรือเรือเฟอร์รีจากฝั่งฮิโรชิม่าและคุเระ ภายในเมืองใช้รถรางได้สะดวก',
        '可通过飞机、JR予赞线或从广岛和吴方向搭乘渡轮到达松山，市内则有方便的有轨电车。'
      ),
    },
    'naruto-whirlpools': {
      history: createLocalizedText(
        '鳴門海峡の潮流が生み出す自然現象で、古くから航海者や旅人の注目を集めてきました。地域観光を象徴する存在でもあります。',
        'These whirlpools are a natural phenomenon created by the powerful tides of the Naruto Strait and have fascinated sailors and travelers for centuries. They are now a symbol of local tourism.',
        'น้ำวนนารูโตะเป็นปรากฏการณ์ธรรมชาติที่เกิดจากกระแสน้ำแรงในช่องแคบนารูโตะ และดึงดูดความสนใจของนักเดินเรือและนักเดินทางมานานหลายศตวรรษ ปัจจุบันยังเป็นสัญลักษณ์การท่องเที่ยวของพื้นที่ด้วย',
        '鸣门漩涡是由鸣门海峡强劲潮流形成的自然现象，数百年来一直吸引着航海者和旅行者，如今已成为当地旅游象征。'
      ),
      culture_festivals: createLocalizedText(
        '自然の迫力を生かした観光文化が発達しており、近隣では阿波おどり文化や徳島の伝統芸能にも触れられます。',
        'The area has built a tourism culture around the drama of nature, and nearby visitors can also experience Awa Odori traditions and Tokushima performing arts.',
        'พื้นที่นี้พัฒนาวัฒนธรรมการท่องเที่ยวจากพลังอันยิ่งใหญ่ของธรรมชาติ และในบริเวณใกล้เคียงยังได้สัมผัสวัฒนธรรมอาวะโอโดริและศิลปะการแสดงของโทคุชิมะด้วย',
        '这里围绕大自然的震撼景观发展出观光文化，附近还能体验阿波舞与德岛传统艺能。'
      ),
      things_to_do: createLocalizedText(
        '観潮船に乗る、渦の道から見下ろす、大鳴門橋周辺を散策する、大塚国際美術館に立ち寄るなどが定番です。',
        'Typical activities include taking a sightseeing boat, viewing the whirlpools from the Uzunomichi walkway, exploring around the Onaruto Bridge, and visiting the Otsuka Museum of Art.',
        'กิจกรรมยอดนิยมคือขึ้นเรือชมกระแสน้ำ มองลงจากทางเดิน Uzu no Michi เดินเที่ยวรอบสะพานโอนารูโตะ และแวะพิพิธภัณฑ์ศิลปะโอสึกะ',
        '经典玩法包括搭乘观潮船、从涡之道步道俯瞰漩涡、漫步大鸣门桥周边，以及参观大塚国际美术馆。'
      ),
      local_cuisine: createLocalizedText(
        '鳴門わかめ、鳴門金時、鯛料理、徳島ラーメンなど、海と農産物の両方が楽しめます。',
        'Naruto wakame seaweed, Naruto kintoki sweet potatoes, sea bream dishes, and Tokushima ramen highlight both the sea and farm produce of the area.',
        'สามารถลิ้มลองทั้งวากาเมะนารูโตะ มันหวานนารูโตะคินโทกิ เมนูปลาไท และโทคุชิมะราเม็ง ซึ่งสะท้อนทั้งผลผลิตทะเลและการเกษตรของพื้นที่',
        '这里既能品尝鸣门裙带菜、鸣门金时红薯、鲷鱼料理，也有德岛拉面等兼具海产与农产特色的美食。'
      ),
      access: createLocalizedText(
        '徳島市内や神戸方面からバスや車で向かうのが一般的です。渦潮は潮の時間によって見え方が変わるため、事前確認がおすすめです。',
        'Most visitors come by car or bus from Tokushima City or the Kobe area. Because the whirlpools vary with the tide, it is best to check viewing times in advance.',
        'โดยทั่วไปนิยมเดินทางด้วยรถยนต์หรือรถบัสจากเมืองโทคุชิมะหรือฝั่งโกเบ และเนื่องจากน้ำวนเปลี่ยนไปตามช่วงน้ำขึ้นน้ำลง จึงควรตรวจเวลาล่วงหน้า',
        '通常可从德岛市区或神户方向搭乘巴士或自驾前往。由于漩涡景观会随潮汐变化，建议事先确认最佳观赏时间。'
      ),
    },
    'kotohira-gu': {
      history: createLocalizedText(
        '古くから海の守り神として信仰を集め、江戸時代には全国から多くの参拝者が訪れました。金刀比羅参りは庶民の憧れの旅でもありました。',
        'Kotohira-gu has long been revered as a shrine for maritime protection, and in the Edo period many pilgrims traveled from across Japan to visit it. A Konpira pilgrimage was once a dream journey for ordinary people.',
        'ศาลเจ้าโคโตฮิระกุได้รับความศรัทธามาอย่างยาวนานในฐานะผู้คุ้มครองการเดินเรือ และในสมัยเอโดะมีผู้แสวงบุญจากทั่วญี่ปุ่นเดินทางมาสักการะ การไปคมปิระยังเคยเป็นทริปในฝันของผู้คนทั่วไปอีกด้วย',
        '金刀比罗宫自古就作为海上守护神而受到信仰，江户时代有许多参拜者从全国各地前来，“参拜金毗罗”曾是平民向往的旅行。'
      ),
      culture_festivals: createLocalizedText(
        '表参道の門前町文化や祭礼、周辺の芝居小屋「金丸座」と合わせて、信仰と娯楽が結びついた独特の文化圏を感じられます。',
        'The shrine approach, seasonal rituals, and nearby Kanamaru-za theater reveal a culture where faith and entertainment have long been closely linked.',
        'ทั้งบรรยากาศเมืองหน้าศาลเจ้าตามทางขึ้น พิธีตามฤดูกาล และโรงละครคานามารุซะใกล้เคียง ล้วนสะท้อนวัฒนธรรมที่ศรัทธาและความบันเทิงเชื่อมโยงกันอย่างแนบแน่น',
        '从表参道门前町、季节祭礼到附近的金丸座戏楼，都能感受到信仰与娱乐长期交织形成的独特文化。'
      ),
      things_to_do: createLocalizedText(
        '石段を登って本宮を参拝し、門前町を歩き、展望を楽しみ、時間があれば奥社や金丸座まで巡るのがおすすめです。',
        'The classic experience is to climb the stone steps to the main shrine, stroll the approach, enjoy the views, and, if time allows, continue to the inner shrine or Kanamaru-za theater.',
        'ประสบการณ์หลักคือการขึ้นบันไดหินไปยังศาลเจ้าหลัก เดินเล่นย่านหน้าศาลเจ้า ชมวิว และถ้ามีเวลาอาจไปต่อถึงโอคุฉะหรือโรงละครคานามารุซะ',
        '经典体验是沿石阶登上本宫参拜，漫步门前町、欣赏景色，若时间充裕还可继续前往奥社或金丸座。'
      ),
      local_cuisine: createLocalizedText(
        '参拝後は讃岐うどんや和三盆菓子を楽しむ人が多く、門前町ならではの食べ歩きも人気です。',
        'Many visitors enjoy Sanuki udon and wasanbon sweets after their climb, and the shrine town is pleasant for casual snacking.',
        'หลังขึ้นบันไดแล้วนักท่องเที่ยวจำนวนมากนิยมกินซานุกิอุด้งและขนมวาซังบง โดยย่านหน้าศาลเจ้าก็เหมาะกับการเดินชิมของกิน',
        '参拜后很多人会品尝赞岐乌冬面和和三盆甜点，门前町也很适合边走边吃。'
      ),
      access: createLocalizedText(
        'JR琴平駅やことでん琴平駅から徒歩で参道へ向かえます。石段が多いため、歩きやすい服装で訪れるのがおすすめです。',
        'The approach can be reached on foot from JR Kotohira Station or Kotoden Kotohira Station. Because of the many stone steps, comfortable shoes are recommended.',
        'สามารถเดินจากสถานี JR Kotohira หรือสถานี Kotoden Kotohira มายังทางขึ้นได้ เนื่องจากมีบันไดหินจำนวนมาก จึงควรแต่งตัวและใส่รองเท้าที่เดินสะดวก',
        '从JR琴平站或琴电琴平站步行即可到达参道。由于石阶很多，建议穿着便于行走的鞋服。'
      ),
    },
  },
  kyushu: {
    fukuoka: {
      history: createLocalizedText(
        '博多の商人町と福岡城下町が近代に一体化して現在の都市になりました。古くからアジアとの交流が盛んで、港町として発展してきた歴史があります。',
        'Modern Fukuoka emerged from the merger of the merchant town of Hakata and the castle town of Fukuoka. It has long prospered as a port city with deep ties to the rest of Asia.',
        'ฟุกุโอกะในปัจจุบันเกิดจากการรวมตัวของย่านพ่อค้าฮากาตะและเมืองปราสาทฟุกุโอกะ เมืองนี้รุ่งเรืองมาอย่างยาวนานในฐานะเมืองท่าที่เชื่อมโยงกับเอเชีย',
        '现代福冈由商人城市博多与福冈城下町融合而成，长期作为与亚洲交流密切的港口城市而发展。'
      ),
      culture_festivals: createLocalizedText(
        '博多祇園山笠と博多どんたくは二大名物で、街全体が祭りに包まれます。屋台文化も福岡の夜を代表する風景です。',
        'Hakata Gion Yamakasa and Hakata Dontaku are the two most famous festivals, and both fill the city with energy. The yatai street food scene is another defining feature of Fukuoka nights.',
        'ฮากาตะกิองยามากาสะและฮากาตะดนตะกุคือสองเทศกาลใหญ่ที่ทำให้ทั้งเมืองคึกคัก ส่วนวัฒนธรรมยาไตก็เป็นภาพจำของยามค่ำคืนในฟุกุโอกะ',
        '博多祇园山笠和博多咚打鼓是最具代表性的两大祭典，而屋台文化则是福冈夜晚最鲜明的风景之一。'
      ),
      things_to_do: createLocalizedText(
        '大濠公園、福岡城跡、キャナルシティ、福岡タワー、中洲の屋台巡り、太宰府への小旅行などが人気です。',
        'Popular activities include visiting Ohori Park, the Fukuoka Castle ruins, Canal City, Fukuoka Tower, yatai stalls in Nakasu, and a side trip to Dazaifu.',
        'กิจกรรมยอดนิยม ได้แก่ สวนโอฮอริ ซากปราสาทฟุกุโอกะ คาแนลซิตี้ ฟุกุโอกะทาวเวอร์ การตระเวนยาไตที่นากาสุ และทริปสั้นไปดาไซฟุ',
        '热门活动包括游览大濠公园、福冈城遗址、运河城、福冈塔、在中洲逛屋台，以及前往太宰府短途旅行。'
      ),
      local_cuisine: createLocalizedText(
        '博多ラーメン、もつ鍋、水炊き、明太子、ごまさばなど、旅の目的になる名物が豊富です。',
        'Hakata ramen, motsunabe, mizutaki, mentaiko, and goma-saba make Fukuoka one of the most rewarding food cities in Japan.',
        'ฮากาตะราเม็ง โมตสึนาเบะ มิซุทากิ เมนไทโกะ และโกมะซาบะ คือของกินเด่นที่ทำให้ฟุกุโอกะเป็นเมืองอาหารชั้นยอดของญี่ปุ่น',
        '博多拉面、内脏锅、水炊鸡锅、明太子和芝麻青花鱼等名物，让福冈成为日本最值得专程为美食而来的城市之一。'
      ),
      access: createLocalizedText(
        '福岡空港が市中心部に近く、博多駅は新幹線と在来線の要所です。市内は地下鉄やバスで移動しやすいです。',
        'Fukuoka Airport is unusually close to the city center, and Hakata Station is a major hub for both Shinkansen and local rail. The subway and bus network is easy to use.',
        'สนามบินฟุกุโอกะอยู่ใกล้ใจกลางเมืองมาก และสถานีฮากาตะก็เป็นศูนย์กลางของทั้งชินคันเซ็นและรถไฟทั่วไป ภายในเมืองใช้รถไฟใต้ดินและรถบัสได้ง่าย',
        '福冈机场距离市中心非常近，博多站也是新干线与在来线的重要枢纽，市内搭乘地铁和巴士十分方便。'
      ),
    },
    beppu: {
      history: createLocalizedText(
        '古くから湯治場として親しまれ、近代には温泉観光都市として全国的に知られるようになりました。泉源数と湧出量の多さでも有名です。',
        'Beppu has long been loved as a therapeutic hot spring town and became nationally famous as a spa destination in modern times. It is also known for its huge number of hot spring sources and large water output.',
        'เบปปุเป็นเมืองออนเซ็นเพื่อการพักฟื้นที่ผู้คนคุ้นเคยมานาน และในยุคใหม่ก็กลายเป็นเมืองท่องเที่ยวออนเซ็นที่มีชื่อเสียงทั่วประเทศ อีกทั้งยังโดดเด่นเรื่องจำนวนบ่อน้ำพุร้อนและปริมาณน้ำที่ผุดขึ้น',
        '别府自古就是著名疗养温泉地，近代以后更发展为全国知名的温泉观光城市，也以泉源数量和涌出量之多而闻名。'
      ),
      culture_festivals: createLocalizedText(
        '別府八湯温泉まつりなど、温泉を中心とした催しが多く、湯の町ならではの暮らしを感じられます。',
        'Events such as the Beppu Hot Spring Festival revolve around the city thermal culture, letting visitors feel what life in a hot spring town is really like.',
        'งานอย่างเทศกาลออนเซ็นเบปปุสะท้อนวัฒนธรรมเมืองน้ำพุร้อนอย่างชัดเจน ทำให้นักท่องเที่ยวสัมผัสวิถีชีวิตของเมืองออนเซ็นได้จริง',
        '别府温泉祭等活动围绕温泉文化展开，让人能真实感受到这座温泉之城的生活气息。'
      ),
      things_to_do: createLocalizedText(
        '地獄めぐり、砂湯や蒸し湯体験、湯けむり景観の散策、ロープウェイで鶴見岳へ登る旅が人気です。',
        'Popular experiences include the Hells of Beppu, sand baths, steam baths, walking through districts full of rising steam, and riding the ropeway up Mount Tsurumi.',
        'กิจกรรมยอดนิยมคือเที่ยวชมนรกแห่งเบปปุ ลองอาบทรายและห้องอบไอน้ำ เดินชมย่านที่มีไอร้อนลอยขึ้นทั่วเมือง และขึ้นกระเช้าไปภูเขาสึรุมิ',
        '热门体验包括别府地狱巡游、沙浴与蒸汽浴、漫步蒸汽缭绕的温泉街，以及乘缆车登上鹤见岳。'
      ),
      local_cuisine: createLocalizedText(
        '地獄蒸し料理、とり天、だんご汁など大分らしい味が楽しめます。温泉熱を生かした調理法も名物です。',
        'Local favorites include jigoku-mushi steam cooking, toriten chicken tempura, and dango soup. Using geothermal steam in cooking is itself a signature of Beppu.',
        'เมนูท้องถิ่นที่ควรลอง ได้แก่ อาหารนึ่งด้วยไอน้ำร้อนจิโกกุมุชิ ไก่เทมปุระโทริเท็น และซุปดังโงะ วิธีทำอาหารด้วยไอน้ำจากออนเซ็นก็เป็นเอกลักษณ์ของเบปปุด้วย',
        '当地美食有地狱蒸、鸡肉天妇罗和团子汤等，利用温泉蒸汽烹饪本身就是别府的一大特色。'
      ),
      access: createLocalizedText(
        '大分空港からバスでアクセスでき、JR別府駅から各温泉地へ向かいやすいです。市内バスを使うと地獄めぐりも便利です。',
        'Beppu is reachable from Oita Airport by bus, and JR Beppu Station is a good base for local hot spring areas. City buses are useful for touring the Hells.',
        'สามารถเดินทางจากสนามบินโออิตะด้วยรถบัส และใช้สถานี JR Beppu เป็นฐานไปยังย่านออนเซ็นต่าง ๆ ได้สะดวก การนั่งรถบัสในเมืองก็เหมาะกับการเที่ยวจิโกกุเมงุริ',
        '可从大分机场搭乘巴士前往别府，以JR别府站为据点前往各温泉区很方便，市内巴士也适合地狱巡游。'
      ),
    },
    yakushima: {
      history: createLocalizedText(
        '古くから屋久杉の島として知られ、林業の歴史と保護の歴史が共存しています。1993年には世界自然遺産に登録されました。',
        'Yakushima has long been known for its ancient cedar forests, with a history shaped by both logging and conservation. In 1993 it was listed as a World Natural Heritage site.',
        'ยาคุชิมะเป็นที่รู้จักมายาวนานในฐานะเกาะแห่งต้นยากุสึกิ และมีทั้งประวัติการทำป่าไม้ควบคู่กับการอนุรักษ์ ในปี 1993 เกาะนี้ได้รับการขึ้นทะเบียนเป็นมรดกโลกทางธรรมชาติ',
        '屋久岛自古以古老屋久杉闻名，既有林业历史，也有保护自然的历程，并于1993年被列入世界自然遗产。'
      ),
      culture_festivals: createLocalizedText(
        '山岳信仰や自然への敬意が強く、島の暮らしそのものに独特の文化があります。ガイド文化が発達しているのも特徴です。',
        'Mountain worship and respect for nature run deep here, giving island life a distinct culture. A strong guiding tradition is also part of the Yakushima experience.',
        'ความเชื่อเกี่ยวกับภูเขาและความเคารพต่อธรรมชาติมีรากลึก ทำให้วิถีชีวิตบนเกาะมีเอกลักษณ์เฉพาะ อีกทั้งวัฒนธรรมไกด์นำทางก็พัฒนาอย่างมาก',
        '这里深受山岳信仰与敬畏自然的影响，岛上生活形成了独特文化，完善的向导文化也是其特点之一。'
      ),
      things_to_do: createLocalizedText(
        '白谷雲水峡や縄文杉トレッキング、滝巡り、西部林道の自然観察、海岸沿いのドライブが人気です。',
        'Popular activities include hiking in Shiratani Unsuikyo, trekking to Jomon Sugi, visiting waterfalls, observing wildlife along Seibu Rindo, and driving the coast road.',
        'กิจกรรมยอดนิยมคือเดินป่าที่ชิราทานิอุนซุยเคียว เทรกกิงไปโจมงสึงิ เที่ยวน้ำตก สังเกตธรรมชาติบนถนนเซบุรินโด และขับรถเลียบชายฝั่ง',
        '热门活动包括游览白谷云水峡、徒步前往绳文杉、走访瀑布、在西部林道观察自然，以及沿海自驾。'
      ),
      local_cuisine: createLocalizedText(
        '首折れサバ、トビウオ料理、たんかんなどの柑橘が名物です。山と海の恵みを両方味わえます。',
        'Local specialties include mackerel, flying fish dishes, and citrus such as tankan, giving visitors both mountain and ocean flavors.',
        'ของขึ้นชื่อมีทั้งปลาซาบะ เมนูปลาบิน และผลไม้รสเปรี้ยวอย่างทังคัง ทำให้ได้ลิ้มรสทั้งจากภูเขาและทะเล',
        '当地特产有青花鱼、飞鱼料理以及椪柑等柑橘类水果，能同时品尝山海之味。'
      ),
      access: createLocalizedText(
        '鹿児島から高速船やフェリー、飛行機でアクセスできます。天候で欠航することもあるため、余裕ある日程が安心です。',
        'Yakushima can be reached from Kagoshima by high-speed boat, ferry, or plane. Because weather can cause cancellations, a flexible schedule is wise.',
        'เดินทางจากคาโกชิมะได้ทั้งเรือความเร็วสูง เรือเฟอร์รี และเครื่องบิน แต่สภาพอากาศอาจทำให้การเดินทางยกเลิกได้ จึงควรเผื่อเวลาไว้',
        '可从鹿儿岛搭乘高速船、渡轮或飞机前往屋久岛，但天气可能导致停航或停飞，行程最好留有余地。'
      ),
    },
    nagasaki: {
      history: createLocalizedText(
        '江戸時代には出島を通じた海外交流の窓口として発展し、キリスト教や西洋文化の痕跡が今も残ります。原爆被災地としての平和の記憶も大切にされています。',
        'During the Edo period, Nagasaki prospered as Japan rare window to the outside world through Dejima, and traces of Christianity and Western influence remain. The memory of the atomic bombing is also central to the city identity.',
        'ในสมัยเอโดะ นางาซากิรุ่งเรืองจากการเป็นหน้าต่างสู่โลกภายนอกผ่านเดจิมะ และร่องรอยของคริสต์ศาสนากับวัฒนธรรมตะวันตกยังคงอยู่จนทุกวันนี้ ความทรงจำเกี่ยวกับระเบิดปรมาณูก็เป็นส่วนสำคัญของอัตลักษณ์เมือง',
        '江户时代的长崎通过出岛成为日本少数对外交流的窗口，基督教与西方文化的痕迹至今仍在，而原爆记忆也是这座城市身份的重要组成部分。'
      ),
      culture_festivals: createLocalizedText(
        '長崎くんちや長崎ランタンフェスティバルは国際色豊かな雰囲気で有名です。和華蘭文化と呼ばれる独自の混交文化も魅力です。',
        'Nagasaki Kunchi and the Nagasaki Lantern Festival are famous for their international atmosphere. The city unique blend of Japanese, Chinese, and Western influences is often called Wakaran culture.',
        'นางาซากิคุนจิและเทศกาลโคมไฟนางาซากิมีชื่อเสียงจากบรรยากาศนานาชาติ อีกเสน่ห์คือวัฒนธรรมผสมผสานแบบญี่ปุ่น จีน และตะวันตกที่เรียกว่า Wakaran',
        '长崎宫日节和长崎灯会以浓厚的国际氛围闻名，而融合和风、中华与西洋元素的“和华兰文化”也是城市魅力所在。'
      ),
      things_to_do: createLocalizedText(
        '平和公園、原爆資料館、出島、グラバー園、大浦天主堂、稲佐山の夜景など見どころが多彩です。',
        'The city offers a wide range of sights, including Peace Park, the Atomic Bomb Museum, Dejima, Glover Garden, Oura Church, and the night view from Mount Inasa.',
        'เมืองนี้มีจุดน่าเที่ยวหลากหลาย ทั้งสวนสันติภาพ พิพิธภัณฑ์ระเบิดปรมาณู เดจิมะ สวนโกลเวอร์ โบสถ์โออุระ และวิวกลางคืนจากภูเขาอินาสะ',
        '这里景点丰富，包括和平公园、原爆资料馆、出岛、格洛弗园、大浦天主堂以及稻佐山夜景。'
      ),
      local_cuisine: createLocalizedText(
        'ちゃんぽん、皿うどん、カステラ、トルコライスなど、異文化交流から生まれた名物が豊富です。',
        'Champon, sara udon, castella cake, and Turkish rice show how Nagasaki cuisine grew from intercultural exchange.',
        'มีอาหารเด่นอย่างจัมปง ซาระอุด้ง คาสเทลลา และตุรกีไรซ์ ซึ่งสะท้อนการผสมผสานวัฒนธรรมของนางาซากิ',
        '长崎什锦面、皿乌冬、蛋糕卡斯提拉和土耳其饭等名物，都体现了这里因文化交流而形成的饮食特色。'
      ),
      access: createLocalizedText(
        '博多から特急列車や西九州新幹線経由でアクセスでき、市内は路面電車が便利です。長崎空港からのバス便もあります。',
        'Nagasaki is accessible from Hakata by limited express and Nishi-Kyushu Shinkansen connections, and the tram system is useful within the city. Buses also connect from Nagasaki Airport.',
        'สามารถเดินทางจากฮากาตะด้วยรถไฟด่วนหรือเชื่อมต่อกับนิชิคิวชูชินคันเซ็น ภายในเมืองมีรถรางใช้งานสะดวก และยังมีรถบัสจากสนามบินนางาซากิด้วย',
        '可从博多搭乘特急或经由西九州新干线前往长崎，市内有便利的有轨电车，也有巴士连接长崎机场。'
      ),
    },
  },
  okinawa: {
    naha: {
      history: createLocalizedText(
        'かつて琉球王国の政治と交易の中心であり、首里城を核に発展しました。戦後は復興を経て、沖縄観光の玄関口となっています。',
        'Naha once served as the political and trading center of the Ryukyu Kingdom, growing around Shuri Castle. After postwar recovery, it became the main gateway to Okinawa tourism.',
        'นาฮะเคยเป็นศูนย์กลางการเมืองและการค้าของอาณาจักรริวกิว โดยเติบโตรอบปราสาทชูริ หลังการฟื้นฟูหลังสงคราม เมืองนี้ก็กลายเป็นประตูหลักของการท่องเที่ยวโอกินาว่า',
        '那霸曾是琉球王国的政治与贸易中心，以首里城为核心发展。战后重建后，这里成为冲绳旅游的主要门户。'
      ),
      culture_festivals: createLocalizedText(
        '那覇大綱挽やエイサー、伝統芸能公演など、琉球文化を身近に感じられる催しが多いです。',
        'Events such as the Naha Great Tug-of-War, Eisa performances, and traditional stage shows make Ryukyu culture easy to experience in the city.',
        'มีงานอย่างเทศกาลชักเชือกยักษ์นาฮะ การแสดงเอสะ และการแสดงศิลปะดั้งเดิมที่ทำให้สัมผัสวัฒนธรรมริวกิวได้ใกล้ชิด',
        '那霸大拔河、Eisa表演和传统艺能演出等活动很多，让人能近距离感受琉球文化。'
      ),
      things_to_do: createLocalizedText(
        '首里城周辺、国際通り、壺屋やちむん通り、福州園、牧志公設市場などを巡るのが定番です。',
        'Typical highlights include the Shuri area, Kokusai Street, Tsuboya Yachimun Street, Fukushuen Garden, and the Makishi Public Market.',
        'สถานที่ยอดนิยมคือย่านชูริ ถนนโคคุไซ ถนนเครื่องปั้นดินเผาสึโบยะ สวนฟุคุชูเอ็น และตลาดสาธารณะมากิชิ',
        '经典景点包括首里地区、国际通、壶屋烧物通、福州园以及牧志公设市场。'
      ),
      local_cuisine: createLocalizedText(
        '沖縄そば、ラフテー、タコライス、海ぶどう、泡盛など、那覇だけでも沖縄料理を十分に堪能できます。',
        'Even within Naha alone, visitors can enjoy a full range of Okinawan food such as Okinawa soba, rafute, taco rice, sea grapes, and awamori.',
        'แค่อยู่ในนาฮะก็สามารถลองอาหารโอกินาว่าได้ครบถ้วน ทั้งโอกินาว่าโซบะ ราฟุเตะ ทาโกะไรซ์ องุ่นทะเล และอาวาโมริ',
        '即使只在那霸，也能充分品尝冲绳荞麦面、红烧五花肉、塔可饭、海葡萄和泡盛等多种冲绳料理。'
      ),
      access: createLocalizedText(
        '那覇空港からゆいレールで市内へすぐ移動でき、主要エリアは公共交通でも回りやすいです。',
        'From Naha Airport, the Yui Rail reaches the city very quickly, and the main urban areas are easy to explore by public transport.',
        'จากสนามบินนาฮะสามารถนั่ง Yui Rail เข้าเมืองได้อย่างรวดเร็ว และย่านสำคัญต่าง ๆ ก็เที่ยวได้สะดวกด้วยขนส่งสาธารณะ',
        '从那霸机场搭乘Yui Rail很快就能进入市区，主要区域也都适合使用公共交通游览。'
      ),
    },
    churaumi: {
      history: createLocalizedText(
        '2002年に海洋博公園内に開館し、沖縄の海を大規模に紹介する拠点として人気を集めています。研究と教育の役割も担っています。',
        'Opened in Ocean Expo Park in 2002, the aquarium quickly became a major place to discover Okinawa marine world on a grand scale. It also plays a role in research and education.',
        'พิพิธภัณฑ์สัตว์น้ำแห่งนี้เปิดในอุทยาน Ocean Expo Park เมื่อปี 2002 และกลายเป็นสถานที่ยอดนิยมในการเรียนรู้โลกใต้ทะเลของโอกินาว่าในระดับใหญ่ อีกทั้งยังมีบทบาทด้านการวิจัยและการศึกษา',
        '冲绳美丽海水族馆于2002年在海洋博公园开馆，迅速成为大型展示冲绳海洋世界的人气设施，同时也承担研究与教育功能。'
      ),
      culture_festivals: createLocalizedText(
        '沖縄の海洋文化や生き物への理解を深める展示やイベントが多く、家族連れにも人気です。',
        'Exhibits and events often focus on marine life and the ocean culture of Okinawa, making the site especially popular with families.',
        'มีนิทรรศการและกิจกรรมมากมายที่ช่วยให้เข้าใจสิ่งมีชีวิตทะเลและวัฒนธรรมทางทะเลของโอกินาว่า จึงเป็นที่นิยมมากในหมู่ครอบครัว',
        '这里常通过展览和活动介绍冲绳海洋生物与海洋文化，因此深受家庭游客欢迎。'
      ),
      things_to_do: createLocalizedText(
        '黒潮の海水槽、イルカプログラム、マナティー館、ウミガメ館、海洋博公園の散策を組み合わせるのがおすすめです。',
        'Recommended highlights include the Kuroshio Sea tank, dolphin programs, the manatee and sea turtle exhibits, and a walk through Ocean Expo Park.',
        'ไฮไลต์ที่แนะนำคือแทงก์ Kuroshio Sea โปรแกรมโลมา โซนพะยูน โซนเต่าทะเล และการเดินเล่นใน Ocean Expo Park',
        '推荐看点包括黑潮之海大水槽、海豚表演、海牛馆、海龟馆以及在海洋博公园散步。'
      ),
      local_cuisine: createLocalizedText(
        '周辺の本部エリアでは沖縄そばや海鮮料理、ブルーシールアイスなどを楽しめます。',
        'In the nearby Motobu area, visitors can enjoy Okinawa soba, seafood, and treats such as Blue Seal ice cream.',
        'บริเวณโมโตบุรอบ ๆ สามารถหากินทั้งโอกินาว่าโซบะ อาหารทะเล และไอศกรีม Blue Seal ได้',
        '附近的本部地区可以品尝冲绳荞麦面、海鲜料理以及Blue Seal冰淇淋等美食。'
      ),
      access: createLocalizedText(
        '那覇からは高速バスやレンタカーで向かうのが一般的です。北部観光と組み合わせると効率的です。',
        'Most visitors reach the aquarium from Naha by express bus or rental car. It combines well with a broader trip around northern Okinawa.',
        'โดยทั่วไปนักท่องเที่ยวจะมาจากนาฮะด้วยรถบัสด่วนหรือรถเช่า และมักเที่ยวรวมกับจุดอื่นทางตอนเหนือของโอกินาว่า',
        '大多数游客会从那霸搭乘高速巴士或自驾前来，与冲绳北部其他景点一起安排最有效率。'
      ),
    },
    'ishigaki-island': {
      history: createLocalizedText(
        '八重山諸島の中心地として栄え、琉球文化と島嶼交易の歴史を受け継いでいます。現在は離島観光の拠点としても重要です。',
        'Ishigaki developed as the center of the Yaeyama Islands, inheriting both Ryukyu culture and the history of island trade. It is now an important hub for island tourism.',
        'อิชิงากิรุ่งเรืองในฐานะศูนย์กลางของหมู่เกาะยาเอยามะ รับช่วงทั้งวัฒนธรรมริวกิวและประวัติการค้าระหว่างเกาะต่าง ๆ ปัจจุบันยังเป็นฐานสำคัญสำหรับเที่ยวเกาะรอบข้าง',
        '石垣岛作为八重山诸岛的中心而发展，承载着琉球文化与岛屿贸易历史，如今也是离岛旅游的重要枢纽。'
      ),
      culture_festivals: createLocalizedText(
        '豊年祭や八重山民謡、星空文化など、南の島らしい伝統が残ります。のんびりした島時間も魅力です。',
        'Harvest festivals, Yaeyama folk songs, and a strong star-gazing culture preserve the spirit of the southern islands. The unhurried island pace is part of the appeal.',
        'ยังคงมีประเพณีแบบเกาะใต้ เช่น เทศกาลเก็บเกี่ยว เพลงพื้นบ้านยาเอยามะ และวัฒนธรรมดูดาว จังหวะชีวิตช้า ๆ บนเกาะก็เป็นเสน่ห์สำคัญเช่นกัน',
        '丰年祭、八重山民谣和浓厚的观星文化保留了南方岛屿特色，而悠闲的岛上节奏本身也是魅力所在。'
      ),
      things_to_do: createLocalizedText(
        '川平湾、シュノーケリングやダイビング、石垣島鍾乳洞、離島ターミナルからの周遊が人気です。',
        'Kabira Bay, snorkeling and diving, Ishigaki limestone cave, and island hopping from the ferry terminal are among the top activities.',
        'กิจกรรมยอดนิยมคือไปอ่าวคาบิระ ดำน้ำตื้นหรือดำน้ำลึก เที่ยวถ้ำหินปูนอิชิงากิ และนั่งเรือไปเกาะอื่นจากท่าเรือหลัก',
        '热门活动包括前往川平湾、浮潜与潜水、参观石垣岛钟乳洞，以及从离岛码头出发跳岛游。'
      ),
      local_cuisine: createLocalizedText(
        '石垣牛、八重山そば、南国フルーツ、島料理の数々が人気で、カフェ文化も充実しています。',
        'Ishigaki beef, Yaeyama soba, tropical fruits, and island-style dishes are all popular, and the cafe scene is lively as well.',
        'มีของกินเด่นอย่างเนื้ออิชิงากิ ยาเอยามะโซบะ ผลไม้เมืองร้อน และอาหารสไตล์เกาะ อีกทั้งคาเฟ่บนเกาะก็น่าสนใจมาก',
        '石垣牛、八重山荞麦面、热带水果和各类岛屿料理都很受欢迎，当地咖啡馆文化也很活跃。'
      ),
      access: createLocalizedText(
        '新石垣空港から市街地へバスで移動でき、離島ターミナルから竹富島や西表島へも渡れます。',
        'Buses connect New Ishigaki Airport to the town area, and the ferry terminal provides access to islands such as Taketomi and Iriomote.',
        'มีรถบัสจากสนามบินใหม่อิชิงากิไปยังตัวเมือง และจากท่าเรือหลักก็สามารถนั่งเรือไปทาเคโทมิหรืออิริโอโมเตะได้',
        '从新石垣机场可搭乘巴士前往市区，而离岛码头则可前往竹富岛、西表岛等周边岛屿。'
      ),
    },
    'taketomi-island': {
      history: createLocalizedText(
        '伝統的な琉球集落の景観が大切に保存されており、重要伝統的建造物群保存地区にも選定されています。',
        'The island carefully preserves the landscape of a traditional Ryukyu village and has been designated as an important preservation district for historic buildings.',
        'เกาะแห่งนี้อนุรักษ์ภูมิทัศน์ของหมู่บ้านริวกิวดั้งเดิมไว้อย่างดี และยังได้รับการขึ้นทะเบียนเป็นเขตอนุรักษ์กลุ่มอาคารประวัติศาสตร์สำคัญ',
        '竹富岛精心保存着传统琉球村落景观，并被指定为重要传统建筑群保存地区。'
      ),
      culture_festivals: createLocalizedText(
        '種子取祭やミンサー織など、島独自の伝統文化が今も受け継がれています。赤瓦の家並みと白砂の道がその象徴です。',
        'Island traditions such as the Tanedori Festival and Minsa weaving are still alive today. Red-tiled houses and white sand roads are visual symbols of this culture.',
        'วัฒนธรรมเฉพาะของเกาะ เช่น เทศกาลทาเนะโดริและการทอผ้ามินซะ ยังสืบทอดมาถึงปัจจุบัน บ้านหลังคากระเบื้องแดงกับถนนทรายขาวคือสัญลักษณ์ของเกาะนี้',
        '种子取祭和民纱织等岛上独特传统至今仍被传承，红瓦屋顶与白沙小路就是这种文化最直观的象征。'
      ),
      things_to_do: createLocalizedText(
        '水牛車観光、集落の自転車散策、コンドイ浜やカイジ浜の訪問、夕景鑑賞が人気です。',
        'Water buffalo cart rides, cycling through the village, visits to Kondoi Beach and Kaiji Beach, and sunset viewing are among the most popular activities.',
        'กิจกรรมยอดนิยมคือทัวร์รถลากควายน้ำ ปั่นจักรยานชมหมู่บ้าน ไปหาดคอนไดและหาดไคจิ และชมพระอาทิตย์ตก',
        '最受欢迎的活动包括乘坐水牛车、骑行穿梭村落、前往Kondoi海滩和Kaiji海滩，以及欣赏日落。'
      ),
      local_cuisine: createLocalizedText(
        '八重山そば、沖縄ぜんざい、サーターアンダギーなど、素朴で島らしい味が楽しめます。',
        'Yaeyama soba, Okinawan zenzai, and sata andagi offer simple island flavors that suit the relaxed atmosphere.',
        'มีรสชาติเรียบง่ายแบบเกาะ เช่น ยาเอยามะโซบะ โอกินาว่าเซ็นไซ และซาต้าอันดางิ ซึ่งเข้ากับบรรยากาศสบาย ๆ ของเกาะมาก',
        '八重山荞麦面、冲绳善哉和沙翁等美食朴实而充满岛屿风味，与悠闲氛围十分契合。'
      ),
      access: createLocalizedText(
        '石垣島からフェリーで約10分ほどと近く、日帰りでも訪れやすいです。島内移動は徒歩や自転車が基本です。',
        'Taketomi is only about ten minutes from Ishigaki by ferry, making it easy to visit as a day trip. Walking and cycling are the main ways to get around.',
        'จากอิชิงากินั่งเรือเฟอร์รีเพียงประมาณ 10 นาที จึงเหมาะกับการเที่ยวแบบวันเดียว การเดินและปั่นจักรยานคือวิธีหลักในการเที่ยวบนเกาะ',
        '从石垣岛搭乘渡轮约10分钟即可到达，非常适合一日游。岛上主要依靠步行和骑行移动。'
      ),
    },
  },
};

export const REGIONS_DATA: Region[] = BASE_REGIONS_DATA.map((region) => ({
  ...region,
  ...REGION_SUPPLEMENTS[region.id],
  places: region.places.map((place) => ({
    ...place,
    ...PLACE_SUPPLEMENTS[region.id]?.[place.id],
  })),
}));
