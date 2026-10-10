const builderUrl = (photo, sat, sepia, blur) =>
  "https://images.unsplash.com/" + photo + "?w=600&h=250&fit=crop&auto=format&sat=" + sat + "&sepia=" + sepia + "&blur=" + blur

export default builderUrl