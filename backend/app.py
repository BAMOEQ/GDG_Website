# importing the Flask class from the flask library
from flask import Flask, jsonify
from flask_cors import CORS

# creating an instance of the Flask class and storing it in a variable called app
app = Flask(__name__)
CORS(app)

# the default route returns a function called home, that prints 'Hello, World!'
@app.route('/')
def home():
    return 'Hello, World!'

# the /events route returns a function called events, that prints 'Events page'
@app.route('/api/events', methods=['GET'])
def events():
    events = [{'id': 1, 'title': 'Python Workshop', 'date': '2021-08-01', 'location': 'Leslie E-lab'}, {'id': 2, 'title': 'JavaScript Workshop', 'date': '2021-08-02', 'location': 'Leslie E-lab'}]
    return jsonify(events)

# add the officers route
@app.route('/api/officers', methods=['GET'])
def officers():
    officers = [{'id': 1, 'name': 'Grace Hopper', 'position': 'President'}, {'id': 2, 'name': 'Ada Lovelace', 'position': 'Vice President'}]
    return jsonify(officers)

if __name__ == '__main__':
    app.run(debug=True)