import requests

endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/api/basic/"


get_respones = requests.post(endpoint, json={"url":"asd","title": "asd", "remix":"asd"})


print(get_respones.status_code)


print(get_respones.json())