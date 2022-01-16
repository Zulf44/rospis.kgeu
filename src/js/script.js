const App = {
   data() {
      return {
         counter: 0,
         nambers: [],
         lessons: [
            {
               lessonStart: new Date(2022, 0, 13, 11, 20),
               lessonName: "Организационное собрание",
               classroom: "А",
               teacher: "Дирекция ИЦТЭ",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 13, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-418",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 15, 00),
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 8, 00),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "В-619",
               teacher: "доц. Шустова К.П.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 20, 9, 40),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "В-619",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 11, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-420",
               teacher: "доц. Андреев В.В.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 21, 8, 00),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(8)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лаб."
            },
         ],
         dayOfWeek: "",
         dateToday: "",
         toDay: new Date,
         lessonToday: [],
         calendar: [],
         toDayStatic: new Date



      }
   },
   methods: {
      getdayOfWeek() {

         switch (this.toDay.getDay()) {
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
         let DD = this.toDay.getDate(),
            MM = this.toDay.getMonth(),
            YYYY = this.toDay.getFullYear();
         this.dateToday = `${DD}.${MM + 1}.${YYYY}`;

      },
      getLesonToday(toDay) {


         this.lessonToday = this.lessons.filter(function (item, index, array) {
            return (
               array[index].lessonStart.getDate() === toDay.getDate()
               && array[index].lessonStart.getMonth() === toDay.getMonth()
               && array[index].lessonStart.getFullYear() === toDay.getFullYear()
            )
         })

      },
      increaseDate() {
         this.toDay.setTime(this.toDay.getTime() + 86400000);
         this.getdayOfWeek();
         this.getLesonToday(this.toDay);
         this.calendarInit(this.toDay)
      },
      reduceDate() {
         this.toDay.setTime(this.toDay.getTime() - 86400000);
         this.getdayOfWeek();
         this.getLesonToday(this.toDay);
         this.calendarInit(this.toDay)
      },
      calendarInit(today) {
         this.calendar = []
         // По новой

         // Получаем количество дней в текущем месяце 
         today.getDaysInMounth = function () {

            let date1 = new Date(this.getFullYear(), this.getMonth(), 1);
            let date2 = new Date(this.getFullYear(), (this.getMonth() + 1), 1);
            let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);
            return date3;
         }
         console.log(today.getDaysInMounth())

         // Получаем день недели первого числа месяца

         today.getDayWorld = function () {
            todayClone = new Date(this.getFullYear(), this.getMonth())
            switch (todayClone.getDay()) {
               case 0:
                  return 6;
                  break;
               case 1:
                  return 0;
                  break;
               case 2:
                  return 1;
                  break;
               case 3:
                  return 2;
                  break;
               case 4:
                  return 3;
                  break;
               case 5:
                  return 4;
                  break;
               case 6:
                  return 5;
                  break;

            }
         }

         console.log(today.getDayWorld())

         // добавляем нули в перед
         for (i = 1; i < today.getDayWorld() + 1; i++) {
            this.calendar.push(0)
         }

         // добовляем числа месяца в массив
         for (i = 1; i <= today.getDaysInMounth(); i++) {
            this.calendar.push(i)
         }

      }

   },
   mounted() {
      this.calendarInit(this.toDay)
      this.getdayOfWeek()
      this.getLesonToday(this.toDay)
   }


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

// let lessons = [
//    {
//       lessonStart: new Date(2022, 0, 13, 11, 20),
//       lessonName: "Организационное собрание",
//       classroom: "А",
//       teacher: "Дирекция ИЦТЭ",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 13, 13, 20),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Д-418",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 19, 15, 00),
//       lessonName: "Пакеты прикладных программ",
//       classroom: "В-619",
//       teacher: "ст.пр. Эшелиоглу Р.И.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 8, 00),
//       lessonName: "Объектно-ориентированное программирование на языке C#",
//       classroom: "В-619",
//       teacher: "доц. Шустова К.П.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 9, 40),
//       lessonName: "Настройка и администрирование компьютерных сетей",
//       classroom: "В-619",
//       teacher: "доц. Ситников С.Ю.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 11, 20),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Д-420",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Практика"
//    },
//    {
//       lessonStart: new Date(2022, 0, 21, 8, 00),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Е-100(8)",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Лаб."
//    },

// ]



// let dateNow = new Date();
// let lessonToday = lessons.filter(function (item, index, arrey) {
//    return dateNow.getDate() === item.lessonStart.getDate()

// });

// console.log(lessonToday)


// let w = "efjewkmgklelwrmgkmew'gkeerkgml ergmelr,glergerrgerrge"

// if (w.length > 15) {
//    w = w.substring(20, -20);
//    console.log(w)
// }




