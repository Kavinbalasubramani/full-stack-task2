import express from "express";
import cors from "cors";

const app=express();

const courses = [
    { id: 1, name: "Basic Algorithm", lessons: 25, startDate: "27 Jan, 2023", completed: "10/25 (48%)", duration: "14h 38m 56s" },
    { id: 2, name: "Web Development", lessons: 45, startDate: "23 Feb, 2023", completed: "40/45 (97%)", duration: "36h 30m 00s" },
    { id: 3, name: "Basic Data Science", lessons: 37, startDate: "14 Jan, 2023", completed: "9/37 (40%)", duration: "37h 00m 00s" },
    { id: 4, name: "UI/UX Design", lessons: 32, startDate: "19 Feb, 2023", completed: "26/32 (84%)", duration: "16h 40m 50s" },
    { id: 5, name: "Project Management", lessons: 19, startDate: "27 Jan, 2023", completed: "14/19 (89%)", duration: "13h 20m 00s" }
  ];
  

app.get('/courses', (req, res) => {
    res.json(courses);
  });
app.listen(3000,()=>
{
    console.log("kavin")
})