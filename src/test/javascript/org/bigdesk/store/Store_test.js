/*
 * Copyright 2011-2013 Lukas Vlcek
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.require('org.bigdesk.store.Store');

goog.require('goog.testing.jsunit');

var testNodesStats = function() {

    var store = new org.bigdesk.store.Store();
    assertEquals("Array is empty", 0, store.nodesStats.length);

    store.addNodesStats(1, {});
    store.addNodesStats(3, {});
    store.addNodesStats(5, {});
    store.addNodesStats(4, {});
    store.addNodesStats(2, {});

    assertEquals("Stats array should have five items", 5, store.nodesStats.length);
    assertArrayEquals("Stats array should be kept sorted",
        [5,4,3,2,1],
        goog.array.map(store.nodesStats, function(item){ return item.timestamp })
    );

    // delete all from existing timestamp
    store.removeNodesStatsStaringFrom(2);

    assertArrayEquals("Stats array should be kept sorted",
        [5,4,3],
        goog.array.map(store.nodesStats, function(item){ return item.timestamp })
    );

    store.addNodesStats(7, {});
    store.addNodesStats(8, {});
    store.addNodesStats(9, {});

    assertArrayEquals("Stats array should be kept sorted",
        [9,8,7,5,4,3],
        goog.array.map(store.nodesStats, function(item){ return item.timestamp })
    );

    // delete all from non-existing timestamp
    store.removeNodesStatsStaringFrom(6);

    assertArrayEquals("Stats array should be kept sorted",
        [9,8,7],
        goog.array.map(store.nodesStats, function(item){ return item.timestamp })
    );
};

var testNodesInfo = function() {

    var store = new org.bigdesk.store.Store();
    assertEquals("Array is empty", 0, store.nodesInfo.length);

    store.addNodesInfo(1, {});
    store.addNodesInfo(3, {});
    store.addNodesInfo(5, {});
    store.addNodesInfo(4, {});
    store.addNodesInfo(2, {});

    assertEquals("Info array should have five items", 5, store.nodesInfo.length);
    assertArrayEquals("Info array should be kept sorted",
        [5,4,3,2,1],
        goog.array.map(store.nodesInfo, function(item){ return item.timestamp })
    );

    // delete all from existing timestamp
    store.removeNodesInfosStaringFrom(2);

    assertArrayEquals("Info array should be kept sorted",
        [5,4,3],
        goog.array.map(store.nodesInfo, function(item){ return item.timestamp })
    );

    store.addNodesInfo(7, {});
    store.addNodesInfo(8, {});
    store.addNodesInfo(9, {});

    assertArrayEquals("Info array should be kept sorted",
        [9,8,7,5,4,3],
        goog.array.map(store.nodesInfo, function(item){ return item.timestamp })
    );

    // delete all from non-existing timestamp
    store.removeNodesInfosStaringFrom(6);

    assertArrayEquals("Info array should be kept sorted",
        [9,8,7],
        goog.array.map(store.nodesInfo, function(item){ return item.timestamp })
    );
};

var testClusterStates = function() {

    var store = new org.bigdesk.store.Store();
    assertEquals("Array is empty", 0, store.clusterStates.length);

    store.addClusterState(1, {});
    store.addClusterState(3, {});
    store.addClusterState(5, {});
    store.addClusterState(4, {});
    store.addClusterState(2, {});

    assertEquals("clusterStates array should have five items", 5, store.clusterStates.length);
    assertArrayEquals("Info array should be kept sorted",
        [5,4,3,2,1],
        goog.array.map(store.clusterStates, function(item){ return item.timestamp })
    );

    // delete all from existing timestamp
    store.removeClusterStatesStaringFrom(2);

    assertArrayEquals("clusterStates array should be kept sorted",
        [5,4,3],
        goog.array.map(store.clusterStates, function(item){ return item.timestamp })
    );

    store.addClusterState(7, {});
    store.addClusterState(8, {});
    store.addClusterState(9, {});

    assertArrayEquals("clusterStates array should be kept sorted",
        [9,8,7,5,4,3],
        goog.array.map(store.clusterStates, function(item){ return item.timestamp })
    );

    // delete all from non-existing timestamp
    store.removeClusterStatesStaringFrom(6);

    assertArrayEquals("clusterStates array should be kept sorted",
        [9,8,7],
        goog.array.map(store.clusterStates, function(item){ return item.timestamp })
    );
};