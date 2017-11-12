from googleplaces import GooglePlaces, types


class ThingsToDo:
    def __init__(self, api_key):
        self.api = GooglePlaces(api_key)
        self.event_time = 30
        self.place_categories = ['Food', 'Attractions', 'Chill']
        self.place_types = {
            0: [types.TYPE_BAR, types.TYPE_RESTAURANT, types.TYPE_CAFE,
                types.TYPE_BAKERY],
            1: [types.TYPE_MUSEUM, types.TYPE_ZOO, types.TYPE_BOWLING_ALLEY,
                types.TYPE_AMUSEMENT_PARK, types.TYPE_AQUARIUM],
            2: [types.TYPE_BOOK_STORE, types.TYPE_LIBRARY,
                types.TYPE_ART_GALLERY, types.TYPE_PARK]}

    def findRadius(self, time):
        if time < self.event_time:
            return False
        travel_time = (time - self.event_time) / 2
        speed = 938
        estimated_radius = travel_time * speed
        return estimated_radius

    def defineType(self, category):
        for i in range(len(self.place_categories)):
            if category == self.place_categories[i]:
                types_lst = self.place_types[i]

    def findPlace(self, time=60, start='Chicago', category='Food'):
        # time(int in min), start(dict containing {'lat': , 'lng': }starting Location), category(str type of place)
        # Finding the type of place to search for
        for i in range(len(self.place_categories)):
            if category == self.place_categories[i]:
                types_lst = self.place_types[i]

        # finding the range of place around the person
        estimated_radius = self.findRadius(time)

        # creating the list of places
        result = []
        for i in types_lst:
            query_result = self.api.nearby_search(location=start,
                                                  radius=estimated_radius,
                                                  types=[i])
            for j in query_result.places:
                result.append(j)

        return result
