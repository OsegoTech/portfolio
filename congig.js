<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-LUIvtbCvxIgQzFAuROLaIB7_kF8sqns",
    authDomain: "contact-form-36158.firebaseapp.com",
    projectId: "contact-form-36158",
    storageBucket: "contact-form-36158.appspot.com",
    messagingSenderId: "534828770144",
    appId: "1:534828770144:web:bc213535c80c5f897e7405",
    measurementId: "G-C60ZY3RPQ6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>