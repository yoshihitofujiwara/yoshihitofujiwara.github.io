"use strict";

var app = app || {};
app.isSamsungBrowser = AMP.UA.indexOf('SamsungBrowser') > -1;
app.isMap = false;

(function () {
  function GoogleMapAPI(mapID, $button) {
    var query = AMP.queryHashMap();
    this.map;
    this.mapID = mapID;
    this.$map = $('#' + this.mapID)[0];
    this.$getButton = $button;
    this.$stampModal = $('#checkIn');
    this.stampId = null;
    this.infoWindow;
    this.makers = [];
    this.place = [{
      name: 'ファミリーマート 四条高倉店',
      lat: 35.003552,
      lng: 135.761257,
      isChecked: false
    }, {
      name: '京都大丸',
      lat: 35.004287,
      lng: 135.762009,
      isChecked: false
    }, {
      name: 'SUINA室町',
      lat: 35.003248,
      lng: 135.758471,
      isChecked: false
    }, {
      name: '天王洲',
      lat: 35.6226616,
      lng: 139.7496457,
      isChecked: false
    }];
    this.zoom = 17;
    this.lat = 35.681236;
    this.lng = 139.767125;
    this.radius = 50;
    this.selfLat = this.lat;
    this.selfLng = this.lng;

    this._init();
  }

  var p = GoogleMapAPI.prototype;

  p._init = function () {
    var self = this;
    $.sequence(function () {
      return self._setupMap();
    }, function () {
      self.infoWindow = new google.maps.InfoWindow();
      return self._getCurrentPosition();
    }, function () {
      self.$getButton.removeClass('disable');
    });
    self.$getButton.on('click', function () {
      self._getCurrentPosition();
    });
    $('#page').on('click', '.check-in', function () {
      var name = $(this).data('name');
      self.stampId = name;

      if (self._isCheckPlace(name)) {
        self.$stampModal.find('.text1').addClass('is_none');
        self.$stampModal.find('.stamp').removeClass('disable');
      }

      self.$stampModal.addClass('open');
    });
    self.$stampModal.on('click', '.close', function () {
      self.$stampModal.removeClass('open');
      self.$stampModal.find('.text1').removeClass('is_none');
      self.$stampModal.find('.stamp').addClass('disable');
    });
    self.$stampModal.on('click', '.stamp', function () {
      console.log(self.stampId);
    });
  };

  p._setupMap = function () {
    var self = this;
    var $def = $.Deferred();
    self.map = new google.maps.Map(self.$map, {
      center: {
        lat: self.lat,
        lng: self.lng
      },
      zoom: self.zoom
    });
    var mapStyle = [{
      "stylers": [{
        "saturation": -100
      }]
    }];
    var mapType = new google.maps.StyledMapType(mapStyle);
    self.map.mapTypes.set('GrayScaleMap', mapType);
    self.map.setMapTypeId('GrayScaleMap');

    for (var key in self.place) {
      var array = self.place[key];
      var pos = {
        lat: array.lat,
        lng: array.lng
      };

      self._addMaker(array.name, pos);
    }

    google.maps.event.addListener(self.map, 'click', function (event) {
      var position = event.latLng;
    });
    $def.resolve();
    return $def.promise();
  };

  p._getCurrentPosition = function () {
    var self = this;

    if (navigator.geolocation) {
      var option = {
        'enableHighAccuracy': true,
        'timeout': 10000,
        'maximumAge': 2000
      };
      navigator.geolocation.getCurrentPosition(function (position) {
        self.selfLat = position.coords.latitude;
        self.selfLng = position.coords.longitude;
        var pos = {
          lat: self.selfLat,
          lng: self.selfLng
        };
        self.map.setCenter(pos);

        self._removeMaker('selfMaker');

        self._addMaker('selfMaker', pos, 'self');

        console.log('Location found.');
        console.log('My Location Lat -> ' + self.selfLat);
        console.log('My Location Lng -> ' + self.selfLng);
        AMP.debug.log('Location found.');
        AMP.debug.log('My Location Lat -> ' + self.selfLat);
        AMP.debug.log('My Location Lng -> ' + self.selfLng);
        AMP.debug.log('緯度・経度の誤差(m) -> ' + position.coords.accuracy);
        AMP.debug.log('方角(度) -> ' + position.coords.heading);
        AMP.debug.log('速度(m/秒) -> ' + position.coords.speed);
      }, function () {
        self._handleLocationError(true, self.infoWindow, self.map.getCenter());
      }, option);
    } else {
      AMP.debug.log('Browser doesn’t support Geolocation');

      self._handleLocationError(false, self.infoWindow, self.map.getCenter());
    }
  };

  p._handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
    var self = this;
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(self.map);
  };

  p._addMaker = function (name, position, type) {
    var self = this;
    var image = 'assets/images/pin_def1.svg';
    var title = name;

    if (type == 'self') {
      image = 'assets/images/pin_self1.svg';
      title = '現在地';
    } else if (type == 'check') {
      image = 'assets/images/pin_check1.svg';
    }

    var marker = new google.maps.Marker({
      position: position,
      icon: image,
      title: title,
      map: self.map
    });
    self.makers.push({
      'name': name,
      'maker': marker
    });
    var infoWindow;
    google.maps.event.addListener(marker, 'click', function (event) {
      if (infoWindow) {
        return;
      }

      var content = self._getInfoContent(marker);

      infoWindow = new google.maps.InfoWindow({
        content: content,
        position: marker.getPosition(),
        pixelOffset: new google.maps.Size(0, -25)
      });
      google.maps.event.addListener(infoWindow, 'closeclick', function (event) {
        infoWindow = null;
      });
      infoWindow.open(self.map);
    });
  };

  p._removeMaker = function (markerName) {
    var self = this;
    var flg = false;
    var markerObject;
    console.log('_removeMaker');

    for (var key in self.makers) {
      if (self.makers[key].name == markerName) {
        flg = true;
        markerObject = self.makers[key].maker;
      }
    }

    if (flg === true) {
      markerObject.setMap(null);
      console.log('Makerを削除');
    }
  };

  p._getDistance = function (marker) {
    console.log('_getDistance');
    var self = this;
    var from = new google.maps.LatLng(self.selfLat, self.selfLng);
    var to = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
    var distance = google.maps.geometry.spherical.computeDistanceBetween(from, to);
    console.log('distance -> ' + distance);
    return distance;
  };

  p._getInfoContent = function (marker) {
    console.log('_getInfoContent');
    var self = this;
    var content = '';
    var isSelf = false;

    if (marker.getTitle() == '現在地') {
      isSelf = true;
    }

    content += '<div class="info">';

    if (isSelf === false) {
      content += '<h3>現在地からの距離</h3>';
      content += '<p>約' + self._getDistance(marker) + 'm</p>';
    }

    content += '<h3 class="mt">この場所の名前</h3>';
    content += '<p>' + marker.getTitle() + '</p>';
    content += '<h3 class="mt">この場所の座標</h3>';
    content += '<dl>';
    content += '<dt>Lat : </dt>';
    content += '<dd>' + marker.getPosition().lat() + '</dd>';
    content += '</dl>';
    content += '<dl>';
    content += '<dt>Lng : </dt>';
    content += '<dd>' + marker.getPosition().lng() + '</dd>';
    content += '</dl>';

    if (isSelf === false) {
      content += '<h3 class="mt">この場所のスタンプ</h3>';
      content += '<p><button class="check-in" data-name="' + marker.getTitle() + '">確認</button></p>';
    }

    content += '</div>';
    return content;
  };

  p._isCheckPlace = function (markerName) {
    var self = this;
    var m;
    var markerObject;

    for (var key in self.makers) {
      if (self.makers[key].name == markerName) {
        markerObject = self.makers[key].maker;
      }
    }

    if (markerObject) {
      m = self._getDistance(markerObject);

      if (m < self.radius) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  app.GoogleMapAPI = GoogleMapAPI;
})();

app.isIos = AMP.isIos();
app.$window = $(window);

(function () {
  function Index() {
    this.$defApi = $.Deferred();
    this.$defApi.promise();
    this.$defReady = $.Deferred();
    this.$defReady.promise();

    this._init();
  }

  ;
  var p = Index.prototype;

  p._init = function () {
    var self = this;
    app.$window.on('resize orientationchange', this.resize.bind(this));
    google.maps.event.addDomListener(window, 'load', function () {
      self.$defApi.resolve();
    });
    self.resize();

    window.onblur = function () {};

    window.onfocus = function () {};

    $.sequence(function () {
      console.log('1');
      return self.$defApi;
    }, function () {
      console.log('2');
      app.googleMapAPI = new app.GoogleMapAPI('map1', $('#myPositon'));
    }, function () {
      $.sequence(function () {}, function () {});
    }, function () {
      return self.$defReady;
    }, function () {
      console.log('読み込み完了');
    });
  };

  p.resize = function () {
    console.log('resize');
  };

  app.Index = Index;
})();

(function () {
  app.index = new app.Index();
  $(function () {});
})();