const courseModel = require('../models/course_model');

module.exports.addCourse = async (req, res) => {
  try {
    const {
      name,
      description,
      duration,
      price,
      subjects,
      schedule,
      startDate,
      endDate,
      teachers
    } = req.body;

    if (!name || !description || !duration || !price || !subjects || !schedule || !startDate || !teachers) {
      return res.status(400).json({ message: 'Please provide all required course details.' });
    }

    const newCourse = new courseModel({
      name,
      description,
      duration,
      price,
      subjects,
      schedule,
      startDate,
      endDate,
      teachers
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully.', course: newCourse });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ message: 'Server error while adding course.' });
  }
};

module.exports.updateCourse = async (req, res) => {
    try {
      const { id } = req.params; // Course ID from the route
      const updatedData = req.body; // New data from client
  
      const updatedCourse = await courseModel.findByIdAndUpdate(
        id,
        updatedData,
        { new: true, runValidators: true }
      );
  
      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found.' });
      }
  
      res.status(200).json({ message: 'Course updated successfully.', course: updatedCourse });
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ message: 'Server error while updating course.' });
    }
  };

  module.exports.deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCourse = await courseModel.findByIdAndDelete(id);
  
      if (!deletedCourse) {
        return res.status(404).json({ message: 'Course not found.' });
      }
  
      res.status(200).json({ message: 'Course deleted successfully.', course: deletedCourse });
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ message: 'Server error while deleting course.' });
    }
  };

  module.exports.courseList = async (req, res) => {
    try {
      const courses = await courseModel.find().populate('teachers', 'name email'); // Adjust fields as needed
  
      res.status(200).json({ message: 'Course list fetched successfully.', courses });
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Server error while fetching courses.' });
    }
  };

  
module.exports.partialUpdateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body;
  
      const updatedCourse = await courseModel.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true, runValidators: true }
      );
  
      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found.' });
      }
  
      res.status(200).json({ message: 'Course updated successfully.', course: updatedCourse });
    } catch (error) {
      console.error('Error in partial update:', error);
      res.status(500).json({ message: 'Server error while updating course.' });
    }
  };
  