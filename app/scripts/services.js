'use strict';
angular.module('RASeed.services', [])



/**
 * A simple example service that returns some data.
 */

    .factory('Spots', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var spots = [
            {'id': 0, 'name': 'Aneto', 'latitude': '42.632161', 'longitude': '0.657847'},
            {'id': 1, 'name': 'Montcalm', 'latitude': '42.6722', 'longitude': '0.40639'},
            {'id': 2, 'name': 'Pic du midi', 'latitude': '42.93639', 'longitude': '0.14278'},
            {'id': 3, 'name': 'Posets', 'latitude': '42.65583', 'longitude': '0.436339'},
            {'id': 4, 'name': 'Mont Perdu', 'latitude': '42.67556', 'longitude': '0.03444'}
        ];

        return {
            all: function () {
                return spots;
            },
            get: function (spotId) {
                // Simple index lookup
                return spots[spotId];
            }
        };
    });
