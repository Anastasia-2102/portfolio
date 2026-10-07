const imageUrl = (photo, width, height, brightness, sepia) =>
  photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&bri=" + brightness+ "&sepia=" + sepia

export default imageUrl