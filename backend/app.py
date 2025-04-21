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
            'team': 'Leadership',
            'image': '/images/He_Grace.jpg'
        }, 
        {
            'id': 2, 
            'name': 'Shubhi Upadhyay', 
            'position': 'Vice President',
            'team': 'Leadership',
            'image': '/images/Upadhyay_Shubhi.jpg'
        },
        {
            'id': 3, 
            'name': 'Tony Liu', 
            'position': 'Secretary',
            'team': 'Leadership',
            'image': '/images/Liu_Tony.jpg'
        },
        {
            'id': 4, 
            'name': 'Andrew Song', 
            'position': 'Treasurer',
            'team': 'Leadership',
            'image': '/images/Song_Andrew.jpg'
        },
        {
            'id': 5, 
            'name': 'Vishnu Kommuri', 
            'position': 'Program Lead',
            'team': 'COLLAB',
            'image': '/images/Kommuri_Vishnu.jpg'
        },
        {
            'id': 6, 
            'name': 'Henry Yuan', 
            'position': 'Program Lead',
            'team': 'COLLAB',
            'image': '/images/Yuan_Henry.jpg'
        },
        {
            'id': 7, 
            'name': 'Aryan Chaudhary', 
            'position': 'Program Lead',
            'team': 'COLLAB', 
            'image': '/images/Chaudhary_Aryan.png'
        },
        {
            'id': 8, 
            'name': 'Venetia Liu', 
            'position': 'Marketing Lead',
            'team': 'Marketing',
            'image': '/images/Liu_Venetia.jpeg'
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
            'team': 'Events',
            'image': '/images/Choi_Clarissa.png'
        },
        {
            'id': 13, 
            'name': 'Hailey Kim', 
            'position': 'Event Coordinator',
            'team': 'Events',
            'image': '/images/Kim_Hailey.jpg'
        },
        {
            'id': 14, 
            'name': 'Belle Mbaezue', 
            'position': 'Event Coordinator',
            'team': 'Events',
            'image': '/images/Mbaezue_Belle.jpeg'
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
            'team': 'Events',
            'image': '/images/Wang_Thomas.jpeg'
        }
    ]
    return jsonify(officers)

# projects route
@app.route('/api/collab', methods=['GET'])
def collab():
    collab = [
        {
            'id': 1, 
            'name': 'test', 
            'about': 'test',
            'year': 'test',
            'image': 'test'
        },
    ] 
    return jsonify(collab)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)