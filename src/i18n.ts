import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// The translations
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        reviews: 'Reviews',
        contact: 'Contact Us',
        about: 'About Us', // New nav link
      },
      hero: {
        title: 'Discover Your Next Favorite Board Game',
        subtitle: 'In-depth reviews, strategy guides, and more from passionate gamers.',
        button: 'Browse All Reviews',
      },
      featured: {
        title: 'Featured Reviews',
      },
      contact: {
        title: 'Partnership Inquiry',
        description: 'Have a partnership proposal or a business inquiry? Fill out the form below and we will get back to you shortly.',
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        messageLabel: 'Your Message',
        submitButton: 'Send Message',
      },
      reviewDetail: {
        backToReviews: 'Back to Reviews',
        notFound: 'Review Not Found',
        notFoundDescription: 'The review you are looking for does not exist.',
      },
      disqus: {
        noscript: 'Please enable JavaScript to view the comments powered by Disqus.',
      },
      about: {
        title: 'About Board Master',
        description1: 'Welcome to Board Master, your ultimate resource for board game reviews, strategy guides, and community discussions.',
        description2: 'Our mission is to help you discover your next favorite board game, whether you are a seasoned veteran or new to the hobby.',
        missionTitle: 'Our Mission',
        missionDescription: 'To provide honest, in-depth, and engaging content that helps board game enthusiasts make informed decisions and get the most out of their gaming experience.',
        teamTitle: 'Our Team',
        teamDescription: 'We are a small team of passionate board gamers dedicated to sharing our love for the hobby with the world.',
      },
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: February 22, 2026',
        infoCollectionTitle: 'Information We Collect',
        infoCollectionDescription: 'We collect information you provide directly to us when you use our services, such as when you fill out a contact form or subscribe to a newsletter. This may include your name, email address, and message content.',
        howWeUseInfoTitle: 'How We Use Your Information',
        howWeUseInfoDescription: 'We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, and to send you service-related communications.',
        cookiesTitle: 'Cookies and Advertising',
        cookiesDescription: 'We use cookies to enhance your experience and to analyze site traffic. We also use third-party advertising services, such as Google AdSense, to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. Google\'s use of the advertising cookie enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.',
        googleAdSenseTitle: 'Google AdSense',
        googleAdSenseDescription: 'Users may opt out of personalized advertising by visiting Ads Settings. Alternatively, you can opt out of a third-party vendor\'s use of cookies for personalized advertising by visiting www.aboutads.info.',
        dataSecurityTitle: 'Data Security',
        dataSecurityDescription: 'We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.',
        yourRightsTitle: 'Your Rights',
        yourRightsDescription: 'You have the right to access, update, or delete your personal information. Please contact us to exercise these rights.',
        thirdPartyLinksTitle: 'Third-Party Links',
        thirdPartyLinksDescription: 'Our service may contain links to third-party websites not operated by us. We are not responsible for the content or privacy practices of these sites.',
        changesToPolicyTitle: 'Changes to this Policy',
        changesToPolicyDescription: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
        contactUsTitle: 'Contact Us',
        contactUsDescription: 'If you have any questions about this Privacy Policy, please contact us via our contact form.',
      },
      footer: {
        rights: 'All rights reserved.',
      },
      game: {
        catan: {
          title: 'Catan',
          excerpt: 'A game of strategy and resource management. The classic for a reason!',
          fullContent: `
            <p>Catan, originally published as Settlers of Catan, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany and has since sold over 32 million copies in 40 languages.</p>
            <h3>Gameplay Mechanics</h3>
            <p>Players take on the role of settlers, attempting to tame the remote but rich isle of Catan. Beginning with two small settlements and two roads, players collect resources (wood, brick, sheep, wheat, and ore) based on the dice roll and the hexagonal terrain tiles adjacent to their settlements. These resources are then used to build new roads, settlements, and cities. The goal is to be the first to reach 10 victory points.</p>
            <h3>Strategy Guide</h3>
            <p>Focus on getting a variety of resources early on. Numbers like 6 and 8 are mathematically more likely to roll, so prioritize those spots. Trading is essential; don't be afraid to make deals that benefit you more than your opponents. Building towards the ports can also be a game-winning strategy if you have a surplus of one specific resource.</p>
            <h3>Final Verdict</h3>
            <p>Catan is renowned for its blend of strategy, resource management, and negotiation. Its simple rules are easy to learn, but the depth of strategy keeps players engaged for years. The random setup of the board ensures high replayability, as every game presents a new challenge. While luck can play a role due to dice rolls, skilled players can mitigate this through clever trading and strategic placement.</p>
          `,
        },
        wingspan: {
          title: 'Wingspan',
          excerpt: 'A beautiful and engaging engine-building game about birds.',
          fullContent: `
            <p>Wingspan is a competitive, medium-weight, card-driven, engine-building board game designed by Elizabeth Hargrave and published by Stonemaier Games in 2019. It has received critical acclaim for its beautiful artwork, engaging gameplay, and unique theme.</p>
            <h3>Gameplay Mechanics</h3>
            <p>Players are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to their network of wildlife preserves. Each bird you play extends a chain of powerful combinations in one of your three habitats (forest, grassland, and wetland). Each habitat focuses on a key action: gaining food tokens (forest), laying eggs (grassland), or drawing bird cards (wetland).</p>
            <h3>Strategy Guide</h3>
            <p>Look for birds that provide extra resources when activated. Building a strong "engine" in the early game is crucial. Pay attention to the round goals and bonus cards, as they can provide significant victory points. Don't underestimate the power of drawing more bird cards to find the perfect synergy for your preserve.</p>
            <h3>Final Verdict</h3>
            <p>Wingspan is praised for its elegant design, relaxing gameplay, and educational value. It's a game that appeals to both seasoned board gamers and newcomers alike, offering a fresh take on engine-building mechanics. The attention to detail in the bird facts and illustrations makes every session a delight.</p>
          `,
        },
        gloomhaven: {
          title: 'Gloomhaven',
          excerpt: 'A cooperative legacy game with a massive world to explore.',
          fullContent: `
            <p>Gloomhaven is a cooperative legacy board game designed by Isaac Childres and published by Cephalofair Games in 2017. It is a massive, campaign-driven game that combines elements of tactical combat, role-playing, and dungeon crawling.</p>
            <h3>Gameplay Mechanics</h3>
            <p>Players take on the role of a group of mercenaries, each with unique abilities and motivations, as they embark on a sprawling campaign filled with challenging scenarios, branching narratives, and difficult decisions. The game features a persistent world that changes based on player choices. Combat is tactical and card-driven, requiring careful planning and coordination.</p>
            <h3>Strategy Guide</h3>
            <p>Coordination with your teammates is key. Since you cannot share specific card values, you must communicate your general intentions. Manage your hand carefully to avoid exhaustion; sometimes a "short rest" is better than a "long rest" to keep the momentum going. Focus on upgrading your cards with enhancements to stay ahead of the increasing difficulty.</p>
            <h3>Final Verdict</h3>
            <p>Gloomhaven is celebrated for its immersive world, deep strategic combat, and incredible replayability. It's a game that demands a significant time investment but rewards players with an unparalleled cooperative board gaming experience. It's widely considered one of the best board games ever made.</p>
          `,
        },
        terraformingMars: {
          title: 'Terraforming Mars',
          excerpt: 'A strategic game about corporations terraforming Mars.',
          fullContent: `
            <p>Terraforming Mars is a board game for 1 to 5 players designed by Jacob Fryxelius and published by FryxGames in 2016. Players take on the role of powerful corporations working together to terraform the planet Mars.</p>
            <h3>Gameplay Mechanics</h3>
            <p>Players achieve goals by raising the temperature, increasing oxygen levels, and covering the planet with ocean. This is done by playing project cards, which represent various technologies and resource production. The game features a high degree of strategic depth, balancing corporate objectives with the overarching goal of terraforming.</p>
            <h3>Strategy Guide</h3>
            <p>Early game should focus on increasing your production of basic resources like MegaCredits and Steel. Don't hoard cards; only buy what you know you can play soon. Milestones and Awards are a "race" for points, so keep an eye on your opponents' progress and jump on them when you have the chance.</p>
            <h3>Final Verdict</h3>
            <p>Terraforming Mars is praised for its thematic integration, strategic complexity, and high replayability. It offers a satisfying blend of engine-building, tableau building, and area control, making it a favorite among Eurogame enthusiasts worldwide.</p>
          `,
        },
        root: {
          title: 'Root',
          excerpt: 'A game of adventure and war in a vast wilderness.',
          fullContent: `
            <p>Root is a game of adventure and war in a vast wilderness where players embody one of four factions, each with its own unique gameplay mechanics and victory conditions. Designed by Cole Wehrle, it features highly asymmetric gameplay.</p>
            <h3>Gameplay Mechanics</h3>
            <p>The Marquise de Cat occupies the forest and seeks to industrialize it. The Eyrie Dynasties must command the respect of the old regime. The Woodland Alliance works to gather supporters and spark a rebellion. And the Vagabond plays all sides for personal gain. Each faction plays by fundamentally different rules.</p>
            <h3>Strategy Guide</h3>
            <p>Know your faction's specific strengths and weaknesses. The Marquise needs to protect their supply lines, while the Eyrie must manage their "Decree" carefully to avoid turmoil. As the Woodland Alliance, stay hidden until you have enough support to explode onto the board. The Vagabond should focus on exploring and helping/hindering others to gain items.</p>
            <h3>Final Verdict</h3>
            <p>Root is celebrated for its highly asymmetric design, rich thematic integration, and beautiful artwork. It offers a unique blend of strategic depth and player interaction, making every game a dynamic experience. It has a steep learning curve but is incredibly rewarding for dedicated players.</p>
          `,
        },
        spiritIsland: {
          title: 'Spirit Island',
          excerpt: 'A cooperative game of elemental spirits defending their island home.',
          fullContent: `
            <p>Spirit Island is a cooperative, highly thematic strategy game designed by R. Eric Reuss. Players take on the role of powerful nature spirits working together to defend their island from invading colonial powers.</p>
            <h3>Gameplay Mechanics</h3>
            <p>Each spirit has unique elemental powers and a distinct playstyle. Players grow their powers and work to blight the land and drive the invaders from the island. It features an innovative system where player actions have both immediate and long-term consequences.</p>
            <h3>Strategy Guide</h3>
            <p>Communication is vital. Plan your turns together to cover different areas of the island. Focus on "Fear" as a win condition; driving the invaders away through terror is often easier than destroying every single building. Use your innate powers as much as possible by matching your elemental icons.</p>
            <h3>Final Verdict</h3>
            <p>Spirit Island is renowned for its deep strategic gameplay, high replayability, and challenging difficulty. It offers a fresh take on cooperative board gaming, with players actively working against a complex invader system. A must-play for fans of complex strategy games.</p>
          `,
        },
      },
    },
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        reviews: '리뷰',
        contact: '문의하기',
        about: '회사소개',
      },
      hero: {
        title: '인생 보드게임을 찾아보세요',
        subtitle: '열정적인 게이머들의 심층 리뷰, 전략 가이드 등을 만나보세요.',
        button: '모든 리뷰 보기',
      },
      featured: {
        title: '추천 리뷰',
      },
      contact: {
        title: '제휴 문의',
        description: '제휴 제안이나 사업 문의가 있으시면 아래 양식을 작성해 주세요. 곧 연락드리겠습니다.',
        nameLabel: '이름',
        emailLabel: '이메일',
        messageLabel: '메시지',
        submitButton: '메시지 보내기',
      },
      reviewDetail: {
        backToReviews: '리뷰 목록으로 돌아가기',
        notFound: '리뷰를 찾을 수 없습니다',
        notFoundDescription: '찾으시는 리뷰가 존재하지 않습니다.',
      },
      disqus: {
        noscript: 'Disqus에서 제공하는 댓글을 보려면 JavaScript를 활성화하십시오.',
      },
      about: {
        title: '보드 마스터 소개',
        description1: '보드 마스터는 보드게임 리뷰, 전략 가이드, 커뮤니티 토론을 위한 최고의 리소스입니다.',
        description2: '저희의 미션은 노련한 베테랑이든 새로운 취미를 찾는 분이든, 여러분의 인생 보드게임을 찾는 데 도움을 드리는 것입니다.',
        missionTitle: '우리의 미션',
        missionDescription: '보드게임 애호가들이 정보에 입각한 결정을 내리고 게임 경험을 최대한 활용할 수 있도록 정직하고 심층적이며 매력적인 콘텐츠를 제공하는 것입니다.',
        teamTitle: '우리 팀',
        teamDescription: '저희는 보드게임에 대한 열정을 전 세계와 공유하는 데 헌신하는 열정적인 보드게이머들로 구성된 소규모 팀입니다.',
      },
      privacy: {
        title: '개인정보처리방침',
        lastUpdated: '최종 업데이트: 2026년 2월 22일',
        infoCollectionTitle: '수집하는 정보',
        infoCollectionDescription: '당사는 귀하가 서비스 이용 시 (예: 문의 양식 작성 또는 뉴스레터 구독 시) 직접 제공하는 정보를 수집합니다. 여기에는 귀하의 이름, 이메일 주소 및 메시지 내용이 포함될 수 있습니다.',
        howWeUseInfoTitle: '정보 사용 방법',
        howWeUseInfoDescription: '당사는 수집한 정보를 서비스 제공, 유지 및 개선, 문의 응답, 서비스 관련 통신 발송에 사용합니다.',
        dataSecurityTitle: '데이터 보안',
        dataSecurityDescription: '당사는 무단 액세스, 변경, 공개 또는 파괴로부터 귀하의 정보를 보호하기 위해 합리적인 보안 조치를 구현합니다. 그러나 인터넷 전송은 완전히 안전하지 않습니다.',
        yourRightsTitle: '귀하의 권리',
        yourRightsDescription: '귀하는 개인 정보에 액세스, 업데이트 또는 삭제할 권리가 있습니다. 이러한 권리 행사를 위해 당사에 문의하십시오.',
        thirdPartyLinksTitle: '제3자 링크',
        thirdPartyLinksDescription: '당사 서비스에는 당사가 운영하지 않는 제3자 웹사이트에 대한 링크가 포함될 수 있습니다. 당사는 이러한 사이트의 콘텐츠 또는 개인 정보 보호 관행에 대해 책임지지 않습니다.',
        changesToPolicyTitle: '정책 변경',
        changesToPolicyDescription: '당사는 개인정보처리방침을 수시로 업데이트할 수 있습니다. 변경 사항은 이 페이지에 새로운 개인정보처리방침을 게시하여 알려드립니다.',
        contactUsTitle: '문의하기',
        contactUsDescription: '본 개인정보처리방침에 대해 질문이 있으시면 문의 양식을 통해 당사에 문의하십시오.',
      },
      footer: {
        rights: '모든 권리 보유.',
      },
      game: {
        catan: {
          title: '카탄',
          excerpt: '전략과 자원 관리 게임. 명작에는 이유가 있습니다!',
          fullContent: `
            원래 '카탄의 개척자'로 출판된 카탄은 클라우스 토이버가 디자인한 멀티플레이어 보드게임입니다. 1995년 독일에 처음 출판된 이후 40개 언어로 3,200만 부 이상 판매되었습니다.
            플레이어는 정착민 역할을 맡아 멀리 떨어져 있지만 풍요로운 카탄 섬을 개척합니다. 두 개의 작은 정착지와 두 개의 도로로 시작하여 주사위 굴림과 정착지 옆 육각형 지형 타일에 따라 자원(나무, 벽돌, 양, 밀, 광석)을 수집합니다.
            이러한 자원은 새로운 도로, 정착지, 도시를 건설하는 데 사용됩니다. 목표는 10승점 먼저 도달하는 것입니다.
            카탄은 전략, 자원 관리, 협상 능력을 요구하는 것으로 유명합니다. 간단한 규칙은 배우기 쉽지만, 깊이 있는 전략은 플레이어들을 오랫동안 몰입하게 만듭니다.
            보드의 무작위 설정은 높은 리플레이성을 보장하며, 모든 게임은 새로운 도전을 제시합니다. 주사위 굴림으로 인해 운이 작용할 수도 있지만, 숙련된 플레이어는 영리한 거래와 전략적인 배치를 통해 이를 완화할 수 있습니다.
          `,
        },
        wingspan: {
          title: '윙스팬',
          excerpt: '아름답고 매력적인 새 테마 엔진 빌딩 게임.',
          fullContent: `
            윙스팬은 엘리자베스 하그레이브가 디자인하고 2019년 스톤마이어 게임즈에서 출판한 경쟁형 중간 난이도 카드 기반 엔진 빌딩 보드게임입니다. 아름다운 예술 작품, 매력적인 게임 플레이, 독특한 테마로 비평가들의 찬사를 받았습니다.
            플레이어는 조류 연구가, 조류 관찰자, 조류 학자, 수집가로서 야생 동물 보호 구역 네트워크에 가장 좋은 새들을 발견하고 유치하려고 합니다. 플레이하는 각 새는 세 가지 서식지(숲, 초원, 습지) 중 하나에서 강력한 조합의 사슬을 확장합니다.
            각 서식지는 주요 행동에 중점을 둡니다: 먹이 토큰 얻기(숲), 알 낳기(초원), 또는 새 카드 뽑기(습지). 이 게임은 170개 이상의 고유한 새 카드를 특징으로 하며, 각 카드에는 고유한 특수 능력, 아름다운 일러스트레이션 및 흥미로운 사실이 있습니다.
            윙스팬은 우아한 디자인, 편안한 게임 플레이, 교육적 가치로 칭찬받습니다. 노련한 보드게이머와 초보자 모두에게 어필하는 게임이며, 엔진 빌딩 메커니즘에 대한 신선한 접근 방식을 제공합니다.
          `,
        },
        gloomhaven: {
          title: '글룸헤이븐',
          excerpt: '방대한 세계를 탐험하는 협동 레거시 게임.',
          fullContent: `
            글룸헤이븐은 아이작 차일드레스가 디자인하고 2017년 세팔로페어 게임즈에서 출판한 협동 레거시 보드게임입니다. 전술 전투, 롤플레잉, 던전 크롤링 요소가 결합된 거대한 캠페인 기반 게임입니다.
            플레이어는 각기 고유한 능력과 동기를 가진 용병 그룹의 역할을 맡아 도전적인 시나리오, 분기되는 내러티브, 어려운 결정으로 가득 찬 광범위한 캠페인을 시작합니다. 이 게임은 플레이어의 선택에 따라 영구적으로 변하는 지속적인 세계를 특징으로 하며, 새로운 위치, 이벤트 및 캐릭터가 시간이 지남에 따라 잠금 해제됩니다.
            전투는 전술적이며 카드 기반으로 신중한 계획과 조정이 필요합니다. "레거시" 측면은 게임 구성 요소가 플레이함에 따라 영구적으로 변경되어 새로운 비밀을 드러내고, 새로운 캐릭터를 잠금 해제하고, 스토리를 발전시킨다는 것을 의미합니다.
            글룸헤이븐은 몰입감 넘치는 세계, 깊이 있는 전략적 전투, 놀라운 리플레이성으로 유명합니다. 상당한 시간 투자를 요구하지만, 플레이어에게 비할 데 없는 협동 보드게이밍 경험을 제공합니다.
          `,
        },
        terraformingMars: {
          title: '테라포밍 마스',
          excerpt: '화성을 테라포밍하는 기업에 대한 전략 게임.',
          fullContent: `
            테라포밍 마스는 제이콥 프리셀리우스가 디자인하고 2016년 프라이스 게임즈에서 출판한 1~5인용 보드게임입니다. 이 게임에서 플레이어는 강력한 기업의 역할을 맡아 온도를 높이고, 산소 수준을 높이고, 행성을 바다로 덮음으로써 화성을 테라포밍하기 위해 협력합니다.
            플레이어는 다양한 기술, 자원 생산 및 행동을 나타내는 프로젝트 카드를 플레이하여 이러한 목표를 달성합니다. 각 프로젝트 카드에는 특정 온도 또는 산소 수준과 같이 충족해야 하는 요구 사항이 있습니다.
            이 게임은 높은 수준의 전략적 깊이를 특징으로 하며, 플레이어는 화성을 테라포밍하는 전반적인 목표와 자신의 기업 목표 사이의 균형을 맞춰야 합니다. 플레이어 간의 상호 작용은 주로 자원 경쟁 및 보드에 타일 배치와 같은 간접적인 방식으로 이루어집니다.
            테라포밍 마스는 테마 통합, 전략적 복잡성, 높은 리플레이성으로 칭찬받습니다. 엔진 빌딩, 태블로 빌딩, 영역 제어의 만족스러운 조합을 제공하여 유로게임 애호가들 사이에서 인기가 높습니다.
          `,
        },
        root: {
          title: '루트',
          excerpt: '광대한 황야에서 펼쳐지는 모험과 전쟁 게임.',
          fullContent: `
            루트는 광대한 황야에서 펼쳐지는 모험과 전쟁 게임으로, 플레이어는 네 가지 진영 중 하나를 구현하며, 각 진영은 고유한 게임 플레이 메커니즘과 승리 조건을 가지고 있습니다. 콜 웨르레가 디자인하고 2017년 레더 게임즈에서 출판한 루트는 각 진영이 근본적으로 다른 규칙에 따라 플레이하는 비대칭 게임 플레이를 특징으로 합니다.
            고양이 후작은 숲을 점령하고 산업화하려고 합니다. 에리 왕조는 구체제의 존경을 받아야 합니다. 삼림 동맹은 지지자를 모으고 반란을 일으키려고 합니다. 그리고 방랑자는 모든 편을 오가며 퀘스트를 완수하고 개인적인 이득을 위해 갈등을 조종합니다.
            루트는 매우 비대칭적인 디자인, 풍부한 테마 통합 및 아름다운 예술 작품으로 유명합니다. 이 게임은 높은 수준의 전략적 깊이를 특징으로 하며, 플레이어는 화성을 테라포밍하는 전반적인 목표와 자신의 기업 목표 사이의 균형을 맞춰야 합니다. 플레이어 간의 상호 작용은 주로 자원 경쟁 및 보드에 타일 배치와 같은 간접적인 방식으로 이루어집니다.
            테라포밍 마스는 테마 통합, 전략적 복잡성, 높은 리플레이성으로 칭찬받습니다. 엔진 빌딩, 태블로 빌딩, 영역 제어의 만족스러운 조합을 제공하여 유로게임 애호가들 사이에서 인기가 높습니다.
          `,
        },
        spiritIsland: {
          title: '스피릿 아일랜드',
          excerpt: '원소 정령들이 섬을 방어하는 협동 게임.',
          fullContent: `
            스피릿 아일랜드는 R. 에릭 리우스가 디자인하고 2017년 그레이터 댄 게임즈에서 출판한 협동적이고 매우 테마적인 전략 게임입니다. 플레이어는 강력한 자연 정령의 역할을 맡아 침략하는 식민지 세력으로부터 신성한 섬을 방어하기 위해 협력합니다.
            각 정령은 고유한 원소 능력과 독특한 플레이 스타일을 가지고 있습니다. 플레이어는 힘을 키우고, 새로운 능력을 얻고, 땅을 황폐화시키고 침략자들을 섬에서 몰아내기 위해 노력합니다. 이 게임은 플레이어의 행동이 즉각적이고 장기적인 결과를 모두 가져오는 혁신적인 시스템을 특징으로 하며, 신중한 계획과 조정이 필요합니다.
            스피릿 아일랜드는 깊이 있는 전략적 게임 플레이, 높은 리플레이성, 도전적인 난이도로 유명합니다. 플레이어는 화성을 테라포밍하는 전반적인 목표와 자신의 기업 목표 사이의 균형을 맞춰야 합니다. 플레이어 간의 상호 작용은 주로 자원 경쟁 및 보드에 타일 배치와 같은 간접적인 방식으로 이루어집니다.
            테라포밍 마스는 테마 통합, 전략적 복잡성, 높은 리플레이성으로 칭찬받습니다. 엔진 빌딩, 태블로 빌딩, 영역 제어의 만족스러운 조합을 제공하여 유로게임 애호가들 사이에서 인기가 높습니다.
          `,
        },
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        reviews: 'Bewertungen',
        contact: 'Kontakt',
        about: 'Über uns',
      },
      hero: {
        title: 'Entdecke dein nächstes Lieblingsbrettspiel',
        subtitle: 'Ausführliche Bewertungen, Strategieanleitungen und mehr von leidenschaftlichen Spielern.',
        button: 'Alle Bewertungen durchsuchen',
      },
      featured: {
        title: 'Vorgestellte Bewertungen',
      },
      contact: {
        title: 'Partnerschaftsanfrage',
        description: 'Haben Sie einen Partnerschaftsvorschlag oder eine Geschäftsanfrage? Füllen Sie das untenstehende Formular aus und wir werden uns in Kürze bei Ihnen melden.',
        nameLabel: 'Ihr Name',
        emailLabel: 'Ihre E-Mail',
        messageLabel: 'Ihre Nachricht',
        submitButton: 'Nachricht senden',
      },
      reviewDetail: {
        backToReviews: 'Zurück zu Bewertungen',
        notFound: 'Bewertung nicht gefunden',
        notFoundDescription: 'Die gesuchte Bewertung existiert nicht.',
      },
      disqus: {
        noscript: 'Bitte aktivieren Sie JavaScript, um die von Disqus bereitgestellten Kommentare anzuzeigen.',
      },
      about: {
        title: 'Über Board Master',
        description1: 'Willkommen bei Board Master, Ihrer ultimativen Quelle für Brettspielbewertungen, Strategieführer und Community-Diskussionen.',
        description2: 'Unsere Mission ist es, Ihnen dabei zu helfen, Ihr nächstes Lieblingsbrettspiel zu entdecken, egal ob Sie ein erfahrener Veteran oder neu in diesem Hobby sind.',
        missionTitle: 'Unsere Mission',
        missionDescription: 'Wir möchten ehrliche, ausführliche und ansprechende Inhalte bereitstellen, die Brettspiel-Enthusiasten helfen, fundierte Entscheidungen zu treffen und das Beste aus ihrem Spielerlebnis herauszuholen.',
        teamTitle: 'Unser Team',
        teamDescription: 'Wir sind ein kleines Team leidenschaftlicher Brettspieler, die sich zum Ziel gesetzt haben, unsere Liebe zu diesem Hobby mit der Welt zu teilen.',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        lastUpdated: 'Zuletzt aktualisiert: 22. Februar 2026',
        infoCollectionTitle: 'Informationen, die wir sammeln',
        infoCollectionDescription: 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, wenn Sie unsere Dienste nutzen, z. B. wenn Sie ein Kontaktformular ausfüllen oder einen Newsletter abonnieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht umfassen.',
        howWeUseInfoTitle: 'Wie wir Ihre Informationen verwenden',
        howWeUseInfoDescription: 'Wir verwenden die von uns gesammelten Informationen, um unsere Dienste bereitzustellen, zu pflegen und zu verbessern, um auf Ihre Anfragen zu antworten und um Ihnen servicebezogene Mitteilungen zu senden.',
        dataSecurityTitle: 'Datensicherheit',
        dataSecurityDescription: 'Wir implementieren angemessene Sicherheitsmaßnahmen, um Ihre Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Keine Internetübertragung ist jedoch vollständig sicher.',
        yourRightsTitle: 'Ihre Rechte',
        yourRightsDescription: 'Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu aktualisieren oder zu löschen. Bitte kontaktieren Sie uns, um diese Rechte auszuüben.',
        thirdPartyLinksTitle: 'Links von Drittanbietern',
        thirdPartyLinksDescription: 'Unser Dienst kann Links zu Websites Dritter enthalten, die nicht von uns betrieben werden. Wir sind nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Websites.',
        changesToPolicyTitle: 'Änderungen an dieser Richtlinie',
        changesToPolicyDescription: 'Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.',
        contactUsTitle: 'Kontaktieren Sie uns',
        contactUsDescription: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über unser Kontaktformular.',
      },
      footer: {
        rights: 'Alle Rechte vorbehalten.',
      },
      game: {
        catan: {
          title: 'Catan',
          excerpt: 'Ein Spiel der Strategie und des Ressourcenmanagements. Aus gutem Grund ein Klassiker!',
          fullContent: `
            Catan, ursprünglich als Die Siedler von Catan veröffentlicht, ist ein Mehrspieler-Brettspiel, das von Klaus Teuber entworfen wurde. Es wurde erstmals 1995 in Deutschland veröffentlicht und hat sich seitdem über 32 Millionen Mal in 40 Sprachen verkauft.
            Spieler schlüpfen in die Rolle von Siedlern und versuchen, die abgelegene, aber reiche Insel Catan zu zähmen. Beginnend mit zwei kleinen Siedlungen und zwei Straßen sammeln die Spieler Ressourcen (Holz, Lehm, Wolle, Getreide und Erz) basierend auf dem Würfelwurf und den sechseckigen Geländefeldern neben ihren Siedlungen.
            Diese Ressourcen werden dann verwendet, um neue Straßen, Siedlungen und Städte zu bauen. Ziel ist es, als Erster 10 Siegpunkte zu erreichen.
            Catan ist bekannt für seine Mischung aus Strategie, Ressourcenmanagement und Verhandlung. Die einfachen Regeln sind leicht zu erlernen, aber die Tiefe der Strategie fesselt die Spieler über Jahre hinweg.
            Die zufällige Gestaltung des Spielbretts sorgt für eine hohe Wiederspielbarkeit, da jedes Spiel eine neue Herausforderung darstellt. Während der Würfelwurf eine Rolle spielen kann, können erfahrene Spieler dies durch kluges Handeln und strategische Platzierung mindern.
          `,
        },
        wingspan: {
          title: 'Flügelschlag',
          excerpt: 'Ein wunderschönes und fesselndes Engine-Building-Spiel über Vögel.',
          fullContent: `
            Flügelschlag ist ein kompetitives, mittelschweres, kartengetriebenes Engine-Building-Brettspiel, das von Elizabeth Hargrave entworfen und 2019 von Stonemaier Games veröffentlicht wurde. Es wurde für seine wunderschönen Kunstwerke, sein fesselndes Gameplay und sein einzigartiges Thema hoch gelobt.
            Spieler sind Vogelliebhaber – Forscher, Vogelbeobachter, Ornithologen und Sammler – die versuchen, die besten Vögel für ihr Netzwerk von Wildschutzgebieten zu entdecken und anzulocken. Jeder Vogel, den Sie spielen, erweitert eine Kette mächtiger Kombinationen in einem Ihrer drei Lebensräume (Wald, Grasland und Feuchtgebiet).
            Jeder Lebensraum konzentriert sich auf eine Schlüsselaktion: Nahrungsmarken erhalten (Wald), Eier legen (Grasland) oder Vogelkarten ziehen (Feuchtgebiet). Das Spiel bietet über 170 einzigartige Vogelkarten, jede mit ihren eigenen speziellen Fähigkeiten, wunderschönen Illustrationen und interessanten Fakten.
            Flügelschlag wird für sein elegantes Design, sein entspannendes Gameplay und seinen pädagogischen Wert gelobt. Es ist ein Spiel, das sowohl erfahrene Brettspieler als auch Neueinsteiger anspricht und eine frische Interpretation der Engine-Building-Mechaniken bietet.
          `,
        },
        gloomhaven: {
          title: 'Gloomhaven',
          excerpt: 'Ein kooperatives Legacy-Spiel mit einer riesigen Welt zu erkunden.',
          fullContent: `
            Gloomhaven ist ein kooperatives Legacy-Brettspiel, das von Isaac Childres entworfen und 2017 von Cephalofair Games veröffentlicht wurde. Es ist ein riesiges, kampagnengesteuertes Spiel, das Elemente aus taktischem Kampf, Rollenspiel und Dungeon-Crawling kombiniert.
            Spieler schlüpfen in die Rolle einer Söldnergruppe, jeder mit einzigartigen Fähigkeiten und Motivationen, während sie eine ausgedehnte Kampagne voller herausfordernder Szenarien, verzweigter Erzählungen und schwieriger Entscheidungen beginnen. Das Spiel bietet eine persistente Welt, die sich basierend auf den Spielerentscheidungen ändert, wobei im Laufe der Zeit neue Orte, Ereignisse und Charaktere freigeschaltet werden.
            Der Kampf ist taktisch und kartenbasiert und erfordert sorgfältige Planung und Koordination. Der "Legacy"-Aspekt bedeutet, dass sich die Spielkomponenten im Laufe des Spiels dauerhaft ändern, neue Geheimnisse enthüllen, neue Charaktere freischalten und die Geschichte weiterentwickeln.
            Gloomhaven wird für seine immersive Welt, seinen tiefgründigen strategischen Kampf und seine unglaubliche Wiederspielbarkeit gefeiert. Es ist ein Spiel, das einen erheblichen Zeitaufwand erfordert, aber den Spielern ein unvergleichliches kooperatives Brettspielerlebnis bietet.
          `,
        },
        terraformingMars: {
          title: 'Terraforming Mars',
          excerpt: 'Ein strategisches Spiel über Unternehmen, die den Mars terraformen.',
          fullContent: `
            Terraforming Mars ist ein Brettspiel für 1 bis 5 Spieler, das von Jacob Fryxelius entworfen und 2016 von FryxGames veröffentlicht wurde. In dem Spiel übernehmen die Spieler die Rolle mächtiger Konzerne, die zusammenarbeiten, um den Planeten Mars zu terraformen, indem sie die Temperatur erhöhen, den Sauerstoffgehalt erhöhen und den Planeten mit Ozean bedecken.
            Spieler erreichen diese Ziele, indem sie Projektkarten spielen, die verschiedene Technologien, Ressourcenproduktion und Aktionen darstellen. Jede Projektkarte hat Anforderungen, die erfüllt werden müssen, um sie zu spielen, wie z. B. eine bestimmte Temperatur oder einen bestimmten Sauerstoffgehalt.
            Das Spiel zeichnet sich durch eine hohe strategische Tiefe aus, wobei die Spieler ihre eigenen Unternehmensziele mit dem übergeordneten Ziel der Terraforming des Mars in Einklang bringen müssen. Die Interaktion zwischen den Spielern ist hauptsächlich indirekt, durch den Wettbewerb um Ressourcen und die Platzierung von Spielsteinen auf dem Spielbrett.
            Terraforming Mars wird für seine thematische Integration, seine strategische Komplexität und seine hohe Wiederspielbarkeit gelobt. Es bietet eine befriedigende Mischung aus Engine-Building, Tableau-Building und Area Control und ist damit ein Favorit unter Eurogame-Enthusiasten.
          `,
        },
        root: {
          title: 'Root',
          excerpt: 'Ein Abenteuer- und Kriegsspiel in einer weiten Wildnis.',
          fullContent: `
            Root ist ein Abenteuer- und Kriegsspiel in einer weiten Wildnis, in dem die Spieler eine von vier Fraktionen verkörpern, jede mit ihren eigenen einzigartigen Gameplay-Mechaniken und Siegbedingungen. Entworfen von Cole Wehrle und 2017 von Leder Games veröffentlicht, zeichnet sich Root durch asymmetrisches Gameplay aus, bei dem jede Fraktion nach grundlegend unterschiedlichen Regeln spielt.
            Die Marquise de Cat besetzt den Wald und versucht, ihn zu industrialisieren. Die Eyrie Dynasties müssen den Respekt des alten Regimes einfordern. Die Woodland Alliance arbeitet daran, Unterstützer zu sammeln und eine Rebellion zu entfachen. Und der Vagabund spielt alle Seiten, erfüllt Quests und manipuliert den Konflikt für persönlichen Gewinn.
            Root wird für sein hochgradig asymmetrisches Design, seine reichhaltige thematische Integration und seine wunderschönen Kunstwerke gefeiert. Es bietet eine einzigartige Mischung aus strategischer Tiefe und Spielerinteraktion, die jedes Spiel zu einem dynamischen und unvergesslichen Erlebnis. Die komplizierten Regeln des Spiels können anspruchsvoll zu erlernen sein, aber das lohnende Gameplay macht es für engagierte Spieler lohnenswert.
          `,
        },
        spiritIsland: {
          title: 'Geisterinsel',
          excerpt: 'Ein kooperatives Spiel elementarer Geister, die ihre Inselheimat verteidigen.',
          fullContent: `
            Geisterinsel ist ein kooperatives, sehr thematisches Strategiespiel, das von R. Eric Reuss entworfen und 2017 von Greater Than Games veröffentlicht wurde. Spieler schlüpfen in die Rolle mächtiger Naturgeister, die zusammenarbeiten, um ihre heilige Insel vor eindringenden Kolonialmächten zu verteidigen.
            Jeder Geist hat einzigartige elementare Kräfte und einen ausgeprägten Spielstil. Spieler erweitern ihre Kräfte, erhalten neue Fähigkeiten und arbeiten daran, das Land zu verunreinigen und die Eindringlinge von der Insel zu vertreiben. Das Spiel verfügt über ein innovatives System, bei dem die Aktionen der Spieler sowohl unmittelbare als auch langfristige Konsequenzen haben, was sorgfältige Planung und Koordination erfordert.
            Geisterinsel ist bekannt für sein tiefgründiges strategisches Gameplay, seine hohe Wiederspielbarkeit und seinen herausfordernden Schwierigkeitsgrad. Es bietet eine frische Interpretation des kooperativen Brettspiels, bei dem die Spieler aktiv gegen ein komplexes und sich entwickelndes Eindringlingssystem arbeiten. Das reiche Thema des Spiel und die vielfältigen Geister sorgen dafür, dass jedes Spiel einzigartig und fesselnd ist.
          `,
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
