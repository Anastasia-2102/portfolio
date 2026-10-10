const imageUrl = (photo, width, height, brightness, sepia, sat = 0) =>
  "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&bri=" + brightness + "&sat=" + sat + "&sepia=" + sepia

export default imageUrl