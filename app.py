from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__, static_url_path='', static_folder='dist')

app.config['MONGO_DBNAME'] = 'TestDB'
#app.config['MONGO_URI'] ='mongodb://127.0.0.1:27017/test'
app.config['MONGO_URI'] ='mongodb+srv://joelovingall:TzvEbiedqx0JQCUv@testcluster-sywuy.mongodb.net/TestDB'

mongo = PyMongo(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/lgpst', methods=['POST'])
def add_user():
    tbl = mongo.db.TestCollection 

    nme = request.json['name']
    ag = request.json['age']
    id = request.json['id']

    user_id = tbl.insert({'name' : nme, 'age' : ag, 'id' : id})
    new_user = tbl.find_one({'_id' : user_id})

    output = {'name' : new_user['name'], 'age' : new_user['pwd'], 'id' : new_user['id']}

    return jsonify({'result' : output})

@app.route('/userlist', methods=['GET'])
def get_all_users():
    framework = mongo.db.TestCollection 

    output = []

    for q in framework.find():
        output.append({'name' : q['name'], 'ID' : q['ID']})

    return jsonify({'result' : output})

@app.route('/framework/<name>', methods=['GET'])
def get_one_framework(name):
    framework = mongo.db.TestCollection

    q = framework.find_one({'name' : name})

    if q:
        output = {'name' : q['name'], 'ID' : q['ID']}
    else:
        output = 'No results found'

    return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)