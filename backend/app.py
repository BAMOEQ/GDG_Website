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
    officers = [
        {
            'id': 1, 
            'name': 'Grace He', 
            'position': 'President',
            'team': 'Leadership'
        }, 
        {
            'id': 2, 
            'name': 'Shubhi Upadhyay', 
            'position': 'Vice President',
            'team': 'Leadership'
        },
        {
            'id': 3, 
            'name': 'Tony Liu', 
            'position': 'Secretary',
            'team': 'Leadership'
        },
        {
            'id': 4, 
            'name': 'Andrew Kim', 
            'position': 'Treasurer',
            'team': 'Leadership'
        },
        {
            'id': 5, 
            'name': 'Vishnu Kommuri', 
            'position': 'Tech Lead',
            'team': 'Collab'
        },
        {
            'id': 6, 
            'name': 'Henry Yuan', 
            'position': 'Tech Lead',
            'team': 'Collab'
        },
        {
            'id': 7, 
            'name': 'Aryan Chaudhary', 
            'position': 'Tech Lead',
            'team': 'Collab'
        },
        {
            'id': 8, 
            'name': 'Venetia Liu', 
            'position': 'Marketing Lead',
            'team': 'Marketing Co-Lead'
        },
        {
            'id': 9, 
            'name': 'Helen Zhou', 
            'position': 'Marketing Co-Lead',
            'team': 'Marketing'
        },
        {
            'id': 10, 
            'name': 'Haley Kim', 
            'position': 'Marketing Team',
            'team': 'Marketing'
        },
        {
            'id': 11, 
            'name': 'Heloise Lu', 
            'position': 'Marketing Team',
            'team': 'Marketing'
        },
        {
            'id': 12, 
            'name': 'Clarissa Choi', 
            'position': 'Event Coordinator',
            'team': 'Events'
        },
        {
            'id': 13, 
            'name': 'Hailey Kim', 
            'position': 'Event Coordinator',
            'team': 'Events'
        },
        {
            'id': 14, 
            'name': 'Belle Mbaezue', 
            'position': 'Event Coordinator',
            'team': 'Events'
        },
        {
            'id': 15, 
            'name': 'Reva Sharma', 
            'position': 'Event Coordinator',
            'team': 'Events'
        },
        {
            'id': 16, 
            'name': 'Thomas Wang', 
            'position': 'Event Coordinator',
            'team': 'Events'
        }
    ]
    return jsonify(officers)

if __name__ == '__main__':
    app.run(debug=True)