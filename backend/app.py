# importing the Flask class from the flask library
from flask import Flask, jsonify

# creating an instance of the Flask class and storing it in a variable called app
app = Flask(__name__)

# the default route returns a function called home, that prints 'Hello, World!'
@app.route('/')
def home():
    return 'Hello, World!'

# the /events route returns a function called events, that prints 'Events page'
@app.route('/events', methods=['GET'])
def events():
    events = [{'id': 1, 'name': 'Python Workshop', 'date': '2021-08-01', 'location': 'Leslie E-lab'}, {'id': 2, 'name': 'JavaScript Workshop', 'date': '2021-08-02', 'location': 'Leslie E-lab'}]
    return jsonify(events)



if __name__ == '__main__':
    app.run(debug=True)