from ibm_watson import AssistantV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import json


authenticator = IAMAuthenticator('dUAJuLRy0WMwUOi_IipTNlRIr2a_DXjJljtztZxh69qy')
assistant = AssistantV2(
    version='2020-04-01',
    authenticator=authenticator
)

assistant.set_service_url('https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/3e4c800c-7ad2-40f9-961f-c5d791e5c342')

response = assistant.create_session(
    assistant_id='335d09b0-3e44-468c-bdcb-da31e6dcd023'
).get_result()

session_id = response["session_id"]
print(session_id)

def sendChat(text):
    response = assistant.message(
        assistant_id='335d09b0-3e44-468c-bdcb-da31e6dcd023',
        session_id=session_id,
        input={
            'message_type': 'text',
            'text': text
        }
    ).get_result()
    return json.dumps(response, indent=2)