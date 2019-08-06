module.exports = function (controller) {
    controller.hears(['room'], function (command) {
        bot.startConversation(message, function (err, convo) {            
            convo.say(command.message.roomId);

        });
    });
};