import json

with open('quiz.json', 'r') as base_json:
    base_data = json.load(base_json)
    for entry in base_data:
        print (entry['question'])

