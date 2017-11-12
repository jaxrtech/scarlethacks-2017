from flask import Flask, jsonify

import env
from arcadia.api import ThingsToDo

app = Flask(__name__)


def serialize_place(place):
    return {'name': place.name, 'lat': place.lat, 'lng': place.lng}


@app.route('/')
def hello_world():
    todo = ThingsToDo(env.GOOGLE_API_KEY)
    places = todo.findPlace(time=60, start='Chicago', category='Food')
    result = list(map(serialize_place, places))
    return jsonify(result)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
