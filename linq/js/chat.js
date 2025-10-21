// Initialize variables
// let myId = auth.currentUser.uid;
var recipientId = '';
var fullname = '';
var photoURL = '';
var email = '';
var firstname = '';
var linqId = '';
let check = false;

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging();

/* function requestPermission() {
// console.log('Requesting permission...');
  Notification.requestPermission()
  .then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else {
    }
  })
} */

messaging.requestPermission()
.then(function() {
  console.log('Have permission');
  return messaging.getToken();
})
.then(function(token) {
  console.log(token)
})
.catch(function(err) {
  console.log('Error Occured.')
})

function getConversations() {
//  firestore.collection("chats").where('startedBy', '==', myId)
  firestore.collection("chats").where('startedBy', '==', 'ft85Ac7KTWPu89UseWC1N0nllRt1')
    .get()
    .then((snapshot) => {
      //See generateChats()
      let convoItems = [];
      snapshot.docs.forEach((doc) => {
        convoItems.push({
          id: doc.id,
          ...doc.data()
        })
      });
      let convos = [];
      convoItems.forEach((convoItem) => {
        database.ref('/profiles/' + convoItem.clientId).once('value').then((snapshot) => {
          let profile = snapshot.val();
          //let username = snapshot.val().username;
          let username = 'Amen';

          let convos_container = document.getElementById('conversations-container')
          let convos_list = document.createElement('div');
          convos_list.classList.add('convo-list');
          let convo = document.createElement('div');
          convo.classList.add('convo');
          let convo_img = document.createElement('img');
          convo_img.classList.add('convo-img');
          let convo_username = document.createElement('div');
          convo_username.classList.add('convo-username');
          let convo_delete = document.createElement('div');
          convo_delete.classList.add('convo-delete');

          convo.style.cssText = 'display: flex; justify-content: space-between; margin-bottom:1%; padding-top: 1%; padding-bottom: 1%; padding-right: 3%; padding-left: 1%; border: 1.5px solid white; border-radius: 2rem; z-index: 5'

          convo.addEventListener("click", function () {
            $('.conversations-container').hide();
            $('.chat-container').show();
            document.getElementById("img_side_nav").src = "../linq/img/icons/menu_back_green.png";
            generateChat(username, convoItem.id);
          });

          if (profile.gsURL) {
            storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
              convo_img.src = gsUrl;
            });
          } else if (profile.photoUrl) {
            convo_img.src = profile.photoUrl;
          } else if (profile.photoURL) {
            convo_img.src = profile.photoURL;
          }
          //Styling can be moved to chat.css
          convo_img.style.cssText = 'width: 45px; height: 45px; border-radius: 50%; object-fit: cover;'
          convo_username.style.cssText = 'color: green; font-size: 1.3em; font-weight: bold; margin-right: 10%; margin-left: 10%; padding-top: 2%;'

          convo_username.innerText = username;

          convo_delete.innerHTML = "<i class='bx bxs-trash-alt'></i>"
          convo_delete.style.cssText = "font-size: 1.4rem; color: red; padding-top: 2%;"

          convo.appendChild(convo_img)
          convo.appendChild(convo_username)
          convo.appendChild(convo_delete)
          convos_list.appendChild(convo)
          convos_container.appendChild(convos_list)
          convos.push(convos_container);
        });
        // document.querySelector('conversations-container').replaceChildren(...chats);
      });
    });
}

function generateChat(username, chatId) {

  let chat_container = document.getElementById('chat-container');

  let recipient_name = document.getElementById('recipient-username');
  recipient_name.innerText = username;

  let chat_box = document.getElementById('chat-box');
  chat_box.innerHTML = '';

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  chat_box.style.cssText = 'height: 68vh';
}
  
  let message_input_container = document.getElementById('message-input-container');

  let message_input = document.createElement('input');
  message_input.classList.add('message-input');
  let message_add_icon = document.createElement('img');
  message_add_icon.classList.add('message-add-icon');
  message_add_icon.src = '../linq/img/linq/Add_Linq_Green_0.png'

  let imgFileInput = document.createElement('input');
  imgFileInput.classList.add('img-file-input');
  imgFileInput.type = 'file';
  imgFileInput.required = 'true';
  imgFileInput.style.display = 'none';
  message_add_icon.appendChild(imgFileInput);

  message_add_icon.addEventListener("click", function () {
    imgFileInput.onchange = event => {
      // getting a hold of the file reference
      let file = event.target.files[0];

      let reader = new FileReader();

      reader.onload = function (readerEvent) {
        readAsText(file); // reader.readAsText(file)
      }
      reader.readAsDataURL(file);
    }
    imgFileInput.click();
  })

  let message_send_icon = document.createElement('div');
  message_send_icon.classList.add('message-send-icon');
  message_send_icon.innerHTML = "<i class='bx bxs-send'></i>";

  message_send_icon.addEventListener("click", function () {
    //   let myId = localStorage.getItem('temp_userId');
    if (myId != null) {
      if (message_input.value != '') {

      } else if (fileToUpload != '') {
        uploadFile(fileToUpload, 'chat', 'chatId', 'messageId', 'image')
      } else {
        alert('You Did not Message 💬')
      }
    }
  });

  // database.ref('/posts/' + '-MRgXTx0Z9W-oQMqO2mK').once('value').then((snapshot) => {
  // let post = snapshot.val();
  let postId = '-MRgXTx0Z9W-oQMqO2mK'
  let postLike;
  let postLiked = false;
  let profile;
  let showingComments = false;

  firestore.collection("chats").doc(chatId).collection('messages').orderBy("createdDate", 'desc')
    .get()
    .then((snapshot) => {
      //See generateChats()
      let chatItems = [];
      snapshot.docs.forEach((doc) => {
        chatItems.push({
          id: doc.id,
          ...doc.data()
        })
      });

      let all_messages_container = document.createElement('div');
      all_messages_container.classList.add('all-messages-container');
      let chats = [];

      chatItems.forEach((chatItem) => {

        database.ref('/profiles/' + chatItem.messageBy).once('value').then((snapshot) => {
          profile = snapshot.val();

          generateMessages(chatItem, chatItem.id, profile, all_messages_container, true)

          chat_box.appendChild(all_messages_container); 
        })
      })
      //Find better alternative for scoll to bottom
      setTimeout(() => {
        all_messages_container.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    }, 5000)
    });

  message_input_container.innerHTML = '';
  message_input_container.appendChild(message_add_icon);
  message_input_container.appendChild(message_input);
  message_input_container.appendChild(message_send_icon);
}

function generateMessages(chatItem, chatItemId, profile, all_messages_container, showing) {
  // database.ref('post-comments/' + postId).orderByChild('createdDate').once('value', (snapshot) => {
  let chatItems = [];
  // let messagesCount = post.messagesCount;

  /* snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log(childData)
    postItems.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  }); */

  // postItems.reverse();
  // chatItems.forEach((chatItem, index) => {
  let message_main = document.createElement('div');
  message_main.classList.add('message-main');
  let message_container = document.createElement('div');
  message_container.classList.add('message-container');
  let message_author_img = document.createElement('img');
  message_author_img.classList.add('message-author-img');
  let message_linq = document.createElement('div');
  message_linq.classList.add('message-linq');
  let message_linq_icon = document.createElement('img');
  message_linq_icon.classList.add('message-linq-icon');
  let message_linq_edit = document.createElement('div');
  message_linq_edit.classList.add('message-linq-edit');
  let message = document.createElement('div');
  message.classList.add('message');
  let message_img = document.createElement('img');
  message_img.classList.add('message-img');
  message_img.style.cssText = 'display: none;'

  let message_text = document.createElement('div');
  message_text.classList.add('message-text');

  let message_activities_container = document.createElement('div');
  message_activities_container.classList.add('message-activities-container');

  /* database.ref('/profiles/' + postItem.authorId).once('value').then((snapshot) => {
    profile = snapshot.val();

    if (profile.gsURL) {
      storage.refFromURL(profile.gsURL).getDownloadURL().then((gsUrl) => {
        message_author_img.src = gsUrl;
      });
    } else if (profile.photoUrl) {
      message_author_img.src = profile.photoUrl;
    } else if (profile.photoURL) {
      message_author_img.src = profile.photoURL;
    }
  }) */

  if (chatItem.messageType && chatItem.messageType == 'text') {
    message_text.innerText = chatItem.messageText
    message_container.appendChild(message_text);
    // console.log(chatItem.messageText)
  }

  if (chatItem.messageType && chatItem.messageType == 'image') {
    message_img.style.cssText = 'display: block; max-height: 200px; width: 175px; border-radius: 1.7rem;'

    storage.refFromURL(chatItem.gsURL).getDownloadURL().then((message_imgUrl) => {
      message_img.src = message_imgUrl;
    });

    message_container.appendChild(message_img);    
  }

  if (chatItem.messageBy == myId) {
    message_linq_icon.src = '../linq/img/linq/Linq_Logo_Blue_1.png'
  } else {
    message_linq_icon.src = '../linq/img/linq/Linq_Logo_Grey_0.png'
    message_main.style.cssText = 'transform: translateX(7%);'
  }

  message_container.addEventListener("click", function () {
    // alert(postItem.id)
  })

  /* let reply = false;
  let message_reply_container = document.createElement('div');
  message_reply_container.classList.add('commnet-reply-container');
  let message_reply_input = document.createElement('input');
  message_reply_input.classList.add('message-reply-input');
  let message_reply_author_img = document.createElement('img');
  message_reply_author_img.classList.add('message-reply-author-img');

  firebase.database().ref('/profiles/' + myId).once('value').then((snapshot) => {
    let myProfile = snapshot.val();
    // ...      
    if (myProfile.gsURL) {
      storage.refFromURL(myProfile.gsURL).getDownloadURL().then((gsUrl) => {
        message_reply_author_img.src = gsUrl;
      });
    } else if (myProfile.photoUrl) {
      message_reply_author_img.src = myProfile.photoUrl;
    } else if (myProfile.photoURL) {
      message_reply_author_img.src = myProfile.photoURL;
    }
  });

  let message_reply_send_icon = document.createElement('div');
  message_reply_send_icon.classList.add('message-reply-send-icon');
  message_reply_send_icon.innerHTML = "<i class='bx bxs-send'></i>"

  message_reply_container.appendChild(message_reply_author_img);
  message_reply_container.appendChild(message_reply_input);
  message_reply_container.appendChild(message_reply_send_icon);
  message_reply_container.style.cssText = 'display: flex; align-items: center';

  message_container.appendChild(message_author_img)          

  message_reply_send_icon.addEventListener("click", function () {
    if (myId != null) {
      if (message_reply_input.value == '') {
        alert('You Did not Reply 💬')
      } else {
        alert('  message Reply 💬 \nAvailable Next Update')
      }
    } else {
      alert('LinqIn to Reply 💬')
    }
  }) */

  //      messageActivities(postId, postItem, postItem.id, message_activities_container);
  //message_main.appendChild(message_container);
  //message_main.appendChild(message_activities_container)      

  var timer;
  //Time of the long press
  const tempo = 1000; //Time 1000ms = 1s
  let start;
  /* message_linq.onmousedown = () => {
    start = performance.now();
    timer = setTimeout(function () {
    }, tempo);
  };

  message_linq.onmouseup = () => {
    let timeLeft = (performance.now() - start);
    if (timeLeft < 300) {
      domessageLinqClick();
    } else {
      if (postItem.authorId == myId) {
        delmessageModal(modal, postId, messagesCount, postItem.id, 'message', postItem.authorId)
      } else {
        confirm('LinqIn To Act!')
      }
    }
    clearTimeout(timer);
  }; */

  message_container.appendChild(message_text)
  message_linq.appendChild(message_linq_icon)
  message_container.appendChild(message_linq)

  //  message_container.style.cssText = 'display: flex; align-items: center;';

  message_main.appendChild(message_container);

  if (showing == true) {
    all_messages_container.appendChild(message_main)
  } else {
    $(all_messages_container).empty();
  }
  //    })
  //  })
}

function sendMessage(chatId, message_input) {

}