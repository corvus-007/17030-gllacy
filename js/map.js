var map,
    mapMarker;

ymaps.ready(init);

function init() {
  map = new ymaps.Map("contacts-map", {
    center: [59.939327, 30.327901],
    zoom: 16,
    controls: []
  });

  map.behaviors.disable(['scrollZoom']);

  mapMarker = new ymaps.Placemark([59.938657, 30.322982], {
    hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.svg',
    iconImageSize: [79, 139],
    iconImageOffset: [-39, -139],
    iconShadow: true,
    iconShadowLayout: 'default#image',
    iconShadowImageHref: 'img/shadow-map-pin.png',
    iconShadowImageSize: [182, 110],
    iconShadowImageOffset: [0, -110]
  });

  map.geoObjects.add(mapMarker);
}
