import requests

endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/"


get_respones = requests.get(endpoint)


print(get_respones.status_code)


#print(get_respones.json())