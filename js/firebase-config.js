// CONFIGURAÇÃO FIREBASE - PREENCHA COM SEUS DADOS
// 1) Crie projeto no https://console.firebase.google.com
// 2) Adicione app Web
// 3) Copie o firebaseConfig e cole abaixo
// 4) Ative Authentication (Email/Senha) e Firestore Database

export const firebaseConfig = {
  apiKey: "COLOQUE_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJETO.firebasestorage.app",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Instruções:
// - Substitua SEU_PROJECT_ID também em .firebaserc
// - Após preencher, rode: firebase login && firebase use default && firebase deploy
