window.onload = function () {
}

$('.showcase').click(function (e) {
  if ($('.sidebar').show()) {
    $('.sidebar').hide();
    $('.side_nav').show();
  } else {
    // Clicked outside the box
  }
});

$('.tabs_1').click(function (e) {
  $('.post_container').show();

  document.getElementById("footer_b").style.cssText = `
    position: relative;
    color: #fff;
    top: 22%;
    padding: 5px;
    transform: scale(1);
    font-weight: bold;
    text-align: center;
`
  $('.credits_container').hide();
  $('.credits-title-container').hide();
});

$('.tabs_2').click(function (e) {
  $('.post_container').hide();

  document.getElementById("info_b").style.cssText = `
    position: relative;
    color: #fff;
    top: 90%;
    padding: 5px;
    transform: scale(1);
    font-weight: bold;
    text-align: center;
`
  $('.credits_container').hide();
  $('.credits-title-container').hide();
});

$('.tabs_3').click(function (e) {
  $('.post_container').hide();

  document.getElementById("info_b").style.cssText = `
    position: relative;
    color: #fff;
    top: 22%;
    padding: 8px;
    transform: scale(1);
    font-weight: bold;
    text-align: center;
    `
  $('.credits_container').show();
  $('.credits-title-container').show();

  if ($('.credits_code_container').show() || $('.credits_img_container').show() || $('.credits_about_container').show()) {
    $('.credits_about_container').show();
    $('.credits_code_container').hide();
    $('.credits_img_container').hide();
  }
});

$('.credits-btn_1').click(function (e) {
  if ($('.credits_code_container').show() || $('.credits_img_container').show()) {
    $('.credits_about_container').show();
    $('.credits_code_container').hide();
    $('.credits_img_container').hide();
  } else {
    // Clicked outside the box
  }
});

$('.credits-btn_2').click(function (e) {
  if ($('.credits_about_container').show() || $('.credits_img_container').show()) {
    $('.credits_about_container').hide();
    $('.credits_code_container').show();
    $('.credits_img_container').hide();
  } else {
    // Clicked outside the box
  }
});

$('.credits-btn_3').click(function (e) {
  if ($('.credits_about_container').show() || $('.credits_code_container').show()) {
    $('.credits_about_container').hide();
    $('.credits_code_container').hide();
    $('.credits_img_container').show();
  } else {
    // Clicked outside the box
  }
});

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function (e) { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  if (st > lastScrollTop) {
    // downscroll code
    $('.linq-tabs-container').hide();
    $('.side_nav').hide();
  } else {
    // upscroll code
    $('.linq-tabs-container').show();
    $('.side_nav').show();
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

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

let posts_container = document.getElementById('posts_container');
let post_container = document.createElement('div');
post_container.classList.add('post-container');

function generatePosts() {
  let posts = [];

  database.ref('posts/').once('value', (snapshot) => {
    let postItems = [];
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      postItems.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    });
    postItems.forEach((postItem, index) => {
      database.ref('/posts/' + postItem.id).once('value').then((snapshot) => {
        let post = snapshot.val();
        let postId = postItem.id
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
            alert(postId)
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

          database.ref('post-notes/' + postId + '/' + myId).once('value').then(snapshot => {
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
          comment_add_icon.src = '/img/linq/Add_Linq_Green_0.png'

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

          posts_container.appendChild(post_container);

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
        comment_linq_icon.src = '/img/linq/Linq_Logo_Blue_1.png'
      } else {
        comment_linq_icon.src = '/img/linq/Linq_Logo_Grey_0.png'
      }

      comment_author_img.addEventListener("click", function () {
        alert(postItem.id)
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

function getItems() {
  db.collection("credits-img").onSnapshot((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      })
    })
    generateItems(items);
  })
}

function generateItems(items) {
  
  let creditImgs = []
  items.forEach((item) => {

    let imgLink = item.url.replace('https://unsplash.com/photos/', '');
    let creditImgUrl = "https://source.unsplash.com/" + imgLink;

    if (item.from == 'unsplash') {
      imgLink = item.url.replace('https://unsplash.com/photos/', '');
      creditImgUrl = "https://source.unsplash.com/" + imgLink;
    } else if (item.from == 'dreamstime') {
      creditImgUrl = item.url;
    }

    let creditImgContainer = document.getElementById("my_linq_img_container_0");
    let creditImg = document.createElement("img");
    creditImg.id = "my_img_my_linq_0";
    creditImg.src = creditImgUrl;
    creditImgContainer.appendChild(creditImg);
    /*      
          let checkMark = document.createElement("div");
          checkMark.classList.add("check-mark");
          checkMark.innerHTML = '<img src="assets/icon-check.svg">';
          checkMark.addEventListener("click", function(){
              markCompleted(item.id);
          })
    //      checkContainer.appendChild(checkMark);
    
          let todoText = document.createElement("div");
          todoText.classList.add("todo-text");
          todoText.innerText = item.text;
    
          if(item.status == "completed"){
              checkMark.classList.add("checked");
              todoText.classList.add("checked");
          }
    */
    //      creditImg.appendChild(checkContainer);
    //      creditImg.appendChild(todoText);
    creditImgs.push(creditImg)
  })
  document.querySelector(".credits-img").replaceChildren(...creditImgs);
}

getItems();

