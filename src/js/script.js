const App = {
   data() {
      return {
         counter: 0,
         nambers: [],
         lessons: [
            {
               lessonStart: new Date(2022, 0, 19, 11, 20),
               lessonName: "Организационное собрание",
               classroom: "А",
               teacher: "Дирекция ИЦТЭ",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 19, 13, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-418",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 19, 15, 00),
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 20, 8, 00),
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
               lessonStart: new Date(2022, 0, 20, 11, 20),
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
            {
               lessonStart: new Date(2022, 0, 21, 9, 40),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(8)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 21, 11, 20),
               lessonName: "Базы данных",
               classroom: "Д-624",
               teacher: "доц. Николаева С.Г.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 21, 13, 20),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "Г-325",
               teacher: "Низямова А.Р.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 21, 15, 00),
               lessonName: "Статистика",
               classroom: "Д-508",
               teacher: "доц. Будникова И.К",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 22, 8, 00),
               lessonName: "Базы данных ",
               classroom: "А-321",
               teacher: "доц. Николаева С.Г.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 22, 9, 40),
               lessonName: "Базы данных ",
               classroom: "А-321",
               teacher: "доц. Николаева С.Г.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 22, 11, 20),
               lessonName: "Статистика",
               classroom: "Е-100(4)",
               teacher: "доц. Будникова И.К.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 22, 13, 20),
               lessonName: "Статистика",
               classroom: "Е-100(4)",
               teacher: "доц. Будникова И.К.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 24, 8, 00),
               lessonName: "Пакеты прикладных программ",
               classroom: "Г-323",
               teacher: "доц. Салтанаева Е.А.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 24, 9, 40),
               lessonName: "Пакеты прикладных программ",
               classroom: "Г-323",
               teacher: "доц. Салтанаева Е.А.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 24, 11, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "А-413",
               teacher: "доц. Андреев В.В.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 24, 13, 20),
               lessonName: "Базы данных",
               classroom: "Д-622",
               teacher: "доц. Николаева С.Г.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 25, 8, 0),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(7)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 25, 9, 40),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(7)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 25, 11, 20),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "Г-218",
               teacher: "Низямова А.Р.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 25, 13, 20),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "Г-324",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 25, 15, 00),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "Г-324",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 26, 8, 00),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(7)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 26, 9, 40),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "В-621",
               teacher: "Низямова А.Р.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 26, 11, 20),
               lessonName: "Базы данных",
               classroom: "Д-427",
               teacher: "доц. Николаева С.Г.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 27, 13, 20),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "Д-427",
               teacher: "ст.пр. Коростелева Д.М.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 27, 15, 00),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "Д-427",
               teacher: "ст.пр. Коростелева Д.М.",
               lessonType: "Лаб."
            },
            {
               lessonStart: new Date(2022, 0, 27, 16, 40),
               lessonName: "Информационные системы",
               classroom: "Д-508",
               teacher: "доц. Сибаева Г.Р.",
               lessonType: "Лекция(?)"
            },
            {
               lessonStart: new Date(2022, 0, 28, 9, 40),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "В-621",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Зачет"
            },
            {
               lessonStart: new Date(2022, 0, 28, 11, 20),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "В-621",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Зачет"
            },
            {
               lessonStart: new Date(2022, 0, 29, 9, 40),
               lessonName: "Базы данных",
               classroom: "В-621",
               teacher: "доц. Николаева С.Г",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 0, 29, 11, 20),
               lessonName: "Базы данных",
               classroom: "В-621",
               teacher: "доц. Николаева С.Г",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 0, 29, 13, 20),
               lessonName: "Базы данных",
               classroom: "В-621",
               teacher: "доц. НиколаевЭкзамен",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 1, 1, 8, 00),
               lessonName: "Пакеты прикладных программ",
               classroom: "В-621",
               teacher: "Эшелиоглу Р.И.",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 1, 2, 8, 00),
               lessonName: "Статистика",
               classroom: "В-621",
               teacher: "доц. Будникова И.К.",
               lessonType: "Зачет"
            },
            {
               lessonStart: new Date(2022, 1, 4, 8, 00),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "В-621",
               teacher: "доц. Шустова К.П.",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 1, 7, 8, 00),
               lessonName: "Теория систем и системный анализ",
               classroom: "В-621",
               teacher: "доц. Андреев В.В.",
               lessonType: "Экзамен"
            },
            {
               lessonStart: new Date(2022, 1, 9, 11, 20),
               lessonName: "WEB-программирование",
               classroom: "В-621",
               teacher: "ст.пр. Галиев Р.И.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 1, 9, 13, 20),
               lessonName: "Операционные системы",
               classroom: "В-621",
               teacher: "доц. Киселев Н.С.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 1, 9, 15, 00),
               lessonName: "Цифровая экономика",
               classroom: "В-621",
               teacher: "доц. Каляшина А.В.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 1, 9, 18, 20),
               lessonName: "Информационная безопасность",
               classroom: "В-621",
               teacher: "доц. Исмагилов И.Р.",
               lessonType: "Лекция"
            },
         ],
         dayOfWeek: "",
         dateToday: "",
         toDay: new Date(2022, 0, 20),
         lessonToday: [],
         calendar: [],
         toDayStatic: new Date,
         lectureDays: [],
         examDays: [],
         calendarSwitchButtonPosition: 0,
         counter: 0,
         width: 0,


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

      },
      switchDateFromCalendar(day) {
         this.toDay.setDate(day)
         this.calendarInit(this.toDay)
         this.getdayOfWeek()
         this.getLesonToday(this.toDay)
      },
      getLectureDays() {
         this.lessons.forEach(element => {

         });
      },
      switchCalendarSwitchButtonPosition() {
         if (this.calendarSwitchButtonPosition == 0) {
            this.calendarSwitchButtonPosition = 1
         } else if (this.calendarSwitchButtonPosition == 1) {
            this.calendarSwitchButtonPosition = 0
         }
         console.log(this.calendarSwitchButtonPosition)
      },
      counterPLUS() {
         this.counter++;
         console.log(this.counter)

      },
      updateWidth() {
         this.width = window.innerWidth;
         console.log(this.width)
      },

   },
   mounted() {
      this.calendarInit(this.toDay)
      this.getdayOfWeek()
      this.getLesonToday(this.toDay)
      this.updateWidth()

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



