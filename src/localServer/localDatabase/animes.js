import Anime1 from '../../assets/images/uzaki-chan-wants-to-hang-out-episode-3-english-sub.jpg'
import Anime2 from '../../assets/images/dbddf9284fd5aedb27d5481ee6912ae3.jpg'
import Anime3 from '../../assets/images/sao_bg.jpg'
import Anime2Vid from '../../assets/videos/One Punch Man - Blade Breakfast.mp4'
import Anime3Vid from '../../assets/videos/sao.mp4'
import Anime1Logo from '../../assets/images/logos/uzaki_logo.png'
import Anime2Logo from '../../assets/images/logos/onepunch_logo.png'
import Anime3Logo from '../../assets/images/logos/SWA_logo.png'
import uzakiEpisodes from './episodes/uzakiEpisodes.js'
import onepunchmanEpisodes from './episodes/onepunchmanEpisodes.js'

const animes = [
  {
    id: '1',
    name: {
      en: 'Uzaki chan wants to hang out!',
      ru: 'Узаки хочет отрываться!',
      kk: 'Узаки қыдырғысы келеді!'
    },
    info: {
      ru: 'Третьекурсник Синъитиро Сакураи хочет наслаждаться тихой университетской жизнью, хочет быть один, но вьющаяся вокруг него Хана Удзаки не даёт ему покоя. Подтрунивает, высмеивает, издевается… День за днём ему приходится терпеть выходки Удзаки! Такая суматоха утомляет Синъитиро, и всё-таки проведённое с девушкой время нельзя назвать скучным. — Вдвоём намного круче, чем одному! Почему-то у него не получается злиться на эту нахалку. Смотрите романтическую комедию об отношениях с невыносимой милашкой!',
      en: 'Shinichiro Sakurai, a third-year student, wants to enjoy a quiet university life, wants to be alone, but Hana Uzaki winding around him haunts him. He teases, makes fun of, mocks ... Day after day, he has to endure Uzaki\'s antics! Shinichiro is tired of such a bustle, and yet the time spent with the girl cannot be called boring. - Together is much cooler than one! For some reason, he can\'t get angry at this impudent woman. Watch a romantic comedy about a relationship with an unbearable cutie!',
      kk: 'Шиничиро Сакурай, үшінші курстың студенті, университеттің тыныш өмірінен рахат алғысы келеді, жалғыз болғысы келеді, бірақ Хана Узаки оны қоршап алады. Ол мазақтайды, мазақ етеді, мазақ етеді ... Күннен күнге Ұзакидің ерсі қылықтарына төзуге тура келеді! Синичиро мұндай қарбаластан шаршады, бірақ қызбен өткізген уақытты жалықтырарлық деп атауға болмайды. - Жалғыздыққа қарағанда бәрінен гөрі салқын! Неге екені белгісіз, ол осы арсыз әйелге ашулана алмайды. Адам төзгісіз катимен қарым-қатынас туралы романтикалық комедияны көріңіз!',
    },
    shortInfo: {
      ru: 'Третьекурсник Синъитиро Сакураи хочет наслаждаться тихой университетской жизнью, хочет быть один, но вьющаяся вокруг него Хана Удзаки не даёт ему покоя.',
      en: 'Shinichiro Sakurai, a third-year student, wants to enjoy a quiet university life, wants to be alone, but Hana Uzaki winding around him haunts him.',
      kk: 'Синъитиро Сакурай, үшінші курстың студенті, университеттің тыныш өмірінен рахат алғысы келеді, жалғыз болғысы келеді, бірақ Хана Узаки оны қоршап алады.',
    },
    poster: 'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/library/17_637292160270704163Uzaki-Chan_Small_RU.jpg',
    genres: ['1', '2', '3', '4'],
    backgroundImage: Anime1,
    logoImage: Anime1Logo,
    detail: [
      {
        label: {
          ru: 'Год',
          en: 'Year',
          kk: 'Жыл'
        },
        value: '2020'
      },
      {
        label: {
          ru: 'Студия',
          kk: 'Студия',
          en: 'Studio',
        },
        value: 'ENGI'
      },
      {
        label: {
          ru: 'Режиссер',
          kk: 'Режиссер',
          en: 'Director',
        },
        value: {
          ru: 'Миура Кадзуя',
          kk: 'Миура Кадзуя',
          en: 'Miura Kadzuya',
        }
      },
      {
        label: {
          ru: 'Озвучка',
          kk: 'Аударма',
          en: 'Voice acting',
        },
        value: 'StudioBand, AniRise, AniLIbria'
      },
      {
        label: {
          ru: 'Возрастной рейтинг',
          kk: 'Жас деңгейі',
          en: 'Age rating',
        },
        value: {
          ru: 'PG-13 (от 13 лет)',
          en: 'PG-13 (13 and older)',
          kk: 'PG-13 (13 жастан бастап)',
        }
      },
    ],
    episodes: [...uzakiEpisodes],
  },
  {
    id: '2',
    name: {
      ru: 'Ванпанчмен',
      en: 'One Punch Man',
      kz: 'Ванпанчмен',
    },
    info: {
      ru: 'Данная история повествует о юноше Саитаме, которому приходится жить в мире, так иронично похожем на наш. Ему 20 с небольшим лет. Он лысый и прекрасный. А, ну да, к тому же главный герой настолько силен, что с одного удара аннигилирует все опасности для человечества. Данная история комедийная, но при всей своей комичности, драматичная. К тому же в ней много пищи для размышлений. Она позитивная, отличается умом и сообразительностью. Саитама ищет себя на нелегком жизненном пути, и попутно раздаёт подзатыльники нехорошим существам. У него есть квартира, есть (в столь юном возрасте) лысина и твердая вера в хороших людей.',
      en: 'This story tells the story of a young man Saitama, who has to live in a world so ironically similar to ours. He is in his early 20s. He is bald and beautiful. And, well, yes, besides, the main character is so strong that with one blow he annihilates all the dangers to humanity. This story is comedic, but for all its comic, dramatic. Moreover, it has a lot of food for thought. She is positive, intelligent and quick-witted. Saitama is looking for himself on a difficult path in life, and along the way he gives out cuffs to bad creatures. He has an apartment, has (at such a young age) a bald head and a firm belief in good people.',
      kk: 'Бұл оқиға жас Сайтама туралы әңгімелейді, ол біздікіне ұқсас әлемде өмір сүреді. Ол 20-дың басында. Ол таз әрі әдемі. Ия, иә, сонымен қатар, басты кейіпкердің күшті болғаны соншалық, ол бір соққымен адамзатқа төнетін барлық қауіп-қатерлерді жояды. Бұл оқиға комедиялық, бірақ күлкілі болса да, драмалық. Сонымен қатар, мұнда ойландыратын тағам көп. Ол позитивті, ақылды және тез ойлы. Сайтама өзін өмірдің қиын жолында іздейді, сонымен бірге жаман тіршілік иелеріне манжеттер таратып береді. Оның пәтері бар, (жас кезінде) басы таз және жақсы адамдарға деген сенімділік бар.',
    },
    shortInfo: {
      ru: 'Он лысый и прекрасный. К тому же главный герой настолько силен, что с одного удара аннигилирует все опасности для человечества.',
      kk: 'Ол таз әрі әдемі. Ия, иә, сонымен қатар, басты кейіпкердің күшті болғаны соншалық, ол бір соққымен адамзатқа төнетін барлық қауіп-қатерлерді жояды.',
      en: 'He is bald and beautiful. And, well, yes, besides, the main character is so strong that with one blow he annihilates all the dangers to humanity.',
    },
    poster: 'https://animego.org/upload/anime/images/5df735a5705a7588124703.jpg',
    genres: ['1', '2', '5', '6', '7', '8'],
    backgroundImage: Anime2,
    logoImage: Anime2Logo,
    backgroundVideo: Anime2Vid,
    detail: [
      {
        label: {
          ru: 'Год',
          en: 'Year',
          kk: 'Жыл'
        },
        value: '2015'
      },
      {
        label: {
          ru: 'Студия',
          kk: 'Студия',
          en: 'Studio',
        },
        value: 'Madhouse'
      },
      {
        label: {
          ru: 'Режиссер',
          kk: 'Режиссер',
          en: 'Director',
        },
        value: {
          ru: 'Нацумэ Синго',
          kk: 'Нацумэ Синго',
          en: 'Natsume Singoe',
        }
      },
      {
        label: {
          ru: 'Озвучка',
          kk: 'Аударма',
          en: 'Voice acting',
        },
        value: 'JAM CLUB Kansai, SHIZA Project'
      },
      {
        label: {
          ru: 'Возрастной рейтинг',
          kk: 'Жас деңгейі',
          en: 'Age rating',
        },
        value: {
          ru: 'R-17+ (насилие и/или нецензурная лексика)',
          en: 'R-17 + (violence and / or foul language)',
          kk: 'R-17+ (зорлық-зомбылық және / немесе дөрекі сөздер)',
        }
      },
    ],
    episodes: [...onepunchmanEpisodes],
  },
  {
    id: '3',
    name: 'Sword Art Online',
    info: {
      ru: 'Виртуальный мир, почти неотличимый от настоящего, — новейшая VRMMO «Sword Art Online». Однако смерть в этом мире означает смерть в мире реальном. Почти десять тысяч человек становятся пленниками игры и смогут освободиться, только если пройдут её до конца. Главный герой Кирито, один из лучших бета-тестеров, узнаёт вместе с другими участниками, что эта новая и безобидная на первый взгляд игра на самом деле — игра на выживание. Смогут ли они пройти через все многочисленные ловушки и испытания, приготовленные жестокой игрой, и остаться в живых?',
      en: 'The virtual world, almost indistinguishable from the present, is the newest VRMMO "Sword Art Online". However, death in this world means death in the real world. Almost ten thousand people become prisoners of the game and will be able to free themselves only if they go through it to the end. The main character Kirito, one of the best beta testers, learns along with the other participants that this new and seemingly harmless game is actually a survival game. Will they be able to go through all the many traps and trials prepared by the cruel game, and stay alive?',
      kk: 'Виртуалды әлем, қазіргі уақытпен ерекшеленбейді, бұл ең соңғы VRMMO «Sword Art Online». Алайда, бұл әлемдегі өлім нақты әлемдегі өлімді білдіреді. Он мыңға жуық адам ойынның тұтқыны болады және оны соңына дейін өткізген жағдайда ғана өздерін босата алады. Басты кейіпкер, ең жақсы бета-тестерлердің бірі Кирито басқа қатысушылармен бірге бұл жаңа және зиянсыз болып көрінетін ойын шын мәнінде тірі қалу ойыны екенін біледі. Олар қатал ойын дайындаған көптеген тұзақтар мен сынақтардан өтіп, тірі қала ала ма?',
    },

    shortInfo: {
      ru: 'Виртуальный мир, почти неотличимый от настоящего, — новейшая VRMMO «Sword Art Online». Однако смерть в этом мире означает смерть в мире реальном.',
      en: 'The virtual world, almost indistinguishable from the present, is the newest VRMMO "Sword Art Online". However, death in this world means death in the real world.',
      kk: 'Виртуалды әлем, қазіргі уақытпен ерекшеленбейді, бұл ең соңғы VRMMO «Sword Art Online». Алайда, бұл әлемдегі өлім нақты әлемдегі өлімді білдіреді.',
    },
    poster: 'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/library/266_636971790457392281SAO_Small_RU.png',
    genres: ['1', '2', '6', '7', '8'],
    backgroundImage: Anime3,
    logoImage: Anime3Logo,
    backgroundVideo: Anime3Vid,
    media: {
      video: [
        {
          quality: '720',
          src: 'blob:https://aniqit.com/9e1b92bc-a8fd-4e80-afa2-e3839a4a71ff',
        }
      ],
    },
  },
]


export function getAnimeById(id) {
  return animes.find((anime) => anime.id+'' === id+'')
}

export default animes
