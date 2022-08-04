import requests


#specimen signature
url = 'https://ext.digio.in:444/client/kyc/v2/request/with_template'
json = {
    "customer_identifier": "brijeshpandey18@gmail.com",
    "template_name": "SIGNED-TEST",
    "notify_customer": True,
    "generate_access_token": True

}
headers = {
    'Authorization':'Basic QUk0WjU4S0ZIQlVUQjdXNkZRSkE3UEE4Q1hTU1ZQTEE6VlZPQjY5OEwyTEVSNDFUWU5UTDRKT1BaUkdKQ0VYQTQ=',
    'Content-type':'application/json'
}


response = requests.post(
    url,
    headers=headers,
    json=json
)
print(response.status_code)
print(response.json())