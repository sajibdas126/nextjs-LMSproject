'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/data/courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold py-10">
        Choose Our <br />
        <span className="text-[#2eca7f] underline uppercase">Top Courses</span>
      </h1>

      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="border p-4 rounded shadow">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="font-semibold mt-3">{course.title}</h2>
              <p className="text-gray-600">Category: {course.category}</p>
              <div className="flex gap-8 mt-2">
                <p className="text-gray-600">Duration: {course.duration}</p>
                <p className="text-gray-600 flex items-center gap-2">
                  <MdOutlineStarPurple500 /> {course.rating}
                </p>
              </div>

              <Link href={`/courses/${course.id}`}>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
