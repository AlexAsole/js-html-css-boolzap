Vue.config.devtools = true;
new Vue({
  el:'#root',
  data:{
    user:{
      name: 'Alex Giorgio',
      avatar: '_io',
      newMessage: '',
    },
    selectedContact: 0,
    searchContact: '',
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Faust',
        avatar: '_5',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Fratm, n\'do stai? ',
            status: 'received'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bella prete! Sto in Vaticano!',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Ostia! Va che figata! La capella (XD) Sistina...',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:30',
            text: 'Greve, zi, non abbiamo 12 anni',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Luigi',
        avatar: '_6',
        visible: true,
        messages: [
          {
            date: '20/01/2021 15:30:00',
            text: 'Luigi Time! Let\'s go! ',
            status: 'received'
          },
          {
            date: '20/01/2021 15:40:25',
            text: '2 anni che ci conosciamo e continui a fare la stessa battuta, manco avessi i baffi!',
            status: 'sent'
          },
          {
            date: '20/01/2021 15:41:00',
            text: 'Meglio WaLuigi e Wario!',
            status: 'sent'
          },
          {
            date: '20/01/2021 16:00:30',
            text: 'Ohi, non c\'è bisogno di offendere!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Salomone',
        avatar: '_7',
        visible: true,
        messages: [
          {
            date: '02/02/2021 10:30:00',
            text: 'Ho bisogno di un consiglio',
            status: 'sent'
          },
          {
            date: '02/02/2021 10:35:25',
            text: 'Dimmi',
            status: 'received'
          },
          {
            date: '02/02/2021 10:37:10',
            text: 'Ho comprato un chilo di prosciutto perché era in offerta, non so che farmene però',
            status: 'sent'
          },
          {
            date: '02/02/2021 10:39:30',
            text: 'Ci penso io, lo divido a metà e c\'è lo spartiamo',
            status: 'received'
          },
          {
            date: '02/02/2021 11:01:42',
            text: 'Quanto sei saggio, sal',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Marco',
        avatar: '_8',
        visible: true,
        messages: [
          {
            date: '20/01/2021 15:30:00',
            text: 'Ale, settimana prossima ci si vede con Andrea per decidere cosa fare con il premio della lotteria! ',
            status: 'received'
          },
          {
            date: '20/01/2021 15:40:25',
            text: 'Non ci credo che abbiamo vinto centomila euro!',
            status: 'sent'
          },
          {
            date: '20/01/2021 15:41:00',
            text: 'Infatti non è vero, questa chat non esiste , l\'hai creata come esercizio per Vuejs',
            status: 'received'
          },
          {
            date: '20/01/2021 16:00:30',
            text: 'Ah, già, dimenticavo... vabbé',
            status: 'sent'
          }
        ],
      }
    ]
  },
  methods:{
    changeContact: function(i) {
      this.selectedContact = i
    },
    insertMessage: function() {
      this.contacts[this.selectedContact].messages.push({
        date: this.tellTime(),
        text: this.user.newMessage,
        status: 'sent'
      })
      setTimeout(this.receiveAnswer, 1000)
      this.user.newMessage = ''
    },
    receiveAnswer: function() {
      this.contacts[this.selectedContact].messages.push({
        date: this.tellTime(),
        text: 'Ok',
        status: 'received'
      })
    },
    tellTime: function() {
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss')
      return date
    },
    lastConnection: function(i) {
      let lastIndex = this.contacts[i].messages.length - 1;
      let last = this.contacts[i].messages[lastIndex]
      if (last.status === 'received') {
        return last.date
      }
    },
    filterContacts: function(e) {
      let searchName = this.searchContact.toLowerCase();
      let filterName = e.name.toLowerCase();
      if (filterName.includes(searchName)){
        return true
      }
    }
  }
})
