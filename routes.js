import express from 'express';
const router = express.Router();
import Restaurant from '../models/model.js';

//Post Method
router.post('/post', async (req, res) => {
    
    try {
        // Considers all the elements defined in the database schema.
        const data = new Restaurant({
        name: req.body.name,
        category: req.body.category,
        location: req.body.location,
        rating: req.body.rating,
    })

        const savedRestaurant = await data.save();
        res.status(201).json(savedRestaurant);
    }
    
    catch (error) {
        console.error('Saving error:', error.message);
        res.status(400).json({ message: error.message });
    }
})

//Get all restaurants Method
router.get('/getAll', async (req, res) => {

    try{
        const data = await Restaurant.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get method for sorting with an element and a descending or ascending order.
router.get('/sorting', async (req, res) => {

    try{
        const sortelement = req.query.sort || 'name';
        const sortorder = req.query.order === 'desc' ? -1 : 1;

        const data = await Restaurant.find().sort({ [sortelement]: sortorder})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// General Search
router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({ message: 'Please provide a search query.' });
    }

    // To ignore capital letters.
    const regex = new RegExp(query, 'i');

    // Search through the different fields with the $or
    const results = await Restaurant.find({
      $or: [
        { name: regex },
        { category: regex },
        { location: regex }
      ]
    });

    if (results.length === 0) {
      return res.status(404).json({ message: 'No results found.' });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update a single restaurant by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Restaurant.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete a single restaurant by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Restaurant.findByIdAndDelete(id)
        res.send(`Restaurant ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

console.log("Routes.js file correctly loaded ✅");

export default router;