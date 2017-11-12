import env
import requests_cache
from flask import Flask, jsonify

from arcadia.api import ThingsToDo
from arcadia.util import CustomJSONEncoder

requests_cache.install_cache('.cache')

app = Flask(__name__)
app.json_encoder = CustomJSONEncoder


@app.route('/')
def get_places():
    todo = ThingsToDo(env.GOOGLE_API_KEY)
    places = todo.findPlace(time=60, start={'lat':41.8781, 'lng':-87.6298}, category='Adult')
    return jsonify(places)


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)
