import requests

#selfie call
url = 'https://ext.digio.in:444/client/kyc/v2/request'

headers = {
  'Authorization':'Basic QUk0WjU4S0ZIQlVUQjdXNkZRSkE3UEE4Q1hTU1ZQTEE6VlZPQjY5OEwyTEVSNDFUWU5UTDRKT1BaUkdKQ0VYQTQ=',
  'Content-type':'application/json'
}

json = {
  "customer_identifier": 'brijeshpandey18@gmail.com',
  "customer_name": 'brijesh',
  "actions": [{
      "type": "SELFIE",
      "title": "Face Capture",
      "description": "Take a clear picture of your face",
      "allow_image_upload": True,
      "id_analysis_required": True,
      "face_match_obj_type": "SOURCE"
      }],
      "expire_in_days": 90,
      "notify_customer": True,
  "generate_access_token":True
}

response = requests.post(
    url,
    headers=headers,
    json=json
)
print(response.status_code)
print(response.json())
