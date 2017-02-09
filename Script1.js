@{
    string AccountSid = "AC5c886f996e3a678c12601ed858ac5c59";
    string AuthToken = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    // instantiate a new Twilio Rest Client
    var client = new TwilioRestClient(AccountSid, AuthToken);

    // make an associative array of people we know, indexed by phone number
    var people = new Dictionary& lt; string,string&gt;() {
        { "+14158675309","Curious George"},
        { "+14158675310","Boots"},
        { "+14158675311","Virgil"}
    };

    // iterate over all our friends
    foreach (var person in people)
    {

        // Send a new outgoing SMS by POSTing to the Messages resource */
        client.SendMessage(
             "YYY-YYY-YYYY", // From number, must be an SMS-enabled Twilio number
             person.Key,     // To number, if using Sandbox see note above
                             // message content
             string.Format("Hey {0}, Monkey Party at 6PM. Bring Bananas!", person.Value)
         );

        Response.Write(string.Format("Sent message to {0}", person.Value));
    }
}