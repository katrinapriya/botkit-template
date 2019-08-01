//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        //text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.enrichCommand(message, "icebreaker") + ": sends an icebreaker to the group";
        text += "\n- " + bot.enrichCommand(message, "food") + ": helps pick a cuisine for your group to eat";
        text += "\n- " + bot.enrichCommand(message, "compliment") + ": brightens up your day with a compliment!";
        bot.reply(message, text);
    });
}
