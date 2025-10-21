window.onload = function () {
  // Global Variables
  let saved_UI = localStorage.getItem('saved-UI');
  let saved_Temp = localStorage.getItem('temperature-unit');
  let saved_Weather = localStorage.getItem('saved-Weather');

  if (saved_UI == '' || saved_UI == null) {
    saved_UI = 'android';
  }
  if (saved_Temp == '' || saved_Temp == null) {
    saved_Temp = 'celcius';
  }
  if (saved_Weather == '' || saved_Weather == null) {
    saved_Weather = 'Philipsburg';
  }

  //document.getElementById('metro-container').style.cssText = 'position: fixed; justify-content: center; overflow-x: hidden; overflow-y: hidden; -ms-overflow-style: none; scrollbar-width: none; height: 92%; width: 90%; top: 4%; margin-left: auto; margin-right: auto;border: 3px solid green; border-radius: 0.75rem; left: 0; right: 0; z-index: 20;'
  //let flavorDoc = 'position: fixed; background-image: url(assets/img/20241120_072550.jpg); background-repeat: no-repeat; justify-content: center; overflow-x: hidden; overflow-y: hidden; -ms-overflow-style: none; scrollbar-width: none; height: 92%; width: 90%; top: 4%; margin-left: auto; margin-right: auto; left: 0; right: 0; z-index: 20;';
  generateImgBackground('');
  generateMetro(saved_UI, saved_Temp, saved_Weather);
  //document.getElementById('metro').style.display = 'none';
  generateCredit(saved_UI, creditData);
}
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

let lastModal= []

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

$('#bx-info-circle').click(function () {
  //alert('RECO™ is Under Construction 🚧 \n ➡️ (Allow PopUp) for The Experience \n \n For Inquiries & Job Offers \n Contact The Dev ➡️ amen@rigin.eco \n Looking Forward to Hear From You 🙂')
  let message = metroData[1]

  openModalButtons.forEach(button => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal, 'message', message)
  })
});

$('.bxs-cog').click(function () {

  //TODO: Fix Weather
  let saved_Weather = localStorage.getItem('saved-Weather');

  let saved_UI = localStorage.getItem('saved-UI');
  let saved_Temp = localStorage.getItem('temperature-unit');

  /* let text;
  let person;

  if (localStorage.getItem('savedWeather')) {

    text = prompt("Please enter the Weather Location:", savedWeather);
  }
  else {
    text = prompt("Please enter the Weather Location:", "");
  }

  setTimeout(function () { savingWeather(text) }, 1000) */

  openModal(modal, 'settings', '');

  generateSettings(saved_UI, saved_Temp, saved_Weather);
});

//TODO: Move to reco.js
function generateSettings(saved_UI, saved_Temp, saved_Weather) {

  let settings_container = document.getElementById('settings-container');

  let location_input = document.getElementById('location-input');
  let celcius_radio = document.getElementById('weather-celcius-btn');
  let fahrenheit_radio = document.getElementById('weather-fahrenheit-btn');

  let ui_apple = document.getElementById('bxl-apple');
  let ui_metro = document.getElementById('bxl-metro');
  let ui_android = document.getElementById('bxl-android');

  if (saved_Weather && saved_Weather != '') {
    location_input.value = saved_Weather;
  } else {
    location_input.value = 'Nagano';
  }

  if (saved_Temp != null && saved_Temp == 'celcius') {

    fahrenheit_radio.checked = false;
    celcius_radio.checked = true;

  } else if (saved_Temp != null && saved_Temp == 'fahrenheit') {

    fahrenheit_radio.checked = true;
    celcius_radio.checked = false;

  } else {

    fahrenheit_radio.checked = false;
    celcius_radio.checked = true;
  }

  $('#weather-celcius-btn').click(function () {
    fahrenheit_radio.checked = false;
    celcius_radio.checked = true;

    localStorage.setItem('temperature-unit', 'celcius')
  })

  $('#weather-fahrenheit-btn').click(function () {
    fahrenheit_radio.checked = true;
    celcius_radio.checked = false;

    localStorage.setItem('temperature-unit', 'fahrenheit')
  })

  if (saved_UI == 'apple') {
    ui_apple.style.cssText = 'border: 2px solid grey; border-radius: 20%; padding: 1%; color: grey; cursor: pointer;'
  } else if (saved_UI == 'metro') {
    ui_metro.style.cssText = 'border: 2px solid teal; padding: 1%; color: teal; cursor: pointer;'
  } else if (saved_UI == 'android') {
    ui_android.style.cssText = 'border: 2px solid #A4C639; border-radius: 50%; padding: 1%; color: #A4C639; cursor: pointer;'
  } else {
    ui_android.style.cssText = 'border: 2px solid #A4C639; border-radius: 50%; padding: 1%; color: #A4C639; cursor: pointer;'
  
    let saved_UI = 'android'
    localStorage.getItem('saved-UI', saved_UI);
  }

  $(ui_apple).click(function () {
    ui_apple.style.cssText = 'border: 2px solid grey; border-radius: 20%; padding: 1%; color: grey; cursor: pointer;'
    ui_metro.style.cssText = 'padding: 1%; color: teal; cursor: pointer;'
    ui_android.style.cssText = 'padding: 1%; color: #A4C639; cursor: pointer;'

    localStorage.setItem('saved-UI', 'apple')
  });

  $(ui_metro).click(function () {
    ui_metro.style.cssText = 'border: 2px solid teal; padding: 1%; color: teal; cursor: pointer;'
    ui_apple.style.cssText = 'padding: 1%; color: grey; cursor: pointer;'
    ui_android.style.cssText = 'padding: 1%; color: #A4C639; cursor: pointer;'

    localStorage.setItem('saved-UI', 'metro')
  });

  $(ui_android).click(function () {
    ui_android.style.cssText = 'border: 2px solid #A4C639; border-radius: 50%; padding: 1%; color: #A4C639; cursor: pointer;'
    ui_metro.style.cssText = 'padding: 1%; color: teal; cursor: pointer;'
    ui_apple.style.cssText = 'padding: 1%; color: grey; cursor: pointer;'

    localStorage.setItem('saved-UI', 'android')
  })
}

let players = [];

function loadVideo(data) {
  
  if (data.orientation == 'portrait') {

    window.YT.ready(function () {
      players[0] = new window.YT.Player("yt-player", {
        height: "640",
        width: "390",
        videoId: data.title,
        playerVars: {
          'playsinline': 1,
          'enablejsapi': 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    });

  } else {

    window.YT.ready(function () {
      players[1] = new window.YT.Player("yt-player", {
        height: "390",
        width: "640",
        videoId: data.title,
        playerVars: {
          'playsinline': 1,
          'enablejsapi': 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    var videoStatuses = Object.entries(window.YT.PlayerState)
    console.log(videoStatuses.find(status => status[1] === event.data)[0])
  }
}
function stopYT() {
  /* $('.yt_player').each(function () {
    this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  }); */
  let modal = document.getElementById('modal')
  let yt_player = document.getElementById('yt-player');

  modal.removeChild(yt_player);

  $('.yt-player').hide();
}

$('.modal-header').empty();

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal, type, data) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

  lastModal =[modal, type, data]

// let savedModal = JSON.parse(localStorage.getItem("last-modal"));

  //let modal = document.getElementById('modal');
  let modal_body = document.getElementById('modal-body');

  /* Preferred Style */
  let UI = localStorage.getItem('saved-UI')
  //container border radius
    let c_b_r = '1em'

  if (UI == 'android'){
    
    c_b_r = '1em'

  } else if (UI == 'metro'){
    
    c_b_r = '0em'

  } else if (UI == 'apple'){
    
    c_b_r = '0.5em'
  } else if (UI == '' || UI == null){
    
    c_b_r = '1em'
  } 

  if (type == 'pdf') {

    document.getElementById('modal').style.cssText = "width: 680px; height: 95%; max-height: 95%; object-fit: cover; border-radius: 1rem;"

    let iframe = document.getElementById('iframe');
    iframe.style.cssText = 'width: 100%; height:100%'
    iframe.src = data;

    $('.credit-container').hide();
    $('.iframe').show();

    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.btnConfirmModal').hide();
  } else if (type == 'message') {
    document.getElementById('modal').style.cssText = `width: 300px; height: auto; max-height: 95%; object-fit: cover; border-radius: ${c_b_r};`

    $('.iframe').hide();
    $('.modal-header').show();
    $('.modal-body').show();

    if (data.contentType == 'metro'){
      $('.modal-body').html(data.content[0]);

      $('.modal-body-1').show();
      document.getElementById('modal-body-1').style.cssText = data.contentStyle[1]
      $('.modal-body-1').html(data.content[1]);

      $('.modal-body-2').show();
      document.getElementById('modal-body-2').style.cssText = data.contentStyle[2]
      $('.modal-body-2').html(data.content[2]);
    } else {
      $('.modal-body-1').hide();
      $('.modal-body-2').hide();
      $('.modal-body').html(data.content[0]);
    }
  
    $('.contact-container').hide();
    $('.credit-container').hide();

    $('.modal-header').text('Info');
    
    $('.btnConfirmModal').show();
    $('#modalYes').show();
    $('#modalCancel').show();
    $('.motto').show();
  } else if (type == 'contact') {
    document.getElementById('modal').style.cssText = `width: auto; height: auto; max-height: 95%; object-fit: contain; padding: 5%; border-radius: ${c_b_r};`

    $('.iframe').hide();

    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.btnConfirmModal').hide();
    $('#modalYes').hide();
    $('#modalCancel').hide();
    $('.credit-container').hide();
    $('.contact-container').show();
  } else if (type == 'credit') {
    document.getElementById('modal').style.cssText = `width: auto; height: auto; max-height: 95%; object-fit: contain; padding: 3%; border-radius: ${c_b_r};`

    $('.iframe').hide();

    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.btnConfirmModal').hide();
    $('#modalYes').hide();
    $('#modalCancel').hide();

    $('.contact-container').hide();
    $('.credit-container').show();

  } else if (type == 'alert') {
    document.getElementById('modal').style.cssText = `width: 300px; height: auto; max-height: 95%; object-fit: cover; border-radius: ${c_b_r};`

    $('.iframe').hide();
    $('.modal-header').show();
    $('.modal-body').show();
    $('.credit-container').hide();
    $('.modal-header').text('Alert!');
    $('.modal-body').text(data);
    $('.btnConfirmModal').hide();
    $('#modalYes').hide();
    $('#modalCancel').hide();
    $('.motto').show();

  } else if (type == 'settings') {
    document.getElementById('modal').style.cssText = `width: 300px; height: auto; max-height: 95%; object-fit: cover; border-radius: ${c_b_r};`

    $('.iframe').hide();
    $('.modal-header').show();
    $('.modal-body').hide();
    $('.credit-container').hide();
    $('.modal-header').text('Settings');
    $('.settings-container').show();
    $('.btnConfirmModal').show();
    $('#modalYes').show();
    $('#modalCancel').show();
    $('.motto').show();
  } else if (type == 'video') {
    $('.iframe').hide();
    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.settings-container').hide();
    $('.credit-container').hide();
    $('.btnConfirmModal').hide();

    if (data.docType == 'yt') {

      let modal = document.getElementById('modal')

      modal.style.cssText = `width: auto; max-width: 95%; height: auto; max-height: 95%; background-color: rgba(255,255,255,0.5); object-fit: contain; border-radius: auto;`

      let yt_player = document.createElement('div');
      yt_player.setAttribute('id', 'yt-player');

      let yt_loader_img = document.createElement('img');
      yt_loader_img.setAttribute('id', 'yt-loader-img');
      yt_loader_img.setAttribute('src', 'assets/img/load_wait_process.gif');
      yt_loader_img.style.cssText = 'height: 200px; width: auto; border-radius: 50%;'

      yt_player.appendChild(yt_loader_img);
      modal.appendChild(yt_player);

      //  $('.yt-player').show();

      $(document).ready(function () {
        $.getScript("https://www.youtube.com/iframe_api", function () {

          document.getElementById('modal').style.cssText = `width: auto; max-width: 95%; height: auto; max-height: 95%; background-color: white; object-fit: contain; border-radius: ${c_b_r};`

          loadVideo(data);
        });
      });

    } else {

      var video = document.getElementById('main-video');

      $('#main-video').show();

      //video.style.width = '100%'
      //video.style.height = '100%'

      if (data.orientation == 'portrait') {
        document.getElementById('modal').style.cssText = `width: auto; max-width: 95%; height: 95%; object-fit: contain; border-radius: ${c_b_r};`
        video.style.height = '100%'
      } else {
        document.getElementById('modal').style.cssText = `width: 95%; max-width: 95%; height: auto; max-height: 95%; object-fit: contain; border-radius: ${c_b_r};`
        video.style.width = '100%'
      }

      video.style.position = 'relative';
      var source = document.createElement('source');

      var fileExt = data.imgURL.split('.').pop();

      let url = data.imgURL.replace(fileExt, 'mp4')

      source.setAttribute('id', 'main-source');
      source.setAttribute('src', url);
      source.setAttribute('type', 'video/mp4');

      video.appendChild(source);
      video.play();
    }
  } else if (type == 'site') {
    $('.credit-container').hide();
    document.getElementById('modal').style.cssText = `width: 680px; height: 95%; max-height: 95%; object-fit: cover; border-radius: ${c_b_r};`

    let iframe = document.getElementById('iframe');
    iframe.style.cssText = 'width: 100%; height:100%'

      var xhr = $.get(data.title);
      // TODO:   
      xhr.always(function () {
        var frameOption = xhr.getResponseHeader("x-frame-options");
        if (frameOption == "DENY") {
          window.open(data.title, '_blank').focus();
        } else {
          iframe.src = data.title;
        }
      });

    $('.iframe').show();

    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.btnConfirmModal').hide();
  } else if (type == 'tile') {

    $('.iframe').hide();
    $('.modal-header').hide();
    $('.modal-body').hide();
    $('.settings-container').hide();
    $('.credit-container').hide();
    $('.btnConfirmModal').hide();

    document.getElementById('modal').style.cssText = `width: 95%; max-width: 95%; height: auto; max-height: 95%; object-fit: contain; border-radius: ${c_b_r};`

    var video = document.getElementById('main-video');

    $('#main-video').show();

    video.style.width = '100%';
    video.style.height = 'auto';

    /* if (data.orientation == 'portrait') {
      document.getElementById('modal').style.cssText = "width: auto; max-width: 95%; height: 95%; object-fit: contain; border-radius: 1rem;"
      video.style.height = '100%'
    } else {
      document.getElementById('modal').style.cssText = "width: 95%; max-width: 95%; height: auto; max-height: 95%; object-fit: contain; border-radius: 1rem;"
      video.style.width = '100%'
    } */

    video.style.position = 'relative';
    var source = document.createElement('source');

    let url = data.content[0]

    source.setAttribute('id', 'main-source');
    source.setAttribute('src', url);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.play();
  } else if (type == 'linq2') {

    $('.iframe').hide();

    $('.modal-header').show();
    $('.modal-header').text('LinqTu');

    $('.modal-body').show();
    $('.settings-container').hide();
    $('.credit-container').hide();
    $('.btnConfirmModal').hide();

    modal.style.cssText = `width: 680px; height: auto; max-height: 95%; object-fit: contain; border-radius: ${c_b_r};`  
  }
}
// TODO: Design this better
$('#modalYes').click(function () {

  if ($('.modal-body').is(":visible")) {

    openModal(modal, 'contact', '')

  } else if ($('.settings-container').is(":visible")) {

    openModalButtons.forEach(button => {
      const modal = document.querySelector(button.dataset.modalTarget)
      modalYes('yes', 'settings', '')
    });

  } else if ($('.contact-container').is(":visible")) {
    openModalButtons.forEach(button => {
      const modal = document.querySelector(button.dataset.modalTarget)
      modalYes('yes', 'contact', '')
      document.getElementById('contact-form').reset();
      document.getElementById('contact-name').focus();
    });
  }
})

//TODO: Move to openModal & refined
function openImgModal(modal, orientation, url) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

  $('.modal-header').hide();
  $('.modal-body').hide();
  $('.btnConfirmModal').hide();

  $('.credit-container').hide();

  let modal_ = document.getElementById('modal');

  if (orientation == 'portrait') {
    modal_.style.cssText = "content: url(" + url + "); width: auto; height: 95%; max-height: 95%; object-fit: contain; border-radius: 3rem;"
  } else {
    modal_.style.cssText = "content: url(" + url + "); width: auto; height: auto; max-height: 90%; object-fit: contain; border-radius: 3rem"
  }
}

// TODO: Move to Firestore
function delCommentModal(modal, postId, commentsCount, commentId, commentType, authorId) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

  $('.modal-header').show();
  $('.modal-header').text('Act');
  $('.modal-body').show();
  $('.modal-body').text('Delete This?');
  $('.btnConfirmModal').show();

  $('#modalYes').click(function () {
    if (commentType == 'comment') {
      unCommentPost(postId, commentsCount, commentId, authorId, myId)
    } else if (commentType == 'reply') {
    }
    modalYes(commentType, '')
  });
}

// TODO: Fix
function modalYes(confirmation, type, data) {
  if (confirmation == 'yes') {
    if (type == 'settings') {
      let location_input = document.getElementById('location-input');
      if (location_input.value !== null || location_input.value != '') {
        localStorage.setItem('saved-Weather', location_input.value);

        setTimeout(function () {
          window.location.reload();
        }, 500);
      }
    } else if (type == 'contact') {
      $('.btnConfirmModal').hide();
      $('.modal-header').hide();
      $('.modal-body').hide();
      $('.contact-container').show();
    }

  } else {
    closeModal(modal)
  }
}

function closeModal(modal) {
  if (modal == null) return
  /*Reset*/
  $('.modal-header').hide();
  $('.modal-body').empty();
  $('.modal-body-1').empty();
  $('.modal-body-2').empty();
  //$('#linq-linq-container').empty();
  $('.contact-container').hide();
  $('.settings-container').hide();
  $('#linq-linq-container').empty();
  $('.credit-container').hide();
  $('.motto').hide();

  //let storingModal = localStorage.setItem("last-modal", JSON.stringify(lastModal));

  $('.iframe').hide();
  document.getElementById('iframe').src = '';

  modal.classList.remove('active')
  overlay.classList.remove('active')

  document.getElementById('modal').style.cssText = "width: auto; max-width: 95%; height: auto; max-height: 95%; background-color: white; object-fit: contain; border-radius: 1rem;"

  stopVideo();
  stopYT();
}

const cvSliderDataImgCount =

{
  ex: '9',
  art: '7',
  fit: '10',
  p2p: '6',
  sci: '5',
  so: '9',
  vol: '10',
  wrk: '12'
}

const cvActivityTypeData = [
  //id nomenclature to be updated
  {
    id: '0',
    activityTitle: 'Extra',
    activityType: 'Ex',
    imgURL: 'linq/img/linq/Linq_Logo_Blue_1.png',
    optionPosition: 0
  },

  {
    id: '1',
    activityType: 'Art',
    activityTitle: 'Art',
    imgURL: 'linq/img/linq/Linq_Logo_Green_1.png',
    optionPosition: 1
  },

  {
    id: '2',
    activityType: 'Fit',
    activityTitle: 'Fitness',
    imgURL: 'linq/img/linq/Linq_Logo_Orange_1.png',
    optionPosition: 2
  },

  {
    id: '3',
    activityType: 'P2P',
    activityTitle: 'P2P',
    imgURL: 'linq/img/linq/Linq_Logo_Red_1.png',
    optionPosition: 3
  },

  {
    id: '4',
    activityType: 'Sci',
    activityTitle: 'Science',
    imgURL: 'linq/img/linq/Linq_Logo_Pink_1.png',
    optionPosition: 4
  },

  {
    id: '5',
    activityType: 'Wrk',
    activityTitle: 'Work',
    imgURL: 'linq/img/linq/Linq_Logo_Purple_1.png',
    optionPosition: 5
  },

  {
    id: '6',
    activityType: 'Vol',
    activityTitle: 'Volunteering',
    imgURL: 'linq/img/linq/Linq_Logo_Grey_0.png',
    optionPosition: 6
  },

  {
    id: '7',
    activityType: 'So',
    activityTitle: 'Social',
    imgURL: 'linq/img/linq/Linq_Logo_White_1.png',
    optionPosition: 7
  }
]

function generateCV(saved_UI) {

  /* Preferred Style */
  let UI = 'android'
  //_item_container radius
    let i_c_r = '1em'

  if (saved_UI == 'android'){
    UI = saved_UI;
    i_c_r = '1em'

  } else if (saved_UI == 'metro'){
    UI = saved_UI;
    i_c_r = '0em'

  } else if (saved_UI == 'apple'){
    UI = saved_UI;
    i_c_r = '0.5em'
  }

  const cv_container = document.getElementById('cv-container');
  cv_container.style.display = 'block';

  let cv_background = document.createElement('img');
  cv_background.classList.add('cv-background');
  cv_background.src = 'assets/img/cv/cv-background.png';
  //cv_background.style.cssText = 'display: block: posistion: relative; width: 100%; justify-content: center; align-items: center; margin-top: 15%; margin: 0; scale: 0.65; '

  let cv_linq_btn = document.getElementById('cv-linq-btn');
  let cv_back_btn = document.getElementById('cv-left-arrow-circle');
  let cv_title = document.getElementById('cv-title');
  let cv_text_btn = document.createElement('div');
  cv_text_btn.classList.add('cv-title-text');
  cv_text_btn.setAttribute('id', 'cv-title-text')
  
  cv_title.style.borderRadius = i_c_r;
  cv_text_btn.style.borderRadius = i_c_r;

  cv_text_btn.innerText = 'CV';
  cv_title.appendChild(cv_text_btn);

  if ($('.cv-flow-container').is(":visible")) {
    $('.cv-title-text').hide();
    cv_background.style.display = 'none';
  }

  cv_text_btn.addEventListener("click", function () {

    if ($('.activity-option-container').is(":visible")) {

      $('.activity-option-container').hide();

      cv_background.style.cssText = 'display: none';

      generateCV_Filters(saved_UI, cvFlowData, cvFlowFilters);

      generateCV_Flow(saved_UI, cvFlowData);
    } else {
      cv_background.style.cssText = 'display: none';

      generateCV_Filters(saved_UI, cvFlowData, cvFlowFilters);

      generateCV_Flow(saved_UI, cvFlowData);
    }
  });

  cv_back_btn.addEventListener("click", function () {

    if ($('.cv-flow-container').is(":visible")) {
      $('.cv-filters-container').hide();
      cv_text_btn.style.display = 'block'
      cv_text_btn.innerText = 'CV'
      cv_title.appendChild(cv_text_btn)
      $('.cv-flow-container').empty();
      $('.cv-flow-container').hide();
      $('.activity-option-container').hide();
      cv_background.style.display = 'block';
    } else if ($('.activity-option-container').is(":visible")) {
      $('.activity-option-container').empty();
      $('.activity-option-container').hide();
      cv_background.style.display = 'block';
    } else {
      $('.banner').hide();
      $('.cv-flow-container').hide();
      $('.activity-option-container').hide();
      $('.cv-container').hide();

      //cv_title.removeChild(cv_text_btn);      
      //$('.metro').show();
      location.reload();
    }
  });

  cv_linq_btn.addEventListener("click", function () {
    cv_background.style.cssText = 'display: none';

    if ($('.activity-option-container').is(":visible")) {
      $('.activity-option-container').empty();
      $('.activity-option-container').hide();
      cv_background.style.display = 'block';
    } else if ($('.cv-flow-container').is(":visible")) {
      $('.cv-flow-container').hide();
      $('.activity-option-container').show();
      $('.cv-filters-container').hide();
      cv_text_btn.style.display = 'block'
      cv_text_btn.innerText = 'CV'
      cv_title.appendChild(cv_text_btn)
      //cv_background.style.display = 'block';
      generateActivityOption(cvActivityTypeData);
    } else {
      cv_background.style.cssText = 'display: none';
      $('.activity-option-container').show();
      generateActivityOption(cvActivityTypeData);
    }
  });

  cv_container.appendChild(cv_background);

  //generateSlider(cvSliderData_Ex, 'ex');
}

function generateSlider(cv_slider_data, cv_activity) {

  let cv_container = document.getElementById('cv-container');

  let slider_container = document.createElement('div');
  slider_container.classList.add('banner');

  //let cv_slider = document.createElement('div');
  let cv_slider = document.getElementById('slider');
  //cv_slider.classList.add('slider');

  if (cv_activity == 'so') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.so;
  } else if (cv_activity == 'ex') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.ex;
  } else if (cv_activity == 'fit') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.fit;
  } else if (cv_activity == 'art') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.art;
  } else if (cv_activity == 'sci') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.sci;
  } else if (cv_activity == 'vol') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.vol;
  } else if (cv_activity == 'wrk') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.wrk;
  } else if (cv_activity == 'p2p') {
    cv_slider.style.cssText = '--quantity: ' + cvSliderDataImgCount.p2p;
  }

  //let slider_items_quantity = 10;

  let items = [];

  //for (var i = 0; i < slider_items_quantity; i++) {
  cv_slider_data.forEach((slider_data) => {

    generateSliderItem(slider_data, cv_slider);

    // slider_container.appendChild(cv_slider)
    //  console.log(cv_slider)
  });
  //    items.push(cv_slider)
  //}
  //cv_container.appendChild(slider_container);
}

function generateSliderItem(slider_data, cv_slider) {

  let slider_item = document.createElement('div');
  slider_item.classList.add('item');

  slider_item.innerHTML = " ";
  slider_item.style.cssText = '--position: ' + slider_data.sliderPosition;
  //slider_item.innerHTML = '"<img src="' + slider_data.imgURL +'"'+ ' alt="">'

  const slider_item_img = document.createElement('img');
  slider_item_img.classList.add('img');
  slider_item_img.src = slider_data.imgURL;

  slider_item.appendChild(slider_item_img)
  cv_slider.appendChild(slider_item)
  //console.log(slider_item.innerHTML)
  slider_item.onclick = event => {

    openModalButtons.forEach(button => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openImgModal(modal, 'lanscape', slider_data.imgURL)
    })

  };
}

function generateActivityOption(cv_activity_type_data) {

  $('.banner').hide();

  let activityOptionContainer = document.getElementById('activity-option-container');
  activityOptionContainer.style.display = 'flex';

  let activityIcons = document.createElement('div');
  activityIcons.classList.add('cv-activity-icons');

  let activityCenterImg = document.createElement('img');
  activityCenterImg.classList.add('activity-center-img');
  activityCenterImg.src = 'assets/img/cv/social/17426346_10154580078977266_3108030594434772733_n_10154580078977266.jpg'

  cv_activity_type_data.forEach((activity_type_data) => {

    generateActivityType(activity_type_data, activityIcons)
  })

  activityOptionContainer.appendChild(activityCenterImg);
  activityOptionContainer.appendChild(activityIcons);
}

function generateActivityType(type_data, type_icons) {

  let activityTypeContainer = document.createElement('div');
  activityTypeContainer.classList.add('cv-activity-type-container');
  activityTypeContainer.style.cssText = '--i:' + type_data.optionPosition

  let activityType = document.createElement('div');
  activityType.classList.add('cv-activity-type');
  //activityType.style.cssText = '--i:'+type_data.optionPosition

  let activityTypeTitle = document.createElement('div');
  activityTypeTitle.classList.add('activity-type-title');
  activityTypeTitle.innerText = type_data.activityTitle;

  let activityTypeImg = document.createElement('img');
  activityTypeImg.classList.add('activity-type-img');

  if (type_data.imgURL == 'linq/img/linq/Linq_Logo_White_1.png') {
    activityTypeImg.style.cssText = '-webkit-filter: drop-shadow(12px 12px 10px green);'
    activityTypeImg.src = type_data.imgURL
  } else {
    activityTypeImg.src = type_data.imgURL
  }

  activityTypeContainer.addEventListener("click", function () {
    $('.cv-background').show();
    $('.banner').show();
    $('.activity-option-container').empty();
    $('.activity-option-container').hide();

    if (type_data.activityType == 'Vol') {
      generateSlider(cvSliderData_Vol, 'vol');

    } else if (type_data.activityType == 'Ex') {
      generateSlider(cvSliderData_Ex, 'ex');

    } else if (type_data.activityType == 'Art') {
      generateSlider(cvSliderData_Art, 'art');

    } else if (type_data.activityType == 'So') {
      generateSlider(cvSliderData_So, 'so');

    } else if (type_data.activityType == 'Fit') {
      generateSlider(cvSliderData_Fit, 'fit');

    } else if (type_data.activityType == 'P2P') {
      generateSlider(cvSliderData_P2P, 'p2p');

    } else if (type_data.activityType == 'Wrk') {
      generateSlider(cvSliderData_Wrk, 'wrk');

    } else if (type_data.activityType == 'Sci') {
      generateSlider(cvSliderData_Sci, 'sci');
    }
  });

  activityType.appendChild(activityTypeImg)
  activityTypeContainer.appendChild(activityType)
  activityTypeContainer.appendChild(activityTypeTitle)
  type_icons.appendChild(activityTypeContainer)
}

//TODO: Reading files from local
// relative path to the desired directory
const directory = "assets/img/cv";

//selector for the relevant links in the directory's index page
const selector = "LINK SELECTOR";

//const request = new XMLHttpRequest();
//request.open("GET", directory, true);
//console.log(request.responseXML)

//request.send();

function sendContactMessage(name, email, subject, message) {
  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send('default_service', 'default_template', templateParams).then(
    (response) => {
      $('.contact-container').hide();

      let alert = 'Your message was sent successfully 🙂'

      openModal(modal, 'alert', alert)

      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

}

$('#contact-message-submit').click(function () {
  let name = document.getElementById('contact-name').value;
  let email = document.getElementById('contact-email').value;
  let subject = document.getElementById('contact-subject').value;
  let message = document.getElementById('contact-message').value;

  if (name !== '' && email !== '' && subject !== '' && message !== '') {
    sendContactMessage(name, email, subject, message);
  } else {
    let alert = 'Please Fill in The All Fields❗️'
    openModal(modal, 'alert', alert)
  }
});

let previous_filter = 0;

function generateCV_Filters(saved_UI, cv_flow_data, cv_filters_data) {

  let cv_flow_top = document.getElementById('cv-title');
  cv_flow_top.innerText = '';
  cv_flow_top.style.cssText = 'border: none; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none'
  let cv_filters_container = document.createElement('div');
  cv_filters_container.classList.add('cv-filters-container');
  cv_filters_container.style.cssText = 'display: flex; justify-content: space-between'

  /* Preferred Style */
  let UI = 'android'
  //cv_flow_item_container radius
    let cv_f_i_c_r = '1em'

  if (saved_UI == 'android'){
    UI = saved_UI;
    cv_f_i_c_r = '1em'

  } else if (saved_UI == 'metro'){
    UI = saved_UI;
cv_f_i_c_r = '0em'

  } else if (saved_UI == 'apple'){
    UI = saved_UI;
    cv_f_i_c_r = '0.5em'
  }

  cv_filters_data.forEach((cv_filter_data, index) => {

    let cv_filter = document.createElement('div');
    cv_filter.classList.add('cv-filter');
    cv_filter.style.cssText = `white-space: nowrap; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${cv_f_i_c_r}`

    cv_filter.innerText = cv_filter_data.title

    if (index == 0) {
      cv_filter.style.cssText = `color: green; background-color: white; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${cv_f_i_c_r}`
    }

    cv_filter.addEventListener("click", () => {
      //cv_filter.click();
      unselectFilter(saved_UI, previous_filter).then(selectFilter(saved_UI, cv_flow_data, cv_filter_data, cv_filter, index))
    });

    cv_filter.addEventListener("mouseenter", (event) => {
      let allFilters = document.querySelectorAll('.cv-filter');

      if (cv_filter != allFilters[previous_filter]) {
        cv_filter.style.cssText = `white-space: nowrap; color: green; background-color: white; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${cv_f_i_c_r}`
      }      
    });

    cv_filter.addEventListener("mouseleave", (event) => {    
      let allFilters = document.querySelectorAll('.cv-filter');

      if (cv_filter != allFilters[previous_filter]) {
        cv_filter.style.cssText = `white-space: nowrap; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${cv_f_i_c_r}`
      }    
    });

    cv_filters_container.appendChild(cv_filter);
  });

  cv_flow_top.appendChild(cv_filters_container);
}

function filterData(saved_UI, cv_flow_data, cv_filter_data) {

  let filtered_by = [];

  if (cv_filter_data.title == 'LinqLab™') {
    filtered_by.push('lab')
  } else if (cv_filter_data.title == '3D Printing') {
    filtered_by.push('3d')
  } else if (cv_filter_data.title == 'Dev') {
    filtered_by.push('development')
  } else if (cv_filter_data.title == '🇪🇺 CC') {
    filtered_by.push('cc')
  } else if (cv_filter_data.title == '🇺🇳 UN') {
    filtered_by.push('un')
  } else {
    filtered_by.push((cv_filter_data.title).toLowerCase())
  }

  const filtered = [];
  function filtering_cv(filters) {

    filters.forEach(filterValue => {
      filtered.push(...cvFlowData.filter(val => val.tags.includes(filterValue)));
    });
    // console.log(filtered);
  };

  filtering_cv(filtered_by);

  if (cv_filter_data.title == 'All') {
    generateCV_Flow(saved_UI, cv_flow_data);
  } else {
    generateCV_Flow(saved_UI, filtered);
    //    console.log(filtered)
  }
}

function selectFilter(saved_UI, cv_flow_data, cv_filter_data, cv_filter, next_filter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

       /* Preferred Style */
  let UI = 'android'
  //filter_item_container radius
    let f_i_c_r = '1em'

  if (saved_UI == 'android'){
    UI = saved_UI;
    f_i_c_r = '1em'

  } else if (saved_UI == 'metro'){
    UI = saved_UI;
f_i_c_r = '0em'

  } else if (saved_UI == 'apple'){
    UI = saved_UI;
    f_i_c_r = '0.5em'
  }

      cv_filter.style.cssText = `white-space: nowrap; color: green; background-color: white; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${f_i_c_r}`

      filterData(saved_UI, cv_flow_data, cv_filter_data)

      const err = false;
      if (!err) {
        previous_filter = next_filter;

        //$("#cv-flow-container").load(location.href + " #cv-flow-container");
        resolve();
      } else {
        reject();
      }
    }, 50)
  });
}
function unselectFilter(saved_UI, previous_filter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      /* Preferred Style */
  let UI = 'android'
  //filter_item_container radius
    let f_i_c_r = '1em'

  if (saved_UI == 'android'){
    UI = saved_UI;
    cv_f_i_c_r = '1em'

  } else if (saved_UI == 'metro'){
    UI = saved_UI;
f_i_c_r = '0em'

  } else if (saved_UI == 'apple'){
    UI = saved_UI;
    f_i_c_r = '0.5em'
  }

      let allFilters = document.querySelectorAll('.cv-filter');
      allFilters[previous_filter].style.cssText = `white-space: nowrap; border: 2px solid green; margin-right: 1%; padding-top: 0.75%; padding-bottom: 0.25%; padding-left: 2%; padding-right: 2%; border-radius: ${f_i_c_r}`
      const err = false;
      if (!err) {
        $('#cv-flow-container').empty();
        resolve();
      } else {
        reject();
      }
    }, 25)
  });
}

//TODO: Refresh cv flow 
function refreshFilter(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let allFilters = document.querySelectorAll('.cv-filter');
      //allFilters[index].click();
      const err = false;
      if (!err) {
        //$("#cv-flow-container").load(location.href + " #cv-flow-container");
        resolve();
      } else {
        reject();
      }
    }, 1500)
  });
}

function generateCV_Flow(saved_UI, cv_flow_items_data) {
  $('.banner').hide();

  let cv_flow_container = document.getElementById('cv-flow-container');
  cv_flow_container.style.cssText = 'display: flex; height: 85%; width: 100%; flex-direction: row; flex-wrap: wrap; padding-left: 1%; overflow-y: scroll'
  
  /* Preferred Style */
  let UI = 'android'
  //cv_flow_item_container radius
    let cv_f_i_c_r = '1em'

  if (saved_UI == 'android'){
    UI = saved_UI;
    cv_f_i_c_r = '1em'

  } else if (saved_UI == 'metro'){
    UI = saved_UI;
cv_f_i_c_r = '0em'

  } else if (saved_UI == 'apple'){
    UI = saved_UI;
    cv_f_i_c_r = '0.5em'
  }
  
  cv_flow_items_data.forEach((cv_flow_item_data) => {

    let cv_flow_item_container = document.createElement('div');
    cv_flow_item_container.classList.add('cv-flow-item-container');

    //TODO: Add Linq Button
    /* let cv_flow_item_linq = document.createElement('img');
    cv_flow_item_linq.classList.add('cv-flow-item-linq');
    cv_flow_item_linq.style.cssText = 'position: absolute; transform: translateX(50%); width: 38px;';
    cv_flow_item_linq.src = 'assets/linqs/Linq_Logo_Green_1.png'; */

    let cv_flow_item_img = document.createElement('img');
    cv_flow_item_img.classList.add('cv-flow-item-img');

    cv_flow_item_img.src = cv_flow_item_data.imgURL
    let img_orientation;

    if (cv_flow_item_img.height > cv_flow_item_img.width) {
      img_orientation = 'portrait'
    } else {
      img_orientation = 'lanscape'
    }

    let ratio_img_container = 300 / 200
    let ratio_img = cv_flow_item_img.height / cv_flow_item_img.width

    if (cv_flow_item_img.height > cv_flow_item_img.width) {

      if (ratio_img_container <= ratio_img) {
        cv_flow_item_container.style.cssText = `height: 300px; width:200px; border: 2px solid green; margin: 1%;  border-radius: ${cv_f_i_c_r}; overflow: hidden; z-index: 100; cursor: pointer;`
      
        cv_flow_item_img.style.cssText = 'height: auto; width: 100%; object-fit: cover'
        cv_flow_item_container.appendChild(cv_flow_item_img)
      } else {
        cv_flow_item_container.style.cssText = `height: 300px; width:200px; border: 2px solid green; margin: 1%;  border-radius: ${cv_f_i_c_r}; overflow: hidden; z-index: 100; cursor: pointer;`
        cv_flow_item_img.style.cssText = 'height: 100%; width: auto; object-fit: cover'
        
      //  cv_flow_item_container.appendChild(cv_flow_item_linq)
        cv_flow_item_container.appendChild(cv_flow_item_img)
      }

    } else {
      cv_flow_item_container.style.cssText = `height: 200px; width: 300px; border: 2px solid green; margin: 1%;  border-radius: ${cv_f_i_c_r}; overflow: hidden; z-index: 100; cursor: pointer;`

      cv_flow_item_img.style.cssText = 'height: 100%; width: 100%; object-fit: cover'
      
    //  cv_flow_item_container.appendChild(cv_flow_item_linq)
      cv_flow_item_container.appendChild(cv_flow_item_img)      
    }
    //cv_flow_item_container.appendChild(cv_flow_item_img)

    cv_flow_item_container.addEventListener("mouseenter", (event) => {
      cv_flow_item_container.style.transform = 'scale(1.05)';
    });

    cv_flow_item_container.addEventListener("mouseleave", (event) => {
      cv_flow_item_container.style.transform = 'scale(1)';
    });

    cv_flow_item_container.addEventListener("click", () => {

      if (cv_flow_item_data.docType == 'pdf') {

        let url = cv_flow_item_data.imgURL.replace('png', 'pdf')

        openModal(modal, 'pdf', url)

      } else if (cv_flow_item_data.docType == 'mp4') {

        openModal(modal, 'video', cv_flow_item_data)

      } else if (cv_flow_item_data.docType == 'yt') {

        openModal(modal, 'video', cv_flow_item_data)

      } else if (cv_flow_item_data.docType == 'link') {

        openModal(modal, 'site', cv_flow_item_data)

      } else {

        openModalButtons.forEach(button => {
          const modal = document.querySelector(button.dataset.modalTarget)
          openImgModal(modal, img_orientation, cv_flow_item_data.imgURL)
        })

      }
    });

    if (cv_flow_item_data.docType == 'mp4' || cv_flow_item_data.docType == 'yt') {
      
      cv_flow_item_container.style.border = '4px solid green'

      // Border fade animation
      cv_flow_item_container.animate([
        { borderColor: "green", offset: 0 },
        { borderColor: "white", offset: 0.5 },
        { borderColor: "green", offset: 1 },
      ], {
        duration: 2000,
        'animation-timing-function': 'linear',
        iterations: Infinity,
      })

      cv_flow_container.appendChild(cv_flow_item_container);
    };
    cv_flow_container.appendChild(cv_flow_item_container);
//    $(".cv-flow-item-container").load(location.href + " .cv-flow-item-container");
  });
}

function stopVideo() {
  let videos = document.getElementsByTagName('video');
  for (let vid in videos) {
    if (typeof videos[vid] == 'object') {
      let srcs = videos[vid].getElementsByTagName('source');
      videos[vid].pause();
      for (let xsrc in srcs) {
        if (srcs[xsrc].src !== undefined) {
          srcs[xsrc].src = '';
        }
      }
      videos[vid].load();
      //videos[vid].parentNode.removeChild(videos[vid]);
    }
  }
}