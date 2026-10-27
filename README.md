# Trilha Masp - Aulas dos PDFs

Transformação dos livros/apostilas em aulas no estilo "PC na Veia".

## Estrutura
- `modelo.html` - referência de formatação
- `index.html` - trilha gerada (a ser criada)
- `DIVISAO_POR_PDF.md` - divisão proposta por encontro de 1h30
- `js/firebase.js` - integração Firebase (Auth + Firestore)
- `js/firebase-config.js` - config Firebase (preencher)
- `firebase.json` / `.firebaserc` / `firestore.rules` - deploy

## Como configurar Firebase
1. Acesse https://console.firebase.google.com e crie um projeto
2. Ative Authentication > Email/Senha
3. Ative Firestore Database (modo produção ou teste conforme rules)
4. Em Configurações do projeto > Seus apps > Web, copie o `firebaseConfig`
5. Cole em `js/firebase-config.js`
6. Atualize `projectId` em `.firebaserc`

## Como publicar
```bash
npm install -g firebase-tools
firebase login
firebase use default
firebase deploy
```

## Git
```bash
git remote add origin https://github.com/AdaoElias/Masp.git
git add .
git commit -m "Inicial: estrutura + divisão por PDFs"
git push -u origin main
```

## Status
- [x] Extração dos PDFs
- [x] Divisão por encontros de 1h30
- [x] Estrutura GitHub + Firebase
- [ ] Piloto AULA-1-1
- [ ] Gerar todas as aulas
