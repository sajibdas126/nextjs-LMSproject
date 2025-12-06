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
      <h1 className="text-4xl font-bold mt-5">{course.title}</h1>
      <p className="text-gray-600 text-xl">Category: {course.category}</p>

      <div className="mt-3 space-y-1 text-lg">
        <p>Lessons: {course.lessons}</p>
        <p>Duration: {course.duration}</p>
        <p>Rating: {course.rating}</p>
        <p>Level: {course.level}</p>
      </div>
    </div>
  );
}
