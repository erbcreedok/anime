import sample from '../../../assets/videos/sample.mp4'
import generateEpisodes from './generateEpisodes.js'

const onepunchmanEpisodes = [
  [
    {
      name: 'Saikyô no otoko',
      poster: 'https://cloud.kodik-storage.com/012d52b62270da650fa19e0e50e9230d:2020102202/useruploads/5e830bd8-4b80-409d-b7fd-e545abff3ed0/thumb001.jpg',
      video: sample,
    },
    {
      name: 'Kokô no saibôgu',
      poster: 'https://cloud.kodik-storage.com/4f7e22da0af468e0c76f3cac5629eaec:2020102202/useruploads/11402845-af0b-4e32-afb0-935bb4d19e48/thumb005.jpg',
      video: sample,
    },
    {
      name: 'Shûnen no kagakusha',
      poster: 'https://cloud.kodik-storage.com/fa1be5cfc7b2ef34b673509b8ecbbfee:2020102202/useruploads/657cb408-5a24-4ae4-98c2-c4d2f3af00cc/thumb004.jpg',
      video: sample,
    },
    {
      name: 'Imadoki no ninja',
      poster: 'https://cloud.kodik-storage.com/c22f8066c37bb3d42605f11f690423d3:2020102202/useruploads/0d50c3aa-592e-4c44-8408-8423b13725ac/thumb004.jpg',
      video: sample,
    },
    {
      name: 'Kyûkoku no shi',
      poster: 'https://cloud.kodik-storage.com/846df257cd4e1ee9b0830ea57fda03ba:2020102202/useruploads/06886099-23e5-4d09-962c-3b5e258df5fd/thumb003.jpg',
      video: sample,
    },
    {
      name: 'Saikyô no toshi',
      poster: 'https://cloud.kodik-storage.com/e9629237a6d0d99a28d3e590e6f275d5:2020102202/useruploads/fad3dece-eed0-44e2-8c7a-eaa7aad2b87d/thumb004.jpg',
      video: sample,
    },
    {
      name: 'Shikô no deshi',
      poster: 'https://cloud.kodik-storage.com/59f867b99a4280feab0d14abd20e1960:2020102202/useruploads/5d1cedf1-a1d5-4864-b14d-7a58d09de989/thumb002.jpg',
      video: sample,
    },
    {
      name: 'Shinkai no Ô',
      poster: 'https://cloud.kodik-storage.com/06d00075fc648f6ffc6c52d5d709d380:2020102202/useruploads/c86eea10-49bf-4167-bf94-5eafb8c0bcc1/thumb003.jpg',
      video: sample,
    },
    {
      name: 'Fukutsu no seigi',
      poster: 'https://cloud.kodik-storage.com/fffdef3311b15da213e79059056e019e:2020102202/useruploads/af1faf00-025e-4883-8698-55f45a75befe/thumb001.jpg',
      video: sample,
    },
    {
      name: 'Katsute nai hodo no kiki',
      poster: 'https://cloud.kodik-storage.com/8640b15847c01f2e688c8cc325454dd8:2020102202/useruploads/b929de4b-3d61-4154-a0f0-f55b9ac2e8c3/thumb003.jpg',
      video: sample,
    },
    {
      name: 'Zen ushû no hasha',
      poster: 'https://cloud.kodik-storage.com/5fc6a27cd26fe262b0bdc0c22fb75253:2020102202/useruploads/8024023c-987a-48ba-95f6-c236ab7ec7c1/thumb001.jpg',
      video: sample,
    },
    {
      name: 'Saikyô no hîrô',
      poster: 'https://cloud.kodik-storage.com/9eaedbb98a037fcf3a5b59fb66223c47:2020102202/useruploads/dd758378-128b-446f-ae89-793a8289ec77/thumb002.jpg',
      video: sample,
    },
  ],
  [
    {
      name: 'Return of the Hero',
      poster: 'https://get.kodik-cdn.com/86a9c50fe5888a12023ebb1e488fbbd1:2020102202/animetvseries/7f6d053e3e9ab453dae80eb2bf258b46e47cb60f/thumb003.jpg',
      video: sample,
    },
    {
      name: 'Human Monster',
      poster: 'https://get.kodik-cdn.com/3be669f274e39a803a82212ac69b9877:2020102202/animetvseries/f2a8985c8d07e3b7626551a6a6d0ef4830869601/thumb004.jpg',
      video: sample,
    },
    {
      name: 'The Hunt Begins',
      poster: 'https://get.kodik-cdn.com/b4a268333b77f88ab098769ad2d6791d:2020102202/animetvseries/291a0be96f87fd1489c36716801875c1784eb73a/thumb002.jpg',
      video: sample,
    },
    {
      name: 'Metal Bat',
      poster: 'https://get.kodik-cdn.com/e090b9217431752f2181c6b0eae67044:2020102202/animetvseries/9a19fda8bd44671de45936df2cbeb3754ce3b115/thumb001.jpg',
      video: sample,
    },
    {
      name: 'The Martial Arts Tournament',
      poster: 'https://get.kodik-cdn.com/22a4af92bb8a22eba20cd6ff82c6a666:2020102202/animetvseries/c32e7cc8646d64642ebc5c5abc67c0eacb31c1fd/thumb004.jpg',
      video: sample,
    },
    {
      name: 'The Uprising of the Monsters',
      poster: 'https://get.kodik-cdn.com/9f3976a8d9061ee0cd2cfd3eaa468c20:2020102202/animetvseries/4249668eb505a8f69adb677d83827d5652121a36/thumb004.jpg',
      video: sample,
    },
    {
      name: 'Class S Heroes',
      poster: 'https://get.kodik-cdn.com/8eb10ace84fd7a0755d1c730d8ed40b7:2020102202/animetvseries/0f98e5695126f3cdd2d9791828c107847a1f5d6a/thumb004.jpg',
      video: sample,
    },
    {
      name: 'The Resistance of the Strong',
      poster: 'https://get.kodik-cdn.com/af2c8f28757b8f4d1018cafee00171c2:2020102202/animetvseries/c57357342b896189df23134c52ee81f81987f6e6/thumb001.jpg',
      video: sample,
    },
    {
      name: 'The Troubles of the Strongest',
      poster: 'https://get.kodik-cdn.com/5dc606040a4199da0468170f9217db05:2020102202/animetvseries/9eb161be6337e53590762f291acdff4a24e7cabf/thumb003.jpg',
      video: sample,
    },
    {
      name: 'The Encircling Net of Justice',
      poster: 'https://get.kodik-cdn.com/f91f528c54bf4271751dcb6a11506406:2020102202/animetvseries/6a985dec67350b239bca363e044c9f0fc397982e/thumb001.jpg',
      video: sample,
    },
    {
      name: 'Everyone\'s Dignity',
      poster: 'https://get.kodik-cdn.com/7ca3d9bce10155adfaa4fecf002fa248:2020102202/animetvseries/44825029f70c5c42f1cb56b9732324e60129e41c/thumb005.jpg',
      video: sample,
    },
    {
      name: 'Cleaning Up the Disciple\'s Mess',
      poster: 'https://get.kodik-cdn.com/9e8971f475662f4338164515d82f4b69:2020102202/animetvseries/7889209b1d417e134003ad37d64dd1cc6fb2dc82/thumb003.jpg',
      video: sample,
    },
  ],
]

export default generateEpisodes('2', onepunchmanEpisodes)
