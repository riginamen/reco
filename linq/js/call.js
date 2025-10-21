// import firebase from 'firebase/app';
// import 'firebase/firestore';
const firebaseConfig = {
  // your config
  apiKey: "AIzaSyB6NKEyvenEOhL1baYRakomWlfKHa-uux4",
  authDomain: "linqop.firebaseapp.com",
  databaseURL: "https://linqop.firebaseio.com",
  projectId: "linqop",
  storageBucket: "linqop.appspot.com",
  messagingSenderId: "552093451342",
  appId: "1:552093451342:web:f2cbede20eaf3ad2ff2f1f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();
//const email = firebase.auth().currentUser.email;

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global State
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

// HTML elements
const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');

$('.side_nav').click(function (e) {
  window.location.href = "../linq/linq.html";
})

// 1. Setup media sources
webcamButton.style.cssText = 'margin: 2%; padding: 2%; border-radius: 1em'
callButton.style.cssText = 'margin: 2%; padding: 2%; border-radius: 1em';
answerButton.style.cssText = ' padding: 2%; border-radius: 1em'
hangupButton.style.cssText = 'margin: 2%; padding: 2%; border-radius: 1em'

webcamButton.onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  remoteStream = new MediaStream();

  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  // Pull tracks from remote stream, add to video stream
  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;

  webcamVideo.volume = 0;
//  remoteVideo.volume = 0;

  if (firebase.auth().currentUser.email == 'yeshua@linq.eco') {
    callButton.disabled = false;
  }
  answerButton.disabled = false;
  webcamButton.disabled = true;
};

$('#remoteVideo').click(function (e) {

  if ($('#remoteVideo').not(":fullscreen")) {
    remoteVideo.requestFullscreen();
  }

});

$('#webcamVideo').click(function (e) {
  webcamVideo.style.cssText = 'display: none'
});

// 2. Create an offer
callButton.onclick = async () => {
  // Reference Firestore collections for signaling
  const callDoc = firestore.collection('calls').doc();
  const offerCandidates = callDoc.collection('offerCandidates');
  const answerCandidates = callDoc.collection('answerCandidates');

  callInput.value = callDoc.id;

  // Get candidates for caller, save to db
  pc.onicecandidate = (event) => {
    event.candidate && offerCandidates.add(event.candidate.toJSON());
  };

  // Create offer
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    callerId: 'yeshua@linq.eco',
    sdp: offerDescription.sdp,
    type: offerDescription.type,
    createdDate: firebase.firestore.FieldValue.serverTimestamp()
  };

  await callDoc.set({ offer });

  // Listen for remote answer
  callDoc.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });

  hangupButton.disabled = false;
};

//firestore.collection("calls").where("offer.callerId", "==", 'yeshua@linq.eco').orderBy("offer.createdDate", 'desc').limit(1)
firestore.collection("calls").where("offer.callerId", "==", '').orderBy("offer.createdDate", 'desc').limit(1)
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
 //     alert(doc.id)
      // 3. Answer the call with the unique ID
      answerButton.onclick = async () => {
//        const callId = doc.id;
        const callId = callInput.value;
        const callDoc = firestore.collection('calls').doc(callId);
        const answerCandidates = callDoc.collection('answerCandidates');
        const offerCandidates = callDoc.collection('offerCandidates');

        console.log(doc.id)

        pc.onicecandidate = (event) => {
          event.candidate && answerCandidates.add(event.candidate.toJSON());
        };

        const callData = (await callDoc.get()).data();

        const offerDescription = callData.offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
          type: answerDescription.type,
          sdp: answerDescription.sdp,
          createdDate: firebase.firestore.FieldValue.serverTimestamp()
        };

        await callDoc.update({ answer });

        offerCandidates.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            console.log(change);
            if (change.type === 'added') {
              let data = change.doc.data();
              pc.addIceCandidate(new RTCIceCandidate(data));
            }
          });
        });
      };
    })
  });

$('#hangupButton').click(function (e) {
  e.preventDefault();
  window.location.reload();
});
