let footer = document.getElementById("footer");

let questions = [
    {
        nq: 18,
        q: "من موقع google drive قم بتحميل الملف أعمال.docx الموجود في C:/Working Files/OC ."
    },
    {
        nq: 19,
        q: "من موقع google drive قم بمشاركة ملف الثقافة مع الايميل التالي : eng.radwan@specto.com بحيث يمكنه من التعديل"
    },
    {
        nq: 20,
        q: " قم بمشاركة التقويم العمل الإضافي مع eng.hassan@specto.com بحيث يمكن إجراء تغييرات على الأحداث ."
    },
    {
        nq: 21,
        q: "ضمن موقع التواصل الاجتماعي (Social Media) ومن الصفحة الإعدادات قم بتعيين عام كإعداد افتراضي للخصوصية للأشخاص الذين يمكن أن يرسلوا طلب صداقة ثم احفظ الإعدادات"
    },
    {
        nq: 22,
        q: "ضمن موقع التواصل الاجتماعي (Social Media) احذف الصديق 'ماهر مسعود' من صفحة ملفك الشخصي"
    },
    {
        nq: 23,
        q: "ضمن موقع التواصل الاجتماعي (Social Media) وعلى صفحة ملفك الشخصي قم بمشاركة ونشر ارتباط تشعبي جديد إلى www.google-fonts.com"
    },
    {
        nq: 24,
        q: "ضمن موقع التواصل الاجتماعي (Social Media) على الملف الشخصي قم بإعادة توجيه (شارك) المنشور من قبل سالم حجار 'هل لديك أي كتب مقترحة للقراءة؟' إلى 'روان الأسمر' مع نص التعليق التالي 'هذا ما كنا نحاول قراءته' "
    },
    {
        nq: 25,
        q: "ضمن موقع التواصل الاجتماعي (Social Media) وعلى صفحة ملفك الشخصي أزل المنشور الذي يتضمن النص التالي 'سأنظم رحلة في بداية هذا الشهر من سينضم ؟'"
    },
    {
        nq: 26,
        q: "ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن تبويب ملف قم بتحرير الاجتماعات ثم قم بحذف الاجتماع 'تقييم سير العمل'"
    },
    {
        nq: 27,
        q: "ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) قم بدعوة eng.aya@specto.com إلى الاجتماع 'مراجعة أساليب العمل وتطويرها'"
    },
    {
        nq: 28,
        q: "ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن القائمة ملف ابدأ الاجتماع الحالي"
    },
    {
        nq: 29,
        q: "ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن القائمة مشاركة قم بمشاركة سطح المكتب"
    },
    {
        nq: 30,
        q: "ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) و من الصفحة الرئيسية ثم من لوحة الدردشة أرسل رسالة دردشة 'رتب الاجتماع آخر خلال هذا الأسبوع لمناقشة الموضوع مرة أخرى' إلى أنس حسين"
    },
    {
        nq: 31,
        q: "ضمن موقع الويب التعلم عبر الانترنت (Online Learning) ومن قسم المواد قم بالوصول إلى المخطط التفصيلي للمقرر التعليمي اللغة العربية لغير الناطقين بها ثم أظهر الموضوع الذي سيتم إعطاؤه في المحاضرة 1"
    },
    {
        nq: 32,
        q: "ضمن موقع الويب التعلم عبر الانترنت (Online Learning) قم بتنزيل أسئلة مراجعة المحاضرة 1 من المقرر التعليمي اللغة الفرنسية إلى المجلد C:/Working Files/OC مستخدما الاسم المقترح للملف ."
    },
    {
        nq: 33,
        q: "ضمن موقع الويب التعلم عبر الانترنت (Online Learning) ضمن لوحة المناقشة انتقل إلى الصفحة هيكلة البيانات ثم افتح إنشاء عرض مفهرس وانشر الرد التالي 'أقدر لكم مساعدتكم'"
    },
    {
        nq: 34,
        q: "ضمن الإعدادت قم بالاتصال بالإنترنت مستخدما الشبكة اللاسلكية SunlightWifi وكلمة المرور home195"
    },
    {
        nq: 35,
        q: "ضمن بحث الويب ابحث في الانترنت باستخدام مصطلح البحث 'أحدث التطبيقات'"
    },
    {
        nq: 36,
        q: "ضمن البريد الإلكتروني أرسل رسالة بريد إلكتروني جديدة إلى soha.waleed@specto.com الموضوع 'عقد عمل' المحتوى 'سيكون توقيع العقد الأحد القادم'"
    },
    {
        nq: 37,
        q: `<h1> ضمن التقويم قم بإزالة الحدث المقرر في 29 من شهر
        حزيران :
      </h1>
      <table class="nnnn">
        <tr>
          <td>التاريخ</td>
          <td>16 حزيران</td>
        </tr>
        <tr>
          <td>الوقت</td>
          <td>12:00 _ 13:00</td>
        </tr>
        <tr>
          <td>الحدث</td>
          <td>اهتمامات الزبائن</td>
        </tr>
      </table>`
    },
    {
        nq: 38,
        q: "ضمن الصور قم بمشاركة صورة الفراشة عن طريق البريد الإلكتروني مع haneen.safi@specto.com"
    },
    {
        nq: 39,
        q: "ضمن التطبيقات ابحث عن تطبيق باستخدام مصطلح البحث 'خرائط'"
    },
    {
        nq: 40,
        q: "ضمن التطبيقات قم بإلغاء تثبيت تطبيق التقويم من هاتفك"
    },
]

let URLW = JSON.stringify(localStorage.getItem("urlw"))
let URLN = JSON.stringify(localStorage.getItem("urln"))
let count = Number(localStorage.getItem("numberQ"))
const URLHeroku = "https://hamza-rashed-oc-exam.herokuapp.com"
const URLLocalHost = "http://localhost:3000"




function send() {
    if(count == 21){
        localStorage.setItem("numberQ" , 22)
        localStorage.setItem("21", 0)
        let wrong = JSON.parse(localStorage.getItem("wrongAnswers"))
        let wrongQ = {
            id: 21,
            q: `21 - ضمن موقع التواصل الاجتماعي (Social Media) ومن الصفحة الإعدادات قم بتعيين عام كإعداد افتراضي للخصوصية للأشخاص الذين يمكن أن يرسلوا طلب صداقة ثم احفظ الإعدادات`
        };
        wrong.push(wrongQ)
        localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
        window.close()
        
        window.open(URLW)
        if (document.getElementById('privacy-friend-request').value == "a") {
            localStorage.setItem("21", 1)
            localStorage.removeItem("q21")
            window.close()
            window.open(URLW)
        } else {
            localStorage.setItem("21", 0)
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"))
            let wrongQ = {
                id: 21,
                q: `21 - ضمن موقع التواصل الاجتماعي (Social Media) ومن الصفحة الإعدادات قم بتعيين عام كإعداد افتراضي للخصوصية للأشخاص الذين يمكن أن يرسلوا طلب صداقة ثم احفظ الإعدادات`,
                n:"لم تصل للإعداد الصحيح"
            };
            wrong.push(wrongQ)
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close()
            window.open(URLW)
  
        }
    }

    else if(count == 22){
        if(!localStorage.getItem("22")){
            localStorage.setItem("22", 0);
          
            localStorage.setItem("numberQ" , 23)
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q22 = {
              id: 22,
              q: "22 - ضمن موقع التواصل الاجتماعي (Social Media) احذف الصديق ماهر مسعود من صفحة ملفك الشخصي",
              n:"لم تحذف الصديق الصحيح"
            };
            wrong.push(q22);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
        }else{   
            localStorage.setItem("numberQ" , 23)
            window.close();
            window.open(URLW);
        }

    }

    else if(count == 23){
        localStorage.setItem("numberQ" , 24)
        localStorage.setItem("23", 0);
        window.close();
        window.open(URLW);
        let post = JSON.parse(localStorage.getItem("posts"));
        let postText = post[0].postText;
        let postType = post[0].postType;
        if (postText == "www.google-fonts.com" && postType == "hyperlink") {
          localStorage.setItem("23", 1);
          window.close();
          window.open(URLW);
        } else {
          
          localStorage.setItem("23", 0);
          let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));

          let q23 = {
            id: 23,
            q: "23 - ضمن موقع التواصل الاجتماعي (Social Media) وعلى صفحة ملفك الشخصي قم بمشاركة ونشر ارتباط تشعبي جديد إلى www.google-fonts.com",
            n:`link is : ${postText} and it type is : ${postType}`
          };
          wrong.push(q23);
          localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
          window.close();
          window.open(URLW);
        }
        }

        else if(count == 24){
          
          localStorage.setItem("numberQ" , 25)
          localStorage.setItem("24", 0);
          window.close();
          window.open(URLW);
          let post = JSON.parse(localStorage.getItem("friendsPosts"));
          let postText = post["روان الأسمر"][0].postText;
          let shareText = post["روان الأسمر"][0].shareText;
          if (
            postText == "هل لديك أي كتب مقترحة للقراءة؟" &&
            shareText == "هذا ما كنا نحاول قراءته"
          ) {
            localStorage.setItem("24", 1);
            localStorage.removeItem("q24");
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("24", 0);
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q24 = {
              id: 24,
              q: "24 - ضمن موقع التواصل الاجتماعي (Social Media) وعلى الملف الشخصي قم بإعادة توجيه (شارك) المنشور من قبل سالم حجار هل لديك أي كتب مقترحة للقراءة؟ إلى روان الأسمر مع نص التعليق التالي هذا ما كنانحاول قراءته",
              n:`post was sharing is : ${postText} , text in the comments is : ${shareText} Also must with (روان الاسمر)`
            };
            wrong.push(q24);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
         }

         else if(count == 25){
          
          localStorage.setItem("numberQ" , 26)
          if (localStorage.getItem("25")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("25", 0);
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q25 = {
              id: 25,
              q: "25 - ضمن موقع التواصل الاجتماعي (Social Media) وعلى صفحة ملفك الشخصي أزل المنشور الذي يتضمن النص التالي سأنظم رحلة في بداية هذا الشهر من سينضم ؟",
            };
            wrong.push(q25);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
         }

         else if(count == 26){
            localStorage.setItem("numberQ" , 27)
            if (localStorage.getItem("26")) {
              window.close();
              window.open(URLW);
            } else {
              localStorage.setItem("26", 0);
              let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
              let q26 = {
                id: 26,
                q: "26 - ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن تبويب ملف قم بتحرير الاجتماعات ثم قم بحذف الاجتماع تقييم سير العمل",
              };
              wrong.push(q26);
              localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
              window.close();
              window.open(URLW);
            }
          }
          else if(count == 27){
            localStorage.setItem("numberQ" , 28)
            if (localStorage.getItem("27")) {
              window.close();
              window.open(URLW);
            } else {
              localStorage.setItem("27", 0);
              let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
              let q27 = {
                id: 27,
                q: "27 - ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) قم بدعوة eng.aya@specto.com إلى الاجتماع مراجعة أساليب العمل وتطويرها",
              };
              wrong.push(q27);
              localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
              window.close();
              window.open(URLW);
            }
          }
          else if(count == 28){
            localStorage.setItem("numberQ" , 29)
            if (localStorage.getItem("28")) {
              window.close();
              window.open(URLW);
            } else {
              localStorage.setItem("28", 0);
              let q28 =
                "28 - ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن القائمة ملف ابدأ الاجتماع الحالي";
              let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
              let q27 = {
                id: 28,
                q: q28,
              };
              wrong.push(q27);
              localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
              window.close();
              window.open(URLW);
            }
          }
  
          else if(count == 29){
            localStorage.setItem("numberQ" , 30)
            if (localStorage.getItem("29")) {
              window.close();
              window.open(URLW);
            } else {
              localStorage.setItem("29", 0);
              let q29 =
                "29 - ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) ومن القائمة مشاركة قم بمشاركة سطح المكتب";
              let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
              let q27 = {
                id: 29,
                q: q29,
              };
              wrong.push(q27);
              localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
              window.close();
              window.open(URLW);
            }
        }
  
        else if(count == 30){
          localStorage.setItem("numberQ" , 31)
          let textValue = document.getElementById("chatText");
          let listOptions = document.getElementById("chatTo");
          if (
            textValue.value ==
              "رتب الاجتماع آخر خلال هذا الأسبوع لمناقشة الموضوع مرة أخرى" &&
            listOptions.value == "أنس حسين" &&
            !localStorage.getItem("30")
          ) {
            localStorage.setItem("30", 1);
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("30", 0);
            let q30 =
              "30 - ضمن موقع الويب اجتماع عبر الانترنت (Online Meeting) و من الصفحة الرئيسية ثم من لوحة الدردشة أرسل رسالة دردشة رتب الاجتماع آخر خلال هذا الأسبوع لمناقشة الموضوع مرة أخرى إلى أنس حسين";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 30,
              q: q30,
              n:`The Text Was : ${textValue.value} and the person was : ${listOptions.value}`
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
        }
       else if(count == 31){
        localStorage.setItem("numberQ", 32)
        let data = JSON.parse(localStorage.getItem("currentSelectedCourse"));

        if (
          data.title == "اللغة العربية لغير الناطقين بها" &&
          data.currentLecture.title == "المحاضرة 1" &&
          !localStorage.getItem("31")
        ) {
          localStorage.setItem("31", 1);
          window.close();
          window.open("../index2.html");
        } else {
          localStorage.setItem("31", 0);
          let q31 =
            "ضمن موقع الويب التعلم عبر الانترنت (Online Learning) قم بتنزيل أسئلة مراجعة المحاضرة 1 من المقرر التعليمي اللغة الفرنسية إلى المجلد C:/Working Files/OC مستخدما الاسم المقترح للملف .";
          let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
          let q27 = {
            id: 31,
            q: q31,
            n:`The Topic Was : ${data.title} and the Lecture Was : ${data.currentLecture.title}`
          };
          wrong.push(q27);
          localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
          window.close();
          window.open("../index2.html");
        }
          }
  
          else if(count == 32){
            localStorage.setItem("numberQ" , 33)
            localStorage.setItem("32", ":");
            window.close();
            window.open(URLW);
          }
  
          else if(count == 33){
            localStorage.setItem("numberQ" , 34)
            if (localStorage.getItem("33")) {
              window.close();
              window.open(URLW);
            } else {
              localStorage.setItem("33", 0);
              let q33 =
                "33 - ضمن موقع الويب التعلم عبر الانترنت (Online Learning) ضمن لوحة المناقشة انتقل إلى الصفحة هيكلة البيانات ثم افتح إنشاء عرض مفهرس وانشر الرد التالي أقدر لكم مساعدتكم";
              let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
              let q27 = {
                id: 33,
                q: q33,
              };
              wrong.push(q27);
              localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
              window.close();
              window.open(URLW);
            }
          }

         else if(count == 34){
            localStorage.setItem("numberQ" , 35)
          if (
            localStorage.getItem("SunlightWifi") == "home195" &&
            localStorage.getItem("nameNetwork") == "SunlightWifi" &&
            !localStorage.getItem("34")
          ) {
            localStorage.setItem("34", 1);
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("34", 0);
            let q34 =
              "34 - ضمن الإعدادت قم بالاتصال بالإنترنت مستخدما الشبكة اللاسلكية SunlightWifi وكلمة المرور home195";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 34,
              q: q34,
              n:`Wifi Selected : ${localStorage.getItem("nameNetwork")} and password was : ${localStorage.getItem("SunlightWifi")}`
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
          }
  
         else if(count == 35){
            localStorage.setItem("numberQ" , 36)
          if (localStorage.getItem("35")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("35", 0);
            let q35 =
              "35 - ضمن بحث الويب ابحث في الانترنت باستخدام مصطلح البحث أحدث التطبيقات";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 35,
              q: q35,
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
        }
        else if(count == 36){
          localStorage.setItem("numberQ" , 37)
          if (localStorage.getItem("36")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("36", 0);
            let q36 =
              "36 - ضمن البريد الإلكتروني أرسل رسالة بريد إلكتروني جديدة إلى soha.waleed@specto.com الموضوع عقد عمل المحتوى سيكون توقيع العقد الأحد القادم";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 36,
              q: q36,
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
        }
  
        else if(count == 37){
          localStorage.setItem("numberQ" , 38)
          if (localStorage.getItem("37")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("37", 0);
            let q37 =
              "37 - ضمن التقويم قم بإزالة الحدث المقرر في 29 من شهر حزيران :";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 37,
              q: q37,
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
        }
  
        else if(count == 38){
          localStorage.setItem("numberQ" , 39)
          if (localStorage.getItem("38")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("38", 0);
            let q38 =
              "38 - ضمن الصور قم بمشاركة صورة الفراشة عن طريق البريد الإلكتروني مع haneen.safi@specto.com";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 38,
              q: q38,
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
        }
  
        else if(count == 39){
          localStorage.setItem("numberQ" , 40)
          if (localStorage.getItem("39")) {
            window.close();
            window.open(URLW);
          } else {
            localStorage.setItem("39", 0);
            let q39 =
              "39 - ضمن التطبيقات ابحث عن تطبيق باستخدام مصطلح البحث خرائط";
            let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
            let q27 = {
              id: 39,
              q: q39,
            };
            wrong.push(q27);
            localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
            window.close();
            window.open(URLW);
          }
      }
  
      else if(count == 40){

        if (
          JSON.parse(localStorage.getItem("UnInstalledApps"))[0] ==
            "Calender" &&
          !localStorage.getItem("40")
        ) {
          localStorage.setItem("40", 1);
          window.close();
          window.open(URLW);
        } else {
          localStorage.setItem("40", 0);
          let q40 = "40 - ضمن التطبيقات قم بإلغاء تثبيت تطبيق التقويم من هاتفك";
          let wrong = JSON.parse(localStorage.getItem("wrongAnswers"));
          let q27 = {
            id: 40,
            q: q40,
            n:`The app Was Deleted : ${JSON.parse(localStorage.getItem("UnInstalledApps"))[0]}`
          };
          wrong.push(q27);
          localStorage.setItem("wrongAnswers", JSON.stringify(wrong));
          window.close();
          window.open(URLW);
        }
      }
  }


if (count == 18) {
    URLW = `${URLHeroku}/first2.html`
    URLN = `${URLHeroku}/first1.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if (count == 19) {
    URLW = `${URLHeroku}/تقويم جوجل.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/first2.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if (count == 20) {
    URLW = `${URLHeroku}/html/homePage.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/تقويم جوجل.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if(count == 21){
  URLW = `${URLHeroku}/html/profile.html`
  JSON.stringify(localStorage.setItem("urlw", URLW))
  URLN = `${URLHeroku}/html/homePage.html`
  JSON.stringify(localStorage.setItem("urln", URLN))
}

else if (count == 22 || count == 23 || count == 24) {
    URLW = `${URLHeroku}/html/profile.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/html/profile.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if(count == 25){
  URLW = `${URLHeroku}/43/index22.html`
  JSON.stringify(localStorage.setItem("urlw", URLW))
  URLN = `${URLHeroku}/html/profile.html`
  JSON.stringify(localStorage.setItem("urln", URLN))
}
else if (count == 26 || count == 27 || count == 28 || count == 29) {
    URLW = `${URLHeroku}/43/index22.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/43/index22.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if(count == 30 ){
  URLW = `${URLHeroku}/48/index2.html`
  JSON.stringify(localStorage.setItem("urlw", URLW))
  URLN = `${URLHeroku}/43/index22.html`
  JSON.stringify(localStorage.setItem("urln", URLN))
}
else if (count == 31 || count == 32) {
    URLW = `${URLHeroku}/48/index2.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/48/index2.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}

else if(count == 33){
  URLW = `${URLHeroku}/index4.html`
  JSON.stringify(localStorage.setItem("urlw", URLW))
  URLN = `${URLHeroku}/48/index2.html`
  JSON.stringify(localStorage.setItem("urln", URLN))
}

else if (count == 34 || count == 35 || count == 36 || count == 37 || count == 38 || count == 39) {
    URLW = `${URLHeroku}/index4.html`
    JSON.stringify(localStorage.setItem("urlw", URLW))
    URLN = `${URLHeroku}/index4.html`
    JSON.stringify(localStorage.setItem("urln", URLN))
}
else if (count == 40) {
  URLW = `${URLHeroku}/final.html`
  JSON.stringify(localStorage.setItem("urlw", URLW))
  URLN = `${URLHeroku}/final.html`
  JSON.stringify(localStorage.setItem("urln", URLN))
}


footer.innerHTML = `
<h1>
<span>${questions[count - 18].nq} - </span> <span>${questions[count - 18].q}</span>
</h1>
`