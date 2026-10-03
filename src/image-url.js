const imageUrl = (photo, width, height, brightness) =>
  photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&bri=" + brightness

export default imageUrl