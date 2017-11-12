from decimal import Decimal
from flask.json import JSONEncoder
from googleplaces import Place, Photo


class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, Place):
                return {
                    'name': obj.name,
                    'address': obj.vicinity,
                    'lat_lng': obj.geo_location,
                    'rating': obj.rating,
                    'photos': obj.photos
                }
            elif isinstance(obj, Photo):
                return obj.photo_reference
            elif isinstance(obj, Decimal):
                return float(obj)

            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)
