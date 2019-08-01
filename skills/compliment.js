 module.exports = function (controller) {

     controller.hears(['compliment'], 'direct_message,direct_mention', function (bot, message) {

         bot.startConversation(message, function (err, convo) {
         	var cuisines = ["Having you on the team makes a huge difference.", "You always find a way to get it done — and done well!", 
         	"It’s really admirable how you always see projects through from conception to completion.", "Thank you for always speaking up in team meetings and providing a unique perspective.", 

"Your efforts at strengthening our culture are not unnoticed.",

"Fantastic work!",

"Even when the going gets tough, you continue to have the best attitude!",

"Wow! Just when I thought your work couldn’t get any better!",

"I couldn’t imagine working without you!",

"Your work ethic speaks for itself.",

"There’s no other way to say it: we’d be lost without you.",

"Thanks for always being willing to lend a hand.",

"The pride you take in your work is truly inspiring.",

"You’re so great to work with.",

"I am continually impressed by the results you produce!",

"Thank you for being so flexible.",

"It’s incredible how thorough your work is.",

"Your work ethic is out of this world!",

"You’re awesome!", 
"You are an invaluable member of the team.",

"You come up with fantastic ideas!",
"Wow! Nice work.",
"I just wanted to let you know how much you mean to the team.",
"How did this place ever operate without you?!",
"You play a crucial role in our company’s success.",
"It’s so obvious how you pay attention to detail.",
"You are always so quick to show initiative.",
"You’re an awesome employee!",
"It’s incredible how often you go above and beyond.",
"Your work never ceases to amaze me!",
"Things have definitely been crazy lately, but you’re crushing it!"]



			 
			var show = cuisines[Math.floor(Math.random() * cuisines.length)];
             convo.say(show);

            
            
         });
     });
 };



