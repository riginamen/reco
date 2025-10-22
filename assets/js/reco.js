window.onload = function () {
}

//TODO: Fix Weather
//let saved_Weather = localStorage.getItem('saved-Weather');

$('.reco-logo').click(function () {
  alert(`${window.innerHeight} x ${window.innerWidth}`)
});

$('.info_a').click(function () {
  window.open('https://caricom.org/', '_blank').focus();
});

$('.info_b').click(function () {

  openModal(modal, 'credit', '');

});

function generateCredit(saved_UI, creditData) {

  /* Preferred Style */
  let UI = 'android'
  //credit_item_container radius
  let c_i_c_r = '1em'

  if (saved_UI == 'android') {
    UI = saved_UI;
    c_i_c_r = '1em'

  } else if (saved_UI == 'metro') {
    UI = saved_UI;
    c_i_c_r = '0em'

  } else if (saved_UI == 'apple') {
    UI = saved_UI;
    c_i_c_r = '0.5em'
  } else {
    UI = 'android'
  }
  /* Extra Styling */
  let credit_logo_container = document.getElementById('credit-logo-container');

  if (saved_UI == 'android') {
    credit_logo_container.style.borderRadius = '50%';
  } else {
    credit_logo_container.style.borderRadius = c_i_c_r;
  }

  let credit_info = document.getElementById('credit-info-btn');
  let credit_media = document.getElementById('credit-media-btn');
  let credit_code = document.getElementById('credit-code-btn');
  credit_info.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
  credit_media.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
  credit_code.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`

  let credit_info_flow_container = document.getElementById('credit-info-flow-container');
  let credit_media_flow_container = document.getElementById('credit-media-flow-container');
  let credit_code_flow_container = document.getElementById('credit-code-flow-container');

  let creditInfoData = []
  let creditMediaData = []
  let creditCodeData = []

  creditData.forEach((credit_data) => {

    if (credit_data.creditType == 'info') {

      creditInfoData.push(credit_data)

    } else if (credit_data.creditType == 'media') {

      creditMediaData.push(credit_data)

    } else if (credit_data.creditType == 'code') {

      creditCodeData.push(credit_data)
    }
  })

  //TODO: Temporary Fix Credit Initialization
  setTimeout(generateCreditInfo(saved_UI, creditInfoData, credit_info, credit_media, credit_code, credit_info_flow_container), 1000)

  $('#credit-info-top').click(function () {

    let message = 'RECO™ is Being Updated 🙂';
    
    let data = [{
      content: [message]
    }]

    openModal(modal, 'message', data[0]);
  });

  $('#credit-info-disclaimer').click(function () {

    let message = 'RECO™ is Being Updated 🙂';
    
    let data = [{
      content: [message]
    }]

    openModal(modal, 'message', data[0]);
  });

  $('.credit-bottom').click(function () {

    let message = 'RECO™ is Being Updated 🙂';
    
    let data = [{
      content: [message]
    }]

    openModal(modal, 'message', data[0]);
  });

  $('#credit-info-btn').click(function () {

    credit_info.style.cssText = `background-color: green; color: white; border: 2px solid green; border-radius: 1em; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%; font-weight: bold; cursor: pointer;`
    credit_media.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
    credit_code.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`

    $('#credit-info-flow-container').show();
    $('#credit-media-flow-container').hide();
    $('#credit-code-flow-container').hide();

    creditInfoData.forEach((info_data) => {

      if (info_data.docType == 'text') {
        let credit_flow_item = document.createElement('div')
        credit_flow_item.setAttribute('id', 'credit-flow-item')
        credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; overflow: hidden; cursor: pointer`

        credit_flow_item.innerHTML = info_data.content[0];

        /* fetch(info_data.imgURL)
          .then((res) => res.text())
          .then((text) => {
            // do something with "text"
            credit_flow_item_container.innerText = text;
          })
          .catch((e) => console.error(e)); */

        //credit_flow_item_container.innerText = info_data.imgURL;
        credit_info_flow_container.appendChild(credit_flow_item)
      } else {

        let credit_flow_item = document.createElement('img')

        credit_flow_item.style.cssText = 'height: auto; width: 97%; border: 2px solid green; border-radius: 1em; margin: 0.5%; overflow: hidden; cursor: pointer'

        credit_flow_item.src = info_data.imgURL;
        credit_info_flow_container.appendChild(credit_flow_item)
      }
    })
  });

  $('#credit-media-btn').click(function () {
    $('#credit-media-flow-container').empty();

    credit_info.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
    credit_media.style.cssText = `background-color: green; color: white; border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%; font-weight: bold; cursor: pointer;`
    credit_code.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`

    $('#credit-info-flow-container').hide();
    $('#credit-media-flow-container').show();
    $('#credit-code-flow-container').hide();

    creditMediaData.forEach((media_data) => {

      if (media_data.docType == 'text') {
        let credit_flow_item = document.createElement('div')
        credit_flow_item.setAttribute('id', 'credit-flow-item')
        credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; cursor: pointer;  overflow: hidden;`

        credit_flow_item.innerHTML = info_data.content[0];

        /* fetch(info_data.imgURL)
          .then((res) => res.text())
          .then((text) => {
            // do something with "text"
            credit_flow_item_container.innerText = text;
          })
          .catch((e) => console.error(e)); */

        //credit_flow_item_container.innerText = info_data.imgURL;
        credit_info_flow_container.appendChild(credit_flow_item)
      } else {

        let credit_flow_item = document.createElement('div')
        credit_flow_item.setAttribute('id', 'credit-flow-item')
        credit_flow_item.style.cssText = `display: flex; height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; justify-content: space-between; align-items: center; overflow: hidden`

        let media_thumbnail = document.createElement('img')
        media_thumbnail.style.cssText = 'height: 100px; width: auto; cursor: pointer'
        media_thumbnail.src = media_data.imgURL

        let media_title = document.createElement('div');
        media_title.style.cssText = 'width: 40%; text-align: center;'
        media_title.innerText = media_data.title

        let linq_btn_container = document.createElement('div')
        if (UI == 'android') {
          linq_btn_container.style.cssText = `height: 40px; width: 40px; margin: 1%; object-fit: cover; border: 2px solid green; border-radius: 50%; cursor: pointer`
        } else {
          linq_btn_container.style.cssText = `height: 40px; width: 40px; margin: 1%; object-fit: cover; border: 2px solid green; border-radius: ${c_i_c_r}; cursor: pointer`
        }
        let linq_btn_img = document.createElement('img')
        linq_btn_img.style.cssText = 'height: auto; width: 75%; margin-top: 12%; margin-left: 12%'
        linq_btn_img.src = 'assets/linqs/Linq_Logo_Green_1.png';

        $(media_thumbnail).click(function () {

          openImgModal(modal, media_data.orientation, media_data.imgURL)
        });

        $(linq_btn_container).click(function () {

          $('#credit-container').hide();
          $('.linq-linq-container').show();

          generateLinq(saved_UI, media_data.authorId, creditAuthorData, 'credit')
        });

        credit_flow_item.appendChild(media_thumbnail)
        credit_flow_item.appendChild(media_title)
        linq_btn_container.appendChild(linq_btn_img)
        credit_flow_item.appendChild(linq_btn_container)

        credit_media_flow_container.appendChild(credit_flow_item)
      }
    })
  });

  $('#credit-code-btn').click(function () {
    $('#credit-code-flow-container').empty();

    $('#credit-info-flow-container').hide();
    $('#credit-media-flow-container').hide();
    $('#credit-code-flow-container').show();

    credit_info.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
    credit_media.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
    credit_code.style.cssText = `background-color: green; color: white; border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%; font-weight: bold; cursor: pointer;`

    creditCodeData.forEach((info_data) => {

      if (info_data.docType == 'yt') {

        let credit_flow_item = document.createElement('div')
        credit_flow_item.setAttribute('id', 'credit-flow-item')
        credit_flow_item.style.cssText = `display: flex; height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; justify-content: space-between; align-items: center; overflow: hidden`

        let yt_thumbnail = document.createElement('img')
        yt_thumbnail.style.cssText = 'height: 100px; width: 200px; cursor: pointer'

        let yt_title = document.createElement('div');
        yt_title.style.cssText = 'width: 40%; text-align: center;'

        let linq_btn_container = document.createElement('div')
        if (UI == 'android') {
          linq_btn_container.style.cssText = `height: 40px; width: 40px; margin: 1%; object-fit: cover; border: 2px solid green; border-radius: 50%; cursor: pointer`
        } else {
          linq_btn_container.style.cssText = `height: 40px; width: 40px; margin: 1%; object-fit: cover; border: 2px solid green; border-radius: ${c_i_c_r}; cursor: pointer`
        }
        let linq_btn_img = document.createElement('img')
        linq_btn_img.style.cssText = 'height: auto; width: 75%; margin-top: 12%; margin-left: 12%'
        linq_btn_img.src = 'assets/linqs/Linq_Logo_Green_1.png';

        getYouTudeData(info_data.title, yt_thumbnail, yt_title)

        $(yt_thumbnail).click(function () {

          let data = [
            {
              title: info_data.title,
              docType: 'yt',
              orientation: ''
            }
          ]

          openModal(modal, 'video', data[0])
        });

        $(yt_title).click(function () {

          //  alert(info_data.title)
        });

        $(linq_btn_container).click(function () {

          $('#credit-container').hide();
          $('.linq-linq-container').show();

          generateLinq(saved_UI, info_data.authorId, creditAuthorData, 'credit')
        });

        credit_flow_item.appendChild(yt_thumbnail)
        credit_flow_item.appendChild(yt_title)
        linq_btn_container.appendChild(linq_btn_img)
        credit_flow_item.appendChild(linq_btn_container)

        credit_code_flow_container.appendChild(credit_flow_item)

      } else if (info_data.docType == 'text') {

        let credit_flow_item = document.createElement('div')
        credit_flow_item.setAttribute('id', 'credit-flow-item')
        credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; cursor: pointer`

        credit_flow_item.innerHTML = info_data.content[0];

        credit_code_flow_container.appendChild(credit_flow_item)
      } else {

        let credit_flow_item = document.createElement('img')

        credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; cursor: pointer`

        credit_flow_item.src = info_data.imgURL;
        credit_code_flow_container.appendChild(credit_flow_item)
      }
    })
  });
}

function generateCreditInfo(saved_UI, creditInfoData, credit_info, credit_media, credit_code, credit_info_flow_container) {

  /* Preferred Style */
  let UI = 'android'
  //credit_item_container radius
  let c_i_c_r = '1em'

  if (saved_UI == 'android') {
    UI = saved_UI;
    c_i_c_r = '1em'

  } else if (saved_UI == 'metro') {
    UI = saved_UI;
    c_i_c_r = '0em'

  } else if (saved_UI == 'apple') {
    UI = saved_UI;
    c_i_c_r = '0.5em'
  } else {
    UI = 'android'
  }

  credit_info.style.cssText = `background-color: green; color: white; border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%; font-weight: bold; cursor: pointer;`
  credit_media.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`
  credit_code.style.cssText = `border: 2px solid green; border-radius: ${c_i_c_r}; padding-top: 1%; padding-left: 2%; padding-right: 2%; padding-bottom: 1%;  cursor: pointer;`

  $('#credit-info-flow-container').show();
  $('#credit-media-flow-container').hide();
  $('#credit-code-flow-container').hide();

  creditInfoData.forEach((info_data) => {

    if (info_data.docType == 'text') {
      let credit_flow_item = document.createElement('div')
      credit_flow_item.setAttribute('id', 'credit-flow-item')
      credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; overflow: hidden; cursor: pointer`

      credit_flow_item.innerHTML = info_data.content[0];

      /* fetch(info_data.imgURL)
        .then((res) => res.text())
        .then((text) => {
          // do something with "text"
          credit_flow_item_container.innerText = text;
        })
        .catch((e) => console.error(e)); */

      //credit_flow_item_container.innerText = info_data.imgURL;
      credit_info_flow_container.appendChild(credit_flow_item)
    } else {

      let credit_flow_item = document.createElement('img')

      credit_flow_item.style.cssText = `height: auto; width: 97%; border: 2px solid green; border-radius: ${c_i_c_r}; margin: 0.5%; overflow: hidden; cursor: pointer`

      credit_flow_item.src = info_data.imgURL;
      credit_info_flow_container.appendChild(credit_flow_item)
    }
  })
}

function getYouTudeData(videoId, el_thumb, el_title) {

  let API_key = 'AIzaSyAlDrE4lPVnocw1iNDhrZXsabDWHQNEvgI';
  let video_id = videoId;

  let url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + video_id + '&key=' + API_key

  return fetch(url)
    .then(res => res.json()
      .then(data => {

        el_thumb.src = data.items[0].snippet.thumbnails.medium.url
        el_title.innerText = data.items[0].snippet.title
      })
    )
}

//TODO: Make Functional with Back & Forward buttion Pressed 
function generateLinq(saved_UI, linqId, linqData, type) {
  let linq_linq_container = document.getElementById('linq-linq-container')
  let linq_img_container = document.createElement('div');
  let linq_img = document.createElement('img');
  let linq_name = document.createElement('div');
  let pro_btns_container = document.createElement('div');

  let shape = 'circle'
  //Meaning 'Pro Border Radius
  let p_b_r = '50%'

  pro_btns_container.style.cssText = 'display: flex; margin: 1%; align-items: center; justify-content: space-between;'

  var linq_data = linqData.filter(obj => {
    return obj.authorId === linqId
  })

  if (saved_UI == 'apple') {
    shape = 'square'
    p_b_r = '1rem'

    linq_img.style.cssText = 'width: 300px; border-radius: 15%'
  } else if (saved_UI == 'android') {
    shape = 'circle'
    p_b_r = '50%'

    linq_img.style.cssText = 'width: 300px; border-radius: 50%;'
  } else if (saved_UI == 'metro') {
    shape = 'square'
    p_b_r = '0%'

    linq_img.style.cssText = 'width: 300px; border-radius: 0%'
  }

  linq_img.src = linq_data[0].imgURL;

  var profiles = Object.keys(linq_data[0].profiles);

  profiles.forEach((pro) => {

    let pro_img_container = document.createElement('div');
    pro_img_container.style.cssText = `width: 46px; height: 46px; object-fit: cover; border-radius: ${p_b_r}; overflow: hidden; cursor: pointer`

    let pro_img = document.createElement('img');
    pro_img.style.cssText = `height: 100%; width: 100%; `

    pro_img_container.onmouseover = function () {

      pro_img_container.style.border = '3px solid green'

      pro_img_container.animate([
        { borderColor: "green", offset: 0 },
        { borderColor: "white", offset: 0.5 },
        { borderColor: "green", offset: 1 },
      ], {
        duration: 2000,
        'animation-timing-function': 'linear',
        iterations: Infinity,
      })
    }

    pro_img_container.onmouseleave = function () {

      pro_img_container.style.border = ''

      pro_img_container.animate([
        { borderColor: "green", offset: 0 },
        { borderColor: "white", offset: 0.5 },
        { borderColor: "green", offset: 1 },
      ], {
        duration: 2000,
        'animation-timing-function': 'linear',
        iterations: 1,
      })

    }

    if (pro == 'linq') {

      pro_img.src = 'assets/linqs/Linq_Logo_Green_1.png'
      pro_img.style.scale = '0.75'
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        localStorage.setItem("currentView", "linqLinq")

        let url = 'linq/linq.html'

        let data = [{
          title: url
        }]

        openModal(modal, 'site', data[0])

      });

    } else if (pro == 'fb') {

      pro_img.src = `assets/icons/fb_${shape}.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://fb.com/${linq_data[0].profiles.fb}`
        window.open(url, '_blank').focus();

      });

    } else if (pro == 'insta') {

      pro_img.src = `assets/icons/insta_${shape}.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://instagram.com/${linq_data[0].profiles.insta}`
        window.open(url, '_blank').focus();

      });

    } else if (pro == 'yt') {

      pro_img.src = `assets/icons/yt_${shape}.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://youtube.com/${linq_data[0].profiles.yt}`
        window.open(url, '_blank').focus();

      });

    } else if (pro == 'linkedin') {

      pro_img.src = `assets/icons/lnkdn_${shape}.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://linkedin.com/in/${linq_data[0].profiles.linkedin}`
        window.open(url, '_blank').focus();

      });

    } else if (pro == 'noun') {

      pro_img.src = `assets/icons/noun.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://thenounproject.com/creator/${linq_data[0].profiles.noun}`
        window.open(url, '_blank').focus();

      });
    } else if (pro == 'github') {

      pro_img.src = `assets/icons/github-logo-72.png`
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = `https://github.com/${linq_data[0].profiles.github}`
        window.open(url, '_blank').focus();

      });
    } else if (pro == 'site') {

      pro_img.src = linq_data[0].pro_logos[0]
      pro_img_container.appendChild(pro_img)
      pro_btns_container.appendChild(pro_img_container)

      $(pro_img_container).click(function () {

        let url = linq_data[0].profiles.site
        window.open(url, '_blank').focus();

      });
    }
  })

  linq_img_container.appendChild(linq_img)

  linq_linq_container.appendChild(linq_img_container)
  linq_linq_container.appendChild(pro_btns_container)
}

function recoToLinq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      localStorage.setItem("currentView", "linqLinq")

      const err = false;
      if (!err) {
        resolve();
      } else {
        reject();
      }
    }, 25)
  });
}

function unselectFilter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const err = false;
      if (!err) {

        resolve();
      } else {
        reject();
      }
    }, 25)
  });
}

//TODO: Body color change code
function generateImgBackground(flavorDoc) {

  if (window.outerWidth <= 460) {
    document.getElementById('background').style.cssText = 'background-color: pink';
    document.getElementById('background-1').style.cssText = 'background-color: mediumslateblue';
    //document.getElementById('tiles-container').style.cssText = 'flex-direction: row';

    document.getElementById('metro').style.cssText = flavorDoc;

  } else if (window.outerWidth > 460 && window.outerWidth < 768) {
    document.getElementById('background').style.cssText = 'background-color: turquoise';
    document.getElementById('background-1').style.cssText = 'background-color: teal';
    document.getElementById('tiles-container').style.cssText = 'flex-direction: column';

    document.getElementById('metro').style.cssText = flavorDoc;

  } else {

    document.getElementById('metro').style.cssText = flavorDoc;
  }

  window.addEventListener("resize", function (e) {

    if (window.outerWidth <= 460) {
      document.getElementById('background').style.cssText = 'background-color: pink';
      document.getElementById('background-1').style.cssText = 'background-color: mediumslateblue';
      document.getElementById('tiles-container').style.cssText = 'flex-direction: row';

      document.getElementById('metro').style.cssText = flavorDoc;

    } else if (window.outerWidth > 460 && window.outerWidth < 768) {
      document.getElementById('background').style.cssText = 'background-color: turquoise';
      document.getElementById('background-1').style.cssText = 'background-color: teal';
      document.getElementById('tiles-container').style.cssText = 'flex-direction: column';

      document.getElementById('metro').style.cssText = flavorDoc;

    } else {

      document.getElementById('metro').style.cssText = flavorDoc;
    }
    //  window.reload;
  });
}

function generateMetro(saved_UI, saved_Temp, saved_Weather) {

  /* Preferred Style */
  let UI = 'android'
  //container radius
  let c_r = '1em'

  if (saved_UI == 'android') {
    UI = saved_UI;
    c_r = '1em'

  } else if (saved_UI == 'metro') {
    UI = saved_UI;
    c_r = '0em'

  } else if (saved_UI == 'apple') {
    UI = saved_UI;
    c_r = '0.5em'
  } else {
    UI = 'android'
  }

  let reco_logo = document.getElementById('reco-logo')
  reco_logo.src = metroData[0].content[1]
  let reco_title = document.getElementById('metro-title-text')
  reco_title.innerHTML = metroData[0].content[0]

  reco_logo.onmouseover = function () {
    reco_logo.style.cssText = 'width: 100px; margin-top: 5%; margin-left: -3%; cursor: pointer;'
    reco_logo.src = 'assets/icons/Eagle_white.png'
  }

  reco_logo.onmouseleave = function () {
    reco_logo.style.cssText = 'width: 100px; margin-top: 5%; margin-left: -3%; cursor: pointer;'
    reco_logo.src = 'assets/icons/Eagle_green.png'
  }

  let metro_container = document.getElementById('metro-container');
  metro_container.style.display = 'block'  
  metro_container.style.maxHeight = '657px'
  metro_container.style.borderRadius = c_r;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    //  chat_box.style.cssText = 'height: 68vh';
  }

  generateTiles(saved_UI, saved_Temp, saved_Weather, tilesData, tilesContainersData);
}

function generateTiles(saved_UI, saved_Temp, saved_Weather, all_tiles_data, tiles_containers_data) {

  //let message_input_container = document.getElementById('message-input-container');

  let tiles_container = document.getElementById('tiles-container');
  //tiles_container.style.display = 'flex'

  let tilesContainersData = tiles_containers_data;
  let tilesData_ = all_tiles_data;
  let tiles = [];

  tilesContainersData.forEach((tile_container_data) => {

    generateContainer(saved_UI, saved_Temp, saved_Weather, tilesData_, tile_container_data, tiles_container);

  });

  tiles.push(tiles_container)
}

function generateContainer(saved_UI, saved_Temp, saved_Weather, tiles_data, tile_container_data, tiles_container) {

  //TODO: Fix margin sizes
  let tile_container = document.createElement('div');
  tile_container.classList.add('tile-container');
  tile_container.setAttribute('id', 'tile-container');

  if (window.outerWidth <= 460) {
    if (saved_UI == 'apple') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 212px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1rem; padding-top: 2%; padding-bottom: 2%; padding-left: 1%; padding-right: 2%';
    } else if (saved_UI == 'metro') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 212px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; padding-top: 2%; padding-bottom: 2%; padding-left: 1%; padding-right: 2%';
    } else if (saved_UI == 'android') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 212px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1.5rem; padding-top: 2%; padding-bottom: 2%; padding-left: 1%; padding-right: 2%';
    } else {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 212px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1.5rem; padding-top: 2%; padding-bottom: 2%; padding-left: 1%; padding-right: 2%';
    }
  } else {
    if (saved_UI == 'apple') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 204px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1rem; padding-top: 0.5%; padding-bottom: 0.5%; padding-right: 0.5%';
    } else if (saved_UI == 'metro') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 204px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 0rem; padding-top: 0.5%; padding-bottom: 0.5%; padding-right: 0.5%';
    } else if (saved_UI == 'android') {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 204px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1.5rem; padding-top: 0.5%; padding-bottom: 0.5%; padding-right: 0.5%';
    } else {
      tile_container.style.cssText = 'display: flex; position: relative; flex-direction: row; flex-wrap: wrap; row-gap: 4px; max-width: 204px; margin-top: 1%; margin-left: 0.55%; margin-right: 0.55%; background-color: pink; border-radius: 1.5rem; padding-top: 0.5%; padding-bottom: 0.5%; padding-right: 0.5%';
    }
  }

  let tile0_id = '';
  let tile0_position;
  let tile1_id = '';
  let tile1_position;
  let tile2_id = '';
  let tile2_position;
  let tile3_id = '';
  let tile3_position;

  if (tile_container_data.tile0 !== '') {
    tile0_id = tile_container_data.tile0.map(e => e.id)
    tile0_position = tile_container_data.tile0.map(e => e.position)
  }

  if (tile_container_data.tile1 !== '') {
    tile1_id = tile_container_data.tile1.map(e => e.id)
    tile1_position = tile_container_data.tile1.map(e => e.position)
  }

  if (tile_container_data.tile2 !== '') {
    tile2_id = tile_container_data.tile2.map(e => e.id)
    tile2_position = tile_container_data.tile2.map(e => e.position)
  }

  if (tile_container_data.tile3 !== '') {
    tile3_id = tile_container_data.tile3.map(e => e.id)
    tile3_position = tile_container_data.tile3.map(e => e.position)
  }

  //console.log(tile_id.toString())

  tiles_data.forEach((tile_data) => {

    if (tile_data.id == tile0_id.toString()) {
      //console.log(tile_data.id)
      generateTile(saved_UI, saved_Temp, saved_Weather, tile_data, tile0_id, tile0_position, tile_container, tiles_container);

    } else if (tile_data.id == tile1_id.toString()) {
      //console.log(tile_data.id)
      generateTile(saved_UI, saved_Temp, saved_Weather, tile_data, tile1_id, tile1_position, tile_container, tiles_container);

    } else if (tile_data.id == tile2_id.toString()) {
      //console.log(tile_data.id)
      generateTile(saved_UI, saved_Temp, saved_Weather, tile_data, tile2_id, tile2_position, tile_container, tiles_container);

    } else if (tile_data.id == tile3_id.toString()) {
      //console.log(tile_data.id)
      generateTile(saved_UI, saved_Temp, saved_Weather, tile_data, tile3_id, tile3_position, tile_container, tiles_container);
    }
  });
}

function generateTile(saved_UI, saved_Temp, saved_Weather, tile_data, tile_id, tile_position, tile_container, tiles_container) {

  let metro = document.getElementById('metro');

  let tile = document.createElement('p');
  tile.classList.add('tile');
  tile.setAttribute('id', 'tile');
  tile.setAttribute('draggable', 'true');

  tile.style.cursor = 'pointer'

  let tile_icon = document.createElement('img');
  tile_icon.classList.add('tile-icon-img');
  tile_icon.src = tile_data.icon;

  let tile_container_no = document.createElement('div');
  tile_container_no.classList.add('container-no');
  tile_container_no.innerText = tile_id;

  // All tile appending in HERE!
  positionTile(saved_UI, tile, tile_data, tile_icon, tile_position, tile_container, tile_container_no);

  // Update tile every second
  if (tile_data.tile_title == 'Time') {
    tile.removeChild(tile_icon);
    setInterval(digitalClock(tile), 1000);
  } else if (tile_data.tile_title == 'Weather') {
    tile.removeChild(tile_icon);
    generateWeatherTile(saved_Temp, saved_Weather, tile)
  } else if (tile_data.tile_title == 'Games') {

    tile.onmouseover = function () {
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }

    metro.addEventListener("scroll", function () {
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }, true);
  } else if (tile_data.tile_title == 'CV') {

    tile.onmouseover = function () {
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }

    metro.addEventListener("scroll", function () {
      //tile_icon.src = ''
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }, true);
  } else if (tile_data.tile_title == 'RE') {

    tile.onmouseover = function () {
      //tile_icon.src = '';
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }

    metro.addEventListener("scroll", function () {
      //tile_icon.src = ''
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }, true);
  } else if (tile_data.tile_title == 'Eat') {

    tile.onmouseover = function () {
      //tile_icon.src = '';
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }

    metro.addEventListener("scroll", function () {
      //tile_icon.src = ''
      startTileAnimation(tile, tile_data, tile_icon).then(stopTileAnimation(tile, tile_data, tile_icon))
    }, true);
  }

  tile.addEventListener("click", function () {
    if (tile_data.tile_title == 'Chat') {

      let url = 'https://streamify-video-calls-hu8u.onrender.com';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Games') {
      document.getElementById('metro').style.display = 'none';
      document.getElementById('cv-container').style.display = 'none'
      document.getElementById('games-container').style.display = 'block'
      generateGamesOption(gamesTypeData)
    } else if (tile_data.tile_title == 'CV') {
      $('.metro').hide();
      $('.cv-container').show();

      generateCV(saved_UI);
    } else if (tile_data.tile_title == 'YT') {

      openModal(modal, 'linq2', '')

      generateLinq2(saved_UI);

    } else if (tile_data.tile_title == 'Time') {
      let url = '../time/time.html';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])
    } else if (tile_data.tile_title == 'Fit') {

      let url = 'https://linqfit.vercel.app';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Photos') {
      let url = 'https://marvelapp.com/prototype/94fecga/screen/97652926'

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Plane') {

      $('.metro').hide();
      let metro_bg_img = document.createElement('img');
      metro_bg_img.setAttribute('id', 'metro-bg-img')
      metro_bg_img.src = 'assets/img/20241120_072550.jpg'
      metro_bg_img.style.cssText = "object-fit: cover; background-repeat: no-repeat; z-index:0;"

      document.getElementById('metro-container').appendChild(metro_bg_img);

      if ($('.metro').is(":hidden")) {

        metro_bg_img.addEventListener("click", function () {
          $('.metro').show();
        });
      }

    } else if (tile_data.tile_title == 'Weather') {
      generateWeatherTile(saved_Temp, saved_Weather, tile)

      if (localStorage.getItem('saved-Weather')) {
        let message = 'This is the Weather in ' + saved_Weather;
        
        let data = [{
          content: [message]
        }]

        openModal(modal, 'message', data[0]);

      } else {
        let url = 'https://marvelapp.com/prototype/94fecga/screen/97652941';

        let data = [{
          title: url
        }]

        openModal(modal, 'site', data[0])
      }
    } else if (tile_data.tile_title == 'ToDo') {

      let url = 'to-do-list/index.html';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'TextEditor') {

      let url = 'rich-text-editor/index.html';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Earth') {

      let url = 'earth/earth.html';

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Cart') {

      let url = 'https://marvelapp.com/prototype/94fecga/screen/97652945'

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Saved') {

      let url = 'http://www.instagram.com/amen.rigin.eco'

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (tile_data.tile_title == 'Git') {
      //window.open('https://github.com/riginamen', '_blank').focus();
      window.location.href = 'https://github.com/riginamen';
    } else if (tile_data.tile_title == 'Dev') {

      openModal(modal, 'credit', '');

    } else if (tile_data.tile_title == 'RE') {

      openModal(modal, 'tile', tile_data);
    } else if (tile_data.tile_title == 'Eat') {

      let data = [{
        imgURL: 'assets/img/eat/IMG_20250921_050811.jpg',
        orientation: 'portrait'
      }]

      openImgModal(modal, data[0].orientation, data[0].imgURL);
    }
  });
  tiles_container.appendChild(tile_container);
}

function startTileAnimation(tile, tile_data, tile_icon) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const err = false;
      if (!err) {
        let tile_title = tile_data.tile_title;

        if (tile_title == 'Games') {
          tile_icon.style.cssText = 'height: 100%; width: 100%'
          tile_icon.src = 'assets/img/giphy.gif'

        } else if (tile_title == 'CV') {
          tile_icon.style.cssText = 'height: 100%; width: 100%; transform: translateY(-5%)'
          tile_icon.src = 'assets/img/0_DJzrn8z_bpebUoN7.gif'

        } else if (tile_title == 'RE') {

          tile_icon.style.cssText = 'height: 100%; width: auto; object-fit: contain'
          tile_icon.src = 'assets/docs/cv/industrial/UN&CC/ezgif-8c53e4b476afda.gif'

        } else if (tile_title == 'Eat') {

          tile_icon.style.cssText = 'height: 100%; width: auto; object-fit: contain'
          tile_icon.src = 'assets/icons/fruit.gif'
        }
        resolve();
      } else {
        reject();
      }
    }, 1000)
  });
}

function stopTileAnimation(tile, tile_data, tile_icon) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const err = false;
      if (!err) {
        let tile_title = tile_data.tile_title;

        if (tile_title == 'Games') {

          tile_icon.style.cssText = 'margin-top: 15%; scale: 1.5'
          tile_icon.src = 'assets/icons/bxs-joystick.svg'
        } else if (tile_title == 'CV') {

          tile_icon.style.cssText = 'margin-top: 35%; scale: 1.5'
          tile_icon.src = 'assets/icons/bxs-pyramid.svg'
        } else if (tile_title == 'RE') {

          tile_icon.style.cssText = 'width: auto; height: 35%; margin-top: 15%;'
          tile_icon.src = tile_data.icon
        } else if (tile_title == 'Eat') {

          tile_icon.style.cssText = 'width: auto; height: 88%; margin-top: 10%;'
          tile_icon.src = tile_data.icon
        }

        resolve();
      } else {
        reject();
      }
    }, 15000)
  });
}

function generateGamesOption(games_type_data) {

  $('.banner').hide();

  let gamesOptionContainer = document.getElementById('games-option-container');
  gamesOptionContainer.style.display = 'flex';

  let gamesIcons = document.createElement('div');
  gamesIcons.classList.add('games-icons');

  let gamesCenterImg = document.createElement('img');
  gamesCenterImg.classList.add('games-center-img');
  gamesCenterImg.src = 'assets/img/cv/20643360_10154987889377266_7399196928537211150_o.jpg'

  document.getElementById('games-left-arrow-circle').addEventListener("click", function () {
    document.getElementById('games-container').style.display = 'none';
    document.getElementById('metro').style.display = 'block';

    $('.games-option-container').empty();
  });

  games_type_data.forEach((game_type_data) => {

    generateGameType(game_type_data, gamesIcons)
  })

  gamesOptionContainer.appendChild(gamesCenterImg);
  gamesOptionContainer.appendChild(gamesIcons);
}

function generateGameType(type_data, type_icons) {

  let gameTypeContainer = document.createElement('div');
  gameTypeContainer.classList.add('game-type-container');
  gameTypeContainer.style.cssText = '--i:' + type_data.optionPosition

  let gameType = document.createElement('div');
  gameType.classList.add('game-type');

  let gameTypeTitle = document.createElement('div');
  gameTypeTitle.classList.add('game-type-title');
  gameTypeTitle.innerText = type_data.gameTitle;

  let gameTypeImg = document.createElement('img');
  gameTypeImg.classList.add('game-type-img');
  gameTypeImg.src = type_data.imgURL;

  gameTypeContainer.addEventListener("click", function () {

    if (type_data.gameTitle == 'Tic-Tac-Toe') {
      let url = "https://linq-play.web.app/";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (type_data.gameTitle == 'Pacman') {
      let url = "games/pacman/pacman.html";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (type_data.gameTitle == 'Gravity') {
      let url = "games/gravity/gravity.html";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (type_data.gameTitle == 'Balloon Pop') {
      let url = "games/balloon/index.html";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (type_data.gameTitle == 'Raise Flag') {
      let url = "games/flags/index.html";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    } else if (type_data.gameTitle == 'Fruit Fall') {
      let url = "games/fruit/index.html";

      let data = [{
        title: url
      }]

      openModal(modal, 'site', data[0])

    }
  });

  gameType.appendChild(gameTypeImg)
  gameTypeContainer.appendChild(gameType)
  gameTypeContainer.appendChild(gameTypeTitle)
  type_icons.appendChild(gameTypeContainer)
}

function positionTile(saved_UI, tile, tile_data, tile_icon, tile_position, tile_container, tile_container_no) {

  let tile0_card = document.createElement('p');
  tile0_card.classList.add('tile0-card');
  tile0_card.setAttribute('draggable', true);
  tile0_card.style.cssText = 'display: block; position: relative; height: 46px; width: 46px; margin-left: 4px; margin-right: 0.5px; background-color: grey; background-image: url(assets/linqs/Linq_Logo_Green_1.png); background-size: 88%; background-repeat: no-repeat; background-position: center; cursor: pointer';
  tile0_card.onmouseover = function () {
    tile0_card.style.backgroundColor = 'white';
  }
  tile0_card.onmouseleave = function () {
    tile0_card.style.backgroundColor = 'grey';
  }
  tile0_card.addEventListener("click", function () {
    let url = 'linq/linq.html'

    let data = [{
      title: url
    }]

    openModal(modal, 'site', data[0])
  });

  let tile1_card = document.createElement('p');
  tile1_card.classList.add('tile1-card');
  tile1_card.setAttribute('draggable', true);
  tile1_card.style.cssText = 'display: block; position: relative; height: 46px; width: 46px; margin-left: 4px; margin-right: 0.5px; background-color: grey; background-image: url(assets/linqs/Linq_Logo_Green_1.png); background-size: 88%; background-repeat: no-repeat; background-position: center; cursor: pointer';
  tile1_card.onmouseover = function () {
    tile1_card.style.backgroundColor = 'red';
  }
  tile1_card.onmouseleave = function () {
    tile1_card.style.backgroundColor = 'grey';
  }
  tile1_card.addEventListener("click", function () {
    let url = 'linq/linq.html'

    let data = [{
      title: url
    }]

    openModal(modal, 'site', data[0])
  });

  let tile2_card = document.createElement('p');
  tile2_card.classList.add('tile2-card');
  tile2_card.setAttribute('draggable', true);
  tile2_card.style.cssText = 'display: block; position: relative; height: 46px; width: 46px; margin-left: 4px; margin-right: 0.5px; background-color: grey; background-image: url(assets/linqs/Linq_Logo_Green_1.png); background-size: 88%; background-repeat: no-repeat; background-position: center; cursor: pointer';
  tile2_card.onmouseover = function () {
    tile2_card.style.backgroundColor = 'turquoise';
  }
  tile2_card.onmouseleave = function () {
    tile2_card.style.backgroundColor = 'grey';
  }
  tile2_card.addEventListener("click", function () {
    let url = 'linq/linq.html'

    let data = [{
      title: url
    }]

    openModal(modal, 'site', data[0])
  });

  let tile3_card = document.createElement('p');
  tile3_card.classList.add('tile3-card');
  tile3_card.setAttribute('draggable', true);
  tile3_card.style.cssText = 'display: block; position: relative; height: 46px; width: 46px; margin-left: 4px; margin-right: 0.5px; background-color: grey; background-image: url(assets/linqs/Linq_Logo_Green_1.png); background-size: 88%; background-repeat: no-repeat; background-position: center; cursor: pointer';
  tile3_card.onmouseover = function () {
    tile3_card.style.backgroundColor = 'orange';
    //tile_icon.style.setAttribute('animation', 'shine')
  }
  tile3_card.onmouseleave = function () {
    tile3_card.style.backgroundColor = 'grey';
  }
  tile3_card.addEventListener("click", function () {
    let url = 'linq/linq.html'

    let data = [{
      title: url
    }]

    openModal(modal, 'site', data[0])
  });

  styleTile(saved_UI, tile, tile_data, tile_icon, tile0_card, tile1_card, tile2_card, tile3_card);
  tileShape(saved_UI, tile, tile_data, tile0_card, tile1_card, tile2_card, tile3_card)

  /* const lookup = all_tiles_data.reduce((a, e) => {
    a[e.container] = ++a[e.container] || 0;
    return a;
  }, {});

  let cars = all_tiles_data.filter(e => lookup[e.container]); */
  //console.log(all_tiles_data.filter(e => lookup[e.container]))

  //tile.appendChild(tile_container_no);
  tile_icon.setAttribute('draggable', false);
  tile.appendChild(tile_icon);

  if (tile_position == '0') {
    tile0_card = tile;
  } else if (tile_position == '1') {
    tile1_card = tile;
  } else if (tile_position == '2') {
    tile2_card = tile;
  } else if (tile_position == '3') {
    tile3_card = tile;
  }
  /* Tile Positioning Quick Fix*/
  if (tile_data.id == '3') {
    tile_container.appendChild(tile0_card);
    tile_container.appendChild(tile1_card);

  } else if (tile_data.id == '4') {
    tile_container.appendChild(tile0_card);
    tile_container.appendChild(tile1_card);
    tile_container.appendChild(tile2_card);

  } else if (tile_data.id == '6') {
    tile_container.appendChild(tile0_card);

  } else if (tile_data.id == '7') {
    tile_container.appendChild(tile0_card);
    tile_container.appendChild(tile1_card);
    tile_container.appendChild(tile2_card);

  } else if (tile_data.id == '15') {
    tile_container.appendChild(tile2_card);
  } else if (tile_data.id == '16') {
    tile_container.appendChild(tile2_card);
  } else if (tile_data.id == '17') {
    tile_container.appendChild(tile0_card);
    tile_container.appendChild(tile1_card);
    tile_container.appendChild(tile2_card);
  } else {
    tile_container.appendChild(tile0_card);
    tile_container.appendChild(tile1_card);
    tile_container.appendChild(tile2_card);
    tile_container.appendChild(tile3_card);
  }

  doDrag(tile0_card, tile1_card, tile2_card, tile3_card)
}
//TODO: Standardization: Make All Tile Icon Uniform
function styleTile(saved_UI, tile, tile_data, tile_icon, tile0_card, tile1_card, tile2_card, tile3_card) {

  /* Preferred Style */
  let UI = 'android'
  //tile border radius
  let c_r = '1.4em'

  if (saved_UI == 'android') {
    UI = saved_UI;
    t_b_r = '1.4em'

  } else if (saved_UI == 'metro') {
    UI = saved_UI;
    t_b_r = '0em'

  } else if (saved_UI == 'apple') {
    UI = saved_UI;
    t_b_r = '1em'
  } else {
    UI = 'android'
  }

  if (tile_data.tile_title == 'YT') {
    tile.style.cssText = `display: block; position: relative; height: 44.5px; width: 44.5px; margin-left: 4px; border-radius: ${t_b_r}; overflow: hidden`;
    tile_icon.style.cssText = 'width: auto; height: 100%;'
    tile_icon.src = tile_data.icon;

  } else if (tile_data.tile_title == 'RE') {
    tile.style.cssText = 'display: block; position: relative; height: 98px; width: 200px; margin-left: 4px; overflow: hidden';
    tile_icon.style.cssText = 'width: auto; height: 35%; margin-top: 15%;'
    tile_icon.src = tile_data.icon;

  } else if (tile_data.tile_title == 'Eat') {

    tile.style.cssText = 'display: block; position: relative; height: 98px; width: 98px; margin-left: 4px; overflow: hidden';
    tile_icon.style.cssText = 'width: auto; height: 88%; margin-top: 10%;'
    tile_icon.src = tile_data.icon;

  } else if (tile_data.tile_title == 'TextEditor') {

    tile.style.cssText = 'display: block; position: relative; height: 44px; width: 44px; margin-left: 4px; border: 2px solid black; border-radius: 50%; overflow: hidden';
    tile_icon.style.cssText = 'width: auto; height: 58%; margin-top: 20%;'
    tile_icon.src = tile_data.icon;

  } else {

    if (tile_data.tile_size == 's') {
      tile.style.cssText = 'display: block; position: relative; height: 44.5px; width: 44.5px; margin-left: 4px;';
      tile_icon.style.cssText = 'margin-top: 20%;'
      //alert('S')
    } else if (tile_data.tile_size == 'm') {
      tile.style.cssText = 'display: block; position: relative; height: 98px; width: 98px; margin-left: 4px; overflow: hidden';
      tile_icon.style.cssText = 'margin-top: 35%; scale: 1.5'
      //alert('M')
    } else if (tile_data.tile_size == 'l') {
      tile.style.cssText = 'display: block; position: relative; height: 98px; width: 200px; margin-left: 4px; overflow: hidden';
      tile_icon.style.cssText = 'margin-top: 15%; scale: 1.5'
      //alert('L')
    } else if (tile_data.tile_size == 'xl') {
      tile.style.cssText = 'display: block; position: relative; height: 200px; width: 200px; margin-left: 4px;';
      tile_icon.style.cssText = 'margin-top: 45%; scale: 1.5'
      //alert('M')

      //tile1_card.style.display = 'none'
      //tile2_card.style.display = 'none'
      //tile3_card.style.display = 'none'
    }
  }
  tile.style.backgroundColor = tile_data.color;
}

function tileShape(saved_UI, tile, tile_data, tile0_card, tile1_card, tile2_card, tile3_card) {

  let border_radius_s = '1.4rem';
  let border_radius_m = '4rem';
  let border_radius_l = '6rem';
  let border_radius_xl = '6rem';

  if (saved_UI == 'apple') {

    let border_radius_s = '1rem';
    let border_radius_m = '1rem';
    let border_radius_l = '1rem';
    let border_radius_xl = '1rem';

    tile0_card.style.borderRadius = border_radius_s;
    tile0_card.style.backgroundSize = '70%'

    tile1_card.style.borderRadius = border_radius_s;
    tile1_card.style.backgroundSize = '70%'

    tile2_card.style.borderRadius = border_radius_s;
    tile2_card.style.backgroundSize = '70%'

    tile3_card.style.borderRadius = border_radius_s;
    tile3_card.style.backgroundSize = '70%'

    if (tile_data.tile_size == 's') {

      tile.style.borderRadius = border_radius_s;

    } else if (tile_data.tile_size == 'm') {

      tile.style.borderRadius = border_radius_m;

    } else if (tile_data.tile_size == 'l') {

      tile.style.borderRadius = border_radius_l;

    } else if (tile_data.tile_size == 'xl') {

      tile.style.borderRadius = border_radius_xl
    }

  } else if (saved_UI == 'metro') {

    let border_radius_s = '0rem';
    let border_radius_m = '0rem';
    let border_radius_l = '0rem';
    let border_radius_xl = '0rem';

    tile0_card.style.borderRadius = border_radius_s;
    tile0_card.style.backgroundSize = '70%'

    tile1_card.style.borderRadius = border_radius_s;
    tile1_card.style.backgroundSize = '70%'

    tile2_card.style.borderRadius = border_radius_s;
    tile2_card.style.backgroundSize = '70%'

    tile3_card.style.borderRadius = border_radius_s;
    tile3_card.style.backgroundSize = '70%'

    if (tile_data.tile_size == 's') {

      tile.style.borderRadius = border_radius_s;

    } else if (tile_data.tile_size == 'm') {

      tile.style.borderRadius = border_radius_m;

    } else if (tile_data.tile_size == 'l') {

      tile.style.borderRadius = border_radius_l;

    } else if (tile_data.tile_size == 'xl') {

      tile.style.borderRadius = border_radius_xl
    }

  } else if (saved_UI == 'android') {

    let border_radius_s = '1.4rem';
    let border_radius_m = '4rem';
    let border_radius_l = '6rem';
    let border_radius_xl = '6rem';

    tile0_card.style.borderRadius = border_radius_s;
    tile0_card.style.backgroundSize = '70%'

    tile1_card.style.borderRadius = border_radius_s;
    tile1_card.style.backgroundSize = '70%'

    tile2_card.style.borderRadius = border_radius_s;
    tile2_card.style.backgroundSize = '70%'

    tile3_card.style.borderRadius = border_radius_s;
    tile3_card.style.backgroundSize = '70%'

    if (tile_data.tile_size == 's') {

      tile.style.borderRadius = border_radius_s;

    } else if (tile_data.tile_size == 'm') {

      tile.style.borderRadius = border_radius_m;

    } else if (tile_data.tile_size == 'l') {

      tile.style.borderRadius = border_radius_l;

    } else if (tile_data.tile_size == 'xl') {

      tile.style.borderRadius = border_radius_xl
    }

  } else {

    tile0_card.style.borderRadius = border_radius_s;
    tile0_card.style.backgroundSize = '70%'

    tile1_card.style.borderRadius = border_radius_s;
    tile1_card.style.backgroundSize = '70%'

    tile2_card.style.borderRadius = border_radius_s;
    tile2_card.style.backgroundSize = '70%'

    tile3_card.style.borderRadius = border_radius_s;
    tile3_card.style.backgroundSize = '70%'

    if (tile_data.tile_size == 's') {

      tile.style.borderRadius = border_radius_s;

    } else if (tile_data.tile_size == 'm') {

      tile.style.borderRadius = border_radius_m;

    } else if (tile_data.tile_size == 'l') {

      tile.style.borderRadius = border_radius_l;

    } else if (tile_data.tile_size == 'xl') {

      tile.style.borderRadius = border_radius_xl
    }
  }
}

//TODO: Drag | Drop at the top & next to another tile
function doDrag(tile0_card, tile1_card, tile2_card, tile3_card) {
  const draggables = [tile0_card, tile1_card, tile2_card, tile3_card]
  const containers = document.querySelectorAll('.tile-container')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })

  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
}

function digitalClock(tile) {

  let clock_container = document.createElement('div');
  clock_container.classList.add('clock-container');
  clock_container.style.cssText = 'display: flex; justify-content: center; align-items: center; height: 100%'

  let clock = document.createElement('div');
  clock.classList.add('clock');
  clock.style.cssText = 'top: 30%; font-size: 2rem; font-weight: bold; text-align: center; color: white;'

  let now = new Date();
  let hrs = now.getHours().toString().padStart(2, 0);
  let mins = now.getMinutes().toString().padStart(2, 0);

  let timeString = hrs + ':' + mins;
  clock.innerText = timeString;

  clock_container.appendChild(clock)
  tile.appendChild(clock_container)
}

//TODO: Get all weather features to work
function generateWeatherTile(saved_Temp, saved_Weather, tile) {

  //const inputBox = document.querySelector('.input-box');
  //const searchBtn = document.getElementById('searchBtn');
  const weather_body = document.createElement('div');
  weather_body.classList.add('weather-body');
  weather_body.style.cssText = 'display: none; justify-content: center; align-items: center; flex-direction: column; margin-block: 20px;'

  const weather_img = document.createElement('img');
  weather_img.classList.add('weather-img');
  weather_img.style.cssText = 'width: 20%;';

  const weather_box = document.createElement('div');
  weather_box.classList.add('weather-box');
  weather_box.style.cssText = 'margin-top: 5px; text-align: center;'

  const weather_details = document.createElement('div');
  weather_details.classList.add('weather-details');
  weather_details.style.cssText = 'display: flex; justify-content: space-between; width: 100%; margin-top: 30px;'

  const weather_details_info = document.createElement('i');
  weather_details_info.innerHTML = '<i class="fa-sharp fa-solid fa-droplet"></i>'
  weather_details_info.style.cssText = 'font-size: 36px;'

  const weather_details_text = document.createElement('div');
  weather_details_text.style.cssText = 'margin-left: 10px; font-size: 16px;'
  const weather_details_text_span = document.createElement('span');

  weather_details_text_span.setAttribute('id', 'humidity')
  weather_details_text_span.style.cssText = 'font-size: 20px; font-weight: 700;'
  const weather_details_text_p = document.createElement('p');
  weather_details_text_p.innerText = 'Humidity';

  const temperature = document.createElement('div');
  temperature.classList.add('temperature');
  temperature.style.cssText = 'font-size: 30px; font-weight: 800; position: relative;'

  let sup = document.createElement('sup');
  sup.style.cssText = 'position: relative; font-size: 40px; font-weight: 800;'

  const description = document.createElement('div');
  description.classList.add('description');
  description.style.cssText = 'font-size: 20px; font-weight: 700; text-transform: capitalize;'

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.style.cssText = 'margin-left: 20px';

  const humidity_text = document.createElement('div');
  const humidity_text_span = document.createElement('span');
  humidity_text_span.setAttribute('id', 'humidity')
  const humidity_text_p = document.createElement('p');
  humidity_text_p.innerText = 'Humidity';

  const wind = document.createElement('div');
  wind.innerHTML = '<i class="fa-solid fa-wind"></i>'
  wind.style.cssText = 'display: flex; align-items: center;'

  const wind_text = document.createElement('div');
  const wind_speed = document.createElement('span');
  wind_speed.classList.add('wind-speed');
  const wind_text_p = document.createElement('p');
  wind_text_p.innerText = 'Wind Speed';

  const location_not_found = document.createElement('div');
  location_not_found.classList.add('location-not-found');
  location_not_found.style.cssText = 'margin-top: 20px; display: none; align-items: center; justify-content: center; flex-direction: column;'

  const location_not_found_h1 = document.createElement('h1');
  location_not_found_h1.style.cssText = 'font-size: 20px; color: #6b6b6b; margin-block-end: 15px;'

  const location_not_found_img = document.createElement('img');
  location_not_found_img.style.cssText = 'width: 80%;'
  location_not_found_img.src = 'assets/img/weather/404.png'

  async function checkWeather(city) {
    const api_key = "3045dd712ffe6e702e3245525ac7fa38";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
      location_not_found.style.display = "flex";
      weather_body.style.display = "none";
      console.log("error");
      return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    //if()
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
      case 'Clouds':
        weather_img.src = "assets/img/weather/cloud.png";
        break;
      case 'Clear':
        weather_img.src = "assets/img/weather/clear.png";
        break;
      case 'Rain':
        weather_img.src = "assets/img/weather/rain.png";
        break;
      case 'Mist':
        weather_img.src = "assets/img/weather/mist.png";
        break;
      case 'Snow':
        weather_img.src = "assets/img/weather/snow.png";
        break;

    }
    //console.log(weather_data.weather[0].main);

    temperature.appendChild(sup);
    temperature.appendChild(description);
    weather_box.appendChild(temperature);

    humidity_text.appendChild(humidity_text_span);
    humidity_text.appendChild(humidity_text_p);
    humidity.appendChild(humidity_text);
    weather_details.appendChild(humidity);

    wind_text.appendChild(wind_speed);
    wind_text.appendChild(wind_text_p);
    wind.appendChild(wind_text);
    weather_details.appendChild(wind);

    weather_body.appendChild(weather_img);
    weather_body.appendChild(weather_box);

    location_not_found.appendChild(location_not_found_h1);
    location_not_found.appendChild(location_not_found_img);

    weather_body.appendChild(location_not_found)
    tile.appendChild(weather_body);
    tile.style.overflow = 'hidden'
  }
  //localStorage.setItem('savedWeather', 'Tokyo')
  if (localStorage.getItem('saved-Weather')) {
    checkWeather(saved_Weather)
  }
  else {
    checkWeather('Osaka')
  }
}

function generateLinq2(saved_UI) {
  /* Preferred Style */
  let UI = 'android'
  //container radius
  let c_r = '1em'

  if (saved_UI == 'android') {
    UI = saved_UI;
    c_r = '1em'

  } else if (saved_UI == 'metro') {
    UI = saved_UI;
    c_r = '0em'

  } else if (saved_UI == 'apple') {
    UI = saved_UI;
    c_r = '0.5em'
  } else {
    UI = 'android'
  }

  let modal_body = document.getElementById('modal-body')

  let linq2_main_container = document.createElement('div')
  linq2_main_container.style.cssText = 'width: 100%; height: 510px; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none;'

  let linq2_top = document.createElement('div')
  linq2_top.style.height = '130px'
  linq2_top.style.width = '100%'
  linq2_top.style.cssText = 'display: flex; justify-content: center; align-items: center;'

  let img0 = document.createElement('img')
  img0.src = 'assets/img/2/IdVJFtwv44g8f1LBxQ.webp'
  img0.style.cssText = 'height: auto; width: 20%; object-fit: cover; border: 2px solid green'

  let img1 = document.createElement('img')
  img1.style.cssText = 'height: auto; width: 20%; object-fit: cover'
  img1.src = 'assets/img/2/istockphoto-1179997501-612x612.jpg'

  let img2 = document.createElement('img')
  img2.style.cssText = 'height: 130px; width: 20%; object-fit: cover; margin-right: 0.75%; cursor: pointer'
  img2.src = 'assets/img/2/original-519329905a3cb894ef7662607b7b5aef.gif'

  img2.onmouseover = function () {
    linq2_top.style.height = '130px'

    img2.style.cssText = 'height: auto; width: 20%; object-fit: contain; margin-left: 5px; scale: 0.5; cursor: pointer'
    img2.src = 'assets/linqs/Linq_Logo_Red_1.png'
  }

  img2.onmouseleave = function () {

    img2.style.cssText = 'height: 130px; width: 20%; object-fit: cover; margin-right: 0.75%;'
    img2.src = 'assets/img/2/original-519329905a3cb894ef7662607b7b5aef.gif'
  }

  let img_URWYE = document.createElement('img')
  img_URWYE.src = 'assets/img/2/grNDsG4bMJRsI.gif'
  img_URWYE.style.cssText = `height: auto; width: auto; margin-top: 1%; object-fit: cover; border: 2px solid green; border-radius: ${c_r}; cursor: pointer`

  $(img2).click(function () {
    // alert(el.snippet.resourceId.videoId)

    if ($(linq2_main_container).is(":visible")) {
      $(linq2_filters_container).hide()
      $(linq2_main_container).hide()

      modal_body.appendChild(img_URWYE)
    } else {
      modal_body.removeChild(img_URWYE)
      $(linq2_filters_container).show()
      $(linq2_main_container).show()
    }
  });

  let img3 = document.createElement('img')
  img3.style.cssText = 'height: auto; width: 20%; object-fit: cover'
  img3.src = 'assets/img/2/simyo-blogvisuals-2023-tv-kijken-buitenland-v1.webp'

  let img4 = document.createElement('img')
  img4.style.cssText = 'height: auto; width: 20%; object-fit: cover'
  img4.src = 'assets/img/2/31a97258737059.5a07705b4b565.gif'

  let linqFiltersData = [
    {
      name: 'Trending',
      icon: `<i class='bx bx-trending-up'></i>`
    },

    {
      name: 'Quality',
      icon: '',
    },

    {
      name: 'Tech',
      icon: '',
    },

    {
      name: 'Review',
      icon: '',
    },

    {
      name: 'Psychology',
      icon: '',
    },

    {
      name: 'Podcasts',
      icon: '',
    },

    {
      name: 'TedX',
      icon: '',
    },

    {
      name: 'Health',
      icon: '',
    },

    {
      name: 'Vegan',
      icon: '',
    },

    {
      name: 'Food',
      icon: '',
    },

    {
      name: 'Network',
      icon: '',
    },
  ]

  let search = document.createElement('div')
  search.innerHTML = `<i class='bx bx-search'></i>`
  search.style.cssText = `height: auto; width: 48px; margin-right: 5px; padding-top: 0.5%; padding-left: 1%; padding-right: 1%; border: 2px solid green; border-radius: ${c_r}; cursor: pointer`

  let customize_btn = document.createElement('div')
  customize_btn.innerHTML = `<i class='bx bx-slider'></i>`
  customize_btn.style.cssText = `height: auto; width: 48px; margin-left: 5px; padding-top: 0.5%; padding-left: 1%; padding-right: 1%; border: 2px solid green; border-radius: ${c_r}; cursor: pointer`

  let linq2_filters_container = document.createElement('div')
  linq2_filters_container.style.cssText = 'display: flex; margin-top: 5px; margin-bottom: 5px; align-items: center;'

  let linq2_filters_ = document.createElement('div')
  linq2_filters_.style.cssText = 'display: flex; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none; '

  linq2_filters_container.appendChild(search)

  linqFiltersData.forEach((data) => {
    let linq2_filter = document.createElement('div')
    linq2_filter.style.cssText = `white-space: nowrap; margin: 0.5%; padding-left: 5px; padding-right: 5px; border: 2px solid green; border-radius: ${c_r}; cursor: pointer`

    linq2_filter.innerText = data.name

    if (data.name == 'Trending') {
      linq2_filter.innerHTML = `${data.name} ${data.icon}`
    }

    linq2_filters_.appendChild(linq2_filter)
  })

  let tu_title_0 = document.createElement('div')
  tu_title_0.innerText = 'Today'
  let tu_title_1 = document.createElement('div')
  tu_title_1.innerText = 'This Week'
  let tu_title_2 = document.createElement('div')
  tu_title_2.innerText = 'Top'

  let tu_container_0 = document.createElement('div')
  tu_container_0.setAttribute('id', 'tu-container-0')
  tu_container_0.style.cssText = 'display: flex; height: 200px; width: auto; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;'

  let tu_container_1 = document.createElement('div')
  tu_container_1.setAttribute('id', 'tu-container-1')
  tu_container_1.style.cssText = 'display: flex; height: 200px; width: auto; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;'

  let tu_container_2 = document.createElement('div')
  tu_container_2.setAttribute('id', 'tu-container-2')
  tu_container_2.style.cssText = 'display: flex; height: 200px; width: auto; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;'

  let tu_container_3 = document.createElement('div')
  tu_container_3.setAttribute('id', 'tu-container-3')
  tu_container_3.style.cssText = 'display: flex; height: 200px; width: auto; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;'

  let channelId = 'UCBJycsmduvYEL83R_U4JriQ'
  let channelUploadsId = 'UUBJycsmduvYEL83R_U4JriQ'
  let playlistId_0 = 'UUL_f53ZEJxp8TtlOkHwMV9Q'
  let playlistId_1 = 'PLNJsVJgvYE4Wre4CAxeW5h5vaFjXY1RqK'
  let playlistId_2 = 'UU8Y-jrV8oR3s2Ix4viDkZtA'

  let data = [
    {
      playlistId: 'UUBJycsmduvYEL83R_U4JriQ',
      maxResults: '15',
      container_name: 'tu-container-0'
    },

    {
      playlistId: 'UUL_f53ZEJxp8TtlOkHwMV9Q',
      maxResults: '15',
      container_name: 'tu-container-1'
    },

    {
      playlistId: 'PLNJsVJgvYE4Wre4CAxeW5h5vaFjXY1RqK',
      maxResults: '15',
      container_name: 'tu-container-2'
    },

    {
      playlistId: 'UU8Y-jrV8oR3s2Ix4viDkZtA',
      maxResults: '15',
      container_name: 'tu-container-3'
    },
  ]

  data.forEach((data) => {
    getYouTubePlaylist(data.playlistId, data.maxResults, data.container_name)
  })

  let tu_content_1 = document.createElement('div')
  tu_content_1.style.cssText = 'height: 98px; width: 150px; border: 2px solid green'

  let tu_content_2 = document.createElement('div')
  tu_content_2.style.cssText = 'height: 98px; width: 150px; border: 2px solid green'

  linq2_top.appendChild(img0)
  linq2_top.appendChild(img1)
  linq2_top.appendChild(img2)
  linq2_top.appendChild(img3)
  linq2_top.appendChild(img4)

  //tu_container_0.appendChild(tu_title_0)

  // tu_container_1.appendChild(tu_title_1)
  tu_container_1.appendChild(tu_content_1)
  //tu_container_2.appendChild(tu_title_2)
  tu_container_2.appendChild(tu_content_2)

  //linq2_main_container.appendChild(linq2_top)
  linq2_main_container.appendChild(tu_container_0)
  linq2_main_container.appendChild(tu_container_1)
  linq2_main_container.appendChild(tu_container_2)
  linq2_main_container.appendChild(tu_container_3)

  modal_body.appendChild(linq2_top)
  linq2_filters_container.appendChild(linq2_filters_)
  linq2_filters_container.appendChild(customize_btn)
  modal_body.appendChild(linq2_filters_container)
  modal_body.appendChild(linq2_main_container)
}

function getYouTubePlaylist(channelUploadsId, maxResults, tu_container, borderRadius) {

  G_API_Key = 'AIzaSyAlDrE4lPVnocw1iNDhrZXsabDWHQNEvgI'
  let url_0 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${channelUploadsId}&key=${G_API_Key}`

  fetch(url_0)
    .then(res => res.json())
    .then(data => {
      data.items.forEach(el => {

        let tu_content_0 = document.createElement('div')
        tu_content_0.style.cssText = `height: 100px; width: auto; margin: 2px; border: 2px solid green; border-radius: ${borderRadius}`;

        let tu_content_img = document.createElement('img')
        tu_content_img.style.cssText = 'height: auto; width: 170px; object-fit: cover; cursor: pointer'
        let tu_content_title = document.createElement('div')

        tu_content_img.src = el.snippet.thumbnails.medium.url
        tu_content_title.innerText = el.snippet.title.substring(0, 46) + '...'
        tu_content_title.style.fontWeight = '0.55em';

        let data = [
          {
            title: el.snippet.resourceId.videoId,
            imgURL: '',
            docType: 'yt',
            orientation: 'landscape'
          }
        ]

        $(tu_content_img).click(function () {
          // alert(el.snippet.resourceId.videoId)

          openModal(modal, 'video', data[0])
        });

        tu_content_0.appendChild(tu_content_img)
        tu_content_0.appendChild(tu_content_title)

        document.getElementById(tu_container).appendChild(tu_content_0);
      })
      //console.log(data)
    })

}

//let textToSave = document.getElementById('credit-trademark').innerText;
let textFileName = new Date().toISOString();
//console.log(textToSave)
function save() {
  var htmlContent = textToSave;
  var bl = new Blob([htmlContent], { type: "text/html" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(bl);
  a.download = textFileName;
  a.hidden = true;
  //document.body.appendChild(a);
  //a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
  a.click();
}
//save();

//Do Nothing When Press Back Button
history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function (event) {
  history.pushState(null, document.title, location.href);
  closeModal(modal)
});