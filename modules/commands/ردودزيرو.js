const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "‌‌المطور",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["تحتاج شيئا  ؟ ","اسمي فخمه صح" , "اتركني لست في مزاج جيد ","ابنت عمر 🥹🌹", "هل تريد ان تعترف لي بشيء 🤭" , "اشتقت لك 🥰" , "انا في خدمتك" , "باكا" , "هففف ماذا مجددا " ,"عمتك🖤💃", "جامبري جامبري" , "ميمو الكيوته فخدمتك","يوتا في الساحه مفيش مساحه","عيون يوتا","شبيك لبيك يوتا بين يديك","يئبرني حبيب يوتا•-•♡"," انا تحت امرك يا سيد" , "لن تتعبو من مناداتي ؟ 😠👊🏻"];  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "أحبك")) {
     return api.sendMessage("هممم... الامر محرج دعني افكر في الامر😾 ", threadID)
   };
  if ((event.body.toLowerCase() == "بنتي") || (event.body.toLowerCase() =="بيبي" && event.senderID == "100094409873389")) {
     return api.sendMessage("نعم بـابــي❤🤧", threadID);
   };
  if ((event.body.toLowerCase() == "احا") || (event.body.toLowerCase() == "احا🙆‍♂️")) {
     return api.sendMessage("ثواني😑🙂 كدا       احتين😹", threadID);
   };
if ((event.body.toLowerCase() == "صديقي") || (event.body.toLowerCase() == "رفيقي")) {
     return api.sendMessage("هل تعلم انهو هناك الف مجرة في هاذا الكون", threadID);
   };
  if ((event.body.toLowerCase() == "ايهاب") || (event.body.toLowerCase() =="عبدالمالك"&& event.senderID == "100094409873389")) {
     return api.sendMessage("واحد واطي 😡🔪", threadID);
   };
  if ((event.body.toLowerCase() == "انوبيس") || (event.body.toLowerCase() =="محمد" )) {
     return api.sendMessage("امبراطور سينا للمجد😈🖤", threadID);
   };
  if ((event.body.toLowerCase() == "ليبيا") || (event.body.toLowerCase() =="ليبي" && event.senderID == "100094409873389")) {
     return api.sendMessage("اهل العز و الفخامة يرب احفضهم 🖤😩🎧", threadID);
   };
  if ((event.body.toLowerCase() == "هل تعلم انهو هناك الف مجرة في هاذا الكون") || (event.body.toLowerCase() == "هل تعلم انهو هناك الف مجرة في هاذا الكون")) {
     return api.sendMessage("و في مجرة درب التبانه هناك مليارات الكواكب", threadID);
   };
  
  
  if ((event.body.toLowerCase() == "و في مجرة درب التبانه هناك مليارات الكواكب") || (event.body.toLowerCase() == "و في مجرة درب التبانه هناك مليارات الكواكب")) {
     return api.sendMessage("و منبين الكولاكب هناك كوكب صغير جدة جدة", threadID);
   };
  if ((event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() =="المالك" )) {
     return api.sendMessage("المطور هوا الفتى المتكبر عمك 🐢♥", threadID);
   };
  if ((event.body.toLowerCase() == "شادي") || (event.body.toLowerCase() =="احمد" && event.senderID == "100094409873389")) {
     return api.sendMessage("جربوع", threadID);
   };
if ((event.body.toLowerCase() == "مش متحمم من اسبوع") || (event.body.toLowerCase() =="مو متحمم من اسبوع" && event.senderID == "100094409873389")) {
     return api.sendMessage("الشانبو عندو دايمن مقطوع", threadID);
   };
if ((event.body.toLowerCase() == "اجرب") || (event.body.toLowerCase() =="اجرب" && event.senderID == "100094409873389")) {
     return api.sendMessage("اوووو💃✨", threadID);
   };
if ((event.body.toLowerCase() == "مابيتحمم ايلا بي العيد") || (event.body.toLowerCase() =="مابتحمم ايلا بلعيد" && event.senderID == "100094409873389")) {
     return api.sendMessage("بتشم ريحتو حتا لو كان بعيد💃✨", threadID);
   };
if ((event.body.toLowerCase() == "ريحتو قويا بدها بندول") || (event.body.toLowerCase() =="ريحتو قويا بدها بندول" && event.senderID == "100094409873389")) {
     return api.sendMessage("جرثيم مابيقضي عليها ديتول💃✨", threadID);
   };
  if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() =="بحبك" && event.senderID == "100094409873389")) {
     return api.sendMessage("وانا اموت فيك يا حبي", threadID);
   };
  if ((event.body.toLowerCase() == "🦧") || (event.body.toLowerCase() == "🦍")) {
     return api.sendMessage("واو هناك غوريلى مفقسة في نص الجروب", threadID);
   };
  
  if ((event.body.toLowerCase() == "و منبين الكولاكب هناك كوكب صغير جدة جدة") || (event.body.toLowerCase() == "و منبين الكولاكب هناك كوكب صغير جدة جدة")) {
     return api.sendMessage("وفي هاذا الكوكب الصفير هناك حوالي 3مليون شخص", threadID);
   };

  if ((event.body.toLowerCase() == "وفي هاذا الكوكب الصفير هناك حوالي 3مليون شخص") || (event.body.toLowerCase() == "وفي هاذا الكوكب الصفير هناك حوالي 3مليون شخص")) {
     return api.sendMessage("وهل تعلم ان هناك شخص من هائؤلاء الاشخاص هناك ", threadID);
   };

  if ((event.body.toLowerCase() == "وهل تعلم ان هناك شخص من هائؤلاء الاشخاص هناك") || (event.body.toLowerCase() == "وهل تعلم ان هناك شخص من هائؤلاء الاشخاص هناك ")) {
     return api.sendMessage("صديقك 🙂كدا سخص معفن يلا فايدة اخخ طف🙂", threadID);
   };

  if ((event.body.toLowerCase() == "صديقك 🙂كدا سخص معفن يلا فايدة اخخ طف🙂") || (event.body.toLowerCase() == "صديقك 🙂كدا سخص معفن يلا فايدة اخخ طف🙂")) {
     return api.sendMessage("شفت كيف انو صديقك مجرد حسرة معفنه و انت شغال صديقي صديقي", threadID);
   };
 if ((event.body.toLowerCase() == "لا") || (event.body.toLowerCase() == "يس")) {
     return api.sendMessage("كذاب🙂", threadID);
   };
  
  if ((event.body.toLowerCase() == "شرح زينبو") || (event.body.toLowerCase() == "ماهوا الزينبو")) {
     return api.sendMessage("الزينبو هو عضو التناسل الذكري لدى الإنسان والحيوانات. يتكون القضيب من نسيج مشبك يحتوي على أنسجة عضلية وأنسجة ضامة وأنسجة تجلط الدم. وظيفة القضيب الأساسية هي إدخال السائل المنوي إلى جسم الأنثى أثناء الجماع، وهي وظيفة تساهم في عملية التكاثر. يتغير حجم وشكل القضيب بين الأفراد ويمكن أن يتأثر بعوامل مثل الهرمونات والصحة العامة للشخص. يجب الإشارة إلى أن الحديث عن القضيب يتعلق بالموضوعات الجنسية والتشريعات المحلية، ولذلك يجب أن يتم التعبير عنها بطريقة محترمة ومناسبة.🤓🤓🤓", threadID);
   };

  if ((event.body.toLowerCase() == "تم تجاهلي بنجاح") || (event.body.toLowerCase() == "تم تاهلي بنجاح")) {
     return api.sendMessage("لا تحزن يا صديقي هاكذا هم الكلاب ترقض خلف كصلحتها فقط🤧🤘يسلام عليا🌞صرت فنانا", threadID);
   };
  if ((event.body.toLowerCase() == "وينكم") || (event.body.toLowerCase() == "اين الجميع")) {
     return api.sendMessage("ملاك الخداع موجود و نوري يطفي نور الكل😐🤘", threadID);
   };
  if ((event.body.toLowerCase() == "ملاك الخداع") || (event.body.toLowerCase() == "انت بوت؟ ")) {
     return api.sendMessage("نعم معك ملاك الخداع بوت💪😎", threadID);
   };
  
  if ((event.body.toLowerCase() == "اميرة بلا تاج") || (event.body.toLowerCase() == "@أميرة بلا تاج")) {
     return api.sendMessage("ملكة زمانها الفخمة😎💎💝", threadID);
   };
  
  if ((event.body.toLowerCase() == "تتكلم مع بوت") || (event.body.toLowerCase() == "هاذا بوت")) {
     return api.sendMessage(" فضحتني الله  يفضحك كنت استمتع😹😹🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "لباس عليك")) {
     return api.sendMessage("في نعما الحمد لله وانت", threadID);
   };
  
    if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💗")) {
     return api.sendMessage("هل انا حبيبك لترسل لي هذا ؟", threadID);
   };

  if ((event.body.toLowerCase() == "@الفتى المتكبر") || (event.body.toLowerCase() == "يا شامخ")) {
     return api.sendMessage("لاتزعجو مطوري حبيبي ❤😑🔫", threadID);
   };
    if ((event.body.toLowerCase() == "@شامخ عليكم بقوه") || (event.body.toLowerCase() == "خالد المغربي")) {
     return api.sendMessage("سيدك وتاج راسك😎👑", threadID);
   };
  
 if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("انت تعرف اين يضع الناس لايك", threadID);
   };

  if ((event.body.toLowerCase() == "اطرد البوت") || (event.body.toLowerCase() == "اطرد ملاك")) {
     return api.sendMessage("اطردوني مابدي ابقا حسا نفسي في زريبه🙂 تماسيح🐊 و خنازيد🐖 و بطاريق🐧 و كلاب🦮 و دجاج🐓 و خواريف🐑", threadID);
   };
  
  if ((event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() == "صانع البوت")) {
     return api.sendMessage("شامخ افضل مطور عاش اسرع حتا من افلاش 🫡😎👑", threadID);
   };
  
   if ((event.body.toLowerCase() == "اكرهك") || (event.body.toLowerCase() == "لا احبك")) {
     return api.sendMessage("اوكي اكرهني يا احمق", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "tnx") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "i'm")) {
     return api.sendMessage("دوي بالعربية المعياق(ة) ", threadID);
   };

   if ((event.body.toLowerCase() == "كسمك") || (event.body.toLowerCase() == "نكمك")) {
     return api.sendMessage("شوفو في كلب عم ينبح🤣💔", threadID);
   };

   if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "يا بوت")) {
     return api.sendMessage(" اسمي مارسلين او ملاك 😑", threadID);
   };

   if ((event.body.toLowerCase() == "صباحو") || (event.body.toLowerCase() == "صباح الخير")) {
     return api.sendMessage("صباح النور عزيزي لتحضى بيوم جيد ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "ليلة سعيدة")) {
     return api.sendMessage("ليلة سعيدة لك ايضا عزيزي ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "حمد") || (event.body.toLowerCase() == "شامخ") || (event.body.toLowerCase() == "شموخي") || (event.body.toLowerCase() == "سس")) {
     return api.sendMessage( "عزيزي شامخ مشغول الان  😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "المالك") || (event.body.toLowerCase() == "المطور")) {
     return api.sendMessage("‎[المالك:☞شامخ ☜ تستطيع مناداته سيد الاسياد .\n حساب  :الاسم: شامخ عليكم بقوه العلاقة: 🙂⁦✌️⁩مرتبط بي نجل.. .............رابط الملف الشخصي:https://www.facebook.com/profile.php?id=100092316091941\n- https://www.facebook.com/gemar.pro.52/\n", threadID);
   };

   if ((event.body.toLowerCase() == "ملاك") || (event.body.toLowerCase() == "ملاكي")) {
     return api.sendMessage("شبيك لبيك ملاك الوحده بين يديك", threadID);
   };

  if ((event.body.toLowerCase() == "بوووم") || (event.body.toLowerCase() == "الجبها طارت")) {
     return api.sendMessage(" كسر الخواطر 👍🏻عجن الخواطر 👍🏻طحن الخواطر 👍🏻 تسطير الخواطر 👍🏻تفليش الخواطر 👍🏻هرس الخواطر 👍🏻فعص الخواطر 👍🏻فرم الخواطر 👍🏻خبز الخواطر 👍🏻سلق الخواطر 👍🏻حرق الخواطر 👍🏻دعس الخواطر 👍🏻تكديس الخواطر 👍🏻صلخ الخواطر 👍🏻تشليع الخواطر 👍🏻تمليخ الخواطر 👍🏻ضرب الخواطر 👍🏻فشخ الخواطر 👍🏻تفتيت الخواطر 👍🏻تحطيم الخواطر 👍🏻بعص الخواطر 👍🏻عصر الخواطر 👍🏻زرف الخواطر 👍🏻ذبح الخواطر 👍🏻بصق الخواطر 👍🏻تقطيع الخواطر 👍🏻تفجير الخواطر 👍🏻قتل الخواطر 👍🏻أكل الخواطر 👍🏻دهس الخواطر 👍🏻بلع الخواطر👍🏻تدمير الخواطر 👍🏻شنق الخواطر 👍🏻خنق الخواطر 👍🏻لعن الخواطر 👍🏻طعن الخواطر 👍🏻هدم الخواطر 👍🏻قص الخواطر 👍🏻شق الخواطر 👍🏻تعذيب الخواطر 👍🏻تخويف الخواطر 👍🏻إحزان الخواطر 👍🏻ضرب الخواطر بالحزام 👍🏻سحق الخواطر 👍🏻استأصال الخواطر 👍🏻قلع الخواطر 👍🏻نعل الخواطر 👍🏻جعص الخواطر 👍🏻فرش الخواطر 👍🏻قضم الخواطر 👍🏻صعق الخواطر 👍🏻أستهزاء الخواطر 👍🏻رفس الخواطر 👍🏻اعدام الخواطر 👍🏻قطع الخواطر👍🏻تفحيط الخواطر 👍🏻دفن الخواطر 👍🏻", threadID);
   };

   if ((event.body.toLowerCase() == "اسكت") || (event.body.toLowerCase() == "توقف")) {
     return api.sendMessage("مش بسكت لي امثالك🧐.", threadID);
   };

   if ((event.body.toLowerCase() == "مارسي") || (event.body.toLowerCase() == "ملوكة")) {
     return api.sendMessage("انا مارسلين ملكة مصاصين الدماء و بنت شامخ", threadID);
   };

   if ((event.body.toLowerCase() == "قحبه") || (event.body.toLowerCase() == "بوت قحبه") || (event.body.toLowerCase() == "يا قحبه") || (event.body.toLowerCase() == "القحبه")) {
     return api.sendMessage("عيب تنادي اسم امك 😅", threadID);
   };

   if ((event.body.toLowerCase() == "لوفي") || (event.body.toLowerCase() == "ونبيس") || (event.body.toLowerCase() == "ناروتو")) {
     return api.sendMessage("عمك😎💯⁦☣️⁩", threadID);
   };

   if ((event.body.toLowerCase() == "ليبيا") || (event.body.toLowerCase() == "eg") || (event.body.toLowerCase() == "ليبيه") || (event.body.toLowerCase() == "ليبي")) {
     return api.sendMessage("احسن و احلا و افضل و افخم  ناس", threadID);
   };

   if ((event.body.toLowerCase() == "احح") || (event.body.toLowerCase() == "ااااااح") || (event.body.toLowerCase() == "اححححح") || (event.body.toLowerCase() == "اح")) {
     return api.sendMessage("منحرف اهربووووووووو", threadID);
   };

   if ((event.body.toLowerCase() == "مح") || (event.body.toLowerCase() == "بوسيني")) {
     return api.sendMessage("️مح على شامخ وحدو", threadID);
   };

   if ((event.body.toLowerCase() == "جيد") || (event.body.toLowerCase() == "شكرا") || (event.body.toLowerCase() == "شكرا لك") || (event.body.toLowerCase() == "شكرا لك ")) {
     return api.sendMessage("️انا في الخدمة فقط اطلب عزيزي.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 لماذا انت غاضب انا هنا كي افرج عنك😘", threadID);
   };

   if ((event.body.toLowerCase() == "همم") || (event.body.toLowerCase() == "هممم") || (event.body.toLowerCase() == "همممم") || (event.body.toLowerCase() == "هممممم")) {
     return api.sendMessage("️ممكن افكر معك 🤧💔", threadID);
   

   if ((event.body.toLowerCase() == "زپري") || (event.body.toLowerCase() == "اسكت احسن لك") || (event.body.toLowerCase() == "🙂 💢")) {
     return api.sendMessage("احا شامخ عصب انفدو بريشكم🐧😱.", threadID);
   };

   if ((event.body.toLowerCase() == "مارسلين") || (event.body.toLowerCase() == "نا")) {
     return api.sendMessage("️حضوري يلغي حضور الكل ❤️.", threadID);
   };

   if ((event.body.toLowerCase() == "صور") || (event.body.toLowerCase() == ".صور")) {
     return api.sendMessage("️اذهب لغوغل يا ابني", threadID);
   };

   if ((event.body.toLowerCase() == "يااحمد يامحسن") || (event.body.toLowerCase() == "احمد محسن")) {
     return api.sendMessage("بيو بيو ببيو بيو بيو بيو بيو🐢💃", threadID);
   };

   if ((event.body.toLowerCase() == "نعم") || (event.body.toLowerCase() == "اجل")) {
     return api.sendMessage("️لا", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️يا امي ايموجي الدمار اهربو🤣💔", threadID);
   };
  
   if ((event.body.toLowerCase() == "بوت سب هأذا الكلب") || (event.body.toLowerCase() == "المحامي الخاص بي شامخ")) {
     return api.sendMessage("يولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع شقمڪكيخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع شقمڪك ڪلنا زيڪك يقحابيراههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع شقمڪكك يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرمقحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك خ قحبهه مش ڪلنا زيڪك يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع  فرخخ قحبهه مش ڪلنا زيڪك يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربعڪلنا زيڪك يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع  يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيڪها برا الدار يولد المريضه ونحشي لطيزمڪك هيتم العريضه يولد القحاب نحشي ل شقمڪك باب سحاب ودولاب مع العبيد الزباب يولد ميلادد ارحل يطفل لنيك نهردك يولد القحبوشه وحاشي ل طيزمڪك ڪوشة ياولد المجنوسة بنبدا بنعصد شقمڪك ياولد قحبه تفي عشقمك يخو بتشات وناخد من صرم امڪك نتشات ياود بزاع مصر وناي خواتڪك من ظهر لعصر تفي عصرم امڪك ياولد قحبه را تفتريش يخو قحاب ونحشي لصرم امڪك باب وزب شهاب ونقربع شقمڪك يخو قحابي راههيولد خو مبروڪه نرڪبها ع دربوڪة وع البوڪه وتينتها مشروڪة و مهبوڪة يولد العار ونحشي ل طيزمڪك منظار ومندار وانيهايول🐯⁦✌️⁩تم لقد اخرجت كرامتو من ترمتو😪💔🤣", threadID);
   };

   if ((event.body.toLowerCase() == "لا احد يحبني") || (event.body.toLowerCase() == "انا حزين") || (event.body.toLowerCase() == "انا سنجل")) {
     return api.sendMessage("️ولكنني احبك☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🙂💔")) {
     return api.sendMessage("هل قمت بشيء خاطئ?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("تدوم ياعسل🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("هل انت مغرم بي?🥰", threadID);
   };
if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() =="بحبك" && event.senderID == "100094409873389")) {
     return api.sendMessage("وانا اموت فيك يا حبي", threadID);
   };
  
   if ((event.body.toLowerCase() == "كيف حالك")) {
     return api.sendMessage("بخير اتمنى ان تكون كذلك ايضا ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "هل انتي حزينة ؟") || (event.body.toLowerCase() == "هل هي حزينة ؟")) {
     return api.sendMessage("ولما اكون حزينة والكل يحبني <3", threadID);
   };

   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("عليكم السلام", threadID);
   };

   if ((event.body.toLowerCase() == "يب") || (event.body.toLowerCase() == "yup")) {
     return api.sendMessage("هاذا كذاب منتهي 😑✨", threadID);
   };

   if ((event.body.toLowerCase() == "وات فك") || (event.body.toLowerCase() == "وات")) {
     return api.sendMessage("نعم وات فاك مان", threadID);
   }; 
   if ((event.body.toLowerCase() == "هل تحبني ؟") || (event.body.toLowerCase() == "هل ملاك ؟")) {
     return api.sendMessage("اجل", threadID);
   };

  
   if ((event.body.toLowerCase() == "راح") || (event.body.toLowerCase() == "مات")) {
     return api.sendMessage("من قال ذلك ?", threadID);
   };
  
  if (event.body.indexOf("ملاك") == 0 || (event.body.indexOf("يوتا") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
