//
// Simplest use of Botkit's conversation system
//
module.exports = function (controller) {

    controller.hears([/^color$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            var iceBreakers = ["If you were a vegetable, what vegetable would you be?",
			"If you could have one superpower, what would it be and why?",
			"If you could live anywhere on this planet and take everything that you love with you, where would you choose to live?", 
			"If you could choose an imaginary friend, who would you choose and why?",
			"If you could choose your age forever, what age would you choose and why?",
			"If you could be in the movie of your choice, what movie would you choose and what character would you play?",
			"If you could meet any historical figure, who would you choose and why?",
			"If you were to change your name, what name would you adopt going forward? Why?",
			"If you were stranded on a desert island, what three items would you want to have with you?",
			"What item that you don't have already, would you most like to own?",
			"If you could only choose one vacation destination where would you pick and why?",
			"If you were to create a slogan for your life, what would the slogan be?", 
			"What TV show are you addicted to?",
			"What’s your favorite book?",
			"You have to sing karaoke, what song do you pick?",
			"What sport would you compete in if you were in the Olympics?",
			"Would you rather be the funniest or smartest person in the room?",
			"What is your favorite dessert?",
			"If you could instantly become an expert in something, what would it be?",
			"What is your absolute dream job?",
			"If you could choose one hobby that now seems out of your reach either financially or time-wise, what hobby would you take up and why?"]
			 
			var show = iceBreakers[Math.floor(Math.random() * iceBreakers.length)];
            convo.say(show);  
            });
        });
};



