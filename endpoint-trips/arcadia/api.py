from googleplaces import GooglePlaces, types
from arcadia.sentiment import run as anaylze_sentiment
import random
import logging
from statistics import mean
from functools import reduce

logger = logging.getLogger(__name__)

class ThingsToDo:
    def __init__(self, api_key):
        self.api = GooglePlaces(api_key)
        self.event_time = 30
        self.place_categories = ['Food', 'Attractions', 'Chill', 'Treat Yourself', 'Adult']
        self.place_types = {
            0:[types.TYPE_RESTAURANT, types.TYPE_CAFE, types.TYPE_BAKERY],
            1:[types.TYPE_MUSEUM, types.TYPE_ZOO, types.TYPE_BOWLING_ALLEY, types.TYPE_AMUSEMENT_PARK, types.TYPE_AQUARIUM, types.TYPE_MOVIE_THEATER],
            2:[types.TYPE_BOOK_STORE, types.TYPE_LIBRARY, types.TYPE_ART_GALLERY, types.TYPE_PARK, types.TYPE_PET_STORE, types.TYPE_SHOPPING_MALL],
            3:[types.TYPE_SPA, types.TYPE_HAIR_CARE, types.TYPE_BEAUTY_SALON],
            4:[types.TYPE_BAR, types.TYPE_NIGHT_CLUB, types.TYPE_CASINO]}
        self.times = {0: 45, 1:90, 2:60, 3:40, 4:150}

    def findPlace(self, time=60, start=None, category='Food'):
        #time(int in min), start(dict containing {'lat': , 'lng': }starting Location), category(str type of place)
        #returns a list of dictionaries [{'Name':place.name, 'Address':place.formatted_address, 'Lat_Lng':place.geo_location, 'Rating':place.rating, 'Photos':place.photos, 'ID':place.place_id}]
        
        if start is None:
            start = {'lat':41.8781, 'lng':-87.6298}
    
        # Finding the type of place to search for
        
        for i in range(len(self.place_categories)):
            if category == self.place_categories[i]:
                types_lst = self.place_types[i]
                self.event_time=self.times[i]

        # finding the range of place around the person
        if time < self.event_time:
            return False
        travel_time = (time - self.event_time) / 2
        speed = 938
        estimated_radius = travel_time * speed
        

        # creating the list of places
        results = []
        for i in types_lst:
            logger.info("searching type = '{}'".format(i))
            query_result = self.api.nearby_search(lat_lng=start, radius=estimated_radius, types=[i])
            for j in query_result.places:
                results.append(j)
        
        #creating a list of dictionaries of specific place details
        
        facts = []
        places = random.sample(results, 7)
        for place in places:
            logging.info("place_id: {}".format(place.place_id))
            place.get_details()
            
            reviews = [review['text'] for review in place.details['reviews']]
            
            logging.info("analyzing sentiments of reviews (n = {})".format(len(reviews)))
            sentiments = list(anaylze_sentiment(reviews))
            logging.info("anaylzing sentiments [done]")
            
            overall_sentiment = mean(map(lambda x: x['compound'], sentiments))
                        
            facts.append({
                'name': place.name,
                'address': place.formatted_address,
                'lat_lng': place.geo_location,
                'rating': place.rating,
                'photos': place.photos,
                'id': place.place_id,
                'phone_number': place.local_phone_number,
                'reviews': reviews,
                'sentiment': overall_sentiment,
                'duration':self.event_time
            })
        
        return facts
