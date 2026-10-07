const imageUrl = (photo, width, height, brightness, sepia, sat) =>
  photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&bri=" + brightness+ "&sepia=" + sepia + "&sat=" + sat

export default imageUrl