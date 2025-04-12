var firebaseConfig = {
    apiKey: "AIzaSyBUHwNxhWXxikK0U5mRyDR3mRRrkwFXHH0",
    authDomain: "ac-quotes.firebaseapp.com",
    projectId: "ac-quotes",
    storageBucket: "ac-quotes.firebasestorage.app",
    messagingSenderId: "1067388109737",
    appId: "1:1067388109737:web:91a9406754fe833590fab8"
}

firebase.initializeApp(firebaseConfig)
console.log("Firebase apps:", firebase.apps.length)

if (firebase.firestore) {
    const db = firebase.firestore()
    console.log("Firestore initialized:", db)

    // testovací dokument
    db.collection("test")
        .add({ message: "Firestore works!" })
        .then(() => console.log("Test document added to Firestore"))
        .catch(error => console.error("Firestore error:", error))
} else {
    console.error("Firestore SDK not loaded!")
}

window.db = firebase.firestore()
