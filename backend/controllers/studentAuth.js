const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const studentModel = require("../models/student_model");

module.exports.registerStudent = async (req,res) => {
    try {
        let {fullName,email,password,role} = req.body;
        let student = await studentModel.findOne({email});
        if(student) return res.status(401).send("Student Already Exists")

        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(password,salt,async (err,hash) =>{
                console.log(password, hash);
                if(err) return res.send(err.message);
                else{
                    let student = await studentModel.create({
                        fullName,
                        email,
                        password: hash
                    });
                    console.log(student);
                    res.send("Student Created");
                }
            });
        })
    } 
    catch (err) {
        console.error(err.message);
        res.send("Something went wrong");
    }
};


module.exports.updateStudent = async (req, res) => {
    try {
      const { id } = req.params; // Get student ID from URL
      const updatedData = req.body; // New values to update
  
      const updatedStudent = await studentModel.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, runValidators: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found.' });
      }
  
      res.status(200).json({ message: 'Student updated successfully.', student: updatedStudent });
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ message: 'Server error while updating student.' });
    }
  };
  


  module.exports.deleteStudent = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedStudent = await studentModel.findByIdAndDelete(id);
  
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found.' });
      }
  
      res.status(200).json({ message: 'Student deleted successfully.', student: deletedStudent });
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ message: 'Server error while deleting student.' });
    }
  };
  
module.exports.partialUpdateStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body; // Only the fields to update
  
      const updatedStudent = await studentModel.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true, runValidators: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found.' });
      }
  
      res.status(200).json({ message: 'Student partially updated.', student: updatedStudent });
    } catch (error) {
      console.error('Error during partial student update:', error);
      res.status(500).json({ message: 'Server error while updating student.' });
    }
  };

  
module.exports.listStudent = async (req, res) => {
    try {
      const students = await studentModel.find();
  
      res.status(200).json({
        message: 'Student list fetched successfully.',
        total: students.length,
        students
      });
    } catch (error) {
      console.error('Error fetching student list:', error);
      res.status(500).json({ message: 'Server error while fetching students.' });
    }
  };

  
module.exports.detailStudent = async (req, res) => {
    try {
      const { id } = req.params;
  
      const student = await studentModel.findById(id);
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found.' });
      }
  
      res.status(200).json({
        message: 'Student details fetched successfully.',
        student
      });
    } catch (error) {
      console.error('Error fetching student details:', error);
      res.status(500).json({ message: 'Server error while fetching student details.' });
    }
  };
  
  
  
  
  
  
  
  
  