/* ReDesign Data Structure */
let metroData = [
{
  id: '0',
  title: 'main',
  contentType: 'metro',
  //content: [title text, logo url]
  content: ['RECO™<br /> &emsp; &emsp; Rigin Eco<br /> &emsp; &emsp; &emsp; &emsp; &emsp; &ensp; Economy 💡 Ecosystems ☀️ Ecology 🌴', 'assets/icons/Eagle_green.png', ',', '']
}, 
{
  id: '1',
  title: 'info',
  contentType: 'metro',
  //content: [text1, text2]
  content: ['RECO™ is Under Construction 🚧 <br /> (Allow PopUp) for The Experience', 'Optimized For Desktop | Tablet ✅ <br /> Being Optimized For Phone 🕒', 'For Inquiries & Job Offers <br /> Contact The Producer | Developer <br /> amen@rigin.eco ✅ <br /> For RECO™ Site Technical Support <br /> support@rigin.eco ☀️ <br /> Looking Forward to Hear From You 🙂'],
  contentStyle: ['', 'text-align: center; border: 3px solid green', 'text-align: center']
}
]

//TODO: All Tile Info
const tilesData = [
  //id nomenclature to be updated
  {
    id: '0',
    tile_title: '',
    icon: '',
    color: '',
    tile_size: 's',
    content: ['', '', ',', '']
  },

  {
    id: '1',
    tile_title: 'Chat',
    icon: 'assets/icons/bxs-message-rounded-dots.svg',
    color: 'green',
    tile_size: 's',
    content: ['', '', ',', '']
  },

  {
    id: '2',
    tile_title: "Games",
    icon: "assets/icons/bxs-joystick.svg",
    color: 'red',
    tile_size: 'l',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '3',
    tile_title: 'CV',
    icon: 'assets/icons/bxs-pyramid.svg',
    color: 'white',
    tile_size: 'm',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '5',
    tile_title: 'Time',
    icon: 'assets/icons/bxs-time.svg',
    color: 'orange',
    tile_size: 'm',
    content: ['', '', ',', '']
  },

  {
    id: '4',
    tile_title: 'Fit',
    icon: 'assets/icons/bx-dumbbell.svg',
    color: 'cyan',
    tile_size: 's',
    content: ['', '', ',', '']
  },

  {
    id: '16',
    tile_title: 'Eat',
    icon: 'assets/icons/food.png',
    color: 'lawngreen',
    tile_size: 'm',
    content: ['', '', ',', '']
  },

  {
    id: '6',
    tile_title: "Plane",
    icon: "assets/icons/bxs-plane-alt.svg",
    color: 'pink',
    tile_size: 's',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '7',
    tile_title: "Photos",
    icon: "assets/icons/bxs-photo-album.svg",
    color: 'purple',
    tile_size: 's',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '8',
    tile_title: "Weather",
    icon: "assets/icons/bxs-sun.svg",
    tile_imgURL: '',
    color: 'turquoise',
    tile_size: 'xl',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '9',
    tile_title: "ToDo",
    icon: "assets/icons/bx-list-ul.svg",
    color: 'violet',
    tile_size: 'm',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '10',
    tile_title: 'TextEditor',
    icon: 'assets/icons/text-editor.png',
    color: '',
    tile_size: 's',
    content: ['', '', ',', '']
  },

  {
    id: '11',
    tile_title: "Earth",
    icon: "assets/icons/bxs-planet.svg",
    color: 'turquoise',
    tile_size: 'm',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '12',
    tile_title: "Cart",
    icon: "assets/icons/bx-cart.svg",
    color: 'orange',
    tile_size: 's',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '13',
    tile_title: "Git",
    icon: "assets/icons/github-logo-24.png",
    color: 'white',
    tile_size: 's',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },

  {
    id: '14',
    tile_title: 'Dev',
    icon: 'assets/icons/bx-code-alt.svg',
    color: 'green',
    tile_size: 's',
    content: ['', '', ',', '']
  },

  {
    id: '15',
    tile_title: 'RE',
    icon: 'assets/icons/recycle-regular.png',
    color: 'green',
    tile_size: 'l',
    content: ['assets/docs/cv/industrial/UN&CC/0238466b-d2fc80d7.mp4', '', ',', '']
  },

  {
    id: '17',
    tile_title: 'YT',
    icon: 'assets/icons/yt_square.png',
    color: '',
    tile_size: 'S',
    content: ['content_tile', 'content_text0', 'content_text1,', 'content_text2']
  },
];

//TODO: Update id nomenclature
//TODO: Better structure this array
const tilesContainersData = [

  {
    id: '0',
    tile0: [{ id: '0', position: '0' }, { id: '1', position: '2' }],
    tile1: '',
    tile2: [{ id: '1', position: '2' }],
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '1',
    tile0: [{ id: '2', position: '0' }],
    tile1: '',
    tile2: '',
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '2',
    tile0: [{ id: '3', position: '1' }],
    tile1: '',
    tile2: [{ id: '17', position: '0' }],
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '3',
    tile0: [{ id: '4', position: '0' }],
    tile1: [{ id: '5', position: '1' }],
    tile2: '',
    tile3: [{ id: '16', position: '2' }],
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '4',
    tile0: [{ id: '6', position: '0' }],
    tile1: '',
    tile2: [{ id: '7', position: '2' }],
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '5',
    tile0: [{ id: '8', position: '0' }],
    tile1: '',
    tile2: [{ id: '15', position: '2' }],
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '6',
    tile0: [{ id: '9', position: '2' }],
    tile1: '',
    tile2: '',
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '7',
    tile0: '',
    tile1: '',
    tile2: [{ id: '10', position: '2' }],
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '8',
    tile0: [{ id: '11', position: '0' }],
    tile1: [{ id: '12', position: '1' }],
    tile2: '',
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '9',
    tile0: [{ id: '13', position: '0' }],
    tile1: '',
    tile2: '',
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  },

  {
    id: '10',
    tile0: '',
    tile1: [{ id: '14', position: '3' }],
    tile2: '',
    tile3: '',
    tile4: '',
    tile5: '',
    tile6: '',
    tile7: '',
  }
];

const gamesTypeData = [
  //id nomenclature to be updated
  {
    id: '0',
    gameTitle: 'Tic-Tac-Toe',
    gameType: 'Board',
    imgURL: 'assets/icons/chess-solid-72.png',
    optionPosition: 0
  },

  {
    id: '1',
    gameTitle: 'Pacman',
    gameType: 'Console',
    imgURL: 'assets/icons/game-solid-72.png',
    optionPosition: 1
  },

  {
    id: '2',
    gameTitle: 'Gravity',
    gameType: 'Mobile',
    imgURL: 'assets/icons/package-solid-72.png',
    optionPosition: 2
  },

  {
    id: '3',
    gameTitle: 'Balloon Pop',
    gameType: 'Board',
    imgURL: 'assets/icons/balloon-solid-72.png',
    optionPosition: 3
  },

  {
    id: '4',
    gameTitle: 'Fruit Fall',
    gameType: 'Console',
    imgURL: 'assets/icons/apple-logo-72.png',
    optionPosition: 4
  },

  {
    id: '5',
    gameTitle: 'Raise Flag',
    gameType: 'Mobile',
    imgURL: 'assets/icons/flag-alt-solid-72.png',
    optionPosition: 5
  }
]

const cvSliderData_Ex = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/extra/157392ec80333f27c4a94f6d5d11707e.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/extra/14504836_1589055488065238_4089825209673056256_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: 'Thank God',
    imgURL: 'assets/img/cv/extra/16789301_1869126620043549_4526268172701007872_n.jpeg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/extra/97689410-3A18-44EA-996F-84C772789730.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/extra/IMG-20160620-WA0001.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/extra/Profile_Pic.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/extra/Rigin_Eco_Snap.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/img/cv/extra/WP_20140325_005.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 7
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/img/cv/extra/WP_20160427_08_08_15_Pro.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 8
  },

]

const cvSliderData_Art = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/art/204788_10151276066189114_667827810_o.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/art/530698_10151240767422266_1031188369_n_10151240767422266~2.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/art/13151000_121294058279395_1799944450_n.jpg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/art/15871438_10154350656362266_1230626851216369656_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/art/15972435_391177921227425_2031406857743055058_o.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/art/InstagramCapture_8b086a5d-dd75-4205-9c85-1abc67bb25cf.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/art/15972435_391177921227425_2031406857743055058_o.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  }
]

const cvSliderData_Fit = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/fitness/6tag-2131672622-1057993933346897857_2131672622.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/fitness/11236308_1402527786738036_1133016894_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/fitness/13151000_121294058279395_1799944450_n.jpg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/fitness/12339336_10153390540387266_235275828303309254_o.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/fitness/12993339_10153694105157266_606278026928700576_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/fitness/IMG-20160505-WA0001.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/fitness/InstagramCapture_4f0788a5-0234-4274-bf69-053af0cbf821.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/img/cv/fitness/InstagramCapture_c014f8ea-34f1-44bb-bf85-c70d46e2596f.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 7
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/img/cv/fitness/WP_20150421_4478.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 8
  },

  {
    id: '9',
    title: '',
    imgURL: 'assets/img/cv/fitness/WP_20151216_19_47_44_Rich.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 9
  }
]

const cvSliderData_P2P = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/p2p/35044_1153269769273_627895_n.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/p2p/35203_1153272929352_7557294_n.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/p2p/37870_1154107070205_8125575_n.jpeg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/p2p/38021_1153271729322_2489923_n.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/p2p/38021_1153271929327_6325446_n.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/p2p/15271826_10154238306667266_8077602425918841143_o.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  }
]

const cvSliderData_Sci = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/science/1512231_10203244211446775_861038042_o.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/science/1914514_135558680953_6255863_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/science/Scan_20180211.jpg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/science/Scan_20180528.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/sience/WP_20150123_006.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  }
]

const cvSliderData_Wrk = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/work/IMG_1895.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/work/IMG_20170502_135510~2[4664].jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/work/46665-drone-veldhoven.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 11
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/work/the-value-of-integration-systems-thinking-in-project-management-by-andrew-wright-20th-sep-golborne-24-1024.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/work/TPM.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 2
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/work/draft-5000-02-the-defense-acquisition-management-framework-n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/work/MODAF.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/img/cv/work/1461932951313_Industry-split-of-surveyed-companies.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/img/cv/work/eii-framework.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 8
  },

  {
    id: '9',
    title: '',
    imgURL: 'assets/img/cv/work/Business-IT_Alignment.png',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 9
  },

  {
    id: '10',
    title: '',
    imgURL: 'assets/img/cv/work/PRINCE2.png',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 10
  },

  {
    id: '11',
    title: '',
    imgURL: 'assets/img/cv/work/aquisition.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 7
  }
]

const cvSliderData_Vol = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/volunteering/2.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/volunteering/2.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/volunteering/9.jpg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/volunteering/16.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/volunteering/18.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/volunteering/51.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/volunteering/20643360_10154987889377266_7399196928537211150_o.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/img/cv/volunteering/BeingPresent_is_TheBest_Gift.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 7
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/img/cv/volunteering/DSC04922.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 8
  },

  {
    id: '9',
    title: '',
    imgURL: 'assets/img/cv/volunteering/DSC04925.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 9
  },

  {
    id: '10',
    title: '',
    imgURL: 'assets/img/cv/volunteering/DSC05414.JPG',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 10
  },

  {
    id: '12',
    title: '',
    imgURL: 'assets/img/cv/volunteering/LuckyMe_😂.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 12
  }
]

const cvSliderData_So = [
  //id nomenclature to be updated
  {
    id: '0',
    title: '',
    imgURL: 'assets/img/cv/social/#KeepUpWithTheSun.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/cv/social/167715_501154307265_8133579_n.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/cv/social/17426346_10154580078977266_3108030594434772733_n_10154580078977266.jpg',
    activityType: '',
    orientation: '',
    comment: 'today',
    sliderPosition: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/cv/social/FB_IMG_1484215520317.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/cv/social/Screenshot_20210403-184638.png',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/img/cv/social/Success.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/img/cv/social/WhatsApp_Image_2017-10-17_at_7_46_09_PM.jpeg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 6
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/img/cv/social/WP_000532.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 7
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/img/cv/social/WP_000542.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 8
  },

  /* {
    id: '9',
    title: '',
    imgURL: 'assets/img/cv/social/WP_000543.jpg',
    activityType: '',
    orientation: '',
    comment: '',
    sliderPosition: 9
  } */
]

const cvFlowData = [
  //id nomenclature to be updated

  //Docs & Research
  {
    id: '0',
    title: '',
    imgURL: 'assets/docs/cv/Rigin_CV.png',
    docType: 'pdf',
    orientation: 'landscape',
    tags: ['docs'],
    position: 0
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/docs/cv/research/a4-us-letter-photoshop-minimal-mobile-application-promotion-flyers-indesign-templates.png',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 1
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/docs/cv/research/Daily-Deals-Android-App-Template-3-Phones2.png',
    docType: '',
    orientation: 'portrait',
    tags: ['research'],
    position: 2
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/docs/cv/research/Daily-Deals-Android-App-Template-3-Phones1.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 3
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/docs/cv/research/featured-image-16.jpg',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 4
  },

  {
    id: '5',
    title: '',
    imgURL: 'assets/docs/cv/research/Fotoly-App-Template-Android-3-Phones1.jpg',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 5
  },

  {
    id: '6',
    title: '',
    imgURL: 'assets/docs/cv/research/Glam-Android-App-Template-3-Phones1.png',
    docType: '',
    orientation: 'portrait',
    tags: ['research'],
    position: 6
  },

  {
    id: '7',
    title: '',
    imgURL: 'assets/docs/cv/research/Health_Fitness_Sports_Productivity_Apps.jpg',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 7
  },

  {
    id: '8',
    title: '',
    imgURL: 'assets/docs/cv/research/IMG-20161114-WA0001.jpg',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 8
  },

  {
    id: '10',
    title: '',
    imgURL: 'assets/docs/cv/research/mobilecoupons-feature.jpg',
    docType: '',
    orientation: 'landscape',
    tags: ['research'],
    position: 10
  },

  {
    id: '59',
    title: '',
    imgURL: 'assets/docs/cv/research/adioma-ui-display.png',
    docType: 'pdf',
    orientation: 'landscape',
    tags: ['research'],
    position: 59
  },

  {
    id: '11',
    title: '',
    imgURL: 'assets/docs/cv/research/mobile-marketing.jpg',
    docType: '',
    orientation: 'portrait',
    tags: ['research'],
    position: 11
  },

  {
    id: '12',
    title: '',
    imgURL: 'assets/docs/cv/research/Revenues_By_Platform_For_Business_Productivity_Apps.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 12
  },

  {
    id: '13',
    title: '',
    imgURL: 'assets/docs/cv/research/School-Management-System-AIMS-Modules.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 13
  },

  {
    id: '14',
    title: '',
    imgURL: 'assets/docs/cv/research/SnapNotes.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 14
  },

  {
    id: '15',
    title: '',
    imgURL: 'assets/docs/cv/research/stock-illustration-18696867-chain-link-icon-set.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 15
  },

  {
    id: '16',
    title: '',
    imgURL: 'assets/docs/cv/research/Whats-Here-Android-App-Template.png',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 16
  },

  {
    id: '17',
    title: '',
    imgURL: 'assets/docs/cv/research/Whats-Here-Android-App-Template-1.png',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 17
  },

  {
    id: '18',
    title: '',
    imgURL: 'assets/docs/cv/research/Whats-Here-Android-App-Template-3-Phones.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 18
  },

  {
    id: '19',
    title: '',
    imgURL: 'assets/docs/cv/research/WindowPhoneiOSAndroidIDC.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 19
  },

  {
    id: '58',
    title: '',
    imgURL: 'assets/docs/cv/research/Social_enterprises_FINAL.png',
    docType: 'pdf',
    orientation: '',
    tags: ['research'],
    position: 58
  },

  {
    id: '20',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20150628_001.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 20
  },

  {
    id: '21',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20160204_18_26_33_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 21
  },

  {
    id: '22',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20160315_17_26_45_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 22
  },

  {
    id: '23',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20160904_18_53_19_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 23
  },

  {
    id: '24',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20161010_15_21_06_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 24
  },

  {
    id: '25',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20161017_14_52_23_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 25
  },

  {
    id: '26',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20161018_16_56_33_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 26
  },

  {
    id: '27',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20161018_17_20_25_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 27
  },

  {
    id: '29',
    title: '',
    imgURL: 'assets/docs/cv/research/WP_20161214_16_13_47_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 29
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/research/wp_ss_20160926_0001.png',
    docType: '',
    orientation: '',
    tags: ['research'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/Customer-focused-culture.png',
    docType: '',
    orientation: '',
    tags: ['research', 'marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/12471767_1718588735026245_5420585640685815712_o.jpeg',
    docType: '',
    orientation: '',
    tags: ['research', 'marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/1461932951313_Industry-split-of-surveyed-companies.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/Untitled-design--9--1.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/13132_2022_959_Fig1_HTML.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/482327575_973448454837001_4406720549669107857_n.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/pwc_2016_industry_4_0_blueprint-for-success-6.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/1580121541045.jpeg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/2023-10-26-041417877-Consulting_industry_Big_Fourspot.jpeg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/CRS_GDS-BMC_135056279_BQ-Banner-Image-external2-1.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/poster_ivss_webinar.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/Screen-Shot-2017-06-05-at-10.08.35.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/ey-team-of-engineers-in-advanced-factory-static.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/Industry-4-framework.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/ksnip_20250913-011443.png',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/202211-Proaction-5-industrial-revolutions-EN.webp',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  {
    id: '9',
    title: '',
    imgURL: 'assets/docs/cv/research/LinqOp_Pitch.png',
    docType: 'pdf',
    orientation: 'landscape',
    tags: ['research', 'docs'],
    position: 9
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/shutterstock_357863423-gID_5.jpg',
    docType: '',
    orientation: '',
    tags: ['docs'],
    position: 30
  },

  //B2B | B2C
  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Business-to-Business_B2B-90f5b66ef26b417e99c16a39056e9834.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/btoc.asp-final-37a45954e5a846b8b1db4ac6a5e688e9.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Retail_Resources_Animations.gif',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Salinas-B2B-Branding.gif',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/293650698_413515927411053_1734008726946081609_n.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/769c76485af33cfad7e00904d9b55435.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/042022_BLOG_B2B-Marketing.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/500799876_1288162263316893_7786777301911648935_n.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/1752223728659.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/AI-Technologies-Used-in-Retail.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/assets_task_01js1ddwt4fyzrtzpf0fpwzkew_img_0.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/B2B-food-marketplace-platform-market-size.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/B2B-Predictions-for-2025-Article-SOV-Blog-post-667x395-1.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Blogs-12-1-e1604302051258-2048x971-1-1024x486.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Blog-Consumer-Limbic-Profiling-Understanding-Your-Customers-by-2030-980x551.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Decoding-B2B-vs-B2C-SaaS-Understanding-the-Key-Differences-FI.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/FSB_AIinRetail_2024_DA_rnd1-01.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/GRC_Blogs-1.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/how-ai-can-benefit-the-retail.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/image.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/L628255137_g.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/melasoftgmbh-20250710_002358-1646123091.gif',
    docType: 'mp4',
    orientation: 'portrait',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/online-shopping-ecommerce-and-delivery-service-concept-paper-cartons-picture-id1024926532.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/phpkMQx8o.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://restaurant.org/nra/media/restaurant-2030/restaurant2030.pdf',
    imgURL: 'assets/docs/cv/business/Restaurant-Industry-2030-PDF_none.avif',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://jbrmr.com/cdn/article_file/i-5_c-33.pdf',
    imgURL: 'assets/docs/cv/business/Retail-business-accounting-1.webp',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Retail-intro-merchandising-backroom.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://www.redhat.com/en/blog/retail-portfolio-architecture',
    imgURL: 'assets/docs/cv/business/shutterstock_2005747523-scaled-e1694817366679-1.jpg',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Thumbnail_Learn-How-AI-in-Retail-is-Transforming-the-Shopping-Experience-Compressify.io_.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/The-Embedded-Finance-Market-Will-Be-Worth-More-Than-US320-Billion-in-Revenues-by-2030-Source-Global-Fintech-2024-Prudence-Profits-and-Growth-Boston-Consulting-Group-and-QED-Investors-Jun-2024.avif',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Understanding-B2B-Marketing-Research_-Core-Principles-and-Strategic-Value.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Zz03ZjJkNDc3NDdjYTMxMWVlOTYyNGQyOGI4ZWZmOGMzYg==.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/What-Is-Retail-Customer-Engagement.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/WP_20250525_09_46_55_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/20250519_084015.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/20250519_041940.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/20250519_041256.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/20250519_090516.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/20250519_041558.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/1708841278003.jpeg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/vendor-managed-inventory-vmi-example-1024x632.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Dock_to_Stock_Summary_(1).webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2b', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/67e40e84ba5f279a276b637d_Steps-to-Calculate-Dock-to-Stock-Cycle-Time-1024x599.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/warehouse_management_inbound_process_model_slide01.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://medium.com/@nobodyX99/mastering-warehouse-inbound-processes-key-steps-and-metrics-for-efficiency-41f4c7f9443a',
    imgURL: 'assets/docs/cv/business/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/1-s2.0-S0377221716308062-gr2.jpg',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/image128.gif',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://docs.oracle.com/cd/E15156_01/e1apps90pbr0/eng/psbooks/1apr/chapter.htm?File=1apr/htm/1apr17.htm',
    imgURL: 'assets/docs/cv/business/image18.gif',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/shelf_replen_processflow.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/67e40e85ba5f279a276b645a_Dock-to-Stock-Supply-Chain-KPI.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://imagevision.ai/blog/computer-vision-for-retail-shelf-monitoring-optimizing-on-shelf-availability/',
    imgURL: 'assets/docs/cv/business/_128701641_shortages3.png',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://www.kladana.com/blog/inventory-management/inventory-control/',
    imgURL: 'assets/docs/cv/business/key-elements.webp',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: 'https://link.springer.com/content/pdf/10.1007/s10696-023-09492-z.pdf',
    imgURL: 'assets/docs/cv/business/3nzGMU3fIGupS3DJGO3JBlc6EXA.avif',
    docType: 'link',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/service-oriented-architecture.png',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/business/Service-Oriented-Architecture--SOA---SOA-Simplified--Perspectives-from-an-Integration-Manager--Successful-SOA-Deployments.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'b2c'],
    position: 30
  },

  //Marketing
  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/trademark.asp-FINAL-17d79cfb3a144887ab6c90044fa0cbcb.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/®-vs-™-vs-℠-Trademark-Hierarchy-1024x1024.webp',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/simon-berger-boyxzfqpwpu-unsplash.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/1-1616598457223.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/4-reasons-to-register-your-brands-trademark-internationally.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/unsplash-image-fIq0tET6llw.webp',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/5Categories.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/476837871_686949907000815_5192521688402520115_n.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/482270330_1029693409189247_3763429825350413841_n.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/Blog-Header-Images-3.webp',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/christian-lue-_jHwZ4ZZLlA-unsplash-scaled-1.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/Infographic_How-to-Determine-the-Value-of-a-Trademark-1.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/intellectual-property.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/ip-laws-2.avif',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/trademarked-light-bulb-2.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/unsplash-image-fIq0tET6llw.webp',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/Trademarks-banner.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/iStock-1292374288.avif',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/kyle-glenn-nxt5htlmlge-unsplash-1080x720.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/luxury-branding-logo-1-e1586526427600-1024x696.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/P90118536-big-orig.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/photo-1557053965-459050b06844.jpeg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/rawpixel-455996-unsplash-e1541476049767.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/Rolls-Royce-Logo-history.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/shutterstock_1950564259.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/tradeamrk-vs-copyright.jpg',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  {
    id: '30',
    title: '',
    imgURL: 'assets/docs/cv/marketing/trademark-a-clothing-brand-3-elements-1024x1024.png',
    docType: '',
    orientation: '',
    tags: ['marketing'],
    position: 30
  },

  //Design
  {
    id: '28',
    title: '',
    imgURL: 'assets/docs/cv/design/Software_Architecture_IH.png',
    docType: 'pdf',
    orientation: '',
    tags: ['software', 'design', 'engineering'],
    position: 28
  },

  {
    id: '31',
    title: '',
    imgURL: 'assets/docs/cv/design/0_Overview.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 31
  },

  {
    id: '32',
    title: '',
    imgURL: 'assets/docs/cv/design/01_Home.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 32
  },

  {
    id: '33',
    title: '',
    imgURL: 'assets/docs/cv/design/1_Profile.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 33
  },

  {
    id: '34',
    title: '',
    imgURL: 'assets/docs/cv/design/2_Linq.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 34
  },

  {
    id: '35',
    title: '',
    imgURL: 'assets/docs/cv/design/3_Saved.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 35
  },

  {
    id: '36',
    title: '',
    imgURL: 'assets/docs/cv/design/4_Settings.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 36
  },

  {
    id: '37',
    title: '',
    imgURL: 'assets/docs/cv/design/Flyer.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 37
  },

  {
    id: '38',
    title: '',
    imgURL: 'assets/docs/cv/design/Requirements.JPG',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 38
  },

  {
    id: '39',
    title: '',
    imgURL: 'assets/docs/cv/design/RevenueModel.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 39
  },

  {
    id: '40',
    title: '',
    imgURL: 'assets/docs/cv/design/SharingEconomy.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 40
  },

  {
    id: '41',
    title: '',
    imgURL: 'assets/docs/cv/design/WP_20151109_00_55_19_Rich.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 41
  },

  {
    id: '42',
    title: '',
    imgURL: 'assets/docs/cv/design/WP_20160825_15_17_55_Pro.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 42
  },

  {
    id: '57',
    title: '',
    imgURL: 'assets/docs/cv/design/How_to_Design_and_Manage_APIs_0.png',
    docType: 'pdf',
    orientation: '',
    tags: ['design'],
    position: 57
  },

  //Development
  {
    id: '94',
    title: '',
    imgURL: 'assets/docs/cv/Business_Plan_LinqOp_(V3.1).png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 94
  },

  {
    id: '43',
    title: '',
    imgURL: 'assets/docs/cv/development/FrontEnd.png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 43
  },

  {
    id: '44',
    title: '',
    imgURL: 'assets/docs/cv/development/BackEnd.png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 44
  },

  {
    id: '45',
    title: '',
    imgURL: 'assets/docs/cv/development/how-long-does-it-take-to-build-an-app-kinvey-1500x834.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 45
  },

  {
    id: '46',
    title: '',
    imgURL: 'assets/docs/cv/development/ImplementationPlan.png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 46
  },

  {
    id: '47',
    title: '',
    imgURL: 'assets/docs/cv/development/UI_&_UX.png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 47
  },

  {
    id: '48',
    title: '',
    imgURL: 'assets/docs/cv/development/PEST_Analysis_580px550px.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 48
  },

  {
    id: '49',
    title: '',
    imgURL: 'assets/docs/cv/development/PlatformCosts.png',
    docType: 'pdf',
    orientation: '',
    tags: ['development'],
    position: 49
  },

  {
    id: '50',
    title: '',
    imgURL: 'assets/docs/cv/development/Roles.jpeg',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 50
  },

  {
    id: '28',
    title: '',
    imgURL: 'assets/docs/cv/development/Founders_Team.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 28
  },

  {
    id: '51',
    title: '',
    imgURL: 'assets/docs/cv/development/sae.jpg',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 51
  },

  {
    id: '52',
    title: '',
    imgURL: 'assets/docs/cv/development/SoftwareDevelopment_LifeCycle.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 52
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/1419322114-pixleanthi-o.jpg',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  }, ,

  {
    id: '54',
    title: '',
    imgURL: 'assets/docs/cv/development/ML-Graph.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 54
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/MS_Graph_API_categories.JPG',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/what-is-lamp-stack-881x441-1.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'https://www.vpsserver.com/mariadb-vs-mysql/',
    imgURL: 'assets/docs/cv/development/maria_mysql.png',
    docType: 'link',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/Postgres-vs-MySQL-MariaDB.webp',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'WCWU7rdJbhA',
    imgURL: 'assets/docs/cv/development/hq720.jpg',
    docType: 'yt',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/visual-representation-of-the-lamp-stack-pnap.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/mariadb-vs-postgresql.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'usqwC2MIho8',
    imgURL: 'assets/docs/cv/development/maxresdefault.webp',
    docType: 'yt',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/Empowering-Web-Apps_-The-Role-of-Mean-Stack-Developers.webp',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/mean_stack_architecture_75a124e6e3.webp',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: '',
    imgURL: 'assets/docs/cv/development/mern-vs-mean.webp',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'cuHDQhDhvPE',
    imgURL: 'assets/docs/cv/development/hq720.webp',
    docType: 'yt',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'iO1mwxPNP5A',
    imgURL: 'assets/docs/cv/development/maxresdefault_.webp',
    docType: 'yt',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  {
    id: '53',
    title: 'rM0xpwENa8I',
    imgURL: 'assets/docs/cv/development/ai_dev_tools_2025.webp',
    docType: 'yt',
    orientation: '',
    tags: ['development'],
    position: 53
  },

  //Legal
  {
    id: '54',
    title: '',
    imgURL: 'assets/docs/cv/legal/flow_chart.jpg',
    docType: '',
    orientation: '',
    tags: ['legal'],
    position: 53
  },

  {
    id: '55',
    title: '',
    imgURL: 'assets/docs/cv/legal/LinqOp_TradeMark.png',
    docType: 'pdf',
    orientation: '',
    tags: ['legal'],
    position: 52
  },

  {
    id: '56',
    title: '',
    imgURL: 'assets/docs/cv/legal/RIGIN_TradeMark.png',
    docType: 'pdf',
    orientation: '',
    tags: ['legal'],
    position: 52
  },

  //Literature
  {
    id: '60',
    title: '',
    imgURL: 'assets/docs/cv/literature/12-she-accessibility-based-business-models-for-peer-to-peer-markets_en.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 60
  },

  {
    id: '61',
    title: '',
    imgURL: 'assets/docs/cv/literature/Systems-Thinking-&-Requirements-Approaches-for-Innovative-Solutions-in-Science-and-Engineering.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 61
  },

  {
    id: '62',
    title: '',
    imgURL: 'assets/docs/cv/literature/Building_a_Digital_Platform_to_Lead_in_the_API_Economy_Resource.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 62
  },

  {
    id: '63',
    title: '',
    imgURL: 'assets/docs/cv/literature/pwc-human-value-in-the-digital-age.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 63
  },

  {
    id: '64',
    title: '',
    imgURL: 'assets/docs/cv/literature/The_API_Economy.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 64
  },

  {
    id: '65',
    title: '',
    imgURL: 'assets/docs/cv/literature/Drop-Out-Epidemic.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 65
  },

  {
    id: '66',
    title: '',
    imgURL: 'assets/docs/cv/literature/Towards_a_sustainable_economy.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 66
  },

  {
    id: '67',
    title: '',
    imgURL: 'assets/docs/cv/literature/DR16_digital_education_2.0.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 67
  },

  {
    id: '68',
    title: '',
    imgURL: 'assets/docs/cv/literature/Quinn_Model.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 68
  },

  {
    id: '68',
    title: '',
    imgURL: 'assets/docs/cv/literature/EA.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature', 'learning'],
    position: 68
  },

  {
    id: '68',
    title: '',
    imgURL: 'assets/docs/cv/literature/Understanding_Service-Oriented Architecture.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature', 'learning'],
    position: 68
  },

  {
    id: '69',
    title: '',
    imgURL: 'assets/docs/cv/literature/CSRreport_2016_Adecco.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 69
  },

  {
    id: '70',
    title: '',
    imgURL: 'assets/docs/cv/literature/2017_Data_Breach_Investigations_Report.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 70
  },

  {
    id: '71',
    title: '',
    imgURL: 'assets/docs/cv/literature/WEF_GlobalCompetitivenessReport_2014-15.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 71
  },

  {
    id: '72',
    title: '',
    imgURL: 'assets/docs/cv/literature/Starting_your_own_business_tcm109-365768.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 72
  },

  {
    id: '73',
    title: '',
    imgURL: 'assets/docs/cv/literature/world_fintech_report_2017.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 73
  },

  {
    id: '73',
    title: '',
    imgURL: 'assets/docs/cv/literature/industry 5 0-KIBD20021ENN.png',
    docType: 'pdf',
    orientation: '',
    tags: ['literature'],
    position: 73
  },

  //Industrial
  {
    id: '74',
    title: '',
    imgURL: 'assets/docs/cv/industrial/Assem2.png',
    docType: 'mp4',
    orientation: 'landscape',
    tags: ['industrial'],
    position: 74
  },

  {
    id: '77',
    title: '',
    imgURL: 'assets/docs/cv/industrial/S201_PHILIPS.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 77
  },

  {
    id: '78',
    title: '',
    imgURL: 'assets/docs/cv/industrial/S201_YASKAWA.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 78
  },

  {
    id: '73',
    title: '',
    imgURL: 'assets/docs/cv/industrial/Presentation_YASKAWA.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 73
  },

  {
    id: '75',
    title: '',
    imgURL: 'assets/docs/cv/industrial/ManualOfEngineeringDrawing.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 75
  },

  {
    id: '79',
    title: '',
    imgURL: 'assets/docs/cv/industrial/solidworks_tutorial03_magneticblock_english_08_lr-1.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 79
  },

  {
    id: '80',
    title: '',
    imgURL: 'assets/docs/cv/industrial/solidworks_tutorial05_tictactoegame_english_08_lr.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 80
  },

  {
    id: '81',
    title: '',
    imgURL: 'assets/docs/cv/industrial/solidworks_tutorial06_tictactoegame_drawings_english_08_lr.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 81
  },

  {
    id: '82',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140918_002.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 82
  },

  {
    id: '83',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140925_007.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 83
  },

  {
    id: '84',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140925_008.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 84
  },

  {
    id: '85',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140925_011.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 85
  },

  {
    id: '86',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140925_017.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 86
  },

  {
    id: '87',
    title: '',
    imgURL: 'assets/docs/cv/industrial/WP_20140925_026.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 87
  },

  {
    id: '88',
    title: '',
    imgURL: 'assets/docs/cv/industrial/CoffeeMaker_Flyer_Pages1&8.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 88
  },

  {
    id: '89',
    title: '',
    imgURL: 'assets/docs/cv/industrial/CoffeeMaker_Flyer_Pages2&7.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 89
  },

  {
    id: '90',
    title: '',
    imgURL: 'assets/docs/cv/industrial/CoffeeMaker_Flyer_Pages3&6.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 90
  },

  {
    id: '91',
    title: '',
    imgURL: 'assets/docs/cv/industrial/CoffeeMaker_Flyer_Pages4&5.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 91
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/Global-Food-System-Analysis-1.png',
    docType: 'pdf',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '92',
    title: '',
    imgURL: 'assets/docs/cv/legal/LinqOn.jpg',
    docType: '',
    orientation: '',
    tags: ['development', 'legal', 'industrial'],
    position: 92
  },

  {
    id: '93',
    title: '',
    imgURL: 'assets/docs/cv/research/Linq.png',
    docType: '',
    orientation: '',
    tags: ['development'],
    position: 93
  },

  {
    id: '95',
    title: '',
    imgURL: 'assets/docs/cv/Accenture-Health-Digital-Health-Comes-Of-Age.png',
    docType: 'pdf',
    orientation: '',
    tags: 'healthcare',
    position: 95
  },

  {
    id: '96',
    title: '',
    imgURL: 'assets/docs/cv/Transforming-Health-Ontario-Startups-Final.png',
    docType: 'pdf',
    orientation: '',
    tags: 'healthcare',
    position: 96
  },

  {
    id: '97',
    title: '',
    imgURL: 'assets/docs/cv/LinqCare_Brainstorm.png',
    docType: 'pdf',
    orientation: '',
    tags: 'healthcare',
    position: 97
  },

  {
    id: '98',
    title: '',
    imgURL: 'assets/docs/cv/LinqCare_Splash.png',
    docType: '',
    orientation: '',
    tags: 'healthcare',
    position: 98
  },

  {
    id: '99',
    title: '',
    imgURL: 'assets/docs/cv/Vision_2020.png',
    docType: 'pdf',
    orientation: '',
    tags: ['research'],
    position: 99
  },

  {
    id: '100',
    title: '',
    imgURL: 'assets/docs/cv/A_Student_Proposal.png',
    docType: 'pdf',
    orientation: '',
    tags: ['research'],
    position: 100
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/1-s2.0-S0278612522001662-gr4.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/Readiness-2030.png',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/512682432_1169336425207786_3381013397285447938_n.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/AOI_222691.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/94672030.avif',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/Industry-5.0-Market-Trends-and-Growth-Opportunities-for-2024-2030.webp',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/67adc9c66e8a9_public.jpg',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: 'https://www.element8.sa/blogs/unlocking-saudi-arabias-vision-2030',
    imgURL: 'assets/docs/cv/industrial/saudi-vision-2030.jpg',
    docType: 'link',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/SDG-Report-2024-Goal-6.png',
    docType: '',
    orientation: '',
    tags: ['industrial'],
    position: 128
  },

  //LinqLab
  {
    id: '101',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/7DA9C815-1900-41B1-AD71-5608956966FA-scaled-e1711595869515.webp',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 101
  },

  {
    id: '102',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/465693158_402323476283736_5890688841141064839_n.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 102
  },

  {
    id: '103',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/470941217_482644421073618_3974691958687098446_n.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 103
  },

  {
    id: '104',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/471272485_568306902504804_5064323035633515186_n.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 104
  },

  {
    id: '105',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/472762735_1784279505672218_5778808473508916701_n.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 106
  },

  {
    id: '106',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/arduino.cc-20241012_033636-2704086623.png',
    docType: 'mp4',
    orientation: 'portrait',
    tags: ['lab'],
    position: 106
  },

  {
    id: '107',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/compatibility-testing.png',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 107
  },

  {
    id: '108',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20230203_000802-1595333862.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 108
  },

  {
    id: '109',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20230314_001250-1788504962.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 109
  },

  {
    id: '110',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20230427_053609-1807923546.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 110
  },

  {
    id: '111',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20230927_201143-941660421.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 111
  },

  {
    id: '112',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20231004_104738-1175424626.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 112
  },

  {
    id: '113',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/e14community-20240916_031904-2053175223.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 113
  },

  {
    id: '114',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/electrivo-20211009_001033-2864998858.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 114
  },

  {
    id: '115',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/ianbates1-20210302_094703-1826126590.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 115
  },

  {
    id: '116',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/istockphoto-1216397268-612x612.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 116
  },

  {
    id: '117',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/kolabmakerhub-20180611_220122-1536837893.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 117
  },

  {
    id: '118',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/Light.jpeg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 118
  },

  {
    id: '119',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 119
  },

  {
    id: '120',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/microbit_edu-20241015_090107-2308193710.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 120
  },

  {
    id: '121',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/monk_makes_ltd-20211007_232903-1446710122.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 121
  },

  {
    id: '122',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/monk_makes_ltd-20211012_235324-2436418807.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 122
  },

  {
    id: '123',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/monk_makes_ltd-20220310_024952-1427572765.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 123
  },

  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/nifamilybloglife-20230914_105916-3487975934.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 124
  },

  {
    id: '125',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/slatted_closeup-1-scaled.webp',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 125
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/Software-Compatibility-testing-6-320.webp',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 126
  },

  {
    id: '127',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/sprite_lights-20241022_062513-3875666593.jpg',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/What-is-Compatibility-Testing.webp',
    docType: '',
    orientation: '',
    tags: ['lab'],
    position: 128
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/Why_should_you_add_a_project_to_Hackster.io.png',
    docType: 'mp4',
    orientation: 'landscape',
    tags: ['lab'],
    position: 129
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/59801909.jpg',
    docType: '',
    orientation: '',
    tags: ['ai'],
    position: 129
  },
  // 3D
  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/hq720.jpg',
    docType: '',
    orientation: '',
    tags: ['3d', 'projects'],
    position: 124
  },

  {
    id: '125',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/mdaDMyWFut_1400166058733.jpg',
    docType: '',
    orientation: '',
    tags: ['3d'],
    position: 125
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/p1s-bg-281c07fc2c125_lqpQybsSFz.avif',
    docType: '',
    orientation: '',
    tags: ['3d'],
    position: 126
  },

  {
    id: '127',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/p1s-footer-8b1ba6b450474.png',
    docType: '',
    orientation: '',
    tags: ['3d'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/Want-undue-E-Commerce-Advantage_0.jpg',
    docType: '',
    orientation: '',
    tags: ['3d'],
    position: 128
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/3d/X1E.webp',
    docType: '',
    orientation: '',
    tags: ['3d'],
    position: 129
  },

  //PC
  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/9mPvTC5a3FSCBsPv.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 124
  },

  {
    id: '125',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/484326051_1182413317221391_5458435204465428884_n.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 125
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/2005439836.jpeg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 126
  },

  {
    id: '127',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/AMD-vs.-Intel-Which-CPU-is-Right-for-You-Heres-a-Detailed-Processor-Comparison.png',
    docType: '',
    orientation: '',
    tags: ['pc', 'projects'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/hq720.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 128
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/hq720-1.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 129
  },

  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/i-made-a-wood-pc-case-v0-2340c3os0q2b1.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 124
  },

  {
    id: '125',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/i-made-a-wood-pc-case-v0-wba6tlfp0q2b1.webp',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 125
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 126
  },

  {
    id: '127',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/n09dl7kkdtz51.webp',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/Refitting_My_Wooden Computer_Case-IBUILDIT.CA.png',
    docType: 'pdf',
    orientation: '',
    tags: ['pc'],
    position: 128
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/pc/wooden-computer-case_72.jpeg',
    docType: '',
    orientation: '',
    tags: ['pc'],
    position: 129
  },

  //Telco
  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/What-To-Look-For-In-A-PBX-System-e1728895000898.png',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 129
  },

  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/240220_MARCO_MarchPhase2_PBXvsVoIP_1.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 124
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/maxresdefault-1.jpg',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 126
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/hosted-pbx-sip-trunking.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 126
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/telecom-2030.png',
    docType: 'pdf',
    orientation: '',
    tags: ['telco'],
    position: 126
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/Getting_Started_with_OpenBTS_Range_Networks.png',
    docType: 'pdf',
    orientation: '',
    tags: ['telco'],
    position: 129
  },

  {
    id: '127',
    title: 'jjX7nS3kIao',
    imgURL: 'assets/docs/cv/linqlab/telco/maxresdefault_.jpg',
    docType: 'yt',
    orientation: '',
    tags: ['telco'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l960.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 128
  },

  {
    id: '129',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600.jpg',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 129
  },

  {
    id: '124',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600_.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 124
  },

  {
    id: '125',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600_0.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 125
  },

  {
    id: '126',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600_1.jpg',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 126
  },

  {
    id: '127',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600_2.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 127
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/linqlab/telco/s-l1600_3.webp',
    docType: '',
    orientation: '',
    tags: ['telco'],
    position: 128
  },

  //Software
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/0_ahbxIrfyYpa6JSDg.gif',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/1_hnrlp3W6kfInWHtJd9Vvag.jpg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/1_j4eZk0MCyR12cKtFM6OwZw.jpg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/0140-ci-cd-pipeline.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/4037775-0-66152300-1755189235-Devops_image.webp',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/1747811847943.jpeg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/best_devops_certification.avif',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/blog-content-marc-lankhorst-13-7-2018-01-800x468.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/Blog_Images_DevOps_SRE_PlatformEngineering.webp',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/Data-Engineer.jpg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/devops.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/devops-architecture-1.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/DevOps-Guide.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/devops-stages.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/devops-vs-mlops-comparison.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/Graph-scaled-1.webp',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/IDC-Digital-Enterprise-diagram.svg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/image2-3.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/mlops-top.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/mlops-vs-devops.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/Platform-Engineering-ISHIR.webp',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/Platform-Engineering-Responsibilities.webp',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: 'VpTsuvj1hSw',
    imgURL: 'assets/docs/cv/software/maxresdefault.jpg',
    docType: 'yt',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/usd-DevOps-MLOps.jpg',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/software/unnamed.png',
    docType: '',
    orientation: '',
    tags: ['software'],
    position: 128
  },
  //RedHat
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/timeliness-marketing-slide.png',
    docType: '',
    orientation: '',
    tags: ['research', 'ai', 'marketing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/sustainablesupplychain-marketing-slide.webp',
    docType: '',
    orientation: '',
    tags: ['research', 'ai', 'marketing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/intelligent-auto-claim-marketing-slide.png',
    docType: '',
    orientation: '',
    tags: ['research', 'ai', 'marketing'],
    position: 128
  },

  //Hardware
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/hardware/43521ffea90b0e5269c99f29334cd2c7.jpg',
    docType: '',
    orientation: '',
    tags: ['hardware', 'design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/hardware/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['hardware', 'design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/hardware/pM62Uvb9PNvqAikqo5W2p9.jpg',
    docType: '',
    orientation: '',
    tags: ['hardware', 'design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/hardware/vPA2pmMtaLA4CcPBiV4pUg.jpg',
    docType: '',
    orientation: '',
    tags: ['hardware', 'design'],
    position: 128
  },

  //Architecture
  {
    id: '128',
    title: 'https://www.architectmagazine.com/practice/architects-are-you-ready-structural-engineers-are-setting-the-pace-in-carbon-reduction_o',
    imgURL: 'assets/docs/cv/industrial/download-12.jpeg',
    docType: 'link',
    orientation: '',
    tags: ['architecture', 'design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/design/f8b1c9b11cfa56f2bc83c05107678e8f.jpg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/design/1699961732905.jpeg',
    docType: '',
    orientation: '',
    tags: ['design'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/design/iStock-1494586285.jpg',
    docType: '',
    orientation: '',
    tags: ['architecture', 'design'],
    position: 128
  },

  //AI
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/ai_ethics.png',
    docType: '',
    orientation: '',
    tags: ['research', 'ai'],
    position: 128
  },

  //Edu
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/0f36d508-6654-440a-b553-4072a1dce758-151205010737-lva1-app6892-thumbnail.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/1.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/1f076d2ce6340578c00c5fa03d315f41.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/4eae23ec-3a62-4bef-96e4-b73e66deabf5_Blog_Ikigai_and_+lifelong_+learning.avif',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/9ce020bf17f72f02be17986dbc622f1b.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/99b0798034780d645676d9f3e0158927.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/360_F_197167562_YCdpQJWAmvIPYnh0cnOs3ntMHWGB9CaY.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/888888.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/67885111_2701201659914254_1294673859374481408_n.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/299660586_407640711469957_245805925614990476_n.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/495209085_17850098979450761_4722033712582788397_n.jpg',
    docType: '',
    orientation: '',
    tags: ['learning', 'ai'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/1950406616-08f483bb80f6bbb423fcabb0310adcb926577dd83e0a800f31f1b1b25df1e48c-d.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/1748092647930.jpeg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/ac6143b926734f22aa804a4ed0ad5033.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: 'SYLeJh38iHs',
    imgURL: 'assets/docs/cv/edu/SnoMote_Howard2.jpg',
    docType: 'yt',
    orientation: 'portrait',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/AmsterdamTech-Tech-MBA-Brochure_2023.png',
    docType: 'pdf',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/robot3.gif',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: 'OtRrVrHx7Do',
    imgURL: 'assets/docs/cv/edu/uat-header-loop-v7.gif',
    docType: 'yt',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/believe-in-yourself-follow-your-dreams-and-keep-learning-are-key-messages-in-this-colorful-illustration-each-square-features-cheerful-characters-promoting-positivity-and-education-vector.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/d2b6b890-7851-4104-9bcb-18ac3737d71e_600x400.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/depositphotos_8295644-stock-photo-key-acronym-keep-extending-yourself.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/grab-the-opportunity.png',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/download.jpeg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/DFgq0WmUMAAYYZo.jpeg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/educate-yourself.png',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/If-opportunity-doesnt-know-build-a-door.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/istockphoto-1295419019-1024x1024.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/keep-extending-yourself-white-paper-background-400110244.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/Lifelong-learning-2023-09-04.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/maxresdefault.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/NEW-shanarri-flower-basic-template-KEY.png',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/office-desk-table-with-calculator-pens-other-stationery-text-keep-educating-yourself_284815-5255.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/pexels-pixabay-208733.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/our-core-value.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/private-key.asp-final-c82ba0944b504796b9e80502a5a2abb1.png',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/privateschool.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/shogakko-date.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/488681465_1091599983003342_8324630901229161663_n.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/vki9sae3iqh51.webp',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/Focus+2.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/edu/when_opportunity_knocks.png',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  {
    id: '9',
    title: '',
    imgURL: 'assets/docs/cv/research/LinqOp_Pitch.png',
    docType: 'pdf',
    orientation: 'landscape',
    tags: ['learning'],
    position: 9
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/481093902_1062608789235795_1350554316410203531_n.jpg',
    docType: '',
    orientation: '',
    tags: ['learning'],
    position: 128
  },

  //UN | CC
  {
    id: '128',
    title: 'https://issuu.com/caricomorg',
    imgURL: 'assets/docs/cv/industrial/UN&CC/167-1672889_caricom-day-hd-png-download.png',
    docType: '',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/CARICOM-Map-w-Logo.png',
    docType: '',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/caricom_sea.jpg',
    docType: '',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/caricom_.jpg',
    docType: '',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/CARICOM_SECRETARIAT_STRATEGIC_PLAN_2022-2030.png',
    docType: '',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/STRATEGIC-PLAN-2016_opt.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/STRATEGIC-PLAN-2016_opt-pdf.jpg',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/HRD-STRATEGY-CARICOM-FEB.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/HRD-STRATEGY-CARICOM-FEB-pdf.jpg',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/Regional_digital_development_strategy_final.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/Regional_digital_development_strategy_final-pdf.jpg',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/Five-Insights-on-Artificial-Intelligence-AI-in-Education.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/cxc.png',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },
  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/Caricom-Carib-Community-Booklet-natural-resource-policy.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/natual-policy-202202032.png',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },

  {
    id: '128',
    title: 'https://assets.isu.pub/document-structure/241007215448-43c7f0e9bf89c8d898f68a1013c497d6/v1/9e4c8a5a1ee520e1d71916a3096b36c2.jpeg',
    imgURL: 'assets/docs/cv/industrial/UN&CC/page_1_social_preview.webp',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },

  {
    id: '128',
    title: 'https://caricom.org/wp-content/uploads/Regional-quality-policy-FINAL-April2019.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/Regional-quality-policy-FINAL-April2019-pdf.jpg',
    docType: 'link',
    orientation: '',
    tags: ['cc'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/138-blog_cover_ods-EN.png',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/EXPO_IDA(2022)702576_EN.png',
    docType: 'pdf',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/SDGs.gif',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/ezgif-8c53e4b476afda.gif',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },
  {
    id: '128',
    title: 'https://www.undp.org/sites/g/files/zskgke326/files/2025-07/asdr_2025_exec_summary.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/asdr_2025_exec_summary_page_01_1.jpg',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://dashboards.sdgindex.org/',
    imgURL: 'assets/docs/cv/industrial/UN&CC/report-cover.webp',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://repository.unescap.org/bitstream/handle/20.500.12870/7736/ESCAP-2025-FS-SDG-Progress-Report.pdf?_gl=1*1myudwb*_ga*MTMyMDgxOTc2MC4xNzU3NTgzNzk3*_ga_SB1ZX36Y86*czE3NTc1ODM3OTYkbzEkZzEkdDE3NTc1ODQwMjgkajU2JGwwJGgw',
    imgURL: 'assets/docs/cv/industrial/UN&CC/AP-SDG-Report2025.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/sdg-posters_thumbnail-768x544.png',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/SDG12-tachometer_2020.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/sdgs-food-azote.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://www.unido.org/sites/default/files/unido-publications/2025-08/Africa-Japan%20Cooperation%20on%20Plastic%20Circular%20Economy.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/Screenshot_2025-08-1_ at 16.34.43.png',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/1-s2.0-S2590332220300087-fx1.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/_97676638_456728554.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/247785eng.png',
    docType: 'pdf',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://www.unido.org/sites/default/files/unido-publications/2025-09/IID%20Policy%20Brief%2025%20-%20Industrialization%20for%20development%20-%20Are%20LDCs%20falling%20behind_0.pdf',
    imgURL: 'assets/docs/cv/industrial/UN&CC/IID_Policy_Bri_f_24 Industrialization_for_development - Are LDCs _alling behind_0.png',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/526585005_18364309540198813_8927049266973218681_n.jpg',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://www.unido.org/about-us/who-we-are',
    imgURL: 'assets/docs/cv/industrial/UN&CC/UNIDO-smaller.png',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/industrial/UN&CC/SDG_BoardGame_EN-1000px-610x431.jpg',
    docType: '',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  {
    id: '128',
    title: 'https://go-goals.org/',
    imgURL: 'assets/docs/cv/industrial/UN&CC/wheel-100px.gif',
    docType: 'link',
    orientation: '',
    tags: ['un'],
    position: 128
  },

  //Cyber
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/02_04_2025_17_28_01_3573475.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'https://digital-strategy.ec.europa.eu/en/activities/digital-programme',
    imgURL: 'assets/docs/cv/cyber/images.jpeg',
    docType: 'link',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/4_ai_powered_cyber_threats_fi_35e8c0e65c.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/2025-02-BioID-AI-Politics-Blog.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/24_2403_WEB_EU_AI_Act_GT01_image_caption_none.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/40cc48eb735b827f5e406d616e153074134590c3-2000x1200.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/66b36414d47a7ad318066e35_24_20-_20Digital_20services_20act_20_28DSA_29.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/210709_Piraten-DSA-englisch_1.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/1027391-infographic-use-generative-ai-641538.avif',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AdobeStock_253750662_DSA_1540x900px-1024x598.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AdobeStock_784014113-kMr-U40181377273bPU-1440x752@IlSole24Ore-Web.jpeg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AI-Blogs-Cybersecurity.png.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/ai_in_cybersecurity.avif',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AI-Companies-Are-Not-Meeting-EU-AI-Act-Standards.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'https://socprime.com/blog/future-of-ai-in-cybersecurity/',
    imgURL: 'assets/docs/cv/cyber/AI-in-Cybersecurity_v2.jpg',
    docType: 'link',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/ai-security-examples-of-applications.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'https://www.enisa.europa.eu/sites/default/files/publications/ENISA%20Report%20-%20Artificial%20Intelligence%20Cybersecurity%20Challenges.pdf',
    imgURL: 'assets/docs/cv/cyber/artificial-intelligence-cybersecurity-challenges.png',
    docType: 'pdf',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/BigTech-notextweb.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Code_of_Conduct_on_Disinformation.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Cybersecurity-AI-impact.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/cyber-security-vs-artificial-intelligence.-FI-1.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/data-disclosure-orders-under-the-digital-services-act.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Data-Services-Act-DSA-in-european-union-1.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Deleting-Reviews.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Digital-Services-Act.jpg.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Digital-Services-Act.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/EPRS-AaG-766256-DSA-enforcement-FINAL.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/DSA-photo_2022-01-20-161843_pnjy.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/EU_AI_Iceberg-780x550.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/eu-digital-services-act-1200-1695344997.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/eu-the-digital-services-act.png.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/f09c2bff-the-role-of-ai-in-cybersecurity.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/HFXio1JYUkUAmi76QBUafk7wMldXOjvMoYr5PJN4tFoEnVguzbbvMsAwugvWFrF6.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/image.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/image_.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Impact-of-Artificial-Intelligence-in-Cyber-Security.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Lawbach-digital-services-act-regulation.185cd9c.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'NkrTzzecH7g',
    imgURL: 'assets/docs/cv/cyber/maxresdefault.jpg',
    docType: 'yt',
    orientation: '',
    tags: ['ai', 'cyber', 'sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/new_mff_2.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Picture-1.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'https://irdt-schriften.uni-trier.de/index.php/irdt/catalog/view/3/3/25',
    imgURL: 'assets/docs/cv/cyber/submission_3_3_coverImage_de_DE.jpg',
    docType: 'link',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/The-Future-of-AI-in-Cybersecurity-compressed.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/The Who’s Who under the EU Artificial Intelligence Act .png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'https://feps-europe.eu/wp-content/uploads/2024/12/Time-to-build-a-European-digital-ecosystem-1.pdf',
    imgURL: 'assets/docs/cv/cyber/Time-to-build-a-European-digital-ecosystem-1-pdf-495x700.jpg',
    docType: 'link',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/unnamed.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: 'CgxRWzO6lTA',
    imgURL: 'assets/docs/cv/cyber/ai.jpg',
    docType: 'yt',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/FG-Racing-toward-the-future-artificial-intelligence-in-Southeast-Asia-01_(1).png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AI-2.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AI-and-the-law-in-the-Philippines-Jay-r-C-Ipac-Thumbnail.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/d4c59992-6bb2-437c-9f8a-b023a347e598_6eebafe0.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/AAA.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Pullquotes-content_x-large.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/Hwan-Kyoung-Ko.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/67520644_906.jpg',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/ray-charles-eu.png',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/cyber/The-Impact-of-the-EU-AI-Act-on-Drones-A-Comprehensive-Overview-1536x878-1.webp',
    docType: '',
    orientation: '',
    tags: ['ai', 'cyber'],
    position: 128
  },

  //Sports
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/ZiwQSt3JpQ5PTN80_AISportsTech_Football.avif',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/Applications-of-Ai-in-sports.png',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/the-future-of-ai-and-machine-learning-in-fitness-and-combat-sports-equipment2.webp',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/AIinsports.webp',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/65844c51913bac637571f707_Buerpee_AI_fitness_app.png',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/blog_pictures2FBanner_2_ht90OdR.jpg',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/Fb.png',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/1712134949606.png',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/Top-Use-Cases-of-AI-in-Fitness-Industry.jpg',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/blog-ai-sport-decision-making.avif',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/fitness/t495730fa01bc786dd92e800f2beba285.jpg',
    docType: '',
    orientation: '',
    tags: ['sports'],
    position: 128
  },

  //Computing
  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/computing-banner-1024x565.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/Brain-and-computer.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/02-Core-Components-of-a-Computing-System-Hardware-Software-and-Electricity-768x533.jpg.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/m263_1_cover_image_1.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: 'pWeII7-AvLE',
    imgURL: 'assets/docs/cv/research/computing/hq720_2.jpg',
    docType: 'yt',
    orientation: 'portrait',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/what-is-a-computing-system1.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/CPU-vs-GPU.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/CUDA_processing_flow.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/38-3-e1715636964776.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/230221-63F436389ECE4.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/cybersecurity_dictionary_hands_outline-1.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/edge-computing.jpeg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/web-20.asp-FINAL-353224fb03fe4f0bafcd0bf28486cc80.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/web_definition_final_0823-dbe6dbcd450c498e896b884a6ff3d885.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/other_types_of_computing_4733_1wN6oDD.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/quantum-computing.asp-FINAL-1-68635090f7534414b9173598fe0ad95c.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/Quantum-what-is-quantum-computing-final-1.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/quantum-computing-age-HSBC.jpg',
    docType: 'mp4',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/quantum-computing-in-payments-1.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: 'view-source:https://www.gbm.hsbc.com/-/media/media/gbm-global/images/articles/quantum-computing-age-image-1.png?h=3271&iar=0&w=2126&hash=C01D44F17EE45262AB456193DABAE91E',
    imgURL: 'assets/docs/cv/research/computing/How-Quantum-Computing-Applications-Frame-The-Future-3.jpg',
    docType: 'link',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/ImageForArticle_17173_449489937860879655414.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: 'https://library.oapen.org/bitstream/handle/20.500.12657/99128/9789048568994.pdf?sequence=1&isAllowed=y',
    imgURL: 'assets/docs/cv/research/computing/978_90_4856_898_7_Introduction_to_Quantum_Computing_for_Business_prom_HR.jpg',
    docType: 'link',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/quantam-card.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/EuroHPC_Quantum_computers.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/Computacion_Cuantica_746x419.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/1600_Quantum_computing_feat-1440x810.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: 'https://shardeum.org/blog/quantum-computing-vs-blockchain/',
    imgURL: 'assets/docs/cv/research/computing/74-Quantum-Computing-vs.-Blockchain-–-A-Complete-Guide.jpg',
    docType: 'link',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/computing_repimage.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/Introducing-Blockchain-Technology.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/blockchain-applications-infographic-featured.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/unnamed.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/applications-of-blockchain-slide1.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/evolution-of-web-3.0.jpg',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/computer-greentech-green-computing.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/1_i5GVlKEFLeLxm4x3_7_eRA.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/neuromorphic_computing_market.webp',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/newsroom-intel-hala-point-owl-768x432.jpg',
    docType: 'mp4',
    orientation: '',
    tags: ['computing'],
    position: 128
  },

  {
    id: '128',
    title: '',
    imgURL: 'assets/docs/cv/research/computing/agriculture-14-01977-g001.png',
    docType: '',
    orientation: '',
    tags: ['computing'],
    position: 128
  },
]

const cvFlowFilters = [
  //id nomenclature to be updated
  {
    id: '0',
    title: 'All',
    position: 0
  },

  {
    id: '11',
    title: 'Learning',
    position: 11
  },

  {
    id: '1',
    title: 'Docs',
    position: 1
  },

  {
    id: '0',
    title: '🇪🇺 CC',
    position: 0
  },

  {
    id: '2',
    title: 'Research',
    position: 2
  },

  {
    id: '17',
    title: 'B2C',
    position: 17
  },

  {
    id: '2',
    title: 'AI',
    position: 2
  },

  {
    id: '12',
    title: 'Health',
    position: 12
  },

  {
    id: '12',
    title: '🇺🇳 UN',
    position: 12
  },

  {
    id: '3',
    title: 'Industrial',
    position: 3
  },

  {
    id: '17',
    title: 'B2B',
    position: 17
  },

  {
    id: '10',
    title: 'LinqLab™',
    position: 10
  },

  {
    id: '4',
    title: 'Software',
    position: 4
  },

  {
    id: '5',
    title: 'Marketing',
    position: 5
  },

  {
    id: '6',
    title: 'Design',
    position: 6
  },

  {
    id: '13',
    title: 'Projects',
    position: 13
  },

  {
    id: '7',
    title: 'Literature',
    position: 7
  },

  {
    id: '15',
    title: '3D Printing',
    position: 15
  },

  {
    id: '8',
    title: 'Dev',
    position: 8
  },

  {
    id: '8',
    title: 'Cyber',
    position: 8
  },

  {
    id: '9',
    title: 'Legal',
    position: 9
  },

  {
    id: '14',
    title: 'Telco',
    position: 14
  },

  {
    id: '16',
    title: 'PC',
    position: 16
  },

  {
    id: '16',
    title: 'Computing',
    position: 16
  },

  {
    id: '16',
    title: 'Sports',
    position: 16
  }
]

const creditData = [
  //id nomenclature to be updated
  {
    id: '4',
    title: 'cOUNOi297Mw',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '4',
    title: 'JVKVK1sTC0k',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '0',
    title: '',
    imgURL: 'assets/img/legal/7-Sample-Thank-You-Notes-for-Business-e1476741553875.jpg',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '0',
    title: '',
    imgURL: 'assets/img/legal/0f044408a97efe0d30948e27ca924fd7.avif',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '0',
    title: '',
    imgURL: 'assets/docs/text/2025-09-17T07_46_51.586Z',
    creditType: 'info',
    docType: 'text',
    orientation: '',
    tags: [],
    content: ['&emsp; &emsp; &emsp; &emsp; &emsp; &ensp;<b><u>Trademark Disclaimer</u></b><br /><br />RECO™, rigin.eco, may contain images, videos, and other media sourced from third-party platforms such as YouTube and other publicly available sources. These materials are used for informational, educational, and public interest purposes in accordance with fair use provisions under applicable copyright laws (such as Section 107 of the U.S. Copyright Act and equivalent laws in other jurisdictions).<br /> <br /> All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. The usage of any these trademarks, logos, brand names or media does not imply endorsement by the original creators, organizations, or platforms from which the trademark, logo, brand name or media was sourced.<br />'],
    authorId: ''
  },

  {
    id: '1',
    title: '',
    imgURL: 'assets/img/legal/551326f8b13b7baa41000047.png',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '2',
    title: '',
    imgURL: 'assets/img/legal/Copyright-in-Content-Creation-768x1296.png',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '3',
    title: '',
    imgURL: 'assets/img/legal/MLA_AI.jpg',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/legal/fair-use-disclaimer.jpg',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '4',
    title: '',
    imgURL: 'assets/img/legal/360_F_329442520_bs9DE1vhchdtXtbsJXcwGQTpjZd5NzDo.jpg',
    creditType: 'info',
    docType: '',
    orientation: '',
    tags: [],
    authorId: '',
  },

  {
    id: '4',
    title: 'la-0HOaNL10',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '4',
    title: 'N9hvmBId6Do',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '4',
    title: 'g-N5n2sashk',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '4',
    title: 'HMaeisq_wpA',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: [],
    authorId: 'linq-010',
  },

  {
    id: '4',
    title: 'Healthy Food',
    imgURL: 'https://static.thenounproject.com/png/1422994-200.png',
    creditType: 'media',
    docType: 'img',
    orientation: '',
    tags: ['food', 'eat', 'healthy'],
    authorId: 'linq-011',
  },

  {
    id: '4',
    title: 'I AM WHAT I CREATE',
    imgURL: 'assets/img/eat/IMG_20250921_050811.jpg',
    creditType: 'media',
    docType: 'img',
    orientation: '',
    tags: ['food', 'eat', 'healthy'],
    authorId: 'linq-001',
  },

  {
    id: '4',
    title: 'Bzw2T18YDJ4',
    imgURL: '',
    creditType: 'code',
    docType: 'yt',
    orientation: '',
    tags: ['code', 'api', 'youtube'],
    authorId: 'linq-012',
  }
]

//TODO: Design this better!!
let creditAuthorData = [
  {
    id: '0',
    authorId: 'linq-001',
    authorName: 'Amen Min Rigin',
    imgURL: 'assets/img/cv/social/17426346_10154580078977266_3108030594434772733_n_10154580078977266.jpg',
    profiles: 
      {'linq': 'linq-001', 
      'insta':'amen.rigin.eco' , 
      'fb':'rigin.eco' },
    pro_pos: ['0', '1', '2']
  },

  {
    id: '1',
    authorId: 'linq-010',
    authorName: 'Mitali Jadhavrao',
    imgURL: 'https://media.licdn.com/dms/image/v2/D4D35AQEm65jVelFiSQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1698476293043?e=1760018400&v=beta&t=jpEgv7oeVek8I0uH13lYLdDm57zU9pc3BoI31tBngiE',
    profiles: 
      {'linq': 'linq-010', 
      'yt':'codingartist' , 
      'linkedin':'mitali-jadhavrao',
    'site':'https://codingartistweb.com/' },
    pro_logos: ['assets/icons/codingartist.png'],
    pro_pos: ['0', '1', '2', '3']
  },

  {
    id: '0',
    authorId: 'linq-011',
    authorName: 'Maria Kislitsina',
    imgURL: 'https://secure.gravatar.com/avatar/23d8438aac23edcc887e39ec607c3829/?s=260&d=https%3A%2F%2Fstatic.thenounproject.com%2Fimg%2Fdefault.jpg',
    profiles: 
      {'linq': 'linq-001',
        'noun': 'bymasha'
      },
    pro_pos: ['0']
  },

  {
    id: '0',
    authorId: 'linq-012',
    authorName: 'Jon Vadar',
    imgURL: 'https://jonvadar.xyz/images/logo.webp',
    profiles: 
      {'linq': 'linq-012',
        'yt': '@LearnWithJonVadar',
        'site': 'https://jonvadar.xyz',
        'github': 'JonVadar',
      },
    pro_pos: ['0']
  },
]