const App = {
   data() {
      return {
         counter: 0,
         nambers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],
         lessons: [
            {
               timeStart: "11:20",
               lessonName: "Организационное собрание",
               classroom: "А",
               teacher: "Дирекция ИЦТЭ",
               lessonType: "Лекция"
            },
            {
               timeStart: "13:20",
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-418",
               teacher: "доц. Андреев В.В.",
               lessonType: "l"
            },
            {
               timeStart: "15-00",
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "l"
            },
            {
               timeStart: "15-00",
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "l"
            },
            {
               timeStart: "15-00",
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "l"
            }

         ],
         dayOfWeek: "",
         dateToday: ""

      }
   },
   methods: {
      getdayOfWeek() {
         let toDay = new Date;
         switch (toDay.getDay()) {
            case 0:
               this.dayOfWeek = "Воскресенье";
               break;
            case 1:
               this.dayOfWeek = "Понедельник";
               break;
            case 2:
               this.dayOfWeek = "Вторник";
               break;
            case 3:
               this.dayOfWeek = "Среда";
               break;
            case 4:
               this.dayOfWeek = "Четверг";
               break;
            case 5:
               this.dayOfWeek = "Пятница";
               break;
            case 6:
               this.dayOfWeek = "Суббота";
               break;


         }
         let DD = toDay.getDate(),
            MM = toDay.getMonth(),
            YYYY = toDay.getFullYear();
         this.dateToday = `${DD}.${MM + 1}.${YYYY}`
      },

   },


}


Vue.createApp(App).mount("#app")

// const day = {
//    date: "19.01.2022",
//    lessons: [
//       {
//          timeStart: "11:20",
//          lessonName: "Организационное собрание",
//          classroom: "А",
//          teacher: "Дирекция ИЦТЭ",
//          lessonType: "l"
//       },
//       {
//          timeStart: "13:20",
//          lessonName: "Теория систем и системный анализ",
//          classroom: "Д-418",
//          teacher: "доц. Андреев В.В.",
//          lessonType: "l"
//       },
//       {
//          timeStart: "15-00",
//          lessonName: "Пакеты прикладных программ",
//          classroom: "В-619",
//          teacher: "ст.пр. Эшелиоглу Р.И.",
//          lessonType: "l"
//       }

//    ]
// }