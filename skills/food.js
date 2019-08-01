module.exports = function (controller) {

    controller.hears(['food'], 'direct_message,direct_mention', function (bot, message) {
    
        bot.startConversation(message, function (err, convo) {
            var cuisines = ["Chinese","Indian", "Italian", "Mediterranean", "Thai", "Pizza", "Cafeteria", "Japanese", "Mexican", "Vietnamese", "American"]
            
           var show = cuisines[Math.floor(Math.random() * cuisines.length)];
            convo.say(show);

           
           
        });
    });
};

