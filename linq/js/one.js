window.onload = function () {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      getLinqInfo(myId);
  getFlowTop();
  getConversations();

  if (currentView == 'editMyLinq') {

    $('.my-linq').show();
    $(".my_linq_display").hide();
    $(".linq_container").hide();
    $(".my_linq_edit").show();
    $(".flow-top-container").hide();
    public_posts_container.style.cssText = 'display: none';

  } else if (currentView == 'myLinq') {

    $('.my-linq').show();
    $(".my_linq_edit").hide();
    $(".my_linq_display").show();
    $('.flow-content').show();
    $('.flow-content').css('margin-top', '35px');
    $(".flow-top-container").hide();
    my_linq_posts_list.style.cssText = 'display: block';
    $('.my-linq-posts-container').show();
    //$('.my-linq-posts-grid').show();
    $('.my-linq-posts-list').css('margin-top', '35px');

    generateMyLinqPosts_Filters(myId)
    generatePosts(myId, 'myLinq', my_linq_posts_list);

  } else if (currentView == 'linqFlow') {

    $('.flow-content').show();
    $('.flow-content').css('margin-top', '120px');

    generatePosts('', 'linqFlow', public_posts_container);

    $('.flow-top-container').show();
    public_posts_container.style.cssText = 'display: block';

  } else if (currentView == 'linqChat') {

    $('.flow-content').show();
    $('.flow-top-container').hide();
    public_posts_container.style.cssText = 'display: none';
    $('.conversations-container').show();

  } else if (currentView == 'messaging') {

    $('.flow-content').show();
    $('.flow-top-container').hide();
    public_posts_container.style.cssText = 'display: none';
    $('.conversations-container').hide();
    $('.chat-container').show();

    document.getElementById("img_side_nav").src = "../linq/img/icons/menu_back_green.png";
    generateChat('User', 'zsirTZsZxqfEgdxxngpt')
  } else if (currentView == 'linqLinq') {

    $('.flow-content').show();
    $('.flow-top-container').hide();
    public_posts_container.style.cssText = 'display: none';
    $('.conversations-container').hide();
    $('.chat-container').hide();
    $('.linqs-container').show();

    getLinqs();
  } else if (currentView == 'linqCal') {

    $('.flow-content').show();
    $('.flow-top-container').hide();
    $('.flow-content').css('margin-top', '120px');

    public_posts_container.style.cssText = 'display: none';
    $('.conversations-container').hide();
    $('.calendar-container').show();

  }
  //generateLinqPost();
  getProfile(myId);
  //getPost(postId);  

  $('.side_nav').show();

  //document.getElementById('weather_input').value = 'Drummondville';

  // When the internet is on
  addEventListener('online', function () {
    location.reload();

    // $('#weather_submit').click();
  });

  getWeather();

  if (Notification.permission === 'granted') {
    //do something
  } else if (Notification.permission === 'default') {
    Notification.requestPermission().then(function (status) {
      if (status === 'denied') {
        //do something
      } else if (status === 'granted') {
        //do something
      }
    })
  }
    } else {
      // No user is signed in.
      window.location.href = '../linq/in.html'
    }
  });  
};

// Initialize Firebase variables
//const auth = firebase.auth()
//const database = firebase.database()

//Global variables
let myId = localStorage.getItem('temp_userId');
let currentView = localStorage.getItem('currentView');
let flavorId;

var email;
var username;
var firstname;
var middlename;
var lastname;
var bio;
// var gsURL = '';
// var photoURL = '';
// let linqPhotoURL = '';

let descItemId = '';
let interestItemId = '';

// Saving & Upload variables
let fileToUpload = '';

// More variables
let linqmain = document.getElementById("linq");
let homeSection = document.getElementsByClassName("home-section");
let flowContainer = document.getElementById('flow-containter');

let side_nav = document.getElementById("side_nav");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.getElementById("#btn");
let searchBtn = document.querySelector(".bx-search");
let linqBtn = document.querySelector(".bx-user");
let chatBtn = document.getElementById(".bx-chat");

let flowContent = document.getElementsByClassName("flow-content");
let fileInput = document.getElementById('file-input');

var showSideBar = window.matchMedia("(max-width: 414px)");

var lastScrollTop = 0;

var postImage = document.getElementsByClassName("post-img");

// Element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if ($('.sidebar').is(":visible") || $('.chat-container').is(":visible")) {
  } else {
    if (st > lastScrollTop) {
      // downscroll code
      $('.linq').css('display', 'none');
      $('.side_nav').hide();
      //  $('.flow-top-container').hide();
    } else {

      // upscroll code
      $('.linq').css('display', 'block');
      $('.side_nav').show();
      //$('.flow-top-container').show();
      // When the internet is on
      addEventListener('online', function () {
        alert("Back online");

        $('#weather_submit').click();
      });
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

$('#btn').click(function (e) {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

$('.linq').click(function (e) {
  e.preventDefault();
  if (myId == null) {
    window.location.href = "../linq/in.html";
  } else {
    if ($('.chat-container').is(":visible")) {
      window.location.href = "../linq/call.html";
    } else if ($('.my_linq_edit').is(":visible")) {
      $(".my_linq_edit").hide();
      $(".my_linq_display").show();
      my_linq_posts_list.style.cssText = 'display: block';
      $('.my-linq-posts-list').css('margin-top', '35px');

      localStorage.setItem('currentView', 'myLinq')
    } else {
      document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";
      /*
             $(".my_linq_edit").hide();
             $(".my_linq_display").hide();
             my_linq_posts_list.style.cssText = 'display: none';
      
            $('.sidebar').hide();
            $('.side_nav').show();
            $('.story_container').show();
            $('.flow-content').show();
            $('.flow-content').css('margin-top', '120px');
            $('.flow-top-container').show();
            public_posts_container.style.cssText = 'display: block';
            $('.info_a').hide();
            $('.info_b').hide();
      
            $('.my_linq').hide();
      
            $('.linqs-container').hide();
      
            $('.conversations-container').empty();
            $('.conversations-container').hide();
      
            $('.calendar-container').hide();
            $('.calendar').hide(); 
      */
      localStorage.setItem('currentView', 'linqFlow');
      location.reload();
    }
  }
});

$('.sidebar_linq_img').click(function (e) {
  $('.sidebar').hide();
  $('.side_nav').show();

  $('.info_a').hide();
  $('.info_b').hide();

  $('.flow-content').show();
  $('.flow-content').css('margin-top', '120px');
  $('#message-form').hide();
  $('.chat-container').hide();

  public_posts_container.style.cssText = 'display: block';

  $('.conversations-container').hide();

  $('.calendar-container').hide();
  $('.calendar').hide();

  $('.linqs-container').hide();

  sidebar.classList.toggle("open");

  localStorage.setItem('currentView', 'myLinq')

  getLinqInfo(myId);
  location.reload();
});

$('.side_nav').click(function (e) {
  e.preventDefault();
  if ($('.chat-container').is(":visible")) {

    $('.chat-container').hide();
    //  document.getElementById("chat-container").replaceChildren();
    document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";
    $('.sidebar').hide();
    $('.side_nav').show();
    $('.linq').show();
    $('.conversations-container').show();
    //location.reload();
  } else if ($('.calendar').is(":visible")) {
    document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";
    $('.sidebar').hide();
    $('.side_nav').show();

    $('.info_a').hide();
    $('.info_b').hide();

    $('.flow-content').hide();
    $('.flow-content').css('margin-top', '120px');
    $('#message-form').hide();
    $('.chat-container').hide();

    $('.conversations-container').hide();
    $('.my_linq').hide();

    $('.main-container').show();
    $('.calendar-container').hide();

  } else {
    $('.side_nav').hide();
    $('.sidebar').show();
  }
});

$('.bx-user').click(function (e) {
  e.preventDefault();
  if (myId == null) {
    window.location.href = "../linq/in.html";
  } else {
    if ($('.my-linq').is(":visible")) {
      localStorage.setItem("currentView", "linqLinq")
      location.reload();
    } else {

      document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";

      $('.side_nav').show();
      $('.sidebar').hide();
      $('.linq').show();
      $('.flow-content').show();
      $('.flow-top-container').hide();
      public_posts_container.style.cssText = 'display: none';

      $('.linqs-container').show();
      $('.my-linq').hide();

      $('.linqs-container').empty();
      $('.linqs-container').show();

      $('.conversations-container').hide();
      $('.chat-container').hide();

      $('.calendar-container').hide();

      $('.side_nav').css('margin-top', '-10px');

      $('.info_a').hide();
      $('.info_b').hide();

      getLinqInfo(myId);
      getLinqs();

      localStorage.setItem("currentView", "linqLinq")
    }
  }
});

$('.user-profile').click(function (e) {
  e.preventDefault();
});

/* Chat */
$('.bx-chat').click(function (e) {
  e.preventDefault()

  if (myId == null) {
    window.location.href = "../linq/in.html";
  } else {
    $('.my-linq').hide();

      document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";

      $('.side_nav').show();
      $('.sidebar').hide();
      $('.linq').show();
      $('.flow-content').show();
      $('.flow-top-container').hide();
      public_posts_container.style.cssText = 'display: none';

      $('.linqs-container').hide();
      $('.calendar-container').hide();

      $('.side_nav').css('margin-top', '-10px');

      getConversations();

  $('.conversations-container').empty();
  $('.conversations-container').show();

  $('.chat-container').hide();

  $('.calendar-container').hide();

  $('.side_nav').css('margin-top', '-10px');

  $('.info_a').hide();
  $('.info_b').hide();

  /* var objDiv = document.getElementById("chats");
    objDiv.scrollTop = objDiv.scrollHeight; */

  localStorage.setItem("currentView", "linqChat")
    }
})

/* Calendar */
$('.bx-calendar').click(function (e) {
  $('.my_linq').hide();
  localStorage.setItem('currentView', 'linqCal')

  $('.sidebar').hide();
  $('.side_nav').show();

  $('.info_a').hide();
  $('.info_b').hide();

  $('.flow-top-container').hide();
  $('.flow-content').show();
  $('.flow-content').css('margin-top', '120px');
  public_posts_container.style.cssText = 'display: none';

  $('.linqs-container').hide();

  $('#message-form').hide();
  $('.chat-container').hide();
  $('.conversations-container').hide();

  $('.calendar-container').show();
  documentElement.getElementById('calendar-container').style.display = 'block';
  
  $('.button-activities').click();

  

  window.reload();
});

$('#bx-dev').click(function (e) {
  e.preventDefault();
  document.getElementById("img_side_nav").src = "../linq/img/icons/menu_back_green.png";
//  window.location.href = "/dev.html";
});

//TODO: Fix sign out
function linqOut() {

  auth.signOut().then(() => {
    // Sign-out successful.
    localStorage.removeItem('temp_userId');
    window.location.href = "../index.html";
    
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
}

$('.bx-log-out').click(function (e) {
  e.preventDefault();
  // From in.js  
  linqOut();
});

$('.flow-content').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();
  } else {
    // Clicked outside the box
  }
});

$('.my_linq').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();
  } else {
    // Clicked outside the box
  }
});

$('.home_background').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();
  } else {
    // Clicked outside the box
  }
});

$('#linqs_list').click(function (e) {
  e.preventDefault();

  $('#linqs_list').hide();
  $('.linq_main_container').show();

  /* if (myId == testId_a) {
    $('.linq_container').children('#5').hide();
    $('.linq_container').children('#6').show();
    $('.linq_container').children('#8').show();
    $('.linq_container').children('#9').hide();
  } else if (myId == testId_b) {
    $('.linq_container').children('#5').show();
    $('.linq_container').children('#6').hide();
    $('.linq_container').children('#8').hide();
    $('.linq_container').children('#9').show();
  } else {
    $('.linq_container').children('#7').show();
  } */
});

$('.conversations-container').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();
  } else {
    // Clicked outside the box
  }
});

$('.calendar-container').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();

  } else {
    // Clicked outside the box
  }
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }
};

function getFlowTop() {

  let flowTop_gallery = document.getElementById('flow-top-gallery');

  firestore.collection("linq-linq").doc(myId).collection("linqed")
    .get()
    .then((snapshot) => {
      //See generateChats()
      let flowItems = [];
      snapshot.docs.forEach((doc) => {
        flowItems.push({
          id: doc.id,
          ...doc.data()
        })
      });
      let flows = [];
      flowItems.forEach((flowItem) => {

        let flow_main_container = document.createElement('div');
        flow_main_container.classList.add('flow-main-container');
        let flow_img = document.createElement('img');
        flow_img.classList.add('flow-img');
        let flow_username = document.createElement('div');
        flow_username.classList.add('flow-username');
        let flow_bg = document.createElement('img');
        flow_bg.classList.add('flow-bg');

        database.ref('/profiles/' + flowItem.id).once('value').then((snapshot) => {
          let profile = snapshot.val();
          let username = snapshot.val().username;
          let tasteId = snapshot.val().linq_flavor_id

          flow_main_container.addEventListener("click", function () {
            //alert(username)
          });

          if (profile.gsURL) {
            storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
              flow_img.src = gsUrl;
            });
          } else if (profile.photoUrl) {
            flow_img.src = profile.photoUrl;
          } else if (profile.photoURL) {
            flow_img.src = profile.photoURL;
          }

          flow_username.innerText = username;

          let tasteDoc = firestore.collection('linq-flavors').doc(tasteId).get();

          tasteDoc.then((taste) => {
            storage.refFromURL(taste.data().gsURL_1).getDownloadURL().then((img) => {
              flow_bg.src = img;
            })
          })

          flow_main_container.appendChild(flow_bg);
          flow_main_container.appendChild(flow_username);
          flow_main_container.appendChild(flow_img);
          flowTop_gallery.appendChild(flow_main_container);
          flows.push(flowTop_gallery);
        });
        // document.querySelector('conversations-container').replaceChildren(...chats);
      });
    });
}

/* Add Flow */
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

let postId = '-MFI-puiKlFu0OVFNJta'
var postRef = database.ref('posts/' + postId);
var profileRef = database.ref('profiles/' + myId);
var storageRef = storage.ref();

/* Posts */

function generateLinqPost() {
  let postId = '-Mm-AhFu8TuAosbXbh8W'
  var postRef = database.ref('posts/' + postId);
  var profileRef = database.ref('profiles/' + myId);
  var storageRef = storage.ref();

  database.ref().child('posts').child(postId).get().then((snapshot) => {
    let post;
    let profile;

    post = snapshot.val();

    database.ref(profileRef).once('value').then((profile_snap) => {
      profile = profile_snap.val();
    });

    if (myId) {
      //  alert('working')
      let linq_posts_container = document.getElementById('linq_posts_container');

      let post_container = document.createElement('div');
      post_container.classList.add('post-container');
      let post_row = document.createElement('div');
      post_row.classList.add('post-row');
      let post_title_container = document.createElement('div');
      post_title_container.classList.add('post-title-container');
      let img_linq_profile = document.createElement('img');
      img_linq_profile.classList.add('img-linq-profile');
      let post_namedate_container = document.createElement('div');
      post_namedate_container.classList.add('post-namedate-container');
      let post_linq_name = document.createElement('p');
      post_linq_name.classList.add('post-linq-name');
      let post_date = document.createElement('span');
      post_date.classList.add('post-date');
      let post_menu = document.createElement('div');
      post_menu.classList.add('post-menu');

      storage.refFromURL(profile.gsURL).getDownloadURL().then((gsURL) => {
        img_linq_profile.src = gsURL;
      });

      post_linq_name.text = profile.username;
      post_date.text = post.dateCreated.toDate().toDateString();
      post_menu.innerHTML = "<i class='bx bx-dots-vertical-rounded'></i>"

      post_namedate_container.appendChild(post_date);
      post_namedate_container.appendChild(post_linq_name);
      post_title_container.appendChild(post_menu);
      post_title_container.appendChild(post_namedate_container);
      post_row.appendChild(post_title_container);
      post_container.appendChild(post_row);

      let post_text = document.createElement('p');
      post_text.classList.add('post-text');
      let post_img = document.createElement('img');
      post_img.classList.add('post-img');

      post_text = post.description;
      //post_img.src = storageRef.child('images/' + post.imageTitle)
      post_img.src = '../linq/img/others/11429711_871422166282967_2141664453_n.jpg'

      post_container.appendChild(post_img);
      post_container.appendChild(post_text);

      let post_tags_container = document.createElement('div');
      post_tags_container.classList.add('post-tags-container');
      let post_tag = document.createElement('div');
      post_tag.classList.add('post-tags-container');

      firestore.collection("post-tags").where("postId", "==", postId)
        .get()
        .then((snapshot) => {
          let tagItems = [];
          snapshot.docs.forEach((doc) => {
            tagItems.push({
              id: doc.id,
              ...doc.data()
            })
          });

          let tags = []
          tagItems.forEach((tagItem) => {

            post_tag.text = '#' + tagItem.tag
            post_tags_container.appendChild(post_tag);
            post_container.appendChild(post_tags_container);

            tags.push(post_tags_container);
          });
          document.querySelector(post_tags_container).replaceChildren(...tags);
        });

      let post_activities_container = document.createElement('div');
      post_activities_container.classList.add('post-activities-container');
      let post_like = document.createElement('div');
      post_like.classList.add('post-like');
      let post_like_count = document.createElement('div');
      post_like_count.classList.add('post-like-count');
      let post_comment = document.createElement('div');
      post_comment.classList.add('post-comment');
      let post_comment_count = document.createElement('div');
      post_comment_count.classList.add('post-comment-count');
      let post_save = document.createElement('div');
      post_save.classList.add('post-save');

      post_like.appendChild(post_like_count);
      post_like.text = post.likeCount
      post_like.innerHTML = "<i class='bx bx-heart'></i>"
      post_comment.appendChild(post_comment_count);
      post_comment.text = post.commentCount
      post_comment.innerHTML = "<i class='bx bxl-twitter'></i>"
      post_save.innerHTML = "<i class='bx bx-bookmark'></i>"

      post_activities_container.appendChild(post_save);
      post_activities_container.appendChild(post_comment);
      post_activities_container.appendChild(post_like);

      post_container.appendChild(post_activities_container);
      linq_posts_container.appendChild(post_container);
    }
  });
};

let flavor;
let myProfile;
let tempCommentData;

function getProfile(userId) {
  return firebase.database().ref('/profiles/' + userId).once('value').then((snapshot) => {
    profile = snapshot.val();
    // ...
  });
}

function getPost(postId) {
  firebase.database().ref('/posts/' + postId).once('value').then((snapshot) => {
    post = snapshot.val();
    testPost(postId, myId, postTags);
  });
  getPostTags(postId);
}

function getPostTags(postId) {
  let tagItems = [];
  firestore.collection("post-tags").where("postId", "==", postId)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        tagItems.push({
          id: doc.id,
          ...doc.data()
        })
      });
      postTags = tagItems;
    });
}

let public_posts_container = document.getElementById('public-posts-container');
let my_linq_posts_list = document.getElementById('my-linq-posts-list');
let post_container = document.createElement('div');
post_container.classList.add('post-container');

function generatePosts(userId, currentView, postsContainer) {
  let posts = [];

  database.ref('posts/').once('value', (snapshot) => {
    let postItems = [];
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      if (userId == '') {
        postItems.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      } else {
        if (childData.authorId == userId) {
          postItems.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        }
      }
    });
    postItems.forEach((postItem, index) => {
      database.ref('/posts/' + postItem.id).once('value').then((snapshot) => {
        let post = snapshot.val();
        let postId = postItem.id;
        let postLike;
        let postLiked = false;
        let profile;

        let showingComments = false;

        database.ref('/profiles/' + post.authorId).once('value').then((snapshot) => {
          profile = snapshot.val();
          // ...
          let post_row = document.createElement('div');
          post_row.classList.add('post-row');

          let commentScrollContainer = document.createElement('div');
          commentScrollContainer.classList.add('comment-scroll-container');

          let post_container = document.createElement('div');
          post_container.classList.add('post-container');

          let post_title_container = document.createElement('div');
          post_title_container.classList.add('post-title-container');
          let img_linq_profile = document.createElement('img');
          img_linq_profile.classList.add('img-linq-profile');
          let post_namedate_container = document.createElement('div');
          post_namedate_container.classList.add('post-namedate-container');
          let post_linq_name = document.createElement('p');
          post_linq_name.classList.add('post-linq-name');
          let post_date = document.createElement('span');
          post_date.classList.add('post-date');
          let post_menu = document.createElement('div');
          post_menu.classList.add('post-menu');

          if (profile.gsURL) {
            storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
              img_linq_profile.src = gsUrl;
            });
          } else if (profile.photoUrl) {
            img_linq_profile.src = profile.photoUrl;
          } else if (profile.photoURL) {
            img_linq_profile.src = profile.photoURL;
          }

          if (profile.username) {
            post_linq_name.innerText = profile.username;
          } else if (profile.fullName) {
            post_linq_name.innerText = profile.fullName;
          } else {
            post_linq_name.innerText = 'Linq Linq';
          }

          if (post.createdDate) {
            post_date.innerText = new Date(post.createdDate).toDateString();
          }
          post_menu.innerHTML = "<i class='bx bx-dots-vertical-rounded'></i>"

          post_title_container.appendChild(img_linq_profile);
          post_namedate_container.appendChild(post_linq_name);
          post_namedate_container.appendChild(post_date);
          post_title_container.appendChild(post_namedate_container);
          post_row.appendChild(post_menu);
          post_row.appendChild(post_title_container);
          post_container.appendChild(post_row);

          let post_text = document.createElement('p');
          post_text.classList.add('post-text');
          let post_img = document.createElement('img');
          post_img.classList.add('post-img');

          if (post.description) {
            post_text.innerHTML = post.description;
          }
          if (post.imageTitle) {
            storageRef.child('images/' + post.imageTitle).getDownloadURL().then((url) => {
              post_img.src = url
            });
          }
          post_img.addEventListener('click', function () {
            //alert(postId)
          });

          post_container.appendChild(post_text);
          commentScrollContainer.appendChild(post_img);

          /* let postTags = [];  
          let tags = []
          let post_tags_container = document.createElement('div');
          post_tags_container.classList.add('post-tags-container');
          post_tags_container.style.cssText = "position: relative;display: flex;width: 100%;margin-bottom: 10px;align-items: center;overflow-x: scroll;-ms-overflow-style: none;scrollbar-width: none;"

          firestore.collection("post-tags").where("postId", "==", postId)
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) => {
                postTags.push({
                  id: doc.id,
                  ...doc.data()
                })
              });
              postTags.forEach((tagItem) => {

                let post_tag = document.createElement('div');
                post_tag.classList.add('post-tag');
                post_tag.style.cssText = "position: relative; list-style-type: none; background-color: white;padding: 3px 7px 3px 7px;margin-right: 5px;border: 1px solid;border-radius: 15px;cursor: pointer;"

                post_tag.innerText = '#' + tagItem.tag;
                $(post_tag).click(function (e) {
                  alert(tagItem.tag)
                })
                post_tags_container.appendChild(post_tag);

                //  tags.push(post_tags_container);
              });
            });
            post_tags_container.replaceChildren(...tags);
          commentScrollContainer.appendChild(post_tags_container); */

          let post_activities_container = document.createElement('div');
          post_activities_container.classList.add('post-activities-container');
          let post_like = document.createElement('div');
          post_like.classList.add('post-like');
          let post_like_text = document.createElement('div');
          post_like_text.classList.add('post-like');
          let post_like_icon = document.createElement('div');
          post_like_icon.classList.add('post-like-icon');
          let post_like_count = document.createElement('div');
          post_like_count.classList.add('post-like-count');
          let post_comment = document.createElement('div');
          post_comment.classList.add('post-comment');
          let post_comment_icon = document.createElement('div');
          post_comment_icon.classList.add('post-comment-icon');
          let post_comment_count = document.createElement('div');
          post_comment_count.classList.add('post-comment-count');
          let post_save = document.createElement('div');
          post_save.classList.add('post-save');

          if (post.likesCount) {
            post_like_count.innerText = post.likesCount
          }
          database.ref('post-likes/' + postId + '/' + myId).once('value').then(snapshot => {
            postLike = snapshot.val();
            if (postLike) {
              postLiked = true;

              post_like_icon.innerHTML = "<i class='bx bxs-heart'></i>"
              post_like_icon.style.cssText = "font-size: 1.4rem; color: red"
            } else {
              post_like_icon.innerHTML = "<i class='bx bx-heart'></i>"
            }
          });
          post_like.appendChild(post_like_count);
          post_like.appendChild(post_like_icon);

          post_like.addEventListener("click", function () {
            if (postLiked == true) {
              postLiked = false
              generatePostLike(post, postId, true, post_like_count, post_like_icon);
            } else {
              postLiked = true
              generatePostLike(post, postId, false, post_like_count, post_like_icon);
            }
          })

          if (post.commentsCount) {
            post_comment_count.innerText = post.commentsCount
          }
          database.ref('post-comments/' + postId + '/').once('value').then(snapshot => {
            let postComment = snapshot.val();
            if (postComment) {
              //              postComment = true;
              console.log(postComment.authorId)
              post_comment_icon.innerHTML = "<i class='bx bxl-twitter'></i>"
              post_comment_icon.style.cssText = "font-size: 1.4rem; color: green"
            } else {
              post_comment_icon.innerHTML = "<i class='bx bxl-twitter'></i>"
            }
          });

          post_comment.appendChild(post_comment_count);
          post_comment.appendChild(post_comment_icon);

          post_comment.addEventListener("click", function () {
            if (showingComments == false) {
              showingComments = true
              comment_input_container.style.cssText = 'display: flex; width: 100%; margin-top: -4%; margin-bottom: -4%;'
              //all_comments_container.style.cssText = 'display: block;'
              commentScrollContainer.appendChild(all_comments_container)
              generateComments(post, postId, profile, all_comments_container, '', true)
            } else {
              showingComments = false
              comment_input_container.style.cssText = 'display: none;'
              generateComments(post, postId, profile, all_comments_container, false)
              commentScrollContainer.removeChild(all_comments_container)
            }
          });

          database.ref('post-notes/' + postId + '/' + userId).once('value').then(snapshot => {
            postNote = snapshot.val();
            if (postNote) {
              postNote = true;

              post_save_icon.innerHTML = "<i class='bx bx-bookmark'></i>"
              post_save_icon.style.cssText = "font-size: 1.4rem; color: darkcyan"
            } else {
              post_save.innerHTML = "<i class='bx bx-bookmark'></i>"
            }
          });

          post_save.addEventListener("click", function () {
            if (postSaved == true) {
              postSaved = false
              generatePostSave(post, postId, true, post_like_icon);
            } else {
              postSaved = true
              generatePostSave(post, postId, false, post_save_icon);
            }
          })

          post_activities_container.appendChild(post_like);
          post_activities_container.appendChild(post_comment);
          post_activities_container.appendChild(post_save);

          //Create comment's view
          let comment_input_container = document.createElement('div');
          comment_input_container.classList.add('commnet-input-container');
          let comment_input = document.createElement('input');
          comment_input.classList.add('comment-input');
          let comment_add_icon = document.createElement('img');
          comment_add_icon.classList.add('comment-add-icon');
          comment_add_icon.src = '../linq/img/linq/Add_Linq_Green_0.png'

          let comment_send_icon = document.createElement('div');
          comment_send_icon.classList.add('comment-send-icon');
          comment_send_icon.innerHTML = "<i class='bx bxs-send'></i>"

          comment_send_icon.addEventListener('click', function () {
            let key = database.ref().child('post-comments/').push().key;
            let postCommentData = {
              id: key,
              authorId: myId,
              text: comment_input.value,
              createdDate: firebase.database.ServerValue.TIMESTAMP
            }
            if (myId != null) {
              if (comment_input.value == '') {
                alert('You Did not Comment 💬')
              } else {
                // commentPost(postId, post.commentsCount, key, postCommentData)
                comment_input.value = ''
                updateComments(postId, post.commentsCount, key, postCommentData).then(displayComments(postId, profile, all_comments_container));
              }
            } else {
              alert('LinqIn to Comment 💬')
            }

          })

          function updateComments(postId, commentsCount, key, postCommentData) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                commentScrollContainer.removeChild(all_comments_container)
                commentPost(postId, commentsCount, key, postCommentData)
                const err = false;
                if (!err) {
                  resolve();
                } else {
                  reject();
                }
              }, 300)
            });
          }
          function displayComments(postId, profile, all_comments_container) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                generateComments(post, postId, profile, all_comments_container, true)
                commentScrollContainer.appendChild(all_comments_container)
                const err = false;
                if (!err) {
                  resolve();
                } else {
                  reject();
                }
              }, 100)
            });
          }

          comment_input_container.appendChild(comment_add_icon);
          comment_input_container.appendChild(comment_input);
          comment_input_container.appendChild(comment_send_icon);

          //Temp //comments default display: visible
          comment_input_container.style.cssText = 'display: flex; width: 100%; margin-top: -4%; margin-bottom: -4%;'

          let all_comments_container = document.createElement('div');
          all_comments_container.classList.add('all-comments-container');

          commentScrollContainer.appendChild(post_activities_container);
          commentScrollContainer.appendChild(comment_input_container)
          commentScrollContainer.style.cssText = 'max-height: 444px; width: 100%; overflow-y: scroll;-ms-overflow-style: none;scrollbar-width: none;'

          commentScrollContainer.appendChild(all_comments_container)

          generateComments(post, postId, profile, all_comments_container, true)

          post_container.appendChild(commentScrollContainer);

          // public_posts_container.appendChild(post_container);

          if (currentView == 'myLinq') {
            my_linq_posts_list.appendChild(post_container);
          } else {
            public_posts_container.appendChild(post_container);
          }

          commentScrollContainer.scrollTop = 0;
        });
      });
    });
  });
}

function generateComments(post, postId, profile, all_comments_container, showing) {
  database.ref('post-comments/' + postId).orderByChild('createdDate').once('value', (snapshot) => {
    let postItems = [];
    let commentsCount = post.commentsCount;

    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData)
      postItems.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    });

    postItems.reverse();
    postItems.forEach((postItem, index) => {
      let comment_main = document.createElement('div');
      comment_main.classList.add('comment-main');
      let comment_container = document.createElement('div');
      comment_container.classList.add('comment-container');
      let comment_author_img = document.createElement('img');
      comment_author_img.classList.add('comment-author-img');
      let comment_linq = document.createElement('div');
      comment_linq.classList.add('comment-linq');
      let comment_linq_icon = document.createElement('img');
      comment_linq_icon.classList.add('comment-linq-icon');
      let comment_linq_edit = document.createElement('div');
      comment_linq_edit.classList.add('comment-linq-edit');
      let comment_text = document.createElement('div');
      comment_text.classList.add('comment-text');

      let comment_activities_container = document.createElement('div');
      comment_activities_container.classList.add('comment-activities-container');

      database.ref('/profiles/' + postItem.authorId).once('value').then((snapshot) => {
        profile = snapshot.val();

        if (profile.gsURL) {
          storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
            comment_author_img.src = gsUrl;
          });
        } else if (profile.photoUrl) {
          comment_author_img.src = profile.photoUrl;
        } else if (profile.photoURL) {
          comment_author_img.src = profile.photoURL;
        }
      })

      comment_text.innerText = postItem.text

      if (postItem.authorId == myId) {
        comment_linq_icon.src = '../linq/img/linq/Linq_Logo_Blue_1.png'
      } else {
        comment_linq_icon.src = '../linq/img/linq/Linq_Logo_Grey_0.png'
      }

      comment_author_img.addEventListener("click", function () {
        //alert(postItem.id)
      })

      let reply = false;
      let comment_reply_container = document.createElement('div');
      comment_reply_container.classList.add('commnet-reply-container');
      let comment_reply_input = document.createElement('input');
      comment_reply_input.classList.add('comment-reply-input');
      let comment_reply_author_img = document.createElement('img');
      comment_reply_author_img.classList.add('comment-reply-author-img');

      firebase.database().ref('/profiles/' + myId).once('value').then((snapshot) => {
        let myProfile = snapshot.val();
        // ...      
        if (myProfile.gsURL) {
          storage.refFromURL(myProfile.gsURL).getDownloadURL().then((gsUrl) => {
            comment_reply_author_img.src = gsUrl;
          });
        } else if (myProfile.photoUrl) {
          comment_reply_author_img.src = myProfile.photoUrl;
        } else if (myProfile.photoURL) {
          comment_reply_author_img.src = myProfile.photoURL;
        }
      });

      let comment_reply_send_icon = document.createElement('div');
      comment_reply_send_icon.classList.add('comment-reply-send-icon');
      comment_reply_send_icon.innerHTML = "<i class='bx bxs-send'></i>"

      comment_reply_container.appendChild(comment_reply_author_img);
      comment_reply_container.appendChild(comment_reply_input);
      comment_reply_container.appendChild(comment_reply_send_icon);
      comment_reply_container.style.cssText = 'display: flex; align-items: center';

      comment_container.appendChild(comment_author_img)
      comment_container.appendChild(comment_text)
      comment_linq.appendChild(comment_linq_icon)
      comment_container.appendChild(comment_linq)
      comment_container.style.cssText = 'display: flex; align-items: center';

      comment_reply_send_icon.addEventListener("click", function () {
        if (myId != null) {
          if (comment_reply_input.value == '') {
            alert('You Did not Reply 💬')
          } else {
            alert('  Comment Reply 💬 \nAvailable Next Update')
          }
        } else {
          alert('LinqIn to Reply 💬')
        }
      })

      commentActivities(postId, postItem, postItem.id, comment_activities_container);
      comment_main.appendChild(comment_container);
      comment_main.appendChild(comment_activities_container)

      function doCommentLinqClick() {
        if (reply == false) {
          reply = true
          /* if (postItem.authorId == myId){
          comment_linq.removeChild(comment_linq_icon)
          comment_linq_edit.innerHTML = "<i class='bx bxs-message-square-edit' ></i>"
          comment_linq.appendChild(comment_linq_edit)
          } */
          comment_reply_container.appendChild(comment_reply_author_img);
          comment_reply_container.appendChild(comment_reply_input);
          comment_reply_container.appendChild(comment_reply_send_icon);
          comment_reply_container.style.cssText = 'display: flex; align-items: center';

          comment_main.appendChild(comment_reply_container)
        } else {
          reply = false
          // comment_main.removeChild(comment_reply_container)
          // comment_linq.re(comment_linq_edit)
          comment_linq.appendChild(comment_linq_icon)
          $(comment_reply_container).empty();
        }
      }

      var timer;
      //Time of the long press
      const tempo = 1000; //Time 1000ms = 1s
      let start;
      comment_linq.onmousedown = () => {
        start = performance.now();
        timer = setTimeout(function () {
        }, tempo);
      };

      comment_linq.onmouseup = () => {
        let timeLeft = (performance.now() - start);
        if (timeLeft < 300) {
          doCommentLinqClick();
        } else {
          if (postItem.authorId == myId) {
            delCommentModal(modal, postId, commentsCount, postItem.id, 'comment', postItem.authorId)
          } else {
            confirm('LinqIn To Act!')
          }
        }
        clearTimeout(timer);
      };

      if (showing == true) {
        all_comments_container.appendChild(comment_main)
      } else {
        $(all_comments_container).empty();
      }
    })
  })
}

function generateCommentReplies(post, postId, profile, replies_container) {

  firestore.collection("comment-replies").get().then((snapshot) => {

    let replyItems = [];
    snapshot.forEach((doc) => {
      replyItems.push({
        id: doc.id,
        ...doc.data()
      })
    })

    let reply = []
    replyItems.forEach((replyItem) => {

      let reply = false;
      let comment_reply_container = document.createElement('div');
      comment_reply_container.classList.add('commnet-reply-container');
      let comment_reply_input = document.createElement('input');
      comment_reply_input.classList.add('comment-reply-input');
      let comment_reply_author_img = document.createElement('img');
      comment_reply_author_img.classList.add('comment-reply-author-img');

      firebase.database().ref('/profiles/' + myId).once('value').then((snapshot) => {
        let myProfile = snapshot.val();
        // ...      
        if (myProfile.gsURL) {
          storage.refFromURL(myProfile.gsURL).getDownloadURL().then((gsUrl) => {
            comment_reply_author_img.src = gsUrl;
          });
        } else if (myProfile.photoUrl) {
          comment_reply_author_img.src = myProfile.photoUrl;
        } else if (myProfile.photoURL) {
          comment_reply_author_img.src = myProfile.photoURL;
        }
      });

      let comment_reply_send_icon = document.createElement('div');
      comment_reply_send_icon.classList.add('comment-reply-send-icon');
      comment_reply_send_icon.innerHTML = "<i class='bx bxs-send'></i>"

      comment_reply_container.appendChild(comment_reply_author_img);
      comment_reply_container.appendChild(comment_reply_input);
      comment_reply_container.appendChild(comment_reply_send_icon);
      comment_reply_container.style.cssText = 'display: flex; align-items: center';

      comment_container.appendChild(comment_author_img)
      comment_container.appendChild(comment_text)
      comment_linq.appendChild(comment_linq_icon)
      comment_container.appendChild(comment_linq)
      comment_container.style.cssText = 'display: flex; align-items: center';

      comment_reply_send_icon.addEventListener("click", function () {
        if (myId != null) {
          if (comment_reply_input.value == '') {
            alert('You Did not Reply 💬')
          } else {

          }
        } else {
          alert('LinqIn to Reply 💬')
        }
      })

      comment_main.appendChild(comment_container);
      comment_main.appendChild(comment_activities_container)

      var timer;
      //Time of the long press
      const tempo = 1000; //Time 1000ms = 1s
      let start;
      comment_reply_container.onmousedown = () => {
        start = performance.now();
        timer = setTimeout(function () {
        }, tempo);
      };

      comment_reply_container.onmouseup = () => {
        let timeLeft = (performance.now() - start);
        if (timeLeft < 300) {
        } else {
          if (postItem.authorId == myId) {
            delCommentModal(modal, postId, commentsCount, postItem.id, 'reply', postItem.authorId)
          } else {
            confirm('LinqIn To Act!')
          }
        }
        clearTimeout(timer);
      };

      let whereMenuContainer = document.getElementById('where-menu-container');
      let whereMenu = document.createElement("div");
      whereMenu.classList.add("menu_where");

      whereMenu.addEventListener("click", function () {

        menuItemId = menuItem.id;
      })

      whereMenu.innerText = menuItem.Country + ', ' + menuItem.City;

      whereMenuContainer.appendChild(whereMenu);

      menu.push(whereMenuContainer);
    });
    document.querySelector('where-menu-container').replaceChildren(...menuItems);
  });
}

function commentActivities(postId, comment, commentId, comment_activities_container) {

  //  let comment;
  let commentLiked = false;
  let commentReplied = false;

  let comment_like = document.createElement('div');
  comment_like.classList.add('comment-like');
  let comment_like_text = document.createElement('div');
  comment_like_text.classList.add('comment-like');
  let comment_like_icon = document.createElement('div');
  comment_like_icon.classList.add('comment-like-icon');
  let comment_like_count = document.createElement('div');
  comment_like_count.classList.add('comment-like-count');
  let comment_reply = document.createElement('div');
  comment_reply.classList.add('comment-reply');
  let comment_reply_icon = document.createElement('div');
  comment_reply_icon.classList.add('comment-reply-icon');
  let comment_reply_count = document.createElement('div');
  comment_reply_count.classList.add('comment-reply-count');

  comment_like_icon.innerHTML = "<i class='bx bx-heart'></i>"

  firestore.collection("comment-likes").where("commentId", "==", commentId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((commentLike) => {
        if (commentLike.userId = myId) {
          commentLiked = true;

          comment_like_count.innerText = querySnapshot.size

          comment_like_icon.innerHTML = "<i class='bx bxs-heart'></i>"
          comment_like_icon.style.cssText = "font-size: 1.4rem; color: red"
        } else {
          // comment_like_icon.innerHTML = "<i class='bx bx-heart'></i>"
        }
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  comment_like_icon.addEventListener("click", function () {
    if (myId != null) {
      if (commentLiked == true) {
        generateCommentLike(postId, comment, commentId, true, comment_like_count, comment_like_icon);
        commentLiked = false
      } else {
        commentLiked = true
        generateCommentLike(postId, comment, commentId, false, comment_like_count, comment_like_icon);
      }
    } else {
      alert('LinqIn to Like ❤️ Comment')
    }
  })

  comment_reply_icon.innerHTML = "<i class='bx bx-reply'></i>"

  firestore.collection("comment-replies").where("commentId", "==", commentId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((commentReply) => {
        if (commentReply.userId = myId) {
          commentReplied = true;

          comment_reply_count.innerText = querySnapshot.size

          comment_reply_icon.innerHTML = "<i class='bx bx-reply'></i>"
          comment_reply_icon.style.cssText = "font-size: 1.4rem; color: darkcyan"
        } else {
          //  comment_reply_icon.innerHTML = "<i class='bx bx-reply'></i>"
        }
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  comment_like.appendChild(comment_like_count);
  comment_like.appendChild(comment_like_icon);
  comment_like.style.cssText = 'display: flex; margin-right: 5px'

  comment_reply.appendChild(comment_reply_count);
  comment_reply.appendChild(comment_reply_icon);
  comment_reply.style.display = 'flex'

  comment_activities_container.appendChild(comment_like);
  comment_activities_container.appendChild(comment_reply);
}

function testPost(postId, userId, tagItems) {
  //  let linq_posts_container = document.getElementById('linq_posts_container');

  let post_row = document.createElement('div');
  post_row.classList.add('post-row');

  let post_container = document.createElement('div');
  post_container.classList.add('post-container');

  let post_title_container = document.createElement('div');
  post_title_container.classList.add('post-title-container');
  let img_linq_profile = document.createElement('img');
  img_linq_profile.classList.add('img-linq-profile');
  let post_namedate_container = document.createElement('div');
  post_namedate_container.classList.add('post-namedate-container');
  let post_linq_name = document.createElement('p');
  post_linq_name.classList.add('post-linq-name');
  let post_date = document.createElement('span');
  post_date.classList.add('post-date');
  let post_menu = document.createElement('div');
  post_menu.classList.add('post-menu');

  if (profile.gsURL) {
    storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
      img_linq_profile.src = gsUrl;
    });
  }
  if (profile.username) {
    post_linq_name.innerText = profile.username;
  }
  if (post.createDated) {
    post_date.innerText = post.dateCreated;
  }
  post_menu.innerHTML = "<i class='bx bx-dots-vertical-rounded'></i>"

  post_title_container.appendChild(img_linq_profile);
  post_namedate_container.appendChild(post_linq_name);
  post_namedate_container.appendChild(post_date);
  post_title_container.appendChild(post_namedate_container);
  post_row.appendChild(post_menu);
  post_row.appendChild(post_title_container);
  post_container.appendChild(post_row);

  let post_text = document.createElement('p');
  post_text.classList.add('post-text');
  let post_img = document.createElement('img');
  post_img.classList.add('post-img');

  if (post.description) {
    post_text.innerHTML = post.description;
  }
  if (post.imageTitle) {
    storageRef.child('images/' + post.imageTitle).getDownloadURL().then((url) => {
      post_img.src = url
    });
  }

  post_container.appendChild(post_text);
  post_container.appendChild(post_img);

  /* firestore.collection("post-tags").where("postId", "==", postId)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        postTags.push({
          id: doc.id,
          ...doc.data()
        })
      });
    }); */

  let tags = []
  let post_tags_container = document.createElement('div');
  post_tags_container.classList.add('post-tags-container');
  post_tags_container.style.cssText = "position: relative;display: flex;width: 100%;margin-bottom: 10px;align-items: center;overflow-x: scroll;-ms-overflow-style: none;scrollbar-width: none;"

  postTags.forEach((tagItem) => {

    let post_tag = document.createElement('div');
    post_tag.classList.add('post-tag');
    post_tag.style.cssText = "position: relative;list-style-type: none;background-color: white;padding: 5px 10px 5px 10px;margin-right: 5px;border: 1px solid;border-radius: 15px;cursor: pointer;"

    post_tag.innerText = '#' + tagItem.tag;
    $(post_tag).click(function (e) {
      alert(tagItem.tag)
    })
    post_tags_container.appendChild(post_tag);

    //  tags.push(post_tags_container);
  });
  //  post_tags_container.replaceChildren(...tags);
  post_container.appendChild(post_tags_container);

  let post_activities_container = document.createElement('div');
  post_activities_container.classList.add('post-activities-container');
  let post_like = document.createElement('div');
  post_like.classList.add('post-like');
  let post_like_text = document.createElement('div');
  post_like_text.classList.add('post-like');
  let post_like_icon = document.createElement('div');
  post_like_icon.classList.add('post-like-icon');
  let post_like_count = document.createElement('div');
  post_like_count.classList.add('post-like-count');
  let post_comment = document.createElement('div');
  post_comment.classList.add('post-comment');
  let post_comment_icon = document.createElement('div');
  post_comment_icon.classList.add('post-comment-icon');
  let post_comment_count = document.createElement('div');
  post_comment_count.classList.add('post-comment-count');
  let post_save = document.createElement('div');
  post_save.classList.add('post-save');

  if (post.likesCount) {
    post_like_count.innerText = post.likesCount
  }
  database.ref('post-likes/' + postId + '/' + myId).once('value').then(snapshot => {
    let data = snapshot.val();
    if (data) {
      post_like_icon.innerHTML = "<i class='bx bxs-heart'></i>"
      post_like_icon.style.cssText = "font-size: 1.4rem; color: red"
    } else {
      post_like_icon.innerHTML = "<i class='bx bx-heart'></i>"
    }
  });
  post_like.appendChild(post_like_count);
  post_like.appendChild(post_like_icon);

  post_like.addEventListener("click", function () {
    generatePostLike(postId);
  })

  if (post.commentsCount) {
    post_comment_count.innerText = post.commentsCount
  }
  post_comment_icon.innerHTML = "<i class='bx bxl-twitter'></i>"
  post_comment.appendChild(post_comment_count);
  post_comment.appendChild(post_comment_icon);

  post_save.innerHTML = "<i class='bx bx-bookmark'></i>"

  post_activities_container.appendChild(post_like);
  post_activities_container.appendChild(post_comment);
  post_activities_container.appendChild(post_save);

  post_container.appendChild(post_activities_container);
  linq_posts_container.appendChild(post_container);
}

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + postId] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

/* Post Like */
function generatePostLike(post, postId, postLiked, post_like_count, post_like_icon) {

  database.ref('post-likes/' + postId + '/' + myId).once('value').then(snapshot => {
    let data = snapshot.val();

    let postRef = database.ref().child('posts/');
    let key = database.ref().child('post-likes/').push().key;

    let postLikeData = {
      id: key,
      createdDate: firebase.database.ServerValue.TIMESTAMP
    }

    if (postLiked == true) {
      unLikePost(postId, post.likesCount, myId)

      post_like_icon.innerHTML = "<i class='bx bx-heart'></i>"
      post_like_icon.style.cssText = "font-size: 1.4rem; color: grey"
      post_like_count.innerText = Number(post_like_count.innerText) - 1
    } else {
      likePost(postId, post.likesCount, myId, key, postLikeData)

      post_like_icon.innerHTML = "<i class='bx bxs-heart'></i>"
      post_like_icon.style.cssText = "font-size: 1.4rem; color: red"
      post_like_count.innerText = Number(post_like_count.innerText) + 1
    }
  });
}

function removeLike(postId, myId) {
  return database.ref().child('post-likes/' + postId + '/' + myId).remove()
}

function unLikePost(postId, likesCount, myId) {
  removeLike(postId, myId)
  database.ref().child('posts/' + postId).update({
    likesCount: likesCount - 1
  })
}

function addLike(postId, myId, key, postLikeData) {
  database.ref().child('post-likes/' + postId + '/' + myId + '/' + key).update(postLikeData)
}

function likePost(postId, likesCount, myId, key, postLikeData) {
  addLike(postId, myId, key, postLikeData)
  database.ref().child('posts/' + postId).update({
    likesCount: likesCount + 1
  })
}

/* Comment Like */
function generateCommentLike(postId, comment, commentId, commentLiked, comment_like_count, comment_like_icon) {

  // database.ref('comment-likes/' + postId + '/' + myId).once('value').then(snapshot => {
  // alert(commentId)
  if (commentLiked == true) {
    firestore.collection('comment-likes').where("commentId", "==", commentId).limit(1)
      .get()
      .then((doc) => {
        doc.forEach((commentLike) => {
          let myId = localStorage.getItem('temp_userId');

          unLikeComment(commentLike, commentId, myId)

          comment_like_icon.innerHTML = "<i class='bx bx-heart'></i>"
          comment_like_icon.style.cssText = "font-size: 1.4rem; color: grey"

          comment_like_count.innerText = Number(comment_like_count.innerText) - 1

          if (comment_like_count.innerText <= 0) {
            $(comment_like_count).hide();
          } else {
            $(comment_like_count).show();
          }

        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      });
  } else {

    likeComment(postId, commentId, myId)
    comment_like_icon.innerHTML = "<i class='bx bxs-heart'></i>"
    comment_like_icon.style.cssText = "font-size: 1.4rem; color: red"

    $(comment_like_count).show();
    comment_like_count.innerText = Number(comment_like_count.innerText) + 1
  }
}

function unLikeComment(doc, commentId, userId) {
  let myId = localStorage.getItem('temp_userId');
  if (userId == myId) {
    doc.ref.delete()
  }
}

function likeComment(postId, commentId, userId) {
  let myId = localStorage.getItem('temp_userId');
  if (userId == myId) {
    let newItem = firestore.collection("comment-likes").add({
      userId: myId,
      postId: postId,
      commentId: commentId,
      createdDate: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then((docRef) => {
        //      location.reload();
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}

/*Post Comment */
function removeComment(postId, commentId) {
  return database.ref().child('post-comments/' + postId + '/' + commentId).remove()
  alert('Comment Deleted')
}

function unCommentPost(postId, commentsCount, commentId, authorId, myId) {
  if (authorId == myId) {
    removeComment(postId, commentId)
    database.ref().child('posts/' + postId).update({
      commentsCount: commentsCount - 1
    })
  }
}

function addComment(postId, key, postCommentData) {
  database.ref().child('post-comments/' + postId + '/' + key).update(postCommentData)
}

function commentPost(postId, commentsCount, key, postCommentData) {
  addComment(postId, key, postCommentData)
  database.ref().child('posts/' + postId).update({
    commentsCount: commentsCount + 1
  })
}

/* Upload File */
function readAsText(file) {
  let reader = new FileReader();
  fileToUpload = file;
  reader.readAsText(fileToUpload);
  return fileToUpload;
}

function uploadFile(file, uploadType, uploadId, messageId, mimeType) {

  if (mimeType == 'image') {
    if (uploadType == 'profile') {

      var extFile = file.name.split('.').pop();

      let gsURLToUpload = 'gs://linqop.appspot.com/' + 'linqMedia/images/profiles/' + myId + '.' + extFile;

      var storageRef = storage.ref();
      let uploadTask = storageRef.child('linqMedia/images/profiles/' + myId + '.' + extFile).put(file);

      let gsURL = '';
      // TODO: Move to Firestore
      database.ref('profiles/' + linqId).once('value').then((snap_a) => {
        if (snap_a.val().gsURL && snap_a.val().gsURL != '') {
          gsURL = (snap_a.val().gsURL)
        }

        if (gsURL && gsURL != '') {
          var gsReference = storage.refFromURL(gsURL);

          // Delete the file
          gsReference.delete().then(() => {
            // File deleted successfully
            uploadTask_Observer(uploadTask, uploadType, '', '', gsURLToUpload);
          }).catch((error) => {
            // Uh-oh, an error occurred!
            uploadTask_Observer(uploadTask, uploadType, '', '', gsURLToUpload);
            console.log(error)
          });

        } else {
          uploadTask_Observer(uploadTask, uploadType, '', '', gsURLToUpload);
        }
      });

    } else if (uploadType == 'post') {
      uploadTask = database.child('linqMedia/images/posts/' + uploadId + checkFileType(file)).put(file);
    } else if (uploadType == 'flow') {
      uploadTask = database.child('linqMedia/images/flows/' + uploadId + checkFileType(file)).put(file);
    } else if (uploadType == 'chat') {

      const timeMillis = (firebase.firestore.Timestamp.fromDate(new Date())).toMillis();

      var extFile = file.name.split('.').pop();

      let gsURLToUpload = 'gs://linqop.appspot.com/' + 'linqMedia/chats/' + uploadId + '/' + myId + '_' + timeMillis + '.' + extFile;

      var storageRef = storage.ref();
      let uploadTask = storageRef.child('linqMedia/chats/' + uploadId + '/' + myId + '_' + timeMillis + '.' + extFile).put(file);

      uploadTask_Observer(uploadTask, uploadType, uploadId, messageId, gsURLToUpload);
    }
  }
}

function uploadTask_Observer(uploadTask, uploadType, uploadId, messageId, uploadURL) {
  //  let myId = localStorage.getItem('temp_userId');
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      if (uploadType != '' && uploadType == 'profile') {
        database.ref().child("/profiles/" + myId).update({ gsURL: uploadURL });
      } else if (uploadType != '' && uploadType == 'chat') {
        // Add a new document with a generated id.
        firestore.collection("chats").doc(uploadId).collection('messages').add({
          createdDate: firebase.firestore.FieldValue.serverTimestamp(),
          gsURL: uploadURL,
          messageType: 'image'
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            fileToUpload = '';
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    }
  );
}

/* My Linq */
$('.bx-cog').click(function (e) {
  e.preventDefault();
  $(".my_linq_display").hide();
  $(".linq_container").hide();
  $(".my_linq_edit").show();
  my_linq_posts_list.style.cssText = 'display: none';

  localStorage.setItem('currentView', 'editMyLinq');
});

$('.btn-my-linq-posts-list').click(function (e) {
  e.preventDefault();

  $('.my-linq-posts-container').show();
  $('.my-linq-posts-list').show();
  $('.my-linq-posts-grid').hide();
});

$('.btn-my-linq-posts-grid').click(function (e) {
  e.preventDefault();

  $('.my-linq-posts-container').show();
  $('.my-linq-posts-list').hide();
  $('.my-linq-posts-grid').show();
  $('.my-linq-posts-grid').css('margin-top', '35px');

  var y = $(window).scrollTop();
  $('html, body').animate({ scrollTop: y + 150 })
});

// TODO: Re-naming of IDs & variables
function generateMyLinqPosts_Filters(myId) {
  firestore.collection("interests").where("userId", "==", myId)
    .get()
    .then((snapshot) => {
      let interestItems = [];
      snapshot.docs.forEach((doc) => {
        interestItems.push({
          id: doc.id,
          ...doc.data()
        })
      })
      let interests = []
      interestItems.forEach((interestItem) => {

        let myLinqPosts_Filters = document.getElementById('my-linq-posts-filters');
        let linqInterestContainer = document.createElement('div');
        linqInterestContainer.classList.add('interest-container')
        let linqInterest = document.createElement("div");
        linqInterest.classList.add("interest-item");

        linqInterest.addEventListener("click", function () {

          interestItemId = interestItem.id;
        })

        linqInterest.innerText = interestItem.interest;

        linqInterestContainer.appendChild(linqInterest);
        myLinqPosts_Filters.appendChild(linqInterestContainer);

        interests.push(myLinqPosts_Filters);
      });
      document.querySelector('myLinqPosts_Filters').replaceChildren(...interests);
    });
}

/* Linq Edit */
var username_input = document.getElementById('my_linq_username-input');
var firstname_input = document.getElementById('my_linq_firstname-input');
var middlename_input = document.getElementById('my_linq_middlename-input');
var lastname_input = document.getElementById('my_linq_lastname-input');
var bio_input = document.getElementById('my_linq_bio-input');

$('.bxs-save').click(function (e) {
  e.preventDefault();
  /* $(".my_linq_edit").hide();
  $(".my_linq_display").show(); */

  savelinqEdit(fileToUpload);

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function refresh() {
    await timeout(3000);
    location.reload();
  }

  refresh();

  localStorage.setItem('currentView', 'myLinq')
});

function savelinqEdit(file) {
  if (file) {
    uploadFile(file, 'profile', '', '', 'image')
  }
}

$('.my_linq_img_edit').click(function (e) {
  e.preventDefault();

  fileInput.onchange = event => {

    // getting a hold of the file reference
    let file = event.target.files[0];

    let reader = new FileReader();

    reader.onload = function (readerEvent) {
      readAsText(file); // reader.readAsText(file)
      document.getElementById('my_linq_img_edit').src = readerEvent.target.result;
    }
    reader.readAsDataURL(file);
  }
  fileInput.click();
});

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

$('.my_linq_changeEmail').click(function (e) {

  alert(email);

  /* const user = firebase.auth().currentUser;
 
  let email = prompt("Enter new email address", "");
  if (email != null && validate_email(email) == true) {
    user.updateEmail("person").then(() => {
      // Update successful
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  } */
})

$('.my_linq_changePassword').click(function (e) {

  if (confirm("Sending Password Reset Email!") == true) {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        alert('Password reset email sent!')
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  } else {
    text = "You canceled!";
  }
})

$('#my_linq_username-input').click(function (e) {
  e.preventDefault();
  username_input.dataset.placeholder = username_input.placeholder;
  $("#my_linq_username-input").attr('placeholder', "");
  $("#my_linq_username-input").focus();
});

username_input.addEventListener('blur', (e) => {
  e.preventDefault();
  if (username_input.value != '' && confirm("Save Username?") == true) {
    updateUsername();
    $('.refresh-username-icon').click();
  } else {
    $('.refresh-username-icon').click();
  }
  username_input.placeholder = username_input.dataset.placeholder;
});

$(document).ready(() => {
  $('.refresh-username-icon').click(function (e) {
    e.preventDefault();
    $("#my_linq_username-input").val('');
  });
});
// Firstname
$('#my_linq_firstname-input').click(function (e) {
  e.preventDefault();
  firstname_input.dataset.placeholder = firstname_input.placeholder;
  $("#my_linq_firstname-input").attr('placeholder', "");
  $("#my_linq_firstname-input").focus();
});

firstname_input.addEventListener('blur', (e) => {
  e.preventDefault();
  if (firstname_input.value != '' && confirm("Save Firstname?") == true) {
    updateFirstname();
    $('.refresh-firstname-icon').click();
  } else {
    $('.refresh-firstname-icon').click();
  }
  firstname_input.placeholder = firstname_input.dataset.placeholder;
});

$(document).ready(() => {
  $('.refresh-firstname-icon').click(function (e) {
    e.preventDefault();
    $("#my_linq_firstname-input").val('');
  });
});
// Middle Name
$('#my_linq_middlename-input').click(function (e) {
  e.preventDefault();
  middlename_input.dataset.placeholder = middlename_input.placeholder;
  $("#my_linq_middlename-input").attr('placeholder', "");
  $("#my_linq_middlename-input").focus();
});

middlename_input.addEventListener('blur', (e) => {
  e.preventDefault();
  if (middlename_input.value != '' && confirm("Save Middle Name?") == true) {
    updateMiddlename(middlename);
    $('.refresh-middlename-icon').click();
  } else {
    $('.refresh-middlename-icon').click();
  }
  middlename_input.placeholder = middlename_input.dataset.placeholder;
});

$(document).ready(() => {
  $('.refresh-middlename-icon').click(function (e) {
    e.preventDefault();
    $("#my_linq_middlename-input").val('');
  });
});
// Lastname
$('#my_linq_lastname-input').click(function (e) {
  e.preventDefault();
  lastname_input.dataset.placeholder = lastname_input.placeholder;
  $("#my_linq_lastname-input").attr('placeholder', "");
  $("#my_linq_lastname-input").focus();
});

lastname_input.addEventListener('blur', (e) => {
  e.preventDefault();
  if (lastname_input.value != '' && confirm("Save Lastname?") == true) {
    updateLastname();
    $('.refresh-lastname-icon').click();
  } else {
    $('.refresh-lastname-icon').click();
  }
  lastname_input.placeholder = lastname_input.dataset.placeholder;
});

$(document).ready(() => {
  $('.refresh-lastname-icon').click(function (e) {
    e.preventDefault();
    $("#my_linq_lastname-input").val('');
  });
});
//Bio
$('#my_linq_bio-input').click(function (e) {
  e.preventDefault();
  bio_input.dataset.placeholder = bio_input.placeholder;
  $("#my_linq_bio-input").attr('placeholder', "");
  $("#my_linq_bio-input").focus();
});

bio_input.addEventListener('blur', (e) => {
  e.preventDefault();
  if (bio_input.value != '' && confirm("Save Bio?") == true) {
    updateBio();
    $('.refresh-bio-icon').click();
  } else {
    $('.refresh-bio-icon').click();
  }
  bio_input.placeholder = bio_input.dataset.placeholder;
});

$(document).ready(() => {
  $('.refresh-bio-icon').click(function (e) {
    e.preventDefault();
    $("#my_linq_bio-input").val('');
  });
});

function updateUsername() {
  let myId = localStorage.getItem('temp_userId');
  database.ref().child("profiles/" + myId).update({ username: username_input.value });
  location.reload();
}

function updateFirstname() {
  let myId = localStorage.getItem('temp_userId');
  database.ref().child("profiles/" + myId).update({ firstname: firstname_input.value });
  location.reload();
}

function updateMiddlename() {
  let myId = localStorage.getItem('temp_userId');
  database.ref().child("profiles/" + myId).update({ middlename: middlename_input.value });
  location.reload();
}

function updateLastname() {
  let myId = localStorage.getItem('temp_userId');
  database.ref().child("profiles/" + myId).update({ lastname: lastname_input.value });
  location.reload();
}

function updateBio() {
  let myId = localStorage.getItem('temp_userId');
  database.ref().child("profiles/" + myId).update({ bio: bio_input.value });
  location.reload();
}

$('.btn-add-description').click(function (e) {
  e.preventDefault();
  $('.description-popup-container').show();
  $('.btn-add-desc').show();
  $('.btn-del-desc').hide();
});

$('.btn-add-desc').click(function (e) {
  e.preventDefault();

  if ($('.btn-add-desc').text() == 'Add') {
    addDesc();
  } else {
    updateDesc(descItemId);
  }
});

$('.btn-del-desc').click(function (e) {
  e.preventDefault();

  if ($('.btnDeleteDesc').text() == 'Delete') {
    delDescPopUp();
  } else {
    deleteDesc(descItemId);
  }
})

$('.btn-cancel-desc').click(function (e) {
  e.preventDefault();

  closeDescPopUp();
})

function delDescPopUp() {

  $('.btn-del-desc').show();
  $('.btn-del-desc').text('Yes');
  $('.btn-add-desc').hide();

  $('.desc-popup-title').text("You are Deletin'")

  $(".description-popup-container").show();
}

$('.delete-description').click(function (e) {
  delDescPopUp();
})

function closeDescPopUp() {
  document.getElementById("description-popup-container").style.display = "none";

  $('.desc-popup-title').text('What Do You Do & Where?');

  document.getElementById("edit-text_what").value = '';
  document.getElementById("edit-text_where").value = '';

  $('.btn-add-desc').text('Add');
  $('.btnDeleteDesc').text('Delete');
  location.reload();
}

$('.select-what').click(function (e) {
  if ($('.menu-what').is(":hidden")) {
    $('.desc-popup-title').hide();
    $('.dropdown-container-where').hide();
    $('.menu-what').show();
    $('.btn-add-desc').hide();

    document.getElementById("select-what").style.position = "relative";
    document.getElementById("select-what").style.transform = "rotate(180deg)";
    document.getElementById("menu-what").style.position = "relative";
    document.getElementById('dropdown-container-what').style.marginTop = '12px';
  } else {
    $('.desc-popup-title').show();
    $('.dropdown-container-where').show();
    $('.menu-what').hide();
    $('.btn-add-desc').show();

    document.getElementById("select-what").style.transform = "rotate(360deg)";
    document.getElementById('dropdown-container-what').style.marginTop = '3px';
  }
});

function menuWhat() {
}

$('.select-where').click(function (e) {
  if ($('.where-menu-container').is(":hidden")) {
    $('.desc-popup-title').hide();
    $('.dropdown-container-what').hide();
    $('.where-menu-container').show();
    $('.btn-add-desc').hide();

    document.getElementById("edit-text-where").style.left = "2%"
    document.getElementById("select-where").style.position = "relative";
    document.getElementById("select-where").style.transform = "rotate(180deg)";
    document.getElementById("where-menu-container").style.position = "relative";
    document.getElementById('dropdown-container-where').style.marginTop = '12px';

    //  menuWhere();
  } else {
    $('.desc-popup-title').show();
    $('.dropdown-container-what').show();
    $('.where-menu-container').hide();
    $('.btn-add-desc').show();

    document.getElementById("select-where").style.transform = "rotate(360deg)";
    document.getElementById('dropdown-container-where').style.marginTop = '3px';
  }
});

function menuWhere() {
  firestore.collection("caribbean-cities").get().then((snapshot) => {
    let menuItems = [];
    snapshot.forEach((doc) => {
      menuItems.push({
        id: doc.id,
        ...doc.data()
      })
    })

    let menu = []
    menuItems.forEach((menuItem) => {
      let whereMenuContainer = document.getElementById('where-menu-container');
      let whereMenu = document.createElement("div");
      whereMenu.classList.add("menu-where");

      whereMenu.addEventListener("click", function () {

        menuItemId = menuItem.id;
      })

      whereMenu.innerText = menuItem.Country + ', ' + menuItem.City;

      whereMenuContainer.appendChild(whereMenu);

      menu.push(whereMenuContainer);
    });
    document.querySelector('where-menu-container').replaceChildren(...menuItems);
  });
}

$('.add-interestBtn_a').click(function (e) {
  let interest = prompt("An Activity or Subject\n You're interested in", '');
  if (interest != null) {
    addInterest(interest);
  }
})

function generateMyLinqEdit_Interests(myId) {
  firestore.collection("interests").where("userId", "==", myId)
    .get()
    .then((snapshot) => {
      let interestItems = [];
      snapshot.docs.forEach((doc) => {
        interestItems.push({
          id: doc.id,
          ...doc.data()
        })
      })

      let interests = []
      interestItems.forEach((interestItem) => {

        let linqInterestsList = document.getElementById('linq_interests');
        let linqInterestContainer = document.createElement('div');
        linqInterestContainer.classList.add('interest-container')
        let linqInterest = document.createElement("div");
        linqInterest.classList.add("interest-item");

        linqInterest.addEventListener("click", function () {

          interestItemId = interestItem.id;
          let interest = confirm('Delete ' + interestItem.interest + '?');

          if (interest == true) {
            delInterest(interestItemId);
          }
        })

        let deleteInt = document.createElement('div');
        deleteInt.classList.add('delete-interest');

        deleteInt.innerHTML = "<i class='bx bx-x'></i>";

        linqInterest.innerText = interestItem.interest;

        linqInterestContainer.appendChild(linqInterest);
        linqInterestContainer.appendChild(deleteInt);
        linqInterestsList.appendChild(linqInterestContainer);

        interests.push(linqInterestsList);
      });
      document.querySelector('linq_interests').replaceChildren(...interests);
    });
}

function addInterest(interest) {

  if (interest != '') {
    let newItem = firestore.collection("interests").add({
      userId: localStorage.getItem('temp_userId'),
      interest: interest
    })
      .then((docRef) => {
        location.reload();
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}

function delInterest(interestItemId) {
  firestore.collection("interests").doc(interestItemId).delete().then(() => {
    location.reload();
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
};

function generateWhatWhereAdd(id) {
}

function getWhatWhereItems(linqId) {

  firestore.collection("what-where-items").where("userId", "==", linqId)
    .get()
    .then((snapshot) => {
      let whatWhereItems = [];
      snapshot.docs.forEach((doc) => {
        whatWhereItems.push({
          id: doc.id,
          ...doc.data()
        })
      })
      generateMyLinqDisplay(whatWhereItems);
    })
};

function generateMyLinqDisplay(whatWhereItems) {
  let whatWhere = [];
  whatWhereItems.forEach((whatWhereItem) => {

    /* Display */
    let descContainer = document.getElementById('my_linq_description_container');
    descContainer.innerHTML = '';
    let desc = document.createElement("div");
    desc.classList.add("my_linq_description");

    desc.innerText = "► " + whatWhereItem.what + " @ " + whatWhereItem.where;

    descContainer.appendChild(desc);
    whatWhere.push(descContainer);
  });
  document.querySelector('my_linq_description_container').replaceChildren(...whatWhere);
}

function generateMyLinqEdit(linqId) {

  firestore.collection("what-where-items").where("userId", "==", myId)
    .get()
    .then((snapshot) => {
      let whatWhereItems = [];
      snapshot.docs.forEach((doc) => {
        whatWhereItems.push({
          id: doc.id,
          ...doc.data()
        })
      })

      let whatWhere = []
      whatWhereItems.forEach((whatWhereItem) => {

        let editDescContainer = document.getElementById('my-linq-edit-description-container');
        let editDesc = document.createElement("div");
        editDesc.classList.add("my-linq-edit-description");
        editDesc.addEventListener("click", function () {
          descItemId = whatWhereItem.id;
          updateDescPopUp(descItemId);
        })

        let delDesc = document.createElement('div');
        delDesc.classList.add('delete-description');
        /*        delDesc.addEventListener("click", function(){
                  delDescPopUp();
                })
        */
        editDesc.innerText = "► " + whatWhereItem.what + " @ " + whatWhereItem.where

        delDesc.innerHTML = "<i class='bx bx-x'></i>";

        editDescContainer.appendChild(delDesc);
        editDescContainer.appendChild(editDesc);

        whatWhere.push(editDescContainer);
      });
      document.querySelector('my_linq_edit-description_container').replaceChildren(...whatWhere);
    });
  menuWhere();
}

function addDesc() {

  let myId = localStorage.getItem('temp_userId');

  let text_what = document.getElementById("edit-text_what");
  let text_where = document.getElementById("edit-text_where");

  if (text_what.value == '' || text_where.value == '') {
    alert('What You Do or Where: is not typed in')
  } else {
    // Add a new document with a generated id.
    firestore.collection("what-where-items").add({
      userId: myId,
      what: text_what.value,
      where: text_where.value
    })
      .then((docRef) => {
        closeDescPopUp();
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
};

/* Temporary */
function addCities() {

  let myId = localStorage.getItem('temp_userId');

  let text_what = document.getElementById("edit-text_what");
  let text_where = document.getElementById("edit-text_where");

  if (text_what.value == '' || text_where.value == '') {
    alert('What You Do or Where: is not typed in')
  } else {
    // Add a new document with a generated id.
    firestore.collection("caribbean-cities").add({
      Country: text_what.value,
      City: text_where.value
    })
      .then((docRef) => {
        //       closeDescPopUp();
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
};

function updateDescPopUp(id) {

  $('.btn-add-desc').show();
  $('.btn-del-desc').hide();
  $('.btn-add-desc').text('Update');

  $(".description-popup-container").show();

  let text_what = document.getElementById("edit-text_what");
  let text_where = document.getElementById("edit-text_where");

  let item = firestore.collection("what-where-items").doc(id);
  item.get().then(function (doc) {
    if (doc.exists) {
      let text_what = document.getElementById("edit-text_what");
      let text_where = document.getElementById("edit-text_where");

      text_what.value = doc.data().what;
      text_where.value = doc.data().where;
    }
  })
};

function updateDesc(descItemId) {

  let text_what = document.getElementById("edit-text-what");
  let text_where = document.getElementById("edit-text-where");

  firestore.collection("what-where-items").doc(descItemId).update({
    what: text_what.value,
    where: text_where.value
  })
    .then(() => {
      closeDescPopUp();
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

function deleteDesc(descItemId) {
  firestore.collection("what-where-items").doc(descItemId).delete().then(() => {
    closeDescPopUp();
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
};

$('.story1').click(function (e) {
  e.preventDefault();
  openForm();
});

function generateFlavor(taste) {
  //  let taste;
  let noFlavors = '6';
  let previousFlavor;

  /* firebase.database().ref('/profiles/' + userId).once('value').then((snapshot) => {
    taste = snapshot.val().flavor_color;
    // ...
    console.log(taste) */

  for (var i = 0; i < noFlavors; i++) {

    let flavorsContainer = document.getElementById('flavorsBtnContainer');
    flavorsContainer.style.cssText = 'background-color: white; width: 98%; margin: 1%; border-radius: 5rem 5rem 5rem 5rem'

    let btnFlavors = document.createElement('div');
    btnFlavors.classList.add('btn-flavors');
    imgFlavors = document.createElement('img');
    imgFlavors.classList.add('img-flavors')
    imgFlavors.style.scale = '0.7'

    if (getFlavor(i) == taste) {
      imgFlavors.src = '../linq/img/linq/Linq_Logo_White_1.png'
      btnFlavors.style.cssText = 'background-color:' + getFlavor(i);

      previousFlavor = i;
      generateFlavorImg(taste); //Generating Linq's Preferred Flavor
    } else {
      imgFlavors.style.cssText = 'scale: 0.7'
      imgFlavors.src = getFlavorLogo(i)
    }
    makingFlavor(i);

    function makingFlavor(flavor) {
      btnFlavors.addEventListener("click", () => {
        unselectFlavor(previousFlavor).then(selectFlavor(flavor))
      });

    }
    function selectFlavor(flavor) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (getFlavor(flavor) == taste) {
            let allImgFlavors = document.querySelectorAll('.img-flavors');

            imgFlavors.src = '../linq/img/linq/Linq_Logo_White_1.png'
            btnFlavors.style.cssText = 'background-color:' + getFlavor(flavor);

            allImgFlavors[5].src = getFlavorLogo(5) //Contain last index
          } else {
            btnFlavors.style.cssText = 'border: 2px solid ' + getFlavor(flavor);

            var y = $(window).scrollTop();
            $('html, body').animate({ scrollTop: y + 150 })
          }
          const err = false;
          if (!err) {
            previousFlavor = flavor;
            generateFlavorImg(getFlavor(flavor))
            resolve();
          } else {
            reject();
          }
        }, 100)
      });
    }
    function unselectFlavor(previousFlavor) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let allFlavors = document.querySelectorAll('.btn-flavors');
          let allImgFlavors = document.querySelectorAll('.img-flavors');
          if (getFlavor(previousFlavor) == taste) {

            //  allFlavors[previousFlavor].style.cssText = 'background-color:' + getFlavor(previousFlavor);
          } else {
            allImgFlavors[previousFlavor].src = getFlavorLogo(previousFlavor);
            allFlavors[previousFlavor].style.cssText = 'border: none;'
          }

          const err = false;
          if (!err) {
            $("#flavorsImgContainer").load(location.href + " #flavorsImgContainer");
            resolve();
          } else {
            reject();
          }
        }, 50)
      });
    }
    btnFlavors.appendChild(imgFlavors)
    document.getElementById('flavorsBtnContainer').appendChild(btnFlavors);
  }
  //  });
}

/* let flavorItems = [
  { color: 'orange', pair: 1, orientation: 'portrait', url: 'src/assets/img/photo-1570978561297-793391262fea.webp' },
  { color: 'orange', pair: 1, orientation: 'landscape', url: 'src/assets/img/ripe-peaches.jpeg' },
  { color: 'red', pair: 3 },
  { color: 'purle', pair: 2 }
]; */

function generateFlavorImg(flavor) {
  let flavor_color;
  let flavor_pair;
  let previousPair;
  let selectedPairId;

  if (flavor == 'darkcyan') {
    flavor_color = 'blue'
  } else if (flavor == 'orange') {
    flavor_color = 'yellow';
  } else {
    flavor_color = flavor;
  }

  firestore.collection('linq-flavors').where('color', '==', flavor_color)
    .get()
    .then((snapshot) => {
      let flavorItems = [];
      snapshot.docs.forEach((doc) => {
        flavorItems.push({
          id: doc.id,
          ...doc.data()
        })
      });

      let flavors = []
      flavorItems.forEach((flavorItem, index) => {
        let flavorImgContainer = document.getElementById('flavorsImgContainer');
        let flavorPairContainer = document.createElement('div');
        flavorPairContainer.classList.add('flavor-pair-container');
        let portraitImg = document.createElement('img');
        portraitImg.classList.add('protrait-img');
        let landscapeImg = document.createElement('img');
        landscapeImg.classList.add('landscape-img');

        if (flavorItem.gsURL_1) {
          storage.refFromURL(flavorItem.gsURL_1).getDownloadURL().then((gsUrl) => {
            portraitImg.src = gsUrl;
          });
        }
        portraitImg.style.cssText = 'height: 180px; width: 30%; max-width: 33%; margin:1%; border: 2px solid green; border-radius: 7%; object-fit: cover'

        if (flavorItem.gsURL_2) {
          storage.refFromURL(flavorItem.gsURL_2).getDownloadURL().then((gsUrl) => {
            landscapeImg.src = gsUrl;
          });
        }
        landscapeImg.style.cssText = 'height: 180px; width: 66%; max-width: 67%; margin:1%; border: 2px solid green; border-radius: 5%; object-fit: cover'

        flavorsImgContainer.style.cssText = 'position: relative; display: block; width:100%; margin: 1%; padding: 1%'

        flavorPairContainer.style.cssText = 'position: relative; display: flex; width: 98%; justify-content: space-between'

        var timer;
        //Time of the long press
        const tempo = 1000; //Time 1000ms = 1s
        flavorPairContainer.onmousedown = () => {
          timer = setTimeout(function () {
            selectedPairId = flavorItem.id;

            unselectPair(previousPair).then(selectPair(index))

            openModalButtons.forEach(button => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openModal(modal)
            })
          }, tempo);
        };
        flavorPairContainer.onmouseup = () => {
          clearTimeout(timer);
        };

        portraitImg.onclick = event => {
          if (event.detail === 1) {
            // it was a single click
            selectedPairId = flavorItem.id;

            unselectPair(previousPair).then(selectPair(index))
          } else if (event.detail === 2) {
            // it was a double click
            openModalButtons.forEach(button => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openImgModal(modal, 'portrait', portraitImg.src)
            })
          }
        };
        landscapeImg.onclick = event => {
          if (event.detail === 1) {
            // it was a single click
            unselectPair(previousPair).then(selectPair(index))
          } else if (event.detail === 2) {
            // it was a double click
            openModalButtons.forEach(button => {
              const modal = document.querySelector(button.dataset.modalTarget)
              openImgModal(modal, 'lanscape', landscapeImg.src)
            })
          }
        };

        document.getElementById('modalYes').addEventListener('click', () => {
          modalYes('flavor', selectedPairId)
        })

        function selectPair(pair) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              flavorPairContainer.style.cssText = 'height: 188.5px; width: 98%; background-color: green; border-radius: 1rem; justify-content: center'
              const err = false;
              if (!err) {
                previousPair = pair;
                resolve();
              } else {
                reject();
              }
            }, 50)
          });
        }
        function unselectPair(previousPair) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              let allPairs = document.querySelectorAll('.flavor-pair-container');
              allPairs[previousPair].style.cssText = 'height: 188.5px; width: 98%; background-color: none; border-radius: 1rem; justify-content: space-between'
              const err = false;
              if (!err) {
                resolve();
              } else {
                reject();
              }
            }, 25)
          });
        }

        flavorPairContainer.appendChild(portraitImg);
        flavorPairContainer.appendChild(landscapeImg);
        flavorImgContainer.appendChild(flavorPairContainer);

        flavors.push(flavorImgContainer);
      });
      document.querySelector('flavorsImgContainer').replaceChildren(...flavors);
    });
}

function applyFlavor(selectedPairId) {
  database.ref().child('profiles/' + myId).update({
    linq_flavor_id: selectedPairId
  })
}

function getFlavorLogo(noFlavor) {
  let flavor;
  if (noFlavor == 1) {
    //do something with value;
    flavor = '../linq/img/linq/Linq_Logo_Orange_1.png'
  } else if (noFlavor == 2) {
    flavor = '../linq/img/linq/Linq_Logo_Green_1.png'
  } else if (noFlavor == 3) {
    flavor = '../linq/img/linq/Linq_Logo_Blue_1.png'
  } else if (noFlavor == 4) {
    flavor = '../linq/img/linq/Linq_Logo_Purple_1.png'
  } else if (noFlavor == 5) {
    flavor = '../linq/img/linq/Linq_Logo_Pink_1.png'
  } else if (noFlavor == 0) {
    flavor = '../linq/img/linq/Linq_Logo_Red_1.png'
  }
  return flavor;
}

function getFlavor(noFlavor) {
  let flavor;
  if (noFlavor == 1) {
    //do something with value;
    flavor = 'orange'
  } else if (noFlavor == 2) {
    flavor = 'green'
  } else if (noFlavor == 3) {
    flavor = 'darkcyan'
  } else if (noFlavor == 4) {
    flavor = 'purple'
  } else if (noFlavor == 5) {
    flavor = 'magenta'
  } else if (noFlavor == 0) {
    flavor = 'red'
  }
  return flavor;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

  $('.modal-header').show();
  $('.modal-body').show();
  $('.btnConfirmModal').show();
}

function openImgModal(modal, orientation, url) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

  $('.modal-header').hide();
  $('.modal-body').hide();
  $('.btnConfirmModal').hide();

  if (orientation == 'portrait') {
    document.getElementById('modal').style.cssText = "content: url(" + url + "); width: 450px; height: 95%; max-height: 95%; object-fit: cover; border-radius: 5rem;"
  } else {
    document.getElementById('modal').style.cssText = "content: url(" + url + "); width: 75%; height: 95%; max-height: 90%; object-fit: cover; border-radius: 5rem"
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
function modalYes(confirmation, getDoneId) {
  if (confirmation == 'flavor') {
    applyFlavor(getDoneId)
    closeModal(modal)
    location.reload()
  } else if (confirmation == 'comment') {
    closeModal(modal)
  } else if (confirmation == 'reply') {
    closeModal(modal)
  }
}

function closeModal(modal) {
  if (modal == null) return
  /*Reset*/
  $('.modal-header').empty();
  $('.modal-body').empty();

  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`)
    }, delay)
  })
}

/* Post controls */
$('.comment8').click(function (e) {
  e.preventDefault();
  $('.commentContainer8').toggle();
  $('.comment-input-container8').toggle();
});
/* Post controls' end */

function getLinqs() {
  firestore.collection("linq-linq")
    .get()
    .then((snapshot) => {
      //See generateChats()
      let linqItems = [];
      snapshot.docs.forEach((doc) => {
        linqItems.push({
          id: doc.id,
          ...doc.data()
        })
      });
      let linqs = [];
      linqItems.forEach((linqItem) => {
        database.ref('/profiles/' + linqItem.id).once('value').then((snapshot) => {
          let profile = snapshot.val();
          let username = snapshot.val().username;
          let status = snapshot.val().status;

          if (status && status == 'hidden'){
          } else {

          let linqs_container = document.getElementById('linqs-container');
          let linqs_list = document.createElement('div');
          linqs_list.classList.add('linqs-list');
          let linq = document.createElement('div');
          linq.classList.add('linq-linq');
          let linq_img = document.createElement('img');
          linq_img.classList.add('linq-img');
          let linq_username = document.createElement('div');
          linq_username.classList.add('linq-username');
          let linq_icon = document.createElement('img');
          linq_icon.classList.add('linq-icon');

          linq.style.cssText = 'display: flex;  background: rgba(255, 255, 255, .5); justify-content: space-between; margin-bottom:1%; padding-top: 1%; padding-bottom: 1%; padding-right: 3%; padding-left: 1%; border: 1.5px solid white; border-radius: 2rem;'

          linq.addEventListener("click", function () {            
            $('.my-linq').show();
            $('.linqs-container').hide();

            $('.my-linq-heading').hide();
            $('.bx-cog').hide();
            $('.bxs-info-circle').show();

            $(".my_linq_edit").hide();
            $(".my_linq_display").show();
            $(".my_linq_display").css('margin-top', '28%');
            $('.flow-content').show();
            $('.flow-content').css('margin-top', '35px');
            $(".flow-top-container").hide();
            my_linq_posts_list.style.cssText = 'display: block';
            $('.my-linq-posts-container').show();
            //$('.my-linq-posts-grid').show();
            $('.my-linq-posts-list').css('margin-top', '35px');

            getLinqInfo(linqItem.id)
            generateMyLinqPosts_Filters(linqItem.id)
            generatePosts(linqItem.id, 'myLinq', my_linq_posts_list);

            $('.bxs-info-circle').click(function (e) {
              e.preventDefault();

              firestore.collection("linq-linq").doc(linqItem.id)
                .get()
                .then((doc) => {
                  if (doc.data().isHeartBeat == false) {
                    let infoImg = '../linq/img/others/info-fallen-soldier.jpeg'

                    // Open Modal
                    if (modal == null) return
                    modal.classList.add('active')
                    overlay.classList.add('active')

                    $('.modal-header').hide();
                    $('.modal-body').hide();
                    $('.btnConfirmModal').hide();

                    document.getElementById('modal').style.cssText = "content: url(" + infoImg + "); width: 400px; height: 400px; object-fit: contain; border-radius: 5rem;"
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                });
            });
          });

          if (profile.gsURL) {
            storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
              linq_img.src = gsUrl;
            });
          } else if (profile.photoUrl) {
            linq_img.src = profile.photoUrl;
          } else if (profile.photoURL) {
            linq_img.src = profile.photoURL;
          }
          //Styling can be moved to chat.css
          linq_img.style.cssText = 'height: 45px; width: 45px; border-radius: 50%; object-fit: cover;'
          linq_username.style.cssText = 'color: green; font-size: 1.3em; font-weight: bold; margin-right: 10%; margin-left: 10%; padding-top: 2%;'

          linq_username.innerText = username;

          linq_icon.src = '../linq/img/linq/Linq_Logo_Grey_0.png'

          firestore.collection("linq-linq").doc(linqItem.id).collection("linqed")
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) => {

                let item = linqItems.find(item => item.id === doc.id)

                let linqed = item.id == doc.id;

                if (linqed) {
                  linq_icon.src = '../linq/img/linq/Linq_Logo_Blue_1.png'
                } else {
                  linq_icon.src = '../linq/img/linq/Linq_Logo_Grey_0.png'
                }
              })
            });

          linq_icon.style.cssText = "height: 40px; width: 40px; font-size: 1.4rem; color: red; padding-top: 2%;"

          linq.appendChild(linq_img)
          linq.appendChild(linq_username)
          linq.appendChild(linq_icon)

          if (linqItem.id == myId) {

          } else {
            linqs_list.appendChild(linq)
          }

          linqs_container.appendChild(linqs_list)
          linqs.push(linqs_container);
        }
        });
        
        // document.querySelector('conversations-container').replaceChildren(...chats);
      });
    });
}

// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list_activities = document.getElementById("list-activities");
const list_tasks = document.getElementById("list-tasks");
const list_projects = document.getElementById("list-projects");
const input = document.getElementById("calendar_add");

$(".item-tasks").addClass("item");
$(".item-projects").addClass("item");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localstorage
let data_activities = localStorage.getItem("TODO");

$('.button-tasks').click(function (e) {
  e.preventDefault();

  document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";

  $('.sidebar').hide();
  $('.side_nav').show();

  $('.info_a').hide();
  $('.info_b').hide();

  //$('.flow-content').hide();
  $('.flow-content').css('margin-top', '15%');
  $('#message-form').hide();
  $('.chat-container').hide();

  $('.conversations-container').hide();
  $('.my_linq').hide();

  $('.main-container').show();

  $('.activities-content').hide();
  $('.tasks-content').show();
  $('.projects-content').hide();

  document.getElementById('button-activities').style.backgroundColor = 'green';
  document.getElementById('button-activities').style.color = 'white';

  document.getElementById('button-tasks').style.backgroundColor = 'white';
  document.getElementById('button-tasks').style.color = 'green';

  document.getElementById('button-projects').style.backgroundColor = 'green';
  document.getElementById('button-projects').style.color = 'white';

  data_activities = null;
  let data_tasks = localStorage.getItem("TASKS");
  data_projects = null;

  // load items to the user's interface
  function loadList(array) {
    array.forEach(function (item) {
      addToDo(item.name, item.id, item.done, item.trash);
    });
  }

  // check if data is not empty
  if (data_tasks) {
    LIST = JSON.parse(data_tasks);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
  } else {
    // if data isn't empty
    LIST = [];
    id = 0;
  }

  // target the items created dynamically
  list_tasks.addEventListener("click", function (event) {
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob == "complete") {
      completeToDo(element);
    } else if (elementJob == "delete") {
      removeToDo(element);
    }

    // add item to localstorage ( this code must be added where the LIST array is updated)
    
    //localStorage.setItem("TASKS", JSON.stringify(LIST));
  });
});

$('.button-projects').click(function (e) {
  e.preventDefault();

  document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";

  $('.sidebar').hide();
  $('.side_nav').show();

  $('.info_a').hide();
  $('.info_b').hide();

  //$('.flow-content').hide();
  $('.flow-content').css('margin-top', '120px');
  $('#message-form').hide();
  $('.chat-container').hide();

  $('.conversations-container').hide();
  $('.my_linq').hide();

  $('.main-container').show();

  $('.activities-content').hide();
  $('.tasks-content').hide();
  $('.projects-content').show();

  document.getElementById('button-activities').style.backgroundColor = 'green';
  document.getElementById('button-activities').style.color = 'white';

  document.getElementById('button-tasks').style.backgroundColor = 'green';
  document.getElementById('button-tasks').style.color = 'white';

  document.getElementById('button-projects').style.backgroundColor = 'white';
  document.getElementById('button-projects').style.color = 'green';

  data_activities = null;
  data_tasks = null;
  let data_projects = localStorage.getItem("TODO_projects");

  // check if data is not empty
  if (data_tasks) {
    LIST = JSON.parse(data_tasks);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
  } else {
    // if data isn't empty
    LIST = [];
    id = 0;
  }

  // target the items created dynamically
  list_tasks.addEventListener("click", function (event) {
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob == "complete") {
      completeToDo(element);
    } else if (elementJob == "delete") {
      removeToDo(element);
    }

    // add item to localstorage ( this code must be added where the LIST array is updated)
    
    //localStorage.setItem("TODO_tasks", JSON.stringify(LIST));
  });
});

$('.button-activities').click(function (e) {
  e.preventDefault();

  document.getElementById("img_side_nav").src = "../linq/img/icons/menu_green.png";

  $('.sidebar').hide();
  $('.side_nav').show();

  $('.info_a').hide();
  $('.info_b').hide();

  //$('.flow-content').hide();
  $('.flow-content').css('margin-top', '120px');
  $('#message-form').hide();
  $('.chat-container').hide();

  $('.conversations-container').hide();
  $('.my_linq').hide();

  $('.main-container').show();

  $('.activities-content').show();
  $('.tasks-content').hide();
  $('.projects-content').hide();

  document.getElementById('button-activities').style.backgroundColor = 'white';
  document.getElementById('button-activities').style.color = 'green';

  document.getElementById('button-tasks').style.backgroundColor = 'green';
  document.getElementById('button-tasks').style.color = 'white';

  document.getElementById('button-projects').style.backgroundColor = 'green';
  document.getElementById('button-projects').style.color = 'white';

  let data_activities = localStorage.getItem("TODO");
  data_projects = null;
  data_tasks = null;


  // check if data is not empty
  if (data_activities) {
    LIST = JSON.parse(data_activities);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
  } else {
    // if data isn't empty
    LIST = [];
    id = 0;
  }

  // target the items created dynamically
  list_activities.addEventListener("click", function (event) {
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob == "complete") {
      completeToDo(element);
    } else if (elementJob == "delete") {
      removeToDo(element);
    }

    // add item to localstorage ( this code must be added where the LIST array is updated)
    
    //localStorage.setItem("TODO", JSON.stringify(LIST));
  });
});

// clear the local storage
clear.addEventListener("click", function () {
  $('.calendar').show();
  $('.main-container').hide();

  document.getElementById("img_side_nav").src = "../linq/img/icons/menu_back_green.png";
});

// Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function
function addToDo(toDo, id, done, trash) {

  if (trash) { return; }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

  const position = "beforeend";

  if (data_activities) {
    list_activities.insertAdjacentHTML(position, item);
  }
  /*
    if (data_tasks) {
      list_tasks.insertAdjacentHTML(position, item);
    }
  
    if (data_projects) {
      list_projects.insertAdjacentHTML(position, item);
    }
    */
}

// add an item to the list user the enter key
input.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    // if the input isn't empty
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      // add item to localstorage ( this code must be added where the LIST array is updated)
      
      //localStorage.setItem("TODO", JSON.stringify(LIST));

      id++;
    }
    input.value = "";
  }
});

// complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}
/*To-do End*/

/* Weather */

function getWeather() {
  //Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
  var inputval = document.querySelector('#weather_input')
  var btn = document.querySelector('#weather_submit');
  var city = document.querySelector('#cityoutput')
  var descrip = document.querySelector('#description')
  var temp = document.querySelector('#temp')
  var wind = document.querySelector('#wind')

  var inputLocation = localStorage.setItem('savedWeather', inputval.value);
  var weather_location = '';

  apik = "3045dd712ffe6e702e3245525ac7fa38"

  //kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

  function convertion(val) {
    return (val - 273).toFixed(2)
  }
  //Now we have to collect all the information with the help of fetch method

  btn.addEventListener('click', function () {

    $('.weather-display-container').show();
    $('.weather-input-container').hide();

    //This is the api link from where all the information will be collected

    if (localStorage.getItem('savedWeather')) {
      weather_location = localStorage.getItem('savedWeather');
    } else {
      weather_location = inputval.value;
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + weather_location + '&appid=' + apik)
      .then(res => res.json())

      //.then(data => console.log(data))

      .then(data => {

        //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
        city.innerHTML = `${nameval}`
        temp.innerHTML = `Temperature: ${convertion(tempature)} °C`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

      })

      //Now the condition must be added that what if you do not input anything in the input box.
      .catch(err => alert('You entered Wrong city name'))
  });
  //If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.

  $('.weather-display-container').click(function (e) {
    $('.weather-display-container').hide();
    $('.weather-input-container').show();
  });
}

function getLinqInfo(linqId) {
  //Getting profile data

  let gsURL = '';
  let photoURL = '';
  let linqPhotoURL = '';

  database.ref('profiles/' + linqId).once('value').then((snap_a) => {

    if (snap_a) {
      if (snap_a.val().username) {
        username = snap_a.val().username;
      } else {
        username = 'Linq';
      }
      if (snap_a.val().firstname) {
        firstname = snap_a.val().firstname;
      } else {
        firstname = 'Linq';
      }
      if (snap_a.val().middlename) {
        middlename = snap_a.val().middlename;
      } else {
        middlename = '';
      }
      if (snap_a.val().lastname) {
        lastname = snap_a.val().lastname;
      } else {
        lastname = 'Linq';
      }
      if (snap_a.val().email) {
        email = snap_a.val().email;
      } else {
        email = 'linq@linq.eco';
      }
      if (snap_a.val().bio) {
        bio = snap_a.val().bio;
      } else {
        bio = 'I AM That I AM'
      }
      if (snap_a.val().linq_flavor_id) {
        let tasteId = snap_a.val().linq_flavor_id;

        firestore.collection('linq-flavors').doc(tasteId).get().then((doc) => {
          if (doc.data().color == 'blue') {
            let flavor = 'darkcyan'
            generateFlavor(flavor);
          } else if (doc.data().color == 'yellow') {
            let flavor = 'orange'
            generateFlavor(flavor);
          } else {
            let flavor = doc.data().color
            generateFlavor(flavor);
          }
          generateImgBackground(doc.data());
        })
      } else {
        tasteId = 'LrraZO2LNbIDyyQF99M4';

        firestore.collection('linq-flavors').doc(tasteId).get().then((doc) => {
          if (doc.data().color == 'blue') {
            let flavor = 'darkcyan'
            generateFlavor(flavor);
          } else if (doc.data().color == 'yellow') {
            let flavor = 'orange'
            generateFlavor(flavor);
          } else {
            let flavor = doc.data().color
            generateFlavor(flavor);
          }
          generateImgBackground(doc.data());
        })
      }
    }
    // Catching profile's gsURL or photoURL
    if (snap_a.val().gsURL && snap_a.val().gsURL != '') {
      gsURL = (snap_a.val().gsURL)
    } else if (snap_a.val().photoURL) {
      photoURL = snap_a.val().photoURL
    } else {
      photoURL = '../linq/img/linq/Linq_Logo_Green_0.png'
    }

    document.getElementById('post-input').placeholder = 'What do you think ' + firstname + '?';

    if (gsURL != '') {

      storage.refFromURL(gsURL).getDownloadURL()
        .then((url) => {

          if (linqId == myId) {
            photoURL = url;
            document.getElementById("sidebar_linq_img").src = photoURL;
            document.getElementById("my_linq_img").src = photoURL;
            document.getElementById("my_linq_img_edit").src = photoURL;
          } else {
            linqPhotoURL = url;
            document.getElementById("my_linq_img").src = linqPhotoURL;
          }
        })
        .catch((error) => {
          // Handle any errors
        });

    } else {
      if (linqId == myId) {
        document.getElementById("sidebar_linq_img").src = photoURL;
        document.getElementById("my_linq_img").src = photoURL;
      } else {
        document.getElementById("my_linq_img").src = photoURL;
      }
    }

    /* Display */
    if (linqId == myId) {
      document.getElementById("sidebar_linq_name").innerText = firstname;
      //$("sidebar_linq_name").attr("placeholder", firstname);
      document.getElementById("my_linq_name").innerText = firstname + ' ' + middlename + ' ' + lastname;
      document.getElementById("my_linq_bio").innerText = bio;
      //document.getElementById("post_linq_name_9").innerText = firstname;
      //document.getElementById("post_linq_name_0").innerText = fullname;

      /* Edit */
      $("#my_linq_username-input").attr("placeholder", username);
      $("#my_linq_firstname-input").attr("placeholder", firstname);
      $("#my_linq_middlename-input").attr("placeholder", middlename);
      $("#my_linq_lastname-input").attr("placeholder", lastname);
      $("#my_linq_bio-input").attr("placeholder", bio);
    } else {
      document.getElementById("my_linq_name").innerText = firstname + ' ' + middlename + ' ' + lastname;
      document.getElementById("my_linq_bio").innerText = bio;
    }
  });

  generateMyLinqEdit(linqId);
  getWhatWhereItems(linqId);
  generateMyLinqEdit_Interests(linqId);
};

function generateImgBackground(flavorDoc) {
  const myMediaQuery = window.matchMedia('(min-width: 455.3px)'); //Monty Shokeen

  // Initialize 
  widthChangeCallback(myMediaQuery, flavorDoc.gsURL_1, flavorDoc.gsURL_2);

  // Listen for resize
  myMediaQuery.addEventListener('change', widthChangeCallback(myMediaQuery, flavorDoc.gsURL_1, flavorDoc.gsURL_2));
}

function widthChangeCallback(myMediaQuery, gsURL_1, gsURL_2) {

  if (myMediaQuery.matches) {
    storage.refFromURL(gsURL_2).getDownloadURL().then((img) => {
      document.getElementById('home_background').src = img;
    });
  } else {
    storage.refFromURL(gsURL_1).getDownloadURL().then((img) => {
      document.getElementById('home_background').src = img;
    })
  }
}
