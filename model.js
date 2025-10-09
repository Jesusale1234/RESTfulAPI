import mongoose from 'mongoose';

// To define the database elements that will be considered
const restaurantSchema = new mongoose.Schema({
  
  // Name of the restaurant.
  name: {
    type: String,
    required: true
  },

  // Type of cuisine.
  category: {
    type: String,
    required: true
  },

  // Location, City.
  location: {
    type: String,
    required: true
  },

  // Rating in a scale from 0 to 5, depending on the customers' evaluation.
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
});

// To export the complete structure to other classes, being references as 'Restaurant'.
export default mongoose.model('Restaurant', restaurantSchema);
