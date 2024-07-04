// itemController.js
const Item = require('../models/itemModel');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    const totalItems = items.length;
    res.json({totalItems,items});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSingleItem = async (req, res) => {
  try {
    const items = await Item.findById(req.params.id);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateItem = async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
      );
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

exports.deleteItem = async (req, res) => {
    try {
        await Item.findOneAndDelete({ _id: req.params.id }); 
      res.json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  
