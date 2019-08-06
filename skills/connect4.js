
module.exports = function (controller) {

     controller.hears(['connect4'], 'direct_message,direct_mention', function (bot, message) {
      
        bot.startConversation(message, function (err, convo) {
            convo.say('Creating a new space for your group..');
            //getId(err);
            newRooms(err);
            
            });
        });
    };
  
    function newRooms(cb) {
        var resp = [];
        var request = require("request");
      
        let options = { method: 'POST',
            url: "https://api.ciscospark.com/v1/rooms",
            headers: { "Authorization" : "Bearer " + controller.access_token,
            'Content-Type': 'application/json' },
            body: { "title" : "BridgeB"},
            json: true };
        
        request(options, function (err, response, body) {
            
            if (err) cb(err.message);
            if (response.statusCode == 204) {
                cb(null);   
            }
            resp.push(JSON.stringify(response.body.id))
            id(resp);
            //cb("Could not post message to Webex Teams")
        });
      
  }

  function getId(cb) {
    var resp = [];

    var request = require("request");
  
    let options = { method: 'GET',
        url: "https://d94fc412.ngrok.io",
        headers: { "Authorization" : "Bearer " + access_token,
        'Content-Type': 'application/json' },
        json: true };
    
    request(options, function (err, response, body) {
        
        if (err) cb(err.message);
        if (response.statusCode == 204) {
            cb(null);   
        }
        resp.push(JSON.stringify(response.body.id))
        id(resp);
        //cb("Could not post message to Webex Teams")
    });
  
}

  function id(arr){
      totalSpaceID = arr[0];
      ListMembers(totalSpaceID);
  }

  function membersList(arr){
    console.log(arr);

}
  function ListMembers(id) {
    var resp = [];
    var request = require("request");
  
    let options = { method: 'GET',
        url: "https://api.ciscospark.com/v1/memberships" + "?roomId=" + id,
        headers: { "Authorization" : "Bearer " + access_token,
        'Content-Type': 'application/json' },
        json: true };
    
    request(options, function (err, response, body) {
        
        if (err) cb(err.message);
        if (response.statusCode == 204) {
            cb(null);   
        }
        //resp.push(JSON.stringify(response))
        console.log(JSON.stringify(response));
        //membersList(resp);
        //cb("Could not post message to Webex Teams")
    });
  
}
  

            
            
            
