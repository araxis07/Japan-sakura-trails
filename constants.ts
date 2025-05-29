
import { Region, Language } from './types';

export const REGIONS_DATA: Region[] = [
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
          [Language.JA]: '歴史的な運河とガラス工芸で知られるノスタルジックな港町。',
          [Language.EN]: 'A nostalgic port town known for its historic canal and glasswork.',
          [Language.TH]: 'เมืองท่าที่ชวนให้คิดถึงอดีต มีชื่อเสียงด้านคลองประวัติศาสตร์และเครื่องแก้ว',
          [Language.ZH]: '一个怀旧的港口小镇，以其历史悠久的运河和玻璃工艺品而闻名。',
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
          [Language.JA]: '夏には美しいラベンダー畑が広がり、冬にはスキーリゾートとして人気です。',
          [Language.EN]: 'Famous for its beautiful lavender fields in summer and popular as a ski resort in winter.',
          [Language.TH]: 'มีชื่อเสียงด้านทุ่งลาเวนเดอร์ที่สวยงามในฤดูร้อนและเป็นที่นิยมในฐานะสกีรีสอร์ทในฤดูหนาว',
          [Language.ZH]: '夏季以美丽的薰衣草田而闻名，冬季则作为滑雪胜地广受欢迎。',
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
          [Language.JA]: '函館山の夜景は世界三大夜景の一つと称されることも。新鮮な魚介類も魅力です。',
          [Language.EN]: 'The night view from Mount Hakodate is often acclaimed as one of the world\'s best. Fresh seafood is also a highlight.',
          [Language.TH]: 'ทิวทัศน์ยามค่ำคืนจากภูเขาฮาโกดาเตะมักได้รับการยกย่องว่าเป็นหนึ่งในทิวทัศน์ที่ดีที่สุดในโลก อาหารทะเลสดใหม่ก็เป็นไฮไลท์เช่นกัน',
          [Language.ZH]: '函馆山夜景常被誉为世界最佳夜景之一。新鲜的海鲜也是一大亮点。',
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
      [Language.JA]: '本州北部に位置し、豊かな自然、温泉、伝統的な祭りを持つ地方。四季折々の美しい風景が楽しめます。',
      [Language.EN]: 'Located in northern Honshu, a region with rich nature, hot springs, and traditional festivals. Enjoy beautiful scenery in all four seasons.',
      [Language.TH]: 'ตั้งอยู่ทางตอนเหนือของฮอนชู เป็นภูมิภาคที่มีธรรมชาติอุดมสมบูรณ์ น้ำพุร้อน และเทศกาลแบบดั้งเดิม เพลิดเพลินกับทิวทัศน์ที่สวยงามในทุกฤดูกาล',
      [Language.ZH]: '位于本州北部，拥有丰富的自然风光、温泉和传统节日。四季景色优美。',
    },
    image: 'https://picsum.photos/seed/tohoku-main/800/400',
    places: [
      {
        id: 'sendai',
        name: { 
          [Language.JA]: '仙台市', 
          [Language.EN]: 'Sendai City',
          [Language.TH]: 'เมืองเซ็นได',
          [Language.ZH]: '仙台市',
        },
        description: {
          [Language.JA]: '宮城県の県庁所在地で、「杜の都」として知られています。伊達政宗ゆかりの地であり、七夕まつりが有名です。',
          [Language.EN]: 'The capital of Miyagi Prefecture, known as the "City of Trees." It has historical ties to Date Masamune and is famous for its Tanabata Festival.',
          [Language.TH]: 'เมืองหลวงของจังหวัดมิยางิ รู้จักกันในชื่อ "เมืองแห่งต้นไม้" มีความผูกพันทางประวัติศาสตร์กับดาเตะ มาซามุเนะ และมีชื่อเสียงด้านเทศกาลทานาบาตะ',
          [Language.ZH]: '宫城县首府，被誉为“森林之都”。与伊达政宗有历史渊源，并以七夕节闻名。',
        },
        image: 'https://picsum.photos/seed/sendai-city/600/300',
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
          [Language.JA]: '本州最北端の県庁所在地。壮大なねぶた祭りが国際的に知られています。三内丸山遺跡も有名です。',
          [Language.EN]: 'The northernmost prefectural capital on Honshu. Internationally known for its spectacular Nebuta Festival. Sannai Maruyama Site is also famous.',
          [Language.TH]: 'เมืองหลวงของจังหวัดทางเหนือสุดบนเกาะฮอนชู เป็นที่รู้จักในระดับสากลจากเทศกาลเนบูตะที่งดงาม สถานที่ซันไน มารุยามะก็มีชื่อเสียงเช่นกัน',
          [Language.ZH]: '本州最北端的县首府。以其壮观的睡魔祭而闻名于世。三内丸山遗址也很有名。',
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
          [Language.JA]: '山形市にある立石寺の通称。山肌に点在するお堂からの眺めは絶景です。',
          [Language.EN]: 'Common name for Risshaku-ji Temple in Yamagata. The view from the halls scattered on the mountainside is superb.',
          [Language.TH]: 'ชื่อสามัญของวัดริชชะคุจิในยามากาตะ ทิวทัศน์จากห้องโถงที่กระจายอยู่บนไหล่เขานั้นยอดเยี่ยมมาก',
          [Language.ZH]: '山形市立石寺的通称。从散布在山腰上的殿堂眺望的景色绝佳。',
        },
        image: 'https://picsum.photos/seed/yamadera-temple/600/300',
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
          [Language.JA]: '青森県弘前市にある城。春には日本有数の桜の名所として多くの観光客で賑わいます。',
          [Language.EN]: 'A castle in Hirosaki, Aomori. In spring, it is one of Japan\'s most famous cherry blossom viewing spots, attracting many tourists.',
          [Language.TH]: 'ปราสาทในฮิโรซากิ อาโอโมริ ในฤดูใบไม้ผลิ ที่นี่เป็นหนึ่งในจุดชมซากุระที่มีชื่อเสียงที่สุดของญี่ปุ่น ดึงดูดนักท่องเที่ยวจำนวนมาก',
          [Language.ZH]: '位于青森县弘前市的城堡。春天是日本最著名的赏樱胜地之一，吸引了许多游客。',
        },
        image: 'https://picsum.photos/seed/hirosaki-castle/600/300',
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
          [Language.JA]: '歴史的な寺社や大仏で知られる沿岸都市。東京からの日帰り旅行先として人気です。',
          [Language.EN]: 'A coastal city known for its historic temples, shrines, and the Great Buddha statue. Popular day trip from Tokyo.',
          [Language.TH]: 'เมืองชายฝั่งทะเลที่รู้จักกันดีจากวัด ศาลเจ้าเก่าแก่ และพระใหญ่ไดบุตสึ เป็นที่นิยมสำหรับการเดินทางแบบไปเช้าเย็นกลับจากโตเกียว',
          [Language.ZH]: '以其历史悠久的寺庙、神社和镰仓大佛而闻名的沿海城市。是从东京出发的热门一日游目的地。',
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
          [Language.ZH]: '爱知县首府，日本三大城市之一。以名古屋城、热田神宫和独特的“名古屋饭”而闻名。',
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
          [Language.ZH]: '供奉海神的 आणि社，需攀登长长的石阶才能到达。吸引了许多朝拜者。',
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
