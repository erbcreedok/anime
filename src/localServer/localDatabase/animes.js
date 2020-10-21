import Anime1 from '../../assets/images/uzaki-chan-wants-to-hang-out-episode-3-english-sub.jpg'
import Anime2 from '../../assets/images/dbddf9284fd5aedb27d5481ee6912ae3.jpg'
import Anime3 from '../../assets/images/sao_bg.jpg'
import Anime2Vid from '../../assets/videos/One Punch Man - Blade Breakfast.mp4'
import Anime3Vid from '../../assets/videos/sao.mp4'
import Anime1Logo from '../../assets/images/logos/uzaki_logo.png'
import Anime2Logo from '../../assets/images/logos/onepunch_logo.png'
import Anime3Logo from '../../assets/images/logos/SWA_logo.png'
import uzakiEpisodes from './episodes/uzakiEpisodes.js'

const animes = [
  {
    id: '1',
    name: 'Uzaki chan wants to hang out!',
    info: 'Третьекурсник Синъитиро Сакураи хочет наслаждаться тихой университетской жизнью, хочет быть один, но вьющаяся вокруг него Хана Удзаки не даёт ему покоя. Подтрунивает, высмеивает, издевается… День за днём ему приходится терпеть выходки Удзаки! Такая суматоха утомляет Синъитиро, и всё-таки проведённое с девушкой время нельзя назвать скучным. — Вдвоём намного круче, чем одному! Почему-то у него не получается злиться на эту нахалку. Смотрите романтическую комедию об отношениях с невыносимой милашкой!',
    shortInfo: 'Третьекурсник Синъитиро Сакураи хочет наслаждаться тихой университетской жизнью, хочет быть один, но вьющаяся вокруг него Хана Удзаки не даёт ему покоя.',
    poster: 'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/library/17_637292160270704163Uzaki-Chan_Small_RU.jpg',
    genres: ['1', '2', '3', '4'],
    backgroundImage: Anime1,
    logoImage: Anime1Logo,
    detail: [
      {label: 'Год', value: '2020'},
      {label: 'Студия', value: 'ENGI'},
      {label: 'Режиссер', value: 'Миура Кадзуя'},
      {label: 'Озвучка', value: 'StudioBand, AniRise, AniLIbria'},
      {label: 'Возрастной рейтинг', value: 'PG-13 (от 13 лет)'},
    ],
    episodes: [...uzakiEpisodes],
  },
  {
    id: '2',
    name: 'One Punch Man',
    info: 'Данная история повествует о юноше Саитаме, которому приходится жить в мире, так иронично похожем на наш. Ему 20 с небольшим лет. Он лысый и прекрасный. А, ну да, к тому же главный герой настолько силен, что с одного удара аннигилирует все опасности для человечества. Данная история комедийная, но при всей своей комичности, драматичная. К тому же в ней много пищи для размышлений. Она позитивная, отличается умом и сообразительностью. Саитама ищет себя на нелегком жизненном пути, и попутно раздаёт подзатыльники нехорошим существам. У него есть квартира, есть (в столь юном возрасте) лысина и твердая вера в хороших людей.',
    shortInfo: 'Он лысый и прекрасный. К тому же главный герой настолько силен, что с одного удара аннигилирует все опасности для человечества.',
    poster: 'https://animego.org/upload/anime/images/5df735a5705a7588124703.jpg',
    genres: ['1', '2', '5', '6', '7', '8'],
    backgroundImage: Anime2,
    logoImage: Anime2Logo,
    backgroundVideo: Anime2Vid,
    detail: [
      {label: 'Год', value: '2015'},
      {label: 'Студия', value: 'Madhouse'},
      {label: 'Режиссер', value: 'Нацумэ Синго'},
      {label: 'Озвучка', value: 'JAM CLUB Kansai, SHIZA Project'},
      {label: 'Возрастной рейтинг', value: 'R-17+ (насилие и/или нецензурная лексика)'},
    ],
    episodes: [...uzakiEpisodes],
  },
  {
    id: '3',
    name: 'Sword Art Online',
    info: 'Виртуальный мир, почти неотличимый от настоящего, — новейшая VRMMO «Sword Art Online». Однако смерть в этом мире означает смерть в мире реальном. Почти десять тысяч человек становятся пленниками игры и смогут освободиться, только если пройдут её до конца. Главный герой Кирито, один из лучших бета-тестеров, узнаёт вместе с другими участниками, что эта новая и безобидная на первый взгляд игра на самом деле — игра на выживание. Смогут ли они пройти через все многочисленные ловушки и испытания, приготовленные жестокой игрой, и остаться в живых?',
    shortInfo: 'Виртуальный мир, почти неотличимый от настоящего, — новейшая VRMMO «Sword Art Online». Однако смерть в этом мире означает смерть в мире реальном.',
    poster: 'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/library/266_636971790457392281SAO_Small_RU.png',
    genres: ['1', '2', '6', '7', '8'],
    backgroundImage: Anime3,
    logoImage: Anime3Logo,
    backgroundVideo: Anime3Vid,
  },
]


export function getAnimeById(id) {
  return animes.find((anime) => anime.id+'' === id+'')
}

export default animes
