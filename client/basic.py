import requests

endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/api/tracks/1"


#get_respones = requests.post(endpoint, json={"url":"asd","title": "", "remix":"asd"})
get_respones = requests.get(endpoint)

print(get_respones.status_code)


print(get_respones.json())