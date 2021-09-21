const action_name = "action_greet_user";
const rasa_server_url = "http://localhost:5005/webhooks/rest/webhook";
const sender_id = uuidv4();
const rasa_action_trigger_URL=`http://localhost:5005/conversations/${sender_id}/execute`;
const rasa_customActionTrigger_URL="http://localhost:5055/webhook/";