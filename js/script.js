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
      if (filterName.startsWith(searchName)){
        return true
      }
    }
  }
})
