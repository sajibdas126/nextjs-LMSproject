'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CourseDetails() {
  const params = useParams();          // ✅ get dynamic params
  const id = params.CourseDetails;     // [CourseDetails] folder name

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/data/courses.json')        // public/data/courses.json
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id);
        setCourse(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!course) return <p className="p-10 text-xl">Loading...</p>;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-60 object-cover rounded"
      />
       <h2 className="font-semibold mt-3">{course.title}</h2>
      <h1 className="text-xl  mt-5">{course.description}</h1>
      <p className="text-gray-600 font-bold text-2xl">Instructor: {course.instructor}</p>

      <div className="mt-3 space-y-1 text-lg">
        <p>language: {course.language}</p>
        <p>Duration: {course.requirements}</p>
        <p>requirements: {course.requirements}</p>
        <p>students: {course.students}</p>
      </div>
    </div>
  );
}
