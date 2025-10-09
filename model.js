import mongoose from 'mongoose';


const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String, // tipo de comida, ej. "Italiana", "Mexicana"
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
});

export default mongoose.model('Restaurant', restaurantSchema);
